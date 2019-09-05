// GENERATED SDK for hosting/privateDatabase API

import {Client} from '../client'
import QueryParams from '../query-params'

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

/**
 * Description for available order capacities following an offer
 */
export interface HostingPrivateDatabaseAvailableOrderCapacities {
  datacenter: HostingPrivateDatabaseDatacenterEnum[]
  offer: HostingPrivateDatabaseOffer
  ram: HostingPrivateDatabaseAvailableRamSizeEnum[]
  version: HostingPrivateDatabaseAvailableVersionEnum[]
}

/*
 * Private database available ram sizes
 */
export type HostingPrivateDatabaseAvailableRamSize = '1024' | '2048' | '4096' | '512'

/*
 * Private database available versions
 */
export enum HostingPrivateDatabaseAvailableVersion {
  MARIADB_10_1 = 'mariadb_10.1',
  MARIADB_10_2 = 'mariadb_10.2',
  MONGODB_3_4 = 'mongodb_3.4',
  MONGODB_4_0 = 'mongodb_4.0',
  MYSQL_4_1 = 'mysql_4.1',
  MYSQL_5_0 = 'mysql_5.0',
  MYSQL_5_1 = 'mysql_5.1',
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
 * Private database capability
 */
export interface HostingPrivateDatabaseCapability {
  create: boolean
  delete: boolean
  object: string
  update: boolean
}

/**
 * Configuration
 */
export interface HostingprivateDatabaseConfiguration {
  details: HostingPrivateDatabaseConfigurationDetail[]
  lastUpdate: string
  status: HostingPrivateDatabaseConfigurationStatus
  taskId?: string
}

/**
 * Configuration detail property
 */
export interface HostingPrivateDatabaseConfigurationDetail {
  availableValues: string[]
  defaultValue: string
  description: string
  key: string
  lastUpdate: string
  type: HostingPrivateDatabaseConfigurationDetailType
  unit?: string
  value: string
}

/*
 * Configuration detail type
 */
export enum HostingPrivateDatabaseConfigurationDetailType {
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  STRING = 'string'
}

/*
 * Configuration status
 */
export enum HostingPrivateDatabaseConfigurationStatus {
  APPLIED = 'applied',
  UPDATING = 'updating'
}

/**
 * Databases
 */
export interface HostingprivateDatabasedatabase {
  backupTime?: any
  creationDate: string
  databaseName: string
  quotaUsed: any
  users: HostingPrivateDatabaseDatabaseUser[]
}

/**
 * Dump
 */
export interface HostingprivateDatabasedatabasedump {
  creationDate: string
  databaseName: string
  deletionDate: string
  id: number
  url: string
}

/**
 * Databases extension
 */
export interface HostingprivateDatabasedatabaseextension {
  description: string
  extensionName: string
  requiredExtensions: string[]
  status: HostingPrivateDatabaseDatabaseExtensionStatus
}

/*
 * Extension status
 */
export enum HostingPrivateDatabaseDatabaseExtensionStatus {
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLED = 'enabled',
  ENABLING = 'enabling'
}

/**
 * User granted to a database
 */
export interface HostingPrivateDatabaseDatabaseUser {
  grantId: number
  grantType: HostingPrivateDatabasegrantGrant
  userName: string
}

/*
 * Available datacenters
 */
export enum HostingPrivateDatabaseDatacenter {
  GRA1 = 'gra1',
  GRA2 = 'gra2',
  P19 = 'p19'
}

/**
 * Dump
 */
export interface HostingprivateDatabasedump {
  creationDate: string
  databaseName: string
  deletionDate: string
  dumpId: number
  orphan: boolean
  url: string
}

/**
 * Grants
 */
export interface HostingprivateDatabasegrant {
  creationDate: string
  databaseName: string
  grant: HostingPrivateDatabasegrantGrant
}

/*
 * Grant on a database for a specific user
 */
export enum HostingPrivateDatabasegrantGrant {
  ADMIN = 'admin',
  NONE = 'none',
  RO = 'ro',
  RW = 'rw'
}

/**
 * Parameters required to query metrics from OpenTSDB
 */
export interface HostingPrivateDatabaseGraphEndpoint {
  host: string
  readToken: string
  readTokenId: string
}

/*
 * Available offers
 */
export enum HostingPrivateDatabaseOffer {
  CLASSIC = 'classic',
  PUBLIC = 'public'
}

/**
 * OOM kill informations
 */
export interface HostingPrivateDatabaseOom {
  date: string
  sizeReached: number
}

/**
 * Private database
 */
export interface HostingprivateDatabaseService {
  capabilities: HostingPrivateDatabaseCapability[]
  cpu: number
  datacenter: HostingPrivateDatabaseDatacenter
  displayName?: string
  graphEndpoint?: HostingPrivateDatabaseGraphEndpoint
  guiURL?: string
  hostname?: string
  hostnameFtp?: string
  infrastructure: string
  ip?: string
  lastCheck: string
  offer: HostingPrivateDatabaseOffer
  port: number
  portFtp?: number
  quotaSize: any
  quotaUsed: any
  ram: any
  server?: string
  serviceName: string
  state: HostingPrivateDatabaseState
  tlsCa?: string
  type: HostingPrivateDatabaseType
  version: HostingPrivateDatabaseAvailableVersion
  versionNumber: any
}

/*
 * Private database state
 */
export enum HostingPrivateDatabaseState {
  DETACHED = 'detached',
  RESTARTPENDING = 'restartPending',
  STARTPENDING = 'startPending',
  STARTED = 'started',
  STOPPENDING = 'stopPending',
  STOPPED = 'stopped'
}

/**
 * Tasks
 */
export interface HostingprivateDatabasetask {
  databaseName?: string
  doneDate?: string
  dumpId?: number
  function: HostingPrivateDatabasetaskFunction
  id: number
  lastUpdate?: string
  startDate: string
  status: HostingPrivateDatabasetaskStatus
  userName?: string
}

/*
 * Task's function
 */
export enum HostingPrivateDatabasetaskFunction {
  BOOT = 'boot',
  CHANGEFTPPASSWORD = 'changeFtpPassword',
  CHANGERAM = 'changeRam',
  CHANGEROOTPASSWORD = 'changeRootPassword',
  CHANGEVERSION = 'changeVersion',
  CONFIGURATION_UPDATE = 'configuration/update',
  CREATE = 'create',
  DATABASE_CREATE = 'database/create',
  DATABASE_DELETE = 'database/delete',
  DATABASE_DUMP = 'database/dump',
  DATABASE_DUMP_DELETE = 'database/dump/delete',
  DATABASE_EXTENSION_CREATE = 'database/extension/create',
  DATABASE_EXTENSION_DELETE = 'database/extension/delete',
  DATABASE_IMPORT = 'database/import',
  DATABASE_RESTORE = 'database/restore',
  DATABASE_WIZARD = 'database/wizard',
  DELETE = 'delete',
  GRANT_CREATE = 'grant/create',
  GRANT_DELETE = 'grant/delete',
  GRANT_UPDATE = 'grant/update',
  HALT = 'halt',
  INSTALL = 'install',
  REFRESH = 'refresh',
  REOPEN = 'reopen',
  RESTART = 'restart',
  RESTORE = 'restore',
  START = 'start',
  STOP = 'stop',
  SUSPEND = 'suspend',
  USER_CHANGEPASSWORD = 'user/changePassword',
  USER_CREATE = 'user/create',
  USER_DELETE = 'user/delete',
  WHITELIST_CREATE = 'whitelist/create',
  WHITELIST_DELETE = 'whitelist/delete',
  WHITELIST_UPDATE = 'whitelist/update'
}

/*
 * Task's status
 */
export enum HostingPrivateDatabasetaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  INIT = 'init',
  TODO = 'todo'
}

/**
 * Temporary url informations
 */
export interface HostingPrivateDatabaseTemporaryLogsLink {
  expirationDate: string
  url: string
}

/*
 * Private database type
 */
export enum HostingPrivateDatabaseType {
  MARIADB = 'mariadb',
  MONGODB = 'mongodb',
  MYSQL = 'mysql',
  POSTGRESQL = 'postgresql',
  REDIS = 'redis'
}

/**
 * Users
 */
export interface HostingprivateDatabaseuser {
  creationDate: string
  databases: HostingPrivateDatabaseUserDatabase[]
  userName: string
}

/**
 * Databases linked to an user
 */
export interface HostingPrivateDatabaseUserDatabase {
  databaseName: string
  grantId: number
  grantType: HostingPrivateDatabasegrantGrant
}

/**
 * IP whitelisting for your instance
 */
export interface HostingprivateDatabasewhitelist {
  creationDate: string
  ip: string
  lastUpdate: string
  name?: string
  service: boolean
  sftp: boolean
  status: HostingPrivateDatabaseWhitelistStatus
  taskId?: string
}

/*
 * Whitelist status
 */
export enum HostingPrivateDatabaseWhitelistStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
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


export class HostingPrivateDatabase {
  constructor(private client: Client) {}

  /**
   * Operations about the SQLPRIVE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/hosting/privateDatabase`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Private database [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<HostingprivateDatabaseService> {
    let url = `/hosting/privateDatabase/${serviceName}`

    return this.client.request<HostingprivateDatabaseService>('GET', url)
  }

  /**
   * Private database [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: HostingprivateDatabaseService): Promise<void> {
    let url = `/hosting/privateDatabase/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * availableVersions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/availableVersions#GET)
   */
  GetTheAvailablesVersionsForThisPrivateDatabase(serviceName: string): Promise<HostingPrivateDatabaseAvailableVersionEnum[]> {
    let url = `/hosting/privateDatabase/${serviceName}/availableVersions`

    return this.client.request<HostingPrivateDatabaseAvailableVersionEnum[]>('GET', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/hosting/privateDatabase/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * changeFtpPassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/changeFtpPassword#POST)
   */
  ChangeYourFtpAdminPassword(password: string, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/changeFtpPassword`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {password})
  }

  /**
   * changeVersion operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/changeVersion#POST)
   */
  ChangeThePrivateDatabaseEngineVersion(serviceName: string, version: HostingPrivateDatabaseAvailableVersion): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/changeVersion`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {version})
  }

  /**
   * Configuration [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/config#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<HostingprivateDatabaseConfiguration> {
    let url = `/hosting/privateDatabase/${serviceName}/config`

    return this.client.request<HostingprivateDatabaseConfiguration>('GET', url)
  }
  */

  /**
   * update operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/config/update#POST)
   */
  UpdateTheConfiguration(parameters: any, serviceName: string): Promise<HostingprivateDatabaseConfiguration> {
    let url = `/hosting/privateDatabase/${serviceName}/config/update`

    return this.client.request<HostingprivateDatabaseConfiguration>('POST', url, {parameters})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/hosting/privateDatabase/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * List the hosting.privateDatabase.database objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database#GET)
   */
  DatabasesLinkedToYourPrivateDatabaseService(serviceName: string): Promise<string[]> {
    let url = `/hosting/privateDatabase/${serviceName}/database`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the hosting.privateDatabase.database objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database#POST)
   */
  CreateANewDatabaseOnYourPrivateDatabaseService(databaseName: string, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {databaseName})
  }

  /**
   * Databases [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D#GET)
   */
  /*
  GetThisObjectProperties(databaseName: string, serviceName: string): Promise<HostingprivateDatabasedatabase> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}`

    return this.client.request<HostingprivateDatabasedatabase>('GET', url)
  }
  */

  /**
   * Databases [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D#DELETE)
   */
  DeleteTheDatabase(databaseName: string, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}`

    return this.client.request<HostingprivateDatabasetask>('DELETE', url)
  }

  /**
   * List the hosting.privateDatabase.database.dump objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump#GET)
   */
  DumpAvailableForYourDatabases(databaseName: string, serviceName: string, creationDate?: string, deletionDate?: string): Promise<number[]> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump?`

    const queryParams = new QueryParams()
    if (creationDate) { queryParams.set('creationDate', creationDate.toString()) }
    if (deletionDate) { queryParams.set('deletionDate', deletionDate.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.privateDatabase.database.dump objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump#POST)
   */
  RequestTheDumpOfThisDatabaseAnEmailWillBeSendWithALinkAvailable30Days(databaseName: string, serviceName: string, sendEmail?: boolean): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {sendEmail})
  }

  /**
   * Dump [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(databaseName: string, id: number, serviceName: string): Promise<HostingprivateDatabasedatabasedump> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}`

    return this.client.request<HostingprivateDatabasedatabasedump>('GET', url)
  }
  */

  /**
   * Dump [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump/%7Bid%7D#DELETE)
   */
  DeleteDumpBeforeExpirationDate(databaseName: string, id: number, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}`

    return this.client.request<HostingprivateDatabasetask>('DELETE', url)
  }

  /**
   * restore operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump/%7Bid%7D/restore#POST)
   */
  RequestTheRestoreFromThisDump(databaseName: string, id: number, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}/restore`

    return this.client.request<HostingprivateDatabasetask>('POST', url)
  }

  /**
   * List the hosting.privateDatabase.database.extension objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension#GET)
   */
  ExtensionsLinkedToYourDatabase(databaseName: string, serviceName: string, extensionName?: string, status?: HostingPrivateDatabaseDatabaseExtensionStatus): Promise<string[]> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension?`

    const queryParams = new QueryParams()
    if (extensionName) { queryParams.set('extensionName', extensionName) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Databases extension [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension/%7BextensionName%7D#GET)
   */
  /*
  GetThisObjectProperties(databaseName: string, extensionName: string, serviceName: string): Promise<HostingprivateDatabasedatabaseextension> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}`

    return this.client.request<HostingprivateDatabasedatabaseextension>('GET', url)
  }
  */

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension/%7BextensionName%7D/disable#POST)
   */
  DisableAnExtensionFromADatabase(databaseName: string, extensionName: string, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}/disable`

    return this.client.request<HostingprivateDatabasetask>('POST', url)
  }

  /**
   * enable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension/%7BextensionName%7D/enable#POST)
   */
  EnableAnExtensionOnADatabase(databaseName: string, extensionName: string, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}/enable`

    return this.client.request<HostingprivateDatabasetask>('POST', url)
  }

  /**
   * import operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/import#POST)
   */
  RequestTheImportInThisDatabase(databaseName: string, documentId: string, serviceName: string, flushDatabase?: boolean, sendEmail?: boolean): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/import`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {documentId, flushDatabase, sendEmail})
  }

  /**
   * databaseWizard operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/databaseWizard#POST)
   */
  CreateANewDatabaseuserAndGrantIt(databaseName: string, grant: HostingPrivateDatabasegrantGrant, password: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/databaseWizard`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {databaseName, grant, password, userName})
  }

  /**
   * List the hosting.privateDatabase.dump objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump#GET)
   */
  DumpsAvailableForYourPrivateDatabaseService(serviceName: string, databaseName?: string, orphan?: boolean): Promise<number[]> {
    let url = `/hosting/privateDatabase/${serviceName}/dump?`

    const queryParams = new QueryParams()
    if (databaseName) { queryParams.set('databaseName', databaseName) }
    if (orphan) { queryParams.set('orphan', orphan.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Dump [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump/%7BdumpId%7D#GET)
   */
  /*
  GetThisObjectProperties(dumpId: number, serviceName: string): Promise<HostingprivateDatabasedump> {
    let url = `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`

    return this.client.request<HostingprivateDatabasedump>('GET', url)
  }
  */

  /**
   * Dump [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump/%7BdumpId%7D#DELETE)
   */
  /*
  DeleteDumpBeforeExpirationDate(dumpId: number, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`

    return this.client.request<HostingprivateDatabasetask>('DELETE', url)
  }
  */

  /**
   * restore operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump/%7BdumpId%7D/restore#POST)
   */
  /*
  RequestTheRestoreFromThisDump(databaseName: string, dumpId: number, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/dump/${dumpId}/restore`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {databaseName})
  }
  */

  /**
   * generateTemporaryLogsLink operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/generateTemporaryLogsLink#POST)
   */
  GenerateATemporaryUrlToRetrieveInstanceLogs(serviceName: string): Promise<HostingPrivateDatabaseTemporaryLogsLink> {
    let url = `/hosting/privateDatabase/${serviceName}/generateTemporaryLogsLink`

    return this.client.request<HostingPrivateDatabaseTemporaryLogsLink>('POST', url)
  }

  /**
   * oom operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/oom#GET)
   */
  ListOfPrivatesqlOOMKill(serviceName: string): Promise<HostingPrivateDatabaseOom[]> {
    let url = `/hosting/privateDatabase/${serviceName}/oom`

    return this.client.request<HostingPrivateDatabaseOom[]>('GET', url)
  }

  /**
   * refresh operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/refresh#POST)
   */
  SynchronizeYourInformationsFromYourPrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/refresh`

    return this.client.request<HostingprivateDatabasetask>('POST', url)
  }

  /**
   * restart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/restart#POST)
   */
  RestartThePrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/restart`

    return this.client.request<HostingprivateDatabasetask>('POST', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/hosting/privateDatabase/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/hosting/privateDatabase/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * start operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/start#POST)
   */
  StartThePrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/start`

    return this.client.request<HostingprivateDatabasetask>('POST', url)
  }

  /**
   * stop operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/stop#POST)
   */
  StopThePrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/stop`

    return this.client.request<HostingprivateDatabasetask>('POST', url)
  }

  /**
   * List the hosting.privateDatabase.task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/tasks#GET)
   */
  TasksAttachedToYourPrivateDatabaseService(serviceName: string, _function?: HostingPrivateDatabasetaskFunction, status?: HostingPrivateDatabasetaskStatus): Promise<number[]> {
    let url = `/hosting/privateDatabase/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Tasks [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/tasks/${id}`

    return this.client.request<HostingprivateDatabasetask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/hosting/privateDatabase/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * List the hosting.privateDatabase.user objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user#GET)
   */
  UserAllowedToConnectOnYourDatabases(serviceName: string): Promise<string[]> {
    let url = `/hosting/privateDatabase/${serviceName}/user`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the hosting.privateDatabase.user objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user#POST)
   */
  CreateANewUserOnYourService(password: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/user`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {password, userName})
  }

  /**
   * Users [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, userName: string): Promise<HostingprivateDatabaseuser> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}`

    return this.client.request<HostingprivateDatabaseuser>('GET', url)
  }
  */

  /**
   * Users [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D#DELETE)
   */
  DeleteAUser(serviceName: string, userName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}`

    return this.client.request<HostingprivateDatabasetask>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/changePassword#POST)
   */
  RequestAChangePasswordForAUser(password: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/changePassword`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {password})
  }

  /**
   * List the hosting.privateDatabase.grant objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant#GET)
   */
  UserGrantOnYourDatabases(serviceName: string, userName: string): Promise<string[]> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the hosting.privateDatabase.grant objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant#POST)
   */
  AddGrantOnADatabase(databaseName: string, grant: HostingPrivateDatabasegrantGrant, serviceName: string, userName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {databaseName, grant})
  }

  /**
   * Grants [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant/%7BdatabaseName%7D#GET)
   */
  /*
  GetThisObjectProperties(databaseName: string, serviceName: string, userName: string): Promise<HostingprivateDatabasegrant> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}`

    return this.client.request<HostingprivateDatabasegrant>('GET', url)
  }
  */

  /**
   * Grants [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant/%7BdatabaseName%7D#DELETE)
   */
  DeleteAGrantOnADatabase(databaseName: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}`

    return this.client.request<HostingprivateDatabasetask>('DELETE', url)
  }

  /**
   * update operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant/%7BdatabaseName%7D/update#POST)
   */
  UpdateUserGrant(databaseName: string, grant: HostingPrivateDatabasegrantGrant, serviceName: string, userName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}/update`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {grant})
  }

  /**
   * webs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/webs#GET)
   */
  ListLinkedWebs(serviceName: string): Promise<string[]> {
    let url = `/hosting/privateDatabase/${serviceName}/webs`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the hosting.privateDatabase.whitelist objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist#GET)
   */
  WhitelistAllowedOnYourPrivatesql(serviceName: string, ip?: string, service?: boolean, sftp?: boolean): Promise<string[]> {
    let url = `/hosting/privateDatabase/${serviceName}/whitelist?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }
    if (service) { queryParams.set('service', service.toString()) }
    if (sftp) { queryParams.set('sftp', sftp.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the hosting.privateDatabase.whitelist objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist#POST)
   */
  CreateANewIPWhitelist(ip: string, serviceName: string, name?: string, service?: boolean, sftp?: boolean): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/whitelist`

    return this.client.request<HostingprivateDatabasetask>('POST', url, {ip, name, service, sftp})
  }

  /**
   * IP whitelisting for your instance [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist/%7Bip%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, serviceName: string): Promise<HostingprivateDatabasewhitelist> {
    let url = `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`

    return this.client.request<HostingprivateDatabasewhitelist>('GET', url)
  }
  */

  /**
   * IP whitelisting for your instance [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist/%7Bip%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ip: string, serviceName: string, payload: HostingprivateDatabasewhitelist): Promise<void> {
    let url = `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * IP whitelisting for your instance [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist/%7Bip%7D#DELETE)
   */
  DeleteAinIPWhitelist(ip: string, serviceName: string): Promise<HostingprivateDatabasetask> {
    let url = `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`

    return this.client.request<HostingprivateDatabasetask>('DELETE', url)
  }

  /**
   * Get available order capacitie [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/availableOrderCapacities#GET)
   */
  GetAvailableOrderCapacitie(offer: HostingPrivateDatabaseOffer): Promise<HostingPrivateDatabaseAvailableOrderCapacities> {
    let url = `/hosting/privateDatabase/availableOrderCapacities?`

    const queryParams = new QueryParams()
    if (offer) { queryParams.set('offer', offer.toString()) }

    return this.client.request<HostingPrivateDatabaseAvailableOrderCapacities>('GET', url+queryParams.toString())
  }

}
