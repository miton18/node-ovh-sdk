// GENERATED SDK for veeamCloudConnect API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
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

/**
 * Veeam Cloud Connect account
 */
export interface VeeamCloudConnectAccount {
  location: VeeamCloudConnectLocation
  productOffer: VeeamCloudConnectOffer
  serviceName: string
  vmCount?: number
}

/**
 * Veeam Backup Repository
 */
export interface VeeamCloudConnectBackupRepository {
  inventoryName: string
  quota: any
  quotaUsed?: any
  replicationZone?: VeeamCloudConnectLocation
  state: VeeamCloudConnectBackupRepositoryState
  usage?: number
}

/*
 * All states a Cloud Tenant backup repository can be in
 */
export enum VeeamCloudConnectBackupRepositoryState {
  CONFIGURING = 'configuring',
  DELIVERED = 'delivered',
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ERROR = 'error',
  MIGRATING = 'migrating',
  REMOVING = 'removing'
}

/*
 * All Location where cloud can be physically located
 */
export enum VeeamCloudConnectLocation {
  BHS1 = 'bhs1',
  RBX2 = 'rbx2',
  SBG1 = 'sbg1'
}

/*
 * All orderable Veeam Cloud Connect offers
 */
export enum VeeamCloudConnectOffer {
  ADVANCED = 'advanced',
  DEMO = 'demo',
  STARTER = 'starter'
}

/**
 * Details about Veeam Cloud Connect offer
 */
export interface VeeamCloudConnectofferCapabilities {
  defaultQuota: number
  maxQuota: number
  maxStoragesCount: number
  minimumUsage: number
  multiStorages: boolean
  replication: boolean
  vmCapacity: number
  wanAccelerator: boolean
}

/**
 * Operation with the Cloud Tenant Account
 */
export interface VeeamCloudConnectTask {
  endDate?: string
  name: string
  progress: number
  startDate?: string
  state: VeeamCloudConnectTaskState
  taskId: number
}

/*
 * All states a Cloud Tenant Task can be in
 */
export enum VeeamCloudConnectTaskState {
  CANCELED = 'canceled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  FIXING = 'fixing',
  PROBLEM = 'problem',
  TOCREATE = 'toCreate',
  TODO = 'todo',
  UNKNOWN = 'unknown',
  WAITINGTODO = 'waitingTodo'
}


export class VeeamCloudConnect {
  constructor(private client: Client) {}

  /**
   * Operations about the VEEAMCC service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/veeamCloudConnect`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Veeam Cloud Connect account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<VeeamCloudConnectAccount> {
    let url = `/veeamCloudConnect/${serviceName}`

    return this.client.request<VeeamCloudConnectAccount>('GET', url)
  }

  /**
   * List the veeamCloudConnect.BackupRepository objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository#GET)
   */
  VeeamBackupRepositoryLinkedToThisVeeamCloudConnectAccount(serviceName: string): Promise<string[]> {
    let url = `/veeamCloudConnect/${serviceName}/backupRepository`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the veeamCloudConnect.BackupRepository objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository#POST)
   */
  AddANewBackupRepositoryToYourProfessionalAccount(serviceName: string): Promise<VeeamCloudConnectTask[]> {
    let url = `/veeamCloudConnect/${serviceName}/backupRepository`

    return this.client.request<VeeamCloudConnectTask[]>('POST', url)
  }

  /**
   * Veeam Backup Repository [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D#GET)
   */
  /*
  GetThisObjectProperties(inventoryName: string, serviceName: string): Promise<VeeamCloudConnectBackupRepository> {
    let url = `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`

    return this.client.request<VeeamCloudConnectBackupRepository>('GET', url)
  }
  */

  /**
   * Veeam Backup Repository [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D#DELETE)
   */
  DeleteThisBackupRepository(inventoryName: string, serviceName: string): Promise<VeeamCloudConnectTask[]> {
    let url = `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`

    return this.client.request<VeeamCloudConnectTask[]>('DELETE', url)
  }

  /**
   * upgradeQuota operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D/upgradeQuota#POST)
   */
  ChangeYourQuota(inventoryName: string, newQuota: number, serviceName: string): Promise<VeeamCloudConnectTask[]> {
    let url = `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}/upgradeQuota`

    return this.client.request<VeeamCloudConnectTask[]>('POST', url, {newQuota})
  }

  /**
   * capabilities operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/capabilities#GET)
   */
  ShowCapabilitiesOfYourCurrentOffer(serviceName: string): Promise<VeeamCloudConnectofferCapabilities> {
    let url = `/veeamCloudConnect/${serviceName}/capabilities`

    return this.client.request<VeeamCloudConnectofferCapabilities>('GET', url)
  }

  /**
   * orderableUpgrade operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/orderableUpgrade#GET)
   */
  ListThePossibleUpgradesOnYourVeeamCloudConnectAccount(serviceName: string): Promise<VeeamCloudConnectOffer[]> {
    let url = `/veeamCloudConnect/${serviceName}/orderableUpgrade`

    return this.client.request<VeeamCloudConnectOffer[]>('GET', url)
  }

  /**
   * resetPassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/resetPassword#POST)
   */
  ResetYourCloudTenantPassword(serviceName: string): Promise<VeeamCloudConnectTask> {
    let url = `/veeamCloudConnect/${serviceName}/resetPassword`

    return this.client.request<VeeamCloudConnectTask>('POST', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/veeamCloudConnect/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/veeamCloudConnect/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the veeamCloudConnect.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/task#GET)
   */
  TasksAssociatedWithCloudTenant(serviceName: string, name?: string, state?: VeeamCloudConnectTaskState): Promise<number[]> {
    let url = `/veeamCloudConnect/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation with the Cloud Tenant Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<VeeamCloudConnectTask> {
    let url = `/veeamCloudConnect/${serviceName}/task/${taskId}`

    return this.client.request<VeeamCloudConnectTask>('GET', url)
  }
  */

}
