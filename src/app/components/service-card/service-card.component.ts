import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@components/icon/icon.component';
import { ServiceId } from '@/config/routes';
import { LanguageService } from '@services/language.service';

/** Service tile with icon, short text and "from" price, linking to the service page. */
@Component({
  imports: [RouterLink, IconComponent],
  selector: 'app-service-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @let t = i18n.t();
    <a
      [routerLink]="i18n.link('service', service())"
      class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-600/60 hover:shadow-[0_20px_50px_-20px_rgba(225,29,42,0.45)] sm:p-7"
      [attr.data-testid]="'service-card-' + service()"
    >
      <span
        class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-600/0 blur-2xl transition duration-500 group-hover:bg-brand-600/25"
      ></span>
      <span
        class="relative grid h-12 w-12 place-items-center rounded-xl border border-brand-600/40 bg-brand-600/10 text-brand-400 transition group-hover:bg-brand-600 group-hover:text-white"
      >
        <app-icon [name]="service()" [size]="24" />
      </span>
      <h3 class="relative mt-5 text-lg font-bold sm:text-xl">{{ content().name }}</h3>
      <p class="relative mt-2 flex-1 text-sm leading-relaxed text-ink-400">{{ content().short }}</p>
      <div class="relative mt-6 flex items-center justify-between border-t border-ink-700 pt-4">
        <span class="text-sm text-ink-400">
          {{ t.common.from }}
          <strong class="font-display text-base text-white">{{
            i18n.money(content().priceFrom)
          }}</strong>
        </span>
        <span
          class="grid h-9 w-9 place-items-center rounded-full border border-ink-600 text-white transition group-hover:translate-x-1 group-hover:border-brand-500 group-hover:bg-brand-600"
        >
          <app-icon name="arrow" [size]="16" />
        </span>
      </div>
    </a>
  `,
})
export class ServiceCardComponent {
  protected readonly i18n = inject(LanguageService);
  service = input.required<ServiceId>();
  protected readonly content = computed(() => this.i18n.t().services[this.service()]);
}
