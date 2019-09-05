// GENERATED SDK for domain API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Dnssec Status
 */
export enum DnssecDnssecStatus {
  DISABLEINPROGRESS = 'disableInProgress',
  DISABLED = 'disabled',
  ENABLEINPROGRESS = 'enableInProgress',
  ENABLED = 'enabled'
}

/**
 * Key type
 */
export interface DnssecKey {
  algorithm: DnssecKeyAlgorithm
  flags: DnssecKeyFlag
  publicKey: string
  tag: number
}

/*
 * Dnssec Algorithm
//                         ###
//                         5  : RSASHA1
//                         7  : RSASHA1-NSEC3-SHA1
//                         8  : RSASHA256
//                         10 : RSASHA512
//                         13 : ECDSAP256SHA256
//                         14 : ECDSAP384SHA384
 */
export type DnssecKeyAlgorithm = 10 | 13 | 14 | 5 | 7 | 8

/*
 * Dnssec Key Flag Type
//                         ###
//                         256 : Zone Signing Key (ZSK)
//                         257 : Key  Signing Key (KSK)
 */
export type DnssecKeyFlag = 256 | 257

/*
 * 
//                 Generated : The key has been created, but has not yet been used for anything.
//                 ###
//                 Published : The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.
//                 ###
//                 Ready     : The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.
//                 ###
//                 Active    : The key has started to be used to sign RRsets.
//                 ###
//                 Retired   : A successor key has become active and this key is no longer being used to generate RRSIGs.
//                 ###
//                 Removed   : The key has been removed from the zone.
//                 ###
//                 Revoked   : The key is published for a period with the "revoke" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.
 */
export enum DnssecKeyStatus {
  ACTIVE = 'active',
  GENERATED = 'generated',
  PUBLISHED = 'published',
  REMOVED = 'removed',
  RETIRED = 'retired',
  REVOKED = 'revoked'
}

/**
 * Representation of the obfuscated emails configuration
 */
export interface DomainconfigurationsObfuscatedEmail {
  type: DomainContactAllTypes
  value: string
}

/**
 * Representation of the optin configuration
 */
export interface DomainconfigurationsOptin {
  fields: DomainOptinFieldsEnum[]
  type: DomainContactAllTypes
}

/*
 * Contact type fields
 */
export enum DomainContactAllTypes {
  ADMIN = 'admin',
  ALL = 'all',
  BILLING = 'billing',
  OWNER = 'owner',
  TECH = 'tech'
}

/**
 * CurrentNameServer
 */
export interface DomainCurrentNameServer {
  host: string
  id: number
  ip?: string
  isUsed: boolean
  toDelete: boolean
}

/**
 * Representation of an Inpi additional information for a corporation
 */
export interface DomaindataAfnicCorporationTrademarkContact {
  contactId: number
  id: number
  inpiNumber: string
  inpiTrademarkOwner: string
}

/**
 * Representation of a Association additional information
 */
export interface DomaindataAssociationContact {
  contactId: number
  declarationDate: string
  id: number
  publicationDate: string
  publicationNumber: string
  publicationPageNumber: string
}

/**
 * Address for a claim notice holder
 */
export interface DomaindataclaimNoticeAddress {
  city?: string
  countryCode?: NichandleCountry
  fax?: any
  faxExtension?: string
  postalCode?: string
  stateOrProvince?: string
  streets: string[]
  voice?: any
  voiceExtension?: string
}

/**
 * Definition of claim notices applying to a domain name
 */
export interface DomaindataclaimNoticeClaimNotice {
  claims?: DomaindataclaimNoticeClaimNoticeDecision[]
  endingDate: string
  id: string
  label: string
  startingDate?: string
  type?: DomaindataclaimNoticeClaimNoticeType
}

/**
 * Definition of a single claim notice
 */
export interface DomaindataclaimNoticeClaimNoticeDecision {
  classifications: DomaindataclaimNoticeClassification[]
  courtDecisions: DomaindataclaimNoticeCourtDecision[]
  goodsAndServices: string
  jurisdiction: string
  jurisdictionCountryCode: string
  markName: string
  trademarkContacts: DomaindataclaimNoticeContact[]
  trademarkHolders: DomaindataclaimNoticeContact[]
  trademarkUDRP: DomaindataclaimNoticeUDRP[]
}

/*
 * Type of claim notice
 */
export enum DomaindataclaimNoticeClaimNoticeType {
  UK = 'UK',
  TRADEMARK = 'TRADEMARK'
}

/**
 * Definition of a trademark claim notice classification
 */
export interface DomaindataclaimNoticeClassification {
  description: string
  number: string
}

/**
 * Contact definition of a claim notice holder
 */
export interface DomaindataclaimNoticeContact {
  address: DomaindataclaimNoticeAddress
  email?: string
  entitlement?: string
  name?: string
  organisation?: string
  type?: string
}

/**
 * Definition of a court decision
 */
export interface DomaindataclaimNoticeCourtDecision {
  countryCode: string
  courtName: string
  referenceNumber: string
  regions: string[]
}

/**
 * Definition of a UDRP procedure
 */
export interface DomaindataclaimNoticeUDRP {
  caseNumber: string
  udrpProvider: string
}

/**
 * Representation of an .pro Contact Resource
 */
export interface DomaindataProContact {
  authority: string
  authorityWebsite: string
  id: number
  jobDescription: string
  licenseNumber: string
}

/**
 * Representation of a SMD Resource file
 */
export interface DomaindataSmd {
  data: string
  id: number
  notAfter?: string
  notBefore?: string
  protectedLabels: DomaindataSmdLabel[]
  smdId?: string
}

/**
 * Representation of a protected label
 */
export interface DomaindataSmdLabel {
  label: string
  trademark: string
}

/**
 * Domain's DNSSEC Key
 */
export interface DomainDnssecKey {
  algorithm: DnssecKeyAlgorithm
  flags: DnssecKeyFlag
  id: number
  publicKey: string
  status: DnssecKeyStatus
  tag: number
}

/**
 * Domain name administration
 */
export interface DomainDomain {
  dnssecSupported: boolean
  domain: string
  glueRecordIpv6Supported: boolean
  glueRecordMultiIpSupported: boolean
  lastUpdate: string
  nameServerType: DomainDomainNsType
  offer: DomainOffer
  owoSupported: boolean
  parentService?: DomainParentService
  transferLockStatus: DomainDomainLockStatus
  whoisOwner: string
}

/*
 * All contact type for a domain
 */
export enum DomainDomainContactType {
  ADMIN = 'admin',
  BILLING = 'billing',
  OWNER = 'owner',
  TECH = 'tech'
}

/*
 * Domain lock status
 */
export enum DomainDomainLockStatus {
  LOCKED = 'locked',
  LOCKING = 'locking',
  UNAVAILABLE = 'unavailable',
  UNLOCKED = 'unlocked',
  UNLOCKING = 'unlocking'
}

/**
 * Name server
 */
export interface DomainDomainNs {
  host: string
  ip?: string
}

/*
 * DNS server state
 */
export enum DomainDomainNsState {
  KO = 'ko',
  OK = 'ok'
}

/**
 * DNS server status
 */
export interface DomainDomainNsStatus {
  state: DomainDomainNsState
  type: DomainDomainNsType
  usedSince?: string
}

/*
 * DomainNS Type
 */
export enum DomainDomainNsType {
  EXTERNAL = 'external',
  HOSTED = 'hosted'
}

/*
 * All options a domain can have
 */
export enum DomainDomainOption {
  DNSANYCAST = 'dnsAnycast'
}

/*
 * All states a domain Option can be in
 */
export enum DomainDomainOptionState {
  RELEASED = 'released',
  SUBSCRIBED = 'subscribed'
}

/**
 * Glue record
 */
export interface DomainGlueRecord {
  host: string
  ips: string[]
}

/*
 * Offer
 */
export enum DomainOffer {
  DIAMOND = 'diamond',
  GOLD = 'gold',
  PLATINUM = 'platinum'
}

/*
 * Operation status
 */
export enum DomainOperationStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/*
 * Whois optin fields
 */
export enum DomainOptinFields {
  ADDRESS = 'address',
  CITY = 'city',
  COUNTRY = 'country',
  EMAIL = 'email',
  FAX = 'fax',
  NAME = 'name',
  ORGANISATION = 'organisation',
  PHONE = 'phone',
  PROVINCE = 'province',
  ZIP = 'zip'
}

/**
 * Information about the options of a domain
 */
export interface DomainOption {
  expirationDate: string
  option: DomainDomainOption
  state: DomainDomainOptionState
}

/**
 * Obfuscate whois
 */
export interface DomainOwo {
  field: DomainWhoisObfuscatorFields
}

/**
 * Parent service
 */
export interface DomainParentService {
  name: string
  type: DomainParentServiceType
}

/*
 * Parent service type enum
 */
export enum DomainParentServiceType {
  _ALLDOM = '/allDom'
}

/**
 * Description not available
 */
export interface DomainRule {
  allowedValues?: string[]
  description: string
  fields?: string[]
  innerConfigurations?: DomainRule[]
  label?: string
  required?: boolean
  type: string
}

/**
 * Representation of the optin rule
 */
export interface DomainrulesOptin {
  fields: DomainOptinFieldsEnum[]
  type: DomainContactAllTypes
}

/**
 * Tasks associated to domain
 */
export interface DomainTask {
  canAccelerate: boolean
  canCancel: boolean
  canRelaunch: boolean
  comment?: string
  creationDate: string
  doneDate?: string
  function: string
  id: number
  lastUpdate: string
  status: DomainOperationStatus
  todoDate: string
}

/**
 * Representation of a UK Registrar (used for outgoing transfer)
 */
export interface DomainUkRegistrar {
  name: string
  tag: string
}

/*
 * Whois obfuscable fields
 */
export enum DomainWhoisObfuscatorFields {
  ADDRESS = 'address',
  EMAIL = 'email',
  PHONE = 'phone'
}

/**
 * Manage Dnssec for this zone
 */
export interface DomainzoneDnssec {
  status: DnssecDnssecStatus
}

/**
 * Manage DynHost login
 */
export interface DomainzoneDynHostLogin {
  login: string
  subDomain: string
  zone: string
}

/**
 * DynHost record
 */
export interface DomainzoneDynHostRecord {
  id: number
  ip: string
  subDomain?: string
  ttl?: number
  zone: string
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
 * Redirection
 */
export interface DomainzoneRedirection {
  description?: string
  id: number
  keywords?: string
  subDomain?: string
  target: string
  title?: string
  type: ZoneRedirectionType
  zone: string
}

/**
 * Zone Start Of Authority
 */
export interface DomainzoneSoa {
  email: string
  expire: number
  nxDomainTtl: number
  refresh: number
  serial: number
  server: string
  ttl: number
}

/**
 * Tasks associated to a zone
 */
export interface DomainzoneTask {
  canAccelerate: boolean
  canCancel: boolean
  canRelaunch: boolean
  comment?: string
  creationDate: string
  doneDate?: string
  function: string
  id: number
  lastUpdate: string
  status: DomainOperationStatus
  todoDate: string
}

/**
 * Zone dns Management
 */
export interface DomainzoneZone {
  dnssecSupported: boolean
  hasDnsAnycast: boolean
  lastUpdate: string
  name: string
  nameServers: string[]
}

/**
 * Zone restore point
 */
export interface DomainzoneZoneRestorePoint {
  creationDate: string
  zoneFileUrl: string
}

/*
 * Countries a nichandle can choose
 */
export enum NichandleCountry {
  AC = 'AC',
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AO = 'AO',
  AQ = 'AQ',
  AR = 'AR',
  AS = 'AS',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DG = 'DG',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EA = 'EA',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FM = 'FM',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GU = 'GU',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  IC = 'IC',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MH = 'MH',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  PW = 'PW',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TA = 'TA',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  UNKNOWN = 'UNKNOWN',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  XK = 'XK',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW'
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

/*
 * Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame
 */
export enum ZoneRedirectionType {
  INVISIBLE = 'invisible',
  VISIBLE = 'visible',
  VISIBLEPERMANENT = 'visiblePermanent'
}

/**
 * Resource record
 */
export interface ZoneResetRecord {
  fieldType: ZoneResettableNamedResolutionFieldType
  target: string
}

/*
 * Resource record type
 */
export enum ZoneResettableNamedResolutionFieldType {
  A = 'A',
  MX = 'MX'
}

/**
 * Zone status
 */
export interface ZoneStatus {
  errors?: string[]
  isDeployed: boolean
  warnings?: string[]
}


export class Domain {
  constructor(private client: Client) {}

  /**
   * Operations about the DOMAIN service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain#GET)
   */
  ListAvailableServices(whoisOwner?: string): Promise<string[]> {
    let url = `/domain?`

    const queryParams = new QueryParams()
    if (whoisOwner) { queryParams.set('whoisOwner', whoisOwner) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Domain name administration [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<DomainDomain> {
    let url = `/domain/${serviceName}`

    return this.client.request<DomainDomain>('GET', url)
  }

  /**
   * Domain name administration [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: DomainDomain): Promise<void> {
    let url = `/domain/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * activateZone operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/activateZone#POST)
   */
  ActivateTheDNSZoneForThisDomain(serviceName: string, minimized?: boolean): Promise<void> {
    let url = `/domain/${serviceName}/activateZone`

    return this.client.request<void>('POST', url, {minimized})
  }

  /**
   * authInfo operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/authInfo#GET)
   */
  ReturnAuthInfoCodeIfTheDomainIsUnlocked(serviceName: string): Promise<string> {
    let url = `/domain/${serviceName}/authInfo`

    return this.client.request<string>('GET', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/domain/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/obfuscatedEmails#GET)
   */
  RetrieveObfuscatedEmailsConfiguration(serviceName: string): Promise<DomainconfigurationsObfuscatedEmail[]> {
    let url = `/domain/${serviceName}/configurations/obfuscatedEmails`

    return this.client.request<DomainconfigurationsObfuscatedEmail[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/obfuscatedEmails#PUT)
   */
  SaveANewObfuscatedEmailsConfiguration(contacts: DomainContactAllTypesEnum[], serviceName: string): Promise<DomainconfigurationsObfuscatedEmail[]> {
    let url = `/domain/${serviceName}/configurations/obfuscatedEmails`

    return this.client.request<DomainconfigurationsObfuscatedEmail[]>('PUT', url, {contacts})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/obfuscatedEmails/refresh#POST)
   */
  RefreshAnObfuscatedEmailsConfiguration(contacts: DomainContactAllTypesEnum[], serviceName: string): Promise<void> {
    let url = `/domain/${serviceName}/configurations/obfuscatedEmails/refresh`

    return this.client.request<void>('POST', url, {contacts})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/optin#GET)
   */
  RetrieveOptinConfiguration(serviceName: string): Promise<DomainconfigurationsOptin[]> {
    let url = `/domain/${serviceName}/configurations/optin`

    return this.client.request<DomainconfigurationsOptin[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/optin#PUT)
   */
  SaveANewOptinConfiguration(optin: DomainconfigurationsOptin[], serviceName: string): Promise<DomainconfigurationsOptin[]> {
    let url = `/domain/${serviceName}/configurations/optin`

    return this.client.request<DomainconfigurationsOptin[]>('PUT', url, {optin})
  }

  /**
   * List the domain.DnssecKey objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/dsRecord#GET)
   */
  ListOfDomainDSRecords(serviceName: string, flags?: DnssecKeyFlag, status?: DnssecKeyStatus): Promise<number[]> {
    let url = `/domain/${serviceName}/dsRecord?`

    const queryParams = new QueryParams()
    if (flags) { queryParams.set('flags', flags.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the domain.DnssecKey objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/dsRecord#POST)
   */
  UpdateDSRecords(keys: DnssecKey[], serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/dsRecord`

    return this.client.request<DomainTask>('POST', url, {keys})
  }

  /**
   * Domain's DNSSEC Key [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/dsRecord/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<DomainDnssecKey> {
    let url = `/domain/${serviceName}/dsRecord/${id}`

    return this.client.request<DomainDnssecKey>('GET', url)
  }
  */

  /**
   * refresh operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/email/obfuscated/refresh#POST)
   */
  RegenerateTheObfuscatedEmailAddress(contactType: DomainDomainContactTypeEnum[], serviceName: string): Promise<void> {
    let url = `/domain/${serviceName}/email/obfuscated/refresh`

    return this.client.request<void>('POST', url, {contactType})
  }

  /**
   * List the domain.GlueRecord objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord#GET)
   */
  ListOfGlueRecord(serviceName: string, host?: string): Promise<string[]> {
    let url = `/domain/${serviceName}/glueRecord?`

    const queryParams = new QueryParams()
    if (host) { queryParams.set('host', host) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the domain.GlueRecord objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord#POST)
   */
  CreateAGlueRecord(host: string, ips: string[], serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/glueRecord`

    return this.client.request<DomainTask>('POST', url, {host, ips})
  }

  /**
   * Glue record [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord/%7Bhost%7D#GET)
   */
  /*
  GetThisObjectProperties(host: string, serviceName: string): Promise<DomainGlueRecord> {
    let url = `/domain/${serviceName}/glueRecord/${host}`

    return this.client.request<DomainGlueRecord>('GET', url)
  }
  */

  /**
   * Glue record [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord/%7Bhost%7D#DELETE)
   */
  DeleteTheGlueRecord(host: string, serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/glueRecord/${host}`

    return this.client.request<DomainTask>('DELETE', url)
  }

  /**
   * update operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord/%7Bhost%7D/update#POST)
   */
  UpdateTheGlueRecord(host: string, ips: string[], serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/glueRecord/${host}/update`

    return this.client.request<DomainTask>('POST', url, {ips})
  }

  /**
   * List the domain.CurrentNameServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer#GET)
   */
  ListOfCurrentNameServers(serviceName: string): Promise<number[]> {
    let url = `/domain/${serviceName}/nameServer`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the domain.CurrentNameServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer#POST)
   */
  AddNewNameServer(nameServer: DomainDomainNs[], serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/nameServer`

    return this.client.request<DomainTask>('POST', url, {nameServer})
  }

  /**
   * CurrentNameServer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<DomainCurrentNameServer> {
    let url = `/domain/${serviceName}/nameServer/${id}`

    return this.client.request<DomainCurrentNameServer>('GET', url)
  }
  */

  /**
   * CurrentNameServer [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer/%7Bid%7D#DELETE)
   */
  DeleteANameServer(id: number, serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/nameServer/${id}`

    return this.client.request<DomainTask>('DELETE', url)
  }

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer/%7Bid%7D/status#POST)
   */
  GetNameServerStatus(id: number, serviceName: string): Promise<DomainDomainNsStatus> {
    let url = `/domain/${serviceName}/nameServer/${id}/status`

    return this.client.request<DomainDomainNsStatus>('POST', url)
  }

  /**
   * update operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServers/update#POST)
   */
  UpdateDNSServers(nameServers: DomainDomainNs[], serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/nameServers/update`

    return this.client.request<DomainTask>('POST', url, {nameServers})
  }

  /**
   * List the domain.Option objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/option#GET)
   */
  ListOfDomainOptions(serviceName: string): Promise<DomainDomainOptionEnum[]> {
    let url = `/domain/${serviceName}/option`

    return this.client.request<DomainDomainOptionEnum[]>('GET', url)
  }

  /**
   * Information about the options of a domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/option/%7Boption%7D#GET)
   */
  /*
  GetThisObjectProperties(option: DomainDomainOption, serviceName: string): Promise<DomainOption> {
    let url = `/domain/${serviceName}/option/${option}`

    return this.client.request<DomainOption>('GET', url)
  }
  */

  /**
   * Information about the options of a domain [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/option/%7Boption%7D#DELETE)
   */
  ReleaseAGivenOption(option: DomainDomainOption, serviceName: string): Promise<void> {
    let url = `/domain/${serviceName}/option/${option}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the domain.Owo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo#GET)
   */
  ListOfWhoisObfuscators(serviceName: string, field?: DomainWhoisObfuscatorFields): Promise<DomainWhoisObfuscatorFieldsEnum[]> {
    let url = `/domain/${serviceName}/owo?`

    const queryParams = new QueryParams()
    if (field) { queryParams.set('field', field.toString()) }

    return this.client.request<DomainWhoisObfuscatorFieldsEnum[]>('GET', url+queryParams.toString())
  }

  /**
   * List the domain.Owo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo#POST)
   */
  AddWhoisObfuscators(fields: DomainWhoisObfuscatorFieldsEnum[], serviceName: string): Promise<DomainWhoisObfuscatorFieldsEnum[]> {
    let url = `/domain/${serviceName}/owo`

    return this.client.request<DomainWhoisObfuscatorFieldsEnum[]>('POST', url, {fields})
  }

  /**
   * Obfuscate whois [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo/%7Bfield%7D#GET)
   */
  /*
  GetThisObjectProperties(field: DomainWhoisObfuscatorFields, serviceName: string): Promise<DomainOwo> {
    let url = `/domain/${serviceName}/owo/${field}`

    return this.client.request<DomainOwo>('GET', url)
  }
  */

  /**
   * Obfuscate whois [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo/%7Bfield%7D#DELETE)
   */
  DeleteAWhoisObfuscator(field: DomainWhoisObfuscatorFields, serviceName: string): Promise<void> {
    let url = `/domain/${serviceName}/owo/${field}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/rules/emailsObfuscation#GET)
   */
  RetrieveEmailsObfuscationRule(serviceName: string): Promise<DomainContactAllTypesEnum[]> {
    let url = `/domain/${serviceName}/rules/emailsObfuscation`

    return this.client.request<DomainContactAllTypesEnum[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/rules/optin#GET)
   */
  RetrieveOptinRule(serviceName: string): Promise<DomainrulesOptin[]> {
    let url = `/domain/${serviceName}/rules/optin`

    return this.client.request<DomainrulesOptin[]>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/domain/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/domain/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the domain.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task#GET)
   */
  DomainPendingTasks(serviceName: string, _function?: string, status?: DomainOperationStatus): Promise<number[]> {
    let url = `/domain/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Tasks associated to domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/task/${id}`

    return this.client.request<DomainTask>('GET', url)
  }
  */

  /**
   * accelerate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D/accelerate#POST)
   */
  AccelerateTheTask(id: number, serviceName: string): Promise<void> {
    let url = `/domain/${serviceName}/task/${id}/accelerate`

    return this.client.request<void>('POST', url)
  }

  /**
   * cancel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D/cancel#POST)
   */
  CancelTheTask(id: number, serviceName: string): Promise<void> {
    let url = `/domain/${serviceName}/task/${id}/cancel`

    return this.client.request<void>('POST', url)
  }

  /**
   * relaunch operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D/relaunch#POST)
   */
  RelaunchTheTask(id: number, serviceName: string): Promise<void> {
    let url = `/domain/${serviceName}/task/${id}/relaunch`

    return this.client.request<void>('POST', url)
  }

  /**
   * ukOutgoingTransfer operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/ukOutgoingTransfer#POST)
   */
  ScheduleAnOutgoingTransferTaskForThisDomainUkOnly(serviceName: string, tag: string): Promise<DomainTask> {
    let url = `/domain/${serviceName}/ukOutgoingTransfer`

    return this.client.request<DomainTask>('POST', url, {tag})
  }

  /**
   * ukRegistrars operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/ukRegistrars#GET)
   */
  ReturnTheListOfAllUkRegistrars(serviceName: string): Promise<DomainUkRegistrar[]> {
    let url = `/domain/${serviceName}/ukRegistrars`

    return this.client.request<DomainUkRegistrar[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicAssociationInformation#GET)
   */
  RetrieveAllAssociationInformationAccordingToAfnic(): Promise<number[]> {
    let url = `/domain/data/afnicAssociationInformation`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicAssociationInformation#POST)
   */
  PostANewAssociationInformationAccordingToAfnic(contactId: number, declarationDate: string, publicationDate: string, publicationNumber: string, publicationPageNumber: string): Promise<DomaindataAssociationContact> {
    let url = `/domain/data/afnicAssociationInformation`

    return this.client.request<DomaindataAssociationContact>('POST', url, {contactId, declarationDate, publicationDate, publicationNumber, publicationPageNumber})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicAssociationInformation/%7BassociationInformationId%7D#GET)
   */
  RetrieveAnAssociationInformationAccordingToAfnic(associationInformationId: number): Promise<DomaindataAssociationContact> {
    let url = `/domain/data/afnicAssociationInformation/${associationInformationId}`

    return this.client.request<DomaindataAssociationContact>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicCorporationTrademarkInformation#GET)
   */
  RetrieveAllCorporationTrademarkInformationAccordingToAfnic(): Promise<number[]> {
    let url = `/domain/data/afnicCorporationTrademarkInformation`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicCorporationTrademarkInformation#POST)
   */
  PostANewCorporationTrademarkInformationAccordingToAfnic(contactId: number, inpiNumber: string, inpiTrademarkOwner: string): Promise<DomaindataAfnicCorporationTrademarkContact> {
    let url = `/domain/data/afnicCorporationTrademarkInformation`

    return this.client.request<DomaindataAfnicCorporationTrademarkContact>('POST', url, {contactId, inpiNumber, inpiTrademarkOwner})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicCorporationTrademarkInformation/%7BafnicCorporationTrademarkId%7D#GET)
   */
  RetrieveACorporationTrademarkInformationAccordingToAfnic(afnicCorporationTrademarkId: number): Promise<DomaindataAfnicCorporationTrademarkContact> {
    let url = `/domain/data/afnicCorporationTrademarkInformation/${afnicCorporationTrademarkId}`

    return this.client.request<DomaindataAfnicCorporationTrademarkContact>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/claimNotice#GET)
   */
  RetrieveClaimNoticesAssociatedToADomain(domain: string): Promise<DomaindataclaimNoticeClaimNotice> {
    let url = `/domain/data/claimNotice?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<DomaindataclaimNoticeClaimNotice>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/extension#GET)
   */
  ListAllTheExtensionsForASpecificCountry(country: NichandleCountry): Promise<string[]> {
    let url = `/domain/data/extension?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/proContact#GET)
   */
  RetrieveAllYourProContact(): Promise<number[]> {
    let url = `/domain/data/proContact`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/proContact#POST)
   */
  PostNewInformationAboutProContactInformation(authority: string, authorityWebsite: string, jobDescription: string, licenseNumber: string, contactId?: number): Promise<DomaindataProContact> {
    let url = `/domain/data/proContact`

    return this.client.request<DomaindataProContact>('POST', url, {authority, authorityWebsite, jobDescription, licenseNumber, contactId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/proContact/%7BproContactId%7D#GET)
   */
  RetrieveInformationAboutAProContact(proContactId: number): Promise<DomaindataProContact> {
    let url = `/domain/data/proContact/${proContactId}`

    return this.client.request<DomaindataProContact>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd#GET)
   */
  ListAllYourSMDFiles(protectedLabelsLabel?: string): Promise<number[]> {
    let url = `/domain/data/smd?`

    const queryParams = new QueryParams()
    if (protectedLabelsLabel) { queryParams.set('protectedLabels.label', protectedLabelsLabel) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd#POST)
   */
  PostANewSMDFile(data: string): Promise<DomaindataSmd> {
    let url = `/domain/data/smd`

    return this.client.request<DomaindataSmd>('POST', url, {data})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd/%7BsmdId%7D#GET)
   */
  RetrieveInformationAboutASMDFile(smdId: number): Promise<DomaindataSmd> {
    let url = `/domain/data/smd/${smdId}`

    return this.client.request<DomaindataSmd>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd/%7BsmdId%7D#PUT)
   */
  ModifyAnExistingSMDFile(data: string, smdId: number): Promise<DomaindataSmd> {
    let url = `/domain/data/smd/${smdId}`

    return this.client.request<DomaindataSmd>('PUT', url, {data})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd/%7BsmdId%7D#DELETE)
   */
  DeleteASMDFile(smdId: number): Promise<void> {
    let url = `/domain/data/smd/${smdId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Rules for creating a domain [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/rules#GET)
   */
  ListAllTheRulesForASpecificCartIditemId(cartId: string, itemId: number): Promise<DomainRule> {
    let url = `/domain/rules?`

    const queryParams = new QueryParams()
    if (cartId) { queryParams.set('cartId', cartId) }
    if (itemId) { queryParams.set('itemId', itemId.toString()) }

    return this.client.request<DomainRule>('GET', url+queryParams.toString())
  }

  /**
   * Operations about the DNS service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/domain/zone`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Zone dns Management [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D#GET)
   */
  /*
  GetThisObjectProperties(zoneName: string): Promise<DomainzoneZone> {
    let url = `/domain/zone/${zoneName}`

    return this.client.request<DomainzoneZone>('GET', url)
  }
  */

  /**
   * Change the contacts of this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/changeContact#POST)
   */
  /*
  LaunchAContactChangeProcedure(zoneName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/domain/zone/${zoneName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }
  */

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(token: string, zoneName: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/domain/zone/${zoneName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Manage Dnssec for this zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dnssec#GET)
   */
  /*
  GetThisObjectProperties(zoneName: string): Promise<DomainzoneDnssec> {
    let url = `/domain/zone/${zoneName}/dnssec`

    return this.client.request<DomainzoneDnssec>('GET', url)
  }
  */

  /**
   * Manage Dnssec for this zone [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dnssec#POST)
   */
  EnableDnssec(zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/dnssec`

    return this.client.request<void>('POST', url)
  }

  /**
   * Manage Dnssec for this zone [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dnssec#DELETE)
   */
  DisableDnssec(zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/dnssec`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the domain.zone.DynHostLogin objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login#GET)
   */
  DynHostLogins(zoneName: string, login?: string, subDomain?: string): Promise<string[]> {
    let url = `/domain/zone/${zoneName}/dynHost/login?`

    const queryParams = new QueryParams()
    if (login) { queryParams.set('login', login) }
    if (subDomain) { queryParams.set('subDomain', subDomain) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the domain.zone.DynHostLogin objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login#POST)
   */
  CreateANewDynHostLogin(loginSuffix: string, password: string, subDomain: string, zoneName: string): Promise<DomainzoneDynHostLogin> {
    let url = `/domain/zone/${zoneName}/dynHost/login`

    return this.client.request<DomainzoneDynHostLogin>('POST', url, {loginSuffix, password, subDomain})
  }

  /**
   * Manage DynHost login [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D#GET)
   */
  /*
  GetThisObjectProperties(login: string, zoneName: string): Promise<DomainzoneDynHostLogin> {
    let url = `/domain/zone/${zoneName}/dynHost/login/${login}`

    return this.client.request<DomainzoneDynHostLogin>('GET', url)
  }
  */

  /**
   * Manage DynHost login [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D#PUT)
   */
  /*
  AlterThisObjectProperties(login: string, zoneName: string, payload: DomainzoneDynHostLogin): Promise<void> {
    let url = `/domain/zone/${zoneName}/dynHost/login/${login}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Manage DynHost login [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D#DELETE)
   */
  DeleteADynHostLogin(login: string, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/dynHost/login/${login}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D/changePassword#POST)
   */
  ChangePasswordOfTheDynHostLogin(login: string, password: string, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/dynHost/login/${login}/changePassword`

    return this.client.request<void>('POST', url, {password})
  }

  /**
   * List the domain.zone.DynHostRecord objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record#GET)
   */
  DynHostRecords(zoneName: string, subDomain?: string): Promise<number[]> {
    let url = `/domain/zone/${zoneName}/dynHost/record?`

    const queryParams = new QueryParams()
    if (subDomain) { queryParams.set('subDomain', subDomain) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the domain.zone.DynHostRecord objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record#POST)
   */
  CreateANewDynHostRecordDontForgetToRefreshTheZone(ip: string, zoneName: string, subDomain?: string): Promise<DomainzoneDynHostRecord> {
    let url = `/domain/zone/${zoneName}/dynHost/record`

    return this.client.request<DomainzoneDynHostRecord>('POST', url, {ip, subDomain})
  }

  /**
   * DynHost record [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneDynHostRecord> {
    let url = `/domain/zone/${zoneName}/dynHost/record/${id}`

    return this.client.request<DomainzoneDynHostRecord>('GET', url)
  }
  */

  /**
   * DynHost record [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, zoneName: string, payload: DomainzoneDynHostRecord): Promise<void> {
    let url = `/domain/zone/${zoneName}/dynHost/record/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * DynHost record [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record/%7Bid%7D#DELETE)
   */
  DeleteADynHostRecordDontForgetToRefreshTheZone(id: number, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/dynHost/record/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * export operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/export#GET)
   */
  ExportZone(zoneName: string): Promise<string> {
    let url = `/domain/zone/${zoneName}/export`

    return this.client.request<string>('GET', url)
  }

  /**
   * List the domain.zone.ZoneRestorePoint objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/history#GET)
   */
  ZoneRestorePoints(zoneName: string, creationDateFrom?: string, creationDateTo?: string): Promise<string[]> {
    let url = `/domain/zone/${zoneName}/history?`

    const queryParams = new QueryParams()
    if (creationDateFrom) { queryParams.set('creationDate.from', creationDateFrom.toString()) }
    if (creationDateTo) { queryParams.set('creationDate.to', creationDateTo.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Zone restore point [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/history/%7BcreationDate%7D#GET)
   */
  /*
  GetThisObjectProperties(creationDate: string, zoneName: string): Promise<DomainzoneZoneRestorePoint> {
    let url = `/domain/zone/${zoneName}/history/${creationDate}`

    return this.client.request<DomainzoneZoneRestorePoint>('GET', url)
  }
  */

  /**
   * restore operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/history/%7BcreationDate%7D/restore#POST)
   */
  RestoreTheDNSZone(creationDate: string, zoneName: string): Promise<DomainzoneTask> {
    let url = `/domain/zone/${zoneName}/history/${creationDate}/restore`

    return this.client.request<DomainzoneTask>('POST', url)
  }

  /**
   * import operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/import#POST)
   */
  ImportZone(zoneFile: string, zoneName: string): Promise<DomainzoneTask> {
    let url = `/domain/zone/${zoneName}/import`

    return this.client.request<DomainzoneTask>('POST', url, {zoneFile})
  }

  /**
   * List the domain.zone.Record objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record#GET)
   */
  RecordsOfTheZone(zoneName: string, fieldType?: ZoneNamedResolutionFieldType, subDomain?: string): Promise<number[]> {
    let url = `/domain/zone/${zoneName}/record?`

    const queryParams = new QueryParams()
    if (fieldType) { queryParams.set('fieldType', fieldType.toString()) }
    if (subDomain) { queryParams.set('subDomain', subDomain) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the domain.zone.Record objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record#POST)
   */
  CreateANewDNSRecordDontForgetToRefreshTheZone(fieldType: ZoneNamedResolutionFieldType, target: string, zoneName: string, subDomain?: string, ttl?: number): Promise<DomainzoneRecord> {
    let url = `/domain/zone/${zoneName}/record`

    return this.client.request<DomainzoneRecord>('POST', url, {fieldType, target, subDomain, ttl})
  }

  /**
   * Zone resource records [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneRecord> {
    let url = `/domain/zone/${zoneName}/record/${id}`

    return this.client.request<DomainzoneRecord>('GET', url)
  }
  */

  /**
   * Zone resource records [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, zoneName: string, payload: DomainzoneRecord): Promise<void> {
    let url = `/domain/zone/${zoneName}/record/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Zone resource records [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record/%7Bid%7D#DELETE)
   */
  DeleteADNSRecordDontForgetToRefreshTheZone(id: number, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/record/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the domain.zone.Redirection objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection#GET)
   */
  Redirections(zoneName: string, subDomain?: string): Promise<number[]> {
    let url = `/domain/zone/${zoneName}/redirection?`

    const queryParams = new QueryParams()
    if (subDomain) { queryParams.set('subDomain', subDomain) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the domain.zone.Redirection objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection#POST)
   */
  CreateANewRedirectionDontForgetToRefreshTheZone(target: string, type: ZoneRedirectionType, zoneName: string, description?: string, keywords?: string, subDomain?: string, title?: string): Promise<DomainzoneRedirection> {
    let url = `/domain/zone/${zoneName}/redirection`

    return this.client.request<DomainzoneRedirection>('POST', url, {target, type, description, keywords, subDomain, title})
  }

  /**
   * Redirection [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneRedirection> {
    let url = `/domain/zone/${zoneName}/redirection/${id}`

    return this.client.request<DomainzoneRedirection>('GET', url)
  }
  */

  /**
   * Redirection [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, zoneName: string, payload: DomainzoneRedirection): Promise<void> {
    let url = `/domain/zone/${zoneName}/redirection/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Redirection [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection/%7Bid%7D#DELETE)
   */
  DeleteARedirectionDontForgetToRefreshTheZone(id: number, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/redirection/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * refresh operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/refresh#POST)
   */
  ApplyZoneModificationOnDNSServers(zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/refresh`

    return this.client.request<void>('POST', url)
  }

  /**
   * reset operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/reset#POST)
   */
  ResetTheDNSZone(zoneName: string, DnsRecords?: ZoneResetRecord[], minimized?: boolean): Promise<void> {
    let url = `/domain/zone/${zoneName}/reset`

    return this.client.request<void>('POST', url, {DnsRecords, minimized})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(zoneName: string): Promise<ServicesService> {
    let url = `/domain/zone/${zoneName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(zoneName: string, payload: ServicesService): Promise<void> {
    let url = `/domain/zone/${zoneName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Zone Start Of Authority [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/soa#GET)
   */
  /*
  GetThisObjectProperties(zoneName: string): Promise<DomainzoneSoa> {
    let url = `/domain/zone/${zoneName}/soa`

    return this.client.request<DomainzoneSoa>('GET', url)
  }
  */

  /**
   * Zone Start Of Authority [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/soa#PUT)
   */
  /*
  AlterThisObjectProperties(zoneName: string, payload: DomainzoneSoa): Promise<void> {
    let url = `/domain/zone/${zoneName}/soa`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/status#GET)
   */
  ZoneStatus(zoneName: string): Promise<ZoneStatus> {
    let url = `/domain/zone/${zoneName}/status`

    return this.client.request<ZoneStatus>('GET', url)
  }

  /**
   * List the domain.zone.Task objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task#GET)
   */
  /*
  DomainPendingTasks(zoneName: string, _function?: string, status?: DomainOperationStatus): Promise<number[]> {
    let url = `/domain/zone/${zoneName}/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Tasks associated to a zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneTask> {
    let url = `/domain/zone/${zoneName}/task/${id}`

    return this.client.request<DomainzoneTask>('GET', url)
  }
  */

  /**
   * accelerate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D/accelerate#POST)
   */
  /*
  AccelerateTheTask(id: number, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/task/${id}/accelerate`

    return this.client.request<void>('POST', url)
  }
  */

  /**
   * cancel operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D/cancel#POST)
   */
  /*
  CancelTheTask(id: number, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/task/${id}/cancel`

    return this.client.request<void>('POST', url)
  }
  */

  /**
   * relaunch operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D/relaunch#POST)
   */
  /*
  RelaunchTheTask(id: number, zoneName: string): Promise<void> {
    let url = `/domain/zone/${zoneName}/task/${id}/relaunch`

    return this.client.request<void>('POST', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/terminate#POST)
   */
  TerminateYourService(zoneName: string): Promise<string> {
    let url = `/domain/zone/${zoneName}/terminate`

    return this.client.request<string>('POST', url)
  }

}
