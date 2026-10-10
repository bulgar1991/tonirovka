import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { MobileBarComponent } from '@components/mobile-bar/mobile-bar.component';
import { LanguageService } from '@services/language.service';

/** Page frame: skip link, header, routed page, footer and the mobile quick-action bar. */
@Component({
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MobileBarComponent],
  selector: 'app-main-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './main-layout.component.scss',
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  protected readonly i18n = inject(LanguageService);
}
