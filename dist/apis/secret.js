"use strict";
// GENERATED SDK for secret API
Object.defineProperty(exports, "__esModule", { value: true });
class Secret {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieve a secret sent by email [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/secret/retrieve#POST)
     */
    RetrieveASecretSentByEmail(id) {
        let url = `/secret/retrieve`;
        return this.client.request('POST', url, { id });
    }
}
exports.Secret = Secret;
//# sourceMappingURL=secret.js.map