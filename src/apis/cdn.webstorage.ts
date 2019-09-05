// GENERATED SDK for cdn/webstorage API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Static CDN
 */
export interface CdnwebstorageAccount {
  domain: string
  server: string
  storageLimit: number
  storageUsage: number
}

/**
 * A structure with credentials for using openstack account
 */
export interface CdnwebstorageAccountCredentials {
  endpoint: string
  login: string
  password: string
  tenant: string
}

/**
 * A structure describing type of a stats hash
 */
export interface CdnwebstorageStatsDataType {
  date: string
  value: number
}

/*
 * Period of the statistics
 */
export enum CdnwebstorageStatsPeriod {
  DAY = 'day',
  MONTH = 'month',
  WEEK = 'week'
}

/*
 * Type of statistics related to cache
 */
export enum CdnwebstorageStatsType {
  BACKEND = 'backend',
  CDN = 'cdn',
  QUOTA = 'quota'
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


export class CdnWebstorage {
  constructor(private client: Client) {}

  /**
   * Operations about the CDNSTATIC service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/cdn/webstorage`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Static CDN [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<CdnwebstorageAccount> {
    let url = `/cdn/webstorage/${serviceName}`

    return this.client.request<CdnwebstorageAccount>('GET', url)
  }

  /**
   * credentials operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/credentials#GET)
   */
  GivesForCustomerCredentialsToAccesssSwiftAccount(serviceName: string): Promise<CdnwebstorageAccountCredentials> {
    let url = `/cdn/webstorage/${serviceName}/credentials`

    return this.client.request<CdnwebstorageAccountCredentials>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/cdn/webstorage/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/cdn/webstorage/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/statistics#GET)
   */
  ReturnStatsAboutBandwidthConsumption(period: CdnwebstorageStatsPeriod, serviceName: string, type: CdnwebstorageStatsType): Promise<CdnwebstorageStatsDataType[]> {
    let url = `/cdn/webstorage/${serviceName}/statistics?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<CdnwebstorageStatsDataType[]>('GET', url+queryParams.toString())
  }

}
