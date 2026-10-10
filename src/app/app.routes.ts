import { Routes } from '@angular/router';
import { DEFAULT_LANG, Lang, LANGS, langPrefix, PAGE_SLUGS, PageRef } from '@/config/routes';
import { serviceExistsGuard } from '@guards/service-exists.guard';
import { seoResolver } from '@resolvers/seo.resolver';
import { serviceSeoResolver } from '@resolvers/service-seo.resolver';

// Every language has the same pages under its own prefix and localized slugs
// (see PAGE_SLUGS in config/routes.ts): /servicii, /ru/uslugi, /en/services.
// `data.page` tells seoResolver which language and page this is; it sets the language and the
// SEO tags (title, description, canonical, hreflang, social-media tags, JSON-LD).
const notFound = () =>
  import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent);

function pageRoutes(lang: Lang): Routes {
  const page = (key: PageRef['page']) => ({ page: { lang, page: key } satisfies PageRef });
  return [
    {
      path: '',
      loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      resolve: { seo: seoResolver },
      data: page('home'),
    },
    {
      path: PAGE_SLUGS.services[lang],
      loadComponent: () =>
        import('./pages/services/services.component').then((m) => m.ServicesComponent),
      resolve: { seo: seoResolver },
      data: page('services'),
    },
    {
      path: `${PAGE_SLUGS.services[lang]}/:id`,
      canMatch: [serviceExistsGuard],
      loadComponent: () =>
        import('./pages/service-detail/service-detail.component').then(
          (m) => m.ServiceDetailComponent,
        ),
      // Bound to the component's `service` input (withComponentInputBinding in app.config.ts).
      resolve: { service: serviceSeoResolver },
      data: { lang },
    },
    {
      path: PAGE_SLUGS.prices[lang],
      loadComponent: () => import('./pages/prices/prices.component').then((m) => m.PricesComponent),
      resolve: { seo: seoResolver },
      data: page('prices'),
    },
    {
      path: PAGE_SLUGS.gallery[lang],
      loadComponent: () =>
        import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
      resolve: { seo: seoResolver },
      data: page('gallery'),
    },
    {
      path: PAGE_SLUGS.faq[lang],
      loadComponent: () => import('./pages/faq/faq.component').then((m) => m.FaqComponent),
      resolve: { seo: seoResolver },
      data: page('faq'),
    },
    {
      path: PAGE_SLUGS.contacts[lang],
      loadComponent: () =>
        import('./pages/contact/contact.component').then((m) => m.ContactComponent),
      resolve: { seo: seoResolver },
      data: page('contacts'),
    },
    {
      // /404 is prerendered and copied to /404.html, which Vercel serves for unknown URLs
      // (see scripts/postbuild.mjs). Romanian also catches every unknown URL in the browser.
      path: '404',
      loadComponent: notFound,
      resolve: { seo: seoResolver },
      data: page('notFound'),
    },
    ...(lang === DEFAULT_LANG
      ? [
          {
            path: '**',
            loadComponent: notFound,
            resolve: { seo: seoResolver },
            data: page('notFound'),
          },
        ]
      : []),
  ];
}

// Romanian (default) has no prefix, so it goes last - its '' would otherwise catch /ru and /en.
export const routes: Routes = [...LANGS.filter((lang) => lang !== DEFAULT_LANG), DEFAULT_LANG].map(
  (lang) => ({
    path: langPrefix(lang),
    loadComponent: () =>
      import('@components/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: pageRoutes(lang),
  }),
);
