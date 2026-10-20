import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { inject as injectAnalytics } from '@vercel/analytics';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Vercel Web Analytics: visitors and page views (no cookies). Router navigations are tracked
// automatically. In dev mode events are only logged to the console, not sent.
injectAnalytics({ mode: isDevMode() ? 'development' : 'production' });

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
