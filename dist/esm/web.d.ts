import { WebPlugin } from '@capacitor/core';
import type { CapacitorWebAuthPlugin } from './definitions';
export declare class CapacitorWebAuthWeb extends WebPlugin implements CapacitorWebAuthPlugin {
    login(options: {
        url: string;
        redirectScheme: string;
    }): Promise<{
        value: string;
    }>;
}
