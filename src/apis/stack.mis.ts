// GENERATED SDK for stack/mis API

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
 * Stack MIS
 */
export interface Stackmisproduct {
  domain: string
  type: StackStackType
}

/*
 * Stack type
 */
export enum StackStackType {
  MDS = 'MDS',
  MIS = 'MIS',
  MOS = 'MOS'
}


export class StackMis {
  constructor(private client: Client) {}

  /**
   * Operations about the GS service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/stack/mis`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Stack MIS [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<Stackmisproduct> {
    let url = `/stack/mis/${serviceName}`

    return this.client.request<Stackmisproduct>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/stack/mis/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/stack/mis/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

}
