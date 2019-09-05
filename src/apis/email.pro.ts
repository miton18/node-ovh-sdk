// GENERATED SDK for email/pro API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Mailbox
 */
export interface EmailproAccount {
  configured: boolean
  creationDate?: string
  currentUsage?: number
  deleteAtExpiration?: boolean
  displayName?: string
  domain: string
  expirationDate?: string
  expirationOutlookDate?: string
  firstName?: string
  hiddenFromGAL: boolean
  id: number
  initial?: string
  lastLogoffDate?: string
  lastLogonDate?: string
  lastName?: string
  lastUpdateDate?: string
  login: string
  mailingFilter?: EmailproMailingFilterEnum[]
  passwordLastUpdate?: string
  primaryEmailAddress: string
  quota: number
  renewPeriod?: EmailprorenewPeriod
  SAMAccountName?: string
  spamAndVirusConfiguration: EmailprospamAndVirusConfiguration
  spamDetected: boolean
  spamTicketNumber?: number
  state: EmailproObjectState
  taskPendingId: number
}

/**
 * Aliases on this mailbox
 */
export interface EmailproAccountAlias {
  alias: string
  creationDate: string
  taskPendingId: number
}

/**
 * Account Diagnosis
 */
export interface EmailproAccountDiagnosis {
  canReceiveEmail: boolean
  canSendEmail: boolean
  connectiveWebmail: boolean
  isLocked: boolean
  isMxValid: boolean
  isSpammer: boolean
  isSrvValid: boolean
  isSuspended: boolean
  lastCheck: string
}

/**
 * Users having full access on this mailbox
 */
export interface EmailproAccountFullAccess {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Users authorized to send mails from this mailbox
 */
export interface EmailproAccountSendAs {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Get users authorized to Send On Behalf To mails from this mailbox
 */
export interface EmailproAccountSendOnBehalfTo {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * disclaimer
 */
export interface Emailprodisclaimer {
  content: string
  creationDate: string
  name: string
  outsideOnly: boolean
  taskPendingId: number
}

/*
 * Disclaimer attributes list
 */
export enum EmailproDisclaimerAttribute {
  CITY = 'City',
  COMPANY = 'Company',
  COUNTRY = 'Country',
  DEPARTMENT = 'Department',
  DISPLAYNAME = 'DisplayName',
  EMAIL = 'Email',
  FAXNUMBER = 'FaxNumber',
  FIRSTNAME = 'FirstName',
  HOMEPHONENUMBER = 'HomePhoneNumber',
  INITIALS = 'Initials',
  LASTNAME = 'LastName',
  MANAGER = 'Manager',
  MOBILENUMBER = 'MobileNumber',
  NOTES = 'Notes',
  OFFICE = 'Office',
  OTHERFAXNUMBER = 'OtherFaxNumber',
  OTHERHOMEPHONENUMBER = 'OtherHomePhoneNumber',
  OTHERPHONENUMBER = 'OtherPhoneNumber',
  PAGERNUMBER = 'PagerNumber',
  PHONENUMBER = 'PhoneNumber',
  STATE = 'State',
  STREET = 'Street',
  TITLE = 'Title',
  USERLOGONNAME = 'UserLogonName',
  ZIPCODE = 'ZipCode'
}

/**
 * Domain
 */
export interface EmailproDomain {
  cnameToCheck?: string
  domainAliases: string[]
  domainValidated: boolean
  isAliasDomain: boolean
  mxIsValid: boolean
  mxRecord?: string[]
  mxRelay?: string
  name: string
  srvIsValid: boolean
  srvRecord?: string[]
  state: EmailproObjectState
  taskPendingId: number
  type: EmailproDomainType
}

/*
 * Domain type
 */
export enum EmailproDomainType {
  AUTHORITATIVE = 'authoritative',
  NONAUTHORITATIVE = 'nonAuthoritative'
}

/**
 * External contact for this pro service
 */
export interface EmailproExternalContact {
  creationDate: string
  displayName: string
  externalEmailAddress: string
  firstName?: string
  hiddenFromGAL: boolean
  id: number
  initials?: string
  lastName?: string
  state: EmailproObjectState
  taskPendingId: number
}

/*
 * Mailing filter options availlable
 */
export enum EmailproMailingFilter {
  VADERETRO = 'vaderetro'
}

/*
 * Current object state
 */
export enum EmailproObjectState {
  CREATING = 'creating',
  DELETING = 'deleting',
  OK = 'ok',
  REOPENING = 'reopening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending',
  UNKNOWN = 'unknown'
}

/*
 * Renew period
 */
export enum EmailprorenewPeriod {
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

/**
 * Server
 */
export interface EmailproServer {
  currentDiskUsage?: number
  diskSize?: number
  ip: string
  ipV6?: string
  isAaaaValid: boolean
  isAValid: boolean
  isPtrV6Valid: boolean
  isPtrValid: boolean
  state: EmailproServerState
  taskPendingId: number
  version?: number
}

/*
 * Server State
 */
export enum EmailproServerState {
  CONFIGURATIONPENDING = 'configurationPending',
  NOTCONFIGURED = 'notConfigured',
  OK = 'ok'
}

/**
 * Email pro service
 */
export interface EmailproService {
  complexityEnabled: boolean
  displayName?: string
  domain: string
  hostname?: string
  lastUpdateDate?: string
  lockoutDuration: number
  lockoutObservationWindow: number
  lockoutThreshold?: number
  maxPasswordAge?: number
  maxReceiveSize: number
  maxSendSize: number
  minPasswordAge?: number
  minPasswordLength?: number
  offer: EmailproServiceOffer
  spamAndVirusConfiguration: EmailprospamAndVirusConfiguration
  state: EmailproServiceState
  taskPendingId: number
  webUrl?: string
}

/*
 * Service Offer name
 */
export enum EmailproServiceOffer {
  EMAILPRO = 'emailpro'
}

/*
 * Service State
 */
export enum EmailproServiceState {
  CREATING = 'creating',
  DELETING = 'deleting',
  INMAINTENANCE = 'inMaintenance',
  OK = 'ok',
  REOPENING = 'reopening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending'
}

/**
 * Spam and Antyvirus configuration
 */
export interface EmailprospamAndVirusConfiguration {
  checkDKIM: boolean
  checkSPF: boolean
  deleteSpam: boolean
  deleteVirus: boolean
  putInJunk: boolean
  tagSpam: boolean
  tagVirus: boolean
}

/**
 * Organization task details
 */
export interface EmailproTask {
  finishDate?: string
  function: EmailproTaskFunction
  id: number
  status: EmailproTaskStatus
  todoDate: string
}

/*
 * function enumeration for task
 */
export enum EmailproTaskFunction {
  ADDACCOUNT = 'addAccount',
  ADDALIAS = 'addAlias',
  ADDDOMAIN = 'addDomain',
  ADDDOMAINDISCLAIMER = 'addDomainDisclaimer',
  ADDEXTERNALCONTACT = 'addExternalContact',
  ADDFULLACCESS = 'addFullAccess',
  ADDSENDAS = 'addSendAs',
  ADDSENDONBEHALFTO = 'addSendOnBehalfTo',
  ADDSERVICEAUTHORIZEDIP = 'addServiceAuthorizedIp',
  CHANGEHOSTNAME = 'changeHostname',
  CHANGEPASSWORD = 'changePassword',
  CONFIGURECUSTOMER = 'configureCustomer',
  DELETEACCOUNT = 'deleteAccount',
  DELETEALIAS = 'deleteAlias',
  DELETEDOMAIN = 'deleteDomain',
  DELETEDOMAINDISCLAIMER = 'deleteDomainDisclaimer',
  DELETEEXTERNALCONTACT = 'deleteExternalContact',
  DELETEFULLACCESS = 'deleteFullAccess',
  DELETESENDAS = 'deleteSendAs',
  DELETESENDONBEHALFTO = 'deleteSendOnBehalfTo',
  DELETESERVICE = 'deleteService',
  DELETESERVICEAUTHORIZEDIP = 'deleteServiceAuthorizedIp',
  DIAGNOSEACCOUNT = 'diagnoseAccount',
  EXPANDDRIVE = 'expandDrive',
  INSTALLSERVER = 'installServer',
  MAINTENANCE = 'maintenance',
  MIGRATEACCOUNTVIAOMM = 'migrateAccountViaOMM',
  MIGRATIONACCOUNT = 'migrationAccount',
  MIGRATIONDISCLAIMER = 'migrationDisclaimer',
  MIGRATIONEXTERNALCONTACT = 'migrationExternalContact',
  MIGRATIONHISTORY = 'migrationHistory',
  MIGRATIONSERVICE = 'migrationService',
  REOPENACCOUNT = 'reOpenAccount',
  SETACCOUNT = 'setAccount',
  SETALIAS = 'setAlias',
  SETDNS = 'setDns',
  SETDOMAIN = 'setDomain',
  SETDOMAINDISCLAIMER = 'setDomainDisclaimer',
  SETEXTERNALCONTACT = 'setExternalContact',
  SETSERVICE = 'setService',
  SUSPENDACCOUNT = 'suspendAccount',
  SUSPENDSERVICE = 'suspendService',
  UNKNOWN = 'unknown',
  UNSUSPENDACCOUNT = 'unsuspendAccount',
  UNSUSPENDSERVICE = 'unsuspendService'
}

/*
 * Task status
 */
export enum EmailproTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
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


export class EmailPro {
  constructor(private client: Client) {}

  /**
   * Operations about the PROEMAIL service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/email/pro`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Email pro service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D#GET)
   */
  GetThisObjectProperties(service: string): Promise<EmailproService> {
    let url = `/email/pro/${service}`

    return this.client.request<EmailproService>('GET', url)
  }

  /**
   * Email pro service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D#PUT)
   */
  AlterThisObjectProperties(service: string, payload: EmailproService): Promise<void> {
    let url = `/email/pro/${service}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the email.pro.Account objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account#GET)
   */
  AccountsAssociatedToThisProService(service: string, id?: number, primaryEmailAddress?: string): Promise<string[]> {
    let url = `/email/pro/${service}/account?`

    const queryParams = new QueryParams()
    if (id) { queryParams.set('id', id.toString()) }
    if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Mailbox [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D#GET)
   */
  /*
  GetThisObjectProperties(email: string, service: string): Promise<EmailproAccount> {
    let url = `/email/pro/${service}/account/${email}`

    return this.client.request<EmailproAccount>('GET', url)
  }
  */

  /**
   * Mailbox [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D#PUT)
   */
  /*
  AlterThisObjectProperties(email: string, service: string, payload: EmailproAccount): Promise<void> {
    let url = `/email/pro/${service}/account/${email}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Mailbox [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D#DELETE)
   */
  DeleteExistingMailboxInProServer(email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * List the email.pro.AccountAlias objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias#GET)
   */
  AliasesAssociatedToThisMailbox(email: string, service: string): Promise<string[]> {
    let url = `/email/pro/${service}/account/${email}/alias`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the email.pro.AccountAlias objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias#POST)
   */
  CreateNewAlias(alias: string, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/alias`

    return this.client.request<EmailproTask>('POST', url, {alias})
  }

  /**
   * Aliases on this mailbox [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias/%7Balias%7D#GET)
   */
  /*
  GetThisObjectProperties(alias: string, email: string, service: string): Promise<EmailproAccountAlias> {
    let url = `/email/pro/${service}/account/${email}/alias/${alias}`

    return this.client.request<EmailproAccountAlias>('GET', url)
  }
  */

  /**
   * Aliases on this mailbox [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias/%7Balias%7D#DELETE)
   */
  DeleteExistingAlias(alias: string, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/alias/${alias}`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * changePassword operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/changePassword#POST)
   */
  ChangeMailboxPassword(email: string, password: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/changePassword`

    return this.client.request<EmailproTask>('POST', url, {password})
  }

  /**
   * Account Diagnosis [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/diagnostics#GET)
   */
  /*
  GetThisObjectProperties(email: string, service: string): Promise<EmailproAccountDiagnosis> {
    let url = `/email/pro/${service}/account/${email}/diagnostics`

    return this.client.request<EmailproAccountDiagnosis>('GET', url)
  }
  */

  /**
   * Account Diagnosis [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/diagnostics#POST)
   */
  CreateNewDiagnosisRequest(email: string, password: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/diagnostics`

    return this.client.request<EmailproTask>('POST', url, {password})
  }

  /**
   * List the email.pro.AccountFullAccess objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess#GET)
   */
  FullAccessGrantedUsersForThisMailbox(email: string, service: string): Promise<number[]> {
    let url = `/email/pro/${service}/account/${email}/fullAccess`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.pro.AccountFullAccess objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess#POST)
   */
  AllowFullAccessToAUser(allowedAccountId: number, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/fullAccess`

    return this.client.request<EmailproTask>('POST', url, {allowedAccountId})
  }

  /**
   * Users having full access on this mailbox [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, email: string, service: string): Promise<EmailproAccountFullAccess> {
    let url = `/email/pro/${service}/account/${email}/fullAccess/${allowedAccountId}`

    return this.client.request<EmailproAccountFullAccess>('GET', url)
  }
  */

  /**
   * Users having full access on this mailbox [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess/%7BallowedAccountId%7D#DELETE)
   */
  RevokeFullAccess(allowedAccountId: number, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/fullAccess/${allowedAccountId}`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * List the email.pro.AccountSendAs objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs#GET)
   */
  SendAsGrantedUsersForThisMailbox(email: string, service: string): Promise<number[]> {
    let url = `/email/pro/${service}/account/${email}/sendAs`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.pro.AccountSendAs objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs#POST)
   */
  AllowAnotherUserToSendMailsFromThisMailbox(allowAccountId: number, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/sendAs`

    return this.client.request<EmailproTask>('POST', url, {allowAccountId})
  }

  /**
   * Users authorized to send mails from this mailbox [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, email: string, service: string): Promise<EmailproAccountSendAs> {
    let url = `/email/pro/${service}/account/${email}/sendAs/${allowedAccountId}`

    return this.client.request<EmailproAccountSendAs>('GET', url)
  }
  */

  /**
   * Users authorized to send mails from this mailbox [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs/%7BallowedAccountId%7D#DELETE)
   */
  DeleteAllowedUserForSendAs(allowedAccountId: number, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/sendAs/${allowedAccountId}`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * List the email.pro.AccountSendOnBehalfTo objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo#GET)
   */
  SendOnBehalfToGrantedUsersForThisMailbox(email: string, service: string): Promise<number[]> {
    let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.pro.AccountSendOnBehalfTo objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo#POST)
   */
  AllowAnotherUserToSendOnBehalfToMailsFromThisMailbox(allowAccountId: number, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo`

    return this.client.request<EmailproTask>('POST', url, {allowAccountId})
  }

  /**
   * Get users authorized to Send On Behalf To mails from this mailbox [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, email: string, service: string): Promise<EmailproAccountSendOnBehalfTo> {
    let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailproAccountSendOnBehalfTo>('GET', url)
  }
  */

  /**
   * Get users authorized to Send On Behalf To mails from this mailbox [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
   */
  DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, email: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * List the email.pro.Task objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/tasks#GET)
   */
  PendingTaskForThisMailbox(email: string, service: string): Promise<number[]> {
    let url = `/email/pro/${service}/account/${email}/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Organization task details [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(email: string, id: number, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/account/${email}/tasks/${id}`

    return this.client.request<EmailproTask>('GET', url)
  }
  */

  /**
   * terminate operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/terminate#POST)
   */
  TerminateAccountAtExpirationDate(email: string, service: string): Promise<string> {
    let url = `/email/pro/${service}/account/${email}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * billingMigrated operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/billingMigrated#GET)
   */
  DetectsBillingTransitionStatusForTheService(service: string): Promise<boolean> {
    let url = `/email/pro/${service}/billingMigrated`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * billingPlan operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/billingPlan#GET)
   */
  EmailproBillingPlan(service: string): Promise<string> {
    let url = `/email/pro/${service}/billingPlan`

    return this.client.request<string>('GET', url)
  }

  /**
   * List the email.pro.Domain objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain#GET)
   */
  DomainsAssociatedToThisService(service: string, state?: EmailproObjectState): Promise<string[]> {
    let url = `/email/pro/${service}/domain?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.pro.Domain objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain#POST)
   */
  CreateNewDomainInProServices(name: string, service: string, type: EmailproDomainType, configureAutodiscover?: boolean, configureMx?: boolean, mxRelay?: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/domain`

    return this.client.request<EmailproTask>('POST', url, {name, type, configureAutodiscover, configureMx, mxRelay})
  }

  /**
   * Domain [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D#GET)
   */
  /*
  GetThisObjectProperties(domainName: string, service: string): Promise<EmailproDomain> {
    let url = `/email/pro/${service}/domain/${domainName}`

    return this.client.request<EmailproDomain>('GET', url)
  }
  */

  /**
   * Domain [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(domainName: string, service: string, payload: EmailproDomain): Promise<void> {
    let url = `/email/pro/${service}/domain/${domainName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Domain [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D#DELETE)
   */
  DeleteExistingDomainInProServices(domainName: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/domain/${domainName}`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * disclaimer [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#GET)
   */
  /*
  GetThisObjectProperties(domainName: string, service: string): Promise<Emailprodisclaimer> {
    let url = `/email/pro/${service}/domain/${domainName}/disclaimer`

    return this.client.request<Emailprodisclaimer>('GET', url)
  }
  */

  /**
   * disclaimer [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#PUT)
   */
  /*
  AlterThisObjectProperties(domainName: string, service: string, payload: Emailprodisclaimer): Promise<void> {
    let url = `/email/pro/${service}/domain/${domainName}/disclaimer`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * disclaimer [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#POST)
   */
  CreateOrganizationDisclaimerOfEachEmail(content: string, domainName: string, service: string, outsideOnly?: boolean): Promise<EmailproTask> {
    let url = `/email/pro/${service}/domain/${domainName}/disclaimer`

    return this.client.request<EmailproTask>('POST', url, {content, outsideOnly})
  }

  /**
   * disclaimer [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#DELETE)
   */
  DeleteExistingOrganizationDisclaimer(domainName: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/domain/${domainName}/disclaimer`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * disclaimerAttribute operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimerAttribute#GET)
   */
  GetDiclaimerAttributesToSubstituteWithActiveDirectoryProperties(domainName: string, service: string): Promise<EmailproDisclaimerAttributeEnum[]> {
    let url = `/email/pro/${service}/domain/${domainName}/disclaimerAttribute`

    return this.client.request<EmailproDisclaimerAttributeEnum[]>('GET', url)
  }

  /**
   * List the email.pro.ExternalContact objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact#GET)
   */
  ExternalContactsForThisService(service: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string): Promise<string[]> {
    let url = `/email/pro/${service}/externalContact?`

    const queryParams = new QueryParams()
    if (displayName) { queryParams.set('displayName', displayName) }
    if (externalEmailAddress) { queryParams.set('externalEmailAddress', externalEmailAddress) }
    if (firstName) { queryParams.set('firstName', firstName) }
    if (id) { queryParams.set('id', id.toString()) }
    if (lastName) { queryParams.set('lastName', lastName) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.pro.ExternalContact objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact#POST)
   */
  CreateNewExternalContact(externalEmailAddress: string, service: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/externalContact`

    return this.client.request<EmailproTask>('POST', url, {externalEmailAddress, displayName, firstName, hiddenFromGAL, initials, lastName})
  }

  /**
   * External contact for this pro service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact/%7BexternalEmailAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(externalEmailAddress: string, service: string): Promise<EmailproExternalContact> {
    let url = `/email/pro/${service}/externalContact/${externalEmailAddress}`

    return this.client.request<EmailproExternalContact>('GET', url)
  }
  */

  /**
   * External contact for this pro service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact/%7BexternalEmailAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(externalEmailAddress: string, service: string, payload: EmailproExternalContact): Promise<void> {
    let url = `/email/pro/${service}/externalContact/${externalEmailAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * External contact for this pro service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact/%7BexternalEmailAddress%7D#DELETE)
   */
  DeleteExternalContact(externalEmailAddress: string, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/externalContact/${externalEmailAddress}`

    return this.client.request<EmailproTask>('DELETE', url)
  }

  /**
   * Server [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/server#GET)
   */
  /*
  GetThisObjectProperties(service: string): Promise<EmailproServer> {
    let url = `/email/pro/${service}/server`

    return this.client.request<EmailproServer>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(service: string): Promise<ServicesService> {
    let url = `/email/pro/${service}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(service: string, payload: ServicesService): Promise<void> {
    let url = `/email/pro/${service}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the email.pro.Task objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/task#GET)
   */
  PendingActions(service: string): Promise<number[]> {
    let url = `/email/pro/${service}/task`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Organization task details [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, service: string): Promise<EmailproTask> {
    let url = `/email/pro/${service}/task/${id}`

    return this.client.request<EmailproTask>('GET', url)
  }
  */

  /**
   * updateFlagsOnAllAccounts operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/updateFlagsOnAllAccounts#POST)
   */
  UpdateSpamAndVirusFlagsOnAllActiveAccounts(service: string): Promise<void> {
    let url = `/email/pro/${service}/updateFlagsOnAllAccounts`

    return this.client.request<void>('POST', url)
  }

}
