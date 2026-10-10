import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingFormComponent } from '@components/booking-form/booking-form.component';
import { FilmsTableComponent } from '@components/films-table/films-table.component';
import { IconComponent } from '@components/icon/icon.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { BODY_IDS, BodyId, calcPrice, FILM_IDS, FilmId, ZONE_IDS, ZoneId } from '@/config/pricing';
import { SERVICE_IDS } from '@/config/routes';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [
    RouterLink,
    IconComponent,
    PageHeaderComponent,
    FilmsTableComponent,
    BookingFormComponent,
  ],
  selector: 'app-prices',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './prices.component.html',
})
export class PricesComponent {
  protected readonly i18n = inject(LanguageService);

  protected readonly bodies = BODY_IDS;
  protected readonly films = FILM_IDS;
  protected readonly zones = ZONE_IDS;
  protected readonly services = SERVICE_IDS;

  protected readonly body = signal<BodyId>('sedan');
  protected readonly film = signal<FilmId>('carbon');
  protected readonly selectedZones = signal<ZoneId[]>(['rear']);

  protected readonly total = computed(() =>
    calcPrice(this.body(), this.film(), this.selectedZones()),
  );

  // Added to the booking message so the studio sees what was calculated.
  protected readonly summary = computed(() => {
    const p = this.i18n.t().prices;
    if (!this.selectedZones().length) return '';
    const zones = this.selectedZones()
      .map((z) => p.zoneNames[z])
      .join(', ');
    return `${p.message}: ${p.bodies[this.body()]}, ${this.i18n.t().films.names[this.film()]} — ${zones} ≈ ${this.i18n.money(this.total())}`;
  });

  protected toggleZone(zone: ZoneId): void {
    this.selectedZones.update((zones) =>
      zones.includes(zone)
        ? zones.filter((z) => z !== zone)
        : ZONE_IDS.filter((z) => z === zone || zones.includes(z)),
    );
  }
}
