import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { findServiceBySlug, Lang, PageRef, ServiceId } from '@/config/routes';
import { LanguageService } from '@services/language.service';
import { SeoService } from '@services/seo.service';

// Finds the service for /<services>/:id and sets its SEO tags. serviceExistsGuard has already
// checked that the slug exists in this language.
export const serviceSeoResolver: ResolveFn<ServiceId> = (
  route: ActivatedRouteSnapshot,
): ServiceId => {
  const lang = route.data['lang'] as Lang;
  const serviceId = findServiceBySlug(lang, route.paramMap.get('id'))!;
  const page: PageRef = { lang, page: 'service', serviceId };
  inject(LanguageService).ref.set(page);
  inject(SeoService).update(page);
  return serviceId;
};
