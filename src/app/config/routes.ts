export const LANGS = ['ro', 'ru', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ro';

// Open Graph locale per site language.
export const OG_LOCALES: Record<Lang, string> = { ro: 'ro_MD', ru: 'ru_RU', en: 'en_US' };

export type PageKey = 'home' | 'services' | 'service' | 'gallery' | 'faq' | 'contacts';

export const SERVICE_IDS = [
  'tinting',
  'buildings',
  'headlights',
  'wrap',
  'polishing',
  'cleaning',
  'dryFog',
  'headliner',
  'ambient',
  'starlight',
  'aircon',
  'evaMats',
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

// Localized URL slugs: Romanian (default) has no prefix, other languages live under /ru and /en.
export const PAGE_SLUGS: Record<Exclude<PageKey, 'home' | 'service'>, Record<Lang, string>> = {
  services: { ro: 'servicii', ru: 'uslugi', en: 'services' },
  gallery: { ro: 'galerie', ru: 'galereya', en: 'gallery' },
  faq: { ro: 'intrebari-frecvente', ru: 'voprosy', en: 'faq' },
  contacts: { ro: 'contacte', ru: 'kontakty', en: 'contact' },
};

export const SERVICE_SLUGS: Record<ServiceId, Record<Lang, string>> = {
  tinting: { ro: 'tonare-geamuri-auto', ru: 'tonirovka-stekol', en: 'car-window-tinting' },
  buildings: { ro: 'tonare-fatade-cladiri', ru: 'tonirovka-fasadov', en: 'building-window-film' },
  headlights: { ro: 'folie-faruri', ru: 'okleyka-far', en: 'headlight-film' },
  wrap: { ro: 'colantare-caroserie', ru: 'okleyka-kuzova', en: 'car-wrapping' },
  polishing: { ro: 'polish-caroserie', ru: 'polirovka-kuzova', en: 'car-polishing' },
  cleaning: { ro: 'curatare-interior', ru: 'himchistka-salona', en: 'interior-cleaning' },
  dryFog: { ro: 'ceata-uscata', ru: 'suhoy-tuman', en: 'dry-fog' },
  headliner: { ro: 'retapitare-plafon', ru: 'peretyazhka-potolka', en: 'headliner-upholstery' },
  ambient: { ro: 'iluminare-ambientala', ru: 'ambientnaya-podsvetka', en: 'ambient-lighting' },
  starlight: { ro: 'cer-instelat', ru: 'zvezdnoe-nebo', en: 'starlight-headliner' },
  aircon: { ro: 'incarcare-aer-conditionat', ru: 'zapravka-kondicionera', en: 'ac-recharge' },
  evaMats: { ro: 'covorase-eva', ru: 'eva-kovriki', en: 'eva-floor-mats' },
};

export interface PageRef {
  lang: Lang;
  page: PageKey | 'notFound';
  serviceId?: ServiceId;
}

/** Path (without the domain) of a page in a language: '/', '/ru/uslugi', '/en/services/tint-removal'. */
export function pathFor(lang: Lang, page: PageKey, serviceId?: ServiceId): string {
  const parts: string[] = [];
  if (lang !== DEFAULT_LANG) parts.push(lang);
  if (page === 'service') {
    parts.push(PAGE_SLUGS.services[lang], SERVICE_SLUGS[serviceId ?? 'tinting'][lang]);
  } else if (page !== 'home') {
    parts.push(PAGE_SLUGS[page][lang]);
  }
  return '/' + parts.join('/');
}

/** The language's prefix for the layout route: '' for Romanian, 'ru' / 'en' for the others. */
export function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : lang;
}

export function findServiceBySlug(
  lang: Lang,
  slug: string | null | undefined,
): ServiceId | undefined {
  return SERVICE_IDS.find((id) => SERVICE_SLUGS[id][lang] === slug);
}

/** Every indexable page with its path - used at build time for the static HTML and the sitemap. */
export function allPages(): { path: string; ref: PageRef }[] {
  const pages: { path: string; ref: PageRef }[] = [];
  for (const lang of LANGS) {
    for (const page of ['home', 'services', 'gallery', 'faq', 'contacts'] as const) {
      pages.push({ path: pathFor(lang, page), ref: { lang, page } });
    }
    for (const serviceId of SERVICE_IDS) {
      pages.push({
        path: pathFor(lang, 'service', serviceId),
        ref: { lang, page: 'service', serviceId },
      });
    }
  }
  return pages;
}
