// GENERATED SDK for veeam/veeamEnterprise API

import {Client} from '../client'
import QueryParams from '../query-params'

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

/**
 * Veeeam Enterprise offer
 */
export interface VeeamveeamEnterpriseAccount {
  ip?: string
  port?: number
  serviceName: string
  sourceIp: string
}

/**
 * Operation with the Enterprise Account
 */
export interface VeeamveeamEnterpriseTask {
  endDate?: string
  name: string
  progress: number
  startDate?: string
  state: VeeamEnterpriseTaskState
  taskId: number
}

/*
 * All possible states for a Veeam Enterprise Task
 */
export enum VeeamEnterpriseTaskState {
  CANCELED = 'canceled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TOCREATE = 'toCreate',
  TODO = 'todo',
  UNFIXED = 'unfixed',
  WAITING = 'waiting',
  WAITINGFORCHILDS = 'waitingForChilds'
}


export class VeeamVeeamEnterprise {
  constructor(private client: Client) {}

  /**
   * Operations about the VEEAMENTERPRISE service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/veeam/veeamEnterprise`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Veeeam Enterprise offer [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<VeeamveeamEnterpriseAccount> {
    let url = `/veeam/veeamEnterprise/${serviceName}`

    return this.client.request<VeeamveeamEnterpriseAccount>('GET', url)
  }

  /**
   * Confirm termination of your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/veeam/veeamEnterprise/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * register operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/register#POST)
   */
  RegisterVeeamBackupServerToVeeamEnterprise(ip: string, password: string, port: number, serviceName: string, username: string): Promise<VeeamveeamEnterpriseTask[]> {
    let url = `/veeam/veeamEnterprise/${serviceName}/register`

    return this.client.request<VeeamveeamEnterpriseTask[]>('POST', url, {ip, password, port, username})
  }

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/veeam/veeamEnterprise/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/veeam/veeamEnterprise/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the veeam.veeamEnterprise.Task objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/task#GET)
   */
  TasksAssociatedWithVeeamEnterprise(serviceName: string, name?: string, state?: VeeamEnterpriseTaskState): Promise<number[]> {
    let url = `/veeam/veeamEnterprise/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation with the Enterprise Account [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<VeeamveeamEnterpriseTask> {
    let url = `/veeam/veeamEnterprise/${serviceName}/task/${taskId}`

    return this.client.request<VeeamveeamEnterpriseTask>('GET', url)
  }
  */

  /**
   * Terminate your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/veeam/veeamEnterprise/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * update operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/update#POST)
   */
  UpdateVeeamEnterpriseConfiguration(ip: string, password: string, port: number, serviceName: string, username: string): Promise<VeeamveeamEnterpriseTask[]> {
    let url = `/veeam/veeamEnterprise/${serviceName}/update`

    return this.client.request<VeeamveeamEnterpriseTask[]>('POST', url, {ip, password, port, username})
  }

}
