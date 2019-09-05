// GENERATED SDK for allDom API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * AllDom administration
 */
export interface AllDomAllDom {
  name: string
  offer: DomainOffer
  type: AllDomType
}

/**
 * Domain name of a allDom
 */
export interface AllDomAllDomDomain {
  domain: string
}

/*
 * Type
 */
export enum AllDomType {
  FRENCH = 'french',
  FRENCH_INTERNATIONAL = 'french+international',
  INTERNATIONAL = 'international'
}

/*
 * Offer
 */
export enum DomainOffer {
  DIAMOND = 'diamond',
  GOLD = 'gold',
  PLATINUM = 'platinum'
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


export class AllDom {
  constructor(private client: Client) {}

  /**
   * Operations about the ALLDOM service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/allDom`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * AllDom administration [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<AllDomAllDom> {
    let url = `/allDom/${serviceName}`

    return this.client.request<AllDomAllDom>('GET', url)
  }

  /**
   * List the allDom.AllDomDomain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/domain#GET)
   */
  DomainsAttachedToThisAllDom(serviceName: string, domain?: string): Promise<string[]> {
    let url = `/allDom/${serviceName}/domain?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Domain name of a allDom [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/domain/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string): Promise<AllDomAllDomDomain> {
    let url = `/allDom/${serviceName}/domain/${domain}`

    return this.client.request<AllDomAllDomDomain>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/allDom/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/allDom/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

}
