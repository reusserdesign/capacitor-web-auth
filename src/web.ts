import { WebPlugin } from '@capacitor/core';

import type { CapacitorWebAuthPlugin } from './definitions';

export class CapacitorWebAuthWeb
  extends WebPlugin
  implements CapacitorWebAuthPlugin {
  async login(options: { url: string, redirectScheme: string }): Promise<{ value: string }> {
    return { value: options.url };
  }
}
