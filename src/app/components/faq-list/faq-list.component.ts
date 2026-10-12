import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@components/icon/icon.component';

/** Accordion on native <details>: works without JavaScript and the answers stay in the HTML for search engines. */
@Component({
  imports: [IconComponent],
  selector: 'app-faq-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div
      class="divide-y divide-ink-700 rounded-2xl border border-ink-700 bg-ink-900/60"
      data-testid="faq-list"
    >
      @for (item of items(); track item.q; let first = $first; let i = $index) {
        <details
          class="group px-5 sm:px-7"
          [open]="first && openFirst()"
          [attr.data-testid]="'faq-item-' + i"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-semibold text-white marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden"
          >
            {{ item.q }}
            <span
              class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink-600 text-brand-400 transition group-open:rotate-180 group-open:border-brand-500 group-open:bg-brand-600 group-open:text-white"
            >
              <app-icon name="chevron" [size]="16" />
            </span>
          </summary>
          <p class="-mt-1 pb-5 pr-12 leading-relaxed text-ink-400">{{ item.a }}</p>
        </details>
      }
    </div>
  `,
})
export class FaqListComponent {
  items = input.required<{ q: string; a: string }[]>();
  openFirst = input(true);
}
