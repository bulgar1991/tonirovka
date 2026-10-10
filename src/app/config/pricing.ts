export type BodyId = 'hatchback' | 'sedan' | 'suv' | 'minivan';
export type FilmId = 'standard' | 'carbon' | 'ceramic';
export type ZoneId = 'rear' | 'front' | 'strip' | 'windshield' | 'lights';

// Price calculator (MDL). Total = sum of zones × body factor × film factor (film factor only
// for zones where the film type matters), rounded to `roundTo`.
export const PRICING = {
  bodies: { hatchback: 0.9, sedan: 1, suv: 1.2, minivan: 1.4 } satisfies Record<BodyId, number>,
  films: { standard: 1, carbon: 1.45, ceramic: 2.1 } satisfies Record<FilmId, number>,
  zones: {
    rear: { price: 1100, filmDependent: true },
    front: { price: 500, filmDependent: true },
    strip: { price: 300, filmDependent: true },
    windshield: { price: 1600, filmDependent: false },
    lights: { price: 700, filmDependent: false },
  } satisfies Record<ZoneId, { price: number; filmDependent: boolean }>,
  roundTo: 50,
};

export const BODY_IDS = Object.keys(PRICING.bodies) as BodyId[];
export const FILM_IDS = Object.keys(PRICING.films) as FilmId[];
export const ZONE_IDS = Object.keys(PRICING.zones) as ZoneId[];

export function calcPrice(body: BodyId, film: FilmId, zones: readonly ZoneId[]): number {
  const total = zones.reduce((sum, z) => {
    const zone = PRICING.zones[z];
    return sum + zone.price * (zone.filmDependent ? PRICING.films[film] : 1);
  }, 0);
  return Math.round((total * PRICING.bodies[body]) / PRICING.roundTo) * PRICING.roundTo;
}
