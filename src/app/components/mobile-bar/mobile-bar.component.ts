import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollToDirective } from '@directives/scroll-to.directive';
import { IconComponent } from '@components/icon/icon.component';
import { CONTACT_PHONE_HREF, WHATSAPP_URL } from '@/config/contact';
import { LanguageService } from '@services/language.service';

/** Quick actions pinned to the bottom of the screen on phones: call, WhatsApp, booking. */
@Component({
  imports: [ScrollToDirective, IconComponent],
  selector: 'app-mobile-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let t = i18n.t();
    <div
      class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.35fr] gap-2 border-t border-white/10 bg-ink-950/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
      data-testid="mobile-bar"
    >
      <a [href]="phoneHref" class="btn btn-ghost !min-h-[46px] !px-2 !text-xs">
        <app-icon name="phone" [size]="16" />{{ t.common.call }}
      </a>
      <a
        [href]="whatsappUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-ghost !min-h-[46px] !px-2 !text-xs"
      >
        <app-icon name="chat" [size]="16" />WhatsApp
      </a>
      <a
        appScrollTo="booking"
        [page]="i18n.link('contacts')"
        class="btn btn-primary !min-h-[46px] !px-2 !text-[11px] !tracking-normal"
        >{{ t.nav.book }}</a
      >
    </div>
  `,
})
export class MobileBarComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly phoneHref = CONTACT_PHONE_HREF;
  protected readonly whatsappUrl = WHATSAPP_URL;
}
