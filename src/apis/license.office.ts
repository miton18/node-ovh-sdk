// GENERATED SDK for license/office API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Office domain state
 */
export enum LicenseofficeDomainState {
  OK = 'ok',
  UNVERIFIED = 'unverified'
}

/*
 * Office Licence
 */
export enum LicenseofficeLicence {
  OFFICEBUSINESS = 'officeBusiness',
  OFFICEPROPLUS = 'officeProPlus'
}

/**
 * Office domain
 */
export interface LicenseofficeOfficeDomain {
  domainName: string
  status: LicenseofficeDomainState
  txtEntry: string
}

/**
 * Office subscription
 */
export interface LicenseofficeOfficeSubscription {
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
export interface LicenseofficeOfficeTask {
  finishDate?: string
  function: string
  id: number
  status: LicenseofficeTaskStatus
  todoDate: string
}

/**
 * Office tenant
 */
export interface LicenseofficeOfficeTenant {
  address: string
  city: string
  creationDate: string
  displayName: string
  firstName: string
  lastName: string
  phone: any
  serviceType: LicenseofficeServiceType
  status: LicenseofficeServiceState
  zipCode: string
}

/**
 * Office user
 */
export interface LicenseofficeOfficeUser {
  activationEmail: string
  deleteAtExpiration: boolean
  firstName: string
  isVirtual: boolean
  lastName: string
  licences: LicenseofficeLicenceEnum[]
  status: LicenseofficeUserState
  taskPendingId: number
}

/*
 * Office tenant state
 */
export enum LicenseofficeServiceState {
  CREATING = 'creating',
  INMAINTENANCE = 'inMaintenance',
  OK = 'ok',
  SUSPENDED = 'suspended'
}

/*
 * Type of service
 */
export enum LicenseofficeServiceType {
  PAYASYOUGO = 'payAsYouGo',
  PREPAID = 'prepaid'
}

/**
 * License usage statistic.
 */
export interface LicenseofficeStatistic {
  available: number
  licenseId: number
  used: number
}

/**
 * License usage statistics.
 */
export interface LicenseofficeStatistics {
  date: string
  lines: LicenseofficeStatisticsLine[]
}

/**
 * License usage statistics line.
 */
export interface LicenseofficeStatisticsLine {
  endOfDayCount: number
  licenceType: LicenseofficeLicence
  peakCount: number
}

/*
 * Exchange task status
 */
export enum LicenseofficeTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/*
 * Office user  state
 */
export enum LicenseofficeUserState {
  CREATING = 'creating',
  DELETING = 'deleting',
  OK = 'ok'
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


export class LicenseOffice {
  constructor(private client: Client) {}

  /**
   * Operations about the OFFICE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/license/office`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Office tenant [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<LicenseofficeOfficeTenant> {
    let url = `/license/office/${serviceName}`

    return this.client.request<LicenseofficeOfficeTenant>('GET', url)
  }

  /**
   * Office tenant [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: LicenseofficeOfficeTenant): Promise<void> {
    let url = `/license/office/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the license.office.OfficeDomain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/domain#GET)
   */
  DomainAssociatedToThisOfficeTenant(serviceName: string): Promise<string[]> {
    let url = `/license/office/${serviceName}/domain`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Office domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/domain/%7BdomainName%7D#GET)
   */
  /*
  GetThisObjectProperties(domainName: string, serviceName: string): Promise<LicenseofficeOfficeDomain> {
    let url = `/license/office/${serviceName}/domain/${domainName}`

    return this.client.request<LicenseofficeOfficeDomain>('GET', url)
  }
  */

  /**
   * List the license.office.OfficeTask objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/pendingTask#GET)
   */
  TasksAssociatedToThisOfficeTenant(serviceName: string): Promise<number[]> {
    let url = `/license/office/${serviceName}/pendingTask`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Office task [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/pendingTask/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<LicenseofficeOfficeTask> {
    let url = `/license/office/${serviceName}/pendingTask/${id}`

    return this.client.request<LicenseofficeOfficeTask>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/license/office/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/license/office/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * usageStatistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/usageStatistics#GET)
   */
  ShowsTheSubscriptionsUsageStatisticsForTheGivenTimePeriod(from: string, serviceName: string, to: string): Promise<LicenseofficeStatistics[]> {
    let url = `/license/office/${serviceName}/usageStatistics?`

    const queryParams = new QueryParams()
    if (from) { queryParams.set('from', from.toString()) }
    if (to) { queryParams.set('to', to.toString()) }

    return this.client.request<LicenseofficeStatistics[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.office.OfficeUser objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user#GET)
   */
  AccountsAssociatedToThisOfficeTenant(serviceName: string, activationEmail?: string, firstName?: string, lastName?: string, licences?: LicenseofficeLicenceEnum[]): Promise<string[]> {
    let url = `/license/office/${serviceName}/user?`

    const queryParams = new QueryParams()
    if (activationEmail) { queryParams.set('activationEmail', activationEmail) }
    if (firstName) { queryParams.set('firstName', firstName) }
    if (lastName) { queryParams.set('lastName', lastName) }
    if (licences) { queryParams.set('licences', licences.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.office.OfficeUser objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user#POST)
   */
  CreateNewOfficeUser(domain: string, licence: LicenseofficeLicence, login: string, serviceName: string, firstName?: string, lastName?: string): Promise<LicenseofficeOfficeTask> {
    let url = `/license/office/${serviceName}/user`

    return this.client.request<LicenseofficeOfficeTask>('POST', url, {domain, licence, login, firstName, lastName})
  }

  /**
   * Office user [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D#GET)
   */
  /*
  GetThisObjectProperties(activationEmail: string, serviceName: string): Promise<LicenseofficeOfficeUser> {
    let url = `/license/office/${serviceName}/user/${activationEmail}`

    return this.client.request<LicenseofficeOfficeUser>('GET', url)
  }
  */

  /**
   * Office user [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D#PUT)
   */
  /*
  AlterThisObjectProperties(activationEmail: string, serviceName: string, payload: LicenseofficeOfficeUser): Promise<void> {
    let url = `/license/office/${serviceName}/user/${activationEmail}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Office user [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D#DELETE)
   */
  DeleteExistingOfficeUser(activationEmail: string, serviceName: string): Promise<LicenseofficeOfficeTask> {
    let url = `/license/office/${serviceName}/user/${activationEmail}`

    return this.client.request<LicenseofficeOfficeTask>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D/changePassword#POST)
   */
  ChangeOrResetUserPassword(activationEmail: string, serviceName: string, shouldSendMail: boolean, notifyEmail?: string, password?: string): Promise<LicenseofficeOfficeTask> {
    let url = `/license/office/${serviceName}/user/${activationEmail}/changePassword`

    return this.client.request<LicenseofficeOfficeTask>('POST', url, {shouldSendMail, notifyEmail, password})
  }

}
