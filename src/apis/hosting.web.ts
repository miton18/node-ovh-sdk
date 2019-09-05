// GENERATED SDK for hosting/web API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A value set tagged with its unit and serie name
 */
export interface ComplexTypeChartSerie<T> {
  serieName: string
  unit: string
  values: T[]
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
 * Private database available ram sizes
 */
export type HostingPrivateDatabaseAvailableRamSize = '1024' | '2048' | '4096' | '512'

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

/**
 * Url and port of a service
 */
export interface HostingwebAddress {
  port: number
  url: string
}

/**
 * Virtual service
 */
export interface HostingwebattachedDomain {
  cdn: HostingwebattachedDomainCdn
  domain: string
  firewall: HostingwebattachedDomainFirewall
  ipLocation?: HostingwebCountry
  ownLog?: string
  path: string
  runtimeId?: number
  ssl?: boolean
  status: HostingwebattachedDomainStatus
  taskId?: number
}

/*
 * Attached domain cdn enum
 */
export enum HostingwebattachedDomainCdn {
  ACTIVE = 'active',
  NONE = 'none'
}

/*
 * Attached domain firewall enum
 */
export enum HostingwebattachedDomainFirewall {
  ACTIVE = 'active',
  NONE = 'none'
}

/*
 * AttachedDomain status
 */
export enum HostingwebattachedDomainStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/**
 * Struct which describs an boost offer from a service
 */
export interface HostingwebAvailableOfferStruct {
  offer: HostingwebOffer
  price: OrderPrice
}

/*
 * List of backup types
 */
export enum HostingwebbackupType {
  DAILY_1 = 'daily.1',
  DAILY_2 = 'daily.2',
  DAILY_3 = 'daily.3',
  WEEKLY_1 = 'weekly.1',
  WEEKLY_2 = 'weekly.2'
}

/**
 * History of your boost requests
 */
export interface HostingwebboostHistory {
  accountId: string
  boostOffer?: HostingwebOfferCapabilities
  date: string
  offer: HostingwebOfferCapabilities
}

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

/**
 * CDN service
 */
export interface Hostingwebcdn {
  domain: string
  free: boolean
  status: HostingwebcdnStatus
  taskId?: number
  type: string
  version: string
}

/*
 * Cdn status
 */
export enum HostingwebcdnStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  FLUSHING = 'flushing'
}

/**
 * Available clusterIp by country
 */
export interface HostingwebCountriesIp {
  country: HostingwebCountry
  ip: string
  ipv6?: string
}

/*
 * Available cluster countries
 */
export enum HostingwebCountry {
  BE = 'BE',
  CZ = 'CZ',
  DE = 'DE',
  ES = 'ES',
  FI = 'FI',
  FR = 'FR',
  IE = 'IE',
  IT = 'IT',
  LT = 'LT',
  NL = 'NL',
  PL = 'PL',
  PT = 'PT',
  UK = 'UK'
}

/**
 * Struct which describes mail offer available and his quota
 */
export interface HostingwebCreationEmailCapabilities {
  available: number
  quota: any
}

/**
 * Hosting crons
 */
export interface Hostingwebcron {
  command: string
  description?: string
  email?: string
  frequency: string
  id: number
  language: HostingwebcronLanguage
  status: HostingwebcronStatus
}

/*
 * Cron's language
 */
export enum HostingwebcronLanguage {
  NODE10 = 'node10',
  NODE11 = 'node11',
  NODE8 = 'node8',
  NODE9 = 'node9',
  OTHER = 'other',
  PHP4 = 'php4',
  PHP5_2 = 'php5.2',
  PHP5_3 = 'php5.3',
  PHP5_4 = 'php5.4',
  PHP5_5 = 'php5.5',
  PHP5_6 = 'php5.6',
  PHP7_0 = 'php7.0',
  PHP7_1 = 'php7.1',
  PHP7_2 = 'php7.2',
  PHP7_3 = 'php7.3',
  PYTHON2 = 'python2',
  PYTHON3 = 'python3',
  RUBY2_4 = 'ruby2.4',
  RUBY2_5 = 'ruby2.5',
  RUBY2_6 = 'ruby2.6'
}

/*
 * Cron status
 */
export enum HostingwebcronStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  SUSPENDED = 'suspended'
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
 * Database
 */
export interface Hostingwebdatabase {
  dumps: number
  guiURL?: string
  lastCheck?: string
  mode: HostingwebdatabaseMode
  name: string
  port: number
  quotaSize: any
  quotaUsed: any
  server?: string
  state: HostingwebdatabaseState
  status: HostingwebdatabaseStatus
  taskId?: number
  type: HostingwebdatabaseDatabaseType
  user: string
  version: HostingwebdatabaseVersion
  versionSupport: HostingwebdatabaseSupportedVersion
}

/**
 * Database Available and Default version
 */
export interface HostingwebdatabaseAvailableVersionStruct {
  default: HostingwebdatabaseVersion
  list: HostingwebdatabaseVersionEnum[]
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

/**
 * Struct which describe available features for a database
 */
export interface HostingwebdatabaseDatabaseCapabilities {
  changePassword: boolean
  changeRight: boolean
  delete: boolean
  dump: boolean
  getQuota: boolean
  getRight: boolean
  guiURL: string
  optimize: boolean
  restore: boolean
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

/**
 * Dump
 */
export interface Hostingwebdatabasedump {
  creationDate: string
  deletionDate: string
  id: number
  status: HostingwebdatabasedumpStatus
  taskId?: number
  type: HostingwebdatabasedumpDate
  url?: string
}

/*
 * List of dump types
 */
export enum HostingwebdatabasedumpDate {
  DAILY_1 = 'daily.1',
  NOW = 'now',
  WEEKLY_1 = 'weekly.1'
}

/*
 * Database dump status
 */
export enum HostingwebdatabasedumpStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting'
}

/*
 * ExtraSqlPerso quota enum
 */
export type HostingwebdatabaseExtraSqlQuota = 100 | 200 | 25 | 400 | 800

/*
 * Database mode
 */
export enum HostingwebdatabaseMode {
  BESTEFFORT = 'besteffort',
  CLASSIC = 'classic',
  MODULE = 'module'
}

/*
 * Types of action you can request for your database
 */
export enum HostingwebdatabaseRequestAction {
  CHECK_QUOTA = 'CHECK_QUOTA'
}

/*
 * Database state
 */
export enum HostingwebdatabaseState {
  CLOSE = 'close',
  OK = 'ok',
  READONLY = 'readonly'
}

/*
 * Types of statistics available for the database
 */
export enum HostingwebdatabaseStatisticsType {
  STATEMENT = 'statement',
  STATEMENTMEANTIME = 'statementMeanTime'
}

/*
 * Database status
 */
export enum HostingwebdatabaseStatus {
  CHECKING = 'checking',
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  DUMPING = 'dumping',
  IMPORTING = 'importing',
  LOCKED = 'locked',
  OPTIMIZING = 'optimizing',
  RESTORING = 'restoring',
  UPDATING = 'updating'
}

/*
 * Indicates the current support state of your database version
 */
export enum HostingwebdatabaseSupportedVersion {
  BETA = 'beta',
  DEPRECATED = 'deprecated',
  STABLE = 'stable'
}

/*
 * Database Version enum
 */
export type HostingwebdatabaseVersion = '3.4' | '4.0' | '5.1' | '5.5' | '5.6' | '8.4'

/*
 * Available datacenters
 */
export enum HostingwebDatacenter {
  GRA1 = 'gra1',
  GRA2 = 'gra2',
  P19 = 'p19'
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

/**
 * Dump
 */
export interface Hostingwebdump {
  creationDate: string
  databaseName: string
  deletionDate: string
  id: number
  orphan: boolean
  status: HostingwebdatabasedumpStatus
  taskId?: number
  type: HostingwebdatabasedumpDate
  url?: string
}

/**
 * Hosting automated emails
 */
export interface Hostingwebemail {
  bounce: number
  email?: string
  maxPerDay: number
  sent: number
  sentToday: number
  state: HostingwebmailState
}

/**
 * Environment variables set into your webhosting account
 */
export interface HostingwebenvVar {
  key: string
  status: HostingwebenvVarStatus
  taskId?: number
  type: HostingwebenvVarType
  value: string
}

/*
 * EnvVar status
 */
export enum HostingwebenvVarStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/*
 * EnvVar type
 */
export enum HostingwebenvVarType {
  INTEGER = 'integer',
  PASSWORD = 'password',
  STRING = 'string'
}

/**
 * Sqlperso service
 */
export interface Hostingwebextrasqlperso {
  database: number
  name: string
  size: any
  status: string
  taskId?: number
}

/**
 * Freedoms linked to this hosting account
 */
export interface Hostingwebfreedom {
  domain: string
  status: HostingwebfreedomStatus
  type: string
}

/*
 * Available status for freedoms
 */
export enum HostingwebfreedomStatus {
  BLOCKEDBYCUSTOMER = 'blockedByCustomer',
  BLOCKEDBYSYSTEM = 'blockedBySystem',
  OK = 'ok',
  PRESET = 'preset'
}

/*
 * Highlight tips for offer
 */
export enum HostingwebHighLight {
  BEST_SELLER = 'best-seller',
  NEW = 'new'
}

/*
 * Hostedssl report value
 */
export enum HostingwebhostedsslReportValue {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in-progress',
  NON_COMPLETED = 'non-completed',
  NON_REQUIRED = 'non-required',
  NOT_APPLICABLE = 'not-applicable',
  NOT_PROVIDED = 'not-provided'
}

/*
 * Hostedssl status
 */
export enum HostingwebhostedsslStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  IMPORTING = 'importing',
  REGENERATING = 'regenerating'
}

/**
 * Hosting indys
 */
export interface Hostingwebindy {
  attachedDomains: string[]
  home: string
  login: string
  state: HostingwebuserState
}

/**
 * Local SEO accounts
 */
export interface HostingweblocalSeoaccount {
  creationDate: string
  email: string
  id: number
  lastUpdate: string
  status: HostingweblocalSeoaccountStatus
  taskId?: number
}

/*
 * Availability of an email address for a local SEO order
 */
export enum HostingweblocalSeoaccountEmailAvailability {
  AVAILABLE = 'available',
  MERGE = 'merge',
  NIC = 'nic',
  TAKEN = 'taken'
}

/*
 * Account status
 */
export enum HostingweblocalSeoaccountStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/**
 * Struct describing a list of directories ordered by type
 */
export interface HostingweblocalSeoDirectoriesList {
  navigationSystems: HostingweblocalSeoDirectory[]
  searchEngines: HostingweblocalSeoDirectory[]
  socialNetworks: HostingweblocalSeoDirectory[]
}

/**
 * Struct describing a directory
 */
export interface HostingweblocalSeoDirectory {
  code: string
  displayName: string
}

/**
 * Struct describing the availability of an email address for a local SEO order
 */
export interface HostingweblocalSeoEmailAvailability {
  availability: HostingweblocalSeoaccountEmailAvailability
  serviceName?: string
}

/*
 * Sync status of a location field
 */
export enum HostingweblocalSeoFieldStatus {
  MATCH = 'MATCH',
  MISMATCH = 'MISMATCH',
  MISSING = 'MISSING',
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  PRESENT = 'PRESENT'
}

/*
 * Status of a listing
 */
export enum HostingweblocalSeoFlowStatus {
  ALL_INFORMATION_SUBMITTED = 'ALL_INFORMATION_SUBMITTED',
  DONT_REMOVE = 'DONT_REMOVE',
  INACTIVE = 'INACTIVE',
  MANUALLY_DEACTIVATED = 'MANUALLY_DEACTIVATED',
  NEEDS_REVIEW = 'NEEDS_REVIEW',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  NO_ACTION_NEEDED = 'NO_ACTION_NEEDED',
  REMOVAL_NEEDED = 'REMOVAL_NEEDED',
  REMOVAL_REVIEW_NEEDED = 'REMOVAL_REVIEW_NEEDED',
  REMOVAL_SUBMITTED = 'REMOVAL_SUBMITTED',
  REMOVED = 'REMOVED',
  SUBMISSION_NEEDED = 'SUBMISSION_NEEDED',
  WAITING_DIRECTORY_ACTION = 'WAITING_DIRECTORY_ACTION',
  WAITING_USER_ACTION = 'WAITING_USER_ACTION'
}

/*
 * Sync status of a listing
 */
export enum HostingweblocalSeoListingStatus {
  IN_SYNC = 'IN_SYNC',
  NOT_FOUND = 'NOT_FOUND',
  NOT_IN_SYNC = 'NOT_IN_SYNC',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  NO_ONLINE_LISTING = 'NO_ONLINE_LISTING',
  TECHNICAL_PROBLEMS = 'TECHNICAL_PROBLEMS'
}

/**
 * Local SEO locations
 */
export interface HostingweblocalSeolocation {
  accountId?: number
  address?: string
  country: HostingweblocalSeolocationCountry
  creationDate: string
  id: number
  lastUpdate: string
  name?: string
  offer: HostingweblocalSeolocationOffer
  status: HostingweblocalSeolocationStatus
  taskId?: number
}

/*
 * Location country
 */
export enum HostingweblocalSeolocationCountry {
  FR = 'FR'
}

/*
 * Location offer
 */
export enum HostingweblocalSeolocationOffer {
  NORMAL = 'normal'
}

/*
 * Location status
 */
export enum HostingweblocalSeolocationStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/**
 * Struct describing a location being checked for visibility
 */
export interface HostingweblocalSeoSearchData {
  city: string
  country: string
  id: number
  name: string
  province?: string
  street: string
  streetNo: string
  token: string
  zip: string
}

/**
 * Struct describing the response for a visibility check request
 */
export interface HostingweblocalSeoVisibilityCheckResponse {
  alreadyManaged?: boolean
  searchData: HostingweblocalSeoSearchData
}

/**
 * Struct describing a visibility check result
 */
export interface HostingweblocalSeoVisibilityCheckResultResponse {
  city?: string
  cityStatus?: HostingweblocalSeoFieldStatus
  country?: string
  countryStatus?: HostingweblocalSeoFieldStatus
  dateCreated?: string
  directoryType?: string
  email?: string
  emailStatus?: HostingweblocalSeoFieldStatus
  flowStatus?: HostingweblocalSeoFlowStatus
  listingId?: string
  listingUrl?: string
  name?: string
  nameStatus?: HostingweblocalSeoFieldStatus
  phone?: string
  phoneStatus?: HostingweblocalSeoFieldStatus
  province?: string
  provinceStatus?: HostingweblocalSeoFieldStatus
  street?: string
  streetAndNo?: string
  streetAndNoStatus?: HostingweblocalSeoFieldStatus
  streetNo?: string
  streetNoStatus?: HostingweblocalSeoFieldStatus
  streetStatus?: HostingweblocalSeoFieldStatus
  streetType?: string
  streetTypeStatus?: HostingweblocalSeoFieldStatus
  syncStatus?: HostingweblocalSeoListingStatus
  website?: string
  websiteStatus?: HostingweblocalSeoFieldStatus
  zip?: string
  zipStatus?: HostingweblocalSeoFieldStatus
}

/*
 * Types of action you can request for your mail
 */
export enum HostingwebmailAction {
  BLOCK = 'BLOCK',
  PURGE = 'PURGE',
  UNBLOCK = 'UNBLOCK'
}

/**
 * The volume history type
 */
export interface HostingwebmailBounce {
  date: string
  message?: string
  to?: string
}

/*
 * Mail state enum
 */
export enum HostingwebmailState {
  BOUNCE = 'bounce',
  FORCE = 'force',
  KO = 'ko',
  OK = 'ok',
  PURGING = 'purging',
  SPAM = 'spam'
}

/**
 * The volume history type
 */
export interface HostingwebmailVolumeHistory {
  date: string
  volume?: number
}

/**
 * Hosting modules installed
 */
export interface Hostingwebmodule {
  adminFolder: string
  adminName: string
  creationDate: string
  dependencies: HostingwebmoduleDependencyType[]
  id: number
  language: HostingwebmoduleLanguage
  lastUpdate: string
  moduleId: number
  path: string
  status: HostingwebmoduleStatus
  targetUrl: string
  taskId?: number
}

/*
 * The type of the admin name
 */
export enum HostingwebmoduleAdminNameType {
  EMAIL = 'email',
  STRING = 'string'
}

/*
 * Branch enum
 */
export enum HostingwebmoduleBranch {
  OLD = 'old',
  STABLE = 'stable',
  TESTING = 'testing'
}

/**
 * Dependency parameters. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
 */
export interface HostingwebmoduleDependencyType {
  name?: string
  password?: string
  port?: number
  prefix?: string
  server?: string
  type: HostingwebmoduleDependencyType
  user?: string
}

/*
 * The type of the dependency. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
 */
export enum HostingwebmoduleDependencyType {
  MYSQL = 'mysql'
}

/*
 * Install language
 */
export enum HostingwebmoduleLanguage {
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

/*
 * Module status
 */
export enum HostingwebmoduleStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/**
 * A module specifically packaged by OVH
 */
export interface HostingwebModuleList {
  active: boolean
  adminNameType: HostingwebmoduleAdminNameType
  author: string
  branch: HostingwebmoduleBranch
  id: number
  keywords: string[]
  language: HostingwebmoduleLanguageEnum[]
  languageRequirement: any
  latest: boolean
  name: string
  size: any
  upgradeFrom: number[]
  version: string
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
export type HostingwebOfferCapabilities = '1000gp' | '20gp' | '240gp' | '240pack' | '240plan' | '300gp' | '60gp' | '720pack' | '720plan' | '90pack' | '90plan' | 'CLOUDWEB_1' | 'CLOUDWEB_2' | 'CLOUDWEB_3' | 'KS' | 'PERFORMANCE_1' | 'PERFORMANCE_2' | 'PERFORMANCE_3' | 'PERFORMANCE_4' | 'PERSO' | 'PRO' | 'START' | 'business' | 'cloudweb1' | 'cloudweb2' | 'cloudweb3' | 'cloudwebbetax1' | 'depro2012' | 'deprol2012' | 'deproxl2012' | 'deproxxl2012' | 'destart2012' | 'destartl2012' | 'destartxl2012' | 'domainpack' | 'itbusiness2012' | 'itperso2012' | 'itpremium2012' | 'kimsufi2015' | 'mailpack' | 'mailplan' | 'mediapack' | 'mediaplan' | 'ovhpro1To' | 'ovhpro2To' | 'ovhpro5To' | 'paas2014beta' | 'perf2014x1' | 'perf2014x2' | 'perf2014x3' | 'perf2014x4' | 'perso2010' | 'perso2014' | 'premium' | 'pro2010' | 'pro2014' | 'start10g' | 'start10m' | 'start1g' | 'start1ges' | 'start1m' | 'start5g' | 'starter' | 'xxlpack' | 'xxlplan'

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
 * Hosting's OS
 */
export enum HostingwebOperatingSystem {
  LINUX = 'linux'
}

/**
 * Virtual service
 */
export interface HostingwebovhConfig {
  container: string
  creationDate: string
  engineName: HostingwebovhConfigEngineName
  engineVersion: HostingwebovhConfigEngineVersion
  environment: HostingwebovhConfigEnvironment
  fileExist: boolean
  historical?: boolean
  httpFirewall: HostingwebovhConfigHttpFirewall
  id: number
  path?: string
  status: HostingwebovhConfigStatus
  taskId?: number
}

/*
 * Hosting available configuration version
 */
export type HostingwebovhConfigAvailableEngineVersion = '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3'

/*
 * Hosting configuration image to run website
 */
export enum HostingwebovhconfigContainer {
  JESSIE_I386 = 'jessie.i386',
  LEGACY = 'legacy',
  STABLE = 'stable',
  TESTING = 'testing'
}

/*
 * Hosting configuration engine
 */
export enum HostingwebovhConfigEngineName {
  PHP = 'php',
  PHPCGI = 'phpcgi'
}

/*
 * Hosting configuration version
 */
export type HostingwebovhConfigEngineVersion = '4.4' | '5.0' | '5.1' | '5.2' | '5.3' | '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3' | 'AUTO'

/*
 * Hosting configuration environment
 */
export enum HostingwebovhConfigEnvironment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

/*
 * Hosting configuration firewall
 */
export enum HostingwebovhConfigHttpFirewall {
  NONE = 'none',
  SECURITY = 'security'
}

/*
 * Ovhconfig status
 */
export enum HostingwebovhConfigStatus {
  CREATED = 'created',
  ROLLBACKING = 'rollbacking',
  UPDATING = 'updating'
}

/**
 * Hosting own logs
 */
export interface HostingwebownLogs {
  fqdn: string
  id: number
  status: HostingwebownLogsStatus
  taskId?: number
}

/*
 * OwnLogs status
 */
export enum HostingwebownLogsStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting'
}

/**
 * State of available php versions for this account
 */
export interface HostingwebPhpVersion {
  support: HostingwebPhpVersionState
  version: string
}

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
 * Different support of PHP versions
 */
export enum HostingwebPhpVersionState {
  BETA = 'BETA',
  END_OF_LIFE = 'END_OF_LIFE',
  SECURITY_FIXES = 'SECURITY_FIXES',
  SUPPORTED = 'SUPPORTED'
}

/*
 * Different Python versions available
 */
export enum HostingwebPythonVersionAvailable {
  PYTHON_2 = 'python-2',
  PYTHON_3 = 'python-3'
}

/*
 * Types of action you can request for your web hosting
 */
export enum HostingwebRequestAction {
  CHECK_QUOTA = 'CHECK_QUOTA',
  FLUSH_CACHE = 'FLUSH_CACHE',
  SCAN_ANTIHACK = 'SCAN_ANTIHACK'
}

/*
 * Hosting's type
 */
export enum HostingwebResource {
  BESTEFFORT = 'bestEffort',
  CLOUD = 'cloud',
  DEDICATED = 'dedicated',
  SHARED = 'shared'
}

/*
 * Different Ruby versions available
 */
export enum HostingwebRubyVersionAvailable {
  RUBY_2_4 = 'ruby-2.4',
  RUBY_2_5 = 'ruby-2.5',
  RUBY_2_6 = 'ruby-2.6'
}

/**
 * The runtime configuration of an attached domain for cloud web offer
 */
export interface Hostingwebruntime {
  appBootstrap?: string
  appEnv: HostingwebruntimeEnv
  creationDate: string
  id: number
  isDefault: boolean
  isDeletable: boolean
  lastUpdate: string
  name?: string
  publicDir?: string
  status: HostingwebruntimeState
  taskId?: number
  type: HostingwebruntimeType
}

/*
 * Runtime env enum
 */
export enum HostingwebruntimeEnv {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

/*
 * Runtime state enum
 */
export enum HostingwebruntimeState {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/*
 * Runtime backend type enum
 */
export enum HostingwebruntimeType {
  NODEJS_10 = 'nodejs-10',
  NODEJS_11 = 'nodejs-11',
  NODEJS_8 = 'nodejs-8',
  NODEJS_9 = 'nodejs-9',
  PHPFPM_5_6 = 'phpfpm-5.6',
  PHPFPM_7_0 = 'phpfpm-7.0',
  PHPFPM_7_1 = 'phpfpm-7.1',
  PHPFPM_7_2 = 'phpfpm-7.2',
  PHPFPM_7_3 = 'phpfpm-7.3',
  PYTHON_2 = 'python-2',
  PYTHON_3 = 'python-3',
  RUBY_2_4 = 'ruby-2.4',
  RUBY_2_5 = 'ruby-2.5',
  RUBY_2_6 = 'ruby-2.6'
}

/**
 * Web Hosting
 */
export interface HostingwebService {
  availableBoostOffer: HostingwebAvailableOfferStruct[]
  boostOffer?: HostingwebOfferCapabilities
  cluster: string
  clusterIp?: string
  clusterIpv6?: string
  countriesIp?: HostingwebCountriesIp[]
  datacenter: HostingwebDatacenter
  displayName?: string
  filer?: string
  hasCdn?: boolean
  hasHostedSsl?: boolean
  home: string
  hostingIp?: string
  hostingIpv6?: string
  lastOvhConfigScan?: string
  offer: HostingwebOfferCapabilities
  operatingSystem: HostingwebOperatingSystem
  phpVersions: HostingwebPhpVersion[]
  primaryLogin: string
  quotaSize: any
  quotaUsed?: any
  recommendedOffer?: HostingwebOffer
  resourceType: HostingwebResource
  serviceManagementAccess: HostingwebServiceAccess
  serviceName: string
  state: HostingwebState
  token?: string
  trafficQuotaSize?: any
  trafficQuotaUsed?: any
  updates: string[]
}

/**
 * Different url to manage your service
 */
export interface HostingwebServiceAccess {
  ftp: HostingwebAddress
  http: HostingwebAddress
  ssh: HostingwebAddress
}

/**
 * Hostedssl
 */
export interface Hostingwebssl {
  isReportable: boolean
  provider: string
  regenerable: boolean
  status: HostingwebhostedsslStatus
  taskId?: number
  type: string
}

/**
 * Hostedssl Report
 */
export interface Hostingwebsslreport {
  certificateSigningRequestStatus: HostingwebhostedsslReportValue
  domainControlValidationStatus: HostingwebhostedsslReportValue
  organizationValidationStatus: HostingwebhostedsslReportValue
  phoneCallApprovalStatus: HostingwebhostedsslReportValue
  providerOrderId: string
  termsAndConditionsAcceptanceStatus: HostingwebhostedsslReportValue
  tradeNameVerificationStatus: HostingwebhostedsslReportValue
}

/*
 * Hosting's state
 */
export enum HostingwebState {
  ACTIVE = 'active',
  BLOQUED = 'bloqued',
  MAINTENANCE = 'maintenance'
}

/*
 * Available periods for statistics
 */
export enum HostingwebStatisticsPeriod {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  YEARLY = 'yearly'
}

/*
 * Types of statistics available for the web hosting
 */
export enum HostingwebStatisticsType {
  IN_FTPCOMMANDS = 'in.ftpCommands',
  IN_HTTPHITS = 'in.httpHits',
  IN_HTTPMEANRESPONSETIME = 'in.httpMeanResponseTime',
  OUT_TCPCONN = 'out.tcpConn',
  SYS_CPUUSAGE = 'sys.cpuUsage',
  SYS_WORKERSPAWNOVERLOAD = 'sys.workerSpawnOverload'
}

/**
 * Tasks
 */
export interface Hostingwebtask {
  doneDate?: string
  function: string
  id: number
  lastUpdate?: string
  objectId?: string
  objectType?: HostingwebtaskObjectType
  startDate: string
  status: HostingwebtaskStatus
}

/*
 * Task object type listing
 */
export enum HostingwebtaskObjectType {
  ABUSE = 'Abuse',
  ATTACHEDDOMAIN = 'AttachedDomain',
  BLOCKEDIP = 'BlockedIp',
  CDN = 'Cdn',
  CRON = 'Cron',
  DATABASE = 'Database',
  DUMP = 'Dump',
  ENVVAR = 'EnvVar',
  FILERZ = 'Filerz',
  HOSTEDSSL = 'Hostedssl',
  HOSTING = 'Hosting',
  INDY = 'Indy',
  INFRA = 'Infra',
  MINOR = 'Minor',
  MODULE = 'Module',
  OTHER = 'Other',
  OVHCONFIG = 'OvhConfig',
  OVHORG = 'OvhOrg',
  OWNLOGS = 'OwnLogs',
  RUNTIME = 'Runtime',
  SCAN = 'Scan',
  SQLPERSO = 'Sqlperso',
  USER = 'User',
  USERLOGS = 'UserLogs',
  WEB = 'Web',
  WEBD = 'Webd'
}

/*
 * Task's status
 */
export enum HostingwebtaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  INIT = 'init',
  TODO = 'todo'
}

/**
 * Hosting users
 */
export interface Hostingwebuser {
  home: string
  isPrimaryAccount: boolean
  login: string
  serviceManagementCredentials: HostingwebuserServiceCredentials
  sshState: HostingwebuserSshState
  state: HostingwebuserState
  status: HostingwebuserStatus
  taskId?: number
}

/**
 * User, url and port of a service
 */
export interface HostingwebuserCredentials {
  port: number
  url: string
  user: string
}

/**
 * Different credentials to manage your service
 */
export interface HostingwebuserServiceCredentials {
  ftp: HostingwebuserCredentials
  ssh: HostingwebuserCredentials
}

/*
 * Account's ssh state
 */
export enum HostingwebuserSshState {
  ACTIVE = 'active',
  NONE = 'none',
  SFTPONLY = 'sftponly'
}

/*
 * Account's state
 */
export enum HostingwebuserState {
  OFF = 'off',
  RW = 'rw'
}

/*
 * User status
 */
export enum HostingwebuserStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/**
 * Hosting users logs
 */
export interface HostingwebuserLogs {
  creationDate: string
  description?: string
  login: string
  ownLogsId?: number
  status: HostingwebuserLogsStatus
  taskId?: number
}

/*
 * UserLogs status
 */
export enum HostingwebuserLogsStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
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


export class HostingWeb {
  constructor(private client: Client) {}

  /**
   * Operations about the HOSTING service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/hosting/web`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Web Hosting [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<HostingwebService> {
    let url = `/hosting/web/${serviceName}`

    return this.client.request<HostingwebService>('GET', url)
  }

  /**
   * Web Hosting [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: HostingwebService): Promise<void> {
    let url = `/hosting/web/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * activatePrivateDatabase operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/activatePrivateDatabase#POST)
   */
  ActivateAnIncludedPrivateDatabaseOnYourHostingOffer(ram: HostingPrivateDatabaseAvailableRamSize, serviceName: string, version: HostingPrivateDatabaseOrderableVersion): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/activatePrivateDatabase`

    return this.client.request<Hostingwebtask>('POST', url, {ram, version})
  }

  /**
   * List the hosting.web.attachedDomain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain#GET)
   */
  DomainsOrSubdomainsAttachedToYourHosting(serviceName: string, domain?: string, path?: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/attachedDomain?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (path) { queryParams.set('path', path) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.attachedDomain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain#POST)
   */
  LinkADomainToThisHosting(domain: string, path: string, serviceName: string, cdn?: HostingwebattachedDomainCdn, firewall?: HostingwebattachedDomainFirewall, ownLog?: string, runtimeId?: number, ssl?: boolean): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/attachedDomain`

    return this.client.request<Hostingwebtask>('POST', url, {domain, path, cdn, firewall, ownLog, runtimeId, ssl})
  }

  /**
   * Virtual service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string): Promise<HostingwebattachedDomain> {
    let url = `/hosting/web/${serviceName}/attachedDomain/${domain}`

    return this.client.request<HostingwebattachedDomain>('GET', url)
  }
  */

  /**
   * Virtual service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D#PUT)
   */
  /*
  AlterThisObjectProperties(domain: string, serviceName: string, payload: HostingwebattachedDomain): Promise<void> {
    let url = `/hosting/web/${serviceName}/attachedDomain/${domain}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Virtual service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D#DELETE)
   */
  UnlinkDomainFromHosting(domain: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/attachedDomain/${domain}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }

  /**
   * purgeCache operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D/purgeCache#POST)
   */
  PurgeCacheForThisAttachedDomain(domain: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/attachedDomain/${domain}/purgeCache`

    return this.client.request<Hostingwebtask>('POST', url)
  }

  /**
   * restart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D/restart#POST)
   */
  RestartTheVirtualHostOfTheAttachedDomain(domain: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/attachedDomain/${domain}/restart`

    return this.client.request<Hostingwebtask>('POST', url)
  }

  /**
   * List the hosting.web.boostHistory objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/boostHistory#GET)
   */
  HistoryOfYourHostingBoost(serviceName: string, date?: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/boostHistory?`

    const queryParams = new QueryParams()
    if (date) { queryParams.set('date', date.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * History of your boost requests [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/boostHistory/%7Bdate%7D#GET)
   */
  /*
  GetThisObjectProperties(date: string, serviceName: string): Promise<HostingwebboostHistory> {
    let url = `/hosting/web/${serviceName}/boostHistory/${date}`

    return this.client.request<HostingwebboostHistory>('GET', url)
  }
  */

  /**
   * CDN service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<Hostingwebcdn> {
    let url = `/hosting/web/${serviceName}/cdn`

    return this.client.request<Hostingwebcdn>('GET', url)
  }
  */

  /**
   * serviceInfos operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/hosting/web/${serviceName}/cdn/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * serviceInfosUpdate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn/serviceInfosUpdate#POST)
   */
  /*
  AlterThisObjectProperties(renew: ServiceRenewType, serviceName: string): Promise<void> {
    let url = `/hosting/web/${serviceName}/cdn/serviceInfosUpdate`

    return this.client.request<void>('POST', url, {renew})
  }
  */

  /**
   * terminate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn/terminate#POST)
   */
  TerminateYourCdnSubService(serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/cdn/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/hosting/web/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the hosting.web.cron objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron#GET)
   */
  CronsOnYourHosting(serviceName: string, command?: string, description?: string, email?: string, language?: HostingwebcronLanguage): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/cron?`

    const queryParams = new QueryParams()
    if (command) { queryParams.set('command', command) }
    if (description) { queryParams.set('description', description) }
    if (email) { queryParams.set('email', email) }
    if (language) { queryParams.set('language', language.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.cron objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron#POST)
   */
  CreateNewCron(command: string, frequency: string, language: HostingwebcronLanguage, serviceName: string, description?: string, email?: string, status?: HostingwebcronStatus): Promise<string> {
    let url = `/hosting/web/${serviceName}/cron`

    return this.client.request<string>('POST', url, {command, frequency, language, description, email, status})
  }

  /**
   * Hosting crons [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebcron> {
    let url = `/hosting/web/${serviceName}/cron/${id}`

    return this.client.request<Hostingwebcron>('GET', url)
  }
  */

  /**
   * Hosting crons [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: Hostingwebcron): Promise<void> {
    let url = `/hosting/web/${serviceName}/cron/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Hosting crons [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron/%7Bid%7D#DELETE)
   */
  DeleteCron(id: number, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/cron/${id}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * cronAvailableLanguage operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cronAvailableLanguage#GET)
   */
  ListAvailableCronLanguage(serviceName: string): Promise<HostingwebcronLanguageEnum[]> {
    let url = `/hosting/web/${serviceName}/cronAvailableLanguage`

    return this.client.request<HostingwebcronLanguageEnum[]>('GET', url)
  }

  /**
   * List the hosting.web.database objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database#GET)
   */
  DatabasesLinkedToYourHosting(serviceName: string, mode?: HostingwebdatabaseMode, name?: string, server?: string, type?: HostingwebdatabaseDatabaseType, user?: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/database?`

    const queryParams = new QueryParams()
    if (mode) { queryParams.set('mode', mode.toString()) }
    if (name) { queryParams.set('name', name) }
    if (server) { queryParams.set('server', server) }
    if (type) { queryParams.set('type', type.toString()) }
    if (user) { queryParams.set('user', user) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.database objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database#POST)
   */
  InstallNewDatabase(capabilitie: HostingwebdatabaseDatabaseCapabilitiesType, serviceName: string, type: HostingwebdatabaseDatabaseType, user: string, password?: string, quota?: HostingwebdatabaseExtraSqlQuota, version?: HostingwebdatabaseVersion): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database`

    return this.client.request<Hostingwebtask>('POST', url, {capabilitie, type, user, password, quota, version})
  }

  /**
   * Database [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<Hostingwebdatabase> {
    let url = `/hosting/web/${serviceName}/database/${name}`

    return this.client.request<Hostingwebdatabase>('GET', url)
  }
  */

  /**
   * Database [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D#DELETE)
   */
  DeleteDatabase(name: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }

  /**
   * capabilities operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/capabilities#GET)
   */
  GetAvailableCapabilitiesForThisDatabase(name: string, serviceName: string): Promise<HostingwebdatabaseDatabaseCapabilities> {
    let url = `/hosting/web/${serviceName}/database/${name}/capabilities`

    return this.client.request<HostingwebdatabaseDatabaseCapabilities>('GET', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/changePassword#POST)
   */
  RequestAPasswordChange(name: string, password: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}/changePassword`

    return this.client.request<Hostingwebtask>('POST', url, {password})
  }

  /**
   * List the hosting.web.database.dump objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump#GET)
   */
  DumpAvailableForYourDatabases(name: string, serviceName: string, creationDate?: string, deletionDate?: string, type?: HostingwebdatabasedumpDate): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/database/${name}/dump?`

    const queryParams = new QueryParams()
    if (creationDate) { queryParams.set('creationDate', creationDate.toString()) }
    if (deletionDate) { queryParams.set('deletionDate', deletionDate.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.database.dump objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump#POST)
   */
  RequestTheDumpFromYourDatabase(date: HostingwebdatabasedumpDate, name: string, serviceName: string, sendEmail?: boolean): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}/dump`

    return this.client.request<Hostingwebtask>('POST', url, {date, sendEmail})
  }

  /**
   * Dump [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, name: string, serviceName: string): Promise<Hostingwebdatabasedump> {
    let url = `/hosting/web/${serviceName}/database/${name}/dump/${id}`

    return this.client.request<Hostingwebdatabasedump>('GET', url)
  }
  */

  /**
   * Dump [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump/%7Bid%7D#DELETE)
   */
  DeleteDumpBeforeExpirationDate(id: number, name: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}/dump/${id}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }

  /**
   * restore operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump/%7Bid%7D/restore#POST)
   */
  RequestTheRestoreFromThisDump(id: number, name: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}/dump/${id}/restore`

    return this.client.request<Hostingwebtask>('POST', url)
  }

  /**
   * import operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/import#POST)
   */
  ImportADumpFromAnSpecificFileUploadedWithMedocuments(documentId: string, name: string, serviceName: string, flushDatabase?: boolean, sendEmail?: boolean): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}/import`

    return this.client.request<Hostingwebtask>('POST', url, {documentId, flushDatabase, sendEmail})
  }

  /**
   * request operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/request#POST)
   */
  RequestSpecificOperationForYourDatabase(action: HostingwebdatabaseRequestAction, name: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}/request`

    return this.client.request<Hostingwebtask>('POST', url, {action})
  }

  /**
   * restore operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/restore#POST)
   */
  RequestTheRestoreFromYourDatabaseBackup(date: HostingwebdatabasedumpDate, name: string, serviceName: string, sendEmail?: boolean): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/database/${name}/restore`

    return this.client.request<Hostingwebtask>('POST', url, {date, sendEmail})
  }

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/statistics#GET)
   */
  GetStatisticsAboutThisDatabase(name: string, period: HostingwebStatisticsPeriod, serviceName: string, type: HostingwebdatabaseStatisticsType): Promise<any> {
    let url = `/hosting/web/${serviceName}/database/${name}/statistics?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * databaseAvailableType operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/databaseAvailableType#GET)
   */
  ListAvailableDatabaseType(serviceName: string): Promise<HostingwebdatabaseDatabaseTypeEnum[]> {
    let url = `/hosting/web/${serviceName}/databaseAvailableType`

    return this.client.request<HostingwebdatabaseDatabaseTypeEnum[]>('GET', url)
  }

  /**
   * databaseAvailableVersion operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/databaseAvailableVersion#GET)
   */
  ListAvailableDatabaseVersionFollowingAType(serviceName: string, type: HostingwebdatabaseDatabaseType): Promise<HostingwebdatabaseAvailableVersionStruct> {
    let url = `/hosting/web/${serviceName}/databaseAvailableVersion?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<HostingwebdatabaseAvailableVersionStruct>('GET', url+queryParams.toString())
  }

  /**
   * databaseCreationCapabilities operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/databaseCreationCapabilities#GET)
   */
  ListAvailableDatabaseYouCanInstall(serviceName: string): Promise<HostingwebdatabaseCreationDatabaseCapabilities[]> {
    let url = `/hosting/web/${serviceName}/databaseCreationCapabilities`

    return this.client.request<HostingwebdatabaseCreationDatabaseCapabilities[]>('GET', url)
  }

  /**
   * List the hosting.web.dump objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/dump#GET)
   */
  DumpsLinkedToYourHosting(serviceName: string, creationDate?: string, databaseName?: string, deletionDate?: string, orphan?: boolean): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/dump?`

    const queryParams = new QueryParams()
    if (creationDate) { queryParams.set('creationDate', creationDate.toString()) }
    if (databaseName) { queryParams.set('databaseName', databaseName) }
    if (deletionDate) { queryParams.set('deletionDate', deletionDate.toString()) }
    if (orphan) { queryParams.set('orphan', orphan.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Dump [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/dump/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebdump> {
    let url = `/hosting/web/${serviceName}/dump/${id}`

    return this.client.request<Hostingwebdump>('GET', url)
  }
  */

  /**
   * Dump [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/dump/%7Bid%7D#DELETE)
   */
  /*
  DeleteDumpBeforeExpirationDate(id: number, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/dump/${id}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }
  */

  /**
   * Hosting automated emails [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<Hostingwebemail> {
    let url = `/hosting/web/${serviceName}/email`

    return this.client.request<Hostingwebemail>('GET', url)
  }
  */

  /**
   * Hosting automated emails [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: Hostingwebemail): Promise<void> {
    let url = `/hosting/web/${serviceName}/email`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * bounces operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email/bounces#GET)
   */
  RequestTheLastBounces(limit: number, serviceName: string): Promise<HostingwebmailBounce[]> {
    let url = `/hosting/web/${serviceName}/email/bounces?`

    const queryParams = new QueryParams()
    if (limit) { queryParams.set('limit', limit.toString()) }

    return this.client.request<HostingwebmailBounce[]>('GET', url+queryParams.toString())
  }

  /**
   * request operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email/request#POST)
   */
  RequestSpecificOperationForYourEmail(action: HostingwebmailAction, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/email/request`

    return this.client.request<string>('POST', url, {action})
  }

  /**
   * volumes operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email/volumes#GET)
   */
  RequestTheHistoryVolumeOfEmailSent(serviceName: string): Promise<HostingwebmailVolumeHistory[]> {
    let url = `/hosting/web/${serviceName}/email/volumes`

    return this.client.request<HostingwebmailVolumeHistory[]>('GET', url)
  }

  /**
   * List the hosting.web.envVar objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar#GET)
   */
  EnvironmentVariablesSetOnYourWebhosting(serviceName: string, type?: HostingwebenvVarType): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/envVar?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.envVar objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar#POST)
   */
  SetAVariableToThisHosting(key: string, serviceName: string, type: HostingwebenvVarType, value: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/envVar`

    return this.client.request<Hostingwebtask>('POST', url, {key, type, value})
  }

  /**
   * Environment variables set into your webhosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar/%7Bkey%7D#GET)
   */
  /*
  GetThisObjectProperties(key: string, serviceName: string): Promise<HostingwebenvVar> {
    let url = `/hosting/web/${serviceName}/envVar/${key}`

    return this.client.request<HostingwebenvVar>('GET', url)
  }
  */

  /**
   * Environment variables set into your webhosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar/%7Bkey%7D#PUT)
   */
  /*
  AlterThisObjectProperties(key: string, serviceName: string, payload: HostingwebenvVar): Promise<void> {
    let url = `/hosting/web/${serviceName}/envVar/${key}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Environment variables set into your webhosting account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar/%7Bkey%7D#DELETE)
   */
  RemoveVariableFromHosting(key: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/envVar/${key}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }

  /**
   * List the hosting.web.extrasqlperso objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso#GET)
   */
  SqlpersoLinkedToYourHosting(serviceName: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/extraSqlPerso`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Sqlperso service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<Hostingwebextrasqlperso> {
    let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}`

    return this.client.request<Hostingwebextrasqlperso>('GET', url)
  }
  */

  /**
   * databases operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/databases#GET)
   */
  GetDatabasesLinkedWithThisOption(name: string, serviceName: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/databases`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * serviceInfos operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<ServicesService> {
    let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * serviceInfosUpdate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/serviceInfosUpdate#POST)
   */
  /*
  AlterThisObjectProperties(name: string, renew: ServiceRenewType, serviceName: string): Promise<void> {
    let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/serviceInfosUpdate`

    return this.client.request<void>('POST', url, {renew})
  }
  */

  /**
   * terminate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/terminate#POST)
   */
  TerminateYourExtraSqlPersoSubService(name: string, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the hosting.web.freedom objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/freedom#GET)
   */
  FreedomLinkedToThisHostingAccount(serviceName: string, status?: HostingwebfreedomStatus): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/freedom?`

    const queryParams = new QueryParams()
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Freedoms linked to this hosting account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/freedom/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string): Promise<Hostingwebfreedom> {
    let url = `/hosting/web/${serviceName}/freedom/${domain}`

    return this.client.request<Hostingwebfreedom>('GET', url)
  }
  */

  /**
   * Freedoms linked to this hosting account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/freedom/%7Bdomain%7D#DELETE)
   */
  DeleteTheFreedom(domain: string, serviceName: string): Promise<void> {
    let url = `/hosting/web/${serviceName}/freedom/${domain}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the hosting.web.indy objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/indy#GET)
   */
  UserOfMultidomainIndependentAllowedOnYourHosting(serviceName: string, login?: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/indy?`

    const queryParams = new QueryParams()
    if (login) { queryParams.set('login', login) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Hosting indys [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/indy/%7Blogin%7D#GET)
   */
  /*
  GetThisObjectProperties(login: string, serviceName: string): Promise<Hostingwebindy> {
    let url = `/hosting/web/${serviceName}/indy/${login}`

    return this.client.request<Hostingwebindy>('GET', url)
  }
  */

  /**
   * List the hosting.web.localSeo.account objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/account#GET)
   */
  LocalSEOAccountsAssociatedToTheHosting(serviceName: string, email?: string): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/localSeo/account?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Local SEO accounts [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/account/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<HostingweblocalSeoaccount> {
    let url = `/hosting/web/${serviceName}/localSeo/account/${id}`

    return this.client.request<HostingweblocalSeoaccount>('GET', url)
  }
  */

  /**
   * login operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/account/%7Bid%7D/login#POST)
   */
  LoginThisLocationForSSO(id: number, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/localSeo/account/${id}/login`

    return this.client.request<string>('POST', url)
  }

  /**
   * emailAvailability operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/emailAvailability#GET)
   */
  CheckEmailAvailabilityForALocalSEOOrder(email: string, serviceName: string): Promise<HostingweblocalSeoEmailAvailability> {
    let url = `/hosting/web/${serviceName}/localSeo/emailAvailability?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<HostingweblocalSeoEmailAvailability>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.localSeo.location objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location#GET)
   */
  LocalSEOLocationsAssociatedToTheHosting(serviceName: string): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/localSeo/location`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Local SEO locations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<HostingweblocalSeolocation> {
    let url = `/hosting/web/${serviceName}/localSeo/location/${id}`

    return this.client.request<HostingweblocalSeolocation>('GET', url)
  }
  */

  /**
   * serviceInfos operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<ServicesService> {
    let url = `/hosting/web/${serviceName}/localSeo/location/${id}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * serviceInfosUpdate operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D/serviceInfosUpdate#POST)
   */
  /*
  AlterThisObjectProperties(id: number, renew: ServiceRenewType, serviceName: string): Promise<void> {
    let url = `/hosting/web/${serviceName}/localSeo/location/${id}/serviceInfosUpdate`

    return this.client.request<void>('POST', url, {renew})
  }
  */

  /**
   * terminate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D/terminate#POST)
   */
  TerminateALocalSEOSubService(id: number, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/localSeo/location/${id}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the hosting.web.module objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module#GET)
   */
  ModuleInstalledOnYourHosting(serviceName: string): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/module`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the hosting.web.module objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module#POST)
   */
  InstallANewModule(moduleId: number, serviceName: string, adminName?: string, adminPassword?: string, dependencies?: HostingwebmoduleDependencyType[], domain?: string, language?: HostingwebmoduleLanguage, path?: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/module`

    return this.client.request<Hostingwebtask>('POST', url, {moduleId, adminName, adminPassword, dependencies, domain, language, path})
  }

  /**
   * Hosting modules installed [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebmodule> {
    let url = `/hosting/web/${serviceName}/module/${id}`

    return this.client.request<Hostingwebmodule>('GET', url)
  }
  */

  /**
   * Hosting modules installed [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module/%7Bid%7D#DELETE)
   */
  DeleteAModuleInstalled(id: number, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/module/${id}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module/%7Bid%7D/changePassword#POST)
   */
  GenerateANewAdminPasswordForYourModule(id: number, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/module/${id}/changePassword`

    return this.client.request<Hostingwebtask>('POST', url)
  }

  /**
   * List the hosting.web.ovhConfig objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig#GET)
   */
  ConfigurationUsedOnYourHosting(serviceName: string, historical?: boolean, path?: string): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/ovhConfig?`

    const queryParams = new QueryParams()
    if (historical) { queryParams.set('historical', historical.toString()) }
    if (path) { queryParams.set('path', path) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Virtual service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<HostingwebovhConfig> {
    let url = `/hosting/web/${serviceName}/ovhConfig/${id}`

    return this.client.request<HostingwebovhConfig>('GET', url)
  }
  */

  /**
   * changeConfiguration operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig/%7Bid%7D/changeConfiguration#POST)
   */
  ApplyANewConfigurationOnThisPath(id: number, serviceName: string, container?: HostingwebovhconfigContainer, engineName?: HostingwebovhConfigEngineName, engineVersion?: HostingwebovhConfigAvailableEngineVersion, environment?: HostingwebovhConfigEnvironment, httpFirewall?: HostingwebovhConfigHttpFirewall): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/ovhConfig/${id}/changeConfiguration`

    return this.client.request<Hostingwebtask>('POST', url, {container, engineName, engineVersion, environment, httpFirewall})
  }

  /**
   * rollback operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig/%7Bid%7D/rollback#POST)
   */
  RollbackToAnOldConfiguration(id: number, rollbackId: number, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/ovhConfig/${id}/rollback`

    return this.client.request<Hostingwebtask>('POST', url, {rollbackId})
  }

  /**
   * ovhConfigRefresh operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfigRefresh#POST)
   */
  SynchronizeTheConfigurationListingWithContentOnYourHosting(serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/ovhConfigRefresh`

    return this.client.request<Hostingwebtask>('POST', url)
  }

  /**
   * List the hosting.web.ownLogs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs#GET)
   */
  OwnLogsLinkedToYourHosting(serviceName: string): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/ownLogs`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Hosting own logs [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<HostingwebownLogs> {
    let url = `/hosting/web/${serviceName}/ownLogs/${id}`

    return this.client.request<HostingwebownLogs>('GET', url)
  }
  */

  /**
   * List the hosting.web.userLogs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs#GET)
   */
  UserAllowedToConnectIntoYourLogsInterface(id: number, serviceName: string, login?: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs?`

    const queryParams = new QueryParams()
    if (login) { queryParams.set('login', login) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.userLogs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs#POST)
   */
  CreateNewUserLogs(description: string, id: number, login: string, password: string, serviceName: string, ownLogsId?: number): Promise<string> {
    let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs`

    return this.client.request<string>('POST', url, {description, login, password, ownLogsId})
  }

  /**
   * Hosting users logs [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<HostingwebuserLogs> {
    let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}`

    return this.client.request<HostingwebuserLogs>('GET', url)
  }
  */

  /**
   * Hosting users logs [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, login: string, serviceName: string, payload: HostingwebuserLogs): Promise<void> {
    let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Hosting users logs [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D#DELETE)
   */
  DeleteTheUserLogs(id: number, login: string, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D/changePassword#POST)
   */
  /*
  RequestAPasswordChange(id: number, login: string, password: string, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}/changePassword`

    return this.client.request<string>('POST', url, {password})
  }
  */

  /**
   * privateDatabaseCreationCapabilities operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/privateDatabaseCreationCapabilities#GET)
   */
  ListAvailablePrivateDatabaseYouCanInstall(serviceName: string): Promise<HostingwebdatabaseCreationDatabaseCapabilities[]> {
    let url = `/hosting/web/${serviceName}/privateDatabaseCreationCapabilities`

    return this.client.request<HostingwebdatabaseCreationDatabaseCapabilities[]>('GET', url)
  }

  /**
   * privateDatabases operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/privateDatabases#GET)
   */
  ListLinkedPrivateDatabases(serviceName: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/privateDatabases`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * request operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/request#POST)
   */
  RequestSpecificOperationForYourHosting(action: HostingwebRequestAction, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/request`

    return this.client.request<Hostingwebtask>('POST', url, {action})
  }

  /**
   * requestBoost operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/requestBoost#POST)
   */
  AllowsYouToBoostYourOffer(serviceName: string, offer?: HostingwebOffer): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/requestBoost`

    return this.client.request<Hostingwebtask>('POST', url, {offer})
  }

  /**
   * restoreSnapshot operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/restoreSnapshot#POST)
   */
  RestoreThisSnapshotALLCURRENTDATAWILLBEREPLACEDBYYOURSNAPSHOT(backup: HostingwebbackupType, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/restoreSnapshot`

    return this.client.request<Hostingwebtask>('POST', url, {backup})
  }

  /**
   * List the hosting.web.runtime objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime#GET)
   */
  ListOfRuntimeConfigurationsToYourHosting(serviceName: string, name?: string, type?: HostingwebruntimeType): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/runtime?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.runtime objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime#POST)
   */
  RequestTheCreationOfANewRuntimeConfiguration(serviceName: string, appBootstrap?: string, appEnv?: HostingwebruntimeEnv, attachedDomains?: string[], isDefault?: boolean, name?: string, publicDir?: string, type?: HostingwebruntimeType): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/runtime`

    return this.client.request<Hostingwebtask>('POST', url, {appBootstrap, appEnv, attachedDomains, isDefault, name, publicDir, type})
  }

  /**
   * The runtime configuration of an attached domain for cloud web offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebruntime> {
    let url = `/hosting/web/${serviceName}/runtime/${id}`

    return this.client.request<Hostingwebruntime>('GET', url)
  }
  */

  /**
   * The runtime configuration of an attached domain for cloud web offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, serviceName: string, payload: Hostingwebruntime): Promise<void> {
    let url = `/hosting/web/${serviceName}/runtime/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * The runtime configuration of an attached domain for cloud web offer [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D#DELETE)
   */
  DeleteARuntimeConfigurationOfAnHosting(id: number, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/runtime/${id}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }

  /**
   * attachedDomains operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D/attachedDomains#GET)
   */
  GetTheAttachedDomainsLinkedToThisRuntimeConfiguration(id: number, serviceName: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/runtime/${id}/attachedDomains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * runtimeAvailableTypes operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtimeAvailableTypes#GET)
   */
  ListAvailableRuntimeConfigurationsAvailableBackendTypes(serviceName: string, language?: string): Promise<HostingwebruntimeTypeEnum[]> {
    let url = `/hosting/web/${serviceName}/runtimeAvailableTypes?`

    const queryParams = new QueryParams()
    if (language) { queryParams.set('language', language) }

    return this.client.request<HostingwebruntimeTypeEnum[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/hosting/web/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/hosting/web/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Hostedssl [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<Hostingwebssl> {
    let url = `/hosting/web/${serviceName}/ssl`

    return this.client.request<Hostingwebssl>('GET', url)
  }
  */

  /**
   * Hostedssl [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl#POST)
   */
  CreateTheFreeDefaultHostedSslORImportYourProperSSLOnYourHosting(serviceName: string, certificate?: string, chain?: string, key?: string): Promise<Hostingwebssl> {
    let url = `/hosting/web/${serviceName}/ssl`

    return this.client.request<Hostingwebssl>('POST', url, {certificate, chain, key})
  }

  /**
   * Hostedssl [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl#DELETE)
   */
  DeleteTheHostedSslOnYourHosting(serviceName: string): Promise<Hostingwebssl> {
    let url = `/hosting/web/${serviceName}/ssl`

    return this.client.request<Hostingwebssl>('DELETE', url)
  }

  /**
   * domains operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl/domains#GET)
   */
  GetDomainsLinkedToThisHostedSsl(serviceName: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/ssl/domains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * regenerate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl/regenerate#POST)
   */
  RequestTheRegenerationOfYourHostedSsl(serviceName: string): Promise<Hostingwebssl> {
    let url = `/hosting/web/${serviceName}/ssl/regenerate`

    return this.client.request<Hostingwebssl>('POST', url)
  }

  /**
   * Hostedssl Report [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl/report#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<Hostingwebsslreport> {
    let url = `/hosting/web/${serviceName}/ssl/report`

    return this.client.request<Hostingwebsslreport>('GET', url)
  }
  */

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/statistics#GET)
   */
  GetStatisticsAboutThisWebHosting(period: HostingwebStatisticsPeriod, serviceName: string, type: HostingwebStatisticsType): Promise<any> {
    let url = `/hosting/web/${serviceName}/statistics?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/tasks#GET)
   */
  TasksAttachedToYourHosting(serviceName: string, _function?: string, status?: HostingwebtaskStatus): Promise<number[]> {
    let url = `/hosting/web/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Tasks [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/tasks/${id}`

    return this.client.request<Hostingwebtask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * token operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/token#GET)
   */
  UseToLinkAnExternalDomainThisTokenHasToBeInsertIntoATXTFieldOnYourDnsZoneWithOvhcontrolSubdomain(serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/token`

    return this.client.request<string>('GET', url)
  }

  /**
   * List the hosting.web.user objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user#GET)
   */
  UserAllowedToConnectIntoYourHosting(serviceName: string, home?: string, login?: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/user?`

    const queryParams = new QueryParams()
    if (home) { queryParams.set('home', home) }
    if (login) { queryParams.set('login', login) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.user objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user#POST)
   */
  CreateNewFtpsshUser(home: string, login: string, password: string, serviceName: string, sshState?: HostingwebuserSshState): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/user`

    return this.client.request<Hostingwebtask>('POST', url, {home, login, password, sshState})
  }

  /**
   * Hosting users [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D#GET)
   */
  /*
  GetThisObjectProperties(login: string, serviceName: string): Promise<Hostingwebuser> {
    let url = `/hosting/web/${serviceName}/user/${login}`

    return this.client.request<Hostingwebuser>('GET', url)
  }
  */

  /**
   * Hosting users [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D#PUT)
   */
  /*
  AlterThisObjectProperties(login: string, serviceName: string, payload: Hostingwebuser): Promise<void> {
    let url = `/hosting/web/${serviceName}/user/${login}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Hosting users [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D#DELETE)
   */
  DeleteFtpsshUser(login: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/user/${login}`

    return this.client.request<Hostingwebtask>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D/changePassword#POST)
   */
  /*
  RequestAPasswordChange(login: string, password: string, serviceName: string): Promise<Hostingwebtask> {
    let url = `/hosting/web/${serviceName}/user/${login}/changePassword`

    return this.client.request<Hostingwebtask>('POST', url, {password})
  }
  */

  /**
   * List the hosting.web.userLogs objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs#GET)
   */
  /*
  UserAllowedToConnectIntoYourLogsInterface(serviceName: string, login?: string): Promise<string[]> {
    let url = `/hosting/web/${serviceName}/userLogs?`

    const queryParams = new QueryParams()
    if (login) { queryParams.set('login', login) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * List the hosting.web.userLogs objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs#POST)
   */
  /*
  CreateNewUserLogs(description: string, login: string, password: string, serviceName: string, ownLogsId?: number): Promise<string> {
    let url = `/hosting/web/${serviceName}/userLogs`

    return this.client.request<string>('POST', url, {description, login, password, ownLogsId})
  }
  */

  /**
   * Hosting users logs [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D#GET)
   */
  /*
  GetThisObjectProperties(login: string, serviceName: string): Promise<HostingwebuserLogs> {
    let url = `/hosting/web/${serviceName}/userLogs/${login}`

    return this.client.request<HostingwebuserLogs>('GET', url)
  }
  */

  /**
   * Hosting users logs [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D#PUT)
   */
  /*
  AlterThisObjectProperties(login: string, serviceName: string, payload: HostingwebuserLogs): Promise<void> {
    let url = `/hosting/web/${serviceName}/userLogs/${login}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Hosting users logs [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D#DELETE)
   */
  /*
  DeleteTheUserLogs(login: string, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/userLogs/${login}`

    return this.client.request<string>('DELETE', url)
  }
  */

  /**
   * changePassword operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D/changePassword#POST)
   */
  /*
  RequestAPasswordChange(login: string, password: string, serviceName: string): Promise<string> {
    let url = `/hosting/web/${serviceName}/userLogs/${login}/changePassword`

    return this.client.request<string>('POST', url, {password})
  }
  */

  /**
   * userLogsToken operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogsToken#GET)
   */
  GetATemporaryTokenToAccessTheYourWebHostingLogsInterface(serviceName: string, attachedDomain?: string, remoteCheck?: boolean, ttl?: number): Promise<string> {
    let url = `/hosting/web/${serviceName}/userLogsToken?`

    const queryParams = new QueryParams()
    if (attachedDomain) { queryParams.set('attachedDomain', attachedDomain) }
    if (remoteCheck) { queryParams.set('remoteCheck', remoteCheck.toString()) }
    if (ttl) { queryParams.set('ttl', ttl.toString()) }

    return this.client.request<string>('GET', url+queryParams.toString())
  }

  /**
   * Find hosting service linked to a domain [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/attachedDomain#GET)
   */
  FindHostingServiceLinkedToADomain(domain: string): Promise<string[]> {
    let url = `/hosting/web/attachedDomain?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Get available offer [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/availableOffer#GET)
   */
  GetAvailableOffer(domain: string): Promise<HostingwebOfferEnum[]> {
    let url = `/hosting/web/availableOffer?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }

    return this.client.request<HostingwebOfferEnum[]>('GET', url+queryParams.toString())
  }

  /**
   * Get current incident [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/incident#GET)
   */
  GetCurrentIncident(): Promise<string[]> {
    let url = `/hosting/web/incident`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Get list of directories associated to a local SEO offer and a country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/directoriesList#GET)
   */
  GetListOfDirectoriesAssociatedToALocalSEOOfferAndACountry(country: HostingweblocalSeolocationCountry, offer: HostingweblocalSeolocationOffer): Promise<HostingweblocalSeoDirectoriesList> {
    let url = `/hosting/web/localSeo/directoriesList?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<HostingweblocalSeoDirectoriesList>('GET', url+queryParams.toString())
  }

  /**
   * Check email availability for a local SEO order [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/emailAvailability#GET)
   */
  /*
  CheckEmailAvailabilityForALocalSEOOrder(email: string): Promise<HostingweblocalSeoEmailAvailability> {
    let url = `/hosting/web/localSeo/emailAvailability?`

    const queryParams = new QueryParams()
    if (email) { queryParams.set('email', email) }

    return this.client.request<HostingweblocalSeoEmailAvailability>('GET', url+queryParams.toString())
  }
  */

  /**
   * Check visibility of a location [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/visibilityCheck#POST)
   */
  CheckVisibilityOfALocation(country: HostingweblocalSeolocationCountry, name: string, street: string, zip: string): Promise<HostingweblocalSeoVisibilityCheckResponse> {
    let url = `/hosting/web/localSeo/visibilityCheck`

    return this.client.request<HostingweblocalSeoVisibilityCheckResponse>('POST', url, {country, name, street, zip})
  }

  /**
   * Get the result of a visibility check [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/visibilityCheckResult#GET)
   */
  GetTheResultOfAVisibilityCheck(directory: string, id: number, token: string): Promise<HostingweblocalSeoVisibilityCheckResultResponse[]> {
    let url = `/hosting/web/localSeo/visibilityCheckResult?`

    const queryParams = new QueryParams()
    if (directory) { queryParams.set('directory', directory) }
    if (id) { queryParams.set('id', id.toString()) }
    if (token) { queryParams.set('token', token) }

    return this.client.request<HostingweblocalSeoVisibilityCheckResultResponse[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.web.ModuleList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/moduleList#GET)
   */
  IDsOfAllModulesAvailable(active?: boolean, branch?: HostingwebmoduleBranch, latest?: boolean): Promise<number[]> {
    let url = `/hosting/web/moduleList?`

    const queryParams = new QueryParams()
    if (active) { queryParams.set('active', active.toString()) }
    if (branch) { queryParams.set('branch', branch.toString()) }
    if (latest) { queryParams.set('latest', latest.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * A module specifically packaged by OVH [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/moduleList/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<HostingwebModuleList> {
    let url = `/hosting/web/moduleList/${id}`

    return this.client.request<HostingwebModuleList>('GET', url)
  }
  */

  /**
   * Get offer capabilities [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/offerCapabilities#GET)
   */
  GetOfferCapabilities(offer: HostingwebOfferCapabilities): Promise<HostingwebCapabilities> {
    let url = `/hosting/web/offerCapabilities?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<HostingwebCapabilities>('GET', url+queryParams.toString())
  }

}
