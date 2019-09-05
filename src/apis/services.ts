// GENERATED SDK for services API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  key: string
  value: T
}

/*
 * Currency code
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
 * Price with its currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/**
 * Description of an Engagement
 */
export interface ServicesbillingengagementEngagement {
  currentPeriod: ServicesbillingengagementEngagementPeriod
}

/**
 * Period of Engagement
 */
export interface ServicesbillingengagementEngagementPeriod {
  endDate?: string
  startDate: string
}

/**
 * Description of an invoice
 */
export interface ServicesbillingInvoice {
  date: string
  id: string
  lines: ServicesbillingInvoiceLine[]
}

/**
 * Description of an invoice line
 */
export interface ServicesbillingInvoiceLine {
  description: string
  periodEnd?: string
  periodStart?: string
  price: OrderPrice
  quantity: number
  serviceName: string
  totalPrice: OrderPrice
  type?: ServicesbillingInvoiceLineType
}

/*
 * Type of item
 */
export enum ServicesbillingInvoiceLineType {
  ACCESSORY = 'accessory',
  CONSUMPTION = 'consumption',
  CREATION = 'creation',
  DEPOSIT = 'deposit',
  DURATION = 'duration',
  GIFT = 'gift',
  INSTALLATION = 'installation',
  MISC = 'misc',
  OTHER = 'other',
  OUTPLAN = 'outplan',
  QUANTITY = 'quantity',
  SPECIAL = 'special',
  VOUCHER = 'voucher'
}

/**
 * Contact change request
 */
export interface ServicescontactsContactChangeRequest {
  admin: string[]
  billing: string[]
  technical: string[]
}

/**
 * Contact change task
 */
export interface ServicescontactsTask {
  id: number
  route: string
}

/**
 * Billing informations of the service
 */
export interface ServicesexpandedBilling {
  expirationDate?: string
  nextBillingDate?: string
  plan?: ServicesexpandedPlan
}

/**
 * Plan of the service
 */
export interface ServicesexpandedPlan {
  code: string
  invoiceName: string
}

/**
 * Product of the service
 */
export interface ServicesexpandedProduct {
  description: string
  name: string
}

/**
 * Resource of the service
 */
export interface ServicesexpandedResource {
  displayName: string
  name: string
  product?: ServicesexpandedProduct
}

/**
 * Route of the service
 */
export interface ServicesexpandedRoute {
  path?: string
  url?: string
  vars: any
}

/**
 * Description of a service
 */
export interface ServicesexpandedService {
  billing: ServicesexpandedBilling
  resource: ServicesexpandedResource
  route?: ServicesexpandedRoute
  serviceId: number
}

/**
 * Confirm service termination request
 */
export interface ServicesterminateConfirmServiceTerminationRequest {
  acknowledgePotentialFees: boolean
  token: string
}

/**
 * Termination instructions
 */
export interface ServicesterminateTerminationAnswer {
  message: string
}

/**
 * Termination fees
 */
export interface ServicesterminateTerminationFees {
  durationLeft: any
  fees: OrderPrice
}

/**
 * Service termination request
 */
export interface ServicesterminateTerminationRequest {
  acknowledgePotentialFees: boolean
}


export class Services {
  constructor(private client: Client) {}

  /**
   * Get list of your service details [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/services#GET)
   */
  ListAvailableServices(orderBy?: string, routes?: string, sort?: string): Promise<number[]> {
    let url = `/services?`

    const queryParams = new QueryParams()
    if (orderBy) { queryParams.set('orderBy', orderBy) }
    if (routes) { queryParams.set('routes', routes) }
    if (sort) { queryParams.set('sort', sort) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Get list of your service details [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/services/%7BserviceId%7D#GET)
   */
  GetDetailsAboutAService(serviceId: number): Promise<ServicesexpandedService> {
    let url = `/services/${serviceId}`

    return this.client.request<ServicesexpandedService>('GET', url)
  }

  /**
   * Engagement for a given service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/services/%7BserviceId%7D/billing/engagement#GET)
   */
  GetEngagementDetails(serviceId: number): Promise<ServicesbillingengagementEngagement> {
    let url = `/services/${serviceId}/billing/engagement`

    return this.client.request<ServicesbillingengagementEngagement>('GET', url)
  }

}
