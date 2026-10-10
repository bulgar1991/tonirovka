import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DICTS } from '@/i18n';
import { LANGS } from '@/config/routes';
import { LanguageService } from '@services/language.service';

/**
 * RO / RU / EN switcher: a dropdown in the desktop header, inline pills in the mobile menu.
 * Each option is a link to the same page in the other language (URL-based languages, so
 * search engines can crawl every version).
 */
@Component({
  imports: [RouterLink],
  selector: 'app-language-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './language-switcher.component.scss',
  templateUrl: './language-switcher.component.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'open.set(false)',
  },
})
export class LanguageSwitcherComponent {
  protected readonly i18n = inject(LanguageService);
  private host = inject<ElementRef<HTMLElement>>(ElementRef);

  // "dropdown" for the desktop header, "inline" (RO | RU | EN) for the mobile menu.
  variant = input<'dropdown' | 'inline'>('dropdown');

  languages = LANGS.map((code) => ({
    code,
    label: code.toUpperCase(),
    name: DICTS[code].langName,
  }));
  currentLanguage = computed(
    () => this.languages.find((lang) => lang.code === this.i18n.lang()) ?? this.languages[0],
  );
  open = signal(false);

  toggle(): void {
    this.open.update((open) => !open);
  }

  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.open.set(false);
    }
  }
}
