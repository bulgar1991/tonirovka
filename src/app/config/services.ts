import { ServiceId } from '@/config/routes';

export interface Photo {
  /** Full size (about 1200×750), for the lightbox. */
  full: string;
  /** 600 wide, for the grid. */
  thumb: string;
}

export interface ServiceMedia {
  /** Large photo behind the title on the service page (1600×1000) and its 800-wide copy. */
  hero: string;
  heroSmall: string;
  /** 1200×630 crop of the hero, the preview image when the page is shared. */
  og: string;
  /** Smaller copy of the hero for the service card (800×500). */
  card: string;
  /** Photos shown in the service page gallery. */
  gallery: Photo[];
  /** Window photo for the before / after film slider (compare.jpg), 1600 wide and 800 wide. */
  compare?: { src: string; small: string };
  /** Animated background over the hero. */
  effect?: 'stars' | 'ambient';
}

// Photos live in src/assets/images/services/<service id>/: hero.jpg, card.jpg and 1.jpg, 2.jpg, …
// for the gallery. The current ones are free Unsplash photos (see CREDITS.md there) - replace them
// with photos of your own work and change `count` below if the number of gallery photos changes.
// The site shows the WebP copies that scripts/optimize-images.mjs makes from the JPGs.
const media = (id: ServiceId, count: number, effect?: ServiceMedia['effect']): ServiceMedia => {
  const dir = `assets/images/services/${id}`;
  return {
    hero: `${dir}/hero.webp`,
    heroSmall: `${dir}/hero-800.webp`,
    og: `${dir}/og.jpg`,
    card: `${dir}/card.webp`,
    gallery: Array.from({ length: count }, (_, i) => ({
      full: `${dir}/${i + 1}.webp`,
      thumb: `${dir}/${i + 1}-600.webp`,
    })),
    effect,
  };
};

export const SERVICE_MEDIA: Record<ServiceId, ServiceMedia> = {
  tinting: media('tinting', 4),
  buildings: {
    ...media('buildings', 6),
    compare: {
      src: 'assets/images/services/buildings/compare.webp',
      small: 'assets/images/services/buildings/compare-800.webp',
    },
  },
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
