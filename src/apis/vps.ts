// GENERATED SDK for vps API

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

/**
 * Backup Ftp ACL for this server and Backup Ftp
 */
export interface DedicatedserverBackupFtpAcl {
  cifs: boolean
  ftp: boolean
  ipBlock: string
  isApplied: boolean
  lastUpdate: string
  nfs: boolean
}

/**
 * Server tasks
 */
export interface DedicatedserverTask {
  comment?: string
  doneDate?: string
  function: DedicatedTaskFunction
  lastUpdate?: string
  startDate: string
  status: DedicatedTaskStatus
  taskId: number
}

/*
 * different task operation
 */
export enum DedicatedTaskFunction {
  INFRA_002_VIRTUALNETWORKINTERFACE = 'INFRA_002_VirtualNetworkInterface',
  ADDVIRTUALMAC = 'addVirtualMac',
  ADDWINDOWSPLAFROMEXISTINGSERIAL = 'addWindowSplaFromExistingSerial',
  APPLYBACKUPFTPACLS = 'applyBackupFtpAcls',
  APPLYBACKUPFTPQUOTA = 'applyBackupFtpQuota',
  BYPASSANTIDDOSGAME = 'bypassAntiDDosGame',
  CHANGEPASSWORDBACKUPFTP = 'changePasswordBackupFTP',
  CHANGERIPEORG = 'changeRipeOrg',
  CHECKANDRELEASEIP = 'checkAndReleaseIp',
  CREATEBACKUPFTP = 'createBackupFTP',
  CREATEORUPDATERIPEORG = 'createOrUpdateRipeOrg',
  CREATEPRIVATENETWORK = 'createPrivateNetwork',
  DISABLEFIREWALL = 'disableFirewall',
  ENABLEFIREWALL = 'enableFirewall',
  GENERICMOVEFLOATINGIP = 'genericMoveFloatingIp',
  HARDREBOOT = 'hardReboot',
  MIGRATEBACKUPFTP = 'migrateBackupFTP',
  MOVEFLOATINGIP = 'moveFloatingIp',
  MOVEVIRTUALMAC = 'moveVirtualMac',
  REBOOTPOWER8TO = 'rebootPower8To',
  REINSTALLSERVER = 'reinstallServer',
  RELEASEIP = 'releaseIp',
  REMOVEBACKUPFTP = 'removeBackupFTP',
  REMOVEVIRTUALMAC = 'removeVirtualMac',
  REQUESTACCESSIPMI = 'requestAccessIPMI',
  RESETIPMI = 'resetIPMI',
  RESETIPMISESSION = 'resetIPMISession',
  TESTIPMIHTTP = 'testIPMIhttp',
  TESTIPMIPASSWORD = 'testIPMIpassword',
  TESTIPMIPING = 'testIPMIping',
  VIRTUALMACADD = 'virtualMacAdd',
  VIRTUALMACDELETE = 'virtualMacDelete'
}

/*
 * different task status
 */
export enum DedicatedTaskStatus {
  CANCELLED = 'cancelled',
  CUSTOMERERROR = 'customerError',
  DOING = 'doing',
  DONE = 'done',
  INIT = 'init',
  OVHERROR = 'ovhError',
  TODO = 'todo'
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

/**
 * Secondary dns infos
 */
export interface SecondaryDnsSecondaryDNS {
  creationDate: string
  dns: string
  domain: string
  ipMaster: string
}

/**
 * A structure describing informations about available nameserver for secondary dns 
 */
export interface SecondaryDnsSecondaryDNSNameServer {
  hostname: string
  ip: string
  ipv6?: string
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

/**
 * Backup your VPS
 */
export interface VpsAutomatedBackup {
  schedule?: any
  state: VpsBackupState
}

/**
 * A backup attached to your VPS
 */
export interface VpsautomatedBackupAttached {
  access: VpsautomatedBackupattachedInfos
  restorePoint: string
}

/**
 * A structure describing a backup's access informations
 */
export interface VpsautomatedBackupattachedInfos {
  additionalDisk?: string
  nfs?: string
  smb?: string
}

/**
 * Backup Ftp assigned to this VPS
 */
export interface VpsBackupFtp {
  ftpBackupName: string
  quota?: any
  readOnlyDate?: string
  type: string
  usage?: any
}

/*
 * Available AutomatedBackup states
 */
export enum VpsBackupState {
  DISABLED = 'disabled',
  ENABLED = 'enabled'
}

/**
 * Information about a datacenter of a VPS Virtual Machine
 */
export interface VpsDatacenter {
  longName: string
  name: string
}

/**
 * Information about a disk of a VPS Virtual Machine
 */
export interface VpsDisk {
  bandwidthLimit: number
  id: number
  lowFreeSpaceThreshold?: number
  monitoring?: boolean
  size: number
  state: VpsdiskState
  type: VpsdiskType
}

/*
 * Possible states the disk can be in
 */
export enum VpsdiskState {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  PENDING = 'pending'
}

/*
 * Available types for the Disk monitoring and use
 */
export enum VpsdiskStatisticType {
  MAX = 'max',
  USED = 'used'
}

/*
 * Possible type a disk can be in
 */
export enum VpsdiskType {
  ADDITIONAL = 'additional',
  PRIMARY = 'primary'
}

/**
 * Installation image for a VPS
 */
export interface VpsImage {
  id: string
  name: string
}

/**
 * Information about an IP address for a VPS Virtual Machine
 */
export interface VpsIp {
  gateway?: string
  geolocation: VpsipGeolocation
  ipAddress: string
  macAddress?: string
  reverse?: string
  type: VpsipType
  version: CoreTypesIpVersion
}

/*
 * Geolocation of the IP Address
 */
export enum VpsipGeolocation {
  AU = 'au',
  BE = 'be',
  CA = 'ca',
  CZ = 'cz',
  DE = 'de',
  ES = 'es',
  FI = 'fi',
  FR = 'fr',
  IE = 'ie',
  IT = 'it',
  LT = 'lt',
  NL = 'nl',
  PL = 'pl',
  PT = 'pt',
  SG = 'sg',
  UK = 'uk',
  US = 'us'
}

/**
 * Service states for an Ip
 */
export interface VpsipServiceStatus {
  dns: VpsipServiceStatusService
  http: VpsipServiceStatusService
  https: VpsipServiceStatusService
  ping: VpsipServiceStatusState
  smtp: VpsipServiceStatusService
  ssh: VpsipServiceStatusService
  tools?: VpsipServiceStatusState
}

/**
 * Port and state of a service on an IP
 */
export interface VpsipServiceStatusService {
  port: number
  state: VpsipServiceStatusState
}

/*
 * Possible states of a service (ping, port)
 */
export enum VpsipServiceStatusState {
  DOWN = 'down',
  UP = 'up'
}

/*
 * Ip types on a VPS
 */
export enum VpsipType {
  ADDITIONAL = 'additional',
  PRIMARY = 'primary'
}

/**
 * Description not available
 */
export interface VpsmigrationMigration {
  date: string
  id: string
}

/**
 * A structure describing characteristics of a VPS model
 */
export interface VpsModel {
  availableOptions: VpsVpsOptionEnum[]
  datacenter: string[]
  disk: number
  maximumAdditionnalIp: number
  memory: number
  name: string
  offer: string
  vcore: number
  version: VpsVpsVersion
}

/**
 * Information about the options of a VPS Virtual Machine
 */
export interface VpsOption {
  option: VpsVpsOption
  state: VpsVpsOptionState
}

/*
 * Available restore state
 */
export enum VpsRestoreState {
  AVAILABLE = 'available',
  RESTORED = 'restored',
  RESTORING = 'restoring'
}

/*
 * Available restore types
 */
export enum VpsRestoreType {
  FILE = 'file',
  FULL = 'full'
}

/**
 * Information about the snapshot of a VPS Virtual Machine
 */
export interface VpsSnapshot {
  creationDate: string
  description: string
}

/**
 * Available softwares on a Template
 */
export interface VpsSoftware {
  id: number
  name: string
  status: VpsSoftwareStatus
  type: VpsSoftwareType
}

/*
 * Available Status for a vps Software
 */
export enum VpsSoftwareStatus {
  DEPRECATED = 'deprecated',
  STABLE = 'stable',
  TESTING = 'testing'
}

/*
 * Available Type for a vps Software
 */
export enum VpsSoftwareType {
  DATABASE = 'database',
  ENVIRONMENT = 'environment',
  WEBSERVER = 'webserver'
}

/**
 * Operation on a VPS Virtual Machine
 */
export interface VpsTask {
  id: number
  progress: number
  state: VpsTaskState
  type: VpsTaskType
}

/*
 * All states a VPS task can be in
 */
export enum VpsTaskState {
  BLOCKED = 'blocked',
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  PAUSED = 'paused',
  TODO = 'todo',
  WAITINGACK = 'waitingAck'
}

/*
 * All type a VPS task can be
 */
export enum VpsTaskType {
  ADDVEEAMBACKUPJOB = 'addVeeamBackupJob',
  CHANGEROOTPASSWORD = 'changeRootPassword',
  CREATESNAPSHOT = 'createSnapshot',
  DELETESNAPSHOT = 'deleteSnapshot',
  DELIVERVM = 'deliverVm',
  GETCONSOLEURL = 'getConsoleUrl',
  INTERNALTASK = 'internalTask',
  OPENCONSOLEACCESS = 'openConsoleAccess',
  PROVISIONINGADDITIONALIP = 'provisioningAdditionalIp',
  REOPENVM = 'reOpenVm',
  REBOOTVM = 'rebootVm',
  REINSTALLVM = 'reinstallVm',
  REMOVEVEEAMBACKUP = 'removeVeeamBackup',
  RESTOREFULLVEEAMBACKUP = 'restoreFullVeeamBackup',
  RESTOREVEEAMBACKUP = 'restoreVeeamBackup',
  RESTOREVM = 'restoreVm',
  REVERTSNAPSHOT = 'revertSnapshot',
  SETMONITORING = 'setMonitoring',
  SETNETBOOT = 'setNetboot',
  STARTVM = 'startVm',
  STOPVM = 'stopVm',
  UPGRADEVM = 'upgradeVm'
}

/**
 * Installation template for a VPS Virtual Machine
 */
export interface VpsTemplate {
  availableLanguage: string[]
  bitFormat: VpsTemplateBitFormat
  distribution: string
  id: number
  locale: string
  name: string
}

/*
 * Bitness of a VPS template
 */
export type VpsTemplateBitFormat = 32 | 64

/**
 * Informations about a VPS Veeam backups
 */
export interface VpsVeeam {
  backup: boolean
}

/*
 * A structure describing a Veeam backup's export options
 */
export enum VpsveeamExportType {
  NFS = 'nfs',
  SMB = 'smb'
}

/**
 * A structure describing a Veeam backup's access informations
 */
export interface VpsveeamInfos {
  nfs: string
  smb: string
}

/**
 * Currently restored backup
 */
export interface VpsveeamRestoredBackup {
  accessInfos: VpsveeamInfos
  restorePointId: number
  state: VpsveeamState
}

/**
 * Informations about a VPS Veeam restore points
 */
export interface VpsveeamRestorePoint {
  creationTime: string
  id: number
}

/*
 * A structure describing a Veeam restored backup's state
 */
export enum VpsveeamState {
  MOUNTED = 'mounted',
  RESTORING = 'restoring',
  UNMOUNTED = 'unmounted',
  UNMOUNTING = 'unmounting'
}

/**
 * A VNC connection informations
 */
export interface VpsVnc {
  host: string
  password: string
  port: number
}

/*
 * All supported VNC protocols by VPS
 */
export enum VpsVncProtocol {
  VNC = 'VNC',
  VNCOVERWEBSOCKET = 'VNCOverWebSocket'
}

/**
 * VPS Virtual Machine
 */
export interface VpsVPS {
  cluster: string
  displayName?: string
  keymap?: VpsVpsKeymap
  memoryLimit: number
  model: VpsModel
  monitoringIpBlocks: string[]
  name: string
  netbootMode: VpsVpsNetboot
  offerType: VpsVpsOffer
  slaMonitoring?: boolean
  state: VpsVpsState
  vcore: number
  zone: string
}

/**
 * VPS billing version
 */
export interface VpsVpsBillingVersion {
  version: number
}

/*
 * All values keymap can be in
 */
export enum VpsVpsKeymap {
  FR = 'fr',
  US = 'us'
}

/*
 * Available periods for the VPS monitoring
 */
export enum VpsVpsMonitoringPeriod {
  LASTDAY = 'lastday',
  LASTMONTH = 'lastmonth',
  LASTWEEK = 'lastweek',
  LASTYEAR = 'lastyear',
  TODAY = 'today'
}

/*
 * All values a VPS netboot mode can be in
 */
export enum VpsVpsNetboot {
  LOCAL = 'local',
  RESCUE = 'rescue'
}

/*
 * All offers a VPS can have
 */
export enum VpsVpsOffer {
  BETA_CLASSIC = 'beta-classic',
  CLASSIC = 'classic',
  CLOUD = 'cloud',
  CLOUDRAM = 'cloudram',
  GAME_CLASSIC = 'game-classic',
  LOWLAT = 'lowlat',
  SSD = 'ssd'
}

/*
 * All options a VPS can have
 */
export enum VpsVpsOption {
  ADDITIONALDISK = 'additionalDisk',
  AUTOMATEDBACKUP = 'automatedBackup',
  CPANEL = 'cpanel',
  FTPBACKUP = 'ftpbackup',
  PLESK = 'plesk',
  SNAPSHOT = 'snapshot',
  VEEAM = 'veeam',
  WINDOWS = 'windows'
}

/*
 * All states a VPS Option can be in
 */
export enum VpsVpsOptionState {
  RELEASED = 'released',
  SUBSCRIBED = 'subscribed'
}

/*
 * All states a VPS can be in
 */
export enum VpsVpsState {
  INSTALLING = 'installing',
  MAINTENANCE = 'maintenance',
  REBOOTING = 'rebooting',
  RUNNING = 'running',
  STOPPED = 'stopped',
  STOPPING = 'stopping',
  UPGRADING = 'upgrading'
}

/*
 * Available types for the VPS monitoring and use
 */
export enum VpsVpsStatisticType {
  CPU_IOWAIT = 'cpu:iowait',
  CPU_MAX = 'cpu:max',
  CPU_NICE = 'cpu:nice',
  CPU_SYS = 'cpu:sys',
  CPU_USED = 'cpu:used',
  CPU_USER = 'cpu:user',
  MEM_MAX = 'mem:max',
  MEM_USED = 'mem:used',
  NET_RX = 'net:rx',
  NET_TX = 'net:tx'
}

/**
 * A timestamp associated to a value
 */
export interface VpsVpsTimestampValue {
  timestamp: number
  value?: any
}

/*
 * All versions that VPS can have
 */
export type VpsVpsVersion = '2013v1' | '2014v1' | '2015v1' | '2017v1' | '2017v2' | '2017v3' | '2018v1' | '2018v2' | '2019v1'


export class Vps {
  constructor(private client: Client) {}

  /**
   * Operations about the VPS service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/vps`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * VPS Virtual Machine [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<VpsVPS> {
    let url = `/vps/${serviceName}`

    return this.client.request<VpsVPS>('GET', url)
  }

  /**
   * VPS Virtual Machine [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: VpsVPS): Promise<void> {
    let url = `/vps/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * activeOptions operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/activeOptions#GET)
   */
  ReturnAllActiveOptionsForTheVirtualServer(serviceName: string): Promise<VpsVpsOptionEnum[]> {
    let url = `/vps/${serviceName}/activeOptions`

    return this.client.request<VpsVpsOptionEnum[]>('GET', url)
  }

  /**
   * Backup your VPS [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<VpsAutomatedBackup> {
    let url = `/vps/${serviceName}/automatedBackup`

    return this.client.request<VpsAutomatedBackup>('GET', url)
  }
  */

  /**
   * attachedBackup operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/attachedBackup#GET)
   */
  BackupAttachedToYourVPS(serviceName: string): Promise<VpsautomatedBackupAttached[]> {
    let url = `/vps/${serviceName}/automatedBackup/attachedBackup`

    return this.client.request<VpsautomatedBackupAttached[]>('GET', url)
  }

  /**
   * detachBackup operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/detachBackup#POST)
   */
  CreateAVPSTaskThatWillUmountARestoredBackupOnYourVPS(restorePoint: string, serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/automatedBackup/detachBackup`

    return this.client.request<VpsTask>('POST', url, {restorePoint})
  }

  /**
   * restore operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/restore#POST)
   */
  CreatesAVPSTaskThatWillRestoreTheGivenRestorePoint(restorePoint: string, serviceName: string, type: VpsRestoreType, changePassword?: boolean): Promise<VpsTask> {
    let url = `/vps/${serviceName}/automatedBackup/restore`

    return this.client.request<VpsTask>('POST', url, {restorePoint, type, changePassword})
  }

  /**
   * restorePoints operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/restorePoints#GET)
   */
  GetAvailableRestorePoints(serviceName: string, state: VpsRestoreState): Promise<string[]> {
    let url = `/vps/${serviceName}/automatedBackup/restorePoints?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * availableUpgrade operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/availableUpgrade#GET)
   */
  ReturnAllModelsTheVirtualServerCanBeUpgradedTo(serviceName: string): Promise<VpsModel[]> {
    let url = `/vps/${serviceName}/availableUpgrade`

    return this.client.request<VpsModel[]>('GET', url)
  }

  /**
   * Backup Ftp assigned to this VPS [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<VpsBackupFtp> {
    let url = `/vps/${serviceName}/backupftp`

    return this.client.request<VpsBackupFtp>('GET', url)
  }
  */

  /**
   * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access#GET)
   */
  ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName: string): Promise<string[]> {
    let url = `/vps/${serviceName}/backupftp/access`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access#POST)
   */
  CreateANewBackupFTPACL(cifs: boolean, ipBlock: string, nfs: boolean, serviceName: string, ftp?: boolean): Promise<DedicatedserverTask> {
    let url = `/vps/${serviceName}/backupftp/access`

    return this.client.request<DedicatedserverTask>('POST', url, {cifs, ipBlock, nfs, ftp})
  }

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access/%7BipBlock%7D#GET)
   */
  /*
  GetThisObjectProperties(ipBlock: string, serviceName: string): Promise<DedicatedserverBackupFtpAcl> {
    let url = `/vps/${serviceName}/backupftp/access/${ipBlock}`

    return this.client.request<DedicatedserverBackupFtpAcl>('GET', url)
  }
  */

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access/%7BipBlock%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ipBlock: string, serviceName: string, payload: DedicatedserverBackupFtpAcl): Promise<void> {
    let url = `/vps/${serviceName}/backupftp/access/${ipBlock}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access/%7BipBlock%7D#DELETE)
   */
  RevokeThisACL(ipBlock: string, serviceName: string): Promise<DedicatedserverTask> {
    let url = `/vps/${serviceName}/backupftp/access/${ipBlock}`

    return this.client.request<DedicatedserverTask>('DELETE', url)
  }

  /**
   * authorizableBlocks operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/authorizableBlocks#GET)
   */
  GetAllIPBlocksThatCanBeUsedInTheACL(serviceName: string): Promise<string[]> {
    let url = `/vps/${serviceName}/backupftp/authorizableBlocks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * password operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/password#POST)
   */
  ChangeYourBackupFTPPassword(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/vps/${serviceName}/backupftp/password`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/vps/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/vps/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * createSnapshot operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/createSnapshot#POST)
   */
  CreateASnapshotOfTheVirtualServerIfTheSnapshotOptionIsEnabledAndIfThereIsNoExistingSnapshot(serviceName: string, description?: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/createSnapshot`

    return this.client.request<VpsTask>('POST', url, {description})
  }

  /**
   * Information about a datacenter of a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/datacenter#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<VpsDatacenter> {
    let url = `/vps/${serviceName}/datacenter`

    return this.client.request<VpsDatacenter>('GET', url)
  }
  */

  /**
   * List the vps.Disk objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks#GET)
   */
  DisksAssociatedToThisVirtualServer(serviceName: string): Promise<number[]> {
    let url = `/vps/${serviceName}/disks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Information about a disk of a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<VpsDisk> {
    let url = `/vps/${serviceName}/disks/${id}`

    return this.client.request<VpsDisk>('GET', url)
  }
  */

  /**
   * Information about a disk of a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: VpsDisk): Promise<void> {
    let url = `/vps/${serviceName}/disks/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * monitoring operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D/monitoring#GET)
   */
  ReturnManyStatisticsAboutTheDiskForAGivenPeriod(id: number, period: VpsVpsMonitoringPeriod, serviceName: string, type: VpsdiskStatisticType): Promise<any> {
    let url = `/vps/${serviceName}/disks/${id}/monitoring?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * use operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D/use#GET)
   */
  ReturnManyStatisticsAboutTheDiskAtThatTime(id: number, serviceName: string, type: VpsdiskStatisticType): Promise<any> {
    let url = `/vps/${serviceName}/disks/${id}/use?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Installation template for a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/distribution#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<VpsTemplate> {
    let url = `/vps/${serviceName}/distribution`

    return this.client.request<VpsTemplate>('GET', url)
  }
  */

  /**
   * List the vps.Software objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/distribution/software#GET)
   */
  ListAvailableSoftwaresForThisTemplateId(serviceName: string): Promise<number[]> {
    let url = `/vps/${serviceName}/distribution/software`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Available softwares on a Template [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/distribution/software/%7BsoftwareId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, softwareId: number): Promise<VpsSoftware> {
    let url = `/vps/${serviceName}/distribution/software/${softwareId}`

    return this.client.request<VpsSoftware>('GET', url)
  }
  */

  /**
   * getConsoleUrl operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/getConsoleUrl#POST)
   */
  ReturnTheVPSConsoleURL(serviceName: string): Promise<string> {
    let url = `/vps/${serviceName}/getConsoleUrl`

    return this.client.request<string>('POST', url)
  }

  /**
   * ipCountryAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ipCountryAvailable#GET)
   */
  GetTheCountriesYouCanSelectForYourIPsGeolocation(serviceName: string): Promise<VpsipGeolocationEnum[]> {
    let url = `/vps/${serviceName}/ipCountryAvailable`

    return this.client.request<VpsipGeolocationEnum[]>('GET', url)
  }

  /**
   * List the vps.Ip objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips#GET)
   */
  IpsAssociatedToThisVirtualServer(serviceName: string): Promise<string[]> {
    let url = `/vps/${serviceName}/ips`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Information about an IP address for a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips/%7BipAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(ipAddress: string, serviceName: string): Promise<VpsIp> {
    let url = `/vps/${serviceName}/ips/${ipAddress}`

    return this.client.request<VpsIp>('GET', url)
  }
  */

  /**
   * Information about an IP address for a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips/%7BipAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ipAddress: string, serviceName: string, payload: VpsIp): Promise<void> {
    let url = `/vps/${serviceName}/ips/${ipAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Information about an IP address for a VPS Virtual Machine [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips/%7BipAddress%7D#DELETE)
   */
  ReleaseAGivenIpAdditionalIp(ipAddress: string, serviceName: string): Promise<void> {
    let url = `/vps/${serviceName}/ips/${ipAddress}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * models operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/models#GET)
   */
  ReturnAllModelsForTheRangeOfTheVirtualServer(serviceName: string): Promise<VpsModel[]> {
    let url = `/vps/${serviceName}/models`

    return this.client.request<VpsModel[]>('GET', url)
  }

  /**
   * monitoring operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/monitoring#GET)
   */
  ReturnManyStatisticsAboutTheVirtualMachineForAGivenPeriod(period: VpsVpsMonitoringPeriod, serviceName: string, type: VpsVpsStatisticType): Promise<any> {
    let url = `/vps/${serviceName}/monitoring?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * openConsoleAccess operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/openConsoleAccess#POST)
   */
  ReturnTheNecessaryInformationsToOpenAVNCConnectionToYourVPS(serviceName: string, protocol?: VpsVncProtocol): Promise<VpsVnc> {
    let url = `/vps/${serviceName}/openConsoleAccess`

    return this.client.request<VpsVnc>('POST', url, {protocol})
  }

  /**
   * List the vps.Option objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/option#GET)
   */
  ListOfVPSOptions(serviceName: string): Promise<VpsVpsOptionEnum[]> {
    let url = `/vps/${serviceName}/option`

    return this.client.request<VpsVpsOptionEnum[]>('GET', url)
  }

  /**
   * Information about the options of a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/option/%7Boption%7D#GET)
   */
  /*
  GetThisObjectProperties(option: VpsVpsOption, serviceName: string): Promise<VpsOption> {
    let url = `/vps/${serviceName}/option/${option}`

    return this.client.request<VpsOption>('GET', url)
  }
  */

  /**
   * Information about the options of a VPS Virtual Machine [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/option/%7Boption%7D#DELETE)
   */
  ReleaseAGivenOption(option: VpsVpsOption, serviceName: string, deleteNow?: boolean): Promise<void> {
    let url = `/vps/${serviceName}/option/${option}?`

    const queryParams = new QueryParams()
    if (deleteNow) { queryParams.set('deleteNow', deleteNow.toString()) }

    return this.client.request<void>('DELETE', url+queryParams.toString())
  }

  /**
   * reboot operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/reboot#POST)
   */
  RequestARebootOfTheMachine(serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/reboot`

    return this.client.request<VpsTask>('POST', url)
  }

  /**
   * reinstall operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/reinstall#POST)
   */
  ReinstallTheVirtualServer(serviceName: string, templateId: number, doNotSendPassword?: boolean, language?: string, softwareId?: number[], sshKey?: string[]): Promise<VpsTask> {
    let url = `/vps/${serviceName}/reinstall`

    return this.client.request<VpsTask>('POST', url, {templateId, doNotSendPassword, language, softwareId, sshKey})
  }

  /**
   * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains#GET)
   */
  ListOfSecondaryDnsDomainName(serviceName: string): Promise<string[]> {
    let url = `/vps/${serviceName}/secondaryDnsDomains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains#POST)
   */
  AddADomainOnSecondaryDns(domain: string, serviceName: string, ip?: string): Promise<void> {
    let url = `/vps/${serviceName}/secondaryDnsDomains`

    return this.client.request<void>('POST', url, {domain, ip})
  }

  /**
   * Secondary dns infos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNS> {
    let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}`

    return this.client.request<SecondaryDnsSecondaryDNS>('GET', url)
  }
  */

  /**
   * Secondary dns infos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#PUT)
   */
  /*
  AlterThisObjectProperties(domain: string, serviceName: string, payload: SecondaryDnsSecondaryDNS): Promise<void> {
    let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Secondary dns infos [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#DELETE)
   */
  RemoveThisDomain(domain: string, serviceName: string): Promise<void> {
    let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * dnsServer operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D/dnsServer#GET)
   */
  DomainNameServerInformations(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer> {
    let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}/dnsServer`

    return this.client.request<SecondaryDnsSecondaryDNSNameServer>('GET', url)
  }

  /**
   * secondaryDnsNameServerAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsNameServerAvailable#GET)
   */
  SecondaryNameServerAvailableForYourServer(serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer> {
    let url = `/vps/${serviceName}/secondaryDnsNameServerAvailable`

    return this.client.request<SecondaryDnsSecondaryDNSNameServer>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/vps/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/vps/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * setPassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/setPassword#POST)
   */
  StartTheProcessInOrderToSetTheRootPasswordOfTheVirtualMachineBeCarefulInCaseOfCloudModelARebootIsMandatory(serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/setPassword`

    return this.client.request<VpsTask>('POST', url)
  }

  /**
   * Information about the snapshot of a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<VpsSnapshot> {
    let url = `/vps/${serviceName}/snapshot`

    return this.client.request<VpsSnapshot>('GET', url)
  }
  */

  /**
   * Information about the snapshot of a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: VpsSnapshot): Promise<void> {
    let url = `/vps/${serviceName}/snapshot`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Information about the snapshot of a VPS Virtual Machine [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot#DELETE)
   */
  CreatesAVpsTaskThatWillDeleteTheSnapshot(serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/snapshot`

    return this.client.request<VpsTask>('DELETE', url)
  }

  /**
   * revert operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot/revert#POST)
   */
  RevertTheVirtualServerToThisSnapshot(serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/snapshot/revert`

    return this.client.request<VpsTask>('POST', url)
  }

  /**
   * start operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/start#POST)
   */
  RequestTheMachineToStart(serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/start`

    return this.client.request<VpsTask>('POST', url)
  }

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/status#GET)
   */
  GiveTheStatusOfTheServicesOfTheMainIP(serviceName: string): Promise<VpsipServiceStatus> {
    let url = `/vps/${serviceName}/status`

    return this.client.request<VpsipServiceStatus>('GET', url)
  }

  /**
   * stop operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/stop#POST)
   */
  RequestTheMachineToStop(serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/stop`

    return this.client.request<VpsTask>('POST', url)
  }

  /**
   * List the vps.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/tasks#GET)
   */
  TasksAssociatedToThisVirtualServer(serviceName: string, state?: VpsTaskState, type?: VpsTaskType): Promise<number[]> {
    let url = `/vps/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/tasks/${id}`

    return this.client.request<VpsTask>('GET', url)
  }
  */

  /**
   * List the vps.Template objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates#GET)
   */
  TemplatesAvailableForThisVirtualServer(serviceName: string): Promise<number[]> {
    let url = `/vps/${serviceName}/templates`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Installation template for a VPS Virtual Machine [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<VpsTemplate> {
    let url = `/vps/${serviceName}/templates/${id}`

    return this.client.request<VpsTemplate>('GET', url)
  }
  */

  /**
   * List the vps.Software objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates/%7Bid%7D/software#GET)
   */
  /*
  ListAvailableSoftwaresForThisTemplateId(id: number, serviceName: string): Promise<number[]> {
    let url = `/vps/${serviceName}/templates/${id}/software`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * Available softwares on a Template [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates/%7Bid%7D/software/%7BsoftwareId%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string, softwareId: number): Promise<VpsSoftware> {
    let url = `/vps/${serviceName}/templates/${id}/software/${softwareId}`

    return this.client.request<VpsSoftware>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/vps/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * use operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/use#GET)
   */
  ReturnManyStatisticsAboutTheVirtualMachineAtThatTime(serviceName: string, type: VpsVpsStatisticType): Promise<any> {
    let url = `/vps/${serviceName}/use?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Informations about a VPS Veeam backups [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<VpsVeeam> {
    let url = `/vps/${serviceName}/veeam`

    return this.client.request<VpsVeeam>('GET', url)
  }
  */

  /**
   * Currently restored backup [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restoredBackup#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<VpsveeamRestoredBackup> {
    let url = `/vps/${serviceName}/veeam/restoredBackup`

    return this.client.request<VpsveeamRestoredBackup>('GET', url)
  }
  */

  /**
   * Currently restored backup [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restoredBackup#DELETE)
   */
  CreatesAVPSTaskThatWillUnmountTheBackup(serviceName: string): Promise<VpsTask> {
    let url = `/vps/${serviceName}/veeam/restoredBackup`

    return this.client.request<VpsTask>('DELETE', url)
  }

  /**
   * List the vps.veeam.RestorePoint objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restorePoints#GET)
   */
  VeeamRestorePointsForTheVPS(serviceName: string, creationTime?: string): Promise<number[]> {
    let url = `/vps/${serviceName}/veeam/restorePoints?`

    const queryParams = new QueryParams()
    if (creationTime) { queryParams.set('creationTime', creationTime.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Informations about a VPS Veeam restore points [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restorePoints/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<VpsveeamRestorePoint> {
    let url = `/vps/${serviceName}/veeam/restorePoints/${id}`

    return this.client.request<VpsveeamRestorePoint>('GET', url)
  }
  */

  /**
   * restore operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restorePoints/%7Bid%7D/restore#POST)
   */
  /*
  CreatesAVPSTaskThatWillRestoreTheGivenRestorePoint(full: boolean, id: number, serviceName: string, changePassword?: boolean, export?: VpsveeamExportType): Promise<VpsTask> {
    let url = `/vps/${serviceName}/veeam/restorePoints/${id}/restore`

    return this.client.request<VpsTask>('POST', url, {full, changePassword, export})
  }
  */

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/datacenter#GET)
   */
  ListAllTheDatacentersForASpecificCountry(country: NichandleCountry): Promise<string[]> {
    let url = `/vps/datacenter?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

}
