import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IconComponent } from '@components/icon/icon.component';
import { ServiceCardComponent } from '@components/service-card/service-card.component';
import { ServiceId } from '@/config/routes';
import { LanguageService } from '@services/language.service';
import Swiper from 'swiper';
import { A11y, Keyboard, Navigation } from 'swiper/modules';

/**
 * Swipeable row of service cards: one card and a peek of the next on phones, two on tablets,
 * three on desktop. Arrows and keyboard on desktop, swipe on touch screens.
 */
@Component({
  imports: [ServiceCardComponent, IconComponent],
  selector: 'app-services-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrl: './services-slider.component.scss',
  host: { class: 'block' },
  template: `
    @let t = i18n.t();
    <div
      #container
      class="swiper !overflow-visible"
      role="region"
      aria-roledescription="carousel"
      [attr.aria-label]="t.nav.services"
      data-testid="services-slider"
    >
      <div class="swiper-wrapper">
        @for (id of services(); track id) {
          <div class="swiper-slide">
            <app-service-card class="h-full" [service]="id" />
          </div>
        }
      </div>
    </div>
    <div class="mt-8 flex items-center justify-between gap-4">
      <div class="h-1 max-w-xs flex-1 overflow-hidden rounded-full bg-ink-700">
        <div
          class="h-full rounded-full bg-brand-600 transition-[width] duration-300"
          [style.width.%]="progress()"
        ></div>
      </div>
      <div class="flex gap-3">
        <button
          #prev
          type="button"
          class="grid h-12 w-12 place-items-center rounded-full border border-ink-600 text-white transition hover:border-brand-500 hover:bg-brand-600 disabled:pointer-events-none disabled:opacity-30"
          [attr.aria-label]="t.service.prev"
          data-testid="services-slider-prev"
        >
          <app-icon name="prev" [size]="20" />
        </button>
        <button
          #next
          type="button"
          class="grid h-12 w-12 place-items-center rounded-full border border-ink-600 text-white transition hover:border-brand-500 hover:bg-brand-600 disabled:pointer-events-none disabled:opacity-30"
          [attr.aria-label]="t.service.next"
          data-testid="services-slider-next"
        >
          <app-icon name="next" [size]="20" />
        </button>
      </div>
    </div>
  `,
})
export class ServicesSliderComponent {
  protected readonly i18n = inject(LanguageService);
  services = input.required<readonly ServiceId[]>();

  /** How far along the row the visible cards are, 0–100, for the progress bar. */
  protected readonly progress = signal(0);

  private readonly container = viewChild.required<ElementRef<HTMLElement>>('container');
  private readonly prev = viewChild.required<ElementRef<HTMLButtonElement>>('prev');
  private readonly next = viewChild.required<ElementRef<HTMLButtonElement>>('next');

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const swiper = new Swiper(this.container().nativeElement, {
        modules: [Navigation, Keyboard, A11y],
        slidesPerView: 1.15,
        spaceBetween: 16,
        grabCursor: true,
        watchSlidesProgress: true,
        keyboard: { enabled: true, onlyInViewport: true },
        navigation: {
          prevEl: this.prev().nativeElement,
          nextEl: this.next().nativeElement,
          disabledClass: 'swiper-nav-disabled',
        },
        breakpoints: {
          640: { slidesPerView: 2.1, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        },
        on: {
          init: (s) => this.updateProgress(s),
          progress: (s) => this.updateProgress(s),
          resize: (s) => this.updateProgress(s),
        },
      });
      destroyRef.onDestroy(() => swiper.destroy());
    });
  }

  private updateProgress(swiper: Swiper): void {
    const visible = Number(swiper.params.slidesPerView) || 1;
    const total = swiper.slides.length;
    // Share of the row already seen, so the bar is full on the last cards.
    this.progress.set(
      Math.min(100, ((visible + swiper.progress * (total - visible)) / total) * 100),
    );
  }
}
