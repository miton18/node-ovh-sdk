// GENERATED SDK for saas/csp2 API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Period of time used to determine license statistics
 */
export enum MsServicesLicensePeriod {
  LASTMONTH = 'lastMonth',
  LASTQUARTER = 'lastQuarter',
  LASTWEEK = 'lastWeek',
  LASTYEAR = 'lastYear'
}

/**
 * Billing statistics for the current period
 */
export interface Saascsp2BillingStatistics {
  endDate: string
  lines: Saascsp2BillingStatisticsLine[]
  startDate: string
}

/**
 * Billing statistics line.
 */
export interface Saascsp2BillingStatisticsLine {
  licenceId: number
  licenceName: string
  peakCount: number
}

/*
 * Office license's type
 */
export enum Saascsp2LicenseType {
  ADDON = 'ADDON',
  NON_SPECIFIC = 'NON-SPECIFIC'
}

/**
 * Office licence
 */
export interface Saascsp2OfficeLicence {
  id: number
  licenceType: Saascsp2LicenseType
  limit?: number
  name: string
  newSeatsAllowed: boolean
  newSubscriptionsAllowed: boolean
}

/**
 * Office subscription
 */
export interface Saascsp2OfficeSubscription {
  creationDate: string
  id: number
  lastUpdate?: string
  licenseId: number
  quantity: number
  status: string
  taskPendingId: number
}

/**
 * Office task
 */
export interface Saascsp2OfficeTask {
  finishDate?: string
  function: string
  id: number
  status: Saascsp2TaskStatus
  todoDate: string
}

/**
 * Office tenant
 */
export interface Saascsp2OfficeTenant {
  address: string
  city: string
  creationDate: string
  displayName: string
  email: string
  firstName: string
  lastName: string
  phone: any
  serviceName: string
  status: Saascsp2ServiceState
  zipCode: string
}

/*
 * Office tenant state
 */
export enum Saascsp2ServiceState {
  CREATING = 'creating',
  INMAINTENANCE = 'inMaintenance',
  OK = 'ok',
  SUSPENDED = 'suspended'
}

/**
 * License usage statistics.
 */
export interface Saascsp2Statistics {
  date: string
  lines: Saascsp2StatisticsLine[]
}

/**
 * License usage statistics line.
 */
export interface Saascsp2StatisticsLine {
  endOfDayCount: number
  licenceId: number
  licenceName: string
  peakCount: number
}

/*
 * Supported services of Office365
 */
export enum Saascsp2SupportedService {
  EMAIL = 'Email',
  INTUNE = 'Intune',
  OFFICECOMMUNICATIONSONLINE = 'OfficeCommunicationsOnline'
}

/*
 * Office CSP2 task status
 */
export enum Saascsp2TaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
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


export class SaasCsp2 {
  constructor(private client: Client) {}

  /**
   * Operations about the CSP2 service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/saas/csp2`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Office tenant [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<Saascsp2OfficeTenant> {
    let url = `/saas/csp2/${serviceName}`

    return this.client.request<Saascsp2OfficeTenant>('GET', url)
  }

  /**
   * Office tenant [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: Saascsp2OfficeTenant): Promise<void> {
    let url = `/saas/csp2/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * billingPeriodPeaks operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/billingPeriodPeaks#GET)
   */
  GetTheCurrenBillingPeriodUsagePeakForEachSubscription(serviceName: string): Promise<Saascsp2BillingStatistics> {
    let url = `/saas/csp2/${serviceName}/billingPeriodPeaks`

    return this.client.request<Saascsp2BillingStatistics>('GET', url)
  }

  /**
   * changeAdministratorPassword operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/changeAdministratorPassword#POST)
   */
  ChangesTheTenantAdministratorPassword(newPassword: string, serviceName: string): Promise<Saascsp2OfficeTask> {
    let url = `/saas/csp2/${serviceName}/changeAdministratorPassword`

    return this.client.request<Saascsp2OfficeTask>('POST', url, {newPassword})
  }

  /**
   * configureDomain operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/configureDomain#POST)
   */
  AutomaticallySetsUpAnOVHhostedDomainOfYoursForYourOffice365ServicesNoteThisRequiresTheDomainToNotHaveAnyInterferingMXSRVTXTRecords(domain: string, serviceName: string, supportedServices: Saascsp2SupportedServiceEnum[]): Promise<Saascsp2OfficeTask> {
    let url = `/saas/csp2/${serviceName}/configureDomain`

    return this.client.request<Saascsp2OfficeTask>('POST', url, {domain, supportedServices})
  }

  /**
   * List the saas.csp2.OfficeLicence objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/orderableLicenses#GET)
   */
  LicensesAvailableForOrder(serviceName: string): Promise<number[]> {
    let url = `/saas/csp2/${serviceName}/orderableLicenses`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Office licence [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/orderableLicenses/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Saascsp2OfficeLicence> {
    let url = `/saas/csp2/${serviceName}/orderableLicenses/${id}`

    return this.client.request<Saascsp2OfficeLicence>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/saas/csp2/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/saas/csp2/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the saas.csp2.OfficeSubscription objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription#GET)
   */
  SubscriptionsAssociatedToThisOfficeTenant(serviceName: string): Promise<number[]> {
    let url = `/saas/csp2/${serviceName}/subscription`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the saas.csp2.OfficeSubscription objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription#POST)
   */
  AddASubscriptionToThisTenant(licenseId: number, quantity: number, serviceName: string): Promise<Saascsp2OfficeTask> {
    let url = `/saas/csp2/${serviceName}/subscription`

    return this.client.request<Saascsp2OfficeTask>('POST', url, {licenseId, quantity})
  }

  /**
   * Office subscription [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Saascsp2OfficeSubscription> {
    let url = `/saas/csp2/${serviceName}/subscription/${id}`

    return this.client.request<Saascsp2OfficeSubscription>('GET', url)
  }
  */

  /**
   * Office subscription [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D#DELETE)
   */
  DeleteASubscriptionFromThisTenant(id: number, serviceName: string): Promise<Saascsp2OfficeTask> {
    let url = `/saas/csp2/${serviceName}/subscription/${id}`

    return this.client.request<Saascsp2OfficeTask>('DELETE', url)
  }

  /**
   * addonsSubscriptionIds operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/addonsSubscriptionIds#GET)
   */
  AddonSubscriptionsAssociatedToThisOfficeSubscription(id: number, serviceName: string): Promise<number[]> {
    let url = `/saas/csp2/${serviceName}/subscription/${id}/addonsSubscriptionIds`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * availableAddonLicenses operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/availableAddonLicenses#GET)
   */
  GivesAListOfLicensesIdsThatCanBeOrderedAsAnAddonForThisSubscription(id: number, serviceName: string): Promise<number[]> {
    let url = `/saas/csp2/${serviceName}/subscription/${id}/availableAddonLicenses`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * changeQuantity operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/changeQuantity#POST)
   */
  ChangeTheQuantityOfSeatsInTheSubscription(id: number, quantity: number, serviceName: string): Promise<Saascsp2OfficeTask> {
    let url = `/saas/csp2/${serviceName}/subscription/${id}/changeQuantity`

    return this.client.request<Saascsp2OfficeTask>('POST', url, {quantity})
  }

  /**
   * orderAddon operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/orderAddon#POST)
   */
  CreatesANewSubscriptionAsAnAddonForThisSubscription(id: number, licenseId: number, quantity: number, serviceName: string): Promise<Saascsp2OfficeTask> {
    let url = `/saas/csp2/${serviceName}/subscription/${id}/orderAddon`

    return this.client.request<Saascsp2OfficeTask>('POST', url, {licenseId, quantity})
  }

  /**
   * List the saas.csp2.OfficeTask objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/task#GET)
   */
  PendingTasksOfThisTenant(serviceName: string): Promise<number[]> {
    let url = `/saas/csp2/${serviceName}/task`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Office task [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Saascsp2OfficeTask> {
    let url = `/saas/csp2/${serviceName}/task/${id}`

    return this.client.request<Saascsp2OfficeTask>('GET', url)
  }
  */

  /**
   * usageStatistics operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/usageStatistics#GET)
   */
  GetTheUsageStatisticsOverTheChosePeriod(serviceName: string, timePeriod: MsServicesLicensePeriod): Promise<Saascsp2Statistics[]> {
    let url = `/saas/csp2/${serviceName}/usageStatistics?`

    const queryParams = new QueryParams()
    if (timePeriod) { queryParams.set('timePeriod', timePeriod.toString()) }

    return this.client.request<Saascsp2Statistics[]>('GET', url+queryParams.toString())
  }

}
