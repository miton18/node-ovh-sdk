// GENERATED SDK for ip API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Start and end points (inclusive) of a range
 */
export interface ComplexTypeRange<T> {
  from: T
  to: T
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
 * Phishing URLs hosted on your IP
 */
export interface IpAntiphishing {
  creationDate: string
  id: number
  ipOnAntiphishing: string
  state: IpAntiphishingState
  urlPhishing: string
}

/*
 * Possible values for antiphishing state
 */
export enum IpAntiphishingState {
  BLOCKED = 'blocked',
  BLOCKING = 'blocking',
  UNBLOCKED = 'unblocked',
  UNBLOCKING = 'unblocking'
}

/**
 * ARP blocked IP information
 */
export interface IpArpBlockedIp {
  blockedSince: string
  ipBlocked: string
  logs?: string
  state: IpArpState
  time: number
}

/*
 * Possible values for IP state
 */
export enum IpArpState {
  BLOCKED = 'blocked',
  UNBLOCKING = 'unblocking'
}

/**
 * Blocked IP information
 */
export interface IpBlockedIp {
  blockedSince: string
  ipBlocked: string
  logs?: string
  state: IpBlockedIpState
  time: number
}

/*
 * Possible values for IP state
 */
export enum IpBlockedIpState {
  BLOCKED = 'blocked',
  UNBLOCKING = 'unblocking'
}

/**
 * A structure given service and its nexthops as a destination for failover ips
 */
export interface IpDestination {
  nexthop?: string[]
  service: string
}

/**
 * A structure given all services allowed as a destination for this ip
 */
export interface IpDestinations {
  cloudProject?: IpDestination[]
  dedicatedCloud?: IpDestination[]
  dedicatedServer?: IpDestination[]
  hostingReseller?: IpDestination[]
  ipLoadbalancing?: IpDestination[]
  vps?: IpDestination[]
}

/*
 * Possible values for action
 */
export enum IpFirewallAction {
  DENY = 'deny',
  PERMIT = 'permit'
}

/**
 * Your IP on firewall
 */
export interface IpFirewallIp {
  enabled: boolean
  ipOnFirewall: string
  state: IpFirewallState
}

/**
 * Rule on ip
 */
export interface IpFirewallNetworkRule {
  action: IpFirewallAction
  creationDate: string
  destination: string
  destinationPort?: string
  fragments?: boolean
  protocol: IpFirewallProtocol
  rule: string
  sequence: number
  source: string
  sourcePort?: string
  state: IpFirewallRuleState
  tcpOption?: string
}

/**
 * Possible option for TCP
 */
export interface IpFirewallOptionTCP {
  fragments?: boolean
  option?: IpFirewallTCPOption
}

/*
 * Possible values for protocol
 */
export enum IpFirewallProtocol {
  AH = 'ah',
  ESP = 'esp',
  GRE = 'gre',
  ICMP = 'icmp',
  IPV4 = 'ipv4',
  TCP = 'tcp',
  UDP = 'udp'
}

/*
 * Possible values for firewall rule state
 */
export enum IpFirewallRuleState {
  CREATIONPENDING = 'creationPending',
  OK = 'ok',
  REMOVALPENDING = 'removalPending'
}

/*
 * Possible values for action
 */
export type IpFirewallSequenceRange = 0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/*
 * Possible values for firewall ip state
 */
export enum IpFirewallState {
  DISABLEFIREWALLPENDING = 'disableFirewallPending',
  ENABLEFIREWALLPENDING = 'enableFirewallPending',
  OK = 'ok'
}

/*
 * Possible values for TCP option - only for TCP protocol
 */
export enum IpFirewallTCPOption {
  ESTABLISHED = 'established',
  SYN = 'syn'
}

/**
 * GAME Anti-DDoS
 */
export interface IpGameMitigation {
  firewallModeEnabled: boolean
  ipOnGame: string
  state: IpGameMitigationState
}

/**
 * Rule on ip:ports
 */
export interface IpGameMitigationRule {
  id: number
  ports: any
  protocol: IpGameMitigationRuleProtocol
  state: IpGameMitigationRuleState
}

/*
 * Possible values for game rule protocol
 */
export enum IpGameMitigationRuleProtocol {
  ARKSURVIVALEVOLVED = 'arkSurvivalEvolved',
  ARMA = 'arma',
  GTAMULTITHEFTAUTOSANANDREAS = 'gtaMultiTheftAutoSanAndreas',
  GTASANANDREASMULTIPLAYERMOD = 'gtaSanAndreasMultiplayerMod',
  HL2SOURCE = 'hl2Source',
  MINECRAFTPOCKETEDITION = 'minecraftPocketEdition',
  MINECRAFTQUERY = 'minecraftQuery',
  MUMBLE = 'mumble',
  OTHER = 'other',
  RUST = 'rust',
  TEAMSPEAK2 = 'teamspeak2',
  TEAMSPEAK3 = 'teamspeak3',
  TRACKMANIASHOOTMANIA = 'trackmaniaShootmania'
}

/*
 * Possible values for game mitigation rule state
 */
export enum IpGameMitigationRuleState {
  CREATERULEPENDING = 'createRulePending',
  DELETERULEPENDING = 'deleteRulePending',
  OK = 'ok'
}

/*
 * Possible values for udp mitigation rule state
 */
export enum IpGameMitigationState {
  FIREWALLMODEDISABLEPENDING = 'firewallModeDisablePending',
  FIREWALLMODEENABLEPENDING = 'firewallModeEnablePending',
  OK = 'ok'
}

/**
 * Your IP
 */
export interface IpIp {
  canBeTerminated: boolean
  country?: CoreTypesCountry
  description?: string
  ip: string
  organisationId?: string
  routedTo?: IpRoutedTo
  type: IpIpType
}

/**
 * IP migration to OVH
 */
export interface IpIpMigrationToken {
  customerId: string
  token: string
}

/**
 * IP tasks
 */
export interface IpIpTask {
  comment?: string
  destination?: IpRoutedTo
  doneDate?: string
  function: IpTaskFunction
  lastUpdate?: string
  startDate: string
  status: IpTaskStatus
  taskId: number
}

/*
 * Possible values for ip type
 */
export enum IpIpType {
  CDN = 'cdn',
  CLOUD = 'cloud',
  DEDICATED = 'dedicated',
  FAILOVER = 'failover',
  HOSTED_SSL = 'hosted_ssl',
  HOUSING = 'housing',
  LOADBALANCING = 'loadBalancing',
  MAIL = 'mail',
  OVERTHEBOX = 'overthebox',
  PCC = 'pcc',
  PCI = 'pci',
  PRIVATE = 'private',
  VPN = 'vpn',
  VPS = 'vps',
  VRACK = 'vrack',
  XDSL = 'xdsl'
}

/*
 * Additional available ports for ip loadbalancing
 */
export type IpLoadBalancingAdditionalPort = 3306 | 443 | 5432 | 80

/**
 * Backends attached to your IP load balancing
 */
export interface IpLoadBalancingBackendIp {
  backend: string
  mainBackendIp?: string
  probe: IpLoadBalancingBackendProbe
  weight: number
  zone: IpLoadBalancingZone
}

/*
 * Possible values for your IP load balancing backend probe
 */
export enum IpLoadBalancingBackendProbe {
  HTTP = 'http',
  ICMP = 'icmp',
  NONE = 'none',
  OCO = 'oco'
}

/**
 * Your load balancing IP
 */
export interface IpLoadBalancingIp {
  ipLoadBalancing: string
  serviceName: string
  ssl: IpLoadBalancingSsl
  state: IpLoadBalancingState
  stickiness: IpLoadBalancingStickiness
  zone: IpLoadBalancingZoneEnum[]
}

/**
 * LoadBalancingPort mapping
 */
export interface IpLoadBalancingIpLoadBalancingPort {
  dstPort: number
  srcPort: IpLoadBalancingAdditionalPort
}

/*
 * Possible values for ssl state
 */
export enum IpLoadBalancingSsl {
  CUSTOMER = 'customer',
  NONE = 'none',
  OVH = 'ovh'
}

/*
 * Possible values for load balancing IP state
 */
export enum IpLoadBalancingState {
  BLACKLISTED = 'blacklisted',
  DELETED = 'deleted',
  FREE = 'free',
  OK = 'ok',
  QUARANTINED = 'quarantined',
  SUSPENDED = 'suspended'
}

/*
 * Possible values for load balancing IP stickiness
 */
export enum IpLoadBalancingStickiness {
  COOKIE = 'cookie',
  NONE = 'none',
  SOURCEIP = 'sourceIp'
}

/**
 * List of tasks associated with your IP load balancing
 */
export interface IpLoadBalancingTask {
  action: IpLoadBalancingTaskAction
  creationDate: string
  id: number
  status: string
}

/*
 * Possible values for load balancing task action
 */
export enum IpLoadBalancingTaskAction {
  ACTIVATESSL = 'activateSsl',
  ADDBACKEND = 'addBackend',
  ADDIPTOBACKEND = 'addIpToBackend',
  ANNOUNCEIPLOADBALANCING = 'announceIpLoadBalancing',
  BACKUPSTATESET = 'backupStateSet',
  BACKUPSTATEUNSET = 'backupStateUnset',
  CHANGEPROBE = 'changeProbe',
  DELBACKEND = 'delBackend',
  DESACTIVATESSL = 'desactivateSsl',
  REMOVEIPFROMBACKEND = 'removeIpFromBackend',
  SETPORTREDIRECTION = 'setPortRedirection',
  SETSTICKINESS = 'setStickiness',
  SETWEIGHT = 'setWeight',
  UNANNOUNCEIPLOADBALANCING = 'unannounceIpLoadBalancing',
  UNSETPORTREDIRECTION = 'unsetPortRedirection'
}

/*
 * Possible values for load balancing IP service location
 */
export enum IpLoadBalancingZone {
  BHS = 'bhs',
  GRA = 'gra',
  RBX = 'rbx',
  SBG = 'sbg'
}

/**
 * Mitigation attack on your ip
 */
export interface IpMitigationAttack {
  endDate?: string
  idAttack: number
  ipAttack: string
  startDate: string
}

/**
 * Detailed statistics about your traffic
 */
export interface IpMitigationDetailedStats {
  destPort?: number
  fragments?: boolean
  icmpCode?: number
  icmpType?: number
  in?: IpMitigationTraffic
  out?: IpMitigationTraffic
  protocol?: number
  srcPort?: number
  syn?: boolean
}

/**
 * Your IP on mitigation
 */
export interface IpMitigationIp {
  auto: boolean
  ipOnMitigation: string
  permanent: boolean
  state: IpMitigationState
}

/**
 * Mitigation profile for your ip
 */
export interface IpMitigationProfile {
  autoMitigationTimeOut: IpMitigationProfileAutoMitigationTimeOut
  ipMitigationProfile: string
  state: IpMitigationProfileState
}

/*
 * Possible values for auto mitigation timeout (minutes)
 */
export type IpMitigationProfileAutoMitigationTimeOut = 0 | 15 | 1560 | 360 | 60

/*
 * Possible values for mitigation profile state
 */
export enum IpMitigationProfileState {
  OK = 'ok',
  TASKSPENDING = 'tasksPending'
}

/*
 * Possible values for mitigation state
 */
export enum IpMitigationState {
  CREATIONPENDING = 'creationPending',
  OK = 'ok',
  REMOVALPENDING = 'removalPending'
}

/**
 * Traffic statistics in and out on a mitigated ip
 */
export interface IpMitigationStats {
  in?: IpMitigationTraffic
  out?: IpMitigationTraffic
  timestamp: number
}

/*
 * Possible aggregation scale on statistics
 */
export type IpMitigationStatsScale = '10s' | '1m' | '5m'

/**
 * Traffic on mitigation
 */
export interface IpMitigationTraffic {
  bps: number
  pps: number
}

/**
 * Your reverse delegations on IPv6 subnet
 */
export interface IpReverseDelegation {
  target: string
}

/**
 * Your reverse records on IP
 */
export interface IpReverseIp {
  ipReverse: string
  reverse: string
}

/**
 * IP block RIPE informations
 */
export interface IpRipeInfos {
  description?: string
  netname?: string
}

/**
 * Information about routing
 */
export interface IpRoutedTo {
  serviceName?: string
}

/**
 * Your IP linked to service
 */
export interface IpServiceIp {
  canBeTerminated: boolean
  country?: CoreTypesCountry
  description?: string
  ip: string
  organisationId?: string
  routedTo?: IpRoutedTo
  type: IpIpType
}

/**
 * Your IP spam stats
 */
export interface IpSpamIp {
  date: string
  ipSpamming: string
  state: IpSpamState
  time: number
}

/*
 * Possible values for spam state
 */
export enum IpSpamState {
  BLOCKEDFORSPAM = 'blockedForSpam',
  UNBLOCKED = 'unblocked',
  UNBLOCKING = 'unblocking'
}

/**
 * Spam statistics about an IP address
 */
export interface IpSpamStats {
  averageSpamscore?: number
  detectedSpams?: IpSpamTarget[]
  numberOfSpams: number
  timestamp: number
  total: number
}

/**
 * Spam's target information
 */
export interface IpSpamTarget {
  date: number
  destinationIp: string
  messageId: string
  spamscore: number
}

/*
 * different task operation
 */
export enum IpTaskFunction {
  ARINBLOCKREASSIGN = 'arinBlockReassign',
  CHANGERIPEORG = 'changeRipeOrg',
  CHECKANDRELEASEIP = 'checkAndReleaseIp',
  GENERICMOVEFLOATINGIP = 'genericMoveFloatingIp'
}

/*
 * different task status
 */
export enum IpTaskStatus {
  CANCELLED = 'cancelled',
  CUSTOMERERROR = 'customerError',
  DOING = 'doing',
  DONE = 'done',
  INIT = 'init',
  OVHERROR = 'ovhError',
  TODO = 'todo'
}

/**
 * IP Load Balancing Operations
 */
export interface IpLoadbalancingTaskTask {
  action: IpLoadbalancingTaskAction
  creationDate: string
  doneDate?: string
  id: number
  progress: number
  status: IpLoadbalancingTaskStatus
  zones: string[]
}

/*
 * Possible task action
 */
export enum IpLoadbalancingTaskAction {
  DELETEIPLB = 'deleteIplb',
  DEPLOYIPLB = 'deployIplb',
  INSTALL = 'install',
  INSTALLIPLB = 'installIplb',
  INSTALLZONE = 'installZone',
  ORDERFREECERTIFICATE = 'orderFreeCertificate',
  ORDERPAIDCERTIFICATE = 'orderPaidCertificate',
  ORDERSSL = 'orderSsl',
  REFRESHIPLB = 'refreshIplb',
  RELEASEIPLB = 'releaseIplb',
  RELEASEIPLBZONE = 'releaseIplbZone',
  REOPENIPLB = 'reopenIplb',
  SUSPENDIPLB = 'suspendIplb',
  SUSPENDZONE = 'suspendZone',
  SWITCHTOIPLBNEXTGENERATIONAPI = 'switchToIplbNextGenerationApi',
  VRACKATTACH = 'vrackAttach',
  VRACKDETACH = 'vrackDetach'
}

/*
 * Possible task status
 */
export enum IpLoadbalancingTaskStatus {
  BLOCKED = 'blocked',
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
 * Details about a non-expiring Service
 */
export interface ServicesNonExpiringService {
  contactAdmin: string
  contactBilling: string
  contactTech: string
  creation: string
  domain: string
  serviceId: number
  status: ServiceState
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


export class Ip {
  constructor(private client: Client) {}

  /**
   * List the ip.Ip objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip#GET)
   */
  YourOVHIPs(description?: string, ip?: string, routedToServiceName?: string, type?: IpIpType): Promise<string[]> {
    let url = `/ip?`

    const queryParams = new QueryParams()
    if (description) { queryParams.set('description', description) }
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (routedToServiceName) { queryParams.set('routedTo.serviceName', routedToServiceName) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Your IP [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D#GET)
   */
  GetThisObjectProperties(ip: string): Promise<IpIp> {
    let url = `/ip/${ip}`

    return this.client.request<IpIp>('GET', url)
  }

  /**
   * Your IP [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D#PUT)
   */
  AlterThisObjectProperties(ip: string, payload: IpIp): Promise<void> {
    let url = `/ip/${ip}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the ip.BlockedIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/antihack#GET)
   */
  AntiHackBlockedIP(ip: string, state?: IpBlockedIpState): Promise<string[]> {
    let url = `/ip/${ip}/antihack?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Blocked IP information [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/antihack/%7BipBlocked%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipBlocked: string): Promise<IpBlockedIp> {
    let url = `/ip/${ip}/antihack/${ipBlocked}`

    return this.client.request<IpBlockedIp>('GET', url)
  }
  */

  /**
   * unblock operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/antihack/%7BipBlocked%7D/unblock#POST)
   */
  UnblockThisIP(ip: string, ipBlocked: string): Promise<void> {
    let url = `/ip/${ip}/antihack/${ipBlocked}/unblock`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the ip.ArpBlockedIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/arp#GET)
   */
  ARPBlockedIP(ip: string, state?: IpArpState): Promise<string[]> {
    let url = `/ip/${ip}/arp?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * ARP blocked IP information [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/arp/%7BipBlocked%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipBlocked: string): Promise<IpArpBlockedIp> {
    let url = `/ip/${ip}/arp/${ipBlocked}`

    return this.client.request<IpArpBlockedIp>('GET', url)
  }
  */

  /**
   * unblock operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/arp/%7BipBlocked%7D/unblock#POST)
   */
  /*
  UnblockThisIP(ip: string, ipBlocked: string): Promise<void> {
    let url = `/ip/${ip}/arp/${ipBlocked}/unblock`

    return this.client.request<void>('POST', url)
  }
  */

  /**
   * changeOrg operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/changeOrg#POST)
   */
  ChangeOrganisationOfThisIP(ip: string, organisation: string): Promise<IpIpTask> {
    let url = `/ip/${ip}/changeOrg`

    return this.client.request<IpIpTask>('POST', url, {organisation})
  }

  /**
   * List the ip.ReverseDelegation objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation#GET)
   */
  ReverseDelegationOnIPv6Subnet(ip: string): Promise<string[]> {
    let url = `/ip/${ip}/delegation`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the ip.ReverseDelegation objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation#POST)
   */
  AddTargetForReverseDelegationOnIPv6Subnet(ip: string, target: string): Promise<IpReverseDelegation> {
    let url = `/ip/${ip}/delegation`

    return this.client.request<IpReverseDelegation>('POST', url, {target})
  }

  /**
   * Your reverse delegations on IPv6 subnet [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation/%7Btarget%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, target: string): Promise<IpReverseDelegation> {
    let url = `/ip/${ip}/delegation/${target}`

    return this.client.request<IpReverseDelegation>('GET', url)
  }
  */

  /**
   * Your reverse delegations on IPv6 subnet [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation/%7Btarget%7D#DELETE)
   */
  DeleteATargetForReverseDelegationOnIPv6Subnet(ip: string, target: string): Promise<void> {
    let url = `/ip/${ip}/delegation/${target}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the ip.FirewallIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall#GET)
   */
  IpUnderFirewall(ip: string, enabled?: boolean, state?: IpFirewallState): Promise<string[]> {
    let url = `/ip/${ip}/firewall?`

    const queryParams = new QueryParams()
    if (enabled) { queryParams.set('enabled', enabled.toString()) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ip.FirewallIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall#POST)
   */
  AntiDDOSOptionAddNewIPOnFirewall(ip: string, ipOnFirewall: string): Promise<IpFirewallIp> {
    let url = `/ip/${ip}/firewall`

    return this.client.request<IpFirewallIp>('POST', url, {ipOnFirewall})
  }

  /**
   * Your IP on firewall [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipOnFirewall: string): Promise<IpFirewallIp> {
    let url = `/ip/${ip}/firewall/${ipOnFirewall}`

    return this.client.request<IpFirewallIp>('GET', url)
  }
  */

  /**
   * Your IP on firewall [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ip: string, ipOnFirewall: string, payload: IpFirewallIp): Promise<void> {
    let url = `/ip/${ip}/firewall/${ipOnFirewall}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Your IP on firewall [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D#DELETE)
   */
  AntiDDOSOptionDeleteIPAndRulesFromFirewall(ip: string, ipOnFirewall: string): Promise<string> {
    let url = `/ip/${ip}/firewall/${ipOnFirewall}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * List the ip.FirewallNetworkRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule#GET)
   */
  RulesForThisIP(ip: string, ipOnFirewall: string, state?: IpFirewallRuleState): Promise<number[]> {
    let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ip.FirewallNetworkRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule#POST)
   */
  AntiDDOSOptionAddNewRuleOnYourIP(action: IpFirewallAction, ip: string, ipOnFirewall: string, protocol: IpFirewallProtocol, sequence: IpFirewallSequenceRange, destinationPort?: number, source?: any, sourcePort?: number, tcpOption?: IpFirewallOptionTCP): Promise<IpFirewallNetworkRule> {
    let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule`

    return this.client.request<IpFirewallNetworkRule>('POST', url, {action, protocol, sequence, destinationPort, source, sourcePort, tcpOption})
  }

  /**
   * Rule on ip [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule/%7Bsequence%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipOnFirewall: string, sequence: number): Promise<IpFirewallNetworkRule> {
    let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`

    return this.client.request<IpFirewallNetworkRule>('GET', url)
  }
  */

  /**
   * Rule on ip [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule/%7Bsequence%7D#DELETE)
   */
  AntiDDOSOptionDeleteRule(ip: string, ipOnFirewall: string, sequence: number): Promise<IpFirewallNetworkRule> {
    let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`

    return this.client.request<IpFirewallNetworkRule>('DELETE', url)
  }

  /**
   * List the ip.GameMitigation objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game#GET)
   */
  IpUnderGameAntiddos(ip: string): Promise<string[]> {
    let url = `/ip/${ip}/game`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * GAME Anti-DDoS [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipOnGame: string): Promise<IpGameMitigation> {
    let url = `/ip/${ip}/game/${ipOnGame}`

    return this.client.request<IpGameMitigation>('GET', url)
  }
  */

  /**
   * GAME Anti-DDoS [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ip: string, ipOnGame: string, payload: IpGameMitigation): Promise<void> {
    let url = `/ip/${ip}/game/${ipOnGame}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the ip.GameMitigationRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule#GET)
   */
  IDsOfRulesConfiguredForThisIP(ip: string, ipOnGame: string): Promise<number[]> {
    let url = `/ip/${ip}/game/${ipOnGame}/rule`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the ip.GameMitigationRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule#POST)
   */
  AddNewRuleOnYourIP(ip: string, ipOnGame: string, ports: any, protocol: IpGameMitigationRuleProtocol): Promise<IpGameMitigationRule> {
    let url = `/ip/${ip}/game/${ipOnGame}/rule`

    return this.client.request<IpGameMitigationRule>('POST', url, {ports, protocol})
  }

  /**
   * Rule on ip:ports [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, ip: string, ipOnGame: string): Promise<IpGameMitigationRule> {
    let url = `/ip/${ip}/game/${ipOnGame}/rule/${id}`

    return this.client.request<IpGameMitigationRule>('GET', url)
  }
  */

  /**
   * Rule on ip:ports [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule/%7Bid%7D#DELETE)
   */
  DeleteRule(id: number, ip: string, ipOnGame: string): Promise<IpGameMitigationRule> {
    let url = `/ip/${ip}/game/${ipOnGame}/rule/${id}`

    return this.client.request<IpGameMitigationRule>('DELETE', url)
  }

  /**
   * List the license.cloudLinux.CloudLinux objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/cloudLinux#GET)
   */
  CloudLinuxLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/cloudLinux?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.cpanel.Cpanel objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/cpanel#GET)
   */
  CpanelLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/cpanel?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.directadmin.DirectAdmin objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/directadmin#GET)
   */
  DirectAdminLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/directadmin?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.plesk.Plesk objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/plesk#GET)
   */
  PleskLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/plesk?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.sqlserver.SqlServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/sqlserver#GET)
   */
  SQLServerLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/sqlserver?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.virtuozzo.Virtuozzo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/virtuozzo#GET)
   */
  VirtuozzoLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/virtuozzo?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.windows.Windows objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/windows#GET)
   */
  WindowsLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/windows?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the license.worklight.WorkLight objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/worklight#GET)
   */
  WorkLightLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]> {
    let url = `/ip/${ip}/license/worklight?`

    const queryParams = new QueryParams()
    if (ipAddress) { queryParams.set('ipAddress', ipAddress.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * IP migration to OVH [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/migrationToken#GET)
   */
  /*
  GetThisObjectProperties(ip: string): Promise<IpIpMigrationToken> {
    let url = `/ip/${ip}/migrationToken`

    return this.client.request<IpIpMigrationToken>('GET', url)
  }
  */

  /**
   * IP migration to OVH [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/migrationToken#POST)
   */
  GenerateAMigrationToken(customerId: string, ip: string): Promise<IpIpMigrationToken> {
    let url = `/ip/${ip}/migrationToken`

    return this.client.request<IpIpMigrationToken>('POST', url, {customerId})
  }

  /**
   * List the ip.MitigationIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation#GET)
   */
  IpUnderMitigation(ip: string, auto?: boolean, state?: IpMitigationState): Promise<string[]> {
    let url = `/ip/${ip}/mitigation?`

    const queryParams = new QueryParams()
    if (auto) { queryParams.set('auto', auto.toString()) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ip.MitigationIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation#POST)
   */
  AntiDDOSOptionAddNewIPOnPermanentMitigation(ip: string, ipOnMitigation: string): Promise<IpMitigationIp> {
    let url = `/ip/${ip}/mitigation`

    return this.client.request<IpMitigationIp>('POST', url, {ipOnMitigation})
  }

  /**
   * Your IP on mitigation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipOnMitigation: string): Promise<IpMitigationIp> {
    let url = `/ip/${ip}/mitigation/${ipOnMitigation}`

    return this.client.request<IpMitigationIp>('GET', url)
  }
  */

  /**
   * Your IP on mitigation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ip: string, ipOnMitigation: string, payload: IpMitigationIp): Promise<void> {
    let url = `/ip/${ip}/mitigation/${ipOnMitigation}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Your IP on mitigation [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D#DELETE)
   */
  AntiDDOSOptionDeleteIPFromMitigation(ip: string, ipOnMitigation: string): Promise<IpMitigationIp> {
    let url = `/ip/${ip}/mitigation/${ipOnMitigation}`

    return this.client.request<IpMitigationIp>('DELETE', url)
  }

  /**
   * stats operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D/stats#GET)
   */
  AntiDDOSOptionGetStatisticsAboutYourTrafficInAndOutDuringThisMitigation(from: string, ip: string, ipOnMitigation: string, scale: IpMitigationStatsScale, to: string): Promise<IpMitigationStats[]> {
    let url = `/ip/${ip}/mitigation/${ipOnMitigation}/stats?`

    const queryParams = new QueryParams()
    if (from) { queryParams.set('from', from.toString()) }
    if (scale) { queryParams.set('scale', scale.toString()) }
    if (to) { queryParams.set('to', to.toString()) }

    return this.client.request<IpMitigationStats[]>('GET', url+queryParams.toString())
  }

  /**
   * topStream operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D/topStream#GET)
   */
  AntiDDOSOptionGetTopStreamOnYourIpOnASpecificTimestamp(date: string, ip: string, ipOnMitigation: string, scale: IpMitigationStatsScale): Promise<IpMitigationDetailedStats[]> {
    let url = `/ip/${ip}/mitigation/${ipOnMitigation}/topStream?`

    const queryParams = new QueryParams()
    if (date) { queryParams.set('date', date.toString()) }
    if (scale) { queryParams.set('scale', scale.toString()) }

    return this.client.request<IpMitigationDetailedStats[]>('GET', url+queryParams.toString())
  }

  /**
   * List the ip.MitigationProfile objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles#GET)
   */
  ManageMitigationProfileOnYourIPs(ip: string): Promise<string[]> {
    let url = `/ip/${ip}/mitigationProfiles`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the ip.MitigationProfile objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles#POST)
   */
  CreateNewProfileForOneOfYourIp(autoMitigationTimeOut: IpMitigationProfileAutoMitigationTimeOut, ip: string, ipMitigationProfile: string): Promise<IpMitigationProfile> {
    let url = `/ip/${ip}/mitigationProfiles`

    return this.client.request<IpMitigationProfile>('POST', url, {autoMitigationTimeOut, ipMitigationProfile})
  }

  /**
   * Mitigation profile for your ip [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles/%7BipMitigationProfile%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipMitigationProfile: string): Promise<IpMitigationProfile> {
    let url = `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`

    return this.client.request<IpMitigationProfile>('GET', url)
  }
  */

  /**
   * Mitigation profile for your ip [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles/%7BipMitigationProfile%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ip: string, ipMitigationProfile: string, payload: IpMitigationProfile): Promise<void> {
    let url = `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Mitigation profile for your ip [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles/%7BipMitigationProfile%7D#DELETE)
   */
  DeleteMitigationProfile(ip: string, ipMitigationProfile: string): Promise<void> {
    let url = `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * move operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/move#POST)
   */
  MoveThisIPToAnotherService(ip: string, to: string, nexthop?: string): Promise<IpIpTask> {
    let url = `/ip/${ip}/move`

    return this.client.request<IpIpTask>('POST', url, {to, nexthop})
  }

  /**
   * move operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/move#GET)
   */
  ListServicesAvailableAsADestination(ip: string): Promise<IpDestinations> {
    let url = `/ip/${ip}/move`

    return this.client.request<IpDestinations>('GET', url)
  }

  /**
   * park operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/park#POST)
   */
  ParkThisIP(ip: string): Promise<IpIpTask> {
    let url = `/ip/${ip}/park`

    return this.client.request<IpIpTask>('POST', url)
  }

  /**
   * List the ip.Antiphishing objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/phishing#GET)
   */
  IpUnderAntiphishing(ip: string, ipOnAntiphishing?: string, state?: IpAntiphishingState): Promise<number[]> {
    let url = `/ip/${ip}/phishing?`

    const queryParams = new QueryParams()
    if (ipOnAntiphishing) { queryParams.set('ipOnAntiphishing', ipOnAntiphishing.toString()) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Phishing URLs hosted on your IP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/phishing/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, ip: string): Promise<IpAntiphishing> {
    let url = `/ip/${ip}/phishing/${id}`

    return this.client.request<IpAntiphishing>('GET', url)
  }
  */

  /**
   * List the ip.ReverseIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse#GET)
   */
  ReverseOnYourIp(ip: string): Promise<string[]> {
    let url = `/ip/${ip}/reverse`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the ip.ReverseIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse#POST)
   */
  AddReverseOnAnIp(ip: string, ipReverse: string, reverse: string): Promise<IpReverseIp> {
    let url = `/ip/${ip}/reverse`

    return this.client.request<IpReverseIp>('POST', url, {ipReverse, reverse})
  }

  /**
   * Your reverse records on IP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse/%7BipReverse%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipReverse: string): Promise<IpReverseIp> {
    let url = `/ip/${ip}/reverse/${ipReverse}`

    return this.client.request<IpReverseIp>('GET', url)
  }
  */

  /**
   * Your reverse records on IP [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse/%7BipReverse%7D#DELETE)
   */
  DeleteAReverseOnOneIP(ip: string, ipReverse: string): Promise<void> {
    let url = `/ip/${ip}/reverse/${ipReverse}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * IP block RIPE informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/ripe#GET)
   */
  /*
  GetThisObjectProperties(ip: string): Promise<IpRipeInfos> {
    let url = `/ip/${ip}/ripe`

    return this.client.request<IpRipeInfos>('GET', url)
  }
  */

  /**
   * IP block RIPE informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/ripe#PUT)
   */
  /*
  AlterThisObjectProperties(ip: string, payload: IpRipeInfos): Promise<void> {
    let url = `/ip/${ip}/ripe`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the ip.SpamIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam#GET)
   */
  IpSpamming(ip: string, state?: IpSpamState): Promise<string[]> {
    let url = `/ip/${ip}/spam?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Your IP spam stats [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam/%7BipSpamming%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, ipSpamming: string): Promise<IpSpamIp> {
    let url = `/ip/${ip}/spam/${ipSpamming}`

    return this.client.request<IpSpamIp>('GET', url)
  }
  */

  /**
   * stats operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam/%7BipSpamming%7D/stats#GET)
   */
  GetStatisticsAboutTheEmailTraffic(from: string, ip: string, ipSpamming: string, to: string): Promise<IpSpamStats[]> {
    let url = `/ip/${ip}/spam/${ipSpamming}/stats?`

    const queryParams = new QueryParams()
    if (from) { queryParams.set('from', from.toString()) }
    if (to) { queryParams.set('to', to.toString()) }

    return this.client.request<IpSpamStats[]>('GET', url+queryParams.toString())
  }

  /**
   * unblock operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam/%7BipSpamming%7D/unblock#POST)
   */
  ReleaseTheIpFromAntispamSystem(ip: string, ipSpamming: string): Promise<IpSpamIp> {
    let url = `/ip/${ip}/spam/${ipSpamming}/unblock`

    return this.client.request<IpSpamIp>('POST', url)
  }

  /**
   * List the ip.IpTask objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/task#GET)
   */
  IPTasks(ip: string, _function?: IpTaskFunction, status?: IpTaskStatus): Promise<number[]> {
    let url = `/ip/${ip}/task?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * IP tasks [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, taskId: number): Promise<IpIpTask> {
    let url = `/ip/${ip}/task/${taskId}`

    return this.client.request<IpIpTask>('GET', url)
  }
  */

  /**
   * terminate operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/terminate#POST)
   */
  DeleteAFailoverIP(ip: string): Promise<IpIpTask> {
    let url = `/ip/${ip}/terminate`

    return this.client.request<IpIpTask>('POST', url)
  }

  /**
   * Operations about the IP service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/ip/loadBalancing`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your load balancing IP [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<IpLoadBalancingIp> {
    let url = `/ip/loadBalancing/${serviceName}`

    return this.client.request<IpLoadBalancingIp>('GET', url)
  }
  */

  /**
   * allowedBackends operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/allowedBackends#GET)
   */
  ListOfBackendsYouCanAttachToYourIP(serviceName: string): Promise<string[]> {
    let url = `/ip/loadBalancing/${serviceName}/allowedBackends`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the ip.LoadBalancingBackendIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend#GET)
   */
  BackendsForThisIPLoadBalancing(serviceName: string): Promise<string[]> {
    let url = `/ip/loadBalancing/${serviceName}/backend`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the ip.LoadBalancingBackendIp objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend#POST)
   */
  AddANewBackendOnYourIPLoadBalancing(ipBackend: string, probe: IpLoadBalancingBackendProbe, serviceName: string, weight?: number): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/backend`

    return this.client.request<IpLoadBalancingTask>('POST', url, {ipBackend, probe, weight})
  }

  /**
   * Backends attached to your IP load balancing [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D#GET)
   */
  /*
  GetThisObjectProperties(backend: string, serviceName: string): Promise<IpLoadBalancingBackendIp> {
    let url = `/ip/loadBalancing/${serviceName}/backend/${backend}`

    return this.client.request<IpLoadBalancingBackendIp>('GET', url)
  }
  */

  /**
   * Backends attached to your IP load balancing [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D#PUT)
   */
  /*
  AlterThisObjectProperties(backend: string, serviceName: string, payload: IpLoadBalancingBackendIp): Promise<void> {
    let url = `/ip/loadBalancing/${serviceName}/backend/${backend}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Backends attached to your IP load balancing [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D#DELETE)
   */
  RemoveABackendIP(backend: string, serviceName: string): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/backend/${backend}`

    return this.client.request<IpLoadBalancingTask>('DELETE', url)
  }

  /**
   * backupState operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D/backupState#POST)
   */
  SetOrUnsetTheBackendAsABackupOfAnotherBackendRequestsWillBeDirectedToTheBackupOnlyIfTheMainBackendIsInProbeFail(backend: string, backupStateSet: boolean, serviceName: string, mainBackendIp?: string): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/backend/${backend}/backupState`

    return this.client.request<IpLoadBalancingTask>('POST', url, {backupStateSet, mainBackendIp})
  }

  /**
   * setWeight operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D/setWeight#POST)
   */
  SetTheWeightOfABackendForInstanceIfBackendAHasAWeightOf8AndBackupBWasAWeightOf16BackendBWillReceiveTwiceMoreConnectionsAsBackendABackendsMustBeOnTheSamePOPForTheWeightParameterToTakeEffectBetweenThem(backend: string, serviceName: string, weight: number): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/backend/${backend}/setWeight`

    return this.client.request<IpLoadBalancingTask>('POST', url, {weight})
  }

  /**
   * importCustomSsl operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/importCustomSsl#POST)
   */
  ImportYourOwnSslCertificateOnYourIPLoadBalancingSslOptionIsNeededToUseThisUrl(certificate: string, key: string, serviceName: string, chain?: string): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/importCustomSsl`

    return this.client.request<IpLoadBalancingTask>('POST', url, {certificate, key, chain})
  }

  /**
   * internalNatIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/internalNatIp#GET)
   */
  IpSubnetUsedByOVHToNatRequestsOnYourIpLbToYourBackendsYouMustEnsureThatYourBackendsAreNotPartOfANetworkThatOverlapWithThisOne(serviceName: string, zone: IpLoadBalancingZone): Promise<string> {
    let url = `/ip/loadBalancing/${serviceName}/internalNatIp?`

    const queryParams = new QueryParams()
    if (zone) { queryParams.set('zone', zone.toString()) }

    return this.client.request<string>('GET', url+queryParams.toString())
  }

  /**
   * List the portsRedirection objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection#GET)
   */
  GetAllSrcPort(serviceName: string): Promise<IpLoadBalancingAdditionalPortEnum[]> {
    let url = `/ip/loadBalancing/${serviceName}/portsRedirection`

    return this.client.request<IpLoadBalancingAdditionalPortEnum[]>('GET', url)
  }

  /**
   * List the portsRedirection objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection#POST)
   */
  AddANewPortRedirection(serviceName: string, payload: IpLoadBalancingIpLoadBalancingPort): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/portsRedirection`

    return this.client.request<IpLoadBalancingTask>('POST', url, payload)
  }

  /**
   * Port redirections [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection/%7BsrcPort%7D#GET)
   */
  GetTheValueForTheGivenSrcPort(serviceName: string, srcPort: IpLoadBalancingAdditionalPort): Promise<IpLoadBalancingIpLoadBalancingPort> {
    let url = `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`

    return this.client.request<IpLoadBalancingIpLoadBalancingPort>('GET', url)
  }

  /**
   * Port redirections [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection/%7BsrcPort%7D#DELETE)
   */
  DeleteAPortRedirection(serviceName: string, srcPort: IpLoadBalancingAdditionalPort): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`

    return this.client.request<IpLoadBalancingTask>('DELETE', url)
  }

  /**
   * probeIp operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/probeIp#GET)
   */
  IpSubnetUsedToSendProbesToYourBackends(serviceName: string, zone: IpLoadBalancingZone): Promise<string[]> {
    let url = `/ip/loadBalancing/${serviceName}/probeIp?`

    const queryParams = new QueryParams()
    if (zone) { queryParams.set('zone', zone.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * restoreSsl operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/restoreSsl#POST)
   */
  RestoreOVHSslCertificateOnYourIPLoadBalancingSslOptionIsNeededToUseThisUrlADCVMailWillBeSentToPostmaster@yourdomainabc(serviceName: string): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/restoreSsl`

    return this.client.request<IpLoadBalancingTask>('POST', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/ip/loadBalancing/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/ip/loadBalancing/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * stickiness operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/stickiness#POST)
   */
  SetStickinessTypeIpSourceWillStickClientsToABackendByTheirSourceIpCookieWillStickThemByInsertingACookieNoneIsToSetNoStickiness(serviceName: string, stickiness: IpLoadBalancingStickiness): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/stickiness`

    return this.client.request<IpLoadBalancingTask>('POST', url, {stickiness})
  }

  /**
   * switchToIplbNextGenerationApi operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/switchToIplbNextGenerationApi#POST)
   */
  SwitchToIpLoadbalancingNextgenAPIBenefits_AdditionnalsProbesDDOSProtection(serviceName: string): Promise<IpLoadbalancingTaskTask> {
    let url = `/ip/loadBalancing/${serviceName}/switchToIplbNextGenerationApi`

    return this.client.request<IpLoadbalancingTaskTask>('POST', url)
  }

  /**
   * List the ip.LoadBalancingTask objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/task#GET)
   */
  TaskListAssociatedWithThisIP(serviceName: string): Promise<number[]> {
    let url = `/ip/loadBalancing/${serviceName}/task`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List of tasks associated with your IP load balancing [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<IpLoadBalancingTask> {
    let url = `/ip/loadBalancing/${serviceName}/task/${taskId}`

    return this.client.request<IpLoadBalancingTask>('GET', url)
  }
  */

  /**
   * Operations about the IP service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/ip/service`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Your IP linked to service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<IpServiceIp> {
    let url = `/ip/service/${serviceName}`

    return this.client.request<IpServiceIp>('GET', url)
  }
  */

  /**
   * Your IP linked to service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: IpServiceIp): Promise<void> {
    let url = `/ip/service/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Change the contacts of this service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/ip/service/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/ip/service/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Details about a non-expiring Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesNonExpiringService> {
    let url = `/ip/service/${serviceName}/serviceInfos`

    return this.client.request<ServicesNonExpiringService>('GET', url)
  }
  */

  /**
   * Terminate your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/ip/service/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

}
