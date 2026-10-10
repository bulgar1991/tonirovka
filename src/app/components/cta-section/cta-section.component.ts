import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@components/icon/icon.component';
import { CONTACT_PHONE, CONTACT_PHONE_HREF, WHATSAPP_URL } from '@/config/contact';
import { LanguageService } from '@services/language.service';

/** Red call-to-action band at the bottom of pages. */
@Component({
  imports: [RouterLink, IconComponent],
  selector: 'app-cta-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @let t = i18n.t();
    <section class="section">
      <div class="container-site">
        <div
          class="relative overflow-hidden rounded-3xl border border-brand-600/50 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 px-6 py-12 sm:px-12 sm:py-16"
        >
          <div class="grid-lines pointer-events-none absolute inset-0 opacity-60"></div>
          <div
            class="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
          ></div>
          <div class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div class="max-w-xl">
              <h2 class="text-2xl font-bold leading-tight sm:text-4xl">{{ t.home.ctaTitle }}</h2>
              <p class="mt-3 text-white/75">{{ t.home.ctaText }}</p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row">
              <a
                [routerLink]="i18n.link('contacts')"
                fragment="booking"
                class="btn bg-white text-ink-950 hover:bg-ink-300"
              >
                {{ t.common.bookNow }}<app-icon name="arrow" [size]="16" />
              </a>
              <a
                [href]="whatsappUrl"
                target="_blank"
                rel="noopener"
                class="btn border border-white/40 text-white hover:bg-white/10"
              >
                <app-icon name="chat" [size]="18" />WhatsApp
              </a>
              <a [href]="phoneHref" class="btn border border-white/40 text-white hover:bg-white/10">
                <app-icon name="phone" [size]="18" />{{ phone }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaSectionComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly phone = CONTACT_PHONE;
  protected readonly phoneHref = CONTACT_PHONE_HREF;
  protected readonly whatsappUrl = WHATSAPP_URL;
}
