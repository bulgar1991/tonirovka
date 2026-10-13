import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      // Links to a block on a page use ScrollToDirective instead of URL fragments.
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      // Resolved data is set as component inputs (e.g. ServiceDetail's `service`).
      withComponentInputBinding(),
    ),
  ],
};
