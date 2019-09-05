"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const endpoint_1 = __importDefault(require("./endpoint"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const errors_1 = require("./errors");
const crypto_1 = require("crypto");
class Client {
    constructor(config) {
        this.basePath = '/1.0';
        this.timeDiff = 0;
        this.endpoint = config.endpoint || endpoint_1.default.OVH_EU;
        this._applicationKey = config.applicationKey || '';
        this._applicationSecret = config.applicationSecret || '';
        this._consumerKey = config.consumerKey || '';
        this.timeout = config.timeout || 30 * 1000;
        setTimeout(() => this.syncTime());
    }
    set applicationKey(key) {
        this._applicationKey = key;
    }
    set applicationSecret(secret) {
        this._applicationSecret = secret;
    }
    set consumerKey(key) {
        this._consumerKey = key;
    }
    get urlBase() {
        return `https://${this.endpoint}${this.basePath}`;
    }
    syncTime() {
        return node_fetch_1.default(`${this.urlBase}/auth/time`)
            .then((res) => {
            if (!res.ok) {
                throw new Error(`[OVH] Cannot sync time diff with API (${res.statusText})`);
            }
            return res.text();
        })
            .then((diffText) => {
            const apiTime = Number.parseInt(diffText);
            this.timeDiff = apiTime - Math.round(Date.now() / 1000);
        });
    }
    request(method, path, body) {
        const now = (Math.round(Date.now() / 1000) + this.timeDiff);
        if (this.timeDiff === 0) {
            return this.syncTime()
                .then(() => this.request(method, path, body));
        }
        return node_fetch_1.default(`${this.urlBase}${path}`, {
            method,
            body,
            timeout: this.timeout,
            headers: {
                'Content-Type': 'application/json',
                'X-Ovh-Timestamp': now.toString(),
                'X-Ovh-Consumer': this._consumerKey,
                'X-Ovh-Application': this._applicationKey,
                'X-Ovh-Signature': this.signRequest(method, this.urlBase + path, body, now)
            }
        })
            .then((res) => {
            if (!res.ok) {
                return res.text()
                    .then(buf => {
                    throw new errors_1.HTTPError(`cannot perform request on '${path}': ${buf}`, res.status, res.headers.raw());
                })
                    .catch(err => {
                    if (err instanceof errors_1.HTTPError) {
                        throw err;
                    }
                    throw new errors_1.HTTPError(`cannot perform request on '${path}'`, res.status, res.headers.raw());
                });
            }
            return res.json();
        });
    }
    signRequest(httpMethod, url, body = '', timestamp) {
        let s = [
            this._applicationSecret,
            this._consumerKey,
            httpMethod,
            url,
            body,
            timestamp.toString()
        ];
        return '$1$' + crypto_1.createHash('sha1').update(s.join('+')).digest('hex');
    }
}
exports.Client = Client;
exports.default = Client;
//# sourceMappingURL=client.js.map