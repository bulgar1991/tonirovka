// Runs after `ng build` (see scripts/postbuild.mjs). The app is a plain SPA, so this writes a
// copy of index.html for every page URL with that page's SEO tags already in <head> (title,
// description, canonical, hreflang, Open Graph, JSON-LD) and its heading, intro and links in
// <app-root> until Angular starts. Crawlers and link previews that don't run JavaScript get the
// right content per URL, and Vercel serves each file directly.
// Also writes 404.html (served by Vercel for unknown URLs), sitemap.xml, robots.txt and the web
// app manifest per language (src/site.webmanifest is only the dev-server copy).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { allPages, LANGS, PageRef, pathFor } from '@/config/routes';
import { SERVICE_MEDIA } from '@/config/services';
import { SITE_NAME, SITE_URL } from '@/config/site';
import { DICTS } from '@/i18n';
import {
  absoluteUrl,
  jsonLdText,
  manifestPath,
  metaTags,
  pageSeo,
  webManifest,
} from '@services/seo-data';

const outDir = process.argv[2];
const template = readFileSync(join(outDir, 'index.html'), 'utf8');

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function headTags(ref: PageRef): string {
  const seo = pageSeo(ref);
  const tags = [
    ...metaTags(seo).map(
      ([attr, key, content]) => `<meta ${attr}="${key}" content="${esc(content)}">`,
    ),
    ...seo.ogLocaleAlternates.map((l) => `<meta property="og:locale:alternate" content="${l}">`),
    // Start loading the photo behind the title right away - it is the page's largest paint.
    ...(seo.heroImage
      ? [
          `<link rel="preload" as="image" href="${seo.heroImage.src}" imagesrcset="${seo.heroImage.srcset}" imagesizes="100vw" fetchpriority="high">`,
        ]
      : []),
    ...(seo.url ? [`<link rel="canonical" href="${seo.url}">`] : []),
    ...seo.alternates.map(
      (a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}">`,
    ),
    ...(seo.jsonLd
      ? [`<script type="application/ld+json" id="ld-json">${jsonLdText(seo.jsonLd)}</script>`]
      : []),
  ];
  return tags.join('\n    ');
}

// Text shown in <app-root> until the app boots - the page's own h1 and intro plus the main links.
function bootContent(ref: PageRef): string {
  const t = DICTS[ref.lang];
  const service = ref.serviceId ? t.services[ref.serviceId] : null;
  const [h1, intro] =
    ref.page === 'service' && service
      ? [service.h1, service.intro]
      : (
          {
            home: [`${t.home.title} ${t.home.titleAccent}`, t.home.text],
            services: [t.servicesPage.h1, t.servicesPage.intro],
            gallery: [t.gallery.h1, t.gallery.intro],
            faq: [t.faq.h1, t.faq.intro],
            contacts: [t.contacts.h1, t.contacts.intro],
            notFound: [t.notFound.h1, t.notFound.text],
          } as Record<string, [string, string]>
        )[ref.page];
  const links = (['home', 'services', 'gallery', 'faq', 'contacts'] as const)
    .map((p) => `<a href="${pathFor(ref.lang, p)}">${esc(t.nav[p])}</a>`)
    .join('');
  return `<div class="boot" role="status"><p class="boot__logo">TONIROVKA<b>.MD</b></p><h1>${esc(h1)}</h1><p>${esc(intro)}</p><nav>${links}</nav><span class="boot__spinner" aria-hidden="true"></span></div>`;
}

function render(ref: PageRef): string {
  const seo = pageSeo(ref);
  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${seo.lang}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`)
    .replace(/href="site\.webmanifest"/, `href="${manifestPath(ref.lang)}"`)
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `    ${headTags(ref)}\n  </head>`)
    .replace(/<app-root>[\s\S]*?<\/app-root>/, `<app-root>${bootContent(ref)}</app-root>`);
}

function write(file: string, content: string): void {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

const pages = allPages();
for (const { path, ref } of pages) {
  write(join(outDir, path, 'index.html'), render(ref));
}
write(join(outDir, '404.html'), render({ lang: 'ro', page: 'notFound' }));

// Sitemap with hreflang alternates, so search engines link the language versions together, and
// the photos of each service page for image search.
const today = new Date().toISOString().slice(0, 10);
const urls = pages.map(({ path, ref }) => {
  const page = ref.page as Exclude<PageRef['page'], 'notFound'>;
  const alternates = LANGS.map(
    (lang) =>
      `    <xhtml:link rel="alternate" hreflang="${lang}" href="${absoluteUrl(pathFor(lang, page, ref.serviceId))}"/>`,
  ).join('\n');
  const priority =
    ref.page === 'home' ? '1.0' : ref.page === 'service' || ref.page === 'services' ? '0.8' : '0.6';
  const media = ref.serviceId && ref.page === 'service' ? SERVICE_MEDIA[ref.serviceId] : null;
  const images = media
    ? [media.hero, ...media.gallery.map((p) => p.full)]
        .map((src) => `\n    <image:image><image:loc>${SITE_URL}/${src}</image:loc></image:image>`)
        .join('')
    : '';
  return `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n${alternates}${images}\n  </url>`;
});
write(
  join(outDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`,
);

// The installable-app manifest in each language (name, description, start page, shortcuts).
for (const lang of LANGS) {
  write(join(outDir, manifestPath(lang)), JSON.stringify(webManifest(lang), null, 2) + '\n');
}

write(
  join(outDir, 'robots.txt'),
  `# ${SITE_NAME} - generated by scripts/seo-pages.ts\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

console.log(
  `SEO: ${pages.length} pages + 404.html, sitemap.xml, robots.txt, manifests -> ${outDir}`,
);
