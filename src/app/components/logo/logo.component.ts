import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex items-center gap-2.5' },
  template: `
    <svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#e11d2a" />
      <path d="M6 21 L11 11 H25 L22 17 H15 L13 21 Z" fill="#050505" />
      <path d="M15 17 H22 L20 21 H13 Z" fill="#050505" opacity="0.55" />
    </svg>
    <span class="font-display text-lg font-bold uppercase tracking-tight text-white">
      Black<span class="text-brand-500">Tint</span>
    </span>
  `,
})
export class LogoComponent {}
