import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '@components/cta-section/cta-section.component';
import { FaqListComponent } from '@components/faq-list/faq-list.component';
import { FilmsTableComponent } from '@components/films-table/films-table.component';
import { ScrollToDirective } from '@directives/scroll-to.directive';
import { IconComponent } from '@components/icon/icon.component';
import { ServicesSliderComponent } from '@components/services-slider/services-slider.component';
import { TintPickerComponent } from '@components/tint-picker/tint-picker.component';
import { SERVICE_IDS } from '@/config/routes';
import { BUSINESS } from '@/config/site';
import { HOME_FAQ_COUNT } from '@services/seo.service';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [
    RouterLink,
    ScrollToDirective,
    IconComponent,
    TintPickerComponent,
    ServicesSliderComponent,
    FilmsTableComponent,
    FaqListComponent,
    CtaSectionComponent,
  ],
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly services = SERVICE_IDS;
  protected readonly faq = computed(() => this.i18n.t().faq.items.slice(0, HOME_FAQ_COUNT));
  protected readonly stats = computed(() => {
    const s = this.i18n.t().home.stats;
    return [
      { value: `${new Date().getFullYear() - BUSINESS.foundedYear}+`, label: s.years },
      { value: `${BUSINESS.carsDone}+`, label: s.cars },
    ];
  });
}
