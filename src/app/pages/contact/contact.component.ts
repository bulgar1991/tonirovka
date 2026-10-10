import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BookingFormComponent } from '@components/booking-form/booking-form.component';
import { IconComponent } from '@components/icon/icon.component';
import { OpeningHoursComponent } from '@components/opening-hours/opening-hours.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  TELEGRAM_URL,
  WHATSAPP_URL,
} from '@/config/contact';
import { BUSINESS } from '@/config/site';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [PageHeaderComponent, IconComponent, OpeningHoursComponent, BookingFormComponent],
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  protected readonly i18n = inject(LanguageService);

  address = BUSINESS.address;
  phone = CONTACT_PHONE;
  phoneHref = CONTACT_PHONE_HREF;
  email = CONTACT_EMAIL;
  emailHref = CONTACT_EMAIL_HREF;
  whatsappUrl = WHATSAPP_URL;
  telegramUrl = TELEGRAM_URL;
  mapLink = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.geo.lat},${BUSINESS.geo.lng}`;
  mapEmbed = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${BUSINESS.geo.lat},${BUSINESS.geo.lng}&z=16&output=embed`,
  );
}
