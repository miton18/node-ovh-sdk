// GENERATED SDK for dedicated/nas API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Define Acl for partition
 */
export interface DedicatednasAccess {
  accessId: number
  ip: string
}

/**
 * Storage nas
 */
export interface DedicatednasNas {
  canCreatePartition: boolean
  customName?: string
  datacenter?: string
  ip?: string
  mountPath: string
  serviceName: string
  zpoolSize: number
}

/**
 * Storage partition
 */
export interface DedicatednasPartition {
  partitionName: string
  protocol: DedicatedstorageProtocol
  size: number
}

/**
 * Partition Quota
 */
export interface DedicatednasQuota {
  size: number
  uid: number
}

/**
 * Storage task
 */
export interface DedicatednasTaskTask {
  details?: string
  doneDate?: string
  lastUpdate?: string
  operation: DedicatedstorageTaskFunction
  partitionName?: string
  status: DedicatedTaskStatus
  storageName?: string
  taskId: number
  todoDate?: string
}

/*
 * Partition Protocol
 */
export enum DedicatedstorageProtocol {
  CIFS = 'CIFS',
  NFS = 'NFS',
  NFS_CIFS = 'NFS_CIFS'
}

/*
 * Distincts task
 */
export enum DedicatedstorageTaskFunction {
  BACKUPRECURSIVEDESTROY = 'backupRecursiveDestroy',
  CLUSTERLECLERCACLUPDATE = 'clusterLeclercAclUpdate',
  CLUSTERLECLERCCHANGESERVICEIP = 'clusterLeclercChangeServiceIp',
  CLUSTERLECLERCCUSTOMSNAPCREATE = 'clusterLeclercCustomSnapCreate',
  CLUSTERLECLERCCUSTOMSNAPDELETE = 'clusterLeclercCustomSnapDelete',
  CLUSTERLECLERCDELETESNAPSHOTDIRECTORY = 'clusterLeclercDeleteSnapshotDirectory',
  CLUSTERLECLERCDESTROYNASCONTAINER = 'clusterLeclercDestroyNasContainer',
  CLUSTERLECLERCPARTITIONADD = 'clusterLeclercPartitionAdd',
  CLUSTERLECLERCPARTITIONDELETE = 'clusterLeclercPartitionDelete',
  CLUSTERLECLERCPARTITIONUPDATE = 'clusterLeclercPartitionUpdate',
  CLUSTERLECLERCQUOTAUPDATE = 'clusterLeclercQuotaUpdate',
  CLUSTERLECLERCSETUPNASCONTAINER = 'clusterLeclercSetupNasContainer',
  CLUSTERLECLERCSNAPSHOTUPDATE = 'clusterLeclercSnapshotUpdate',
  CLUSTERLECLERCZFSOPTIONS = 'clusterLeclercZfsOptions',
  NASACLUPDATE = 'nasAclUpdate',
  NASDELETESNAPSHOTDIRECTORY = 'nasDeleteSnapshotDirectory',
  NASPARTITIONADD = 'nasPartitionAdd',
  NASPARTITIONDELETE = 'nasPartitionDelete',
  NASPARTITIONUPDATE = 'nasPartitionUpdate',
  NASQUOTAUPDATE = 'nasQuotaUpdate',
  REMOTEBACKUPRECURSIVEDESTROY = 'remoteBackupRecursiveDestroy'
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


export class DedicatedNas {
  constructor(private client: Client) {}

  /**
   * Operations about the STORAGE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/dedicated/nas`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Storage nas [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<DedicatednasNas> {
    let url = `/dedicated/nas/${serviceName}`

    return this.client.request<DedicatednasNas>('GET', url)
  }

  /**
   * Storage nas [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: DedicatednasNas): Promise<void> {
    let url = `/dedicated/nas/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the dedicated.nas.Partition objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition#GET)
   */
  GetPartitionList(serviceName: string): Promise<string[]> {
    let url = `/dedicated/nas/${serviceName}/partition`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.nas.Partition objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition#POST)
   */
  CreateANewPartition(partitionName: string, protocol: DedicatedstorageProtocol, serviceName: string, size: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nas/${serviceName}/partition`

    return this.client.request<DedicatednasTaskTask>('POST', url, {partitionName, protocol, size})
  }

  /**
   * Storage partition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#GET)
   */
  /*
  GetThisObjectProperties(partitionName: string, serviceName: string): Promise<DedicatednasPartition> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}`

    return this.client.request<DedicatednasPartition>('GET', url)
  }
  */

  /**
   * Storage partition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(partitionName: string, serviceName: string, payload: DedicatednasPartition): Promise<void> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Storage partition [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#DELETE)
   */
  DeleteThisPartition(partitionName: string, serviceName: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * List the dedicated.nas.Access objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access#GET)
   */
  GetACLForThisPartition(partitionName: string, serviceName: string): Promise<string[]> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.nas.Access objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access#POST)
   */
  AddAnAclToThisPartition(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access`

    return this.client.request<DedicatednasTaskTask>('POST', url, {ip})
  }

  /**
   * Define Acl for partition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasAccess> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access/${ip}`

    return this.client.request<DedicatednasAccess>('GET', url)
  }
  */

  /**
   * Define Acl for partition [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#DELETE)
   */
  DeleteAGivenSnapshot(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access/${ip}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * authorizableIps operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/authorizableIps#GET)
   */
  GetAllIPsThatCanBeUsedInTheACL(partitionName: string, serviceName: string): Promise<string[]> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/authorizableIps`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.nas.Quota objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#GET)
   */
  GetQuotaForThisPartition(partitionName: string, serviceName: string): Promise<number[]> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicated.nas.Quota objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#POST)
   */
  SetANewQuota(partitionName: string, serviceName: string, size: number, uid: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota`

    return this.client.request<DedicatednasTaskTask>('POST', url, {size, uid})
  }

  /**
   * Partition Quota [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#GET)
   */
  /*
  GetThisObjectProperties(partitionName: string, serviceName: string, uid: number): Promise<DedicatednasQuota> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota/${uid}`

    return this.client.request<DedicatednasQuota>('GET', url)
  }
  */

  /**
   * Partition Quota [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#DELETE)
   */
  DeleteAGivenQuota(partitionName: string, serviceName: string, uid: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota/${uid}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/dedicated/nas/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/dedicated/nas/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the dedicated.nasTask.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/task#GET)
   */
  ViewTaskList(serviceName: string, operation?: DedicatedstorageTaskFunction, status?: DedicatedTaskStatus): Promise<number[]> {
    let url = `/dedicated/nas/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (operation) { queryParams.set('operation', operation.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Storage task [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nas/${serviceName}/task/${taskId}`

    return this.client.request<DedicatednasTaskTask>('GET', url)
  }
  */

}
