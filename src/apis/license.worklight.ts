// GENERATED SDK for license/worklight API

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
 * All versions available for WorkLight products
 */
export interface LicenseOrderableWorkLightCompatibilityInfos {
  version: LicenseWorkLightVersion
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

/**
 * Your WorkLight license
 */
export interface LicenseworklightWorkLight {
  creation: string
  deleteAtExpiration: boolean
  domain: string
  ip: string
  licenseId: string
  status: LicenseState
  version: LicenseWorkLightVersion
}

/**
 * Allowed WorkLight versions per matching serviceTypes
 */
export interface LicenseWorkLightOrderConfiguration {
  orderableVersions: LicenseOrderableWorkLightCompatibilityInfos[]
  serviceType: LicenseLicenseType
}

/*
 * All versions for WorkLight product
 */
export enum LicenseWorkLightVersion {
  VERSION_6_1U_1CPU = 'VERSION-6.1U.1CPU',
  VERSION_6_1U_2CPU = 'VERSION-6.1U.2CPU',
  VERSION_6_2U_1CPU = 'VERSION-6.2U.1CPU',
  VERSION_6_2U_2CPU = 'VERSION-6.2U.2CPU',
  VERSION_6_EVALUATION = 'VERSION-6.EVALUATION',
  WORKLIGHT_LICENSE_VERSION_6_1CPU_1U = 'worklight-license-version-6-1cpu-1u',
  WORKLIGHT_LICENSE_VERSION_6_1CPU_2U = 'worklight-license-version-6-1cpu-2u',
  WORKLIGHT_LICENSE_VERSION_6_2CPU_1U = 'worklight-license-version-6-2cpu-1u',
  WORKLIGHT_LICENSE_VERSION_6_2CPU_2U = 'worklight-license-version-6-2cpu-2u'
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


export class LicenseWorklight {
  constructor(private client: Client) {}

  /**
   * Operations about the LICENSE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/license/worklight`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your WorkLight license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<LicenseworklightWorkLight> {
    let url = `/license/worklight/${serviceName}`

    return this.client.request<LicenseworklightWorkLight>('GET', url)
  }

  /**
   * Your WorkLight license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: LicenseworklightWorkLight): Promise<void> {
    let url = `/license/worklight/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * allowedDestinationIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/allowedDestinationIp#GET)
   */
  ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]> {
    let url = `/license/worklight/${serviceName}/allowedDestinationIp`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * canLicenseBeMovedTo operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/canLicenseBeMovedTo#GET)
   */
  WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus> {
    let url = `/license/worklight/${serviceName}/canLicenseBeMovedTo?`

    const queryParams = new QueryParams()
    if (destinationIp) { queryParams.set('destinationIp', destinationIp.toString()) }

    return this.client.request<LicenseChangeIpStatus>('GET', url+queryParams.toString())
  }

  /**
   * changeIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/changeIp#POST)
   */
  MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask> {
    let url = `/license/worklight/${serviceName}/changeIp`

    return this.client.request<LicenseTask>('POST', url, {destinationIp})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/license/worklight/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/license/worklight/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/license/worklight/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the license.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/tasks#GET)
   */
  TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]> {
    let url = `/license/worklight/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * licenses Todos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
    let url = `/license/worklight/${serviceName}/tasks/${taskId}`

    return this.client.request<LicenseTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/license/worklight/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Get the orderable WorkLight versions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/worklight/orderableVersions#GET)
   */
  GetTheOrderableWorkLightVersions(ip: string): Promise<LicenseWorkLightOrderConfiguration[]> {
    let url = `/license/worklight/orderableVersions?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }

    return this.client.request<LicenseWorkLightOrderConfiguration[]>('GET', url+queryParams.toString())
  }

}
