// GENERATED SDK for sms API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * All country prices accessible from a reference
 */
export enum ReferenceCountry {
  ALL = 'all',
  CA = 'ca',
  CZ = 'cz',
  DE = 'de',
  EN = 'en',
  ES = 'es',
  FI = 'fi',
  FR = 'fr',
  GB = 'gb',
  IE = 'ie',
  IT = 'it',
  LT = 'lt',
  MA = 'ma',
  NL = 'nl',
  PL = 'pl',
  PP = 'pp',
  PT = 'pt',
  QC = 'qc',
  RU = 'ru',
  SK = 'sk',
  SN = 'sn',
  TN = 'tn',
  WE = 'we'
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

/**
 * SMS details
 */
export interface SmsAccount {
  automaticRecreditAmount?: SmsPackQuantityAutomaticRecredit
  callBack?: string
  creditsHoldByQuota: any
  creditsLeft: any
  creditThresholdForAutomaticRecredit: any
  description: string
  name: string
  smsResponse: SmsResponse
  status: SmsStatusAccount
  stopCallBack?: string
  templates: SmsTemplates
  userQuantityWithQuota: number
}

/**
 * A structure describing all information about alert threshold informations
 */
export interface SmsAlertThreshold {
  alertEmail: string
  alertNumber: string
  alertThreshold: number
  support: SmsSupport
}

/**
 * SMS blacklist
 */
export interface SmsBlacklist {
  dateCreation: string
  number: string
}

/*
 * The charset format
 */
export enum SmsCharset {
  UTF_8 = 'UTF-8'
}

/**
 * The web access for your virtual number chat application
 */
export interface SmsChatAccess {
  creationDate: string
  id: number
  url: string
}

/*
 * The sms class of sms sending job
 */
export enum SmsClass {
  FLASH = 'flash',
  PHONEDISPLAY = 'phoneDisplay',
  SIM = 'sim',
  TOOLKIT = 'toolkit'
}

/*
 * The sms coding
 */
export type SmsCoding = '7bit' | '8bit'

/*
 * All country suffixes accessible for sms services and "all" available
 */
export enum SmsCountry {
  AG = 'ag',
  AI = 'ai',
  ALL = 'all',
  AN = 'an',
  AR = 'ar',
  AT = 'at',
  AU = 'au',
  AW = 'aw',
  BA = 'ba',
  BB = 'bb',
  BE = 'be',
  BG = 'bg',
  BH = 'bh',
  BM = 'bm',
  BO = 'bo',
  BR = 'br',
  BZ = 'bz',
  CH = 'ch',
  CL = 'cl',
  CN = 'cn',
  CO = 'co',
  CR = 'cr',
  CU = 'cu',
  CY = 'cy',
  CZ = 'cz',
  DE = 'de',
  DK = 'dk',
  DM = 'dm',
  DZ = 'dz',
  EC = 'ec',
  EE = 'ee',
  EG = 'eg',
  ES = 'es',
  FI = 'fi',
  FR = 'fr',
  GB = 'gb',
  GD = 'gd',
  GP = 'gp',
  GR = 'gr',
  GY = 'gy',
  HK = 'hk',
  HN = 'hn',
  HR = 'hr',
  HT = 'ht',
  HU = 'hu',
  ID = 'id',
  IE = 'ie',
  IL = 'il',
  IN = 'in',
  IS = 'is',
  IT = 'it',
  JM = 'jm',
  JO = 'jo',
  JP = 'jp',
  KR = 'kr',
  KW = 'kw',
  KY = 'ky',
  LB = 'lb',
  LC = 'lc',
  LT = 'lt',
  LU = 'lu',
  LV = 'lv',
  MA = 'ma',
  ME = 'me',
  MQ = 'mq',
  MS = 'ms',
  MT = 'mt',
  MY = 'my',
  NC = 'nc',
  NG = 'ng',
  NL = 'nl',
  NO = 'no',
  NZ = 'nz',
  PA = 'pa',
  PE = 'pe',
  PF = 'pf',
  PH = 'ph',
  PK = 'pk',
  PL = 'pl',
  PT = 'pt',
  PY = 'py',
  RE = 're',
  RO = 'ro',
  RS = 'rs',
  RU = 'ru',
  SA = 'sa',
  SE = 'se',
  SG = 'sg',
  SI = 'si',
  SK = 'sk',
  SR = 'sr',
  TC = 'tc',
  TH = 'th',
  TN = 'tn',
  TR = 'tr',
  TT = 'tt',
  TW = 'tw',
  UA = 'ua',
  UY = 'uy',
  VC = 'vc',
  VE = 've',
  VG = 'vg',
  VN = 'vn',
  ZA = 'za'
}

/*
 * Way type
 */
export enum SmsDocumentWayType {
  INCOMING = 'incoming',
  OUTGOING = 'outgoing'
}

/**
 * Sms reach list
 */
export interface SmsException {
  countrySuffixe: string
  messages: string[]
  operators: string
  restrictionCode: SmsRestrictionCode
  substitution?: string
}

/**
 * Sms operator informations
 */
export interface SmsHlr {
  country: string
  countryCode: string
  network: string
  operator: string
  region: string
}

/**
 * Home Location Register informations. Give informations about a given cellular phone.
 */
export interface SmsHlrLookupNumber {
  datetime: string
  id: number
  msisdn: string
  operatorCode: string
  ported: boolean
  reachable: boolean
  roaming: boolean
  status: SmsHlrStatuses
  valid: boolean
}

/*
 * The sms coding
 */
export enum SmsHlrStatuses {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Sms history of sms incoming received
 */
export interface SmsIncoming {
  creationDatetime: string
  credits: any
  id: number
  message: string
  sender: string
  tag: string
}

/**
 * Sms job
 */
export interface SmsJob {
  creationDatetime: string
  credits: any
  deliveryReceipt: number
  differedDelivery: number
  id: number
  message: string
  messageLength: number
  numberOfSms: number
  ptt: number
  receiver: string
  sender: string
}

/**
 * Sms history of sms outgoing sent
 */
export interface SmsOutgoing {
  creationDatetime: string
  credits: any
  deliveryReceipt: number
  differedDelivery: number
  id: number
  message: string
  messageLength: number
  numberOfSms: number
  ptt: number
  receiver: string
  sender: string
  tag: string
  tariffCode: string
}

/**
 * A structure describing all information about an sms pack offer
 */
export interface SmsPackOffer {
  countryDestination: string
  giftPrice?: any
  giftQuantity?: any
  language: string
  price: any
  quantity: number
  smsQuantity: any
  totalPrice?: any
}

/*
 * Pack quantity automatic recredit possibilities
 */
export type SmsPackQuantityAutomaticRecredit = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000

/*
 * Pack quantity levels
 */
export type SmsPackQuantity = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000

/**
 * Phone book
 */
export interface SmsPhonebook {
  bookKey: string
  name: string
  phoneKey: string
}

/**
 * Phone book contact
 */
export interface SmsPhonebookContact {
  group: string
  homeMobile?: any
  homePhone?: any
  id: number
  name: string
  surname: string
  workMobile?: any
  workPhone?: any
}

/*
 * The priority of an sms sending
 */
export enum SmsPriority {
  HIGH = 'high',
  LOW = 'low',
  MEDIUM = 'medium',
  VERYLOW = 'veryLow'
}

/**
 * A structure describing ptt details
 */
export interface SmsPttDetails {
  comment: string
  description: string
  duration: SmsPttDurationType
}

/*
 * All typology of ptt duration
 */
export enum SmsPttDurationType {
  INDETERMINATED = 'indeterminated',
  PERMANENT = 'permanent',
  TEMPORARY = 'temporary'
}

/**
 * A structure describing all information about quota informations
 */
export interface SmsQuota {
  quotaLeft: any
  quotaStatus: SmsQuotaStatusUser
}

/*
 * Current quota status
 */
export enum SmsQuotaStatusUser {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

/**
 * Sms receivers preloaded
 */
export interface SmsReceiver {
  autoUpdate: boolean
  canAutoUpdate: boolean
  datetime: string
  description: string
  records: number
  slotId: number
}

/**
 * A structure giving operation price and asynchronous task ID
 */
export interface SmsReceiversAsynchronousCleanReport {
  taskId: number
  totalCreditsRemoved: any
}

/*
 * All tyoplogy of senders
 */
export enum SmsRefererSender {
  CUSTOM = 'custom',
  DOMAIN = 'domain',
  LINE = 'line',
  NIC = 'nic',
  OWNER = 'owner',
  VIRTUAL = 'virtual'
}

/**
 * A structure describing how to manage an sms Response
 */
export interface SmsResponse {
  cgiUrl?: string
  responseType: SmsResponseType
  text?: string
  trackingDefaultSmsSender?: string
  trackingOptions?: SmsResponseTrackingOptions[]
}

/*
 * The tracking media response
 */
export enum SmsResponseTrackingMedia {
  EMAIL = 'email',
  SMS = 'sms',
  VOICE = 'voice'
}

/**
 * The tracking media response
 */
export interface SmsResponseTrackingOptions {
  media: SmsResponseTrackingMedia
  sender: string
  target: string
}

/*
 * Response type
 */
export enum SmsResponseType {
  CGI = 'cgi',
  NONE = 'none',
  TEXT = 'text'
}

/*
 * Restriction type used by the operator to filter sms.
 */
export enum SmsRestrictionCode {
  ALPHA = 'ALPHA',
  BAD_DLR = 'BAD_DLR',
  BLOCKED = 'BLOCKED',
  CODING = 'CODING',
  DLR = 'DLR',
  FLASHONLY = 'FLASHONLY',
  MSISDN = 'MSISDN'
}

/**
 * SMS senders
 */
export interface SmsSender {
  comment?: string
  description: string
  referer: SmsRefererSender
  sender: string
  status: SmsStatusSender
  type?: SmsTypeSender
  validationMedia?: string
}

/**
 * A structure describing all information about senders available
 */
export interface SmsSenderAvailable {
  referer: SmsSenderReferer
  sender: string
}

/*
 * The referer of the available sender
 */
export enum SmsSenderReferer {
  DOMAIN = 'domain',
  NICHANDLE = 'nichandle'
}

/**
 * A structure describing all information about quota informations
 */
export interface SmsSmsSendingReport {
  ids: number[]
  invalidReceivers: string[]
  totalCreditsRemoved: any
  validReceivers: string[]
}

/*
 * Account status
 */
export enum SmsStatusAccount {
  DISABLE = 'disable',
  ENABLE = 'enable'
}

/*
 * All existing status for a given referer
 */
export enum SmsStatusSender {
  DISABLE = 'disable',
  ENABLE = 'enable',
  REFUSED = 'refused',
  WAITINGVALIDATION = 'waitingValidation'
}

/*
 * The media support used to be contacted in case of alert
 */
export enum SmsSupport {
  BOTH = 'both',
  MAIL = 'mail',
  SMS = 'sms'
}

/**
 * Operation on a SMS service
 */
export interface SmsTask {
  function: SmsTodoGeneralPublicFunctions
  status: TelephonyTaskStatus
  step: SmsTodoGeneralPublicSteps
  taskId: number
}

/**
 * Sms template for moderation (Needed to send in US country)
 */
export interface SmsTemplateControl {
  activity: SmsTypeTemplate
  comment: string
  datetime: string
  description: string
  message: string
  name: string
  status: SmsStatusSender
}

/**
 * A structure describing all information about templates informations
 */
export interface SmsTemplates {
  customizedEmailMode: boolean
  customizedSmsMode: boolean
  emailBody?: string
  emailFrom?: string
  emailSubject?: string
  smsBody?: string
}

/*
 * The task function
 */
export enum SmsTodoGeneralPublicFunctions {
  CLEANSMSRECEIVERS = 'cleanSmsReceivers'
}

/*
 * The task step
 */
export enum SmsTodoGeneralPublicSteps {
  CHECKORDER = 'checkOrder',
  CREATEHLRS = 'createHlrs',
  FINISHING = 'finishing',
  SENDMAILREPORT = 'sendMailReport',
  STARTING = 'starting',
  WAITFORHLRS = 'waitForHlrs'
}

/*
 * All existing types for a given sender
 */
export enum SmsTypeSender {
  ALPHA = 'alpha',
  NUMERIC = 'numeric',
  VIRTUAL = 'virtual'
}

/*
 * All existing types for a given template
 */
export enum SmsTypeTemplate {
  ALERTING = 'alerting',
  AUTHENTIFICATION = 'authentification',
  TRANSACTIONAL = 'transactional'
}

/**
 * SMS users
 */
export interface SmsUser {
  alertThresholdInformations: SmsAlertThreshold
  callBack?: string
  ipRestrictions: string[]
  login: string
  password: string
  quotaInformations: SmsQuota
  stopCallBack?: string
}

/**
 * Virtual numbers
 */
export interface SmsVirtualNumber {
  countryCode: SmsVirtualNumberIsoCountryCode
  number: string
}

/**
 * Virtual numbers
 */
export interface SmsVirtualNumberGenericService {
  countryCode: SmsVirtualNumberIsoCountryCode
  number: string
}

/*
 * The ISO formated country code of the number
 */
export enum SmsVirtualNumberIsoCountryCode {
  BE = 'be',
  CH = 'ch',
  DE = 'de',
  ES = 'es',
  FR = 'fr',
  UK = 'uk'
}

/**
 * Sms job
 */
export interface SmsVirtualNumberJob {
  creationDatetime: string
  credits: any
  deliveryReceipt: number
  differedDelivery: number
  id: number
  message: string
  messageLength: number
  numberOfSms: number
  ptt: number
  receiver: string
}

/*
 * Export file format
 */
export enum TelephonyContactsExportFormats {
  CSV = 'csv'
}

/**
 * Telephony API related file hosted
 */
export interface TelephonyPcsFile {
  filename: string
  status: TelephonyPcsFileStatus
  url: string
  urlExpirationDatetime: string
}

/*
 * File providing task status
 */
export enum TelephonyPcsFileStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Operation on a telephony service
 */
export interface TelephonyTask {
  action: string
  message?: string
  objectCreated?: string
  serviceType: string
  status: TelephonyTaskStatus
  taskId: number
}

/*
 * Task status
 */
export enum TelephonyTaskStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  PAUSE = 'pause',
  TODO = 'todo'
}


export class Sms {
  constructor(private client: Client) {}

  /**
   * Operations about the VOIP service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/sms`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * SMS details [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<SmsAccount> {
    let url = `/sms/${serviceName}`

    return this.client.request<SmsAccount>('GET', url)
  }

  /**
   * SMS details [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: SmsAccount): Promise<void> {
    let url = `/sms/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the sms.Blacklist objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists#GET)
   */
  NumbersBlacklistedAssociatedToTheSmsAccount(serviceName: string): Promise<string[]> {
    let url = `/sms/${serviceName}/blacklists`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * SMS blacklist [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists/%7Bnumber%7D#GET)
   */
  /*
  GetThisObjectProperties(number: string, serviceName: string): Promise<SmsBlacklist> {
    let url = `/sms/${serviceName}/blacklists/${number}`

    return this.client.request<SmsBlacklist>('GET', url)
  }
  */

  /**
   * SMS blacklist [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists/%7Bnumber%7D#DELETE)
   */
  DeleteTheBlacklistedSmsNumberGiven(number: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/blacklists/${number}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * document operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/document#GET)
   */
  GetTheMedocumentIdGenerated(serviceName: string, wayType: SmsDocumentWayType, creationDatetimeFrom?: string, creationDatetimeTo?: string, tag?: string): Promise<string> {
    let url = `/sms/${serviceName}/document?`

    const queryParams = new QueryParams()
    if (wayType) { queryParams.set('wayType', wayType.toString()) }
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<string>('GET', url+queryParams.toString())
  }

  /**
   * exceptions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/exceptions#GET)
   */
  DescribeFilterExceptionsInSmsSendingFromASpecificReceiver(receiver: string, serviceName: string): Promise<SmsException[]> {
    let url = `/sms/${serviceName}/exceptions?`

    const queryParams = new QueryParams()
    if (receiver) { queryParams.set('receiver', receiver) }

    return this.client.request<SmsException[]>('GET', url+queryParams.toString())
  }

  /**
   * List the sms.HlrLookupNumber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr#GET)
   */
  HomeLocationRegisterInformationsGiveInformationsAboutAGivenCellularPhone(serviceName: string): Promise<number[]> {
    let url = `/sms/${serviceName}/hlr`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the sms.HlrLookupNumber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr#POST)
   */
  AddOneOrSeveralSendingHlrLookupRequest(serviceName: string, receivers?: string[], receiversDocumentUrl?: string): Promise<SmsSmsSendingReport> {
    let url = `/sms/${serviceName}/hlr`

    return this.client.request<SmsSmsSendingReport>('POST', url, {receivers, receiversDocumentUrl})
  }

  /**
   * Home Location Register informations. Give informations about a given cellular phone. [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SmsHlrLookupNumber> {
    let url = `/sms/${serviceName}/hlr/${id}`

    return this.client.request<SmsHlrLookupNumber>('GET', url)
  }
  */

  /**
   * Sms operator informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr/%7Bid%7D/operator#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SmsHlr> {
    let url = `/sms/${serviceName}/hlr/${id}/operator`

    return this.client.request<SmsHlr>('GET', url)
  }
  */

  /**
   * List the sms.Incoming objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming#GET)
   */
  SmsReceivedAssociatedToTheSmsAccount(serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, sender?: string, tag?: string): Promise<number[]> {
    let url = `/sms/${serviceName}/incoming?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (sender) { queryParams.set('sender', sender) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Sms history of sms incoming received [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SmsIncoming> {
    let url = `/sms/${serviceName}/incoming/${id}`

    return this.client.request<SmsIncoming>('GET', url)
  }
  */

  /**
   * Sms history of sms incoming received [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming/%7Bid%7D#DELETE)
   */
  DeleteTheSmsIncomingHistoryGiven(id: number, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/incoming/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the sms.Job objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs#GET)
   */
  SmsInPendingAssociatedToTheSmsAccount(serviceName: string): Promise<number[]> {
    let url = `/sms/${serviceName}/jobs`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the sms.Job objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs#POST)
   */
  AddOneOrSeveralSendingJobs(message: string, serviceName: string, charset?: SmsCharset, class?: SmsClass, coding?: SmsCoding, differedPeriod?: number, noStopClause?: boolean, priority?: SmsPriority, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number): Promise<SmsSmsSendingReport> {
    let url = `/sms/${serviceName}/jobs`

    return this.client.request<SmsSmsSendingReport>('POST', url, {message, charset, class, coding, differedPeriod, noStopClause, priority, receivers, receiversDocumentUrl, receiversSlotId, sender, senderForResponse, tag, validityPeriod})
  }

  /**
   * Sms job [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SmsJob> {
    let url = `/sms/${serviceName}/jobs/${id}`

    return this.client.request<SmsJob>('GET', url)
  }
  */

  /**
   * Sms job [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs/%7Bid%7D#DELETE)
   */
  DeleteTheSmsJobGivenStopSending(id: number, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/jobs/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the sms.Outgoing objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing#GET)
   */
  SmsSentAssociatedToTheSmsAccount(serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string): Promise<number[]> {
    let url = `/sms/${serviceName}/outgoing?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (deliveryReceipt) { queryParams.set('deliveryReceipt', deliveryReceipt.toString()) }
    if (differedDelivery) { queryParams.set('differedDelivery', differedDelivery.toString()) }
    if (ptt) { queryParams.set('ptt', ptt.toString()) }
    if (receiver) { queryParams.set('receiver', receiver) }
    if (sender) { queryParams.set('sender', sender) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Sms history of sms outgoing sent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SmsOutgoing> {
    let url = `/sms/${serviceName}/outgoing/${id}`

    return this.client.request<SmsOutgoing>('GET', url)
  }
  */

  /**
   * Sms history of sms outgoing sent [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D#DELETE)
   */
  DeleteTheSmsOutgoingHistoryGiven(id: number, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/outgoing/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Sms operator informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D/hlr#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<SmsHlr> {
    let url = `/sms/${serviceName}/outgoing/${id}/hlr`

    return this.client.request<SmsHlr>('GET', url)
  }
  */

  /**
   * List the sms.Phonebook objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks#GET)
   */
  ReturnPhonebooksAssociatedToThisAccount(serviceName: string): Promise<string[]> {
    let url = `/sms/${serviceName}/phonebooks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the sms.Phonebook objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks#POST)
   */
  AddAPhonebookReturnTheBookKey(name: string, serviceName: string): Promise<string> {
    let url = `/sms/${serviceName}/phonebooks`

    return this.client.request<string>('POST', url, {name})
  }

  /**
   * Phone book [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#GET)
   */
  /*
  GetThisObjectProperties(bookKey: string, serviceName: string): Promise<SmsPhonebook> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}`

    return this.client.request<SmsPhonebook>('GET', url)
  }
  */

  /**
   * Phone book [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#PUT)
   */
  /*
  AlterThisObjectProperties(bookKey: string, serviceName: string, payload: SmsPhonebook): Promise<void> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Phone book [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#DELETE)
   */
  DeleteAPhonebook(bookKey: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * export operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/export#GET)
   */
  ExportThePhonebookContacts(bookKey: string, format: TelephonyContactsExportFormats, serviceName: string): Promise<TelephonyPcsFile> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}/export?`

    const queryParams = new QueryParams()
    if (format) { queryParams.set('format', format.toString()) }

    return this.client.request<TelephonyPcsFile>('GET', url+queryParams.toString())
  }

  /**
   * import operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/import#POST)
   */
  ImportAContactsFileSupportedFormatsAreExcelXlsAndXlsxAndCSV(bookKey: string, documentId: string, serviceName: string): Promise<TelephonyTask> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}/import`

    return this.client.request<TelephonyTask>('POST', url, {documentId})
  }

  /**
   * List the sms.PhonebookContact objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact#GET)
   */
  PhonebookContacts(bookKey: string, serviceName: string): Promise<number[]> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the sms.PhonebookContact objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact#POST)
   */
  CreateAPhonebookContactReturnIdentifierOfThePhonebookContact(bookKey: string, group: string, name: string, serviceName: string, surname: string, homeMobile?: any, homePhone?: any, workMobile?: any, workPhone?: any): Promise<number> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact`

    return this.client.request<number>('POST', url, {group, name, surname, homeMobile, homePhone, workMobile, workPhone})
  }

  /**
   * Phone book contact [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(bookKey: string, id: number, serviceName: string): Promise<SmsPhonebookContact> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`

    return this.client.request<SmsPhonebookContact>('GET', url)
  }
  */

  /**
   * Phone book contact [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(bookKey: string, id: number, serviceName: string, payload: SmsPhonebookContact): Promise<void> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Phone book contact [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#DELETE)
   */
  DeleteAPhonebookContact(bookKey: string, id: number, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the sms.Receiver objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers#GET)
   */
  ReceiversPreloadedFromTextOrCsvDocumentFile(serviceName: string): Promise<number[]> {
    let url = `/sms/${serviceName}/receivers`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the sms.Receiver objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers#POST)
   */
  AddANewDocumentOfCsvReceivers(autoUpdate: boolean, description: string, serviceName: string, slotId: number, csvUrl?: string, documentId?: string): Promise<SmsReceiver> {
    let url = `/sms/${serviceName}/receivers`

    return this.client.request<SmsReceiver>('POST', url, {autoUpdate, description, slotId, csvUrl, documentId})
  }

  /**
   * Sms receivers preloaded [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, slotId: number): Promise<SmsReceiver> {
    let url = `/sms/${serviceName}/receivers/${slotId}`

    return this.client.request<SmsReceiver>('GET', url)
  }
  */

  /**
   * Sms receivers preloaded [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, slotId: number, payload: SmsReceiver): Promise<void> {
    let url = `/sms/${serviceName}/receivers/${slotId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Sms receivers preloaded [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#DELETE)
   */
  DeleteTheDocumentFromTheSlot(serviceName: string, slotId: number): Promise<void> {
    let url = `/sms/${serviceName}/receivers/${slotId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * clean operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D/clean#POST)
   */
  CleanTheInvalidAndInactiveReceiversInTheDocumentByRequestingHLROnEachReceiverAReportIsSentByEmailAtTheEndOfTheOperation(freemium: boolean, priceOnly: boolean, serviceName: string, slotId: number): Promise<SmsReceiversAsynchronousCleanReport> {
    let url = `/sms/${serviceName}/receivers/${slotId}/clean`

    return this.client.request<SmsReceiversAsynchronousCleanReport>('POST', url, {freemium, priceOnly})
  }

  /**
   * csv operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D/csv#GET)
   */
  GetTheDocumentDataContainer(serviceName: string, slotId: number): Promise<string> {
    let url = `/sms/${serviceName}/receivers/${slotId}/csv`

    return this.client.request<string>('GET', url)
  }

  /**
   * seeOffers operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/seeOffers#GET)
   */
  DescribeSMSOffersAvailable(countryCurrencyPrice: ReferenceCountry, countryDestination: SmsCountry, quantity: SmsPackQuantity, serviceName: string): Promise<SmsPackOffer[]> {
    let url = `/sms/${serviceName}/seeOffers?`

    const queryParams = new QueryParams()
    if (countryCurrencyPrice) { queryParams.set('countryCurrencyPrice', countryCurrencyPrice.toString()) }
    if (countryDestination) { queryParams.set('countryDestination', countryDestination.toString()) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<SmsPackOffer[]>('GET', url+queryParams.toString())
  }

  /**
   * List the sms.Sender objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders#GET)
   */
  SendersAllowedAssociatedToTheSmsAccount(serviceName: string): Promise<string[]> {
    let url = `/sms/${serviceName}/senders`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the sms.Sender objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders#POST)
   */
  CreateTheSmsSenderGiven(sender: string, serviceName: string, description?: string, reason?: string): Promise<string> {
    let url = `/sms/${serviceName}/senders`

    return this.client.request<string>('POST', url, {sender, description, reason})
  }

  /**
   * SMS senders [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#GET)
   */
  /*
  GetThisObjectProperties(sender: string, serviceName: string): Promise<SmsSender> {
    let url = `/sms/${serviceName}/senders/${sender}`

    return this.client.request<SmsSender>('GET', url)
  }
  */

  /**
   * SMS senders [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#PUT)
   */
  /*
  AlterThisObjectProperties(sender: string, serviceName: string, payload: SmsSender): Promise<void> {
    let url = `/sms/${serviceName}/senders/${sender}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * SMS senders [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#DELETE)
   */
  DeleteTheSmsSenderGiven(sender: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/senders/${sender}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * validate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D/validate#POST)
   */
  ValidateAGivenSenderWithAnActivationCode(code: string, sender: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/senders/${sender}/validate`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * sendersAvailableForValidation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/sendersAvailableForValidation#GET)
   */
  TheSendersThatAreAttachedToYourPersonalInformationsOrOVHServicesAndThatCanBeAutomaticallyValidated(serviceName: string, referer?: SmsSenderReferer): Promise<SmsSenderAvailable[]> {
    let url = `/sms/${serviceName}/sendersAvailableForValidation?`

    const queryParams = new QueryParams()
    if (referer) { queryParams.set('referer', referer.toString()) }

    return this.client.request<SmsSenderAvailable[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/sms/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/sms/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the sms.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/task#GET)
   */
  OperationsOnASMSService(serviceName: string, status?: TelephonyTaskStatus): Promise<number[]> {
    let url = `/sms/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a SMS service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<SmsTask> {
    let url = `/sms/${serviceName}/task/${taskId}`

    return this.client.request<SmsTask>('GET', url)
  }
  */

  /**
   * List the sms.TemplateControl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl#GET)
   */
  TemplatePatternFilledUpForModerationNeededToSendInUSCountry(serviceName: string): Promise<string[]> {
    let url = `/sms/${serviceName}/templatesControl`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the sms.TemplateControl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl#POST)
   */
  CreateTheSmsTemplateControlGiven(activity: SmsTypeTemplate, message: string, name: string, serviceName: string, description?: string, reason?: string): Promise<void> {
    let url = `/sms/${serviceName}/templatesControl`

    return this.client.request<void>('POST', url, {activity, message, name, description, reason})
  }

  /**
   * Sms template for moderation (Needed to send in US country) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<SmsTemplateControl> {
    let url = `/sms/${serviceName}/templatesControl/${name}`

    return this.client.request<SmsTemplateControl>('GET', url)
  }
  */

  /**
   * Sms template for moderation (Needed to send in US country) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#PUT)
   */
  /*
  AlterThisObjectProperties(name: string, serviceName: string, payload: SmsTemplateControl): Promise<void> {
    let url = `/sms/${serviceName}/templatesControl/${name}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Sms template for moderation (Needed to send in US country) [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#DELETE)
   */
  DeleteTheSmsTemplateControl(name: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/templatesControl/${name}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * relaunchValidation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D/relaunchValidation#POST)
   */
  AttemptANewValidationAfterModerationRefusal(description: string, message: string, name: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/templatesControl/${name}/relaunchValidation`

    return this.client.request<void>('POST', url, {description, message})
  }

  /**
   * transferCredits operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/transferCredits#POST)
   */
  CreditTransferBetweenTwoSmsAccounts(credits: any, serviceName: string, smsAccountTarget: string): Promise<void> {
    let url = `/sms/${serviceName}/transferCredits`

    return this.client.request<void>('POST', url, {credits, smsAccountTarget})
  }

  /**
   * List the sms.User objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users#GET)
   */
  UsersAssociatedToTheSmsAccount(serviceName: string): Promise<string[]> {
    let url = `/sms/${serviceName}/users`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the sms.User objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users#POST)
   */
  CreateANewUserForAnSmsAccount(login: string, password: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/users`

    return this.client.request<void>('POST', url, {login, password})
  }

  /**
   * SMS users [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#GET)
   */
  /*
  GetThisObjectProperties(login: string, serviceName: string): Promise<SmsUser> {
    let url = `/sms/${serviceName}/users/${login}`

    return this.client.request<SmsUser>('GET', url)
  }
  */

  /**
   * SMS users [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#PUT)
   */
  /*
  AlterThisObjectProperties(login: string, serviceName: string, payload: SmsUser): Promise<void> {
    let url = `/sms/${serviceName}/users/${login}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * SMS users [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#DELETE)
   */
  DeleteTheSmsUserGiven(login: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/users/${login}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * document operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/document#GET)
   */
  /*
  GetTheMedocumentIdGenerated(login: string, serviceName: string, wayType: SmsDocumentWayType, creationDatetimeFrom?: string, creationDatetimeTo?: string, tag?: string): Promise<string> {
    let url = `/sms/${serviceName}/users/${login}/document?`

    const queryParams = new QueryParams()
    if (wayType) { queryParams.set('wayType', wayType.toString()) }
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<string>('GET', url+queryParams.toString())
  }
  */

  /**
   * List the sms.Incoming objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming#GET)
   */
  SmsReceivedAssociatedToTheSmsUser(login: string, serviceName: string, sender?: string, tag?: string): Promise<number[]> {
    let url = `/sms/${serviceName}/users/${login}/incoming?`

    const queryParams = new QueryParams()
    if (sender) { queryParams.set('sender', sender) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Sms history of sms incoming received [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsIncoming> {
    let url = `/sms/${serviceName}/users/${login}/incoming/${id}`

    return this.client.request<SmsIncoming>('GET', url)
  }
  */

  /**
   * Sms history of sms incoming received [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheSmsIncomingHistoryGiven(id: number, login: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/users/${login}/incoming/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the sms.Job objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs#GET)
   */
  SmsInPendingAssociatedToTheSmsUser(login: string, serviceName: string): Promise<number[]> {
    let url = `/sms/${serviceName}/users/${login}/jobs`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the sms.Job objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs#POST)
   */
  /*
  AddOneOrSeveralSendingJobs(login: string, message: string, serviceName: string, charset?: SmsCharset, class?: SmsClass, coding?: SmsCoding, differedPeriod?: number, noStopClause?: boolean, priority?: SmsPriority, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number): Promise<SmsSmsSendingReport> {
    let url = `/sms/${serviceName}/users/${login}/jobs`

    return this.client.request<SmsSmsSendingReport>('POST', url, {message, charset, class, coding, differedPeriod, noStopClause, priority, receivers, receiversDocumentUrl, receiversSlotId, sender, senderForResponse, tag, validityPeriod})
  }
  */

  /**
   * Sms job [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsJob> {
    let url = `/sms/${serviceName}/users/${login}/jobs/${id}`

    return this.client.request<SmsJob>('GET', url)
  }
  */

  /**
   * Sms job [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheSmsJobGivenStopSending(id: number, login: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/users/${login}/jobs/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the sms.Outgoing objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing#GET)
   */
  SmsSentAssociatedToTheSmsUser(login: string, serviceName: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string): Promise<number[]> {
    let url = `/sms/${serviceName}/users/${login}/outgoing?`

    const queryParams = new QueryParams()
    if (deliveryReceipt) { queryParams.set('deliveryReceipt', deliveryReceipt.toString()) }
    if (differedDelivery) { queryParams.set('differedDelivery', differedDelivery.toString()) }
    if (ptt) { queryParams.set('ptt', ptt.toString()) }
    if (receiver) { queryParams.set('receiver', receiver) }
    if (sender) { queryParams.set('sender', sender) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Sms history of sms outgoing sent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsOutgoing> {
    let url = `/sms/${serviceName}/users/${login}/outgoing/${id}`

    return this.client.request<SmsOutgoing>('GET', url)
  }
  */

  /**
   * Sms history of sms outgoing sent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheSmsOutgoingHistoryGiven(id: number, login: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/users/${login}/outgoing/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Sms operator informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D/hlr#GET)
   */
  /*
  GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsHlr> {
    let url = `/sms/${serviceName}/users/${login}/outgoing/${id}/hlr`

    return this.client.request<SmsHlr>('GET', url)
  }
  */

  /**
   * List the sms.Receiver objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers#GET)
   */
  /*
  ReceiversPreloadedFromTextOrCsvDocumentFile(login: string, serviceName: string): Promise<number[]> {
    let url = `/sms/${serviceName}/users/${login}/receivers`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the sms.Receiver objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers#POST)
   */
  /*
  AddANewDocumentOfCsvReceivers(autoUpdate: boolean, description: string, login: string, serviceName: string, slotId: number, csvUrl?: string, documentId?: string): Promise<SmsReceiver> {
    let url = `/sms/${serviceName}/users/${login}/receivers`

    return this.client.request<SmsReceiver>('POST', url, {autoUpdate, description, slotId, csvUrl, documentId})
  }
  */

  /**
   * Sms receivers preloaded [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#GET)
   */
  /*
  GetThisObjectProperties(login: string, serviceName: string, slotId: number): Promise<SmsReceiver> {
    let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}`

    return this.client.request<SmsReceiver>('GET', url)
  }
  */

  /**
   * Sms receivers preloaded [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(login: string, serviceName: string, slotId: number, payload: SmsReceiver): Promise<void> {
    let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Sms receivers preloaded [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#DELETE)
   */
  /*
  DeleteTheDocumentFromTheSlot(login: string, serviceName: string, slotId: number): Promise<void> {
    let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * clean operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D/clean#POST)
   */
  /*
  CleanTheInvalidAndInactiveReceiversInTheDocumentByRequestingHLROnEachReceiverAReportIsSentByEmailAtTheEndOfTheOperation(freemium: boolean, login: string, priceOnly: boolean, serviceName: string, slotId: number): Promise<SmsReceiversAsynchronousCleanReport> {
    let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}/clean`

    return this.client.request<SmsReceiversAsynchronousCleanReport>('POST', url, {freemium, priceOnly})
  }
  */

  /**
   * csv operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D/csv#GET)
   */
  /*
  GetTheDocumentDataContainer(login: string, serviceName: string, slotId: number): Promise<string> {
    let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}/csv`

    return this.client.request<string>('GET', url)
  }
  */

  /**
   * List the sms.VirtualNumber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers#GET)
   */
  VirtualNumbersAssociatedToTheSmsAccount(serviceName: string): Promise<string[]> {
    let url = `/sms/${serviceName}/virtualNumbers`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Virtual numbers [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D#GET)
   */
  /*
  GetThisObjectProperties(number: string, serviceName: string): Promise<SmsVirtualNumber> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}`

    return this.client.request<SmsVirtualNumber>('GET', url)
  }
  */

  /**
   * The web access for your virtual number chat application [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#GET)
   */
  /*
  GetThisObjectProperties(number: string, serviceName: string): Promise<SmsChatAccess> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`

    return this.client.request<SmsChatAccess>('GET', url)
  }
  */

  /**
   * The web access for your virtual number chat application [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#POST)
   */
  CreateANewWebAccessForThisRessource(number: string, serviceName: string): Promise<SmsChatAccess> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`

    return this.client.request<SmsChatAccess>('POST', url)
  }

  /**
   * The web access for your virtual number chat application [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#DELETE)
   */
  DeleteTheGivenWebAccess(number: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the sms.Incoming objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming#GET)
   */
  /*
  SmsReceivedAssociatedToTheSmsAccount(number: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, sender?: string, tag?: string): Promise<number[]> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/incoming?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (sender) { queryParams.set('sender', sender) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Sms history of sms incoming received [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsIncoming> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/incoming/${id}`

    return this.client.request<SmsIncoming>('GET', url)
  }
  */

  /**
   * Sms history of sms incoming received [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheSmsIncomingHistoryGiven(id: number, number: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/incoming/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the sms.VirtualNumberJob objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs#GET)
   */
  /*
  SmsInPendingAssociatedToTheSmsAccount(number: string, serviceName: string): Promise<number[]> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the sms.VirtualNumberJob objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs#POST)
   */
  /*
  AddOneOrSeveralSendingJobs(message: string, number: string, serviceName: string, charset?: SmsCharset, class?: SmsClass, coding?: SmsCoding, differedPeriod?: number, priority?: SmsPriority, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number): Promise<SmsSmsSendingReport> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs`

    return this.client.request<SmsSmsSendingReport>('POST', url, {message, charset, class, coding, differedPeriod, priority, receivers, receiversDocumentUrl, receiversSlotId, tag, validityPeriod})
  }
  */

  /**
   * Sms job [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsVirtualNumberJob> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`

    return this.client.request<SmsVirtualNumberJob>('GET', url)
  }
  */

  /**
   * Sms job [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheSmsJobGivenStopSending(id: number, number: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the sms.Outgoing objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing#GET)
   */
  /*
  SmsSentAssociatedToTheSmsAccount(number: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string): Promise<number[]> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (deliveryReceipt) { queryParams.set('deliveryReceipt', deliveryReceipt.toString()) }
    if (differedDelivery) { queryParams.set('differedDelivery', differedDelivery.toString()) }
    if (ptt) { queryParams.set('ptt', ptt.toString()) }
    if (receiver) { queryParams.set('receiver', receiver) }
    if (sender) { queryParams.set('sender', sender) }
    if (tag) { queryParams.set('tag', tag) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Sms history of sms outgoing sent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsOutgoing> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}`

    return this.client.request<SmsOutgoing>('GET', url)
  }
  */

  /**
   * Sms history of sms outgoing sent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheSmsOutgoingHistoryGiven(id: number, number: string, serviceName: string): Promise<void> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Sms operator informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D/hlr#GET)
   */
  /*
  GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsHlr> {
    let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}/hlr`

    return this.client.request<SmsHlr>('GET', url)
  }
  */

  /**
   * Get informations about the given ptt code [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/ptts#GET)
   */
  GetInformationsAboutTheGivenPttCode(ptt: number): Promise<SmsPttDetails> {
    let url = `/sms/ptts?`

    const queryParams = new QueryParams()
    if (ptt) { queryParams.set('ptt', ptt.toString()) }

    return this.client.request<SmsPttDetails>('GET', url+queryParams.toString())
  }

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/virtualNumbers#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/sms/virtualNumbers`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Virtual numbers [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/virtualNumbers/%7Bnumber%7D#GET)
   */
  /*
  GetThisObjectProperties(number: string): Promise<SmsVirtualNumberGenericService> {
    let url = `/sms/virtualNumbers/${number}`

    return this.client.request<SmsVirtualNumberGenericService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/virtualNumbers/%7Bnumber%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(number: string): Promise<ServicesService> {
    let url = `/sms/virtualNumbers/${number}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/virtualNumbers/%7Bnumber%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(number: string, payload: ServicesService): Promise<void> {
    let url = `/sms/virtualNumbers/${number}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

}
