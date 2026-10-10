import { Lang } from '@/config/routes';
import { Dict } from './dict';
import { EN } from './en';
import { RO } from './ro';
import { RU } from './ru';

export const DICTS: Record<Lang, Dict> = { ro: RO, ru: RU, en: EN };
export type { Dict } from './dict';
