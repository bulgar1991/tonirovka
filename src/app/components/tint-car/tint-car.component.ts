import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

let nextId = 0;

/** Side view of a sedan whose windows darken with the VLT (visible light transmission) level. */
@Component({
  selector: 'app-tint-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <svg viewBox="0 0 800 300" class="h-auto w-full" role="img" [attr.aria-label]="label()">
      <defs>
        <linearGradient [attr.id]="id + 'body'" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#3a3a42" />
          <stop offset="0.35" stop-color="#1d1d22" />
          <stop offset="1" stop-color="#0c0c0f" />
        </linearGradient>
        <linearGradient [attr.id]="id + 'glass'" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#dfe8f1" />
          <stop offset="1" stop-color="#8fa2b6" />
        </linearGradient>
        <radialGradient [attr.id]="id + 'rim'">
          <stop offset="0" stop-color="#55555f" />
          <stop offset="1" stop-color="#26262c" />
        </radialGradient>
        <clipPath [attr.id]="id + 'win'">
          <path [attr.d]="windowPath" />
        </clipPath>
      </defs>

      <ellipse cx="400" cy="282" rx="350" ry="12" fill="#000" opacity="0.7" />
      <ellipse cx="400" cy="280" rx="300" ry="5" fill="#e11d2a" opacity="0.18" />

      <!-- body -->
      <path
        d="M40 222 C38 200 42 182 60 170 L120 150 C160 142 200 140 238 138 C270 110 300 88 340 82 L470 80 C510 82 540 110 580 140 C640 146 700 152 735 165 C755 172 765 190 762 222 L690 228 A65 65 0 0 0 560 228 L245 228 A65 65 0 0 0 115 228 Z"
        [attr.fill]="'url(#' + id + 'body)'"
        stroke="#4a4a54"
        stroke-width="1.5"
      />

      <!-- glass, cabin and tint film -->
      <g [attr.clip-path]="'url(#' + id + 'win)'">
        <rect x="250" y="78" width="310" height="70" [attr.fill]="'url(#' + id + 'glass)'" />
        <path d="M300 140 C300 118 312 110 326 110 C340 110 346 120 346 140 Z" fill="#30343b" />
        <path d="M446 140 C446 116 458 108 472 108 C486 108 492 118 492 140 Z" fill="#30343b" />
        <circle cx="530" cy="132" r="16" fill="none" stroke="#30343b" stroke-width="5" />
        <rect
          x="250"
          y="78"
          width="310"
          height="70"
          fill="#050507"
          [attr.opacity]="tintOpacity()"
          class="tint"
        />
        <path
          d="M330 78 L370 78 L300 150 L260 150 Z M395 78 L410 78 L340 150 L325 150 Z"
          fill="#fff"
          opacity="0.1"
        />
      </g>
      <path
        [attr.d]="windowPath"
        fill="none"
        stroke="#08080a"
        stroke-width="5"
        stroke-linejoin="round"
      />
      <rect x="398" y="86" width="12" height="56" fill="#0a0a0c" />

      <!-- details -->
      <path
        d="M268 146 L268 222 M405 146 L405 224 M552 146 C560 170 562 200 556 226"
        stroke="#000"
        stroke-opacity="0.55"
        stroke-width="2"
        fill="none"
      />
      <rect x="362" y="160" width="26" height="5" rx="2.5" fill="#55555f" />
      <rect x="506" y="160" width="26" height="5" rx="2.5" fill="#55555f" />
      <path d="M548 142 L572 134 L580 146 L556 150 Z" fill="#1a1a1f" stroke="#4a4a54" />
      <path
        d="M118 196 L700 196"
        stroke="#e11d2a"
        stroke-width="2.5"
        stroke-linecap="round"
        opacity="0.9"
      />
      <path d="M728 166 C745 168 756 174 760 184 L734 182 Z" fill="#f4f4f5" />
      <path d="M760 184 L800 176 L800 196 Z" fill="#fff" opacity="0.06" />
      <path d="M62 170 L44 184 L42 196 L72 188 Z" fill="#e11d2a" />
      <ellipse cx="54" cy="186" rx="24" ry="12" fill="#e11d2a" opacity="0.25" />

      <!-- wheels -->
      @for (cx of wheels; track cx) {
        <g>
          <circle [attr.cx]="cx" cy="228" r="52" fill="#0a0a0c" stroke="#1f1f24" stroke-width="3" />
          <circle [attr.cx]="cx" cy="228" r="34" [attr.fill]="'url(#' + id + 'rim)'" />
          <path
            [attr.d]="'M' + (cx - 27) + ' 214 A30 30 0 0 1 ' + (cx - 6) + ' 199'"
            stroke="#e11d2a"
            stroke-width="7"
            fill="none"
            stroke-linecap="round"
          />
          @for (a of spokes; track a) {
            <line
              [attr.x1]="cx"
              y1="228"
              [attr.x2]="cx + 31 * cos(a)"
              [attr.y2]="228 + 31 * sin(a)"
              stroke="#77777f"
              stroke-width="5"
              stroke-linecap="round"
            />
          }
          <circle [attr.cx]="cx" cy="228" r="7" fill="#111114" stroke="#77777f" stroke-width="2" />
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
  protected readonly windowPath =
    'M258 140 C285 115 312 97 344 92 L466 90 C494 93 522 114 552 140 Z';
  protected readonly wheels = [180, 625];
  protected readonly spokes = [0, 72, 144, 216, 288].map((d) => (d * Math.PI) / 180 - Math.PI / 2);
  protected readonly tintOpacity = computed(() => 0.97 * Math.pow(1 - this.vlt() / 100, 0.8));

  protected cos = Math.cos;
  protected sin = Math.sin;
}
