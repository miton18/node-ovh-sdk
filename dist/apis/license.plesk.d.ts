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
    message: LicenseChangeIpMessageEnum;
    success: boolean;
}
export declare type LicenseDomainNumberEnum = '0' | '1' | '10' | '100' | '30' | '300' | 'unlimited';
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
    version?: string;
    canBeDeleted: boolean;
    expirationDate: string;
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
export declare enum LicenseOrderableAntivirusEnum {
    DR_WEB = "DR_WEB",
    KASPERSKY_UNLIMITED_MAILBOXES = "KASPERSKY_UNLIMITED_MAILBOXES",
    KASPERSKY = "kaspersky"
}
export interface LicenseOrderablePleskCompatibilityInfos {
    version: LicensePleskVersionEnum;
    potentialProblems: LicensePotentialProblemPleskEnum[];
    canHavePowerPack: boolean;
    compliantDomains: LicenseOrderablePleskDomainNumberEnum[];
    canHaveWordpressToolkit: boolean;
    compliantLanguagePack: LicenseOrderablePleskLanguagePackEnum[];
    compliantAntivirus: LicenseOrderableAntivirusEnum[];
    canHaveResellerManagement: boolean;
    compliantApplicationSets: LicensePleskApplicationSetEnum[];
}
export declare type LicenseOrderablePleskDomainNumberEnum = '10' | '100' | '30' | '300' | 'hostingsuite' | 'unlimited';
export declare type LicenseOrderablePleskLanguagePackEnum = '1' | '1-extra-language-for-plesk12' | '2' | '2-extra-languages-for-plesk12' | '3' | '3-extra-languages-for-plesk12' | '4' | '4-extra-languages-for-plesk12' | '5' | '5-extra-languages-for-plesk12' | 'unlimited' | 'unlimited-extra-languages-for-plesk12';
export interface LicensepleskPlesk {
    domain: string;
    status: LicenseStateEnum;
    licenseId: string;
    creation: string;
    ip: string;
    key: string;
    informationKey?: string;
    version: LicensePleskVersionEnum;
    deleteAtExpiration: boolean;
    productKey?: string;
    domainNumber?: LicenseDomainNumberEnum;
}
export declare enum LicensePleskApplicationSetEnum {
    APPLICATIONPACK = "applicationpack",
    DEVELOPERPACK = "developerpack",
    POWER_PACK_FOR_PLESK12 = "power-pack-for-plesk12",
    POWERPACK = "powerpack"
}
export interface LicensePleskOrderConfiguration {
    serviceType: LicenseLicenseTypeEnum;
    orderableVersions: LicenseOrderablePleskCompatibilityInfos[];
}
export declare enum LicensePleskVersionEnum {
    PLESK_10_AND_LATER = "PLESK_10_AND_LATER",
    PLESK_10_AND_LATER_FOR_KVM = "PLESK_10_AND_LATER_FOR_KVM",
    PLESK_10_AND_LATER_FOR_VMWARE = "PLESK_10_AND_LATER_FOR_VMWARE",
    PLESK_10_AND_LATER_FOR_VZ = "PLESK_10_AND_LATER_FOR_VZ",
    PLESK_10_AND_LATER_FOR_WIN = "PLESK_10_AND_LATER_FOR_WIN",
    PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE = "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE",
    PLESK_10_AND_LATER_FOR_WIN_FOR_VZ = "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ",
    PLESK_10_AND_LATER_FOR_WIN_FOR_XEN = "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN",
    PLESK_10_AND_LATER_FOR_XEN = "PLESK_10_AND_LATER_FOR_XEN",
    PLESK_12_VPS_WEB_ADMIN = "PLESK_12_VPS_WEB_ADMIN",
    PLESK_12_VPS_WEB_APP = "PLESK_12_VPS_WEB_APP",
    PLESK_12_VPS_WEB_HOST = "PLESK_12_VPS_WEB_HOST",
    PLESK_12_VPS_WEB_HOST_CLNX = "PLESK_12_VPS_WEB_HOST_CLNX",
    PLESK_12_VPS_WEB_PRO = "PLESK_12_VPS_WEB_PRO",
    PLESK_12_VPS_WEB_PRO_CLNX = "PLESK_12_VPS_WEB_PRO_CLNX",
    PLESK_12_WEB_ADMIN = "PLESK_12_WEB_ADMIN",
    PLESK_12_WEB_APP = "PLESK_12_WEB_APP",
    PLESK_12_WEB_HOST = "PLESK_12_WEB_HOST",
    PLESK_12_WEB_HOST_CLNX = "PLESK_12_WEB_HOST_CLNX",
    PLESK_12_WEB_PRO = "PLESK_12_WEB_PRO",
    PLESK_12_WEB_PRO_CLNX = "PLESK_12_WEB_PRO_CLNX",
    PLESK_75_RELOADED = "PLESK_75_RELOADED",
    PLESK_80 = "PLESK_80",
    PLESK_80_FOR_VZ = "PLESK_80_FOR_VZ",
    PLESK_81_FOR_WIN = "PLESK_81_FOR_WIN",
    PLESK_9 = "PLESK_9",
    PLESK_95 = "PLESK_95",
    PLESK_95_FOR_VZ = "PLESK_95_FOR_VZ",
    PLESK_95_FOR_WIN = "PLESK_95_FOR_WIN",
    PLESK_9_FOR_VZ = "PLESK_9_FOR_VZ",
    PLESK_9_FOR_WIN = "PLESK_9_FOR_WIN",
    PLESK_ONYX_VPS_WEB_ADMIN = "PLESK_ONYX_VPS_WEB_ADMIN",
    PLESK_ONYX_VPS_WEB_APP = "PLESK_ONYX_VPS_WEB_APP",
    PLESK_ONYX_VPS_WEB_HOST = "PLESK_ONYX_VPS_WEB_HOST",
    PLESK_ONYX_VPS_WEB_HOST_CLNX = "PLESK_ONYX_VPS_WEB_HOST_CLNX",
    PLESK_ONYX_VPS_WEB_PRO = "PLESK_ONYX_VPS_WEB_PRO",
    PLESK_ONYX_VPS_WEB_PRO_CLNX = "PLESK_ONYX_VPS_WEB_PRO_CLNX",
    PLESK_ONYX_WEB_ADMIN = "PLESK_ONYX_WEB_ADMIN",
    PLESK_ONYX_WEB_APP = "PLESK_ONYX_WEB_APP",
    PLESK_ONYX_WEB_HOST = "PLESK_ONYX_WEB_HOST",
    PLESK_ONYX_WEB_HOST_CLNX = "PLESK_ONYX_WEB_HOST_CLNX",
    PLESK_ONYX_WEB_PRO = "PLESK_ONYX_WEB_PRO",
    PLESK_ONYX_WEB_PRO_CLNX = "PLESK_ONYX_WEB_PRO_CLNX",
    PLESK_12_WEBADMIN_FOR_VPS = "plesk-12-webadmin-for-vps",
    PLESK_12_WEBHOST = "plesk-12-webhost",
    PLESK_12_WEBHOST_FOR_VPS = "plesk-12-webhost-for-vps",
    PLESK_12_WEBPRO = "plesk-12-webpro",
    PLESK_12_WEBPRO_FOR_VPS = "plesk-12-webpro-for-vps"
}
export declare enum LicensePotentialProblemPleskEnum {
    ISHOSTOSHYPERVLIKE = "isHostOsHyperVLike",
    ISHOSTOSVMWARELIKE = "isHostOsVMwareLike",
    ISHOSTOSVIRTUOZZO4LIKE = "isHostOsVirtuozzo4Like",
    ISHOSTOSXENLIKE = "isHostOsXenLike",
    ISLINUXOS = "isLinuxOs",
    ISOSCLOUDLINUX = "isOsCloudLinux",
    ISOSPLESK10ANDLATER = "isOsPlesk10andLater",
    ISOSPLESK12 = "isOsPlesk12",
    ISOSPLESKONYX = "isOsPleskOnyx",
    ISWINDOWSOS = "isWindowsOs"
}
export declare enum LicenseStateEnum {
    OK = "ok",
    RELEASED = "released",
    TERMINATED = "terminated",
    TODELIVER = "toDeliver"
}
export interface LicenseTask {
    status: LicenseTaskStateEnum;
    todoDate: string;
    name: string;
    action: LicenseActionType;
    lastUpdate: string;
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
    domain: string;
    status: ServiceStateEnum;
    contactAdmin: string;
    contactTech: string;
    renew?: ServiceRenewType;
    creation: string;
    contactBilling: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    canDeleteAtExpiration: boolean;
    engagedUpTo?: string;
    renewalType: ServiceRenewalTypeEnum;
    serviceId: number;
}
export declare class LicensePlesk {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<LicensepleskPlesk>;
    AlterThisObjectProperties(serviceName: string, payload: LicensepleskPlesk): Promise<void>;
    ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]>;
    WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus>;
    MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    OptionsAttachedToThisLicense(serviceName: string): Promise<LicenseOptionLabel[]>;
    ReleaseThisOption(label: LicenseOptionLabel, serviceName: string): Promise<LicenseTask>;
    TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    GetTheOrderablePleskVersionsAndTheirAssociatedCompatibilities(ip: string): Promise<LicensePleskOrderConfiguration[]>;
}
//# sourceMappingURL=license.plesk.d.ts.map