// GENERATED SDK for dedicated/ceph API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * IP ACL
 */
export interface DedicatedcephaclGetresponse {
  family: DedicatedcephaclGetresponsefamily
  id: number
  netmask: string
  network: string
}

/*
 * Family of IP ACL
 */
export enum DedicatedcephaclGetresponsefamily {
  IPV4 = 'IPV4',
  IPV6 = 'IPV6'
}

/**
 * Structure holding IP ACLs
 */
export interface DedicatedcephaclListresponse {
  family: DedicatedcephaclListresponsefamily
  id: number
  netmask: string
  network: string
}

/*
 * Family of IP ACL
 */
export enum DedicatedcephaclListresponsefamily {
  IPV4 = 'IPV4',
  IPV6 = 'IPV6'
}

/**
 * Details about ceph cluster
 */
export interface DedicatedcephclusterGetresponse {
  cephMons: string[]
  cephVersion: string
  createDate: string
  crushTunables: DedicatedcephclusterGetresponsecrushTunables
  label: string
  region: string
  serviceName: string
  size: number
  state: DedicatedcephclusterGetresponsestate
  status: DedicatedcephclusterGetresponsestatus
  updateDate: string
}

/*
 * Tunables of cluster
 */
export enum DedicatedcephclusterGetresponsecrushTunables {
  OPTIMAL = 'OPTIMAL',
  DEFAULT = 'DEFAULT',
  LEGACY = 'LEGACY',
  BOBTAIL = 'BOBTAIL',
  ARGONAUT = 'ARGONAUT',
  FIREFLY = 'FIREFLY',
  HAMMER = 'HAMMER',
  JEWEL = 'JEWEL'
}

/*
 * State of cluster
 */
export enum DedicatedcephclusterGetresponsestate {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED'
}

/*
 * Status of cluster
 */
export enum DedicatedcephclusterGetresponsestatus {
  CREATING = 'CREATING',
  INSTALLED = 'INSTALLED',
  DELETING = 'DELETING',
  DELETED = 'DELETED',
  TASK_IN_PROGRESS = 'TASK_IN_PROGRESS'
}

/**
 * Health of ceph cluster
 */
export interface DedicatedcephclusterHealthresponse {
  availableBytes: number
  healthy: boolean
  serviceName: string
  status: string
  totalBytes: number
  usedBytes: number
}

/*
 * Tunables of cluster
 */
export enum DedicatedcephclusterUpdatecrushTunables {
  OPTIMAL = 'OPTIMAL',
  DEFAULT = 'DEFAULT',
  LEGACY = 'LEGACY',
  BOBTAIL = 'BOBTAIL',
  ARGONAUT = 'ARGONAUT',
  FIREFLY = 'FIREFLY',
  HAMMER = 'HAMMER',
  JEWEL = 'JEWEL'
}

/**
 * Ceph pool
 */
export interface DedicatedcephpoolGetresponse {
  backup: boolean
  minActiveReplicas: number
  name: string
  poolType: DedicatedcephpoolGetresponsepoolType
  replicaCount: number
  serviceName: string
}

/*
 * Type of pool
 */
export enum DedicatedcephpoolGetresponsepoolType {
  REPLICATED = 'REPLICATED',
  ERASURE_CODED = 'ERASURE_CODED'
}

/**
 * List of cluster pools
 */
export interface DedicatedcephpoolListresponse {
  backup: boolean
  minActiveReplicas: number
  name: string
  poolType: DedicatedcephpoolListresponsepoolType
  replicaCount: number
  serviceName: string
}

/*
 * Type of pool
 */
export enum DedicatedcephpoolListresponsepoolType {
  REPLICATED = 'REPLICATED',
  ERASURE_CODED = 'ERASURE_CODED'
}

/**
 * list of task subtasks
 */
export interface DedicatedcephtaskGetresponse {
  createDate: string
  finishDate?: string
  name: string
  state?: DedicatedcephtaskGetresponsestate
  type: string
}

/*
 * State of task
 */
export enum DedicatedcephtaskGetresponsestate {
  IN_PROGRESS = 'IN PROGRESS',
  DONE = 'DONE',
  FAILED = 'FAILED'
}

/**
 * List of active tasks
 */
export interface DedicatedcephtaskListresponse {
  id: string
  name: string
}

/**
 * Ceph user
 */
export interface DedicatedcephuserGetresponse {
  key: string
  mdsCaps: string
  monCaps: string
  name: string
  osdCaps: string
  serviceName: string
}

/**
 * List of cluster users
 */
export interface DedicatedcephuserListresponse {
  key: string
  mdsCaps: string
  monCaps: string
  name: string
  osdCaps: string
  serviceName: string
}

/**
 * List of permissions
 */
export interface DedicatedcephuserPoolPermListresponse {
  classRead: boolean
  classWrite: boolean
  execute: boolean
  poolName: string
  read: boolean
  write: boolean
}

/**
 * List of permissions
 */
export interface DedicatedcephuserPoolPermSetAllpermissions {
  classRead: boolean
  classWrite: boolean
  execute: boolean
  poolName: string
  read: boolean
  write: boolean
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


export class DedicatedCeph {
  constructor(private client: Client) {}

  /**
   * Operations about the CEPH service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/dedicated/ceph`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * dedicated.ceph.clusterGet [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D#GET)
   */
  GetClusterDetails(serviceName: string): Promise<DedicatedcephclusterGetresponse> {
    let url = `/dedicated/ceph/${serviceName}`

    return this.client.request<DedicatedcephclusterGetresponse>('GET', url)
  }

  /**
   * dedicated.ceph.clusterGet [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D#PUT)
   */
  UpdateClusterDetails(crushTunables: DedicatedcephclusterUpdatecrushTunables, label: string, serviceName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}`

    return this.client.request<string>('PUT', url, {crushTunables, label})
  }

  /**
   * dedicated.ceph.aclCreate [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl#POST)
   */
  CreateOneOrMoreNewIPACLs(aclList: string[], serviceName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/acl`

    return this.client.request<string>('POST', url, {aclList})
  }

  /**
   * dedicated.ceph.aclCreate [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl#GET)
   */
  GetListOfAllIPACLsInACluster(serviceName: string): Promise<DedicatedcephaclListresponse[]> {
    let url = `/dedicated/ceph/${serviceName}/acl`

    return this.client.request<DedicatedcephaclListresponse[]>('GET', url)
  }

  /**
   * dedicated.ceph.aclDeleteSingle [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl/%7BaclId%7D#DELETE)
   */
  DeleteSingleIPACL(aclId: string, serviceName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/acl/${aclId}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * dedicated.ceph.aclDeleteSingle [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl/%7BaclId%7D#GET)
   */
  GetDetailsAboutIPACL(aclId: string, serviceName: string): Promise<DedicatedcephaclGetresponse> {
    let url = `/dedicated/ceph/${serviceName}/acl/${aclId}`

    return this.client.request<DedicatedcephaclGetresponse>('GET', url)
  }

  /**
   * Change the contacts of this service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/dedicated/ceph/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * dedicated.ceph.clusterHealth [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/health#GET)
   */
  GetClusterHealth(serviceName: string): Promise<DedicatedcephclusterHealthresponse> {
    let url = `/dedicated/ceph/${serviceName}/health`

    return this.client.request<DedicatedcephclusterHealthresponse>('GET', url)
  }

  /**
   * dedicated.ceph.poolCreate [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool#POST)
   */
  CreateANewCephPool(poolName: string, serviceName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/pool`

    return this.client.request<string>('POST', url, {poolName})
  }

  /**
   * dedicated.ceph.poolCreate [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool#GET)
   */
  GetListOfAllPoolsInACluster(serviceName: string): Promise<DedicatedcephpoolListresponse[]> {
    let url = `/dedicated/ceph/${serviceName}/pool`

    return this.client.request<DedicatedcephpoolListresponse[]>('GET', url)
  }

  /**
   * dedicated.ceph.poolDelete [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool/%7BpoolName%7D#DELETE)
   */
  DeleteASingleCephPool(poolName: string, serviceName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/pool/${poolName}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * dedicated.ceph.poolDelete [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool/%7BpoolName%7D#GET)
   */
  GetDetailsAboutAnExistingCephPool(poolName: string, serviceName: string): Promise<DedicatedcephpoolGetresponse> {
    let url = `/dedicated/ceph/${serviceName}/pool/${poolName}`

    return this.client.request<DedicatedcephpoolGetresponse>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/serviceInfos#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/dedicated/ceph/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/dedicated/ceph/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * dedicated.ceph.taskList [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/task#GET)
   */
  ListTasksInProgress(serviceName: string): Promise<DedicatedcephtaskListresponse[]> {
    let url = `/dedicated/ceph/${serviceName}/task`

    return this.client.request<DedicatedcephtaskListresponse[]>('GET', url)
  }

  /**
   * dedicated.ceph.taskGet [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  GetTaskDetails(serviceName: string, taskId: string): Promise<DedicatedcephtaskGetresponse[]> {
    let url = `/dedicated/ceph/${serviceName}/task/${taskId}`

    return this.client.request<DedicatedcephtaskGetresponse[]>('GET', url)
  }

  /**
   * Terminate your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * dedicated.ceph.userCreate [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user#POST)
   */
  CreateANewCephUser(serviceName: string, userName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/user`

    return this.client.request<string>('POST', url, {userName})
  }

  /**
   * dedicated.ceph.userCreate [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user#GET)
   */
  GetListOfAllUsersInACluster(serviceName: string): Promise<DedicatedcephuserListresponse[]> {
    let url = `/dedicated/ceph/${serviceName}/user`

    return this.client.request<DedicatedcephuserListresponse[]>('GET', url)
  }

  /**
   * dedicated.ceph.userDelete [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D#DELETE)
   */
  DeleteAnExistingSingleCephUser(serviceName: string, userName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/user/${userName}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * dedicated.ceph.userDelete [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D#GET)
   */
  GetDetailsAboutACephUser(serviceName: string, userName: string): Promise<DedicatedcephuserGetresponse> {
    let url = `/dedicated/ceph/${serviceName}/user/${userName}`

    return this.client.request<DedicatedcephuserGetresponse>('GET', url)
  }

  /**
   * dedicated.ceph.userPoolPermList [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool#GET)
   */
  ListUserpoolPermissions(serviceName: string, userName: string): Promise<DedicatedcephuserPoolPermListresponse[]> {
    let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool`

    return this.client.request<DedicatedcephuserPoolPermListresponse[]>('GET', url)
  }

  /**
   * dedicated.ceph.userPoolPermList [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool#PUT)
   */
  UpdateUserpoolPermissionForSinglePool(classRead: boolean, classWrite: boolean, execute: boolean, poolName: string, read: boolean, serviceName: string, userName: string, write: boolean): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool`

    return this.client.request<string>('PUT', url, {classRead, classWrite, execute, poolName, read, write})
  }

  /**
   * dedicated.ceph.userPoolPermList [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool#POST)
   */
  CreateNewUserpoolPermissionsAllOldPermissionsWillBeCleared(serviceName: string, userName: string, permissions?: DedicatedcephuserPoolPermSetAllpermissions[]): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool`

    return this.client.request<string>('POST', url, {permissions})
  }

  /**
   * dedicated.ceph.userPoolPermDelete [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool/%7BpoolName%7D#DELETE)
   */
  ClearUserpoolPermissionForSinglePool(poolName: string, serviceName: string, userName: string): Promise<string> {
    let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool/${poolName}`

    return this.client.request<string>('DELETE', url)
  }

}
