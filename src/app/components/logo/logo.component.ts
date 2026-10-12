import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LanguageService } from '@services/language.service';

/**
 * Tonirovka.md logo: the round badge (red car, wordmark, "since 2003" -
 * src/assets/images/logo/logo.svg, also as logo.png) next to the TONIROVKA.MD wordmark.
 */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex items-center gap-2.5' },
  template: `
    <img
      src="assets/images/logo/logo.svg"
      alt=""
      width="48"
      height="48"
      class="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
    />
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
