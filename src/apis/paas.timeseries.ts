// GENERATED SDK for paas/timeseries API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
}

/*
 * 
 */
export enum OrderCurrencyCode {
  AUD = 'AUD',
  CAD = 'CAD',
  CZK = 'CZK',
  EUR = 'EUR',
  GBP = 'GBP',
  LTL = 'LTL',
  MAD = 'MAD',
  N_A = 'N/A',
  PLN = 'PLN',
  SGD = 'SGD',
  TND = 'TND',
  USD = 'USD',
  XOF = 'XOF',
  POINTS = 'points'
}

/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/**
 * Consumption
 */
export interface PaastimeseriesConsumption {
  from: string
  generated: string
  items: PaastimeseriesConsumptionItem[]
  to: string
  total: OrderPrice
}

/*
 * Metric name
 */
export enum PaastimeseriesconsumptionitemMetricName {
  STORAGE = 'storage',
  INPUT = 'input',
  OUTPUT = 'output'
}

/**
 * ConsumptionItem
 */
export interface PaastimeseriesConsumptionItem {
  metricName: PaastimeseriesconsumptionitemMetricName
  price: OrderPrice
  quantity: any
  unitPrice: OrderPrice
}

/**
 * Key
 */
export interface PaastimeseriesKey {
  description: string
  id: string
  permissions: PaastimeseriesPermissionEnum[]
  secret: string
  tags: PaastimeseriesTag[]
}

/*
 * Tokens permissions
 */
export enum PaastimeseriesPermission {
  READ = 'READ',
  WRITE = 'WRITE'
}

/**
 * Project
 */
export interface PaastimeseriesProject {
  description?: string
  displayName: string
  region: PaastimeseriesRegion
  serviceName: string
}

/**
 * Quota
 */
export interface PaastimeseriesQuota {
  current: number
  max: number
  type: PaastimeseriesQuotaType
}

/*
 * Project quotas
 */
export enum PaastimeseriesQuotaType {
  DDP = 'ddp',
  MADS = 'mads'
}

/**
 * Region
 */
export interface PaastimeseriesRegion {
  displayName: string
  id: string
  url: string
}

/**
 * Tag
 */
export interface PaastimeseriesTag {
  key: string
  value: string
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

/**
 * Timeseries project
 */
export interface TimeseriesProject {
  description?: string
  displayName?: string
  offerId?: string
  regionId?: string
  serviceName: string
  status?: TimeseriesStatusType
}

/*
 * The current status for the project
 */
export enum TimeseriesStatusType {
  ACTIVE = 'ACTIVE',
  CREATION = 'CREATION',
  DELETED = 'DELETED',
  UNCONFIGURED = 'UNCONFIGURED'
}


export class PaasTimeseries {
  constructor(private client: Client) {}

  /**
   * Operations about the PAAS_TIMESERIES service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/paas/timeseries`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Timeseries project [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<TimeseriesProject> {
    let url = `/paas/timeseries/${serviceName}`

    return this.client.request<TimeseriesProject>('GET', url)
  }

  /**
   * Timeseries project [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: TimeseriesProject): Promise<void> {
    let url = `/paas/timeseries/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Change the contacts of this service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/paas/timeseries/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Consumption [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/consumption#GET)
   */
  GetConsumption(serviceName: string): Promise<PaastimeseriesConsumption[]> {
    let url = `/paas/timeseries/${serviceName}/consumption`

    return this.client.request<PaastimeseriesConsumption[]>('GET', url)
  }

  /**
   * Keys [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key#GET)
   */
  GetKeysForAProject(serviceName: string): Promise<PaastimeseriesKey[]> {
    let url = `/paas/timeseries/${serviceName}/key`

    return this.client.request<PaastimeseriesKey[]>('GET', url)
  }

  /**
   * Keys [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key#POST)
   */
  CreateAKeyForAProject(permissions: string[], serviceName: string, tags: PaastimeseriesTag[], description?: string): Promise<PaastimeseriesKey> {
    let url = `/paas/timeseries/${serviceName}/key`

    return this.client.request<PaastimeseriesKey>('POST', url, {permissions, tags, description})
  }

  /**
   * Key [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key/%7BkeyId%7D#GET)
   */
  GetAKey(keyId: string, serviceName: string): Promise<PaastimeseriesKey> {
    let url = `/paas/timeseries/${serviceName}/key/${keyId}`

    return this.client.request<PaastimeseriesKey>('GET', url)
  }

  /**
   * Key [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key/%7BkeyId%7D#PUT)
   */
  CreateAKey(keyId: string, permissions: PaastimeseriesPermissionEnum[], serviceName: string, tags: PaastimeseriesTag[], description?: string): Promise<PaastimeseriesKey> {
    let url = `/paas/timeseries/${serviceName}/key/${keyId}`

    return this.client.request<PaastimeseriesKey>('PUT', url, {permissions, tags, description})
  }

  /**
   * Key [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key/%7BkeyId%7D#DELETE)
   */
  DeleteAOpenTSDBToken(keyId: string, serviceName: string): Promise<boolean> {
    let url = `/paas/timeseries/${serviceName}/key/${keyId}`

    return this.client.request<boolean>('DELETE', url)
  }

  /**
   * Quotas [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/quota#GET)
   */
  GetQuotas(serviceName: string): Promise<PaastimeseriesQuota[]> {
    let url = `/paas/timeseries/${serviceName}/quota`

    return this.client.request<PaastimeseriesQuota[]>('GET', url)
  }

  /**
   * Details about a Service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/paas/timeseries/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/paas/timeseries/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Setup your project on our platform [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/setup#POST)
   */
  SetupAProject(displayName: string, serviceName: string, description?: string, raTokenId?: string, raTokenKey?: string, regionId?: string): Promise<PaastimeseriesProject> {
    let url = `/paas/timeseries/${serviceName}/setup`

    return this.client.request<PaastimeseriesProject>('POST', url, {displayName, description, raTokenId, raTokenKey, regionId})
  }

  /**
   * Regions [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/region#GET)
   */
  GetAvailableRegions(): Promise<PaastimeseriesRegion[]> {
    let url = `/paas/timeseries/region`

    return this.client.request<PaastimeseriesRegion[]>('GET', url)
  }

}
