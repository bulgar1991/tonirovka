import { ServiceId } from '@/config/routes';

export interface ServiceMedia {
  /** Large photo behind the title on the service page (about 1600×1000). */
  hero: string;
  /** Smaller copy of the hero for the service card (about 800×500). */
  card: string;
  /** Photos shown in the service page gallery (about 1200×750). */
  gallery: string[];
  /** Animated background over the hero. */
  effect?: 'stars' | 'ambient';
}

// Photos live in src/assets/images/services/<service id>/: hero.jpg, card.jpg and 1.jpg, 2.jpg, …
// for the gallery. The current ones are free Unsplash photos (see CREDITS.md there) - replace them
// with photos of your own work and change `count` below if the number of gallery photos changes.
const media = (id: ServiceId, count: number, effect?: ServiceMedia['effect']): ServiceMedia => {
  const dir = `assets/images/services/${id}`;
  return {
    hero: `${dir}/hero.jpg`,
    card: `${dir}/card.jpg`,
    gallery: Array.from({ length: count }, (_, i) => `${dir}/${i + 1}.jpg`),
    effect,
  };
};

export const SERVICE_MEDIA: Record<ServiceId, ServiceMedia> = {
  tinting: media('tinting', 4),
  buildings: media('buildings', 4),
  headlights: media('headlights', 4),
  wrap: media('wrap', 4),
  polishing: media('polishing', 4),
  cleaning: media('cleaning', 4),
  dryFog: media('dryFog', 4),
  headliner: media('headliner', 3),
  ambient: media('ambient', 4, 'ambient'),
  starlight: media('starlight', 3, 'stars'),
  aircon: media('aircon', 4),
  evaMats: media('evaMats', 3),
};
