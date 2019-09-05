// GENERATED SDK for dedicated/server API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Chart
 */
export interface ComplexTypeChartReturn {
  unit?: string
  values?: ComplexTypeChartTimestampValue[]
}

/**
 * A timestamp associated to a value
 */
export interface ComplexTypeChartTimestampValue {
  timestamp: number
  value?: any
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

/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedAvailabilities {
  datacenters: DedicatedAvailabilityDatacenter[]
  hardware?: string
  region?: DedicatedAvailabilityRegion
}

/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedAvailabilitiesRaw {
  availability: DedicatedAvailability
  available: number
  incomingDatacenter: number
  lastRule?: string
  ordered: number
  orderedCheck: number
  parentAvailable: number
  reference: string
  trueAvailable: number
  trueAvailable24H: number
  trueAvailable4H: number
  zone: DedicatedAvailabilityRegion
}

/**
 * A structure describing the hardware availability for each datacenter
 */
export interface DedicatedAvailabilityDatacenter {
  availability: DedicatedAvailability
  datacenter: DedicatedAvailabilityDatacenter
}

/*
 * The datacenter
 */
export enum DedicatedAvailabilityDatacenter {
  BHS = 'bhs',
  DEFAULT = 'default',
  FRA = 'fra',
  GRA = 'gra',
  HIL = 'hil',
  LON = 'lon',
  RBX = 'rbx',
  RBX_HZ = 'rbx-hz',
  SBG = 'sbg',
  SGP = 'sgp',
  SYD = 'syd',
  VIN = 'vin',
  WAW = 'waw'
}

/*
 * The availability
 */
export type DedicatedAvailability = '1H-high' | '1H-low' | '240H' | '24H' | '72H' | 'unavailable' | 'unknown'

/*
 * The region
 */
export enum DedicatedAvailabilityRegion {
  EUROPE = 'europe',
  NORTHAMERICA = 'northAmerica'
}

/**
 * Get list of compatible firewall binaries
 */
export interface DedicatedBinaryFirewall {
  asa: string[]
  asdm: string[]
  type: DedicatedProfileFirewall
}

/**
 * Get temporary URL link to download binary
 */
export interface DedicatedBinaryFirewallLink {
  url: string
}

/**
 * A structure describing the availabilities of dedicated server
 */
export interface DedicatedDatacenterAvailability {
  datacenters: DedicatedAvailabilityDatacenter[]
  fqn: string
  memory?: string
  planCode: string
  server: string
  storage?: string
}

/*
 * ovh datacenter
 */
export enum DedicatedDatacenter {
  BHS1 = 'bhs1',
  BHS2 = 'bhs2',
  BHS3 = 'bhs3',
  BHS4 = 'bhs4',
  BHS5 = 'bhs5',
  BHS6 = 'bhs6',
  BHS7 = 'bhs7',
  DC1 = 'dc1',
  ERI1 = 'eri1',
  GRA1 = 'gra1',
  GRA2 = 'gra2',
  GSW = 'gsw',
  HIL1 = 'hil1',
  LIM1 = 'lim1',
  P19 = 'p19',
  RBX_HZ = 'rbx-hz',
  RBX1 = 'rbx1',
  RBX2 = 'rbx2',
  RBX3 = 'rbx3',
  RBX4 = 'rbx4',
  RBX5 = 'rbx5',
  RBX6 = 'rbx6',
  RBX7 = 'rbx7',
  SBG1 = 'sbg1',
  SBG2 = 'sbg2',
  SBG3 = 'sbg3',
  SBG4 = 'sbg4',
  SGP1 = 'sgp1',
  SYD1 = 'syd1',
  VIN1 = 'vin1',
  WAW1 = 'waw1'
}

/**
 * Your networkInterfaceController
 */
export interface DedicatednetworkInterfaceControllerNetworkInterfaceController {
  linkType: DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType
  mac: any
  virtualNetworkInterface?: string
}

/*
 * List NetworkInterfaceController linktype
 */
export enum DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType {
  ISOLATED = 'isolated',
  PRIVATE = 'private',
  PRIVATE_LAG = 'private_lag',
  PROVISIONING = 'provisioning',
  PUBLIC = 'public'
}

/*
 * Operating system name
 */
export enum DedicatedOsAvailabilities {
  ARCHLINUX_INSTALLER_64 = 'archlinux-installer_64',
  CENTOS5_64 = 'centos5_64',
  CENTOS6_CPANEL_LATEST_64 = 'centos6-cpanel-latest_64',
  CENTOS6_OVH_64 = 'centos6-ovh_64',
  CENTOS6_PLESK12_64 = 'centos6-plesk12_64',
  CENTOS6_64 = 'centos6_64',
  CENTOS7_CPANEL_LATEST_64 = 'centos7-cpanel-latest_64',
  CENTOS7_DIRECTADMIN_64 = 'centos7-directadmin_64',
  CENTOS7_FPGA_ACCELIZE_64 = 'centos7-fpga-accelize_64',
  CENTOS7_FPGA_INTEL_OPENCL_64 = 'centos7-fpga-intel-opencl_64',
  CENTOS7_PLESK125_64 = 'centos7-plesk125_64',
  CENTOS7_PLESK12_64 = 'centos7-plesk12_64',
  CENTOS7_PLESK17_64 = 'centos7-plesk17_64',
  CENTOS7_64 = 'centos7_64',
  CLOUDLINUX6_64 = 'cloudlinux6_64',
  CLOUDLINUX7_64 = 'cloudlinux7_64',
  COREOS_ALPHA_64 = 'coreos-alpha_64',
  COREOS_64 = 'coreos_64',
  DEBIAN7_ISPCONFIG3_64 = 'debian7-ispconfig3_64',
  DEBIAN7_MINECRAFT_64 = 'debian7-minecraft_64',
  DEBIAN7_PLESK12_64 = 'debian7-plesk12_64',
  DEBIAN7_64 = 'debian7_64',
  DEBIAN8_ISPCONFIG3_64 = 'debian8-ispconfig3_64',
  DEBIAN8_PLESK125_64 = 'debian8-plesk125_64',
  DEBIAN8_64 = 'debian8_64',
  DEBIAN8_ARMHF_32 = 'debian8_armhf_32',
  DEBIAN9_ISPCONFIG3_64 = 'debian9-ispconfig3_64',
  DEBIAN9_64 = 'debian9_64',
  DEBIAN9_ARMHF_32 = 'debian9_armhf_32',
  DGX1_OS_3_64 = 'dgx1-os-3_64',
  ESXI51_64 = 'esxi51_64',
  ESXI55_64 = 'esxi55_64',
  ESXI5_64 = 'esxi5_64',
  ESXI60_64 = 'esxi60_64',
  ESXI65_64 = 'esxi65_64',
  FEDORA26_64 = 'fedora26_64',
  FEDORA27_64 = 'fedora27_64',
  FREEBSD10_ZFS_64 = 'freebsd10-zfs_64',
  FREEBSD10_64 = 'freebsd10_64',
  FREEBSD11_ZFS_64 = 'freebsd11-zfs_64',
  GENTOO11_64 = 'gentoo11_64',
  OPENMEDIAVAULT3_ARMHF_32 = 'openmediavault3_armhf_32',
  OPENMEDIAVAULT_ARMHF_32 = 'openmediavault_armhf_32',
  OPENSUSE42_64 = 'opensuse42_64',
  PROXMOX4_ZFS_64 = 'proxmox4-zfs_64',
  PROXMOX4_64 = 'proxmox4_64',
  PROXMOX5_ZFS_64 = 'proxmox5-zfs_64',
  PROXMOX5_64 = 'proxmox5_64',
  SLACKWARE14_64 = 'slackware14_64',
  SMARTOS_64 = 'smartos_64',
  SOLUSVM_MASTER_VZ_64 = 'solusvm-master-vz_64',
  SOLUSVM_SLAVE_VZ_64 = 'solusvm-slave-vz_64',
  UBUNTU1404_PLESK125_64 = 'ubuntu1404-plesk125_64',
  UBUNTU1404_SERVER_64 = 'ubuntu1404-server_64',
  UBUNTU1510_SERVER_ARM64_64 = 'ubuntu1510-server_arm64_64',
  UBUNTU1510_SERVER_PPC64EL_64 = 'ubuntu1510-server_ppc64el_64',
  UBUNTU1604_DESKTOP_64 = 'ubuntu1604-desktop_64',
  UBUNTU1604_SERVER_64 = 'ubuntu1604-server_64',
  UBUNTU1604_SERVER_ARMHF_32 = 'ubuntu1604-server_armhf_32',
  UBUNTU1604_SERVER_PPC64EL_64 = 'ubuntu1604-server_ppc64el_64',
  UBUNTU1710_SERVER_64 = 'ubuntu1710-server_64',
  WIN2008R2_DC_VIRTUOZZO46_64 = 'win2008r2-dc-virtuozzo46_64',
  WIN2008R2_DC_64 = 'win2008r2-dc_64',
  WIN2008R2_ENT_PLESK10_64 = 'win2008r2-ent-plesk10_64',
  WIN2008R2_ENT_PLESK11_64 = 'win2008r2-ent-plesk11_64',
  WIN2008R2_ENT_PLESK12_64 = 'win2008r2-ent-plesk12_64',
  WIN2008R2_ENT_SP2010FOUND_64 = 'win2008r2-ent-sp2010found_64',
  WIN2008R2_ENT_VIRTUOZZO46_64 = 'win2008r2-ent-virtuozzo46_64',
  WIN2008R2_ENT_64 = 'win2008r2-ent_64',
  WIN2008R2_STD_PLESK11_64 = 'win2008r2-std-plesk11_64',
  WIN2008R2_STD_PLESK12_64 = 'win2008r2-std-plesk12_64',
  WIN2008R2_STD_SP2010FOUND_64 = 'win2008r2-std-sp2010found_64',
  WIN2008R2_STD_64 = 'win2008r2-std_64',
  WIN2008R2_WEB_PLESK11_64 = 'win2008r2-web-plesk11_64',
  WIN2008R2_WEB_PLESK12_64 = 'win2008r2-web-plesk12_64',
  WIN2008R2_WEB_SP2010FOUND_64 = 'win2008r2-web-sp2010found_64',
  WIN2008R2_WEB_64 = 'win2008r2-web_64',
  WIN2008R2CORE_DC_64 = 'win2008r2core-dc_64',
  WIN2008R2CORE_ENT_64 = 'win2008r2core-ent_64',
  WIN2008R2CORE_HYPERV_64 = 'win2008r2core-hyperv_64',
  WIN2008R2CORE_STD_64 = 'win2008r2core-std_64',
  WIN2008R2CORE_WEB_64 = 'win2008r2core-web_64',
  WIN2012_DC_64 = 'win2012-dc_64',
  WIN2012_HYPERV3_64 = 'win2012-hyperv3_64',
  WIN2012_STD_PLESK11_64 = 'win2012-std-plesk11_64',
  WIN2012_STD_PLESK12_64 = 'win2012-std-plesk12_64',
  WIN2012_STD_64 = 'win2012-std_64',
  WIN2012R2_DC_64 = 'win2012r2-dc_64',
  WIN2012R2_HYPERV3_64 = 'win2012r2-hyperv3_64',
  WIN2012R2_STD_PLESK12_64 = 'win2012r2-std-plesk12_64',
  WIN2012R2_STD_64 = 'win2012r2-std_64',
  WIN2016_DC_64 = 'win2016-dc_64',
  WIN2016_STD_64 = 'win2016-std_64',
  WIN81_PRO_SYSPREP_64 = 'win81-pro-sysprep_64',
  XENSERVER6_64 = 'xenserver6_64'
}

/*
 * profile firewall asa
 */
export enum DedicatedProfileFirewall {
  CISCO_ASA5505 = 'cisco.asa5505',
  CISCO_ASA5510 = 'cisco.asa5510',
  CISCO_ASA5520 = 'cisco.asa5520'
}

/**
 * A structure describing the server's access
 */
export interface DedicatedserverAccess {
  password: string
  type: DedicatedserverAccessType
  url?: string
  user?: string
}

/*
 * Application access type
 */
export enum DedicatedserverAccessType {
  DIRECTADMIN_PANEL = 'DIRECTADMIN_PANEL',
  PLESK_PANEL = 'PLESK_PANEL',
  PROXMOX_PANEL = 'PROXMOX_PANEL',
  RDP = 'RDP',
  SQL_SERVER = 'SQL_SERVER',
  SSH = 'SSH',
  WEB_PANEL = 'WEB_PANEL'
}

/*
 * Monitoring alert language
 */
export enum DedicatedserverAlertLanguage {
  CZ = 'cz',
  DE = 'de',
  EN = 'en',
  ES = 'es',
  FI = 'fi',
  FR = 'fr',
  IT = 'it',
  LT = 'lt',
  NL = 'nl',
  PL = 'pl',
  PT = 'pt'
}

/**
 * A structure describing informations about the backup cloud feature
 */
export interface DedicatedserverbackupBackupContainer {
  cloudProject?: DedicatedserverbackupBackupProject
  id?: string
  name?: string
  quota?: DedicatedserverbackupBackupQuota
  region?: string
  sftp?: DedicatedserverbackupBackupSftp
  swift?: DedicatedserverbackupBackupSwift
}

/**
 * Backup cloud offer description for a dedicated server
 */
export interface DedicatedserverbackupBackupOffer {
  maxArchive?: any
  maxBandwidthArchive?: any
  maxBandwidthStorage?: any
  maxStorage?: any
}

/**
 * A structure describing regenerated passwords
 */
export interface DedicatedserverbackupBackupPassword {
  sftpArchive?: string
  sftpStorage?: string
  swiftArchive?: string
  swiftStorage?: string
}

/**
 * Cloud project struct.
 */
export interface DedicatedserverbackupBackupProject {
  description?: string
  projectId?: string
}

/**
 * A structure describing quota associated to the current container
 */
export interface DedicatedserverbackupBackupQuota {
  maxBandwidth?: any
  maxStorage?: any
  storageUsed?: any
  usagePercent?: any
}

/**
 * A structure describing the SFTP access to a container
 */
export interface DedicatedserverbackupBackupSftp {
  password?: string
  url?: string
  username?: string
}

/**
 * A structure describing the status of your backup
 */
export interface DedicatedserverbackupBackupStatus {
  code: DedicatedserverbackupBackupStatusCode
  reason?: string
}

/*
 * Possible values for backup status code
 */
export enum DedicatedserverbackupBackupStatusCode {
  DELETING = 'DELETING',
  ERROR = 'ERROR',
  OK = 'OK',
  SUSPENDED = 'SUSPENDED',
  SUSPENDING = 'SUSPENDING',
  UNKNOWN = 'UNKNOWN',
  WAITING_AGREEMENTS_VALIDATION = 'WAITING_AGREEMENTS_VALIDATION'
}

/**
 * A structure describing the information related to Openstack to reach the container.
 */
export interface DedicatedserverbackupBackupSwift {
  authUrl?: string
  password?: string
  username?: string
}

/**
 * Backup Cloud assigned to this server
 */
export interface DedicatedserverBackupCloud {
  agreements?: number[]
  archive?: DedicatedserverbackupBackupContainer
  status: DedicatedserverbackupBackupStatus
  storage?: DedicatedserverbackupBackupContainer
}

/**
 * Backup Ftp assigned to this server
 */
export interface DedicatedserverBackupFtp {
  ftpBackupName: string
  quota?: any
  readOnlyDate?: string
  type: DedicatedserverBackupStorageType
  usage?: any
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

/*
 * Different backup storage capacity in gigabytes
 */
export type DedicatedserverBackupStorageCapacity = 1000 | 10000 | 500 | 5000

/**
 * A structure describing informations storage backup orderable for this dedicated server
 */
export interface DedicatedserverBackupStorageOrderable {
  capacities?: DedicatedserverBackupStorageCapacityEnum[]
  orderable: boolean
}

/*
 * Different backup storage type
 */
export enum DedicatedserverBackupStorageType {
  INCLUDED = 'included',
  STORAGE = 'storage'
}

/**
 * A structure describing bandwidth informations about this dedicated server
 */
export interface DedicatedserverBandwidthDetails {
  InternetToOvh?: any
  OvhToInternet?: any
  OvhToOvh?: any
  type?: DedicatedserverBandwidthType
}

/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedserverBandwidthOrderable {
  orderable: boolean
  platinum?: DedicatedserverBandwidthOrderEnum[]
  premium?: DedicatedserverBandwidthOrderEnum[]
  ultimate?: DedicatedserverBandwidthOrderEnum[]
}

/*
 *  Different Bandwidth orderable in Mbps
 */
export type DedicatedserverBandwidthOrder = 1000 | 2000 | 3000

/*
 *  Different Bandwidth type
 */
export enum DedicatedserverBandwidthType {
  INCLUDED = 'included',
  PLATINUM = 'platinum',
  PREMIUM = 'premium',
  STANDARD = 'standard',
  ULTIMATE = 'ultimate'
}

/**
 * A structure describing vRack bandwidth informations about this dedicated server
 */
export interface DedicatedserverBandwidthvRackDetails {
  bandwidth?: any
  type?: DedicatedserverBandwidthvRackType
}

/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedserverBandwidthvRackOrderable {
  orderable: boolean
  vrack?: DedicatedserverBandwidthvRackOrderEnum[]
}

/*
 *  Different vRack Bandwidth orderable in Mbps
 */
export type DedicatedserverBandwidthvRackOrder = 1000 | 3000

/*
 *  Different Bandwidth type
 */
export enum DedicatedserverBandwidthvRackType {
  INCLUDED = 'included',
  STANDARD = 'standard'
}

/*
 * Server boot mode
 */
export enum DedicatedserverBootMode {
  LEGACY = 'legacy',
  UEFI = 'uefi',
  UEFI_LEGACY = 'uefi-legacy'
}

/*
 * Different option activated on netboot 
 */
export enum DedicatedserverBootOption {
  CPUFAMILY = 'cpufamily',
  GRSEC = 'grsec',
  IPV6 = 'ipv6',
  SMP = 'smp'
}

/*
 *  Different netboot boot
 */
export enum DedicatedserverBootType {
  HARDDISK = 'harddisk',
  INTERNAL = 'internal',
  IPXECUSTOMERSCRIPT = 'ipxeCustomerScript',
  NETWORK = 'network',
  RESCUE = 'rescue'
}

/*
 * Dedicated server bandwidth burst
 */
export enum DedicatedserverBurstStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  INACTIVELOCKED = 'inactiveLocked'
}

/*
 * Time to live in minutes for cache
 */
export type DedicatedserverCacheTTL = 1 | 10 | 15 | 3 | 5

/*
 * cpu family 
 */
export enum DedicatedserverCpuFamily {
  ARM64 = 'arm64',
  ARMHF32 = 'armhf32',
  PPC64 = 'ppc64',
  X86 = 'x86',
  X86_HT = 'x86-ht',
  X86_64 = 'x86_64'
}

/**
 * Server informations
 */
export interface DedicatedserverDedicated {
  bootId?: number
  commercialRange?: string
  datacenter: DedicatedDatacenter
  ip: string
  linkSpeed?: number
  monitoring: boolean
  name: string
  os: string
  professionalUse: boolean
  rack: string
  rescueMail?: string
  reverse?: string
  rootDevice?: string
  serverId: number
  state: DedicatedserverState
  supportLevel: DedicatedserverSupportLevel
}

/*
 * Disk interface type enum
 */
export enum DedicatedserverDiskType {
  NVME = 'NVMe',
  SAS = 'SAS',
  SATA = 'SATA',
  SSD = 'SSD',
  UNKNOWN = 'Unknown'
}

/**
 * Service monitoring Email alert
 */
export interface DedicatedserveremailAlert {
  alertId: number
  email: string
  enabled: boolean
  language: DedicatedserverAlertLanguage
}

/**
 * Firewall attached to this server
 */
export interface DedicatedserverFirewall {
  enabled: boolean
  firewall: string
  ip: string
  mode: DedicatedserverFirewallMode
  model?: DedicatedserverFirewallModel
}

/*
 * Dedicated server firewall mode
 */
export enum DedicatedserverFirewallMode {
  ROUTED = 'routed',
  TRANSPARENT = 'transparent'
}

/*
 * Firewall model name
 */
export enum DedicatedserverFirewallModel {
  ASA5505 = 'asa5505',
  ASA5510 = 'asa5510',
  ASA5520 = 'asa5520'
}

/*
 * Server form factor
 */
export type DedicatedserverFormFactor = '0.25u' | '0.5u' | '1u' | '2u' | '3u' | '4u'

/**
 * Simulated result of how the hardware RAID template will be configured on this server
 */
export interface DedicatedserverHardwareRaidConfiguration {
  capacity: any
  diskCount: number
  diskSize: any
  diskSpanSize: number
  mode: DedicatedserverHardwareSpecificationsRaidHard
  name: string
  type: string
}

/**
 * RAID controller configuration
 */
export interface DedicatedserverHardwareRaidController {
  disks: DedicatedserverHardwareRaidDiskGroup[]
  model: string
  type: string
}

/**
 * Disk attached to a RAID controller
 */
export interface DedicatedserverHardwareRaidDiskGroup {
  capacity: any
  names: string[]
  speed: any
  type: DedicatedserverDiskType
}

/**
 * A structure describing the server's hardware RAID configuration
 */
export interface DedicatedserverHardwareRaidProfile {
  controllers: DedicatedserverHardwareRaidController[]
}

/**
 * A structure describing the server's resulting layout after RAID configuration
 */
export interface DedicatedserverHardwareRaidSize {
  configurations: DedicatedserverHardwareRaidConfiguration[]
}

/**
 * A structure describing informations about this dedicated server
 */
export interface DedicatedserverHardwareSpecifications {
  bootMode: DedicatedserverBootMode
  coresPerProcessor?: number
  defaultHardwareRaidSize?: any
  defaultHardwareRaidType?: DedicatedserverHardwareSpecificationsRaidHard
  description?: string
  diskGroups?: DedicatedserverHardwareSpecificationsDisk[]
  expansionCards?: DedicatedserverHardwareSpecificationsExpansionCard[]
  formFactor?: DedicatedserverFormFactor
  memorySize?: any
  motherboard?: string
  numberOfProcessors?: number
  processorArchitecture?: DedicatedserverCpuFamily
  processorName?: string
  threadsPerProcessor?: number
  usbKeys?: any
}

/**
 * A structure describing informations about server disks
 */
export interface DedicatedserverHardwareSpecificationsDisk {
  defaultHardwareRaidSize?: any
  defaultHardwareRaidType?: DedicatedserverHardwareSpecificationsRaidHard
  description?: string
  diskGroupId?: number
  diskSize?: any
  diskType?: string
  numberOfDisks?: number
  raidController?: string
}

/**
 * A structure describing informations about server expansion cards
 */
export interface DedicatedserverHardwareSpecificationsExpansionCard {
  description: string
  type: DedicatedserverHardwareSpecificationsExpansionCardType
}

/*
 * Expansion card type enum
 */
export enum DedicatedserverHardwareSpecificationsExpansionCardType {
  FPGA = 'fpga',
  GPU = 'gpu'
}

/*
 * Raid hard configuration
 */
export enum DedicatedserverHardwareSpecificationsRaidHard {
  RAID0 = 'raid0',
  RAID1 = 'raid1',
  RAID10 = 'raid10',
  RAID1E = 'raid1E',
  RAID5 = 'raid5',
  RAID50 = 'raid50',
  RAID6 = 'raid6',
  RAID60 = 'raid60'
}

/**
 * A structure describing informations about this dedicated server installation status
 */
export interface DedicatedserverInstallationProgressStatus {
  elapsedTime: number
  progress?: DedicatedserverInstallationProgressSteps[]
}

/*
 * Distinct Installation status
 */
export enum DedicatedserverInstallationProgressStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  EXPIRED = 'expired',
  IDLE = 'idle',
  PENDING = 'pending',
  STOPPING = 'stopping',
  TODO = 'todo'
}

/**
 * A structure describing informations about this dedicated server installation steps
 */
export interface DedicatedserverInstallationProgressSteps {
  comment: string
  error?: string
  status: DedicatedserverInstallationProgressStatus
}

/**
 * A structure describing informations about installation custom
 */
export interface DedicatedserverInstallCustom {
  customHostname?: string
  diskGroupId?: number
  installRTM?: boolean
  installSqlServer?: boolean
  language?: string
  noRaid?: boolean
  postInstallationScriptLink?: string
  postInstallationScriptReturn?: string
  resetHwRaid?: boolean
  softRaidDevices?: number
  sshKeyName?: string
  useDistribKernel?: boolean
  useSpla?: boolean
}

/**
 * A structure describing informations about an Installation templates
 */
export interface DedicatedserverInstallTemplate {
  ovh?: string[]
  personal?: string[]
}

/**
 * Intervention made on this server
 */
export interface DedicatedserverIntervention {
  date?: string
  interventionId: number
  type?: string
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

/**
 * Server IPMI interface
 */
export interface DedicatedserverIpmi {
  activated: boolean
  supportedFeatures: DedicatedserverIpmiSupportedFeatures
}

/*
 * Distinct way to acces a KVM IPMI session
 */
export enum DedicatedserverIpmiAccessType {
  KVMIPHTML5URL = 'kvmipHtml5URL',
  KVMIPJNLP = 'kvmipJnlp',
  SERIALOVERLANSSHKEY = 'serialOverLanSshKey',
  SERIALOVERLANURL = 'serialOverLanURL'
}

/**
 * A structure describing ipmi access value
 */
export interface DedicatedserverIpmiAccessValue {
  expiration?: string
  value?: string
}

/**
 * A structure describing the IPMI supported features
 */
export interface DedicatedserverIpmiSupportedFeatures {
  kvmipHtml5URL: boolean
  kvmipJnlp: boolean
  serialOverLanSshKey: boolean
  serialOverLanURL: boolean
}

/**
 * A structure describing IPMI test result
 */
export interface DedicatedserverIpmiTestResult {
  date?: string
  status?: string
}

/*
 * Different test can be made on IPMI interface
 */
export enum DedicatedserverIpmiTestType {
  HTTP = 'http',
  PASSWORD = 'password',
  PING = 'ping'
}

/**
 * A structure describing informations about orderable IP address
 */
export interface DedicatedserverIpOrderable {
  ipv4?: DedicatedserverIpOrderableDetails[]
  ipv6?: DedicatedserverIpOrderableDetails[]
}

/**
 * A structure describing informations about orderable IP address
 */
export interface DedicatedserverIpOrderableDetails {
  blockSizes: DedicatedserverIpBlockSizeEnum[]
  included: boolean
  ipNumber?: number
  number: number
  optionRequired?: DedicatedserverOptionRequired
  type: DedicatedserverIpTypeOrderable
}

/*
 * Orderable IP type
 */
export enum DedicatedserverIpTypeOrderable {
  FAILOVER = 'failover',
  STATIC = 'static',
  UNSHIELDED = 'unshielded'
}

/**
 * Physical KVM
 */
export interface Dedicatedserverkvm {
  expiration: string
  ip?: string
  name: string
}

/*
 * Monitoring interval in seconds
 */
export type DedicatedserverMonitoringInterval = '1800' | '21600' | '300' | '3600'

/*
 * Monitoring protocol
 */
export enum DedicatedserverMonitoringProtocol {
  DNS = 'DNS',
  FTP = 'FTP',
  HTTP = 'HTTP',
  IMAP = 'IMAP',
  POP = 'POP',
  SMTP = 'SMTP',
  SSH = 'SSH',
  OPENTCP = 'openTCP'
}

/*
 * distincts MRTG period
 */
export enum DedicatedserverMrtgPeriod {
  DAILY = 'daily',
  HOURLY = 'hourly',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  YEARLY = 'yearly'
}

/**
 * A timestamp associated to a value
 */
export interface DedicatedserverMrtgTimestampValue {
  timestamp: number
  value?: any
}

/*
 * distincts MRTG type
 */
export enum DedicatedserverMrtgType {
  ERRORS_DOWNLOAD = 'errors:download',
  ERRORS_UPLOAD = 'errors:upload',
  PACKETS_DOWNLOAD = 'packets:download',
  PACKETS_UPLOAD = 'packets:upload',
  TRAFFIC_DOWNLOAD = 'traffic:download',
  TRAFFIC_UPLOAD = 'traffic:upload'
}

/**
 * Available boots
 */
export interface DedicatedserverNetboot {
  bootId: number
  bootType: DedicatedserverBootType
  description: string
  kernel: string
}

/**
 * Available boot options
 */
export interface DedicatedservernetbootOption {
  option: DedicatedserverBootOption
  value: string
}

/**
 * A structure describing network informations about this dedicated server
 */
export interface DedicatedserverNetworkSpecifications {
  bandwidth?: DedicatedserverBandwidthDetails
  connection?: any
  ola?: DedicatedserverOlaDetails
  routing?: DedicatedserverRoutingDetails
  switching?: DedicatedserverSwitchingDetails
  traffic?: DedicatedserverTrafficDetails
  vrack?: DedicatedserverBandwidthvRackDetails
}

/**
 * A structure describing OVH Link Aggregation available modes for this dedicated server
 */
export interface DedicatedserverOlaDetails {
  available: boolean
  supportedModes?: DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum[]
}

/**
 * Information about the options of a dedicated server
 */
export interface DedicatedserverOption {
  option: DedicatedserverOption
  state: DedicatedserverOptionState
}

/*
 * All options a dedicated server can have and release
 */
export enum DedicatedserverOption {
  BACKUPPROTOCOL = 'BACKUPPROTOCOL',
  BANDWIDTH = 'BANDWIDTH',
  BANDWIDTH_VRACK = 'BANDWIDTH_VRACK',
  OLA = 'OLA',
  SGX = 'SGX',
  TRAFFIC = 'TRAFFIC',
  TRAFFIC_DISCOVER = 'TRAFFIC_DISCOVER',
  TUNING = 'TUNING',
  TUNING_FIREWALL = 'TUNING_FIREWALL',
  TUNING_KVM = 'TUNING_KVM',
  USB_KVM_IP = 'USB_KVM_IP'
}

/*
 * Required option
 */
export enum DedicatedserverOptionRequired {
  PROFESSIONALUSE = 'professionalUse'
}

/*
 * All states a dedicated server option can be in
 */
export enum DedicatedserverOptionState {
  RELEASED = 'released',
  SUBSCRIBED = 'subscribed'
}

/*
 * Dedicated server orderable features
 */
export enum DedicatedserverOrderableSysFeature {
  BACKUPPROTOCOL = 'backupProtocol',
  MONITORING = 'monitoring'
}

/**
 * A structure describing routing informations about this dedicated server
 */
export interface DedicatedserverRoutingDetails {
  ipv4?: DedicatedserverRoutingDetailsIpv4
  ipv6?: DedicatedserverRoutingDetailsIpv6
}

/**
 * A structure describing IPv4 routing informations about this dedicated server
 */
export interface DedicatedserverRoutingDetailsIpv4 {
  gateway?: string
  ip?: string
  network?: any
}

/**
 * A structure describing IPv6 routing informations about this dedicated server
 */
export interface DedicatedserverRoutingDetailsIpv6 {
  gateway?: string
  ip?: any
  network?: any
}

/**
 * Servers statistics sent by RTM (Real Time Monitoring)
 */
export interface DedicatedserverRtm {
  currentVersion?: string
  installedVersion?: string
  needsUpdate: boolean
}

/*
 * distincts RTM charts period
 */
export enum DedicatedserverRtmChartPeriod {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  YEARLY = 'yearly'
}

/*
 * distincts probes type
 */
export enum DedicatedserverRtmChartType {
  CPU = 'cpu',
  LOADAVG1 = 'loadavg1',
  LOADAVG15 = 'loadavg15',
  LOADAVG5 = 'loadavg5',
  MEMORY = 'memory',
  PROCESSCOUNT = 'processCount',
  PROCESSRUNNING = 'processRunning',
  SWAP = 'swap'
}

/**
 * A structure describing informations about RTM
 */
export interface DedicatedserverRtmCommandSize {
  command?: string
  memory?: any
}

/**
 * A structure describing informations about opened sockets on the server
 */
export interface DedicatedserverRtmConnection {
  cmdline?: string
  domain?: string
  exe?: string
  ip?: string
  pid?: number
  port?: number
  procname?: string
  uid?: number
  username?: string
}

/**
 * A structure describing informations about server cpu
 */
export interface DedicatedserverRtmCpu {
  cache?: any
  core?: number
  freq?: any
  name?: string
}

/**
 * Server disks informations
 */
export interface DedicatedserverRtmDisk {
  capacity?: any
  disk: string
  model?: string
  temperature?: any
}

/**
 * A structure describing SMART health disk status
 */
export interface DedicatedserverRtmDiskSmart {
  current_pending_sector?: number
  multizone_error_rate?: number
  offline_seek_performance?: number
  offline_uncorrectable?: number
  other_errors?: number
  realocated_event_count?: number
  temperature_celsius?: number
  udma_crc_error?: number
  uncorrected_read_errors?: number
  uncorrected_write_errors?: number
}

/**
 * A structure describing informations about server load
 */
export interface DedicatedserverRtmLoad {
  cpu?: any
  loadavg1?: any
  loadavg15?: any
  loadavg5?: any
  memory?: any
  processCount?: number
  processRunning?: number
  swap?: any
  uptime?: number
}

/**
 * A structure describing informations about server memory
 */
export interface DedicatedserverRtmMemory {
  capacity?: any
  slot?: string
}

/**
 * A structure describing informations about motherboard
 */
export interface DedicatedserverRtmMotherboardHw {
  manufacturer?: string
  name?: string
}

/**
 * A structure describing informations about Rtm os
 */
export interface DedicatedserverRtmOs {
  kernelRelease?: string
  kernelVersion?: string
  release?: string
}

/**
 * Server partitions informations
 */
export interface DedicatedserverRtmPartition {
  inodeUsage?: any
  mountPoint?: string
  partition: string
  usage?: any
}

/**
 * A structure describing informations about server PCI devices
 */
export interface DedicatedserverRtmPci {
  bus?: string
  device?: string
}

/**
 * Server raid informations
 */
export interface DedicatedserverRtmRaid {
  unit: string
}

/*
 *  Different RAID status
 */
export enum DedicatedserverRtmRaidStatus {
  KO = 'KO',
  OK = 'OK',
  REBUILDING = 'REBUILDING',
  UNKNOWN = 'UNKNOWN'
}

/**
 * Server raid volume information
 */
export interface DedicatedserverRtmRaidVolume {
  capacity?: any
  chunks?: string
  label?: string
  letter?: string
  phys?: string
  status?: DedicatedserverRtmRaidStatus
  stripe?: string
  syncprogress?: string
  type?: string
  volume?: string
}

/**
 * Server raid volume port informations
 */
export interface DedicatedserverRtmRaidVolumePort {
  capacity?: any
  disk?: string
  model?: string
  port?: string
  serial?: string
  status?: DedicatedserverRtmRaidStatus
  syncprogress?: string
}

/**
 * Server bandwidth burst details
 */
export interface DedicatedserverServerBurst {
  capacity?: any
  status: DedicatedserverBurstStatus
}

/**
 * Service monitoring details
 */
export interface DedicatedserverserviceMonitoring {
  challengeText?: string
  enabled: boolean
  interval: DedicatedserverMonitoringInterval
  ip: string
  monitoringId: number
  port: number
  protocol: DedicatedserverMonitoringProtocol
  url?: string
}

/**
 * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
 */
export interface DedicatedserversmsAlert {
  alertId: number
  enabled: boolean
  fromHour?: number
  language: DedicatedserverAlertLanguage
  phoneNumberTo: string
  smsAccount: string
  toHour?: number
}

/**
 * SPLA licenses management
 */
export interface Dedicatedserverspla {
  id: number
  lastUpdate: string
  serialNumber: string
  status: DedicatedserverSplaStatus
  type: DedicatedserverSplaType
}

/*
 * SPLA license status
 */
export enum DedicatedserverSplaStatus {
  TERMINATED = 'terminated',
  USED = 'used',
  WAITINGTOCHECK = 'waitingToCheck'
}

/*
 * SPLA license type
 */
export enum DedicatedserverSplaType {
  OS = 'os',
  SQLSTD = 'sqlstd',
  SQLWEB = 'sqlweb'
}

/*
 * All states a Dedicated can in
 */
export enum DedicatedserverState {
  ERROR = 'error',
  HACKED = 'hacked',
  HACKEDBLOCKED = 'hackedBlocked',
  OK = 'ok'
}

/*
 * distincts support level
 */
export enum DedicatedserverSupportLevel {
  CRITICAL = 'critical',
  FASTPATH = 'fastpath',
  GS = 'gs',
  PRO = 'pro'
}

/**
 * A structure describing informations support level orderable for this dedicated server
 */
export interface DedicatedserverSupportLevelOrderable {
  levels?: DedicatedserverSupportLevelOrderableEnum[]
  orderable: boolean
}

/*
 * distincts support level
 */
export enum DedicatedserverSupportLevelOrderable {
  CRITICAL = 'critical',
  FASTPATH = 'fastpath',
  GS = 'gs'
}

/**
 * Hdd replace support request details. 
 */
export interface DedicatedserverSupportReplaceHddInfo {
  disk_serial: string
  slot_id?: number
}

/**
 * A structure describing switching informations about this dedicated server
 */
export interface DedicatedserverSwitchingDetails {
  name?: string
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

/**
 * Miscellaneous template capabilities regarding the server.
 */
export interface DedicatedserverTemplateCaps {
  hybridSupport: boolean
}

/**
 * A structure describing traffic informations about this dedicated server
 */
export interface DedicatedserverTrafficDetails {
  inputQuotaSize?: any
  inputQuotaUsed?: any
  isThrottled?: boolean
  outputQuotaSize?: any
  outputQuotaUsed?: any
  resetQuotaDate?: string
}

/**
 * A structure describing informations bandwidth orderable for this dedicated server
 */
export interface DedicatedserverTrafficOrderable {
  orderable: boolean
  traffic?: DedicatedserverTrafficOrderEnum[]
}

/*
 *  traffic orderable 
 */
export type DedicatedserverTrafficOrder = '100Mbps-Unlimited' | '250Mbps-Unlimited' | '500Mbps-Unlimited'

/*
 *  Different USB key capacity in gigabytes
 */
export type DedicatedserverUsbKeyCapacity = 128 | 16 | 256 | 32 | 64

/**
 * A structure describing informations about orderable USB keys
 */
export interface DedicatedserverUsbKeyOrderableDetails {
  capacity: DedicatedserverUsbKeyCapacityEnum[]
  number: number
  optionRequired?: DedicatedserverOptionRequired
  orderable: boolean
}

/**
 * A virtual MAC address associated to one or more IPs
 */
export interface DedicatedserverVirtualMac {
  macAddress: string
  type: DedicatedserverVmacType
}

/**
 *  ip address linked with this virtual mac address
 */
export interface DedicatedserverVirtualMacManagement {
  ipAddress: string
  virtualMachineName: string
}

/*
 * Distinct type of virtual mac
 */
export enum DedicatedserverVmacType {
  OVH = 'ovh',
  VMWARE = 'vmware'
}

/*
 * enable or disable
 */
export enum DedicatedStatus {
  DISABLE = 'disable',
  ENABLE = 'enable'
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

/**
 * Your VirtualNetworkInterface
 */
export interface DedicatedvirtualNetworkInterfaceVirtualNetworkInterface {
  enabled: boolean
  mode: DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode
  name: string
  networkInterfaceController: any
  serverName: string
  uuid: string
  vrack?: string
}

/*
 * Available VirtualNetworkInterface modes
 */
export enum DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode {
  PUBLIC = 'public',
  VRACK = 'vrack',
  VRACK_AGGREGATION = 'vrack_aggregation'
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
 * OVH subsidiaries
 */
export enum NichandleOvhSubsidiary {
  ASIA = 'ASIA',
  AU = 'AU',
  CA = 'CA',
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
  QC = 'QC',
  SG = 'SG',
  SN = 'SN',
  TN = 'TN',
  US = 'US',
  WE = 'WE',
  WS = 'WS'
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
 * A structure describing informations about secondary dns check field
 */
export interface SecondaryDnsSecondaryDNSCheckField {
  fieldType: ZoneNamedResolutionFieldType
  fieldValue: string
  subDomain: string
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
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  messageId: number
  ticketId: number
  ticketNumber: number
}

/**
 * vrack dedicated server interfaces
 */
export interface VrackdedicatedServer {
  dedicatedServer: string
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


export class DedicatedServer {
  constructor(private client: Client) {}

  /**
   * Operations about the DEDICATED service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/dedicated/server`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Server informations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D#GET)
   */
  GetServer(serviceName: string): Promise<DedicatedserverDedicated> {
    let url = `/dedicated/server/${serviceName}`

    return this.client.request<DedicatedserverDedicated>('GET', url)
  }

  /**
   * Server informations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: DedicatedserverDedicated): Promise<void> {
    let url = `/dedicated/server/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * authenticationSecret operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/authenticationSecret#POST)
   */
  RetrieveSecretToConnectToTheServerApplication(serviceName: string): Promise<DedicatedserverAccess[]> {
    let url = `/dedicated/server/${serviceName}/authenticationSecret`

    return this.client.request<DedicatedserverAccess[]>('POST', url)
  }

  /**
   * backupCloudOfferDetails operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/backupCloudOfferDetails#GET)
   */
  GetDetailsOnOfferedBackupCloudIfAvailableForTheCurrentServer(serviceName: string): Promise<DedicatedserverbackupBackupOffer> {
    let url = `/dedicated/server/${serviceName}/backupCloudOfferDetails`

    return this.client.request<DedicatedserverbackupBackupOffer>('GET', url)
  }

  /**
   * List the dedicated.server.Netboot objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot#GET)
   */
  ServerCompatiblesNetboots(serviceName: string, bootType?: DedicatedserverBootType): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/boot?`

    const queryParams = new QueryParams()
    if (bootType) { queryParams.set('bootType', bootType.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Available boots [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot/%7BbootId%7D#GET)
   */
  /*
  GetThisObjectProperties(bootId: number, serviceName: string): Promise<DedicatedserverNetboot> {
    let url = `/dedicated/server/${serviceName}/boot/${bootId}`

    return this.client.request<DedicatedserverNetboot>('GET', url)
  }
  */

  /**
   * List the dedicated.server.netbootOption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot/%7BbootId%7D/option#GET)
   */
  OptionUsedOnThisNetboot(bootId: number, serviceName: string): Promise<DedicatedserverBootOptionEnum[]> {
    let url = `/dedicated/server/${serviceName}/boot/${bootId}/option`

    return this.client.request<DedicatedserverBootOptionEnum[]>('GET', url)
  }

  /**
   * Available boot options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot/%7BbootId%7D/option/%7Boption%7D#GET)
   */
  /*
  GetThisObjectProperties(bootId: number, option: DedicatedserverBootOption, serviceName: string): Promise<DedicatedservernetbootOption> {
    let url = `/dedicated/server/${serviceName}/boot/${bootId}/option/${option}`

    return this.client.request<DedicatedservernetbootOption>('GET', url)
  }
  */

  /**
   * Server bandwidth burst details [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/burst#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedserverServerBurst> {
    let url = `/dedicated/server/${serviceName}/burst`

    return this.client.request<DedicatedserverServerBurst>('GET', url)
  }
  */

  /**
   * Server bandwidth burst details [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/burst#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: DedicatedserverServerBurst): Promise<void> {
    let url = `/dedicated/server/${serviceName}/burst`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/dedicated/server/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Backup Cloud assigned to this server [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedserverBackupCloud> {
    let url = `/dedicated/server/${serviceName}/features/backupCloud`

    return this.client.request<DedicatedserverBackupCloud>('GET', url)
  }
  */

  /**
   * Backup Cloud assigned to this server [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud#POST)
   */
  CreateANewStorageBackupSpaceAssociatedToServer(serviceName: string, cloudProjectId?: string, projectDescription?: string): Promise<DedicatedserverBackupCloud> {
    let url = `/dedicated/server/${serviceName}/features/backupCloud`

    return this.client.request<DedicatedserverBackupCloud>('POST', url, {cloudProjectId, projectDescription})
  }

  /**
   * Backup Cloud assigned to this server [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud#DELETE)
   */
  DeactivateTheCloudBackupAssociatedToTheServerThisDoesNotDeleteContainerData(serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/features/backupCloud`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * password operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud/password#POST)
   */
  ChangeYourCloudAccountPassword(serviceName: string): Promise<DedicatedserverbackupBackupPassword> {
    let url = `/dedicated/server/${serviceName}/features/backupCloud/password`

    return this.client.request<DedicatedserverbackupBackupPassword>('POST', url)
  }

  /**
   * Backup Ftp assigned to this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedserverBackupFtp> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP`

    return this.client.request<DedicatedserverBackupFtp>('GET', url)
  }
  */

  /**
   * Backup Ftp assigned to this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP#POST)
   */
  CreateANewBackupFTPSpace(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * Backup Ftp assigned to this server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP#DELETE)
   */
  TerminateYourBackupFTPServiceALLDATAWILLBEPERMANENTLYDELETED(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP`

    return this.client.request<DedicatedserverTask>('DELETE', url)
  }

  /**
   * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access#GET)
   */
  ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP/access`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access#POST)
   */
  CreateANewBackupFTPACL(cifs: boolean, ipBlock: string, nfs: boolean, serviceName: string, ftp?: boolean): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP/access`

    return this.client.request<DedicatedserverTask>('POST', url, {cifs, ipBlock, nfs, ftp})
  }

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#GET)
   */
  /*
  GetThisObjectProperties(ipBlock: string, serviceName: string): Promise<DedicatedserverBackupFtpAcl> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`

    return this.client.request<DedicatedserverBackupFtpAcl>('GET', url)
  }
  */

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ipBlock: string, serviceName: string, payload: DedicatedserverBackupFtpAcl): Promise<void> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#DELETE)
   */
  RevokeThisACL(ipBlock: string, serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`

    return this.client.request<DedicatedserverTask>('DELETE', url)
  }

  /**
   * authorizableBlocks operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/authorizableBlocks#GET)
   */
  GetAllIPBlocksThatCanBeUsedInTheACL(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP/authorizableBlocks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * password operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/password#POST)
   */
  ChangeYourBackupFTPPassword(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/backupFTP/password`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * Firewall attached to this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/firewall#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedserverFirewall> {
    let url = `/dedicated/server/${serviceName}/features/firewall`

    return this.client.request<DedicatedserverFirewall>('GET', url)
  }
  */

  /**
   * Firewall attached to this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/firewall#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: DedicatedserverFirewall): Promise<void> {
    let url = `/dedicated/server/${serviceName}/features/firewall`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Server IPMI interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedserverIpmi> {
    let url = `/dedicated/server/${serviceName}/features/ipmi`

    return this.client.request<DedicatedserverIpmi>('GET', url)
  }
  */

  /**
   * access operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/access#GET)
   */
  IPMIAccessMethod(serviceName: string, type: DedicatedserverIpmiAccessType): Promise<DedicatedserverIpmiAccessValue> {
    let url = `/dedicated/server/${serviceName}/features/ipmi/access?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<DedicatedserverIpmiAccessValue>('GET', url+queryParams.toString())
  }

  /**
   * access operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/access#POST)
   */
  RequestAnAccesOnKVMIPMIInterface(serviceName: string, ttl: DedicatedserverCacheTTL, type: DedicatedserverIpmiAccessType, ipToAllow?: string, sshKey?: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/ipmi/access`

    return this.client.request<DedicatedserverTask>('POST', url, {ttl, type, ipToAllow, sshKey})
  }

  /**
   * resetInterface operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/resetInterface#POST)
   */
  ResetKVMIPMIInterface(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/ipmi/resetInterface`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * resetSessions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/resetSessions#POST)
   */
  ResetKVMIPMISessions(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/ipmi/resetSessions`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * test operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/test#GET)
   */
  ResultOfHttpPingAndIdentificationTestsOnIPMIInterface(serviceName: string, type: DedicatedserverIpmiTestType): Promise<DedicatedserverIpmiTestResult> {
    let url = `/dedicated/server/${serviceName}/features/ipmi/test?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<DedicatedserverIpmiTestResult>('GET', url+queryParams.toString())
  }

  /**
   * test operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/test#POST)
   */
  LaunchTestOnKVMIPMIInterface(serviceName: string, ttl: DedicatedserverCacheTTL, type: DedicatedserverIpmiTestType): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/features/ipmi/test`

    return this.client.request<DedicatedserverTask>('POST', url, {ttl, type})
  }

  /**
   * Physical KVM [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/kvm#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<Dedicatedserverkvm> {
    let url = `/dedicated/server/${serviceName}/features/kvm`

    return this.client.request<Dedicatedserverkvm>('GET', url)
  }
  */

  /**
   * compatible operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/firewall/binary/compatible#GET)
   */
  GetNameBinaryForAsa(serviceName: string): Promise<DedicatedBinaryFirewall> {
    let url = `/dedicated/server/${serviceName}/firewall/binary/compatible`

    return this.client.request<DedicatedBinaryFirewall>('GET', url)
  }

  /**
   * link operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/firewall/binary/link#GET)
   */
  GetUrlOfBinaryToUpdateFirewallAsa(binaryName: string, serviceName: string): Promise<DedicatedBinaryFirewallLink> {
    let url = `/dedicated/server/${serviceName}/firewall/binary/link?`

    const queryParams = new QueryParams()
    if (binaryName) { queryParams.set('binaryName', binaryName) }

    return this.client.request<DedicatedBinaryFirewallLink>('GET', url+queryParams.toString())
  }

  /**
   * compatibleTemplatePartitionSchemes operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/compatibleTemplatePartitionSchemes#GET)
   */
  RetrieveCompatibleInstallTemplatePartitionsScheme(serviceName: string, templateName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/install/compatibleTemplatePartitionSchemes?`

    const queryParams = new QueryParams()
    if (templateName) { queryParams.set('templateName', templateName) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * compatibleTemplates operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/compatibleTemplates#GET)
   */
  RetrieveCompatibleInstallTemplatesNames(serviceName: string): Promise<DedicatedserverInstallTemplate> {
    let url = `/dedicated/server/${serviceName}/install/compatibleTemplates`

    return this.client.request<DedicatedserverInstallTemplate>('GET', url)
  }

  /**
   * hardwareRaidProfile operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/hardwareRaidProfile#GET)
   */
  RetrieveHardwareRAIDProfile(serviceName: string): Promise<DedicatedserverHardwareRaidProfile> {
    let url = `/dedicated/server/${serviceName}/install/hardwareRaidProfile`

    return this.client.request<DedicatedserverHardwareRaidProfile>('GET', url)
  }

  /**
   * hardwareRaidSize operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/hardwareRaidSize#GET)
   */
  GetHardwareRAIDSizeForAGivenConfiguration(partitionSchemeName: string, serviceName: string, templateName: string): Promise<DedicatedserverHardwareRaidSize> {
    let url = `/dedicated/server/${serviceName}/install/hardwareRaidSize?`

    const queryParams = new QueryParams()
    if (partitionSchemeName) { queryParams.set('partitionSchemeName', partitionSchemeName) }
    if (templateName) { queryParams.set('templateName', templateName) }

    return this.client.request<DedicatedserverHardwareRaidSize>('GET', url+queryParams.toString())
  }

  /**
   * start operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/start#POST)
   */
  StartAnInstall(serviceName: string, templateName: string, details?: DedicatedserverInstallCustom, partitionSchemeName?: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/install/start`

    return this.client.request<DedicatedserverTask>('POST', url, {templateName, details, partitionSchemeName})
  }

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/status#GET)
   */
  GetInstallationStatus(serviceName: string): Promise<DedicatedserverInstallationProgressStatus> {
    let url = `/dedicated/server/${serviceName}/install/status`

    return this.client.request<DedicatedserverInstallationProgressStatus>('GET', url)
  }

  /**
   * templateCapabilities operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/templateCapabilities#GET)
   */
  GivesSomeCapabilitiesRegardingTheTemplateForTheCurrentDedicatedServer(serviceName: string, templateName: string): Promise<DedicatedserverTemplateCaps> {
    let url = `/dedicated/server/${serviceName}/install/templateCapabilities?`

    const queryParams = new QueryParams()
    if (templateName) { queryParams.set('templateName', templateName) }

    return this.client.request<DedicatedserverTemplateCaps>('GET', url+queryParams.toString())
  }

  /**
   * List the dedicated.server.Intervention objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/intervention#GET)
   */
  TechnicalInterventionHistory(serviceName: string): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/intervention`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Intervention made on this server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/intervention/%7BinterventionId%7D#GET)
   */
  /*
  GetThisObjectProperties(interventionId: number, serviceName: string): Promise<DedicatedserverIntervention> {
    let url = `/dedicated/server/${serviceName}/intervention/${interventionId}`

    return this.client.request<DedicatedserverIntervention>('GET', url)
  }
  */

  /**
   * ipBlockMerge operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipBlockMerge#POST)
   */
  MergeASplittedBlockAndRouteItToTheChoosenServerYouCannotUndoThisOperation(block: string, serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/ipBlockMerge`

    return this.client.request<DedicatedserverTask>('POST', url, {block})
  }

  /**
   * ipCanBeMovedTo operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipCanBeMovedTo#GET)
   */
  CheckIfGivenIPCanBeMovedToThisServer(ip: string, serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/ipCanBeMovedTo?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }

    return this.client.request<void>('GET', url+queryParams.toString())
  }

  /**
   * ipCountryAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipCountryAvailable#GET)
   */
  RetrieveAvailableCountryForIPOrder(serviceName: string): Promise<DedicatedserverIpCountryEnum[]> {
    let url = `/dedicated/server/${serviceName}/ipCountryAvailable`

    return this.client.request<DedicatedserverIpCountryEnum[]>('GET', url)
  }

  /**
   * ipMove operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipMove#POST)
   */
  MoveAnIpFailoverToThisServer(ip: string, serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/ipMove`

    return this.client.request<DedicatedserverTask>('POST', url, {ip})
  }

  /**
   * ips operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ips#GET)
   */
  ListAllIpFromServer(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/ips`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * compliantWindows operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/license/compliantWindows#GET)
   */
  GetTheWindowsLicenseCompliantWithYourServer(serviceName: string): Promise<LicenseWindowsOsVersionEnum[]> {
    let url = `/dedicated/server/${serviceName}/license/compliantWindows`

    return this.client.request<LicenseWindowsOsVersionEnum[]>('GET', url)
  }

  /**
   * compliantWindowsSqlServer operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/license/compliantWindowsSqlServer#GET)
   */
  GetTheWindowsSQLServerLicenseCompliantWithYourServer(serviceName: string): Promise<LicenseWindowsSqlVersionEnum[]> {
    let url = `/dedicated/server/${serviceName}/license/compliantWindowsSqlServer`

    return this.client.request<LicenseWindowsSqlVersionEnum[]>('GET', url)
  }

  /**
   * windows operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/license/windows#POST)
   */
  AddYourExistingWindowsLicenseSerialToThisDedicatedServerWillBeManageableInLicensewindows(licenseId: string, serviceName: string, version: LicenseWindowsOsVersion): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/license/windows`

    return this.client.request<DedicatedserverTask>('POST', url, {licenseId, version})
  }

  /**
   * mrtg operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/mrtg#GET)
   */
  RetrieveTrafficGraphValues(period: DedicatedserverMrtgPeriod, serviceName: string, type: DedicatedserverMrtgType): Promise<DedicatedserverMrtgTimestampValue[]> {
    let url = `/dedicated/server/${serviceName}/mrtg?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<DedicatedserverMrtgTimestampValue[]>('GET', url+queryParams.toString())
  }

  /**
   * List the dedicated.networkInterfaceController.NetworkInterfaceController objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/networkInterfaceController#GET)
   */
  ListServerNetworkInterfaceController(serviceName: string, linkType?: DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType): Promise<any> {
    let url = `/dedicated/server/${serviceName}/networkInterfaceController?`

    const queryParams = new QueryParams()
    if (linkType) { queryParams.set('linkType', linkType.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Your networkInterfaceController [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/networkInterfaceController/%7Bmac%7D#GET)
   */
  /*
  GetThisObjectProperties(mac: any, serviceName: string): Promise<DedicatednetworkInterfaceControllerNetworkInterfaceController> {
    let url = `/dedicated/server/${serviceName}/networkInterfaceController/${mac}`

    return this.client.request<DedicatednetworkInterfaceControllerNetworkInterfaceController>('GET', url)
  }
  */

  /**
   * mrtg operations [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/networkInterfaceController/%7Bmac%7D/mrtg#GET)
   */
  /*
  RetrieveTrafficGraphValues(mac: any, period: DedicatedserverMrtgPeriod, serviceName: string, type: DedicatedserverMrtgType): Promise<DedicatedserverMrtgTimestampValue[]> {
    let url = `/dedicated/server/${serviceName}/networkInterfaceController/${mac}/mrtg?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<DedicatedserverMrtgTimestampValue[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * group operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ola/group#POST)
   */
  OLA_GroupInterfacesIntoAnAggregation(name: string, serviceName: string, virtualNetworkInterfaces: string[]): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/ola/group`

    return this.client.request<DedicatedserverTask>('POST', url, {name, virtualNetworkInterfaces})
  }

  /**
   * ungroup operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ola/ungroup#POST)
   */
  OLA_UngroupInterfaces(serviceName: string, virtualNetworkInterface: string): Promise<DedicatedserverTask[]> {
    let url = `/dedicated/server/${serviceName}/ola/ungroup`

    return this.client.request<DedicatedserverTask[]>('POST', url, {virtualNetworkInterface})
  }

  /**
   * List the dedicated.server.Option objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/option#GET)
   */
  ListOfDedicatedServerOptions(serviceName: string): Promise<DedicatedserverOptionEnum[]> {
    let url = `/dedicated/server/${serviceName}/option`

    return this.client.request<DedicatedserverOptionEnum[]>('GET', url)
  }

  /**
   * Information about the options of a dedicated server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/option/%7Boption%7D#GET)
   */
  /*
  GetThisObjectProperties(option: DedicatedserverOption, serviceName: string): Promise<DedicatedserverOption> {
    let url = `/dedicated/server/${serviceName}/option/${option}`

    return this.client.request<DedicatedserverOption>('GET', url)
  }
  */

  /**
   * Information about the options of a dedicated server [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/option/%7Boption%7D#DELETE)
   */
  ReleaseAGivenOption(option: DedicatedserverOption, serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/option/${option}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * backupStorage operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/backupStorage#GET)
   */
  GetTheBackupStorageOrderableWithYourServer(serviceName: string): Promise<DedicatedserverBackupStorageOrderable> {
    let url = `/dedicated/server/${serviceName}/orderable/backupStorage`

    return this.client.request<DedicatedserverBackupStorageOrderable>('GET', url)
  }

  /**
   * bandwidth operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/bandwidth#GET)
   */
  GetBandwidthOrderableWithYourServer(serviceName: string): Promise<DedicatedserverBandwidthOrderable> {
    let url = `/dedicated/server/${serviceName}/orderable/bandwidth`

    return this.client.request<DedicatedserverBandwidthOrderable>('GET', url)
  }

  /**
   * bandwidthvRack operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/bandwidthvRack#GET)
   */
  GetVRackBandwidthOrderableWithYourServer(serviceName: string): Promise<DedicatedserverBandwidthvRackOrderable> {
    let url = `/dedicated/server/${serviceName}/orderable/bandwidthvRack`

    return this.client.request<DedicatedserverBandwidthvRackOrderable>('GET', url)
  }

  /**
   * feature operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/feature#GET)
   */
  IsThisFeatureOrderableWithYourServer(feature: DedicatedserverOrderableSysFeature, serviceName: string): Promise<boolean> {
    let url = `/dedicated/server/${serviceName}/orderable/feature?`

    const queryParams = new QueryParams()
    if (feature) { queryParams.set('feature', feature.toString()) }

    return this.client.request<boolean>('GET', url+queryParams.toString())
  }

  /**
   * ip operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/ip#GET)
   */
  GetIPOrderableWithYourServer(serviceName: string): Promise<DedicatedserverIpOrderable> {
    let url = `/dedicated/server/${serviceName}/orderable/ip`

    return this.client.request<DedicatedserverIpOrderable>('GET', url)
  }

  /**
   * kvm operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/kvm#GET)
   */
  IsAKVMOrderableWithYourServer(serviceName: string): Promise<boolean> {
    let url = `/dedicated/server/${serviceName}/orderable/kvm`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * kvmExpress operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/kvmExpress#GET)
   */
  IsAKVMExpressOrderableWithYourServer(serviceName: string): Promise<boolean> {
    let url = `/dedicated/server/${serviceName}/orderable/kvmExpress`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * professionalUse operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/professionalUse#GET)
   */
  IsProfessionalUseOrderableWithYourServer(serviceName: string): Promise<boolean> {
    let url = `/dedicated/server/${serviceName}/orderable/professionalUse`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * traffic operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/traffic#GET)
   */
  GetOrderableTrafficWithYourServer(serviceName: string): Promise<DedicatedserverTrafficOrderable> {
    let url = `/dedicated/server/${serviceName}/orderable/traffic`

    return this.client.request<DedicatedserverTrafficOrderable>('GET', url)
  }

  /**
   * usbKey operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/usbKey#GET)
   */
  GetUSBKeysOrderableWithYourServer(serviceName: string): Promise<DedicatedserverUsbKeyOrderableDetails> {
    let url = `/dedicated/server/${serviceName}/orderable/usbKey`

    return this.client.request<DedicatedserverUsbKeyOrderableDetails>('GET', url)
  }

  /**
   * reboot operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/reboot#POST)
   */
  HardRebootThisServer(serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/reboot`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains#GET)
   */
  ListOfSecondaryDnsDomainName(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsDomains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains#POST)
   */
  AddADomainOnSecondaryDns(domain: string, serviceName: string, ip?: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsDomains`

    return this.client.request<void>('POST', url, {domain, ip})
  }

  /**
   * Secondary dns infos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNS> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}`

    return this.client.request<SecondaryDnsSecondaryDNS>('GET', url)
  }
  */

  /**
   * Secondary dns infos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#PUT)
   */
  /*
  AlterThisObjectProperties(domain: string, serviceName: string, payload: SecondaryDnsSecondaryDNS): Promise<void> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Secondary dns infos [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#DELETE)
   */
  RemoveThisDomain(domain: string, serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * dnsServer operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D/dnsServer#GET)
   */
  DomainNameServerInformations(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}/dnsServer`

    return this.client.request<SecondaryDnsSecondaryDNSNameServer>('GET', url)
  }

  /**
   * secondaryDnsNameDomainToken operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsNameDomainToken#GET)
   */
  DNSFieldToTemporarilyAddToYourZoneSoThatWeCanVerifyYouAreTheOwnerOfThisDomain(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNSCheckField> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsNameDomainToken?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<SecondaryDnsSecondaryDNSCheckField>('GET', url+queryParams.toString())
  }

  /**
   * secondaryDnsNameServerAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsNameServerAvailable#GET)
   */
  SecondaryNameServerAvailableForYourServer(serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer> {
    let url = `/dedicated/server/${serviceName}/secondaryDnsNameServerAvailable`

    return this.client.request<SecondaryDnsSecondaryDNSNameServer>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/dedicated/server/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/dedicated/server/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the dedicated.server.serviceMonitoring objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring#GET)
   */
  ServiceMonitoringDetails(serviceName: string): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicated.server.serviceMonitoring objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring#POST)
   */
  AddANewServiceMonitoring(enabled: boolean, interval: DedicatedserverMonitoringInterval, ip: string, port: number, protocol: DedicatedserverMonitoringProtocol, serviceName: string, challengeText?: string, _url?: string): Promise<DedicatedserverserviceMonitoring> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring`

    return this.client.request<DedicatedserverserviceMonitoring>('POST', url, {enabled, interval, ip, port, protocol, challengeText, _url})
  }

  /**
   * Service monitoring details [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D#GET)
   */
  /*
  GetThisObjectProperties(monitoringId: number, serviceName: string): Promise<DedicatedserverserviceMonitoring> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}`

    return this.client.request<DedicatedserverserviceMonitoring>('GET', url)
  }
  */

  /**
   * Service monitoring details [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(monitoringId: number, serviceName: string, payload: DedicatedserverserviceMonitoring): Promise<void> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Service monitoring details [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D#DELETE)
   */
  RemoveThisServiceMonitoring(monitoringId: number, serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the dedicated.server.emailAlert objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email#GET)
   */
  ServiceMonitoringAlertByEmail(monitoringId: number, serviceName: string): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicated.server.emailAlert objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email#POST)
   */
  AddANewEmailAlert(email: string, language: DedicatedserverAlertLanguage, monitoringId: number, serviceName: string): Promise<DedicatedserveremailAlert> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email`

    return this.client.request<DedicatedserveremailAlert>('POST', url, {email, language})
  }

  /**
   * Service monitoring Email alert [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email/%7BalertId%7D#GET)
   */
  /*
  GetThisObjectProperties(alertId: number, monitoringId: number, serviceName: string): Promise<DedicatedserveremailAlert> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email/${alertId}`

    return this.client.request<DedicatedserveremailAlert>('GET', url)
  }
  */

  /**
   * Service monitoring Email alert [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email/%7BalertId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(alertId: number, monitoringId: number, serviceName: string, payload: DedicatedserveremailAlert): Promise<void> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email/${alertId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Service monitoring Email alert [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email/%7BalertId%7D#DELETE)
   */
  RemoveThisEmailAlertMonitoring(alertId: number, monitoringId: number, serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email/${alertId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the dedicated.server.smsAlert objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms#GET)
   */
  ServiceMonitoringAlertBySMS(monitoringId: number, serviceName: string): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the dedicated.server.smsAlert objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms#POST)
   */
  CreateASMSAlert(language: DedicatedserverAlertLanguage, monitoringId: number, phoneNumberTo: string, serviceName: string, smsAccount: string, fromHour?: number, toHour?: number): Promise<DedicatedserversmsAlert> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms`

    return this.client.request<DedicatedserversmsAlert>('POST', url, {language, phoneNumberTo, smsAccount, fromHour, toHour})
  }

  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS  [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms/%7BalertId%7D#GET)
   */
  /*
  GetThisObjectProperties(alertId: number, monitoringId: number, serviceName: string): Promise<DedicatedserversmsAlert> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms/${alertId}`

    return this.client.request<DedicatedserversmsAlert>('GET', url)
  }
  */

  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS  [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms/%7BalertId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(alertId: number, monitoringId: number, serviceName: string, payload: DedicatedserversmsAlert): Promise<void> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms/${alertId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS  [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms/%7BalertId%7D#DELETE)
   */
  RemoveThisSMSAlert(alertId: number, monitoringId: number, serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms/${alertId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * hardware operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/specifications/hardware#GET)
   */
  RetrieveHardwareInformationsAboutThisDedicatedServer(serviceName: string): Promise<DedicatedserverHardwareSpecifications> {
    let url = `/dedicated/server/${serviceName}/specifications/hardware`

    return this.client.request<DedicatedserverHardwareSpecifications>('GET', url)
  }

  /**
   * ip operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/specifications/ip#GET)
   */
  RetrieveIPCapabilitiesAboutThisDedicatedServer(serviceName: string): Promise<DedicatedserverIpOrderable> {
    let url = `/dedicated/server/${serviceName}/specifications/ip`

    return this.client.request<DedicatedserverIpOrderable>('GET', url)
  }

  /**
   * network operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/specifications/network#GET)
   */
  RetrieveNetworkInformationsAboutThisDedicatedServer(serviceName: string): Promise<DedicatedserverNetworkSpecifications> {
    let url = `/dedicated/server/${serviceName}/specifications/network`

    return this.client.request<DedicatedserverNetworkSpecifications>('GET', url)
  }

  /**
   * List the dedicated.server.spla objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla#GET)
   */
  YourOwnSPLALicensesAttachedToThisDedicatedServer(serviceName: string, status?: DedicatedserverSplaStatus, type?: DedicatedserverSplaType): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/spla?`

    const queryParams = new QueryParams()
    if (status) { queryParams.set('status', status.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the dedicated.server.spla objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla#POST)
   */
  AddANewSPLALicense(serialNumber: string, serviceName: string, type: DedicatedserverSplaType): Promise<number> {
    let url = `/dedicated/server/${serviceName}/spla`

    return this.client.request<number>('POST', url, {serialNumber, type})
  }

  /**
   * SPLA licenses management [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Dedicatedserverspla> {
    let url = `/dedicated/server/${serviceName}/spla/${id}`

    return this.client.request<Dedicatedserverspla>('GET', url)
  }
  */

  /**
   * SPLA licenses management [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: Dedicatedserverspla): Promise<void> {
    let url = `/dedicated/server/${serviceName}/spla/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * revoke operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla/%7Bid%7D/revoke#POST)
   */
  RevokeAnSPLALicense(id: number, serviceName: string): Promise<void> {
    let url = `/dedicated/server/${serviceName}/spla/${id}/revoke`

    return this.client.request<void>('POST', url)
  }

  /**
   * Servers statistics sent by RTM (Real Time Monitoring) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<DedicatedserverRtm> {
    let url = `/dedicated/server/${serviceName}/statistics`

    return this.client.request<DedicatedserverRtm>('GET', url)
  }
  */

  /**
   * chart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/chart#GET)
   */
  RetrieveRTMGraphValues(period: DedicatedserverRtmChartPeriod, serviceName: string, type: DedicatedserverRtmChartType): Promise<ComplexTypeChartReturn> {
    let url = `/dedicated/server/${serviceName}/statistics/chart?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<ComplexTypeChartReturn>('GET', url+queryParams.toString())
  }

  /**
   * connection operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/connection#GET)
   */
  GetServerOpenedConnections(serviceName: string): Promise<DedicatedserverRtmConnection[]> {
    let url = `/dedicated/server/${serviceName}/statistics/connection`

    return this.client.request<DedicatedserverRtmConnection[]>('GET', url)
  }

  /**
   * cpu operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/cpu#GET)
   */
  GetServerCpuInformations(serviceName: string): Promise<DedicatedserverRtmCpu> {
    let url = `/dedicated/server/${serviceName}/statistics/cpu`

    return this.client.request<DedicatedserverRtmCpu>('GET', url)
  }

  /**
   * List the dedicated.server.RtmDisk objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/disk#GET)
   */
  ServerDisks(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/statistics/disk`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Server disks informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/disk/%7Bdisk%7D#GET)
   */
  /*
  GetThisObjectProperties(disk: string, serviceName: string): Promise<DedicatedserverRtmDisk> {
    let url = `/dedicated/server/${serviceName}/statistics/disk/${disk}`

    return this.client.request<DedicatedserverRtmDisk>('GET', url)
  }
  */

  /**
   * smart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/disk/%7Bdisk%7D/smart#GET)
   */
  GetDiskSmartInformations(disk: string, serviceName: string): Promise<DedicatedserverRtmDiskSmart> {
    let url = `/dedicated/server/${serviceName}/statistics/disk/${disk}/smart`

    return this.client.request<DedicatedserverRtmDiskSmart>('GET', url)
  }

  /**
   * load operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/load#GET)
   */
  GetServerLoad(serviceName: string): Promise<DedicatedserverRtmLoad> {
    let url = `/dedicated/server/${serviceName}/statistics/load`

    return this.client.request<DedicatedserverRtmLoad>('GET', url)
  }

  /**
   * memory operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/memory#GET)
   */
  GetServerMemoryInformations(serviceName: string): Promise<DedicatedserverRtmMemory[]> {
    let url = `/dedicated/server/${serviceName}/statistics/memory`

    return this.client.request<DedicatedserverRtmMemory[]>('GET', url)
  }

  /**
   * motherboard operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/motherboard#GET)
   */
  GetServerMotherboardHardwareInformations(serviceName: string): Promise<DedicatedserverRtmMotherboardHw> {
    let url = `/dedicated/server/${serviceName}/statistics/motherboard`

    return this.client.request<DedicatedserverRtmMotherboardHw>('GET', url)
  }

  /**
   * os operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/os#GET)
   */
  GetServerOsInformations(serviceName: string): Promise<DedicatedserverRtmOs> {
    let url = `/dedicated/server/${serviceName}/statistics/os`

    return this.client.request<DedicatedserverRtmOs>('GET', url)
  }

  /**
   * List the dedicated.server.RtmPartition objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/partition#GET)
   */
  ServerPartitions(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/statistics/partition`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Server partitions informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/partition/%7Bpartition%7D#GET)
   */
  /*
  GetThisObjectProperties(partition: string, serviceName: string): Promise<DedicatedserverRtmPartition> {
    let url = `/dedicated/server/${serviceName}/statistics/partition/${partition}`

    return this.client.request<DedicatedserverRtmPartition>('GET', url)
  }
  */

  /**
   * chart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/partition/%7Bpartition%7D/chart#GET)
   */
  RetrievePartitionCharts(partition: string, period: DedicatedserverRtmChartPeriod, serviceName: string): Promise<ComplexTypeChartReturn> {
    let url = `/dedicated/server/${serviceName}/statistics/partition/${partition}/chart?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }

    return this.client.request<ComplexTypeChartReturn>('GET', url+queryParams.toString())
  }

  /**
   * pci operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/pci#GET)
   */
  GetServerPCIDevicesInformations(serviceName: string): Promise<DedicatedserverRtmPci[]> {
    let url = `/dedicated/server/${serviceName}/statistics/pci`

    return this.client.request<DedicatedserverRtmPci[]>('GET', url)
  }

  /**
   * process operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/process#GET)
   */
  GetServerProcess(serviceName: string): Promise<DedicatedserverRtmCommandSize[]> {
    let url = `/dedicated/server/${serviceName}/statistics/process`

    return this.client.request<DedicatedserverRtmCommandSize[]>('GET', url)
  }

  /**
   * List the dedicated.server.RtmRaid objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid#GET)
   */
  ServerRaidInformations(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/statistics/raid`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Server raid informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, unit: string): Promise<DedicatedserverRtmRaid> {
    let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}`

    return this.client.request<DedicatedserverRtmRaid>('GET', url)
  }
  */

  /**
   * List the dedicated.server.RtmRaidVolume objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume#GET)
   */
  RaidUnitVolumes(serviceName: string, unit: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Server raid volume information [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume/%7Bvolume%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, unit: string, volume: string): Promise<DedicatedserverRtmRaidVolume> {
    let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume/${volume}`

    return this.client.request<DedicatedserverRtmRaidVolume>('GET', url)
  }
  */

  /**
   * List the dedicated.server.RtmRaidVolumePort objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume/%7Bvolume%7D/port#GET)
   */
  RaidUnitVolumePorts(serviceName: string, unit: string, volume: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume/${volume}/port`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Server raid volume port informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume/%7Bvolume%7D/port/%7Bport%7D#GET)
   */
  /*
  GetThisObjectProperties(port: string, serviceName: string, unit: string, volume: string): Promise<DedicatedserverRtmRaidVolumePort> {
    let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume/${volume}/port/${port}`

    return this.client.request<DedicatedserverRtmRaidVolumePort>('GET', url)
  }
  */

  /**
   * hardDiskDrive operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/support/replace/hardDiskDrive#POST)
   */
  AskForABrokenHDDReplacement(comment: string, disks: DedicatedserverSupportReplaceHddInfo[], inverse: boolean, serviceName: string): Promise<SupportNewMessageInfo> {
    let url = `/dedicated/server/${serviceName}/support/replace/hardDiskDrive`

    return this.client.request<SupportNewMessageInfo>('POST', url, {comment, disks, inverse})
  }

  /**
   * List the dedicated.server.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task#GET)
   */
  DedicatedServerTodos(serviceName: string, _function?: DedicatedTaskFunction, status?: DedicatedTaskStatus): Promise<number[]> {
    let url = `/dedicated/server/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Server tasks [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/task/${taskId}`

    return this.client.request<DedicatedserverTask>('GET', url)
  }
  */

  /**
   * cancel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task/%7BtaskId%7D/cancel#POST)
   */
  ThisActionStopTheTaskProgressionIfItPossible(serviceName: string, taskId: number): Promise<void> {
    let url = `/dedicated/server/${serviceName}/task/${taskId}/cancel`

    return this.client.request<void>('POST', url)
  }

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/dedicated/server/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the dedicated.server.VirtualMac objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac#GET)
   */
  VirtualMACAddressesOfTheServer(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/virtualMac`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.server.VirtualMac objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac#POST)
   */
  AddAVirtualMacToAnIPAddress(ipAddress: string, serviceName: string, type: DedicatedserverVmacType, virtualMachineName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/virtualMac`

    return this.client.request<DedicatedserverTask>('POST', url, {ipAddress, type, virtualMachineName})
  }

  /**
   * A virtual MAC address associated to one or more IPs [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(macAddress: string, serviceName: string): Promise<DedicatedserverVirtualMac> {
    let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}`

    return this.client.request<DedicatedserverVirtualMac>('GET', url)
  }
  */

  /**
   * List the dedicated.server.VirtualMacManagement objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress#GET)
   */
  ListOfIPsAssociatedToThisVirtualMAC(macAddress: string, serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.server.VirtualMacManagement objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress#POST)
   */
  AddAnIPToThisVirtualMAC(ipAddress: string, macAddress: string, serviceName: string, virtualMachineName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress`

    return this.client.request<DedicatedserverTask>('POST', url, {ipAddress, virtualMachineName})
  }

  /**
   *  ip address linked with this virtual mac address [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress/%7BipAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(ipAddress: string, macAddress: string, serviceName: string): Promise<DedicatedserverVirtualMacManagement> {
    let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress/${ipAddress}`

    return this.client.request<DedicatedserverVirtualMacManagement>('GET', url)
  }
  */

  /**
   *  ip address linked with this virtual mac address [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress/%7BipAddress%7D#DELETE)
   */
  RemoveThisIpFromVirtualMacIfYouRemoveTheLastLinkedIpVirtualmacWillBeDeleted(ipAddress: string, macAddress: string, serviceName: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress/${ipAddress}`

    return this.client.request<DedicatedserverTask>('DELETE', url)
  }

  /**
   * List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface#GET)
   */
  ListServerVirtualNetworkInterfaces(serviceName: string, enabled?: boolean, mode?: DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode, name?: string, vrack?: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/virtualNetworkInterface?`

    const queryParams = new QueryParams()
    if (enabled) { queryParams.set('enabled', enabled.toString()) }
    if (mode) { queryParams.set('mode', mode.toString()) }
    if (name) { queryParams.set('name', name) }
    if (vrack) { queryParams.set('vrack', vrack) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Your VirtualNetworkInterface [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, uuid: string): Promise<DedicatedvirtualNetworkInterfaceVirtualNetworkInterface> {
    let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}`

    return this.client.request<DedicatedvirtualNetworkInterfaceVirtualNetworkInterface>('GET', url)
  }
  */

  /**
   * Your VirtualNetworkInterface [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, uuid: string, payload: DedicatedvirtualNetworkInterfaceVirtualNetworkInterface): Promise<void> {
    let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * disable operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D/disable#POST)
   */
  DisableThisVirtualNetworkInterface(serviceName: string, uuid: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}/disable`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * enable operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D/enable#POST)
   */
  EnableThisVirtualNetworkInterface(serviceName: string, uuid: string): Promise<DedicatedserverTask> {
    let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}/enable`

    return this.client.request<DedicatedserverTask>('POST', url)
  }

  /**
   * List the vrack.dedicatedServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack#GET)
   */
  ServerVracks(serviceName: string): Promise<string[]> {
    let url = `/dedicated/server/${serviceName}/vrack`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * vrack dedicated server interfaces [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack/%7Bvrack%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, vrack: string): Promise<VrackdedicatedServer> {
    let url = `/dedicated/server/${serviceName}/vrack/${vrack}`

    return this.client.request<VrackdedicatedServer>('GET', url)
  }
  */

  /**
   * vrack dedicated server interfaces [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack/%7Bvrack%7D#DELETE)
   */
  RemoveThisServerFromThisVrack(serviceName: string, vrack: string): Promise<VrackTask> {
    let url = `/dedicated/server/${serviceName}/vrack/${vrack}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * mrtg operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack/%7Bvrack%7D/mrtg#GET)
   */
  RetrieveVrackTrafficGraphValues(period: DedicatedserverMrtgPeriod, serviceName: string, type: DedicatedserverMrtgType, vrack: string): Promise<DedicatedserverMrtgTimestampValue[]> {
    let url = `/dedicated/server/${serviceName}/vrack/${vrack}/mrtg?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<DedicatedserverMrtgTimestampValue[]>('GET', url+queryParams.toString())
  }

  /**
   * List the availability of dedicated server [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/availabilities#GET)
   */
  ListTheAvailabilityOfDedicatedServer(country: NichandleOvhSubsidiary, hardware?: string): Promise<DedicatedAvailabilities[]> {
    let url = `/dedicated/server/availabilities?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (hardware) { queryParams.set('hardware', hardware) }

    return this.client.request<DedicatedAvailabilities[]>('GET', url+queryParams.toString())
  }

  /**
   * List the availability of dedicated server (RAW) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/availabilities/raw#GET)
   */
  /*
  ListTheAvailabilityOfDedicatedServer(): Promise<DedicatedAvailabilitiesRaw[]> {
    let url = `/dedicated/server/availabilities/raw`

    return this.client.request<DedicatedAvailabilitiesRaw[]>('GET', url)
  }
  */

  /**
   * List the availability of dedicated server [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/datacenter/availabilities#GET)
   */
  /*
  ListTheAvailabilityOfDedicatedServer(datacenters?: string, excludeDatacenters?: boolean, memory?: string, planCode?: string, server?: string, storage?: string): Promise<DedicatedDatacenterAvailability[]> {
    let url = `/dedicated/server/datacenter/availabilities?`

    const queryParams = new QueryParams()
    if (datacenters) { queryParams.set('datacenters', datacenters) }
    if (excludeDatacenters) { queryParams.set('excludeDatacenters', excludeDatacenters.toString()) }
    if (memory) { queryParams.set('memory', memory) }
    if (planCode) { queryParams.set('planCode', planCode) }
    if (server) { queryParams.set('server', server) }
    if (storage) { queryParams.set('storage', storage) }

    return this.client.request<DedicatedDatacenterAvailability[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * List the operating systems available for a specified hardware reference [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/osAvailabilities#GET)
   */
  ListTheOsAvailableForASpecifiedHardwareReference(hardware: string): Promise<DedicatedOsAvailabilitiesEnum[]> {
    let url = `/dedicated/server/osAvailabilities?`

    const queryParams = new QueryParams()
    if (hardware) { queryParams.set('hardware', hardware) }

    return this.client.request<DedicatedOsAvailabilitiesEnum[]>('GET', url+queryParams.toString())
  }

  /**
   * Get a VirtualNetworkInterface details [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/virtualNetworkInterface/%7Buuid%7D#GET)
   */
  GetVirtualNetworkInterfaceDetails(uuid: string): Promise<DedicatedvirtualNetworkInterfaceVirtualNetworkInterface> {
    let url = `/dedicated/server/virtualNetworkInterface/${uuid}`

    return this.client.request<DedicatedvirtualNetworkInterfaceVirtualNetworkInterface>('GET', url)
  }

}
