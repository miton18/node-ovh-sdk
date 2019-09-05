"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPError extends Error {
    constructor(message, status, headers) {
        super(message);
        this.status = status;
        this.headers = headers;
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
    toString() {
        return `${this.name}(${this.status}): ${this.message}, ${this.headers}`;
    }
}
exports.HTTPError = HTTPError;
//# sourceMappingURL=errors.js.map