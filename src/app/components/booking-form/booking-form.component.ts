import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';
import { IconComponent } from '@components/icon/icon.component';
import { TELEGRAM_URL, WHATSAPP_URL } from '@/config/contact';
import { SERVICE_IDS, ServiceId } from '@/config/routes';
import { LanguageService } from '@services/language.service';

/**
 * Booking request without a backend: the form builds a message and opens it in WhatsApp
 * (pre-filled) or Telegram (copied to the clipboard, since Telegram links can't pre-fill text).
 */
@Component({
  imports: [IconComponent],
  selector: 'app-booking-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-form.component.html',
  host: { class: 'block' },
})
export class BookingFormComponent {
  protected readonly i18n = inject(LanguageService);

  /** Pre-selected service (e.g. on a service page). */
  service = input<ServiceId | ''>('');
  /** Extra line added to the message, e.g. the price calculator summary. */
  note = input('');

  protected readonly services = SERVICE_IDS;
  protected readonly name = signal('');
  protected readonly phone = signal('');
  protected readonly car = signal('');
  protected readonly selected = linkedSignal(() => this.service());
  protected readonly date = signal('');
  protected readonly comment = signal('');
  protected readonly submitted = signal(false);
  protected readonly copied = signal(false);
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
      this.note(),
      this.comment().trim() && `${b.comment}: ${this.comment().trim()}`,
    ];
    return lines.filter(Boolean).join('\n');
  }

  protected send(channel: 'whatsapp' | 'telegram'): void {
    this.submitted.set(true);
    if (!this.valid()) return;
    const text = this.message();
    if (channel === 'whatsapp') {
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      return;
    }
    navigator.clipboard?.writeText(text).then(
      () => this.copied.set(true),
      () => this.copied.set(false),
    );
    window.open(TELEGRAM_URL, '_blank', 'noopener');
  }

  protected value(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
