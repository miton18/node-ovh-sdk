import { Client } from '../client';
/**
 * Anycast IP of a CDN customer
 */
export interface CdnanycastAnycast {
    anycast: string;
    backendLimit: number;
    backendUse: number;
    cacheRuleLimitPerDomain: number;
    lastQuotaOrder?: string;
    logUrl: string;
    offer?: string;
    quota: number;
    service: string;
}
/**
 * Backend for a domain
 */
export interface CdnanycastBackend {
    ip: string;
}
/**
 * CacheRules for a domain
 */
export interface CdnanycastCacheRule {
    cacheRuleId: number;
    cacheType: CdnanycastCacheRuleCacheType;
    domain: string;
    fileMatch: string;
    fileType: CdnanycastCacheRuleFileType;
    status: CdnanycastCacheRuleStatus;
    ttl: number;
}
export declare enum CdnanycastCacheRuleCacheType {
    FORCECACHE = "forceCache",
    NOCACHE = "noCache"
}
export declare enum CdnanycastCacheRuleFileType {
    EXTENSION = "extension",
    FILE = "file",
    FOLDER = "folder"
}
export declare enum CdnanycastCacheRuleStatus {
    CREATING = "creating",
    DELETING = "deleting",
    ERROR = "error",
    OFF = "off",
    ON = "on",
    UPDATING = "updating"
}
/**
 * Domain on CDN
 */
export interface CdnanycastDomain {
    cacheRuleUse: number;
    cname: string;
    domain: string;
    status: CdnanycastDomainStatus;
    type: CdnanycastDomainType;
}
export declare enum CdnanycastDomainStatus {
    ERROR = "error",
    OFF = "off",
    ON = "on",
    REMOVING = "removing"
}
export declare enum CdnanycastDomainType {
    PLAIN = "plain",
    SSL = "ssl"
}
/**
 * URL to real time logs
 */
export interface CdnanycastLogsURL {
    expirationDate: string;
    url: string;
}
/**
 * CDN Pop
 */
export interface CdnanycastPop {
    city: string;
    comment: string;
    name: string;
    status: CdnanycastPopStatus;
}
export declare enum CdnanycastPopStatus {
    DOWN = "down",
    OK = "ok",
    REROUTED = "rerouted",
    UNKNOWN = "unknown"
}
/**
 * CDN Ssl
 */
export interface CdnanycastSsl {
    certificateProvider: string;
    certificateValidFrom?: string;
    certificateValidTo?: string;
    cn?: string;
    name: string;
    status: CdnanycastSslState;
}
export declare enum CdnanycastSslState {
    CHECKING = "checking",
    CREATING = "creating",
    ERROR = "error",
    OFF = "off",
    ON = "on",
    REMOVING = "removing",
    UPDATING = "updating",
    UPLOADING = "uploading"
}
/**
 * A structure describing type of a stats hash
 */
export interface CdnanycastStatsDataType {
    date: string;
    value?: number;
}
export declare enum CdnanycastStatsPeriod {
    DAY = "day",
    MONTH = "month",
    WEEK = "week"
}
export declare enum CdnanycastStatsType {
    BACKEND = "backend",
    CDN = "cdn",
    THREAT = "threat"
}
export declare enum CdnanycastStatsValue {
    BANDWIDTH = "bandwidth",
    REQUEST = "request"
}
/**
 * Task on a CDN
 */
export interface CdnanycastTask {
    comment?: string;
    function: CdnanycastTaskFunction;
    status: CdnanycastTaskState;
    taskId: number;
}
export declare enum CdnanycastTaskFunction {
    FLUSH = "flush",
    FLUSHALL = "flushAll",
    GENERATESSL = "generateSsl",
    INSTALLSSL = "installSsl",
    REINSTALLSSL = "reinstallSsl",
    REMOVEDOMAIN = "removeDomain",
    UNINSTALLSSL = "uninstallSsl",
    UPDATECACHERULE = "updateCacheRule"
}
export declare enum CdnanycastTaskState {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
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
export declare class CdnDedicated {
    private client;
    constructor(client: Client);
    /**
     * Operations about the CDNANYCAST service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Anycast IP of a CDN customer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<CdnanycastAnycast>;
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * List the cdnanycast.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains#GET)
     */
    DomainsAssociatedToThisAnycast(serviceName: string): Promise<string[]>;
    /**
     * List the cdnanycast.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains#POST)
     */
    AddADomainOnCDN(domain: string, serviceName: string): Promise<CdnanycastDomain>;
    /**
     * Domain on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#GET)
     */
    /**
     * Domain on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#PUT)
     */
    AlterThisObjectProperties(domain: string, serviceName: string, payload: CdnanycastDomain): Promise<void>;
    /**
     * Domain on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#DELETE)
     */
    RemoveADomainFromTheCDN(domain: string, serviceName: string): Promise<CdnanycastTask>;
    /**
     * List the cdnanycast.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends#GET)
     */
    BackendAssociatedToTheDomain(domain: string, serviceName: string): Promise<string[]>;
    /**
     * List the cdnanycast.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends#POST)
     */
    AddABackendIP(domain: string, ip: string, serviceName: string): Promise<CdnanycastBackend>;
    /**
     * Backend for a domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends/%7Bip%7D#GET)
     */
    /**
     * Backend for a domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends/%7Bip%7D#DELETE)
     */
    RemoveABackendIP(domain: string, ip: string, serviceName: string): Promise<string>;
    /**
     * List the cdnanycast.CacheRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules#GET)
     */
    CacheRulesAssociatedToTheDomain(domain: string, serviceName: string, fileMatch?: string): Promise<number[]>;
    /**
     * List the cdnanycast.CacheRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules#POST)
     */
    AddACacheRuleToADomain(cacheType: CdnanycastCacheRuleCacheType, domain: string, fileMatch: string, fileType: CdnanycastCacheRuleFileType, serviceName: string, ttl: number): Promise<CdnanycastCacheRule>;
    /**
     * CacheRules for a domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#GET)
     */
    /**
     * CacheRules for a domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#PUT)
     */
    /**
     * CacheRules for a domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#DELETE)
     */
    RemoveCacheRule(cacheRuleId: number, domain: string, serviceName: string): Promise<CdnanycastTask>;
    /**
     * flush operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/flush#POST)
     */
    FlushTheCache(cacheRuleId: number, domain: string, serviceName: string): Promise<CdnanycastTask>;
    /**
     * List the cdnanycast.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/tasks#GET)
     */
    TaskAssociatedToTheCacheRule(cacheRuleId: number, domain: string, serviceName: string): Promise<number[]>;
    /**
     * Task on a CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * flush operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/flush#POST)
     */
    FlushAllCache(domain: string, serviceName: string): Promise<CdnanycastTask>;
    /**
     * logs operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/logs#POST)
     */
    GenerateURLToRealTimeLogs(domain: string, serviceName: string): Promise<CdnanycastLogsURL>;
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/statistics#GET)
     */
    ReturnStatsAboutADomain(domain: string, period: CdnanycastStatsPeriod, serviceName: string, type: CdnanycastStatsType, value: CdnanycastStatsValue): Promise<CdnanycastStatsDataType[]>;
    /**
     * List the cdnanycast.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/tasks#GET)
     */
    TaskAssociatedToTheDomain(domain: string, serviceName: string): Promise<number[]>;
    /**
     * Task on a CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * logs operations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/logs#POST)
     */
    /**
     * quota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/quota#GET)
     */
    ReturnQuotaHistory(period: CdnanycastStatsPeriod, serviceName: string): Promise<CdnanycastStatsDataType[]>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * CDN Ssl [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#GET)
     */
    /**
     * CDN Ssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#POST)
     */
    AddASSLOnCDNOrGenerateALetsEncryptCertificate(name: string, serviceName: string, certificate?: string, chain?: string, key?: string): Promise<CdnanycastSsl>;
    /**
     * CDN Ssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#DELETE)
     */
    RemoveSSLOfTheCDN(serviceName: string): Promise<CdnanycastTask>;
    /**
     * List the cdnanycast.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/tasks#GET)
     */
    TaskAssociatedToTheSsl(serviceName: string, _function?: CdnanycastTaskFunction, status?: CdnanycastTaskState): Promise<number[]>;
    /**
     * Task on a CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/tasks/%7BtaskId%7D#GET)
     */
    /**
     * update operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/update#POST)
     */
    UpdateAnExistingSSLWithACustomCertificate(certificate: string, key: string, serviceName: string, chain?: string): Promise<CdnanycastTask>;
    /**
     * List the cdnanycast.Pop objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/pops#GET)
     */
    ListOfCDNPops(): Promise<string[]>;
}
//# sourceMappingURL=cdn.dedicated.d.ts.map