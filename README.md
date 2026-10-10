# BlackTint — car tinting website

Angular 22 + Tailwind. Three languages: Romanian (default, `/`), Russian (`/ru`), English (`/en`),
each with localized URLs (`/servicii`, `/ru/uslugi`, `/en/services`).

## Commands

```bash
npm start       # dev server, http://localhost:4200
npm run build   # production build + static SEO pages (dist/frontend/browser)
npm run lint
```

## Where things live

| What | File |
| --- | --- |
| Domain, name, address, hours, social links, work photos | `src/app/config/site.ts` |
| Phone, email, WhatsApp, Telegram | `src/app/config/contact.ts` |
| Price calculator | `src/app/config/pricing.ts` |
| URL slugs per language | `src/app/config/routes.ts` |
| All texts (incl. SEO titles/descriptions) | `src/app/i18n/ro.ts`, `ru.ts`, `en.ts` |
| App icons / share image | `src/assets/icons/app/`, `src/assets/images/seo/og-image.png` |

## SEO

- `seoResolver` / `serviceSeoResolver` set title, description, canonical, hreflang, Open Graph and
  JSON-LD (AutoRepair, Service, BreadcrumbList, FAQPage) on every navigation.
- After `ng build`, `scripts/postbuild.mjs` runs `scripts/seo-pages.ts`, which writes an
  `index.html` per URL with the same tags and the page heading already in the HTML, plus
  `404.html`, `sitemap.xml` (with hreflang) and `robots.txt`.
- After changing the domain in `config/site.ts`, add the site to Google Search Console and submit
  `/sitemap.xml`.
