// GENERATED SDK for email/domain API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Possible values for filter action
 */
export enum DomainDomainFilterAction {
  ACCEPT = 'accept',
  ACCOUNT = 'account',
  DELETE = 'delete',
  REDIRECT = 'redirect'
}

/*
 * Possible values for filter operation
 */
export enum DomainDomainFilterOperand {
  CHECKSPF = 'checkspf',
  CONTAINS = 'contains',
  NOCONTAINS = 'noContains'
}

/*
 * Possible values for mailing list language
 */
export enum DomainDomainMlLanguage {
  DE = 'de',
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  NL = 'nl',
  PL = 'pl',
  PT = 'pt'
}

/**
 * Structure of mailinglist limits
 */
export interface DomainDomainMlLimits {
  subscribers: number
}

/**
 * Structure of imapCopy
 */
export interface DomainDomainMlOptionsStruct {
  moderatorMessage: boolean
  subscribeByModerator: boolean
  usersPostOnly: boolean
}

/*
 * Possible values for MX filter
 */
export enum DomainDomainMXFilter {
  CUSTOM = 'CUSTOM',
  FULL_FILTERING = 'FULL_FILTERING',
  NO_FILTERING = 'NO_FILTERING',
  REDIRECT = 'REDIRECT',
  SIMPLE_FILTERING = 'SIMPLE_FILTERING'
}

/*
 * Possible values for pop action task
 */
export enum DomainDomainPopAction {
  ADDACCOUNT = 'addAccount',
  CHANGEACCOUNT = 'changeAccount',
  CHANGEPASSWORD = 'changePassword',
  DELETEACCOUNT = 'deleteAccount',
  INTERNALMIGRATION = 'internalMigration',
  MIGRATION = 'migration',
  TEMPORARYTASK = 'temporaryTask',
  UNKNOWN = 'unknown'
}

/**
 * Values of quota account (pop, mailing list, redirection, responder and big pop)
 */
export interface DomainDomainQuota {
  account: number
  alias: number
  mailingList: number
  redirection: number
  responder: number
}

/*
 * Possible values for pop action task
 */
export enum DomainDomainSpecialAccountAction {
  ADD = 'add',
  CHANGE = 'change',
  DELETE = 'delete'
}

/*
 * Possible type task
 */
export type DomainDomainSpecialAccountType = '25g' | 'alias' | 'delete' | 'filter' | 'forward' | 'responder'

/*
 * Possible values for status domain
 */
export enum DomainDomainStatus {
  CLOSE = 'close',
  OK = 'ok',
  READONLY = 'readOnly',
  UNKNOWN = 'unknown'
}

/**
 * Values of number account (account, mailing list, redirection and responder)
 */
export interface DomainDomainSummary {
  account: number
  mailingList: number
  redirection: number
  responder: number
}

/**
 * Structure of usage account
 */
export interface DomainDomainUsageAccountStruct {
  date?: string
  emailCount?: number
  quota?: number
}

/**
 * Zone resource records
 */
export interface DomainzoneRecord {
  fieldType: ZoneNamedResolutionFieldType
  id: number
  subDomain?: string
  target: string
  ttl?: number
  zone: string
}

/**
 * Account List
 */
export interface EmaildomainAccount {
  accountName: string
  description: string
  domain: string
  email: string
  isBlocked: boolean
  size: number
}

/**
 * Account List
 */
export interface EmaildomainAccountDelegated {
  accountName: string
  allowedAccountSize?: number[]
  description: string
  domain: string
  email: string
  isBlocked: boolean
  size: number
}

/**
 * Email ACL
 */
export interface EmaildomainAcl {
  accountId: string
}

/**
 * Delegation List
 */
export interface EmaildomainDelegation {
  accountId: string
}

/**
 * Email diagnoses
 */
export interface EmaildomainDiagnose {
  date: string
  function: EmaildomainDomainDiagnoseFunction
  id: number
  name?: string
  result?: EmaildomainDomainDiagnoseResult
  trace?: any
}

/*
 * Function of diagnose
 */
export enum EmaildomainDomainDiagnoseFunction {
  MX = 'MX'
}

/*
 * Result of diagnose
 */
export enum EmaildomainDomainDiagnoseResult {
  CUSTOM = 'CUSTOM',
  DEPRECATED = 'DEPRECATED',
  KO = 'KO',
  OK = 'OK'
}

/**
 * Test and result, with proper test strings
 */
export interface EmaildomainDomainDiagnoseTraceStruct<T> {
  result: T
  test: string
}

/**
 * Domain service
 */
export interface EmaildomainDomainService {
  allowedAccountSize?: number[]
  creationDate?: string
  domain: string
  filerz?: number
  linkTo?: string
  migratedMXPlanServiceName?: string
  offer?: string
  status: DomainDomainStatus
}

/**
 * Filter List
 */
export interface EmaildomainFilter {
  action?: DomainDomainFilterAction
  actionParam?: string
  active: boolean
  domain: string
  name: string
  pop: string
  priority: number
}

/**
 * Mailing List
 */
export interface EmaildomainMailingList {
  id: number
  language?: DomainDomainMlLanguage
  name: string
  nbSubscribers?: number
  nbSubscribersUpdateDate?: string
  options: DomainDomainMlOptionsStruct
  ownerEmail: string
  replyTo: string
}

/**
 * Migration account
 */
export interface EmaildomainMigrationAccount {
  destinationEmailAddress: string
  quota: number
}

/*
 * Result code of check migration
 */
export enum EmaildomainMigrationCheckCode {
  ACCOUNT_EMPTY = 'ACCOUNT_EMPTY',
  ACCOUNT_INPROGRESS = 'ACCOUNT_INPROGRESS',
  DELEGATION_EXIST = 'DELEGATION_EXIST',
  DOMAIN_EMPTY = 'DOMAIN_EMPTY',
  FILTER_EXIST = 'FILTER_EXIST',
  FORWARD_EXIST = 'FORWARD_EXIST',
  FORWARD_LOCAL = 'FORWARD_LOCAL',
  MAILINGLIST_EXIST = 'MAILINGLIST_EXIST',
  MAILINGLIST_INPROGRESS = 'MAILINGLIST_INPROGRESS',
  MAILPROXY_BAD_INFRA = 'MAILPROXY_BAD_INFRA',
  MAILPROXY_EMPTY = 'MAILPROXY_EMPTY',
  MAILPROXY_INPROGRESS = 'MAILPROXY_INPROGRESS',
  MAILPROXY_RESERVATION = 'MAILPROXY_RESERVATION',
  REDIRECTION_INPROGRESS = 'REDIRECTION_INPROGRESS',
  RESPONDER_EXIST = 'RESPONDER_EXIST',
  RESPONDER_INPROGRESS = 'RESPONDER_INPROGRESS',
  UNKNOW = 'UNKNOW'
}

/**
 * Check Migration result
 */
export interface EmaildomainMigrationCheckResultStruct {
  code: EmaildomainMigrationCheckCode
  details?: string
}

/**
 * Check Migration result
 */
export interface EmaildomainMigrationCheckStruct {
  alias?: string[]
  error?: EmaildomainMigrationCheckResultStruct[]
  filter?: string[]
  forward?: string[]
  warning?: EmaildomainMigrationCheckResultStruct[]
}

/**
 * Migration service
 */
export interface EmaildomainMigrationService {
  contactAdmin: string
  contactBilling: string
  contactTech: string
  creation: string
  destinationServiceName: string
  expiration: string
  type: EmaildomainMigrationServiceType
}

/*
 * Types of migration service
 */
export enum EmaildomainMigrationServiceType {
  EMAIL_PRO = 'EMAIL PRO',
  HOSTED_EXCHANGE = 'HOSTED EXCHANGE',
  PRIVATE_EXCHANGE = 'PRIVATE EXCHANGE',
  PROVIDER_EXCHANGE = 'PROVIDER EXCHANGE'
}

/**
 * Moderators List
 */
export interface EmaildomainModerator {
  domain: string
  email: string
  mailinglist: string
}

/**
 * Global Redirection
 */
export interface EmaildomainRedirectionGlobal {
  from: string
  id: string
  to: string
}

/**
 * Responder
 */
export interface EmaildomainResponder {
  account: string
  content: string
  copy: boolean
  copyTo?: string
  from?: string
  to?: string
}

/**
 * Responder of account
 */
export interface EmaildomainResponderAccount {
  account: string
  content: string
  copy: boolean
  copyTo?: string
  from?: string
  to?: string
}

/**
 * Rule List
 */
export interface EmaildomainRule {
  header: string
  id: number
  operand: DomainDomainFilterOperand
  value: string
}

/**
 * Subscribers List
 */
export interface EmaildomainSubscriber {
  domain: string
  email: string
  mailinglist: string
}

/**
 * Task filter List
 */
export interface EmaildomainTaskFilter {
  account: string
  action: string
  domain: string
  id: number
  timestamp: string
}

/**
 * Task Mailing List
 */
export interface EmaildomainTaskMl {
  account: string
  action: string
  date: string
  domain: string
  id: number
  language: DomainDomainMlLanguage
}

/**
 * Task Pop List
 */
export interface EmaildomainTaskPop {
  action: DomainDomainPopAction
  date: string
  domain: string
  id: number
  name: string
}

/**
 * Task special account List
 */
export interface EmaildomainTaskSpecialAccount {
  account: string
  action: DomainDomainSpecialAccountAction
  date: string
  domain: string
  id: number
  type: DomainDomainSpecialAccountType
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

/*
 * Resource record fieldType
 */
export enum ZoneNamedResolutionFieldType {
  A = 'A',
  AAAA = 'AAAA',
  CAA = 'CAA',
  CNAME = 'CNAME',
  DKIM = 'DKIM',
  DMARC = 'DMARC',
  LOC = 'LOC',
  MX = 'MX',
  NAPTR = 'NAPTR',
  NS = 'NS',
  PTR = 'PTR',
  SPF = 'SPF',
  SRV = 'SRV',
  SSHFP = 'SSHFP',
  TLSA = 'TLSA',
  TXT = 'TXT'
}


export class EmailDomain {
  constructor(private client: Client) {}

  /**
   * Operations about the MX service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/email/domain`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Domain service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D#GET)
   */
  GetThisObjectProperties(domain: string): Promise<EmaildomainDomainService> {
    let url = `/email/domain/${domain}`

    return this.client.request<EmaildomainDomainService>('GET', url)
  }

  /**
   * List the email.domain.Account objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account#GET)
   */
  GetAccounts(domain: string, accountName?: string, description?: string): Promise<string[]> {
    let url = `/email/domain/${domain}/account?`

    const queryParams = new QueryParams()
    if (accountName) { queryParams.set('accountName', accountName) }
    if (description) { queryParams.set('description', description) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.domain.Account objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account#POST)
   */
  CreateNewMailboxInServer(accountName: string, domain: string, password: string, description?: string, size?: number): Promise<EmaildomainTaskPop> {
    let url = `/email/domain/${domain}/account`

    return this.client.request<EmaildomainTaskPop>('POST', url, {accountName, password, description, size})
  }

  /**
   * Account List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#GET)
   */
  /*
  GetThisObjectProperties(accountName: string, domain: string): Promise<EmaildomainAccount> {
    let url = `/email/domain/${domain}/account/${accountName}`

    return this.client.request<EmaildomainAccount>('GET', url)
  }
  */

  /**
   * Account List [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#PUT)
   */
  AlterThisObjectProperties(accountName: string, domain: string, payload: EmaildomainAccount): Promise<void> {
    let url = `/email/domain/${domain}/account/${accountName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Account List [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#DELETE)
   */
  DeleteAnExistingMailboxInServer(accountName: string, domain: string): Promise<EmaildomainTaskPop> {
    let url = `/email/domain/${domain}/account/${accountName}`

    return this.client.request<EmaildomainTaskPop>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/changePassword#POST)
   */
  ChangeMailboxPasswordLength_[9;30]NoSpaceAtBeginAndEndNoAccent(accountName: string, domain: string, password: string): Promise<EmaildomainTaskPop> {
    let url = `/email/domain/${domain}/account/${accountName}/changePassword`

    return this.client.request<EmaildomainTaskPop>('POST', url, {password})
  }

  /**
   * List the email.domain.Delegation objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation#GET)
   */
  GetDelegations(accountName: string, domain: string): Promise<string[]> {
    let url = `/email/domain/${domain}/account/${accountName}/delegation`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the email.domain.Delegation objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation#POST)
   */
  CreateDelegationForThisAccount(accountId: string, accountName: string, domain: string): Promise<string> {
    let url = `/email/domain/${domain}/account/${accountName}/delegation`

    return this.client.request<string>('POST', url, {accountId})
  }

  /**
   * Delegation List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation/%7BaccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(accountId: string, accountName: string, domain: string): Promise<EmaildomainDelegation> {
    let url = `/email/domain/${domain}/account/${accountName}/delegation/${accountId}`

    return this.client.request<EmaildomainDelegation>('GET', url)
  }
  */

  /**
   * Delegation List [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation/%7BaccountId%7D#DELETE)
   */
  DeleteAnExistingDelegation(accountId: string, accountName: string, domain: string): Promise<string> {
    let url = `/email/domain/${domain}/account/${accountName}/delegation/${accountId}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * List the email.domain.Filter objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter#GET)
   */
  GetFilters(accountName: string, domain: string): Promise<string[]> {
    let url = `/email/domain/${domain}/account/${accountName}/filter`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the email.domain.Filter objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter#POST)
   */
  CreateNewFilterForAccount(accountName: string, action: DomainDomainFilterAction, active: boolean, domain: string, header: string, name: string, operand: DomainDomainFilterOperand, priority: number, value: string, actionParam?: string): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/${domain}/account/${accountName}/filter`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {action, active, header, name, operand, priority, value, actionParam})
  }

  /**
   * Filter List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(accountName: string, domain: string, name: string): Promise<EmaildomainFilter> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}`

    return this.client.request<EmaildomainFilter>('GET', url)
  }
  */

  /**
   * Filter List [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D#DELETE)
   */
  DeleteAnExistingFilter(accountName: string, domain: string, name: string): Promise<EmaildomainTaskFilter[]> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}`

    return this.client.request<EmaildomainTaskFilter[]>('DELETE', url)
  }

  /**
   * changeActivity operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/changeActivity#POST)
   */
  ChangeFilterActivity(accountName: string, activity: boolean, domain: string, name: string): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/changeActivity`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {activity})
  }

  /**
   * changePriority operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/changePriority#POST)
   */
  ChangeFilterPriority(accountName: string, domain: string, name: string, priority: number): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/changePriority`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {priority})
  }

  /**
   * List the email.domain.Rule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule#GET)
   */
  GetRules(accountName: string, domain: string, name: string): Promise<number[]> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.domain.Rule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule#POST)
   */
  CreateNewRuleForFilter(accountName: string, domain: string, header: string, name: string, operand: DomainDomainFilterOperand, value: string): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {header, operand, value})
  }

  /**
   * Rule List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(accountName: string, domain: string, id: number, name: string): Promise<EmaildomainRule> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule/${id}`

    return this.client.request<EmaildomainRule>('GET', url)
  }
  */

  /**
   * Rule List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule/%7Bid%7D#DELETE)
   */
  /*
  DeleteAnExistingFilter(accountName: string, domain: string, id: number, name: string): Promise<EmaildomainTaskFilter[]> {
    let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule/${id}`

    return this.client.request<EmaildomainTaskFilter[]>('DELETE', url)
  }
  */

  /**
   * List the email.domain.MigrationService objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate#GET)
   */
  GetMigrationService(accountName: string, domain: string, type?: EmaildomainMigrationServiceType): Promise<string[]> {
    let url = `/email/domain/${domain}/account/${accountName}/migrate?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Migration service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D#GET)
   */
  /*
  GetThisObjectProperties(accountName: string, destinationServiceName: string, domain: string): Promise<EmaildomainMigrationService> {
    let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}`

    return this.client.request<EmaildomainMigrationService>('GET', url)
  }
  */

  /**
   * List the email.domain.MigrationAccount objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress#GET)
   */
  ListOfEmailAddressAvailableForMigration(accountName: string, destinationServiceName: string, domain: string, quota?: number): Promise<string[]> {
    let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress?`

    const queryParams = new QueryParams()
    if (quota) { queryParams.set('quota', quota.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Migration account [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(accountName: string, destinationEmailAddress: string, destinationServiceName: string, domain: string): Promise<EmaildomainMigrationAccount> {
    let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}`

    return this.client.request<EmaildomainMigrationAccount>('GET', url)
  }
  */

  /**
   * checkMigrate operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D/checkMigrate#GET)
   */
  CheckIfItPossibleToMigrate(accountName: string, destinationEmailAddress: string, destinationServiceName: string, domain: string): Promise<EmaildomainMigrationCheckStruct> {
    let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}/checkMigrate`

    return this.client.request<EmaildomainMigrationCheckStruct>('GET', url)
  }

  /**
   * migrate operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D/migrate#POST)
   */
  MigrateAccountToDestinationAccount(accountName: string, destinationEmailAddress: string, destinationServiceName: string, domain: string, password: string): Promise<EmaildomainTaskPop> {
    let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}/migrate`

    return this.client.request<EmaildomainTaskPop>('POST', url, {password})
  }

  /**
   * updateUsage operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/updateUsage#POST)
   */
  UpdateUsageOfAccount(accountName: string, domain: string): Promise<void> {
    let url = `/email/domain/${domain}/account/${accountName}/updateUsage`

    return this.client.request<void>('POST', url)
  }

  /**
   * usage operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/usage#GET)
   */
  UsageOfAccount(accountName: string, domain: string): Promise<DomainDomainUsageAccountStruct> {
    let url = `/email/domain/${domain}/account/${accountName}/usage`

    return this.client.request<DomainDomainUsageAccountStruct>('GET', url)
  }

  /**
   * List the email.domain.Acl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl#GET)
   */
  GetACLOnYourDomain(domain: string): Promise<string[]> {
    let url = `/email/domain/${domain}/acl`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the email.domain.Acl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl#POST)
   */
  CreateNewACL(accountId: string, domain: string): Promise<EmaildomainAcl> {
    let url = `/email/domain/${domain}/acl`

    return this.client.request<EmaildomainAcl>('POST', url, {accountId})
  }

  /**
   * Email ACL [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl/%7BaccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(accountId: string, domain: string): Promise<EmaildomainAcl> {
    let url = `/email/domain/${domain}/acl/${accountId}`

    return this.client.request<EmaildomainAcl>('GET', url)
  }
  */

  /**
   * Email ACL [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl/%7BaccountId%7D#DELETE)
   */
  DeleteACL(accountId: string, domain: string): Promise<void> {
    let url = `/email/domain/${domain}/acl/${accountId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(domain: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/email/domain/${domain}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * changeDnsMXFilter operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/changeDnsMXFilter#POST)
   */
  ChangeMXFilterSoChangeMXDNSRecords(domain: string, mxFilter: DomainDomainMXFilter, customTarget?: string, subDomain?: string): Promise<void> {
    let url = `/email/domain/${domain}/changeDnsMXFilter`

    return this.client.request<void>('POST', url, {mxFilter, customTarget, subDomain})
  }

  /**
   * confirmTermination operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourEmailService(domain: string, token: string, commentary?: string, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/email/domain/${domain}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, reason})
  }

  /**
   * dnsMXFilter operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/dnsMXFilter#GET)
   */
  DomainMXFilter(domain: string, subDomain?: string): Promise<DomainDomainMXFilter> {
    let url = `/email/domain/${domain}/dnsMXFilter?`

    const queryParams = new QueryParams()
    if (subDomain) { queryParams.set('subDomain', subDomain) }

    return this.client.request<DomainDomainMXFilter>('GET', url+queryParams.toString())
  }

  /**
   * dnsMXRecords operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/dnsMXRecords#GET)
   */
  DomainMXRecords(domain: string, subDomain?: string): Promise<string[]> {
    let url = `/email/domain/${domain}/dnsMXRecords?`

    const queryParams = new QueryParams()
    if (subDomain) { queryParams.set('subDomain', subDomain) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.domain.MailingList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList#GET)
   */
  GetMailingLists(domain: string, name?: string): Promise<string[]> {
    let url = `/email/domain/${domain}/mailingList?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.domain.MailingList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList#POST)
   */
  CreateNewMailingList(domain: string, language: DomainDomainMlLanguage, name: string, options: DomainDomainMlOptionsStruct, ownerEmail: string, replyTo?: string): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList`

    return this.client.request<EmaildomainTaskMl>('POST', url, {language, name, options, ownerEmail, replyTo})
  }

  /**
   * Mailing List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, name: string): Promise<EmaildomainMailingList> {
    let url = `/email/domain/${domain}/mailingList/${name}`

    return this.client.request<EmaildomainMailingList>('GET', url)
  }
  */

  /**
   * Mailing List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#PUT)
   */
  /*
  AlterThisObjectProperties(domain: string, name: string, payload: EmaildomainMailingList): Promise<void> {
    let url = `/email/domain/${domain}/mailingList/${name}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Mailing List [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#DELETE)
   */
  DeleteExistingMailingList(domain: string, name: string): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList/${name}`

    return this.client.request<EmaildomainTaskMl>('DELETE', url)
  }

  /**
   * changeOptions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/changeOptions#POST)
   */
  ChangeMailingListOptions(domain: string, name: string, options: DomainDomainMlOptionsStruct): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList/${name}/changeOptions`

    return this.client.request<EmaildomainTaskMl>('POST', url, {options})
  }

  /**
   * List the email.domain.Moderator objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator#GET)
   */
  ListOfModerators(domain: string, name: string, email?: string): Promise<string[]> {
    let url = `/email/domain/${domain}/mailingList/${name}/moderator?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.domain.Moderator objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator#POST)
   */
  AddModeratorToMailingList(domain: string, email: string, name: string): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList/${name}/moderator`

    return this.client.request<EmaildomainTaskMl>('POST', url, {email})
  }

  /**
   * Moderators List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator/%7Bemail%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, email: string, name: string): Promise<EmaildomainModerator> {
    let url = `/email/domain/${domain}/mailingList/${name}/moderator/${email}`

    return this.client.request<EmaildomainModerator>('GET', url)
  }
  */

  /**
   * Moderators List [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator/%7Bemail%7D#DELETE)
   */
  DeleteExistingModerator(domain: string, email: string, name: string): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList/${name}/moderator/${email}`

    return this.client.request<EmaildomainTaskMl>('DELETE', url)
  }

  /**
   * sendListByEmail operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/sendListByEmail#POST)
   */
  SendModeratorsListAndSubscribersListOfThisMailingListByEmail(domain: string, email: string, name: string): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList/${name}/sendListByEmail`

    return this.client.request<EmaildomainTaskMl>('POST', url, {email})
  }

  /**
   * List the email.domain.Subscriber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber#GET)
   */
  ListOfSubscribers(domain: string, name: string, email?: string): Promise<string[]> {
    let url = `/email/domain/${domain}/mailingList/${name}/subscriber?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.domain.Subscriber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber#POST)
   */
  AddSubscriberToMailingList(domain: string, email: string, name: string): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList/${name}/subscriber`

    return this.client.request<EmaildomainTaskMl>('POST', url, {email})
  }

  /**
   * Subscribers List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber/%7Bemail%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, email: string, name: string): Promise<EmaildomainSubscriber> {
    let url = `/email/domain/${domain}/mailingList/${name}/subscriber/${email}`

    return this.client.request<EmaildomainSubscriber>('GET', url)
  }
  */

  /**
   * Subscribers List [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber/%7Bemail%7D#DELETE)
   */
  DeleteExistingSubscriber(domain: string, email: string, name: string): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/mailingList/${name}/subscriber/${email}`

    return this.client.request<EmaildomainTaskMl>('DELETE', url)
  }

  /**
   * migrateDelegationV3toV6 operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/migrateDelegationV3toV6#POST)
   */
  CreateDelegationOfDomainWithSameNicThanV3(domain: string): Promise<void> {
    let url = `/email/domain/${domain}/migrateDelegationV3toV6`

    return this.client.request<void>('POST', url)
  }

  /**
   * quota operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/quota#GET)
   */
  ListAllQuotasForThisDomain(domain: string): Promise<DomainDomainQuota> {
    let url = `/email/domain/${domain}/quota`

    return this.client.request<DomainDomainQuota>('GET', url)
  }

  /**
   * recommendedDNSRecords operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/recommendedDNSRecords#GET)
   */
  RecommendedDomainDNSRecords(domain: string): Promise<DomainzoneRecord[]> {
    let url = `/email/domain/${domain}/recommendedDNSRecords`

    return this.client.request<DomainzoneRecord[]>('GET', url)
  }

  /**
   * List the email.domain.RedirectionGlobal objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#GET)
   */
  GetRedirections(domain: string, from?: string, to?: string): Promise<string[]> {
    let url = `/email/domain/${domain}/redirection?`

    const queryParams = new QueryParams()
    if (from) { queryParams.set('from', from) }
    if (to) { queryParams.set('to', to) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.domain.RedirectionGlobal objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#POST)
   */
  CreateNewRedirectionInServer(domain: string, from: string, localCopy: boolean, to: string): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/${domain}/redirection`

    return this.client.request<EmaildomainTaskSpecialAccount>('POST', url, {from, localCopy, to})
  }

  /**
   * Global Redirection [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, id: string): Promise<EmaildomainRedirectionGlobal> {
    let url = `/email/domain/${domain}/redirection/${id}`

    return this.client.request<EmaildomainRedirectionGlobal>('GET', url)
  }
  */

  /**
   * Global Redirection [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D#DELETE)
   */
  DeleteAnExistingRedirectionInServer(domain: string, id: string): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/${domain}/redirection/${id}`

    return this.client.request<EmaildomainTaskSpecialAccount>('DELETE', url)
  }

  /**
   * changeRedirection operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D/changeRedirection#POST)
   */
  ChangeRedirection(domain: string, id: string, to: string): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/${domain}/redirection/${id}/changeRedirection`

    return this.client.request<EmaildomainTaskSpecialAccount>('POST', url, {to})
  }

  /**
   * List the email.domain.Responder objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder#GET)
   */
  GetResponders(domain: string, account?: string): Promise<string[]> {
    let url = `/email/domain/${domain}/responder?`

    const queryParams = new QueryParams()
    if (account) { queryParams.set('account', account) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.domain.Responder objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder#POST)
   */
  CreateNewResponderInServer(account: string, content: string, copy: boolean, domain: string, copyTo?: string, from?: string, to?: string): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/${domain}/responder`

    return this.client.request<EmaildomainTaskSpecialAccount>('POST', url, {account, content, copy, copyTo, from, to})
  }

  /**
   * Responder [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#GET)
   */
  /*
  GetThisObjectProperties(account: string, domain: string): Promise<EmaildomainResponder> {
    let url = `/email/domain/${domain}/responder/${account}`

    return this.client.request<EmaildomainResponder>('GET', url)
  }
  */

  /**
   * Responder [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#PUT)
   */
  /*
  AlterThisObjectProperties(account: string, domain: string, payload: EmaildomainResponder): Promise<void> {
    let url = `/email/domain/${domain}/responder/${account}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Responder [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#DELETE)
   */
  DeleteAnExistingResponderInServer(account: string, domain: string): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/${domain}/responder/${account}`

    return this.client.request<EmaildomainTaskSpecialAccount>('DELETE', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(domain: string): Promise<ServicesService> {
    let url = `/email/domain/${domain}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(domain: string, payload: ServicesService): Promise<void> {
    let url = `/email/domain/${domain}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * summary operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/summary#GET)
   */
  SummaryForThisDomain(domain: string): Promise<DomainDomainSummary> {
    let url = `/email/domain/${domain}/summary`

    return this.client.request<DomainDomainSummary>('GET', url)
  }

  /**
   * List the email.domain.TaskPop objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/account#GET)
   */
  GetAccountTasks(domain: string, name?: string): Promise<number[]> {
    let url = `/email/domain/${domain}/task/account?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task Pop List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/account/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskPop> {
    let url = `/email/domain/${domain}/task/account/${id}`

    return this.client.request<EmaildomainTaskPop>('GET', url)
  }
  */

  /**
   * List the email.domain.TaskFilter objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/filter#GET)
   */
  GetFilterTasks(domain: string, account?: string): Promise<number[]> {
    let url = `/email/domain/${domain}/task/filter?`

    const queryParams = new QueryParams()
    if (account) { queryParams.set('account', account) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task filter List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/filter/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/${domain}/task/filter/${id}`

    return this.client.request<EmaildomainTaskFilter>('GET', url)
  }
  */

  /**
   * List the email.domain.TaskMl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/mailinglist#GET)
   */
  GetMailingListTasks(domain: string, account?: string): Promise<number[]> {
    let url = `/email/domain/${domain}/task/mailinglist?`

    const queryParams = new QueryParams()
    if (account) { queryParams.set('account', account) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task Mailing List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/mailinglist/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskMl> {
    let url = `/email/domain/${domain}/task/mailinglist/${id}`

    return this.client.request<EmaildomainTaskMl>('GET', url)
  }
  */

  /**
   * List the email.domain.TaskSpecialAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/redirection#GET)
   */
  GetRedirectionTasks(domain: string, account?: string): Promise<number[]> {
    let url = `/email/domain/${domain}/task/redirection?`

    const queryParams = new QueryParams()
    if (account) { queryParams.set('account', account) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task special account List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/redirection/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/${domain}/task/redirection/${id}`

    return this.client.request<EmaildomainTaskSpecialAccount>('GET', url)
  }
  */

  /**
   * List the email.domain.TaskSpecialAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/responder#GET)
   */
  GetResponderTasks(domain: string, account?: string): Promise<number[]> {
    let url = `/email/domain/${domain}/task/responder?`

    const queryParams = new QueryParams()
    if (account) { queryParams.set('account', account) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task special account List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/responder/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/${domain}/task/responder/${id}`

    return this.client.request<EmaildomainTaskSpecialAccount>('GET', url)
  }
  */

  /**
   * terminate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/terminate#POST)
   */
  TerminateYourEmailService(domain: string): Promise<string> {
    let url = `/email/domain/${domain}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the email.domain.AccountDelegated objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount#GET)
   */
  DelegatedEmails(accountName?: string, domain?: string): Promise<string[]> {
    let url = `/email/domain/delegatedAccount?`

    const queryParams = new QueryParams()
    if (accountName) { queryParams.set('accountName', accountName) }
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Account List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D#GET)
   */
  /*
  GetThisObjectProperties(email: string): Promise<EmaildomainAccountDelegated> {
    let url = `/email/domain/delegatedAccount/${email}`

    return this.client.request<EmaildomainAccountDelegated>('GET', url)
  }
  */

  /**
   * Account List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D#PUT)
   */
  /*
  AlterThisObjectProperties(email: string, payload: EmaildomainAccountDelegated): Promise<void> {
    let url = `/email/domain/delegatedAccount/${email}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * changePassword operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/changePassword#POST)
   */
  /*
  ChangeMailboxPasswordLength_[9;30]NoSpaceAtBeginAndEndNoAccent(email: string, password: string): Promise<EmaildomainTaskPop> {
    let url = `/email/domain/delegatedAccount/${email}/changePassword`

    return this.client.request<EmaildomainTaskPop>('POST', url, {password})
  }
  */

  /**
   * List the email.domain.Filter objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter#GET)
   */
  /*
  GetFilters(email: string): Promise<string[]> {
    let url = `/email/domain/delegatedAccount/${email}/filter`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List the email.domain.Filter objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter#POST)
   */
  /*
  CreateNewFilterForAccount(action: DomainDomainFilterAction, active: boolean, email: string, header: string, name: string, operand: DomainDomainFilterOperand, priority: number, value: string, actionParam?: string): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/delegatedAccount/${email}/filter`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {action, active, header, name, operand, priority, value, actionParam})
  }
  */

  /**
   * Filter List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(email: string, name: string): Promise<EmaildomainFilter> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}`

    return this.client.request<EmaildomainFilter>('GET', url)
  }
  */

  /**
   * Filter List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D#DELETE)
   */
  /*
  DeleteAnExistingFilter(email: string, name: string): Promise<EmaildomainTaskFilter[]> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}`

    return this.client.request<EmaildomainTaskFilter[]>('DELETE', url)
  }
  */

  /**
   * changeActivity operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/changeActivity#POST)
   */
  /*
  ChangeFilterActivity(activity: boolean, email: string, name: string): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}/changeActivity`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {activity})
  }
  */

  /**
   * changePriority operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/changePriority#POST)
   */
  /*
  ChangeFilterPriority(email: string, name: string, priority: number): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}/changePriority`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {priority})
  }
  */

  /**
   * List the email.domain.Rule objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule#GET)
   */
  /*
  GetRules(email: string, name: string): Promise<number[]> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the email.domain.Rule objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule#POST)
   */
  /*
  CreateNewRuleForFilter(email: string, header: string, name: string, operand: DomainDomainFilterOperand, value: string): Promise<EmaildomainTaskFilter> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule`

    return this.client.request<EmaildomainTaskFilter>('POST', url, {header, operand, value})
  }
  */

  /**
   * Rule List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(email: string, id: number, name: string): Promise<EmaildomainRule> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule/${id}`

    return this.client.request<EmaildomainRule>('GET', url)
  }
  */

  /**
   * Rule List [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule/%7Bid%7D#DELETE)
   */
  /*
  DeleteAnExistingFilter(email: string, id: number, name: string): Promise<EmaildomainTaskFilter[]> {
    let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule/${id}`

    return this.client.request<EmaildomainTaskFilter[]>('DELETE', url)
  }
  */

  /**
   * Responder of account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#GET)
   */
  /*
  GetThisObjectProperties(email: string): Promise<EmaildomainResponderAccount> {
    let url = `/email/domain/delegatedAccount/${email}/responder`

    return this.client.request<EmaildomainResponderAccount>('GET', url)
  }
  */

  /**
   * Responder of account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#PUT)
   */
  /*
  AlterThisObjectProperties(email: string, payload: EmaildomainResponderAccount): Promise<void> {
    let url = `/email/domain/delegatedAccount/${email}/responder`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Responder of account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#POST)
   */
  /*
  CreateNewResponderInServer(content: string, copy: boolean, email: string, copyTo?: string, from?: string, to?: string): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/delegatedAccount/${email}/responder`

    return this.client.request<EmaildomainTaskSpecialAccount>('POST', url, {content, copy, copyTo, from, to})
  }
  */

  /**
   * Responder of account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#DELETE)
   */
  /*
  DeleteAnExistingResponderInServer(email: string): Promise<EmaildomainTaskSpecialAccount> {
    let url = `/email/domain/delegatedAccount/${email}/responder`

    return this.client.request<EmaildomainTaskSpecialAccount>('DELETE', url)
  }
  */

  /**
   * updateUsage operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/updateUsage#POST)
   */
  /*
  UpdateUsageOfAccount(email: string): Promise<void> {
    let url = `/email/domain/delegatedAccount/${email}/updateUsage`

    return this.client.request<void>('POST', url)
  }
  */

  /**
   * usage operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/usage#POST)
   */
  /*
  UsageOfAccount(email: string): Promise<DomainDomainUsageAccountStruct> {
    let url = `/email/domain/delegatedAccount/${email}/usage`

    return this.client.request<DomainDomainUsageAccountStruct>('POST', url)
  }
  */

  /**
   * Get limits of mailing list [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/mailingListLimits#GET)
   */
  GetLimitsOfMailingList(moderatorMessage: boolean): Promise<DomainDomainMlLimits> {
    let url = `/email/domain/mailingListLimits?`

    const queryParams = new QueryParams()
    if (moderatorMessage) { queryParams.set('moderatorMessage', moderatorMessage.toString()) }

    return this.client.request<DomainDomainMlLimits>('GET', url+queryParams.toString())
  }

}
