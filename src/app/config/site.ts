// Public address of the website, without a trailing slash. Used for canonical links, hreflang,
// Open Graph URLs and the generated sitemap.xml and robots.txt.
export const SITE_URL = 'https://tonirovka.md';

export const SITE_NAME = 'Tonirovka.md';

// Default image when a page is shared on social media (1200×630), one per language:
// og-ro.jpg, og-ru.jpg, og-en.jpg. Service pages use their own photo instead.
export const SITE_SHARE_IMAGE = {
  path: (lang: string) => `assets/images/seo/og-${lang}.jpg`,
  width: 1200,
  height: 630,
  type: 'image/jpeg',
};

// Square logo for structured data (Google uses it in search results).
export const SITE_ICON = 'assets/icons/app/icon-512.png';

// Business details for the footer, contact page and schema.org markup.
export const BUSINESS = {
  address: {
    street: 'str. Milano 19/1, box 260',
    city: 'Chișinău',
    region: 'Chișinău',
    country: 'MD',
  },
  openingHours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '09:00', closes: '18:00' },
  ] as {
    days: ('Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su')[];
    opens: string;
    closes: string;
  }[],
  priceRange: '$$',
  currency: 'EUR',
  foundedYear: 2003,
  carsDone: 3500,
  warrantyYears: 10,
};

// Exact location of the studio (from its Google Maps listing) - the box number can't be geocoded.
export const GEO = { lat: 47.0397568, lng: 28.7907947 };

// The studio's Google Maps listing (contact page link and schema.org `hasMap`) and the map embed
// centred on it - the contact page draws the logo pin over the centre.
export const MAP_URL = `https://www.google.com/maps/search/tonirovka+md/@${GEO.lat},${GEO.lng},17z`;
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${GEO.lat},${GEO.lng}&z=17&output=embed`;

// Social profiles: shown in the footer and listed in schema.org `sameAs`. Empty = hidden.
export const SOCIAL_LINKS: Record<'instagram' | 'facebook' | 'tiktok', string> = {
  instagram: 'https://www.instagram.com/tonirovka.md/',
  facebook: 'https://www.facebook.com/tonirovka.moldova',
  tiktok: 'https://www.tiktok.com/@tonirovka.md',
};

// Photos of finished work: put files in src/assets/images/works/ and list them here.
export const WORKS: { src: string; car: string; vlt: number }[] = [];
