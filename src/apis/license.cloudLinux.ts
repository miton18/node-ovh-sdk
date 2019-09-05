// GENERATED SDK for license/cloudLinux API

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

/**
 * Your CloudLinux license
 */
export interface LicensecloudLinuxCloudLinux {
  creation: string
  domain: string
  ip: string
  licenseId: string
  status: LicenseState
  version: LicenseCloudLinuxVersion
}

/**
 * Allowed CloudLinux versions per matching serviceTypes
 */
export interface LicenseCloudLinuxOrderConfiguration {
  orderableVersions: LicenseOrderableCloudLinuxCompatibilityInfos[]
  serviceType: LicenseLicenseType
}

/*
 * All versions for CloudLinux product
 */
export enum LicenseCloudLinuxVersion {
  SINGLE = 'SINGLE',
  WITH_CPANEL = 'WITH_CPANEL',
  WITH_PLESK12 = 'WITH_PLESK12',
  CLOUDLINUX_LICENSE = 'cloudlinux-license'
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
 * All versions available for CloudLinux products
 */
export interface LicenseOrderableCloudLinuxCompatibilityInfos {
  version: LicenseCloudLinuxVersion
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


export class LicenseCloudLinux {
  constructor(private client: Client) {}

  /**
   * Operations about the LICENSE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/license/cloudLinux`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your CloudLinux license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<LicensecloudLinuxCloudLinux> {
    let url = `/license/cloudLinux/${serviceName}`

    return this.client.request<LicensecloudLinuxCloudLinux>('GET', url)
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/license/cloudLinux/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/license/cloudLinux/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/license/cloudLinux/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the license.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/tasks#GET)
   */
  TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]> {
    let url = `/license/cloudLinux/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * licenses Todos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
    let url = `/license/cloudLinux/${serviceName}/tasks/${taskId}`

    return this.client.request<LicenseTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/license/cloudLinux/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Get the orderable CloudLinux versions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/cloudLinux/orderableVersions#GET)
   */
  GetTheOrderableCloudLinuxVersions(ip: string): Promise<LicenseCloudLinuxOrderConfiguration[]> {
    let url = `/license/cloudLinux/orderableVersions?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }

    return this.client.request<LicenseCloudLinuxOrderConfiguration[]>('GET', url+queryParams.toString())
  }

}
