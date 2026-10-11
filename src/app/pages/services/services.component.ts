import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CtaSectionComponent } from '@components/cta-section/cta-section.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { ServiceCardComponent } from '@components/service-card/service-card.component';
import { SERVICE_IDS } from '@/config/routes';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [PageHeaderComponent, ServiceCardComponent, CtaSectionComponent],
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <app-page-header
      [title]="t.servicesPage.h1"
      [crumb]="t.nav.services"
      [subtitle]="t.servicesPage.intro"
    />
    <section class="mt-12 sm:mt-16">
      <div class="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        @for (id of services; track id) {
          <app-service-card [service]="id" />
        }
      </div>
    </section>
    <app-cta-section />
  `,
})
export class ServicesComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly services = SERVICE_IDS;
}
