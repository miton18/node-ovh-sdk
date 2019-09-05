import { Client } from '../client';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
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
/**
 * Veeam Cloud Connect account
 */
export interface VeeamCloudConnectAccount {
    location: VeeamCloudConnectLocation;
    productOffer: VeeamCloudConnectOffer;
    serviceName: string;
    vmCount?: number;
}
/**
 * Veeam Backup Repository
 */
export interface VeeamCloudConnectBackupRepository {
    inventoryName: string;
    quota: any;
    quotaUsed?: any;
    replicationZone?: VeeamCloudConnectLocation;
    state: VeeamCloudConnectBackupRepositoryState;
    usage?: number;
}
export declare enum VeeamCloudConnectBackupRepositoryState {
    CONFIGURING = "configuring",
    DELIVERED = "delivered",
    DISABLED = "disabled",
    DISABLING = "disabling",
    ERROR = "error",
    MIGRATING = "migrating",
    REMOVING = "removing"
}
export declare enum VeeamCloudConnectLocation {
    BHS1 = "bhs1",
    RBX2 = "rbx2",
    SBG1 = "sbg1"
}
export declare enum VeeamCloudConnectOffer {
    ADVANCED = "advanced",
    DEMO = "demo",
    STARTER = "starter"
}
/**
 * Details about Veeam Cloud Connect offer
 */
export interface VeeamCloudConnectofferCapabilities {
    defaultQuota: number;
    maxQuota: number;
    maxStoragesCount: number;
    minimumUsage: number;
    multiStorages: boolean;
    replication: boolean;
    vmCapacity: number;
    wanAccelerator: boolean;
}
/**
 * Operation with the Cloud Tenant Account
 */
export interface VeeamCloudConnectTask {
    endDate?: string;
    name: string;
    progress: number;
    startDate?: string;
    state: VeeamCloudConnectTaskState;
    taskId: number;
}
export declare enum VeeamCloudConnectTaskState {
    CANCELED = "canceled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    FIXING = "fixing",
    PROBLEM = "problem",
    TOCREATE = "toCreate",
    TODO = "todo",
    UNKNOWN = "unknown",
    WAITINGTODO = "waitingTodo"
}
export declare class VeeamCloudConnect {
    private client;
    constructor(client: Client);
    /**
     * Operations about the VEEAMCC service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Veeam Cloud Connect account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<VeeamCloudConnectAccount>;
    /**
     * List the veeamCloudConnect.BackupRepository objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository#GET)
     */
    VeeamBackupRepositoryLinkedToThisVeeamCloudConnectAccount(serviceName: string): Promise<string[]>;
    /**
     * List the veeamCloudConnect.BackupRepository objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository#POST)
     */
    AddANewBackupRepositoryToYourProfessionalAccount(serviceName: string): Promise<VeeamCloudConnectTask[]>;
    /**
     * Veeam Backup Repository [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D#GET)
     */
    /**
     * Veeam Backup Repository [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D#DELETE)
     */
    DeleteThisBackupRepository(inventoryName: string, serviceName: string): Promise<VeeamCloudConnectTask[]>;
    /**
     * upgradeQuota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D/upgradeQuota#POST)
     */
    ChangeYourQuota(inventoryName: string, newQuota: number, serviceName: string): Promise<VeeamCloudConnectTask[]>;
    /**
     * capabilities operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/capabilities#GET)
     */
    ShowCapabilitiesOfYourCurrentOffer(serviceName: string): Promise<VeeamCloudConnectofferCapabilities>;
    /**
     * orderableUpgrade operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/orderableUpgrade#GET)
     */
    ListThePossibleUpgradesOnYourVeeamCloudConnectAccount(serviceName: string): Promise<VeeamCloudConnectOffer[]>;
    /**
     * resetPassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/resetPassword#POST)
     */
    ResetYourCloudTenantPassword(serviceName: string): Promise<VeeamCloudConnectTask>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * List the veeamCloudConnect.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithCloudTenant(serviceName: string, name?: string, state?: VeeamCloudConnectTaskState): Promise<number[]>;
}
//# sourceMappingURL=veeamCloudConnect.d.ts.map