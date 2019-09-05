// GENERATED SDK for deskaas API

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
 * Desktop As A Service
 */
export interface Deskaasdeskaas {
  alias: string
  dataDisk: any
  ip?: string
  os: string
  planCode: string
  ram: any
  reference: string
  serviceName: string
  state: DeskaasState
  url?: string
  vcpu: number
}

/**
 * A structure describing the current password policy for your Dedicated Cloud
 */
export interface DeskaaspasswordPolicy {
  deniedChars: string[]
  digitMandatory: boolean
  letterMandatory: boolean
  lowercaseLetterMandatory: boolean
  maxLength: number
  minLength: number
  specialMandatory: boolean
  uppercaseLetterMandatory: boolean
}

/*
 * All states a Desktop As A Service can be in
 */
export enum DeskaasState {
  AVAILABLE = 'available',
  DELIVERED = 'delivered',
  DISABLED = 'disabled',
  ERROR = 'error',
  RESERVED = 'reserved'
}

/**
 * Operation on a Desktop As A Service component
 */
export interface DeskaasTask {
  description?: string
  lastModificationDate?: string
  name: string
  progress: number
  state: DeskaasTaskState
  taskId: number
}

/*
 * All states a Desktop As A Service Task can be in
 */
export enum DeskaasTaskState {
  CANCELED = 'canceled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  FIXING = 'fixing',
  TOCANCEL = 'toCancel',
  TOCREATE = 'toCreate',
  TODO = 'todo',
  UNKNOWN = 'unknown',
  WAITINGFORCHILDS = 'waitingForChilds',
  WAITINGTODO = 'waitingTodo'
}

/**
 * Desktop As A Service User
 */
export interface DeskaasUser {
  activationState: DeskaasuserActivationState
  email: string
  name: string
  state: DeskaasuserState
  userId: number
}

/*
 * All activation states a Dedicated Cloud User can have
 */
export enum DeskaasuserActivationState {
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLED = 'enabled',
  ENABLING = 'enabling',
  TODISABLE = 'toDisable',
  TOENABLE = 'toEnable'
}

/*
 * All states a Dedicated Cloud User can be in
 */
export enum DeskaasuserState {
  CREATING = 'creating',
  DELETING = 'deleting',
  DELIVERED = 'delivered',
  ERROR = 'error'
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


export class Deskaas {
  constructor(private client: Client) {}

  /**
   * Operations about the DESKAAS service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/deskaas`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Desktop As A Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<Deskaasdeskaas> {
    let url = `/deskaas/${serviceName}`

    return this.client.request<Deskaasdeskaas>('GET', url)
  }

  /**
   * changeAlias operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/changeAlias#POST)
   */
  ChangeTheVirtualDesktopAlias(alias: string, serviceName: string): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/changeAlias`

    return this.client.request<DeskaasTask>('POST', url, {alias})
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/deskaas/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/deskaas/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * console operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/console#POST)
   */
  NewConsoleAccess(serviceName: string): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/console`

    return this.client.request<DeskaasTask>('POST', url)
  }

  /**
   * passwordPolicy operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/passwordPolicy#GET)
   */
  GetTheCurrentPasswordPolicyForYourDesktopAsAService(serviceName: string): Promise<DeskaaspasswordPolicy> {
    let url = `/deskaas/${serviceName}/passwordPolicy`

    return this.client.request<DeskaaspasswordPolicy>('GET', url)
  }

  /**
   * reboot operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/reboot#POST)
   */
  RebootTheOperatingSystemOfTheCloudDesktop(serviceName: string): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/reboot`

    return this.client.request<DeskaasTask>('POST', url)
  }

  /**
   * refresh operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/refresh#POST)
   */
  RefreshTheOperatingSystemOfTheDesktopAsAServiceAllYourPersonnalDataAreKept(serviceName: string): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/refresh`

    return this.client.request<DeskaasTask>('POST', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/deskaas/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/deskaas/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the deskaas.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/task#GET)
   */
  TasksAssociatedWithThisDesktopAsAService(serviceName: string, state?: DeskaasTaskState): Promise<number[]> {
    let url = `/deskaas/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Desktop As A Service component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/task/${taskId}`

    return this.client.request<DeskaasTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/deskaas/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * upgrade operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/upgrade#POST)
   */
  UpgradingTheDesktopAsAServiceToAnotherProfileTheVirtualDesktopWillNotBeAvailableDuringUpgradeAndHasToBeRestartedYouCannotDowngradeAVirtualDesktop(serviceName: string, newReference?: string, planCode?: string): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/upgrade`

    return this.client.request<DeskaasTask>('POST', url, {newReference, planCode})
  }

  /**
   * Desktop As A Service User [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DeskaasUser> {
    let url = `/deskaas/${serviceName}/user`

    return this.client.request<DeskaasUser>('GET', url)
  }
  */

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/changePassword#POST)
   */
  ChangeDesktopAsAServiceUserPassword(serviceName: string, password?: string): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/user/changePassword`

    return this.client.request<DeskaasTask>('POST', url, {password})
  }

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/changeProperties#POST)
   */
  ChangeDesktopAsAServiceUserProperties(serviceName: string, email?: string): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/user/changeProperties`

    return this.client.request<DeskaasTask>('POST', url, {email})
  }

  /**
   * List the deskaas.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/task#GET)
   */
  TasksAssociatedWithThisUser(serviceName: string, state?: DeskaasTaskState): Promise<number[]> {
    let url = `/deskaas/${serviceName}/user/task?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Desktop As A Service component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<DeskaasTask> {
    let url = `/deskaas/${serviceName}/user/task/${taskId}`

    return this.client.request<DeskaasTask>('GET', url)
  }
  */

}
