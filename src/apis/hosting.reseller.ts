// GENERATED SDK for hosting/reseller API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Plesk instance meta details
 */
export interface HostingresellermetaType {
  email: string
  region: string
}

/**
 * Reseller
 */
export interface Hostingresellerproduct {
  action?: string
  ip?: string
  meta: HostingresellermetaType
  progress?: any
  status: string
  type: HostingresellerresellerType
  typeDetail: HostingresellerproductType
  url?: string
}

/**
 * Plesk instance type details
 */
export interface HostingresellerproductType {
  consumers: number
  cpu: string
  databases: number
  diskSize: number
  emailAccounts: number
  ram: number
  type: string
  vCores: number
  websites: number
}

/*
 * Reseller type
 */
export enum HostingresellerresellerType {
  TYPE1 = 'TYPE1',
  TYPE2 = 'TYPE2',
  TYPE3 = 'TYPE3',
  TYPE4 = 'TYPE4',
  TYPE5 = 'TYPE5'
}

/*
 * Possible values for language type
 */
export enum ResellerpleskLanguageType {
  AR = 'ar',
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',
  CS_CZ = 'cs-CZ',
  DA_DK = 'da-DK',
  NL_NL = 'nl-NL',
  EN_US = 'en-US',
  FI_FI = 'fi-FI',
  FR_FR = 'fr-FR',
  DE_DE = 'de-DE',
  EL_GR = 'el-GR',
  HE_IL = 'he-IL',
  HU_HU = 'hu-HU',
  ID_ID = 'id-ID',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  KO_KR = 'ko-KR',
  MS_MY = 'ms-MY',
  NB_NO = 'nb-NO',
  PL_PL = 'pl-PL',
  PT_BR = 'pt-BR',
  PT_PT = 'pt-PT',
  RO_RO = 'ro-RO',
  RU_RU = 'ru-RU',
  ES_ES = 'es-ES',
  SV_SE = 'sv-SE',
  TL_PH = 'tl-PH',
  TH_TH = 'th-TH',
  TR_TR = 'tr-TR',
  UK_UA = 'uk-UA',
  VI_VN = 'vi-VN'
}

/**
 * Reseller snapshot
 */
export interface Resellersnapshot {
  creationDate: string
  id: string
  snashotName: string
  type: ResellersnapshotType
}

/*
 * Possible values for snapshot type
 */
export enum ResellersnapshotType {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual'
}

/**
 * Reseller task
 */
export interface Resellertask {
  currentStep: string
  expectedDoneDate?: string
  id: string
  lastUpdateDate?: string
  productDomain: string
  progress: number
  taskName: string
  taskStatus: ResellertaskType
}

/*
 * Possible values for task status
 */
export enum ResellertaskType {
  DONE = 'done',
  ERROR = 'error',
  DOING = 'doing',
  TODO = 'todo',
  UNKNOWN = 'unknown'
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


export class HostingReseller {
  constructor(private client: Client) {}

  /**
   * Operations about the HOSTING_RESELLER service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/hosting/reseller`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Reseller [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<Hostingresellerproduct> {
    let url = `/hosting/reseller/${serviceName}`

    return this.client.request<Hostingresellerproduct>('GET', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/hosting/reseller/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Reseller.change_email [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/email#POST)
   */
  ChangeUserEmail(email: string, serviceName: string): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/email`

    return this.client.request<string>('POST', url, {email})
  }

  /**
   * Reseller.change_language [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/language#POST)
   */
  ChangeLanguageOfThePleskInstance(language: ResellerpleskLanguageType, serviceName: string): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/language`

    return this.client.request<string>('POST', url, {language})
  }

  /**
   * Reseller.reboot [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/reboot#POST)
   */
  RestartInstance(serviceName: string, hard?: boolean): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/reboot?`

    const queryParams = new QueryParams()
    if (hard) { queryParams.set('hard', hard.toString()) }

    return this.client.request<string>('POST', url+queryParams.toString())
  }

  /**
   * Reseller.reinstall [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/reinstall#POST)
   */
  ReinstallInstance(serviceName: string): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/reinstall`

    return this.client.request<string>('POST', url)
  }

  /**
   * Reseller.resetPassword [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/resetPasswordUrl#GET)
   */
  GetResetInstancePasswordUrl(serviceName: string): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/resetPasswordUrl`

    return this.client.request<string>('GET', url)
  }

  /**
   * Reseller.set_reverse [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/reverse#POST)
   */
  SetNewReverseToIp(reverse: string, serviceName: string): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/reverse`

    return this.client.request<string>('POST', url, {reverse})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/hosting/reseller/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/hosting/reseller/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Reseller.list_snapshot [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot#GET)
   */
  ListInstanceCurrentSnapshots(serviceName: string): Promise<Resellersnapshot[]> {
    let url = `/hosting/reseller/${serviceName}/snapshot`

    return this.client.request<Resellersnapshot[]>('GET', url)
  }

  /**
   * Reseller.list_snapshot [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot#POST)
   */
  MakeManualSnapshot(serviceName: string): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/snapshot`

    return this.client.request<string>('POST', url)
  }

  /**
   * Reseller.get_snapshot [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot/%7BsnapshotId%7D#GET)
   */
  DetailOfASnapshot(serviceName: string, snapshotId: string): Promise<Resellersnapshot> {
    let url = `/hosting/reseller/${serviceName}/snapshot/${snapshotId}`

    return this.client.request<Resellersnapshot>('GET', url)
  }

  /**
   * Reseller.restore_snapshot [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot/%7BsnapshotId%7D/restore#POST)
   */
  RestoreASnapshot(serviceName: string, snapshotId: string): Promise<string> {
    let url = `/hosting/reseller/${serviceName}/snapshot/${snapshotId}/restore`

    return this.client.request<string>('POST', url)
  }

  /**
   * Reseller.list_task [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/task#GET)
   */
  GetListOfTasks(serviceName: string): Promise<Resellertask[]> {
    let url = `/hosting/reseller/${serviceName}/task`

    return this.client.request<Resellertask[]>('GET', url)
  }

  /**
   * Reseller.get_task [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  GetTaskInformationGivenItsId(serviceName: string, taskId: string): Promise<Resellertask> {
    let url = `/hosting/reseller/${serviceName}/task/${taskId}`

    return this.client.request<Resellertask>('GET', url)
  }

}
