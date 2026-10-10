import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { PageRef } from '@/config/routes';
import { LanguageService } from '@services/language.service';
import { SeoService } from '@services/seo.service';

// Applies the route's `data.page` ({ lang, page }): switches the site language and sets the
// title, description, canonical, hreflang, social-media tags and JSON-LD. Runs before the page
// renders, both while prerendering and in the browser.
export const seoResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot): void => {
  const page = route.data['page'] as PageRef;
  inject(LanguageService).ref.set(page);
  inject(SeoService).update(page);
};
