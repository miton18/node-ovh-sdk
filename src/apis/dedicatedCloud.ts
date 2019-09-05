// GENERATED SDK for dedicatedCloud API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
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

/**
 * Network allowed to connect to the Private Cloud management interface
 */
export interface DedicatedCloudAllowedNetwork {
  description?: string
  network: any
  networkAccessId: number
  state: DedicatedCloudAllowedNetworkState
}

/*
 * All states an Allowed Network can be in
 */
export enum DedicatedCloudAllowedNetworkState {
  ALLOWED = 'allowed',
  TODELETE = 'toDelete',
  TOUPDATE = 'toUpdate'
}

/**
 * Backup configured on a given Datacenter
 */
export interface DedicatedCloudBackup {
  backupDurationInReport?: boolean
  backupOffer?: DedicatedCloudbackupOfferType
  backupSizeInReport?: boolean
  diskSizeInReport?: boolean
  encryption?: boolean
  fullDayInReport?: boolean
  hostname?: string
  mailAddress?: string
  restorePointInReport?: boolean
  scheduleHour?: any
  state: DedicatedCloudBackupState
  vmwareVmId?: string
}

/**
 * Details about a backup
 */
export interface DedicatedCloudbackupBackup {
  allocatedDisk?: any
  backupDays?: DedicatedCloudbackupBackupDaysEnum[]
  encryption?: boolean
  lastCreationTime?: string
  lastDuration?: any
  lastResult?: DedicatedCloudbackupJobState
  lastSuccessfulCreationTime?: string
  lastSuccessfulDuration?: any
  offerType?: DedicatedCloudbackupOfferType
  restorePoints?: DedicatedCloudbackupRestorePoint[]
  retentionTime?: number
  state?: DedicatedCloudbackupState
}

/*
 * All the possible Days of Backup
 */
export enum DedicatedCloudbackupBackupDays {
  FRIDAY = 'Friday',
  MONDAY = 'Monday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
  THURSDAY = 'Thursday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday'
}

/*
 * All the type of a restore point
 */
export enum DedicatedCloudbackupBackupType {
  FULL = 'full',
  INCREMENTAL = 'incremental'
}

/*
 * State of the backup job
 */
export enum DedicatedCloudbackupJobState {
  FAILED = 'failed',
  RUNNING = 'running',
  STOPPED = 'stopped',
  STOPPING = 'stopping',
  SUCCESS = 'success',
  UNKNOWN = 'unknown',
  WARNING = 'warning'
}

/*
 * All the offer type of the backup
 */
export enum DedicatedCloudbackupOfferType {
  ADVANCED = 'advanced',
  BACKUP = 'backup',
  CLASSIC = 'classic',
  LEGACY = 'legacy'
}

/**
 * Details about a restore point
 */
export interface DedicatedCloudbackupRestorePoint {
  creationTime?: string
  isCorrupted?: boolean
  restorePointId: number
  size?: any
  type?: DedicatedCloudbackupBackupType
}

/*
 * All the state of the backup
 */
export enum DedicatedCloudbackupState {
  DELETING = 'deleting',
  DELIVERED = 'delivered',
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLING = 'enabling',
  ERROR = 'error',
  MIGRATING = 'migrating',
  PENDING = 'pending',
  REMOVED = 'removed',
  STOPPING = 'stopping',
  TOCREATE = 'toCreate',
  TODELETE = 'toDelete',
  TODISABLE = 'toDisable',
  TOENABLE = 'toEnable',
  TOSTOP = 'toStop',
  UNKNOWN = 'unknown'
}

/**
 * Private Cloud Backup Job
 */
export interface DedicatedCloudBackupJob {
  allocatedDisk?: any
  backupDays?: DedicatedCloudbackupBackupDaysEnum[]
  encryption?: boolean
  offerType?: DedicatedCloudbackupOfferType
  retentionTime?: number
  state: DedicatedCloudbackupState
  vmName?: string
}

/*
 * All states a Dedicated Cloud Backup can be in
 */
export enum DedicatedCloudBackupState {
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLED = 'enabled',
  ENABLING = 'enabling',
  ERROR = 'error',
  REMOVING = 'removing'
}

/*
 * The billing type of this Dedicated Cloud
 */
export enum DedicatedCloudBillingType {
  DEMO = 'demo',
  MONTHLY = 'monthly'
}

/*
 * The Regional Internet Registry of this IP block
 */
export enum DedicatedCloudBlockRegister {
  ARIN = 'arin',
  RIPE = 'ripe'
}

/**
 * The features available in your Private Cloud
 */
export interface DedicatedCloudCapabilities {
  addRessourceRightStatus: DedicatedCloudcapabilitiesFeatureStatus
  backupStatus: DedicatedCloudcapabilitiesFeatureStatus
  canAddUser: boolean
  fullAdminRoUserStatus: DedicatedCloudcapabilitiesFeatureStatus
  nexus1000vStatus: DedicatedCloudcapabilitiesFeatureStatus
  upgradable: boolean
  userAccessPolicyStatus: DedicatedCloudcapabilitiesFeatureStatus
}

/*
 * All Dedicated Cloud feature status available
 */
export enum DedicatedCloudcapabilitiesFeatureStatus {
  ACTIVE = 'active',
  COMINGSOON = 'comingSoon',
  NO = 'no'
}

/*
 * The commercial name component
 */
export enum DedicatedCloudCommercialName {
  DC = 'DC',
  DC_ANCIENT = 'DC-ANCIENT',
  DC_ANCIENT_HDS = 'DC-ANCIENT-HDS',
  DC_ANCIENT_HIPAA = 'DC-ANCIENT-HIPAA',
  DC_ANCIENT_NSX = 'DC-ANCIENT-NSX',
  DC_ANCIENT_NSX_VROPS = 'DC-ANCIENT-NSX-VROPS',
  DC_ANCIENT_PCIDSS = 'DC-ANCIENT-PCIDSS',
  DC_ANCIENT_UNKNOWN = 'DC-ANCIENT-UNKNOWN',
  DC_ANCIENT_VROPS = 'DC-ANCIENT-VROPS',
  DC_HDS = 'DC-HDS',
  DC_HIPAA = 'DC-HIPAA',
  DC_LEGACY = 'DC-LEGACY',
  DC_LEGACY_HDS = 'DC-LEGACY-HDS',
  DC_LEGACY_HIPAA = 'DC-LEGACY-HIPAA',
  DC_LEGACY_NSX = 'DC-LEGACY-NSX',
  DC_LEGACY_NSX_VROPS = 'DC-LEGACY-NSX-VROPS',
  DC_LEGACY_PCIDSS = 'DC-LEGACY-PCIDSS',
  DC_LEGACY_UNKNOWN = 'DC-LEGACY-UNKNOWN',
  DC_LEGACY_VROPS = 'DC-LEGACY-VROPS',
  DC_NSX = 'DC-NSX',
  DC_NSX_VROPS = 'DC-NSX-VROPS',
  DC_PCIDSS = 'DC-PCIDSS',
  DC_UNKNOWN = 'DC-UNKNOWN',
  DC_VROPS = 'DC-VROPS',
  SDDC = 'SDDC',
  SDDC_HDS = 'SDDC-HDS',
  SDDC_HIPAA = 'SDDC-HIPAA',
  SDDC_LEGACY = 'SDDC-LEGACY',
  SDDC_LEGACY_HDS = 'SDDC-LEGACY-HDS',
  SDDC_LEGACY_HIPAA = 'SDDC-LEGACY-HIPAA',
  SDDC_LEGACY_PCIDSS = 'SDDC-LEGACY-PCIDSS',
  SDDC_LEGACY_UNKNOWN = 'SDDC-LEGACY-UNKNOWN',
  SDDC_LEGACY_VROPS = 'SDDC-LEGACY-VROPS',
  SDDC_LEGACY_VROPS_WITHOUT_NSX = 'SDDC-LEGACY-VROPS-WITHOUT-NSX',
  SDDC_LEGACY_WITHOUT_NSX = 'SDDC-LEGACY-WITHOUT-NSX',
  SDDC_PCIDSS = 'SDDC-PCIDSS',
  SDDC_UNKNOWN = 'SDDC-UNKNOWN',
  SDDC_VROPS = 'SDDC-VROPS',
  SDDC_VROPS_WITHOUT_NSX = 'SDDC-VROPS-WITHOUT-NSX',
  SDDC_WITHOUT_NSX = 'SDDC-WITHOUT-NSX',
  UNKNOWN = 'UNKNOWN',
  UNKNOWN_HDS = 'UNKNOWN-HDS',
  UNKNOWN_HIPAA = 'UNKNOWN-HIPAA',
  UNKNOWN_NSX = 'UNKNOWN-NSX',
  UNKNOWN_NSX_VROPS = 'UNKNOWN-NSX-VROPS',
  UNKNOWN_PCIDSS = 'UNKNOWN-PCIDSS',
  UNKNOWN_UNKNOWN = 'UNKNOWN-UNKNOWN',
  UNKNOWN_VROPS = 'UNKNOWN-VROPS'
}

/**
 * The commercial ranges actually available in your Private Cloud
 */
export interface DedicatedCloudCommercialRange {
  allowedHypervisorVersions: DedicatedCloudHypervisorVersionEnum[]
  allowedNetworkRoles: DedicatedCloudrightNetworkRoleEnum[]
  commercialRangeName: string
  dedicatedCloudVersion: string
  range?: string
}

/**
 * Private Cloud Datacenter
 */
export interface DedicatedCloudDatacenter {
  commercialName: DedicatedCloudCommercialName
  commercialRangeName: string
  datacenterId: number
  description: string
  horizonViewName?: string
  isRemovable: boolean
  name: string
  version: string
}

/**
 * Private Cloud
 */
export interface DedicatedClouddedicatedCloud {
  advancedSecurity: boolean
  bandwidth: string
  billingType: DedicatedCloudBillingType
  certifiedInterfaceUrl: string
  commercialRange: string
  description: string
  generation: DedicatedCloudGeneration
  location: string
  managementInterface: DedicatedCloudManagementInterface
  serviceName: string
  servicePackName?: string
  spla: boolean
  sslV3?: boolean
  state: DedicatedCloudState
  userAccessPolicy: DedicatedCloudUserAccessPolicy
  userLimitConcurrentSession: number
  userLogoutPolicy: DedicatedCloudUserLogoutPolicy
  userSessionTimeout: number
  version: DedicatedCloudVersion
  vScopeUrl: string
  webInterfaceUrl: string
}

/*
 * Disaster Recovery Plan Types
 */
export enum DedicatedClouddisasterRecoveryDrpType {
  ONPREMISE = 'onPremise',
  OVH = 'ovh'
}

/**
 * Information on the local datacenter
 */
export interface DedicatedClouddisasterRecoveryLocalSiteDetails {
  role: DedicatedClouddisasterRecoverySiteRole
  state?: DedicatedCloudState
  type: DedicatedClouddisasterRecoverySiteType
  zertoVersion: string
  zvmIp?: string
}

/**
 * State of the disaster recovery option
 */
export interface DedicatedClouddisasterRecoveryProfile {
  drpType?: DedicatedClouddisasterRecoveryDrpType
  localSiteInformation?: DedicatedClouddisasterRecoveryLocalSiteDetails
  remoteSiteInformation?: DedicatedClouddisasterRecoveryRemoteSiteDetails
  state: DedicatedCloudState
  systemVersion: string
}

/**
 * Information on the remote datacenter linked to the local one
 */
export interface DedicatedClouddisasterRecoveryRemoteSiteDetails {
  datacenterId?: number
  datacenterName?: string
  lastVpnConfig?: string
  remoteEndpointInternalIp?: string
  remoteEndpointPublicIp?: string
  remoteZvmInternalIp?: string
  role?: DedicatedClouddisasterRecoverySiteRole
  serviceName?: string
  state?: DedicatedCloudState
  type: DedicatedClouddisasterRecoverySiteType
  vpnConfigState?: DedicatedClouddisasterRecoveryVpnConfigState
  zertoVersion?: string
}

/*
 * Site manager configured mode
 */
export enum DedicatedClouddisasterRecoverySiteRole {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SINGLE = 'single'
}

/*
 * Site manager hosting type
 */
export enum DedicatedClouddisasterRecoverySiteType {
  ONPREMISE = 'onPremise',
  OVHPRIVATECLOUD = 'ovhPrivateCloud'
}

/*
 * Zerto VPN configuration state
 */
export enum DedicatedClouddisasterRecoveryVpnConfigState {
  CONFIGURED = 'configured',
  CONFIGURING = 'configuring',
  ERROR = 'error',
  NOTCONFIGURED = 'notConfigured',
  TUNNELERROR = 'tunnelError'
}

/**
 * Private Cloud Active Directory Federation option
 */
export interface DedicatedCloudFederation {
  state: DedicatedCloudoptionState
}

/**
 * Private Cloud federation option access network
 */
export interface DedicatedCloudFederationAccessNetwork {
  activeDirectoryId: number
  baseDnForGroups: string
  baseDnForUsers: string
  description: string
  domainAlias: string
  domainName: string
  ip: string
  ldapTcpPort: number
  sslThumbprint?: string
  state: DedicatedCloudoptionAccessNetworkState
  username: string
}

/**
 * Private Cloud Filer
 */
export interface DedicatedCloudFiler {
  billingType: DedicatedCloudressourcesBillingType
  filerId: number
  fullProfile: string
  name: string
  profile: string
  size: any
  spaceFree?: any
  spaceProvisionned?: any
  spaceUsed?: any
  state: DedicatedCloudfilerState
  vmTotal?: number
}

/**
 * Hourly consumption of a filer
 */
export interface DedicatedCloudfilerHourlyConsumption {
  consumption: any
  lastUpdate: string
}

/**
 * A Filer profile
 */
export interface DedicatedCloudfilerProfile {
  fullName: string
  name: string
  size: any
}

/*
 * All states a Dedicated Cloud Filer can be in
 */
export enum DedicatedCloudfilerState {
  ADDING = 'adding',
  DELIVERED = 'delivered',
  ERROR = 'error',
  REMOVING = 'removing',
  UNKNOWN = 'unknown'
}

/*
 * The generation of a Private Cloud
 */
export type DedicatedCloudGeneration = '1.0' | '2.0'

/**
 * Private Cloud VMware Hybrid Cloud Extension option
 */
export interface DedicatedCloudHcx {
  build?: string
  state: DedicatedCloudoptionState
  version?: string
}

/**
 * The Private Cloud Hds option
 */
export interface DedicatedCloudHds {
  state: DedicatedCloudoptionState
}

/**
 * The Private Cloud Hipaa option
 */
export interface DedicatedCloudHipaa {
  state: DedicatedCloudoptionState
}

/**
 * Private Cloud Host
 */
export interface DedicatedCloudHost {
  billingType: DedicatedCloudressourcesBillingType
  clusterName?: string
  connectionState?: DedicatedCloudhostSystemConnectionState
  cpu: any
  cpuMax?: number
  cpuMaxCore?: number
  cpuNum?: number
  cpuUsed?: number
  hostId: number
  inMaintenance?: boolean
  memoryUsed?: any
  name: string
  parentHostId?: number
  profile: string
  profileCode: string
  rack: string
  ram: any
  state: DedicatedCloudhostState
  uptime?: number
  vmTotal?: number
  vmVcpuTotal?: number
}

/**
 * Hourly consumption of a host
 */
export interface DedicatedCloudhostHourlyConsumption {
  consumption: any
  lastUpdate: string
}

/**
 * A Host profile
 */
export interface DedicatedCloudhostProfile {
  core: string
  cpu: any
  name: string
  ram: any
}

/*
 * All states a Dedicated Cloud Host can be in
 */
export enum DedicatedCloudhostState {
  ADDING = 'adding',
  DELIVERED = 'delivered',
  ERROR = 'error',
  REMOVING = 'removing',
  UNKNOWN = 'unknown'
}

/**
 * Host profiles actually available in Private Cloud
 */
export interface DedicatedCloudHostProfile {
  id: number
  name: string
}

/**
 * Hypervisor and their availability
 */
export interface DedicatedCloudHostStockHypervisor {
  value: number
  version: string
}

/**
 * Processor generation and their availability
 */
export interface DedicatedCloudHostStockProcGen {
  cpuGeneration: string
  value: DedicatedCloudHostStockHypervisor[]
}

/**
 * HostProfiles and their availability
 */
export interface DedicatedCloudHostStockProfile {
  id: number
  name: string
  ref: string
  value: DedicatedCloudHostStockProcGen[]
}

/*
 * The connection state of the host
 */
export enum DedicatedCloudhostSystemConnectionState {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  NOTRESPONDING = 'notResponding'
}

/*
 * The Hypervisor version of this Dedicated Cloud component
 */
export type DedicatedCloudHypervisorVersion = '4.1' | '5.0' | '5.1' | '5.5' | '6.0' | '6.5' | 'hv3.1' | 'hvdc3.1' | 'nc1.0'

/**
 * IP Blocks associated with a Private Cloud
 */
export interface DedicatedCloudIp {
  country: string
  description: string
  network: any
  networkName: string
  register: DedicatedCloudBlockRegister
  vlanNumber: number
}

/*
 * All countries in which an Ip Block may be ordered
 */
export enum DedicatedCloudIpCountries {
  BE = 'be',
  CA = 'ca',
  CH = 'ch',
  CZ = 'cz',
  DE = 'de',
  ES = 'es',
  FI = 'fi',
  FR = 'fr',
  GB = 'gb',
  IE = 'ie',
  IT = 'it',
  LT = 'lt',
  NL = 'nl',
  PL = 'pl',
  PT = 'pt',
  US = 'us'
}

/**
 * Details about an Ip
 */
export interface DedicatedCloudIpDetails {
  ip: string
  reverse?: string
  usage: DedicatedCloudipUsage
  usageDetails?: string
}

/*
 * IP address usage
 */
export enum DedicatedCloudipUsage {
  RESERVED = 'reserved',
  VM = 'vm'
}

/*
 * The management interface of this Dedicated Cloud
 */
export enum DedicatedCloudManagementInterface {
  AZURE = 'azure',
  OPENSTACK = 'openstack',
  SYSTEMCENTER = 'systemcenter',
  VCLOUD = 'vcloud',
  VCSA = 'vcsa',
  VSPHERE = 'vsphere'
}

/**
 * A structure describing metrics token for vScope graphs data
 */
export interface DedicatedCloudmetricsToken {
  opentsdbEndpoint: string
  token: string
  warpEndpoint: string
}

/**
 * The Private Cloud Nsx option
 */
export interface DedicatedCloudNsx {
  state: DedicatedCloudoptionState
  url?: string
}

/**
 * Private Cloud User object right
 */
export interface DedicatedCloudObjectRight {
  name: string
  objectRightId: number
  propagate: boolean
  right: DedicatedCloudrightRight
  type: DedicatedCloudrightUserObjectRightType
  vmwareObjectId: string
}

/*
 * States of a Private Cloud option
 */
export enum DedicatedCloudoptionState {
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLED = 'enabled',
  ENABLING = 'enabling',
  ERROR = 'error',
  MIGRATING = 'migrating',
  UNKNOWN = 'unknown'
}

/*
 * States of a Private Cloud option
 */
export enum DedicatedCloudoptionAccessNetworkState {
  CREATING = 'creating',
  DELETING = 'deleting',
  DELIVERED = 'delivered',
  ERROR = 'error',
  TOCREATE = 'toCreate',
  TODELETE = 'toDelete',
  TOUPDATE = 'toUpdate',
  UNKNOWN = 'unknown',
  UPDATING = 'updating'
}

/**
 * A structure describing option compatibility
 */
export interface DedicatedCloudoptionCompatibility {
  newCommercialVersion: string
  oldCommercialVersion: string
}

/**
 * Hypervisors actually available in Private Cloud
 */
export interface DedicatedCloudOs {
  fullName: string
  lastModificationDate: string
  shortName: string
}

/**
 * A structure describing the current password policy for your Dedicated Cloud
 */
export interface DedicatedCloudpasswordPolicy {
  deniedChars: string[]
  digitMandatory: boolean
  historyCheck: number
  letterMandatory: boolean
  lowercaseLetterMandatory: boolean
  maxLength: number
  minLength: number
  specialMandatory: boolean
  uppercaseLetterMandatory: boolean
  validityPeriod: number
}

/**
 * PCC and their availability
 */
export interface DedicatedCloudPccStockProfile {
  count: number
  mode: string
  realVersion: string
}

/**
 * PccZones actually available in Private Cloud
 */
export interface DedicatedCloudPccZone {
  id: number
  pccZone: string
}

/**
 * The Private Cloud PCI-DSS option
 */
export interface DedicatedCloudPciDss {
  state: DedicatedCloudoptionState
}

/**
 * Private management gateway deployed in your Private Cloud to block all public access
 */
export interface DedicatedCloudPrivateGateway {
  customerIp?: string
  customerNetmask?: string
  customerPortGroup?: string
  state: DedicatedCloudoptionState
}

/**
 * A structure describing the Resource's new price
 */
export interface DedicatedCloudresourceNewPrices {
  resources?: DedicatedCloudresourceNewPricesEntry[]
}

/**
 * A structure describing the Resource's new price
 */
export interface DedicatedCloudresourceNewPricesEntry {
  billingType: DedicatedCloudressourcesBillingType
  changed: boolean
  name: string
  newPrice: OrderPrice
  oldPrice: OrderPrice
  resourceType: DedicatedCloudressourcesResourceType
}

/*
 * The billing type of this Dedicated Cloud ressource
 */
export enum DedicatedCloudressourcesBillingType {
  FREESPARE = 'freeSpare',
  HOURLY = 'hourly',
  MONTHLY = 'monthly',
  UNDEFINED = 'undefined'
}

/*
 * The resource type of this Dedicated Cloud ressource
 */
export enum DedicatedCloudressourcesResourceType {
  HOST = 'host',
  STORAGE = 'storage'
}

/**
 * Private Cloud Restore Point
 */
export interface DedicatedCloudRestorePoint {
  creationTime?: string
  isCorrupted: boolean
  restorePointId: number
  restorePointSize: any
  type?: DedicatedCloudbackupBackupType
}

/**
 * Private Cloud User right
 */
export interface DedicatedCloudRight {
  canAddRessource: boolean
  datacenterId: number
  networkRole: DedicatedCloudrightNetworkRole
  right: DedicatedCloudrightRight
  rightId: number
  vmNetworkRole: DedicatedCloudrightVmNetworkRole
}

/*
 * Determine how this user can act on the Dedicated Cloud vLans or vxLans
 */
export enum DedicatedCloudrightNetworkRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  NOACCESS = 'noAccess',
  READONLY = 'readonly'
}

/*
 * All rights a Dedicated Cloud user may be associated with
 */
export enum DedicatedCloudrightRight {
  ADMIN = 'admin',
  DISABLED = 'disabled',
  READONLY = 'readonly',
  READWRITE = 'readwrite'
}

/*
 * All types of objects handled in objectRights
 */
export enum DedicatedCloudrightUserObjectRightType {
  CLUSTER = 'cluster',
  DATASTORE = 'datastore',
  DVPORTGROUP = 'dvportgroup',
  FOLDER = 'folder',
  POOL = 'pool',
  VM = 'vm'
}

/*
 * Determine how this user can act on the Dedicated Cloud vmNetwork
 */
export enum DedicatedCloudrightVmNetworkRole {
  ADMIN = 'admin',
  NOACCESS = 'noAccess',
  READONLY = 'readonly'
}

/**
 * The robots used in Private Cloud
 */
export interface DedicatedCloudRobot {
  criticity: string
  description?: string
  enabled: boolean
  name: string
  type: string
}

/**
 * List of Service Pack compliant with the current Private Cloud
 */
export interface DedicatedCloudServicePack {
  name: string
  options: string[]
}

/*
 * List of possible service pack
 */
export enum DedicatedCloudservicePack {
  DEFAULT = 'default',
  HDS = 'hds',
  HIPAA = 'hipaa',
  LEGACY = 'legacy',
  NSX = 'nsx',
  NSX_AND_VROPS = 'nsx-and-vrops',
  PCIDSS = 'pcidss',
  VROPS = 'vrops'
}

/*
 * List of possible state of the service pack
 */
export enum DedicatedCloudservicePackState {
  ACTIVATING = 'activating',
  ACTIVE = 'active',
  ERROR = 'error',
  WAITINGFORCUSTOMER = 'waitingForCustomer'
}

/**
 * Service pack informations
 */
export interface DedicatedCloudservicePackStatus {
  name: DedicatedCloudservicePack
  state: DedicatedCloudservicePackState
}

/*
 * All states a Dedicated Cloud can be in
 */
export enum DedicatedCloudState {
  AVAILABLE = 'available',
  DELIVERED = 'delivered',
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ERROR = 'error',
  MIGRATING = 'migrating',
  PROVISIONNING = 'provisionning',
  RECYCLING = 'recycling',
  RESERVED = 'reserved',
  TODISABLE = 'toDisable',
  TOPROVISION = 'toProvision',
  TORECYCLE = 'toRecycle',
  TOREMOVE = 'toRemove',
  TOUNPROVISION = 'toUnprovision',
  UNPROVISIONNING = 'unprovisionning'
}

/**
 * Operation on a Private Cloud component
 */
export interface DedicatedCloudTask {
  createdBy?: string
  createdFrom?: string
  datacenterId?: number
  description?: string
  endDate?: string
  executionDate: string
  filerId?: number
  hostId?: number
  lastModificationDate?: string
  maintenanceDateFrom?: string
  maintenanceDateTo?: string
  name: string
  network?: string
  networkAccessId?: number
  orderId?: number
  parentTaskId?: number
  progress: number
  state: DedicatedCloudTaskState
  taskId: number
  type: string
  userId?: number
  vlanId?: number
}

/*
 * All states a Dedicated Cloud Task can be in
 */
export enum DedicatedCloudTaskState {
  CANCELED = 'canceled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  FIXING = 'fixing',
  TOCANCEL = 'toCancel',
  TOCREATE = 'toCreate',
  TODO = 'todo',
  UNKNOWN = 'unknown',
  WAITINGFORCHILDS = 'waitingForChilds',
  WAITINGTODO = 'waitingTodo'
}

/**
 * Trust IP which can bypass the two factor authentication
 */
export interface DedicatedCloudtwoFAWhitelist {
  description: string
  id: number
  ip: string
  state: DedicatedCloudTwoFAWhitelistState
}

/*
 * All states a Dedicated Cloud two factor authentication whitelist can be in
 */
export enum DedicatedCloudTwoFAWhitelistState {
  ENABLED = 'enabled',
  ENABLING = 'enabling',
  ERROR = 'error',
  MIGRATING = 'migrating',
  REMOVED = 'removed',
  REMOVING = 'removing'
}

/**
 * Private Cloud User
 */
export interface DedicatedCloudUser {
  activationState?: DedicatedClouduserActivationState
  canManageIpFailOvers: boolean
  canManageNetwork: boolean
  canManageRights: boolean
  email?: string
  firstName?: string
  fullAdminRo: boolean
  isEnableManageable: boolean
  isTokenValidator: boolean
  lastName?: string
  login: string
  name: string
  nsxRight: boolean
  phoneNumber?: string
  receiveAlerts: boolean
  state: DedicatedClouduserState
  userId: number
}

/*
 * All activation states a Dedicated Cloud User can have
 */
export enum DedicatedClouduserActivationState {
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLED = 'enabled',
  ENABLING = 'enabling',
  TODISABLE = 'toDisable',
  TOENABLE = 'toEnable'
}

/*
 * All states a Dedicated Cloud User can be in
 */
export enum DedicatedClouduserState {
  CREATING = 'creating',
  DELETING = 'deleting',
  DELIVERED = 'delivered',
  ERROR = 'error'
}

/*
 * Open or restricted access to management interface ?
 */
export enum DedicatedCloudUserAccessPolicy {
  FILTERED = 'filtered',
  OPEN = 'open'
}

/*
 * Which user will be disconnected first in case of quota of maximum connection is reached
 */
export enum DedicatedCloudUserLogoutPolicy {
  FIRST = 'first',
  LAST = 'last'
}

/**
 * The Private Cloud Vendor option
 */
export interface DedicatedCloudVendor {
  vendorName: string
}

/**
 * Representation of a Vendor object in OVH API
 */
export interface DedicatedCloudvendorOvhId {
  datacenterId?: number
  filerId?: number
  hostId?: number
  vmId?: number
}

/*
 * Dedicated Cloud vendors objects types
 */
export enum DedicatedCloudVendorObjectType {
  CLUSTER = 'cluster',
  DATACENTER = 'datacenter',
  FILER = 'filer',
  HOST = 'host',
  VM = 'vm'
}

/**
 * Detailed version
 */
export interface DedicatedCloudVersion {
  build: string
  major: string
  minor: string
}

/*
 * The connectable virtual device status
 */
export enum DedicatedCloudvirtualDeviceConnectInfoStatus {
  OK = 'ok',
  RECOVERABLEERROR = 'recoverableError',
  UNRECOVERABLEERROR = 'unrecoverableError',
  UNTRIED = 'untried'
}

/**
 * A structure describing the cdrom configuration of a virtual machine
 */
export interface DedicatedCloudvirtualMachineCdrom {
  connected?: boolean
  iso?: string
}

/*
 * The fault tolerance state of the virtual machine
 */
export enum DedicatedCloudvirtualMachineFaultToleranceState {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  NEEDSECONDARY = 'needSecondary',
  NOTCONFIGURED = 'notConfigured',
  RUNNING = 'running',
  STARTING = 'starting'
}

/*
 * The power state of the virtual machine
 */
export enum DedicatedCloudvirtualMachinePowerState {
  DELETED = 'deleted',
  POWEREDOFF = 'poweredOff',
  POWEREDON = 'poweredOn',
  SUSPENDED = 'suspended'
}

/**
 * Private Cloud Vlan
 */
export interface DedicatedCloudVlan {
  name: string
  routingRateLimit: string
  state: DedicatedCloudvlanState
  type: DedicatedCloudvlanType
  vlanId: number
  vlanNumber: number
}

/*
 * All states a Dedicated Cloud Vlan can be in
 */
export enum DedicatedCloudvlanState {
  AVAILABLE = 'available',
  DELIVERED = 'delivered',
  DISABLED = 'disabled',
  ERROR = 'error',
  REMOVING = 'removing',
  RESERVED = 'reserved'
}

/*
 * This Dedicated Cloud vlan type
 */
export enum DedicatedCloudvlanType {
  ADMIN = 'admin',
  FREE = 'free',
  PAID = 'paid'
}

/**
 * Private Cloud Virtual Machine
 */
export interface DedicatedCloudVm {
  backup?: DedicatedCloudbackupBackup
  cdroms?: DedicatedCloudvirtualMachineCdrom[]
  clusterName?: string
  cpuMax?: any
  cpuNum?: number
  cpuReady?: any
  cpuReadyPercent?: any
  cpuUsed?: number
  filers?: DedicatedCloudvmFiler[]
  folderName?: string
  hostName?: string
  memoryMax?: number
  memoryTps?: string
  memoryUsed?: number
  moRef: string
  name?: string
  netPacketRx?: any
  netPacketTx?: any
  netRx?: any
  netTx?: any
  networks?: DedicatedCloudvmNetwork[]
  powerState: DedicatedCloudvirtualMachinePowerState
  readLatency?: any
  readPerSecond?: any
  readRate?: any
  roleFt?: string
  snapshotNum?: number
  stateFt?: DedicatedCloudvirtualMachineFaultToleranceState
  vmId: number
  vmwareTools?: string
  vmwareToolsVersion?: string
  writeLatency?: any
  writePerSecond?: any
  writeRate?: any
}

/**
 * Private Cloud VM Encryption option
 */
export interface DedicatedCloudVMEncryption {
  state: DedicatedCloudoptionState
}

/**
 * Private Cloud VM Encryption option access network
 */
export interface DedicatedCloudVMEncryptionAccessNetwork {
  description: string
  ip: string
  kmsId: number
  kmsTcpPort: number
  sslThumbprint: string
  state: DedicatedCloudoptionAccessNetworkState
}

/**
 * A structure describing filers of a the virtual machine
 */
export interface DedicatedCloudvmFiler {
  committed: any
  disks: DedicatedCloudvmFilerDisk[]
  name: string
}

/**
 * A structure describing filer disks of a the virtual machine
 */
export interface DedicatedCloudvmFilerDisk {
  capacity: any
  id: string
}

/**
 * A structure describing the network of a the virtual machine
 */
export interface DedicatedCloudvmNetwork {
  allowGuestControl: boolean
  backing: DedicatedCloudvmNetworkBacking
  connected: boolean
  controler: string
  label: string
  macAddress: string
  startConnected: boolean
  status: DedicatedCloudvirtualDeviceConnectInfoStatus
}

/**
 * A structure describing the backing network of a the virtual machine
 */
export interface DedicatedCloudvmNetworkBacking {
  deviceName?: string
  portGroupKey?: string
  portKey?: string
  switchUuid?: string
  type: DedicatedCloudvmNetworkBackingType
  useAutoDetect?: boolean
  valueMoref?: string
}

/*
 * The type of the network backing
 */
export enum DedicatedCloudvmNetworkBackingType {
  DVS = 'DVS',
  VSS = 'VSS'
}

/**
 * The Private Cloud vRealize Operations option
 */
export interface DedicatedCloudVrops {
  state: DedicatedCloudoptionState
  url?: string
}

/**
 * Zpool and their availability
 */
export interface DedicatedCloudZpoolStockProfile {
  minimumAvailability: string
  profile: string
  realCount: number
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
 * vrack dedicated cloud interface
 */
export interface VrackdedicatedCloud {
  dedicatedCloud: string
  vlanId?: number
  vrack: string
}

/**
 * vrack tasks
 */
export interface VrackTask {
  function: string
  id: number
  lastUpdate?: string
  orderId?: number
  serviceName?: string
  status: VrackTaskStatus
  targetDomain?: string
  todoDate?: string
}

/*
 * All states a vRack Task can be in
 */
export enum VrackTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  INIT = 'init',
  TODO = 'todo'
}


export class DedicatedCloud {
  constructor(private client: Client) {}

  /**
   * Operations about the PCC service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/dedicatedCloud`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Private Cloud [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<DedicatedClouddedicatedCloud> {
    let url = `/dedicatedCloud/${serviceName}`

    return this.client.request<DedicatedClouddedicatedCloud>('GET', url)
  }

  /**
   * Private Cloud [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: DedicatedClouddedicatedCloud): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}`

    return this.client.request<DedicatedCloudTask>('PUT', url, payload)
  }

  /**
   * List the dedicatedCloud.AllowedNetwork objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork#GET)
   */
  NetworksAllowedToAccessToThisPrivateCloudManagementInterface(serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicatedCloud.AllowedNetwork objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork#POST)
   */
  CreateANewAllowedNetworkForYourDedicatedCloud(network: any, serviceName: string, description?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork`

    return this.client.request<DedicatedCloudTask>('POST', url, {network, description})
  }

  /**
   * Network allowed to connect to the Private Cloud management interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D#GET)
   */
  /*
  GetThisObjectProperties(networkAccessId: number, serviceName: string): Promise<DedicatedCloudAllowedNetwork> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`

    return this.client.request<DedicatedCloudAllowedNetwork>('GET', url)
  }
  */

  /**
   * Network allowed to connect to the Private Cloud management interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(networkAccessId: number, serviceName: string, payload: DedicatedCloudAllowedNetwork): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`

    return this.client.request<DedicatedCloudTask>('PUT', url, payload)
  }
  */

  /**
   * Network allowed to connect to the Private Cloud management interface [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D#DELETE)
   */
  RemoveThisNetworkFromYourPrivateCloud(networkAccessId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`

    return this.client.request<DedicatedCloudTask>('DELETE', url)
  }

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task#GET)
   */
  TasksAssociatedWithThisAllowedNetwork(networkAccessId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(networkAccessId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, networkAccessId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }

  /**
   * resetTaskState operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  RestartTaskInError(networkAccessId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }

  /**
   * The features available in your Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/capabilities#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudCapabilities> {
    let url = `/dedicatedCloud/${serviceName}/capabilities`

    return this.client.request<DedicatedCloudCapabilities>('GET', url)
  }
  */

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/changeProperties#POST)
   */
  UpdateThisPrivateCloudProperties(serviceName: string, description?: string, sslV3?: boolean, userAccessPolicy?: DedicatedCloudUserAccessPolicy, userLimitConcurrentSession?: number, userLogoutPolicy?: DedicatedCloudUserLogoutPolicy, userSessionTimeout?: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/changeProperties`

    return this.client.request<DedicatedCloudTask>('POST', url, {description, sslV3, userAccessPolicy, userLimitConcurrentSession, userLogoutPolicy, userSessionTimeout})
  }

  /**
   * compliance operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/commercialRange/compliance#GET)
   */
  GetTheNameOfTheCommercialRangesCompliantWithYourPrivateCloud(serviceName: string): Promise<string[]> {
    let url = `/dedicatedCloud/${serviceName}/commercialRange/compliance`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * orderable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/commercialRange/orderable#GET)
   */
  GetTheNameOfTheCommercialRangesOrderableInYourPrivateCloud(serviceName: string): Promise<string[]> {
    let url = `/dedicatedCloud/${serviceName}/commercialRange/orderable`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/dedicatedCloud/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the dedicatedCloud.Datacenter objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter#GET)
   */
  DatacentersAssociatedWithThisPrivateCloud(serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicatedCloud.Datacenter objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter#POST)
   */
  AddANewDatacenterInYourPrivateCloud(commercialRangeName: string, serviceName: string, vrackName?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter`

    return this.client.request<DedicatedCloudTask>('POST', url, {commercialRangeName, vrackName})
  }

  /**
   * Private Cloud Datacenter [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, serviceName: string): Promise<DedicatedCloudDatacenter> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}`

    return this.client.request<DedicatedCloudDatacenter>('GET', url)
  }
  */

  /**
   * Private Cloud Datacenter [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(datacenterId: number, serviceName: string, payload: DedicatedCloudDatacenter): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}`

    return this.client.request<DedicatedCloudTask>('PUT', url, payload)
  }
  */

  /**
   * Private Cloud Datacenter [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D#DELETE)
   */
  RemoveThisDatacenterFromYourPrivateCloudItHasToBeEmptyInOrderToBeRemovable(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}`

    return this.client.request<DedicatedCloudTask>('DELETE', url)
  }

  /**
   * Backup configured on a given Datacenter [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, serviceName: string): Promise<DedicatedCloudBackup> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup`

    return this.client.request<DedicatedCloudBackup>('GET', url)
  }
  */

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup/changeProperties#POST)
   */
  EditTheBackupOnAPrivateCloud(backupDurationInReport: boolean, backupOffer: DedicatedCloudbackupOfferType, backupSizeInReport: boolean, datacenterId: number, diskSizeInReport: boolean, fullDayInReport: boolean, restorePointInReport: boolean, serviceName: string, mailAddress?: string, scheduleHour?: any): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/changeProperties`

    return this.client.request<DedicatedCloudTask>('POST', url, {backupDurationInReport, backupOffer, backupSizeInReport, diskSizeInReport, fullDayInReport, restorePointInReport, mailAddress, scheduleHour})
  }

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup/disable#POST)
   */
  DisableBackupSolutionOnAPrivateCloud(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup/enable#POST)
   */
  EnableBackupSolutionOnAPrivateCloud(datacenterId: number, serviceName: string, backupOffer?: DedicatedCloudbackupOfferType): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/enable`

    return this.client.request<DedicatedCloudTask>('POST', url, {backupOffer})
  }

  /**
   * disable operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/disable#POST)
   */
  DisableZerto(datacenterId: number, secondaryDatacenterId: number, secondaryServiceName: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/disable`

    return this.client.request<DedicatedCloudTask>('POST', url, {secondaryDatacenterId, secondaryServiceName})
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/enable#POST)
   */
  EnableZertoReplicationBetween2OVHDedicatedClouds(datacenterId: number, primaryEndpointIp: string, secondaryDatacenterId: number, secondaryEndpointIp: string, secondaryServiceName: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/enable`

    return this.client.request<DedicatedCloudTask>('POST', url, {primaryEndpointIp, secondaryDatacenterId, secondaryEndpointIp, secondaryServiceName})
  }

  /**
   * generateZsspPassword operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/generateZsspPassword#POST)
   */
  GenerateANewPasswordForZertoSelfServicePortalAndReceiveItByEmail(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/generateZsspPassword`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * state operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/state#POST)
   */
  GetTheCurrentStateOfZertoDeploymentOnYourDedicatedCloud(datacenterId: number, serviceName: string): Promise<DedicatedClouddisasterRecoveryProfile> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/state`

    return this.client.request<DedicatedClouddisasterRecoveryProfile>('POST', url)
  }

  /**
   * configureVpn operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/configureVpn#POST)
   */
  ConfigureVpnBetweenYourOVHPrivateCloudAndYourOnsiteInfrastructure(datacenterId: number, preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteZvmInternalIp: string, serviceName: string, remoteVraNetwork?: any): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/configureVpn`

    return this.client.request<DedicatedCloudTask>('POST', url, {preSharedKey, remoteEndpointInternalIp, remoteEndpointPublicIp, remoteZvmInternalIp, remoteVraNetwork})
  }

  /**
   * defaultLocalVraNetwork operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/defaultLocalVraNetwork#GET)
   */
  GetTheDefaultLocalVraNetworkSubnetSuggestedByOVH(datacenterId: number, serviceName: string): Promise<any> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork`

    return this.client.request<any>('GET', url)
  }

  /**
   * disable operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/disable#POST)
   */
  DisableSingleSiteZerto(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/enable#POST)
   */
  EnableZertoReplicationBetweenYourOVHPrivateCloudAndYourOnsiteInfrastructure(datacenterId: number, localVraNetwork: string, ovhEndpointIp: string, remoteVraNetwork: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/enable`

    return this.client.request<DedicatedCloudTask>('POST', url, {localVraNetwork, ovhEndpointIp, remoteVraNetwork})
  }

  /**
   * List the dedicatedCloud.Filer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer#GET)
   */
  FilersAssociatedWithThisDatacenter(datacenterId: number, serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Private Cloud Filer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, filerId: number, serviceName: string): Promise<DedicatedCloudFiler> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}`

    return this.client.request<DedicatedCloudFiler>('GET', url)
  }
  */

  /**
   * hourlyConsumption operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/hourlyConsumption#GET)
   */
  HourlyConsumptionAssociatedWithThisFiler(datacenterId: number, filerId: number, serviceName: string): Promise<DedicatedCloudfilerHourlyConsumption> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/hourlyConsumption`

    return this.client.request<DedicatedCloudfilerHourlyConsumption>('GET', url)
  }

  /**
   * remove operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/remove#POST)
   */
  RemoveTheFilerFromYourPrivateCloud(datacenterId: number, filerId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/remove`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task#GET)
   */
  TasksAssociatedWithThisFiler(datacenterId: number, filerId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  /*
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(datacenterId: number, executionDate: string, filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }
  */

  /**
   * resetTaskState operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  /*
  RestartTaskInError(datacenterId: number, filerId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }
  */

  /**
   * List the dedicatedCloud.Host objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host#GET)
   */
  HostsAssociatedWithThisDatacenter(datacenterId: number, serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Private Cloud Host [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, hostId: number, serviceName: string): Promise<DedicatedCloudHost> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}`

    return this.client.request<DedicatedCloudHost>('GET', url)
  }
  */

  /**
   * addHostSpare operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/addHostSpare#POST)
   */
  AddASpareHostToYourPrivateCloud(datacenterId: number, hostId: number, reason: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/addHostSpare`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }

  /**
   * hourlyConsumption operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/hourlyConsumption#GET)
   */
  HourlyConsumptionAssociatedWithThisHost(datacenterId: number, hostId: number, serviceName: string): Promise<DedicatedCloudhostHourlyConsumption> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/hourlyConsumption`

    return this.client.request<DedicatedCloudhostHourlyConsumption>('GET', url)
  }

  /**
   * remove operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/remove#POST)
   */
  RemoveTheHostFromYourPrivateCloud(datacenterId: number, hostId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/remove`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task#GET)
   */
  TasksAssociatedWithThisHost(datacenterId: number, hostId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, hostId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  /*
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(datacenterId: number, executionDate: string, hostId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }
  */

  /**
   * resetTaskState operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  /*
  RestartTaskInError(datacenterId: number, hostId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }
  */

  /**
   * orderableFilerProfiles operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderableFilerProfiles#GET)
   */
  ListAvailableFilersInAGivenPrivateCloudDatacenter(datacenterId: number, serviceName: string): Promise<DedicatedCloudfilerProfile[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderableFilerProfiles`

    return this.client.request<DedicatedCloudfilerProfile[]>('GET', url)
  }

  /**
   * orderableHostProfiles operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderableHostProfiles#GET)
   */
  ListAvailableHostsInAGivenPrivateCloudDatacenter(datacenterId: number, serviceName: string): Promise<DedicatedCloudhostProfile[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderableHostProfiles`

    return this.client.request<DedicatedCloudhostProfile[]>('GET', url)
  }

  /**
   * orderNewFilerHourly operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderNewFilerHourly#POST)
   */
  OrderANewHourlyFilerInAGivenDatacenter(datacenterId: number, name: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderNewFilerHourly`

    return this.client.request<DedicatedCloudTask>('POST', url, {name})
  }

  /**
   * orderNewHostHourly operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderNewHostHourly#POST)
   */
  OrderANewHourlyHostInAGivenDatacenter(datacenterId: number, name: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderNewHostHourly`

    return this.client.request<DedicatedCloudTask>('POST', url, {name})
  }

  /**
   * Private management gateway deployed in your Private Cloud to block all public access [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/privateGateway#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, serviceName: string): Promise<DedicatedCloudPrivateGateway> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway`

    return this.client.request<DedicatedCloudPrivateGateway>('GET', url)
  }
  */

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/privateGateway/disable#POST)
   */
  RemoveThePrivateGatewayInYourPrivateCloudAndOpenPublicAccess(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/privateGateway/enable#POST)
   */
  DeployAPrivateGatewayOnYourPrivateCloudToBlockAllPublicAccess(datacenterId: number, ip: string, netmask: string, portgroup: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway/enable`

    return this.client.request<DedicatedCloudTask>('POST', url, {ip, netmask, portgroup})
  }

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task#GET)
   */
  TasksAssociatedWithThisDatacenter(datacenterId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  /*
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(datacenterId: number, executionDate: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }
  */

  /**
   * resetTaskState operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  /*
  RestartTaskInError(datacenterId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }
  */

  /**
   * List the dedicatedCloud.Vm objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm#GET)
   */
  VirtualMachinessAssociatedWithThisDatacenter(datacenterId: number, serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Private Cloud Virtual Machine [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudVm> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}`

    return this.client.request<DedicatedCloudVm>('GET', url)
  }
  */

  /**
   * Private Cloud Backup Job [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudBackupJob> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob`

    return this.client.request<DedicatedCloudBackupJob>('GET', url)
  }
  */

  /**
   * Private Cloud Backup Job [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob#POST)
   */
  EditABackupJob(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob`

    return this.client.request<DedicatedCloudTask>('POST', url, {backupDays})
  }

  /**
   * disable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/disable#POST)
   */
  DisableBackupSolutionOnThisVirtualMachine(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/enable#POST)
   */
  EnableBackupSolutionOnThisVirtualMachine(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/enable`

    return this.client.request<DedicatedCloudTask>('POST', url, {backupDays})
  }

  /**
   * List the dedicatedCloud.RestorePoint objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/restorePoints#GET)
   */
  RestorePointAssociatedToThisBackupJob(datacenterId: number, serviceName: string, vmId: number): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/restorePoints`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Private Cloud Restore Point [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/restorePoints/%7BrestorePointId%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenterId: number, restorePointId: number, serviceName: string, vmId: number): Promise<DedicatedCloudRestorePoint> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/restorePoints/${restorePointId}`

    return this.client.request<DedicatedCloudRestorePoint>('GET', url)
  }
  */

  /**
   * restore operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/restorePoints/%7BrestorePointId%7D/restore#POST)
   */
  RestoreThisRestorePoint(datacenterId: number, filerId: number, restorePointId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/restorePoints/${restorePointId}/restore`

    return this.client.request<DedicatedCloudTask>('POST', url, {filerId})
  }

  /**
   * disableBackup operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/disableBackup#POST)
   */
  DisableBackupOnThisVirtualMachine(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/disableBackup`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * editBackup operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/editBackup#POST)
   */
  EditBackupOnThisVirtualMachine(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/editBackup`

    return this.client.request<DedicatedCloudTask>('POST', url, {backupDays})
  }

  /**
   * enableBackup operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/enableBackup#POST)
   */
  EnableBackupOnThisVirtualMachine(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/enableBackup`

    return this.client.request<DedicatedCloudTask>('POST', url, {backupDays})
  }

  /**
   * restoreBackup operations [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/restoreBackup#POST)
   */
  /*
  RestoreThisRestorePoint(datacenterId: number, filerId: number, restorePointId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/restoreBackup`

    return this.client.request<DedicatedCloudTask>('POST', url, {filerId, restorePointId})
  }
  */

  /**
   * Private Cloud Active Directory Federation option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudFederation> {
    let url = `/dedicatedCloud/${serviceName}/federation`

    return this.client.request<DedicatedCloudFederation>('GET', url)
  }
  */

  /**
   * List the dedicatedCloud.FederationAccessNetwork objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory#GET)
   */
  ActiveDirectoriesLinkedToThisPrivateCloud(serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicatedCloud.FederationAccessNetwork objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory#POST)
   */
  AddANewOptionUserAccess(baseDnForGroups: string, baseDnForUsers: string, domainAlias: string, domainName: string, ip: string, password: string, serviceName: string, username: string, description?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory`

    return this.client.request<DedicatedCloudTask>('POST', url, {baseDnForGroups, baseDnForUsers, domainAlias, domainName, ip, password, username, description})
  }

  /**
   * Private Cloud federation option access network [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D#GET)
   */
  /*
  GetThisObjectProperties(activeDirectoryId: number, serviceName: string): Promise<DedicatedCloudFederationAccessNetwork> {
    let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}`

    return this.client.request<DedicatedCloudFederationAccessNetwork>('GET', url)
  }
  */

  /**
   * Private Cloud federation option access network [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D#DELETE)
   */
  RemoveAnOptionUserAccess(activeDirectoryId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}`

    return this.client.request<DedicatedCloudTask>('DELETE', url)
  }

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D/changeProperties#POST)
   */
  ChangeActiveDirectoryProperties(activeDirectoryId: number, password: string, serviceName: string, username: string, description?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}/changeProperties`

    return this.client.request<DedicatedCloudTask>('POST', url, {password, username, description})
  }

  /**
   * grantActiveDirectoryUser operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D/grantActiveDirectoryUser#POST)
   */
  GrantActiveDirectoryUser(activeDirectoryId: number, serviceName: string, username: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}/grantActiveDirectoryUser`

    return this.client.request<DedicatedCloudTask>('POST', url, {username})
  }

  /**
   * List the dedicatedCloud.Filer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer#GET)
   */
  FilersMountedOnAllDatacentersOfYourPrivateCloudVsphere(serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/filer`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Private Cloud Filer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D#GET)
   */
  /*
  GetThisObjectProperties(filerId: number, serviceName: string): Promise<DedicatedCloudFiler> {
    let url = `/dedicatedCloud/${serviceName}/filer/${filerId}`

    return this.client.request<DedicatedCloudFiler>('GET', url)
  }
  */

  /**
   * hourlyConsumption operations [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/hourlyConsumption#GET)
   */
  /*
  HourlyConsumptionAssociatedWithThisFiler(filerId: number, serviceName: string): Promise<DedicatedCloudfilerHourlyConsumption> {
    let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/hourlyConsumption`

    return this.client.request<DedicatedCloudfilerHourlyConsumption>('GET', url)
  }
  */

  /**
   * remove operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/remove#POST)
   */
  /*
  RemoveTheFilerFromYourPrivateCloud(filerId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/remove`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }
  */

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task#GET)
   */
  /*
  TasksAssociatedWithThisFiler(filerId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  /*
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }
  */

  /**
   * resetTaskState operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  /*
  RestartTaskInError(filerId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }
  */

  /**
   * globalTasks operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/globalTasks#GET)
   */
  GetFilteredTasksAssociatedWithThisPrivateCloud(serviceName: string, datacenterId?: number, endDateFrom?: string, endDateTo?: string, executionDateFrom?: string, executionDateTo?: string, filerId?: number, hostId?: number, lastModificationDateFrom?: string, lastModificationDateTo?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: DedicatedCloudTaskStateEnum[], userId?: number, vlanId?: number): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/globalTasks?`

    const queryParams = new QueryParams()
    if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
    if (endDateFrom) { queryParams.set('endDate.from', endDateFrom.toString()) }
    if (endDateTo) { queryParams.set('endDate.to', endDateTo.toString()) }
    if (executionDateFrom) { queryParams.set('executionDate.from', executionDateFrom.toString()) }
    if (executionDateTo) { queryParams.set('executionDate.to', executionDateTo.toString()) }
    if (filerId) { queryParams.set('filerId', filerId.toString()) }
    if (hostId) { queryParams.set('hostId', hostId.toString()) }
    if (lastModificationDateFrom) { queryParams.set('lastModificationDate.from', lastModificationDateFrom.toString()) }
    if (lastModificationDateTo) { queryParams.set('lastModificationDate.to', lastModificationDateTo.toString()) }
    if (name) { queryParams.set('name', name) }
    if (networkAccessId) { queryParams.set('networkAccessId', networkAccessId.toString()) }
    if (orderId) { queryParams.set('orderId', orderId.toString()) }
    if (parentTaskId) { queryParams.set('parentTaskId', parentTaskId.toString()) }
    if (state) { queryParams.set('state', state.toString()) }
    if (userId) { queryParams.set('userId', userId.toString()) }
    if (vlanId) { queryParams.set('vlanId', vlanId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Private Cloud VMware Hybrid Cloud Extension option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudHcx> {
    let url = `/dedicatedCloud/${serviceName}/hcx`

    return this.client.request<DedicatedCloudHcx>('GET', url)
  }
  */

  /**
   * canBeDisabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/canBeDisabled#GET)
   */
  CheckIfVMwareHybridCloudExtensionOptionCanBeDisabled(serviceName: string): Promise<boolean> {
    let url = `/dedicatedCloud/${serviceName}/hcx/canBeDisabled`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * canBeEnabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/canBeEnabled#GET)
   */
  CheckIfVMwareHybridCloudExtensionOptionCanBeEnabled(serviceName: string): Promise<boolean> {
    let url = `/dedicatedCloud/${serviceName}/hcx/canBeEnabled`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/disable#POST)
   */
  DisableVMwareHybridCloudExtensionOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/hcx/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/enable#POST)
   */
  EnableVMwareHybridCloudExtensionOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/hcx/enable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * The Private Cloud Hds option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudHds> {
    let url = `/dedicatedCloud/${serviceName}/hds`

    return this.client.request<DedicatedCloudHds>('GET', url)
  }
  */

  /**
   * canBeDisabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/canBeDisabled#GET)
   */
  CheckIfHdsOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/hds/canBeDisabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * canBeEnabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/canBeEnabled#GET)
   */
  CheckIfHdsOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/hds/canBeEnabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * disable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/disable#POST)
   */
  DisableHdsOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/hds/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/enable#POST)
   */
  EnableHdsOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/hds/enable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * The Private Cloud Hipaa option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudHipaa> {
    let url = `/dedicatedCloud/${serviceName}/hipaa`

    return this.client.request<DedicatedCloudHipaa>('GET', url)
  }
  */

  /**
   * canBeDisabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/canBeDisabled#GET)
   */
  CheckIfHipaaOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/hipaa/canBeDisabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * canBeEnabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/canBeEnabled#GET)
   */
  CheckIfHipaaOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/hipaa/canBeEnabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * disable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/disable#POST)
   */
  DisableHipaaOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/hipaa/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/enable#POST)
   */
  EnableHipaaOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/hipaa/enable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * List the dedicatedCloud.Ip objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip#GET)
   */
  IpBlocksAttachedToThisPrivateCloud(serviceName: string): Promise<any> {
    let url = `/dedicatedCloud/${serviceName}/ip`

    return this.client.request<any>('GET', url)
  }

  /**
   * IP Blocks associated with a Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D#GET)
   */
  /*
  GetThisObjectProperties(network: any, serviceName: string): Promise<DedicatedCloudIp> {
    let url = `/dedicatedCloud/${serviceName}/ip/${network}`

    return this.client.request<DedicatedCloudIp>('GET', url)
  }
  */

  /**
   * details operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/details#GET)
   */
  ListDetailsAboutThisIPBlock(network: any, serviceName: string): Promise<DedicatedCloudIpDetails[]> {
    let url = `/dedicatedCloud/${serviceName}/ip/${network}/details`

    return this.client.request<DedicatedCloudIpDetails[]>('GET', url)
  }

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task#GET)
   */
  TasksAssociatedWithThisIPBlock(network: any, serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/ip/${network}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(network: any, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/ip/${network}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  /*
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, network: any, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/ip/${network}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }
  */

  /**
   * resetTaskState operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  /*
  RestartTaskInError(network: any, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/ip/${network}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }
  */

  /**
   * newPrices operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/newPrices#GET)
   */
  GetTheNewPricesForYourPrivateCloud(serviceName: string): Promise<DedicatedCloudresourceNewPrices> {
    let url = `/dedicatedCloud/${serviceName}/newPrices`

    return this.client.request<DedicatedCloudresourceNewPrices>('GET', url)
  }

  /**
   * The Private Cloud Nsx option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudNsx> {
    let url = `/dedicatedCloud/${serviceName}/nsx`

    return this.client.request<DedicatedCloudNsx>('GET', url)
  }
  */

  /**
   * canBeDisabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/canBeDisabled#GET)
   */
  CheckIfNsxOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/nsx/canBeDisabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * canBeEnabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/canBeEnabled#GET)
   */
  CheckIfNsxOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/nsx/canBeEnabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * disable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/disable#POST)
   */
  DisableNsxOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/nsx/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/enable#POST)
   */
  EnableNsxOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/nsx/enable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * orderableIpCountries operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/orderableIpCountries#GET)
   */
  GetTheCountriesYouCanSelectInOrderdedicatedCloudserviceNameip(serviceName: string): Promise<DedicatedCloudIpCountriesEnum[]> {
    let url = `/dedicatedCloud/${serviceName}/orderableIpCountries`

    return this.client.request<DedicatedCloudIpCountriesEnum[]>('GET', url)
  }

  /**
   * orderNewFilerHourly operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/orderNewFilerHourly#POST)
   */
  OrderANewHourlyFilerMountedInEveryDatacenterOfAGivenPrivateCloud(name: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/orderNewFilerHourly`

    return this.client.request<DedicatedCloudTask>('POST', url, {name})
  }

  /**
   * passwordPolicy operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/passwordPolicy#GET)
   */
  GetTheCurrentPasswordPolicyForYourPrivateCloud(serviceName: string): Promise<DedicatedCloudpasswordPolicy> {
    let url = `/dedicatedCloud/${serviceName}/passwordPolicy`

    return this.client.request<DedicatedCloudpasswordPolicy>('GET', url)
  }

  /**
   * The Private Cloud PCI-DSS option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudPciDss> {
    let url = `/dedicatedCloud/${serviceName}/pcidss`

    return this.client.request<DedicatedCloudPciDss>('GET', url)
  }
  */

  /**
   * canBeDisabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/canBeDisabled#GET)
   */
  CheckIfPCIDSSOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/pcidss/canBeDisabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * canBeEnabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/canBeEnabled#GET)
   */
  CheckIfPCIDSSOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/pcidss/canBeEnabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * disable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/disable#POST)
   */
  DisablePCIDSSOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/pcidss/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/enable#POST)
   */
  EnablePCIDSSOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/pcidss/enable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * resetTriggeredAlarm operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/resetTriggeredAlarm#POST)
   */
  ResetAllTriggeredAlarmsOnPCC(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/resetTriggeredAlarm`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * List the dedicatedCloud.Robot objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/robot#GET)
   */
  RobotsThatCanRunOnThisPrivateCloud(serviceName: string): Promise<string[]> {
    let url = `/dedicatedCloud/${serviceName}/robot`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * The robots used in Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/robot/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<DedicatedCloudRobot> {
    let url = `/dedicatedCloud/${serviceName}/robot/${name}`

    return this.client.request<DedicatedCloudRobot>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/dedicatedCloud/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/dedicatedCloud/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * servicePack operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/servicePack#GET)
   */
  RetrieveTheServicePackInformations(serviceName: string): Promise<DedicatedCloudservicePackStatus> {
    let url = `/dedicatedCloud/${serviceName}/servicePack`

    return this.client.request<DedicatedCloudservicePackStatus>('GET', url)
  }

  /**
   * List the dedicatedCloud.ServicePack objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/servicePacks#GET)
   */
  ServicePackCompliantWithTheCurrentPrivateCloud(serviceName: string): Promise<string[]> {
    let url = `/dedicatedCloud/${serviceName}/servicePacks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List of Service Pack compliant with the current Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/servicePacks/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<DedicatedCloudServicePack> {
    let url = `/dedicatedCloud/${serviceName}/servicePacks/${name}`

    return this.client.request<DedicatedCloudServicePack>('GET', url)
  }
  */

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task#GET)
   */
  TasksAssociatedWithThisPrivateCloud(serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  /*
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }
  */

  /**
   * resetTaskState operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  /*
  RestartTaskInError(reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/dedicatedCloud/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the dedicatedCloud.twoFAWhitelist objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist#GET)
   */
  IpAllowedToBypassTheTwoFactorAuthenticationOnThisPrivateCloudManagementInterface(serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicatedCloud.twoFAWhitelist objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist#POST)
   */
  AddAWhitelistedIpOnTheTwoFactorAuthentication(description: string, ip: string, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist`

    return this.client.request<DedicatedCloudTask>('POST', url, {description, ip})
  }

  /**
   * Trust IP which can bypass the two factor authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<DedicatedCloudtwoFAWhitelist> {
    let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}`

    return this.client.request<DedicatedCloudtwoFAWhitelist>('GET', url)
  }
  */

  /**
   * Trust IP which can bypass the two factor authentication [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist/%7Bid%7D#DELETE)
   */
  RemoveAWhitelistedIpOnTheTwoFactorAuthentication(id: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}`

    return this.client.request<DedicatedCloudTask>('DELETE', url)
  }

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist/%7Bid%7D/changeProperties#POST)
   */
  ChangePrivateCloudTwoFacterAuthenticationWhitelistProperties(id: number, serviceName: string, description?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}/changeProperties`

    return this.client.request<DedicatedCloudTask>('POST', url, {description})
  }

  /**
   * upgradeHypervisor operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/upgradeHypervisor#POST)
   */
  UpgradeYourHypervisorToTheNextReleasedVersion(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/upgradeHypervisor`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * List the dedicatedCloud.User objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user#GET)
   */
  PrivateCloudUsers(serviceName: string, name?: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/user?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the dedicatedCloud.User objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user#POST)
   */
  CreateANewUserInYourPrivateCloud(name: string, serviceName: string, canAddRessource?: boolean, canManageRights?: boolean, email?: string, expirationDate?: string, firstName?: string, lastName?: string, networkRole?: DedicatedCloudrightNetworkRole, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: DedicatedCloudrightRight, tokenValidator?: boolean, vmNetworkRole?: DedicatedCloudrightVmNetworkRole): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user`

    return this.client.request<DedicatedCloudTask>('POST', url, {name, canAddRessource, canManageRights, email, expirationDate, firstName, lastName, networkRole, nsxRight, password, phoneNumber, receiveAlerts, right, tokenValidator, vmNetworkRole})
  }

  /**
   * Private Cloud User [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, userId: number): Promise<DedicatedCloudUser> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}`

    return this.client.request<DedicatedCloudUser>('GET', url)
  }
  */

  /**
   * Private Cloud User [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D#DELETE)
   */
  RemoveAGivenUserFromYourPrivateCloud(serviceName: string, userId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}`

    return this.client.request<DedicatedCloudTask>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/changePassword#POST)
   */
  ChangePrivateCloudUserPassword(serviceName: string, userId: number, password?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/changePassword`

    return this.client.request<DedicatedCloudTask>('POST', url, {password})
  }

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/changeProperties#POST)
   */
  ChangePrivateCloudUserProperties(serviceName: string, userId: number, canManageIpFailOvers?: boolean, canManageNetwork?: boolean, canManageRights?: boolean, email?: string, firstName?: string, fullAdminRo?: boolean, lastName?: string, nsxRight?: boolean, phoneNumber?: string, receiveAlerts?: boolean, tokenValidator?: boolean): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/changeProperties`

    return this.client.request<DedicatedCloudTask>('POST', url, {canManageIpFailOvers, canManageNetwork, canManageRights, email, firstName, fullAdminRo, lastName, nsxRight, phoneNumber, receiveAlerts, tokenValidator})
  }

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/disable#POST)
   */
  DisableTheGivenPrivateCloudUser(serviceName: string, userId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/enable#POST)
   */
  EnableTheGivenPrivateCloudUser(serviceName: string, userId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/enable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * metricsToken operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/metricsToken#POST)
   */
  GetMetricsTokenToQueryVScopeGraphsData(serviceName: string, userId: number): Promise<DedicatedCloudmetricsToken> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/metricsToken`

    return this.client.request<DedicatedCloudmetricsToken>('POST', url)
  }

  /**
   * List the dedicatedCloud.ObjectRight objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight#GET)
   */
  UserRightsOnAnObject(serviceName: string, userId: number): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicatedCloud.ObjectRight objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight#POST)
   */
  AddANewObjectRightToUserInDatacenterOnPrivateCloud(right: DedicatedCloudrightRight, serviceName: string, type: DedicatedCloudrightUserObjectRightType, userId: number, vmwareObjectId: string, propagate?: boolean): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight`

    return this.client.request<DedicatedCloudTask>('POST', url, {right, type, vmwareObjectId, propagate})
  }

  /**
   * Private Cloud User object right [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight/%7BobjectRightId%7D#GET)
   */
  /*
  GetThisObjectProperties(objectRightId: number, serviceName: string, userId: number): Promise<DedicatedCloudObjectRight> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight/${objectRightId}`

    return this.client.request<DedicatedCloudObjectRight>('GET', url)
  }
  */

  /**
   * Private Cloud User object right [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight/%7BobjectRightId%7D#DELETE)
   */
  RemoveAnObjectRightFromUserInDatacenterOnPrivateCloud(objectRightId: number, serviceName: string, userId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight/${objectRightId}`

    return this.client.request<DedicatedCloudTask>('DELETE', url)
  }

  /**
   * List the dedicatedCloud.Right objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/right#GET)
   */
  UserRightsInAGivenDatacenters(serviceName: string, userId: number): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/right`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Private Cloud User right [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/right/%7BrightId%7D#GET)
   */
  /*
  GetThisObjectProperties(rightId: number, serviceName: string, userId: number): Promise<DedicatedCloudRight> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/right/${rightId}`

    return this.client.request<DedicatedCloudRight>('GET', url)
  }
  */

  /**
   * Private Cloud User right [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/right/%7BrightId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(rightId: number, serviceName: string, userId: number, payload: DedicatedCloudRight): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/right/${rightId}`

    return this.client.request<DedicatedCloudTask>('PUT', url, payload)
  }
  */

  /**
   * List the dedicatedCloud.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task#GET)
   */
  TasksAssociatedWithThisUser(serviceName: string, userId: number, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/task?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Private Cloud component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number, userId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/task/${taskId}`

    return this.client.request<DedicatedCloudTask>('GET', url)
  }
  */

  /**
   * changeMaintenanceExecutionDate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
   */
  /*
  ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, serviceName: string, taskId: number, userId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/task/${taskId}/changeMaintenanceExecutionDate`

    return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
  }
  */

  /**
   * resetTaskState operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task/%7BtaskId%7D/resetTaskState#POST)
   */
  /*
  RestartTaskInError(reason: string, serviceName: string, taskId: number, userId: number): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/user/${userId}/task/${taskId}/resetTaskState`

    return this.client.request<DedicatedCloudTask>('POST', url, {reason})
  }
  */

  /**
   * The Private Cloud Vendor option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vendor#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudVendor> {
    let url = `/dedicatedCloud/${serviceName}/vendor`

    return this.client.request<DedicatedCloudVendor>('GET', url)
  }
  */

  /**
   * objectType operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vendor/objectType#POST)
   */
  GetAvailableObjectTypes(serviceName: string): Promise<string[]> {
    let url = `/dedicatedCloud/${serviceName}/vendor/objectType`

    return this.client.request<string[]>('POST', url)
  }

  /**
   * ovhId operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vendor/ovhId#POST)
   */
  GetOvhIdFromObjectType(objectType: DedicatedCloudVendorObjectType, serviceName: string, vendorId: string): Promise<DedicatedCloudvendorOvhId> {
    let url = `/dedicatedCloud/${serviceName}/vendor/ovhId`

    return this.client.request<DedicatedCloudvendorOvhId>('POST', url, {objectType, vendorId})
  }

  /**
   * List the dedicatedCloud.Vlan objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vlan#GET)
   */
  PrivateCloudVlans(serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/vlan`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Private Cloud Vlan [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vlan/%7BvlanId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, vlanId: number): Promise<DedicatedCloudVlan> {
    let url = `/dedicatedCloud/${serviceName}/vlan/${vlanId}`

    return this.client.request<DedicatedCloudVlan>('GET', url)
  }
  */

  /**
   * Private Cloud VM Encryption option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudVMEncryption> {
    let url = `/dedicatedCloud/${serviceName}/vmEncryption`

    return this.client.request<DedicatedCloudVMEncryption>('GET', url)
  }
  */

  /**
   * List the dedicatedCloud.VMEncryptionAccessNetwork objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms#GET)
   */
  VMEncryptionKMSLinkedToThisPrivateCloud(serviceName: string): Promise<number[]> {
    let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicatedCloud.VMEncryptionAccessNetwork objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms#POST)
   */
  /*
  AddANewOptionUserAccess(ip: string, serviceName: string, sslThumbprint: string, description?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms`

    return this.client.request<DedicatedCloudTask>('POST', url, {ip, sslThumbprint, description})
  }
  */

  /**
   * Private Cloud VM Encryption option access network [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms/%7BkmsId%7D#GET)
   */
  /*
  GetThisObjectProperties(kmsId: number, serviceName: string): Promise<DedicatedCloudVMEncryptionAccessNetwork> {
    let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}`

    return this.client.request<DedicatedCloudVMEncryptionAccessNetwork>('GET', url)
  }
  */

  /**
   * Private Cloud VM Encryption option access network [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms/%7BkmsId%7D#DELETE)
   */
  /*
  RemoveAnOptionUserAccess(kmsId: number, serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}`

    return this.client.request<DedicatedCloudTask>('DELETE', url)
  }
  */

  /**
   * changeProperties operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms/%7BkmsId%7D/changeProperties#POST)
   */
  ChangeOptionUserAccessProperties(kmsId: number, serviceName: string, sslThumbprint: string, description?: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}/changeProperties`

    return this.client.request<DedicatedCloudTask>('POST', url, {sslThumbprint, description})
  }

  /**
   * List the vrack.dedicatedCloud objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrack#GET)
   */
  ThisPrivateCloudVrack(serviceName: string): Promise<string[]> {
    let url = `/dedicatedCloud/${serviceName}/vrack`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * vrack dedicated cloud interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrack/%7Bvrack%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, vrack: string): Promise<VrackdedicatedCloud> {
    let url = `/dedicatedCloud/${serviceName}/vrack/${vrack}`

    return this.client.request<VrackdedicatedCloud>('GET', url)
  }
  */

  /**
   * vrack dedicated cloud interface [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrack/%7Bvrack%7D#DELETE)
   */
  RemoveThisDedicatedCloudVmNetworkFromThisVrack(serviceName: string, vrack: string): Promise<VrackTask> {
    let url = `/dedicatedCloud/${serviceName}/vrack/${vrack}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * The Private Cloud vRealize Operations option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudVrops> {
    let url = `/dedicatedCloud/${serviceName}/vrops`

    return this.client.request<DedicatedCloudVrops>('GET', url)
  }
  */

  /**
   * canBeDisabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/canBeDisabled#GET)
   */
  CheckIfVRealizeOperationsOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/vrops/canBeDisabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * canBeEnabled operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/canBeEnabled#GET)
   */
  CheckIfVRealizeOperationsOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility> {
    let url = `/dedicatedCloud/${serviceName}/vrops/canBeEnabled`

    return this.client.request<DedicatedCloudoptionCompatibility>('GET', url)
  }

  /**
   * disable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/disable#POST)
   */
  DisableVRealizeOperationsOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/vrops/disable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * enable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/enable#POST)
   */
  EnableVRealizeOperationsOption(serviceName: string): Promise<DedicatedCloudTask> {
    let url = `/dedicatedCloud/${serviceName}/vrops/enable`

    return this.client.request<DedicatedCloudTask>('POST', url)
  }

  /**
   * List the dedicatedCloud.CommercialRange objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/commercialRange#GET)
   */
  ListOfCommercialRangesAvailableInADedicatedCloud(): Promise<string[]> {
    let url = `/dedicatedCloud/commercialRange`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * The commercial ranges actually available in your Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/commercialRange/%7BcommercialRangeName%7D#GET)
   */
  /*
  GetThisObjectProperties(commercialRangeName: string): Promise<DedicatedCloudCommercialRange> {
    let url = `/dedicatedCloud/commercialRange/${commercialRangeName}`

    return this.client.request<DedicatedCloudCommercialRange>('GET', url)
  }
  */

  /**
   * List the dedicatedCloud.PccZone objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location#GET)
   */
  ListOfLocationsAvailableInADedicatedCloud(): Promise<string[]> {
    let url = `/dedicatedCloud/location`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * PccZones actually available in Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D#GET)
   */
  /*
  GetThisObjectProperties(pccZone: string): Promise<DedicatedCloudPccZone> {
    let url = `/dedicatedCloud/location/${pccZone}`

    return this.client.request<DedicatedCloudPccZone>('GET', url)
  }
  */

  /**
   * List the dedicatedCloud.HostProfile objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hostProfile#GET)
   */
  OfferedHostProfile(pccZone: string): Promise<number[]> {
    let url = `/dedicatedCloud/location/${pccZone}/hostProfile`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Host profiles actually available in Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hostProfile/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, pccZone: string): Promise<DedicatedCloudHostProfile> {
    let url = `/dedicatedCloud/location/${pccZone}/hostProfile/${id}`

    return this.client.request<DedicatedCloudHostProfile>('GET', url)
  }
  */

  /**
   * List the dedicatedCloud.Os objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hypervisor#GET)
   */
  OfferedHypervisorVersion(pccZone: string): Promise<string[]> {
    let url = `/dedicatedCloud/location/${pccZone}/hypervisor`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Hypervisors actually available in Private Cloud [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hypervisor/%7BshortName%7D#GET)
   */
  /*
  GetThisObjectProperties(pccZone: string, shortName: string): Promise<DedicatedCloudOs> {
    let url = `/dedicatedCloud/location/${pccZone}/hypervisor/${shortName}`

    return this.client.request<DedicatedCloudOs>('GET', url)
  }
  */

  /**
   * host operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/stock/host#GET)
   */
  AvailableHostStock(pccZone: string, minYear?: number): Promise<DedicatedCloudHostStockProfile[]> {
    let url = `/dedicatedCloud/location/${pccZone}/stock/host?`

    const queryParams = new QueryParams()
    if (minYear) { queryParams.set('minYear', minYear.toString()) }

    return this.client.request<DedicatedCloudHostStockProfile[]>('GET', url+queryParams.toString())
  }

  /**
   * pcc operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/stock/pcc#GET)
   */
  AvailablePCCStock(pccZone: string): Promise<DedicatedCloudPccStockProfile[]> {
    let url = `/dedicatedCloud/location/${pccZone}/stock/pcc`

    return this.client.request<DedicatedCloudPccStockProfile[]>('GET', url)
  }

  /**
   * zpool operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/stock/zpool#GET)
   */
  AvailableZpoolStock(pccZone: string, profileFilter?: string): Promise<DedicatedCloudZpoolStockProfile[]> {
    let url = `/dedicatedCloud/location/${pccZone}/stock/zpool?`

    const queryParams = new QueryParams()
    if (profileFilter) { queryParams.set('profileFilter', profileFilter) }

    return this.client.request<DedicatedCloudZpoolStockProfile[]>('GET', url+queryParams.toString())
  }

}
