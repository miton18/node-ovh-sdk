// GENERATED SDK for license/directadmin API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * A short description of what does the Task on your license
 */
export enum LicenseActionType {
  ADDWINDOWFROMEXISTINGSERIAL = 'addWindowFromExistingSerial',
  CHANGEIP = 'changeIp',
  CHANGEOS = 'changeOs',
  INSTALLLICENSE = 'installLicense',
  OPTIONUPGRADE = 'optionUpgrade',
  RELEASEOPTION = 'releaseOption',
  VERSIONUPGRADE = 'versionUpgrade'
}

/*
 * Messages from change IP
 */
export enum LicenseChangeIpMessage {
  OK = 'OK',
  DESTINATIONNOTALLOWED = 'destinationNotAllowed',
  LICENSEALREADYEXISTS = 'licenseAlreadyExists',
  NOTALLOWEDTOHANDLETHIS = 'notAllowedToHandleThis',
  NOTSAMETYPE = 'notSameType',
  SAMEIP = 'sameIp',
  VERSIONNOTALLOWED = 'versionNotAllowed'
}

/**
 * License change ip status return
 */
export interface LicenseChangeIpStatus {
  message: LicenseChangeIpMessage
  success: boolean
}

/**
 * Your DirectAdmin license
 */
export interface LicensedirectadminDirectAdmin {
  clientId: number
  creation: string
  deleteAtExpiration: boolean
  domain: string
  ip: string
  licenseId: string
  os: LicenseDirectAdminOs
  status: LicenseState
  version: LicenseDirectAdminVersion
}

/**
 * The serviceTypes allowed to Order a DirectAdmin version
 */
export interface LicenseDirectAdminOrderConfiguration {
  orderableVersions: LicenseOrderableDirectAdminCompatibilityInfos[]
  serviceType: LicenseLicenseType
}

/*
 * All operating systems available for DirectAdmin products
 */
export enum LicenseDirectAdminOs {
  CENTOS_5_0_32 = 'CentOs_5.0_32',
  CENTOS_5_0_64 = 'CentOs_5.0_64',
  CENTOS_6_32 = 'CentOs_6_32',
  CENTOS_6_64 = 'CentOs_6_64',
  CENTOS_7_64 = 'CentOs_7_64',
  DEBIAN_5_0_32 = 'Debian_5.0_32',
  DEBIAN_5_0_64 = 'Debian_5.0_64',
  DEBIAN_6_0_32 = 'Debian_6.0_32',
  DEBIAN_6_0_64 = 'Debian_6.0_64',
  DEBIAN_7_0_32 = 'Debian_7.0_32',
  DEBIAN_7_0_64 = 'Debian_7.0_64',
  DEBIAN_8_0_64 = 'Debian_8.0_64',
  FREEBSD_7_X_32 = 'FreeBSD_7.x_32',
  FREEBSD_7_X_64 = 'FreeBSD_7.x_64',
  FREEBSD_8_X_64 = 'FreeBSD_8.x_64',
  FREEBSD_9_X_64 = 'FreeBSD_9.x_64'
}

/*
 * All versions for DirectAdmin products
 */
export enum LicenseDirectAdminVersion {
  DIRECTADMIN_1 = 'DIRECTADMIN_1',
  DIRECTADMIN_LICENSE = 'directadmin-license'
}

/*
 * Possible values for license type
 */
export enum LicenseLicenseType {
  DEDICATED = 'dedicated',
  DEDICATEDCLOUD = 'dedicatedCloud',
  DEDICATEDFAILOVER = 'dedicatedFailover',
  FAILOVER = 'failover',
  VM = 'vm',
  VPS = 'vps',
  VPS_CEPH = 'vps_ceph',
  VPS_CLASSIC = 'vps_classic',
  VPS_CLOUD = 'vps_cloud',
  VPS_CLOUD_2016 = 'vps_cloud_2016',
  VPS_SSD = 'vps_ssd'
}

/**
 * All versions available for DirectAdmin products
 */
export interface LicenseOrderableDirectAdminCompatibilityInfos {
  version: LicenseOrderableDirectAdminVersion
}

/*
 * All versions available for DirectAdmin products
 */
export enum LicenseOrderableDirectAdminVersion {
  DIRECTADMIN_1 = 'DIRECTADMIN_1',
  DIRECTADMIN_LICENSE = 'directadmin-license'
}

/*
 * All states a license can be in
 */
export enum LicenseState {
  OK = 'ok',
  RELEASED = 'released',
  TERMINATED = 'terminated',
  TODELIVER = 'toDeliver'
}

/**
 * licenses Todos
 */
export interface LicenseTask {
  action: LicenseActionType
  doneDate?: string
  lastUpdate: string
  name: string
  status: LicenseTaskState
  taskId: number
  todoDate: string
}

/*
 * All states a license Task can be in
 */
export enum LicenseTaskState {
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

/*
 * All future uses you can provide for a service termination
 */
export enum ServiceTerminationFutureUse {
  NOT_REPLACING_SERVICE = 'NOT_REPLACING_SERVICE',
  OTHER = 'OTHER',
  SUBSCRIBE_AN_OTHER_SERVICE = 'SUBSCRIBE_AN_OTHER_SERVICE',
  SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR',
  SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR'
}

/*
 * All reasons you can provide for a service termination
 */
export enum ServiceTerminationReason {
  FEATURES_DONT_SUIT_ME = 'FEATURES_DONT_SUIT_ME',
  LACK_OF_PERFORMANCES = 'LACK_OF_PERFORMANCES',
  MIGRATED_TO_ANOTHER_OVH_PRODUCT = 'MIGRATED_TO_ANOTHER_OVH_PRODUCT',
  MIGRATED_TO_COMPETITOR = 'MIGRATED_TO_COMPETITOR',
  NOT_ENOUGH_RECOGNITION = 'NOT_ENOUGH_RECOGNITION',
  NOT_NEEDED_ANYMORE = 'NOT_NEEDED_ANYMORE',
  NOT_RELIABLE = 'NOT_RELIABLE',
  NO_ANSWER = 'NO_ANSWER',
  OTHER = 'OTHER',
  PRODUCT_DIMENSION_DONT_SUIT_ME = 'PRODUCT_DIMENSION_DONT_SUIT_ME',
  PRODUCT_TOOLS_DONT_SUIT_ME = 'PRODUCT_TOOLS_DONT_SUIT_ME',
  TOO_EXPENSIVE = 'TOO_EXPENSIVE',
  TOO_HARD_TO_USE = 'TOO_HARD_TO_USE',
  UNSATIFIED_BY_CUSTOMER_SUPPORT = 'UNSATIFIED_BY_CUSTOMER_SUPPORT'
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


export class LicenseDirectadmin {
  constructor(private client: Client) {}

  /**
   * Operations about the LICENSE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/license/directadmin`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your DirectAdmin license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<LicensedirectadminDirectAdmin> {
    let url = `/license/directadmin/${serviceName}`

    return this.client.request<LicensedirectadminDirectAdmin>('GET', url)
  }

  /**
   * Your DirectAdmin license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: LicensedirectadminDirectAdmin): Promise<void> {
    let url = `/license/directadmin/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * allowedDestinationIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/allowedDestinationIp#GET)
   */
  ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]> {
    let url = `/license/directadmin/${serviceName}/allowedDestinationIp`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * canLicenseBeMovedTo operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/canLicenseBeMovedTo#GET)
   */
  WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus> {
    let url = `/license/directadmin/${serviceName}/canLicenseBeMovedTo?`

    const queryParams = new QueryParams()
    if (destinationIp) { queryParams.set('destinationIp', destinationIp.toString()) }

    return this.client.request<LicenseChangeIpStatus>('GET', url+queryParams.toString())
  }

  /**
   * changeIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/changeIp#POST)
   */
  MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask> {
    let url = `/license/directadmin/${serviceName}/changeIp`

    return this.client.request<LicenseTask>('POST', url, {destinationIp})
  }

  /**
   * changeOs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/changeOs#POST)
   */
  ChangeTheOperatingSystemForALicense(os: LicenseDirectAdminOs, serviceName: string): Promise<LicenseTask> {
    let url = `/license/directadmin/${serviceName}/changeOs`

    return this.client.request<LicenseTask>('POST', url, {os})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/license/directadmin/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/license/directadmin/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/license/directadmin/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the license.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/tasks#GET)
   */
  TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]> {
    let url = `/license/directadmin/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * licenses Todos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
    let url = `/license/directadmin/${serviceName}/tasks/${taskId}`

    return this.client.request<LicenseTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/license/directadmin/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Get the orderable DirectAdmin versions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/directadmin/orderableVersions#GET)
   */
  GetTheOrderableDirectAdminVersions(ip: string): Promise<LicenseDirectAdminOrderConfiguration[]> {
    let url = `/license/directadmin/orderableVersions?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }

    return this.client.request<LicenseDirectAdminOrderConfiguration[]>('GET', url+queryParams.toString())
  }

}
