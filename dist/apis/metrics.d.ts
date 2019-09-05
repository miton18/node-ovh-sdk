import { Client } from '../client';
/**
 * Structure holding the consumption
 */
export interface Consumption {
    ddp: number;
    mads: number;
}
/**
 * Structure holding the elements about a label
 */
export interface Label {
    key: string;
    value: string;
}
export declare enum OfferType {
    CLOUD = "cloud",
    LIVE = "live"
}
/**
 * Structure holding the options for a service
 */
export interface Option {
    ddp: number;
    lastModification: string;
    mads: number;
}
export declare enum Permission {
    READ = "read",
    WRITE = "write"
}
/**
 * Structure holding the elements about a region
 */
export interface Region {
    description: string;
    name: string;
}
/**
 * Structure holding the elements about a service
 */
export interface Service {
    description: string;
    name: string;
    offer: string;
    quota: Option;
    region: Region;
    shouldUpgrade: boolean;
    status: ServiceStatus;
    type: OfferType;
}
export declare enum ServiceStatus {
    NEW = "new",
    ALIVE = "alive",
    DISABLED = "disabled",
    DEAD = "dead"
}
/**
 * Structure holding the elements about a token
 */
export interface Token {
    access: string;
    createdAt: string;
    description: string;
    expiryAt: string;
    id: string;
    isRevoked: boolean;
    labels: Label[];
    permission: Permission;
}
export interface LookupTokenCreation {
    accessToken: string;
}
export interface QuotaUpdate {
    quota: number;
}
export interface TokenCreation {
    description?: string;
    labels?: Label[];
    permission: Permission;
}
export interface TokenUpdate {
    description?: string;
}
export interface Update {
    description?: string;
}
export declare enum ServiceRenewalType {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
    manualPayment?: boolean;
    period?: number;
}
export declare enum ServiceState {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export declare enum ServiceTerminationFutureUse {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReason {
    FEATURES_DONT_SUIT_ME = "FEATURES_DONT_SUIT_ME",
    LACK_OF_PERFORMANCES = "LACK_OF_PERFORMANCES",
    MIGRATED_TO_ANOTHER_OVH_PRODUCT = "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
    MIGRATED_TO_COMPETITOR = "MIGRATED_TO_COMPETITOR",
    NOT_ENOUGH_RECOGNITION = "NOT_ENOUGH_RECOGNITION",
    NOT_NEEDED_ANYMORE = "NOT_NEEDED_ANYMORE",
    NOT_RELIABLE = "NOT_RELIABLE",
    NO_ANSWER = "NO_ANSWER",
    OTHER = "OTHER",
    PRODUCT_DIMENSION_DONT_SUIT_ME = "PRODUCT_DIMENSION_DONT_SUIT_ME",
    PRODUCT_TOOLS_DONT_SUIT_ME = "PRODUCT_TOOLS_DONT_SUIT_ME",
    TOO_EXPENSIVE = "TOO_EXPENSIVE",
    TOO_HARD_TO_USE = "TOO_HARD_TO_USE",
    UNSATIFIED_BY_CUSTOMER_SUPPORT = "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
/**
 * Details about a Service
 */
export interface ServicesService {
    canDeleteAtExpiration: boolean;
    contactAdmin: string;
    contactBilling: string;
    contactTech: string;
    creation: string;
    domain: string;
    engagedUpTo?: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    renewalType: ServiceRenewalType;
    serviceId: number;
    status: ServiceState;
}
export declare class Metrics {
    private client;
    constructor(client: Client);
    /**
     * Operations about the METRICS service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Operations about the METRICS service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D#GET)
     */
    GetService(serviceName: string): Promise<Service>;
    /**
     * Operations about the METRICS service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D#PUT)
     */
    ModifyService(serviceName: string, payload: Update): Promise<Service>;
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * Metrics service consumption [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/consumption#GET)
     */
    GetConsumptionForYourService(serviceName: string, duration?: number): Promise<Consumption>;
    /**
     * Look for service/token [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/lookup/token#POST)
     */
    FindTokenIDForASpecificToken(serviceName: string, payload: LookupTokenCreation): Promise<string[]>;
    /**
     * Metrics service quota management [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/quota#PUT)
     */
    SetOverquota(serviceName: string, payload: QuotaUpdate): Promise<string>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<ServicesService>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token#GET)
     */
    GetListOfTokens(serviceName: string): Promise<string[]>;
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token#POST)
     */
    CreateAToken(serviceName: string, payload: TokenCreation): Promise<Token>;
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#DELETE)
     */
    RevokeAToken(serviceName: string, tokenId: string): Promise<void>;
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#GET)
     */
    GetASpecificToken(serviceName: string, tokenId: string): Promise<Token>;
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#PUT)
     */
    ModifyAToken(serviceName: string, tokenId: string, payload: TokenUpdate): Promise<Token>;
}
//# sourceMappingURL=metrics.d.ts.map