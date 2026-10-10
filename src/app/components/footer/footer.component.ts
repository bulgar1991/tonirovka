import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MENU_ITEMS } from '@components/header/menu-items';
import { IconComponent } from '@components/icon/icon.component';
import { LogoComponent } from '@components/logo/logo.component';
import { OpeningHoursComponent } from '@components/opening-hours/opening-hours.component';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from '@/config/contact';
import { SERVICE_IDS } from '@/config/routes';
import { BUSINESS, SITE_NAME, SOCIAL_LINKS } from '@/config/site';
import { LanguageService } from '@services/language.service';

@Component({
  imports: [RouterLink, IconComponent, LogoComponent, OpeningHoursComponent],
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly i18n = inject(LanguageService);

  siteName = SITE_NAME;
  year = new Date().getFullYear();
  menuItems = MENU_ITEMS;
  services = SERVICE_IDS;
  address = BUSINESS.address;
  phone = CONTACT_PHONE;
  phoneHref = CONTACT_PHONE_HREF;
  email = CONTACT_EMAIL;
  emailHref = CONTACT_EMAIL_HREF;
  socials = Object.entries(SOCIAL_LINKS)
    .filter(([, url]) => !!url)
    .map(([name, url]) => ({ name, url }));

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
