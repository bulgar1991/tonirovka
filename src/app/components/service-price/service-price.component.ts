import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ServiceId } from '@/config/routes';
import { LanguageService } from '@services/language.service';

/** "from 300 € per panel", or "on request" when the service has no fixed starting price. */
@Component({
  selector: 'app-service-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let s = content();
    @if (s.priceFrom === null) {
      <strong class="font-display text-white">{{ i18n.t().common.onRequest }}</strong>
    } @else {
      <span class="text-ink-400">{{ i18n.t().common.from }}</span>
      <strong class="font-display text-white"> {{ i18n.money(s.priceFrom) }}</strong>
      @if (s.priceUnit) {
        <span class="text-ink-400"> {{ s.priceUnit }}</span>
      }
    }
  `,
})
export class ServicePriceComponent {
  protected readonly i18n = inject(LanguageService);
  service = input.required<ServiceId>();
  protected readonly content = computed(() => this.i18n.t().services[this.service()]);
}
