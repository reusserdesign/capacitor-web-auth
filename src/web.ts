import { WebPlugin } from '@capacitor/core';

import type { CapacitorWebAuthPlugin } from './definitions';

export class CapacitorWebAuthWeb
  extends WebPlugin
  implements CapacitorWebAuthPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
