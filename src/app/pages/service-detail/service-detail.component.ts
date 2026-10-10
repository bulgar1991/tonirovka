import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingFormComponent } from '@components/booking-form/booking-form.component';
import { FaqListComponent } from '@components/faq-list/faq-list.component';
import { IconComponent } from '@components/icon/icon.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { ServiceCardComponent } from '@components/service-card/service-card.component';
import { TintPickerComponent } from '@components/tint-picker/tint-picker.component';
import { SERVICE_IDS, ServiceId } from '@/config/routes';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [
    RouterLink,
    IconComponent,
    PageHeaderComponent,
    TintPickerComponent,
    FaqListComponent,
    BookingFormComponent,
    ServiceCardComponent,
  ],
  selector: 'app-service-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent {
  protected readonly i18n = inject(LanguageService);

  // Set by serviceSeoResolver (withComponentInputBinding).
  service = input.required<ServiceId>();

  protected readonly content = computed(() => this.i18n.t().services[this.service()]);
  protected readonly others = computed(() =>
    SERVICE_IDS.filter((id) => id !== this.service()).slice(0, 3),
  );
  // The tint simulator only makes sense for window film.
  protected readonly showTint = computed(() => ['tinting', 'athermal'].includes(this.service()));
}
