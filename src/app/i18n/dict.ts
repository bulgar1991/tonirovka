import { FilmId, GlassFilm } from '@/config/films';
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
  /** Starting price in euros; null = price on request. */
  priceFrom: number | null;
  /** What the price is for, shown after it, e.g. "per panel". */
  priceUnit?: string;
  faq: { q: string; a: string }[];
  /** Replaces the general price note under the benefits (which talks about car models). */
  priceNote?: string;
}

export interface Dict {
  langName: string;
  nav: Record<Exclude<PageKey, 'service'>, string> & { book: string; menu: string; close: string };
  common: {
    from: string;
    onRequest: string;
    call: string;
    bookNow: string;
    learnMore: string;
    allServices: string;
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
    stats: { years: string; cars: string };
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
  };
  tint: {
    label: string;
    hint: string;
    levels: Record<number, string>;
  };
  /** Before / after slider on the building film page. */
  glass: {
    title: string;
    text: string;
    label: string;
    hint: string;
    before: string;
    alt: string;
    films: Record<GlassFilm, { name: string; text: string }>;
  };
  films: {
    names: Record<FilmId, string>;
    texts: Record<FilmId, string>;
    rows: { label: string; values: [string, string] }[];
    popular: string;
  };
  services: Record<ServiceId, ServiceContent>;
  servicesPage: { h1: string; intro: string };
  service: {
    benefitsTitle: string;
    faqTitle: string;
    otherTitle: string;
    priceNote: string;
    galleryTitle: string;
    photo: string;
    prev: string;
    next: string;
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
    mapOpen: string;
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
    send: string;
    sending: string;
    sentTitle: string;
    sent: string;
    again: string;
    nameError: string;
    phoneError: string;
    commentPlaceholder: string;
    error: string;
    orMessenger: string;
    /** Email subject of a request (the email always uses the Romanian labels). */
    subject: string;
    /** "Send via" + messenger name, for the icon buttons. */
    sendVia: string;
    note: string;
    greeting: string;
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
