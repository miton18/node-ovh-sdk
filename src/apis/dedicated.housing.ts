// GENERATED SDK for dedicated/housing API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
}

/**
 * A structure describing informations for APC orderable for this housing bay
 */
export interface DedicatedhousingApcOrderable {
  free: boolean
  orderable: boolean
}

/*
 * Housing bay datacenters
 */
export enum DedicatedhousingDatacenter {
  GSW = 'gsw',
  PDC1 = 'pdc1'
}

/*
 * Housing bay High Availablility offers
 */
export enum DedicatedhousingHaRoutingOffer {
  HA2X2 = 'ha2x2',
  HA2X4 = 'ha2x4'
}

/**
 * A structure describing informations for High Availability routing service orderable for this housing bay
 */
export interface DedicatedhousingHaRoutingOrderable {
  offer: DedicatedhousingHaRoutingOfferEnum[]
  orderable: boolean
}

/**
 * Housing bay
 */
export interface DedicatedhousingHousing {
  datacenter?: DedicatedhousingDatacenter
  name: string
  network: DedicatedhousingNetworkInfo[]
  options: DedicatedhousingOptions
  rack: string
  securityCode: string
}

/**
 * A structure describing the Bay's network configuration
 */
export interface DedicatedhousingIpInfo {
  gateway?: string
  network: string
  reservedAddresses?: string[]
}

/**
 * A structure describing the Bay`s link information
 */
export interface DedicatedhousingLinkInfo {
  port: string
  router: string
}

/**
 * A structure describing the Bay`s network configuration
 */
export interface DedicatedhousingNetworkInfo {
  ipv4?: DedicatedhousingIpInfo
  ipv6?: DedicatedhousingIpInfo
  link?: DedicatedhousingLinkInfo
}

/**
 * A structure describing current housing options
 */
export interface DedicatedhousingOptions {
  apcCount: number
  handsneyes: boolean
  highAvailabilityRouting: string
}

/**
 * Housing tasks
 */
export interface DedicatedhousingTask {
  comment?: string
  doneDate?: string
  function: DedicatedhousingTaskFunction
  lastUpdate?: string
  startDate: string
  status: DedicatedTaskStatus
  taskId: number
}

/*
 * Distincts task
 */
export enum DedicatedhousingTaskFunction {
  APPLYBACKUPFTPACLS = 'applyBackupFtpAcls',
  APPLYBACKUPFTPQUOTA = 'applyBackupFtpQuota',
  CHANGEPASSWORDBACKUPFTP = 'changePasswordBackupFTP',
  CREATEBACKUPFTP = 'createBackupFTP',
  MIGRATEBACKUPFTP = 'migrateBackupFTP',
  REMOVEBACKUPFTP = 'removeBackupFTP'
}

/**
 * Backup Ftp assigned to this server
 */
export interface DedicatedserverBackupFtp {
  ftpBackupName: string
  quota?: any
  readOnlyDate?: string
  type: DedicatedserverBackupStorageType
  usage?: any
}

/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedserverBackupFtpAcl {
  cifs: boolean
  ftp: boolean
  ipBlock: string
  isApplied: boolean
  lastUpdate: string
  nfs: boolean
}

/*
 * Different backup storage type
 */
export enum DedicatedserverBackupStorageType {
  INCLUDED = 'included',
  STORAGE = 'storage'
}

/**
 * Server tasks
 */
export interface DedicatedserverTask {
  comment?: string
  doneDate?: string
  function: DedicatedTaskFunction
  lastUpdate?: string
  startDate: string
  status: DedicatedTaskStatus
  taskId: number
}

/*
 * different task operation
 */
export enum DedicatedTaskFunction {
  INFRA_002_VIRTUALNETWORKINTERFACE = 'INFRA_002_VirtualNetworkInterface',
  ADDVIRTUALMAC = 'addVirtualMac',
  ADDWINDOWSPLAFROMEXISTINGSERIAL = 'addWindowSplaFromExistingSerial',
  APPLYBACKUPFTPACLS = 'applyBackupFtpAcls',
  APPLYBACKUPFTPQUOTA = 'applyBackupFtpQuota',
  BYPASSANTIDDOSGAME = 'bypassAntiDDosGame',
  CHANGEPASSWORDBACKUPFTP = 'changePasswordBackupFTP',
  CHANGERIPEORG = 'changeRipeOrg',
  CHECKANDRELEASEIP = 'checkAndReleaseIp',
  CREATEBACKUPFTP = 'createBackupFTP',
  CREATEORUPDATERIPEORG = 'createOrUpdateRipeOrg',
  CREATEPRIVATENETWORK = 'createPrivateNetwork',
  DISABLEFIREWALL = 'disableFirewall',
  ENABLEFIREWALL = 'enableFirewall',
  GENERICMOVEFLOATINGIP = 'genericMoveFloatingIp',
  HARDREBOOT = 'hardReboot',
  MIGRATEBACKUPFTP = 'migrateBackupFTP',
  MOVEFLOATINGIP = 'moveFloatingIp',
  MOVEVIRTUALMAC = 'moveVirtualMac',
  REBOOTPOWER8TO = 'rebootPower8To',
  REINSTALLSERVER = 'reinstallServer',
  RELEASEIP = 'releaseIp',
  REMOVEBACKUPFTP = 'removeBackupFTP',
  REMOVEVIRTUALMAC = 'removeVirtualMac',
  REQUESTACCESSIPMI = 'requestAccessIPMI',
  RESETIPMI = 'resetIPMI',
  RESETIPMISESSION = 'resetIPMISession',
  TESTIPMIHTTP = 'testIPMIhttp',
  TESTIPMIPASSWORD = 'testIPMIpassword',
  TESTIPMIPING = 'testIPMIping',
  VIRTUALMACADD = 'virtualMacAdd',
  VIRTUALMACDELETE = 'virtualMacDelete'
}

/*
 * different task status
 */
export enum DedicatedTaskStatus {
  CANCELLED = 'cancelled',
  CUSTOMERERROR = 'customerError',
  DOING = 'doing',
  DONE = 'done',
  INIT = 'init',
  OVHERROR = 'ovhError',
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


export class DedicatedHousing {
  constructor(private client: Client) {}

  /**
   * Operations about the HOUSING service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/dedicated/housing`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Housing bay [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<DedicatedhousingHousing> {
    let url = `/dedicated/housing/${serviceName}`

    return this.client.request<DedicatedhousingHousing>('GET', url)
  }

  /**
   * Backup Ftp assigned to this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedserverBackupFtp> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP`

    return this.client.request<DedicatedserverBackupFtp>('GET', url)
  }
  */

  /**
   * Backup Ftp assigned to this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP#POST)
   */
  CreateANewBackupFTPSpace(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * Backup Ftp assigned to this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP#DELETE)
   */
  TerminateYourBackupFTPServiceALLDATAWILLBEPERMANENTLYDELETED(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP`

    return this.client.request<DedicatedserverTask>('DELETE', url)
  }

  /**
   * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access#GET)
   */
  ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName: string): Promise<string[]> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP/access`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access#POST)
   */
  CreateANewBackupFTPACL(cifs: boolean, ipBlock: string, nfs: boolean, serviceName: string, ftp?: boolean): Promise<DedicatedserverTask> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP/access`

    return this.client.request<DedicatedserverTask>('POST', url, {cifs, ipBlock, nfs, ftp})
  }

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#GET)
   */
  /*
  GetThisObjectProperties(ipBlock: string, serviceName: string): Promise<DedicatedserverBackupFtpAcl> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`

    return this.client.request<DedicatedserverBackupFtpAcl>('GET', url)
  }
  */

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#PUT)
   */
  AlterThisObjectProperties(ipBlock: string, serviceName: string, payload: DedicatedserverBackupFtpAcl): Promise<void> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#DELETE)
   */
  RevokeThisACL(ipBlock: string, serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`

    return this.client.request<DedicatedserverTask>('DELETE', url)
  }

  /**
   * authorizableBlocks operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/authorizableBlocks#GET)
   */
  GetAllIPBlocksThatCanBeUsedInTheACL(serviceName: string): Promise<string[]> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP/authorizableBlocks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * password operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/password#POST)
   */
  ChangeYourBackupFTPPassword(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/housing/${serviceName}/features/backupFTP/password`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * APC operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/orderable/APC#GET)
   */
  IsAnAPCOrderableForThisHousingBay(serviceName: string): Promise<DedicatedhousingApcOrderable> {
    let url = `/dedicated/housing/${serviceName}/orderable/APC`

    return this.client.request<DedicatedhousingApcOrderable>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/dedicated/housing/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/dedicated/housing/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the dedicated.housing.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/task#GET)
   */
  ViewTaskList(serviceName: string, _function?: DedicatedhousingTaskFunction, status?: DedicatedTaskStatus): Promise<number[]> {
    let url = `/dedicated/housing/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Housing tasks [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatedhousingTask> {
    let url = `/dedicated/housing/${serviceName}/task/${taskId}`

    return this.client.request<DedicatedhousingTask>('GET', url)
  }
  */

  /**
   * cancel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/task/%7BtaskId%7D/cancel#POST)
   */
  ThisActionStopTheTaskProgressionIfItPossible(serviceName: string, taskId: number): Promise<void> {
    let url = `/dedicated/housing/${serviceName}/task/${taskId}/cancel`

    return this.client.request<void>('POST', url)
  }

}
