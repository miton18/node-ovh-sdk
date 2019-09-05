// GENERATED SDK for sslGateway API

import {Client} from '../client'
import QueryParams from '../query-params'

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

/**
 * Domain attached to an SSL Gateway
 */
export interface SslGatewayDomain {
  domain: string
  id: number
  state: SslGatewayDomainState
}

/*
 * Possible values for SSL Gateway domain state
 */
export enum SslGatewayDomainState {
  CREATING = 'creating',
  DELETED = 'deleted',
  DELETING = 'deleting',
  HTTP_ONLY = 'http-only',
  INTERNAL = 'internal',
  OK = 'ok'
}

/**
 * A structure describing the eligibility status of a domain
 */
export interface SslGatewayEligibilityStatus {
  domain: string
  ip6s: string[]
  ips: string[]
  isHostedByOvh: boolean
}

/**
 * a list of {zone, nat Ip}
 */
export interface SslGatewayNatIps {
  ip: string[]
  zone: string
}

/*
 * List of SSL Gateway offers
 */
export enum SslGatewayOffer {
  ADVANCED = 'advanced',
  ENTERPRISE = 'enterprise',
  FREE = 'free',
  INTERNAL = 'internal'
}

/**
 * Server attached to an SSL Gateway
 */
export interface SslGatewayServer {
  address: string
  id: number
  port: number
  state: SslGatewayServerState
}

/*
 * Possible values for SSL Gateway server state
 */
export enum SslGatewayServerState {
  CREATING = 'creating',
  DELETED = 'deleted',
  DELETING = 'deleting',
  INTERNAL = 'internal',
  OK = 'ok',
  UPDATING = 'updating'
}

/*
 * Possible values for ssl ciphers
 */
export enum SslGatewaySslConfiguration {
  INTERMEDIATE = 'intermediate',
  INTERNAL = 'internal',
  MODERN = 'modern'
}

/**
 * Your SSL Gateway
 */
export interface SslGatewaySslGateway {
  allowedSource?: string[]
  displayName?: string
  hsts: boolean
  httpsRedirect: boolean
  ipv4: string
  ipv6?: string
  metricsToken?: string
  offer: SslGatewayOffer
  reverse?: string
  serverHttps: boolean
  serviceName: string
  sslConfiguration?: SslGatewaySslConfiguration
  state: SslGatewayState
  zones: string[]
}

/*
 * Possible values for SSL Gateway state
 */
export enum SslGatewayState {
  CREATING = 'creating',
  DELETED = 'deleted',
  DELETING = 'deleting',
  HTTP_ONLY = 'http-only',
  INTERNAL = 'internal',
  OK = 'ok',
  SUSPENDED = 'suspended',
  UPGRADING = 'upgrading'
}

/**
 * SSL Gateway tasks
 */
export interface SslGatewayTask {
  action: SslGatewayTaskAction
  creationDate: string
  id: number
  progress: number
  status: SslGatewayTaskStatus
}

/*
 * Possible task action
 */
export enum SslGatewayTaskAction {
  ADDDOMAIN = 'addDomain',
  ADDPAIDCERTIFICATE = 'addPaidCertificate',
  ADDSERVER = 'addServer',
  CREATESERVICE = 'createService',
  DELETEDOMAIN = 'deleteDomain',
  DELETESERVER = 'deleteServer',
  DELETESERVICE = 'deleteService',
  INTERNALTASK = 'internalTask',
  UPDATESERVER = 'updateServer',
  UPDATESERVICE = 'updateService',
  UPGRADE = 'upgrade'
}

/*
 * Possible task status
 */
export enum SslGatewayTaskStatus {
  BLOCKED = 'blocked',
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  PAUSED = 'paused',
  TODO = 'todo'
}


export class SslGateway {
  constructor(private client: Client) {}

  /**
   * Operations about the SSLGATEWAY service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/sslGateway`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your SSL Gateway [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<SslGatewaySslGateway> {
    let url = `/sslGateway/${serviceName}`

    return this.client.request<SslGatewaySslGateway>('GET', url)
  }

  /**
   * Your SSL Gateway [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: SslGatewaySslGateway): Promise<void> {
    let url = `/sslGateway/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Change the contacts of this service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/sslGateway/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/sslGateway/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the sslGateway.Domain objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain#GET)
   */
  DomainsAttachedToYourSSLGateway(serviceName: string): Promise<number[]> {
    let url = `/sslGateway/${serviceName}/domain`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the sslGateway.Domain objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain#POST)
   */
  AttachANewDomainToYourSSLGateway(domain: string, serviceName: string): Promise<SslGatewayDomain> {
    let url = `/sslGateway/${serviceName}/domain`

    return this.client.request<SslGatewayDomain>('POST', url, {domain})
  }

  /**
   * Domain attached to an SSL Gateway [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SslGatewayDomain> {
    let url = `/sslGateway/${serviceName}/domain/${id}`

    return this.client.request<SslGatewayDomain>('GET', url)
  }
  */

  /**
   * Domain attached to an SSL Gateway [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain/%7Bid%7D#DELETE)
   */
  DetachADomainFromYourSSLGateway(id: number, serviceName: string): Promise<void> {
    let url = `/sslGateway/${serviceName}/domain/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * natIp operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/natIp#GET)
   */
  IpSubnetUsedByOVHToNatRequestsToYourSSLGatewayBackends(serviceName: string): Promise<SslGatewayNatIps[]> {
    let url = `/sslGateway/${serviceName}/natIp`

    return this.client.request<SslGatewayNatIps[]>('GET', url)
  }

  /**
   * renewCertificate operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/renewCertificate#POST)
   */
  RenewYourSSLCertificates(serviceName: string, domain?: string): Promise<string[]> {
    let url = `/sslGateway/${serviceName}/renewCertificate`

    return this.client.request<string[]>('POST', url, {domain})
  }

  /**
   * List the sslGateway.Server objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server#GET)
   */
  ServersAttachedToYourSSLGateway(serviceName: string): Promise<number[]> {
    let url = `/sslGateway/${serviceName}/server`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the sslGateway.Server objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server#POST)
   */
  AddANewServerToYourSSLGateway(address: string, port: number, serviceName: string): Promise<SslGatewayServer> {
    let url = `/sslGateway/${serviceName}/server`

    return this.client.request<SslGatewayServer>('POST', url, {address, port})
  }

  /**
   * Server attached to an SSL Gateway [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SslGatewayServer> {
    let url = `/sslGateway/${serviceName}/server/${id}`

    return this.client.request<SslGatewayServer>('GET', url)
  }
  */

  /**
   * Server attached to an SSL Gateway [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: SslGatewayServer): Promise<void> {
    let url = `/sslGateway/${serviceName}/server/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Server attached to an SSL Gateway [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server/%7Bid%7D#DELETE)
   */
  RemoveAServer(id: number, serviceName: string): Promise<void> {
    let url = `/sslGateway/${serviceName}/server/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/sslGateway/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/sslGateway/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the sslGateway.Task objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/task#GET)
   */
  TaskForThisSSLGateway(serviceName: string): Promise<number[]> {
    let url = `/sslGateway/${serviceName}/task`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * SSL Gateway tasks [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SslGatewayTask> {
    let url = `/sslGateway/${serviceName}/task/${id}`

    return this.client.request<SslGatewayTask>('GET', url)
  }
  */

  /**
   * Terminate your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/sslGateway/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List of zone available for an SSL Gateway [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/availableZones#GET)
   */
  ListOfZoneAvailableForAnSSLGateway(): Promise<string[]> {
    let url = `/sslGateway/availableZones`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Check domain eligibility. Return list of eligible IP(s) for this domain. [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/eligibility#GET)
   */
  CheckDomainEligibilityReturnListOfEligibleIPsForThisDomain(domain: string): Promise<SslGatewayEligibilityStatus> {
    let url = `/sslGateway/eligibility?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<SslGatewayEligibilityStatus>('GET', url+queryParams.toString())
  }

}
