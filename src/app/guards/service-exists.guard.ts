import { CanMatchFn } from '@angular/router';
import { findServiceBySlug, Lang } from '@/config/routes';

// Matches /<services>/:id only for a known service slug in the route's language, so unknown
// slugs fall through to the 404 page.
export const serviceExistsGuard: CanMatchFn = (route, segments) =>
  !!findServiceBySlug(route.data?.['lang'] as Lang, segments[1]?.path);
