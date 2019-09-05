// GENERATED SDK for pack/siptrunk API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Pack of SIP trunk services
 */
export interface PacksiptrunkPackSipTrunk {
  packName: string
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


export class PackSiptrunk {
  constructor(private client: Client) {}

  /**
   * Operations about the PACK service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/pack/siptrunk`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Pack of SIP trunk services [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D#GET)
   */
  GetThisObjectProperties(packName: string): Promise<PacksiptrunkPackSipTrunk> {
    let url = `/pack/siptrunk/${packName}`

    return this.client.request<PacksiptrunkPackSipTrunk>('GET', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/pack/siptrunk/${packName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(packName: string): Promise<ServicesService> {
    let url = `/pack/siptrunk/${packName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(packName: string, payload: ServicesService): Promise<void> {
    let url = `/pack/siptrunk/${packName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

}
