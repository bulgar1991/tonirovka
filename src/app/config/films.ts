// Window films we install, compared in the films table (texts in src/app/i18n/*.ts under "films").
export const FILM_IDS = ['standard', 'ceramic'] as const;
export type FilmId = (typeof FILM_IDS)[number];

/** The film highlighted as the most popular choice. */
export const POPULAR_FILM: FilmId = 'ceramic';

// Building window films shown in the before / after slider on the building film page
// (texts in src/app/i18n/*.ts under "glass").
export const GLASS_FILMS = ['solar', 'mirror', 'matte'] as const;
export type GlassFilm = (typeof GLASS_FILMS)[number];
