import { Client } from '../client';
/**
 * Backend on zone
 */
export interface CdnwebsiteBackend {
    ipv4: string;
    status: CdnwebsiteBackendStatus;
}
export declare enum CdnwebsiteBackendStatus {
    CREATING = "creating",
    ERROR = "error",
    ON = "on",
    REMOVING = "removing"
}
/**
 * Domain on CDN
 */
export interface CdnwebsiteDomain {
    domain: string;
    status: CdnwebsiteDomainStatus;
}
export declare enum CdnwebsiteDomainStatus {
    ERROR = "error",
    ON = "on",
    REMOVING = "removing"
}
export declare enum CdnwebsiteDomainZoneStatus {
    ERROR = "error",
    ON = "on",
    REMOVING = "removing"
}
/**
 * A structure describing type of a stats hash
 */
export interface CdnwebsiteStatsDataType {
    date: string;
    value: number;
}
export declare enum CdnwebsiteStatsPeriod {
    DAY = "day",
    MONTH = "month",
    WEEK = "week"
}
export declare enum CdnwebsiteStatsType {
    BACKEND = "backend",
    CDN = "cdn"
}
export declare enum CdnwebsiteStatsValue {
    BANDWIDTH = "bandwidth",
    REQUEST = "request"
}
/**
 * Task on CDN
 */
export interface CdnwebsiteTask {
    comment?: string;
    function: CdnwebsiteTaskFunction;
    status: CdnwebsiteTaskState;
    taskId: number;
}
export declare enum CdnwebsiteTaskFunction {
    FLUSHALL = "flushAll",
    INSTALLBACKEND = "installBackend",
    REMOVEBACKEND = "removeBackend",
    REMOVEDOMAIN = "removeDomain",
    REMOVEZONE = "removeZone"
}
export declare enum CdnwebsiteTaskState {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
/**
 * Website CDN
 */
export interface CdnwebsiteWebsite {
    anycast: string;
    offer: string;
    service: string;
}
/**
 * Zone on CDN
 */
export interface CdnwebsiteZone {
    status: CdnwebsiteDomainZoneStatus;
    zone: string;
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
export declare class CdnWebsite {
    private client;
    constructor(client: Client);
    /**
     * Operations about the CDNWEBSITE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Website CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<CdnwebsiteWebsite>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * Zone on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#GET)
     */
    /**
     * Zone on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#POST)
     */
    ConfigureAZoneOnCDN(serviceName: string, zone: string): Promise<CdnwebsiteZone>;
    /**
     * Zone on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#DELETE)
     */
    RemoveAZoneFromTheCDN(serviceName: string): Promise<CdnwebsiteTask>;
    /**
     * List the cdn.website.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends#GET)
     */
    BackendAssociatedToThisZone(serviceName: string): Promise<string[]>;
    /**
     * List the cdn.website.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends#POST)
     */
    ConfigureABackendOnTheZone(ipv4: string, serviceName: string): Promise<CdnwebsiteTask>;
    /**
     * Backend on zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D#GET)
     */
    /**
     * Backend on zone [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D#DELETE)
     */
    RemoveABackendFromTheZone(ipv4: string, serviceName: string): Promise<CdnwebsiteTask>;
    /**
     * List the cdn.website.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D/tasks#GET)
     */
    TaskAssociatedToThisBackend(ipv4: string, serviceName: string): Promise<number[]>;
    /**
     * Task on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * List the cdn.website.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains#GET)
     */
    DomainAssociatedToThisZone(serviceName: string): Promise<string[]>;
    /**
     * List the cdn.website.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains#POST)
     */
    ConfigureADomainOnCDN(domain: string, serviceName: string): Promise<CdnwebsiteDomain>;
    /**
     * Domain on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D#GET)
     */
    /**
     * Domain on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D#DELETE)
     */
    RemoveADomainFromTheCDN(domain: string, serviceName: string): Promise<CdnwebsiteTask>;
    /**
     * flush operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/flush#POST)
     */
    FlushAllCache(domain: string, serviceName: string): Promise<CdnwebsiteTask>;
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/statistics#GET)
     */
    GetStatisticsAboutRequestOnCDNBandwidthValueInBytes(domain: string, period: CdnwebsiteStatsPeriod, serviceName: string, type: CdnwebsiteStatsType, value: CdnwebsiteStatsValue): Promise<CdnwebsiteStatsDataType[]>;
    /**
     * List the cdn.website.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/tasks#GET)
     */
    TaskAssociatedToThisDomain(domain: string, serviceName: string): Promise<number[]>;
    /**
     * Task on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * List the cdn.website.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/tasks#GET)
     */
    TaskAssociatedToThisZone(serviceName: string): Promise<number[]>;
}
//# sourceMappingURL=cdn.website.d.ts.map