'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorWebAuth = core.registerPlugin('CapacitorWebAuth', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorWebAuthWeb()),
});

class CapacitorWebAuthWeb extends core.WebPlugin {
    async login(options) {
        return { value: options.url };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorWebAuthWeb: CapacitorWebAuthWeb
});

exports.CapacitorWebAuth = CapacitorWebAuth;
//# sourceMappingURL=plugin.cjs.js.map
