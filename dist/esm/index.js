import { registerPlugin } from '@capacitor/core';
const CapacitorWebAuth = registerPlugin('CapacitorWebAuth', {
    web: () => import('./web').then(m => new m.CapacitorWebAuthWeb()),
});
export * from './definitions';
export { CapacitorWebAuth };
//# sourceMappingURL=index.js.map