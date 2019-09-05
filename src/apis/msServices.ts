// GENERATED SDK for msServices API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Active Directory Account
 */
export interface MsServicesAccount {
  creationDate?: string
  displayName?: string
  firstName?: string
  guid?: string
  id: number
  initials?: string
  lastLogoffDate?: string
  lastLogonDate?: string
  lastName?: string
  lastUpdateDate?: string
  passwordLastUpdate?: string
  SAMAccountName?: string
  state: MsServicesObjectState
  taskPendingId: number
  userPrincipalName: string
}

/**
 * Active Directory organizational unit
 */
export interface MsServicesActiveDirectoryOrganizationalUnit {
  complexityEnabled: boolean
  lockoutDuration: number
  lockoutObservationWindow: number
  lockoutThreshold?: number
  maxPasswordAge?: number
  minPasswordAge?: number
  minPasswordLength?: number
  name: string
  officeTenantServiceName?: string
  state: MsServicesServiceState
  taskPendingId: number
}

/**
 * Temporary link to ADSync software executable
 */
export interface MsServicesActiveDirectorySyncClientUrl {
  expiration: string
  url: string
}

/**
 * Exchange mailbox information
 */
export interface MsServicesExchangeInformation {
  accountLicense: MsServicesExchangeLicence
  configured: boolean
  creationDate?: string
  currentUsage?: number
  deleteAtExpiration?: boolean
  deleteOutlookAtExpiration?: boolean
  exchangeGuid?: string
  expirationDate?: string
  expirationOutlookDate?: string
  hiddenFromGAL: boolean
  id: number
  litigation: boolean
  litigationPeriod?: number
  mailingFilter?: MsServicesMailingFilterEnum[]
  outlookLicense: boolean
  owaLimited: boolean
  primaryEmailAddress: string
  quota: number
  renewOutlookPeriod?: MsServicesRenewPeriod
  renewPeriod?: MsServicesRenewPeriod
  spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration
  spamDetected: boolean
  spamTicketNumber?: number
  state: MsServicesObjectState
  taskPendingId: number
}

/*
 * Exchange account licence
 */
export enum MsServicesExchangeLicence {
  BASIC = 'basic',
  ENTERPRISE = 'enterprise',
  STANDARD = 'standard'
}

/**
 * Exchange service
 */
export interface MsServicesExchangeService {
  displayName?: string
  domain: string
  hostname?: string
  maxReceiveSize: number
  maxSendSize: number
  offer: MsServicesServiceOffer
  spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration
  sslExpirationDate?: string
  state: MsServicesServiceState
  taskPendingId: number
}

/**
 * Exchange task details
 */
export interface MsServicesexchangeTask {
  finishDate?: string
  function: string
  id: number
  status: MsServicesTaskStatus
  todoDate: string
}

/*
 * Period of time used to determine license statistics
 */
export enum MsServicesLicensePeriod {
  LASTMONTH = 'lastMonth',
  LASTQUARTER = 'lastQuarter',
  LASTWEEK = 'lastWeek',
  LASTYEAR = 'lastYear'
}

/*
 * Mailing filter options availlable
 */
export enum MsServicesMailingFilter {
  VADERETRO = 'vaderetro'
}

/**
 * Multi Factor Authentication informations
 */
export interface MsServicesMfaInformation {
  activated: boolean
  state: MsServicesObjectState
  taskPendingId: number
}

/*
 * Current object state
 */
export enum MsServicesObjectState {
  CREATING = 'creating',
  DELETING = 'deleting',
  MODIFYING = 'modifying',
  OK = 'ok',
  REOPENING = 'reopening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending'
}

/*
 * Renew period
 */
export enum MsServicesRenewPeriod {
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

/*
 * Service Offer name
 */
export enum MsServicesServiceOffer {
  DEDICATED = 'dedicated',
  DEDICATEDCLUSTER = 'dedicatedCluster',
  HOSTED = 'hosted',
  PROVIDER = 'provider'
}

/*
 * Service State
 */
export enum MsServicesServiceState {
  CREATING = 'creating',
  DELETING = 'deleting',
  INMAINTENANCE = 'inMaintenance',
  OK = 'ok',
  REOPENING = 'reopening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending'
}

/*
 * Account access rights to the service
 */
export enum MsServicesSharepointAccountAccessRights {
  ADMINISTRATOR = 'administrator',
  USER = 'user'
}

/**
 * Sharepoint account license
 */
export interface MsServicesSharepointAccountLicense {
  license: MsServicesSharepointLicense
  licenseQuantity: number
}

/**
 * Sharepoint account license per day
 */
export interface MsServicesSharepointDailyLicense {
  accountLicense: MsServicesSharepointAccountLicense[]
  date: string
}

/**
 * Sharepoint account information
 */
export interface MsServicesSharepointInformation {
  accessRights: MsServicesSharepointAccountAccessRights
  activeDirectoryAccountId: number
  configured: boolean
  currentUsage?: number
  deleteAtExpiration?: boolean
  id: number
  license: MsServicesSharepointLicense
  officeLicense: boolean
  quota: number
  state: MsServicesObjectState
  taskPendingId: number
}

/*
 * Sharepoint account license
 */
export enum MsServicesSharepointLicense {
  FOUNDATION = 'foundation',
  STANDARD = 'standard'
}

/**
 * Sharepoint service
 */
export interface MsServicesSharepointService {
  currentUsage?: number
  displayName?: string
  domain: string
  farmUrl: string
  offer: MsServicesSharepointServiceOffer
  quota: number
  state: MsServicesServiceState
  taskPendingId: number
  url?: string
}

/**
 * Sharepoint service
 */
export interface MsServicesSharepointServiceInfo {
  domain: string
}

/*
 * Sharepoint service offer name
 */
export enum MsServicesSharepointServiceOffer {
  HOSTED = 'hosted',
  PROVIDER = 'provider'
}

/**
 * Sharepoint task details
 */
export interface MsServicessharepointTask {
  finishDate?: string
  function: string
  id: number
  status: MsServicesTaskStatus
  todoDate: string
}

/**
 * Spam and Antivirus configuration
 */
export interface MsServicesSpamAndVirusConfiguration {
  checkDKIM: boolean
  checkSPF: boolean
  deleteSpam: boolean
  deleteVirus: boolean
  putInJunk: boolean
  tagSpam: boolean
  tagVirus: boolean
}

/**
 * Sync account license
 */
export interface MsServicesSyncAccountLicense {
  license: MsServicesSyncLicense
  licenseQuantity: number
}

/**
 * Sync account license per day
 */
export interface MsServicesSyncDailyLicense {
  accountLicense: MsServicesSyncAccountLicense[]
  date: string
}

/**
 * Sync account information
 */
export interface MsServicesSyncInformation {
  configured: boolean
  license: MsServicesSyncLicense
  state: MsServicesObjectState
  taskPendingId: number
}

/*
 * Sync account license
 */
export enum MsServicesSyncLicense {
  STANDARD = 'standard',
  STANDARDFREE = 'standardFree'
}

/**
 * Sync service
 */
export interface MsServicesSyncService {
  state: MsServicesServiceState
  taskPendingId: number
}

/**
 * Active Directory task details
 */
export interface MsServicesTask {
  finishDate?: string
  function: MsServicesTaskFunction
  id: number
  status: MsServicesTaskStatus
  todoDate: string
}

/*
 * function enumeration for Active Directory task
 */
export enum MsServicesTaskFunction {
  ACTIVATEADSYNC = 'activateADSync',
  ACTIVATESHAREPOINT = 'activateSharepoint',
  ADDADACCOUNT = 'addADAccount',
  ADDADOU = 'addADOU',
  ADDADSYNCACCOUNT = 'addADSyncAccount',
  ADDADUPNSUFFIX = 'addADUPNSuffix',
  ALTERMFAONALLUSERS = 'alterMfaOnAllUsers',
  CHANGEADPASSWORD = 'changeADPassword',
  CHANGEADSYNCPASSWORD = 'changeADSyncPassword',
  CONFIGUREEXCHANGEOWAMFA = 'configureExchangeOwaMfa',
  DEACTIVATEADSYNC = 'deactivateADSync',
  DELADOU = 'delADOU',
  DELETEADACCOUNT = 'deleteADAccount',
  DELETEADSYNCACCOUNT = 'deleteADSyncAccount',
  DELETEADUPNSUFFIX = 'deleteADUPNSuffix',
  DISABLEADACCOUNTMFA = 'disableADAccountMfa',
  DISABLEADACCOUNTMFATEMPORARY = 'disableADAccountMfaTemporary',
  ENABLEADACCOUNTMFA = 'enableADAccountMfa',
  ENABLEADSYNCACCOUNT = 'enableADSyncAccount',
  GENERATEADSYNCCLIENTURL = 'generateADSyncClientUrl',
  RESETADACCOUNTMFA = 'resetADAccountMfa',
  SETADACCOUNT = 'setADAccount',
  SETPASSWORDPOLICY = 'setPasswordPolicy'
}

/*
 * ActiveDirectory task status
 */
export enum MsServicesTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/*
 * Active Directory UPN Suffix State
 */
export enum MsServicesUPNState {
  CREATING = 'creating',
  DELETING = 'deleting',
  OK = 'ok'
}

/**
 * Active Directory UPN Suffix
 */
export interface MsServicesupnSuffix {
  cnameToCheck?: string
  ownershipValidated: boolean
  state: MsServicesUPNState
  suffix: string
  taskPendingId: number
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


export class MsServices {
  constructor(private client: Client) {}

  /**
   * Operations about the MSSERVICES service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/msServices`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Active Directory organizational unit [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<MsServicesActiveDirectoryOrganizationalUnit> {
    let url = `/msServices/${serviceName}`

    return this.client.request<MsServicesActiveDirectoryOrganizationalUnit>('GET', url)
  }

  /**
   * Active Directory organizational unit [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: MsServicesActiveDirectoryOrganizationalUnit): Promise<void> {
    let url = `/msServices/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the msServices.Account objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account#GET)
   */
  AccountsAssociatedToThisActiveDirectoryService(serviceName: string, id?: number, userPrincipalName?: string): Promise<string[]> {
    let url = `/msServices/${serviceName}/account?`

    const queryParams = new QueryParams()
    if (id) { queryParams.set('id', id.toString()) }
    if (userPrincipalName) { queryParams.set('userPrincipalName', userPrincipalName) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Active Directory Account [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesAccount> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}`

    return this.client.request<MsServicesAccount>('GET', url)
  }
  */

  /**
   * Active Directory Account [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, userPrincipalName: string, payload: MsServicesAccount): Promise<void> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * changePassword operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/changePassword#POST)
   */
  ChangeAccountPassword(password: string, serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/changePassword`

    return this.client.request<MsServicesTask>('POST', url, {password})
  }

  /**
   * Exchange mailbox information [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/exchange#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesExchangeInformation> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/exchange`

    return this.client.request<MsServicesExchangeInformation>('GET', url)
  }
  */

  /**
   * Exchange mailbox information [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/exchange#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, userPrincipalName: string, payload: MsServicesExchangeInformation): Promise<void> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/exchange`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * configure operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/exchange/configure#POST)
   */
  ConfigureMailboxToBeOperational(serviceName: string, userPrincipalName: string): Promise<MsServicesexchangeTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/exchange/configure`

    return this.client.request<MsServicesexchangeTask>('POST', url)
  }

  /**
   * Multi Factor Authentication informations [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesMfaInformation> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa`

    return this.client.request<MsServicesMfaInformation>('GET', url)
  }
  */

  /**
   * Multi Factor Authentication informations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa#POST)
   */
  CreateMultiFactorAuthenticationForThisAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa`

    return this.client.request<MsServicesTask>('POST', url)
  }

  /**
   * Multi Factor Authentication informations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa#DELETE)
   */
  DeleteMultiFactorAuthenticationFeatureForThisAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa`

    return this.client.request<MsServicesTask>('DELETE', url)
  }

  /**
   * disable operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa/disable#POST)
   */
  DisableMultiFactorAuthenticationForAPeriodOfTime(period: number, serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa/disable`

    return this.client.request<MsServicesTask>('POST', url, {period})
  }

  /**
   * enable operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa/enable#POST)
   */
  EnableMfaEnabledByDefaultWhenCreated(serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa/enable`

    return this.client.request<MsServicesTask>('POST', url)
  }

  /**
   * reset operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa/reset#POST)
   */
  ResetMultiFactorAuthenticationStatusForThisAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa/reset`

    return this.client.request<MsServicesTask>('POST', url)
  }

  /**
   * Sharepoint account information [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesSharepointInformation> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint`

    return this.client.request<MsServicesSharepointInformation>('GET', url)
  }
  */

  /**
   * Sharepoint account information [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, userPrincipalName: string, payload: MsServicesSharepointInformation): Promise<void> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * clearSpace operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint/clearSpace#POST)
   */
  OndemandMySiteClearance(serviceName: string, userPrincipalName: string): Promise<MsServicessharepointTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/clearSpace`

    return this.client.request<MsServicessharepointTask>('POST', url)
  }

  /**
   * configure operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint/configure#POST)
   */
  ConfigureSharepointAccountToBeOperational(serviceName: string, userPrincipalName: string): Promise<MsServicessharepointTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/configure`

    return this.client.request<MsServicessharepointTask>('POST', url)
  }

  /**
   * Sync account information [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesSyncInformation> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync`

    return this.client.request<MsServicesSyncInformation>('GET', url)
  }
  */

  /**
   * Sync account information [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync#POST)
   */
  CreateNewSyncAccount(license: MsServicesSyncLicense, serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync`

    return this.client.request<MsServicesTask>('POST', url, {license})
  }

  /**
   * Sync account information [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync#DELETE)
   */
  DeleteSyncAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync`

    return this.client.request<MsServicesTask>('DELETE', url)
  }

  /**
   * configure operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync/configure#POST)
   */
  ConfigureSyncAccountToBeOperational(serviceName: string, userPrincipalName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync/configure`

    return this.client.request<MsServicesTask>('POST', url)
  }

  /**
   * createMfaOnAllUsers operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/createMfaOnAllUsers#POST)
   */
  CreateMfaOnAllAccounts(serviceName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/createMfaOnAllUsers`

    return this.client.request<MsServicesTask>('POST', url)
  }

  /**
   * Exchange service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<MsServicesExchangeService> {
    let url = `/msServices/${serviceName}/exchange`

    return this.client.request<MsServicesExchangeService>('GET', url)
  }
  */

  /**
   * Exchange service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: MsServicesExchangeService): Promise<void> {
    let url = `/msServices/${serviceName}/exchange`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * billingMigrated operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange/billingMigrated#GET)
   */
  DetectsBillingTransitionStatusForTheService(serviceName: string): Promise<boolean> {
    let url = `/msServices/${serviceName}/exchange/billingMigrated`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * List the msServices.exchangeTask objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange/task#GET)
   */
  PendingActions(serviceName: string): Promise<number[]> {
    let url = `/msServices/${serviceName}/exchange/task`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Exchange task details [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<MsServicesexchangeTask> {
    let url = `/msServices/${serviceName}/exchange/task/${id}`

    return this.client.request<MsServicesexchangeTask>('GET', url)
  }
  */

  /**
   * removeMfaOnAllUsers operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/removeMfaOnAllUsers#POST)
   */
  RemoveMfaOnAllAccounts(serviceName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/removeMfaOnAllUsers`

    return this.client.request<MsServicesTask>('POST', url)
  }

  /**
   * Sharepoint service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<MsServicesSharepointService> {
    let url = `/msServices/${serviceName}/sharepoint`

    return this.client.request<MsServicesSharepointService>('GET', url)
  }
  */

  /**
   * Sharepoint service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: MsServicesSharepointService): Promise<void> {
    let url = `/msServices/${serviceName}/sharepoint`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * billingMigrated operations [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/billingMigrated#GET)
   */
  /*
  DetectsBillingTransitionStatusForTheService(serviceName: string): Promise<boolean> {
    let url = `/msServices/${serviceName}/sharepoint/billingMigrated`

    return this.client.request<boolean>('GET', url)
  }
  */

  /**
   * license operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/license#GET)
   */
  GetActiveLicensesForSpecificPeriodOfTime(period: MsServicesLicensePeriod, serviceName: string, license?: MsServicesSharepointLicense): Promise<MsServicesSharepointDailyLicense[]> {
    let url = `/msServices/${serviceName}/sharepoint/license?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (license) { queryParams.set('license', license.toString()) }

    return this.client.request<MsServicesSharepointDailyLicense[]>('GET', url+queryParams.toString())
  }

  /**
   * restoreAdminRights operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/restoreAdminRights#POST)
   */
  RestoreAdministratorRights(serviceName: string): Promise<MsServicessharepointTask> {
    let url = `/msServices/${serviceName}/sharepoint/restoreAdminRights`

    return this.client.request<MsServicessharepointTask>('POST', url)
  }

  /**
   * List the msServices.sharepointTask objects [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/task#GET)
   */
  /*
  PendingActions(serviceName: string, _function?: string, status?: MsServicesTaskStatus): Promise<number[]> {
    let url = `/msServices/${serviceName}/sharepoint/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Sharepoint task details [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<MsServicessharepointTask> {
    let url = `/msServices/${serviceName}/sharepoint/task/${id}`

    return this.client.request<MsServicessharepointTask>('GET', url)
  }
  */

  /**
   * Sync service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<MsServicesSyncService> {
    let url = `/msServices/${serviceName}/sync`

    return this.client.request<MsServicesSyncService>('GET', url)
  }
  */

  /**
   * Sync service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync#DELETE)
   */
  DeleteSyncService(serviceName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/sync`

    return this.client.request<MsServicesTask>('DELETE', url)
  }

  /**
   * changePassword operations [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/changePassword#POST)
   */
  /*
  ChangeAccountPassword(password: string, serviceName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/sync/changePassword`

    return this.client.request<MsServicesTask>('POST', url, {password})
  }
  */

  /**
   * Temporary link to ADSync software executable [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/clientSoftwareURL#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<MsServicesActiveDirectorySyncClientUrl> {
    let url = `/msServices/${serviceName}/sync/clientSoftwareURL`

    return this.client.request<MsServicesActiveDirectorySyncClientUrl>('GET', url)
  }
  */

  /**
   * Temporary link to ADSync software executable [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/clientSoftwareURL#POST)
   */
  GenerateTemporaryLinkToADSyncSoftwareExecutable(serviceName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/sync/clientSoftwareURL`

    return this.client.request<MsServicesTask>('POST', url)
  }

  /**
   * license operations [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/license#GET)
   */
  /*
  GetActiveLicensesForSpecificPeriodOfTime(period: MsServicesLicensePeriod, serviceName: string, license?: MsServicesSyncLicense): Promise<MsServicesSyncDailyLicense[]> {
    let url = `/msServices/${serviceName}/sync/license?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (license) { queryParams.set('license', license.toString()) }

    return this.client.request<MsServicesSyncDailyLicense[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * List the msServices.Task objects [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/task#GET)
   */
  /*
  PendingActions(serviceName: string, _function?: MsServicesTaskFunction, status?: MsServicesTaskStatus): Promise<number[]> {
    let url = `/msServices/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Active Directory task details [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/task/${id}`

    return this.client.request<MsServicesTask>('GET', url)
  }
  */

  /**
   * List the msServices.upnSuffix objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix#GET)
   */
  ActiveDirectoryUPNSuffix(serviceName: string): Promise<string[]> {
    let url = `/msServices/${serviceName}/upnSuffix`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the msServices.upnSuffix objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix#POST)
   */
  CreateNewUPNSuffix(serviceName: string, suffix: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/upnSuffix`

    return this.client.request<MsServicesTask>('POST', url, {suffix})
  }

  /**
   * Active Directory UPN Suffix [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix/%7Bsuffix%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, suffix: string): Promise<MsServicesupnSuffix> {
    let url = `/msServices/${serviceName}/upnSuffix/${suffix}`

    return this.client.request<MsServicesupnSuffix>('GET', url)
  }
  */

  /**
   * Active Directory UPN Suffix [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix/%7Bsuffix%7D#DELETE)
   */
  DeleteExistingUPNSuffix(serviceName: string, suffix: string): Promise<MsServicesTask> {
    let url = `/msServices/${serviceName}/upnSuffix/${suffix}`

    return this.client.request<MsServicesTask>('DELETE', url)
  }

  /**
   * Operations about the SHAREPOINT service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/sharepoint#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/msServices/sharepoint`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Sharepoint service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/sharepoint/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string): Promise<MsServicesSharepointServiceInfo> {
    let url = `/msServices/sharepoint/${domain}`

    return this.client.request<MsServicesSharepointServiceInfo>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/sharepoint/%7Bdomain%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(domain: string): Promise<ServicesService> {
    let url = `/msServices/sharepoint/${domain}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/sharepoint/%7Bdomain%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(domain: string, payload: ServicesService): Promise<void> {
    let url = `/msServices/sharepoint/${domain}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

}
