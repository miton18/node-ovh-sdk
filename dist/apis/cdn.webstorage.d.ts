import { Client } from '../client';
/**
 * Static CDN
 */
export interface CdnwebstorageAccount {
    domain: string;
    server: string;
    storageLimit: number;
    storageUsage: number;
}
/**
 * A structure with credentials for using openstack account
 */
export interface CdnwebstorageAccountCredentials {
    endpoint: string;
    login: string;
    password: string;
    tenant: string;
}
/**
 * A structure describing type of a stats hash
 */
export interface CdnwebstorageStatsDataType {
    date: string;
    value: number;
}
export declare enum CdnwebstorageStatsPeriod {
    DAY = "day",
    MONTH = "month",
    WEEK = "week"
}
export declare enum CdnwebstorageStatsType {
    BACKEND = "backend",
    CDN = "cdn",
    QUOTA = "quota"
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
export declare class CdnWebstorage {
    private client;
    constructor(client: Client);
    /**
     * Operations about the CDNSTATIC service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Static CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<CdnwebstorageAccount>;
    /**
     * credentials operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/credentials#GET)
     */
    GivesForCustomerCredentialsToAccesssSwiftAccount(serviceName: string): Promise<CdnwebstorageAccountCredentials>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/statistics#GET)
     */
    ReturnStatsAboutBandwidthConsumption(period: CdnwebstorageStatsPeriod, serviceName: string, type: CdnwebstorageStatsType): Promise<CdnwebstorageStatsDataType[]>;
}
//# sourceMappingURL=cdn.webstorage.d.ts.map