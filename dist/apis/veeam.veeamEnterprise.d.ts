import { Client } from '../client';
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
/**
 * Veeeam Enterprise offer
 */
export interface VeeamveeamEnterpriseAccount {
    ip?: string;
    port?: number;
    serviceName: string;
    sourceIp: string;
}
/**
 * Operation with the Enterprise Account
 */
export interface VeeamveeamEnterpriseTask {
    endDate?: string;
    name: string;
    progress: number;
    startDate?: string;
    state: VeeamEnterpriseTaskState;
    taskId: number;
}
export declare enum VeeamEnterpriseTaskState {
    CANCELED = "canceled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TOCREATE = "toCreate",
    TODO = "todo",
    UNFIXED = "unfixed",
    WAITING = "waiting",
    WAITINGFORCHILDS = "waitingForChilds"
}
export declare class VeeamVeeamEnterprise {
    private client;
    constructor(client: Client);
    /**
     * Operations about the VEEAMENTERPRISE service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Veeeam Enterprise offer [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<VeeamveeamEnterpriseAccount>;
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * register operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/register#POST)
     */
    RegisterVeeamBackupServerToVeeamEnterprise(ip: string, password: string, port: number, serviceName: string, username: string): Promise<VeeamveeamEnterpriseTask[]>;
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * List the veeam.veeamEnterprise.Task objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithVeeamEnterprise(serviceName: string, name?: string, state?: VeeamEnterpriseTaskState): Promise<number[]>;
    /**
     * Operation with the Enterprise Account [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * update operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/update#POST)
     */
    UpdateVeeamEnterpriseConfiguration(ip: string, password: string, port: number, serviceName: string, username: string): Promise<VeeamveeamEnterpriseTask[]>;
}
//# sourceMappingURL=veeam.veeamEnterprise.d.ts.map