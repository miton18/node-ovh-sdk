// GENERATED SDK for license/virtuozzo API

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
 * Your License options
 */
export interface LicenseOption {
  amount?: string
  canBeDeleted: boolean
  expirationDate: string
  label: LicenseOptionLabel
  version?: string
}

/*
 * The name of an option currently enabled on your license
 */
export enum LicenseOptionLabel {
  ANTISPAM_SPAMASSASSIN = 'ANTISPAM_SPAMASSASSIN',
  ANTIVIRUS_DRWEB = 'ANTIVIRUS_DRWEB',
  ANTIVIRUS_KASPERSKY = 'ANTIVIRUS_KASPERSKY',
  DOMAINS = 'DOMAINS',
  LANGUAGE_PACK = 'LANGUAGE_PACK',
  POWERPACK = 'POWERPACK',
  SQL_SERVER = 'SQL_SERVER',
  VIRTUOZZO_CONTAINERS = 'VIRTUOZZO_CONTAINERS'
}

/**
 * All versions available for Virtuozzo products
 */
export interface LicenseOrderableVirtuozzoCompatibilityInfos {
  compliantContainers: LicenseOrderableVirtuozzoContainerNumberEnum[]
  potentialProblems: LicensePotentialProblemVirtuozzoEnum[]
  version: LicenseOrderableVirtuozzoVersion
}

/*
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseOrderableVirtuozzoContainerNumber = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER'

/*
 * All versions available for Virtuozzo products
 */
export enum LicenseOrderableVirtuozzoVersion {
  VIRTUOZZO_CONTAINERS_4_FOR_LINUX = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX',
  VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS = 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS',
  VIRTUOZZO_4 = 'virtuozzo-4',
  VIRTUOZZO_4_FOR_WINDOWS = 'virtuozzo-4-for-windows'
}

/*
 * Tests that have failed for Virtuozzo products
 */
export enum LicensePotentialProblemVirtuozzo {
  ISLINUXOS = 'isLinuxOs',
  ISOSVIRTUOZZO4LIKE = 'isOsVirtuozzo4Like',
  ISWINDOWSOS = 'isWindowsOs'
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
 * Your Virtuozzo license
 */
export interface LicensevirtuozzoVirtuozzo {
  containerNumber: LicenseVirtuozzoContainerNumber
  creation: string
  deleteAtExpiration: boolean
  domain: string
  informationKey?: string
  ip: string
  licenseId: string
  productKey?: string
  status: LicenseState
  version: LicenseVirtuozzoVersion
}

/*
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseVirtuozzoContainerNumber = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER'

/**
 * The serviceTypes allowed to Order a Virtuozzo version
 */
export interface LicenseVirtuozzoOrderConfiguration {
  orderableVersions: LicenseOrderableVirtuozzoCompatibilityInfos[]
  serviceType: LicenseLicenseType
}

/*
 * All versions available for Virtuozzo products
 */
export enum LicenseVirtuozzoVersion {
  VIRTUOZZO_CONTAINERS_4_FOR_LINUX = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX',
  VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS = 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS'
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


export class LicenseVirtuozzo {
  constructor(private client: Client) {}

  /**
   * Operations about the LICENSE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/license/virtuozzo`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your Virtuozzo license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<LicensevirtuozzoVirtuozzo> {
    let url = `/license/virtuozzo/${serviceName}`

    return this.client.request<LicensevirtuozzoVirtuozzo>('GET', url)
  }

  /**
   * Your Virtuozzo license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: LicensevirtuozzoVirtuozzo): Promise<void> {
    let url = `/license/virtuozzo/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * allowedDestinationIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/allowedDestinationIp#GET)
   */
  ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]> {
    let url = `/license/virtuozzo/${serviceName}/allowedDestinationIp`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * canLicenseBeMovedTo operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/canLicenseBeMovedTo#GET)
   */
  WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus> {
    let url = `/license/virtuozzo/${serviceName}/canLicenseBeMovedTo?`

    const queryParams = new QueryParams()
    if (destinationIp) { queryParams.set('destinationIp', destinationIp.toString()) }

    return this.client.request<LicenseChangeIpStatus>('GET', url+queryParams.toString())
  }

  /**
   * changeIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/changeIp#POST)
   */
  MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask> {
    let url = `/license/virtuozzo/${serviceName}/changeIp`

    return this.client.request<LicenseTask>('POST', url, {destinationIp})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/license/virtuozzo/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the license.Option objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/option#GET)
   */
  OptionsLinkedToThisLicense(serviceName: string, label?: LicenseOptionLabel): Promise<LicenseOptionLabel[]> {
    let url = `/license/virtuozzo/${serviceName}/option?`

    const queryParams = new QueryParams()
    if (label) { queryParams.set('label', label.toString()) }

    return this.client.request<LicenseOptionLabel[]>('GET', url+queryParams.toString())
  }

  /**
   * Your License options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/option/%7Blabel%7D#GET)
   */
  /*
  GetThisObjectProperties(label: LicenseOptionLabel, serviceName: string): Promise<LicenseOption> {
    let url = `/license/virtuozzo/${serviceName}/option/${label}`

    return this.client.request<LicenseOption>('GET', url)
  }
  */

  /**
   * Your License options [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/option/%7Blabel%7D#DELETE)
   */
  ReleaseThisOption(label: LicenseOptionLabel, serviceName: string): Promise<LicenseTask> {
    let url = `/license/virtuozzo/${serviceName}/option/${label}`

    return this.client.request<LicenseTask>('DELETE', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/license/virtuozzo/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/license/virtuozzo/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the license.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/tasks#GET)
   */
  TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]> {
    let url = `/license/virtuozzo/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * licenses Todos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
    let url = `/license/virtuozzo/${serviceName}/tasks/${taskId}`

    return this.client.request<LicenseTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/license/virtuozzo/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Get the orderable Virtuozzo versions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/orderableVersions#GET)
   */
  GetTheOrderableVirtuozzoVersions(ip: string): Promise<LicenseVirtuozzoOrderConfiguration[]> {
    let url = `/license/virtuozzo/orderableVersions?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }

    return this.client.request<LicenseVirtuozzoOrderConfiguration[]>('GET', url+queryParams.toString())
  }

}
