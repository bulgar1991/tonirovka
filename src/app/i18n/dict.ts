import { BodyId, FilmId, ZoneId } from '@/config/pricing';
import { PageKey, ServiceId } from '@/config/routes';

export interface Seo {
  title: string;
  description: string;
}

export interface ServiceContent {
  name: string;
  short: string;
  seo: Seo;
  h1: string;
  intro: string;
  body: string[];
  benefits: string[];
  duration: string;
  priceFrom: number;
  faq: { q: string; a: string }[];
}

export interface Dict {
  langName: string;
  nav: Record<Exclude<PageKey, 'service'>, string> & { book: string; menu: string; close: string };
  common: {
    currency: string;
    from: string;
    call: string;
    bookNow: string;
    learnMore: string;
    calcPrice: string;
    allServices: string;
    duration: string;
    skipToContent: string;
    language: string;
    writeUs: string;
    home: string;
    backToTop: string;
    breadcrumb: string;
    tagline: string;
  };
  days: Record<'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su', string>;
  seo: Record<Exclude<PageKey, 'service'> | 'notFound', Seo>;
  home: {
    badge: string;
    title: string;
    titleAccent: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { years: string; cars: string; warranty: string };
    tintTitle: string;
    tintText: string;
    servicesTitle: string;
    servicesText: string;
    whyTitle: string;
    whyText: string;
    why: { icon: string; title: string; text: string }[];
    processTitle: string;
    process: { title: string; text: string }[];
    filmsTitle: string;
    filmsText: string;
    faqTitle: string;
    ctaTitle: string;
    ctaText: string;
  };
  tint: {
    label: string;
    hint: string;
    levels: Record<number, string>;
  };
  films: {
    names: Record<FilmId, string>;
    texts: Record<FilmId, string>;
    rows: { label: string; values: [string, string, string] }[];
    popular: string;
  };
  services: Record<ServiceId, ServiceContent>;
  servicesPage: { h1: string; intro: string };
  service: { benefitsTitle: string; faqTitle: string; otherTitle: string; priceNote: string };
  prices: {
    h1: string;
    intro: string;
    calcTitle: string;
    body: string;
    film: string;
    zones: string;
    bodies: Record<BodyId, string>;
    zoneNames: Record<ZoneId, string>;
    total: string;
    note: string;
    tableTitle: string;
    book: string;
    message: string;
  };
  gallery: {
    h1: string;
    intro: string;
    levelsTitle: string;
    levelsText: string;
    worksTitle: string;
    worksEmpty: string;
    follow: string;
  };
  faq: { h1: string; intro: string; items: { q: string; a: string }[] };
  contacts: {
    h1: string;
    intro: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    closed: string;
    mapTitle: string;
  };
  booking: {
    title: string;
    text: string;
    name: string;
    phone: string;
    car: string;
    carPlaceholder: string;
    service: string;
    date: string;
    comment: string;
    sendWhatsapp: string;
    sendTelegram: string;
    note: string;
    greeting: string;
    required: string;
    copied: string;
  };
  notFound: { h1: string; text: string; back: string };
  footer: {
    about: string;
    rights: string;
    legal: string;
    navTitle: string;
    servicesTitle: string;
    contactsTitle: string;
  };
}
