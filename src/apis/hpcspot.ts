// GENERATED SDK for hpcspot API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
}

/**
 * Account HPC Spot
 */
export interface HpcspotAccount {
  name: string
}

/**
 * Detail of a HPC Spot consumtion
 */
export interface HpcspotConsumption {
  description?: string
  hpcspotItemEndDate: string
  hpcspotItemId: number
  hpcspotUrl?: string
  id: number
  orderId?: number
  quantity: any
  reference: HpcspotConsumptionReference
  type: HpcspotConsumptionType
}

/*
 * All references a HPC Spot consumption can be in
 */
export type HpcspotConsumptionReference = '12core.60gb.quadrok4000' | '16core.64gb' | '1core.4gb' | '1core.4gb.quadrok4000' | '2core.8gb' | '2core.8gb.quadrok4000' | '4core.15gb' | '4core.15gb.quadrok4000' | '4core.32gb' | '8core.30gb' | '8core.30gb.quadrok4000' | '8core.32gb.1teslak20'

/*
 * All types a HPC Spot consumption can be in
 */
export enum HpcspotConsumptionType {
  JOB = 'job',
  RESERVATION = 'reservation',
  SESSION = 'session'
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


export class Hpcspot {
  constructor(private client: Client) {}

  /**
   * Operations about the HPCSPOT service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/hpcspot`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Account HPC Spot [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<HpcspotAccount> {
    let url = `/hpcspot/${serviceName}`

    return this.client.request<HpcspotAccount>('GET', url)
  }

  /**
   * List the hpcspot.Consumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/consumption#GET)
   */
  DetailsOfTheConsumptionOfYourAccount(serviceName: string, hpcspotItemEndDateFrom?: string, hpcspotItemEndDateTo?: string, hpcspotItemId?: number, orderId?: number, type?: HpcspotConsumptionType): Promise<number[]> {
    let url = `/hpcspot/${serviceName}/consumption?`

    const queryParams = new QueryParams()
    if (hpcspotItemEndDateFrom) { queryParams.set('hpcspotItemEndDate.from', hpcspotItemEndDateFrom.toString()) }
    if (hpcspotItemEndDateTo) { queryParams.set('hpcspotItemEndDate.to', hpcspotItemEndDateTo.toString()) }
    if (hpcspotItemId) { queryParams.set('hpcspotItemId', hpcspotItemId.toString()) }
    if (orderId) { queryParams.set('orderId', orderId.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Detail of a HPC Spot consumtion [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/consumption/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<HpcspotConsumption> {
    let url = `/hpcspot/${serviceName}/consumption/${id}`

    return this.client.request<HpcspotConsumption>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/hpcspot/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/hpcspot/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

}
