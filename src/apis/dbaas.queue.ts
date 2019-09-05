// GENERATED SDK for dbaas/queue API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * App
 */
export interface DbaasqueueApp {
  humanId: string
  id: string
  name: string
  regionId: string
  status: DbaasqueueAppStatus
}

/**
 * AppConfiguration
 */
export interface DbaasqueueAppConfiguration {
  app: DbaasqueueApp
  metricsAccount: DbaasqueueMetricsAccount
  roles: DbaasqueueRole[]
  users: DbaasqueueUserWithPassword[]
}

/*
 * AppStatus
 */
export enum DbaasqueueAppStatus {
  NOT_CONFIGURED = 'not_configured',
  ACTIVE = 'active',
  DELETED = 'deleted'
}

/**
 * Key
 */
export interface DbaasqueueKey {
  humanAppId: string
  id: string
  name: string
}

/**
 * KeyWithSecret
 */
export interface DbaasqueueKeyWithSecret {
  humanAppId: string
  id: string
  name: string
  secret: string
}

/**
 * MetricsAccount
 */
export interface DbaasqueueMetricsAccount {
  host: string
  token: string
}

/**
 * Region
 */
export interface DbaasqueueRegion {
  id: string
  name: string
  url: string
}

/**
 * Role
 */
export interface DbaasqueueRole {
  autoCreateAcl: boolean
  name: string
  readAcl: string[]
  writeAcl: string[]
}

/**
 * Topic
 */
export interface DbaasqueueTopic {
  id: string
  partitions: number
  replicationFactor: number
}

/**
 * User
 */
export interface DbaasqueueUser {
  id: string
  name: string
  roles: string[]
}

/**
 * UserWithPassword
 */
export interface DbaasqueueUserWithPassword {
  id: string
  name: string
  password: string
  roles: string[]
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


export class DbaasQueue {
  constructor(private client: Client) {}

  /**
   * Operations about the PAAS_QUEUE service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/dbaas/queue`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * App [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D#GET)
   */
  GetAnApplication(serviceName: string): Promise<DbaasqueueApp> {
    let url = `/dbaas/queue/${serviceName}`

    return this.client.request<DbaasqueueApp>('GET', url)
  }

  /**
   * App [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D#PUT)
   */
  UpdateAnApplication(name: string, serviceName: string): Promise<DbaasqueueApp> {
    let url = `/dbaas/queue/${serviceName}`

    return this.client.request<DbaasqueueApp>('PUT', url, {name})
  }

  /**
   * Key [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/key#GET)
   */
  ListAllKeysOfTheApplication(serviceName: string): Promise<string[]> {
    let url = `/dbaas/queue/${serviceName}/key`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Key [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/key/%7BkeyId%7D#GET)
   */
  GetAKey(keyId: string, serviceName: string): Promise<DbaasqueueKey> {
    let url = `/dbaas/queue/${serviceName}/key/${keyId}`

    return this.client.request<DbaasqueueKey>('GET', url)
  }

  /**
   * Metrics [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/metrics/account#GET)
   */
  GetMetricsAccount(serviceName: string): Promise<DbaasqueueMetricsAccount> {
    let url = `/dbaas/queue/${serviceName}/metrics/account`

    return this.client.request<DbaasqueueMetricsAccount>('GET', url)
  }

  /**
   * Region [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/region#GET)
   */
  ListAllRegionsID(serviceName: string): Promise<string[]> {
    let url = `/dbaas/queue/${serviceName}/region`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Region [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/region/%7BregionId%7D#GET)
   */
  GetOneRegion(regionId: string, serviceName: string): Promise<DbaasqueueRegion> {
    let url = `/dbaas/queue/${serviceName}/region/${regionId}`

    return this.client.request<DbaasqueueRegion>('GET', url)
  }

  /**
   * Role [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/role#GET)
   */
  ListAllRolesOfTheApplication(serviceName: string): Promise<string[]> {
    let url = `/dbaas/queue/${serviceName}/role`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Role [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/role/%7BroleName%7D#GET)
   */
  GetARole(roleName: string, serviceName: string): Promise<DbaasqueueRole> {
    let url = `/dbaas/queue/${serviceName}/role/${roleName}`

    return this.client.request<DbaasqueueRole>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/serviceInfos#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/dbaas/queue/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/dbaas/queue/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Topic [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/topic#GET)
   */
  ListAllTopicsOfTheApplication(serviceName: string): Promise<string[]> {
    let url = `/dbaas/queue/${serviceName}/topic`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Topic [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/topic/%7BtopicId%7D#GET)
   */
  GetATopic(serviceName: string, topicId: string): Promise<DbaasqueueTopic> {
    let url = `/dbaas/queue/${serviceName}/topic/${topicId}`

    return this.client.request<DbaasqueueTopic>('GET', url)
  }

  /**
   * Topic [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/topic/%7BtopicId%7D#DELETE)
   */
  DeleteATopic(serviceName: string, topicId: string): Promise<void> {
    let url = `/dbaas/queue/${serviceName}/topic/${topicId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * User [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user#GET)
   */
  ListAllUsersOfTheApplication(serviceName: string): Promise<string[]> {
    let url = `/dbaas/queue/${serviceName}/user`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * User [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user/%7BuserId%7D#GET)
   */
  GetAUser(serviceName: string, userId: string): Promise<DbaasqueueUser> {
    let url = `/dbaas/queue/${serviceName}/user/${userId}`

    return this.client.request<DbaasqueueUser>('GET', url)
  }

  /**
   * User [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user/%7BuserId%7D/changePassword#POST)
   */
  GenerateANewUserPassword(serviceName: string, userId: string): Promise<DbaasqueueUserWithPassword> {
    let url = `/dbaas/queue/${serviceName}/user/${userId}/changePassword`

    return this.client.request<DbaasqueueUserWithPassword>('POST', url)
  }

  /**
   * User roles [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user/%7BuserId%7D/roles#GET)
   */
  GetUserRoles(serviceName: string, userId: string): Promise<string[]> {
    let url = `/dbaas/queue/${serviceName}/user/${userId}/roles`

    return this.client.request<string[]>('GET', url)
  }

}
