// GENERATED SDK for ipLoadbalancing API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Possible values for server status
 */
export enum IpLoadbalancingBackendCustomerServerStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

/**
 * HTTP Farm
 */
export interface IpLoadbalancingbackendHttpBackendHttp {
  balance?: IpLoadbalancingBalanceHTTP
  displayName?: string
  farmId: number
  port?: number
  probe?: IpLoadbalancingBackendProbe
  stickiness?: IpLoadbalancingStickinessHTTP
  vrackNetworkId?: number
  zone: string
}

/**
 * HTTP Farm's Server
 */
export interface IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer {
  address: string
  backendId: number
  backup: boolean
  chain?: string
  cookie?: string
  displayName?: string
  port?: number
  probe: boolean
  proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion
  serverId: number
  serverState: IpLoadbalancingServerState[]
  ssl: boolean
  status: IpLoadbalancingBackendCustomerServerStatus
  weight?: number
}

/**
 * Probe used to determine if a backend is alive and can handle requests
 */
export interface IpLoadbalancingBackendProbe {
  forceSsl?: boolean
  interval?: number
  match?: IpLoadbalancingProbeExpectMatch
  method?: IpLoadbalancingProbeMethod
  negate?: boolean
  pattern?: string
  port?: number
  type?: IpLoadbalancingProbeType
  url?: string
}

/**
 * TCP Farm
 */
export interface IpLoadbalancingbackendTcpBackendTcp {
  balance?: IpLoadbalancingBalanceTCP
  displayName?: string
  farmId: number
  port?: number
  probe?: IpLoadbalancingBackendProbe
  stickiness?: IpLoadbalancingStickinessTCP
  vrackNetworkId?: number
  zone: string
}

/**
 * TCP Farm's Server
 */
export interface IpLoadbalancingbackendTcpCustomerServerBackendTCPServer {
  address: string
  backendId: number
  backup: boolean
  chain?: string
  displayName?: string
  port?: number
  probe: boolean
  proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion
  serverId: number
  serverState: IpLoadbalancingServerState[]
  ssl: boolean
  status: IpLoadbalancingBackendCustomerServerStatus
  weight?: number
}

/**
 * UDP Farm
 */
export interface IpLoadbalancingbackendUdpBackendUdp {
  displayName?: string
  farmId: number
  port: number
  vrackNetworkId?: number
  zone: string
}

/**
 * UDP Farm's Server
 */
export interface IpLoadbalancingbackendUdpCustomerServerBackendUDPServer {
  address: string
  backendId: number
  displayName?: string
  port?: number
  serverId: number
  status: IpLoadbalancingBackendCustomerServerStatus
}

/*
 * Possible values for load balancing balance algorithm
 */
export enum IpLoadbalancingBalanceHTTP {
  FIRST = 'first',
  LEASTCONN = 'leastconn',
  ROUNDROBIN = 'roundrobin',
  SOURCE = 'source',
  URI = 'uri'
}

/*
 * Possible values for load balancing balance algorithm
 */
export enum IpLoadbalancingBalanceTCP {
  FIRST = 'first',
  LEASTCONN = 'leastconn',
  ROUNDROBIN = 'roundrobin',
  SOURCE = 'source'
}

/**
 * a list of { type => [ Farm ids ] }
 */
export interface IpLoadbalancingDefinedFarm {
  id: number
  type: string
}

/**
 * a list of {type=>[Frontend ids]}
 */
export interface IpLoadbalancingDefinedFrontend {
  id: number
  type: string
}

/**
 * Defined routes name, type and id. Typically used to generate autocomplete lists.
 */
export interface IpLoadbalancingDefinedRoute {
  displayName?: string
  routeId: number
  type: string
}

/**
 * Available farm probes options
 */
export interface IpLoadbalancingFarmAvailableProbe {
  matches: string[]
  method?: string[]
  negatableMatches: string[]
  port: boolean
  type: string
  url: boolean
}

/**
 * Frontend HTTP
 */
export interface IpLoadbalancingfrontendHttpFrontendHttp {
  allowedSource?: string[]
  dedicatedIpfo?: string[]
  defaultFarmId?: number
  defaultSslId?: number
  disabled: boolean
  displayName?: string
  frontendId: number
  hsts: boolean
  httpHeader?: string[]
  port: string
  redirectLocation?: string
  ssl: boolean
  zone: string
}

/**
 * Frontend TCP
 */
export interface IpLoadbalancingfrontendTcpFrontendTcp {
  allowedSource?: string[]
  dedicatedIpfo?: string[]
  defaultFarmId?: number
  defaultSslId?: number
  disabled: boolean
  displayName?: string
  frontendId: number
  port: string
  ssl: boolean
  zone: string
}

/**
 * Frontend UDP
 */
export interface IpLoadbalancingfrontendUdpFrontendUdp {
  dedicatedIpfo?: string[]
  defaultFarmId?: number
  disabled: boolean
  displayName?: string
  frontendId: number
  port: string
  zone: string
}

/**
 * A structure describing the current state of an IPLB instances
 */
export interface IpLoadbalancingInstancesState {
  internalId: number
  lastUpdateDate: string
  state: string
  zone: string
}

/**
 * Your IP load balancing
 */
export interface IpLoadbalancingIp {
  displayName?: string
  ipLoadbalancing: string
  ipv4?: string
  ipv6?: string
  metricsToken?: string
  offer: string
  orderableZone: IpLoadbalancingOrderableZone[]
  serviceName: string
  sslConfiguration?: IpLoadbalancingSslConfiguration
  state: IpLoadbalancingIpState
  vrackEligibility: boolean
  vrackName?: string
  zone: string[]
}

/*
 * Possible values for load balancing IP state
 */
export enum IpLoadbalancingIpState {
  BLACKLISTED = 'blacklisted',
  DELETED = 'deleted',
  FREE = 'free',
  OK = 'ok',
  QUARANTINED = 'quarantined',
  SUSPENDED = 'suspended'
}

/**
 * a list of {zone, nat Ip}
 */
export interface IpLoadbalancingNatIps {
  ip: string[]
  zone: string
}

/**
 * Available additional zone to order for a Load Balancer
 */
export interface IpLoadbalancingOrderableZone {
  name: string
  planCode: string
}

/**
 * The pending changes for a Load Balancer zone
 */
export interface IpLoadbalancingPendingChanges {
  number: number
  zone: string
}

/*
 * List of possible probe result matches. "status" is only supported for HTTP probes
 */
export enum IpLoadbalancingProbeExpectMatch {
  CONTAINS = 'contains',
  DEFAULT = 'default',
  INTERNAL = 'internal',
  MATCHES = 'matches',
  STATUS = 'status'
}

/*
 * List of possible method for HTTP probes. Consider using HEAD to save bandwidth when possible.
 */
export enum IpLoadbalancingProbeMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  INTERNAL = 'internal'
}

/*
 * Possible values for farm probe
 */
export enum IpLoadbalancingProbeType {
  HTTP = 'http',
  INTERNAL = 'internal',
  MYSQL = 'mysql',
  OCO = 'oco',
  PGSQL = 'pgsql',
  SMTP = 'smtp',
  TCP = 'tcp'
}

/*
 * Possible values for proxy type
 */
export enum IpLoadbalancingProxyProtocolVersion {
  V1 = 'v1',
  V2 = 'v2',
  V2_SSL = 'v2-ssl',
  V2_SSL_CN = 'v2-ssl-cn'
}

/**
 * Quota informations for current billing period for this zone
 */
export interface IpLoadbalancingQuotaQuota {
  alert?: number
  included?: number
  lastUpdateDate?: string
  resetDate?: string
  total?: number
  zone: string
}

/**
 * QuotaHistory
 */
export interface IpLoadbalancingQuotaHistoryQuotaHistory {
  historizedDate: string
  id: number
  lastUpdateDate: string
  resetDate: string
  total: number
  zone: string
}

/**
 * Available route actions options
 */
export interface IpLoadbalancingRouteAvailableAction {
  destination?: string
  name: string
  status?: number[]
  type: string
}

/**
 * Match rule to combine to build routes
 */
export interface IpLoadbalancingRouteAvailableRule {
  enum?: string[]
  hasSubField: boolean
  matches: string[]
  name: string
  pattern: string
  type: string
}

/**
 * HTTP Route
 */
export interface IpLoadbalancingRouteHttpRouteHttp {
  action: IpLoadbalancingRouteHttpAction
  displayName?: string
  frontendId?: number
  routeId: number
  rules: IpLoadbalancingRouteRule[]
  status: IpLoadbalancingRouteStatus
  weight: number
}

/**
 * Action triggered when all rules from route match
 */
export interface IpLoadbalancingRouteHttpAction {
  status?: number
  target?: string
  type: string
}

/**
 * Match rule to combine to build routes
 */
export interface IpLoadbalancingRouteRule {
  field: string
  match: IpLoadbalancingRouteRuleMatches
  negate: boolean
  pattern?: string
  ruleId: number
  subField?: string
}

/**
 * Rule of a route
 */
export interface IpLoadbalancingRouteRuleRouteRule {
  displayName?: string
  field: string
  match: IpLoadbalancingRouteRuleMatches
  negate: boolean
  pattern?: string
  ruleId: number
  subField?: string
}

/*
 * List of possible route rule matches
 */
export enum IpLoadbalancingRouteRuleMatches {
  CONTAINS = 'contains',
  ENDSWITH = 'endswith',
  EXISTS = 'exists',
  IN = 'in',
  INTERNAL = 'internal',
  IS = 'is',
  MATCHES = 'matches',
  STARTSWITH = 'startswith'
}

/*
 * Route configuration status
 */
export enum IpLoadbalancingRouteStatus {
  CREATING = 'creating',
  DELETING = 'deleting',
  INTERNAL = 'internal',
  OK = 'ok',
  UPDATING = 'updating'
}

/**
 * TCP Route
 */
export interface IpLoadbalancingRouteTcpRouteTcp {
  action: IpLoadbalancingRouteTcpAction
  displayName?: string
  frontendId?: number
  routeId: number
  rules: IpLoadbalancingRouteRule[]
  status: IpLoadbalancingRouteStatus
  weight: number
}

/**
 * Action triggered when all rules from route match
 */
export interface IpLoadbalancingRouteTcpAction {
  target?: string
  type: string
}

/**
 * Available servers states
 */
export interface IpLoadbalancingServerState {
  checkCode?: string
  checkStatus?: string
  checkTime?: string
  instanceId: number
  lastCheckContent?: string
  status?: string
}

/**
 * Ssl
 */
export interface IpLoadbalancingSslSsl {
  displayName?: string
  expireDate: string
  fingerprint: string
  id: number
  san: string[]
  serial: string
  subject: string
  type?: IpLoadbalancingSslType
}

/*
 * Possible values for ssl ciphers
 */
export enum IpLoadbalancingSslConfiguration {
  INTERMEDIATE = 'intermediate',
  MODERN = 'modern'
}

/*
 * Possible values for ssl type
 */
export enum IpLoadbalancingSslType {
  BUILT = 'built',
  BUILT_NOT_ROUTED = 'built_not_routed',
  CUSTOM = 'custom'
}

/**
 * The global status of a Load Balancer
 */
export interface IpLoadbalancingStatus {
  farms: IpLoadbalancingstatusComponent
  frontends: IpLoadbalancingstatusComponent
  servers: IpLoadbalancingstatusComponent
  service: IpLoadbalancingstatusService
}

/**
 * The global status of a Load Balancer component
 */
export interface IpLoadbalancingstatusComponent {
  status: IpLoadbalancingstatusComponentStatus
  total: number
}

/**
 * The statuses of a Load Balancer component
 */
export interface IpLoadbalancingstatusComponentStatus {
  error: number
  ok: number
  unknown: number
  warn: number
}

/*
 * Possible values for a Load Balancer status
 */
export enum IpLoadbalancingstatus {
  ERROR = 'error',
  OK = 'ok',
  UNKNOWN = 'unknown',
  WARN = 'warn'
}

/**
 * The status of a Load Balancer service
 */
export interface IpLoadbalancingstatusService {
  status: IpLoadbalancingstatus
}

/*
 * Possible values for HTTP backend stickiness
 */
export enum IpLoadbalancingStickinessHTTP {
  COOKIE = 'cookie',
  SOURCEIP = 'sourceIp'
}

/*
 * Possible values for TCP backend stickiness
 */
export enum IpLoadbalancingStickinessTCP {
  SOURCEIP = 'sourceIp'
}

/**
 * IP Load Balancing Operations
 */
export interface IpLoadbalancingTaskTask {
  action: IpLoadbalancingTaskAction
  creationDate: string
  doneDate?: string
  id: number
  progress: number
  status: IpLoadbalancingTaskStatus
  zones: string[]
}

/*
 * Possible task action
 */
export enum IpLoadbalancingTaskAction {
  DELETEIPLB = 'deleteIplb',
  DEPLOYIPLB = 'deployIplb',
  INSTALL = 'install',
  INSTALLIPLB = 'installIplb',
  INSTALLZONE = 'installZone',
  ORDERFREECERTIFICATE = 'orderFreeCertificate',
  ORDERPAIDCERTIFICATE = 'orderPaidCertificate',
  ORDERSSL = 'orderSsl',
  REFRESHIPLB = 'refreshIplb',
  RELEASEIPLB = 'releaseIplb',
  RELEASEIPLBZONE = 'releaseIplbZone',
  REOPENIPLB = 'reopenIplb',
  SUSPENDIPLB = 'suspendIplb',
  SUSPENDZONE = 'suspendZone',
  SWITCHTOIPLBNEXTGENERATIONAPI = 'switchToIplbNextGenerationApi',
  VRACKATTACH = 'vrackAttach',
  VRACKDETACH = 'vrackDetach'
}

/*
 * Possible task status
 */
export enum IpLoadbalancingTaskStatus {
  BLOCKED = 'blocked',
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Information about vRack for your Load Balancer
 */
export interface IpLoadbalancingVrackInformation {
  state: IpLoadbalancingVrackState
  task: number[]
  vrackName?: string
}

/**
 * Represents a private network in the vRack
 */
export interface IpLoadbalancingVrackNetworkVrackNetwork {
  displayName?: string
  farmId: IpLoadbalancingDefinedFarm[]
  natIp: string
  subnet: string
  vlan: number
  vrackNetworkId: number
}

/**
 * Rules to create a new description of a private network in the vRack
 */
export interface IpLoadbalancingVrackNetworkCreationRules {
  minNatIps: number
  remainingNetworks: number
  vrackName: string
}

/*
 * Possible values for load balancing vRack state
 */
export enum IpLoadbalancingVrackState {
  ACTIVATING = 'activating',
  ACTIVE = 'active',
  DEACTIVATING = 'deactivating',
  INACTIVE = 'inactive'
}

/**
 * Aims to help you configure needed transparent interfaces
 */
export interface IpLoadbalancingVrackTransparentGateways {
  address: string
  gateway: string
  vlan: number
}

/**
 * Server's vrack transparent ip
 */
export interface IpLoadbalancingVrackTransparentIpVrackTransparentIp {
  address: string
  farmId: number
  id: number
  serverId: number
  slotId: number
}

/**
 * IP Load Balancing Zone
 */
export interface IpLoadbalancingZoneZone {
  name: string
  state: string
}

/*
 * Detailed renewal type of a service
 */
export enum ServiceRenewalType {
  AUTOMATICFORCEDPRODUCT = 'automaticForcedProduct',
  AUTOMATICV2012 = 'automaticV2012',
  AUTOMATICV2014 = 'automaticV2014',
  AUTOMATICV2016 = 'automaticV2016',
  MANUAL = 'manual',
  ONESHOT = 'oneShot',
  OPTION = 'option'
}

/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  automatic: boolean
  deleteAtExpiration: boolean
  forced: boolean
  manualPayment?: boolean
  period?: number
}

/*
 * 
 */
export enum ServiceState {
  EXPIRED = 'expired',
  INCREATION = 'inCreation',
  OK = 'ok',
  PENDINGDEBT = 'pendingDebt',
  UNPAID = 'unPaid'
}

/*
 * All future uses you can provide for a service termination
 */
export enum ServiceTerminationFutureUse {
  NOT_REPLACING_SERVICE = 'NOT_REPLACING_SERVICE',
  OTHER = 'OTHER',
  SUBSCRIBE_AN_OTHER_SERVICE = 'SUBSCRIBE_AN_OTHER_SERVICE',
  SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR',
  SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR'
}

/*
 * All reasons you can provide for a service termination
 */
export enum ServiceTerminationReason {
  FEATURES_DONT_SUIT_ME = 'FEATURES_DONT_SUIT_ME',
  LACK_OF_PERFORMANCES = 'LACK_OF_PERFORMANCES',
  MIGRATED_TO_ANOTHER_OVH_PRODUCT = 'MIGRATED_TO_ANOTHER_OVH_PRODUCT',
  MIGRATED_TO_COMPETITOR = 'MIGRATED_TO_COMPETITOR',
  NOT_ENOUGH_RECOGNITION = 'NOT_ENOUGH_RECOGNITION',
  NOT_NEEDED_ANYMORE = 'NOT_NEEDED_ANYMORE',
  NOT_RELIABLE = 'NOT_RELIABLE',
  NO_ANSWER = 'NO_ANSWER',
  OTHER = 'OTHER',
  PRODUCT_DIMENSION_DONT_SUIT_ME = 'PRODUCT_DIMENSION_DONT_SUIT_ME',
  PRODUCT_TOOLS_DONT_SUIT_ME = 'PRODUCT_TOOLS_DONT_SUIT_ME',
  TOO_EXPENSIVE = 'TOO_EXPENSIVE',
  TOO_HARD_TO_USE = 'TOO_HARD_TO_USE',
  UNSATIFIED_BY_CUSTOMER_SUPPORT = 'UNSATIFIED_BY_CUSTOMER_SUPPORT'
}

/**
 * Details about a Service
 */
export interface ServicesService {
  canDeleteAtExpiration: boolean
  contactAdmin: string
  contactBilling: string
  contactTech: string
  creation: string
  domain: string
  engagedUpTo?: string
  expiration: string
  possibleRenewPeriod?: number[]
  renew?: ServiceRenewType
  renewalType: ServiceRenewalType
  serviceId: number
  status: ServiceState
}


export class IpLoadbalancing {
  constructor(private client: Client) {}

  /**
   * Operations about the IPLB service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/ipLoadbalancing`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your IP load balancing [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<IpLoadbalancingIp> {
    let url = `/ipLoadbalancing/${serviceName}`

    return this.client.request<IpLoadbalancingIp>('GET', url)
  }

  /**
   * Your IP load balancing [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: IpLoadbalancingIp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * availableFarmProbes operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFarmProbes#GET)
   */
  AvailableFarmProbesForHealthChecks(serviceName: string): Promise<IpLoadbalancingFarmAvailableProbe[]> {
    let url = `/ipLoadbalancing/${serviceName}/availableFarmProbes`

    return this.client.request<IpLoadbalancingFarmAvailableProbe[]>('GET', url)
  }

  /**
   * availableFarmType operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFarmType#GET)
   */
  AvailableFarmTypes(serviceName: string): Promise<string[]> {
    let url = `/ipLoadbalancing/${serviceName}/availableFarmType`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * availableFrontendType operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFrontendType#GET)
   */
  AvailableFrontendType(serviceName: string): Promise<string[]> {
    let url = `/ipLoadbalancing/${serviceName}/availableFrontendType`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * availableRouteActions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableRouteActions#GET)
   */
  AvailableRouteActions(serviceName: string): Promise<IpLoadbalancingRouteAvailableAction[]> {
    let url = `/ipLoadbalancing/${serviceName}/availableRouteActions`

    return this.client.request<IpLoadbalancingRouteAvailableAction[]>('GET', url)
  }

  /**
   * availableRouteRules operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableRouteRules#GET)
   */
  AvailableRouteMatchRules(serviceName: string): Promise<IpLoadbalancingRouteAvailableRule[]> {
    let url = `/ipLoadbalancing/${serviceName}/availableRouteRules`

    return this.client.request<IpLoadbalancingRouteAvailableRule[]>('GET', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/ipLoadbalancing/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * definedFarms operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedFarms#GET)
   */
  ListOfDefinedFarmsAndWhetherTheyAreHTTPTCPOrUDP(serviceName: string, vrackNetworkId?: number): Promise<IpLoadbalancingDefinedFarm[]> {
    let url = `/ipLoadbalancing/${serviceName}/definedFarms?`

    const queryParams = new QueryParams()
    if (vrackNetworkId) { queryParams.set('vrackNetworkId', vrackNetworkId.toString()) }

    return this.client.request<IpLoadbalancingDefinedFarm[]>('GET', url+queryParams.toString())
  }

  /**
   * definedFrontends operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedFrontends#GET)
   */
  ListOfDefinedFrontendsAndWhetherTheyAreHTTPTCPOrUDP(serviceName: string): Promise<IpLoadbalancingDefinedFrontend[]> {
    let url = `/ipLoadbalancing/${serviceName}/definedFrontends`

    return this.client.request<IpLoadbalancingDefinedFrontend[]>('GET', url)
  }

  /**
   * definedRoutes operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedRoutes#GET)
   */
  ListOfDefinedRoutesAndWhetherTheyAreHTTPOrTCP(serviceName: string): Promise<IpLoadbalancingDefinedRoute[]> {
    let url = `/ipLoadbalancing/${serviceName}/definedRoutes`

    return this.client.request<IpLoadbalancingDefinedRoute[]>('GET', url)
  }

  /**
   * failover operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/failover#GET)
   */
  ListAllFailoverIpRoutedToThisIPLB(serviceName: string): Promise<string[]> {
    let url = `/ipLoadbalancing/${serviceName}/failover`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * freeCertificate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/freeCertificate#POST)
   */
  OrderAFreeCertificateWeOrderAndDeliverItForYou(fqdn: string[], serviceName: string): Promise<IpLoadbalancingTaskTask> {
    let url = `/ipLoadbalancing/${serviceName}/freeCertificate`

    return this.client.request<IpLoadbalancingTaskTask>('POST', url, {fqdn})
  }

  /**
   * List the ipLoadbalancing.backendHttp.BackendHttp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm#GET)
   */
  HTTPFarmForThisIplb(serviceName: string, vrackNetworkId?: number, zone?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm?`

    const queryParams = new QueryParams()
    if (vrackNetworkId) { queryParams.set('vrackNetworkId', vrackNetworkId.toString()) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.backendHttp.BackendHttp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm#POST)
   */
  AddANewHTTPFarmOnYourIPLoadBalancing(serviceName: string, zone: string, balance?: IpLoadbalancingBalanceHTTP, displayName?: string, port?: number, probe?: IpLoadbalancingBackendProbe, stickiness?: IpLoadbalancingStickinessHTTP, vrackNetworkId?: number): Promise<IpLoadbalancingbackendHttpBackendHttp> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm`

    return this.client.request<IpLoadbalancingbackendHttpBackendHttp>('POST', url, {zone, balance, displayName, port, probe, stickiness, vrackNetworkId})
  }

  /**
   * HTTP Farm [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#GET)
   */
  /*
  GetThisObjectProperties(farmId: number, serviceName: string): Promise<IpLoadbalancingbackendHttpBackendHttp> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`

    return this.client.request<IpLoadbalancingbackendHttpBackendHttp>('GET', url)
  }
  */

  /**
   * HTTP Farm [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(farmId: number, serviceName: string, payload: IpLoadbalancingbackendHttpBackendHttp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * HTTP Farm [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#DELETE)
   */
  DeleteAnHTTPFarm(farmId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server#GET)
   */
  HTTPFarmServers(farmId: number, serviceName: string, address?: string, cookie?: string, status?: IpLoadbalancingBackendCustomerServerStatus): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server?`

    const queryParams = new QueryParams()
    if (address) { queryParams.set('address', address.toString()) }
    if (cookie) { queryParams.set('cookie', cookie) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server#POST)
   */
  AddAServerToAnHTTPFarm(address: string, farmId: number, serviceName: string, status: IpLoadbalancingBackendCustomerServerStatus, backup?: boolean, chain?: string, cookie?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion, ssl?: boolean, weight?: number): Promise<IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server`

    return this.client.request<IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer>('POST', url, {address, status, backup, chain, cookie, displayName, port, probe, proxyProtocolVersion, ssl, weight})
  }

  /**
   * HTTP Farm's Server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
   */
  /*
  GetThisObjectProperties(farmId: number, serverId: number, serviceName: string): Promise<IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`

    return this.client.request<IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer>('GET', url)
  }
  */

  /**
   * HTTP Farm's Server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(farmId: number, serverId: number, serviceName: string, payload: IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * HTTP Farm's Server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
   */
  DeleteAServerFromAnHTTPFarm(farmId: number, serverId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.frontendHttp.FrontendHttp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend#GET)
   */
  HTTPFrontendsForThisIplb(serviceName: string, defaultFarmId?: number, port?: string, zone?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/http/frontend?`

    const queryParams = new QueryParams()
    if (defaultFarmId) { queryParams.set('defaultFarmId', defaultFarmId.toString()) }
    if (port) { queryParams.set('port', port) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.frontendHttp.FrontendHttp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend#POST)
   */
  AddANewHttpFrontendOnYourIPLoadBalancing(port: string, serviceName: string, zone: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, hsts?: boolean, httpHeader?: string[], redirectLocation?: string, ssl?: boolean): Promise<IpLoadbalancingfrontendHttpFrontendHttp> {
    let url = `/ipLoadbalancing/${serviceName}/http/frontend`

    return this.client.request<IpLoadbalancingfrontendHttpFrontendHttp>('POST', url, {port, zone, allowedSource, dedicatedIpfo, defaultFarmId, defaultSslId, disabled, displayName, hsts, httpHeader, redirectLocation, ssl})
  }

  /**
   * Frontend HTTP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#GET)
   */
  /*
  GetThisObjectProperties(frontendId: number, serviceName: string): Promise<IpLoadbalancingfrontendHttpFrontendHttp> {
    let url = `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`

    return this.client.request<IpLoadbalancingfrontendHttpFrontendHttp>('GET', url)
  }
  */

  /**
   * Frontend HTTP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(frontendId: number, serviceName: string, payload: IpLoadbalancingfrontendHttpFrontendHttp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Frontend HTTP [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#DELETE)
   */
  DeleteAnHTTPFrontend(frontendId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.RouteHttp.RouteHttp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route#GET)
   */
  HTTPRoutesForThisIplb(serviceName: string, frontendId?: number): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/http/route?`

    const queryParams = new QueryParams()
    if (frontendId) { queryParams.set('frontendId', frontendId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.RouteHttp.RouteHttp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route#POST)
   */
  AddANewHTTPRouteToYourFrontend(action: IpLoadbalancingRouteHttpAction, serviceName: string, displayName?: string, frontendId?: number, weight?: number): Promise<IpLoadbalancingRouteHttpRouteHttp> {
    let url = `/ipLoadbalancing/${serviceName}/http/route`

    return this.client.request<IpLoadbalancingRouteHttpRouteHttp>('POST', url, {action, displayName, frontendId, weight})
  }

  /**
   * HTTP Route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#GET)
   */
  /*
  GetThisObjectProperties(routeId: number, serviceName: string): Promise<IpLoadbalancingRouteHttpRouteHttp> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}`

    return this.client.request<IpLoadbalancingRouteHttpRouteHttp>('GET', url)
  }
  */

  /**
   * HTTP Route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(routeId: number, serviceName: string, payload: IpLoadbalancingRouteHttpRouteHttp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * HTTP Route [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#DELETE)
   */
  DeleteThisHTTPRoute(routeId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule#GET)
   */
  /*
  HTTPRoutesForThisIplb(routeId: number, serviceName: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule#POST)
   */
  AddANewRuleToYourRoute(field: string, match: IpLoadbalancingRouteRuleMatches, routeId: number, serviceName: string, displayName?: string, negate?: boolean, pattern?: string, subField?: string): Promise<IpLoadbalancingRouteRuleRouteRule> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`

    return this.client.request<IpLoadbalancingRouteRuleRouteRule>('POST', url, {field, match, displayName, negate, pattern, subField})
  }

  /**
   * Rule of a route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#GET)
   */
  /*
  GetThisObjectProperties(routeId: number, ruleId: number, serviceName: string): Promise<IpLoadbalancingRouteRuleRouteRule> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`

    return this.client.request<IpLoadbalancingRouteRuleRouteRule>('GET', url)
  }
  */

  /**
   * Rule of a route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(routeId: number, ruleId: number, serviceName: string, payload: IpLoadbalancingRouteRuleRouteRule): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Rule of a route [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#DELETE)
   */
  DeleteThisRuleFromTheRoute(routeId: number, ruleId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * instancesState operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/instancesState#GET)
   */
  GetTheEffectiveStateOfYourIPLBInstancesOnIPLBServers(serviceName: string): Promise<IpLoadbalancingInstancesState[]> {
    let url = `/ipLoadbalancing/${serviceName}/instancesState`

    return this.client.request<IpLoadbalancingInstancesState[]>('GET', url)
  }

  /**
   * natIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/natIp#GET)
   */
  IpSubnetUsedByOVHToNatRequestsOnYourIPLBToYourBackendsYouMustEnsureThatYourBackendsAreNotPartOfANetworkThatOverlapWithThisOne(serviceName: string): Promise<IpLoadbalancingNatIps[]> {
    let url = `/ipLoadbalancing/${serviceName}/natIp`

    return this.client.request<IpLoadbalancingNatIps[]>('GET', url)
  }

  /**
   * pendingChanges operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/pendingChanges#GET)
   */
  ListThePendingChangesOnYourLoadBalancerConfigurationPerZone(serviceName: string): Promise<IpLoadbalancingPendingChanges[]> {
    let url = `/ipLoadbalancing/${serviceName}/pendingChanges`

    return this.client.request<IpLoadbalancingPendingChanges[]>('GET', url)
  }

  /**
   * List the ipLoadbalancing.Quota.Quota objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota#GET)
   */
  AvailableQuotaInformationsForCurrentBillingPeriodPerZone(serviceName: string): Promise<string[]> {
    let url = `/ipLoadbalancing/${serviceName}/quota`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Quota informations for current billing period for this zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota/%7Bzone%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, zone: string): Promise<IpLoadbalancingQuotaQuota> {
    let url = `/ipLoadbalancing/${serviceName}/quota/${zone}`

    return this.client.request<IpLoadbalancingQuotaQuota>('GET', url)
  }
  */

  /**
   * Quota informations for current billing period for this zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota/%7Bzone%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, zone: string, payload: IpLoadbalancingQuotaQuota): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/quota/${zone}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the ipLoadbalancing.QuotaHistory.QuotaHistory objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quotaHistory#GET)
   */
  QuotaHistoryInformationsPerMonth(serviceName: string, historizedDateFrom?: string, historizedDateTo?: string, zone?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/quotaHistory?`

    const queryParams = new QueryParams()
    if (historizedDateFrom) { queryParams.set('historizedDate.from', historizedDateFrom.toString()) }
    if (historizedDateTo) { queryParams.set('historizedDate.to', historizedDateTo.toString()) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * QuotaHistory [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quotaHistory/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<IpLoadbalancingQuotaHistoryQuotaHistory> {
    let url = `/ipLoadbalancing/${serviceName}/quotaHistory/${id}`

    return this.client.request<IpLoadbalancingQuotaHistoryQuotaHistory>('GET', url)
  }
  */

  /**
   * refresh operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/refresh#POST)
   */
  ApplyTheConfigurationToYourIplb(serviceName: string, zone?: string): Promise<IpLoadbalancingTaskTask> {
    let url = `/ipLoadbalancing/${serviceName}/refresh`

    return this.client.request<IpLoadbalancingTaskTask>('POST', url, {zone})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/ipLoadbalancing/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the ipLoadbalancing.Ssl.Ssl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl#GET)
   */
  SslForThisIplb(serviceName: string, fingerprint?: string, serial?: string, type?: IpLoadbalancingSslType): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/ssl?`

    const queryParams = new QueryParams()
    if (fingerprint) { queryParams.set('fingerprint', fingerprint) }
    if (serial) { queryParams.set('serial', serial) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.Ssl.Ssl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl#POST)
   */
  AddANewCustomSSLCertificateOnYourIPLoadBalancing(certificate: string, key: string, serviceName: string, chain?: string, displayName?: string): Promise<IpLoadbalancingSslSsl> {
    let url = `/ipLoadbalancing/${serviceName}/ssl`

    return this.client.request<IpLoadbalancingSslSsl>('POST', url, {certificate, key, chain, displayName})
  }

  /**
   * Ssl [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<IpLoadbalancingSslSsl> {
    let url = `/ipLoadbalancing/${serviceName}/ssl/${id}`

    return this.client.request<IpLoadbalancingSslSsl>('GET', url)
  }
  */

  /**
   * Ssl [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: IpLoadbalancingSslSsl): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/ssl/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Ssl [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#DELETE)
   */
  DeleteACustomSSLCertificate(id: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/ssl/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/status#GET)
   */
  GetTheGlobalStatusOfYourIPLB(serviceName: string): Promise<IpLoadbalancingStatus> {
    let url = `/ipLoadbalancing/${serviceName}/status`

    return this.client.request<IpLoadbalancingStatus>('GET', url)
  }

  /**
   * List the ipLoadbalancing.Task.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/task#GET)
   */
  TaskForThisIplb(serviceName: string, action?: IpLoadbalancingTaskAction, creationDateFrom?: string, creationDateTo?: string, doneDateFrom?: string, doneDateTo?: string, status?: IpLoadbalancingTaskStatus): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (creationDateFrom) { queryParams.set('creationDate.from', creationDateFrom.toString()) }
    if (creationDateTo) { queryParams.set('creationDate.to', creationDateTo.toString()) }
    if (doneDateFrom) { queryParams.set('doneDate.from', doneDateFrom.toString()) }
    if (doneDateTo) { queryParams.set('doneDate.to', doneDateTo.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * IP Load Balancing Operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<IpLoadbalancingTaskTask> {
    let url = `/ipLoadbalancing/${serviceName}/task/${id}`

    return this.client.request<IpLoadbalancingTaskTask>('GET', url)
  }
  */

  /**
   * List the ipLoadbalancing.backendTcp.BackendTcp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm#GET)
   */
  TCPFarmForThisIplb(serviceName: string, vrackNetworkId?: number, zone?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm?`

    const queryParams = new QueryParams()
    if (vrackNetworkId) { queryParams.set('vrackNetworkId', vrackNetworkId.toString()) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.backendTcp.BackendTcp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm#POST)
   */
  AddANewTCPFarmOnYourIPLoadBalancing(serviceName: string, zone: string, balance?: IpLoadbalancingBalanceTCP, displayName?: string, port?: number, probe?: IpLoadbalancingBackendProbe, stickiness?: IpLoadbalancingStickinessTCP, vrackNetworkId?: number): Promise<IpLoadbalancingbackendTcpBackendTcp> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm`

    return this.client.request<IpLoadbalancingbackendTcpBackendTcp>('POST', url, {zone, balance, displayName, port, probe, stickiness, vrackNetworkId})
  }

  /**
   * TCP Farm [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#GET)
   */
  /*
  GetThisObjectProperties(farmId: number, serviceName: string): Promise<IpLoadbalancingbackendTcpBackendTcp> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`

    return this.client.request<IpLoadbalancingbackendTcpBackendTcp>('GET', url)
  }
  */

  /**
   * TCP Farm [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(farmId: number, serviceName: string, payload: IpLoadbalancingbackendTcpBackendTcp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * TCP Farm [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#DELETE)
   */
  DeleteATCPFarm(farmId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server#GET)
   */
  TCPFarmServers(farmId: number, serviceName: string, address?: string, status?: IpLoadbalancingBackendCustomerServerStatus): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server?`

    const queryParams = new QueryParams()
    if (address) { queryParams.set('address', address.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server#POST)
   */
  AddAServerToATCPFarm(address: string, farmId: number, serviceName: string, status: IpLoadbalancingBackendCustomerServerStatus, backup?: boolean, chain?: string, displayName?: string, port?: number, probe?: boolean, proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersion, ssl?: boolean, weight?: number): Promise<IpLoadbalancingbackendTcpCustomerServerBackendTCPServer> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server`

    return this.client.request<IpLoadbalancingbackendTcpCustomerServerBackendTCPServer>('POST', url, {address, status, backup, chain, displayName, port, probe, proxyProtocolVersion, ssl, weight})
  }

  /**
   * TCP Farm's Server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
   */
  /*
  GetThisObjectProperties(farmId: number, serverId: number, serviceName: string): Promise<IpLoadbalancingbackendTcpCustomerServerBackendTCPServer> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`

    return this.client.request<IpLoadbalancingbackendTcpCustomerServerBackendTCPServer>('GET', url)
  }
  */

  /**
   * TCP Farm's Server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(farmId: number, serverId: number, serviceName: string, payload: IpLoadbalancingbackendTcpCustomerServerBackendTCPServer): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * TCP Farm's Server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
   */
  DeleteAServerFromATCPFarm(farmId: number, serverId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.frontendTcp.FrontendTcp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend#GET)
   */
  TCPFrontendsForThisIplb(serviceName: string, defaultFarmId?: number, port?: string, zone?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/frontend?`

    const queryParams = new QueryParams()
    if (defaultFarmId) { queryParams.set('defaultFarmId', defaultFarmId.toString()) }
    if (port) { queryParams.set('port', port) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.frontendTcp.FrontendTcp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend#POST)
   */
  AddANewTCPFrontendOnYourIPLoadBalancing(port: string, serviceName: string, zone: string, allowedSource?: string[], dedicatedIpfo?: string[], defaultFarmId?: number, defaultSslId?: number, disabled?: boolean, displayName?: string, ssl?: boolean): Promise<IpLoadbalancingfrontendTcpFrontendTcp> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/frontend`

    return this.client.request<IpLoadbalancingfrontendTcpFrontendTcp>('POST', url, {port, zone, allowedSource, dedicatedIpfo, defaultFarmId, defaultSslId, disabled, displayName, ssl})
  }

  /**
   * Frontend TCP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#GET)
   */
  /*
  GetThisObjectProperties(frontendId: number, serviceName: string): Promise<IpLoadbalancingfrontendTcpFrontendTcp> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`

    return this.client.request<IpLoadbalancingfrontendTcpFrontendTcp>('GET', url)
  }
  */

  /**
   * Frontend TCP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(frontendId: number, serviceName: string, payload: IpLoadbalancingfrontendTcpFrontendTcp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Frontend TCP [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#DELETE)
   */
  DeleteAnTCPFrontend(frontendId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.RouteTcp.RouteTcp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route#GET)
   */
  TCPRoutesForThisIplb(serviceName: string, frontendId?: number): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route?`

    const queryParams = new QueryParams()
    if (frontendId) { queryParams.set('frontendId', frontendId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.RouteTcp.RouteTcp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route#POST)
   */
  AddANewTCPRouteToYourFrontend(action: IpLoadbalancingRouteTcpAction, serviceName: string, displayName?: string, frontendId?: number, weight?: number): Promise<IpLoadbalancingRouteTcpRouteTcp> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route`

    return this.client.request<IpLoadbalancingRouteTcpRouteTcp>('POST', url, {action, displayName, frontendId, weight})
  }

  /**
   * TCP Route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#GET)
   */
  /*
  GetThisObjectProperties(routeId: number, serviceName: string): Promise<IpLoadbalancingRouteTcpRouteTcp> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`

    return this.client.request<IpLoadbalancingRouteTcpRouteTcp>('GET', url)
  }
  */

  /**
   * TCP Route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(routeId: number, serviceName: string, payload: IpLoadbalancingRouteTcpRouteTcp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * TCP Route [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#DELETE)
   */
  DeleteThisTCPRoute(routeId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule#GET)
   */
  /*
  HTTPRoutesForThisIplb(routeId: number, serviceName: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule#POST)
   */
  /*
  AddANewRuleToYourRoute(field: string, match: IpLoadbalancingRouteRuleMatches, routeId: number, serviceName: string, displayName?: string, negate?: boolean, pattern?: string, subField?: string): Promise<IpLoadbalancingRouteRuleRouteRule> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`

    return this.client.request<IpLoadbalancingRouteRuleRouteRule>('POST', url, {field, match, displayName, negate, pattern, subField})
  }
  */

  /**
   * Rule of a route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#GET)
   */
  /*
  GetThisObjectProperties(routeId: number, ruleId: number, serviceName: string): Promise<IpLoadbalancingRouteRuleRouteRule> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`

    return this.client.request<IpLoadbalancingRouteRuleRouteRule>('GET', url)
  }
  */

  /**
   * Rule of a route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(routeId: number, ruleId: number, serviceName: string, payload: IpLoadbalancingRouteRuleRouteRule): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Rule of a route [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#DELETE)
   */
  /*
  DeleteThisRuleFromTheRoute(routeId: number, ruleId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/ipLoadbalancing/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the ipLoadbalancing.backendUdp.BackendUdp objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm#GET)
   */
  UDPFarmForThisIplb(serviceName: string, vrackNetworkId?: number, zone?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm?`

    const queryParams = new QueryParams()
    if (vrackNetworkId) { queryParams.set('vrackNetworkId', vrackNetworkId.toString()) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.backendUdp.BackendUdp objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm#POST)
   */
  AddANewUDPFarmOnYourIPLoadBalancing(port: number, serviceName: string, zone: string, displayName?: string, vrackNetworkId?: number): Promise<IpLoadbalancingbackendUdpBackendUdp> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm`

    return this.client.request<IpLoadbalancingbackendUdpBackendUdp>('POST', url, {port, zone, displayName, vrackNetworkId})
  }

  /**
   * UDP Farm [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#GET)
   */
  /*
  GetThisObjectProperties(farmId: number, serviceName: string): Promise<IpLoadbalancingbackendUdpBackendUdp> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`

    return this.client.request<IpLoadbalancingbackendUdpBackendUdp>('GET', url)
  }
  */

  /**
   * UDP Farm [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(farmId: number, serviceName: string, payload: IpLoadbalancingbackendUdpBackendUdp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * UDP Farm [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#DELETE)
   */
  DeleteAnUDPFarm(farmId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server#GET)
   */
  UDPFarmServers(farmId: number, serviceName: string, address?: string, status?: IpLoadbalancingBackendCustomerServerStatus): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server?`

    const queryParams = new QueryParams()
    if (address) { queryParams.set('address', address.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server#POST)
   */
  AddAServerToAnUDPFarm(address: string, farmId: number, serviceName: string, status: IpLoadbalancingBackendCustomerServerStatus, displayName?: string, port?: number): Promise<IpLoadbalancingbackendUdpCustomerServerBackendUDPServer> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server`

    return this.client.request<IpLoadbalancingbackendUdpCustomerServerBackendUDPServer>('POST', url, {address, status, displayName, port})
  }

  /**
   * UDP Farm's Server [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
   */
  /*
  GetThisObjectProperties(farmId: number, serverId: number, serviceName: string): Promise<IpLoadbalancingbackendUdpCustomerServerBackendUDPServer> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`

    return this.client.request<IpLoadbalancingbackendUdpCustomerServerBackendUDPServer>('GET', url)
  }
  */

  /**
   * UDP Farm's Server [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(farmId: number, serverId: number, serviceName: string, payload: IpLoadbalancingbackendUdpCustomerServerBackendUDPServer): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * UDP Farm's Server [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
   */
  DeleteAServerFromAnUDPFarm(farmId: number, serverId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.frontendUdp.FrontendUdp objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend#GET)
   */
  UDPFrontendsForThisIplb(serviceName: string, defaultFarmId?: number, port?: string, zone?: string): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/udp/frontend?`

    const queryParams = new QueryParams()
    if (defaultFarmId) { queryParams.set('defaultFarmId', defaultFarmId.toString()) }
    if (port) { queryParams.set('port', port) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.frontendUdp.FrontendUdp objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend#POST)
   */
  AddANewUDPFrontendOnYourIPLoadBalancing(port: string, serviceName: string, zone: string, dedicatedIpfo?: string[], defaultFarmId?: number, disabled?: boolean, displayName?: string): Promise<IpLoadbalancingfrontendUdpFrontendUdp> {
    let url = `/ipLoadbalancing/${serviceName}/udp/frontend`

    return this.client.request<IpLoadbalancingfrontendUdpFrontendUdp>('POST', url, {port, zone, dedicatedIpfo, defaultFarmId, disabled, displayName})
  }

  /**
   * Frontend UDP [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#GET)
   */
  /*
  GetThisObjectProperties(frontendId: number, serviceName: string): Promise<IpLoadbalancingfrontendUdpFrontendUdp> {
    let url = `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`

    return this.client.request<IpLoadbalancingfrontendUdpFrontendUdp>('GET', url)
  }
  */

  /**
   * Frontend UDP [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(frontendId: number, serviceName: string, payload: IpLoadbalancingfrontendUdpFrontendUdp): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Frontend UDP [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#DELETE)
   */
  DeleteAnUDPFrontend(frontendId: number, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network#GET)
   */
  DescriptionsOfPrivateNetworksInTheVRackAttachedToThisLoadBalancer(serviceName: string, subnet?: string, vlan?: number): Promise<number[]> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/network?`

    const queryParams = new QueryParams()
    if (subnet) { queryParams.set('subnet', subnet.toString()) }
    if (vlan) { queryParams.set('vlan', vlan.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network#POST)
   */
  AddADescriptionOfAPrivateNetworkInTheAttachedVRack(natIp: string, serviceName: string, subnet: string, displayName?: string, farmId?: number[], vlan?: number): Promise<IpLoadbalancingVrackNetworkVrackNetwork> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/network`

    return this.client.request<IpLoadbalancingVrackNetworkVrackNetwork>('POST', url, {natIp, subnet, displayName, farmId, vlan})
  }

  /**
   * Represents a private network in the vRack [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, vrackNetworkId: number): Promise<IpLoadbalancingVrackNetworkVrackNetwork> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`

    return this.client.request<IpLoadbalancingVrackNetworkVrackNetwork>('GET', url)
  }
  */

  /**
   * Represents a private network in the vRack [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, vrackNetworkId: number, payload: IpLoadbalancingVrackNetworkVrackNetwork): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Represents a private network in the vRack [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#DELETE)
   */
  DeleteThisDescriptionOfAPrivateNetworkInTheVRackItMustNotBeUsedByAnyFarmServer(serviceName: string, vrackNetworkId: number): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * updateFarmId operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D/updateFarmId#POST)
   */
  UpdateFarmAttachedToThatVrackNetworkId(farmId: number[], serviceName: string, vrackNetworkId: number): Promise<IpLoadbalancingVrackNetworkVrackNetwork> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}/updateFarmId`

    return this.client.request<IpLoadbalancingVrackNetworkVrackNetwork>('POST', url, {farmId})
  }

  /**
   * networkCreationRules operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/networkCreationRules#GET)
   */
  RulesToCreateANetworkAttachedToAVrack(serviceName: string): Promise<IpLoadbalancingVrackNetworkCreationRules> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/networkCreationRules`

    return this.client.request<IpLoadbalancingVrackNetworkCreationRules>('GET', url)
  }

  /**
   * status operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/status#GET)
   */
  InformationAboutVRackForYourLoadBalancer(serviceName: string): Promise<IpLoadbalancingVrackInformation> {
    let url = `/ipLoadbalancing/${serviceName}/vrack/status`

    return this.client.request<IpLoadbalancingVrackInformation>('GET', url)
  }

  /**
   * List the ipLoadbalancing.Zone.Zone objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone#GET)
   */
  ZoneForThisIplb(serviceName: string): Promise<string[]> {
    let url = `/ipLoadbalancing/${serviceName}/zone`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * IP Load Balancing Zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<IpLoadbalancingZoneZone> {
    let url = `/ipLoadbalancing/${serviceName}/zone/${name}`

    return this.client.request<IpLoadbalancingZoneZone>('GET', url)
  }
  */

  /**
   * cancelTermination operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D/cancelTermination#POST)
   */
  CancelTheTerminationRequestOfYourServiceZoneOption(name: string, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/zone/${name}/cancelTermination`

    return this.client.request<void>('POST', url)
  }

  /**
   * terminate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D/terminate#POST)
   */
  TerminateYourServiceZoneOption(name: string, serviceName: string): Promise<void> {
    let url = `/ipLoadbalancing/${serviceName}/zone/${name}/terminate`

    return this.client.request<void>('POST', url)
  }

  /**
   * List of zone available for an IP load balancing [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/availableZones#GET)
   */
  ListOfZoneAvailableForAnIPLoadBalancing(): Promise<string[]> {
    let url = `/ipLoadbalancing/availableZones`

    return this.client.request<string[]>('GET', url)
  }

}
