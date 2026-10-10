import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '@services/language.service';
import { TintCarComponent } from '@components/tint-car/tint-car.component';

export const VLT_LEVELS = [5, 15, 20, 35, 50, 70];

@Component({
  selector: 'app-tint-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TintCarComponent],
  template: `
    @let t = i18n.t();
    <div class="relative">
      <div
        class="pointer-events-none absolute inset-x-10 top-1/3 h-1/2 rounded-full bg-brand-600/20 blur-3xl"
      ></div>
      <app-tint-car
        class="relative"
        [vlt]="vlt()"
        [label]="'VLT ' + vlt() + '% — ' + t.tint.levels[vlt()]"
      />
    </div>

    <fieldset class="mt-6">
      <legend class="flex w-full items-baseline justify-between gap-4 text-sm">
        <span class="font-semibold text-white">{{ t.tint.label }}</span>
        <span class="hidden text-ink-400 sm:inline">{{ t.tint.hint }}</span>
      </legend>
      <div
        class="mt-3 grid grid-cols-6 gap-1.5 rounded-full border border-ink-700 bg-ink-900 p-1.5"
      >
        @for (level of levels; track level) {
          <label class="relative cursor-pointer">
            <input
              type="radio"
              name="vlt"
              class="peer sr-only"
              [value]="level"
              [checked]="vlt() === level"
              (change)="vlt.set(level)"
            />
            <span
              class="flex h-10 items-center justify-center rounded-full text-sm font-bold text-ink-300 transition peer-checked:bg-brand-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400 hover:text-white"
            >
              {{ level }}%
            </span>
          </label>
        }
      </div>
      <p class="mt-4 min-h-[3rem] text-sm leading-relaxed text-ink-300" aria-live="polite">
        <strong class="text-white">VLT {{ vlt() }}%</strong> — {{ t.tint.levels[vlt()] }}
      </p>
    </fieldset>
  `,
})
export class TintPickerComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly levels = VLT_LEVELS;
  protected readonly vlt = signal(20);
}
