import { Client } from '../client';
export declare enum LicenseActionType {
    ADDWINDOWFROMEXISTINGSERIAL = "addWindowFromExistingSerial",
    CHANGEIP = "changeIp",
    CHANGEOS = "changeOs",
    INSTALLLICENSE = "installLicense",
    OPTIONUPGRADE = "optionUpgrade",
    RELEASEOPTION = "releaseOption",
    VERSIONUPGRADE = "versionUpgrade"
}
/**
 * Your CloudLinux license
 */
export interface LicensecloudLinuxCloudLinux {
    creation: string;
    domain: string;
    ip: string;
    licenseId: string;
    status: LicenseState;
    version: LicenseCloudLinuxVersion;
}
/**
 * Allowed CloudLinux versions per matching serviceTypes
 */
export interface LicenseCloudLinuxOrderConfiguration {
    orderableVersions: LicenseOrderableCloudLinuxCompatibilityInfos[];
    serviceType: LicenseLicenseType;
}
export declare enum LicenseCloudLinuxVersion {
    SINGLE = "SINGLE",
    WITH_CPANEL = "WITH_CPANEL",
    WITH_PLESK12 = "WITH_PLESK12",
    CLOUDLINUX_LICENSE = "cloudlinux-license"
}
export declare enum LicenseLicenseType {
    DEDICATED = "dedicated",
    DEDICATEDCLOUD = "dedicatedCloud",
    DEDICATEDFAILOVER = "dedicatedFailover",
    FAILOVER = "failover",
    VM = "vm",
    VPS = "vps",
    VPS_CEPH = "vps_ceph",
    VPS_CLASSIC = "vps_classic",
    VPS_CLOUD = "vps_cloud",
    VPS_CLOUD_2016 = "vps_cloud_2016",
    VPS_SSD = "vps_ssd"
}
/**
 * All versions available for CloudLinux products
 */
export interface LicenseOrderableCloudLinuxCompatibilityInfos {
    version: LicenseCloudLinuxVersion;
}
export declare enum LicenseState {
    OK = "ok",
    RELEASED = "released",
    TERMINATED = "terminated",
    TODELIVER = "toDeliver"
}
/**
 * licenses Todos
 */
export interface LicenseTask {
    action: LicenseActionType;
    doneDate?: string;
    lastUpdate: string;
    name: string;
    status: LicenseTaskState;
    taskId: number;
    todoDate: string;
}
export declare enum LicenseTaskState {
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
export declare class LicenseCloudLinux {
    private client;
    constructor(client: Client);
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Your CloudLinux license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<LicensecloudLinuxCloudLinux>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]>;
    /**
     * licenses Todos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * Get the orderable CloudLinux versions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/orderableVersions#GET)
     */
    GetTheOrderableCloudLinuxVersions(ip: string): Promise<LicenseCloudLinuxOrderConfiguration[]>;
}
//# sourceMappingURL=license.cloudLinux.d.ts.map