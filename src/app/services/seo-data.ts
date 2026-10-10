import { CONTACT_EMAIL, CONTACT_PHONE_HREF } from '@/config/contact';
import { DEFAULT_LANG, LANGS, OG_LOCALES, PageRef, pathFor } from '@/config/routes';
import {
  BUSINESS,
  SITE_ICON,
  SITE_NAME,
  SITE_SHARE_IMAGE,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/config/site';
import { DICTS } from '@/i18n';

// Plain functions (no Angular) that describe a page's SEO tags. Used by SeoService in the browser
// and by scripts/seo-pages.ts, which writes them into a static index.html per URL at build time.

/** How many FAQ items the home page shows (the FAQPage markup must match the visible content). */
export const HOME_FAQ_COUNT = 5;

export const SHARE_IMAGE_URL = `${SITE_URL}/${SITE_SHARE_IMAGE.path}`;

export type JsonLd = Record<string, unknown>;

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
  jsonLd: JsonLd | null;
}

export function absoluteUrl(path: string): string {
  return SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));
}

export function pageSeo(ref: PageRef): PageSeo {
  const t = DICTS[ref.lang];
  const service = ref.page === 'service' && ref.serviceId ? t.services[ref.serviceId] : null;
  const seo = service ? service.seo : t.seo[ref.page as keyof typeof t.seo];
  const indexable = ref.page !== 'notFound';
  const page = ref.page as Exclude<PageRef['page'], 'notFound'>;
  const url = indexable ? absoluteUrl(pathFor(ref.lang, page, ref.serviceId)) : '';

  return {
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
    jsonLd: indexable ? buildJsonLd(ref, url) : null,
  };
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
    ['property', 'og:image', SHARE_IMAGE_URL],
    ['property', 'og:image:type', SITE_SHARE_IMAGE.type],
    ['property', 'og:image:width', String(SITE_SHARE_IMAGE.width)],
    ['property', 'og:image:height', String(SITE_SHARE_IMAGE.height)],
    ['property', 'og:locale', seo.ogLocale],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', seo.title],
    ['name', 'twitter:description', seo.description],
    ['name', 'twitter:image', SHARE_IMAGE_URL],
  ];
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

function buildJsonLd(ref: PageRef, url: string): JsonLd {
  const t = DICTS[ref.lang];
  const businessId = `${SITE_URL}/#business`;
  const homeUrl = absoluteUrl(pathFor(ref.lang, 'home'));

  const business: JsonLd = {
    '@type': 'AutoRepair',
    '@id': businessId,
    name: SITE_NAME,
    description: t.footer.about,
    url: homeUrl,
    image: SHARE_IMAGE_URL,
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
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
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
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: s.priceFrom,
          priceCurrency: BUSINESS.currency,
        },
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
    graph.push({
      '@type': 'Service',
      name: s.name,
      description: s.seo.description,
      serviceType: s.name,
      url,
      provider: { '@id': businessId },
      areaServed: BUSINESS.address.city,
      offers: { '@type': 'Offer', price: s.priceFrom, priceCurrency: BUSINESS.currency },
    });
    faq = s.faq;
  } else if (ref.page === 'faq') {
    faq = t.faq.items;
  } else if (ref.page === 'home') {
    faq = t.faq.items.slice(0, HOME_FAQ_COUNT);
  }

  if (faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
