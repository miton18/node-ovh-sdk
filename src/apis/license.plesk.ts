// GENERATED SDK for license/plesk API

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
 * All quantities of domain available for a license
 */
export type LicenseDomainNumber = '0' | '1' | '10' | '100' | '30' | '300' | 'unlimited'

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

/*
 * All antivirus available for Plesk products
 */
export enum LicenseOrderableAntivirus {
  DR_WEB = 'DR_WEB',
  KASPERSKY_UNLIMITED_MAILBOXES = 'KASPERSKY_UNLIMITED_MAILBOXES',
  KASPERSKY = 'kaspersky'
}

/**
 * All versions available for Plesk products
 */
export interface LicenseOrderablePleskCompatibilityInfos {
  canHavePowerPack: boolean
  canHaveResellerManagement: boolean
  canHaveWordpressToolkit: boolean
  compliantAntivirus: LicenseOrderableAntivirusEnum[]
  compliantApplicationSets: LicensePleskApplicationSetEnum[]
  compliantDomains: LicenseOrderablePleskDomainNumberEnum[]
  compliantLanguagePack: LicenseOrderablePleskLanguagePackEnum[]
  potentialProblems: LicensePotentialProblemPleskEnum[]
  version: LicensePleskVersion
}

/*
 * All domain available for Plesk products
 */
export type LicenseOrderablePleskDomainNumber = '10' | '100' | '30' | '300' | 'hostingsuite' | 'unlimited'

/*
 * All language pack numbers available for Plesk products
 */
export type LicenseOrderablePleskLanguagePack = '1' | '1-extra-language-for-plesk12' | '2' | '2-extra-languages-for-plesk12' | '3' | '3-extra-languages-for-plesk12' | '4' | '4-extra-languages-for-plesk12' | '5' | '5-extra-languages-for-plesk12' | 'unlimited' | 'unlimited-extra-languages-for-plesk12'

/**
 * Your Plesk license
 */
export interface LicensepleskPlesk {
  creation: string
  deleteAtExpiration: boolean
  domain: string
  domainNumber?: LicenseDomainNumber
  informationKey?: string
  ip: string
  key: string
  licenseId: string
  productKey?: string
  status: LicenseState
  version: LicensePleskVersion
}

/*
 * Application set available for Plesk products
 */
export enum LicensePleskApplicationSet {
  APPLICATIONPACK = 'applicationpack',
  DEVELOPERPACK = 'developerpack',
  POWER_PACK_FOR_PLESK12 = 'power-pack-for-plesk12',
  POWERPACK = 'powerpack'
}

/**
 * The serviceTypes allowed to Order a plesk version and associated Versions
 */
export interface LicensePleskOrderConfiguration {
  orderableVersions: LicenseOrderablePleskCompatibilityInfos[]
  serviceType: LicenseLicenseType
}

/*
 * All versions available for Plesk products
 */
export enum LicensePleskVersion {
  PLESK_10_AND_LATER = 'PLESK_10_AND_LATER',
  PLESK_10_AND_LATER_FOR_KVM = 'PLESK_10_AND_LATER_FOR_KVM',
  PLESK_10_AND_LATER_FOR_VMWARE = 'PLESK_10_AND_LATER_FOR_VMWARE',
  PLESK_10_AND_LATER_FOR_VZ = 'PLESK_10_AND_LATER_FOR_VZ',
  PLESK_10_AND_LATER_FOR_WIN = 'PLESK_10_AND_LATER_FOR_WIN',
  PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE = 'PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE',
  PLESK_10_AND_LATER_FOR_WIN_FOR_VZ = 'PLESK_10_AND_LATER_FOR_WIN_FOR_VZ',
  PLESK_10_AND_LATER_FOR_WIN_FOR_XEN = 'PLESK_10_AND_LATER_FOR_WIN_FOR_XEN',
  PLESK_10_AND_LATER_FOR_XEN = 'PLESK_10_AND_LATER_FOR_XEN',
  PLESK_12_VPS_WEB_ADMIN = 'PLESK_12_VPS_WEB_ADMIN',
  PLESK_12_VPS_WEB_APP = 'PLESK_12_VPS_WEB_APP',
  PLESK_12_VPS_WEB_HOST = 'PLESK_12_VPS_WEB_HOST',
  PLESK_12_VPS_WEB_HOST_CLNX = 'PLESK_12_VPS_WEB_HOST_CLNX',
  PLESK_12_VPS_WEB_PRO = 'PLESK_12_VPS_WEB_PRO',
  PLESK_12_VPS_WEB_PRO_CLNX = 'PLESK_12_VPS_WEB_PRO_CLNX',
  PLESK_12_WEB_ADMIN = 'PLESK_12_WEB_ADMIN',
  PLESK_12_WEB_APP = 'PLESK_12_WEB_APP',
  PLESK_12_WEB_HOST = 'PLESK_12_WEB_HOST',
  PLESK_12_WEB_HOST_CLNX = 'PLESK_12_WEB_HOST_CLNX',
  PLESK_12_WEB_PRO = 'PLESK_12_WEB_PRO',
  PLESK_12_WEB_PRO_CLNX = 'PLESK_12_WEB_PRO_CLNX',
  PLESK_75_RELOADED = 'PLESK_75_RELOADED',
  PLESK_80 = 'PLESK_80',
  PLESK_80_FOR_VZ = 'PLESK_80_FOR_VZ',
  PLESK_81_FOR_WIN = 'PLESK_81_FOR_WIN',
  PLESK_9 = 'PLESK_9',
  PLESK_95 = 'PLESK_95',
  PLESK_95_FOR_VZ = 'PLESK_95_FOR_VZ',
  PLESK_95_FOR_WIN = 'PLESK_95_FOR_WIN',
  PLESK_9_FOR_VZ = 'PLESK_9_FOR_VZ',
  PLESK_9_FOR_WIN = 'PLESK_9_FOR_WIN',
  PLESK_ONYX_VPS_WEB_ADMIN = 'PLESK_ONYX_VPS_WEB_ADMIN',
  PLESK_ONYX_VPS_WEB_APP = 'PLESK_ONYX_VPS_WEB_APP',
  PLESK_ONYX_VPS_WEB_HOST = 'PLESK_ONYX_VPS_WEB_HOST',
  PLESK_ONYX_VPS_WEB_HOST_CLNX = 'PLESK_ONYX_VPS_WEB_HOST_CLNX',
  PLESK_ONYX_VPS_WEB_PRO = 'PLESK_ONYX_VPS_WEB_PRO',
  PLESK_ONYX_VPS_WEB_PRO_CLNX = 'PLESK_ONYX_VPS_WEB_PRO_CLNX',
  PLESK_ONYX_WEB_ADMIN = 'PLESK_ONYX_WEB_ADMIN',
  PLESK_ONYX_WEB_APP = 'PLESK_ONYX_WEB_APP',
  PLESK_ONYX_WEB_HOST = 'PLESK_ONYX_WEB_HOST',
  PLESK_ONYX_WEB_HOST_CLNX = 'PLESK_ONYX_WEB_HOST_CLNX',
  PLESK_ONYX_WEB_PRO = 'PLESK_ONYX_WEB_PRO',
  PLESK_ONYX_WEB_PRO_CLNX = 'PLESK_ONYX_WEB_PRO_CLNX',
  PLESK_12_WEBADMIN_FOR_VPS = 'plesk-12-webadmin-for-vps',
  PLESK_12_WEBHOST = 'plesk-12-webhost',
  PLESK_12_WEBHOST_FOR_VPS = 'plesk-12-webhost-for-vps',
  PLESK_12_WEBPRO = 'plesk-12-webpro',
  PLESK_12_WEBPRO_FOR_VPS = 'plesk-12-webpro-for-vps'
}

/*
 * Tests that have failed for Plesk products
 */
export enum LicensePotentialProblemPlesk {
  ISHOSTOSHYPERVLIKE = 'isHostOsHyperVLike',
  ISHOSTOSVMWARELIKE = 'isHostOsVMwareLike',
  ISHOSTOSVIRTUOZZO4LIKE = 'isHostOsVirtuozzo4Like',
  ISHOSTOSXENLIKE = 'isHostOsXenLike',
  ISLINUXOS = 'isLinuxOs',
  ISOSCLOUDLINUX = 'isOsCloudLinux',
  ISOSPLESK10ANDLATER = 'isOsPlesk10andLater',
  ISOSPLESK12 = 'isOsPlesk12',
  ISOSPLESKONYX = 'isOsPleskOnyx',
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


export class LicensePlesk {
  constructor(private client: Client) {}

  /**
   * Operations about the LICENSE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/license/plesk`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your Plesk license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<LicensepleskPlesk> {
    let url = `/license/plesk/${serviceName}`

    return this.client.request<LicensepleskPlesk>('GET', url)
  }

  /**
   * Your Plesk license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: LicensepleskPlesk): Promise<void> {
    let url = `/license/plesk/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * allowedDestinationIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/allowedDestinationIp#GET)
   */
  ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName: string): Promise<string[]> {
    let url = `/license/plesk/${serviceName}/allowedDestinationIp`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * canLicenseBeMovedTo operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/canLicenseBeMovedTo#GET)
   */
  WillTellIfTheIpCanAcceptTheLicense(destinationIp: string, serviceName: string): Promise<LicenseChangeIpStatus> {
    let url = `/license/plesk/${serviceName}/canLicenseBeMovedTo?`

    const queryParams = new QueryParams()
    if (destinationIp) { queryParams.set('destinationIp', destinationIp.toString()) }

    return this.client.request<LicenseChangeIpStatus>('GET', url+queryParams.toString())
  }

  /**
   * changeIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/changeIp#POST)
   */
  MoveThisLicenseToAnotherIp(destinationIp: string, serviceName: string): Promise<LicenseTask> {
    let url = `/license/plesk/${serviceName}/changeIp`

    return this.client.request<LicenseTask>('POST', url, {destinationIp})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/license/plesk/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the license.Option objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/option#GET)
   */
  OptionsAttachedToThisLicense(serviceName: string): Promise<LicenseOptionLabel[]> {
    let url = `/license/plesk/${serviceName}/option`

    return this.client.request<LicenseOptionLabel[]>('GET', url)
  }

  /**
   * Your License options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/option/%7Blabel%7D#GET)
   */
  /*
  GetThisObjectProperties(label: LicenseOptionLabel, serviceName: string): Promise<LicenseOption> {
    let url = `/license/plesk/${serviceName}/option/${label}`

    return this.client.request<LicenseOption>('GET', url)
  }
  */

  /**
   * Your License options [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/option/%7Blabel%7D#DELETE)
   */
  ReleaseThisOption(label: LicenseOptionLabel, serviceName: string): Promise<LicenseTask> {
    let url = `/license/plesk/${serviceName}/option/${label}`

    return this.client.request<LicenseTask>('DELETE', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/license/plesk/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/license/plesk/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the license.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/tasks#GET)
   */
  TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]> {
    let url = `/license/plesk/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * licenses Todos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
    let url = `/license/plesk/${serviceName}/tasks/${taskId}`

    return this.client.request<LicenseTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/license/plesk/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Get the orderable Plesk versions and their associated compatibilities [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/orderableVersions#GET)
   */
  GetTheOrderablePleskVersionsAndTheirAssociatedCompatibilities(ip: string): Promise<LicensePleskOrderConfiguration[]> {
    let url = `/license/plesk/orderableVersions?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }

    return this.client.request<LicensePleskOrderConfiguration[]>('GET', url+queryParams.toString())
  }

}
