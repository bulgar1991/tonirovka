import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CtaSectionComponent } from '@components/cta-section/cta-section.component';
import { IconComponent } from '@components/icon/icon.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { TintCarComponent } from '@components/tint-car/tint-car.component';
import { VLT_LEVELS } from '@components/tint-picker/tint-picker.component';
import { SOCIAL_LINKS, WORKS } from '@/config/site';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [PageHeaderComponent, TintCarComponent, IconComponent, CtaSectionComponent],
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    @let g = t.gallery;
    <app-page-header [title]="g.h1" [crumb]="t.nav.gallery" [subtitle]="g.intro" />

    <section class="pb-16 sm:pb-24">
      <div class="container-site">
        <h2 class="h2 mt-0">{{ g.levelsTitle }}</h2>
        <p class="lead">{{ g.levelsText }}</p>
        <ul class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (vlt of levels; track vlt) {
            <li class="card overflow-hidden">
              <div class="bg-gradient-to-b from-ink-850 to-ink-950 px-4 pt-6">
                <app-tint-car [vlt]="vlt" [label]="'VLT ' + vlt + '%'" />
              </div>
              <div class="border-t border-ink-700 p-5">
                <p class="font-display text-2xl font-bold text-white">{{ vlt }}%</p>
                <p class="mt-1 text-sm leading-relaxed text-ink-400">{{ t.tint.levels[vlt] }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>

    <section class="section border-t border-ink-800">
      <div class="container-site">
        <h2 class="h2 mt-0">{{ g.worksTitle }}</h2>
        @if (works.length) {
          <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            @for (work of works; track work.src) {
              <li class="group relative overflow-hidden rounded-2xl border border-ink-700">
                <img
                  [src]="work.src"
                  [alt]="work.car + ' — ' + t.services.tinting.name + ' ' + work.vlt + '%'"
                  loading="lazy"
                  width="800"
                  height="600"
                  class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4"
                >
                  <p class="font-bold text-white">{{ work.car }}</p>
                  <p class="text-sm text-brand-400">VLT {{ work.vlt }}%</p>
                </div>
              </li>
            }
          </ul>
        } @else {
          <div
            class="card mt-8 flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <p class="max-w-xl text-ink-300">{{ g.worksEmpty }}</p>
            @if (instagram) {
              <a [href]="instagram" target="_blank" rel="noopener" class="btn btn-primary shrink-0">
                <app-icon name="instagram" [size]="18" />{{ g.follow }}
              </a>
            }
          </div>
        }
      </div>
    </section>

    <app-cta-section />
  `,
})
export class GalleryComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly levels = VLT_LEVELS;
  protected readonly works = WORKS;
  protected readonly instagram = SOCIAL_LINKS.instagram;
}
