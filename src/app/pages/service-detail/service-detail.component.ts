import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingFormComponent } from '@components/booking-form/booking-form.component';
import { FaqListComponent } from '@components/faq-list/faq-list.component';
import { FilmsTableComponent } from '@components/films-table/films-table.component';
import { GlassCompareComponent } from '@components/glass-compare/glass-compare.component';
import { HeroEffectComponent } from '@components/hero-effect/hero-effect.component';
import { ScrollToDirective } from '@directives/scroll-to.directive';
import { IconComponent } from '@components/icon/icon.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { PhotoGalleryComponent } from '@components/photo-gallery/photo-gallery.component';
import { ServiceCardComponent } from '@components/service-card/service-card.component';
import { ServicePriceComponent } from '@components/service-price/service-price.component';
import { TintPickerComponent } from '@components/tint-picker/tint-picker.component';
import { SERVICE_IDS, ServiceId } from '@/config/routes';
import { SERVICE_MEDIA } from '@/config/services';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [
    RouterLink,
    ScrollToDirective,
    IconComponent,
    PageHeaderComponent,
    TintPickerComponent,
    GlassCompareComponent,
    FilmsTableComponent,
    HeroEffectComponent,
    PhotoGalleryComponent,
    ServicePriceComponent,
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
  protected readonly media = computed(() => SERVICE_MEDIA[this.service()]);
  // The next three services in the list, wrapping around to the start.
  protected readonly others = computed(() => {
    const i = SERVICE_IDS.indexOf(this.service());
    return [1, 2, 3].map((n) => SERVICE_IDS[(i + n) % SERVICE_IDS.length]);
  });
  // The tint simulator and film comparison only make sense for car window film.
  protected readonly isTinting = computed(() => this.service() === 'tinting');
}
