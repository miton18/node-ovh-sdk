// GENERATED SDK for cdn/website API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Backend on zone
 */
export interface CdnwebsiteBackend {
  ipv4: string
  status: CdnwebsiteBackendStatus
}

/*
 * All states a status can be in
 */
export enum CdnwebsiteBackendStatus {
  CREATING = 'creating',
  ERROR = 'error',
  ON = 'on',
  REMOVING = 'removing'
}

/**
 * Domain on CDN
 */
export interface CdnwebsiteDomain {
  domain: string
  status: CdnwebsiteDomainStatus
}

/*
 * All states a status can be in
 */
export enum CdnwebsiteDomainStatus {
  ERROR = 'error',
  ON = 'on',
  REMOVING = 'removing'
}

/*
 * All states a status can be in
 */
export enum CdnwebsiteDomainZoneStatus {
  ERROR = 'error',
  ON = 'on',
  REMOVING = 'removing'
}

/**
 * A structure describing type of a stats hash
 */
export interface CdnwebsiteStatsDataType {
  date: string
  value: number
}

/*
 * Period of the statistics
 */
export enum CdnwebsiteStatsPeriod {
  DAY = 'day',
  MONTH = 'month',
  WEEK = 'week'
}

/*
 * Type of statistics related to cache
 */
export enum CdnwebsiteStatsType {
  BACKEND = 'backend',
  CDN = 'cdn'
}

/*
 * Value bandwidth or request
 */
export enum CdnwebsiteStatsValue {
  BANDWIDTH = 'bandwidth',
  REQUEST = 'request'
}

/**
 * Task on CDN
 */
export interface CdnwebsiteTask {
  comment?: string
  function: CdnwebsiteTaskFunction
  status: CdnwebsiteTaskState
  taskId: number
}

/*
 * All function CDN task can be
 */
export enum CdnwebsiteTaskFunction {
  FLUSHALL = 'flushAll',
  INSTALLBACKEND = 'installBackend',
  REMOVEBACKEND = 'removeBackend',
  REMOVEDOMAIN = 'removeDomain',
  REMOVEZONE = 'removeZone'
}

/*
 * All states a CDN task can be in
 */
export enum CdnwebsiteTaskState {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Website CDN
 */
export interface CdnwebsiteWebsite {
  anycast: string
  offer: string
  service: string
}

/**
 * Zone on CDN
 */
export interface CdnwebsiteZone {
  status: CdnwebsiteDomainZoneStatus
  zone: string
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


export class CdnWebsite {
  constructor(private client: Client) {}

  /**
   * Operations about the CDNWEBSITE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/cdn/website`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Website CDN [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<CdnwebsiteWebsite> {
    let url = `/cdn/website/${serviceName}`

    return this.client.request<CdnwebsiteWebsite>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/cdn/website/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/cdn/website/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Zone on CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<CdnwebsiteZone> {
    let url = `/cdn/website/${serviceName}/zone`

    return this.client.request<CdnwebsiteZone>('GET', url)
  }
  */

  /**
   * Zone on CDN [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#POST)
   */
  ConfigureAZoneOnCDN(serviceName: string, zone: string): Promise<CdnwebsiteZone> {
    let url = `/cdn/website/${serviceName}/zone`

    return this.client.request<CdnwebsiteZone>('POST', url, {zone})
  }

  /**
   * Zone on CDN [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#DELETE)
   */
  RemoveAZoneFromTheCDN(serviceName: string): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone`

    return this.client.request<CdnwebsiteTask>('DELETE', url)
  }

  /**
   * List the cdn.website.Backend objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends#GET)
   */
  BackendAssociatedToThisZone(serviceName: string): Promise<string[]> {
    let url = `/cdn/website/${serviceName}/zone/backends`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the cdn.website.Backend objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends#POST)
   */
  ConfigureABackendOnTheZone(ipv4: string, serviceName: string): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone/backends`

    return this.client.request<CdnwebsiteTask>('POST', url, {ipv4})
  }

  /**
   * Backend on zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D#GET)
   */
  /*
  GetThisObjectProperties(ipv4: string, serviceName: string): Promise<CdnwebsiteBackend> {
    let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}`

    return this.client.request<CdnwebsiteBackend>('GET', url)
  }
  */

  /**
   * Backend on zone [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D#DELETE)
   */
  RemoveABackendFromTheZone(ipv4: string, serviceName: string): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}`

    return this.client.request<CdnwebsiteTask>('DELETE', url)
  }

  /**
   * List the cdn.website.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D/tasks#GET)
   */
  TaskAssociatedToThisBackend(ipv4: string, serviceName: string): Promise<number[]> {
    let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Task on CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(ipv4: string, serviceName: string, taskId: number): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}/tasks/${taskId}`

    return this.client.request<CdnwebsiteTask>('GET', url)
  }
  */

  /**
   * List the cdn.website.Domain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains#GET)
   */
  DomainAssociatedToThisZone(serviceName: string): Promise<string[]> {
    let url = `/cdn/website/${serviceName}/zone/domains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the cdn.website.Domain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains#POST)
   */
  ConfigureADomainOnCDN(domain: string, serviceName: string): Promise<CdnwebsiteDomain> {
    let url = `/cdn/website/${serviceName}/zone/domains`

    return this.client.request<CdnwebsiteDomain>('POST', url, {domain})
  }

  /**
   * Domain on CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string): Promise<CdnwebsiteDomain> {
    let url = `/cdn/website/${serviceName}/zone/domains/${domain}`

    return this.client.request<CdnwebsiteDomain>('GET', url)
  }
  */

  /**
   * Domain on CDN [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D#DELETE)
   */
  RemoveADomainFromTheCDN(domain: string, serviceName: string): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone/domains/${domain}`

    return this.client.request<CdnwebsiteTask>('DELETE', url)
  }

  /**
   * flush operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/flush#POST)
   */
  FlushAllCache(domain: string, serviceName: string): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone/domains/${domain}/flush`

    return this.client.request<CdnwebsiteTask>('POST', url)
  }

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/statistics#GET)
   */
  GetStatisticsAboutRequestOnCDNBandwidthValueInBytes(domain: string, period: CdnwebsiteStatsPeriod, serviceName: string, type: CdnwebsiteStatsType, value: CdnwebsiteStatsValue): Promise<CdnwebsiteStatsDataType[]> {
    let url = `/cdn/website/${serviceName}/zone/domains/${domain}/statistics?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }
    if (value) { queryParams.set('value', value.toString()) }

    return this.client.request<CdnwebsiteStatsDataType[]>('GET', url+queryParams.toString())
  }

  /**
   * List the cdn.website.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/tasks#GET)
   */
  TaskAssociatedToThisDomain(domain: string, serviceName: string): Promise<number[]> {
    let url = `/cdn/website/${serviceName}/zone/domains/${domain}/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Task on CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string, taskId: number): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone/domains/${domain}/tasks/${taskId}`

    return this.client.request<CdnwebsiteTask>('GET', url)
  }
  */

  /**
   * List the cdn.website.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/tasks#GET)
   */
  TaskAssociatedToThisZone(serviceName: string): Promise<number[]> {
    let url = `/cdn/website/${serviceName}/zone/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Task on CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<CdnwebsiteTask> {
    let url = `/cdn/website/${serviceName}/zone/tasks/${taskId}`

    return this.client.request<CdnwebsiteTask>('GET', url)
  }
  */

}
