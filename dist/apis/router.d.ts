import { Client } from '../client';
/**
 * Network Dnat
 */
export interface RouterDnat {
    destinationPort?: number;
    id: number;
    newDestinationNet: any;
    newDestinationPort?: number;
    protocol: RouterProtocol;
    sourceNet?: any;
    status: RouterStatus;
}
export declare enum RouterIpStatus {
    BLACKLISTED = "blacklisted",
    DELETED = "deleted",
    FREE = "free",
    INSTALLING = "installing",
    OK = "ok",
    QUARANTINED = "quarantined",
    REMOVING = "removing",
    SUSPENDED = "suspended"
}
/**
 * Network
 */
export interface RouterNetwork {
    creationDate: string;
    description?: string;
    id: number;
    ipNet: any;
    status: RouterIpStatus;
    vlanTag?: number;
}
/**
 * Private Link to another service
 */
export interface RouterPrivateLink {
    creationDate: string;
    id: number;
    name: string;
    peerServiceName: string;
    status: RouterStatus;
}
/**
 * Received Private Link requests
 */
export interface RouterPrivateLinkRequest {
    creationDate: string;
    status: RouterPrivLinkReqStatus;
}
/**
 * Outgoing routes configured inside a Private Link
 */
export interface RouterPrivateLinkRoute {
    creationDate: string;
    id: number;
    network: string;
    status: RouterStatus;
}
export declare enum RouterPrivLinkReqAction {
    ACCEPT = "accept",
    CANCEL = "cancel",
    REJECT = "reject"
}
export declare enum RouterPrivLinkReqStatus {
    ACCEPTED = "accepted",
    CANCELLED = "cancelled",
    ERROR = "error",
    PENDING = "pending",
    REJECTED = "rejected"
}
export declare enum RouterProtocol {
    ANY = "any",
    TCP = "tcp",
    UDP = "udp"
}
/**
 * Router
 */
export interface RouterRouter {
    name: string;
    service: string;
    status: RouterStatus;
}
/**
 * Network Snat
 */
export interface RouterSnat {
    destinationNet?: any;
    destinationPort?: number;
    id: number;
    newSourceNet: any;
    newSourcePort?: number;
    protocol: RouterProtocol;
    status: RouterStatus;
}
export declare enum RouterStatus {
    CREATING = "creating",
    ERROR = "error",
    OFF = "off",
    ON = "on",
    REMOVING = "removing",
    SUSPENDED = "suspended"
}
/**
 * Task
 */
export interface RouterTask {
    creationDate: string;
    finishDate?: string;
    function: RouterTaskFunction;
    id: number;
    status: RouterTaskStatus;
}
export declare enum RouterTaskFunction {
    ADDDNAT = "addDnat",
    ADDDNATMASTER = "addDnatMaster",
    ADDNETWORK = "addNetwork",
    ADDNETWORKMASTER = "addNetworkMaster",
    ADDPRIVATELINK = "addPrivateLink",
    ADDPRIVATELINKMASTER = "addPrivateLinkMaster",
    ADDPRIVATELINKROUTE = "addPrivateLinkRoute",
    ADDPRIVATELINKROUTEMASTER = "addPrivateLinkRouteMaster",
    ADDSNAT = "addSnat",
    ADDSNATMASTER = "addSnatMaster",
    DELDNAT = "delDnat",
    DELDNATMASTER = "delDnatMaster",
    DELNETWORK = "delNetwork",
    DELNETWORKMASTER = "delNetworkMaster",
    DELPRIVATELINK = "delPrivateLink",
    DELPRIVATELINKMASTER = "delPrivateLinkMaster",
    DELPRIVATELINKROUTE = "delPrivateLinkRoute",
    DELPRIVATELINKROUTEMASTER = "delPrivateLinkRouteMaster",
    DELSNAT = "delSnat",
    DELSNATMASTER = "delSnatMaster",
    VPNCREATION = "vpnCreation",
    VPNDELETION = "vpnDeletion",
    VPNSETCONFIG = "vpnSetConfig",
    VPNSETCONFIGMASTER = "vpnSetConfigMaster",
    VPNSETSECRETS = "vpnSetSecrets",
    VPNSETSECRETSMASTER = "vpnSetSecretsMaster"
}
export declare enum RouterTaskStatus {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
/**
 * Virtual Private Network
 */
export interface RouterVpn {
    clientIp?: string;
    clientPrivNet: any;
    id: number;
    serverIp: string;
    serverPrivNet: any;
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
export declare class Router {
    private client;
    constructor(client: Client);
    /**
     * Operations about the ROUTER service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Router [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<RouterRouter>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * List the router.Network objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network#GET)
     */
    NetworksMountedOnThisRouter(serviceName: string): Promise<any>;
    /**
     * List the router.Network objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network#POST)
     */
    AddANetworkToYourRouter(description: string, ipNet: any, serviceName: string, vlanTag?: number): Promise<RouterTask>;
    /**
     * Network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#GET)
     */
    /**
     * Network [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#PUT)
     */
    AlterThisObjectProperties(ipNet: any, serviceName: string, payload: RouterNetwork): Promise<void>;
    /**
     * Network [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#DELETE)
     */
    RemoveThisNetworkFromYourRouter(ipNet: any, serviceName: string): Promise<RouterTask>;
    /**
     * List the router.PrivateLink objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink#GET)
     */
    PrivateLinksSetUpOnThisRouter(serviceName: string): Promise<string[]>;
    /**
     * List the router.PrivateLink objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink#POST)
     */
    AddANewPrivateLinkToYourRouterService(name: string, peerServiceName: string, serviceName: string): Promise<string>;
    /**
     * Private Link to another service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#GET)
     */
    /**
     * Private Link to another service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#PUT)
     */
    /**
     * Private Link to another service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#DELETE)
     */
    RemoveAnExistingPrivateLinkFromYourRouterService(peerServiceName: string, serviceName: string): Promise<RouterTask>;
    /**
     * Received Private Link requests [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/request#GET)
     */
    /**
     * manage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/request/manage#POST)
     */
    AcceptRejectOrCancelAPendingRequest(action: RouterPrivLinkReqAction, peerServiceName: string, serviceName: string): Promise<string>;
    /**
     * List the router.PrivateLinkRoute objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route#GET)
     */
    RoutesSetUpInAPrivateLink(peerServiceName: string, serviceName: string): Promise<string[]>;
    /**
     * List the router.PrivateLinkRoute objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route#POST)
     */
    AddANewOutgoingRouteToYourRouter(network: string, peerServiceName: string, serviceName: string): Promise<RouterTask>;
    /**
     * Outgoing routes configured inside a Private Link [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route/%7Bnetwork%7D#GET)
     */
    /**
     * Outgoing routes configured inside a Private Link [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route/%7Bnetwork%7D#DELETE)
     */
    DeleteAnExistingRouteFromYourRouter(network: string, peerServiceName: string, serviceName: string): Promise<RouterTask>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * List the router.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/task#GET)
     */
    TasksForThisRouter(serviceName: string, _function?: RouterTaskFunction, status?: RouterTaskStatus): Promise<number[]>;
    /**
     * Task [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * List the router.Vpn objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn#GET)
     */
    VPNAssociatedWithThisRouter(serviceName: string): Promise<number[]>;
    /**
     * List the router.Vpn objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn#POST)
     */
    AddAVPNToYourRouter(clientPrivNet: any, psk: string, serverPrivNet: any, serviceName: string, clientIp?: string): Promise<RouterVpn>;
    /**
     * Virtual Private Network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#GET)
     */
    /**
     * Virtual Private Network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#PUT)
     */
    /**
     * Virtual Private Network [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#DELETE)
     */
    DeleteAVPNFromYourRouter(id: number, serviceName: string): Promise<RouterTask>;
    /**
     * setPsk operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D/setPsk#POST)
     */
    ChangeYourVPNPSK(id: number, psk: string, serviceName: string): Promise<RouterTask>;
}
//# sourceMappingURL=router.d.ts.map