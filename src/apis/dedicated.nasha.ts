// GENERATED SDK for dedicated/nasha API

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
 * Define Acl for partition
 */
export interface DedicatednashaAccess {
  accessId: number
  ip: string
  type: DedicatedstorageAclType
}

/**
 * Custom Snapshot
 */
export interface DedicatednashacustomSnap {
  expiration?: string
  name: string
}

/**
 * Partition options
 */
export interface Dedicatednashaoptions {
  atime: string
  id: number
  recordsize: string
  sync: string
}

/**
 * Storage zpool partition
 */
export interface DedicatednashaPartition {
  partitionCapacity?: number
  partitionName: string
  protocol: DedicatedstorageProtocol
  size: number
  usedBySnapshots?: number
}

/**
 * Partition Quota
 */
export interface DedicatednashaQuota {
  size: number
  uid: number
}

/**
 * Partition Snapshot
 */
export interface DedicatednashaSnapshot {
  snapshotType: DedicatedstorageSnapshot
}

/**
 * Storage nas HA
 */
export interface DedicatednashaStorage {
  canCreatePartition: boolean
  customName?: string
  datacenter?: string
  ip?: string
  monitored: boolean
  serviceName: string
  zpoolCapacity: number
  zpoolSize: number
}

/**
 * Partition Vrack
 */
export interface DedicatednashaVrack {
  id: number
  serviceIp: any
  type: string
  vrackName: string
}

/**
 * ovh Nas HA offer availabilities
 */
export interface DedicatedNasHAAvailabilities {
  datacenters: DedicatedNasHAAvailabilityDatacenter[]
  offer: DedicatedNasHAOffer
}

/**
 * A structure describing the availability of offer for each datacenter
 */
export interface DedicatedNasHAAvailabilityDatacenter {
  availability: DedicatedNasHAAvailability
  datacenter: DedicatedNasHAZone
}

/*
 * The availability
 */
export type DedicatedNasHAAvailability = '1H' | '240H' | '24H' | '72H' | 'unknown'

/*
 * ovh Nas HA offer
 */
export type DedicatedNasHAOffer = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g'

/*
 * Nas HA localization
 */
export enum DedicatedNasHAZone {
  BHS = 'bhs',
  RBX = 'rbx',
  SBG = 'sbg'
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
 * Acl Type
 */
export enum DedicatedstorageAclType {
  READONLY = 'readonly',
  READWRITE = 'readwrite'
}

/*
 * Atime values
 */
export enum DedicatedstorageAtime {
  OFF = 'off',
  ON = 'on'
}

/*
 * Available types for NAS usage
 */
export enum DedicatedstorageNasUsageType {
  SIZE = 'size',
  USED = 'used',
  USEDBYSNAPSHOTS = 'usedbysnapshots'
}

/*
 * Available types for NAS partition usage
 */
export enum DedicatedstoragePartitionUsageType {
  SIZE = 'size',
  USED = 'used',
  USEDBYSNAPSHOTS = 'usedbysnapshots'
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
 * Recordsize values
 */
export type DedicatedstorageRecordSize = '131072' | '16384' | '32768' | '4096' | '65536' | '8192'

/*
 * Partition snapshot allowed 
 */
export enum DedicatedstorageSnapshot {
  DAY_1 = 'day-1',
  DAY_2 = 'day-2',
  DAY_3 = 'day-3',
  DAY_7 = 'day-7',
  HOUR_1 = 'hour-1',
  HOUR_6 = 'hour-6'
}

/*
 * Sync values
 */
export enum DedicatedstorageSync {
  ALWAYS = 'always',
  DISABLED = 'disabled',
  STANDARD = 'standard'
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


export class DedicatedNasha {
  constructor(private client: Client) {}

  /**
   * Operations about the STORAGE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/dedicated/nasha`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Storage nas HA [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<DedicatednashaStorage> {
    let url = `/dedicated/nasha/${serviceName}`

    return this.client.request<DedicatednashaStorage>('GET', url)
  }

  /**
   * Storage nas HA [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: DedicatednashaStorage): Promise<void> {
    let url = `/dedicated/nasha/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/dedicated/nasha/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/dedicated/nasha/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the dedicated.nasha.Partition objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition#GET)
   */
  GetPartitionList(serviceName: string): Promise<string[]> {
    let url = `/dedicated/nasha/${serviceName}/partition`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.nasha.Partition objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition#POST)
   */
  CreateANewPartition(partitionName: string, protocol: DedicatedstorageProtocol, serviceName: string, size: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition`

    return this.client.request<DedicatednasTaskTask>('POST', url, {partitionName, protocol, size})
  }

  /**
   * Storage zpool partition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D#GET)
   */
  /*
  GetThisObjectProperties(partitionName: string, serviceName: string): Promise<DedicatednashaPartition> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}`

    return this.client.request<DedicatednashaPartition>('GET', url)
  }
  */

  /**
   * Storage zpool partition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(partitionName: string, serviceName: string, payload: DedicatednashaPartition): Promise<void> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Storage zpool partition [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D#DELETE)
   */
  DeleteThisPartition(partitionName: string, serviceName: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * List the dedicated.nasha.Access objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access#GET)
   */
  GetACLForThisPartition(partitionName: string, serviceName: string): Promise<string[]> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.nasha.Access objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access#POST)
   */
  AddANewACLEntry(ip: string, partitionName: string, serviceName: string, type?: DedicatedstorageAclType): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access`

    return this.client.request<DedicatednasTaskTask>('POST', url, {ip, type})
  }

  /**
   * Define Acl for partition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, partitionName: string, serviceName: string): Promise<DedicatednashaAccess> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`

    return this.client.request<DedicatednashaAccess>('GET', url)
  }
  */

  /**
   * Define Acl for partition [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#DELETE)
   */
  DeleteAnACLEntry(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * authorizableBlocks operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/authorizableBlocks#GET)
   */
  GetAllRIPEARINBlocksThatCanBeUsedInTheACL(partitionName: string, serviceName: string): Promise<string[]> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableBlocks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * authorizableIps operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/authorizableIps#GET)
   */
  GetAllIPsThatCanBeUsedInTheACL(partitionName: string, serviceName: string): Promise<string[]> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableIps`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.nasha.customSnap objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot#GET)
   */
  GetCustomSnapshotsForThisPartition(partitionName: string, serviceName: string): Promise<string[]> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.nasha.customSnap objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot#POST)
   */
  CreateANewSnapshot(name: string, partitionName: string, serviceName: string, expiration?: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`

    return this.client.request<DedicatednasTaskTask>('POST', url, {name, expiration})
  }

  /**
   * Custom Snapshot [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, partitionName: string, serviceName: string): Promise<DedicatednashacustomSnap> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot/${name}`

    return this.client.request<DedicatednashacustomSnap>('GET', url)
  }
  */

  /**
   * Custom Snapshot [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot/%7Bname%7D#DELETE)
   */
  DeleteAGivenSnapshot(name: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot/${name}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * Partition options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/options#GET)
   */
  /*
  GetThisObjectProperties(partitionName: string, serviceName: string): Promise<Dedicatednashaoptions> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/options`

    return this.client.request<Dedicatednashaoptions>('GET', url)
  }
  */

  /**
   * Partition options [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/options#POST)
   */
  SetupOptions(partitionName: string, serviceName: string, atime?: DedicatedstorageAtime, recordsize?: DedicatedstorageRecordSize, sync?: DedicatedstorageSync): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/options`

    return this.client.request<DedicatednasTaskTask>('POST', url, {atime, recordsize, sync})
  }

  /**
   * List the dedicated.nasha.Quota objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#GET)
   */
  GetQuotaForThisPartition(partitionName: string, serviceName: string): Promise<number[]> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicated.nasha.Quota objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#POST)
   */
  SetANewQuota(partitionName: string, serviceName: string, size: number, uid: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`

    return this.client.request<DedicatednasTaskTask>('POST', url, {size, uid})
  }

  /**
   * Partition Quota [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#GET)
   */
  /*
  GetThisObjectProperties(partitionName: string, serviceName: string, uid: number): Promise<DedicatednashaQuota> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota/${uid}`

    return this.client.request<DedicatednashaQuota>('GET', url)
  }
  */

  /**
   * Partition Quota [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#DELETE)
   */
  DeleteAGivenQuota(partitionName: string, serviceName: string, uid: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota/${uid}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * List the dedicated.nasha.Snapshot objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot#GET)
   */
  GetScheduledSnapshotTypesForThisPartition(partitionName: string, serviceName: string): Promise<DedicatedstorageSnapshotEnum[]> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`

    return this.client.request<DedicatedstorageSnapshotEnum[]>('GET', url)
  }

  /**
   * List the dedicated.nasha.Snapshot objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot#POST)
   */
  ScheduleANewSnapshotType(partitionName: string, serviceName: string, snapshotType: DedicatedstorageSnapshot): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`

    return this.client.request<DedicatednasTaskTask>('POST', url, {snapshotType})
  }

  /**
   * Partition Snapshot [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot/%7BsnapshotType%7D#GET)
   */
  /*
  GetThisObjectProperties(partitionName: string, serviceName: string, snapshotType: DedicatedstorageSnapshot): Promise<DedicatednashaSnapshot> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot/${snapshotType}`

    return this.client.request<DedicatednashaSnapshot>('GET', url)
  }
  */

  /**
   * Partition Snapshot [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot/%7BsnapshotType%7D#DELETE)
   */
  /*
  DeleteAGivenSnapshot(partitionName: string, serviceName: string, snapshotType: DedicatedstorageSnapshot): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot/${snapshotType}`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }
  */

  /**
   * use operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/use#GET)
   */
  ReturnStatisticsAboutThePartition(partitionName: string, serviceName: string, type: DedicatedstoragePartitionUsageType): Promise<any> {
    let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/use?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/dedicated/nasha/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/dedicated/nasha/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the dedicated.nasTask.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/task#GET)
   */
  ViewTaskList(serviceName: string, operation?: DedicatedstorageTaskFunction, status?: DedicatedTaskStatus): Promise<number[]> {
    let url = `/dedicated/nasha/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (operation) { queryParams.set('operation', operation.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Storage task [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/task/${taskId}`

    return this.client.request<DedicatednasTaskTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/dedicated/nasha/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * use operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/use#GET)
   */
  ReturnStatisticsAboutTheNas(serviceName: string, type: DedicatedstorageNasUsageType): Promise<any> {
    let url = `/dedicated/nasha/${serviceName}/use?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Partition Vrack [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/vrack#DELETE)
   */
  DeleteTheVrackContainer(serviceName: string): Promise<DedicatednasTaskTask> {
    let url = `/dedicated/nasha/${serviceName}/vrack`

    return this.client.request<DedicatednasTaskTask>('DELETE', url)
  }

  /**
   * Get availabilities of nasha offer [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/availabilities#GET)
   */
  GetAvailabilitiesOfNashaOffer(): Promise<DedicatedNasHAAvailabilities[]> {
    let url = `/dedicated/nasha/availabilities`

    return this.client.request<DedicatedNasHAAvailabilities[]>('GET', url)
  }

}
