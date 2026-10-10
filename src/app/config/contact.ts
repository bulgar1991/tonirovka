// Contact details used across the site (header, mobile bar, footer, contact page, booking form).
// TODO: placeholders - replace with real ones.
export const CONTACT_PHONE = '+373 60 000 000';

export const CONTACT_EMAIL = 'info@example.com';
export const CONTACT_EMAIL_HREF = 'mailto:' + CONTACT_EMAIL;

// For `href="tel:..."` - digits and a leading +, no spaces.
export const CONTACT_PHONE_HREF = 'tel:' + CONTACT_PHONE.replace(/[^\d+]/g, '');

// WhatsApp number in international format, digits only.
export const WHATSAPP_NUMBER = '37360000000';
export const WHATSAPP_URL = 'https://wa.me/' + WHATSAPP_NUMBER;

// Telegram username without @.
export const TELEGRAM_USERNAME = 'blacktint';
export const TELEGRAM_URL = 'https://t.me/' + TELEGRAM_USERNAME;
