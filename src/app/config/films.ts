// Window films we install, compared in the films table (texts in src/app/i18n/*.ts under "films").
export const FILM_IDS = ['standard', 'ceramic'] as const;
export type FilmId = (typeof FILM_IDS)[number];

/** The film highlighted as the most popular choice. */
export const POPULAR_FILM: FilmId = 'ceramic';
