import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '@services/language.service';
import { BUSINESS } from '@/config/site';

@Component({
  selector: 'app-opening-hours',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <ul class="space-y-1">
      @for (h of hours; track $index) {
        <li>
          <span class="text-ink-300"
            >{{ t.days[h.days[0]]
            }}{{ h.days.length > 1 ? '–' + t.days[h.days[h.days.length - 1]] : '' }}:</span
          >
          {{ h.opens }}–{{ h.closes }}
        </li>
      }
      <li>{{ t.contacts.closed }}</li>
    </ul>
  `,
})
export class OpeningHoursComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly hours = BUSINESS.openingHours;
}
