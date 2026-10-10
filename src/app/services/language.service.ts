import { computed, Injectable, signal } from '@angular/core';
import { DICTS } from '@/i18n';
import { DEFAULT_LANG, Lang, PageKey, pathFor, PageRef, ServiceId } from '@/config/routes';

const NUMBER_LOCALES: Record<Lang, string> = { ro: 'ro-RO', ru: 'ru-RU', en: 'en-US' };

/** Current site language (taken from the URL by the route resolvers) and its texts. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly ref = signal<PageRef>({ lang: DEFAULT_LANG, page: 'home' });
  readonly lang = computed(() => this.ref().lang);
  readonly t = computed(() => DICTS[this.lang()]);

  link(page: PageKey, serviceId?: ServiceId): string {
    return pathFor(this.lang(), page, serviceId);
  }

  /** The current page in another language - for the language switcher. */
  linkIn(lang: Lang): string {
    const { page, serviceId } = this.ref();
    return pathFor(lang, page === 'notFound' ? 'home' : page, serviceId);
  }

  money(value: number): string {
    const formatted = new Intl.NumberFormat(NUMBER_LOCALES[this.lang()]).format(value);
    return `${formatted} ${this.t().common.currency}`;
  }
}
