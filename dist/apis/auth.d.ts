import { Client } from '../client';
/**
 * API Credential
 */
export interface Credential {
    applicationId: number;
    creation: string;
    credentialId: number;
    expiration?: string;
    lastUse?: string;
    ovhSupport: boolean;
    rules: AuthAccessRule[];
    status: AuthCredentialState;
}
/**
 * Access rule required for the application
 */
export interface AuthAccessRule {
    method: HttpMethod;
    path: string;
}
/**
 * Credential request to get access to the API
 */
export interface AuthCredential {
    consumerKey: string;
    state: AuthCredentialState;
    validationUrl?: string;
}
export declare enum AuthCredentialState {
    EXPIRED = "expired",
    PENDINGVALIDATION = "pendingValidation",
    REFUSED = "refused",
    VALIDATED = "validated"
}
/**
 * Details about the authentication used
 */
export interface AuthDetails {
    description?: string;
    method: AuthMethod;
    roles?: string[];
    user?: string;
}
export declare enum AuthMethod {
    ACCOUNT = "account",
    PROVIDER = "provider",
    USER = "user"
}
export declare enum HttpMethod {
    DELETE = "DELETE",
    GET = "GET",
    POST = "POST",
    PUT = "PUT"
}
export declare class Auth {
    private client;
    constructor(client: Client);
    /**
     * Operations with credentials [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/credential#POST)
     */
    RequestANewCredentialForYourApplication(accessRules: AuthAccessRule[], redirection?: string): Promise<AuthCredential>;
    /**
     * Get the current credential details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/currentCredential#GET)
     */
    GetTheCurrentCredentialDetails(): Promise<Credential>;
    /**
     * Details about the current authentication [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/details#GET)
     */
    DetailsAboutTheCurrentAuthentication(): Promise<AuthDetails>;
    /**
     * Expire current credential [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/logout#POST)
     */
    ExpireCurrentCredential(): Promise<void>;
    /**
     * Get the time of OVH servers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/time#GET)
     */
    GetTheCurrentTimeOfTheOVHServersSinceUNIXEpoch(): Promise<number>;
}
//# sourceMappingURL=auth.d.ts.map