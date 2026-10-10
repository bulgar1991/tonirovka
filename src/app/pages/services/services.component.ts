import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CtaSectionComponent } from '@components/cta-section/cta-section.component';
import { FilmsTableComponent } from '@components/films-table/films-table.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { ServiceCardComponent } from '@components/service-card/service-card.component';
import { SERVICE_IDS } from '@/config/routes';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [PageHeaderComponent, ServiceCardComponent, FilmsTableComponent, CtaSectionComponent],
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <app-page-header
      [title]="t.servicesPage.h1"
      [crumb]="t.nav.services"
      [subtitle]="t.servicesPage.intro"
    />
    <section class="pb-16 sm:pb-24">
      <div class="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        @for (id of services; track id) {
          <app-service-card [service]="id" />
        }
      </div>
    </section>
    <section class="section border-t border-ink-800">
      <div class="container-site">
        <h2 class="h2 mt-0">{{ t.home.filmsTitle }}</h2>
        <p class="lead">{{ t.home.filmsText }}</p>
        <app-films-table class="mt-12" />
      </div>
    </section>
    <app-cta-section />
  `,
})
export class ServicesComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly services = SERVICE_IDS;
}
