import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';

/**
 * Scrolls to a block on a page (e.g. the booking form) without putting "#booking" in the URL.
 * On the same page it scrolls straight away; otherwise it opens the page first and scrolls once
 * the block has rendered (pages are lazy-loaded, so it may take a few frames).
 */
@Injectable({ providedIn: 'root' })
export class ScrollToService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private pending: string | null = null;

  constructor() {
    // On `Scroll` the router resets the new page to the top; wait a frame so ours comes after.
    this.router.events.subscribe((event) => {
      if (event instanceof Scroll && this.pending) {
        const id = this.pending;
        this.pending = null;
        requestAnimationFrame(() => this.scrollWhenReady(id));
      }
    });
  }

  /** Goes to `path` (current page if empty or the same) and scrolls to the element with `id`. */
  go(path: string, id: string): void {
    const current = this.router.url.split(/[?#]/)[0];
    if (!path || path === current) {
      this.scrollWhenReady(id);
      return;
    }
    this.pending = id;
    void this.router.navigateByUrl(path);
  }

  private scrollWhenReady(id: string, framesLeft = 60): void {
    const el = this.document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (framesLeft > 0) requestAnimationFrame(() => this.scrollWhenReady(id, framesLeft - 1));
  }
}
