import { WebPlugin } from '@capacitor/core';
export class CapacitorWebAuthWeb extends WebPlugin {
    async login(options) {
        return { value: options.url };
    }
}
//# sourceMappingURL=web.js.map