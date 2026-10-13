import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { IconComponent } from '@components/icon/icon.component';
import { GLASS_FILMS, GlassFilm } from '@/config/films';
import { LanguageService } from '@services/language.service';

/** How each film changes the view through the glass (applied over the right part of the photo). */
const LOOKS: Record<GlassFilm, { photo: string; overlay: string; blend: string }> = {
  // Neutral grey-blue film: less light and glare, the view stays clear.
  solar: {
    photo: 'saturate(0.95)',
    overlay: 'rgb(172 184 194)',
    blend: 'multiply',
  },
  // Silver reflective film: much darker from inside, with a cool metallic sheen.
  mirror: {
    photo: 'saturate(0.8) contrast(1.05)',
    overlay:
      'linear-gradient(115deg, rgb(255 255 255 / 0.14), rgb(255 255 255 / 0) 45%, rgb(255 255 255 / 0.1)), rgb(62 74 86)',
    blend: 'multiply',
  },
  // Frosted film: lets light in but hides everything behind the glass.
  matte: {
    photo: 'blur(10px) saturate(0.6) brightness(1.1)',
    overlay: 'rgb(235 238 242 / 0.55)',
    blend: 'normal',
  },
};

/**
 * Before / after slider for building window film: a window photo split by a line that is dragged
 * left or right (mouse, touch or arrow keys). Left of the line: glass without film; right of it:
 * the film picked below.
 */
@Component({
  imports: [IconComponent],
  selector: 'app-glass-compare',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    @let t = i18n.t().glass;
    @let film = t.films[current()];
    <div
      class="relative aspect-[16/10] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-2xl border border-ink-700 bg-ink-900"
      data-testid="glass-compare"
      (pointerdown)="grab($event)"
      (pointermove)="drag($event)"
      (pointerup)="dragging = false"
      (pointercancel)="dragging = false"
    >
      <img
        [src]="photo().src"
        [attr.srcset]="srcset()"
        sizes="(min-width: 1024px) 760px, 100vw"
        [alt]="t.alt"
        width="1600"
        height="1000"
        loading="lazy"
        decoding="async"
        draggable="false"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 overflow-hidden"
        [style.clip-path]="'inset(0 0 0 ' + pos() + '%)'"
        data-testid="glass-compare-film"
      >
        <img
          [src]="photo().src"
          [attr.srcset]="srcset()"
          sizes="(min-width: 1024px) 760px, 100vw"
          alt=""
          loading="lazy"
          decoding="async"
          draggable="false"
          class="look absolute inset-0 h-full w-full scale-105 object-cover"
          [style.filter]="look().photo"
        />
        <div
          class="look absolute inset-0"
          [style.background]="look().overlay"
          [style.mix-blend-mode]="look().blend"
        ></div>
      </div>

      <span
        class="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
        >{{ t.before }}</span
      >
      <span
        class="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white"
        >{{ film.name }}</span
      >

      <!-- The line and its handle; the handle is the keyboard-accessible slider. -->
      <div
        class="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
        [style.left.%]="pos()"
      >
        <span
          role="slider"
          tabindex="0"
          aria-valuemin="0"
          aria-valuemax="100"
          [attr.aria-valuenow]="round(pos())"
          [attr.aria-valuetext]="round(pos()) + '%'"
          [attr.aria-label]="t.hint"
          class="pointer-events-auto absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-brand-600 text-white shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/60"
          data-testid="glass-compare-handle"
          (keydown)="key($event)"
        >
          <span class="flex -space-x-1">
            <app-icon name="prev" [size]="16" [stroke]="2.5" />
            <app-icon name="next" [size]="16" [stroke]="2.5" />
          </span>
        </span>
      </div>
    </div>

    <fieldset class="mt-6">
      <legend class="flex w-full items-baseline justify-between gap-4 text-sm">
        <span class="font-semibold text-white">{{ t.label }}</span>
        <span class="hidden text-ink-400 sm:inline">{{ t.hint }}</span>
      </legend>
      <div
        class="mt-3 grid grid-cols-3 gap-1.5 rounded-full border border-ink-700 bg-ink-900 p-1.5"
      >
        @for (id of films; track id) {
          <label class="relative cursor-pointer">
            <input
              type="radio"
              name="glass-film"
              class="peer sr-only"
              [value]="id"
              [checked]="current() === id"
              [attr.data-testid]="'glass-film-' + id"
              (change)="current.set(id)"
            />
            <span
              class="flex h-10 items-center justify-center rounded-full px-2 text-center text-xs font-bold text-ink-300 transition peer-checked:bg-brand-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400 hover:text-white sm:text-sm"
            >
              {{ t.films[id].name }}
            </span>
          </label>
        }
      </div>
      <p
        class="mt-4 min-h-[3rem] text-sm leading-relaxed text-ink-300"
        aria-live="polite"
        data-testid="glass-film-description"
      >
        <strong class="text-white">{{ film.name }}</strong> — {{ film.text }}
      </p>
    </fieldset>
  `,
  styles: `
    .look {
      transition:
        filter 0.4s ease,
        background 0.4s ease;
    }
  `,
})
export class GlassCompareComponent {
  protected readonly i18n = inject(LanguageService);

  /** The window photo (WebP, 1600 wide) and its 800-wide copy. */
  photo = input.required<{ src: string; small: string }>();

  protected readonly films = GLASS_FILMS;
  protected readonly current = signal<GlassFilm>('solar');
  /** Where the line is, in % from the left. */
  protected readonly pos = signal(50);
  protected readonly look = computed(() => LOOKS[this.current()]);
  protected readonly srcset = computed(
    () => `${this.photo().small} 800w, ${this.photo().src} 1600w`,
  );
  protected dragging = false;
  protected readonly round = Math.round;

  protected grab(event: PointerEvent): void {
    if (event.button !== 0) return; // left mouse button, touch or pen only
    const box = event.currentTarget as HTMLElement;
    box.setPointerCapture(event.pointerId);
    this.dragging = true;
    this.moveTo(event.clientX, box);
  }

  protected drag(event: PointerEvent): void {
    if (this.dragging) this.moveTo(event.clientX, event.currentTarget as HTMLElement);
  }

  protected key(event: KeyboardEvent): void {
    const step = { ArrowLeft: -5, ArrowRight: 5, Home: -100, End: 100 }[event.key];
    if (step === undefined) return;
    event.preventDefault();
    this.pos.update((p) => Math.min(100, Math.max(0, p + step)));
  }

  private moveTo(clientX: number, box: HTMLElement): void {
    const rect = box.getBoundingClientRect();
    this.pos.set(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }
}
