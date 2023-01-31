import { registerPlugin } from '@capacitor/core';

import type { CapacitorWebAuthPlugin } from './definitions';

const CapacitorWebAuth = registerPlugin<CapacitorWebAuthPlugin>(
  'CapacitorWebAuth',
  {
    web: () => import('./web').then(m => new m.CapacitorWebAuthWeb()),
  },
);

export * from './definitions';
export { CapacitorWebAuth };
