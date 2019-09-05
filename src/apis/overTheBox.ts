// GENERATED SDK for overTheBox API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * 
 */
export enum OrderCurrencyCode {
  AUD = 'AUD',
  CAD = 'CAD',
  CZK = 'CZK',
  EUR = 'EUR',
  GBP = 'GBP',
  LTL = 'LTL',
  MAD = 'MAD',
  N_A = 'N/A',
  PLN = 'PLN',
  SGD = 'SGD',
  TND = 'TND',
  USD = 'USD',
  XOF = 'XOF',
  POINTS = 'points'
}

/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/*
 * Status of a task.
 */
export enum OverTheBoxActionStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Device action
 */
export interface OverTheBoxAvailableDeviceAction {
  description: string
  name: string
}

/**
 * Migration offer
 */
export interface OverTheBoxAvailableMigrationOffer {
  currentOfferPrice: OrderPrice
  description: string
  engagementMonths: number
  hardwareAvailable: boolean
  offer: string
  price: OrderPrice
}

/**
 * Backup
 */
export interface OverTheBoxBackup {
  backupId: string
  createdAt: string
  deviceActionId?: string
}

/**
 * Device
 */
export interface OverTheBoxDevice {
  activated: boolean
  deviceId: string
  lastSeen: string
  networkInterfaces: OverTheBoxDeviceInterface[]
  publicIp: string
  systemVersion: string
  version: string
}

/**
 * Device action
 */
export interface OverTheBoxDeviceAction {
  actionId: string
  createdAt: string
  details: string
  name: string
  status: OverTheBoxActionStatus
  todoDate: string
  updatedAt: string
}

/**
 * A device for registration
 */
export interface OverTheBoxDeviceForRegistration {
  activated: boolean
  deviceId: string
  lastSeen: string
}

/**
 * Infos about a network interface
 */
export interface OverTheBoxDeviceInterface {
  device?: string
  dnsServers?: string[]
  gateway?: string
  ip?: string
  multipathStatus: OverTheBoxMultipathStatus
  name: string
  netmask?: string
  publicIp?: string
}

/**
 * Parameters required to query metrics from OpenTSDB
 */
export interface OverTheBoxGraphEndpoint {
  host: string
  readToken: string
  readTokenID: string
}

/*
 * Status of a MPTCP Interface.
 */
export enum OverTheBoxMultipathStatus {
  BACKUP = 'backup',
  HANDOVER = 'handover',
  MASTER = 'master',
  OFF = 'off',
  ON = 'on'
}

/**
 * If authorized, a remote access will expose a port, allowing an access to the device remotely
 */
export interface OverTheBoxRemoteAccess {
  accepted: boolean
  askDate: string
  authorizedBy?: string
  connectionInfos: OverTheBoxRemoteAccessConnectionInfos
  expirationDate: string
  exposedPort: number
  remoteAccessId: string
  remoteUserInfos: OverTheBoxRemoteAccessUserInfos
  status: OverTheBoxRemoteAccessStatus
}

/**
 * All the infos needed to connect yourself to your OTB
 */
export interface OverTheBoxRemoteAccessConnectionInfos {
  ip?: string
  port?: number
}

/*
 * Status of the remote access.
 */
export enum OverTheBoxRemoteAccessStatus {
  ACTIVE = 'active',
  CREATING = 'creating',
  DELETED = 'deleted',
  DELETING = 'deleting',
  PENDINGVALIDATION = 'pendingValidation',
  TODELETE = 'toDelete'
}

/**
 * Infos about the remote user
 */
export interface OverTheBoxRemoteAccessUserInfos {
  ip: string
  publicKey?: string
  user: string
}

/**
 * Service
 */
export interface OverTheBoxService {
  customerDescription?: string
  graphEndpoint?: OverTheBoxGraphEndpoint
  releaseChannel: string
  serviceName: string
  SOCKSProxyEnabled: boolean
  status: OverTheBoxServiceStatus
  tunnelMode: OverTheBoxTunnelMode
}

/*
 * Status of the service.
 */
export enum OverTheBoxServiceStatus {
  ACTIVE = 'active',
  CREATING = 'creating',
  DELETED = 'deleted',
  SUSPENDED = 'suspended',
  TOCREATE = 'toCreate',
  TODELETE = 'toDelete'
}

/**
 * Task
 */
export interface OverTheBoxTask {
  name: string
  status: OverTheBoxTaskStatus
  taskId: string
}

/*
 * Status of a task.
 */
export enum OverTheBoxTaskStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Temporary url informations
 */
export interface OverTheBoxTemporaryLogsLink {
  expirationDate: string
  url: string
}

/*
 * Tunnel mode of the service.
 */
export enum OverTheBoxTunnelMode {
  GLORYTUN = 'glorytun',
  GLORYTUN_HYBRID = 'glorytun_hybrid',
  GLORYTUN_MUD = 'glorytun_mud'
}

/*
 * Enum of Offers
 */
export enum PriceOverTheBoxOffer {
  PLUS_V1 = 'plus.v1'
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


export class OverTheBox {
  constructor(private client: Client) {}

  /**
   * Operations about the OVERTHEBOX service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/overTheBox`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<OverTheBoxService> {
    let url = `/overTheBox/${serviceName}`

    return this.client.request<OverTheBoxService>('GET', url)
  }

  /**
   * Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: OverTheBoxService): Promise<void> {
    let url = `/overTheBox/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D#DELETE)
   */
  ResiliateAService(serviceName: string): Promise<void> {
    let url = `/overTheBox/${serviceName}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * availableReleaseChannels operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/availableReleaseChannels#GET)
   */
  ListAvailableReleaseChannelsForThisService(serviceName: string): Promise<string[]> {
    let url = `/overTheBox/${serviceName}/availableReleaseChannels`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the overTheBox.Backup objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/backups#GET)
   */
  ListOfBackupsForThisService(serviceName: string): Promise<string[]> {
    let url = `/overTheBox/${serviceName}/backups`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Backup [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/backups/%7BbackupId%7D#GET)
   */
  /*
  GetThisObjectProperties(backupId: string, serviceName: string): Promise<OverTheBoxBackup> {
    let url = `/overTheBox/${serviceName}/backups/${backupId}`

    return this.client.request<OverTheBoxBackup>('GET', url)
  }
  */

  /**
   * cancelResiliation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/cancelResiliation#POST)
   */
  CancelTheResiliationOfTheService(serviceName: string): Promise<void> {
    let url = `/overTheBox/${serviceName}/cancelResiliation`

    return this.client.request<void>('POST', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/overTheBox/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Device [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<OverTheBoxDevice> {
    let url = `/overTheBox/${serviceName}/device`

    return this.client.request<OverTheBoxDevice>('GET', url)
  }
  */

  /**
   * Device [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device#DELETE)
   */
  UnlinkADeviceFromAService(serviceName: string): Promise<void> {
    let url = `/overTheBox/${serviceName}/device`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the overTheBox.DeviceAction objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/actions#GET)
   */
  ListOfActionsScheduledForThisDevice(serviceName: string, name?: string, status?: OverTheBoxActionStatus): Promise<string[]> {
    let url = `/overTheBox/${serviceName}/device/actions?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the overTheBox.DeviceAction objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/actions#POST)
   */
  CreateADeviceActionOnTheDevice(name: string, serviceName: string): Promise<OverTheBoxDeviceAction> {
    let url = `/overTheBox/${serviceName}/device/actions`

    return this.client.request<OverTheBoxDeviceAction>('POST', url, {name})
  }

  /**
   * Device action [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/actions/%7BactionId%7D#GET)
   */
  /*
  GetThisObjectProperties(actionId: string, serviceName: string): Promise<OverTheBoxDeviceAction> {
    let url = `/overTheBox/${serviceName}/device/actions/${actionId}`

    return this.client.request<OverTheBoxDeviceAction>('GET', url)
  }
  */

  /**
   * availableActions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/availableActions#GET)
   */
  ListTheAvailableDeviceActions(serviceName: string): Promise<OverTheBoxAvailableDeviceAction[]> {
    let url = `/overTheBox/${serviceName}/device/availableActions`

    return this.client.request<OverTheBoxAvailableDeviceAction[]>('GET', url)
  }

  /**
   * backup operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/backup#POST)
   */
  CreateAnActionToGenerateABackup(serviceName: string): Promise<OverTheBoxDeviceAction> {
    let url = `/overTheBox/${serviceName}/device/backup`

    return this.client.request<OverTheBoxDeviceAction>('POST', url)
  }

  /**
   * logs operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/logs#POST)
   */
  GenerateATemporaryUrlToRetrieveDeviceLogs(serviceName: string): Promise<OverTheBoxTemporaryLogsLink> {
    let url = `/overTheBox/${serviceName}/device/logs`

    return this.client.request<OverTheBoxTemporaryLogsLink>('POST', url)
  }

  /**
   * restoreBackup operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/restoreBackup#POST)
   */
  CreateAGroupOfActionsToRestoreAGivenBackup(backupId: string, serviceName: string): Promise<OverTheBoxDeviceAction[]> {
    let url = `/overTheBox/${serviceName}/device/restoreBackup`

    return this.client.request<OverTheBoxDeviceAction[]>('POST', url, {backupId})
  }

  /**
   * linkDevice operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/linkDevice#POST)
   */
  LinkADeviceToThisService(deviceId: string, serviceName: string): Promise<void> {
    let url = `/overTheBox/${serviceName}/linkDevice`

    return this.client.request<void>('POST', url, {deviceId})
  }

  /**
   * offers operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/migration/offers#GET)
   */
  ListAllAvailableOffersOneCanMigrateTo(serviceName: string): Promise<OverTheBoxAvailableMigrationOffer[]> {
    let url = `/overTheBox/${serviceName}/migration/offers`

    return this.client.request<OverTheBoxAvailableMigrationOffer[]>('GET', url)
  }

  /**
   * List the overTheBox.RemoteAccess objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses#GET)
   */
  ListOfRemoteAccessesForTheService(serviceName: string): Promise<string[]> {
    let url = `/overTheBox/${serviceName}/remoteAccesses`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the overTheBox.RemoteAccess objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses#POST)
   */
  CreateANewRemoteAccessForTheService(exposedPort: number, serviceName: string, allowedIp?: string, expirationDate?: string, publicKey?: string): Promise<OverTheBoxRemoteAccess> {
    let url = `/overTheBox/${serviceName}/remoteAccesses`

    return this.client.request<OverTheBoxRemoteAccess>('POST', url, {exposedPort, allowedIp, expirationDate, publicKey})
  }

  /**
   * If authorized, a remote access will expose a port, allowing an access to the device remotely [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses/%7BremoteAccessId%7D#GET)
   */
  /*
  GetThisObjectProperties(remoteAccessId: string, serviceName: string): Promise<OverTheBoxRemoteAccess> {
    let url = `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`

    return this.client.request<OverTheBoxRemoteAccess>('GET', url)
  }
  */

  /**
   * If authorized, a remote access will expose a port, allowing an access to the device remotely [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses/%7BremoteAccessId%7D#DELETE)
   */
  DeleteARemoteAccess(remoteAccessId: string, serviceName: string): Promise<void> {
    let url = `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * authorize operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses/%7BremoteAccessId%7D/authorize#POST)
   */
  AuthorizeTheRemoteAccess(remoteAccessId: string, serviceName: string): Promise<void> {
    let url = `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}/authorize`

    return this.client.request<void>('POST', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/overTheBox/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/overTheBox/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the overTheBox.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/tasks#GET)
   */
  ListOfTasksScheduledForThisService(serviceName: string, name?: string, status?: OverTheBoxTaskStatus): Promise<string[]> {
    let url = `/overTheBox/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Task [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: string): Promise<OverTheBoxTask> {
    let url = `/overTheBox/${serviceName}/tasks/${taskId}`

    return this.client.request<OverTheBoxTask>('GET', url)
  }
  */

  /**
   * List the available offers for the new call [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/availableOffers#GET)
   */
  ListTheAvailableOffersForTheNewCall(): Promise<PriceOverTheBoxOfferEnum[]> {
    let url = `/overTheBox/availableOffers`

    return this.client.request<PriceOverTheBoxOfferEnum[]>('GET', url)
  }

  /**
   * Get the list of devices connected from the same IP address [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/devices#POST)
   */
  GetTheListOfDevicesConnectedFromTheSameIPAddress(): Promise<OverTheBoxDeviceForRegistration[]> {
    let url = `/overTheBox/devices`

    return this.client.request<OverTheBoxDeviceForRegistration[]>('POST', url)
  }

}
