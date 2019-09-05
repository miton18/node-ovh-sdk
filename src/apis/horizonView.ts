// GENERATED SDK for horizonView API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Access Point type the customer can deploy
 */
export enum HorizonViewAccessPointType {
  PRIVATEACCESSPOINT = 'privateAccessPoint',
  PUBLICACCESSPOINT = 'publicAccessPoint'
}

/**
 * You can reach from your virtual desktops, your customer network 
 */
export interface HorizonViewCustomerNetwork {
  customerNetworkId: number
  name: string
  network: string
}

/**
 * You can reach from your virtual desktops, your customer network 
 */
export interface HorizonViewCustomerNetworkPool {
  customerNetworkId: number
  name: string
  network: string
}

/**
 * Horizon As A Service Customer  User
 */
export interface HorizonViewCustomerUser {
  email?: string
  id: number
  username: string
}

/**
 * Cloud Desktop Infrastructure Datacenter
 */
export interface HorizonViewDatacenter {
  activeDirectoryIP: string
  adminDomain: string
  adminNetworkNextHop: string
  adminPrivateNetwork: string
  customerIntercoIP: string
  customerIntercoMask: string
  customerIntercoVlanId: number
  datacenterId: number
  name: string
  serviceName: string
}

/**
 * Horizon View as a Service
 */
export interface HorizonViewDedicatedHorizon {
  masterZone: HorizonViewZone
  privateCloudName: string
  privateCloudZone: HorizonViewZone
  publicUrl: string
  state: HorizonViewState
  storageAccelerator: boolean
  version: string
}

/**
 * List all Active Directories linked to your CDI Active Directory
 */
export interface HorizonViewDomainTrust {
  activeDirectoryIP: string
  dns1?: string
  dns2?: string
  domain: string
  domainTrustId: number
}

/**
 * All informations about access point
 */
export interface HorizonViewPool {
  accessPointId: number
  dhcpNetmask: string
  dhcpNetwork: string
  externalUrl: string
  intercoNextHop?: string
  intercoPrivateNextHop?: string
  portGroupId: string
  state: HorizonViewState
  twoFA: boolean
  type: HorizonViewPoolType
}

/*
 * Pool type the customer can deploy
 */
export enum HorizonViewPoolType {
  HYBRIDPOOL = 'hybridPool',
  PRIVATEPOOL = 'privatePool',
  PUBLICPOOL = 'publicPool'
}

/*
 * All states a dedicated horizon  can be in
 */
export enum HorizonViewState {
  AVAILABLE = 'available',
  CREATING = 'creating',
  DELIVERED = 'delivered',
  DISABLED = 'disabled',
  ERROR = 'error',
  RESERVED = 'reserved'
}

/**
 * Operation on a Horizon View component
 */
export interface HorizonViewTask {
  description?: string
  lastModificationDate?: string
  name: string
  progress: number
  state: HorizonViewTaskState
  taskId: number
}

/*
 * All states a Horizon View  Task can be in
 */
export enum HorizonViewTaskState {
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
 * Horizon As A Service User
 */
export interface HorizonViewUser {
  username: string
}

/*
 * All zones a Cloud Desktop Infrastructure can be in
 */
export enum HorizonViewZone {
  BEAUHARNOIS = 'Beauharnois',
  ROUBAIX = 'Roubaix',
  STRASBOURG = 'Strasbourg'
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


export class HorizonView {
  constructor(private client: Client) {}

  /**
   * Operations about the HORIZONVIEW service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/horizonView`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Cloud Desktop Infrastructure Datacenter [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<HorizonViewDatacenter> {
    let url = `/horizonView/${serviceName}`

    return this.client.request<HorizonViewDatacenter>('GET', url)
  }

  /**
   * List the horizonView.Pool objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint#GET)
   */
  PoolAssociatedWithThisDatacenter(serviceName: string): Promise<number[]> {
    let url = `/horizonView/${serviceName}/accessPoint`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the horizonView.Pool objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint#POST)
   */
  AddNewAccessPointToCreateANewNetwork(poolType: HorizonViewPoolType, serviceName: string, privateBlock?: string, privateVlan?: number, vrouterPoolPublicIp?: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/accessPoint`

    return this.client.request<HorizonViewTask[]>('POST', url, {poolType, privateBlock, privateVlan, vrouterPoolPublicIp})
  }

  /**
   * All informations about access point [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D#GET)
   */
  /*
  GetThisObjectProperties(accessPointId: number, serviceName: string): Promise<HorizonViewPool> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}`

    return this.client.request<HorizonViewPool>('GET', url)
  }
  */

  /**
   * All informations about access point [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D#DELETE)
   */
  DeleteThisAccessPoint(accessPointId: number, serviceName: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}`

    return this.client.request<HorizonViewTask[]>('DELETE', url)
  }

  /**
   * changeSessionTimeout operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/changeSessionTimeout#POST)
   */
  ManageYourSessionTimeoutOnUnifiedAccessGateway(accessPointId: number, expiration: number, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/changeSessionTimeout`

    return this.client.request<HorizonViewTask>('POST', url, {expiration, onSingleAP})
  }

  /**
   * List the horizonView.CustomerNetworkPool objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork#GET)
   */
  YouCanReachFromTheDesktopsYourPrivateNetwork(accessPointId: number, serviceName: string): Promise<number[]> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the horizonView.CustomerNetworkPool objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork#POST)
   */
  AddANewNetwork(accessPointId: number, network: string, serviceName: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`

    return this.client.request<HorizonViewTask[]>('POST', url, {network})
  }

  /**
   * You can reach from your virtual desktops, your customer network  [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork/%7BcustomerNetworkId%7D#GET)
   */
  /*
  GetThisObjectProperties(accessPointId: number, customerNetworkId: number, serviceName: string): Promise<HorizonViewCustomerNetworkPool> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`

    return this.client.request<HorizonViewCustomerNetworkPool>('GET', url)
  }
  */

  /**
   * You can reach from your virtual desktops, your customer network  [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork/%7BcustomerNetworkId%7D#DELETE)
   */
  DeleteThisCustomerNetwork(accessPointId: number, customerNetworkId: number, serviceName: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`

    return this.client.request<HorizonViewTask[]>('DELETE', url)
  }

  /**
   * disableTwoFA operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/disableTwoFA#POST)
   */
  DisableTwoFactorAuthenticationOnYourPool(accessPointId: number, serviceName: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/disableTwoFA`

    return this.client.request<HorizonViewTask>('POST', url)
  }

  /**
   * disableWindowsUsernameOption operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/disableWindowsUsernameOption#POST)
   */
  DisableWindowsUsernameOptionOnUnifiedAccessGateway(accessPointId: number, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/disableWindowsUsernameOption`

    return this.client.request<HorizonViewTask>('POST', url, {onSingleAP})
  }

  /**
   * enableTwoFA operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/enableTwoFA#POST)
   */
  EnableTwoFactorAuthenticationOnYourPool(accessPointId: number, radiusIp: string, secret: string, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/enableTwoFA`

    return this.client.request<HorizonViewTask>('POST', url, {radiusIp, secret, onSingleAP})
  }

  /**
   * enableWindowsUsernameOption operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/enableWindowsUsernameOption#POST)
   */
  EnableWindowsUsernameOptionOnUnifiedAccessGateway(accessPointId: number, serviceName: string, onSingleAP?: HorizonViewAccessPointType): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/enableWindowsUsernameOption`

    return this.client.request<HorizonViewTask>('POST', url, {onSingleAP})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/horizonView/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the horizonView.CustomerNetwork objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork#GET)
   */
  /*
  YouCanReachFromTheDesktopsYourPrivateNetwork(serviceName: string): Promise<number[]> {
    let url = `/horizonView/${serviceName}/customerNetwork`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the horizonView.CustomerNetwork objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork#POST)
   */
  /*
  AddANewNetwork(name: string, network: string, serviceName: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/customerNetwork`

    return this.client.request<HorizonViewTask[]>('POST', url, {name, network})
  }
  */

  /**
   * You can reach from your virtual desktops, your customer network  [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork/%7BcustomerNetworkId%7D#GET)
   */
  /*
  GetThisObjectProperties(customerNetworkId: number, serviceName: string): Promise<HorizonViewCustomerNetwork> {
    let url = `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`

    return this.client.request<HorizonViewCustomerNetwork>('GET', url)
  }
  */

  /**
   * You can reach from your virtual desktops, your customer network  [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork/%7BcustomerNetworkId%7D#DELETE)
   */
  /*
  DeleteThisCustomerNetwork(customerNetworkId: number, serviceName: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`

    return this.client.request<HorizonViewTask[]>('DELETE', url)
  }
  */

  /**
   * Horizon View as a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<HorizonViewDedicatedHorizon> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon`

    return this.client.request<HorizonViewDedicatedHorizon>('GET', url)
  }
  */

  /**
   * List the horizonView.CustomerUser objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser#GET)
   */
  AccountToAccessToYourPool(serviceName: string): Promise<string[]> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the horizonView.CustomerUser objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser#POST)
   */
  CreateANewCustomerUser(serviceName: string, username: string, email?: string, password?: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser`

    return this.client.request<HorizonViewTask[]>('POST', url, {username, email, password})
  }

  /**
   * Horizon As A Service Customer  User [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, username: string): Promise<HorizonViewCustomerUser> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`

    return this.client.request<HorizonViewCustomerUser>('GET', url)
  }
  */

  /**
   * Horizon As A Service Customer  User [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D#DELETE)
   */
  DeleteThisCustomerUser(serviceName: string, username: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`

    return this.client.request<HorizonViewTask[]>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D/changePassword#POST)
   */
  ChangeHorizonViewCustomerUserPassword(serviceName: string, username: string, password?: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}/changePassword`

    return this.client.request<HorizonViewTask>('POST', url, {password})
  }

  /**
   * disableStorageAccelerator operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/disableStorageAccelerator#POST)
   */
  DisableTheViewStorageAcceleratorOptionOnVCenter(serviceName: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/disableStorageAccelerator`

    return this.client.request<HorizonViewTask>('POST', url)
  }

  /**
   * enableStorageAccelerator operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/enableStorageAccelerator#POST)
   */
  EnableTheViewStorageAcceleratorOptionOnVCenter(serviceName: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/enableStorageAccelerator`

    return this.client.request<HorizonViewTask>('POST', url)
  }

  /**
   * List the horizonView.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/task#GET)
   */
  TasksAssociatedWithThisDedicatedHorizon(serviceName: string, state?: HorizonViewTaskState): Promise<number[]> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/task?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Horizon View component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/task/${taskId}`

    return this.client.request<HorizonViewTask>('GET', url)
  }
  */

  /**
   * Horizon As A Service User [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<HorizonViewUser> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/user`

    return this.client.request<HorizonViewUser>('GET', url)
  }
  */

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user/changePassword#POST)
   */
  ChangeHorizonViewUserPassword(serviceName: string, password?: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/user/changePassword`

    return this.client.request<HorizonViewTask>('POST', url, {password})
  }

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user/changeProperties#POST)
   */
  ChangeHorizonViewUserProperties(serviceName: string, email?: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/dedicatedHorizon/user/changeProperties`

    return this.client.request<HorizonViewTask>('POST', url, {email})
  }

  /**
   * List the horizonView.DomainTrust objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust#GET)
   */
  ListAllActiveDirectoriesLinkedToYourCDIActiveDirectory(serviceName: string): Promise<number[]> {
    let url = `/horizonView/${serviceName}/domainTrust`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the horizonView.DomainTrust objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust#POST)
   */
  LinkYourActiveDirectoryToYourCDIActiveDirectory(activeDirectoryIP: string, domain: string, serviceName: string, dns1?: string, dns2?: string): Promise<HorizonViewTask[]> {
    let url = `/horizonView/${serviceName}/domainTrust`

    return this.client.request<HorizonViewTask[]>('POST', url, {activeDirectoryIP, domain, dns1, dns2})
  }

  /**
   * List all Active Directories linked to your CDI Active Directory [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D#GET)
   */
  /*
  GetThisObjectProperties(domainTrustId: number, serviceName: string): Promise<HorizonViewDomainTrust> {
    let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}`

    return this.client.request<HorizonViewDomainTrust>('GET', url)
  }
  */

  /**
   * addChildDomain operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addChildDomain#POST)
   */
  AddAChildDomainForThisDomain(activeDirectoryIP: string, domain: string, domainTrustId: number, passphrase: string, serviceAccountPassword: string, serviceName: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addChildDomain`

    return this.client.request<HorizonViewTask>('POST', url, {activeDirectoryIP, domain, passphrase, serviceAccountPassword})
  }

  /**
   * addDomainController operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addDomainController#POST)
   */
  AddADomainControllerForThisDomain(domain: string, domainControllerIp: string, domainTrustId: number, serviceName: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainController`

    return this.client.request<HorizonViewTask>('POST', url, {domain, domainControllerIp})
  }

  /**
   * addDomainUserOnComposer operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addDomainUserOnComposer#POST)
   */
  AddADomainUserToAddYourDesktopInYourActiveDirectory(domain: string, domainTrustId: number, password: string, serviceName: string, username: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainUserOnComposer`

    return this.client.request<HorizonViewTask>('POST', url, {domain, password, username})
  }

  /**
   * createTrust operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/createTrust#POST)
   */
  /*
  ChangeHorizonViewUserPassword(domainTrustId: number, passphrase: string, serviceAccountPassword: string, serviceName: string): Promise<HorizonViewTask> {
    let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/createTrust`

    return this.client.request<HorizonViewTask>('POST', url, {passphrase, serviceAccountPassword})
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/horizonView/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/horizonView/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/horizonView/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

}
