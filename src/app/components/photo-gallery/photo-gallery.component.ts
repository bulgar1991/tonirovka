import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { IconComponent } from '@components/icon/icon.component';
import { Photo } from '@/config/services';
import { LanguageService } from '@services/language.service';

/** Photo grid; a photo opens full screen, with arrows / arrow keys / swipe to move between them. */
@Component({
  imports: [IconComponent],
  selector: 'app-photo-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
    '(document:keydown.arrowleft)': 'current() >= 0 && step(-1)',
    '(document:keydown.arrowright)': 'current() >= 0 && step(1)',
  },
  template: `
    @let t = i18n.t();
    <ul class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3" data-testid="photo-gallery">
      @for (photo of photos(); track photo.full; let i = $index) {
        <li>
          <button
            type="button"
            class="group block w-full overflow-hidden rounded-2xl border border-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            [attr.aria-label]="t.service.photo + ' ' + (i + 1) + ' — ' + alt()"
            [attr.data-testid]="'photo-gallery-item-' + i"
            (click)="open(i)"
          >
            <img
              [src]="photo.thumb"
              [alt]="alt() + ' — ' + t.service.photo + ' ' + (i + 1)"
              loading="lazy"
              decoding="async"
              width="600"
              height="375"
              class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        </li>
      }
    </ul>

    <dialog
      #dialog
      class="m-0 h-full max-h-none w-full max-w-none bg-black/95 p-0 text-white backdrop:bg-black/80"
      [attr.aria-label]="alt()"
      data-testid="photo-lightbox"
      (close)="current.set(-1)"
    >
      @if (current() >= 0) {
        <!-- Tapping anywhere outside the buttons closes; swiping moves between photos. -->
        <button
          type="button"
          tabindex="-1"
          class="absolute inset-0 h-full w-full cursor-zoom-out"
          [attr.aria-label]="t.nav.close"
          (click)="dialog.close()"
          (touchstart)="touchX = $event.touches[0].clientX"
          (touchend)="swipe($event, $event.changedTouches[0].clientX)"
        ></button>
        <div
          class="pointer-events-none relative flex h-full items-center justify-center p-4 sm:p-12"
        >
          <img
            [src]="photos()[current()].full"
            [alt]="alt() + ' — ' + t.service.photo + ' ' + (current() + 1)"
            data-testid="photo-lightbox-image"
            class="max-h-full max-w-full rounded-xl object-contain"
          />
        </div>
        <p class="absolute left-5 top-5 text-sm text-ink-300" data-testid="photo-lightbox-counter">
          {{ current() + 1 }} / {{ photos().length }}
        </p>
        <button
          type="button"
          class="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-ink-800/80 hover:bg-brand-600"
          [attr.aria-label]="t.nav.close"
          data-testid="photo-lightbox-close"
          (click)="dialog.close()"
        >
          <app-icon name="x" [size]="22" />
        </button>
        @if (photos().length > 1) {
          <button
            type="button"
            class="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-800/80 hover:bg-brand-600"
            [attr.aria-label]="t.service.prev"
            data-testid="photo-lightbox-prev"
            (click)="step(-1)"
          >
            <app-icon name="prev" [size]="22" />
          </button>
          <button
            type="button"
            class="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink-800/80 hover:bg-brand-600"
            [attr.aria-label]="t.service.next"
            data-testid="photo-lightbox-next"
            (click)="step(1)"
          >
            <app-icon name="next" [size]="22" />
          </button>
        }
      }
    </dialog>
  `,
})
export class PhotoGalleryComponent {
  protected readonly i18n = inject(LanguageService);

  photos = input.required<Photo[]>();
  /** Describes the photos for screen readers, e.g. the service name. */
  alt = input('');

  protected readonly current = signal(-1);
  protected touchX = 0;
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected open(index: number): void {
    this.current.set(index);
    this.dialog().nativeElement.showModal();
  }

  protected step(delta: number): void {
    const count = this.photos().length;
    this.current.update((i) => (i + delta + count) % count);
  }

  protected swipe(event: TouchEvent, endX: number): void {
    const dx = endX - this.touchX;
    if (Math.abs(dx) < 50) return;
    event.preventDefault(); // a swipe is not a tap, so don't close
    this.step(dx < 0 ? 1 : -1);
  }
}
