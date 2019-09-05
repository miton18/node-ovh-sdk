"use strict";
// GENERATED SDK for auth API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * All states a Credential can be in
 */
var AuthCredentialState;
(function (AuthCredentialState) {
    AuthCredentialState["EXPIRED"] = "expired";
    AuthCredentialState["PENDINGVALIDATION"] = "pendingValidation";
    AuthCredentialState["REFUSED"] = "refused";
    AuthCredentialState["VALIDATED"] = "validated";
})(AuthCredentialState = exports.AuthCredentialState || (exports.AuthCredentialState = {}));
/*
 * All Authentication methods available
 */
var AuthMethod;
(function (AuthMethod) {
    AuthMethod["ACCOUNT"] = "account";
    AuthMethod["PROVIDER"] = "provider";
    AuthMethod["USER"] = "user";
})(AuthMethod = exports.AuthMethod || (exports.AuthMethod = {}));
/*
 * All HTTP methods available
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
class Auth {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations with credentials [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/credential#POST)
     */
    RequestANewCredentialForYourApplication(accessRules, redirection) {
        let url = `/auth/credential`;
        return this.client.request('POST', url, { accessRules, redirection });
    }
    /**
     * Get the current credential details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/currentCredential#GET)
     */
    GetTheCurrentCredentialDetails() {
        let url = `/auth/currentCredential`;
        return this.client.request('GET', url);
    }
    /**
     * Details about the current authentication [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/details#GET)
     */
    DetailsAboutTheCurrentAuthentication() {
        let url = `/auth/details`;
        return this.client.request('GET', url);
    }
    /**
     * Expire current credential [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/logout#POST)
     */
    ExpireCurrentCredential() {
        let url = `/auth/logout`;
        return this.client.request('POST', url);
    }
    /**
     * Get the time of OVH servers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/time#GET)
     */
    GetTheCurrentTimeOfTheOVHServersSinceUNIXEpoch() {
        let url = `/auth/time`;
        return this.client.request('GET', url);
    }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map