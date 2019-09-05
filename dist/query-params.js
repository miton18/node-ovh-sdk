"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryParams {
    constructor() {
        this.params = {};
    }
    has(key) {
        return this.params[key] !== undefined;
    }
    get(key) {
        return this.params[key];
    }
    set(key, value) {
        if (typeof value === 'number') {
            this.params[key] = value.toString();
            return;
        }
        this.params[key] = value;
    }
    toString() {
        return '?' + Object.entries(this.params)
            .map(([k, v]) => `${k}=${v}`)
            .join('&');
    }
}
exports.default = QueryParams;
//# sourceMappingURL=query-params.js.map