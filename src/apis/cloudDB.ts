// GENERATED SDK for cloudDB API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Dumps
 */
export interface CloudDBDump {
  creationDate: string
  databaseName: string
  expirationDate?: string
  id: string
  instanceId: string
  instanceType: CloudDBinstanceType
  name?: string
  size?: any
  status: CloudDBdumpStatus
  taskId?: string
  url?: string
}

/*
 * Dump status
 */
export enum CloudDBdumpStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting'
}

/*
 * Backup status
 */
export enum CloudDBenterpriseBackupStatus {
  ARCHIVED = 'archived',
  ARCHIVING = 'archiving',
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting'
}

/**
 * Cluster
 */
export interface CloudDBenterpriseCluster {
  autoBackup: boolean
  backupSize?: number
  creationDate: string
  hostCount?: number
  id: string
  lastUpdate: string
  name: string
  offerName: string
  offerType: CloudDBenterpriseOfferType
  regionName: string
  restoredVolumeSize?: number
  status: CloudDBenterpriseClusterStatus
  taskId?: string
  version: string
}

/**
 * Backup
 */
export interface CloudDBenterpriseClusterBackup {
  clusterId: string
  creationDate: string
  effectiveCreationDate?: string
  id: string
  internal: boolean
  lastUpdate: string
  name: string
  size?: number
  status: CloudDBenterpriseBackupStatus
  taskId?: string
}

/**
 * Endpoints
 */
export interface CloudDBenterpriseClusterEndpoint {
  clusterId: string
  creationDate: string
  fqdn: string
  id: string
  lastUpdate: string
  name: string
  port: number
  status: CloudDBenterpriseEndpointStatus
  taskId?: string
}

/**
 * Host
 */
export interface CloudDBenterpriseClusterHost {
  creationDate: string
  id: string
  lastUpdate: string
  name: string
  status?: CloudDBenterpriseHostStatus
  taskId?: string
}

/**
 * Member
 */
export interface CloudDBenterpriseClusterLdpMember {
  creationDate: string
  id: string
  lastUpdate: string
  note?: string
  status: CloudDBenterpriseLdpMemberStatus
  taskId?: string
  username: string
}

/**
 * Maintenance window
 */
export interface CloudDBenterpriseClusterMaintenance {
  clusterId: string
  creationDate: string
  duration: number
  id: string
  lastUpdate: string
  scheduledAt: string
  status: CloudDBenterpriseMaintenanceStatus
  taskId?: string
}

/**
 * Maintenance window
 */
export interface CloudDBenterpriseClusterMaintenanceWindow {
  clusterId: string
  creationDate: string
  dayOfWeek: number
  duration: number
  id: string
  lastUpdate: string
  startTime: any
  status: CloudDBenterpriseMaintenanceWindowStatus
  taskId?: string
}

/**
 * Restore
 */
export interface CloudDBenterpriseClusterRestore {
  backupId: string
  creationDate: string
  fqdn?: string
  id: string
  lastUpdate: string
  port?: number
  status: CloudDBenterpriseRestoreStatus
  taskId?: string
  timestamp?: string
  volumeSize?: number
}

/**
 * User
 */
export interface CloudDBenterpriseClusterRestoreUser {
  creationDate: string
  id: string
  lastUpdate: string
  name: string
  restoreId: string
  status: CloudDBenterpriseRestoreUserStatus
  taskId?: string
}

/**
 * Security group
 */
export interface CloudDBenterpriseClusterSecurityGroup {
  clusterId: string
  creationDate: string
  id: string
  lastUpdate: string
  name: string
  rulesCount: number
  status: CloudDBenterpriseSecurityGroupStatus
  taskId?: string
}

/**
 * Security group rule
 */
export interface CloudDBenterpriseClusterSecurityGroupRule {
  creationDate: string
  id: string
  lastUpdate: string
  securityGroupId: string
  source: string
  status: CloudDBenterpriseSecurityGroupRuleStatus
  taskId?: string
}

/*
 * Cluster status
 */
export enum CloudDBenterpriseClusterStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  REOPENING = 'reopening',
  RESTARTING = 'restarting',
  SCALING = 'scaling',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending',
  UPDATING = 'updating'
}

/**
 * User
 */
export interface CloudDBenterpriseClusterUser {
  clusterId: string
  creationDate: string
  id: string
  lastUpdate: string
  name: string
  status: CloudDBenterpriseUserStatus
  taskId?: string
}

/*
 * Endpoint status
 */
export enum CloudDBenterpriseEndpointStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLED = 'enabled',
  ENABLING = 'enabling'
}

/*
 * Host status
 */
export enum CloudDBenterpriseHostStatus {
  CONFIGURED = 'configured',
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  REBOOTED = 'rebooted',
  REBOOTING = 'rebooting',
  REINSTALLING = 'reinstalling',
  REOPENING = 'reopening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending'
}

/*
 * LdpMember status
 */
export enum CloudDBenterpriseLdpMemberStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATED = 'updated',
  UPDATING = 'updating'
}

/*
 * Maintenance status
 */
export enum CloudDBenterpriseMaintenanceStatus {
  CANCELLED = 'cancelled',
  DONE = 'done',
  RUNNING = 'running',
  SCHEDULED = 'scheduled'
}

/*
 * Maintenance window status
 */
export enum CloudDBenterpriseMaintenanceWindowStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting'
}

/**
 * Offer
 */
export interface CloudDBenterpriseOffer {
  creationDate: string
  lastUpdate: string
  maxHostCount?: number
  minHostCount: number
  name: string
  status: CloudDBenterpriseOfferStatus
}

/**
 * Offer capabilities for this region
 */
export interface CloudDBenterpriseOfferRegion {
  hostLeft?: number
  offerName: string
  regionName: string
}

/*
 * Offer status
 */
export enum CloudDBenterpriseOfferStatus {
  AVAILABLE = 'available',
  PLANNED = 'planned',
  TESTING = 'testing',
  UNAVAILABLE = 'unavailable'
}

/*
 * Offer type
 */
export enum CloudDBenterpriseOfferType {
  POSTGRESQL = 'postgresql'
}

/**
 * Region
 */
export interface CloudDBenterpriseRegion {
  creationDate: string
  lastUpdate: string
  maintenanceDayOfWeek: number
  maintenanceDuration: number
  maintenanceStartTime: any
  name: string
  status: CloudDBenterpriseRegionStatus
}

/*
 * Region status
 */
export enum CloudDBenterpriseRegionStatus {
  CREATED = 'created'
}

/*
 * Restore status
 */
export enum CloudDBenterpriseRestoreStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting'
}

/*
 * User status
 */
export enum CloudDBenterpriseRestoreUserStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATED = 'updated',
  UPDATING = 'updating'
}

/*
 * Security group status
 */
export enum CloudDBenterpriseSecurityGroupStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATED = 'updated',
  UPDATING = 'updating'
}

/*
 * Security group rule status
 */
export enum CloudDBenterpriseSecurityGroupRuleStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATED = 'updated',
  UPDATING = 'updating'
}

/*
 * User status
 */
export enum CloudDBenterpriseUserStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATED = 'updated',
  UPDATING = 'updating'
}

/*
 * Instance type accessible
 */
export enum CloudDBinstanceType {
  STANDARD = 'standard'
}

/**
 * Quota limitation for a project
 */
export interface CloudDBprojectQuotas {
  standard: CloudDBprojectquotasStandard
}

/**
 * Quota limitation for a standard instance
 */
export interface CloudDBprojectquotasStandard {
  instance: CloudDBprojectquotasstandardQuota
}

/**
 * Quota limitation for a standard instance
 */
export interface CloudDBprojectquotasstandardQuota {
  current: number
  max: number
}

/*
 * CloudDB project status
 */
export enum CloudDBprojectStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  REOPENING = 'reopening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending'
}

/**
 * CloudDB Project
 */
export interface CloudDBService {
  creationDate: string
  id: string
  lastUpdate: string
  name: string
  quotas: CloudDBprojectQuotas
  status: CloudDBprojectStatus
  taskId?: string
}

/**
 * Configurations
 */
export interface CloudDBstandardConfiguration {
  details: CloudDBstandardconfigurationDetail[]
  lastUpdate: string
  status: CloudDBstandardconfigurationStatus
  taskId?: string
}

/**
 * Configuration detail property
 */
export interface CloudDBstandardconfigurationDetail {
  availableValues: string[]
  defaultValue: string
  description: string
  key: string
  lastUpdate: string
  type: CloudDBstandardconfigurationdetailType
  unit?: string
  value: string
}

/*
 * Configuration detail type
 */
export enum CloudDBstandardconfigurationdetailType {
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  STRING = 'string'
}

/*
 * Configuration status
 */
export enum CloudDBstandardconfigurationStatus {
  APPLIED = 'applied',
  UPDATING = 'updating'
}

/**
 * Databases
 */
export interface CloudDBstandardDatabase {
  backupTime?: any
  creationDate: string
  dumpCount: number
  extensions: string[]
  name: string
  quotaUsed: any
  status: CloudDBstandarddatabaseStatus
  taskId?: string
  users: CloudDBstandarddatabaseUser[]
}

/**
 * Databases extension
 */
export interface CloudDBstandarddatabaseDump {
  creationDate: string
  expirationDate?: string
  id: string
  name?: string
  size?: any
  status: CloudDBdumpStatus
  taskId?: string
  url?: string
}

/**
 * Databases extension
 */
export interface CloudDBstandarddatabaseExtension {
  description: string
  name: string
  requiredExtensions: string[]
  status: CloudDBstandarddatabaseextensionStatus
}

/*
 * Extension status
 */
export enum CloudDBstandarddatabaseextensionStatus {
  DISABLED = 'disabled',
  DISABLING = 'disabling',
  ENABLED = 'enabled',
  ENABLING = 'enabling'
}

/*
 * Database status
 */
export enum CloudDBstandarddatabaseStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  DUMPING = 'dumping',
  IMPORTING = 'importing',
  RESTORING = 'restoring'
}

/**
 * User granted to a database
 */
export interface CloudDBstandarddatabaseUser {
  grantId: string
  grantType: CloudDBstandardgrantType
  userName: string
}

/**
 * Standard flavors
 */
export interface CloudDBstandardFlavor {
  cpu?: number
  disk?: any
  name: string
  ram?: any
  status: CloudDBstandardflavorStatus
  supportedRegionNames: string[]
}

/*
 * Flavor status
 */
export enum CloudDBstandardflavorStatus {
  AVAILABLE = 'available',
  TESTING = 'testing',
  UNAVAILABLE = 'unavailable'
}

/**
 * Grants
 */
export interface CloudDBstandardGrant {
  creationDate: string
  databaseName: string
  id: string
  lastUpdate: string
  status: CloudDBstandardgrantStatus
  taskId?: string
  type: CloudDBstandardgrantType
  userName: string
}

/*
 * Grant status
 */
export enum CloudDBstandardgrantStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/*
 * Grant type
 */
export enum CloudDBstandardgrantType {
  ADMIN = 'admin',
  NONE = 'none',
  RO = 'ro',
  RW = 'rw'
}

/**
 * Standard images
 */
export interface CloudDBstandardImage {
  name: string
  status: CloudDBstandardimageStatus
  supportedFlavorNames: string[]
  type: CloudDBstandardimageType
  version: string
}

/**
 * Image capabilities
 */
export interface CloudDBstandardimageCapabilities {
  database: CloudDBstandardimagecapabilitiesCapability
  dump: CloudDBstandardimagecapabilitiesCapability
  grant: CloudDBstandardimagecapabilitiesCapability
  user: CloudDBstandardimagecapabilitiesCapability
}

/**
 * Object capability
 */
export interface CloudDBstandardimagecapabilitiesCapability {
  create: boolean
  delete: boolean
  update: boolean
}

/*
 * Image status
 */
export enum CloudDBstandardimageStatus {
  AVAILABLE = 'available',
  TESTING = 'testing',
  UNAVAILABLE = 'unavailable'
}

/*
 * Image type
 */
export enum CloudDBstandardimageType {
  MARIADB = 'mariadb',
  MONGODB = 'mongodb',
  MYSQL = 'mysql',
  POSTGRESQL = 'postgresql',
  REDIS = 'redis'
}

/**
 * Standard instances
 */
export interface CloudDBstandardInstance {
  accessCommand: string
  creationDate: string
  creationRules: CloudDBstandardinstanceCreationRules
  diskOverquota?: boolean
  diskUsed: any
  endpoint?: string
  flavor: CloudDBstandardinstanceFlavor
  id: string
  image: CloudDBstandardinstanceImage
  lastUpdate: string
  metrics?: CloudDBstandardinstanceMetricsData
  name: string
  port?: number
  region: CloudDBstandardinstanceRegion
  status: CloudDBstandardinstanceStatus
  taskId?: string
}

/**
 * Creation rules
 */
export interface CloudDBstandardinstanceCreationRules {
  databaseName?: CloudDBstandardinstancecreationRulesCreationRule
  userName?: CloudDBstandardinstancecreationRulesCreationRule
  userPassword?: CloudDBstandardinstancecreationRulesCreationRule
}

/**
 * Creation rule
 */
export interface CloudDBstandardinstancecreationRulesCreationRule {
  exclude: string[]
  max: number
  min: number
  regex: string
}

/**
 * Flavor detail property
 */
export interface CloudDBstandardinstanceFlavor {
  cpu?: number
  disk?: any
  name: string
  ram?: any
}

/**
 * Image detail property
 */
export interface CloudDBstandardinstanceImage {
  capabilities: CloudDBstandardimageCapabilities
  name: string
}

/**
 * Metrics data
 */
export interface CloudDBstandardinstanceMetricsData {
  endpoint: string
  readToken: string
}

/**
 * Region detail property
 */
export interface CloudDBstandardinstanceRegion {
  name?: string
  type?: CloudDBstandardregionType
}

/*
 * Standard instance status
 */
export enum CloudDBstandardinstanceStatus {
  CREATING = 'creating',
  DELETING = 'deleting',
  REOPENING = 'reopening',
  RESTARTING = 'restarting',
  RUNNING = 'running',
  STARTING = 'starting',
  STOPPED = 'stopped',
  STOPPING = 'stopping',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending',
  UPDATING = 'updating'
}

/**
 * OOM kill informations
 */
export interface CloudDBstandardOom {
  date: string
  sizeReached: number
}

/**
 * Standard regions
 */
export interface CloudDBstandardRegion {
  name: string
  status: CloudDBstandardregionStatus
  type: CloudDBstandardregionType
}

/*
 * Region status
 */
export enum CloudDBstandardregionStatus {
  AVAILABLE = 'available',
  TESTING = 'testing',
  UNAVAILABLE = 'unavailable'
}

/*
 * Region type
 */
export enum CloudDBstandardregionType {
  HOSTING = 'hosting',
  INTERNAL = 'internal',
  PUBLIC = 'public'
}

/**
 * Temporary url informations
 */
export interface CloudDBstandardTemporaryLogsLink {
  expirationDate: string
  url: string
}

/**
 * Users
 */
export interface CloudDBstandardUser {
  creationDate: string
  databases: CloudDBstandarduserDatabase[]
  lastUpdate: string
  name: string
  status: CloudDBstandarduserStatus
  taskId?: string
}

/**
 * Databases linked to an user
 */
export interface CloudDBstandarduserDatabase {
  databaseName: string
  grantId: string
  grantType: CloudDBstandardgrantType
}

/*
 * User status
 */
export enum CloudDBstandarduserStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/**
 * IP whitelisting for your instance
 */
export interface CloudDBstandardWhitelist {
  creationDate: string
  lastUpdate: string
  name: string
  network: string
  status: CloudDBstandardwhitelistStatus
  taskId?: string
}

/*
 * Whitelist status
 */
export enum CloudDBstandardwhitelistStatus {
  CREATED = 'created',
  CREATING = 'creating',
  DELETING = 'deleting',
  UPDATING = 'updating'
}

/**
 * Tasks
 */
export interface CloudDBTask {
  endDate?: string
  function: string
  id: string
  lastUpdate?: string
  progress: number
  startDate: string
  status: CloudDBtaskStatus
}

/*
 * Task status
 */
export enum CloudDBtaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

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


export class CloudDB {
  constructor(private client: Client) {}

}
