import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

let nextId = 0;

/** Side view of a modern SUV whose windows darken with the VLT (visible light transmission) level. */
@Component({
  selector: 'app-tint-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <svg viewBox="0 0 800 330" class="h-auto w-full" role="img" [attr.aria-label]="label()">
      <defs>
        <!-- pearl white paint: bright roof and shoulder, shaded doors -->
        <linearGradient [attr.id]="id + 'paint'" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fbfcfd" />
          <stop offset="0.4" stop-color="#e3e6eb" />
          <stop offset="0.62" stop-color="#b9bec7" />
          <stop offset="0.85" stop-color="#8a8f99" />
          <stop offset="1" stop-color="#5a5e67" />
        </linearGradient>
        <linearGradient [attr.id]="id + 'sheen'" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0" />
          <stop offset="0.5" stop-color="#fff" stop-opacity="0.85" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient [attr.id]="id + 'glass'" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0" stop-color="#d7e3ee" />
          <stop offset="0.6" stop-color="#9fb1c3" />
          <stop offset="1" stop-color="#6c7c8e" />
        </linearGradient>
        <radialGradient [attr.id]="id + 'tyre'" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stop-color="#1c1c20" />
          <stop offset="0.92" stop-color="#0e0e11" />
          <stop offset="1" stop-color="#050506" />
        </radialGradient>
        <radialGradient [attr.id]="id + 'rim'" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stop-color="#3a3c43" />
          <stop offset="1" stop-color="#121215" />
        </radialGradient>
        <linearGradient [attr.id]="id + 'spoke'" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#eef0f3" />
          <stop offset="1" stop-color="#9da1aa" />
        </linearGradient>
        <clipPath [attr.id]="id + 'win'">
          <path [attr.d]="windowPath" />
        </clipPath>
        <clipPath [attr.id]="id + 'body'">
          <path [attr.d]="bodyPath" />
        </clipPath>
      </defs>

      <!-- floor: shadow and red glow -->
      <ellipse cx="400" cy="300" rx="380" ry="16" fill="#000" opacity="0.85" />
      <ellipse cx="400" cy="300" rx="330" ry="6" fill="#e11d2a" opacity="0.25" />

      <!-- body -->
      <path [attr.d]="bodyPath" [attr.fill]="'url(#' + id + 'paint)'" />
      <g [attr.clip-path]="'url(#' + id + 'body)'">
        <!-- shoulder highlight, crease and lower door shadow -->
        <path
          d="M40 140 L780 152 L780 160 L40 148 Z"
          [attr.fill]="'url(#' + id + 'sheen)'"
          opacity="0.7"
        />
        <path
          d="M44 162 C260 166 520 172 778 180"
          stroke="#6d717b"
          stroke-width="1.5"
          fill="none"
        />
        <path
          d="M44 164 C260 168 520 174 778 182"
          stroke="#fff"
          stroke-opacity="0.7"
          stroke-width="1"
          fill="none"
        />
        <path d="M30 214 C260 218 520 222 790 226 L790 262 L30 262 Z" fill="#000" opacity="0.12" />
        <!-- black sill and bumper cladding -->
        <path d="M30 246 L790 248 L790 280 L30 280 Z" fill="#121215" />
        <path d="M30 246 L790 248" stroke="#3a3c43" stroke-width="1.5" />
      </g>
      <!-- black wheel-arch flares -->
      <path d="M100 262 A80 80 0 0 1 256 262" fill="none" stroke="#121215" stroke-width="12" />
      <path d="M528 262 A80 80 0 0 1 684 262" fill="none" stroke="#121215" stroke-width="12" />
      <path
        [attr.d]="bodyPath"
        fill="none"
        stroke="#7d828c"
        stroke-width="1.5"
        stroke-linejoin="round"
      />

      <!-- black roof and rails -->
      <path
        d="M126 64 C130 58 140 56 152 56 L476 50 C494 50 506 54 516 62 L490 60 L150 64 Z"
        fill="#141417"
      />
      <path d="M170 52 L468 46" stroke="#1a1a1e" stroke-width="5" stroke-linecap="round" />

      <!-- glass, cabin and tint film -->
      <g [attr.clip-path]="'url(#' + id + 'win)'">
        <rect x="100" y="56" width="490" height="84" [attr.fill]="'url(#' + id + 'glass)'" />
        <!-- seats, headrests and steering wheel seen through the glass -->
        <path
          d="M150 134 L152 102 C152 95 157 91 164 91 C171 91 175 96 175 103 L175 134 Z"
          fill="#3a404c"
          opacity="0.85"
        />
        <path
          d="M262 134 L264 96 C264 88 270 84 277 84 C284 84 289 89 289 97 L289 134 Z"
          fill="#3a404c"
          opacity="0.85"
        />
        <path
          d="M410 134 L412 94 C412 86 418 82 425 82 C432 82 437 87 437 95 L437 134 Z"
          fill="#3a404c"
          opacity="0.85"
        />
        <ellipse cx="506" cy="112" rx="11" ry="21" fill="none" stroke="#323743" stroke-width="6" />
        <path d="M100 124 L590 128 L590 140 L100 140 Z" fill="#2a2f39" />
        <!-- the film -->
        <rect
          x="100"
          y="56"
          width="490"
          height="84"
          fill="#030304"
          [attr.opacity]="tintOpacity()"
          class="tint"
        />
        <!-- reflections stay visible on top of the film -->
        <path d="M236 56 L296 56 L222 140 L162 140 Z" fill="#fff" opacity="0.1" />
        <path d="M312 56 L330 56 L256 140 L238 140 Z" fill="#fff" opacity="0.08" />
        <path d="M100 56 L590 56 L590 68 L100 72 Z" fill="#fff" opacity="0.07" />
      </g>

      <!-- pillars: black glass-look -->
      <path d="M200 66 L218 66 L214 130 L196 129 Z" fill="#0b0b0d" />
      <path d="M352 63 L366 63 L366 132 L352 132 Z" fill="#0b0b0d" />
      <path
        [attr.d]="windowPath"
        fill="none"
        stroke="#0b0b0d"
        stroke-width="5"
        stroke-linejoin="round"
      />
      <path d="M108 128 L578 136" stroke="#c9ccd2" stroke-width="2" />

      <!-- door shut lines and handles -->
      <path
        d="M214 131 C216 166 226 196 246 214 M359 134 L359 246 M577 137 C588 160 586 188 566 210"
        stroke="#4a4e57"
        stroke-width="1.6"
        fill="none"
      />
      <rect x="300" y="160" width="32" height="6" rx="3" fill="#7a7f89" />
      <rect x="300" y="160" width="32" height="2" rx="1" fill="#fff" />
      <rect x="484" y="162" width="32" height="6" rx="3" fill="#7a7f89" />
      <rect x="484" y="162" width="32" height="2" rx="1" fill="#fff" />

      <!-- mirror -->
      <path
        d="M552 120 C560 110 588 110 598 118 L596 138 C584 142 566 142 556 138 Z"
        fill="#141417"
      />
      <path
        d="M560 118 C570 114 586 114 594 118"
        stroke="#fff"
        stroke-opacity="0.25"
        stroke-width="2"
        fill="none"
      />

      <!-- front: slim LED headlight, grille edge and beam -->
      <path d="M716 146 L770 156 L768 166 L720 158 Z" fill="#141417" />
      <path d="M722 150 L766 158" stroke="#fff" stroke-width="3" stroke-linecap="round" />
      <path d="M770 156 L800 142 L800 190 L768 168 Z" fill="#fff" opacity="0.08" />
      <path d="M760 196 L776 198 L776 236 L762 234 Z" fill="#121215" />

      <!-- rear: red light bar with glow -->
      <path d="M36 134 L82 130 L80 140 L38 146 Z" fill="#ff2d3a" />
      <ellipse cx="54" cy="140" rx="42" ry="12" fill="#e11d2a" opacity="0.3" />

      <!-- wheels -->
      @for (cx of wheels; track cx) {
        <g>
          <circle [attr.cx]="cx" cy="234" r="66" [attr.fill]="'url(#' + id + 'tyre)'" />
          <circle [attr.cx]="cx" cy="234" r="47" [attr.fill]="'url(#' + id + 'rim)'" />
          <!-- brake disc and caliper behind the spokes -->
          <circle [attr.cx]="cx" cy="234" r="32" fill="#2e2f35" />
          <path [attr.d]="caliper(cx)" fill="#e11d2a" />
          @for (a of spokes; track a) {
            <path
              [attr.d]="spoke(cx, a)"
              [attr.fill]="'url(#' + id + 'spoke)'"
              stroke="#18181c"
              stroke-width="1"
            />
          }
          <circle [attr.cx]="cx" cy="234" r="46" fill="none" stroke="#d9dce1" stroke-width="2.5" />
          <circle [attr.cx]="cx" cy="234" r="10" fill="#18181c" stroke="#d9dce1" stroke-width="2" />
          <circle [attr.cx]="cx" cy="234" r="62" fill="none" stroke="#2a2a30" stroke-width="1.5" />
        </g>
      }
    </svg>
  `,
  styles: `
    .tint {
      transition: opacity 0.45s ease;
    }
  `,
})
export class TintCarComponent {
  readonly vlt = input(20);
  readonly label = input('');

  protected readonly id = `car${nextId++}-`;
  /** Outline from the rear bumper over the roof to the nose, with arches cut for the wheels. */
  protected readonly bodyPath =
    'M44 262 L34 182 C32 160 36 146 46 136 L106 74 C116 64 130 60 150 59 L476 53 ' +
    'C496 53 510 58 522 68 L594 126 C650 132 712 140 748 150 C770 156 780 170 782 190 ' +
    'L784 236 C784 252 776 262 762 263 L684 264 A80 80 0 1 0 528 264 L256 264 ' +
    'A80 80 0 1 0 100 264 L58 264 C50 264 45 263 44 262 Z';
  /** Side glass from the rear quarter window to the front door. */
  protected readonly windowPath =
    'M108 128 L134 76 C138 70 145 67 154 67 L484 62 C498 62 508 66 516 74 L578 136 Z';
  protected readonly wheels = [178, 606];
  // Five double spokes.
  protected readonly spokes = [0, 72, 144, 216, 288].flatMap((d) =>
    [d - 11, d + 11].map((x) => (x * Math.PI) / 180),
  );
  protected readonly tintOpacity = computed(() => 0.97 * Math.pow(1 - this.vlt() / 100, 0.8));

  /** A tapered alloy spoke from the hub to the rim at angle `a`. */
  protected spoke(cx: number, a: number): string {
    const p = (r: number, da: number) => this.point(cx, r, a + da);
    return `M${p(11, -0.34)} L${p(45, -0.12)} L${p(45, 0.12)} L${p(11, 0.34)} Z`;
  }

  /** Brake caliper hugging the disc at the top left. */
  protected caliper(cx: number): string {
    const p = (r: number, deg: number) => this.point(cx, r, (deg * Math.PI) / 180);
    return `M${p(31, 150)} A31 31 0 0 1 ${p(31, 225)} L${p(21, 225)} A21 21 0 0 0 ${p(21, 150)} Z`;
  }

  private point(cx: number, r: number, a: number): string {
    return `${(cx + r * Math.cos(a)).toFixed(1)} ${(234 + r * Math.sin(a)).toFixed(1)}`;
  }
}
