import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@components/icon/icon.component';
import { TintCarComponent } from '@components/tint-car/tint-car.component';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [RouterLink, IconComponent, TintCarComponent],
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <section class="relative overflow-hidden pb-24 pt-32 text-center sm:pt-40">
      <div class="red-glow pointer-events-none absolute inset-0"></div>
      <div class="container-site relative">
        <p class="font-display text-[7rem] font-bold leading-none text-brand-600 sm:text-[10rem]">
          404
        </p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">{{ t.notFound.h1 }}</h1>
        <p class="mx-auto mt-4 max-w-md text-ink-400">{{ t.notFound.text }}</p>
        <a [routerLink]="i18n.link('home')" class="btn btn-primary mt-8">
          {{ t.notFound.back }}<app-icon name="arrow" [size]="16" />
        </a>
        <app-tint-car class="mx-auto mt-12 max-w-xl opacity-80" [vlt]="5" />
      </div>
    </section>
  `,
})
export class NotFoundComponent {
  protected readonly i18n = inject(LanguageService);
}
