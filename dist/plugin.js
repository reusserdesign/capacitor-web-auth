var capacitorCapacitorWebAuth = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
