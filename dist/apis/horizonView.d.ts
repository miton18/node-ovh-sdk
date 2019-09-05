import { Client } from '../client';
export declare enum HorizonViewAccessPointType {
    PRIVATEACCESSPOINT = "privateAccessPoint",
    PUBLICACCESSPOINT = "publicAccessPoint"
}
/**
 * You can reach from your virtual desktops, your customer network
 */
export interface HorizonViewCustomerNetwork {
    customerNetworkId: number;
    name: string;
    network: string;
}
/**
 * You can reach from your virtual desktops, your customer network
 */
export interface HorizonViewCustomerNetworkPool {
    customerNetworkId: number;
    name: string;
    network: string;
}
/**
 * Horizon As A Service Customer  User
 */
export interface HorizonViewCustomerUser {
    email?: string;
    id: number;
    username: string;
}
/**
 * Cloud Desktop Infrastructure Datacenter
 */
export interface HorizonViewDatacenter {
    activeDirectoryIP: string;
    adminDomain: string;
    adminNetworkNextHop: string;
    adminPrivateNetwork: string;
    customerIntercoIP: string;
    customerIntercoMask: string;
    customerIntercoVlanId: number;
    datacenterId: number;
    name: string;
    serviceName: string;
}
/**
 * Horizon View as a Service
 */
export interface HorizonViewDedicatedHorizon {
    masterZone: HorizonViewZone;
    privateCloudName: string;
    privateCloudZone: HorizonViewZone;
    publicUrl: string;
    state: HorizonViewState;
    storageAccelerator: boolean;
    version: string;
}
/**
 * List all Active Directories linked to your CDI Active Directory
 */
export interface HorizonViewDomainTrust {
    activeDirectoryIP: string;
    dns1?: string;
    dns2?: string;
    domain: string;
    domainTrustId: number;
}
/**
 * All informations about access point
 */
export interface HorizonViewPool {
    accessPointId: number;
    dhcpNetmask: string;
    dhcpNetwork: string;
    externalUrl: string;
    intercoNextHop?: string;
    intercoPrivateNextHop?: string;
    portGroupId: string;
    state: HorizonViewState;
    twoFA: boolean;
    type: HorizonViewPoolType;
}
export declare enum HorizonViewPoolType {
    HYBRIDPOOL = "hybridPool",
    PRIVATEPOOL = "privatePool",
    PUBLICPOOL = "publicPool"
}
export declare enum HorizonViewState {
    AVAILABLE = "available",
    CREATING = "creating",
    DELIVERED = "delivered",
    DISABLED = "disabled",
    ERROR = "error",
    RESERVED = "reserved"
}
/**
 * Operation on a Horizon View component
 */
export interface HorizonViewTask {
    description?: string;
    lastModificationDate?: string;
    name: string;
    progress: number;
    state: HorizonViewTaskState;
    taskId: number;
}
export declare enum HorizonViewTaskState {
    CANCELED = "canceled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    FIXING = "fixing",
    TOCANCEL = "toCancel",
    TOCREATE = "toCreate",
    TODO = "todo",
    UNKNOWN = "unknown",
    WAITINGFORCHILDS = "waitingForChilds",
    WAITINGTODO = "waitingTodo"
}
/**
 * Horizon As A Service User
 */
export interface HorizonViewUser {
    username: string;
}
export declare enum HorizonViewZone {
    BEAUHARNOIS = "Beauharnois",
    ROUBAIX = "Roubaix",
    STRASBOURG = "Strasbourg"
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
export declare class HorizonView {
    private client;
    constructor(client: Client);
    /**
     * Operations about the HORIZONVIEW service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Cloud Desktop Infrastructure Datacenter [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<HorizonViewDatacenter>;
    /**
     * List the horizonView.Pool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint#GET)
     */
    PoolAssociatedWithThisDatacenter(serviceName: string): Promise<number[]>;
    /**
     * List the horizonView.Pool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint#POST)
     */
    AddNewAccessPointToCreateANewNetwork(poolType: HorizonViewPoolType, serviceName: string, privateBlock?: string, privateVlan?: number, vrouterPoolPublicIp?: string): Promise<HorizonViewTask[]>;
    /**
     * All informations about access point [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D#GET)
     */
    /**
     * All informations about access point [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D#DELETE)
     */
    DeleteThisAccessPoint(accessPointId: number, serviceName: string): Promise<HorizonViewTask[]>;
    /**
     * changeSessionTimeout operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/changeSessionTimeout#POST)
     */
    ManageYourSessionTimeoutOnUnifiedAccessGateway(accessPointId: number, expiration: number, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask>;
    /**
     * List the horizonView.CustomerNetworkPool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork#GET)
     */
    YouCanReachFromTheDesktopsYourPrivateNetwork(accessPointId: number, serviceName: string): Promise<number[]>;
    /**
     * List the horizonView.CustomerNetworkPool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork#POST)
     */
    AddANewNetwork(accessPointId: number, network: string, serviceName: string): Promise<HorizonViewTask[]>;
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork/%7BcustomerNetworkId%7D#GET)
     */
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork/%7BcustomerNetworkId%7D#DELETE)
     */
    DeleteThisCustomerNetwork(accessPointId: number, customerNetworkId: number, serviceName: string): Promise<HorizonViewTask[]>;
    /**
     * disableTwoFA operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/disableTwoFA#POST)
     */
    DisableTwoFactorAuthenticationOnYourPool(accessPointId: number, serviceName: string): Promise<HorizonViewTask>;
    /**
     * disableWindowsUsernameOption operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/disableWindowsUsernameOption#POST)
     */
    DisableWindowsUsernameOptionOnUnifiedAccessGateway(accessPointId: number, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask>;
    /**
     * enableTwoFA operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/enableTwoFA#POST)
     */
    EnableTwoFactorAuthenticationOnYourPool(accessPointId: number, radiusIp: string, secret: string, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask>;
    /**
     * enableWindowsUsernameOption operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/enableWindowsUsernameOption#POST)
     */
    EnableWindowsUsernameOptionOnUnifiedAccessGateway(accessPointId: number, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * List the horizonView.CustomerNetwork objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork#GET)
     */
    /**
     * List the horizonView.CustomerNetwork objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork#POST)
     */
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork/%7BcustomerNetworkId%7D#GET)
     */
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork/%7BcustomerNetworkId%7D#DELETE)
     */
    /**
     * Horizon View as a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon#GET)
     */
    /**
     * List the horizonView.CustomerUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser#GET)
     */
    AccountToAccessToYourPool(serviceName: string): Promise<string[]>;
    /**
     * List the horizonView.CustomerUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser#POST)
     */
    CreateANewCustomerUser(serviceName: string, username: string, email?: string, password?: string): Promise<HorizonViewTask[]>;
    /**
     * Horizon As A Service Customer  User [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D#GET)
     */
    /**
     * Horizon As A Service Customer  User [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D#DELETE)
     */
    DeleteThisCustomerUser(serviceName: string, username: string): Promise<HorizonViewTask[]>;
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D/changePassword#POST)
     */
    ChangeHorizonViewCustomerUserPassword(serviceName: string, username: string, password?: string): Promise<HorizonViewTask>;
    /**
     * disableStorageAccelerator operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/disableStorageAccelerator#POST)
     */
    DisableTheViewStorageAcceleratorOptionOnVCenter(serviceName: string): Promise<HorizonViewTask>;
    /**
     * enableStorageAccelerator operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/enableStorageAccelerator#POST)
     */
    EnableTheViewStorageAcceleratorOptionOnVCenter(serviceName: string): Promise<HorizonViewTask>;
    /**
     * List the horizonView.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/task#GET)
     */
    TasksAssociatedWithThisDedicatedHorizon(serviceName: string, state?: HorizonViewTaskState): Promise<number[]>;
    /**
     * Operation on a Horizon View component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/task/%7BtaskId%7D#GET)
     */
    /**
     * Horizon As A Service User [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user#GET)
     */
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user/changePassword#POST)
     */
    ChangeHorizonViewUserPassword(serviceName: string, password?: string): Promise<HorizonViewTask>;
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user/changeProperties#POST)
     */
    ChangeHorizonViewUserProperties(serviceName: string, email?: string): Promise<HorizonViewTask>;
    /**
     * List the horizonView.DomainTrust objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust#GET)
     */
    ListAllActiveDirectoriesLinkedToYourCDIActiveDirectory(serviceName: string): Promise<number[]>;
    /**
     * List the horizonView.DomainTrust objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust#POST)
     */
    LinkYourActiveDirectoryToYourCDIActiveDirectory(activeDirectoryIP: string, domain: string, serviceName: string, dns1?: string, dns2?: string): Promise<HorizonViewTask[]>;
    /**
     * List all Active Directories linked to your CDI Active Directory [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D#GET)
     */
    /**
     * addChildDomain operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addChildDomain#POST)
     */
    AddAChildDomainForThisDomain(activeDirectoryIP: string, domain: string, domainTrustId: number, passphrase: string, serviceAccountPassword: string, serviceName: string): Promise<HorizonViewTask>;
    /**
     * addDomainController operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addDomainController#POST)
     */
    AddADomainControllerForThisDomain(domain: string, domainControllerIp: string, domainTrustId: number, serviceName: string): Promise<HorizonViewTask>;
    /**
     * addDomainUserOnComposer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addDomainUserOnComposer#POST)
     */
    AddADomainUserToAddYourDesktopInYourActiveDirectory(domain: string, domainTrustId: number, password: string, serviceName: string, username: string): Promise<HorizonViewTask>;
    /**
     * createTrust operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/createTrust#POST)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
}
//# sourceMappingURL=horizonView.d.ts.map