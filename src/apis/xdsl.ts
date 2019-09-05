// GENERATED SDK for xdsl API

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
 * A value set tagged with its unit
 */
export interface ComplexTypeUnitAndValues<T> {
  unit: string
  values: T[]
}

/**
 * List of available meeting time slots
 */
export interface ConnectivityeligibilityMeetings {
  canBookFakeMeeting: boolean
  meetingSlots: ConnectivityeligibilityMeetingSlot[]
}

/**
 * Represents a time slot for a meeting
 */
export interface ConnectivityeligibilityMeetingSlot {
  endDate: string
  startDate: string
  uiCode: string
}

/*
 * ISO country codes
 */
export enum CoreTypesCountry {
  AC = 'ac',
  AD = 'ad',
  AE = 'ae',
  AF = 'af',
  AG = 'ag',
  AI = 'ai',
  AL = 'al',
  AM = 'am',
  AN = 'an',
  AO = 'ao',
  AQ = 'aq',
  AR = 'ar',
  AS = 'as',
  AT = 'at',
  AU = 'au',
  AW = 'aw',
  AX = 'ax',
  AZ = 'az',
  BA = 'ba',
  BB = 'bb',
  BD = 'bd',
  BE = 'be',
  BF = 'bf',
  BG = 'bg',
  BH = 'bh',
  BI = 'bi',
  BJ = 'bj',
  BL = 'bl',
  BM = 'bm',
  BN = 'bn',
  BO = 'bo',
  BQ = 'bq',
  BR = 'br',
  BS = 'bs',
  BT = 'bt',
  BV = 'bv',
  BW = 'bw',
  BY = 'by',
  BZ = 'bz',
  CA = 'ca',
  CC = 'cc',
  CD = 'cd',
  CF = 'cf',
  CG = 'cg',
  CH = 'ch',
  CI = 'ci',
  CK = 'ck',
  CL = 'cl',
  CM = 'cm',
  CN = 'cn',
  CO = 'co',
  CR = 'cr',
  CS = 'cs',
  CU = 'cu',
  CV = 'cv',
  CW = 'cw',
  CX = 'cx',
  CY = 'cy',
  CZ = 'cz',
  DE = 'de',
  DJ = 'dj',
  DK = 'dk',
  DM = 'dm',
  DO = 'do',
  DZ = 'dz',
  EC = 'ec',
  EE = 'ee',
  EG = 'eg',
  EH = 'eh',
  ER = 'er',
  ES = 'es',
  ET = 'et',
  FC = 'fc',
  FD = 'fd',
  FI = 'fi',
  FJ = 'fj',
  FK = 'fk',
  FM = 'fm',
  FO = 'fo',
  FR = 'fr',
  FX = 'fx',
  GA = 'ga',
  GB = 'gb',
  GD = 'gd',
  GE = 'ge',
  GF = 'gf',
  GG = 'gg',
  GH = 'gh',
  GI = 'gi',
  GL = 'gl',
  GM = 'gm',
  GN = 'gn',
  GP = 'gp',
  GQ = 'gq',
  GR = 'gr',
  GS = 'gs',
  GT = 'gt',
  GU = 'gu',
  GW = 'gw',
  GY = 'gy',
  HK = 'hk',
  HM = 'hm',
  HN = 'hn',
  HR = 'hr',
  HT = 'ht',
  HU = 'hu',
  ID = 'id',
  IE = 'ie',
  IL = 'il',
  IM = 'im',
  IN = 'in',
  IO = 'io',
  IQ = 'iq',
  IR = 'ir',
  IS = 'is',
  IT = 'it',
  JE = 'je',
  JM = 'jm',
  JO = 'jo',
  JP = 'jp',
  KE = 'ke',
  KG = 'kg',
  KH = 'kh',
  KI = 'ki',
  KM = 'km',
  KN = 'kn',
  KP = 'kp',
  KR = 'kr',
  KW = 'kw',
  KY = 'ky',
  KZ = 'kz',
  LA = 'la',
  LB = 'lb',
  LC = 'lc',
  LI = 'li',
  LK = 'lk',
  LR = 'lr',
  LS = 'ls',
  LT = 'lt',
  LU = 'lu',
  LV = 'lv',
  LY = 'ly',
  MA = 'ma',
  MC = 'mc',
  MD = 'md',
  ME = 'me',
  MF = 'mf',
  MG = 'mg',
  MH = 'mh',
  MK = 'mk',
  ML = 'ml',
  MM = 'mm',
  MN = 'mn',
  MO = 'mo',
  MP = 'mp',
  MQ = 'mq',
  MR = 'mr',
  MS = 'ms',
  MT = 'mt',
  MU = 'mu',
  MV = 'mv',
  MW = 'mw',
  MX = 'mx',
  MY = 'my',
  MZ = 'mz',
  NA = 'na',
  NC = 'nc',
  NE = 'ne',
  NF = 'nf',
  NG = 'ng',
  NI = 'ni',
  NL = 'nl',
  NO = 'no',
  NP = 'np',
  NR = 'nr',
  NU = 'nu',
  NZ = 'nz',
  OM = 'om',
  PA = 'pa',
  PE = 'pe',
  PF = 'pf',
  PG = 'pg',
  PH = 'ph',
  PK = 'pk',
  PL = 'pl',
  PM = 'pm',
  PN = 'pn',
  PR = 'pr',
  PS = 'ps',
  PT = 'pt',
  PW = 'pw',
  PY = 'py',
  QA = 'qa',
  QC = 'qc',
  RE = 're',
  RO = 'ro',
  RS = 'rs',
  RU = 'ru',
  RW = 'rw',
  SA = 'sa',
  SB = 'sb',
  SC = 'sc',
  SD = 'sd',
  SE = 'se',
  SG = 'sg',
  SH = 'sh',
  SI = 'si',
  SJ = 'sj',
  SK = 'sk',
  SL = 'sl',
  SM = 'sm',
  SN = 'sn',
  SO = 'so',
  SR = 'sr',
  SS = 'ss',
  ST = 'st',
  SV = 'sv',
  SX = 'sx',
  SY = 'sy',
  SZ = 'sz',
  TC = 'tc',
  TD = 'td',
  TF = 'tf',
  TG = 'tg',
  TH = 'th',
  TJ = 'tj',
  TK = 'tk',
  TL = 'tl',
  TM = 'tm',
  TN = 'tn',
  TO = 'to',
  TP = 'tp',
  TR = 'tr',
  TT = 'tt',
  TV = 'tv',
  TW = 'tw',
  TZ = 'tz',
  UA = 'ua',
  UG = 'ug',
  UK = 'uk',
  UM = 'um',
  US = 'us',
  UY = 'uy',
  UZ = 'uz',
  VA = 'va',
  VC = 'vc',
  VE = 've',
  VG = 'vg',
  VI = 'vi',
  VN = 'vn',
  VU = 'vu',
  WE = 'we',
  WF = 'wf',
  WS = 'ws',
  YE = 'ye',
  YT = 'yt',
  YU = 'yu',
  ZA = 'za',
  ZM = 'zm',
  ZW = 'zw'
}

/*
 * Ip versions
 */
export enum CoreTypesIpVersion {
  V4 = 'v4',
  V6 = 'v6'
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
 * An order
 */
export interface OrderOrder {
  contracts: OrderContract[]
  details: OrderOrderDetail[]
  orderId?: number
  prices: OrderOrderPrices
  url?: string
}

/**
 * Detail of an order
 */
export interface OrderOrderDetail {
  description: string
  detailType?: OrderOrderDetailType
  domain: string
  quantity: number
  totalPrice: OrderPrice
  unitPrice: OrderPrice
}

/*
 * Product type of item in order
 */
export enum OrderOrderDetailType {
  ACCESSORY = 'ACCESSORY',
  CAUTION = 'CAUTION',
  CHOOSED = 'CHOOSED',
  CONSUMPTION = 'CONSUMPTION',
  CREATION = 'CREATION',
  DELIVERY = 'DELIVERY',
  DURATION = 'DURATION',
  GIFT = 'GIFT',
  INSTALLATION = 'INSTALLATION',
  LICENSE = 'LICENSE',
  MUTE = 'MUTE',
  OTHER = 'OTHER',
  OUTPLAN = 'OUTPLAN',
  QUANTITY = 'QUANTITY',
  REFUND = 'REFUND',
  RENEW = 'RENEW',
  SPECIAL = 'SPECIAL',
  SWITCH = 'SWITCH',
  TRANSFER = 'TRANSFER',
  VOUCHER = 'VOUCHER'
}

/**
 * Prices of an order
 */
export interface OrderOrderPrices {
  tax: OrderPrice
  withoutTax: OrderPrice
  withTax: OrderPrice
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
 * Spare properties
 */
export interface SparexdslXdslSpare {
  brand: string
  macAddress: string
}

/**
 * Contact informations structure
 */
export interface TelephonyContact {
  address?: string
  city?: string
  country?: CoreTypesCountry
  email?: string
  firstname?: string
  name?: string
  organisation?: string
  phone?: string
  zip?: string
}

/**
 * Current Return Merchandise Authorisation
 */
export interface TelephonyRma {
  cancellable: boolean
  creationDatetime: string
  equipmentReference: string
  id: string
  newMerchandise?: string
  offerTypeNew?: TelephonyRmaOfferType
  offerTypeOld: TelephonyRmaOfferType
  process: TelephonyRmaReplaceType
  receptionDatetime?: string
  shippingContact: TelephonyContact
  status: TelephonyRmaStatus
  steps: TelephonyRmaStep[]
  terminationDatetime?: string
  type: TelephonyRmaType
}

/*
 * Return merchandise authorisation offer type
 */
export enum TelephonyRmaOfferType {
  DEPOSIT = 'deposit',
  LOAN = 'loan',
  PURCHASE = 'purchase'
}

/*
 * Return merchandise authorisation type
 */
export enum TelephonyRmaReplaceType {
  CHANGEPHONE = 'changePhone',
  PHONERESTITUTION = 'phoneRestitution',
  UNDEFINED = 'undefined'
}

/*
 * Return merchandise authorisation step
 */
export enum TelephonyRmaStatus {
  CLOSED = 'closed',
  OPEN = 'open',
  RECEIVED = 'received'
}

/**
 * Informations related to the current RMA step status
 */
export interface TelephonyRmaStep {
  description: string
  doneDate?: string
  infos?: string
  name: TelephonyRmaStepName
  status: TelephonyRmaStepStatus
}

/*
 * RMA step names
 */
export enum TelephonyRmaStepName {
  DISPATCHJUSTIFICATION = 'dispatchJustification',
  EQUIPMENTSENDING = 'equipmentSending',
  EQUIPMENTTESTING = 'equipmentTesting',
  OPENING = 'opening',
  PARCELRECEPTION = 'parcelReception',
  PARCELVALIDATION = 'parcelValidation',
  VALIDATION = 'validation'
}

/*
 * Status of the RMA step
 */
export enum TelephonyRmaStepStatus {
  DONE = 'done',
  TODO = 'todo'
}

/*
 * Return merchandise authorisation type
 */
export enum TelephonyRmaType {
  AFTER_SALE_EQUIPMENT_SERVICE_EXCHANGE = 'after sale equipment service exchange',
  AFTER_SALE_PHONE_SERVICE_EXCHANGE = 'after sale phone service exchange',
  EQUIPMENT_RESTITUTION = 'equipment restitution',
  FAST_EXCHANGE = 'fast exchange',
  OLD_MERCHANDISE_RECEPTION_BEFORE_EXCHANGE = 'old merchandise reception before exchange',
  PHONE_RESTITUTION = 'phone restitution',
  RESENDS_DUE_TO_SHIPPING_LOST_BY_THE_CARRIER = 'resends due to shipping lost by the carrier',
  RESENDS_DUE_TO_SHIPPING_NOT_WITHDRAW = 'resends due to shipping not withdraw',
  SPECIFIC_RETURN_MERCHANDISE_AUTHORISATION = 'specific return merchandise authorisation',
  TERMINATION = 'termination',
  UNKNOWN = 'unknown'
}

/**
 * XDSL Access
 */
export interface Access {
  accessName: string
  accessType: DslType
  address: AddressDetail
  capabilities: AccessCapabilities
  description: string
  ipv6Enabled: boolean
  lnsRateLimit?: number
  monitoring: boolean
  nra: string
  packName?: string
  pairsNumber: number
  role: AccessRole
  status: AccessStatus
}

/**
 * Describe the capabilities of the Access
 */
export interface AccessCapabilities {
  canApplyLnsRateLimit: boolean
  canChangeDslamProfile: boolean
  canChangeLns: boolean
  canGetRadiusConnectionLogs: boolean
  canResetDslamPort: boolean
  hasDslamPort: boolean
}

/**
 * Diagnostic of the access
 */
export interface AccessDiagnostic {
  capabilities: AccessDiagnosticCapabilities
  diagnosticTime: string
  incident?: boolean
  isActiveOnLns?: boolean
  isModemConnected?: boolean
  lineDetails?: LineDiagnostic[]
  maintenance?: boolean
  ping?: boolean
  remaining: number
}

/**
 * Describe the capabilities of the access diagnostic
 */
export interface AccessDiagnosticCapabilities {
  incident: boolean
  isActiveOnLns: boolean
  isModemConnected: boolean
  lineTest: boolean
  ping: boolean
  proposedProfileId: boolean
  sync: boolean
}

/*
 * Available access roles
 */
export enum AccessRole {
  BACKUP = 'backup',
  MAIN = 'main'
}

/*
 * Various types of statisctics available for the access.
 */
export enum AccessStatisticsType {
  PING = 'ping',
  TRAFFIC_DOWNLOAD = 'traffic:download',
  TRAFFIC_UPLOAD = 'traffic:upload'
}

/*
 * Status of the access
 */
export enum AccessStatus {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  CLOSE = 'close',
  DELETING = 'deleting',
  DOING = 'doing',
  MIGRATION = 'migration',
  SLAMMING = 'slamming',
  UPGRADEOFFER = 'upgradeOffer'
}

/**
 * All components of an address
 */
export interface AddressDetail {
  building?: string
  city: string
  door?: string
  firstName: string
  floor?: string
  inseeCode: string
  lastName: string
  numberStreet: string
  residence?: string
  rivoliCode: string
  stairs?: string
  street: string
  zipCode: string
}

/**
 * Spams detected from xdsl access
 */
export interface AntiSpam {
  date: string
  ip: string
  lastSpamDetected: string
  status: AntiSpamAntiSpamStatus
}

/*
 * AntiSpam status
 */
export enum AntiSpamAntiSpamStatus {
  BLOCK = 'block',
  DONE = 'done',
  NEW = 'new',
  UNBLOCK = 'unblock',
  WARN = 'warn'
}

/**
 * List of evidences
 */
export interface AntiSpamEvidencesInfo {
  error?: string
  result?: AntiSpamEvidencesInfoDetail[]
  status: AntiSpamEvidencesInfoStatus
}

/**
 * detail on evidences stored on PCS
 */
export interface AntiSpamEvidencesInfoDetail {
  date: string
  filename: string
  url: string
}

/*
 * Evidences AsyncTask status
 */
export enum AntiSpamEvidencesInfoStatus {
  ERROR = 'error',
  OK = 'ok',
  PENDING = 'pending'
}

/**
 * Async task
 */
export interface AsyncTask<T> {
  error?: string
  result?: T
  status: AsyncTaskStatus
}

/**
 * Async task array
 */
export interface AsyncTaskArray<T> {
  error?: string
  result?: T[]
  status: AsyncTaskStatus
}

/*
 * AsyncTask status
 */
export enum AsyncTaskStatus {
  ERROR = 'error',
  OK = 'ok',
  PENDING = 'pending'
}

/**
 * Connected Device
 */
export interface ConnectedDevice {
  active: boolean
  addressSource: XdslModemConfigConnectedDeviceAddressSource
  hostName: string
  informationDate: string
  interfaceType: string
  ipAddress: string
  leaseTimeRemaining: number
  macAddress: string
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

/**
 * Show the deconsolidation terms
 */
export interface DeconsolidationTerms {
  engagement: any
  monthlyPrice: OrderPrice
  price: OrderPrice
}

/**
 * Describe device informations of a Modem
 */
export interface DeviceModemInfo {
  brand: string
  ip: string
  lastUpdate: string
  macAddress: string
  model: string
  oui: string
  overEthernet?: string
  pppLogin?: string
  serial: string
  softVersion: string
}

/**
 * DHCP Configuration of the Modem
 */
export interface DHCP {
  defaultGateway: string
  dhcpName: string
  domainName: string
  endAddress: string
  leaseTime: number
  primaryDNS: string
  secondaryDNS?: string
  serverEnabled: boolean
  startAddress: string
  subnetMask: string
  taskId?: number
}

/**
 * DHCP Static Address
 */
export interface DHCPStaticAddress {
  IPAddress: string
  MACAddress: string
  name?: string
  taskId?: number
}

/**
 * Profile on the DSLAM
 */
export interface DslamLineProfile {
  id: number
  isCurrent: boolean
  name: string
}

/**
 * Information about the port on the DSLAM
 */
export interface DslamPort {
  lastDesyncDate?: string
  lastSyncDate?: string
  profile?: DslamLineProfile
  status: DslamPortStatus
}

/**
 * A message log from the DSLAM
 */
export interface DslamPortLog {
  date: string
  lastOccurrenceDate: string
  message: string
  numberOfOccurrences: number
}

/*
 * Different states of a DSLAM port
 */
export enum DslamPortStatus {
  ACTIVATED = 'activated',
  DEACTIVATED = 'deactivated',
  OUTOFSYNC = 'outofsync'
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
 * Details of a Building
 */
export interface EligibilityBuilding {
  name: string
  nro: string
  reference: string
  type: EligibilityBuildingType
}

/*
 * Type of building
 */
export enum EligibilityBuildingType {
  BUILDING = 'BUILDING',
  HOUSE = 'HOUSE'
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

/**
 * Eligibility result
 */
export interface EligibilityEligibility {
  address?: EligibilityAddress
  characteristics: EligibilityLineCharacteristics
  endpoint: EligibilityLineEndpoint
  id: string
  infos: EligibilityLineInfos
  offers: EligibilityOffer[]
  portability: EligibilityPortability
}

/**
 * Fiber Eligibility result
 */
export interface EligibilityFiberEligibility {
  id: string
  offers: EligibilityFiberOffer[]
}

/**
 * A fiber offer
 */
export interface EligibilityFiberOffer {
  availibilityDate?: string
  downloadRate?: any
  eligible: boolean
  gtr: GtrEnum[]
  guaranteed: boolean
  label: string
  reason?: string
  type: DslType
  uploadRate?: any
}

/**
 * Details of a FiberStreet
 */
export interface EligibilityFiberStreet {
  streetCode: string
  streetName: string
}

/*
 * Status of a landline
 */
export enum EligibilityLandlineStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

/**
 * a line
 */
export interface EligibilityLine {
  address: EligibilityAddress
  contactName: string
  lineNumber: string
  lineStatus: EligibilityLandlineStatus
}

/**
 * The characteristics of a line
 */
export interface EligibilityLineCharacteristics {
  calibration: EligibilityLineSectionCalibration[]
  desaturationFreePairs: number
  distance: number
  freePairs: number
  mitigation: any
  mitigationSdsl: any
  nra: string
}

/*
 * Type of the endpoint for the eligibility
 */
export enum EligibilityLineEndpoint {
  ADDRESS = 'address',
  LINE = 'line'
}

/**
 * The line infos
 */
export interface EligibilityLineInfos {
  createNeighbour: boolean
  lineNumber?: string
  lineStatus?: EligibilityLandlineStatus
  unlistedNumber: boolean
}

/**
 * A line section calibration detail
 */
export interface EligibilityLineSectionCalibration {
  diameter: number
  length: number
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
 * An offer
 */
export interface EligibilityOffer {
  desaturation?: boolean
  downloadRate?: any
  gtr: GtrEnum[]
  guaranteed: boolean
  label: string
  pairs?: number
  provider?: EligibilityProvider
  rate?: any
  type: DslType
  unbundling?: DeconsolidationEnum[]
  uploadRate?: any
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
 * Task Struct
 */
export interface EmailproTask {
  finishDate?: string
  function: string
  status: EmailproTaskStatus
  todoDate: string
}

/*
 * Status of an Email Pro task.
 */
export enum EmailproTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Informations about the extra IP range during address move
 */
export interface ExtraIpRangeMove {
  date: string
  ipRange: any
  moveTo: string
}

/*
 * Maximum time needed to repair a landline
 */
export type FaultRepairTime = '4HNO' | '4HO' | 'NORMAL'

/*
 * Gtr of the line.
 */
export type Gtr = '4hno' | '4ho' | 'none'

/**
 * Detected incident
 */
export interface Incident {
  comment: string
  creationDate: string
  departments: string[]
  endDate?: string
  id: number
  nra: string[]
  operators: OperatorTypeEnum[]
  taskId?: number
}

/**
 * Informations about an IP address
 */
export interface IP {
  dnsList: string[]
  ip: string
  range: number
  status: IpStatus
  version: CoreTypesIpVersion
}

/*
 * Status of an IP.
 */
export enum IpStatus {
  ACTIVE = 'active',
  CLOSE = 'close',
  TODELETE = 'toDelete'
}

/**
 * LAN Configuration of the Modem
 */
export interface LAN {
  addressingType: XdslModemConfigAddressingType
  IPAddress: string
  lanName: string
  subnetMask: string
  taskId?: number
}

/**
 * Infos about a Landline at the concentration point
 */
export interface LandlineConcentrationPoint {
  lineHead: string
  lineInitialSection: number
  lineInitialSectionPair: number
}

/**
 * Information about the physical copper line
 */
export interface Line {
  concentrationPoint?: LandlineConcentrationPoint
  deconsolidation: Deconsolidation
  directDistribution?: boolean
  distance: number
  faultRepairTime: FaultRepairTime
  lineSectionsLength: LineSectionLength[]
  mitigation: any
  number: string
  originalNumber?: string
  portability: boolean
  syncDown?: any
  syncUp?: any
}

/**
 * Detailed line tests
 */
export interface LineDiagnostic {
  lineTest?: LineTest
  lineTestTime?: string
  number: string
  proposedProfileId?: number
  sync: boolean
}

/**
 * Customer answers for line diagnostic
 */
export interface LineDiagnosticAnswers {
  bandwidthTestUnit?: LineDiagnosticBandwidthTestUnit
  comment?: string
  conditionsAccepted?: boolean
  contactPhone?: string
  datetimeOfAppearance?: string
  downloadBandwidthTest?: number
  endAfternoonHours?: string
  endMorningHours?: string
  followBySms?: boolean
  hasModemKeptSynchronization?: boolean
  idAppointment?: number
  individualSite?: boolean
  modemIsSynchronized?: boolean
  modemMac?: string
  modemStillSynchronized?: boolean
  modemType?: string
  ovhTicket?: string
  problemType?: LineDiagnosticProblemType
  resolvedAfterTests?: boolean
  secureSite?: boolean
  severalInternetConnections?: boolean
  siteClosedDays?: string
  siteDigicode?: string
  siteOpening?: string
  startAfternoonHours?: string
  startMorningHours?: string
  uploadBandwidthTest?: number
}

/*
 * bandwidth unit for proof.ovh.net test values
 */
export enum LineDiagnosticBandwidthTestUnit {
  KBPS = 'Kbps',
  MBPS = 'Mbps'
}

/**
 * Informations directly get on DSLAM or Modem
 */
export interface LineDiagnosticConnectionInformations {
  crcError?: number
  downstreamAttenuation?: any
  downstreamMargin?: any
  downstreamSync?: any
  ifName?: string
  profile?: string
  upstreamAttenuation?: any
  upstreamMargin?: any
  upstreamSync?: any
}

/*
 * Customer possible actions
 */
export enum LineDiagnosticCustomerActions {
  BEPREPAREDTOCHECKMODEMSYNCHRONIZATION = 'bePreparedToCheckModemSynchronization',
  CHANGEDSLFILTERANDPLUGINDTI = 'changeDslFilterAndPlugInDti',
  CHANGEEXTENSIONCABLE = 'changeExtensionCable',
  CHANGEPROFILE = 'changeProfile',
  CHECKCONNECTIONCABLE = 'checkConnectionCable',
  CHECKCONNECTIONLOGINANDPARAMETERS = 'checkConnectionLoginAndParameters',
  CHECKFILTER = 'checkFilter',
  CONNECTMODEMTOOTHERPLUGS = 'connectModemToOtherPlugs',
  NEUTRALTEST = 'neutralTest',
  REBOOTMODEM = 'rebootModem',
  RESETMODEM = 'resetModem',
  UNPLUGEVERYMODEMS = 'unplugEveryModems',
  UNPLUGMODEM = 'unplugModem'
}

/**
 * Customer action to do
 */
export interface LineDiagnosticCustomerActionToDo {
  description: string
  name: LineDiagnosticCustomerActions
}

/**
 * Diagnostic status and informations
 */
export interface LineDiagnosticDiagnostic {
  data: LineDiagnosticDiagnosticData
  faultType: LineDiagnosticFaultType
  id: number
  status: LineDiagnosticDiagnosticStatus
}

/**
 * Diagnostic data and informations
 */
export interface LineDiagnosticDiagnosticData {
  actionsDone: LineDiagnosticCustomerActionsEnum[]
  actionsToDo: LineDiagnosticCustomerActionToDo[]
  answers: LineDiagnosticAnswers
  comment?: string
  creationDate: string
  diagnosticDoneDate?: string
  error: string
  lastUpdate: string
  lineDetails: LineDiagnosticLineDetails
  robotAction?: LineDiagnosticRobotActions
  seltTest: LineDiagnosticSeltResult
  timeout: number
  toAnswer: LineDiagnosticQuestion[]
}

/*
 * Diagnostic status possible values
 */
export enum LineDiagnosticDiagnosticStatus {
  CANCELLED = 'cancelled',
  CONNECTIONPROBLEM = 'connectionProblem',
  GENERICINCIDENTPENDING = 'genericIncidentPending',
  HAVETOCONNECTMODEMONTHERIGHTPLUG = 'haveToConnectModemOnTheRightPlug',
  INIT = 'init',
  INTERVENTIONREQUESTED = 'interventionRequested',
  NOBANDWIDTHFAULT = 'noBandwidthFault',
  NOPROBLEMANYMORE = 'noProblemAnymore',
  NOSYNCFAULTDIAGNOSTICREQUIRED = 'noSyncFaultDiagnosticRequired',
  PROBLEM = 'problem',
  RESOLVEDAFTERTESTS = 'resolvedAfterTests',
  SLEEPING = 'sleeping',
  VALIDATIONREFUSED = 'validationRefused',
  WAITINGHUMAN = 'waitingHuman',
  WAITINGROBOT = 'waitingRobot',
  WAITINGVALIDATION = 'waitingValidation'
}

/*
 * Line diagnostic fault type
 */
export enum LineDiagnosticFaultType {
  ALIGNMENT = 'alignment',
  NOSYNC = 'noSync',
  SYNCLOSSORLOWBANDWIDTH = 'syncLossOrLowBandwidth',
  UNKNOWN = 'unknown'
}

/**
 * Theoretical line capabilities
 */
export interface LineDiagnosticLineCapabilities {
  down?: any
  mitigation?: string
  ping?: any
  up?: any
}

/**
 * Line informations
 */
export interface LineDiagnosticLineDetails {
  accessName: string
  accessPing?: boolean
  address?: string
  connectionInfo?: LineDiagnosticConnectionInformations
  contactPhone?: string
  description?: string
  dslamIsSynchronized?: boolean
  gtr: boolean
  length: number
  lineCapabilities?: LineDiagnosticLineCapabilities
  lineType: DslType
  nra?: string
  number: string
  operator: LineDiagnosticProvider
  sections?: LineDiagnosticSection[]
}

/**
 * possible value for specific answer
 */
export interface LineDiagnosticPossibleValue {
  id?: number
  label?: string
  value?: string
}

/*
 * Possible customer questions
 */
export enum LineDiagnosticProblemType {
  LOWBANDWIDTH = 'lowBandwidth',
  SYNCLOSS = 'syncLoss'
}

/*
 * The providers for xdsl access
 */
export enum LineDiagnosticProvider {
  AXIONE = 'axione',
  FT = 'ft',
  FTBYSFR = 'ftBySfr',
  KOSC = 'kosc',
  KOSCDEG = 'koscDeg',
  OVH = 'ovh',
  SFR = 'sfr'
}

/**
 * Question to customer
 */
export interface LineDiagnosticQuestion {
  defaultValue?: string
  description: string
  enumValues?: string[]
  name: LineDiagnosticQuestions
  possibleValues?: LineDiagnosticPossibleValue[]
  required?: boolean
  type: string
}

/*
 * Possible customer questions
 */
export enum LineDiagnosticQuestions {
  BANDWIDTHTESTUNIT = 'bandwidthTestUnit',
  COMMENT = 'comment',
  CONDITIONSACCEPTED = 'conditionsAccepted',
  CONTACTPHONE = 'contactPhone',
  DATETIMEOFAPPEARANCE = 'datetimeOfAppearance',
  DOWNLOADBANDWIDTHTEST = 'downloadBandwidthTest',
  ENDAFTERNOONHOURS = 'endAfternoonHours',
  ENDMORNINGHOURS = 'endMorningHours',
  FOLLOWBYSMS = 'followBySms',
  HASMODEMKEPTSYNCHRONIZATION = 'hasModemKeptSynchronization',
  IDAPPOINTMENT = 'idAppointment',
  INDIVIDUALSITE = 'individualSite',
  MODEMISSYNCHRONIZED = 'modemIsSynchronized',
  MODEMMAC = 'modemMac',
  MODEMSTILLSYNCHRONIZED = 'modemStillSynchronized',
  MODEMTYPE = 'modemType',
  OVHTICKET = 'ovhTicket',
  PROBLEMTYPE = 'problemType',
  RESOLVEDAFTERTESTS = 'resolvedAfterTests',
  SECURESITE = 'secureSite',
  SEVERALINTERNETCONNECTIONS = 'severalInternetConnections',
  SITECLOSEDDAYS = 'siteClosedDays',
  SITEDIGICODE = 'siteDigicode',
  SITEOPENING = 'siteOpening',
  STARTAFTERNOONHOURS = 'startAfternoonHours',
  STARTMORNINGHOURS = 'startMorningHours',
  UPLOADBANDWIDTHTEST = 'uploadBandwidthTest'
}

/*
 * Diagnostic robot possible actions
 */
export enum LineDiagnosticRobotActions {
  ALIGNMENTLOCKTEST = 'alignmentLockTest',
  ALIGNMENTRESETTEST = 'alignmentResetTest',
  ALIGNMENTTESTRESULT = 'alignmentTestResult',
  CHECKCUSTOMERTICKET = 'checkCustomerTicket',
  CHECKIFACCESSPING = 'checkIfAccessPing',
  CHECKIFRESOLVEDAFTERCONNECTIONTESTS = 'checkIfResolvedAfterConnectionTests',
  CHECKIFRESOLVEDAFTERINSTALLATIONCHECK = 'checkIfResolvedAfterInstallationCheck',
  CHECKIFRESOLVEDAFTERTESTS = 'checkIfResolvedAfterTests',
  CHECKIFSEVERALCONNECTIONS = 'checkIfSeveralConnections',
  CHECKINSTALLATION = 'checkInstallation',
  CHECKPROBLEM = 'checkProblem',
  CHECKSYNCHRONIZATIONWITHOUTOTHERMODEMS = 'checkSynchronizationWithoutOtherModems',
  CUSTOMERPRELOCCHECKS = 'customerPrelocChecks',
  FINDPROBLEM = 'findProblem',
  INSTALLATIONCHECK = 'installationCheck',
  LOCKUNLOCK = 'lockUnlock',
  NEEDTOREQUESTMONITORING = 'needToRequestMonitoring',
  NEEDTOREQUESTOPERATORINTERVENTION = 'needToRequestOperatorIntervention',
  NEEDTOREQUESTOVHINTERVENTION = 'needToRequestOvhIntervention',
  REQUESTMONITORING = 'requestMonitoring',
  REQUESTOPERATORINTERVENTION = 'requestOperatorIntervention',
  REQUESTOVHINTERVENTION = 'requestOvhIntervention',
  SELTTEST = 'seltTest'
}

/**
 * Cables section details
 */
export interface LineDiagnosticSection {
  length: number
  section: number
}

/*
 * Possible SELT test prelocalizations
 */
export enum LineDiagnosticSeltPreloc {
  CUST = 'CUST',
  DSLAM = 'DSLAM',
  LINE = 'LINE',
  RE = 'RE'
}

/**
 * Customer answers for line diagnostic
 */
export interface LineDiagnosticSeltResult {
  date?: string
  distance?: number
  preloc?: LineDiagnosticSeltPreloc
  state?: LineDiagnosticSeltState
  status?: LineDiagnosticSeltStatus
}

/*
 * Possible SELT test states
 */
export enum LineDiagnosticSeltState {
  OPEN = 'open',
  SHORT = 'short',
  SYNCED = 'synced',
  UNKNOWN = 'unknown'
}

/*
 * Possible SELT test status
 */
export enum LineDiagnosticSeltStatus {
  FAILED = 'failed',
  NOTAVAILABLE = 'notAvailable',
  OK = 'ok'
}

/**
 * 
 */
export interface LineSectionLength {
  diameter: number
  length: number
}

/*
 * Various types of statisctics available for the line.
 */
export enum LineStatisticsType {
  ATTENUATION_DOWNLOAD = 'attenuation:download',
  ATTENUATION_UPLOAD = 'attenuation:upload',
  SNR_DOWNLOAD = 'snr:download',
  SNR_UPLOAD = 'snr:upload',
  SYNCHRONIZATION_DOWNLOAD = 'synchronization:download',
  SYNCHRONIZATION_UPLOAD = 'synchronization:upload'
}

/*
 * Line tests results
 */
export enum LineTest {
  ACTIONPENDING = 'actionPending',
  CUSTOMERSIDEPROBLEM = 'customerSideProblem',
  ERROR = 'error',
  NOPROBLEM = 'noProblem',
  OVHSIDEPROBLEM = 'ovhSideProblem'
}

/**
 * Modem
 */
export interface Modem {
  brandName: string
  capabilities: ModemCapabilities
  dmzIP?: string
  easyFirewallLevel?: XdslModemConfigEasyFirewallLevel
  ipv6Support: boolean
  isBridged: boolean
  lastCwmpRequestDate?: string
  macAddress: string
  managedByOvh: boolean
  model: string
  mtuSize?: XdslModemConfigMTUSize
}

/**
 * Describe the capabilities of the Modem
 */
export interface ModemCapabilities {
  canBeManagedByOvh: boolean
  canChangeBridgeMode: boolean
  canChangeDHCP: boolean
  canChangeDMZ: boolean
  canChangeEasyFirewallLevel: boolean
  canChangeFirmware: boolean
  canChangeLAN: boolean
  canChangeManagement: boolean
  canChangeMtu: boolean
  canChangePortMapping: boolean
  canChangeWLAN: boolean
  canReboot: boolean
  canReconfigureVoip: boolean
  canRefreshConnectedDevices: boolean
  canReset: boolean
}

/**
 * Describe general information of a Modem
 */
export interface ModemInfo {
  device: DeviceModemInfo
  statistics: StatsModemInfo
}

/**
 * Defines where and how the notifications will be sent
 */
export interface MonitoringNotification {
  allowIncident: boolean
  downThreshold: number
  email?: string
  enabled: boolean
  frequency: MonitoringNotificationsFrequency
  id: number
  phone?: string
  smsAccount?: string
  type: MonitoringNotificationsType
}

/*
 * Frequency between notifications.
 */
export type MonitoringNotificationsFrequency = '1h' | '5m' | '6h' | 'once'

/*
 * Type of notification.
 */
export enum MonitoringNotificationsType {
  MAIL = 'mail',
  SMS = 'sms'
}

/*
 * Operators
 */
export enum OperatorType {
  COLLECT = 'collect',
  KOSC = 'kosc',
  OVH = 'ovh'
}

/*
 * The duration units
 */
export enum OrderFollowupDurationUnit {
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute'
}

/**
 * A step of the order process
 */
export interface OrderFollowupStep {
  comments: string[]
  doneDate?: string
  durationUnit: OrderFollowupDurationUnit
  expectedDuration: number
  name: OrderFollowupStepName
  status: OrderFollowupStepStatus
}

/*
 * The status of an order step
 */
export enum OrderFollowupStepName {
  ACCESSISOPERATIONAL = 'accessIsOperational',
  CHECKINFRASTRUCTURE = 'checkInfrastructure',
  CONFIGUREACCESSONOVH = 'configureAccessOnOVH',
  ORDERPAYED = 'orderPayed',
  ORDERRECEIVED = 'orderReceived',
  ORDERTREATMENT = 'orderTreatment',
  SENDMODEM = 'sendModem',
  SENDORDERTOPROVIDER = 'sendOrderToProvider',
  SETUPCUSTOMERPREMISESEQUIPMENT = 'setupCustomerPremisesEquipment',
  WAITINGFORPROVIDERINSTALLREPORT = 'waitingForProviderInstallReport',
  WAITINGFORWITHDRAWALPERIODTOBEOVER = 'waitingForWithdrawalPeriodToBeOver'
}

/*
 * The status of an order step
 */
export enum OrderFollowupStepStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo',
  WAITINGCUSTOMER = 'waitingCustomer'
}

/**
 * Scheduled action before the next renewal of the service
 */
export interface PendingAction {
  action: string
  dateTodo: string
}

/**
 * Port Mappings
 */
export interface PortMapping {
  allowedRemoteIp?: string
  description?: string
  externalPortEnd?: number
  externalPortStart: number
  id: number
  internalClient: string
  internalPort: number
  name: string
  protocol: XdslModemConfigProtocolType
  taskId?: number
}

/**
 * Log entry of an auth attempt to the radius server
 */
export interface RadiusConnectionLog {
  date: string
  login: string
  message: string
  state: string
}

/**
 * Details about the resiliation
 */
export interface ResiliationFollowUpDetail {
  dateTodo: string
  needModemReturn: boolean
  registrationDate: string
  status: string
}

/*
 * Reason of a resiliation
 */
export enum ResiliationReason {
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
export interface ResiliationSurvey {
  comment?: string
  type: ResiliationReason
}

/**
 * Show the resiliation terms
 */
export interface ResiliationTerms {
  due: OrderPrice
  engageDate?: string
  minResiliationDate: string
  resiliationDate: string
  resiliationReasons: ResiliationReasonEnum[]
}

/*
 * Status of the service
 */
export enum ServiceStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled'
}

/*
 * Periods for statistics.
 */
export enum StatisticsPeriod {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  PREVIEW = 'preview',
  WEEKLY = 'weekly',
  YEARLY = 'yearly'
}

/**
 * Describe statistics information of a Modem
 */
export interface StatsModemInfo {
  connectionUptime: number
  crcError: number
  deviceUptime: number
  downstreamAttenuation: any
  downstreamMargin: any
  downstreamSync: any
  lastUpdate: string
  modulation: string
  quarterHourStart: number
  syncUptime: number
  upstreamAttenuation: any
  upstreamMargin: any
  upstreamSync: any
}

/**
 * Describes the current status of a task
 */
export interface Task {
  function: string
  id: number
  status: TaskStatus
  todoDate: string
  updateDate: string
}

/*
 * Status of a task.
 */
export enum TaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  PROBLEM = 'problem',
  TODO = 'todo'
}

/**
 * Modem Template
 */
export interface TemplateModem {
  capabilities: string
  creationDate: string
  DHCP: TemplateModemDHCP[]
  dmzIP?: string
  LAN: TemplateModemLAN[]
  mtuSize?: XdslModemConfigMTUSize
  name: string
  parametersToIgnore?: TemplateModemParametersToIgnore
  portMapping: TemplateModemPortMapping[]
  WLAN: TemplateModemWLAN[]
}

/**
 * DHCP Configuration for Modem Template
 */
export interface TemplateModemDHCP {
  defaultGateway: string
  dhcpName: string
  domainName: string
  endAddress: string
  leaseTime: number
  primaryDNS: string
  secondaryDNS?: string
  serverEnabled: boolean
  startAddress: string
  subnetMask: string
}

/**
 * LAN Configuration for Modem Template
 */
export interface TemplateModemLAN {
  addressingType: XdslModemConfigAddressingType
  IPAddress: string
  lanName: string
  subnetMask: string
}

/**
 * Parameters and values to ignore when apply modem template configuration
 */
export interface TemplateModemParametersToIgnore {
  dmzIP?: boolean
  LANandDHCP?: boolean
  mtuSize?: boolean
  portMappingList?: string[]
  WLANList?: string[]
}

/**
 * PortMapping Configuration for Modem Template
 */
export interface TemplateModemPortMapping {
  allowedRemoteIp?: string
  description?: string
  externalPortEnd?: number
  externalPortStart: number
  internalClient: string
  internalPort: number
  name: string
  protocol: XdslModemConfigProtocolType
}

/*
 * Type of WLAN security protection
 */
export enum TemplateModemSecurityType {
  NONE = 'None',
  WPA = 'WPA',
  WPA2 = 'WPA2',
  WPAANDWPA2 = 'WPAandWPA2'
}

/**
 * WLAN Configuration for Modem Template
 */
export interface TemplateModemWLAN {
  bandSteering: boolean
  channel: number
  channelMode: XdslModemConfigChannelMode
  enabled: boolean
  frequency: XdslModemConfigFrequency
  guest: boolean
  securityKey: string
  securityType: TemplateModemSecurityType
  SSID: string
  SSIDAdvertisementEnabled: boolean
  wifiName: string
}

/**
 * A value associated to a timestamp
 */
export interface TimestampAndValue {
  timestamp: number
  value?: any
}

/**
 * WLAN Configuration of the Modem
 */
export interface WLAN {
  bandSteering: boolean
  channel: number
  channelMode: XdslModemConfigChannelMode
  enabled: boolean
  frequency: XdslModemConfigFrequency
  guest: boolean
  securityKey: string
  securityType: XdslModemConfigSecurityType
  SSID: string
  SSIDAdvertisementEnabled: boolean
  taskId?: number
  wifiName: string
}

/*
 * Frequency of WLAN
 */
export type WLANFrequency = '2.4GHz' | '5GHz'

/**
 * XDSL Email Pro
 */
export interface XdslEmailPro {
  currentUsage: any
  displayName?: string
  domain: string
  firstName?: string
  id: number
  initial?: string
  lastLogoffDate?: string
  lastLogonDate?: string
  lastName?: string
  login: string
  passwordLastUpdate?: string
  primaryEmailAddress: string
  quota: any
  state: EmailproObjectState
  taskPendingId?: number
}

/*
 * How the modem gets its LAN IP Address
 */
export enum XdslModemConfigAddressingType {
  DHCP = 'DHCP',
  STATIC = 'Static'
}

/*
 * How the WiFi channel is selected
 */
export enum XdslModemConfigChannelMode {
  AUTO = 'Auto',
  MANUAL = 'Manual'
}

/*
 * How did the device got its IP Address
 */
export enum XdslModemConfigConnectedDeviceAddressSource {
  DHCP = 'DHCP',
  STATIC = 'Static',
  UNKNOWN = 'Unknown'
}

/*
 * Level of the Firewall ( BlockAll will block all connections, Normal will block all incoming connections except those in PortMapping and let go all outgoing connections , Disabled will disable all the Firewall and let all incoming or outgoing connections pass through )
 */
export enum XdslModemConfigEasyFirewallLevel {
  BLOCKALL = 'BlockAll',
  DISABLED = 'Disabled',
  NORMAL = 'Normal'
}

/*
 * Modem frequency
 */
export type XdslModemConfigFrequency = '2.4GHz' | '5GHz'

/*
 * Size of the Maximum Transmission Unit on the modem's interfaces
 */
export type XdslModemConfigMTUSize = 1432 | 1456 | 1492

/*
 * Type of protocol for the Port Mapping
 */
export enum XdslModemConfigProtocolType {
  TCP = 'TCP',
  UDP = 'UDP'
}

/*
 * Type of WLAN security protection
 */
export enum XdslModemConfigSecurityType {
  NONE = 'None',
  WEP = 'WEP',
  WPA = 'WPA',
  WPA2 = 'WPA2',
  WPAANDWPA2 = 'WPAandWPA2'
}


export class Xdsl {
  constructor(private client: Client) {}

  /**
   * Operations about the XDSL service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/xdsl`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * XDSL Access [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<Access> {
    let url = `/xdsl/${serviceName}`

    return this.client.request<Access>('GET', url)
  }

  /**
   * XDSL Access [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: Access): Promise<void> {
    let url = `/xdsl/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * extraIpRange operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/addressMove/extraIpRange#GET)
   */
  InformationsAboutTheExtraIPRangeDuringAddressMove(serviceName: string): Promise<ExtraIpRangeMove> {
    let url = `/xdsl/${serviceName}/addressMove/extraIpRange`

    return this.client.request<ExtraIpRangeMove>('GET', url)
  }

  /**
   * extraIpRangeMove operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/addressMove/extraIpRangeMove#POST)
   */
  InitiateTheExtraIPRangeMigration(serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/addressMove/extraIpRangeMove`

    return this.client.request<Task>('POST', url)
  }

  /**
   * List the xdsl.AntiSpam objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/antiSpams#GET)
   */
  ListAntiSpamsForThisAccess(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/antiSpams`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Spams detected from xdsl access [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/antiSpams/%7Bip%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, serviceName: string): Promise<AntiSpam> {
    let url = `/xdsl/${serviceName}/antiSpams/${ip}`

    return this.client.request<AntiSpam>('GET', url)
  }
  */

  /**
   * evidences operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/antiSpams/%7Bip%7D/evidences#GET)
   */
  ListOfEvidencesStoredOnPCSForThisIp(ip: string, serviceName: string): Promise<AntiSpamEvidencesInfo> {
    let url = `/xdsl/${serviceName}/antiSpams/${ip}/evidences`

    return this.client.request<AntiSpamEvidencesInfo>('GET', url)
  }

  /**
   * applyTemplateToModem operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/applyTemplateToModem#POST)
   */
  ApplyTemplateModemToExistingModem(serviceName: string, templateName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/applyTemplateToModem`

    return this.client.request<Task>('POST', url, {templateName})
  }

  /**
   * canCancelResiliation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/canCancelResiliation#GET)
   */
  GetInformationAboutTheOngoingResiliation(serviceName: string): Promise<boolean> {
    let url = `/xdsl/${serviceName}/canCancelResiliation`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * cancelResiliation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/cancelResiliation#POST)
   */
  CancelTheOngoingResiliation(serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/cancelResiliation`

    return this.client.request<void>('POST', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/xdsl/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Diagnostic of the access [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/diagnostic#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<AccessDiagnostic> {
    let url = `/xdsl/${serviceName}/diagnostic`

    return this.client.request<AccessDiagnostic>('GET', url)
  }
  */

  /**
   * Diagnostic of the access [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/diagnostic#POST)
   */
  RunDiagnosticOnTheAccess(serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/diagnostic`

    return this.client.request<Task>('POST', url)
  }

  /**
   * Detected incident [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/incident#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<Incident> {
    let url = `/xdsl/${serviceName}/incident`

    return this.client.request<Incident>('GET', url)
  }
  */

  /**
   * List the xdsl.IP objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips#GET)
   */
  ListOfIPsAddressesForThisAccess(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/ips`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the xdsl.IP objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips#POST)
   */
  OrderAnExtra29RangeOfIPv4Addresses(serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/ips`

    return this.client.request<Task>('POST', url)
  }

  /**
   * Informations about an IP address [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips/%7Bip%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, serviceName: string): Promise<IP> {
    let url = `/xdsl/${serviceName}/ips/${ip}`

    return this.client.request<IP>('GET', url)
  }
  */

  /**
   * Informations about an IP address [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips/%7Bip%7D#DELETE)
   */
  StopRenewingThisExtraIPv4Option(ip: string, serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/ips/${ip}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * ipv6 operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ipv6#POST)
   */
  ChangeTheStatusOfTheIPv6ForThisAccess(enabled: boolean, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/ipv6`

    return this.client.request<Task>('POST', url, {enabled})
  }

  /**
   * List the xdsl.Line objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines#GET)
   */
  TheLinesOfTheAccess(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/lines`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Information about the physical copper line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D#GET)
   */
  /*
  GetThisObjectProperties(number: string, serviceName: string): Promise<Line> {
    let url = `/xdsl/${serviceName}/lines/${number}`

    return this.client.request<Line>('GET', url)
  }
  */

  /**
   * cancel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/diagnostic/cancel#POST)
   */
  CancelLineDiagnosticIfPossible(number: string, serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/lines/${number}/diagnostic/cancel`

    return this.client.request<void>('POST', url)
  }

  /**
   * run operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/diagnostic/run#POST)
   */
  UpdateAndGetAdvancedDiagnosticOfTheLine(faultType: LineDiagnosticFaultType, number: string, serviceName: string, actionsDone?: LineDiagnosticCustomerActionsEnum[], answers?: LineDiagnosticAnswers): Promise<LineDiagnosticDiagnostic> {
    let url = `/xdsl/${serviceName}/lines/${number}/diagnostic/run`

    return this.client.request<LineDiagnosticDiagnostic>('POST', url, {faultType, actionsDone, answers})
  }

  /**
   * Information about the port on the DSLAM [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort#GET)
   */
  /*
  GetThisObjectProperties(number: string, serviceName: string): Promise<DslamPort> {
    let url = `/xdsl/${serviceName}/lines/${number}/dslamPort`

    return this.client.request<DslamPort>('GET', url)
  }
  */

  /**
   * availableProfiles operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/availableProfiles#GET)
   */
  ListAllAvailablesProfilesForThisPort(number: string, serviceName: string): Promise<DslamLineProfile[]> {
    let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/availableProfiles`

    return this.client.request<DslamLineProfile[]>('GET', url)
  }

  /**
   * changeProfile operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/changeProfile#POST)
   */
  ChangeTheProfileOfThePort(dslamProfileId: number, number: string, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/changeProfile`

    return this.client.request<Task>('POST', url, {dslamProfileId})
  }

  /**
   * logs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/logs#GET)
   */
  GetTheLogsEmittedByTheDSLAMForThisPort(limit: number, number: string, serviceName: string): Promise<DslamPortLog[]> {
    let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/logs?`

    const queryParams = new QueryParams()
    if (limit) { queryParams.set('limit', limit.toString()) }

    return this.client.request<DslamPortLog[]>('GET', url+queryParams.toString())
  }

  /**
   * reset operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/reset#POST)
   */
  ResetThePortOnTheDSLAM(number: string, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/reset`

    return this.client.request<Task>('POST', url)
  }

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/statistics#GET)
   */
  GetVariousStatisticsAboutTheLine(number: string, period: StatisticsPeriod, serviceName: string, type: LineStatisticsType): Promise<any> {
    let url = `/xdsl/${serviceName}/lines/${number}/statistics?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<Modem> {
    let url = `/xdsl/${serviceName}/modem`

    return this.client.request<Modem>('GET', url)
  }
  */

  /**
   * Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: Modem): Promise<void> {
    let url = `/xdsl/${serviceName}/modem`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * availableWLANChannel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/availableWLANChannel#GET)
   */
  ListAvailableWLANChannelForThisModem(frequency: WLANFrequency, serviceName: string): Promise<number[]> {
    let url = `/xdsl/${serviceName}/modem/availableWLANChannel?`

    const queryParams = new QueryParams()
    if (frequency) { queryParams.set('frequency', frequency.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * blocIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/blocIp#GET)
   */
  GetTheStatusOfTheBlocIPOnModem(serviceName: string): Promise<ServiceStatus> {
    let url = `/xdsl/${serviceName}/modem/blocIp`

    return this.client.request<ServiceStatus>('GET', url)
  }

  /**
   * blocIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/blocIp#POST)
   */
  ChangeTheStatusOfTheBlocIPOnModem(serviceName: string, status: ServiceStatus): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/blocIp`

    return this.client.request<Task>('POST', url, {status})
  }

  /**
   * callWaiting operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/callWaiting#GET)
   */
  GetTheStatusOfCallWaitingOnModem(serviceName: string): Promise<ServiceStatus> {
    let url = `/xdsl/${serviceName}/modem/callWaiting`

    return this.client.request<ServiceStatus>('GET', url)
  }

  /**
   * callWaiting operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/callWaiting#POST)
   */
  ChangeTheStatusOfCallWaitingOnModem(callWaiting: ServiceStatus, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/callWaiting`

    return this.client.request<Task>('POST', url, {callWaiting})
  }

  /**
   * comfortExchange operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/comfortExchange#POST)
   */
  ReplaceAccessModemByLastModelFeesWillBeApplied(serviceName: string, contactShipping?: string): Promise<OrderOrder> {
    let url = `/xdsl/${serviceName}/modem/comfortExchange`

    return this.client.request<OrderOrder>('POST', url, {contactShipping})
  }

  /**
   * List the xdsl.connectedDevice objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/connectedDevices#GET)
   */
  ListOfDevicesConnectedOnThisModem(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/modem/connectedDevices`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Connected Device [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/connectedDevices/%7BmacAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(macAddress: string, serviceName: string): Promise<ConnectedDevice> {
    let url = `/xdsl/${serviceName}/modem/connectedDevices/${macAddress}`

    return this.client.request<ConnectedDevice>('GET', url)
  }
  */

  /**
   * contentSharing operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/contentSharing#POST)
   */
  ChangeTheStatusOfContentSharingOnModem(contentSharing: ServiceStatus, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/contentSharing`

    return this.client.request<Task>('POST', url, {contentSharing})
  }

  /**
   * contentSharing operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/contentSharing#GET)
   */
  GetTheStatusOfContentSharingOnModem(serviceName: string): Promise<ServiceStatus> {
    let url = `/xdsl/${serviceName}/modem/contentSharing`

    return this.client.request<ServiceStatus>('GET', url)
  }

  /**
   * duplicatePortMappingConfig operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/duplicatePortMappingConfig#POST)
   */
  RemoveAllTheCurrentPortMappingRulesAndSetTheSameConfigAsTheAccessGivenInParameters(accessName: string, serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/duplicatePortMappingConfig`

    return this.client.request<void>('POST', url, {accessName})
  }

  /**
   * firmware operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/firmware#POST)
   */
  LaunchATaskToInstallTargetFirmwareOnModem(firmware: string, serviceName: string, todoDate?: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/firmware`

    return this.client.request<Task>('POST', url, {firmware, todoDate})
  }

  /**
   * firmware operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/firmware#GET)
   */
  GetTheFirmwareVersionInstalledOnModem(serviceName: string): Promise<string> {
    let url = `/xdsl/${serviceName}/modem/firmware`

    return this.client.request<string>('GET', url)
  }

  /**
   * firmwareAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/firmwareAvailable#GET)
   */
  ListAvailableFirmwareForThisModem(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/modem/firmwareAvailable`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * ftp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ftp#GET)
   */
  GetTheStatusOfFtpServiceOnModem(serviceName: string): Promise<ServiceStatus> {
    let url = `/xdsl/${serviceName}/modem/ftp`

    return this.client.request<ServiceStatus>('GET', url)
  }

  /**
   * ftp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ftp#POST)
   */
  ChangeTheStatusOfTheFtpServiceOnModem(ftp: ServiceStatus, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/ftp`

    return this.client.request<Task>('POST', url, {ftp})
  }

  /**
   * ipsecAlg operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ipsecAlg#GET)
   */
  GetTheStatusOfIpsecAlgServiceOnModem(serviceName: string): Promise<ServiceStatus> {
    let url = `/xdsl/${serviceName}/modem/ipsecAlg`

    return this.client.request<ServiceStatus>('GET', url)
  }

  /**
   * ipsecAlg operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ipsecAlg#POST)
   */
  ChangeTheStatusOfTheIpsecAlgServiceOnModem(ipsecAlg: ServiceStatus, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/ipsecAlg`

    return this.client.request<Task>('POST', url, {ipsecAlg})
  }

  /**
   * List the xdsl.LAN objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan#GET)
   */
  ListOfLANsOnThisModem(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/modem/lan`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * LAN Configuration of the Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D#GET)
   */
  /*
  GetThisObjectProperties(lanName: string, serviceName: string): Promise<LAN> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}`

    return this.client.request<LAN>('GET', url)
  }
  */

  /**
   * LAN Configuration of the Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(lanName: string, serviceName: string, payload: LAN): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the xdsl.DHCP objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp#GET)
   */
  ListOfDHCPOnThisModem(lanName: string, serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * DHCP Configuration of the Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D#GET)
   */
  /*
  GetThisObjectProperties(dhcpName: string, lanName: string, serviceName: string): Promise<DHCP> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}`

    return this.client.request<DHCP>('GET', url)
  }
  */

  /**
   * DHCP Configuration of the Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(dhcpName: string, lanName: string, serviceName: string, payload: DHCP): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the xdsl.DHCPStaticAddress objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses#GET)
   */
  ListOfDHCPStaticAddressOfThisModem(dhcpName: string, lanName: string, serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the xdsl.DHCPStaticAddress objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses#POST)
   */
  AddADHCPStaticLease(dhcpName: string, IPAddress: string, lanName: string, MACAddress: string, serviceName: string, name?: string): Promise<DHCPStaticAddress> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses`

    return this.client.request<DHCPStaticAddress>('POST', url, {IPAddress, MACAddress, name})
  }

  /**
   * DHCP Static Address [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses/%7BMACAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(dhcpName: string, lanName: string, MACAddress: string, serviceName: string): Promise<DHCPStaticAddress> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`

    return this.client.request<DHCPStaticAddress>('GET', url)
  }
  */

  /**
   * DHCP Static Address [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses/%7BMACAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(dhcpName: string, lanName: string, MACAddress: string, serviceName: string, payload: DHCPStaticAddress): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * DHCP Static Address [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses/%7BMACAddress%7D#DELETE)
   */
  DeleteThisPortMapping(dhcpName: string, lanName: string, MACAddress: string, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`

    return this.client.request<Task>('DELETE', url)
  }

  /**
   * List the xdsl.PortMapping objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings#GET)
   */
  ListOfPortMappingsOnThisModem(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/modem/portMappings`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the xdsl.PortMapping objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings#POST)
   */
  AddAPortMapping(externalPortStart: number, internalClient: string, internalPort: number, name: string, protocol: XdslModemConfigProtocolType, serviceName: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number): Promise<PortMapping> {
    let url = `/xdsl/${serviceName}/modem/portMappings`

    return this.client.request<PortMapping>('POST', url, {externalPortStart, internalClient, internalPort, name, protocol, allowedRemoteIp, description, externalPortEnd})
  }

  /**
   * Port Mappings [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<PortMapping> {
    let url = `/xdsl/${serviceName}/modem/portMappings/${name}`

    return this.client.request<PortMapping>('GET', url)
  }
  */

  /**
   * Port Mappings [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings/%7Bname%7D#PUT)
   */
  /*
  AlterThisObjectProperties(name: string, serviceName: string, payload: PortMapping): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/portMappings/${name}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Port Mappings [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings/%7Bname%7D#DELETE)
   */
  /*
  DeleteThisPortMapping(name: string, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/portMappings/${name}`

    return this.client.request<Task>('DELETE', url)
  }
  */

  /**
   * reboot operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/reboot#POST)
   */
  RebootTheModem(serviceName: string, todoDate?: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/reboot`

    return this.client.request<Task>('POST', url, {todoDate})
  }

  /**
   * reconfigureVoip operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/reconfigureVoip#POST)
   */
  ReconfigureVoipLineOnModem(serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/reconfigureVoip`

    return this.client.request<void>('POST', url)
  }

  /**
   * refreshConnectedDevices operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/refreshConnectedDevices#POST)
   */
  RefreshTheListOfConnectedDevicesOnTheModem(serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/refreshConnectedDevices`

    return this.client.request<Task>('POST', url)
  }

  /**
   * reset operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/reset#POST)
   */
  ResetTheModemToItsDefaultConfiguration(serviceName: string, resetOvhConfig?: boolean): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/reset`

    return this.client.request<Task>('POST', url, {resetOvhConfig})
  }

  /**
   * resetPortMappingConfig operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/resetPortMappingConfig#POST)
   */
  RemoveAllTheCurrentPortMappingRules(serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/resetPortMappingConfig`

    return this.client.request<void>('POST', url)
  }

  /**
   * retrieveInfo operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/retrieveInfo#POST)
   */
  GetGeneralModemInformation(serviceName: string): Promise<any> {
    let url = `/xdsl/${serviceName}/modem/retrieveInfo`

    return this.client.request<any>('POST', url)
  }

  /**
   * sipAlg operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/sipAlg#GET)
   */
  GetTheStatusOfSipAlgServiceOnModem(serviceName: string): Promise<ServiceStatus> {
    let url = `/xdsl/${serviceName}/modem/sipAlg`

    return this.client.request<ServiceStatus>('GET', url)
  }

  /**
   * sipAlg operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/sipAlg#POST)
   */
  ChangeTheStatusOfTheSipAlgServiceOnModem(serviceName: string, sipAlg: ServiceStatus): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/sipAlg`

    return this.client.request<Task>('POST', url, {sipAlg})
  }

  /**
   * upnp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/upnp#POST)
   */
  ChangeTheStatusOfTheUpnpOnModem(serviceName: string, upnp: ServiceStatus): Promise<Task> {
    let url = `/xdsl/${serviceName}/modem/upnp`

    return this.client.request<Task>('POST', url, {upnp})
  }

  /**
   * upnp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/upnp#GET)
   */
  GetTheStatusOfTheUpnpOnModem(serviceName: string): Promise<ServiceStatus> {
    let url = `/xdsl/${serviceName}/modem/upnp`

    return this.client.request<ServiceStatus>('GET', url)
  }

  /**
   * List the xdsl.WLAN objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/wifi#GET)
   */
  ListOfWLANsOnThisModem(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/modem/wifi`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * WLAN Configuration of the Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/wifi/%7BwifiName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, wifiName: string): Promise<WLAN> {
    let url = `/xdsl/${serviceName}/modem/wifi/${wifiName}`

    return this.client.request<WLAN>('GET', url)
  }
  */

  /**
   * WLAN Configuration of the Modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/wifi/%7BwifiName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, wifiName: string, payload: WLAN): Promise<void> {
    let url = `/xdsl/${serviceName}/modem/wifi/${wifiName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the xdsl.MonitoringNotification objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications#GET)
   */
  ListTheNotificationsForThisAccess(serviceName: string): Promise<number[]> {
    let url = `/xdsl/${serviceName}/monitoringNotifications`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the xdsl.MonitoringNotification objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications#POST)
   */
  AddANotification(frequency: MonitoringNotificationsFrequency, serviceName: string, type: MonitoringNotificationsType, allowIncident?: boolean, downThreshold?: number, email?: string, phone?: string, smsAccount?: string): Promise<MonitoringNotification> {
    let url = `/xdsl/${serviceName}/monitoringNotifications`

    return this.client.request<MonitoringNotification>('POST', url, {frequency, type, allowIncident, downThreshold, email, phone, smsAccount})
  }

  /**
   * Defines where and how the notifications will be sent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<MonitoringNotification> {
    let url = `/xdsl/${serviceName}/monitoringNotifications/${id}`

    return this.client.request<MonitoringNotification>('GET', url)
  }
  */

  /**
   * Defines where and how the notifications will be sent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: MonitoringNotification): Promise<void> {
    let url = `/xdsl/${serviceName}/monitoringNotifications/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Defines where and how the notifications will be sent [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications/%7Bid%7D#DELETE)
   */
  DeleteThisNotification(id: number, serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/monitoringNotifications/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * orderFollowup operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/orderFollowup#GET)
   */
  GetTheStatusOfTheOrder(serviceName: string): Promise<OrderFollowupStep[]> {
    let url = `/xdsl/${serviceName}/orderFollowup`

    return this.client.request<OrderFollowupStep[]>('GET', url)
  }

  /**
   * orderMeeting operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/orderMeeting#POST)
   */
  BookAMeetingAndRelaunchOrder(endDate: string, serviceName: string, startDate: string, uiCode: string): Promise<void> {
    let url = `/xdsl/${serviceName}/orderMeeting`

    return this.client.request<void>('POST', url, {endDate, startDate, uiCode})
  }

  /**
   * Scheduled action before the next renewal of the service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/pendingAction#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<PendingAction> {
    let url = `/xdsl/${serviceName}/pendingAction`

    return this.client.request<PendingAction>('GET', url)
  }
  */

  /**
   * radiusConnectionLogs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/radiusConnectionLogs#GET)
   */
  ListTheRadiusConnectionLogs(serviceName: string): Promise<RadiusConnectionLog[]> {
    let url = `/xdsl/${serviceName}/radiusConnectionLogs`

    return this.client.request<RadiusConnectionLog[]>('GET', url)
  }

  /**
   * requestPPPLoginMail operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/requestPPPLoginMail#POST)
   */
  RenewPPPPasswordAndSendThePPPLoginInformationsToTheEmailOfTheNicAdmin(serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/requestPPPLoginMail`

    return this.client.request<void>('POST', url)
  }

  /**
   * requestTotalDeconsolidation operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/requestTotalDeconsolidation#POST)
   */
  SwitchThisAccessToTotalDeconsolidation(serviceName: string, noPortability?: boolean, rio?: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/requestTotalDeconsolidation`

    return this.client.request<Task>('POST', url, {noPortability, rio})
  }

  /**
   * resiliate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/resiliate#POST)
   */
  ResiliateTheAccess(resiliationSurvey: ResiliationSurvey, serviceName: string, resiliationDate?: string): Promise<ResiliationFollowUpDetail> {
    let url = `/xdsl/${serviceName}/resiliate`

    return this.client.request<ResiliationFollowUpDetail>('POST', url, {resiliationSurvey, resiliationDate})
  }

  /**
   * resiliationFollowup operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/resiliationFollowup#GET)
   */
  /*
  GetInformationAboutTheOngoingResiliation(serviceName: string): Promise<ResiliationFollowUpDetail> {
    let url = `/xdsl/${serviceName}/resiliationFollowup`

    return this.client.request<ResiliationFollowUpDetail>('GET', url)
  }
  */

  /**
   * resiliationTerms operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/resiliationTerms#GET)
   */
  GetResiliationTerms(serviceName: string, resiliationDate?: string): Promise<ResiliationTerms> {
    let url = `/xdsl/${serviceName}/resiliationTerms?`

    const queryParams = new QueryParams()
    if (resiliationDate) { queryParams.set('resiliationDate', resiliationDate.toString()) }

    return this.client.request<ResiliationTerms>('GET', url+queryParams.toString())
  }

  /**
   * List the telephony.Rma objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma#GET)
   */
  ReturnMerchandiseAuthorisationAssociated(serviceName: string): Promise<string[]> {
    let url = `/xdsl/${serviceName}/rma`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Current Return Merchandise Authorisation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: string, serviceName: string): Promise<TelephonyRma> {
    let url = `/xdsl/${serviceName}/rma/${id}`

    return this.client.request<TelephonyRma>('GET', url)
  }
  */

  /**
   * Current Return Merchandise Authorisation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: string, serviceName: string, payload: TelephonyRma): Promise<void> {
    let url = `/xdsl/${serviceName}/rma/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Current Return Merchandise Authorisation [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma/%7Bid%7D#DELETE)
   */
  CancelTheRma(id: string, serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/rma/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * searchOrderMeetings operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/searchOrderMeetings#POST)
   */
  SearchForAvailableLineCreationMeetingTimeSlotsForOrderOnly(serviceName: string): Promise<any> {
    let url = `/xdsl/${serviceName}/searchOrderMeetings`

    return this.client.request<any>('POST', url)
  }

  /**
   * sendOrderToProvider operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/sendOrderToProvider#POST)
   */
  UnlockOrderInWaitingCustomerStatusItOnlyConcernsOrdersWhoseModemIsSentBeforeAnythingHaveBeenForwardedToOurProvider(serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/sendOrderToProvider`

    return this.client.request<void>('POST', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/xdsl/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/xdsl/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/statistics#GET)
   */
  GetVariousStatisticsAboutThisAccess(period: StatisticsPeriod, serviceName: string, type: AccessStatisticsType): Promise<any> {
    let url = `/xdsl/${serviceName}/statistics?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * List the xdsl.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/tasks#GET)
   */
  TasksScheduledForThisAccess(serviceName: string, _function?: string, status?: TaskStatus): Promise<number[]> {
    let url = `/xdsl/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Describes the current status of a task [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Task> {
    let url = `/xdsl/${serviceName}/tasks/${id}`

    return this.client.request<Task>('GET', url)
  }
  */

  /**
   * archive operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/tasks/%7Bid%7D/archive#POST)
   */
  DeleteTheTaskInProblemFromTheResults(id: number, serviceName: string): Promise<void> {
    let url = `/xdsl/${serviceName}/tasks/${id}/archive`

    return this.client.request<void>('POST', url)
  }

  /**
   * totalDeconsolidationTerms operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/totalDeconsolidationTerms#GET)
   */
  GiveThePriceToRequestTotalDeconsolidationOnTheAccess(serviceName: string): Promise<DeconsolidationTerms> {
    let url = `/xdsl/${serviceName}/totalDeconsolidationTerms`

    return this.client.request<DeconsolidationTerms>('GET', url)
  }

  /**
   * updateInvalidOrMissingRio operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/updateInvalidOrMissingRio#POST)
   */
  UpdateRIOOrDisablePortabilityForOrderInErrorBecauseOfMissingOrInvalidRIO(relaunchWithoutPortability: boolean, serviceName: string, rio?: string): Promise<void> {
    let url = `/xdsl/${serviceName}/updateInvalidOrMissingRio`

    return this.client.request<void>('POST', url, {relaunchWithoutPortability, rio})
  }

  /**
   * Get the cities from a zipCode [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/cities#GET)
   */
  GetTheCitiesFromAZipCode(zipCode: string): Promise<EligibilityCity[]> {
    let url = `/xdsl/eligibility/cities?`

    const queryParams = new QueryParams()
    if (zipCode) { queryParams.set('zipCode', zipCode) }

    return this.client.request<EligibilityCity[]>('GET', url+queryParams.toString())
  }

  /**
   * Get the active lines at given address [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/lines/active#POST)
   */
  GetTheActiveLinesAtGivenAddress(city: EligibilityCity, contactName: string, street: EligibilityStreet, streetNumber?: string): Promise<any> {
    let url = `/xdsl/eligibility/lines/active`

    return this.client.request<any>('POST', url, {city, contactName, street, streetNumber})
  }

  /**
   * Get the inactive lines at given address [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/lines/inactive#POST)
   */
  GetTheInactiveLinesAtGivenAddress(city: EligibilityCity, street: EligibilityStreet, contactName?: string, streetNumber?: string): Promise<any> {
    let url = `/xdsl/eligibility/lines/inactive`

    return this.client.request<any>('POST', url, {city, street, contactName, streetNumber})
  }

  /**
   * Search for meeting time slot [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/meetings#GET)
   */
  SearchForMeetingTimeSlot(eligibilityId: string, offerLabel: string): Promise<any> {
    let url = `/xdsl/eligibility/meetings?`

    const queryParams = new QueryParams()
    if (eligibilityId) { queryParams.set('eligibilityId', eligibilityId) }
    if (offerLabel) { queryParams.set('offerLabel', offerLabel) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Get all buildings for a specific address [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/buildings#POST)
   */
  GetAllBuildingsForASpecificAddress(streetCode: string, streetNumber: string): Promise<any> {
    let url = `/xdsl/eligibility/search/buildings`

    return this.client.request<any>('POST', url, {streetCode, streetNumber})
  }

  /**
   * Get all localities linked to a zip code [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/cities#POST)
   */
  GetAllLocalitiesLinkedToAZipCode(zipCode: string): Promise<any> {
    let url = `/xdsl/eligibility/search/cities`

    return this.client.request<any>('POST', url, {zipCode})
  }

  /**
   * Get all street linked to a locality [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/fiberStreets#POST)
   */
  GetAllStreetLinkedToALocality(inseeCode: string): Promise<any> {
    let url = `/xdsl/eligibility/search/fiberStreets`

    return this.client.request<any>('POST', url, {inseeCode})
  }

  /**
   * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets) [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/streetNumbers#POST)
   */
  GetTheAvailableStreetNumbersForAGivenStreetCodeUniqueIdentifierOfAStreetYouCanGetWithTheMethodPOSTXdsleligibilitysearchstreets(streetCode: string): Promise<any> {
    let url = `/xdsl/eligibility/search/streetNumbers`

    return this.client.request<any>('POST', url, {streetCode})
  }

  /**
   * Get the streets from a city inseeCode and partial street name [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/streets#GET)
   */
  GetTheStreetsFromACityInseeCodeAndPartialStreetName(inseeCode: string, partialName: string): Promise<EligibilityStreet[]> {
    let url = `/xdsl/eligibility/streets?`

    const queryParams = new QueryParams()
    if (inseeCode) { queryParams.set('inseeCode', inseeCode) }
    if (partialName) { queryParams.set('partialName', partialName) }

    return this.client.request<EligibilityStreet[]>('GET', url+queryParams.toString())
  }

  /**
   * Get an eligibility by its id [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test#GET)
   */
  GetAnEligibilityByItsId(id: string): Promise<EligibilityEligibility> {
    let url = `/xdsl/eligibility/test?`

    const queryParams = new QueryParams()
    if (id) { queryParams.set('id', id) }

    return this.client.request<EligibilityEligibility>('GET', url+queryParams.toString())
  }

  /**
   * Do an eligibility for an address, if no line exist [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test/address#POST)
   */
  DoAnEligibilityForAnAddressIfNoLineExist(address: EligibilityAddress): Promise<any> {
    let url = `/xdsl/eligibility/test/address`

    return this.client.request<any>('POST', url, {address})
  }

  /**
   * Perform a fiber eligibility for a building [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test/fiber/building#POST)
   */
  PerformAFiberEligibilityForABuilding(building: string): Promise<any> {
    let url = `/xdsl/eligibility/test/fiber/building`

    return this.client.request<any>('POST', url, {building})
  }

  /**
   * Do an eligibility for a line [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test/line#POST)
   */
  DoAnEligibilityForALine(lineNumber: string, lineStatus: EligibilityLandlineStatus): Promise<any> {
    let url = `/xdsl/eligibility/test/line`

    return this.client.request<any>('POST', url, {lineNumber, lineStatus})
  }

  /**
   * Operations about the XDSL service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/xdsl/email/pro`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * XDSL Email Pro [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D#GET)
   */
  /*
  GetThisObjectProperties(email: string): Promise<XdslEmailPro> {
    let url = `/xdsl/email/pro/${email}`

    return this.client.request<XdslEmailPro>('GET', url)
  }
  */

  /**
   * XDSL Email Pro [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D#PUT)
   */
  /*
  AlterThisObjectProperties(email: string, payload: XdslEmailPro): Promise<void> {
    let url = `/xdsl/email/pro/${email}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * XDSL Email Pro [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D#DELETE)
   */
  DeleteTheEmail(email: string): Promise<void> {
    let url = `/xdsl/email/pro/${email}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D/changePassword#POST)
   */
  ChangeTheEmailPassword(email: string, password: string): Promise<EmailproTask> {
    let url = `/xdsl/email/pro/${email}/changePassword`

    return this.client.request<EmailproTask>('POST', url, {password})
  }

  /**
   * List the xdsl.Incident objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/incidents#GET)
   */
  ListOfIncidents(creationDate?: string, endDate?: string): Promise<number[]> {
    let url = `/xdsl/incidents?`

    const queryParams = new QueryParams()
    if (creationDate) { queryParams.set('creationDate', creationDate.toString()) }
    if (endDate) { queryParams.set('endDate', endDate.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Detected incident [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/incidents/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<Incident> {
    let url = `/xdsl/incidents/${id}`

    return this.client.request<Incident>('GET', url)
  }
  */

  /**
   * Operations about the XDSL service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/xdsl/spare`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Spare properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D#GET)
   */
  /*
  GetThisObjectProperties(spare: string): Promise<SparexdslXdslSpare> {
    let url = `/xdsl/spare/${spare}`

    return this.client.request<SparexdslXdslSpare>('GET', url)
  }
  */

  /**
   * Spare properties [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D#DELETE)
   */
  DeleteTheSpareAsIfItWasNotBelongingToOVHAnymore(spare: string): Promise<void> {
    let url = `/xdsl/spare/${spare}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * compatibleReplacement operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/compatibleReplacement#GET)
   */
  ReturnTheListOfBrandCompatibleToBeReplaced(spare: string): Promise<string[]> {
    let url = `/xdsl/spare/${spare}/compatibleReplacement`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * replace operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/replace#POST)
   */
  ReplaceTheModemByItsSpare(domain: string, spare: string): Promise<void> {
    let url = `/xdsl/spare/${spare}/replace`

    return this.client.request<void>('POST', url, {domain})
  }

  /**
   * returnMerchandise operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/returnMerchandise#POST)
   */
  ReturnTheBrokenEquipmentInInstantRefund(spare: string): Promise<void> {
    let url = `/xdsl/spare/${spare}/returnMerchandise`

    return this.client.request<void>('POST', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(spare: string): Promise<ServicesService> {
    let url = `/xdsl/spare/${spare}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(spare: string, payload: ServicesService): Promise<void> {
    let url = `/xdsl/spare/${spare}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Get all available spare brands [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/brands#GET)
   */
  GetAllAvailableSpareBrands(): Promise<string[]> {
    let url = `/xdsl/spare/brands`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the xdsl.TemplateModem objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem#GET)
   */
  ListOfTemplateModem(): Promise<string[]> {
    let url = `/xdsl/templateModem`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the xdsl.TemplateModem objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem#POST)
   */
  CreateNewModemTemplateFromExistingModem(name: string, serviceName: string): Promise<TemplateModem> {
    let url = `/xdsl/templateModem`

    return this.client.request<TemplateModem>('POST', url, {name, serviceName})
  }

  /**
   * Modem Template [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string): Promise<TemplateModem> {
    let url = `/xdsl/templateModem/${name}`

    return this.client.request<TemplateModem>('GET', url)
  }
  */

  /**
   * Modem Template [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem/%7Bname%7D#PUT)
   */
  /*
  AlterThisObjectProperties(name: string, payload: TemplateModem): Promise<void> {
    let url = `/xdsl/templateModem/${name}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Modem Template [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem/%7Bname%7D#DELETE)
   */
  DeleteThisModemTemplate(name: string): Promise<void> {
    let url = `/xdsl/templateModem/${name}`

    return this.client.request<void>('DELETE', url)
  }

}
