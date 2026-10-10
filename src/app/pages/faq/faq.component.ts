import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CtaSectionComponent } from '@components/cta-section/cta-section.component';
import { FaqListComponent } from '@components/faq-list/faq-list.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [PageHeaderComponent, FaqListComponent, CtaSectionComponent],
  selector: 'app-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <app-page-header [title]="t.faq.h1" [crumb]="t.nav.faq" [subtitle]="t.faq.intro" />
    <section class="pb-8">
      <div class="container-site max-w-4xl">
        <app-faq-list [items]="t.faq.items" />
      </div>
    </section>
    <app-cta-section />
  `,
})
export class FaqComponent {
  protected readonly i18n = inject(LanguageService);
}
