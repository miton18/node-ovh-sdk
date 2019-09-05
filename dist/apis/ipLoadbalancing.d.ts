import { Client } from '../client';
export declare enum IpLoadbalancingBackendCustomerServerStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
/**
 * HTTP Farm
 */
export interface IpLoadbalancingbackendHttpBackendHttp {
    balance?: IpLoadbalancingBalanceHTTP;
    displayName?: string;
    farmId: number;
    port?: number;
    probe?: IpLoadbalancingBackendProbe;
    stickiness?: IpLoadbalancingStickinessHTTP;
    vrackNetworkId?: number;
    zone: string;
}
/**
 * HTTP Farm's Server
 */
export interface IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer {
    address: string;
    backendId: number;
    backup: boolean;
    chain?: string;
    cookie?: string;
    displayName?: string;
    port?: number;
    probe: boolean;
    proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion;
    serverId: number;
    serverState: IpLoadbalancingServerState[];
    ssl: boolean;
    status: IpLoadbalancingBackendCustomerServerStatus;
    weight?: number;
}
/**
 * Probe used to determine if a backend is alive and can handle requests
 */
export interface IpLoadbalancingBackendProbe {
    forceSsl?: boolean;
    interval?: number;
    match?: IpLoadbalancingProbeExpectMatch;
    method?: IpLoadbalancingProbeMethod;
    negate?: boolean;
    pattern?: string;
    port?: number;
    type?: IpLoadbalancingProbeType;
    url?: string;
}
/**
 * TCP Farm
 */
export interface IpLoadbalancingbackendTcpBackendTcp {
    balance?: IpLoadbalancingBalanceTCP;
    displayName?: string;
    farmId: number;
    port?: number;
    probe?: IpLoadbalancingBackendProbe;
    stickiness?: IpLoadbalancingStickinessTCP;
    vrackNetworkId?: number;
    zone: string;
}
/**
 * TCP Farm's Server
 */
export interface IpLoadbalancingbackendTcpCustomerServerBackendTCPServer {
    address: string;
    backendId: number;
    backup: boolean;
    chain?: string;
    displayName?: string;
    port?: number;
    probe: boolean;
    proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion;
    serverId: number;
    serverState: IpLoadbalancingServerState[];
    ssl: boolean;
    status: IpLoadbalancingBackendCustomerServerStatus;
    weight?: number;
}
/**
 * UDP Farm
 */
export interface IpLoadbalancingbackendUdpBackendUdp {
    displayName?: string;
    farmId: number;
    port: number;
    vrackNetworkId?: number;
    zone: string;
}
/**
 * UDP Farm's Server
 */
export interface IpLoadbalancingbackendUdpCustomerServerBackendUDPServer {
    address: string;
    backendId: number;
    displayName?: string;
    port?: number;
    serverId: number;
    status: IpLoadbalancingBackendCustomerServerStatus;
}
export declare enum IpLoadbalancingBalanceHTTP {
    FIRST = "first",
    LEASTCONN = "leastconn",
    ROUNDROBIN = "roundrobin",
    SOURCE = "source",
    URI = "uri"
}
export declare enum IpLoadbalancingBalanceTCP {
    FIRST = "first",
    LEASTCONN = "leastconn",
    ROUNDROBIN = "roundrobin",
    SOURCE = "source"
}
/**
 * a list of { type => [ Farm ids ] }
 */
export interface IpLoadbalancingDefinedFarm {
    id: number;
    type: string;
}
/**
 * a list of {type=>[Frontend ids]}
 */
export interface IpLoadbalancingDefinedFrontend {
    id: number;
    type: string;
}
/**
 * Defined routes name, type and id. Typically used to generate autocomplete lists.
 */
export interface IpLoadbalancingDefinedRoute {
    displayName?: string;
    routeId: number;
    type: string;
}
/**
 * Available farm probes options
 */
export interface IpLoadbalancingFarmAvailableProbe {
    matches: string[];
    method?: string[];
    negatableMatches: string[];
    port: boolean;
    type: string;
    url: boolean;
}
/**
 * Frontend HTTP
 */
export interface IpLoadbalancingfrontendHttpFrontendHttp {
    allowedSource?: string[];
    dedicatedIpfo?: string[];
    defaultFarmId?: number;
    defaultSslId?: number;
    disabled: boolean;
    displayName?: string;
    frontendId: number;
    hsts: boolean;
    httpHeader?: string[];
    port: string;
    redirectLocation?: string;
    ssl: boolean;
    zone: string;
}
/**
 * Frontend TCP
 */
export interface IpLoadbalancingfrontendTcpFrontendTcp {
    allowedSource?: string[];
    dedicatedIpfo?: string[];
    defaultFarmId?: number;
    defaultSslId?: number;
    disabled: boolean;
    displayName?: string;
    frontendId: number;
    port: string;
    ssl: boolean;
    zone: string;
}
/**
 * Frontend UDP
 */
export interface IpLoadbalancingfrontendUdpFrontendUdp {
    dedicatedIpfo?: string[];
    defaultFarmId?: number;
    disabled: boolean;
    displayName?: string;
    frontendId: number;
    port: string;
    zone: string;
}
/**
 * A structure describing the current state of an IPLB instances
 */
export interface IpLoadbalancingInstancesState {
    internalId: number;
    lastUpdateDate: string;
    state: string;
    zone: string;
}
/**
 * Your IP load balancing
 */
export interface IpLoadbalancingIp {
    displayName?: string;
    ipLoadbalancing: string;
    ipv4?: string;
    ipv6?: string;
    metricsToken?: string;
    offer: string;
    orderableZone: IpLoadbalancingOrderableZone[];
    serviceName: string;
    sslConfiguration?: IpLoadbalancingSslConfiguration;
    state: IpLoadbalancingIpState;
    vrackEligibility: boolean;
    vrackName?: string;
    zone: string[];
}
export declare enum IpLoadbalancingIpState {
    BLACKLISTED = "blacklisted",
    DELETED = "deleted",
    FREE = "free",
    OK = "ok",
    QUARANTINED = "quarantined",
    SUSPENDED = "suspended"
}
/**
 * a list of {zone, nat Ip}
 */
export interface IpLoadbalancingNatIps {
    ip: string[];
    zone: string;
}
/**
 * Available additional zone to order for a Load Balancer
 */
export interface IpLoadbalancingOrderableZone {
    name: string;
    planCode: string;
}
/**
 * The pending changes for a Load Balancer zone
 */
export interface IpLoadbalancingPendingChanges {
    number: number;
    zone: string;
}
export declare enum IpLoadbalancingProbeExpectMatch {
    CONTAINS = "contains",
    DEFAULT = "default",
    INTERNAL = "internal",
    MATCHES = "matches",
    STATUS = "status"
}
export declare enum IpLoadbalancingProbeMethod {
    GET = "GET",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    INTERNAL = "internal"
}
export declare enum IpLoadbalancingProbeType {
    HTTP = "http",
    INTERNAL = "internal",
    MYSQL = "mysql",
    OCO = "oco",
    PGSQL = "pgsql",
    SMTP = "smtp",
    TCP = "tcp"
}
export declare enum IpLoadbalancingProxyProtocolVersion {
    V1 = "v1",
    V2 = "v2",
    V2_SSL = "v2-ssl",
    V2_SSL_CN = "v2-ssl-cn"
}
/**
 * Quota informations for current billing period for this zone
 */
export interface IpLoadbalancingQuotaQuota {
    alert?: number;
    included?: number;
    lastUpdateDate?: string;
    resetDate?: string;
    total?: number;
    zone: string;
}
/**
 * QuotaHistory
 */
export interface IpLoadbalancingQuotaHistoryQuotaHistory {
    historizedDate: string;
    id: number;
    lastUpdateDate: string;
    resetDate: string;
    total: number;
    zone: string;
}
/**
 * Available route actions options
 */
export interface IpLoadbalancingRouteAvailableAction {
    destination?: string;
    name: string;
    status?: number[];
    type: string;
}
/**
 * Match rule to combine to build routes
 */
export interface IpLoadbalancingRouteAvailableRule {
    enum?: string[];
    hasSubField: boolean;
    matches: string[];
    name: string;
    pattern: string;
    type: string;
}
/**
 * HTTP Route
 */
export interface IpLoadbalancingRouteHttpRouteHttp {
    action: IpLoadbalancingRouteHttpAction;
    displayName?: string;
    frontendId?: number;
    routeId: number;
    rules: IpLoadbalancingRouteRule[];
    status: IpLoadbalancingRouteStatus;
    weight: number;
}
/**
 * Action triggered when all rules from route match
 */
export interface IpLoadbalancingRouteHttpAction {
    status?: number;
    target?: string;
    type: string;
}
/**
 * Match rule to combine to build routes
 */
export interface IpLoadbalancingRouteRule {
    field: string;
    match: IpLoadbalancingRouteRuleMatches;
    negate: boolean;
    pattern?: string;
    ruleId: number;
    subField?: string;
}
/**
 * Rule of a route
 */
export interface IpLoadbalancingRouteRuleRouteRule {
    displayName?: string;
    field: string;
    match: IpLoadbalancingRouteRuleMatches;
    negate: boolean;
    pattern?: string;
    ruleId: number;
    subField?: string;
}
export declare enum IpLoadbalancingRouteRuleMatches {
    CONTAINS = "contains",
    ENDSWITH = "endswith",
    EXISTS = "exists",
    IN = "in",
    INTERNAL = "internal",
    IS = "is",
    MATCHES = "matches",
    STARTSWITH = "startswith"
}
export declare enum IpLoadbalancingRouteStatus {
    CREATING = "creating",
    DELETING = "deleting",
    INTERNAL = "internal",
    OK = "ok",
    UPDATING = "updating"
}
/**
 * TCP Route
 */
export interface IpLoadbalancingRouteTcpRouteTcp {
    action: IpLoadbalancingRouteTcpAction;
    displayName?: string;
    frontendId?: number;
    routeId: number;
    rules: IpLoadbalancingRouteRule[];
    status: IpLoadbalancingRouteStatus;
    weight: number;
}
/**
 * Action triggered when all rules from route match
 */
export interface IpLoadbalancingRouteTcpAction {
    target?: string;
    type: string;
}
/**
 * Available servers states
 */
export interface IpLoadbalancingServerState {
    checkCode?: string;
    checkStatus?: string;
    checkTime?: string;
    instanceId: number;
    lastCheckContent?: string;
    status?: string;
}
/**
 * Ssl
 */
export interface IpLoadbalancingSslSsl {
    displayName?: string;
    expireDate: string;
    fingerprint: string;
    id: number;
    san: string[];
    serial: string;
    subject: string;
    type?: IpLoadbalancingSslType;
}
export declare enum IpLoadbalancingSslConfiguration {
    INTERMEDIATE = "intermediate",
    MODERN = "modern"
}
export declare enum IpLoadbalancingSslType {
    BUILT = "built",
    BUILT_NOT_ROUTED = "built_not_routed",
    CUSTOM = "custom"
}
/**
 * The global status of a Load Balancer
 */
export interface IpLoadbalancingStatus {
    farms: IpLoadbalancingstatusComponent;
    frontends: IpLoadbalancingstatusComponent;
    servers: IpLoadbalancingstatusComponent;
    service: IpLoadbalancingstatusService;
}
/**
 * The global status of a Load Balancer component
 */
export interface IpLoadbalancingstatusComponent {
    status: IpLoadbalancingstatusComponentStatus;
    total: number;
}
/**
 * The statuses of a Load Balancer component
 */
export interface IpLoadbalancingstatusComponentStatus {
    error: number;
    ok: number;
    unknown: number;
    warn: number;
}
export declare enum IpLoadbalancingstatus {
    ERROR = "error",
    OK = "ok",
    UNKNOWN = "unknown",
    WARN = "warn"
}
/**
 * The status of a Load Balancer service
 */
export interface IpLoadbalancingstatusService {
    status: IpLoadbalancingstatus;
}
export declare enum IpLoadbalancingStickinessHTTP {
    COOKIE = "cookie",
    SOURCEIP = "sourceIp"
}
export declare enum IpLoadbalancingStickinessTCP {
    SOURCEIP = "sourceIp"
}
/**
 * IP Load Balancing Operations
 */
export interface IpLoadbalancingTaskTask {
    action: IpLoadbalancingTaskAction;
    creationDate: string;
    doneDate?: string;
    id: number;
    progress: number;
    status: IpLoadbalancingTaskStatus;
    zones: string[];
}
export declare enum IpLoadbalancingTaskAction {
    DELETEIPLB = "deleteIplb",
    DEPLOYIPLB = "deployIplb",
    INSTALL = "install",
    INSTALLIPLB = "installIplb",
    INSTALLZONE = "installZone",
    ORDERFREECERTIFICATE = "orderFreeCertificate",
    ORDERPAIDCERTIFICATE = "orderPaidCertificate",
    ORDERSSL = "orderSsl",
    REFRESHIPLB = "refreshIplb",
    RELEASEIPLB = "releaseIplb",
    RELEASEIPLBZONE = "releaseIplbZone",
    REOPENIPLB = "reopenIplb",
    SUSPENDIPLB = "suspendIplb",
    SUSPENDZONE = "suspendZone",
    SWITCHTOIPLBNEXTGENERATIONAPI = "switchToIplbNextGenerationApi",
    VRACKATTACH = "vrackAttach",
    VRACKDETACH = "vrackDetach"
}
export declare enum IpLoadbalancingTaskStatus {
    BLOCKED = "blocked",
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
/**
 * Information about vRack for your Load Balancer
 */
export interface IpLoadbalancingVrackInformation {
    state: IpLoadbalancingVrackState;
    task: number[];
    vrackName?: string;
}
/**
 * Represents a private network in the vRack
 */
export interface IpLoadbalancingVrackNetworkVrackNetwork {
    displayName?: string;
    farmId: IpLoadbalancingDefinedFarm[];
    natIp: string;
    subnet: string;
    vlan: number;
    vrackNetworkId: number;
}
/**
 * Rules to create a new description of a private network in the vRack
 */
export interface IpLoadbalancingVrackNetworkCreationRules {
    minNatIps: number;
    remainingNetworks: number;
    vrackName: string;
}
export declare enum IpLoadbalancingVrackState {
    ACTIVATING = "activating",
    ACTIVE = "active",
    DEACTIVATING = "deactivating",
    INACTIVE = "inactive"
}
/**
 * Aims to help you configure needed transparent interfaces
 */
export interface IpLoadbalancingVrackTransparentGateways {
    address: string;
    gateway: string;
    vlan: number;
}
/**
 * Server's vrack transparent ip
 */
export interface IpLoadbalancingVrackTransparentIpVrackTransparentIp {
    address: string;
    farmId: number;
    id: number;
    serverId: number;
    slotId: number;
}
/**
 * IP Load Balancing Zone
 */
export interface IpLoadbalancingZoneZone {
    name: string;
    state: string;
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
export declare class IpLoadbalancing {
    private client;
    constructor(client: Client);
    /**
     * Operations about the IPLB service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Your IP load balancing [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<IpLoadbalancingIp>;
    /**
     * Your IP load balancing [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: IpLoadbalancingIp): Promise<void>;
    /**
     * availableFarmProbes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFarmProbes#GET)
     */
    AvailableFarmProbesForHealthChecks(serviceName: string): Promise<IpLoadbalancingFarmAvailableProbe[]>;
    /**
     * availableFarmType operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFarmType#GET)
     */
    AvailableFarmTypes(serviceName: string): Promise<string[]>;
    /**
     * availableFrontendType operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFrontendType#GET)
     */
    AvailableFrontendType(serviceName: string): Promise<string[]>;
    /**
     * availableRouteActions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableRouteActions#GET)
     */
    AvailableRouteActions(serviceName: string): Promise<IpLoadbalancingRouteAvailableAction[]>;
    /**
     * availableRouteRules operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableRouteRules#GET)
     */
    AvailableRouteMatchRules(serviceName: string): Promise<IpLoadbalancingRouteAvailableRule[]>;
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * definedFarms operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedFarms#GET)
     */
    ListOfDefinedFarmsAndWhetherTheyAreHTTPTCPOrUDP(serviceName: string, vrackNetworkId?: number): Promise<IpLoadbalancingDefinedFarm[]>;
    /**
     * definedFrontends operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedFrontends#GET)
     */
    ListOfDefinedFrontendsAndWhetherTheyAreHTTPTCPOrUDP(serviceName: string): Promise<IpLoadbalancingDefinedFrontend[]>;
    /**
     * definedRoutes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedRoutes#GET)
     */
    ListOfDefinedRoutesAndWhetherTheyAreHTTPOrTCP(serviceName: string): Promise<IpLoadbalancingDefinedRoute[]>;
    /**
     * failover operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/failover#GET)
     */
    ListAllFailoverIpRoutedToThisIPLB(serviceName: string): Promise<string[]>;
    /**
     * freeCertificate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/freeCertificate#POST)
     */
    OrderAFreeCertificateWeOrderAndDeliverItForYou(fqdn: string[], serviceName: string): Promise<IpLoadbalancingTaskTask>;
    /**
     * List the ipLoadbalancing.backendHttp.BackendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm#GET)
     */
    HTTPFarmForThisIplb(serviceName: string, vrackNetworkId?: number, zone?: string): Promise<number[]>;
    /**
     * List the ipLoadbalancing.backendHttp.BackendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm#POST)
     */
    AddANewHTTPFarmOnYourIPLoadBalancing(serviceName: string, zone: string, balance?: IpLoadbalancingBalanceHTTP, displayName?: string, port?: number, probe?: IpLoadbalancingBackendProbe, stickiness?: IpLoadbalancingStickinessHTTP, vrackNetworkId?: number): Promise<IpLoadbalancingbackendHttpBackendHttp>;
    /**
     * HTTP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#GET)
     */
    /**
     * HTTP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#PUT)
     */
    /**
     * HTTP Farm [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#DELETE)
     */
    DeleteAnHTTPFarm(farmId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server#GET)
     */
    HTTPFarmServers(farmId: number, serviceName: string, address?: string, cookie?: string, status?: IpLoadbalancingBackendCustomerServerStatus): Promise<number[]>;
    /**
     * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server#POST)
     */
    AddAServerToAnHTTPFarm(address: string, farmId: number, serviceName: string, status: IpLoadbalancingBackendCustomerServerStatus, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion, ssl?: boolean, weight?: number): Promise<IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer>;
    /**
     * HTTP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
     */
    /**
     * HTTP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
     */
    /**
     * HTTP Farm's Server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
     */
    DeleteAServerFromAnHTTPFarm(farmId: number, serverId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.frontendHttp.FrontendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend#GET)
     */
    HTTPFrontendsForThisIplb(serviceName: string, defaultFarmId?: number, port?: string, zone?: string): Promise<number[]>;
    /**
     * List the ipLoadbalancing.frontendHttp.FrontendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend#POST)
     */
    AddANewHttpFrontendOnYourIPLoadBalancing(port: string, serviceName: string, zone: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], redirectLocation?: string, ssl?: boolean): Promise<IpLoadbalancingfrontendHttpFrontendHttp>;
    /**
     * Frontend HTTP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#GET)
     */
    /**
     * Frontend HTTP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#PUT)
     */
    /**
     * Frontend HTTP [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#DELETE)
     */
    DeleteAnHTTPFrontend(frontendId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.RouteHttp.RouteHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route#GET)
     */
    HTTPRoutesForThisIplb(serviceName: string, frontendId?: number): Promise<number[]>;
    /**
     * List the ipLoadbalancing.RouteHttp.RouteHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route#POST)
     */
    AddANewHTTPRouteToYourFrontend(action: IpLoadbalancingRouteHttpAction, serviceName: string, displayName?: string, frontendId?: number, weight?: number): Promise<IpLoadbalancingRouteHttpRouteHttp>;
    /**
     * HTTP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#GET)
     */
    /**
     * HTTP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#PUT)
     */
    /**
     * HTTP Route [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#DELETE)
     */
    DeleteThisHTTPRoute(routeId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule#GET)
     */
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule#POST)
     */
    AddANewRuleToYourRoute(field: string, match: IpLoadbalancingRouteRuleMatches, routeId: number, serviceName: string, displayName?: string, negate?: boolean, pattern?: string, subField?: string): Promise<IpLoadbalancingRouteRuleRouteRule>;
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#GET)
     */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#PUT)
     */
    /**
     * Rule of a route [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#DELETE)
     */
    DeleteThisRuleFromTheRoute(routeId: number, ruleId: number, serviceName: string): Promise<void>;
    /**
     * instancesState operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/instancesState#GET)
     */
    GetTheEffectiveStateOfYourIPLBInstancesOnIPLBServers(serviceName: string): Promise<IpLoadbalancingInstancesState[]>;
    /**
     * natIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/natIp#GET)
     */
    IpSubnetUsedByOVHToNatRequestsOnYourIPLBToYourBackendsYouMustEnsureThatYourBackendsAreNotPartOfANetworkThatOverlapWithThisOne(serviceName: string): Promise<IpLoadbalancingNatIps[]>;
    /**
     * pendingChanges operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/pendingChanges#GET)
     */
    ListThePendingChangesOnYourLoadBalancerConfigurationPerZone(serviceName: string): Promise<IpLoadbalancingPendingChanges[]>;
    /**
     * List the ipLoadbalancing.Quota.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota#GET)
     */
    AvailableQuotaInformationsForCurrentBillingPeriodPerZone(serviceName: string): Promise<string[]>;
    /**
     * Quota informations for current billing period for this zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota/%7Bzone%7D#GET)
     */
    /**
     * Quota informations for current billing period for this zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota/%7Bzone%7D#PUT)
     */
    /**
     * List the ipLoadbalancing.QuotaHistory.QuotaHistory objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quotaHistory#GET)
     */
    QuotaHistoryInformationsPerMonth(serviceName: string, historizedDateFrom?: string, historizedDateTo?: string, zone?: string): Promise<number[]>;
    /**
     * QuotaHistory [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quotaHistory/%7Bid%7D#GET)
     */
    /**
     * refresh operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/refresh#POST)
     */
    ApplyTheConfigurationToYourIplb(serviceName: string, zone?: string): Promise<IpLoadbalancingTaskTask>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * List the ipLoadbalancing.Ssl.Ssl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl#GET)
     */
    SslForThisIplb(serviceName: string, fingerprint?: string, serial?: string, type?: IpLoadbalancingSslType): Promise<number[]>;
    /**
     * List the ipLoadbalancing.Ssl.Ssl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl#POST)
     */
    AddANewCustomSSLCertificateOnYourIPLoadBalancing(certificate: string, key: string, serviceName: string, chain?: string, displayName?: string): Promise<IpLoadbalancingSslSsl>;
    /**
     * Ssl [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#GET)
     */
    /**
     * Ssl [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#PUT)
     */
    /**
     * Ssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#DELETE)
     */
    DeleteACustomSSLCertificate(id: number, serviceName: string): Promise<void>;
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/status#GET)
     */
    GetTheGlobalStatusOfYourIPLB(serviceName: string): Promise<IpLoadbalancingStatus>;
    /**
     * List the ipLoadbalancing.Task.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/task#GET)
     */
    TaskForThisIplb(serviceName: string, action?: IpLoadbalancingTaskAction, creationDateFrom?: string, creationDateTo?: string, doneDateFrom?: string, doneDateTo?: string, status?: IpLoadbalancingTaskStatus): Promise<number[]>;
    /**
     * IP Load Balancing Operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /**
     * List the ipLoadbalancing.backendTcp.BackendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm#GET)
     */
    TCPFarmForThisIplb(serviceName: string, vrackNetworkId?: number, zone?: string): Promise<number[]>;
    /**
     * List the ipLoadbalancing.backendTcp.BackendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm#POST)
     */
    AddANewTCPFarmOnYourIPLoadBalancing(serviceName: string, zone: string, balance?: IpLoadbalancingBalanceTCP, displayName?: string, port?: number, probe?: IpLoadbalancingBackendProbe, stickiness?: IpLoadbalancingStickinessTCP, vrackNetworkId?: number): Promise<IpLoadbalancingbackendTcpBackendTcp>;
    /**
     * TCP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#GET)
     */
    /**
     * TCP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#PUT)
     */
    /**
     * TCP Farm [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#DELETE)
     */
    DeleteATCPFarm(farmId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server#GET)
     */
    TCPFarmServers(farmId: number, serviceName: string, address?: string, status?: IpLoadbalancingBackendCustomerServerStatus): Promise<number[]>;
    /**
     * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server#POST)
     */
    AddAServerToATCPFarm(address: string, farmId: number, serviceName: string, status: IpLoadbalancingBackendCustomerServerStatus, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion, ssl?: boolean, weight?: number): Promise<IpLoadbalancingbackendTcpCustomerServerBackendTCPServer>;
    /**
     * TCP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
     */
    /**
     * TCP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
     */
    /**
     * TCP Farm's Server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
     */
    DeleteAServerFromATCPFarm(farmId: number, serverId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.frontendTcp.FrontendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend#GET)
     */
    TCPFrontendsForThisIplb(serviceName: string, defaultFarmId?: number, port?: string, zone?: string): Promise<number[]>;
    /**
     * List the ipLoadbalancing.frontendTcp.FrontendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend#POST)
     */
    AddANewTCPFrontendOnYourIPLoadBalancing(port: string, serviceName: string, zone: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, ssl?: boolean): Promise<IpLoadbalancingfrontendTcpFrontendTcp>;
    /**
     * Frontend TCP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#GET)
     */
    /**
     * Frontend TCP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#PUT)
     */
    /**
     * Frontend TCP [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#DELETE)
     */
    DeleteAnTCPFrontend(frontendId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.RouteTcp.RouteTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route#GET)
     */
    TCPRoutesForThisIplb(serviceName: string, frontendId?: number): Promise<number[]>;
    /**
     * List the ipLoadbalancing.RouteTcp.RouteTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route#POST)
     */
    AddANewTCPRouteToYourFrontend(action: IpLoadbalancingRouteTcpAction, serviceName: string, displayName?: string, frontendId?: number, weight?: number): Promise<IpLoadbalancingRouteTcpRouteTcp>;
    /**
     * TCP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#GET)
     */
    /**
     * TCP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#PUT)
     */
    /**
     * TCP Route [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#DELETE)
     */
    DeleteThisTCPRoute(routeId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule#GET)
     */
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule#POST)
     */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#GET)
     */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#PUT)
     */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#DELETE)
     */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * List the ipLoadbalancing.backendUdp.BackendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm#GET)
     */
    UDPFarmForThisIplb(serviceName: string, vrackNetworkId?: number, zone?: string): Promise<number[]>;
    /**
     * List the ipLoadbalancing.backendUdp.BackendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm#POST)
     */
    AddANewUDPFarmOnYourIPLoadBalancing(port: number, serviceName: string, zone: string, displayName?: string, vrackNetworkId?: number): Promise<IpLoadbalancingbackendUdpBackendUdp>;
    /**
     * UDP Farm [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#GET)
     */
    /**
     * UDP Farm [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#PUT)
     */
    /**
     * UDP Farm [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#DELETE)
     */
    DeleteAnUDPFarm(farmId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server#GET)
     */
    UDPFarmServers(farmId: number, serviceName: string, address?: string, status?: IpLoadbalancingBackendCustomerServerStatus): Promise<number[]>;
    /**
     * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server#POST)
     */
    AddAServerToAnUDPFarm(address: string, farmId: number, serviceName: string, status: IpLoadbalancingBackendCustomerServerStatus, displayName?: string, port?: number): Promise<IpLoadbalancingbackendUdpCustomerServerBackendUDPServer>;
    /**
     * UDP Farm's Server [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
     */
    /**
     * UDP Farm's Server [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
     */
    /**
     * UDP Farm's Server [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
     */
    DeleteAServerFromAnUDPFarm(farmId: number, serverId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.frontendUdp.FrontendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend#GET)
     */
    UDPFrontendsForThisIplb(serviceName: string, defaultFarmId?: number, port?: string, zone?: string): Promise<number[]>;
    /**
     * List the ipLoadbalancing.frontendUdp.FrontendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend#POST)
     */
    AddANewUDPFrontendOnYourIPLoadBalancing(port: string, serviceName: string, zone: string, dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string): Promise<IpLoadbalancingfrontendUdpFrontendUdp>;
    /**
     * Frontend UDP [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#GET)
     */
    /**
     * Frontend UDP [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#PUT)
     */
    /**
     * Frontend UDP [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#DELETE)
     */
    DeleteAnUDPFrontend(frontendId: number, serviceName: string): Promise<void>;
    /**
     * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network#GET)
     */
    DescriptionsOfPrivateNetworksInTheVRackAttachedToThisLoadBalancer(serviceName: string, subnet?: string, vlan?: number): Promise<number[]>;
    /**
     * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network#POST)
     */
    AddADescriptionOfAPrivateNetworkInTheAttachedVRack(natIp: string, serviceName: string, subnet: string, displayName?: string, farmId?: number[], vlan?: number): Promise<IpLoadbalancingVrackNetworkVrackNetwork>;
    /**
     * Represents a private network in the vRack [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#GET)
     */
    /**
     * Represents a private network in the vRack [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#PUT)
     */
    /**
     * Represents a private network in the vRack [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#DELETE)
     */
    DeleteThisDescriptionOfAPrivateNetworkInTheVRackItMustNotBeUsedByAnyFarmServer(serviceName: string, vrackNetworkId: number): Promise<void>;
    /**
     * updateFarmId operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D/updateFarmId#POST)
     */
    UpdateFarmAttachedToThatVrackNetworkId(farmId: number[], serviceName: string, vrackNetworkId: number): Promise<IpLoadbalancingVrackNetworkVrackNetwork>;
    /**
     * networkCreationRules operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/networkCreationRules#GET)
     */
    RulesToCreateANetworkAttachedToAVrack(serviceName: string): Promise<IpLoadbalancingVrackNetworkCreationRules>;
    /**
     * status operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/status#GET)
     */
    InformationAboutVRackForYourLoadBalancer(serviceName: string): Promise<IpLoadbalancingVrackInformation>;
    /**
     * List the ipLoadbalancing.Zone.Zone objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone#GET)
     */
    ZoneForThisIplb(serviceName: string): Promise<string[]>;
    /**
     * IP Load Balancing Zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D#GET)
     */
    /**
     * cancelTermination operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D/cancelTermination#POST)
     */
    CancelTheTerminationRequestOfYourServiceZoneOption(name: string, serviceName: string): Promise<void>;
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D/terminate#POST)
     */
    TerminateYourServiceZoneOption(name: string, serviceName: string): Promise<void>;
    /**
     * List of zone available for an IP load balancing [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/availableZones#GET)
     */
    ListOfZoneAvailableForAnIPLoadBalancing(): Promise<string[]>;
}
//# sourceMappingURL=ipLoadbalancing.d.ts.map