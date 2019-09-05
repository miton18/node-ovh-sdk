// GENERATED SDK for router API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Network Dnat
 */
export interface RouterDnat {
  destinationPort?: number
  id: number
  newDestinationNet: any
  newDestinationPort?: number
  protocol: RouterProtocol
  sourceNet?: any
  status: RouterStatus
}

/*
 * All states this object can be in
 */
export enum RouterIpStatus {
  BLACKLISTED = 'blacklisted',
  DELETED = 'deleted',
  FREE = 'free',
  INSTALLING = 'installing',
  OK = 'ok',
  QUARANTINED = 'quarantined',
  REMOVING = 'removing',
  SUSPENDED = 'suspended'
}

/**
 * Network
 */
export interface RouterNetwork {
  creationDate: string
  description?: string
  id: number
  ipNet: any
  status: RouterIpStatus
  vlanTag?: number
}

/**
 * Private Link to another service
 */
export interface RouterPrivateLink {
  creationDate: string
  id: number
  name: string
  peerServiceName: string
  status: RouterStatus
}

/**
 * Received Private Link requests
 */
export interface RouterPrivateLinkRequest {
  creationDate: string
  status: RouterPrivLinkReqStatus
}

/**
 * Outgoing routes configured inside a Private Link
 */
export interface RouterPrivateLinkRoute {
  creationDate: string
  id: number
  network: string
  status: RouterStatus
}

/*
 * Action to be taken against the Private Link request
 */
export enum RouterPrivLinkReqAction {
  ACCEPT = 'accept',
  CANCEL = 'cancel',
  REJECT = 'reject'
}

/*
 * Request status of this private link (all links have to be accepted before being created)
 */
export enum RouterPrivLinkReqStatus {
  ACCEPTED = 'accepted',
  CANCELLED = 'cancelled',
  ERROR = 'error',
  PENDING = 'pending',
  REJECTED = 'rejected'
}

/*
 * Allowed protocols
 */
export enum RouterProtocol {
  ANY = 'any',
  TCP = 'tcp',
  UDP = 'udp'
}

/**
 * Router
 */
export interface RouterRouter {
  name: string
  service: string
  status: RouterStatus
}

/**
 * Network Snat
 */
export interface RouterSnat {
  destinationNet?: any
  destinationPort?: number
  id: number
  newSourceNet: any
  newSourcePort?: number
  protocol: RouterProtocol
  status: RouterStatus
}

/*
 * All states this object can be in
 */
export enum RouterStatus {
  CREATING = 'creating',
  ERROR = 'error',
  OFF = 'off',
  ON = 'on',
  REMOVING = 'removing',
  SUSPENDED = 'suspended'
}

/**
 * Task
 */
export interface RouterTask {
  creationDate: string
  finishDate?: string
  function: RouterTaskFunction
  id: number
  status: RouterTaskStatus
}

/*
 * All executable types of tasks
 */
export enum RouterTaskFunction {
  ADDDNAT = 'addDnat',
  ADDDNATMASTER = 'addDnatMaster',
  ADDNETWORK = 'addNetwork',
  ADDNETWORKMASTER = 'addNetworkMaster',
  ADDPRIVATELINK = 'addPrivateLink',
  ADDPRIVATELINKMASTER = 'addPrivateLinkMaster',
  ADDPRIVATELINKROUTE = 'addPrivateLinkRoute',
  ADDPRIVATELINKROUTEMASTER = 'addPrivateLinkRouteMaster',
  ADDSNAT = 'addSnat',
  ADDSNATMASTER = 'addSnatMaster',
  DELDNAT = 'delDnat',
  DELDNATMASTER = 'delDnatMaster',
  DELNETWORK = 'delNetwork',
  DELNETWORKMASTER = 'delNetworkMaster',
  DELPRIVATELINK = 'delPrivateLink',
  DELPRIVATELINKMASTER = 'delPrivateLinkMaster',
  DELPRIVATELINKROUTE = 'delPrivateLinkRoute',
  DELPRIVATELINKROUTEMASTER = 'delPrivateLinkRouteMaster',
  DELSNAT = 'delSnat',
  DELSNATMASTER = 'delSnatMaster',
  VPNCREATION = 'vpnCreation',
  VPNDELETION = 'vpnDeletion',
  VPNSETCONFIG = 'vpnSetConfig',
  VPNSETCONFIGMASTER = 'vpnSetConfigMaster',
  VPNSETSECRETS = 'vpnSetSecrets',
  VPNSETSECRETSMASTER = 'vpnSetSecretsMaster'
}

/*
 * All states a Task can be in
 */
export enum RouterTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Virtual Private Network
 */
export interface RouterVpn {
  clientIp?: string
  clientPrivNet: any
  id: number
  serverIp: string
  serverPrivNet: any
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


export class Router {
  constructor(private client: Client) {}

  /**
   * Operations about the ROUTER service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/router`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Router [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<RouterRouter> {
    let url = `/router/${serviceName}`

    return this.client.request<RouterRouter>('GET', url)
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/router/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the router.Network objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network#GET)
   */
  NetworksMountedOnThisRouter(serviceName: string): Promise<any> {
    let url = `/router/${serviceName}/network`

    return this.client.request<any>('GET', url)
  }

  /**
   * List the router.Network objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network#POST)
   */
  AddANetworkToYourRouter(description: string, ipNet: any, serviceName: string, vlanTag?: number): Promise<RouterTask> {
    let url = `/router/${serviceName}/network`

    return this.client.request<RouterTask>('POST', url, {description, ipNet, vlanTag})
  }

  /**
   * Network [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#GET)
   */
  /*
  GetThisObjectProperties(ipNet: any, serviceName: string): Promise<RouterNetwork> {
    let url = `/router/${serviceName}/network/${ipNet}`

    return this.client.request<RouterNetwork>('GET', url)
  }
  */

  /**
   * Network [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#PUT)
   */
  AlterThisObjectProperties(ipNet: any, serviceName: string, payload: RouterNetwork): Promise<void> {
    let url = `/router/${serviceName}/network/${ipNet}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Network [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#DELETE)
   */
  RemoveThisNetworkFromYourRouter(ipNet: any, serviceName: string): Promise<RouterTask> {
    let url = `/router/${serviceName}/network/${ipNet}`

    return this.client.request<RouterTask>('DELETE', url)
  }

  /**
   * List the router.PrivateLink objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink#GET)
   */
  PrivateLinksSetUpOnThisRouter(serviceName: string): Promise<string[]> {
    let url = `/router/${serviceName}/privateLink`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the router.PrivateLink objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink#POST)
   */
  AddANewPrivateLinkToYourRouterService(name: string, peerServiceName: string, serviceName: string): Promise<string> {
    let url = `/router/${serviceName}/privateLink`

    return this.client.request<string>('POST', url, {name, peerServiceName})
  }

  /**
   * Private Link to another service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#GET)
   */
  /*
  GetThisObjectProperties(peerServiceName: string, serviceName: string): Promise<RouterPrivateLink> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}`

    return this.client.request<RouterPrivateLink>('GET', url)
  }
  */

  /**
   * Private Link to another service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(peerServiceName: string, serviceName: string, payload: RouterPrivateLink): Promise<void> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Private Link to another service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#DELETE)
   */
  RemoveAnExistingPrivateLinkFromYourRouterService(peerServiceName: string, serviceName: string): Promise<RouterTask> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}`

    return this.client.request<RouterTask>('DELETE', url)
  }

  /**
   * Received Private Link requests [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/request#GET)
   */
  /*
  GetThisObjectProperties(peerServiceName: string, serviceName: string): Promise<RouterPrivateLinkRequest> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}/request`

    return this.client.request<RouterPrivateLinkRequest>('GET', url)
  }
  */

  /**
   * manage operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/request/manage#POST)
   */
  AcceptRejectOrCancelAPendingRequest(action: RouterPrivLinkReqAction, peerServiceName: string, serviceName: string): Promise<string> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}/request/manage`

    return this.client.request<string>('POST', url, {action})
  }

  /**
   * List the router.PrivateLinkRoute objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route#GET)
   */
  RoutesSetUpInAPrivateLink(peerServiceName: string, serviceName: string): Promise<string[]> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}/route`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the router.PrivateLinkRoute objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route#POST)
   */
  AddANewOutgoingRouteToYourRouter(network: string, peerServiceName: string, serviceName: string): Promise<RouterTask> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}/route`

    return this.client.request<RouterTask>('POST', url, {network})
  }

  /**
   * Outgoing routes configured inside a Private Link [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route/%7Bnetwork%7D#GET)
   */
  /*
  GetThisObjectProperties(network: string, peerServiceName: string, serviceName: string): Promise<RouterPrivateLinkRoute> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}/route/${network}`

    return this.client.request<RouterPrivateLinkRoute>('GET', url)
  }
  */

  /**
   * Outgoing routes configured inside a Private Link [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route/%7Bnetwork%7D#DELETE)
   */
  DeleteAnExistingRouteFromYourRouter(network: string, peerServiceName: string, serviceName: string): Promise<RouterTask> {
    let url = `/router/${serviceName}/privateLink/${peerServiceName}/route/${network}`

    return this.client.request<RouterTask>('DELETE', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/router/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/router/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the router.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/task#GET)
   */
  TasksForThisRouter(serviceName: string, _function?: RouterTaskFunction, status?: RouterTaskStatus): Promise<number[]> {
    let url = `/router/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<RouterTask> {
    let url = `/router/${serviceName}/task/${id}`

    return this.client.request<RouterTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/router/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the router.Vpn objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn#GET)
   */
  VPNAssociatedWithThisRouter(serviceName: string): Promise<number[]> {
    let url = `/router/${serviceName}/vpn`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the router.Vpn objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn#POST)
   */
  AddAVPNToYourRouter(clientPrivNet: any, psk: string, serverPrivNet: any, serviceName: string, clientIp?: string): Promise<RouterVpn> {
    let url = `/router/${serviceName}/vpn`

    return this.client.request<RouterVpn>('POST', url, {clientPrivNet, psk, serverPrivNet, clientIp})
  }

  /**
   * Virtual Private Network [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<RouterVpn> {
    let url = `/router/${serviceName}/vpn/${id}`

    return this.client.request<RouterVpn>('GET', url)
  }
  */

  /**
   * Virtual Private Network [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: RouterVpn): Promise<void> {
    let url = `/router/${serviceName}/vpn/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Virtual Private Network [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#DELETE)
   */
  DeleteAVPNFromYourRouter(id: number, serviceName: string): Promise<RouterTask> {
    let url = `/router/${serviceName}/vpn/${id}`

    return this.client.request<RouterTask>('DELETE', url)
  }

  /**
   * setPsk operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D/setPsk#POST)
   */
  ChangeYourVPNPSK(id: number, psk: string, serviceName: string): Promise<RouterTask> {
    let url = `/router/${serviceName}/vpn/${id}/setPsk`

    return this.client.request<RouterTask>('POST', url, {psk})
  }

}
