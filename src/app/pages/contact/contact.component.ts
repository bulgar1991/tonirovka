import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BrandIconComponent } from '@components/brand-icon/brand-icon.component';
import { BookingFormComponent } from '@components/booking-form/booking-form.component';
import { IconComponent } from '@components/icon/icon.component';
import { OpeningHoursComponent } from '@components/opening-hours/opening-hours.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  MESSENGERS,
} from '@/config/contact';
import { BUSINESS, MAP_EMBED_URL, MAP_URL } from '@/config/site';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [
    PageHeaderComponent,
    IconComponent,
    BrandIconComponent,
    OpeningHoursComponent,
    BookingFormComponent,
  ],
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
  mapLink = MAP_URL;
  private readonly sanitizer = inject(DomSanitizer);
  mapEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED_URL);
  // Angular blocks unknown link schemes such as viber://, so the URLs are marked as trusted.
  messengers = MESSENGERS.map((m) => ({
    ...m,
    href: this.sanitizer.bypassSecurityTrustUrl(m.url),
  }));
}
