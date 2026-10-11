import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollToDirective } from '@directives/scroll-to.directive';
import { IconComponent } from '@components/icon/icon.component';
import { LanguageService } from '@services/language.service';

/** Booking button at the bottom of pages, leading to the booking form on the contact page. */
@Component({
  imports: [ScrollToDirective, IconComponent],
  selector: 'app-cta-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <section class="section">
      <div class="container-site flex justify-center">
        <a
          appScrollTo="booking"
          [page]="i18n.link('contacts')"
          class="btn btn-primary min-h-[56px] px-10 text-base"
        >
          {{ i18n.t().common.bookNow }}<app-icon name="arrow" [size]="18" />
        </a>
      </div>
    </section>
  `,
})
export class CtaSectionComponent {
  protected readonly i18n = inject(LanguageService);
}
