// GENERATED SDK for order API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Available storage order
 */
export type CdnwebstorageOrderStorage = '100GB' | '10TB' | '1TB' | '500GB' | '50TB' | '5TB'

/*
 * Available traffic order in TB
 */
export type CdnwebstorageOrderTraffic = 1 | 10 | 100 | 1000 | 10000

/*
 * Available number for cacheRule upgrade
 */
export type CdnanycastOrderCacheRule = 100 | 1000

/*
 * Available number for quota order
 */
export type CdnanycastOrderQuota = 1 | 10 | 100 | 1000

/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  key: string
  value: T
}

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

/*
 * Housing bay High Availablility offers
 */
export enum DedicatedhousingHaRoutingOffer {
  HA2X2 = 'ha2x2',
  HA2X4 = 'ha2x4'
}

/*
 * ovh Nas HA offer
 */
export type DedicatedNasHAOffer = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g'

/*
 * Nas HA localization
 */
export enum DedicatedNasHAZone {
  BHS = 'bhs',
  RBX = 'rbx',
  SBG = 'sbg'
}

/*
 * Different backup storage capacity in gigabytes
 */
export type DedicatedserverBackupStorageCapacity = 1000 | 10000 | 500 | 5000

/*
 *  Different Bandwidth orderable in Mbps
 */
export type DedicatedserverBandwidthOrder = 1000 | 2000 | 3000

/*
 *  Different Bandwidth type orderable
 */
export enum DedicatedserverBandwidthOrderType {
  PLATINUM = 'platinum',
  PREMIUM = 'premium',
  ULTIMATE = 'ultimate'
}

/*
 *  Different vRack Bandwidth orderable in Mbps
 */
export type DedicatedserverBandwidthvRackOrder = 1000 | 3000

/*
 * Firewall model name
 */
export enum DedicatedserverFirewallModel {
  ASA5505 = 'asa5505',
  ASA5510 = 'asa5510',
  ASA5520 = 'asa5520'
}

/*
 * IP block size
 */
export type DedicatedserverIpBlockSize = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8

/*
 * Available localization for this static IP
 */
export enum DedicatedserverIpCountry {
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

/*
 * Available localization for this static IP
 */
export enum DedicatedserverIpStaticCountry {
  BE = 'be',
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
  UK = 'uk'
}

/*
 * Orderable IP type
 */
export enum DedicatedserverIpTypeOrderable {
  FAILOVER = 'failover',
  STATIC = 'static',
  UNSHIELDED = 'unshielded'
}

/*
 * Dedicated server orderable features
 */
export enum DedicatedserverOrderableSysFeature {
  BACKUPPROTOCOL = 'backupProtocol',
  MONITORING = 'monitoring'
}

/*
 * distincts support level
 */
export enum DedicatedserverSupportLevelOrderable {
  CRITICAL = 'critical',
  FASTPATH = 'fastpath',
  GS = 'gs'
}

/*
 *  traffic orderable 
 */
export type DedicatedserverTrafficOrder = '100Mbps-Unlimited' | '250Mbps-Unlimited' | '500Mbps-Unlimited'

/*
 *  Different USB key capacity in gigabytes
 */
export type DedicatedserverUsbKeyCapacity = 128 | 16 | 256 | 32 | 64

/*
 * All available additional bandwidth amounts in Mbps
 */
export type DedicatedCloudAdditionalBandwidth = '1500'

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

/*
 * All orderable IP Block ranges in your Dedicated Cloud
 */
export type DedicatedCloudOrderableIpBlockRange = '24' | '25' | '26' | '27' | '28'

/*
 * The Dedicated Cloud ressource types that can be upgraded
 */
export enum DedicatedCloudressourcesUpgradeRessourceType {
  ACCOUNT = 'account',
  ALL = 'all',
  FILER = 'filer',
  HOST = 'host'
}

/*
 * The available billing type upgrade for Dedicated Cloud ressource
 */
export enum DedicatedCloudressourcesUpgradeType {
  DEMOTOMONTHLY = 'demoToMonthly',
  FREESPARETOHOURLY = 'freeSpareToHourly',
  HOURLYTOMONTHLY = 'hourlyToMonthly'
}

/*
 * Mx plan offers
 */
export type EmaildomainOffer = '100' | '25' | '5' | 'FULL'

/*
 * Storage quota options in GB
 */
export type EmailexchangeaccountQuota = 300 | 50

/*
 * Outlook version
 */
export enum EmailexchangeOutlookVersion {
  MAC_X86_2011 = 'mac_x86_2011',
  MAC_X86_2016 = 'mac_x86_2016',
  WINDOWS_X64_2013 = 'windows_x64_2013',
  WINDOWS_X64_2016 = 'windows_x64_2016',
  WINDOWS_X86_2013 = 'windows_x86_2013',
  WINDOWS_X86_2016 = 'windows_x86_2016'
}

/*
 * OVH licence account
 */
export enum EmailexchangeOvhLicence {
  BASIC = 'basic',
  ENTERPRISE = 'enterprise',
  STANDARD = 'standard'
}

/*
 * Available quantity of fax to purchase
 */
export type FreefaxQuantity = 10 | 100 | 1000 | 10000 | 100000 | 200 | 2000 | 50 | 500 | 5000

/*
 * Private database available ram sizes
 */
export type HostingPrivateDatabaseAvailableRamSize = '1024' | '2048' | '4096' | '512'

/*
 * Available datacenters
 */
export enum HostingPrivateDatabaseDatacenter {
  GRA1 = 'gra1',
  GRA2 = 'gra2',
  P19 = 'p19'
}

/*
 * Available offers
 */
export enum HostingPrivateDatabaseOffer {
  CLASSIC = 'classic',
  PUBLIC = 'public'
}

/*
 * Private database orderable versions
 */
export enum HostingPrivateDatabaseOrderableVersion {
  MARIADB_10_1 = 'mariadb_10.1',
  MARIADB_10_2 = 'mariadb_10.2',
  MONGODB_3_4 = 'mongodb_3.4',
  MONGODB_4_0 = 'mongodb_4.0',
  MYSQL_5_5 = 'mysql_5.5',
  MYSQL_5_6 = 'mysql_5.6',
  MYSQL_5_7 = 'mysql_5.7',
  POSTGRESQL_10 = 'postgresql_10',
  POSTGRESQL_11 = 'postgresql_11',
  POSTGRESQL_9_4 = 'postgresql_9.4',
  POSTGRESQL_9_5 = 'postgresql_9.5',
  POSTGRESQL_9_6 = 'postgresql_9.6',
  REDIS_3_2 = 'redis_3.2',
  REDIS_4_0 = 'redis_4.0'
}

/*
 * Available offers to increase bandwidth quota (unit in GB)
 */
export type HostingwebBandwidthOffer = 10 | 100 | 1000 | 10000 | 20 | 250 | 30 | 40 | 50 | 500

/**
 * Struct which describs an offer
 */
export interface HostingwebCapabilities {
  attachedDomains: number
  crontab: boolean
  databaseEngines: number
  databases: HostingwebdatabaseCreationDatabaseCapabilities[]
  disk?: HostingwebDiskType
  emails: HostingwebCreationEmailCapabilities
  envVars: number
  extraUsers: number
  filesBrowser: boolean
  highlight?: HostingwebHighLight
  languages: HostingwebCronLanguageAvailable
  moduleOneClick: boolean
  privateDatabases: HostingwebdatabaseCreationDatabaseCapabilities[]
  runtimes: number
  sitesRecommended?: number
  ssh: boolean
  traffic?: any
}

/*
 * Hosting's CDN offer
 */
export enum HostingwebCdnOffer {
  CDN_BUSINESS = 'CDN_BUSINESS',
  CDN_BUSINESS_FREE = 'CDN_BUSINESS_FREE'
}

/**
 * Struct which describes mail offer available and his quota
 */
export interface HostingwebCreationEmailCapabilities {
  available: number
  quota: any
}

/**
 * Language available for cron script
 */
export interface HostingwebCronLanguageAvailable {
  nodejs: HostingwebNodejsVersionAvailableEnum[]
  php: HostingwebPhpVersionAvailableEnum[]
  python: HostingwebPythonVersionAvailableEnum[]
  ruby: HostingwebRubyVersionAvailableEnum[]
}

/**
 * Struct which describs quota and available for a specific type of database
 */
export interface HostingwebdatabaseCreationDatabaseCapabilities {
  available: number
  engines: HostingwebdatabaseDatabaseTypeEnum[]
  isolation: HostingwebdatabaseDatabaseIsolation
  quota: any
  type: HostingwebdatabaseDatabaseCapabilitiesType
}

/*
 * Database capabitities type enum
 */
export enum HostingwebdatabaseDatabaseCapabilitiesType {
  EXTRASQLPERSO = 'extraSqlPerso',
  LOCAL = 'local',
  PRIVATEDATABASE = 'privateDatabase',
  SQLLOCAL = 'sqlLocal',
  SQLPERSO = 'sqlPerso',
  SQLPRO = 'sqlPro'
}

/*
 * Database Isolation enum
 */
export enum HostingwebdatabaseDatabaseIsolation {
  DEDICATED = 'dedicated',
  LOCAL = 'local',
  SHARED = 'shared'
}

/*
 * Database Type enum
 */
export enum HostingwebdatabaseDatabaseType {
  MARIADB = 'mariadb',
  MONGODB = 'mongodb',
  MYSQL = 'mysql',
  POSTGRESQL = 'postgresql',
  REDIS = 'redis'
}

/*
 * Sql perso's offer enum
 */
export enum HostingwebdatabaseSqlPersoOffer {
  SQLPERSO_1_BASES_400_MB = 'SQLPERSO_1_BASES_400_MB',
  SQLPERSO_1_BASES_800_MB = 'SQLPERSO_1_BASES_800_MB',
  SQLPERSO_20_BASES_100_MB = 'SQLPERSO_20_BASES_100_MB',
  SQLPERSO_20_BASES_200_MB = 'SQLPERSO_20_BASES_200_MB',
  SQLPERSO_2_BASES_400_MB = 'SQLPERSO_2_BASES_400_MB',
  SQLPERSO_2_BASES_800_MB = 'SQLPERSO_2_BASES_800_MB',
  SQLPERSO_50_BASES_100_MB = 'SQLPERSO_50_BASES_100_MB',
  SQLPERSO_50_BASES_200_MB = 'SQLPERSO_50_BASES_200_MB',
  SQLPERSO_5_BASES_100_MB = 'SQLPERSO_5_BASES_100_MB',
  SQLPERSO_5_BASES_200_MB = 'SQLPERSO_5_BASES_200_MB',
  SQLPERSO_5_BASES_400_MB = 'SQLPERSO_5_BASES_400_MB',
  SQLPERSO_5_BASES_800_MB = 'SQLPERSO_5_BASES_800_MB'
}

/**
 * Disk properties (size and type of disk)
 */
export interface HostingwebDiskType {
  type: HostingwebDiskType
  unit: string
  value: any
}

/*
 * Disk type available
 */
export enum HostingwebDiskType {
  HDD = 'HDD',
  SSD = 'SSD'
}

/*
 * Dns zone modification possibilities when installing a new hosting
 */
export enum HostingwebDnsZone {
  NO_CHANGE = 'NO_CHANGE',
  RESET_ALL = 'RESET_ALL',
  RESET_ONLY_A = 'RESET_ONLY_A',
  RESET_ONLY_MX = 'RESET_ONLY_MX'
}

/*
 * Highlight tips for offer
 */
export enum HostingwebHighLight {
  BEST_SELLER = 'best-seller',
  NEW = 'new'
}

/*
 * Module's name orderable when order a new hosting
 */
export enum HostingwebmoduleOrderableName {
  DRUPAL = 'DRUPAL',
  JOOMLA = 'JOOMLA',
  PRESTASHOP = 'PRESTASHOP',
  WORDPRESS = 'WORDPRESS'
}

/*
 * Different NodeJs versions available
 */
export enum HostingwebNodejsVersionAvailable {
  NODEJS_10 = 'nodejs-10',
  NODEJS_11 = 'nodejs-11',
  NODEJS_8 = 'nodejs-8',
  NODEJS_9 = 'nodejs-9'
}

/*
 * Hosting's offer
 */
export enum HostingwebOffer {
  CLOUDWEB_1 = 'CLOUDWEB_1',
  CLOUDWEB_2 = 'CLOUDWEB_2',
  CLOUDWEB_3 = 'CLOUDWEB_3',
  KS = 'KS',
  PERFORMANCE_1 = 'PERFORMANCE_1',
  PERFORMANCE_2 = 'PERFORMANCE_2',
  PERFORMANCE_3 = 'PERFORMANCE_3',
  PERFORMANCE_4 = 'PERFORMANCE_4',
  PERSO = 'PERSO',
  PRO = 'PRO',
  START = 'START'
}

/*
 * MX plan linked to the new main domain
 */
export type HostingweborderMxPlan = '005' | '025' | '100' | 'delete' | 'full'

/*
 * Different PHP versions available
 */
export enum HostingwebPhpVersionAvailable {
  PHPFPM_5_6 = 'phpfpm-5.6',
  PHPFPM_7_0 = 'phpfpm-7.0',
  PHPFPM_7_1 = 'phpfpm-7.1',
  PHPFPM_7_2 = 'phpfpm-7.2',
  PHPFPM_7_3 = 'phpfpm-7.3'
}

/*
 * Different Python versions available
 */
export enum HostingwebPythonVersionAvailable {
  PYTHON_2 = 'python-2',
  PYTHON_3 = 'python-3'
}

/*
 * Different Ruby versions available
 */
export enum HostingwebRubyVersionAvailable {
  RUBY_2_4 = 'ruby-2.4',
  RUBY_2_5 = 'ruby-2.5',
  RUBY_2_6 = 'ruby-2.6'
}

/*
 * All versions for CloudLinux product
 */
export enum LicenseCloudLinuxVersion {
  SINGLE = 'SINGLE',
  WITH_CPANEL = 'WITH_CPANEL',
  WITH_PLESK12 = 'WITH_PLESK12',
  CLOUDLINUX_LICENSE = 'cloudlinux-license'
}

/*
 * Possible values for license type
 */
export enum LicenseLicenseType {
  DEDICATED = 'dedicated',
  DEDICATEDCLOUD = 'dedicatedCloud',
  DEDICATEDFAILOVER = 'dedicatedFailover',
  FAILOVER = 'failover',
  VM = 'vm',
  VPS = 'vps',
  VPS_CEPH = 'vps_ceph',
  VPS_CLASSIC = 'vps_classic',
  VPS_CLOUD = 'vps_cloud',
  VPS_CLOUD_2016 = 'vps_cloud_2016',
  VPS_SSD = 'vps_ssd'
}

/*
 * All antispam available for Plesk products
 */
export enum LicenseOrderableAntispam {
  SPAM_ASSASSIN = 'SPAM_ASSASSIN'
}

/*
 * All antivirus available for Plesk products
 */
export enum LicenseOrderableAntivirus {
  DR_WEB = 'DR_WEB',
  KASPERSKY_UNLIMITED_MAILBOXES = 'KASPERSKY_UNLIMITED_MAILBOXES',
  KASPERSKY = 'kaspersky'
}

/*
 * All versions available for Cpanel products
 */
export enum LicenseOrderableCpanelVersion {
  VERSION_11_FOR_LINUX = 'VERSION_11_FOR_LINUX',
  VERSION_11_FOR_VIRTUOZZO = 'VERSION_11_FOR_VIRTUOZZO',
  VERSION_11_FOR_VPS = 'VERSION_11_FOR_VPS',
  CPANEL_LICENSE_VERSION_11 = 'cpanel-license-version-11',
  CPANEL_LICENSE_VERSION_11_FOR_VIRTUOZZO = 'cpanel-license-version-11-for-virtuozzo',
  CPANEL_LICENSE_VERSION_11_FOR_VPS = 'cpanel-license-version-11-for-vps'
}

/*
 * All versions available for DirectAdmin products
 */
export enum LicenseOrderableDirectAdminVersion {
  DIRECTADMIN_1 = 'DIRECTADMIN_1',
  DIRECTADMIN_LICENSE = 'directadmin-license'
}

/*
 * All domain available for Plesk products
 */
export type LicenseOrderablePleskDomainNumber = '10' | '100' | '30' | '300' | 'hostingsuite' | 'unlimited'

/*
 * All language pack numbers available for Plesk products
 */
export type LicenseOrderablePleskLanguagePack = '1' | '1-extra-language-for-plesk12' | '2' | '2-extra-languages-for-plesk12' | '3' | '3-extra-languages-for-plesk12' | '4' | '4-extra-languages-for-plesk12' | '5' | '5-extra-languages-for-plesk12' | 'unlimited' | 'unlimited-extra-languages-for-plesk12'

/*
 * All quantities of container available for a Virtuozzo license
 */
export type LicenseOrderableVirtuozzoContainerNumber = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER'

/*
 * All versions available for Virtuozzo products
 */
export enum LicenseOrderableVirtuozzoVersion {
  VIRTUOZZO_CONTAINERS_4_FOR_LINUX = 'VIRTUOZZO_CONTAINERS_4_FOR_LINUX',
  VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS = 'VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS',
  VIRTUOZZO_4 = 'virtuozzo-4',
  VIRTUOZZO_4_FOR_WINDOWS = 'virtuozzo-4-for-windows'
}

/*
 * Application set available for Plesk products
 */
export enum LicensePleskApplicationSet {
  APPLICATIONPACK = 'applicationpack',
  DEVELOPERPACK = 'developerpack',
  POWER_PACK_FOR_PLESK12 = 'power-pack-for-plesk12',
  POWERPACK = 'powerpack'
}

/*
 * All versions available for Plesk products
 */
export enum LicensePleskVersion {
  PLESK_10_AND_LATER = 'PLESK_10_AND_LATER',
  PLESK_10_AND_LATER_FOR_KVM = 'PLESK_10_AND_LATER_FOR_KVM',
  PLESK_10_AND_LATER_FOR_VMWARE = 'PLESK_10_AND_LATER_FOR_VMWARE',
  PLESK_10_AND_LATER_FOR_VZ = 'PLESK_10_AND_LATER_FOR_VZ',
  PLESK_10_AND_LATER_FOR_WIN = 'PLESK_10_AND_LATER_FOR_WIN',
  PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE = 'PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE',
  PLESK_10_AND_LATER_FOR_WIN_FOR_VZ = 'PLESK_10_AND_LATER_FOR_WIN_FOR_VZ',
  PLESK_10_AND_LATER_FOR_WIN_FOR_XEN = 'PLESK_10_AND_LATER_FOR_WIN_FOR_XEN',
  PLESK_10_AND_LATER_FOR_XEN = 'PLESK_10_AND_LATER_FOR_XEN',
  PLESK_12_VPS_WEB_ADMIN = 'PLESK_12_VPS_WEB_ADMIN',
  PLESK_12_VPS_WEB_APP = 'PLESK_12_VPS_WEB_APP',
  PLESK_12_VPS_WEB_HOST = 'PLESK_12_VPS_WEB_HOST',
  PLESK_12_VPS_WEB_HOST_CLNX = 'PLESK_12_VPS_WEB_HOST_CLNX',
  PLESK_12_VPS_WEB_PRO = 'PLESK_12_VPS_WEB_PRO',
  PLESK_12_VPS_WEB_PRO_CLNX = 'PLESK_12_VPS_WEB_PRO_CLNX',
  PLESK_12_WEB_ADMIN = 'PLESK_12_WEB_ADMIN',
  PLESK_12_WEB_APP = 'PLESK_12_WEB_APP',
  PLESK_12_WEB_HOST = 'PLESK_12_WEB_HOST',
  PLESK_12_WEB_HOST_CLNX = 'PLESK_12_WEB_HOST_CLNX',
  PLESK_12_WEB_PRO = 'PLESK_12_WEB_PRO',
  PLESK_12_WEB_PRO_CLNX = 'PLESK_12_WEB_PRO_CLNX',
  PLESK_75_RELOADED = 'PLESK_75_RELOADED',
  PLESK_80 = 'PLESK_80',
  PLESK_80_FOR_VZ = 'PLESK_80_FOR_VZ',
  PLESK_81_FOR_WIN = 'PLESK_81_FOR_WIN',
  PLESK_9 = 'PLESK_9',
  PLESK_95 = 'PLESK_95',
  PLESK_95_FOR_VZ = 'PLESK_95_FOR_VZ',
  PLESK_95_FOR_WIN = 'PLESK_95_FOR_WIN',
  PLESK_9_FOR_VZ = 'PLESK_9_FOR_VZ',
  PLESK_9_FOR_WIN = 'PLESK_9_FOR_WIN',
  PLESK_ONYX_VPS_WEB_ADMIN = 'PLESK_ONYX_VPS_WEB_ADMIN',
  PLESK_ONYX_VPS_WEB_APP = 'PLESK_ONYX_VPS_WEB_APP',
  PLESK_ONYX_VPS_WEB_HOST = 'PLESK_ONYX_VPS_WEB_HOST',
  PLESK_ONYX_VPS_WEB_HOST_CLNX = 'PLESK_ONYX_VPS_WEB_HOST_CLNX',
  PLESK_ONYX_VPS_WEB_PRO = 'PLESK_ONYX_VPS_WEB_PRO',
  PLESK_ONYX_VPS_WEB_PRO_CLNX = 'PLESK_ONYX_VPS_WEB_PRO_CLNX',
  PLESK_ONYX_WEB_ADMIN = 'PLESK_ONYX_WEB_ADMIN',
  PLESK_ONYX_WEB_APP = 'PLESK_ONYX_WEB_APP',
  PLESK_ONYX_WEB_HOST = 'PLESK_ONYX_WEB_HOST',
  PLESK_ONYX_WEB_HOST_CLNX = 'PLESK_ONYX_WEB_HOST_CLNX',
  PLESK_ONYX_WEB_PRO = 'PLESK_ONYX_WEB_PRO',
  PLESK_ONYX_WEB_PRO_CLNX = 'PLESK_ONYX_WEB_PRO_CLNX',
  PLESK_12_WEBADMIN_FOR_VPS = 'plesk-12-webadmin-for-vps',
  PLESK_12_WEBHOST = 'plesk-12-webhost',
  PLESK_12_WEBHOST_FOR_VPS = 'plesk-12-webhost-for-vps',
  PLESK_12_WEBPRO = 'plesk-12-webpro',
  PLESK_12_WEBPRO_FOR_VPS = 'plesk-12-webpro-for-vps'
}

/*
 * All versions for SQL Server product
 */
export enum LicenseSqlServerVersion {
  SQL_SERVER_2008_STANDARD_EDITION_2_CPU = 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU',
  SQL_SERVER_2008_STANDARD_EDITION_4_CPU = 'SQL_SERVER_2008_STANDARD_EDITION_4_CPU',
  SQL_SERVER_2008_WEB_EDITION_2_CPU = 'SQL_SERVER_2008_WEB_EDITION_2_CPU',
  SQL_SERVER_2008_WEB_EDITION_4_CPU = 'SQL_SERVER_2008_WEB_EDITION_4_CPU',
  SQL_SERVER_2012_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_18_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_20_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_24_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_2_CPU = 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU',
  SQL_SERVER_2012_STANDARD_EDITION_32_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2012_WEB_EDITION_10_CORES = 'SQL_SERVER_2012_WEB_EDITION_10_CORES',
  SQL_SERVER_2012_WEB_EDITION_12_CORES = 'SQL_SERVER_2012_WEB_EDITION_12_CORES',
  SQL_SERVER_2012_WEB_EDITION_16_CORES = 'SQL_SERVER_2012_WEB_EDITION_16_CORES',
  SQL_SERVER_2012_WEB_EDITION_18_CORES = 'SQL_SERVER_2012_WEB_EDITION_18_CORES',
  SQL_SERVER_2012_WEB_EDITION_20_CORES = 'SQL_SERVER_2012_WEB_EDITION_20_CORES',
  SQL_SERVER_2012_WEB_EDITION_24_CORES = 'SQL_SERVER_2012_WEB_EDITION_24_CORES',
  SQL_SERVER_2012_WEB_EDITION_32_CORES = 'SQL_SERVER_2012_WEB_EDITION_32_CORES',
  SQL_SERVER_2012_WEB_EDITION_4_CORES = 'SQL_SERVER_2012_WEB_EDITION_4_CORES',
  SQL_SERVER_2012_WEB_EDITION_6_CORES = 'SQL_SERVER_2012_WEB_EDITION_6_CORES',
  SQL_SERVER_2012_WEB_EDITION_8_CORES = 'SQL_SERVER_2012_WEB_EDITION_8_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_18_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_18_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_20_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_20_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_24_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_24_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2014_WEB_EDITION_10_CORES = 'SQL_SERVER_2014_WEB_EDITION_10_CORES',
  SQL_SERVER_2014_WEB_EDITION_12_CORES = 'SQL_SERVER_2014_WEB_EDITION_12_CORES',
  SQL_SERVER_2014_WEB_EDITION_16_CORES = 'SQL_SERVER_2014_WEB_EDITION_16_CORES',
  SQL_SERVER_2014_WEB_EDITION_18_CORES = 'SQL_SERVER_2014_WEB_EDITION_18_CORES',
  SQL_SERVER_2014_WEB_EDITION_20_CORES = 'SQL_SERVER_2014_WEB_EDITION_20_CORES',
  SQL_SERVER_2014_WEB_EDITION_24_CORES = 'SQL_SERVER_2014_WEB_EDITION_24_CORES',
  SQL_SERVER_2014_WEB_EDITION_4_CORES = 'SQL_SERVER_2014_WEB_EDITION_4_CORES',
  SQL_SERVER_2014_WEB_EDITION_6_CORES = 'SQL_SERVER_2014_WEB_EDITION_6_CORES',
  SQL_SERVER_2014_WEB_EDITION_8_CORES = 'SQL_SERVER_2014_WEB_EDITION_8_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_14_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_14_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2016_WEB_EDITION_10_CORES = 'SQL_SERVER_2016_WEB_EDITION_10_CORES',
  SQL_SERVER_2016_WEB_EDITION_12_CORES = 'SQL_SERVER_2016_WEB_EDITION_12_CORES',
  SQL_SERVER_2016_WEB_EDITION_14_CORES = 'SQL_SERVER_2016_WEB_EDITION_14_CORES',
  SQL_SERVER_2016_WEB_EDITION_16_CORES = 'SQL_SERVER_2016_WEB_EDITION_16_CORES',
  SQL_SERVER_2016_WEB_EDITION_4_CORES = 'SQL_SERVER_2016_WEB_EDITION_4_CORES',
  SQL_SERVER_2016_WEB_EDITION_6_CORES = 'SQL_SERVER_2016_WEB_EDITION_6_CORES',
  SQL_SERVER_2016_WEB_EDITION_8_CORES = 'SQL_SERVER_2016_WEB_EDITION_8_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_14_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_14_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_18_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_18_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_20_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_20_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_22_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_22_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_24_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_24_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_26_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_26_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_28_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_28_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_30_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_30_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_32_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_32_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2017_WEB_EDITION_10_CORES = 'SQL_SERVER_2017_WEB_EDITION_10_CORES',
  SQL_SERVER_2017_WEB_EDITION_12_CORES = 'SQL_SERVER_2017_WEB_EDITION_12_CORES',
  SQL_SERVER_2017_WEB_EDITION_14_CORES = 'SQL_SERVER_2017_WEB_EDITION_14_CORES',
  SQL_SERVER_2017_WEB_EDITION_16_CORES = 'SQL_SERVER_2017_WEB_EDITION_16_CORES',
  SQL_SERVER_2017_WEB_EDITION_18_CORES = 'SQL_SERVER_2017_WEB_EDITION_18_CORES',
  SQL_SERVER_2017_WEB_EDITION_20_CORES = 'SQL_SERVER_2017_WEB_EDITION_20_CORES',
  SQL_SERVER_2017_WEB_EDITION_22_CORES = 'SQL_SERVER_2017_WEB_EDITION_22_CORES',
  SQL_SERVER_2017_WEB_EDITION_24_CORES = 'SQL_SERVER_2017_WEB_EDITION_24_CORES',
  SQL_SERVER_2017_WEB_EDITION_26_CORES = 'SQL_SERVER_2017_WEB_EDITION_26_CORES',
  SQL_SERVER_2017_WEB_EDITION_28_CORES = 'SQL_SERVER_2017_WEB_EDITION_28_CORES',
  SQL_SERVER_2017_WEB_EDITION_30_CORES = 'SQL_SERVER_2017_WEB_EDITION_30_CORES',
  SQL_SERVER_2017_WEB_EDITION_32_CORES = 'SQL_SERVER_2017_WEB_EDITION_32_CORES',
  SQL_SERVER_2017_WEB_EDITION_4_CORES = 'SQL_SERVER_2017_WEB_EDITION_4_CORES',
  SQL_SERVER_2017_WEB_EDITION_6_CORES = 'SQL_SERVER_2017_WEB_EDITION_6_CORES',
  SQL_SERVER_2017_WEB_EDITION_8_CORES = 'SQL_SERVER_2017_WEB_EDITION_8_CORES',
  SQL_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU = 'sql-server-2008-license-standard-edition-2-cpu',
  SQL_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU = 'sql-server-2008-license-standard-edition-4-cpu',
  SQL_SERVER_2008_LICENSE_WEB_EDITION_2_CPU = 'sql-server-2008-license-web-edition-2-cpu',
  SQL_SERVER_2008_LICENSE_WEB_EDITION_4_CPU = 'sql-server-2008-license-web-edition-4-cpu',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2012-license-standard-edition-10-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2012-license-standard-edition-12-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2012-license-standard-edition-16-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_18_CORES = 'sql-server-2012-license-standard-edition-18-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU = 'sql-server-2012-license-standard-edition-2-cpu',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_20_CORES = 'sql-server-2012-license-standard-edition-20-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_24_CORES = 'sql-server-2012-license-standard-edition-24-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_32_CORES = 'sql-server-2012-license-standard-edition-32-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2012-license-standard-edition-4-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2012-license-standard-edition-6-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2012-license-standard-edition-8-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2012-license-web-edition-10-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2012-license-web-edition-12-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2012-license-web-edition-16-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_18_CORES = 'sql-server-2012-license-web-edition-18-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_20_CORES = 'sql-server-2012-license-web-edition-20-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_24_CORES = 'sql-server-2012-license-web-edition-24-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_32_CORES = 'sql-server-2012-license-web-edition-32-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2012-license-web-edition-4-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2012-license-web-edition-6-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2012-license-web-edition-8-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2014-license-standard-edition-10-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2014-license-standard-edition-12-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2014-license-standard-edition-16-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_18_CORES = 'sql-server-2014-license-standard-edition-18-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_20_CORES = 'sql-server-2014-license-standard-edition-20-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_24_CORES = 'sql-server-2014-license-standard-edition-24-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2014-license-standard-edition-4-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2014-license-standard-edition-6-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2014-license-standard-edition-8-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2014-license-web-edition-10-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2014-license-web-edition-12-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2014-license-web-edition-16-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_18_CORES = 'sql-server-2014-license-web-edition-18-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_20_CORES = 'sql-server-2014-license-web-edition-20-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_24_CORES = 'sql-server-2014-license-web-edition-24-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2014-license-web-edition-4-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2014-license-web-edition-6-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2014-license-web-edition-8-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2016-license-standard-edition-10-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2016-license-standard-edition-12-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_14_CORES = 'sql-server-2016-license-standard-edition-14-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2016-license-standard-edition-16-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2016-license-standard-edition-4-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2016-license-standard-edition-6-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2016-license-standard-edition-8-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2016-license-web-edition-10-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2016-license-web-edition-12-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_14_CORES = 'sql-server-2016-license-web-edition-14-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2016-license-web-edition-16-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2016-license-web-edition-4-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2016-license-web-edition-6-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2016-license-web-edition-8-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2017-license-standard-edition-10-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2017-license-standard-edition-12-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_14_CORES = 'sql-server-2017-license-standard-edition-14-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2017-license-standard-edition-16-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_18_CORES = 'sql-server-2017-license-standard-edition-18-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_20_CORES = 'sql-server-2017-license-standard-edition-20-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_22_CORES = 'sql-server-2017-license-standard-edition-22-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_24_CORES = 'sql-server-2017-license-standard-edition-24-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_26_CORES = 'sql-server-2017-license-standard-edition-26-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_28_CORES = 'sql-server-2017-license-standard-edition-28-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_30_CORES = 'sql-server-2017-license-standard-edition-30-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_32_CORES = 'sql-server-2017-license-standard-edition-32-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2017-license-standard-edition-4-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2017-license-standard-edition-6-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2017-license-standard-edition-8-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2017-license-web-edition-10-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2017-license-web-edition-12-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_14_CORES = 'sql-server-2017-license-web-edition-14-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2017-license-web-edition-16-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_18_CORES = 'sql-server-2017-license-web-edition-18-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_20_CORES = 'sql-server-2017-license-web-edition-20-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_22_CORES = 'sql-server-2017-license-web-edition-22-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_24_CORES = 'sql-server-2017-license-web-edition-24-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_26_CORES = 'sql-server-2017-license-web-edition-26-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_28_CORES = 'sql-server-2017-license-web-edition-28-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_30_CORES = 'sql-server-2017-license-web-edition-30-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_32_CORES = 'sql-server-2017-license-web-edition-32-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2017-license-web-edition-4-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2017-license-web-edition-6-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2017-license-web-edition-8-cores'
}

/*
 * All versions for Windows products
 */
export enum LicenseWindowsOsVersion {
  WINDOWS_SERVER_2003_ENTERPRISE_EDITION = 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION',
  WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU = 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU',
  WINDOWS_SERVER_2003_STANDARD_EDITION = 'WINDOWS_SERVER_2003_STANDARD_EDITION',
  WINDOWS_SERVER_2003_WEB_EDITION = 'WINDOWS_SERVER_2003_WEB_EDITION',
  WINDOWS_SERVER_2003_WEB_EDITION_2_CPU = 'WINDOWS_SERVER_2003_WEB_EDITION_2_CPU',
  WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION = 'WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION',
  WINDOWS_SERVER_2003_WEB_STANDARD_EDITION = 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION',
  WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU = 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU',
  WINDOWS_SERVER_2008_DATACENTER_EDITION = 'WINDOWS_SERVER_2008_DATACENTER_EDITION',
  WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU = 'WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU',
  WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU = 'WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU',
  WINDOWS_SERVER_2008_ENTERPRISE_EDITION = 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION',
  WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU = 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU',
  WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU = 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU',
  WINDOWS_SERVER_2008_STANDARD_EDITION = 'WINDOWS_SERVER_2008_STANDARD_EDITION',
  WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU = 'WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU',
  WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU = 'WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU',
  WINDOWS_SERVER_2008_WEB_EDITION = 'WINDOWS_SERVER_2008_WEB_EDITION',
  WINDOWS_SERVER_2008_WEB_EDITION_2_CPU = 'WINDOWS_SERVER_2008_WEB_EDITION_2_CPU',
  WINDOWS_SERVER_2008_WEB_EDITION_4_CPU = 'WINDOWS_SERVER_2008_WEB_EDITION_4_CPU',
  WINDOWS_SERVER_2008_WEB_STANDARD_EDITION = 'WINDOWS_SERVER_2008_WEB_STANDARD_EDITION',
  WINDOWS_SERVER_2012_DATACENTER_EDITION = 'WINDOWS_SERVER_2012_DATACENTER_EDITION',
  WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU = 'WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU',
  WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU = 'WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU',
  WINDOWS_SERVER_2012_ENTERPRISE_EDITION = 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION',
  WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU = 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU',
  WINDOWS_SERVER_2012_STANDARD_EDITION = 'WINDOWS_SERVER_2012_STANDARD_EDITION',
  WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU = 'WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU',
  WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU = 'WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU',
  WINDOWS_SERVER_2012_WEB_EDITION = 'WINDOWS_SERVER_2012_WEB_EDITION',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES',
  WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES = 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES',
  WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES = 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES',
  WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES = 'WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES',
  WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES = 'WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES',
  WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_1_CPU = 'windows-server-2008-license-datacenter-edition-1-cpu',
  WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_2_CPU = 'windows-server-2008-license-datacenter-edition-2-cpu',
  WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_4_CPU = 'windows-server-2008-license-datacenter-edition-4-cpu',
  WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_1_CPU = 'windows-server-2008-license-enterprise-edition-1-cpu',
  WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_2_CPU = 'windows-server-2008-license-enterprise-edition-2-cpu',
  WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_4_CPU = 'windows-server-2008-license-enterprise-edition-4-cpu',
  WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_1_CPU = 'windows-server-2008-license-standard-edition-1-cpu',
  WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU = 'windows-server-2008-license-standard-edition-2-cpu',
  WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU = 'windows-server-2008-license-standard-edition-4-cpu',
  WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_1_CPU = 'windows-server-2008-license-web-edition-1-cpu',
  WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_2_CPU = 'windows-server-2008-license-web-edition-2-cpu',
  WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_4_CPU = 'windows-server-2008-license-web-edition-4-cpu',
  WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_1_CPU = 'windows-server-2012-license-datacenter-edition-1-cpu',
  WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_2_CPU = 'windows-server-2012-license-datacenter-edition-2-cpu',
  WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_4_CPU = 'windows-server-2012-license-datacenter-edition-4-cpu',
  WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_1_CPU = 'windows-server-2012-license-standard-edition-1-cpu',
  WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU = 'windows-server-2012-license-standard-edition-2-cpu',
  WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_4_CPU = 'windows-server-2012-license-standard-edition-4-cpu',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_10_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-10-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_12_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-12-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_14_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-14-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_16_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-16-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_18_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-18-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_20_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-20-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_22_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-22-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_24_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-24-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_8_CORES = 'windows-server-2016-license-datacenter-edition-1-cpu-8-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_10_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-10-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_12_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-12-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_14_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-14-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_16_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-16-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_18_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-18-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_20_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-20-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_22_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-22-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_24_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-24-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_8_CORES = 'windows-server-2016-license-datacenter-edition-2-cpu-8-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_10_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-10-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_12_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-12-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_14_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-14-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_16_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-16-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_18_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-18-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_20_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-20-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_22_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-22-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_24_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-24-cores',
  WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_8_CORES = 'windows-server-2016-license-datacenter-edition-4-cpu-8-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_10_CORES = 'windows-server-2016-license-standard-edition-1-cpu-10-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_12_CORES = 'windows-server-2016-license-standard-edition-1-cpu-12-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_14_CORES = 'windows-server-2016-license-standard-edition-1-cpu-14-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_16_CORES = 'windows-server-2016-license-standard-edition-1-cpu-16-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_18_CORES = 'windows-server-2016-license-standard-edition-1-cpu-18-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_20_CORES = 'windows-server-2016-license-standard-edition-1-cpu-20-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_22_CORES = 'windows-server-2016-license-standard-edition-1-cpu-22-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_24_CORES = 'windows-server-2016-license-standard-edition-1-cpu-24-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_8_CORES = 'windows-server-2016-license-standard-edition-1-cpu-8-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_10_CORES = 'windows-server-2016-license-standard-edition-2-cpu-10-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_12_CORES = 'windows-server-2016-license-standard-edition-2-cpu-12-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_14_CORES = 'windows-server-2016-license-standard-edition-2-cpu-14-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_16_CORES = 'windows-server-2016-license-standard-edition-2-cpu-16-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_18_CORES = 'windows-server-2016-license-standard-edition-2-cpu-18-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_20_CORES = 'windows-server-2016-license-standard-edition-2-cpu-20-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_22_CORES = 'windows-server-2016-license-standard-edition-2-cpu-22-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_24_CORES = 'windows-server-2016-license-standard-edition-2-cpu-24-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_8_CORES = 'windows-server-2016-license-standard-edition-2-cpu-8-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_10_CORES = 'windows-server-2016-license-standard-edition-4-cpu-10-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_12_CORES = 'windows-server-2016-license-standard-edition-4-cpu-12-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_14_CORES = 'windows-server-2016-license-standard-edition-4-cpu-14-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_16_CORES = 'windows-server-2016-license-standard-edition-4-cpu-16-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_18_CORES = 'windows-server-2016-license-standard-edition-4-cpu-18-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_20_CORES = 'windows-server-2016-license-standard-edition-4-cpu-20-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_22_CORES = 'windows-server-2016-license-standard-edition-4-cpu-22-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_24_CORES = 'windows-server-2016-license-standard-edition-4-cpu-24-cores',
  WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_8_CORES = 'windows-server-2016-license-standard-edition-4-cpu-8-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_10_CORES = 'windows-server-2019-license-datacenter-edition-10-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_12_CORES = 'windows-server-2019-license-datacenter-edition-12-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_14_CORES = 'windows-server-2019-license-datacenter-edition-14-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_16_CORES = 'windows-server-2019-license-datacenter-edition-16-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_18_CORES = 'windows-server-2019-license-datacenter-edition-18-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_20_CORES = 'windows-server-2019-license-datacenter-edition-20-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_22_CORES = 'windows-server-2019-license-datacenter-edition-22-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_24_CORES = 'windows-server-2019-license-datacenter-edition-24-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_26_CORES = 'windows-server-2019-license-datacenter-edition-26-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_28_CORES = 'windows-server-2019-license-datacenter-edition-28-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_30_CORES = 'windows-server-2019-license-datacenter-edition-30-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_32_CORES = 'windows-server-2019-license-datacenter-edition-32-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_34_CORES = 'windows-server-2019-license-datacenter-edition-34-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_36_CORES = 'windows-server-2019-license-datacenter-edition-36-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_38_CORES = 'windows-server-2019-license-datacenter-edition-38-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_40_CORES = 'windows-server-2019-license-datacenter-edition-40-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_42_CORES = 'windows-server-2019-license-datacenter-edition-42-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_44_CORES = 'windows-server-2019-license-datacenter-edition-44-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_46_CORES = 'windows-server-2019-license-datacenter-edition-46-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_48_CORES = 'windows-server-2019-license-datacenter-edition-48-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_50_CORES = 'windows-server-2019-license-datacenter-edition-50-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_52_CORES = 'windows-server-2019-license-datacenter-edition-52-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_54_CORES = 'windows-server-2019-license-datacenter-edition-54-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_56_CORES = 'windows-server-2019-license-datacenter-edition-56-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_58_CORES = 'windows-server-2019-license-datacenter-edition-58-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_60_CORES = 'windows-server-2019-license-datacenter-edition-60-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_62_CORES = 'windows-server-2019-license-datacenter-edition-62-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_64_CORES = 'windows-server-2019-license-datacenter-edition-64-cores',
  WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_8_CORES = 'windows-server-2019-license-datacenter-edition-8-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_10_CORES = 'windows-server-2019-license-standard-edition-10-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_12_CORES = 'windows-server-2019-license-standard-edition-12-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_14_CORES = 'windows-server-2019-license-standard-edition-14-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_16_CORES = 'windows-server-2019-license-standard-edition-16-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_18_CORES = 'windows-server-2019-license-standard-edition-18-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_20_CORES = 'windows-server-2019-license-standard-edition-20-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_22_CORES = 'windows-server-2019-license-standard-edition-22-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_24_CORES = 'windows-server-2019-license-standard-edition-24-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_26_CORES = 'windows-server-2019-license-standard-edition-26-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_28_CORES = 'windows-server-2019-license-standard-edition-28-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_30_CORES = 'windows-server-2019-license-standard-edition-30-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_32_CORES = 'windows-server-2019-license-standard-edition-32-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_34_CORES = 'windows-server-2019-license-standard-edition-34-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_36_CORES = 'windows-server-2019-license-standard-edition-36-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_38_CORES = 'windows-server-2019-license-standard-edition-38-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_40_CORES = 'windows-server-2019-license-standard-edition-40-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_42_CORES = 'windows-server-2019-license-standard-edition-42-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_44_CORES = 'windows-server-2019-license-standard-edition-44-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_46_CORES = 'windows-server-2019-license-standard-edition-46-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_48_CORES = 'windows-server-2019-license-standard-edition-48-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_50_CORES = 'windows-server-2019-license-standard-edition-50-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_52_CORES = 'windows-server-2019-license-standard-edition-52-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_54_CORES = 'windows-server-2019-license-standard-edition-54-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_56_CORES = 'windows-server-2019-license-standard-edition-56-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_58_CORES = 'windows-server-2019-license-standard-edition-58-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_60_CORES = 'windows-server-2019-license-standard-edition-60-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_62_CORES = 'windows-server-2019-license-standard-edition-62-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_64_CORES = 'windows-server-2019-license-standard-edition-64-cores',
  WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_8_CORES = 'windows-server-2019-license-standard-edition-8-cores'
}

/*
 * All SQL Server versions for Windows products
 */
export enum LicenseWindowsSqlVersion {
  SQL_SERVER_2008_STANDARD_EDITION = 'SQL_SERVER_2008_STANDARD_EDITION',
  SQL_SERVER_2008_STANDARD_EDITION_2_CPU = 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU',
  SQL_SERVER_2008_WEB_EDITION = 'SQL_SERVER_2008_WEB_EDITION',
  SQL_SERVER_2008_WEB_EDITION_2_CPU = 'SQL_SERVER_2008_WEB_EDITION_2_CPU',
  SQL_SERVER_2012_STANDARD_EDITION = 'SQL_SERVER_2012_STANDARD_EDITION',
  SQL_SERVER_2012_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_18_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_20_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_24_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_2_CPU = 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU',
  SQL_SERVER_2012_STANDARD_EDITION_32_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2012_WEB_EDITION_12_CORES = 'SQL_SERVER_2012_WEB_EDITION_12_CORES',
  SQL_SERVER_2012_WEB_EDITION_16_CORES = 'SQL_SERVER_2012_WEB_EDITION_16_CORES',
  SQL_SERVER_2012_WEB_EDITION_18_CORES = 'SQL_SERVER_2012_WEB_EDITION_18_CORES',
  SQL_SERVER_2012_WEB_EDITION_20_CORES = 'SQL_SERVER_2012_WEB_EDITION_20_CORES',
  SQL_SERVER_2012_WEB_EDITION_24_CORES = 'SQL_SERVER_2012_WEB_EDITION_24_CORES',
  SQL_SERVER_2012_WEB_EDITION_32_CORES = 'SQL_SERVER_2012_WEB_EDITION_32_CORES',
  SQL_SERVER_2012_WEB_EDITION_4_CORES = 'SQL_SERVER_2012_WEB_EDITION_4_CORES',
  SQL_SERVER_2012_WEB_EDITION_6_CORES = 'SQL_SERVER_2012_WEB_EDITION_6_CORES',
  SQL_SERVER_2012_WEB_EDITION_8_CORES = 'SQL_SERVER_2012_WEB_EDITION_8_CORES'
}

/*
 * All versions for WorkLight product
 */
export enum LicenseWorkLightVersion {
  VERSION_6_1U_1CPU = 'VERSION-6.1U.1CPU',
  VERSION_6_1U_2CPU = 'VERSION-6.1U.2CPU',
  VERSION_6_2U_1CPU = 'VERSION-6.2U.1CPU',
  VERSION_6_2U_2CPU = 'VERSION-6.2U.2CPU',
  VERSION_6_EVALUATION = 'VERSION-6.EVALUATION',
  WORKLIGHT_LICENSE_VERSION_6_1CPU_1U = 'worklight-license-version-6-1cpu-1u',
  WORKLIGHT_LICENSE_VERSION_6_1CPU_2U = 'worklight-license-version-6-1cpu-2u',
  WORKLIGHT_LICENSE_VERSION_6_2CPU_1U = 'worklight-license-version-6-2cpu-1u',
  WORKLIGHT_LICENSE_VERSION_6_2CPU_2U = 'worklight-license-version-6-2cpu-2u'
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
 * Legal forms a nichandle can be registered as
 */
export enum NichandleLegalForm {
  ADMINISTRATION = 'administration',
  ASSOCIATION = 'association',
  CORPORATION = 'corporation',
  INDIVIDUAL = 'individual',
  OTHER = 'other',
  PERSONALCORPORATION = 'personalcorporation'
}

/*
 * OVH subsidiaries
 */
export enum NichandleOvhSubsidiary {
  CZ = 'CZ',
  DE = 'DE',
  ES = 'ES',
  EU = 'EU',
  FI = 'FI',
  FR = 'FR',
  GB = 'GB',
  IE = 'IE',
  IT = 'IT',
  LT = 'LT',
  MA = 'MA',
  NL = 'NL',
  PL = 'PL',
  PT = 'PT',
  SN = 'SN',
  TN = 'TN'
}

/**
 * A shopping cart
 */
export interface OrdercartCart {
  cartId: string
  description: string
  expire?: string
  items: number[]
  readOnly: boolean
}

export interface OrdercartCheckout {
  autoPayWithPreferredPaymentMethod: boolean
  waiveRetractationPeriod: boolean
}

/**
 * Representation of a configuration item for personalizing product
 */
export interface OrdercartConfigurationItem {
  id: number
  label: string
  value: string
}

/**
 * Information about a configuration
 */
export interface OrdercartConfigurationRequirements {
  fields?: string[]
  label: string
  required: boolean
  type: string
}

export interface OrdercartCouponCreation {
  coupon: string
}

export interface OrdercartCreation {
  description: string
  expire: string
  ovhSubsidiary: NichandleOvhSubsidiary
}

export interface OrdercartDomainPacksCreation {
  domain: string
  duration: string
  planCode: string
  pricingMode: string
  quantity: number
}

/**
 * Specific details about domain packs offer
 */
export interface OrdercartDomainPacksDescription {
  domains: OrdercartDomainPacksDescriptionItem[]
}

/**
 * Describe the eligibility of each domain in the packs
 */
export interface OrdercartDomainPacksDescriptionItem {
  available: boolean
  domain: string
}

/**
 * Information about a Domain Packs offer information
 */
export interface OrdercartDomainPacksProductInformation {
  description: OrdercartDomainPacksDescription
  planCode: string
  prices: OrdercartGenericProductPricing[]
}

/**
 * Representation of domain name order properties
 */
export interface OrdercartDomainSettings {
  domain: string
}

/*
 * Unit corresponding to a duration range
 */
export enum OrdercartDurationUnit {
  MONTH = 'month',
  DAY = 'day',
  NONE = 'none'
}

export interface OrdercartGenericDedicatedCreation {
  duration: any
  planCode: string
  pricingMode: string
  quantity: number
}

export interface OrdercartGenericDedicatedOptionsCreation {
  duration: any
  itemId: number
  planCode: string
  pricingMode: string
  quantity: number
}

export interface OrdercartGenericDomainCreation {
  domain: string
  duration?: any
  offerId?: string
  quantity?: number
}

export interface OrdercartGenericDomainOptionsCreation {
  duration: any
  itemId: number
  planCode: string
  pricingMode: string
  quantity: number
}

export interface OrdercartGenericOptionCreation {
  duration: any
  itemId: number
  planCode: string
  pricingMode: string
  quantity: number
}

/**
 * Representation of a generic product option
 */
export interface OrdercartGenericOptionDefinition {
  exclusive: boolean
  family: string
  mandatory: boolean
  planCode: string
  prices: OrdercartGenericProductPricing[]
  productName: string
  productType: OrdercartGenericProductType
}

export interface OrdercartGenericProductCreation {
  duration: any
  planCode: string
  pricingMode: string
  quantity: number
}

/**
 * Representation of a generic product
 */
export interface OrdercartGenericProductDefinition {
  planCode: string
  prices: OrdercartGenericProductPricing[]
  productName: string
  productType: OrdercartGenericProductType
}

/**
 * Representation of a product pricing
 */
export interface OrdercartGenericProductPricing {
  capacities: OrdercartGenericProductPricingCapacitiesEnum[]
  description: string
  duration: any
  interval: number
  maximumQuantity: number
  maximumRepeat?: number
  minimumQuantity: number
  minimumRepeat: number
  price: OrderPrice
  priceInUcents: number
  pricingMode: string
  pricingType: OrdercartGenericProductPricingType
}

/*
 * Capacity of a pricing (type)
 */
export enum OrdercartGenericProductPricingCapacities {
  INSTALLATION = 'installation',
  RENEW = 'renew',
  UPGRADE = 'upgrade',
  DOWNGRADE = 'downgrade'
}

/*
 * Strategy of a Pricing
 */
export enum OrdercartGenericProductPricingStrategy {
  STAIRSTEP = 'stairstep',
  VOLUME = 'volume',
  TIERED = 'tiered'
}

/*
 * Type of a pricing
 */
export enum OrdercartGenericProductPricingType {
  RENTAL = 'rental',
  CONSUMPTION = 'consumption',
  PURCHASE = 'purchase'
}

/*
 * Type of a product
 */
export enum OrdercartGenericProductType {
  DELIVERY = 'delivery',
  DEPOSIT = 'deposit',
  SHIPPING = 'shipping',
  CLOUD_SERVICE = 'cloud_service',
  SAAS_LICENSE = 'saas_license',
  STORAGE = 'storage',
  DOMAIN = 'domain'
}

/**
 * Representation of a cart item
 */
export interface OrdercartItem {
  cartId: string
  configurations?: number[]
  duration?: any
  itemId: number
  offerId: string
  options: number[]
  parentItemId?: number
  prices: OrdercartPrice[]
  productId: string
  settings: OrdercartDomainSettings
}

export interface OrdercartItemConfigurationCreation {
  label: string
  value: string
}

export interface OrdercartItemUpdate {
  duration: any
  quantity: number
}

/**
 * Price informations with label
 */
export interface OrdercartPrice {
  label: OrdercartPriceLabel
  price: OrderPrice
}

/*
 * Label corresponding to different type of price
 */
export enum OrdercartPriceLabel {
  PRICE = 'PRICE',
  DISCOUNT = 'DISCOUNT',
  FEE = 'FEE',
  TOTAL = 'TOTAL',
  RENEW = 'RENEW'
}

/**
 * Information about a product for Order/Cart
 */
export interface OrdercartProductInformation {
  configurations: OrdercartConfigurationRequirements[]
  deliveryTime: string
  duration: any
  offer?: string
  orderable: boolean
  phase: string
  prices?: OrdercartPrice[]
  pricingMode: string
  productId: string
  quantityMax: number
}

export interface OrdercartUpdate {
  description: string
  expire: string
}

/**
 * Information about a Web Hosting offer information
 */
export interface OrdercartWebHostingProductInformation {
  description: HostingwebCapabilities
  planCode: string
  prices: OrdercartGenericProductPricing[]
}

/**
 * Describes an Addon
 */
export interface OrdercatalogAddonItem {
  addons: OrdercatalogAddonOffer[]
  exclusive: boolean
  family: string
  mandatory: boolean
}

/**
 * Describes of Addon offer
 */
export interface OrdercatalogAddonOffer {
  invoiceName: string
  plan: OrdercatalogProductPlan
}

/**
 * Describes a Catalog
 */
export interface OrdercatalogCatalog {
  catalogId: number
  merchantCode: string
  plansFamily: OrdercatalogPlansItem[]
}

/**
 * Composition of a configuration
 */
export interface OrdercatalogConfigurationItem {
  defaultValue?: string
  isCustom: boolean
  isMandatory: boolean
  name: string
  values: string[]
}

/**
 * Describe a Private Cloud commercial catalog
 */
export interface OrdercatalogpccCatalog {
  catalogId: number
  catalogName: string
  commercialRanges: OrdercatalogpccCommercialRange[]
  merchantCode: string
  plans: OrdercatalogProductPlan[]
}

/**
 * Describes the Commercial Range of a Private Cloud
 */
export interface OrdercatalogpccCommercialRange {
  datacenters: OrdercatalogpccDatacenter[]
  defaultZone: string
  name: string
}

/**
 * Describes a Private Cloud Datacenter
 */
export interface OrdercatalogpccDatacenter {
  cityCode: string
  cityName: string
  countryCode: NichandleCountry
  defaultHypervisor: string
  hypervisors: OrdercatalogpccHypervisor[]
  mainPlan: string
  orderable: boolean
  orderableOptions: boolean
  orderableResources: boolean
  storagesNoPack: string[]
  zoneFullName: string
  zoneName: string
}

/**
 * Describes a Private Cloud Host
 */
export interface OrdercatalogpccHost {
  name: string
  onInitialOrder: boolean
  onUpgradeOrder: boolean
  planCode: string
  specifications: OrdercatalogpccHostSpecifications
  storagesPack: string[]
}

/**
 * Describes a Private Cloud Host CPU
 */
export interface OrdercatalogpccHostCpuSpecifications {
  cores: number
  frequency: any
  generation: string
  model: string
  socket: number
  threads: number
}

/**
 * Describes a Private Cloud Host Memory
 */
export interface OrdercatalogpccHostMemorySpecifications {
  ram: any
}

/**
 * Describes a Private Cloud Host Network
 */
export interface OrdercatalogpccHostNetworkSpecifications {
  nics: number
  speed: any
}

/**
 * Describes a Private Cloud Host Hardware
 */
export interface OrdercatalogpccHostSpecifications {
  cpu: OrdercatalogpccHostCpuSpecifications
  memory: OrdercatalogpccHostMemorySpecifications
  network: OrdercatalogpccHostNetworkSpecifications[]
}

/**
 * Describes a Private Cloud Hypervisor
 */
export interface OrdercatalogpccHypervisor {
  hosts: OrdercatalogpccHost[]
  name: string
  options: OrdercatalogpccOption[]
  orderable: boolean
  servicePacks: OrdercatalogpccServicePack[]
  shortName: string
  storages: OrdercatalogpccStorage[]
  type: string
}

/**
 * Describes a Private Cloud Option
 */
export interface OrdercatalogpccOption {
  maxInitialQuantity: number
  name: string
  onInitialOrder: boolean
  onUpgradeOrder: boolean
  planCode: string
  type: string
}

/**
 * Describes a Private Cloud Service Pack
 */
export interface OrdercatalogpccServicePack {
  name: string
  options: OrdercatalogpccServicePackOption[]
  planCode: string
  upgradableTo: string[]
}

/**
 * Describes a Private Cloud service pack option
 */
export interface OrdercatalogpccServicePackOption {
  name: string
  planCode: string
  type: string
}

/**
 * Describes a Private Cloud Storage
 */
export interface OrdercatalogpccStorage {
  name: string
  onInitialOrder: boolean
  onUpgradeOrder: boolean
  planCode: string
  specifications: OrdercatalogpccStorageSpecifications
}

/**
 * Describes a Private Cloud Storage
 */
export interface OrdercatalogpccStorageSpecifications {
  size: any
  type: string
}

/**
 * Describe an item that contains multiple plans
 */
export interface OrdercatalogPlansItem {
  family: string
  plans: OrdercatalogProductPlan[]
}

/**
 * Describes a pricing
 */
export interface OrdercatalogPricing {
  capacities: string[]
  commitment: number
  description: string
  interval: number
  intervalUnit: string
  maximumQuantity?: number
  maximumRepeat?: number
  minimumQuantity: number
  minimumRepeat: number
  mustBeCompleted: boolean
  price: OrderPrice
  priceCapInUcents?: number
  priceInUcents: number
  pricingStrategy: string
}

/**
 * Describe default pricings
 */
export interface OrdercatalogPricingDefault {
  default: OrdercatalogPricing[]
}

/**
 * Describes capabilities of a Private Cloud type of service
 */
export interface OrdercatalogprivateCloudCapabilities {
  hds: boolean
  hipaa: boolean
  nsx: boolean
  pcidss: boolean
  vrops: boolean
}

/**
 * Describe all capabilities of different types of service
 */
export interface OrdercatalogprivateCloudCapabilitiesListing {
  2016v1: OrdercatalogprivateCloudCapabilities
  2016v2: OrdercatalogprivateCloudCapabilities
  2016v3: OrdercatalogprivateCloudCapabilities
  2016v4: OrdercatalogprivateCloudCapabilities
  2016v5: OrdercatalogprivateCloudCapabilities
  2016v6: OrdercatalogprivateCloudCapabilities
  2016v7: OrdercatalogprivateCloudCapabilities
  default: OrdercatalogprivateCloudCapabilities
}

/**
 * Describe a Private Cloud commercial catalog
 */
export interface OrdercatalogprivateCloudCatalog {
  catalogId: number
  catalogName: string
  defaultHypervisor: string
  defaultZone: string
  merchantCode: string
  options: OrdercatalogprivateCloudCapabilitiesListing
  zones: OrdercatalogprivateCloudZonesListing
}

/**
 * Describe a Private Cloud zone
 */
export interface OrdercatalogprivateCloudZone {
  cityName: string
  country: string
  defaultHypervisor: string
  defaultVersion: string
  internalName: string
  plans: OrdercatalogProductPlan[]
}

/**
 * Zone definitions per datacenters
 */
export interface OrdercatalogprivateCloudZonesListing {
  bhs: OrdercatalogprivateCloudZone
  eri: OrdercatalogprivateCloudZone
  lim: OrdercatalogprivateCloudZone
  rbx: OrdercatalogprivateCloudZone
  sbg: OrdercatalogprivateCloudZone
  waw: OrdercatalogprivateCloudZone
}

/**
 * Describe a Product in the Catalog
 */
export interface OrdercatalogProduct {
  configurations: OrdercatalogConfigurationItem[]
  description: string
  name: string
  technicalDetails?: any
}

/**
 * Describe the details of a commercial offer
 */
export interface OrdercatalogProductOfferDetails {
  metadatas: any
  pricings: OrdercatalogPricingDefault
  product: OrdercatalogProduct
}

/**
 * Describes of commercial offer of a product
 */
export interface OrdercatalogProductPlan {
  addonsFamily: OrdercatalogAddonItem[]
  consumptionBillingStrategy?: string
  details: OrdercatalogProductOfferDetails
  invoiceName: string
  planCode: string
  pricingType: string
}

/**
 * Describes an Addon family for a Commercial offer
 */
export interface OrdercatalogpublicAddonFamily {
  addons: string[]
  default?: string
  exclusive: boolean
  mandatory: boolean
  name: string
}

/**
 * Describes a Catalog inside a Subsidiary
 */
export interface OrdercatalogpublicCatalog {
  addons: OrdercatalogpublicPlan[]
  catalogId: number
  locale: OrdercatalogpublicLocale
  planFamilies: OrdercatalogpublicPlanFamily[]
  plans: OrdercatalogpublicPlan[]
  products: OrdercatalogpublicProduct[]
}

/**
 * Describes the Configuration for a Commercial offer
 */
export interface OrdercatalogpublicConfiguration {
  isCustom: boolean
  isMandatory: boolean
  name: string
  values: string[]
}

/**
 * Describes a Dedicated server Catalog inside a Subsidiary
 */
export interface OrdercatalogpublicDedicatedServerCatalog {
  addons: OrdercatalogpublicPlan[]
  catalogId: number
  locale: OrdercatalogpublicLocale
  planFamilies: OrdercatalogpublicAddonFamily[]
  plans: OrdercatalogpublicPlan[]
  products: OrdercatalogpublicDedicatedServerProduct[]
}

/**
 * Describes a Dedicated Server Product
 */
export interface OrdercatalogpublicDedicatedServerProduct {
  blobs?: OrdercatalogpublicDedicatedServerProductBlob
  description: string
  name: string
}

/**
 * Describes a Blob for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlob {
  technical?: OrdercatalogpublicDedicatedServerProductBlobTechnical
}

/**
 * Describes a Technical Blob for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnical {
  bandwidth?: OrdercatalogpublicDedicatedServerProductBlobTechnicalNetwork
  cpu?: OrdercatalogpublicDedicatedServerProductBlobTechnicalCPU
  gpu?: OrdercatalogpublicDedicatedServerProductBlobTechnicalGPU
  memory?: OrdercatalogpublicDedicatedServerProductBlobTechnicalMemory
  server?: OrdercatalogpublicDedicatedServerProductBlobTechnicalServer
  storage?: OrdercatalogpublicDedicatedServerProductBlobTechnicalStorage
  vrack?: OrdercatalogpublicDedicatedServerProductBlobTechnicalNetwork
}

/**
 * Describes a CPU for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalCPU {
  boost: number
  brand: string
  cores: number
  frequency: any
  model: string
  score: number
  threads: number
}

/**
 * Describes a Disk for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalDisk {
  capacity: number
  interface: string
  number: number
  specs: string
  technology: string
}

/**
 * Describes a Frame for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalFrame {
  model: string
  size: string
}

/**
 * Describes a GPU for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalGPU {
  memory: number
}

/**
 * Describes a Memory technical Blob for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalMemory {
  ecc: boolean
  frequency: number
  ramType: string
  size: number
}

/**
 * Describes a Network technical Blob for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalNetwork {
  burst?: number
  guaranteed: boolean
  level: number
  limit?: number
}

/**
 * Describes some technicals informations of a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalServer {
  cpu: OrdercatalogpublicDedicatedServerProductBlobTechnicalCPU
  frame: OrdercatalogpublicDedicatedServerProductBlobTechnicalFrame
  range: string
}

/**
 * Describes a Storage technical Blob for a Dedicated Server
 */
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalStorage {
  disks: OrdercatalogpublicDedicatedServerProductBlobTechnicalDisk[]
  raid: string
}

/**
 * Describes specifics for a given Subsidiary
 */
export interface OrdercatalogpublicLocale {
  currencyCode: OrderCurrencyCode
  subsidiary: NichandleOvhSubsidiary
  taxRate: any
}

/**
 * Describes a Commercial offer inside a Catalog
 */
export interface OrdercatalogpublicPlan {
  addonFamilies: OrdercatalogpublicAddonFamily[]
  configurations: OrdercatalogpublicConfiguration[]
  family?: string
  invoiceName: string
  planCode: string
  pricings: OrdercatalogpublicPricing[]
  pricingType: OrdercartGenericProductPricingType
  product: string
}

/**
 * Describes a PlanFamily for a Catalog
 */
export interface OrdercatalogpublicPlanFamily {
  name: string
}

/**
 * Describes a Pricing for a Commercial offer
 */
export interface OrdercatalogpublicPricing {
  capacities: OrdercartGenericProductPricingCapacitiesEnum[]
  commitment: number
  description: string
  interval: number
  intervalUnit: OrdercartDurationUnit
  mode: string
  mustBeCompleted: boolean
  phase: number
  price: number
  quantity: OrdercatalogpublicPricingMinMax
  repeat: OrdercatalogpublicPricingMinMax
  strategy: OrdercartGenericProductPricingStrategy
  tax: number
  type: OrdercartGenericProductPricingType
}

/**
 * Describes minimal and maximal values for a Pricing
 */
export interface OrdercatalogpublicPricingMinMax {
  max?: number
  min: number
}

/**
 * Describes a Product attached to a Commercial offer
 */
export interface OrdercatalogpublicProduct {
  description: string
  name: string
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
 * Currency code
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
 * Price with its currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/**
 * Describes an operation
 */
export interface OrderupgradeOperation {
  id: number
  product: OrderupgradeOperationProduct
  status: OrderupgradeOperationStatus
  type: OrderupgradeOperationType
}

/**
 * Describes an Operation and the associated Order
 */
export interface OrderupgradeOperationAndOrder {
  operation?: OrderupgradeOperation
  order?: OrderOrder
}

/**
 * Describes a product inside a operation
 */
export interface OrderupgradeOperationProduct {
  description: string
  name: string
}

/*
 * Unit that represent the status of an operation
 */
export enum OrderupgradeOperationStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
  ERROR = 'ERROR',
  DELAYED = 'DELAYED',
  CANCELLED = 'CANCELLED',
  SCHEDULED = 'SCHEDULED'
}

/*
 * Unit that represent the type of an operation
 */
export enum OrderupgradeOperationType {
  UPGRADE = 'UPGRADE'
}

/*
 * How do you want your shipment shipped
 */
export enum OverTheBoxShippingMethod {
  DHL = 'dhl',
  MONDIALRELAY = 'mondialRelay'
}

/*
 * Typology of number
 */
export enum TelephonyLineType {
  GEOGRAPHIC = 'geographic',
  NOGEOGRAPHIC = 'nogeographic'
}

/*
 * Number country
 */
export enum TelephonyNumberCountry {
  BE = 'be',
  CH = 'ch',
  DE = 'de',
  ES = 'es',
  FR = 'fr',
  GB = 'gb',
  IT = 'it',
  UK = 'uk'
}

/*
 * Number offer
 */
export enum TelephonyNumberOffer {
  ALIAS = 'alias',
  DIDSONLY = 'didsOnly'
}

/*
 * Number quantity contained in the pool
 */
export type TelephonyNumberPool = 10 | 100 | 50

/*
 * Number special typology
 */
export enum TelephonyNumberSpecialTypology {
  BE_ADULTS = 'be_adults',
  BE_CONTENT = 'be_content',
  BE_GAMES = 'be_games',
  BE_GENERAL = 'be_general',
  BE_RELAXING = 'be_relaxing',
  FR_ACCESS = 'fr_access',
  FR_ADULTS = 'fr_adults',
  FR_ANNOUNCED = 'fr_announced',
  FR_CONFERENCING = 'fr_conferencing',
  FR_CONTENTSAUTO = 'fr_contentsAuto',
  FR_CONTENTSMANUAL = 'fr_contentsManual',
  FR_GAMES = 'fr_games',
  FR_LINKING = 'fr_linking',
  FR_M2M = 'fr_m2m',
  FR_RELATIONSHIP = 'fr_relationship'
}

/*
 * Country of number to port
 */
export enum TelephonyportabilityCountriesAvailable {
  BELGIUM = 'belgium',
  FRANCE = 'france',
  SWITZERLAND = 'switzerland'
}

/*
 * Type of number
 */
export enum TelephonyportabilityNumberType {
  LANDLINE = 'landline',
  SPECIAL = 'special'
}

/*
 * Type of your service offer
 */
export enum TelephonyportabilityOfferType {
  COMPANY = 'company',
  INDIVIDUAL = 'individual'
}

/*
 * Social reason
 */
export enum TelephonyportabilitySocialReason {
  CORPORATION = 'corporation',
  INDIVIDUAL = 'individual',
  PROFESSIONAL = 'professional'
}

/*
 * Special number category
 */
export enum TelephonyportabilitySpecialNumberCategory {
  ACCESS = 'access',
  ADULTS = 'adults',
  ANNOUNCED = 'announced',
  BE_ADULTS = 'be_adults',
  BE_CONTENT = 'be_content',
  BE_GAMES = 'be_games',
  BE_GENERAL = 'be_general',
  BE_RELAXING = 'be_relaxing',
  CONFERENCING = 'conferencing',
  CONTENTSAUTO = 'contentsAuto',
  CONTENTSMANUAL = 'contentsManual',
  DIRECTORY = 'directory',
  GAMES = 'games',
  LINKING = 'linking',
  M2M = 'm2m',
  RELATIONSHIP = 'relationship'
}

/*
 * Available amounts for security deposit crediting
 */
export type TelephonySecurityDepositAmounts = 10 | 100 | 1000 | 10000 | 20 | 200 | 2000 | 30 | 300 | 3000 | 40 | 400 | 4000 | 50 | 500 | 5000

/*
 * All orderable Veeam Cloud Connect offers
 */
export enum VeeamCloudConnectOffer {
  ADVANCED = 'advanced',
  DEMO = 'demo',
  STARTER = 'starter'
}

/*
 * Size of the additional disk in GB
 */
export type VpsadditionalDiskAdditionalDiskSize = '100' | '200' | '50' | '500'

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

/*
 * Domain number the plesk license will be valid for
 */
export type VpsPleskLicenseDomainNumber = '10' | '100' | '300' | 'hostingsuite'

/*
 * Possible localization for block
 */
export enum VrackBlockCountry {
  BE = 'be',
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
  UK = 'uk'
}

/*
 * Possible values for block size
 */
export type VrackBlockSize = '128' | '16' | '256' | '32' | '4' | '64' | '8'


export class Order {
  constructor(private client: Client) {}

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart#GET)
   */
  ListOfYourOVHOrderCarts(description?: string): Promise<string[]> {
    let url = `/order/cart?`

    const queryParams = new QueryParams()
    if (description) { queryParams.set('description', description) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart#POST)
   */
  CreateANewOVHOrderCart(payload: OrdercartCreation): Promise<OrdercartCart> {
    let url = `/order/cart`

    return this.client.request<OrdercartCart>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D#DELETE)
   */
  DeleteACart(cartId: string): Promise<void> {
    let url = `/order/cart/${cartId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D#GET)
   */
  RetrieveInformationAboutASpecificCart(cartId: string): Promise<OrdercartCart> {
    let url = `/order/cart/${cartId}`

    return this.client.request<OrdercartCart>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D#PUT)
   */
  ModifyInformationAboutASpecificCart(cartId: string, payload: OrdercartUpdate): Promise<OrdercartCart> {
    let url = `/order/cart/${cartId}`

    return this.client.request<OrdercartCart>('PUT', url, payload)
  }

  /**
   * Create a analytics project [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics#GET)
   */
  GetInformationsAboutAnalyticsOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/analytics`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Create a analytics project [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics#POST)
   */
  PostANewAnalyticsItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/analytics`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * List all addons possible for a analytics project [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics/options#GET)
   */
  GetInformationsAboutAnalyticsOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/analytics/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * List all addons possible for a analytics project [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics/options#POST)
   */
  PostANewAnalyticsAddonInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/analytics/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/assign#POST)
   */
  AssignAShoppingCartToAnLoggedinClient(cartId: string): Promise<void> {
    let url = `/order/cart/${cartId}/assign`

    return this.client.request<void>('POST', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers#GET)
   */
  GetInformationsAboutABaremetalServer(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/baremetalServers`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers#POST)
   */
  PostANewBaremetalServerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/baremetalServers`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers/options#GET)
   */
  GetInformationsAboutBaremetalServerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/baremetalServers/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers/options#POST)
   */
  PostANewBaremetalServerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/baremetalServers/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn#GET)
   */
  GetInformationsAboutCDNOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/cdn`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn#POST)
   */
  PostANewCDNItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cdn`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn/options#GET)
   */
  GetInformationsAboutCDNOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/cdn/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn/options#POST)
   */
  PostANewCDNOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cdn/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas#GET)
   */
  GetInformationsAboutCephAsAServiceOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/cephaas`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas#POST)
   */
  PostANewCephAsAServiceItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cephaas`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas/options#GET)
   */
  GetInformationsAboutCephAsAServiceOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/cephaas/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas/options#POST)
   */
  PostANewCephAsAServiceOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cephaas/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/checkout#GET)
   */
  GetPricesAndContractsInformationForYourCart(cartId: string): Promise<OrderOrder> {
    let url = `/order/cart/${cartId}/checkout`

    return this.client.request<OrderOrder>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/checkout#POST)
   */
  ValidateYourShoppingAndCreateOrder(cartId: string, payload: OrdercartCheckout): Promise<OrderOrder> {
    let url = `/order/cart/${cartId}/checkout`

    return this.client.request<OrderOrder>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud#GET)
   */
  GetInformationsAboutPublicCloudOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/cloud`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud#POST)
   */
  PostANewPublicCloudItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cloud`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud/options#GET)
   */
  GetInformationsAboutPublicCloudOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/cloud/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud/options#POST)
   */
  PostANewPublicCloudOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cloud/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb#GET)
   */
  GetInformationsAboutCloudWebOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/cloudweb`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb#POST)
   */
  PostANewCloudWebItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cloudweb`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb/options#GET)
   */
  GetInformationsAboutCloudWebOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/cloudweb/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb/options#POST)
   */
  PostANewCloudWebOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/cloudweb/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/coupon#DELETE)
   */
  DeleteACouponFromCart(cartId: string, coupon: string): Promise<void> {
    let url = `/order/cart/${cartId}/coupon?`

    const queryParams = new QueryParams()
    if (coupon) { queryParams.set('coupon', coupon) }

    return this.client.request<void>('DELETE', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/coupon#GET)
   */
  RetrieveCouponsAssociatedToCart(cartId: string): Promise<string[]> {
    let url = `/order/cart/${cartId}/coupon`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/coupon#POST)
   */
  AddANewCouponToCart(cartId: string, payload: OrdercartCouponCreation): Promise<string[]> {
    let url = `/order/cart/${cartId}/coupon`

    return this.client.request<string[]>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2#GET)
   */
  GetInformationsAboutSaaSCSP2Offers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/csp2`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2#POST)
   */
  PostANewSaaSCSP2OfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/csp2`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2/options#GET)
   */
  GetInformationsAboutSaaSCSP2Options(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/csp2/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2/options#POST)
   */
  PostANewSaaSCSP2OptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/csp2/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dbaasTimeseries#GET)
   */
  GetInformationsAboutATimeseriesOffer(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/dbaasTimeseries`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dbaasTimeseries#POST)
   */
  PostANewTimeseriesOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dbaasTimeseries`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated#GET)
   */
  GetInformationsAboutADedicatedServer(cartId: string, family?: string, planCode?: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/dedicated?`

    const queryParams = new QueryParams()
    if (family) { queryParams.set('family', family) }
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated#POST)
   */
  PostANewDedicatedServerItemInYourCart(cartId: string, payload: OrdercartGenericDedicatedCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dedicated`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated/options#GET)
   */
  GetInformationsAboutDedicatedServerOptions(cartId: string, planCode: string, family?: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/dedicated/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }
    if (family) { queryParams.set('family', family) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated/options#POST)
   */
  PostANewDedicatedServerOptionInYourCart(cartId: string, payload: OrdercartGenericDedicatedOptionsCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dedicated/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs#GET)
   */
  GetInformationsAboutADedicatedLabsServer(cartId: string, planCode?: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/dedicatedLabs?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs#POST)
   */
  PostANewDedicatedLabsServerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dedicatedLabs`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs/options#GET)
   */
  GetInformationsAboutDedicatedLabsServerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/dedicatedLabs/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs/options#POST)
   */
  PostANewDedicatedLabsServerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dedicatedLabs/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller#GET)
   */
  GetInformationsAboutADedicatedServerForUSReseller(cartId: string, family?: string, planCode?: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/dedicatedReseller?`

    const queryParams = new QueryParams()
    if (family) { queryParams.set('family', family) }
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller#POST)
   */
  /*
  PostANewDedicatedServerItemInYourCart(cartId: string, payload: OrdercartGenericDedicatedCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dedicatedReseller`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }
  */

  /**
   * Missing description [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller/options#GET)
   */
  /*
  GetInformationsAboutDedicatedServerOptions(cartId: string, planCode: string, family?: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/dedicatedReseller/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }
    if (family) { queryParams.set('family', family) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Missing description [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller/options#POST)
   */
  /*
  PostANewDedicatedServerOptionInYourCart(cartId: string, payload: OrdercartGenericDedicatedOptionsCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dedicatedReseller/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }
  */

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/deskaas#GET)
   */
  GetInformationsAboutDeskAsAServiceOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/deskaas`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/deskaas#POST)
   */
  PostANewDeskAsAServiceItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/deskaas`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover#GET)
   */
  GetInformationsAboutDedicatedDiscoverServerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/discover`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover#POST)
   */
  PostANewDedicatedDiscoverServerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/discover`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover/options#GET)
   */
  GetInformationsAboutDedicatedDiscoverServerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/discover/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover/options#POST)
   */
  PostANewDedicatedDiscoverServerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/discover/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dns#GET)
   */
  GetInformationsAboutDNSZoneOffer(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/dns`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dns#POST)
   */
  PostANewDNSZoneItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/dns`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain#GET)
   */
  GetInformationsAboutADomainName(cartId: string, domain: string): Promise<OrdercartProductInformation[]> {
    let url = `/order/cart/${cartId}/domain?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<OrdercartProductInformation[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain#POST)
   */
  PostANewDomainInYourCart(cartId: string, payload: OrdercartGenericDomainCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/domain`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain/options#GET)
   */
  GetInformationsAboutDomainNamesOptions(cartId: string, domain: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/domain/options?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain/options#POST)
   */
  PostANewDomainNameOptionInYourCart(cartId: string, payload: OrdercartGenericDomainOptionsCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/domain/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainPacks#GET)
   */
  GetInformationsAboutDomainPacksOffersAllDom(cartId: string, domain: string): Promise<OrdercartDomainPacksProductInformation[]> {
    let url = `/order/cart/${cartId}/domainPacks?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<OrdercartDomainPacksProductInformation[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainPacks#POST)
   */
  PostANewDomainPacksItemAllDomInYourCart(cartId: string, payload: OrdercartDomainPacksCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/domainPacks`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainRestore#GET)
   */
  GetInformationsAboutDomainRestore(cartId: string, domain: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/domainRestore?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer#GET)
   */
  GetInformationsAboutADomainNameTransfer(cartId: string, domain: string): Promise<OrdercartProductInformation[]> {
    let url = `/order/cart/${cartId}/domainTransfer?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<OrdercartProductInformation[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer#POST)
   */
  PostANewDomainTranferInYourCart(cartId: string, payload: OrdercartGenericDomainCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/domainTransfer`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer/options#GET)
   */
  GetInformationsAboutDomainNamesTransferOptions(cartId: string, domain: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/domainTransfer/options?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer/options#POST)
   */
  PostANewDomainNameTransferOptionInYourCart(cartId: string, payload: OrdercartGenericDomainOptionsCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/domainTransfer/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro#GET)
   */
  GetInformationsAboutEmailProOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/emailpro`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro#POST)
   */
  PostANewEmailProItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/emailpro`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro/options#GET)
   */
  GetInformationsAboutEmailProOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/emailpro/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro/options#POST)
   */
  PostANewEmailProOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/emailpro/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange#GET)
   */
  GetInformationsAboutExchangeOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/exchange`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange#POST)
   */
  PostANewExchangeItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/exchange`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange/options#GET)
   */
  GetInformationsAboutExchangeOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/exchange/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange/options#POST)
   */
  PostANewExchangeOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/exchange/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise#GET)
   */
  GetInformationsAboutExchangeEnterpriseOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/exchangeEnterprise`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise#POST)
   */
  PostANewExchangeEnterpriseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/exchangeEnterprise`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise/options#GET)
   */
  GetInformationsAboutExchangeEnterpriseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/exchangeEnterprise/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise/options#POST)
   */
  PostANewExchangeEnterpriseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/exchangeEnterprise/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/hostingReseller#GET)
   */
  GetInformationsAboutHostingResellerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/hostingReseller`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/hostingReseller#POST)
   */
  PostANewHostingResellerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/hostingReseller`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip#GET)
   */
  GetInformationsAboutIPAddressesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/ip`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip#POST)
   */
  PostANewIPAddressesItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/ip`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip/options#GET)
   */
  GetInformationsAboutIPAddressesOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/ip/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip/options#POST)
   */
  PostANewIPAddressesOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/ip/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing#GET)
   */
  GetInformationsAboutIPLoadBalancingOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/ipLoadbalancing`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing#POST)
   */
  PostANewIPLoadBalancingItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/ipLoadbalancing`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing/options#GET)
   */
  GetInformationsAboutIPLoadBalancingOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/ipLoadbalancing/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing/options#POST)
   */
  PostANewIPLoadBalancingOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/ipLoadbalancing/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item#GET)
   */
  ListAllTheItemsOfACart(cartId: string): Promise<number[]> {
    let url = `/order/cart/${cartId}/item`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D#DELETE)
   */
  DeleteAnItemFromACart(cartId: string, itemId: number): Promise<void> {
    let url = `/order/cart/${cartId}/item/${itemId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D#GET)
   */
  RetrieveInformationAboutASpecificItemOfACart(cartId: string, itemId: number): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/item/${itemId}`

    return this.client.request<OrdercartItem>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D#PUT)
   */
  UpdateSomeValuesOnACartItem(cartId: string, itemId: number, payload: OrdercartItemUpdate): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/item/${itemId}`

    return this.client.request<OrdercartItem>('PUT', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration#GET)
   */
  RetrieveAllConfigurationItemOfTheCartItem(cartId: string, itemId: number, label?: string): Promise<number[]> {
    let url = `/order/cart/${cartId}/item/${itemId}/configuration?`

    const queryParams = new QueryParams()
    if (label) { queryParams.set('label', label) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration#POST)
   */
  SetupConfigurationItemForTheProduct(cartId: string, itemId: number, payload: OrdercartItemConfigurationCreation): Promise<OrdercartConfigurationItem> {
    let url = `/order/cart/${cartId}/item/${itemId}/configuration`

    return this.client.request<OrdercartConfigurationItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration/%7BconfigurationId%7D#DELETE)
   */
  DeleteConfigurationItem(cartId: string, configurationId: number, itemId: number): Promise<void> {
    let url = `/order/cart/${cartId}/item/${itemId}/configuration/${configurationId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration/%7BconfigurationId%7D#GET)
   */
  RetrieveConfigurationItem(cartId: string, configurationId: number, itemId: number): Promise<OrdercartConfigurationItem> {
    let url = `/order/cart/${cartId}/item/${itemId}/configuration/${configurationId}`

    return this.client.request<OrdercartConfigurationItem>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/requiredConfiguration#GET)
   */
  RetrieveAllRequiredConfigurationItemOfTheCartItem(cartId: string, itemId: number): Promise<OrdercartConfigurationRequirements[]> {
    let url = `/order/cart/${cartId}/item/${itemId}/requiredConfiguration`

    return this.client.request<OrdercartConfigurationRequirements[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes#GET)
   */
  GetInformationsAboutKubernetesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/kubernetes`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes#POST)
   */
  PostANewKubernetesItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/kubernetes`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes/options#GET)
   */
  GetInformationsAboutKubernetesOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/kubernetes/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes/options#POST)
   */
  PostANewKubernetesOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/kubernetes/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseCloudLinux#GET)
   */
  GetInformationsAboutCloudLinuxLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licenseCloudLinux`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseCloudLinux#POST)
   */
  PostANewCloudLinuxLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licenseCloudLinux`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensecPanel#GET)
   */
  GetInformationsAboutCPanelLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licensecPanel`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensecPanel#POST)
   */
  PostANewCPanelLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licensecPanel`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseDirectadmin#GET)
   */
  GetInformationsAboutDirectadminLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licenseDirectadmin`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseDirectadmin#POST)
   */
  PostANewDirectadminLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licenseDirectadmin`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk#GET)
   */
  GetInformationsAboutPleskLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licensePlesk`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk#POST)
   */
  PostANewPleskLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licensePlesk`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk/options#GET)
   */
  GetInformationsAboutPleskLicenseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/licensePlesk/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk/options#POST)
   */
  PostANewPleskLicenseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licensePlesk/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseSqlServer#GET)
   */
  GetInformationsAboutSqlServerLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licenseSqlServer`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseSqlServer#POST)
   */
  PostANewSqlServerLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licenseSqlServer`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseVirtuozzo#GET)
   */
  GetInformationsAboutVirtuozzoLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licenseVirtuozzo`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseVirtuozzo#POST)
   */
  PostANewVirtuozzoLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licenseVirtuozzo`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWindows#GET)
   */
  GetInformationsAboutWindowsLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licenseWindows`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWindows#POST)
   */
  PostANewWindowsLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licenseWindows`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWorklight#GET)
   */
  GetInformationsAboutWorklightLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/licenseWorklight`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWorklight#POST)
   */
  PostANewWorklightLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/licenseWorklight`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs#GET)
   */
  GetInformationsAboutLogsOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/logs`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs#POST)
   */
  PostANewLogsItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/logs`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs/options#GET)
   */
  GetInformationsAboutLogsOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/logs/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs/options#POST)
   */
  PostANewLogsOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/logs/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices#GET)
   */
  GetInformationsAboutManagedServicesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/managedServices`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices#POST)
   */
  PostANewManagedServicesItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/managedServices`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices/options#GET)
   */
  GetInformationsAboutManagedServicesOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/managedServices/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices/options#POST)
   */
  PostANewManagedServicesOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/managedServices/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics#GET)
   */
  GetInformationsAboutMetricsOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/metrics`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics#POST)
   */
  PostANewMetricsItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/metrics`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics/options#GET)
   */
  GetInformationsAboutMetricsOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/metrics/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics/options#POST)
   */
  PostANewMetricsOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/metrics/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft#GET)
   */
  GetInformationsAboutMicrosoftOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/microsoft`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft#POST)
   */
  PostANewMicrosoftOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/microsoft`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft/options#GET)
   */
  GetInformationsAboutMicrosoftOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/microsoft/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft/options#POST)
   */
  PostANewMicrosoftOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/microsoft/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha#GET)
   */
  GetInformationsAboutNASHAOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/nasha`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha#POST)
   */
  PostANewNASHAItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/nasha`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha/options#GET)
   */
  GetInformationsAboutNASHAOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/nasha/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha/options#POST)
   */
  PostANewNASHAOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/nasha/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365#GET)
   */
  GetInformationsAboutOffice365Licenses(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/office365`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365#POST)
   */
  PostANewOffice365ItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/office365`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365/options#GET)
   */
  GetInformationsAboutOffice365Options(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/office365/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365/options#POST)
   */
  PostANewOffice365OptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/office365/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid#GET)
   */
  GetInformationsAboutOffice365PrepaidLicenses(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/office365Prepaid`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid#POST)
   */
  PostANewOffice365PrepaidItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/office365Prepaid`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid/options#GET)
   */
  GetInformationsAboutOffice365PrepaidOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/office365Prepaid/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid/options#POST)
   */
  PostANewOffice365PrepaidOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/office365Prepaid/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb#GET)
   */
  GetInformationsAboutOverTheBoxOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/otb`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb#POST)
   */
  PostANewOverTheBoxItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/otb`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb/options#GET)
   */
  GetInformationsAboutOverTheBoxOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/otb/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb/options#POST)
   */
  PostANewOverTheBoxOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/otb/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ovhCloudConnect#GET)
   */
  GetInformationsAboutOVHcloudConnectOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/ovhCloudConnect`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ovhCloudConnect#POST)
   */
  PostANewOVHcloudConnectItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/ovhCloudConnect`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/paasmon#GET)
   */
  GetInformationsAboutPaaSMonitoringOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/paasmon`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/paasmon#POST)
   */
  PostANewPaaSMonitoringItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/paasmon`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud#GET)
   */
  GetInformationsAboutHostedPrivateCloudOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloud`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud#POST)
   */
  PostANewHostedPrivateCloudItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloud`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud/options#GET)
   */
  GetInformationsAboutHostedPrivateCloudOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloud/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud/options#POST)
   */
  PostANewHostedPrivateCloudOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloud/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI#GET)
   */
  GetInformationsAboutPrivateCloudCDIOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudCDI`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI#POST)
   */
  PostANewPrivateCloudCDIItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudCDI`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI/options#GET)
   */
  GetInformationsAboutPrivateCloudCDIOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudCDI/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI/options#POST)
   */
  PostANewPrivateCloudCDIOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudCDI/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC#GET)
   */
  GetInformationsAboutPrivateCloudDedicatedCloudOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudDC`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC#POST)
   */
  PostANewPrivateCloudDedicatedCloudItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudDC`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC/options#GET)
   */
  GetInformationsAboutPrivateCloudDedicatedCloudOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudDC/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC/options#POST)
   */
  PostANewPrivateCloudDedicatedCloudOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudDC/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller#GET)
   */
  GetInformationsAboutPrivateCloudResellerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudReseller`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller#POST)
   */
  PostANewPrivateCloudResellerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudReseller`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller/options#GET)
   */
  GetInformationsAboutPrivateCloudResellerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudReseller/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller/options#POST)
   */
  PostANewPrivateCloudResellerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudReseller/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise#GET)
   */
  GetInformationsAboutPrivateCloudResellerEnterpriseOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudResellerEnterprise`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise#POST)
   */
  PostANewPrivateCloudResellerEnterpriseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudResellerEnterprise`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise/options#GET)
   */
  GetInformationsAboutPrivateCloudResellerEnterpriseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudResellerEnterprise/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise/options#POST)
   */
  PostANewPrivateCloudResellerEnterpriseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudResellerEnterprise/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC#GET)
   */
  GetInformationsAboutPrivateCloudSDDCOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudSDDC`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC#POST)
   */
  PostANewPrivateCloudSDDCItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudSDDC`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC/options#GET)
   */
  GetInformationsAboutPrivateCloudSDDCOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/privateCloudSDDC/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC/options#POST)
   */
  PostANewPrivateCloudSDDCOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/privateCloudSDDC/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/reseller#GET)
   */
  GetInformationsAboutResellerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/reseller`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/reseller#POST)
   */
  PostANewResellerOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/reseller`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint#GET)
   */
  GetInformationsAboutSharepointOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/sharepoint`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint#POST)
   */
  PostANewSharepointOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/sharepoint`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint/options#GET)
   */
  GetInformationsAboutSharepointOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/sharepoint/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint/options#POST)
   */
  PostANewSharepointOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/sharepoint/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sms#GET)
   */
  GetInformationsAboutSMSOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/sms`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sms#POST)
   */
  PostANewSMSItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/sms`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo#GET)
   */
  GetInformationsAboutSSLComodoOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/sslComodo`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo#POST)
   */
  PostANewSSLComodoItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/sslComodo`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo/options#GET)
   */
  GetInformationsAboutSSLComodoOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/sslComodo/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo/options#POST)
   */
  PostANewSSLComodoOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/sslComodo/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway#GET)
   */
  GetInformationsAboutSSLGatewayOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/sslGateway`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway#POST)
   */
  PostANewSSLGatewayItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/sslGateway`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway/options#GET)
   */
  GetInformationsAboutSSLGatewayOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/sslGateway/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway/options#POST)
   */
  PostANewSSLGatewayOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/sslGateway/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/summary#GET)
   */
  GetASummaryOfYourCurrentOrder(cartId: string): Promise<OrderOrder> {
    let url = `/order/cart/${cartId}/summary`

    return this.client.request<OrderOrder>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony#GET)
   */
  GetInformationsAboutVoIPOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/telephony`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony#POST)
   */
  PostANewVoIPItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/telephony`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony/options#GET)
   */
  GetInformationsAboutVoIPOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/telephony/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony/options#POST)
   */
  PostANewVoIPOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/telephony/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * List of OVHcloud Connect product [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vco#GET)
   */
  /*
  GetInformationsAboutOVHcloudConnectOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/vco`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * List of OVHcloud Connect product [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vco#POST)
   */
  /*
  PostANewOVHcloudConnectItemInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/vco`

    return this.client.request<OrdercartItem>('POST', url, {duration, planCode, pricingMode, quantity})
  }
  */

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi#GET)
   */
  GetInformationsAboutHorizonViewOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/vdi`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi#POST)
   */
  PostANewHorizonViewItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/vdi`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi/options#GET)
   */
  GetInformationsAboutHorizonViewOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/vdi/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi/options#POST)
   */
  PostANewHorizonViewOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/vdi/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc#GET)
   */
  GetInformationsAboutVeeamCloudConnectOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/veeamcc`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc#POST)
   */
  PostANewVeeamCloudConnectItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/veeamcc`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc/options#GET)
   */
  GetInformationsAboutVeeamCloudConnectOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/veeamcc/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc/options#POST)
   */
  PostANewVeeamCloudConnectOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/veeamcc/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise#GET)
   */
  GetInformationsAboutVeeamEnterpriseOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/veeamEnterprise`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise#POST)
   */
  PostANewVeeamEnterpriseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/veeamEnterprise`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise/options#GET)
   */
  GetInformationsAboutVeeamEnterpriseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/veeamEnterprise/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise/options#POST)
   */
  PostANewVeeamEnterpriseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/veeamEnterprise/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps#GET)
   */
  GetInformationsAboutVPSOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/vps`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps#POST)
   */
  PostANewVPSItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/vps`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps/options#GET)
   */
  GetInformationsAboutVPSOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/vps/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps/options#POST)
   */
  PostANewVPSOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/vps/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrack#GET)
   */
  GetInformationsAboutVRackOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/vrack`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrack#POST)
   */
  PostANewVRackItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/vrack`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrackReseller#GET)
   */
  /*
  GetInformationsAboutVRackOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/vrackReseller`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Missing description [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrackReseller#POST)
   */
  /*
  PostANewVRackItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/vrackReseller`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }
  */

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting#GET)
   */
  GetInformationsAboutWebHostingOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/webHosting`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting#POST)
   */
  PostANewWebHostingItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/webHosting`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting/options#GET)
   */
  GetInformationsAboutWebHostingOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/webHosting/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting/options#POST)
   */
  PostANewWebHostingOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/webHosting/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * List of xdsl product [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl#GET)
   */
  GetInformationsAboutXdslOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/cart/${cartId}/xdsl`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * List of xdsl product [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl#POST)
   */
  PostANewXdslItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/xdsl`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * List of xdsl addon [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl/options#GET)
   */
  GetInformationsAboutXdslOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cart/${cartId}/xdsl/options?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
  }

  /**
   * List of xdsl addon [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl/options#POST)
   */
  PostANewXdslOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem> {
    let url = `/order/cart/${cartId}/xdsl/options`

    return this.client.request<OrdercartItem>('POST', url, payload)
  }

  /**
   * Operations about the DEDICATED service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/baremetalServers#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/baremetalServers`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/baremetalServers/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/baremetalServers/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalBaremetalServersOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/baremetalServers/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/baremetalServers/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/baremetalServers/%7BserviceName%7D#POST)
   */
  PostAnAdditionalBaremetalServersOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/baremetalServers/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the PUBLICCLOUD service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/cloud#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/cloud`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/cloud/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/cloud/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalCloudOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/cloud/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/cloud/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/cloud/%7BserviceName%7D#POST)
   */
  PostAnAdditionalCloudOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/cloud/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the DEDICATED service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/dedicated#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/dedicated`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/dedicated/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/dedicated/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalDedicatedOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/dedicated/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/dedicated/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/dedicated/%7BserviceName%7D#POST)
   */
  PostAnAdditionalDedicatedOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/dedicated/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the DOMAIN service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/domain#GET)
   */
  /*
  ListAvailableServices(whoisOwner?: string): Promise<string[]> {
    let url = `/order/cartServiceOption/domain?`

    const queryParams = new QueryParams()
    if (whoisOwner) { queryParams.set('whoisOwner', whoisOwner) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/domain/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/domain/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalDomainOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/domain/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/domain/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/domain/%7BserviceName%7D#POST)
   */
  PostAnAdditionalDomainOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/domain/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the PROEMAIL service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/emailpro#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/emailpro`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/emailpro/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/emailpro/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalEmailProOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/emailpro/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/emailpro/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/emailpro/%7BserviceName%7D#POST)
   */
  PostAnAdditionalEmailProOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/emailpro/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the IPLB service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/ipLoadbalancing#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/ipLoadbalancing`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/ipLoadbalancing/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalIPLoadBalancingOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/ipLoadbalancing/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/ipLoadbalancing/%7BserviceName%7D#POST)
   */
  PostAnAdditionalIPLoadBalancingOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/ipLoadbalancing/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the DBAAS-LOGS service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/logs#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/logs`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/logs/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/logs/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalLogsOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/logs/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/logs/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/logs/%7BserviceName%7D#POST)
   */
  PostAnAdditionalLogsOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/logs/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the MSSERVICES service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoft#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/microsoft`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/microsoft/#serviceName# [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoft/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalMicrosoftOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/microsoft/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/microsoft/#serviceName# [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoft/%7BserviceName%7D#POST)
   */
  PostAnAdditionalMicrosoftOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/microsoft/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the EXCHANGE service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoftExchange#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/microsoftExchange`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoftExchange/%7BserviceName%7D#GET)
   */
  /*
  GetInformationsAboutAdditionalMicrosoftOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/microsoftExchange/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoftExchange/%7BserviceName%7D#POST)
   */
  /*
  PostAnAdditionalMicrosoftOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/microsoftExchange/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }
  */

  /**
   * Operations about the OFFICE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/office365Prepaid#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/office365Prepaid`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/office365/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/office365Prepaid/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalOfficeOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/office365Prepaid/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/office365/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/office365Prepaid/%7BserviceName%7D#POST)
   */
  PostAnAdditionalOfficeOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/office365Prepaid/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the PCC service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloud#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/privateCloud`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/privateCloud/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloud/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalPrivateCloudOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/privateCloud/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/privateCloud/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloud/%7BserviceName%7D#POST)
   */
  PostAnAdditionalPrivateCloudOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/privateCloud/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the PCC service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudReseller#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/privateCloudReseller`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName# [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudReseller/%7BserviceName%7D#GET)
   */
  /*
  GetInformationsAboutAdditionalPrivateCloudOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/privateCloudReseller/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName# [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudReseller/%7BserviceName%7D#POST)
   */
  /*
  PostAnAdditionalPrivateCloudOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/privateCloudReseller/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }
  */

  /**
   * Operations about the PCC service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudResellerEnterprise#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/privateCloudResellerEnterprise`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudResellerEnterprise/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalPrivateCloudEnterpriseOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/privateCloudResellerEnterprise/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudResellerEnterprise/%7BserviceName%7D#POST)
   */
  PostAnAdditionalPrivateCloudEnterpriseOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/privateCloudResellerEnterprise/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the SHAREPOINT service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sharepoint#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/sharepoint`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/sharepoint/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sharepoint/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalSharepointOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/sharepoint/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/sharepoint/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sharepoint/%7BserviceName%7D#POST)
   */
  PostAnAdditionalSharepointOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/sharepoint/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the SSLGATEWAY service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sslGateway#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/sslGateway`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/sslGateway/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sslGateway/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalSSLGatewayOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/sslGateway/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/sslGateway/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sslGateway/%7BserviceName%7D#POST)
   */
  PostAnAdditionalSSLGatewayOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/sslGateway/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the HORIZONVIEW service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vdi#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/vdi`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/vdi/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vdi/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalHorizonViewOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/vdi/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/vdi/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vdi/%7BserviceName%7D#POST)
   */
  PostAnAdditionalHorizonViewOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/vdi/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the VPS service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vps#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/vps`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/vps/#serviceName# [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vps/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalVPSOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/vps/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/vps/#serviceName# [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vps/%7BserviceName%7D#POST)
   */
  PostAnAdditionalVPSOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/vps/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Operations about the HOSTING service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/webHosting#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cartServiceOption/webHosting`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/cartServiceOptions/webHosting/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/webHosting/%7BserviceName%7D#GET)
   */
  GetInformationsAboutAdditionalWebHostingOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
    let url = `/order/cartServiceOption/webHosting/${serviceName}`

    return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/cartServiceOptions/webHosting/#serviceName# [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/webHosting/%7BserviceName%7D#POST)
   */
  PostAnAdditionalWebHostingOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
    let url = `/order/cartServiceOption/webHosting/${serviceName}`

    return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
  }

  /**
   * Missing description [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted#GET)
   */
  RetrieveListOfCatalogName(): Promise<string[]> {
    let url = `/order/catalog/formatted`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/cloud#GET)
   */
  RetrieveInformationOfPublicCloudCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/cloud?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/dedicated#GET)
   */
  RetrieveInformationOfDedicatedServerCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/dedicated?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/deskaas#GET)
   */
  RetrieveInformationOfDeskAsAServiceCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/deskaas?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/discover#GET)
   */
  RetrieveInformationOfDedicatedDiscoverOfferServerCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/discover?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/ip#GET)
   */
  RetrieveInformationOfIPAddressesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/ip?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseCloudLinux#GET)
   */
  RetrieveInformationOfCloudLinuxLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licenseCloudLinux?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licensecPanel#GET)
   */
  RetrieveInformationOfCPanelLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licensecPanel?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseDirectadmin#GET)
   */
  RetrieveInformationOfDirectadminLicensesOffersCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licenseDirectadmin?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licensePlesk#GET)
   */
  RetrieveInformationOfPleskLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licensePlesk?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseSqlServer#GET)
   */
  RetrieveInformationOfSqlServerLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licenseSqlServer?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseVirtuozzo#GET)
   */
  RetrieveInformationOfVirtuozzoLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licenseVirtuozzo?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseWindows#GET)
   */
  RetrieveInformationOfWindowsLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licenseWindows?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseWorklight#GET)
   */
  RetrieveInformationOfWorklightLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/licenseWorklight?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/logs#GET)
   */
  RetrieveInformationOfLogsDataPlatformCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/logs?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloud#GET)
   */
  RetrieveInformationOfPrivateCloudCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogpccCatalog> {
    let url = `/order/catalog/formatted/privateCloud?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogpccCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudCDI#GET)
   */
  RetrieveInformationOfPrivateCloudCDICatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogprivateCloudCatalog> {
    let url = `/order/catalog/formatted/privateCloudCDI?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogprivateCloudCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudDC#GET)
   */
  RetrieveInformationOfPrivateCloudDedicatedCloudCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogprivateCloudCatalog> {
    let url = `/order/catalog/formatted/privateCloudDC?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogprivateCloudCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudReseller#GET)
   */
  RetrieveInformationOfPrivateCloudResellerCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogpccCatalog> {
    let url = `/order/catalog/formatted/privateCloudReseller?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogpccCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudResellerEnterprise#GET)
   */
  RetrieveInformationOfPrivateCloudResellerEnterpriseCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogpccCatalog> {
    let url = `/order/catalog/formatted/privateCloudResellerEnterprise?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogpccCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudSDDC#GET)
   */
  RetrieveInformationOfPrivateCloudSDDCCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogprivateCloudCatalog> {
    let url = `/order/catalog/formatted/privateCloudSDDC?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogprivateCloudCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/reseller#GET)
   */
  RetrieveInformationOfResellerCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/reseller?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/vps#GET)
   */
  RetrieveInformationOfVPSCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogCatalog> {
    let url = `/order/catalog/formatted/vps?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/public/baremetalServers#GET)
   */
  RetrieveBaremetalServersCatalog(ovhSubsidiary: NichandleOvhSubsidiary): Promise<OrdercatalogpublicDedicatedServerCatalog> {
    let url = `/order/catalog/public/baremetalServers?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<OrdercatalogpublicDedicatedServerCatalog>('GET', url+queryParams.toString())
  }

  /**
   * Operations about the CDNANYCAST service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cdn/dedicated`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D#GET)
   */
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/cdn/dedicated/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order Backend Option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/backend#GET)
   */
  GetAllowedDurationsForBackendOption(backend: number, serviceName: string): Promise<string[]> {
    let url = `/order/cdn/dedicated/${serviceName}/backend?`

    const queryParams = new QueryParams()
    if (backend) { queryParams.set('backend', backend.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order Backend Option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/backend/%7Bduration%7D#GET)
   */
  GetPricesAndContractsInformation(backend: number, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/${serviceName}/backend/${duration}?`

    const queryParams = new QueryParams()
    if (backend) { queryParams.set('backend', backend.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }

  /**
   * Order Backend Option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/backend/%7Bduration%7D#POST)
   */
  CreateOrder(backend: number, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/${serviceName}/backend/${duration}`

    return this.client.request<OrderOrder>('POST', url, {backend})
  }

  /**
   * Upgrade cacheRule Option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/cacheRule#GET)
   */
  GetAllowedDurationsForCacheRuleOption(cacheRule: CdnanycastOrderCacheRule, serviceName: string): Promise<string[]> {
    let url = `/order/cdn/dedicated/${serviceName}/cacheRule?`

    const queryParams = new QueryParams()
    if (cacheRule) { queryParams.set('cacheRule', cacheRule.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Upgrade cacheRule Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/cacheRule/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(cacheRule: CdnanycastOrderCacheRule, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/${serviceName}/cacheRule/${duration}?`

    const queryParams = new QueryParams()
    if (cacheRule) { queryParams.set('cacheRule', cacheRule.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade cacheRule Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/cacheRule/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(cacheRule: CdnanycastOrderCacheRule, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/${serviceName}/cacheRule/${duration}`

    return this.client.request<OrderOrder>('POST', url, {cacheRule})
  }
  */

  /**
   * Order Quota [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/quota#GET)
   */
  GetAllowedDurationsForQuotaOption(quota: CdnanycastOrderQuota, serviceName: string): Promise<string[]> {
    let url = `/order/cdn/dedicated/${serviceName}/quota?`

    const queryParams = new QueryParams()
    if (quota) { queryParams.set('quota', quota.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order Quota [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/quota/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, quota: CdnanycastOrderQuota, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/${serviceName}/quota/${duration}?`

    const queryParams = new QueryParams()
    if (quota) { queryParams.set('quota', quota.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order Quota [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/quota/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, quota: CdnanycastOrderQuota, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/${serviceName}/quota/${duration}`

    return this.client.request<OrderOrder>('POST', url, {quota})
  }
  */

  /**
   * Order a New Dedicated CDN Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/new#GET)
   */
  GetAllowedDurationsForNewOption(): Promise<string[]> {
    let url = `/order/cdn/dedicated/new`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order a New Dedicated CDN Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/new/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order a New Dedicated CDN Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string): Promise<OrderOrder> {
    let url = `/order/cdn/dedicated/new/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Operations about the CDNSTATIC service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cdn/webstorage`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/cdn/webstorage/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Upgrade Storage Option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/storage#GET)
   */
  GetAllowedDurationsForTorageOption(serviceName: string, storage: CdnwebstorageOrderStorage): Promise<string[]> {
    let url = `/order/cdn/webstorage/${serviceName}/storage?`

    const queryParams = new QueryParams()
    if (storage) { queryParams.set('storage', storage.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Upgrade Storage Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/storage/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, storage: CdnwebstorageOrderStorage): Promise<OrderOrder> {
    let url = `/order/cdn/webstorage/${serviceName}/storage/${duration}?`

    const queryParams = new QueryParams()
    if (storage) { queryParams.set('storage', storage.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade Storage Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/storage/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, storage: CdnwebstorageOrderStorage): Promise<OrderOrder> {
    let url = `/order/cdn/webstorage/${serviceName}/storage/${duration}`

    return this.client.request<OrderOrder>('POST', url, {storage})
  }
  */

  /**
   * Order Traffic [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/traffic#GET)
   */
  /*
  GetPricesAndContractsInformation(bandwidth: CdnwebstorageOrderTraffic, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/webstorage/${serviceName}/traffic?`

    const queryParams = new QueryParams()
    if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order Traffic [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/traffic#POST)
   */
  /*
  CreateOrder(bandwidth: CdnwebstorageOrderTraffic, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cdn/webstorage/${serviceName}/traffic`

    return this.client.request<OrderOrder>('POST', url, {bandwidth})
  }
  */

  /**
   * Operations about the PUBLICCLOUD service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/cloud/project`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/cloud/project/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order credit usable on your Cloud project [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/credit#GET)
   */
  /*
  GetPricesAndContractsInformation(amount: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cloud/project/${serviceName}/credit?`

    const queryParams = new QueryParams()
    if (amount) { queryParams.set('amount', amount.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order credit usable on your Cloud project [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/credit#POST)
   */
  /*
  CreateOrder(amount: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/cloud/project/${serviceName}/credit`

    return this.client.request<OrderOrder>('POST', url, {amount})
  }
  */

  /**
   * Order failover ip on your Cloud project [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/ip#GET)
   */
  /*
  GetPricesAndContractsInformation(instanceId: string, quantity: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
    let url = `/order/cloud/project/${serviceName}/ip?`

    const queryParams = new QueryParams()
    if (instanceId) { queryParams.set('instanceId', instanceId) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order failover ip on your Cloud project [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/ip#POST)
   */
  /*
  CreateOrder(instanceId: string, quantity: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
    let url = `/order/cloud/project/${serviceName}/ip`

    return this.client.request<OrderOrder>('POST', url, {instanceId, quantity, country})
  }
  */

  /**
   * Operations about the HOUSING service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/dedicated/housing`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/housing/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order an APC for this bay [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D/APC#GET)
   */
  GetAllowedDurationsForAPCOption(serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/housing/${serviceName}/APC`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order an APC for this bay [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D/APC/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/housing/${serviceName}/APC/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order an APC for this bay [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D/APC/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/housing/${serviceName}/APC/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order a new Nas HA [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/nasha/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(datacenter: DedicatedNasHAZone, model: DedicatedNasHAOffer): Promise<string[]> {
    let url = `/order/dedicated/nasha/new?`

    const queryParams = new QueryParams()
    if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
    if (model) { queryParams.set('model', model.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new Nas HA [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/nasha/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(datacenter: DedicatedNasHAZone, duration: string, model: DedicatedNasHAOffer): Promise<OrderOrder> {
    let url = `/order/dedicated/nasha/new/${duration}?`

    const queryParams = new QueryParams()
    if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
    if (model) { queryParams.set('model', model.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new Nas HA [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/nasha/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(datacenter: DedicatedNasHAZone, duration: string, model: DedicatedNasHAOffer): Promise<OrderOrder> {
    let url = `/order/dedicated/nasha/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {datacenter, model})
  }
  */

  /**
   * Operations about the DEDICATED service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/dedicated/server`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order a backup storage for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/backupStorage#GET)
   */
  GetAllowedDurationsForBackupStorageOption(capacity: DedicatedserverBackupStorageCapacity, serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/backupStorage?`

    const queryParams = new QueryParams()
    if (capacity) { queryParams.set('capacity', capacity.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order a backup storage for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/backupStorage/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(capacity: DedicatedserverBackupStorageCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/backupStorage/${duration}?`

    const queryParams = new QueryParams()
    if (capacity) { queryParams.set('capacity', capacity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a backup storage for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/backupStorage/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(capacity: DedicatedserverBackupStorageCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/backupStorage/${duration}`

    return this.client.request<OrderOrder>('POST', url, {capacity})
  }
  */

  /**
   * Order bandwidth for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidth#GET)
   */
  GetAllowedDurationsForBandwidthOption(bandwidth: DedicatedserverBandwidthOrder, serviceName: string, type: DedicatedserverBandwidthOrderType): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/bandwidth?`

    const queryParams = new QueryParams()
    if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order bandwidth for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidth/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(bandwidth: DedicatedserverBandwidthOrder, duration: string, serviceName: string, type: DedicatedserverBandwidthOrderType): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/bandwidth/${duration}?`

    const queryParams = new QueryParams()
    if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order bandwidth for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidth/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(bandwidth: DedicatedserverBandwidthOrder, duration: string, serviceName: string, type: DedicatedserverBandwidthOrderType): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/bandwidth/${duration}`

    return this.client.request<OrderOrder>('POST', url, {bandwidth, type})
  }
  */

  /**
   * Order vRack bandwidth for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidthvRack#GET)
   */
  GetAllowedDurationsForBandwidthvRackOption(bandwidth: DedicatedserverBandwidthvRackOrder, serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/bandwidthvRack?`

    const queryParams = new QueryParams()
    if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order vRack bandwidth for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidthvRack/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(bandwidth: DedicatedserverBandwidthvRackOrder, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/bandwidthvRack/${duration}?`

    const queryParams = new QueryParams()
    if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order vRack bandwidth for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidthvRack/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(bandwidth: DedicatedserverBandwidthvRackOrder, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/bandwidthvRack/${duration}`

    return this.client.request<OrderOrder>('POST', url, {bandwidth})
  }
  */

  /**
   * Order a failover IP for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/failoverIP#GET)
   */
  GetAllowedDurationsForFailoverIPOption(country: DedicatedserverIpCountry, serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/failoverIP?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order a failover IP for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/failoverIP/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(country: DedicatedserverIpCountry, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/failoverIP/${duration}?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a failover IP for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/failoverIP/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(country: DedicatedserverIpCountry, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/failoverIP/${duration}`

    return this.client.request<OrderOrder>('POST', url, {country})
  }
  */

  /**
   * Order a feature for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/feature#GET)
   */
  GetAllowedDurationsForFeatureOption(feature: DedicatedserverOrderableSysFeature, serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/feature?`

    const queryParams = new QueryParams()
    if (feature) { queryParams.set('feature', feature.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order a feature for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/feature/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, feature: DedicatedserverOrderableSysFeature, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/feature/${duration}?`

    const queryParams = new QueryParams()
    if (feature) { queryParams.set('feature', feature.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a feature for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/feature/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, feature: DedicatedserverOrderableSysFeature, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/feature/${duration}`

    return this.client.request<OrderOrder>('POST', url, {feature})
  }
  */

  /**
   * order a Firewall for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/firewall#GET)
   */
  GetAllowedDurationsForFirewallOption(firewallModel: DedicatedserverFirewallModel, serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/firewall?`

    const queryParams = new QueryParams()
    if (firewallModel) { queryParams.set('firewallModel', firewallModel.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * order a Firewall for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/firewall/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, firewallModel: DedicatedserverFirewallModel, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/firewall/${duration}?`

    const queryParams = new QueryParams()
    if (firewallModel) { queryParams.set('firewallModel', firewallModel.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * order a Firewall for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/firewall/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, firewallModel: DedicatedserverFirewallModel, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/firewall/${duration}`

    return this.client.request<OrderOrder>('POST', url, {firewallModel})
  }
  */

  /**
   * Order IP for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ip#GET)
   */
  GetAllowedDurationsForIpOption(blockSize: DedicatedserverIpBlockSize, serviceName: string, type: DedicatedserverIpTypeOrderable, country?: DedicatedserverIpCountry, organisationId?: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/ip?`

    const queryParams = new QueryParams()
    if (blockSize) { queryParams.set('blockSize', blockSize.toString()) }
    if (type) { queryParams.set('type', type.toString()) }
    if (country) { queryParams.set('country', country.toString()) }
    if (organisationId) { queryParams.set('organisationId', organisationId) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order IP for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ip/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(blockSize: DedicatedserverIpBlockSize, duration: string, serviceName: string, type: DedicatedserverIpTypeOrderable, country?: DedicatedserverIpCountry, organisationId?: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/ip/${duration}?`

    const queryParams = new QueryParams()
    if (blockSize) { queryParams.set('blockSize', blockSize.toString()) }
    if (type) { queryParams.set('type', type.toString()) }
    if (country) { queryParams.set('country', country.toString()) }
    if (organisationId) { queryParams.set('organisationId', organisationId) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order IP for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ip/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(blockSize: DedicatedserverIpBlockSize, duration: string, serviceName: string, type: DedicatedserverIpTypeOrderable, country?: DedicatedserverIpCountry, organisationId?: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/ip/${duration}`

    return this.client.request<OrderOrder>('POST', url, {blockSize, type, country, organisationId})
  }
  */

  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ipMigration#GET)
   */
  GetAllowedDurationsForIpMigrationOption(ip: string, serviceName: string, token: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/ipMigration?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (token) { queryParams.set('token', token) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ipMigration/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, serviceName: string, token: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/ipMigration/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (token) { queryParams.set('token', token) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ipMigration/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, serviceName: string, token: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/ipMigration/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, token})
  }
  */

  /**
   * Order a kvm for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvm#GET)
   */
  GetAllowedDurationsForKvmOption(serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/kvm`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order a kvm for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvm/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/kvm/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order a kvm for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvm/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/kvm/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order a kvmip express for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvmExpress#GET)
   */
  GetAllowedDurationsForKvmExpressOption(serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/kvmExpress`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order a kvmip express for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvmExpress/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/kvmExpress/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order a kvmip express for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvmExpress/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/kvmExpress/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order professional use option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/professionalUse#GET)
   */
  GetAllowedDurationsForProfessionalUseOption(serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/professionalUse`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order professional use option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/professionalUse/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/professionalUse/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order professional use option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/professionalUse/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/professionalUse/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order a static IP for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/staticIP#GET)
   */
  GetAllowedDurationsForTaticIPOption(country: DedicatedserverIpStaticCountry, serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/staticIP?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order a static IP for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/staticIP/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(country: DedicatedserverIpStaticCountry, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/staticIP/${duration}?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a static IP for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/staticIP/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(country: DedicatedserverIpStaticCountry, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/staticIP/${duration}`

    return this.client.request<OrderOrder>('POST', url, {country})
  }
  */

  /**
   * Order additionall traffic for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/traffic#GET)
   */
  GetAllowedDurationsForTrafficOption(serviceName: string, traffic: DedicatedserverTrafficOrder): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/traffic?`

    const queryParams = new QueryParams()
    if (traffic) { queryParams.set('traffic', traffic.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order additionall traffic for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/traffic/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, traffic: DedicatedserverTrafficOrder): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/traffic/${duration}?`

    const queryParams = new QueryParams()
    if (traffic) { queryParams.set('traffic', traffic.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order additionall traffic for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/traffic/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, traffic: DedicatedserverTrafficOrder): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/traffic/${duration}`

    return this.client.request<OrderOrder>('POST', url, {traffic})
  }
  */

  /**
   * Order an USB key for this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/usbKey#GET)
   */
  GetAllowedDurationsForUsbKeyOption(capacity: DedicatedserverUsbKeyCapacity, serviceName: string): Promise<string[]> {
    let url = `/order/dedicated/server/${serviceName}/usbKey?`

    const queryParams = new QueryParams()
    if (capacity) { queryParams.set('capacity', capacity.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order an USB key for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/usbKey/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(capacity: DedicatedserverUsbKeyCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/usbKey/${duration}?`

    const queryParams = new QueryParams()
    if (capacity) { queryParams.set('capacity', capacity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order an USB key for this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/usbKey/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(capacity: DedicatedserverUsbKeyCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicated/server/${serviceName}/usbKey/${duration}`

    return this.client.request<OrderOrder>('POST', url, {capacity})
  }
  */

  /**
   * Operations about the PCC service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/dedicatedCloud`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/dedicatedCloud/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order additional bandwidth in your Private Cloud [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/additionalBandwidth#GET)
   */
  GetAllowedDurationsForAdditionalBandwidthOption(bandwidth: DedicatedCloudAdditionalBandwidth, serviceName: string): Promise<string[]> {
    let url = `/order/dedicatedCloud/${serviceName}/additionalBandwidth?`

    const queryParams = new QueryParams()
    if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order additional bandwidth in your Private Cloud [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/additionalBandwidth/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(bandwidth: DedicatedCloudAdditionalBandwidth, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/additionalBandwidth/${duration}?`

    const queryParams = new QueryParams()
    if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order additional bandwidth in your Private Cloud [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/additionalBandwidth/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(bandwidth: DedicatedCloudAdditionalBandwidth, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/additionalBandwidth/${duration}`

    return this.client.request<OrderOrder>('POST', url, {bandwidth})
  }
  */

  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles) [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/filer#GET)
   */
  GetAllowedDurationsForFilerOption(name: string, serviceName: string, datacenterId?: number, quantity?: number): Promise<string[]> {
    let url = `/order/dedicatedCloud/${serviceName}/filer?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles) [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/filer/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, name: string, serviceName: string, datacenterId?: number, quantity?: number): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/filer/${duration}?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles) [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/filer/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, name: string, serviceName: string, datacenterId?: number, quantity?: number): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/filer/${duration}`

    return this.client.request<OrderOrder>('POST', url, {name, datacenterId, quantity})
  }
  */

  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles) [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/host#GET)
   */
  GetAllowedDurationsForHostOption(datacenterId: number, name: string, serviceName: string, quantity?: number): Promise<string[]> {
    let url = `/order/dedicatedCloud/${serviceName}/host?`

    const queryParams = new QueryParams()
    if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
    if (name) { queryParams.set('name', name) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles) [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/host/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(datacenterId: number, duration: string, name: string, serviceName: string, quantity?: number): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/host/${duration}?`

    const queryParams = new QueryParams()
    if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
    if (name) { queryParams.set('name', name) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles) [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/host/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(datacenterId: number, duration: string, name: string, serviceName: string, quantity?: number): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/host/${duration}`

    return this.client.request<OrderOrder>('POST', url, {datacenterId, name, quantity})
  }
  */

  /**
   * Order an IP block for your Private Cloud [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/ip#GET)
   */
  /*
  GetAllowedDurationsForIpOption(country: DedicatedCloudIpCountries, description: string, estimatedClientsNumber: number, networkName: string, serviceName: string, size: DedicatedCloudOrderableIpBlockRange, usage: string): Promise<string[]> {
    let url = `/order/dedicatedCloud/${serviceName}/ip?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (description) { queryParams.set('description', description) }
    if (estimatedClientsNumber) { queryParams.set('estimatedClientsNumber', estimatedClientsNumber.toString()) }
    if (networkName) { queryParams.set('networkName', networkName) }
    if (size) { queryParams.set('size', size.toString()) }
    if (usage) { queryParams.set('usage', usage) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order an IP block for your Private Cloud [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/ip/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(country: DedicatedCloudIpCountries, description: string, duration: string, estimatedClientsNumber: number, networkName: string, serviceName: string, size: DedicatedCloudOrderableIpBlockRange, usage: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/ip/${duration}?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (description) { queryParams.set('description', description) }
    if (estimatedClientsNumber) { queryParams.set('estimatedClientsNumber', estimatedClientsNumber.toString()) }
    if (networkName) { queryParams.set('networkName', networkName) }
    if (size) { queryParams.set('size', size.toString()) }
    if (usage) { queryParams.set('usage', usage) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order an IP block for your Private Cloud [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/ip/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(country: DedicatedCloudIpCountries, description: string, duration: string, estimatedClientsNumber: number, networkName: string, serviceName: string, size: DedicatedCloudOrderableIpBlockRange, usage: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/ip/${duration}`

    return this.client.request<OrderOrder>('POST', url, {country, description, estimatedClientsNumber, networkName, size, usage})
  }
  */

  /**
   * Enable windows templates (SPLA) in your Private Cloud [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/spla#GET)
   */
  /*
  GetPricesAndContractsInformation(serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/spla`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Enable windows templates (SPLA) in your Private Cloud [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/spla#POST)
   */
  /*
  CreateOrder(serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/spla`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/upgradeRessource#GET)
   */
  GetAllowedDurationsForUpgradeRessourceOption(serviceName: string, upgradedRessourceType: DedicatedCloudressourcesUpgradeRessourceType, upgradeType: DedicatedCloudressourcesUpgradeType, upgradedRessourceId?: number): Promise<string[]> {
    let url = `/order/dedicatedCloud/${serviceName}/upgradeRessource?`

    const queryParams = new QueryParams()
    if (upgradedRessourceType) { queryParams.set('upgradedRessourceType', upgradedRessourceType.toString()) }
    if (upgradeType) { queryParams.set('upgradeType', upgradeType.toString()) }
    if (upgradedRessourceId) { queryParams.set('upgradedRessourceId', upgradedRessourceId.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/upgradeRessource/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, upgradedRessourceType: DedicatedCloudressourcesUpgradeRessourceType, upgradeType: DedicatedCloudressourcesUpgradeType, upgradedRessourceId?: number): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/upgradeRessource/${duration}?`

    const queryParams = new QueryParams()
    if (upgradedRessourceType) { queryParams.set('upgradedRessourceType', upgradedRessourceType.toString()) }
    if (upgradeType) { queryParams.set('upgradeType', upgradeType.toString()) }
    if (upgradedRessourceId) { queryParams.set('upgradedRessourceId', upgradedRessourceId.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/upgradeRessource/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, upgradedRessourceType: DedicatedCloudressourcesUpgradeRessourceType, upgradeType: DedicatedCloudressourcesUpgradeType, upgradedRessourceId?: number): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/upgradeRessource/${duration}`

    return this.client.request<OrderOrder>('POST', url, {upgradedRessourceType, upgradeType, upgradedRessourceId})
  }
  */

  /**
   * Order VDI option in a given Datacenter [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/vdi#GET)
   */
  /*
  GetPricesAndContractsInformation(datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/vdi?`

    const queryParams = new QueryParams()
    if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
    if (firstPublicIpAddress) { queryParams.set('firstPublicIpAddress', firstPublicIpAddress.toString()) }
    if (secondPublicIpAddress) { queryParams.set('secondPublicIpAddress', secondPublicIpAddress.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order VDI option in a given Datacenter [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/vdi#POST)
   */
  /*
  CreateOrder(datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/dedicatedCloud/${serviceName}/vdi`

    return this.client.request<OrderOrder>('POST', url, {datacenterId, firstPublicIpAddress, secondPublicIpAddress})
  }
  */

  /**
   * Operations about the DNS service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/domain/zone`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D#GET)
   */
  /*
  GetAllowedOptions(zoneName: string): Promise<string[]> {
    let url = `/order/domain/zone/${zoneName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order Anycast [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D/dnsAnycast#GET)
   */
  GetAllowedDurationsForDnsAnycastOption(zoneName: string): Promise<string[]> {
    let url = `/order/domain/zone/${zoneName}/dnsAnycast`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order Anycast [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D/dnsAnycast/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, zoneName: string): Promise<OrderOrder> {
    let url = `/order/domain/zone/${zoneName}/dnsAnycast/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order Anycast [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D/dnsAnycast/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, zoneName: string): Promise<OrderOrder> {
    let url = `/order/domain/zone/${zoneName}/dnsAnycast/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order a new DNS zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/new#GET)
   */
  /*
  GetPricesAndContractsInformation(zoneName: string, minimized?: boolean): Promise<OrderOrder> {
    let url = `/order/domain/zone/new?`

    const queryParams = new QueryParams()
    if (zoneName) { queryParams.set('zoneName', zoneName) }
    if (minimized) { queryParams.set('minimized', minimized.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new DNS zone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/new#POST)
   */
  /*
  CreateOrder(zoneName: string, minimized?: boolean): Promise<OrderOrder> {
    let url = `/order/domain/zone/new`

    return this.client.request<OrderOrder>('POST', url, {zoneName, minimized})
  }
  */

  /**
   * Operations about the MX service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/email/domain`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order a new mx plan [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(domain: string, offer: EmaildomainOffer): Promise<string[]> {
    let url = `/order/email/domain/new?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new mx plan [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(domain: string, duration: string, offer: EmaildomainOffer): Promise<OrderOrder> {
    let url = `/order/email/domain/new/${duration}?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new mx plan [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(domain: string, duration: string, offer: EmaildomainOffer): Promise<OrderOrder> {
    let url = `/order/email/domain/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {domain, offer})
  }
  */

  /**
   * Operations about the MSSERVICES service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/email/exchange`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Operations about the EXCHANGE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service#GET)
   */
  /*
  ListAvailableServices(organizationName: string): Promise<string[]> {
    let url = `/order/email/exchange/${organizationName}/service`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D#GET)
   */
  /*
  GetAllowedOptions(exchangeService: string, organizationName: string): Promise<string[]> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Create an order for an exchange account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account#GET)
   */
  GetAllowedDurationsForAccountOption(exchangeService: string, licence: EmailexchangeOvhLicence, number: number, organizationName: string, storageQuota?: EmailexchangeaccountQuota): Promise<string[]> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/account?`

    const queryParams = new QueryParams()
    if (licence) { queryParams.set('licence', licence.toString()) }
    if (number) { queryParams.set('number', number.toString()) }
    if (storageQuota) { queryParams.set('storageQuota', storageQuota.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for an exchange account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, exchangeService: string, licence: EmailexchangeOvhLicence, number: number, organizationName: string, storageQuota?: EmailexchangeaccountQuota): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/account/${duration}?`

    const queryParams = new QueryParams()
    if (licence) { queryParams.set('licence', licence.toString()) }
    if (number) { queryParams.set('number', number.toString()) }
    if (storageQuota) { queryParams.set('storageQuota', storageQuota.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for an exchange account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, exchangeService: string, licence: EmailexchangeOvhLicence, number: number, organizationName: string, storageQuota?: EmailexchangeaccountQuota): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/account/${duration}`

    return this.client.request<OrderOrder>('POST', url, {licence, number, storageQuota})
  }
  */

  /**
   * Create an order to upgrade your hosted account storage [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/accountUpgrade#GET)
   */
  GetAllowedDurationsForAccountUpgradeOption(exchangeService: string, newQuota: EmailexchangeaccountQuota, organizationName: string, primaryEmailAddress: string): Promise<string[]> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/accountUpgrade?`

    const queryParams = new QueryParams()
    if (newQuota) { queryParams.set('newQuota', newQuota.toString()) }
    if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order to upgrade your hosted account storage [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/accountUpgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, exchangeService: string, newQuota: EmailexchangeaccountQuota, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/accountUpgrade/${duration}?`

    const queryParams = new QueryParams()
    if (newQuota) { queryParams.set('newQuota', newQuota.toString()) }
    if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order to upgrade your hosted account storage [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/accountUpgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, exchangeService: string, newQuota: EmailexchangeaccountQuota, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/accountUpgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {newQuota, primaryEmailAddress})
  }
  */

  /**
   * Create an order for a additional 50GB of space (Exchange 2010 reseller only) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/diskSpace#GET)
   */
  /*
  GetPricesAndContractsInformation(exchangeService: string, organizationName: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/diskSpace`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Create an order for a additional 50GB of space (Exchange 2010 reseller only) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/diskSpace#POST)
   */
  /*
  CreateOrder(exchangeService: string, organizationName: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/diskSpace`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Create an order for a outlook licence. [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlook#GET)
   */
  GetAllowedDurationsForOutlookOption(exchangeService: string, licence: EmailexchangeOutlookVersion, organizationName: string, primaryEmailAddress: string): Promise<string[]> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/outlook?`

    const queryParams = new QueryParams()
    if (licence) { queryParams.set('licence', licence.toString()) }
    if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for a outlook licence. [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlook/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, exchangeService: string, licence: EmailexchangeOutlookVersion, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/outlook/${duration}?`

    const queryParams = new QueryParams()
    if (licence) { queryParams.set('licence', licence.toString()) }
    if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for a outlook licence. [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlook/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, exchangeService: string, licence: EmailexchangeOutlookVersion, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/outlook/${duration}`

    return this.client.request<OrderOrder>('POST', url, {licence, primaryEmailAddress})
  }
  */

  /**
   * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/upgrade#GET)
   */
  /*
  GetPricesAndContractsInformation(exchangeService: string, organizationName: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/upgrade`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/upgrade#POST)
   */
  /*
  CreateOrder(exchangeService: string, organizationName: string): Promise<OrderOrder> {
    let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/upgrade`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Operations about the PROEMAIL service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/email/pro`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D#GET)
   */
  /*
  GetAllowedOptions(service: string): Promise<string[]> {
    let url = `/order/email/pro/${service}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Create an order for a pro account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D/account#GET)
   */
  /*
  GetAllowedDurationsForAccountOption(number: number, service: string): Promise<string[]> {
    let url = `/order/email/pro/${service}/account?`

    const queryParams = new QueryParams()
    if (number) { queryParams.set('number', number.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for a pro account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D/account/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, number: number, service: string): Promise<OrderOrder> {
    let url = `/order/email/pro/${service}/account/${duration}?`

    const queryParams = new QueryParams()
    if (number) { queryParams.set('number', number.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for a pro account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D/account/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, number: number, service: string): Promise<OrderOrder> {
    let url = `/order/email/pro/${service}/account/${duration}`

    return this.client.request<OrderOrder>('POST', url, {number})
  }
  */

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/freefax`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/freefax/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Convert the freefax service to a /telephony voicefax service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/%7BserviceName%7D/convertToVoicefax#GET)
   */
  /*
  GetPricesAndContractsInformation(billingAccount: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/freefax/${serviceName}/convertToVoicefax?`

    const queryParams = new QueryParams()
    if (billingAccount) { queryParams.set('billingAccount', billingAccount) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Convert the freefax service to a /telephony voicefax service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/%7BserviceName%7D/convertToVoicefax#POST)
   */
  /*
  CreateOrder(billingAccount: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/freefax/${serviceName}/convertToVoicefax`

    return this.client.request<OrderOrder>('POST', url, {billingAccount})
  }
  */

  /**
   * Credit freefax account pages [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/new#GET)
   */
  /*
  GetPricesAndContractsInformation(quantity: FreefaxQuantity): Promise<OrderOrder> {
    let url = `/order/freefax/new?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Credit freefax account pages [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/new#POST)
   */
  /*
  CreateOrder(quantity: FreefaxQuantity): Promise<OrderOrder> {
    let url = `/order/freefax/new`

    return this.client.request<OrderOrder>('POST', url, {quantity})
  }
  */

  /**
   * Operations about the SQLPRIVE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/hosting/privateDatabase`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/hosting/privateDatabase/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Create an order for change ram size on your private database [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D/ram#GET)
   */
  GetAllowedDurationsForRamOption(ram: HostingPrivateDatabaseAvailableRamSize, serviceName: string): Promise<string[]> {
    let url = `/order/hosting/privateDatabase/${serviceName}/ram?`

    const queryParams = new QueryParams()
    if (ram) { queryParams.set('ram', ram.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for change ram size on your private database [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D/ram/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/privateDatabase/${serviceName}/ram/${duration}?`

    const queryParams = new QueryParams()
    if (ram) { queryParams.set('ram', ram.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for change ram size on your private database [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D/ram/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/privateDatabase/${serviceName}/ram/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ram})
  }
  */

  /**
   * Order new private database [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ram: HostingPrivateDatabaseAvailableRamSize, version: HostingPrivateDatabaseOrderableVersion, datacenter?: HostingPrivateDatabaseDatacenter, offer?: HostingPrivateDatabaseOffer): Promise<string[]> {
    let url = `/order/hosting/privateDatabase/new?`

    const queryParams = new QueryParams()
    if (ram) { queryParams.set('ram', ram.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order new private database [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, version: HostingPrivateDatabaseOrderableVersion, datacenter?: HostingPrivateDatabaseDatacenter, offer?: HostingPrivateDatabaseOffer): Promise<OrderOrder> {
    let url = `/order/hosting/privateDatabase/new/${duration}?`

    const queryParams = new QueryParams()
    if (ram) { queryParams.set('ram', ram.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order new private database [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, version: HostingPrivateDatabaseOrderableVersion, datacenter?: HostingPrivateDatabaseDatacenter, offer?: HostingPrivateDatabaseOffer): Promise<OrderOrder> {
    let url = `/order/hosting/privateDatabase/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ram, version, datacenter, offer})
  }
  */

  /**
   * Operations about the HOSTING service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/hosting/web`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/hosting/web/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order additional bandwidth [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/bandwidth#GET)
   */
  /*
  GetAllowedDurationsForBandwidthOption(serviceName: string, traffic: HostingwebBandwidthOffer): Promise<string[]> {
    let url = `/order/hosting/web/${serviceName}/bandwidth?`

    const queryParams = new QueryParams()
    if (traffic) { queryParams.set('traffic', traffic.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order additional bandwidth [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/bandwidth/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, traffic: HostingwebBandwidthOffer): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/bandwidth/${duration}?`

    const queryParams = new QueryParams()
    if (traffic) { queryParams.set('traffic', traffic.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order additional bandwidth [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/bandwidth/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, traffic: HostingwebBandwidthOffer): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/bandwidth/${duration}`

    return this.client.request<OrderOrder>('POST', url, {traffic})
  }
  */

  /**
   * Create an order for cdn option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/cdn#GET)
   */
  GetAllowedDurationsForCdnOption(offer: HostingwebCdnOffer, serviceName: string): Promise<string[]> {
    let url = `/order/hosting/web/${serviceName}/cdn?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for cdn option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/cdn/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, offer: HostingwebCdnOffer, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/cdn/${duration}?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for cdn option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/cdn/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, offer: HostingwebCdnOffer, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/cdn/${duration}`

    return this.client.request<OrderOrder>('POST', url, {offer})
  }
  */

  /**
   * Create an order for change the hosting main domain [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/changeMainDomain#GET)
   */
  GetAllowedDurationsForChangeMainDomainOption(domain: string, mxplan: HostingweborderMxPlan, serviceName: string): Promise<string[]> {
    let url = `/order/hosting/web/${serviceName}/changeMainDomain?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (mxplan) { queryParams.set('mxplan', mxplan.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for change the hosting main domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/changeMainDomain/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(domain: string, duration: string, mxplan: HostingweborderMxPlan, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/changeMainDomain/${duration}?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (mxplan) { queryParams.set('mxplan', mxplan.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for change the hosting main domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/changeMainDomain/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(domain: string, duration: string, mxplan: HostingweborderMxPlan, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/changeMainDomain/${duration}`

    return this.client.request<OrderOrder>('POST', url, {domain, mxplan})
  }
  */

  /**
   * Create an order for extra sql perso [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/extraSqlPerso#GET)
   */
  GetAllowedDurationsForExtraSqlPersoOption(offer: HostingwebdatabaseSqlPersoOffer, serviceName: string): Promise<string[]> {
    let url = `/order/hosting/web/${serviceName}/extraSqlPerso?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for extra sql perso [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, offer: HostingwebdatabaseSqlPersoOffer, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/extraSqlPerso/${duration}?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for extra sql perso [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, offer: HostingwebdatabaseSqlPersoOffer, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/extraSqlPerso/${duration}`

    return this.client.request<OrderOrder>('POST', url, {offer})
  }
  */

  /**
   * Create an order for hosted ssl option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/ssl#GET)
   */
  GetAllowedDurationsForSlOption(serviceName: string): Promise<string[]> {
    let url = `/order/hosting/web/${serviceName}/ssl`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Create an order for hosted ssl option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/ssl/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/ssl/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Create an order for hosted ssl option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/ssl/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/ssl/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Create an order for upgrade your hosting account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/upgrade#GET)
   */
  GetAllowedDurationsForUpgradeOption(offer: HostingwebOffer, serviceName: string, startTime?: any, waiveRetractationPeriod?: boolean): Promise<string[]> {
    let url = `/order/hosting/web/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }
    if (startTime) { queryParams.set('startTime', startTime.toString()) }
    if (waiveRetractationPeriod) { queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for upgrade your hosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, offer: HostingwebOffer, serviceName: string, startTime?: any, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }
    if (startTime) { queryParams.set('startTime', startTime.toString()) }
    if (waiveRetractationPeriod) { queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for upgrade your hosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, offer: HostingwebOffer, serviceName: string, startTime?: any, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
    let url = `/order/hosting/web/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {offer, startTime, waiveRetractationPeriod})
  }
  */

  /**
   * Order a new hosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(domain: string, offer: HostingwebOffer, dnsZone?: HostingwebDnsZone, module?: HostingwebmoduleOrderableName, waiveRetractationPeriod?: boolean): Promise<string[]> {
    let url = `/order/hosting/web/new?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (offer) { queryParams.set('offer', offer.toString()) }
    if (dnsZone) { queryParams.set('dnsZone', dnsZone.toString()) }
    if (module) { queryParams.set('module', module.toString()) }
    if (waiveRetractationPeriod) { queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new hosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(domain: string, duration: string, offer: HostingwebOffer, dnsZone?: HostingwebDnsZone, module?: HostingwebmoduleOrderableName, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
    let url = `/order/hosting/web/new/${duration}?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (offer) { queryParams.set('offer', offer.toString()) }
    if (dnsZone) { queryParams.set('dnsZone', dnsZone.toString()) }
    if (module) { queryParams.set('module', module.toString()) }
    if (waiveRetractationPeriod) { queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new hosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(domain: string, duration: string, offer: HostingwebOffer, dnsZone?: HostingwebDnsZone, module?: HostingwebmoduleOrderableName, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
    let url = `/order/hosting/web/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {domain, offer, dnsZone, module, waiveRetractationPeriod})
  }
  */

  /**
   * Order a HPC Spot Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hpcspot/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(): Promise<string[]> {
    let url = `/order/hpcspot/new`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order a HPC Spot Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hpcspot/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string): Promise<OrderOrder> {
    let url = `/order/hpcspot/new/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order a HPC Spot Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hpcspot/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string): Promise<OrderOrder> {
    let url = `/order/hpcspot/new/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cloudLinux/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ip: string, version: LicenseCloudLinuxVersion): Promise<string[]> {
    let url = `/order/license/cloudLinux/new?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cloudLinux/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseCloudLinuxVersion): Promise<OrderOrder> {
    let url = `/order/license/cloudLinux/new/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cloudLinux/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, version: LicenseCloudLinuxVersion): Promise<OrderOrder> {
    let url = `/order/license/cloudLinux/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, version})
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cpanel/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ip: string, version: LicenseOrderableCpanelVersion, serviceType?: LicenseLicenseType): Promise<string[]> {
    let url = `/order/license/cpanel/new?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cpanel/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseOrderableCpanelVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
    let url = `/order/license/cpanel/new/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cpanel/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, version: LicenseOrderableCpanelVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
    let url = `/order/license/cpanel/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, version, serviceType})
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/directadmin/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ip: string, version: LicenseOrderableDirectAdminVersion, serviceType?: LicenseLicenseType): Promise<string[]> {
    let url = `/order/license/directadmin/new?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/directadmin/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseOrderableDirectAdminVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
    let url = `/order/license/directadmin/new/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/directadmin/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, version: LicenseOrderableDirectAdminVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
    let url = `/order/license/directadmin/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, version, serviceType})
  }
  */

  /**
   * Create an order for an new office tenant [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/office/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<string[]> {
    let url = `/order/license/office/new?`

    const queryParams = new QueryParams()
    if (giftCode) { queryParams.set('giftCode', giftCode) }
    if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
    if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for an new office tenant [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/office/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
    let url = `/order/license/office/new/${duration}?`

    const queryParams = new QueryParams()
    if (giftCode) { queryParams.set('giftCode', giftCode) }
    if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
    if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for an new office tenant [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/office/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
    let url = `/order/license/office/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {giftCode, officeBusinessQuantity, officeProPlusQuantity})
  }
  */

  /**
   * Operations about the LICENSE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/license/plesk`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/license/plesk/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D/upgrade#GET)
   */
  /*
  GetAllowedDurationsForUpgradeOption(serviceName: string, antispam?: LicenseOrderableAntispam, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, version?: LicensePleskVersion, wordpressToolkit?: boolean): Promise<string[]> {
    let url = `/order/license/plesk/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (antispam) { queryParams.set('antispam', antispam.toString()) }
    if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
    if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
    if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
    if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
    if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
    if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, antispam?: LicenseOrderableAntispam, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, version?: LicensePleskVersion, wordpressToolkit?: boolean): Promise<OrderOrder> {
    let url = `/order/license/plesk/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (antispam) { queryParams.set('antispam', antispam.toString()) }
    if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
    if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
    if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
    if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
    if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
    if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, antispam?: LicenseOrderableAntispam, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, version?: LicensePleskVersion, wordpressToolkit?: boolean): Promise<OrderOrder> {
    let url = `/order/license/plesk/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {antispam, antivirus, applicationSet, domainNumber, languagePackNumber, powerpack, resellerManagement, version, wordpressToolkit})
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ip: string, version: LicensePleskVersion, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, serviceType?: LicenseLicenseType, wordpressToolkit?: boolean): Promise<string[]> {
    let url = `/order/license/plesk/new?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
    if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
    if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
    if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
    if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
    if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
    if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, version: LicensePleskVersion, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, serviceType?: LicenseLicenseType, wordpressToolkit?: boolean): Promise<OrderOrder> {
    let url = `/order/license/plesk/new/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
    if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
    if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
    if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
    if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
    if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
    if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, version: LicensePleskVersion, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, serviceType?: LicenseLicenseType, wordpressToolkit?: boolean): Promise<OrderOrder> {
    let url = `/order/license/plesk/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, version, antivirus, applicationSet, domainNumber, languagePackNumber, powerpack, resellerManagement, serviceType, wordpressToolkit})
  }
  */

  /**
   * Operations about the LICENSE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/license/sqlserver`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/license/sqlserver/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D/upgrade#GET)
   */
  /*
  GetAllowedDurationsForUpgradeOption(serviceName: string, version: LicenseSqlServerVersion): Promise<string[]> {
    let url = `/order/license/sqlserver/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
    let url = `/order/license/sqlserver/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
    let url = `/order/license/sqlserver/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {version})
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ip: string, version: LicenseSqlServerVersion): Promise<string[]> {
    let url = `/order/license/sqlserver/new?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
    let url = `/order/license/sqlserver/new/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
    let url = `/order/license/sqlserver/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, version})
  }
  */

  /**
   * Operations about the LICENSE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/license/virtuozzo`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/license/virtuozzo/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D/upgrade#GET)
   */
  /*
  GetAllowedDurationsForUpgradeOption(containerNumber: LicenseOrderableVirtuozzoContainerNumber, serviceName: string): Promise<string[]> {
    let url = `/order/license/virtuozzo/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/license/virtuozzo/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/license/virtuozzo/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {containerNumber})
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(containerNumber: LicenseOrderableVirtuozzoContainerNumber, ip: string, version: LicenseOrderableVirtuozzoVersion, serviceType?: LicenseLicenseType): Promise<string[]> {
    let url = `/order/license/virtuozzo/new?`

    const queryParams = new QueryParams()
    if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, ip: string, version: LicenseOrderableVirtuozzoVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
    let url = `/order/license/virtuozzo/new/${duration}?`

    const queryParams = new QueryParams()
    if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, ip: string, version: LicenseOrderableVirtuozzoVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
    let url = `/order/license/virtuozzo/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {containerNumber, ip, version, serviceType})
  }
  */

  /**
   * Operations about the LICENSE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/license/windows`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/license/windows/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D/upgrade#GET)
   */
  /*
  GetAllowedDurationsForUpgradeOption(serviceName: string, sqlVersion?: LicenseWindowsSqlVersion, version?: LicenseWindowsOsVersion): Promise<string[]> {
    let url = `/order/license/windows/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, sqlVersion?: LicenseWindowsSqlVersion, version?: LicenseWindowsOsVersion): Promise<OrderOrder> {
    let url = `/order/license/windows/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, sqlVersion?: LicenseWindowsSqlVersion, version?: LicenseWindowsOsVersion): Promise<OrderOrder> {
    let url = `/order/license/windows/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {sqlVersion, version})
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ip: string, version: LicenseWindowsOsVersion, serviceType?: LicenseLicenseType, sqlVersion?: LicenseWindowsSqlVersion): Promise<string[]> {
    let url = `/order/license/windows/new?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
    if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseWindowsOsVersion, serviceType?: LicenseLicenseType, sqlVersion?: LicenseWindowsSqlVersion): Promise<OrderOrder> {
    let url = `/order/license/windows/new/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (version) { queryParams.set('version', version.toString()) }
    if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
    if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, version: LicenseWindowsOsVersion, serviceType?: LicenseLicenseType, sqlVersion?: LicenseWindowsSqlVersion): Promise<OrderOrder> {
    let url = `/order/license/windows/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, version, serviceType, sqlVersion})
  }
  */

  /**
   * Operations about the LICENSE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/license/worklight`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/license/worklight/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D/upgrade#GET)
   */
  /*
  GetAllowedDurationsForUpgradeOption(serviceName: string, version: LicenseWorkLightVersion): Promise<string[]> {
    let url = `/order/license/worklight/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string, version: LicenseWorkLightVersion): Promise<OrderOrder> {
    let url = `/order/license/worklight/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Upgrade this license with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string, version: LicenseWorkLightVersion): Promise<OrderOrder> {
    let url = `/order/license/worklight/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {version})
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(ip: string, lessThan1000Users: boolean, version: LicenseWorkLightVersion): Promise<string[]> {
    let url = `/order/license/worklight/new?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (lessThan1000Users) { queryParams.set('lessThan1000Users', lessThan1000Users.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, ip: string, lessThan1000Users: boolean, version: LicenseWorkLightVersion): Promise<OrderOrder> {
    let url = `/order/license/worklight/new/${duration}?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (lessThan1000Users) { queryParams.set('lessThan1000Users', lessThan1000Users.toString()) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new license on a given Ip with some given options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, ip: string, lessThan1000Users: boolean, version: LicenseWorkLightVersion): Promise<OrderOrder> {
    let url = `/order/license/worklight/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {ip, lessThan1000Users, version})
  }
  */

  /**
   * Operations about the OVERTHEBOX service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/overTheBox`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/overTheBox/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Create an order to upgrade your overTheBox service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/%7BserviceName%7D/migrate#GET)
   */
  /*
  GetPricesAndContractsInformation(hardware: boolean, offer: string, serviceName: string, shippingContactID?: string, shippingMethod?: OverTheBoxShippingMethod, shippingRelayID?: number): Promise<OrderOrder> {
    let url = `/order/overTheBox/${serviceName}/migrate?`

    const queryParams = new QueryParams()
    if (hardware) { queryParams.set('hardware', hardware.toString()) }
    if (offer) { queryParams.set('offer', offer) }
    if (shippingContactID) { queryParams.set('shippingContactID', shippingContactID) }
    if (shippingMethod) { queryParams.set('shippingMethod', shippingMethod.toString()) }
    if (shippingRelayID) { queryParams.set('shippingRelayID', shippingRelayID.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order to upgrade your overTheBox service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/%7BserviceName%7D/migrate#POST)
   */
  /*
  CreateOrder(hardware: boolean, offer: string, serviceName: string, shippingContactID?: string, shippingMethod?: OverTheBoxShippingMethod, shippingRelayID?: number): Promise<OrderOrder> {
    let url = `/order/overTheBox/${serviceName}/migrate`

    return this.client.request<OrderOrder>('POST', url, {hardware, offer, shippingContactID, shippingMethod, shippingRelayID})
  }
  */

  /**
   * Subscribe to overTheBox service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(offer: string, deviceId?: string, voucher?: string): Promise<string[]> {
    let url = `/order/overTheBox/new?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer) }
    if (deviceId) { queryParams.set('deviceId', deviceId) }
    if (voucher) { queryParams.set('voucher', voucher) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Subscribe to overTheBox service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, offer: string, deviceId?: string, voucher?: string): Promise<OrderOrder> {
    let url = `/order/overTheBox/new/${duration}?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer) }
    if (deviceId) { queryParams.set('deviceId', deviceId) }
    if (voucher) { queryParams.set('voucher', voucher) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Subscribe to overTheBox service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, offer: string, deviceId?: string, voucher?: string): Promise<OrderOrder> {
    let url = `/order/overTheBox/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {offer, deviceId, voucher})
  }
  */

  /**
   * Order router vpn [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/router/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(vrack: string): Promise<string[]> {
    let url = `/order/router/new?`

    const queryParams = new QueryParams()
    if (vrack) { queryParams.set('vrack', vrack) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order router vpn [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/router/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, vrack: string): Promise<OrderOrder> {
    let url = `/order/router/new/${duration}?`

    const queryParams = new QueryParams()
    if (vrack) { queryParams.set('vrack', vrack) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order router vpn [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/router/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, vrack: string): Promise<OrderOrder> {
    let url = `/order/router/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {vrack})
  }
  */

  /**
   * Create an order for a new office tenant [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/saas/csp2/new#GET)
   */
  /*
  GetAllowedDurationsForNewOption(giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<string[]> {
    let url = `/order/saas/csp2/new?`

    const queryParams = new QueryParams()
    if (giftCode) { queryParams.set('giftCode', giftCode) }
    if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
    if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for a new office tenant [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/saas/csp2/new/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
    let url = `/order/saas/csp2/new/${duration}?`

    const queryParams = new QueryParams()
    if (giftCode) { queryParams.set('giftCode', giftCode) }
    if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
    if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for a new office tenant [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/saas/csp2/new/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
    let url = `/order/saas/csp2/new/${duration}`

    return this.client.request<OrderOrder>('POST', url, {giftCode, officeBusinessQuantity, officeProPlusQuantity})
  }
  */

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/sms`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/sms/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order credits on an existing SMS account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/%7BserviceName%7D/credits#GET)
   */
  /*
  GetPricesAndContractsInformation(quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/sms/${serviceName}/credits?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order credits on an existing SMS account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/%7BserviceName%7D/credits#POST)
   */
  /*
  CreateOrder(quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/sms/${serviceName}/credits`

    return this.client.request<OrderOrder>('POST', url, {quantity})
  }
  */

  /**
   * Create and credit a new SMS Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/new#GET)
   */
  /*
  GetPricesAndContractsInformation(quantity: number): Promise<OrderOrder> {
    let url = `/order/sms/new?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create and credit a new SMS Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/new#POST)
   */
  /*
  CreateOrder(quantity: number): Promise<OrderOrder> {
    let url = `/order/sms/new`

    return this.client.request<OrderOrder>('POST', url, {quantity})
  }
  */

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/telephony`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D#GET)
   */
  /*
  GetAllowedOptions(billingAccount: string): Promise<string[]> {
    let url = `/order/telephony/${billingAccount}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Purchase new accessories [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/accessories#GET)
   */
  /*
  GetPricesAndContractsInformation(accessories: string[], billingAccount: string, retractation: boolean, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/accessories?`

    const queryParams = new QueryParams()
    if (accessories) { queryParams.set('accessories', accessories.toString()) }
    if (retractation) { queryParams.set('retractation', retractation.toString()) }
    if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId.toString()) }
    if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Purchase new accessories [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/accessories#POST)
   */
  /*
  CreateOrder(accessories: string[], billingAccount: string, retractation: boolean, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/accessories`

    return this.client.request<OrderOrder>('POST', url, {accessories, retractation, shippingContactId, mondialRelayId})
  }
  */

  /**
   * Purchase a new line offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/line#GET)
   */
  /*
  GetPricesAndContractsInformation(billingAccount: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: TelephonyLineTypeEnum[], brand?: string, mondialRelayId?: string, zones?: string[]): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/line?`

    const queryParams = new QueryParams()
    if (displayUniversalDirectories) { queryParams.set('displayUniversalDirectories', displayUniversalDirectories.toString()) }
    if (extraSimultaneousLines) { queryParams.set('extraSimultaneousLines', extraSimultaneousLines.toString()) }
    if (offers) { queryParams.set('offers', offers.toString()) }
    if (ownerContactIds) { queryParams.set('ownerContactIds', ownerContactIds.toString()) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }
    if (retractation) { queryParams.set('retractation', retractation.toString()) }
    if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId.toString()) }
    if (types) { queryParams.set('types', types.toString()) }
    if (brand) { queryParams.set('brand', brand) }
    if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
    if (zones) { queryParams.set('zones', zones.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Purchase a new line offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/line#POST)
   */
  /*
  CreateOrder(billingAccount: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: TelephonyLineTypeEnum[], brand?: string, mondialRelayId?: string, zones?: string[]): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/line`

    return this.client.request<OrderOrder>('POST', url, {displayUniversalDirectories, extraSimultaneousLines, offers, ownerContactIds, quantity, retractation, shippingContactId, types, brand, mondialRelayId, zones})
  }
  */

  /**
   * Purchase a new standard alias number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberGeographic#GET)
   */
  /*
  GetPricesAndContractsInformation(billingAccount: string, city: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, zone: string, ape?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/numberGeographic?`

    const queryParams = new QueryParams()
    if (city) { queryParams.set('city', city) }
    if (country) { queryParams.set('country', country.toString()) }
    if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
    if (legalform) { queryParams.set('legalform', legalform.toString()) }
    if (offer) { queryParams.set('offer', offer.toString()) }
    if (retractation) { queryParams.set('retractation', retractation.toString()) }
    if (zone) { queryParams.set('zone', zone) }
    if (ape) { queryParams.set('ape', ape) }
    if (email) { queryParams.set('email', email) }
    if (firstname) { queryParams.set('firstname', firstname) }
    if (name) { queryParams.set('name', name) }
    if (organisation) { queryParams.set('organisation', organisation) }
    if (phone) { queryParams.set('phone', phone) }
    if (pool) { queryParams.set('pool', pool.toString()) }
    if (siret) { queryParams.set('siret', siret) }
    if (socialNomination) { queryParams.set('socialNomination', socialNomination) }
    if (specificNumber) { queryParams.set('specificNumber', specificNumber.toString()) }
    if (streetName) { queryParams.set('streetName', streetName) }
    if (streetNumber) { queryParams.set('streetNumber', streetNumber) }
    if (zip) { queryParams.set('zip', zip) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Purchase a new standard alias number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberGeographic#POST)
   */
  /*
  CreateOrder(billingAccount: string, city: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, zone: string, ape?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/numberGeographic`

    return this.client.request<OrderOrder>('POST', url, {city, country, displayUniversalDirectory, legalform, offer, retractation, zone, ape, email, firstname, name, organisation, phone, pool, siret, socialNomination, specificNumber, streetName, streetNumber, zip})
  }
  */

  /**
   * Purchase a new standard alias number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberNogeographic#GET)
   */
  /*
  GetPricesAndContractsInformation(billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, ape?: string, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/numberNogeographic?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
    if (legalform) { queryParams.set('legalform', legalform.toString()) }
    if (offer) { queryParams.set('offer', offer.toString()) }
    if (retractation) { queryParams.set('retractation', retractation.toString()) }
    if (ape) { queryParams.set('ape', ape) }
    if (city) { queryParams.set('city', city) }
    if (email) { queryParams.set('email', email) }
    if (firstname) { queryParams.set('firstname', firstname) }
    if (name) { queryParams.set('name', name) }
    if (organisation) { queryParams.set('organisation', organisation) }
    if (phone) { queryParams.set('phone', phone) }
    if (pool) { queryParams.set('pool', pool.toString()) }
    if (siret) { queryParams.set('siret', siret) }
    if (socialNomination) { queryParams.set('socialNomination', socialNomination) }
    if (specificNumber) { queryParams.set('specificNumber', specificNumber.toString()) }
    if (streetName) { queryParams.set('streetName', streetName) }
    if (streetNumber) { queryParams.set('streetNumber', streetNumber) }
    if (zip) { queryParams.set('zip', zip) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Purchase a new standard alias number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberNogeographic#POST)
   */
  /*
  CreateOrder(billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, ape?: string, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/numberNogeographic`

    return this.client.request<OrderOrder>('POST', url, {country, displayUniversalDirectory, legalform, offer, retractation, ape, city, email, firstname, name, organisation, phone, pool, siret, socialNomination, specificNumber, streetName, streetNumber, zip})
  }
  */

  /**
   * Purchase a new standard alias number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberSpecial#GET)
   */
  /*
  GetPricesAndContractsInformation(ape: string, billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, range: string, retractation: boolean, siret: string, socialNomination: string, typology: TelephonyNumberSpecialTypology, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/numberSpecial?`

    const queryParams = new QueryParams()
    if (ape) { queryParams.set('ape', ape) }
    if (country) { queryParams.set('country', country.toString()) }
    if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
    if (legalform) { queryParams.set('legalform', legalform.toString()) }
    if (range) { queryParams.set('range', range) }
    if (retractation) { queryParams.set('retractation', retractation.toString()) }
    if (siret) { queryParams.set('siret', siret) }
    if (socialNomination) { queryParams.set('socialNomination', socialNomination) }
    if (typology) { queryParams.set('typology', typology.toString()) }
    if (city) { queryParams.set('city', city) }
    if (email) { queryParams.set('email', email) }
    if (firstname) { queryParams.set('firstname', firstname) }
    if (name) { queryParams.set('name', name) }
    if (organisation) { queryParams.set('organisation', organisation) }
    if (phone) { queryParams.set('phone', phone) }
    if (pool) { queryParams.set('pool', pool.toString()) }
    if (specificNumber) { queryParams.set('specificNumber', specificNumber.toString()) }
    if (streetName) { queryParams.set('streetName', streetName) }
    if (streetNumber) { queryParams.set('streetNumber', streetNumber) }
    if (zip) { queryParams.set('zip', zip) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Purchase a new standard alias number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberSpecial#POST)
   */
  /*
  CreateOrder(ape: string, billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, range: string, retractation: boolean, siret: string, socialNomination: string, typology: TelephonyNumberSpecialTypology, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/numberSpecial`

    return this.client.request<OrderOrder>('POST', url, {ape, country, displayUniversalDirectory, legalform, range, retractation, siret, socialNomination, typology, city, email, firstname, name, organisation, phone, pool, specificNumber, streetName, streetNumber, zip})
  }
  */

  /**
   * Order a new portability [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/portability#GET)
   */
  /*
  GetPricesAndContractsInformation(billingAccount: string, callNumber: string, city: string, country: TelephonyportabilityCountriesAvailable, displayUniversalDirectory: boolean, firstName: string, name: string, offer: TelephonyportabilityOfferType, socialReason: TelephonyportabilitySocialReason, streetName: string, streetNumber: any, type: TelephonyportabilityNumberType, zip: string, building?: string, contactName?: string, contactNumber?: string, desireDate?: string, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, floor?: any, lineToRedirectAliasTo?: any, listNumbers?: string, mobilePhone?: any, rio?: string, siret?: string, specialNumberCategory?: TelephonyportabilitySpecialNumberCategory, stair?: any, streetNumberExtra?: string, streetType?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/portability?`

    const queryParams = new QueryParams()
    if (callNumber) { queryParams.set('callNumber', callNumber) }
    if (city) { queryParams.set('city', city) }
    if (country) { queryParams.set('country', country.toString()) }
    if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
    if (firstName) { queryParams.set('firstName', firstName) }
    if (name) { queryParams.set('name', name) }
    if (offer) { queryParams.set('offer', offer.toString()) }
    if (socialReason) { queryParams.set('socialReason', socialReason.toString()) }
    if (streetName) { queryParams.set('streetName', streetName) }
    if (streetNumber) { queryParams.set('streetNumber', streetNumber.toString()) }
    if (type) { queryParams.set('type', type.toString()) }
    if (zip) { queryParams.set('zip', zip) }
    if (building) { queryParams.set('building', building) }
    if (contactName) { queryParams.set('contactName', contactName) }
    if (contactNumber) { queryParams.set('contactNumber', contactNumber) }
    if (desireDate) { queryParams.set('desireDate', desireDate.toString()) }
    if (door) { queryParams.set('door', door) }
    if (executeAsSoonAsPossible) { queryParams.set('executeAsSoonAsPossible', executeAsSoonAsPossible.toString()) }
    if (fiabilisation) { queryParams.set('fiabilisation', fiabilisation.toString()) }
    if (floor) { queryParams.set('floor', floor.toString()) }
    if (lineToRedirectAliasTo) { queryParams.set('lineToRedirectAliasTo', lineToRedirectAliasTo.toString()) }
    if (listNumbers) { queryParams.set('listNumbers', listNumbers) }
    if (mobilePhone) { queryParams.set('mobilePhone', mobilePhone.toString()) }
    if (rio) { queryParams.set('rio', rio) }
    if (siret) { queryParams.set('siret', siret) }
    if (specialNumberCategory) { queryParams.set('specialNumberCategory', specialNumberCategory.toString()) }
    if (stair) { queryParams.set('stair', stair.toString()) }
    if (streetNumberExtra) { queryParams.set('streetNumberExtra', streetNumberExtra) }
    if (streetType) { queryParams.set('streetType', streetType) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a new portability [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/portability#POST)
   */
  /*
  CreateOrder(billingAccount: string, callNumber: string, city: string, country: TelephonyportabilityCountriesAvailable, displayUniversalDirectory: boolean, firstName: string, name: string, offer: TelephonyportabilityOfferType, socialReason: TelephonyportabilitySocialReason, streetName: string, streetNumber: any, type: TelephonyportabilityNumberType, zip: string, building?: string, contactName?: string, contactNumber?: string, desireDate?: string, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, floor?: any, lineToRedirectAliasTo?: any, listNumbers?: string, mobilePhone?: any, rio?: string, siret?: string, specialNumberCategory?: TelephonyportabilitySpecialNumberCategory, stair?: any, streetNumberExtra?: string, streetType?: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/portability`

    return this.client.request<OrderOrder>('POST', url, {callNumber, city, country, displayUniversalDirectory, firstName, name, offer, socialReason, streetName, streetNumber, type, zip, building, contactName, contactNumber, desireDate, door, executeAsSoonAsPossible, fiabilisation, floor, lineToRedirectAliasTo, listNumbers, mobilePhone, rio, siret, specialNumberCategory, stair, streetNumberExtra, streetType})
  }
  */

  /**
   * Credit security deposit [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/securityDeposit#GET)
   */
  /*
  GetPricesAndContractsInformation(amount: TelephonySecurityDepositAmounts, billingAccount: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/securityDeposit?`

    const queryParams = new QueryParams()
    if (amount) { queryParams.set('amount', amount.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Credit security deposit [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/securityDeposit#POST)
   */
  /*
  CreateOrder(amount: TelephonySecurityDepositAmounts, billingAccount: string): Promise<OrderOrder> {
    let url = `/order/telephony/${billingAccount}/securityDeposit`

    return this.client.request<OrderOrder>('POST', url, {amount})
  }
  */

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/telephony/lines`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/telephony/lines/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Add extra simultaneous lines for a specifical line [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/addSimultaneousLines#GET)
   */
  /*
  GetPricesAndContractsInformation(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/lines/${serviceName}/addSimultaneousLines?`

    const queryParams = new QueryParams()
    if (billingAccount) { queryParams.set('billingAccount', billingAccount) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Add extra simultaneous lines for a specifical line [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/addSimultaneousLines#POST)
   */
  /*
  CreateOrder(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/lines/${serviceName}/addSimultaneousLines`

    return this.client.request<OrderOrder>('POST', url, {billingAccount, quantity})
  }
  */

  /**
   * Order a phone for this specific line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/hardware#GET)
   */
  /*
  GetPricesAndContractsInformation(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/lines/${serviceName}/hardware?`

    const queryParams = new QueryParams()
    if (hardware) { queryParams.set('hardware', hardware) }
    if (retractation) { queryParams.set('retractation', retractation.toString()) }
    if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
    if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a phone for this specific line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/hardware#POST)
   */
  /*
  CreateOrder(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/lines/${serviceName}/hardware`

    return this.client.request<OrderOrder>('POST', url, {hardware, retractation, mondialRelayId, shippingContactId})
  }
  */

  /**
   * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/updateSimultaneousChannels#GET)
   */
  /*
  GetPricesAndContractsInformation(quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/lines/${serviceName}/updateSimultaneousChannels?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/updateSimultaneousChannels#POST)
   */
  /*
  CreateOrder(quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/lines/${serviceName}/updateSimultaneousChannels`

    return this.client.request<OrderOrder>('POST', url, {quantity})
  }
  */

  /**
   * Purchase a new billing account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/new#GET)
   */
  /*
  GetPricesAndContractsInformation(): Promise<OrderOrder> {
    let url = `/order/telephony/new`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Purchase a new billing account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/new#POST)
   */
  /*
  CreateOrder(): Promise<OrderOrder> {
    let url = `/order/telephony/new`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Purchase spare phone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/spare/new#GET)
   */
  /*
  GetPricesAndContractsInformation(brand: string, quantity: number, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/spare/new?`

    const queryParams = new QueryParams()
    if (brand) { queryParams.set('brand', brand) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }
    if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId.toString()) }
    if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Purchase spare phone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/spare/new#POST)
   */
  /*
  CreateOrder(brand: string, quantity: number, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/spare/new`

    return this.client.request<OrderOrder>('POST', url, {brand, quantity, shippingContactId, mondialRelayId})
  }
  */

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/telephony/trunks`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/telephony/trunks/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Add extra simultaneous lines for a specifical line [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/addSimultaneousLines#GET)
   */
  /*
  GetPricesAndContractsInformation(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/trunks/${serviceName}/addSimultaneousLines?`

    const queryParams = new QueryParams()
    if (billingAccount) { queryParams.set('billingAccount', billingAccount) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Add extra simultaneous lines for a specifical line [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/addSimultaneousLines#POST)
   */
  /*
  CreateOrder(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/trunks/${serviceName}/addSimultaneousLines`

    return this.client.request<OrderOrder>('POST', url, {billingAccount, quantity})
  }
  */

  /**
   * Order a phone for this specific line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/hardware#GET)
   */
  /*
  GetPricesAndContractsInformation(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/trunks/${serviceName}/hardware?`

    const queryParams = new QueryParams()
    if (hardware) { queryParams.set('hardware', hardware) }
    if (retractation) { queryParams.set('retractation', retractation.toString()) }
    if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
    if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order a phone for this specific line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/hardware#POST)
   */
  /*
  CreateOrder(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
    let url = `/order/telephony/trunks/${serviceName}/hardware`

    return this.client.request<OrderOrder>('POST', url, {hardware, retractation, mondialRelayId, shippingContactId})
  }
  */

  /**
   * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/updateSimultaneousChannels#GET)
   */
  /*
  GetPricesAndContractsInformation(quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/trunks/${serviceName}/updateSimultaneousChannels?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/updateSimultaneousChannels#POST)
   */
  /*
  CreateOrder(quantity: number, serviceName: string): Promise<OrderOrder> {
    let url = `/order/telephony/trunks/${serviceName}/updateSimultaneousChannels`

    return this.client.request<OrderOrder>('POST', url, {quantity})
  }
  */

  /**
   * Operations about the DEDICATED-OPTION service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/baremetalPrivateBandwidth`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth/%7BserviceName%7D#GET)
   */
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/baremetalPrivateBandwidth/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }

  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName# [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/baremetalPrivateBandwidth/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }

  /**
   * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName# [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/baremetalPrivateBandwidth/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }

  /**
   * Operations about the DEDICATED-OPTION service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/baremetalPublicBandwidth`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/baremetalPublicBandwidth/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/baremetalPublicBandwidth/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/baremetalPublicBandwidth/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the CEPH service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/cephaas`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/cephaas [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/cephaas/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/cephaas/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/cephaas/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/cephaas/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/cephaas/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the HOSTING_RESELLER service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/hostingReseller`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/hostingReseller [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/hostingReseller/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/hostingReseller/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/hostingReseller/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/hostingReseller/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/hostingReseller/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the IPLB service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/ipLoadbalancing`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/ipLoadbalancing [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/ipLoadbalancing/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/ipLoadbalancing/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/ipLoadbalancing/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/ipLoadbalancing/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/ipLoadbalancing/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the DBAAS-LOGS service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/logs`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/logs [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/logs/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/logs/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/logs/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/logs/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/logs/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the METRICS service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/metrics`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/metrics [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/metrics/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/metrics/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/metrics/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/metrics/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/metrics/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the EXCHANGE service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/microsoftExchange`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/microsoftExchange [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/microsoftExchange/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/microsoftExchange/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/microsoftExchange/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/microsoftExchange/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/microsoftExchange/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the PCC service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/privateCloud`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/privateCloud [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/privateCloud/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/privateCloud/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/privateCloud/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/privateCloud/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/privateCloud/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the SSLGATEWAY service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/sslGateway`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/sslGateway [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/sslGateway/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/sslGateway/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/sslGateway/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/sslGateway/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/sslGateway/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the VPS service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/upgrade/vps`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/vps [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps/%7BserviceName%7D#GET)
   */
  /*
  RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
    let url = `/order/upgrade/vps/${serviceName}`

    return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
  }
  */

  /**
   * Listing offers /order/upgrade/vps/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps/%7BserviceName%7D/%7BplanCode%7D#GET)
   */
  /*
  GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/vps/${serviceName}/${planCode}?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Listing offers /order/upgrade/vps/#serviceName# [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps/%7BserviceName%7D/%7BplanCode%7D#POST)
   */
  /*
  PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
    let url = `/order/upgrade/vps/${serviceName}/${planCode}`

    return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
  }
  */

  /**
   * Operations about the VEEAMCC service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/veeamCloudConnect`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/veeamCloudConnect/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order an upgrade upon your Veeam Cloud Connect account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D/upgrade#GET)
   */
  /*
  GetAllowedDurationsForUpgradeOption(offer: VeeamCloudConnectOffer, serviceName: string): Promise<string[]> {
    let url = `/order/veeamCloudConnect/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order an upgrade upon your Veeam Cloud Connect account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, offer: VeeamCloudConnectOffer, serviceName: string): Promise<OrderOrder> {
    let url = `/order/veeamCloudConnect/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order an upgrade upon your Veeam Cloud Connect account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, offer: VeeamCloudConnectOffer, serviceName: string): Promise<OrderOrder> {
    let url = `/order/veeamCloudConnect/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {offer})
  }
  */

  /**
   * Operations about the VPS service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/vps`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order additional disk [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/additionalDisk#GET)
   */
  GetAllowedDurationsForAdditionalDiskOption(additionalDiskSize: VpsadditionalDiskAdditionalDiskSize, serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/additionalDisk?`

    const queryParams = new QueryParams()
    if (additionalDiskSize) { queryParams.set('additionalDiskSize', additionalDiskSize.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Order additional disk [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/additionalDisk/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(additionalDiskSize: VpsadditionalDiskAdditionalDiskSize, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/additionalDisk/${duration}?`

    const queryParams = new QueryParams()
    if (additionalDiskSize) { queryParams.set('additionalDiskSize', additionalDiskSize.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order additional disk [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/additionalDisk/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(additionalDiskSize: VpsadditionalDiskAdditionalDiskSize, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/additionalDisk/${duration}`

    return this.client.request<OrderOrder>('POST', url, {additionalDiskSize})
  }
  */

  /**
   * Order Automated Backup Option (vps Cloud only) [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/automatedBackup#GET)
   */
  GetAllowedDurationsForAutomatedBackupOption(serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/automatedBackup`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order Automated Backup Option (vps Cloud only) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/automatedBackup/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/automatedBackup/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order Automated Backup Option (vps Cloud only) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/automatedBackup/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/automatedBackup/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Create an order for a cPanel license [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/cpanel#GET)
   */
  GetAllowedDurationsForCpanelOption(serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/cpanel`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Create an order for a cPanel license [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/cpanel/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/cpanel/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Create an order for a cPanel license [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/cpanel/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/cpanel/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order FtpBackup Option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ftpbackup#GET)
   */
  GetAllowedDurationsForFtpbackupOption(serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/ftpbackup`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order FtpBackup Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ftpbackup/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/ftpbackup/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order FtpBackup Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ftpbackup/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/ftpbackup/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order Additional IP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ip#GET)
   */
  /*
  GetAllowedDurationsForIpOption(number: number, serviceName: string, country?: VpsipGeolocation): Promise<string[]> {
    let url = `/order/vps/${serviceName}/ip?`

    const queryParams = new QueryParams()
    if (number) { queryParams.set('number', number.toString()) }
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order Additional IP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ip/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, number: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/ip/${duration}?`

    const queryParams = new QueryParams()
    if (number) { queryParams.set('number', number.toString()) }
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order Additional IP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ip/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, number: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/ip/${duration}`

    return this.client.request<OrderOrder>('POST', url, {number, country})
  }
  */

  /**
   * Create an order for a PLESK license [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/plesk#GET)
   */
  GetAllowedDurationsForPleskOption(domainNumber: VpsPleskLicenseDomainNumber, serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/plesk?`

    const queryParams = new QueryParams()
    if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Create an order for a PLESK license [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/plesk/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(domainNumber: VpsPleskLicenseDomainNumber, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/plesk/${duration}?`

    const queryParams = new QueryParams()
    if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Create an order for a PLESK license [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/plesk/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(domainNumber: VpsPleskLicenseDomainNumber, duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/plesk/${duration}`

    return this.client.request<OrderOrder>('POST', url, {domainNumber})
  }
  */

  /**
   * Order Snapshot Option [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/snapshot#GET)
   */
  GetAllowedDurationsForNapshotOption(serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/snapshot`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order Snapshot Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/snapshot/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/snapshot/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order Snapshot Option [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/snapshot/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/snapshot/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order Upgrade [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/upgrade#GET)
   */
  /*
  GetAllowedDurationsForUpgradeOption(model: string, serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/upgrade?`

    const queryParams = new QueryParams()
    if (model) { queryParams.set('model', model) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order Upgrade [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, model: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/upgrade/${duration}?`

    const queryParams = new QueryParams()
    if (model) { queryParams.set('model', model) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order Upgrade [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, model: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/upgrade/${duration}`

    return this.client.request<OrderOrder>('POST', url, {model})
  }
  */

  /**
   * Order Veeam Option [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/veeam#GET)
   */
  GetAllowedDurationsForVeeamOption(serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/veeam`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order Veeam Option [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/veeam/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/veeam/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order Veeam Option [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/veeam/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/veeam/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Order Windows Option (2015 only) [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/windows#GET)
   */
  GetAllowedDurationsForWindowsOption(serviceName: string): Promise<string[]> {
    let url = `/order/vps/${serviceName}/windows`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Order Windows Option (2015 only) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/windows/%7Bduration%7D#GET)
   */
  /*
  GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/windows/${duration}`

    return this.client.request<OrderOrder>('GET', url)
  }
  */

  /**
   * Order Windows Option (2015 only) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/windows/%7Bduration%7D#POST)
   */
  /*
  CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
    let url = `/order/vps/${serviceName}/windows/${duration}`

    return this.client.request<OrderOrder>('POST', url)
  }
  */

  /**
   * Operations about the VRACK service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vrack#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/order/vrack`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * List available options for this service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vrack/%7BserviceName%7D#GET)
   */
  /*
  GetAllowedOptions(serviceName: string): Promise<string[]> {
    let url = `/order/vrack/${serviceName}`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Order new vrack [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vrack/new#GET)
   */
  /*
  GetPricesAndContractsInformation(quantity?: number): Promise<OrderOrder> {
    let url = `/order/vrack/new?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Order new vrack [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vrack/new#POST)
   */
  /*
  CreateOrder(quantity?: number): Promise<OrderOrder> {
    let url = `/order/vrack/new`

    return this.client.request<OrderOrder>('POST', url, {quantity})
  }
  */

  /**
   * Purchase spare modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/xdsl/spare/new#GET)
   */
  /*
  GetPricesAndContractsInformation(brand: string, quantity: number, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
    let url = `/order/xdsl/spare/new?`

    const queryParams = new QueryParams()
    if (brand) { queryParams.set('brand', brand) }
    if (quantity) { queryParams.set('quantity', quantity.toString()) }
    if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId.toString()) }
    if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }

    return this.client.request<OrderOrder>('GET', url+queryParams.toString())
  }
  */

  /**
   * Purchase spare modem [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/xdsl/spare/new#POST)
   */
  /*
  CreateOrder(brand: string, quantity: number, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
    let url = `/order/xdsl/spare/new`

    return this.client.request<OrderOrder>('POST', url, {brand, quantity, shippingContactId, mondialRelayId})
  }
  */

}
