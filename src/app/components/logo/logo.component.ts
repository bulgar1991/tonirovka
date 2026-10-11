import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LanguageService } from '@services/language.service';

/**
 * Tonirovka.md logo: a red tile with a car side window (rear part tinted darker than the front)
 * and the TONIROVKA.MD wordmark. The same mark is used for the app icons (src/assets/icons/app).
 */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex items-center gap-2.5' },
  template: `
    <svg viewBox="0 0 40 40" class="h-9 w-9 shrink-0 sm:h-10 sm:w-10" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#e11d2a" />
      <path d="M6.5 25.5 L12.5 15.2 C13.4 13.7 15 12.8 16.8 12.8 H20 V25.5 Z" fill="#050505" />
      <path
        d="M22.4 12.8 H26.6 C28.3 12.8 29.8 13.7 30.6 15.2 L34.5 25.5 H22.4 Z"
        fill="#050505"
        opacity="0.45"
      />
      <path
        d="M14.5 24 L19 15.5"
        stroke="#fff"
        stroke-opacity="0.35"
        stroke-width="1.6"
        stroke-linecap="round"
      />
      <path d="M5 29.5 H35" stroke="#050505" stroke-width="2.4" stroke-linecap="round" />
    </svg>
    <span class="flex flex-col">
      <span
        class="font-display text-base font-extrabold leading-none tracking-tight text-white sm:text-lg"
      >
        TONIROVKA<span class="text-brand-500">.MD</span>
      </span>
      @if (tagline()) {
        <span
          class="mt-1.5 text-[9px] font-bold uppercase leading-none tracking-[0.3em] text-ink-400"
        >
          {{ i18n.t().common.tagline }}
        </span>
      }
    </span>
  `,
})
export class LogoComponent {
  protected readonly i18n = inject(LanguageService);
  // Small "car tint studio" line under the wordmark.
  tagline = input(false);
}
