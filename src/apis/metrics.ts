// GENERATED SDK for metrics API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Structure holding the consumption
 */
export interface Consumption {
  ddp: number
  mads: number
}

/**
 * Structure holding the elements about a label
 */
export interface Label {
  key: string
  value: string
}

/*
 * Type of the service
 */
export enum OfferType {
  CLOUD = 'cloud',
  LIVE = 'live'
}

/**
 * Structure holding the options for a service
 */
export interface Option {
  ddp: number
  lastModification: string
  mads: number
}

/*
 * Metrics service token permissions
 */
export enum Permission {
  READ = 'read',
  WRITE = 'write'
}

/**
 * Structure holding the elements about a region
 */
export interface Region {
  description: string
  name: string
}

/**
 * Structure holding the elements about a service
 */
export interface Service {
  description: string
  name: string
  offer: string
  quota: Option
  region: Region
  shouldUpgrade: boolean
  status: ServiceStatus
  type: OfferType
}

/*
 * Status of of the service
 */
export enum ServiceStatus {
  NEW = 'new',
  ALIVE = 'alive',
  DISABLED = 'disabled',
  DEAD = 'dead'
}

/**
 * Structure holding the elements about a token
 */
export interface Token {
  access: string
  createdAt: string
  description: string
  expiryAt: string
  id: string
  isRevoked: boolean
  labels: Label[]
  permission: Permission
}

export interface LookupTokenCreation {
  accessToken: string
}

export interface QuotaUpdate {
  quota: number
}

export interface TokenCreation {
  description?: string
  labels?: Label[]
  permission: Permission
}

export interface TokenUpdate {
  description?: string
}

export interface Update {
  description?: string
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


export class Metrics {
  constructor(private client: Client) {}

  /**
   * Operations about the METRICS service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/metrics`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Operations about the METRICS service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D#GET)
   */
  GetService(serviceName: string): Promise<Service> {
    let url = `/metrics/${serviceName}`

    return this.client.request<Service>('GET', url)
  }

  /**
   * Operations about the METRICS service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D#PUT)
   */
  ModifyService(serviceName: string, payload: Update): Promise<Service> {
    let url = `/metrics/${serviceName}`

    return this.client.request<Service>('PUT', url, payload)
  }

  /**
   * Change the contacts of this service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/metrics/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/metrics/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Metrics service consumption [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/consumption#GET)
   */
  GetConsumptionForYourService(serviceName: string, duration?: number): Promise<Consumption> {
    let url = `/metrics/${serviceName}/consumption?`

    const queryParams = new QueryParams()
    if (duration) { queryParams.set('duration', duration.toString()) }

    return this.client.request<Consumption>('GET', url+queryParams.toString())
  }

  /**
   * Look for service/token [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/lookup/token#POST)
   */
  FindTokenIDForASpecificToken(serviceName: string, payload: LookupTokenCreation): Promise<string[]> {
    let url = `/metrics/${serviceName}/lookup/token`

    return this.client.request<string[]>('POST', url, payload)
  }

  /**
   * Metrics service quota management [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/quota#PUT)
   */
  SetOverquota(serviceName: string, payload: QuotaUpdate): Promise<string> {
    let url = `/metrics/${serviceName}/quota`

    return this.client.request<string>('PUT', url, payload)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/serviceInfos#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/metrics/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/metrics/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Terminate your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/metrics/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Metrics service token operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token#GET)
   */
  GetListOfTokens(serviceName: string): Promise<string[]> {
    let url = `/metrics/${serviceName}/token`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Metrics service token operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token#POST)
   */
  CreateAToken(serviceName: string, payload: TokenCreation): Promise<Token> {
    let url = `/metrics/${serviceName}/token`

    return this.client.request<Token>('POST', url, payload)
  }

  /**
   * Metrics service token operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#DELETE)
   */
  RevokeAToken(serviceName: string, tokenId: string): Promise<void> {
    let url = `/metrics/${serviceName}/token/${tokenId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Metrics service token operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#GET)
   */
  GetASpecificToken(serviceName: string, tokenId: string): Promise<Token> {
    let url = `/metrics/${serviceName}/token/${tokenId}`

    return this.client.request<Token>('GET', url)
  }

  /**
   * Metrics service token operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#PUT)
   */
  ModifyAToken(serviceName: string, tokenId: string, payload: TokenUpdate): Promise<Token> {
    let url = `/metrics/${serviceName}/token/${tokenId}`

    return this.client.request<Token>('PUT', url, payload)
  }

}
