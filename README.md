# Tonirovka.md — car tinting website

Angular 22 + Tailwind. Three languages: Romanian (default, `/`), Russian (`/ru`), English (`/en`),
each with localized URLs (`/servicii`, `/ru/uslugi`, `/en/services`).

## Commands

```bash
npm start       # dev server, http://localhost:4200
npm run build   # production build + static SEO pages (dist/frontend/browser)
npm run images  # WebP copies of the service photos (also runs before start / build)
npm run lint
```

## Where things live

| What                                                    | File                                                           |
| ------------------------------------------------------- | -------------------------------------------------------------- |
| Domain, name, address, hours, social links, work photos | `src/app/config/site.ts`                                       |
| Phone, email, WhatsApp, Telegram                        | `src/app/config/contact.ts`                                    |
| Services: photos, gallery size, hero effect             | `src/app/config/services.ts`                                   |
| URL slugs per language                                  | `src/app/config/routes.ts`                                     |
| All texts (incl. SEO titles/descriptions)               | `src/app/i18n/ro.ts`, `ru.ts`, `en.ts`                         |
| App icons / share image                                 | `src/assets/icons/app/`, `src/assets/images/seo/og-<lang>.jpg` |
| Service photos (JPG originals)                          | `src/assets/images/services/<id>/`                             |

## Images

Only the original JPGs are in git (`hero.jpg`, `card.jpg`, `1.jpg`, `2.jpg`, …).
`scripts/optimize-images.mjs` (sharp) makes the files the site actually loads: WebP copies, an
800-wide hero for phones, 600-wide gallery thumbnails and a 1200×630 `og.jpg` share image per
service. To change a photo, replace the JPG; the copies are rebuilt on the next start / build.

## SEO

- `seoResolver` / `serviceSeoResolver` set title, description, canonical, hreflang, Open Graph and
  JSON-LD (AutoRepair, WebSite, WebPage, Service, BreadcrumbList, FAQPage) on every navigation.
  Service pages share their own photo (`og.jpg`); other pages use the default share image.
- After `ng build`, `scripts/postbuild.mjs` runs `scripts/seo-pages.ts`, which writes an
  `index.html` per URL with the same tags and the page heading already in the HTML, plus
  `404.html`, `sitemap.xml` (with hreflang and service photos) and `robots.txt`. Service pages
  also preload their header photo (the largest paint).
- The web app manifest is generated per language (`site.webmanifest`, `site-ru.webmanifest`,
  `site-en.webmanifest`); `src/site.webmanifest` is only the dev-server copy. App icons are made
  from the round logo (`src/assets/images/logo/logo.svg`).
- `vercel.json` sets security headers and caching: hashed JS/CSS for a year, `assets/` for a week.
- Elements tests rely on carry a `data-testid` (`page-title`, `booking-form`, `service-card-<id>`, …).
- After changing the domain in `config/site.ts`, add the site to Google Search Console and submit
  `/sitemap.xml`.
