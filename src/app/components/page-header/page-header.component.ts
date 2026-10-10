import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '@services/language.service';

/**
 * Title band at the top of inner pages, with a breadcrumb back to home.
 *
 *   <app-page-header [title]="t.prices.h1" [subtitle]="t.prices.intro" />
 *
 * `parent` adds a middle breadcrumb step, e.g. Home > Services > <service name>.
 * `crumb` is the last breadcrumb step when it should differ from the (long) h1.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
  protected readonly i18n = inject(LanguageService);

  title = input.required<string>();
  subtitle = input<string>();
  crumb = input<string>();
  parent = input<{ label: string; link: string }>();
}
