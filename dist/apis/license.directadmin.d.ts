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
export declare enum LicenseChangeIpMessage {
    OK = "OK",
    DESTINATIONNOTALLOWED = "destinationNotAllowed",
    LICENSEALREADYEXISTS = "licenseAlreadyExists",
    NOTALLOWEDTOHANDLETHIS = "notAllowedToHandleThis",
    NOTSAMETYPE = "notSameType",
    SAMEIP = "sameIp",
    VERSIONNOTALLOWED = "versionNotAllowed"
}
/**
 * License change ip status return
 */
export interface LicenseChangeIpStatus {
    message: LicenseChangeIpMessage;
    success: boolean;
}
/**
 * Your DirectAdmin license
 */
export interface LicensedirectadminDirectAdmin {
    clientId: number;
    creation: string;
    deleteAtExpiration: boolean;
    domain: string;
    ip: string;
    licenseId: string;
    os: LicenseDirectAdminOs;
    status: LicenseState;
    version: LicenseDirectAdminVersion;
}
/**
 * The serviceTypes allowed to Order a DirectAdmin version
 */
export interface LicenseDirectAdminOrderConfiguration {
    orderableVersions: LicenseOrderableDirectAdminCompatibilityInfos[];
    serviceType: LicenseLicenseType;
}
export declare enum LicenseDirectAdminOs {
    CENTOS_5_0_32 = "CentOs_5.0_32",
    CENTOS_5_0_64 = "CentOs_5.0_64",
    CENTOS_6_32 = "CentOs_6_32",
    CENTOS_6_64 = "CentOs_6_64",
    CENTOS_7_64 = "CentOs_7_64",
    DEBIAN_5_0_32 = "Debian_5.0_32",
    DEBIAN_5_0_64 = "Debian_5.0_64",
    DEBIAN_6_0_32 = "Debian_6.0_32",
    DEBIAN_6_0_64 = "Debian_6.0_64",
    DEBIAN_7_0_32 = "Debian_7.0_32",
    DEBIAN_7_0_64 = "Debian_7.0_64",
    DEBIAN_8_0_64 = "Debian_8.0_64",
    FREEBSD_7_X_32 = "FreeBSD_7.x_32",
    FREEBSD_7_X_64 = "FreeBSD_7.x_64",
    FREEBSD_8_X_64 = "FreeBSD_8.x_64",
    FREEBSD_9_X_64 = "FreeBSD_9.x_64"
}
export declare enum LicenseDirectAdminVersion {
    DIRECTADMIN_1 = "DIRECTADMIN_1",
    DIRECTADMIN_LICENSE = "directadmin-license"
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
 * All versions available for DirectAdmin products
 */
export interface LicenseOrderableDirectAdminCompatibilityInfos {
    version: LicenseOrderableDirectAdminVersion;
}
export declare enum LicenseOrderableDirectAdminVersion {
    DIRECTADMIN_1 = "DIRECTADMIN_1",
    DIRECTADMIN_LICENSE = "directadmin-license"
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
export declare class LicenseDirectadmin {
    private client;
    constructor(client: Client);
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Your DirectAdmin license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<LicensedirectadminDirectAdmin>;
    /**
     * Your DirectAdmin license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: LicensedirectadminDirectAdmin): Promise<void>;
    /**
     * allowedDestinationIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/allowedDestinationIp#GET)
     */
    ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]>;
    /**
     * canLicenseBeMovedTo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/canLicenseBeMovedTo#GET)
     */
    WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus>;
    /**
     * changeIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/changeIp#POST)
     */
    MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask>;
    /**
     * changeOs operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/changeOs#POST)
     */
    ChangeTheOperatingSystemForALicense(os: LicenseDirectAdminOs, serviceName: string): Promise<LicenseTask>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]>;
    /**
     * licenses Todos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * Get the orderable DirectAdmin versions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/orderableVersions#GET)
     */
    GetTheOrderableDirectAdminVersions(ip: string): Promise<LicenseDirectAdminOrderConfiguration[]>;
}
//# sourceMappingURL=license.directadmin.d.ts.map