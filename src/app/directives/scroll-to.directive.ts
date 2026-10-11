import { Directive, inject, input, output } from '@angular/core';
import { ScrollToService } from '@services/scroll-to.service';

/**
 * Link to a block on a page that keeps the URL clean (no "#booking").
 *
 *   <a appScrollTo="booking" [page]="i18n.link('contacts')">Book</a>   - other page
 *   <a appScrollTo="booking">Book</a>                                   - this page
 *
 * The href still points at the page, so it works for crawlers and "open in new tab".
 */
@Directive({
  selector: 'a[appScrollTo]',
  host: {
    '[attr.href]': 'page() || null',
    '(click)': 'onClick($event)',
  },
})
export class ScrollToDirective {
  private readonly scroller = inject(ScrollToService);

  /** id of the element to scroll to. */
  appScrollTo = input.required<string>();
  /** Page the element is on; empty = the current page. */
  page = input('');
  /** Emitted when the link is followed, e.g. to close a menu. */
  navigate = output();

  protected onClick(event: MouseEvent): void {
    // Let ctrl/cmd/shift/middle clicks open the page in a new tab or window as usual.
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    this.navigate.emit();
    this.scroller.go(this.page(), this.appScrollTo());
  }
}
