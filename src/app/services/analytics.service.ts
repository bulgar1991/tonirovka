import { DOCUMENT, Injectable, inject, isDevMode } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from '../../environments/environment';

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: Gtag;
  }
}

/**
 * Google Analytics 4: visitors and page views.
 *
 * gtag.js only sees the first page load of a single-page app, so its automatic page_view is off
 * and one is sent on every router navigation instead (the SEO resolvers have already set the
 * page title by then). Nothing is loaded in dev mode or when no measurement ID is set.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);

  init(): void {
    const id = environment.gaMeasurementId;
    const win = this.doc.defaultView;
    if (!id || !win || isDevMode()) return;

    const script = this.doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    this.doc.head.appendChild(script);

    win.dataLayer = win.dataLayer || [];
    // gtag.js expects the `arguments` object itself, not an array.
    win.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      win.dataLayer.push(arguments);
    };
    win.gtag('js', new Date());
    win.gtag('config', id, { send_page_view: false });

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() =>
        win.gtag('event', 'page_view', {
          page_location: win.location.href,
          page_title: this.doc.title,
          language: this.doc.documentElement.lang,
        }),
      );
  }
}
