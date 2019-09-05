// GENERATED SDK for vip API

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
 * Vip Service
 */
export interface VipSupportVip {
  serviceName: string
  universe: VipUniverseEnum[]
}

/*
 * Available universe for VIP service
 */
export enum VipUniverse {
  CLOUD = 'cloud',
  DEDICATED = 'dedicated',
  TELECOM = 'telecom',
  WEB = 'web'
}


export class Vip {
  constructor(private client: Client) {}

  /**
   * Operations about the SUPPORT_PLUS service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/vip`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Vip Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<VipSupportVip> {
    let url = `/vip/${serviceName}`

    return this.client.request<VipSupportVip>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/vip/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/vip/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

}
