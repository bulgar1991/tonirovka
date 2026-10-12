import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@components/icon/icon.component';
import { ServicePriceComponent } from '@components/service-price/service-price.component';
import { ServiceId } from '@/config/routes';
import { SERVICE_MEDIA } from '@/config/services';
import { LanguageService } from '@services/language.service';

/**
 * Service card: photo, title, short description, "from" price and a button to the service page.
 */
@Component({
  imports: [RouterLink, IconComponent, ServicePriceComponent],
  selector: 'app-service-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <a
      [routerLink]="i18n.link('service', service())"
      class="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/80 transition duration-300 hover:-translate-y-1 hover:border-brand-600/60 hover:shadow-[0_20px_50px_-20px_rgba(225,29,42,0.45)]"
      [attr.data-testid]="'service-card-' + service()"
    >
      <div class="aspect-[16/10] overflow-hidden border-b border-ink-700 bg-ink-850">
        <img
          [src]="image()"
          [alt]="content().name"
          loading="lazy"
          decoding="async"
          width="800"
          height="500"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div class="flex flex-1 flex-col p-6 sm:p-7">
        <h3 class="text-lg font-bold sm:text-xl">{{ content().name }}</h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-400">{{ content().short }}</p>
        <app-service-price class="mt-5 block text-base" [service]="service()" />
        <span
          class="btn mt-5 w-full border border-ink-600 text-white group-hover:border-brand-500 group-hover:bg-brand-600"
        >
          {{ i18n.t().common.learnMore }}
          <app-icon name="arrow" [size]="16" class="transition group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  `,
})
export class ServiceCardComponent {
  protected readonly i18n = inject(LanguageService);
  service = input.required<ServiceId>();
  protected readonly content = computed(() => this.i18n.t().services[this.service()]);
  protected readonly image = computed(() => SERVICE_MEDIA[this.service()].card);
}
