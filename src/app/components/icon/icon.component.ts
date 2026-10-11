import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const ICONS: Record<string, string> = {
  phone:
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
  pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M6.34 17.66l-1.41 1.41 M19.07 4.93l-1.41 1.41',
  check: 'M20 6L9 17l-5-5',
  arrow: 'M5 12h14 M12 5l7 7-7 7',
  menu: 'M3 12h18 M3 6h18 M3 18h18',
  x: 'M18 6L6 18 M6 6l12 12',
  chevron: 'M6 9l6 6 6-6',
  sparkles: 'M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z M19 3v4 M17 5h4',
  layers: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
  scissors:
    'M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M20 4L8.12 15.88 M14.47 14.48L20 20 M8.12 8.12L12 12',
  chat: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z',
  send: 'M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z',
  prev: 'M15 18l-6-6 6-6',
  next: 'M9 18l6-6-6-6',
  instagram:
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01',
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  tiktok: 'M9 12a4 4 0 1 0 4 4V2c.5 2.5 2.5 4.5 5 5',
  // services
  tinting: 'M3 18h18 M5 18l2-9h10l2 9 M7 9l1.5-4h7L17 9 M9 13h6',
  buildings:
    'M3 21h18 M5 21V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16 M9 8h2 M13 8h2 M9 12h2 M13 12h2 M10 21v-4h4v4',
  headlights: 'M4 8a3 3 0 0 1 3-3h4v14H7a3 3 0 0 1-3-3V8z M15 7h6 M15 12h6 M15 17h6',
  wrap: 'M4 3h13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M18 5.5h2a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-8v3 M10 14h4v7h-4z',
  polishing: 'M6 3h12l4 6-10 12L2 9z M2 9h20 M10 3L8 9l4 12 4-12-2-6',
  cleaning:
    'M8 9h6l1 3v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9z M9 9V6h4v3 M13 6h3l2-2 M18 8h.01 M20 6h.01 M20 10h.01',
  dryFog:
    'M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2 M9.6 4.6A2 2 0 1 1 11 8H2 M12.6 19.4A2 2 0 1 0 14 16H2',
  headliner: 'M4 18v-6a8 5 0 0 1 16 0v6 M2 18h20 M8 9v5 M12 7.5V14 M16 9v5',
  ambient:
    'M2 13c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-1.5 5 0 M2 18c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-1.5 5 0 M12 3v3 M6 5l1.5 2 M18 5l-1.5 2',
  starlight:
    'M12 3l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L12 15.4l-5 2.8 1.2-5.6L4 8.8l5.6-.6z M19 2v3 M17.5 3.5h3 M4 19v2 M3 20h2',
  aircon:
    'M12 2v20 M4.9 4.9l14.2 14.2 M2 12h20 M4.9 19.1L19.1 4.9 M9 4l3 2 3-2 M9 20l3-2 3 2 M4 9l2 3-2 3 M20 9l-2 3 2 3',
  evaMats:
    'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M7 7h2v2H7z M11 7h2v2h-2z M15 7h2v2h-2z M7 11h2v2H7z M11 11h2v2h-2z M15 11h2v2h-2z M7 15h2v2H7z M11 15h2v2h-2z M15 15h2v2h-2z',
};

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg
      viewBox="0 0 24 24"
      [attr.width]="size()"
      [attr.height]="size()"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="stroke()"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path [attr.d]="d()" />
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input(20);
  readonly stroke = input(1.8);
  protected readonly d = computed(() => ICONS[this.name()] ?? '');
}
