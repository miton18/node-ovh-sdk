"use strict";
// GENERATED SDK for contact API
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get form characteristics [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/contact/form#GET)
     */
    GetFormCharacteristics() {
        let url = `/contact/form`;
        return this.client.request('GET', url);
    }
    /**
     * Send form following characteristics of /contact/form [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/contact/form/send#POST)
     */
    SendFormFollowingCharacteristicsOfContactform(form, type) {
        let url = `/contact/form/send`;
        return this.client.request('POST', url, { form, type });
    }
}
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map