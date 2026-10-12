import { CONTACT_EMAIL, CONTACT_PHONE_HREF } from '@/config/contact';
import { DEFAULT_LANG, Lang, LANGS, OG_LOCALES, PageRef, pathFor } from '@/config/routes';
import {
  BUSINESS,
  GEO,
  MAP_URL,
  SITE_ICON,
  SITE_NAME,
  SITE_SHARE_IMAGE,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/config/site';
import { SERVICE_MEDIA } from '@/config/services';
import { DICTS } from '@/i18n';

// Plain functions (no Angular) that describe a page's SEO tags. Used by SeoService in the browser
// and by scripts/seo-pages.ts, which writes them into a static index.html per URL at build time.

/** How many FAQ items the home page shows (the FAQPage markup must match the visible content). */
export const HOME_FAQ_COUNT = 5;

export const shareImageUrl = (lang: string) => `${SITE_URL}/${SITE_SHARE_IMAGE.path(lang)}`;

export type JsonLd = Record<string, unknown>;

/** The picture shown when a page is shared on social media. */
export interface ShareImage {
  url: string;
  width: number;
  height: number;
  type: string;
  alt: string;
}

export interface PageSeo {
  lang: string;
  title: string;
  description: string;
  robots: string;
  /** Absolute canonical URL; empty for pages that must not be indexed (404). */
  url: string;
  alternates: { hreflang: string; href: string }[];
  ogLocale: string;
  ogLocaleAlternates: string[];
  image: ShareImage;
  /** Photo at the top of the page, preloaded as the largest paint (service pages). */
  heroImage: { src: string; srcset: string } | null;
  jsonLd: JsonLd | null;
}

export function absoluteUrl(path: string): string {
  return SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));
}

export function pageSeo(ref: PageRef): PageSeo {
  const t = DICTS[ref.lang];
  const service = ref.page === 'service' && ref.serviceId ? t.services[ref.serviceId] : null;
  const media = service ? SERVICE_MEDIA[ref.serviceId!] : null;
  const seo = service ? service.seo : t.seo[ref.page as keyof typeof t.seo];
  const indexable = ref.page !== 'notFound';
  const page = ref.page as Exclude<PageRef['page'], 'notFound'>;
  const url = indexable ? absoluteUrl(pathFor(ref.lang, page, ref.serviceId)) : '';

  const result: PageSeo = {
    lang: ref.lang,
    title: seo.title,
    description: seo.description,
    robots: indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow',
    url,
    alternates: indexable
      ? [
          ...LANGS.map((lang) => ({
            hreflang: lang,
            href: absoluteUrl(pathFor(lang, page, ref.serviceId)),
          })),
          { hreflang: 'x-default', href: absoluteUrl(pathFor(DEFAULT_LANG, page, ref.serviceId)) },
        ]
      : [],
    ogLocale: OG_LOCALES[ref.lang],
    ogLocaleAlternates: LANGS.filter((lang) => lang !== ref.lang).map((lang) => OG_LOCALES[lang]),
    image: media
      ? {
          url: `${SITE_URL}/${media.og}`,
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: service!.h1,
        }
      : {
          url: shareImageUrl(ref.lang),
          width: SITE_SHARE_IMAGE.width,
          height: SITE_SHARE_IMAGE.height,
          type: SITE_SHARE_IMAGE.type,
          alt: `${SITE_NAME} — ${t.common.tagline}`,
        },
    heroImage: media
      ? { src: media.hero, srcset: `${media.heroSmall} 800w, ${media.hero} 1600w` }
      : null,
    jsonLd: null,
  };
  if (indexable) result.jsonLd = buildJsonLd(ref, result);
  return result;
}

/** Meta tags as [attribute, key, content] - the same list in the browser and in the static HTML. */
export function metaTags(seo: PageSeo): ['name' | 'property', string, string][] {
  return [
    ['name', 'description', seo.description],
    ['name', 'robots', seo.robots],
    ['property', 'og:type', 'website'],
    ['property', 'og:site_name', SITE_NAME],
    ['property', 'og:title', seo.title],
    ['property', 'og:description', seo.description],
    ['property', 'og:url', seo.url || SITE_URL + '/'],
    ['property', 'og:image', seo.image.url],
    ['property', 'og:image:secure_url', seo.image.url],
    ['property', 'og:image:type', seo.image.type],
    ['property', 'og:image:width', String(seo.image.width)],
    ['property', 'og:image:height', String(seo.image.height)],
    ['property', 'og:image:alt', seo.image.alt],
    ['property', 'og:locale', seo.ogLocale],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', seo.title],
    ['name', 'twitter:description', seo.description],
    ['name', 'twitter:image', seo.image.url],
    ['name', 'twitter:image:alt', seo.image.alt],
    // Local search: where the studio is.
    ['name', 'geo.region', `${BUSINESS.address.country}-CU`],
    ['name', 'geo.placename', BUSINESS.address.city],
    ['name', 'geo.position', `${GEO.lat};${GEO.lng}`],
    ['name', 'ICBM', `${GEO.lat}, ${GEO.lng}`],
  ];
}

/** Web app manifest per language: site.webmanifest (Romanian), site-ru / site-en.webmanifest. */
export function manifestPath(lang: Lang): string {
  return lang === DEFAULT_LANG ? 'site.webmanifest' : `site-${lang}.webmanifest`;
}

export function webManifest(lang: Lang): Record<string, unknown> {
  const t = DICTS[lang];
  const icon = (src: string, sizes: string, type = 'image/png', purpose = 'any') => ({
    src: `/assets/icons/app/${src}`,
    sizes,
    type,
    purpose,
  });
  const home = pathFor(lang, 'home');
  return {
    id: home,
    name: `${SITE_NAME} — ${t.common.tagline}`,
    short_name: SITE_NAME,
    description: t.seo.home.description,
    lang,
    dir: 'ltr',
    start_url: home,
    scope: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    categories: ['auto', 'business', 'lifestyle'],
    icons: [
      icon('icon-192.png', '192x192'),
      icon('icon-512.png', '512x512'),
      icon('icon-maskable-512.png', '512x512', 'image/png', 'maskable'),
      icon('icon.svg', 'any', 'image/svg+xml'),
    ],
    shortcuts: [
      { name: t.nav.services, url: pathFor(lang, 'services') },
      { name: t.nav.book, url: pathFor(lang, 'contacts') },
      { name: t.nav.gallery, url: pathFor(lang, 'gallery') },
    ].map((s) => ({ ...s, icons: [icon('icon-192.png', '192x192')] })),
  };
}

export function jsonLdText(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

const DAY_NAMES: Record<string, string> = {
  Mo: 'Monday',
  Tu: 'Tuesday',
  We: 'Wednesday',
  Th: 'Thursday',
  Fr: 'Friday',
  Sa: 'Saturday',
  Su: 'Sunday',
};

const PAGE_TYPES: Partial<Record<PageRef['page'], string>> = {
  services: 'CollectionPage',
  gallery: 'CollectionPage',
  faq: 'FAQPage',
  contacts: 'ContactPage',
};

function buildJsonLd(ref: PageRef, seo: PageSeo): JsonLd {
  const t = DICTS[ref.lang];
  const url = seo.url;
  const businessId = `${SITE_URL}/#business`;
  const homeUrl = absoluteUrl(pathFor(ref.lang, 'home'));

  const business: JsonLd = {
    '@type': 'AutoRepair',
    '@id': businessId,
    name: SITE_NAME,
    description: t.footer.about,
    url: homeUrl,
    image: shareImageUrl(ref.lang),
    logo: `${SITE_URL}/${SITE_ICON}`,
    telephone: CONTACT_PHONE_HREF.replace('tel:', ''),
    email: CONTACT_EMAIL,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currency,
    foundingDate: String(BUSINESS.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    hasMap: MAP_URL,
    areaServed: BUSINESS.address.city,
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => `https://schema.org/${DAY_NAMES[d]}`),
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(SOCIAL_LINKS).filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.nav.services,
      itemListElement: Object.entries(t.services).map(([id, s]) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: absoluteUrl(pathFor(ref.lang, 'service', id as never)),
        },
        ...(s.priceFrom !== null && {
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: s.priceFrom,
            priceCurrency: BUSINESS.currency,
          },
        }),
      })),
    },
  };

  const graph: JsonLd[] = [
    business,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL + '/',
      name: SITE_NAME,
      inLanguage: [...LANGS],
      publisher: { '@id': businessId },
    },
  ];

  // The page itself; the FAQ page's questions are added to this node below.
  const webPage: JsonLd = {
    '@type': PAGE_TYPES[ref.page] ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: seo.title,
    description: seo.description,
    inLanguage: ref.lang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': businessId },
    primaryImageOfPage: { '@type': 'ImageObject', url: seo.image.url },
    ...(ref.page !== 'home' && { breadcrumb: { '@id': `${url}#breadcrumb` } }),
  };
  graph.push(webPage);

  if (ref.page !== 'home') {
    const crumbs: { name: string; url: string }[] = [{ name: t.common.home, url: homeUrl }];
    if (ref.page === 'service') {
      crumbs.push({ name: t.nav.services, url: absoluteUrl(pathFor(ref.lang, 'services')) });
      crumbs.push({ name: t.services[ref.serviceId!].name, url });
    } else {
      crumbs.push({ name: t.nav[ref.page as keyof typeof t.nav], url });
    }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    });
  }

  let faq: { q: string; a: string }[] = [];
  if (ref.page === 'service' && ref.serviceId) {
    const s = t.services[ref.serviceId];
    const media = SERVICE_MEDIA[ref.serviceId];
    graph.push({
      '@type': 'Service',
      name: s.name,
      description: s.seo.description,
      serviceType: s.name,
      url,
      image: [media.hero, ...media.gallery.map((p) => p.full)].map((src) => `${SITE_URL}/${src}`),
      provider: { '@id': businessId },
      areaServed: BUSINESS.address.city,
      ...(s.priceFrom !== null && {
        offers: { '@type': 'Offer', price: s.priceFrom, priceCurrency: BUSINESS.currency },
      }),
    });
    faq = s.faq;
  } else if (ref.page === 'faq') {
    faq = t.faq.items;
  } else if (ref.page === 'home') {
    faq = t.faq.items.slice(0, HOME_FAQ_COUNT);
  }

  if (faq.length) {
    const mainEntity = faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    }));
    if (ref.page === 'faq') webPage['mainEntity'] = mainEntity;
    else graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
