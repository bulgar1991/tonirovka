// Contact details used across the site (header, mobile bar, footer, contact page, booking form).
export const CONTACT_PHONE = '+373 69 488 109';

export const CONTACT_EMAIL = 'support@tonirovka.md';
export const CONTACT_EMAIL_HREF = 'mailto:' + CONTACT_EMAIL;

// For `href="tel:..."` - digits and a leading +, no spaces.
export const CONTACT_PHONE_HREF = 'tel:' + CONTACT_PHONE.replace(/[^\d+]/g, '');

// WhatsApp number in international format, digits only.
export const WHATSAPP_NUMBER = '37369488109';
export const WHATSAPP_URL = 'https://wa.me/' + WHATSAPP_NUMBER;

// Telegram chat by phone number (replace with https://t.me/<username> if there is one).
export const TELEGRAM_URL = 'https://t.me/+' + WHATSAPP_NUMBER;

// Viber chat by phone number. Opens the Viber app (a viber:// link, not a web page).
export const VIBER_URL = 'viber://chat?number=%2B' + WHATSAPP_NUMBER;

export type MessengerId = 'viber' | 'whatsapp' | 'telegram';

// Messenger buttons (booking form, contact page), in this order, with each brand's colour.
export const MESSENGERS: { id: MessengerId; name: string; url: string; color: string }[] = [
  { id: 'viber', name: 'Viber', url: VIBER_URL, color: '#7360f2' },
  { id: 'whatsapp', name: 'WhatsApp', url: WHATSAPP_URL, color: '#25d366' },
  { id: 'telegram', name: 'Telegram', url: TELEGRAM_URL, color: '#229ed9' },
];
