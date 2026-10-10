import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageRef } from '@/config/routes';
import { jsonLdText, metaTags, pageSeo } from './seo-data';

export { HOME_FAQ_COUNT } from './seo-data';

/**
 * Title, description, canonical, hreflang, Open Graph and JSON-LD for the current page.
 * The same tags are written into each page's static HTML at build time (scripts/seo-pages.ts),
 * so crawlers that don't run JavaScript see them too; this keeps them right while navigating.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  update(ref: PageRef): void {
    const seo = pageSeo(ref);
    const head = this.doc.head;

    this.doc.documentElement.lang = seo.lang;
    this.title.setTitle(seo.title);

    for (const [attr, key, content] of metaTags(seo)) {
      this.meta.updateTag({ [attr]: key, content }, `${attr}="${key}"`);
    }
    this.meta.getTags('property="og:locale:alternate"').forEach((tag) => tag.remove());
    for (const locale of seo.ogLocaleAlternates) {
      this.meta.addTag({ property: 'og:locale:alternate', content: locale }, true);
    }

    head
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
    if (seo.url) this.addLink({ rel: 'canonical', href: seo.url });
    for (const alt of seo.alternates) {
      this.addLink({ rel: 'alternate', hreflang: alt.hreflang, href: alt.href });
    }

    let script = head.querySelector<HTMLScriptElement>('script#ld-json');
    if (!seo.jsonLd) {
      script?.remove();
      return;
    }
    if (!script) {
      script = this.doc.createElement('script');
      script.id = 'ld-json';
      script.type = 'application/ld+json';
      head.appendChild(script);
    }
    script.textContent = jsonLdText(seo.jsonLd);
  }

  private addLink(attrs: Record<string, string>): void {
    const link = this.doc.createElement('link');
    Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
    this.doc.head.appendChild(link);
  }
}
