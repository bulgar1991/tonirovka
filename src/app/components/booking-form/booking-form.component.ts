import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  signal,
  viewChild,
} from '@angular/core';
import { BrandIconComponent } from '@components/brand-icon/brand-icon.component';
import { IconComponent } from '@components/icon/icon.component';
import { MESSENGERS, MessengerId, WHATSAPP_URL } from '@/config/contact';
import { SERVICE_IDS, ServiceId } from '@/config/routes';
import { DICTS } from '@/i18n';
import { LanguageService } from '@services/language.service';
import { EmailRow, Web3FormsService } from '@services/web3forms.service';

/**
 * Booking request. "Send" emails it to the studio through Web3FormsService; the same message
 * can also be opened in WhatsApp (pre-filled) or in Viber / Telegram (copied to the clipboard,
 * since their chat links can't pre-fill text).
 */
@Component({
  imports: [IconComponent, BrandIconComponent],
  selector: 'app-booking-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-form.component.html',
  host: { class: 'block' },
})
export class BookingFormComponent {
  protected readonly i18n = inject(LanguageService);
  private readonly web3forms = inject(Web3FormsService);

  /** Pre-selected service (e.g. on a service page). */
  service = input<ServiceId | ''>('');

  protected readonly services = SERVICE_IDS;
  protected readonly messengers = MESSENGERS;
  protected readonly name = signal('');
  protected readonly phone = signal('');
  protected readonly car = signal('');
  protected readonly selected = linkedSignal(() => this.service());
  protected readonly date = signal('');
  protected readonly comment = signal('');
  /** Honeypot: a hidden checkbox only bots tick; Web3Forms drops such requests. */
  protected readonly botcheck = signal(false);
  protected readonly submitted = signal(false);
  protected readonly copied = signal(false);
  protected readonly status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  private readonly thanks = viewChild<ElementRef<HTMLElement>>('thanks');

  constructor() {
    // The thank-you message replaces the form: move focus to it so screen readers announce it.
    effect(() => this.thanks()?.nativeElement.focus());
  }
  protected readonly today = new Date().toISOString().slice(0, 10);

  protected readonly nameValid = computed(() => this.name().trim().length > 1);
  protected readonly phoneValid = computed(() => this.phone().replace(/\D/g, '').length >= 6);
  protected readonly valid = computed(() => this.nameValid() && this.phoneValid());

  private message(): string {
    const t = this.i18n.t();
    const b = t.booking;
    const selected = this.selected();
    const lines = [
      b.greeting,
      `${b.name}: ${this.name().trim()}`,
      `${b.phone}: ${this.phone().trim()}`,
      this.car().trim() && `${b.car}: ${this.car().trim()}`,
      selected && `${b.service}: ${t.services[selected].name}`,
      this.date() && `${b.date}: ${this.date()}`,
      this.comment().trim() && `${b.comment}: ${this.comment().trim()}`,
    ];
    return lines.filter(Boolean).join('\n');
  }

  /** Rows of the email, labelled in Romanian whatever the site language is. */
  private emailRows(): EmailRow[] {
    const ro = DICTS.ro;
    const b = ro.booking;
    const selected = this.selected();
    return [
      [b.name, this.name().trim()],
      [b.phone, this.phone().trim()],
      [b.car, this.car().trim()],
      [b.service, selected ? ro.services[selected].name : ''],
      [b.date, this.date()],
      [b.comment, this.comment().trim()],
      ['Limba', this.i18n.t().langName],
      ['Pagina', location.href],
    ];
  }

  /** Sends the request to the studio's inbox. */
  protected submit(): void {
    this.submitted.set(true);
    this.copied.set(false);
    if (!this.valid() || this.status() === 'sending') return;
    this.status.set('sending');
    const subject = `${DICTS.ro.booking.subject} — ${this.name().trim()}`;
    this.web3forms.send(subject, this.emailRows(), this.botcheck()).subscribe((ok) => {
      this.status.set(ok ? 'sent' : 'error');
      if (ok) this.reset();
    });
  }

  private reset(): void {
    this.name.set('');
    this.phone.set('');
    this.car.set('');
    this.selected.set(this.service());
    this.date.set('');
    this.comment.set('');
    this.submitted.set(false);
  }

  protected send(messenger: MessengerId): void {
    this.submitted.set(true);
    this.status.set('idle');
    if (!this.valid()) return;
    const text = this.message();
    if (messenger === 'whatsapp') {
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      return;
    }
    navigator.clipboard?.writeText(text).then(
      () => this.copied.set(true),
      () => this.copied.set(false),
    );
    const url = MESSENGERS.find((m) => m.id === messenger)!.url;
    // viber:// opens the installed app; a new tab would stay blank.
    if (messenger === 'viber') location.href = url;
    else window.open(url, '_blank', 'noopener');
  }

  protected value(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
