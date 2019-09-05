import { Client } from '../client';
/**
 * AllDom administration
 */
export interface AllDomAllDom {
    name: string;
    offer: DomainOffer;
    type: AllDomType;
}
/**
 * Domain name of a allDom
 */
export interface AllDomAllDomDomain {
    domain: string;
}
export declare enum AllDomType {
    FRENCH = "french",
    FRENCH_INTERNATIONAL = "french+international",
    INTERNATIONAL = "international"
}
export declare enum DomainOffer {
    DIAMOND = "diamond",
    GOLD = "gold",
    PLATINUM = "platinum"
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
export declare class AllDom {
    private client;
    constructor(client: Client);
    /**
     * Operations about the ALLDOM service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * AllDom administration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<AllDomAllDom>;
    /**
     * List the allDom.AllDomDomain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/domain#GET)
     */
    DomainsAttachedToThisAllDom(serviceName: string, domain?: string): Promise<string[]>;
    /**
     * Domain name of a allDom [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/domain/%7Bdomain%7D#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
}
//# sourceMappingURL=allDom.d.ts.map