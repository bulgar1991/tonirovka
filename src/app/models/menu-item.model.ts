import { PageKey } from '@/config/routes';

export interface MenuItem {
  // Page key: the label comes from the dictionary (`nav.<id>`), the link from pathFor().
  id: Exclude<PageKey, 'service'>;
}
