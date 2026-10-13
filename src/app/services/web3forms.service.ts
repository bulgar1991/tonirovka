import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { SITE_NAME } from '@/config/site';
import { environment } from '../../environments/environment';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

/** One "Label: value" row of the email. */
export type EmailRow = [label: string, value: string];

/**
 * Sends a form to the studio's inbox through Web3Forms.
 *
 * Web3Forms turns every field into a "Label: value" row of its email table, in the order they
 * are sent. Rows with an empty value are left out.
 */
@Injectable({ providedIn: 'root' })
export class Web3FormsService {
  private http = inject(HttpClient);

  // Emits true when the email was accepted, false otherwise (never errors).
  // `botcheck` is the form's honeypot: Web3Forms drops the request when it is true.
  send(subject: string, rows: EmailRow[], botcheck = false): Observable<boolean> {
    // Settings Web3Forms reads itself (not shown as rows in the email).
    const payload: Record<string, string | boolean> = {
      access_key: environment.web3formsKey,
      subject,
      from_name: SITE_NAME,
      botcheck,
    };

    for (const [label, value] of rows) {
      if (value) payload[label] = value;
    }

    return this.http
      .post<{ success: boolean }>(WEB3FORMS_URL, payload, {
        headers: { Accept: 'application/json' },
      })
      .pipe(
        map((res) => res.success),
        catchError(() => of(false)),
      );
  }
}
