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
 * All versions available for WorkLight products
 */
export interface LicenseOrderableWorkLightCompatibilityInfos {
    version: LicenseWorkLightVersion;
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
/**
 * Your WorkLight license
 */
export interface LicenseworklightWorkLight {
    creation: string;
    deleteAtExpiration: boolean;
    domain: string;
    ip: string;
    licenseId: string;
    status: LicenseState;
    version: LicenseWorkLightVersion;
}
/**
 * Allowed WorkLight versions per matching serviceTypes
 */
export interface LicenseWorkLightOrderConfiguration {
    orderableVersions: LicenseOrderableWorkLightCompatibilityInfos[];
    serviceType: LicenseLicenseType;
}
export declare enum LicenseWorkLightVersion {
    VERSION_6_1U_1CPU = "VERSION-6.1U.1CPU",
    VERSION_6_1U_2CPU = "VERSION-6.1U.2CPU",
    VERSION_6_2U_1CPU = "VERSION-6.2U.1CPU",
    VERSION_6_2U_2CPU = "VERSION-6.2U.2CPU",
    VERSION_6_EVALUATION = "VERSION-6.EVALUATION",
    WORKLIGHT_LICENSE_VERSION_6_1CPU_1U = "worklight-license-version-6-1cpu-1u",
    WORKLIGHT_LICENSE_VERSION_6_1CPU_2U = "worklight-license-version-6-1cpu-2u",
    WORKLIGHT_LICENSE_VERSION_6_2CPU_1U = "worklight-license-version-6-2cpu-1u",
    WORKLIGHT_LICENSE_VERSION_6_2CPU_2U = "worklight-license-version-6-2cpu-2u"
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
export declare class LicenseWorklight {
    private client;
    constructor(client: Client);
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Your WorkLight license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<LicenseworklightWorkLight>;
    /**
     * Your WorkLight license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: LicenseworklightWorkLight): Promise<void>;
    /**
     * allowedDestinationIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/allowedDestinationIp#GET)
     */
    ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]>;
    /**
     * canLicenseBeMovedTo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/canLicenseBeMovedTo#GET)
     */
    WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus>;
    /**
     * changeIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/changeIp#POST)
     */
    MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]>;
    /**
     * licenses Todos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * Get the orderable WorkLight versions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/orderableVersions#GET)
     */
    GetTheOrderableWorkLightVersions(ip: string): Promise<LicenseWorkLightOrderConfiguration[]>;
}
//# sourceMappingURL=license.worklight.d.ts.map