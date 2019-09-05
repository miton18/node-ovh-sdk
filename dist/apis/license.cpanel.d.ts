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
 * Your Cpanel license
 */
export interface LicensecpanelCpanel {
    creation: string;
    deleteAtExpiration: boolean;
    domain: string;
    ip: string;
    licenseId: string;
    status: LicenseState;
    version: LicenseCpanelVersion;
}
/**
 * The serviceTypes allowed to Order a CPanel version
 */
export interface LicenseCpanelOrderConfiguration {
    orderableVersions: LicenseOrderableCpanelCompatibilityInfos[];
    serviceType: LicenseLicenseType;
}
export declare enum LicenseCpanelVersion {
    VERSION_11_FOR_LINUX = "VERSION_11_FOR_LINUX",
    VERSION_11_FOR_VIRTUOZZO = "VERSION_11_FOR_VIRTUOZZO",
    VERSION_11_FOR_VPS = "VERSION_11_FOR_VPS",
    CPANEL_LICENSE_VERSION_11 = "cpanel-license-version-11",
    CPANEL_LICENSE_VERSION_11_FOR_VIRTUOZZO = "cpanel-license-version-11-for-virtuozzo",
    CPANEL_LICENSE_VERSION_11_FOR_VPS = "cpanel-license-version-11-for-vps"
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
 * All versions available for Cpanel products
 */
export interface LicenseOrderableCpanelCompatibilityInfos {
    version: LicenseOrderableCpanelVersion;
}
export declare enum LicenseOrderableCpanelVersion {
    VERSION_11_FOR_LINUX = "VERSION_11_FOR_LINUX",
    VERSION_11_FOR_VIRTUOZZO = "VERSION_11_FOR_VIRTUOZZO",
    VERSION_11_FOR_VPS = "VERSION_11_FOR_VPS",
    CPANEL_LICENSE_VERSION_11 = "cpanel-license-version-11",
    CPANEL_LICENSE_VERSION_11_FOR_VIRTUOZZO = "cpanel-license-version-11-for-virtuozzo",
    CPANEL_LICENSE_VERSION_11_FOR_VPS = "cpanel-license-version-11-for-vps"
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
export declare class LicenseCpanel {
    private client;
    constructor(client: Client);
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Your Cpanel license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<LicensecpanelCpanel>;
    /**
     * Your Cpanel license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: LicensecpanelCpanel): Promise<void>;
    /**
     * allowedDestinationIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/allowedDestinationIp#GET)
     */
    ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]>;
    /**
     * canLicenseBeMovedTo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/canLicenseBeMovedTo#GET)
     */
    WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus>;
    /**
     * changeIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/changeIp#POST)
     */
    MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]>;
    /**
     * licenses Todos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * Get the orderable CPanel versions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cpanel/orderableVersions#GET)
     */
    GetTheOrderableCPanelVersions(ip: string): Promise<LicenseCpanelOrderConfiguration[]>;
}
//# sourceMappingURL=license.cpanel.d.ts.map