import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FILM_IDS, POPULAR_FILM } from '@/config/films';
import { LanguageService } from '@services/language.service';

/** Standard / Ceramic film comparison cards, side by side from `md` up. */
@Component({
  selector: 'app-films-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @let t = i18n.t();
    <div class="grid max-w-4xl gap-4 md:grid-cols-2" data-testid="films-table">
      @for (film of films; track film; let i = $index) {
        <div
          class="relative rounded-2xl border p-6 sm:p-7"
          [attr.data-testid]="'film-' + film"
          [class]="
            film === popular
              ? 'border-brand-600 bg-gradient-to-b from-brand-600/15 to-ink-900'
              : 'border-ink-700 bg-ink-900/80'
          "
        >
          @if (film === popular) {
            <span
              class="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
              >{{ t.films.popular }}</span
            >
          }
          <h3 class="text-xl font-bold">{{ t.films.names[film] }}</h3>
          <p class="mt-2 min-h-[3rem] text-sm leading-relaxed text-ink-400">
            {{ t.films.texts[film] }}
          </p>
          <dl class="mt-5 space-y-3 border-t border-ink-700 pt-5 text-sm">
            @for (row of t.films.rows; track row.label) {
              <div class="flex items-center justify-between gap-3">
                <dt class="text-ink-400">{{ row.label }}</dt>
                <dd
                  class="font-bold"
                  [class]="
                    row.values[i] === '—'
                      ? 'text-ink-600'
                      : row.values[i] === '✓'
                        ? 'text-brand-400'
                        : 'text-white'
                  "
                >
                  {{ row.values[i] }}
                </dd>
              </div>
            }
          </dl>
        </div>
      }
    </div>
  `,
})
export class FilmsTableComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly films = FILM_IDS;
  protected readonly popular = POPULAR_FILM;
}
