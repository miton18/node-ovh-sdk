// GENERATED SDK for pack/xdsl API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Details of a Building
 */
export interface ConnectivityeligibilityBuilding {
  name: string
  nro?: string
  reference: string
  stairs: ConnectivityeligibilityBuildingStair[]
  type: ConnectivityeligibilityBuildingType
}

/**
 * Stair details of a Building
 */
export interface ConnectivityeligibilityBuildingStair {
  floors: string[]
  stair: string
}

/*
 * Building type
 */
export enum ConnectivityeligibilityBuildingType {
  BUILDING = 'BUILDING',
  HOUSE = 'HOUSE'
}

/**
 * A contract
 */
export interface OrderContract {
  content: string
  name: string
  url: string
}

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

/**
 * The parameters needed to create a new landline
 */
export interface PackxdsladdressMoveCreation {
  address: EligibilityAddress
  meeting: EligibilityBookMeetingSlot
}

/**
 * Eligibility
 */
export interface PackxdsladdressMoveEligibility {
  keepCurrentPortability?: EligibilityPortability
  offers: PackxdsladdressMoveOffer[]
}

/**
 * The parameters needed to activate the access on a landline
 */
export interface PackxdsladdressMoveLandline {
  lineNumber: string
  portLineNumber: boolean
  rio?: string
  status: EligibilityLandlineStatus
  unbundling: Deconsolidation
}

/**
 * An offer
 */
export interface PackxdsladdressMoveOffer {
  address: EligibilityAddress
  estimatedDownload: number
  estimatedUpload: number
  lineSectionsLength: LineSectionLength[]
  lineStatus: EligibilityLandlineStatus
  meetingSlots?: EligibilityMeetingSlots
  nra: string
  offerCode: string
  portability: EligibilityPortability
  price: OrderPrice
  provider: EligibilityProvider
  reseller: boolean
  syncDownload: number
  syncUpload: number
  type: DslType
  unbundling: Deconsolidation
}

/**
 * Async task
 */
export interface PackxdslAsyncTask<T> {
  error?: string
  result?: T
  status: PackxdslAsyncTaskStatus
}

/*
 * AsyncTask status
 */
export enum PackxdslAsyncTaskStatus {
  ERROR = 'error',
  OK = 'ok',
  PENDING = 'pending'
}

/*
 * Domain action
 */
export enum PackxdslDomainAction {
  CREATE = 'create',
  TRADE = 'trade',
  TRANSFER = 'transfer'
}

/**
 * Exchange 2013 service
 */
export interface PackxdslExchangeAccountService {
  domain: string
  exchangeService: string
  organizationName: string
}

/**
 * Exchange account service
 */
export interface PackxdslExchangeLiteService {
  domain: string
}

/**
 * Hubic service
 */
export interface PackxdslHubic {
  bytes: number
  domain: string
  isUsed: boolean
  size: string
  voucher?: string
}

/**
 * Migration offer
 */
export interface PackxdslmigrationMigrationOffer {
  contractList: string[]
  contracts: OrderContract[]
  currentOfferPrice: OrderPrice
  description: string
  due?: OrderPrice
  engagementMonths: number[]
  engageMonths?: number
  firstYearPromo?: OrderPrice
  installFees?: OrderPrice
  modemMacToReturn?: string
  modemRental?: OrderPrice
  needModem: boolean
  needNewModem: boolean
  offerName: string
  options: PackxdslmigrationOfferAvailableOption[]
  price: OrderPrice
  subServicesToDelete: PackxdslmigrationSubServiceToDelete[]
  url: string
}

/**
 * List of available Migration offer
 */
export interface PackxdslmigrationMigrationOfferResponse {
  buildings: ConnectivityeligibilityBuilding[]
  offers: PackxdslmigrationMigrationOffer[]
}

/**
 * Available option for the offer
 */
export interface PackxdslmigrationOfferAvailableOption {
  duration: number
  included: number
  name: string
  optional: number
  optionalPrice?: OrderPrice
}

/**
 * Option of Offer
 */
export interface PackxdslmigrationOfferOption {
  name: string
  quantity: number
}

/**
 * Option of Offer
 */
export interface PackxdslmigrationOfferServiceToDelete {
  service: string
  type: PackxdslServiceName
}

/**
 * Sub service to delete
 */
export interface PackxdslmigrationSubServiceToDelete {
  numberToDelete: number
  services: string[]
  type: PackxdslServiceName
}

/**
 * Pack of xDSL services
 */
export interface PackxdslPackAdsl {
  capabilities: PackxdslPackCapabilities
  description?: string
  offerDescription: string
  offerPrice: OrderPrice
  packName: string
}

/**
 * Describe the capabilities of this pack
 */
export interface PackxdslPackCapabilities {
  canMoveAddress: boolean
  isLegacyOffer: boolean
}

/**
 * Information about pack xdsl
 */
export interface PackxdslPackDetail {
  accessname: string
  description: string
  number: string
  packname: string
  type: DslType
}

/**
 * Informations about a promotion code
 */
export interface PackxdslpromotionCodeCapabilities {
  amount: OrderPrice
  canGenerate: boolean
  engagement: number
  reasonCodes: PackxdslpromotionCodeReasonCodes[]
}

/*
 * Reasons why the promotion code can not be generated
 */
export enum PackxdslpromotionCodeReasonCodes {
  NOMOREAVAILABLE = 'noMoreAvailable',
  OFFERNOTCOMPATIBLE = 'offerNotCompatible',
  SERVICENOTINOKSTATE = 'serviceNotInOkState',
  STILLENGAGED = 'stillEngaged',
  TASKINPROGRESS = 'taskInProgress'
}

/**
 * Details about the resiliation
 */
export interface PackxdslResiliationFollowUpDetail {
  dateTodo: string
  needModemReturn: boolean
  registrationDate: string
  status: string
}

/*
 * Reason of a resiliation
 */
export enum PackxdslResiliationReason {
  ADDRESSMOVE = 'addressMove',
  BILLINGPROBLEMS = 'billingProblems',
  CESSATIONOFACTIVITY = 'cessationOfActivity',
  CHANGEOFTERMS = 'changeOfTerms',
  FTTH = 'ftth',
  GOTOCOMPETITOR = 'goToCompetitor',
  OTHER = 'other',
  TECHNICALPROBLEMS = 'technicalProblems'
}

/**
 * Information about the reason for the resiliation
 */
export interface PackxdslResiliationSurvey {
  comment?: string
  type: PackxdslResiliationReason
}

/**
 * Show the resiliation terms
 */
export interface PackxdslResiliationTerms {
  due: OrderPrice
  engageDate?: string
  minResiliationDate: string
  resiliationDate: string
  resiliationReasons: PackxdslResiliationReasonEnum[]
}

/**
 * Service link to the pack
 */
export interface PackxdslService {
  domain: string
  id: any
  type: PackxdslServiceName
}

/**
 * Informations about a service
 */
export interface PackxdslServiceInformation {
  inCreation: number
  name: PackxdslServiceName
  total: number
  used: number
}

/*
 * Service name
 */
export enum PackxdslServiceName {
  DOMAIN = 'domain',
  EMAILPRO = 'emailPro',
  EXCHANGEACCOUNT = 'exchangeAccount',
  EXCHANGEINDIVIDUAL = 'exchangeIndividual',
  EXCHANGELITE = 'exchangeLite',
  EXCHANGEORGANIZATION = 'exchangeOrganization',
  HOSTEDEMAIL = 'hostedEmail',
  HUBIC = 'hubic',
  MODEM = 'modem',
  OVERTHEBOXHARDWARE = 'overTheBoxHardware',
  OVERTHEBOXSERVICE = 'overTheBoxService',
  SITEBUILDERFULL = 'siteBuilderFull',
  SITEBUILDERSTART = 'siteBuilderStart',
  VOIPALIAS = 'voipAlias',
  VOIPBILLINGACCOUNT = 'voipBillingAccount',
  VOIPECOFAX = 'voipEcoFax',
  VOIPLINE = 'voipLine',
  XDSLACCESS = 'xdslAccess'
}

/**
 * Shipping address
 */
export interface PackxdslShippingAddress {
  address: string
  cityName: string
  countryCode: string
  firstName: string
  lastName: string
  shippingId: string
  zipCode: string
}

/*
 * Allowed contexts when looking for shipping addresses
 */
export enum PackxdslShippingAddressContext {
  MIGRATION = 'migration',
  VOIPLINE = 'voipLine'
}

/**
 * SiteBuilder available domain infos
 */
export interface PackxdslSiteBuilderDomain {
  defaultSubDomain: string
  domain: string
}

/**
 * SiteBuilder template infos
 */
export interface PackxdslSiteBuilderTemplate {
  bkId: number
  id: number
  name: string
  previewImg: string
  reference: string
  thumbImage: string
}

/**
 * Describes the current status of a task
 */
export interface PackxdslTask {
  function: string
  id: number
  status: PackxdslTaskStatus
  updateDate: string
}

/*
 * Status of a task.
 */
export enum PackxdslTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  PROBLEM = 'problem',
  TODO = 'todo'
}

/**
 * Terms to unpack services
 */
export interface PackxdslUnpackTerms {
  isAllowed: boolean
  price: OrderPrice
  renewPeriod: any
  renewPrice: OrderPrice
}

/**
 * Hardware for VoIP line
 */
export interface PackxdslVoIPHardware {
  deposit?: OrderPrice
  image?: string
  label: string
  max?: number
  name: string
  needShipping: boolean
  url?: string
}

/**
 * Represents an order of VoIP lines
 */
export interface PackxdslVoIPLineOrder {
  needPayment: boolean
  orderId: number
  orderUrl: string
  taskIds: number[]
}

/**
 * VOIP line services
 */
export interface PackxdslVoipLineService {
  billingAccount: string
  domain: string
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

/*
 * Deconsolidation of the line.
 */
export enum Deconsolidation {
  CREATENEIGHBOUR = 'createNeighbour',
  CREATION = 'creation',
  CREATIONNEIGHBOUR = 'creationNeighbour',
  PARTIAL = 'partial',
  TOTAL = 'total'
}

/*
 * Possible DSL technologies
 */
export enum DslType {
  ADSL = 'adsl',
  FTTH = 'ftth',
  SDSL = 'sdsl',
  VDSL = 'vdsl'
}

/**
 * Represents an address
 */
export interface EligibilityAddress {
  building?: string
  city: EligibilityCity
  door?: string
  floor?: string
  logo?: string
  owner?: string
  residence?: string
  stair?: string
  street?: EligibilityStreet
  streetNumber?: string
}

/**
 * Parameters to book a time slot for a meeting
 */
export interface EligibilityBookMeetingSlot {
  fakeMeeting: boolean
  meetingSlot?: EligibilityMeetingSlot
  name: string
}

/**
 * Represent a city
 */
export interface EligibilityCity {
  inseeCode: string
  locality?: string
  name: string
  zipCode: string
}

/**
 * A message and its code
 */
export interface EligibilityCodeAndMessage {
  code: string
  message: string
}

/*
 * Status of a landline
 */
export enum EligibilityLandlineStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

/**
 * Represents a time slot for a meeting
 */
export interface EligibilityMeetingSlot {
  endDate: string
  startDate: string
  uiCode: string
}

/**
 * List of available meeting time slots
 */
export interface EligibilityMeetingSlots {
  canBookFakeMeeting: boolean
  meetingSlots: EligibilityMeetingSlot[]
}

/**
 * Eligibility of the portability of the line number
 */
export interface EligibilityPortability {
  comments: EligibilityCodeAndMessage[]
  eligible: boolean
  underCondition: boolean
  warnings: EligibilityCodeAndMessage[]
}

/*
 * The providers
 */
export enum EligibilityProvider {
  AXIONE = 'axione',
  FT = 'ft',
  KOSC = 'kosc',
  OVH = 'ovh',
  SFR = 'sfr'
}

/**
 * Represent a street
 */
export interface EligibilityStreet {
  name: string
  rivoliCode: string
}

/**
 * Details that the user used for his voucher
 */
export interface HubicHubicDetailsResponse {
  email: string
}

/**
 * 
 */
export interface LineSectionLength {
  diameter: number
  length: number
}


export class PackXdsl {
  constructor(private client: Client) {}

  /**
   * Operations about the PACK service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/pack/xdsl`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Pack of xDSL services [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D#GET)
   */
  GetThisObjectProperties(packName: string): Promise<PackxdslPackAdsl> {
    let url = `/pack/xdsl/${packName}`

    return this.client.request<PackxdslPackAdsl>('GET', url)
  }

  /**
   * Pack of xDSL services [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D#PUT)
   */
  AlterThisObjectProperties(packName: string, payload: PackxdslPackAdsl): Promise<void> {
    let url = `/pack/xdsl/${packName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * eligibility operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/addressMove/eligibility#POST)
   */
  EligibilityToMoveTheAccess(packName: string, address?: EligibilityAddress, lineNumber?: string): Promise<any> {
    let url = `/pack/xdsl/${packName}/addressMove/eligibility`

    return this.client.request<any>('POST', url, {address, lineNumber})
  }

  /**
   * move operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/addressMove/move#POST)
   */
  MoveTheXdslAccessToAnotherAddress(keepCurrentNumber: boolean, offerCode: string, packName: string, creation?: PackxdsladdressMoveCreation, landline?: PackxdsladdressMoveLandline, moveOutDate?: string, provider?: EligibilityProvider): Promise<any> {
    let url = `/pack/xdsl/${packName}/addressMove/move`

    return this.client.request<any>('POST', url, {keepCurrentNumber, offerCode, creation, landline, moveOutDate, provider})
  }

  /**
   * moveFtth operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/addressMove/moveFtth#POST)
   */
  MoveTheFTTHAccessToAnotherAddress(buildingReference: string, floor: string, otp: boolean, packName: string, stair: string, moveOutDate?: string, otpReference?: string): Promise<any> {
    let url = `/pack/xdsl/${packName}/addressMove/moveFtth`

    return this.client.request<any>('POST', url, {buildingReference, floor, otp, stair, moveOutDate, otpReference})
  }

  /**
   * canCancelResiliation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/canCancelResiliation#GET)
   */
  CheckIfTheResiliationCanBeCancelled(packName: string): Promise<boolean> {
    let url = `/pack/xdsl/${packName}/canCancelResiliation`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * cancelResiliation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/cancelResiliation#POST)
   */
  CancelTheOngoingResiliation(packName: string): Promise<void> {
    let url = `/pack/xdsl/${packName}/cancelResiliation`

    return this.client.request<void>('POST', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/pack/xdsl/${packName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * tlds operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/domain/options/tlds#GET)
   */
  GetTheAvailableTldsForDomainOrder(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/domain/options/tlds`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.DomainService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/domain/services#GET)
   */
  DomainServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/domain/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.DomainService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/domain/services#POST)
   */
  ActivateADomainService(action: PackxdslDomainAction, domain: string, packName: string, tld: string, authInfo?: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/domain/services`

    return this.client.request<PackxdslTask>('POST', url, {action, domain, tld, authInfo})
  }

  /**
   * domains operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/options/domains#GET)
   */
  ListTheAvailableDomainsForTheEmailProService(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/emailPro/options/domains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * isEmailAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/options/isEmailAvailable#GET)
   */
  CheckIfTheGivenEmailAddressIsAvailableForAnEmailProActivation(email: string, packName: string): Promise<boolean> {
    let url = `/pack/xdsl/${packName}/emailPro/options/isEmailAvailable?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<boolean>('GET', url+queryParams.toString())
  }

  /**
   * List the pack.xdsl.EmailProService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/services#GET)
   */
  ListTheEmailProServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/emailPro/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.EmailProService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/services#POST)
   */
  ActivateAnEmailProService(email: string, packName: string, password: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/emailPro/services`

    return this.client.request<PackxdslTask>('POST', url, {email, password})
  }

  /**
   * List the pack.xdsl.ExchangeAccountService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeAccount/services#GET)
   */
  Exchange2013Services(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/exchangeAccount/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Exchange 2013 service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeAccount/services/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslExchangeAccountService> {
    let url = `/pack/xdsl/${packName}/exchangeAccount/services/${domain}`

    return this.client.request<PackxdslExchangeAccountService>('GET', url)
  }
  */

  /**
   * domains operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/options/domains#GET)
   */
  GetTheAvailableDomains(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/exchangeIndividual/options/domains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * isEmailAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/options/isEmailAvailable#GET)
   */
  CheckIfTheEmailAddressIsAvailableForServiceCreation(email: string, packName: string): Promise<boolean> {
    let url = `/pack/xdsl/${packName}/exchangeIndividual/options/isEmailAvailable?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<boolean>('GET', url+queryParams.toString())
  }

  /**
   * List the pack.xdsl.ExchangeIndividual objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/services#GET)
   */
  ExchangeServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/exchangeIndividual/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.ExchangeIndividual objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/services#POST)
   */
  ActivateAnExchangeService(email: string, packName: string, password: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/exchangeIndividual/services`

    return this.client.request<PackxdslTask>('POST', url, {email, password})
  }

  /**
   * isEmailAvailable operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/options/isEmailAvailable#GET)
   */
  /*
  CheckIfTheEmailAddressIsAvailableForServiceCreation(email: string, packName: string): Promise<boolean> {
    let url = `/pack/xdsl/${packName}/exchangeLite/options/isEmailAvailable?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<boolean>('GET', url+queryParams.toString())
  }
  */

  /**
   * List the pack.xdsl.ExchangeLiteService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/services#GET)
   */
  ExchangeLiteServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/exchangeLite/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.ExchangeLiteService objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/services#POST)
   */
  ActivateAExchangeLiteService(email: string, packName: string, password: string, antispam?: boolean, displayName?: string, firstName?: string, initials?: string, lastName?: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/exchangeLite/services`

    return this.client.request<PackxdslTask>('POST', url, {email, password, antispam, displayName, firstName, initials, lastName})
  }

  /**
   * Exchange account service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/services/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslExchangeLiteService> {
    let url = `/pack/xdsl/${packName}/exchangeLite/services/${domain}`

    return this.client.request<PackxdslExchangeLiteService>('GET', url)
  }
  */

  /**
   * List the pack.xdsl.ExchangeOrganizationService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeOrganization/services#GET)
   */
  Exchange2013OrganizationServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/exchangeOrganization/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * domains operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hostedEmail/options/domains#GET)
   */
  GetTheHostedemailAvailableDomains(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/hostedEmail/options/domains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.HostedEmailService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hostedEmail/services#GET)
   */
  HostedEmailServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/hostedEmail/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.HostedEmailService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hostedEmail/services#POST)
   */
  ActivateAnHostedEmailService(email: string, packName: string, password: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/hostedEmail/services`

    return this.client.request<PackxdslTask>('POST', url, {email, password})
  }

  /**
   * List the pack.xdsl.Hubic objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hubic/services#GET)
   */
  HubicPersoServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/hubic/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Hubic service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hubic/services/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslHubic> {
    let url = `/pack/xdsl/${packName}/hubic/services/${domain}`

    return this.client.request<PackxdslHubic>('GET', url)
  }
  */

  /**
   * details operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hubic/services/%7Bdomain%7D/details#GET)
   */
  DetailsAssociatedToAVoucher(domain: string, packName: string): Promise<any> {
    let url = `/pack/xdsl/${packName}/hubic/services/${domain}/details`

    return this.client.request<any>('GET', url)
  }

  /**
   * migrate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/migration/migrate#POST)
   */
  MigrateToTheSelectedOffer(acceptContracts: boolean, offerName: string, packName: string, buildingReference?: string, engageMonths?: number, floor?: string, mondialRelayId?: number, nicShipping?: string, options?: PackxdslmigrationOfferOption[], otp?: boolean, otpReference?: string, stair?: string, subServicesToDelete?: PackxdslmigrationOfferServiceToDelete[]): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/migration/migrate`

    return this.client.request<PackxdslTask>('POST', url, {acceptContracts, offerName, buildingReference, engageMonths, floor, mondialRelayId, nicShipping, options, otp, otpReference, stair, subServicesToDelete})
  }

  /**
   * offers operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/migration/offers#POST)
   */
  GetThePossibilitiesOfMigrationOffersAvailable(packName: string): Promise<any> {
    let url = `/pack/xdsl/${packName}/migration/offers`

    return this.client.request<any>('POST', url)
  }

  /**
   * servicesToDelete operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/migration/servicesToDelete#POST)
   */
  CalculateServicesToDeleteWithNewOfferAndOptions(offerName: string, packName: string, options?: PackxdslmigrationOfferOption[]): Promise<PackxdslmigrationSubServiceToDelete[]> {
    let url = `/pack/xdsl/${packName}/migration/servicesToDelete`

    return this.client.request<PackxdslmigrationSubServiceToDelete[]>('POST', url, {offerName, options})
  }

  /**
   * capabilities operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/promotionCode/capabilities#GET)
   */
  GetInformationsAboutThePromotionCodeGeneration(packName: string): Promise<PackxdslpromotionCodeCapabilities> {
    let url = `/pack/xdsl/${packName}/promotionCode/capabilities`

    return this.client.request<PackxdslpromotionCodeCapabilities>('GET', url)
  }

  /**
   * generate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/promotionCode/generate#POST)
   */
  CreatesATaskToGenerateANewPromotionCode(packName: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/promotionCode/generate`

    return this.client.request<PackxdslTask>('POST', url)
  }

  /**
   * resiliate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/resiliate#POST)
   */
  ResiliateThePack(packName: string, resiliationSurvey: PackxdslResiliationSurvey, resiliationDate?: string, servicesToKeep?: any): Promise<PackxdslResiliationFollowUpDetail> {
    let url = `/pack/xdsl/${packName}/resiliate`

    return this.client.request<PackxdslResiliationFollowUpDetail>('POST', url, {resiliationSurvey, resiliationDate, servicesToKeep})
  }

  /**
   * resiliationFollowUp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/resiliationFollowUp#GET)
   */
  GetInformationAboutTheOngoingResiliation(packName: string): Promise<PackxdslResiliationFollowUpDetail> {
    let url = `/pack/xdsl/${packName}/resiliationFollowUp`

    return this.client.request<PackxdslResiliationFollowUpDetail>('GET', url)
  }

  /**
   * resiliationTerms operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/resiliationTerms#GET)
   */
  GetResiliationTerms(packName: string, resiliationDate?: string): Promise<PackxdslResiliationTerms> {
    let url = `/pack/xdsl/${packName}/resiliationTerms?`

    const queryParams = new QueryParams()
    if (resiliationDate) { queryParams.set('resiliationDate', resiliationDate.toString()) }

    return this.client.request<PackxdslResiliationTerms>('GET', url+queryParams.toString())
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(packName: string): Promise<ServicesService> {
    let url = `/pack/xdsl/${packName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(packName: string, payload: ServicesService): Promise<void> {
    let url = `/pack/xdsl/${packName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * services operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/services#GET)
   */
  InformationsAboutTheServicesIncludedInThePack(packName: string): Promise<PackxdslServiceInformation[]> {
    let url = `/pack/xdsl/${packName}/services`

    return this.client.request<PackxdslServiceInformation[]>('GET', url)
  }

  /**
   * shippingAddresses operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/shippingAddresses#GET)
   */
  AllowedShippingAddressesGivenAContext(context: PackxdslShippingAddressContext, packName: string): Promise<PackxdslShippingAddress[]> {
    let url = `/pack/xdsl/${packName}/shippingAddresses?`

    const queryParams = new QueryParams()
    if (context) { queryParams.set('context', context.toString()) }

    return this.client.request<PackxdslShippingAddress[]>('GET', url+queryParams.toString())
  }

  /**
   * domains operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/options/domains#GET)
   */
  /*
  GetTheAvailableDomains(packName: string): Promise<PackxdslSiteBuilderDomain[]> {
    let url = `/pack/xdsl/${packName}/siteBuilderFull/options/domains`

    return this.client.request<PackxdslSiteBuilderDomain[]>('GET', url)
  }
  */

  /**
   * templates operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/options/templates#GET)
   */
  GetTheAvailableTemplates(packName: string): Promise<PackxdslSiteBuilderTemplate[]> {
    let url = `/pack/xdsl/${packName}/siteBuilderFull/options/templates`

    return this.client.request<PackxdslSiteBuilderTemplate[]>('GET', url)
  }

  /**
   * List the pack.xdsl.SiteBuilderFullService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/services#GET)
   */
  SitebuilderFullServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/siteBuilderFull/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.SiteBuilderFullService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/services#POST)
   */
  ActivateASitebuilderFullService(domain: string, packName: string, subdomain: string, templateId: number): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/siteBuilderFull/services`

    return this.client.request<PackxdslTask>('POST', url, {domain, subdomain, templateId})
  }

  /**
   * domains operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/options/domains#GET)
   */
  /*
  GetTheAvailableDomains(packName: string): Promise<PackxdslSiteBuilderDomain[]> {
    let url = `/pack/xdsl/${packName}/siteBuilderStart/options/domains`

    return this.client.request<PackxdslSiteBuilderDomain[]>('GET', url)
  }
  */

  /**
   * templates operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/options/templates#GET)
   */
  /*
  GetTheAvailableTemplates(packName: string): Promise<PackxdslSiteBuilderTemplate[]> {
    let url = `/pack/xdsl/${packName}/siteBuilderStart/options/templates`

    return this.client.request<PackxdslSiteBuilderTemplate[]>('GET', url)
  }
  */

  /**
   * List the pack.xdsl.SiteBuilderStartService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/services#GET)
   */
  SitebuilderStartServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/siteBuilderStart/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.SiteBuilderStartService objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/services#POST)
   */
  /*
  ActivateASitebuilderFullService(domain: string, packName: string, subdomain: string, templateId: number): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/siteBuilderStart/services`

    return this.client.request<PackxdslTask>('POST', url, {domain, subdomain, templateId})
  }
  */

  /**
   * List the pack.xdsl.Service objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/subServices#GET)
   */
  ListServicesContainedInThePack(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/subServices`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Service link to the pack [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/subServices/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslService> {
    let url = `/pack/xdsl/${packName}/subServices/${domain}`

    return this.client.request<PackxdslService>('GET', url)
  }
  */

  /**
   * keepServiceTerms operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/subServices/%7Bdomain%7D/keepServiceTerms#GET)
   */
  GiveTheConditionToUnpackServiceFromPack(domain: string, packName: string): Promise<PackxdslUnpackTerms> {
    let url = `/pack/xdsl/${packName}/subServices/${domain}/keepServiceTerms`

    return this.client.request<PackxdslUnpackTerms>('GET', url)
  }

  /**
   * List the pack.xdsl.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/tasks#GET)
   */
  TasksScheduledForThisPack(packName: string, _function?: string, status?: PackxdslTaskStatus): Promise<number[]> {
    let url = `/pack/xdsl/${packName}/tasks?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Describes the current status of a task [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, packName: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/tasks/${id}`

    return this.client.request<PackxdslTask>('GET', url)
  }
  */

  /**
   * List the pack.xdsl.BillingAccountService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipBillingAccount/services#GET)
   */
  VOIPBillingAccounts(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/voipBillingAccount/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.VoipEcoFaxService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipEcofax/services#GET)
   */
  VOIPEcofaxService(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/voipEcofax/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.VoipEcoFaxService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipEcofax/services#POST)
   */
  ActivateAVoicefaxService(packName: string): Promise<PackxdslTask> {
    let url = `/pack/xdsl/${packName}/voipEcofax/services`

    return this.client.request<PackxdslTask>('POST', url)
  }

  /**
   * customShippingAddress operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/options/customShippingAddress#POST)
   */
  CreateANewShippingIdToBeUsedForVoipLineServiceCreation(address: string, cityName: string, firstName: string, lastName: string, packName: string, zipCode: string): Promise<number> {
    let url = `/pack/xdsl/${packName}/voipLine/options/customShippingAddress`

    return this.client.request<number>('POST', url, {address, cityName, firstName, lastName, zipCode})
  }

  /**
   * hardwares operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/options/hardwares#GET)
   */
  GetAvailableHardwares(packName: string): Promise<PackxdslVoIPHardware[]> {
    let url = `/pack/xdsl/${packName}/voipLine/options/hardwares`

    return this.client.request<PackxdslVoIPHardware[]>('GET', url)
  }

  /**
   * shippingAddresses operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/options/shippingAddresses#GET)
   */
  GetAvailableShippingAddresses(packName: string): Promise<PackxdslShippingAddress[]> {
    let url = `/pack/xdsl/${packName}/voipLine/options/shippingAddresses`

    return this.client.request<PackxdslShippingAddress[]>('GET', url)
  }

  /**
   * List the pack.xdsl.VoipLineService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/services#GET)
   */
  VOIPLineServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/voipLine/services`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the pack.xdsl.VoipLineService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/services#POST)
   */
  ActivateAVoipLineService(hardwareNames: string[], packName: string, mondialRelayId?: string, shippingId?: string): Promise<PackxdslVoIPLineOrder> {
    let url = `/pack/xdsl/${packName}/voipLine/services`

    return this.client.request<PackxdslVoIPLineOrder>('POST', url, {hardwareNames, mondialRelayId, shippingId})
  }

  /**
   * VOIP line services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/services/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslVoipLineService> {
    let url = `/pack/xdsl/${packName}/voipLine/services/${domain}`

    return this.client.request<PackxdslVoipLineService>('GET', url)
  }
  */

  /**
   * List the pack.xdsl.XdslAccessService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/xdslAccess/services#GET)
   */
  XDSLAccessServices(packName: string): Promise<string[]> {
    let url = `/pack/xdsl/${packName}/xdslAccess/services`

    return this.client.request<string[]>('GET', url)
  }

}
