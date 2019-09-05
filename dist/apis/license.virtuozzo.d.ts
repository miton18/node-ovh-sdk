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
export declare enum LicenseChangeIpMessageEnum {
    OK = "OK",
    DESTINATIONNOTALLOWED = "destinationNotAllowed",
    LICENSEALREADYEXISTS = "licenseAlreadyExists",
    NOTALLOWEDTOHANDLETHIS = "notAllowedToHandleThis",
    NOTSAMETYPE = "notSameType",
    SAMEIP = "sameIp",
    VERSIONNOTALLOWED = "versionNotAllowed"
}
export interface LicenseChangeIpStatus {
    success: boolean;
    message: LicenseChangeIpMessageEnum;
}
export declare enum LicenseLicenseTypeEnum {
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
export interface LicenseOption {
    expirationDate: string;
    canBeDeleted: boolean;
    version?: string;
    amount?: string;
    label: LicenseOptionLabel;
}
export declare enum LicenseOptionLabel {
    ANTISPAM_SPAMASSASSIN = "ANTISPAM_SPAMASSASSIN",
    ANTIVIRUS_DRWEB = "ANTIVIRUS_DRWEB",
    ANTIVIRUS_KASPERSKY = "ANTIVIRUS_KASPERSKY",
    DOMAINS = "DOMAINS",
    LANGUAGE_PACK = "LANGUAGE_PACK",
    POWERPACK = "POWERPACK",
    SQL_SERVER = "SQL_SERVER",
    VIRTUOZZO_CONTAINERS = "VIRTUOZZO_CONTAINERS"
}
export interface LicenseOrderableVirtuozzoCompatibilityInfos {
    compliantContainers: LicenseOrderableVirtuozzoContainerNumberEnum[];
    potentialProblems: LicensePotentialProblemVirtuozzoEnum[];
    version: LicenseOrderableVirtuozzoVersionEnum;
}
export declare type LicenseOrderableVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
export declare enum LicenseOrderableVirtuozzoVersionEnum {
    VIRTUOZZO_CONTAINERS_4_FOR_LINUX = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
    VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS = "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
    VIRTUOZZO_4 = "virtuozzo-4",
    VIRTUOZZO_4_FOR_WINDOWS = "virtuozzo-4-for-windows"
}
export declare enum LicensePotentialProblemVirtuozzoEnum {
    ISLINUXOS = "isLinuxOs",
    ISOSVIRTUOZZO4LIKE = "isOsVirtuozzo4Like",
    ISWINDOWSOS = "isWindowsOs"
}
export declare enum LicenseStateEnum {
    OK = "ok",
    RELEASED = "released",
    TERMINATED = "terminated",
    TODELIVER = "toDeliver"
}
export interface LicenseTask {
    action: LicenseActionType;
    todoDate: string;
    name: string;
    lastUpdate: string;
    status: LicenseTaskStateEnum;
    taskId: number;
    doneDate?: string;
}
export declare enum LicenseTaskStateEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface LicensevirtuozzoVirtuozzo {
    containerNumber: LicenseVirtuozzoContainerNumberEnum;
    ip: string;
    domain: string;
    licenseId: string;
    informationKey?: string;
    productKey?: string;
    creation: string;
    status: LicenseStateEnum;
    deleteAtExpiration: boolean;
    version: LicenseVirtuozzoVersionEnum;
}
export declare type LicenseVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
export interface LicenseVirtuozzoOrderConfiguration {
    orderableVersions: LicenseOrderableVirtuozzoCompatibilityInfos[];
    serviceType: LicenseLicenseTypeEnum;
}
export declare enum LicenseVirtuozzoVersionEnum {
    VIRTUOZZO_CONTAINERS_4_FOR_LINUX = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
    VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS = "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"
}
export declare enum ServiceRenewalTypeEnum {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
export interface ServiceRenewType {
    manualPayment?: boolean;
    deleteAtExpiration: boolean;
    automatic: boolean;
    forced: boolean;
    period?: number;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export declare enum ServiceTerminationFutureUseEnum {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReasonEnum {
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
export interface ServicesService {
    engagedUpTo?: string;
    expiration: string;
    status: ServiceStateEnum;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    contactTech: string;
    creation: string;
    serviceId: number;
    renewalType: ServiceRenewalTypeEnum;
    canDeleteAtExpiration: boolean;
    contactBilling: string;
    domain: string;
    contactAdmin: string;
}
export declare class LicenseVirtuozzo {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<LicensevirtuozzoVirtuozzo>;
    AlterThisObjectProperties(serviceName: string, payload: LicensevirtuozzoVirtuozzo): Promise<void>;
    ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]>;
    WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus>;
    MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    OptionsLinkedToThisLicense(serviceName: string, label?: LicenseOptionLabel): Promise<LicenseOptionLabel[]>;
    ReleaseThisOption(label: LicenseOptionLabel, serviceName: string): Promise<LicenseTask>;
    TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    GetTheOrderableVirtuozzoVersions(ip: string): Promise<LicenseVirtuozzoOrderConfiguration[]>;
}
//# sourceMappingURL=license.virtuozzo.d.ts.map