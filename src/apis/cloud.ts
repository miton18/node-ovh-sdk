// GENERATED SDK for cloud API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Possible values for project access type
 */
export enum CloudAccessType {
  FULL = 'full',
  RESTRICTED = 'restricted'
}

/**
 * Cloud ACL
 */
export interface CloudAcl {
  accountId: string
  type: CloudAclType
}

/*
 * Possible values for ACL type
 */
export enum CloudAclType {
  READONLY = 'readOnly',
  READWRITE = 'readWrite'
}

/**
 * Cloud alerting consumption
 */
export interface CloudAlerting {
  creationDate: string
  delay: CloudAlertingDelay
  email: string
  formattedMonthlyThreshold: OrderPrice
  id: string
  monthlyThreshold: number
}

/**
 * Cloud alert on your consumption
 */
export interface CloudAlertingAlert {
  alertDate: string
  alertId: number
  emails: string[]
}

/*
 * Possible values for delay between two alerts in seconds
 */
export type CloudAlertingDelay = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400

/**
 * Details about archive storage pricing
 */
export interface CloudArchiveStoragePrice {
  monthlyPrice: OrderPrice
  region: string
}

/**
 * Catalog
 */
export interface CloudauthenticationCatalog {
  endpoints: CloudauthenticationEndpoint[]
  id: string
  type: string
}

/**
 * Domain
 */
export interface CloudauthenticationDomain {
  name: string
}

/**
 * Endpoint
 */
export interface CloudauthenticationEndpoint {
  id: string
  interface: string
  legacy_endpoint_id: string
  region_id: string
  service_id: string
  url: string
}

/**
 * OpenstackToken
 */
export interface CloudauthenticationOpenstackToken {
  catalog: CloudauthenticationCatalog[]
  expires_at: string
  issued_at: string
  methods: string[]
  project: CloudauthenticationTokenProject
  roles: CloudauthenticationRole[]
  user: CloudauthenticationUserToken
}

/**
 * Role
 */
export interface CloudauthenticationRole {
  id: string
  name: string
}

/**
 * Token
 */
export interface CloudauthenticationToken {
  token: CloudauthenticationOpenstackToken
  XAuthToken: string
}

/**
 * TokenProject
 */
export interface CloudauthenticationTokenProject {
  domain: CloudauthenticationDomain
  id: string
  name: string
}

/**
 * UserToken
 */
export interface CloudauthenticationUserToken {
  domain: CloudauthenticationDomain
  id: string
  name: string
}

/**
 * Details about an available region that can be activated on your project
 */
export interface CloudAvailableRegion {
  continentCode: CloudRegionContinent
  datacenterLocation: string
  name: string
}

/**
 * List your automated backups
 */
export interface CloudBackup {
  backupName: string
  createdAt: string
  cron: string
  executions?: CloudExecution[]
  id: string
  instanceId: string
  name: string
}

/**
 * Details about bandwidth storage pricing
 */
export interface CloudBandwidthStoragePrice {
  price: OrderPrice
  region: string
}

/**
 * BandwidthInstance
 */
export interface CloudbillingViewBandwidthInstance {
  quantity: CloudbillingViewQuantity
  totalPrice: any
}

/**
 * BandwidthStorage
 */
export interface CloudbillingViewBandwidthStorage {
  quantity: CloudbillingViewQuantity
  totalPrice: any
}

/**
 * HourlyInstance
 */
export interface CloudbillingViewHourlyInstance {
  details: CloudbillingViewHourlyInstanceDetail[]
  quantity: CloudbillingViewQuantity
  reference: string
  region: string
  totalPrice: any
}

/**
 * HourlyInstanceBandwidth
 */
export interface CloudbillingViewHourlyInstanceBandwidth {
  incomingBandwidth?: CloudbillingViewBandwidthInstance
  outgoingBandwidth?: CloudbillingViewBandwidthInstance
  region: string
  totalPrice: any
}

/**
 * HourlyInstanceDetail
 */
export interface CloudbillingViewHourlyInstanceDetail {
  instanceId: string
  quantity: CloudbillingViewQuantity
  totalPrice: any
}

/**
 * HourlyInstanceOption
 */
export interface CloudbillingViewHourlyInstanceOption {
  details: CloudbillingViewHourlyInstanceOptionDetail[]
  quantity: CloudbillingViewQuantity
  reference: string
  region: string
  totalPrice: any
}

/**
 * HourlyInstanceOptionDetail
 */
export interface CloudbillingViewHourlyInstanceOptionDetail {
  instanceId: string
  quantity: CloudbillingViewQuantity
  totalPrice: any
}

/**
 * HourlyResources
 */
export interface CloudbillingViewHourlyResources {
  instance: CloudbillingViewHourlyInstance[]
  instanceBandwidth: CloudbillingViewHourlyInstanceBandwidth[]
  instanceOption: CloudbillingViewHourlyInstanceOption[]
  snapshot: CloudbillingViewHourlySnapshot[]
  storage: CloudbillingViewHourlyStorage[]
  volume: CloudbillingViewHourlyVolume[]
}

/**
 * HourlySnapshot
 */
export interface CloudbillingViewHourlySnapshot {
  instance?: CloudbillingViewInstanceSnapshot
  region: string
  totalPrice: any
  volume?: CloudbillingViewVolumeSnapshot
}

/**
 * HourlyStorage
 */
export interface CloudbillingViewHourlyStorage {
  incomingBandwidth?: CloudbillingViewBandwidthStorage
  outgoingBandwidth?: CloudbillingViewBandwidthStorage
  region: string
  stored?: CloudbillingViewStoredStorage
  totalPrice: any
  type: CloudbillingViewStorageType
}

/**
 * HourlyVolume
 */
export interface CloudbillingViewHourlyVolume {
  details: CloudbillingViewHourlyVolumeDetail[]
  quantity: CloudbillingViewQuantity
  region: string
  totalPrice: any
  type: string
}

/**
 * HourlyVolumeDetail
 */
export interface CloudbillingViewHourlyVolumeDetail {
  quantity: CloudbillingViewQuantity
  totalPrice: any
  volumeId: string
}

/**
 * InstanceSnapshot
 */
export interface CloudbillingViewInstanceSnapshot {
  quantity: CloudbillingViewQuantity
  totalPrice: any
}

/**
 * MonthlyInstance
 */
export interface CloudbillingViewMonthlyInstance {
  details: CloudbillingViewMonthlyInstanceDetail[]
  reference: string
  region: string
  totalPrice: any
}

/**
 * MonthlyInstanceDetail
 */
export interface CloudbillingViewMonthlyInstanceDetail {
  activation: string
  instanceId: string
  totalPrice: any
}

/**
 * MonthlyInstanceOption
 */
export interface CloudbillingViewMonthlyInstanceOption {
  details: CloudbillingViewMonthlyInstanceOptionDetail[]
  reference: string
  region: string
  totalPrice: any
}

/**
 * MonthlyInstanceOptionDetail
 */
export interface CloudbillingViewMonthlyInstanceOptionDetail {
  instanceId: string
  totalPrice: any
}

/**
 * MonthlyResources
 */
export interface CloudbillingViewMonthlyResources {
  instance: CloudbillingViewMonthlyInstance[]
  instanceOption: CloudbillingViewMonthlyInstanceOption[]
}

/**
 * Quantity
 */
export interface CloudbillingViewQuantity {
  unit: CloudbillingViewUnitQuantity
  value: any
}

/*
 * StorageTypeEnum
 */
export enum CloudbillingViewStorageType {
  PCS = 'pcs',
  PCA = 'pca'
}

/**
 * StoredStorage
 */
export interface CloudbillingViewStoredStorage {
  quantity: CloudbillingViewQuantity
  totalPrice: any
}

/*
 * UnitQuantity
 */
export enum CloudbillingViewUnitQuantity {
  GIB = 'GiB',
  GIBH = 'GiBh',
  HOUR = 'Hour'
}

/**
 * UsedCredit
 */
export interface CloudbillingViewUsedCredit {
  description: string
  id: number
  usedAmount: any
}

/**
 * UsedCredits
 */
export interface CloudbillingViewUsedCredits {
  details: CloudbillingViewUsedCredit[]
  totalCredit: any
}

/**
 * VolumeSnapshot
 */
export interface CloudbillingViewVolumeSnapshot {
  quantity: CloudbillingViewQuantity
  totalPrice: any
}

/**
 * Voucher validity range
 */
export interface CloudcommonVoucherValidity {
  from?: string
  to?: string
}

/**
 * Information about the different components available in the region
 */
export interface CloudComponent {
  name: string
  status: CloudServiceStatus
}

/*
 * Region of the registry
 */
export enum CloudcontainerRegistryregistryRegion {
  GRA7 = 'GRA7'
}

/**
 * Managed docker registry
 */
export interface CloudcontainerRegistryregistryRegistry {
  createdAt: string
  id: string
  name: string
  projectID: string
  region: CloudcontainerRegistryregistryRegion
  status: CloudcontainerRegistryregistryStatus
  updatedAt: string
  url: string
  version: string
}

/*
 * Status of the registry
 */
export enum CloudcontainerRegistryregistryStatus {
  ERROR = 'ERROR',
  READY = 'READY',
  DELETED = 'DELETED',
  SUSPENDED = 'SUSPENDED',
  INSTALLING = 'INSTALLING',
  UPDATING = 'UPDATING',
  RESTORING = 'RESTORING',
  SUSPENDING = 'SUSPENDING',
  DELETING = 'DELETING'
}

/**
 * Docker registry user
 */
export interface CloudcontainerRegistryuserUser {
  email: string
  id: string
  password?: string
  user: string
}

/**
 * Cloud credit
 */
export interface CloudCredit {
  available_credit: OrderPrice
  bill?: string
  description?: string
  id: number
  products?: string[]
  total_credit: OrderPrice
  used_credit: OrderPrice
  validity?: CloudcommonVoucherValidity
  voucher?: string
}

/**
 * An execution of the backup workflow
 */
export interface CloudExecution {
  executedAt: string
  state: CloudExecutionState
  stateInfo: string
}

/*
 * Enum values for State
 */
export enum CloudExecutionState {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  PAUSED = 'PAUSED'
}

/**
 * Flavor
 */
export interface CloudflavorFlavor {
  available: boolean
  disk: number
  id: string
  inboundBandwidth?: number
  name: string
  osType: string
  outboundBandwidth?: number
  planCodes: CloudflavorFlavorPlanCodes
  ram: number
  region: string
  type: string
  vcpus: number
}

/**
 * FlavorPlanCodes
 */
export interface CloudflavorFlavorPlanCodes {
  hourly?: string
  monthly?: string
}

/**
 * Details about flavor pricing
 */
export interface CloudFlavorPrice {
  flavorId: string
  flavorName: string
  monthlyPrice?: OrderPrice
  price: OrderPrice
  region: string
}

/**
 * ProjectForecast
 */
export interface CloudforecastProjectForecast {
  lastMetric: string
  projectForecast: OrderPrice
}

/**
 * Image
 */
export interface CloudimageImage {
  creationDate: string
  flavorType?: string
  id: string
  minDisk: number
  minRam: number
  name: string
  planCode?: string
  region: string
  size: any
  status: string
  tags?: string[]
  type: string
  user: string
  visibility: string
}

/*
 * OSTypeEnum
 */
export enum CloudimageOSType {
  LINUX = 'linux',
  BSD = 'bsd',
  WINDOWS = 'windows'
}

/**
 * Access
 */
export interface CloudinstanceAccess {
  login: string
  password: string
  type: string
  url: string
}

/**
 * ApplicationAccess
 */
export interface CloudinstanceApplicationAccess {
  accesses: CloudinstanceAccess[]
  status: CloudinstanceApplicationAccessState
}

/*
 * ApplicationAccessStateEnum
 */
export enum CloudinstanceApplicationAccessState {
  INSTALLING = 'installing',
  OK = 'ok'
}

/**
 * Autobackup params at instance creation
 */
export interface CloudinstanceAutoBackup {
  cron: string
  rotation: number
}

/**
 * Instance
 */
export interface CloudinstanceInstance {
  created: string
  flavorId: string
  id: string
  imageId: string
  ipAddresses: CloudinstanceIpAddress[]
  monthlyBilling?: CloudinstanceMonthlyBilling
  name: string
  operationIds: string[]
  planCode?: string
  region: string
  sshKeyId?: string
  status: CloudinstanceInstanceStatus
}

/**
 * InstanceDetail
 */
export interface CloudinstanceInstanceDetail {
  created: string
  flavor: CloudflavorFlavor
  id: string
  image: CloudimageImage
  ipAddresses: CloudinstanceIpAddress[]
  monthlyBilling?: CloudinstanceMonthlyBilling
  name: string
  operationIds: string[]
  planCode?: string
  region: string
  sshKey: CloudsshkeySshKeyDetail
  status: CloudinstanceInstanceStatus
}

/**
 * InstanceMetrics
 */
export interface CloudinstanceInstanceMetrics {
  unit: string
  values: CloudinstanceInstanceMetricsValue[]
}

/**
 * InstanceMetricsValue
 */
export interface CloudinstanceInstanceMetricsValue {
  timestamp: number
  value: any
}

/*
 * InstanceStatusEnum
 */
export enum CloudinstanceInstanceStatus {
  ACTIVE = 'ACTIVE',
  BUILDING = 'BUILDING',
  DELETED = 'DELETED',
  ERROR = 'ERROR',
  HARD_REBOOT = 'HARD_REBOOT',
  PASSWORD = 'PASSWORD',
  PAUSED = 'PAUSED',
  REBOOT = 'REBOOT',
  REBUILD = 'REBUILD',
  RESCUED = 'RESCUED',
  RESIZED = 'RESIZED',
  REVERT_RESIZE = 'REVERT_RESIZE',
  SOFT_DELETED = 'SOFT_DELETED',
  STOPPED = 'STOPPED',
  SUSPENDED = 'SUSPENDED',
  UNKNOWN = 'UNKNOWN',
  VERIFY_RESIZE = 'VERIFY_RESIZE',
  MIGRATING = 'MIGRATING',
  RESIZE = 'RESIZE',
  BUILD = 'BUILD',
  SHUTOFF = 'SHUTOFF',
  RESCUE = 'RESCUE',
  SHELVED = 'SHELVED',
  SHELVED_OFFLOADED = 'SHELVED_OFFLOADED',
  RESCUING = 'RESCUING',
  UNRESCUING = 'UNRESCUING',
  SNAPSHOTTING = 'SNAPSHOTTING',
  RESUMING = 'RESUMING'
}

/**
 * InstanceVnc
 */
export interface CloudinstanceInstanceVnc {
  type: string
  url: string
}

/**
 * IpAddress
 */
export interface CloudinstanceIpAddress {
  gatewayIp?: string
  ip: string
  networkId: string
  type: string
  version: number
}

/*
 * MetricsPeriod
 */
export enum CloudinstanceMetricsPeriod {
  LASTDAY = 'lastday',
  LASTMONTH = 'lastmonth',
  LASTWEEK = 'lastweek',
  LASTYEAR = 'lastyear',
  TODAY = 'today'
}

/*
 * MetricsType
 */
export enum CloudinstanceMetricsType {
  MEM_USED = 'mem:used',
  MEM_MAX = 'mem:max',
  CPU_USED = 'cpu:used',
  CPU_MAX = 'cpu:max',
  NET_TX = 'net:tx',
  NET_RX = 'net:rx'
}

/**
 * MonthlyBilling
 */
export interface CloudinstanceMonthlyBilling {
  since: string
  status: CloudinstanceMonthlyBillingStatus
}

/*
 * MonthlyBillingStatusEnum
 */
export enum CloudinstanceMonthlyBillingStatus {
  ACTIVATIONPENDING = 'activationPending',
  OK = 'ok'
}

/**
 * Instance with region to set as monthly billing
 */
export interface CloudinstanceMonthlyInstanceBulkParams {
  instanceId: string
  region: string
}

/**
 * NetworkBulkParams
 */
export interface CloudinstanceNetworkBulkParams {
  networkId: string
}

/**
 * NetworkParams
 */
export interface CloudinstanceNetworkParams {
  ip?: string
  networkId: string
}

/*
 * RebootTypeEnum
 */
export enum CloudinstanceRebootType {
  SOFT = 'soft',
  HARD = 'hard'
}

/**
 * RescueAdminPassword
 */
export interface CloudinstanceRescueAdminPassword {
  adminPassword?: string
}

/**
 * InstanceGroup
 */
export interface CloudinstancegroupInstanceGroup {
  id: string
  instance_ids: string[]
  name: string
  region: string
  type: CloudinstancegroupInstanceGroupType
}

/*
 * InstanceGroupTypeEnum
 */
export enum CloudinstancegroupInstanceGroupType {
  AFFINITY = 'affinity',
  ANTI_AFFINITY = 'anti-affinity'
}

/**
 * FixedIp
 */
export interface CloudinstanceInterfaceFixedIp {
  ip: string
  subnetId: string
}

/**
 * Interface
 */
export interface CloudinstanceInterfaceInterface {
  fixedIps: CloudinstanceInterfaceFixedIp[]
  id: string
  macAddress: string
  networkId: string
  state: string
  type: string
}

/**
 * CloudIp
 */
export interface CloudipCloudIp {
  id: string
  ip?: string
  status: CloudipIpStatus
  type: string
}

/**
 * FailoverIp
 */
export interface CloudipFailoverIp {
  block?: string
  continentCode?: string
  geoloc?: string
  id: string
  ip?: string
  progress: number
  routedTo: string
  status: CloudipIpStatus
  subType: CloudipIpSubType
}

/*
 * IpStatusEnum
 */
export enum CloudipIpStatus {
  OK = 'ok',
  OPERATIONPENDING = 'operationPending'
}

/*
 * IpSubTypeEnum
 */
export enum CloudipIpSubType {
  CLOUD = 'cloud',
  OVH = 'ovh'
}

/*
 * Enum values for IpCountry
 */
export enum CloudIpCountry {
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
 * Managed Kubernetes cluster description
 */
export interface CloudkubeCluster {
  controlPlaneIsUpToDate: boolean
  createdAt: string
  id: string
  isUpToDate: boolean
  name: string
  nextUpgradeVersions?: CloudkubeUpgradeVersion[]
  nodesUrl: string
  region: CloudkubeRegion
  status: CloudkubeClusterStatus
  updatedAt: string
  updatePolicy: string
  url: string
  version: string
}

/*
 * Enum values for Status
 */
export enum CloudkubeClusterStatus {
  INSTALLING = 'INSTALLING',
  UPDATING = 'UPDATING',
  RESETTING = 'RESETTING',
  SUSPENDING = 'SUSPENDING',
  REOPENING = 'REOPENING',
  DELETING = 'DELETING',
  SUSPENDED = 'SUSPENDED',
  ERROR = 'ERROR',
  USER_ERROR = 'USER_ERROR',
  USER_QUOTA_ERROR = 'USER_QUOTA_ERROR',
  READY = 'READY'
}

/**
 * a flavor kind
 */
export interface CloudkubeFlavor {
  category: CloudkubeFlavorCategory
  id: string
  name: string
  state: CloudkubeFlavorState
}

/*
 * Enum values for category
 */
export enum CloudkubeFlavorCategory {
  C = 'c',
  G = 'g',
  T = 't',
  B = 'b',
  R = 'r'
}

/*
 * Enum values for State
 */
export enum CloudkubeFlavorState {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable'
}

/**
 * Kubeconfig description
 */
export interface CloudkubeKubeconfig {
  content: string
}

/**
 * Node installed on your cluster
 */
export interface CloudkubeNode {
  createdAt: string
  flavor: string
  id: string
  instanceId?: string
  isUpToDate: boolean
  name?: string
  status: CloudkubeNodeStatus
  updatedAt: string
  version: string
}

/*
 * Enum values for Status
 */
export enum CloudkubeNodeStatus {
  INSTALLING = 'INSTALLING',
  UPDATING = 'UPDATING',
  RESETTING = 'RESETTING',
  SUSPENDING = 'SUSPENDING',
  REOPENING = 'REOPENING',
  DELETING = 'DELETING',
  SUSPENDED = 'SUSPENDED',
  ERROR = 'ERROR',
  USER_ERROR = 'USER_ERROR',
  USER_QUOTA_ERROR = 'USER_QUOTA_ERROR',
  USER_NODE_NOT_FOUND_ERROR = 'USER_NODE_NOT_FOUND_ERROR',
  USER_NODE_SUSPENDED_SERVICE = 'USER_NODE_SUSPENDED_SERVICE',
  READY = 'READY'
}

/*
 * Enum values for available regions
 */
export enum CloudkubeRegion {
  GRA5 = 'GRA5',
  GRA7 = 'GRA7',
  BHS5 = 'BHS5'
}

/*
 * Enum values for worker nodes reset policy
 */
export enum CloudkubeResetWorkerNodesPolicy {
  REINSTALL = 'reinstall',
  DELETE = 'delete'
}

/*
 * Enum values for UpdatePolicy
 */
export enum CloudkubeUpdatePolicy {
  ALWAYS_UPDATE = 'ALWAYS_UPDATE',
  MINIMAL_DOWNTIME = 'MINIMAL_DOWNTIME',
  NEVER_UPDATE = 'NEVER_UPDATE'
}

/*
 * Enum values for UpdateStrategy
 */
export enum CloudkubeUpdateStrategy {
  LATEST_PATCH = 'LATEST_PATCH',
  NEXT_MINOR = 'NEXT_MINOR'
}

/*
 * List of available versions for upgrade
 */
export type CloudkubeUpgradeVersion = '1.12' | '1.13' | '1.14' | '1.15'

/*
 * List of available versions for installation
 */
export type CloudkubeVersion = '1.13' | '1.14' | '1.15'

/**
 * A public cloud lab permits to activate a feature in beta
 */
export interface CloudLab {
  id: string
  name: string
  status: CloudLabStatus
}

/**
 * List of required agreements to activate the lab
 */
export interface CloudLabAgreements {
  accepted: number[]
  toAccept: number[]
}

/*
 * Enum values for Status
 */
export enum CloudLabStatus {
  OPEN = 'open',
  ACTIVATING = 'activating',
  ACTIVATED = 'activated',
  CLOSED = 'closed'
}

/**
 * Migration
 */
export interface CloudmigrationMigration {
  date: string
  migrationId: string
  resourceId: string
  resourceType: CloudmigrationResourceType
}

/*
 * ResourceTypeEnum
 */
export enum CloudmigrationResourceType {
  INSTANCE = 'instance'
}

/**
 * IPPool
 */
export interface CloudnetworkIPPool {
  dhcp: boolean
  end: string
  network: string
  region: string
  start: string
}

/**
 * Network
 */
export interface CloudnetworkNetwork {
  id: string
  name: string
  regions: CloudnetworkNetworkRegion[]
  status: CloudnetworkNetworkStatus
  type?: CloudnetworkNetworkType
  vlanId: number
}

/**
 * NetworkRegion
 */
export interface CloudnetworkNetworkRegion {
  region: string
  status: CloudnetworkNetworkRegionStatus
}

/*
 * NetworkRegionStatusEnum
 */
export enum CloudnetworkNetworkRegionStatus {
  ACTIVE = 'ACTIVE',
  BUILDING = 'BUILDING'
}

/*
 * NetworkStatusEnum
 */
export enum CloudnetworkNetworkStatus {
  BUILDING = 'BUILDING',
  ACTIVE = 'ACTIVE',
  DELETING = 'DELETING'
}

/*
 * NetworkTypeEnum
 */
export enum CloudnetworkNetworkType {
  PUBLIC = 'public',
  PRIVATE = 'private'
}

/**
 * Subnet
 */
export interface CloudnetworkSubnet {
  cidr: string
  gatewayIp?: string
  id: string
  ipPools: CloudnetworkIPPool[]
}

/**
 * Profile
 */
export interface CloudopenstackClientProfile {
  name: string
}

/**
 * Session
 */
export interface CloudopenstackClientSession {
  expires: string
  id: string
  profile: CloudopenstackClientProfile
  websocket: string
}

/**
 * An operation is an async process on your Project
 */
export interface CloudOperation {
  action: string
  completedAt?: string
  createdAt: string
  id: string
  progress: number
  regions?: string[]
  startedAt?: string
  status: CloudOperationStatus
}

/*
 * Enum values for Status
 */
export enum CloudOperationStatus {
  CREATED = 'created',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  IN_ERROR = 'in-error',
  UNKNOWN = 'unknown'
}

/**
 * Order
 */
export interface CloudorderOrder {
  date: string
  orderId: number
  planCode: string
  serviceName?: string
  status: CloudorderStatus
}

/*
 * StatusEnum
 */
export enum CloudorderStatus {
  UNPAID = 'unpaid',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  UNKNOWN = 'unknown'
}

/*
 * Task type available for cloud archives
 */
export enum CloudpcaBillingRef {
  BACKUP = 'backup',
  DELETE = 'delete',
  RESTORE = 'restore'
}

/**
 * Openstack swift credentials for your PCA offer
 */
export interface CloudpcaDownloadCredentials {
  authEndpoint: string
  container: string
  login: string
  password: string
  region: string
  storageEndpoint: string
  tenantId: string
  tenantName: string
}

/*
 * Task types for cloud archives
 */
export enum CloudpcaFunctionType {
  CREATEUSER = 'createUser',
  DELETE = 'delete',
  RESTORE = 'restore',
  SETPASSWORD = 'setPassword',
  SETSESSIONNAME = 'setSessionName',
  SETSSHKEY = 'setSshKey'
}

/*
 * Session state available for cloud archives
 */
export enum CloudpcaSessionState {
  DOING = 'doing',
  DOINGBACKUP = 'doingBackup',
  DOINGDELETE = 'doingDelete',
  DOINGRESTORE = 'doingRestore',
  DONE = 'done',
  ERROR = 'error',
  FAILEDDELETE = 'failedDelete',
  FAILEDRESTORE = 'failedRestore',
  NEW = 'new',
  TAGGING = 'tagging',
  TOBACKUP = 'toBackup',
  TODELETE = 'toDelete',
  TORESTORE = 'toRestore'
}

/*
 * Task status for cloud archives
 */
export enum CloudpcaTaskState {
  CANCELLED = 'cancelled',
  DELETED = 'deleted',
  DOING = 'doing',
  DOINGBACKUP = 'doingBackup',
  DOINGDELETE = 'doingDelete',
  DOINGRESTORE = 'doingRestore',
  DONE = 'done',
  ERROR = 'error',
  FAILEDDELETE = 'failedDelete',
  FAILEDRESTORE = 'failedRestore',
  NEW = 'new',
  TAGGING = 'tagging',
  TOBACKUP = 'toBackup',
  TODELETE = 'toDelete',
  TORESTORE = 'toRestore',
  TODO = 'todo'
}

/*
 * Task type available for cloud archives
 */
export enum CloudpcaTaskType {
  DELETE = 'delete',
  RESTORE = 'restore'
}

/**
 * State of the request to transfer a PCA offer to Object Storage
 */
export interface CloudpcaTransferState {
  agreements?: number[]
  projectId: string
  state: CloudpcaTransferState
  transferDate?: string
}

/*
 * Transfer states
 */
export enum CloudpcaTransferState {
  DELETED = 'deleted',
  TRANSFERRED = 'transferred',
  UNTRANSFERRED = 'untransferred',
  WAITINGAGREEMENTSVALIDATION = 'waitingAgreementsValidation'
}

/**
 * A structure defining prices for cloud services
 */
export interface CloudPrice {
  archive: CloudArchiveStoragePrice[]
  bandwidthArchiveIn: CloudBandwidthStoragePrice[]
  bandwidthArchiveOut: CloudBandwidthStoragePrice[]
  bandwidthStorage: CloudBandwidthStoragePrice[]
  instances: CloudFlavorPrice[]
  projectCreation: OrderPrice
  snapshots: CloudSnapshotPrice[]
  storage: CloudStoragePrice[]
  volumes: CloudVolumePrice[]
}

/**
 * Project
 */
export interface CloudProject {
  access: CloudAccessType
  creationDate: string
  description?: string
  expiration?: string
  orderId?: number
  planCode: string
  project_id: string
  status: CloudprojectProjectStatus
  unleash: boolean
}

/**
 * Usage information for current month on your project
 */
export interface CloudprojectBandwidthStorageUsage {
  downloadedBytes: number
  region: string
  total: OrderPrice
}

/**
 * Project bill
 */
export interface CloudprojectBill {
  billId: string
  type: CloudprojectBillType
}

/*
 * Possible values for bill type
 */
export enum CloudprojectBillType {
  CREDITPURCHASED = 'creditPurchased',
  MONTHLYCONSUMPTION = 'monthlyConsumption',
  MONTHLYINSTANCEACTIVATION = 'monthlyInstanceActivation'
}

/**
 * Usage information for current month on your project
 */
export interface CloudprojectCurrentUsage {
  instances: CloudprojectInstancesUsage
  snapshots: CloudprojectSnapshotsUsage
  storage: CloudprojectStorageUsage
  total: OrderPrice
  volumes: CloudprojectVolumesUsage
  volumeSnapshots: CloudprojectSnapshotsUsage
}

/**
 * Instance monthly billing details
 */
export interface CloudprojectInstanceMonthlyBilling {
  activatedOn: string
  cost: OrderPrice
}

/**
 * Instances usage for current month
 */
export interface CloudprojectInstancesUsage {
  detail: CloudprojectInstanceUsageDetail[]
  total: OrderPrice
}

/**
 * Instance usage
 */
export interface CloudprojectInstanceUsageDetail {
  hourly?: OrderPrice
  instanceId: string
  monthly?: CloudprojectInstanceMonthlyBilling
  monthlyBilling: boolean
  reference: string
}

/**
 * A stream to send data
 */
export interface CloudprojectioStream {
  backlog: any
  description: string
  id: string
  kind: CloudprojectioStreamKind
  name: string
  regions: string[]
  retention: any
  status: CloudprojectioStreamStatus
  throttling: number
}

/**
 * Region information
 */
export interface CloudprojectiostreamRegion {
  endpoint: CloudprojectiostreamRegionEndpoint
  region: string
}

/**
 * Region information
 */
export interface CloudprojectiostreamRegionEndpoint {
  pulsar: string
}

/**
 * Create a consumer on a stream
 */
export interface CloudprojectiostreamSubscription {
  id: string
  kind: CloudprojectiostreamSubscriptionKind
  name: string
}

/**
 * Create a subscription on a stream
 */
export interface CloudprojectiostreamSubscriptionCreation {
  name: string
}

/*
 * Kind of the subscription
 */
export enum CloudprojectiostreamSubscriptionKind {
  SHARED = 'SHARED',
  KEY_SHARED = 'KEY_SHARED',
  EXCLUSIVE = 'EXCLUSIVE',
  FAILOVER = 'FAILOVER'
}

/**
 * Get statistic of a subscription
 */
export interface CloudprojectiostreamSubscriptionStats {
  lag: number
}

/**
 * Token to access a stream
 */
export interface CloudprojectiostreamToken {
  action: CloudprojectiostreamTokenAction
  id: string
  token: string
}

/*
 * Action of the token
 */
export enum CloudprojectiostreamTokenAction {
  CONSUME = 'CONSUME',
  PRODUCE = 'PRODUCE',
  BOTH = 'BOTH'
}

/**
 * Create a token to access a stream
 */
export interface CloudprojectiostreamTokenCreation {
  action: CloudprojectiostreamTokenAction
}

/**
 * Create a stream of data
 */
export interface CloudprojectioStreamCreation {
  description: string
  kind: CloudprojectioStreamKind
  name: string
  region: string
}

/*
 * Kind of persistence for the stream
 */
export enum CloudprojectioStreamKind {
  NON_PERSISTENT = 'NON_PERSISTENT',
  PERSISTENT = 'PERSISTENT'
}

/**
 * Get statistics of a stream
 */
export interface CloudprojectioStreamStats {
  usage: any
}

/*
 * Status of the stream
 */
export enum CloudprojectioStreamStatus {
  INSTALLING = 'INSTALLING',
  RUNNING = 'RUNNING',
  ERROR = 'ERROR'
}

/**
 * New cloud project
 */
export interface CloudprojectNewProject {
  agreements?: number[]
  credit?: CloudprojectNewProjectCredit
  description?: string
  orderId?: number
  project?: string
  status: CloudprojectNewProjectStatus
}

/**
 * Credit details
 */
export interface CloudprojectNewProjectCredit {
  description?: string
  id: number
  products?: string[]
  total_credit: OrderPrice
  validity?: CloudcommonVoucherValidity
}

/**
 * New cloud project informations
 */
export interface CloudprojectNewProjectInfo {
  agreements?: number[]
  error?: CloudprojectNewProjectInfoError
  order?: OrderPrice
  voucher?: CloudprojectNewProjectInfoVoucher
}

/**
 * Error that can occur when creating a Public Cloud project
 */
export interface CloudprojectNewProjectInfoError {
  code: CloudprojectNewProjectInfoErrorCode
  message: string
}

/*
 * Possible values for error code on project creation
 */
export enum CloudprojectNewProjectInfoErrorCode {
  ACCOUNTNOTELIGIBLE = 'accountNotEligible',
  CHALLENGEPAYMENTMETHODREQUESTED = 'challengePaymentMethodRequested',
  INVALIDPAYMENTMEAN = 'invalidPaymentMean',
  MAXPROJECTSLIMITREACHED = 'maxProjectsLimitReached',
  PAYPALACCOUNTNOTVERIFIED = 'paypalAccountNotVerified',
  UNPAIDDEBTS = 'unpaidDebts'
}

/**
 * Information about voucher
 */
export interface CloudprojectNewProjectInfoVoucher {
  credit: OrderPrice
  paymentMethodRequired: boolean
}

/*
 * Possible values for new project status
 */
export enum CloudprojectNewProjectStatus {
  CREATING = 'creating',
  OK = 'ok',
  VALIDATIONPENDING = 'validationPending',
  WAITINGAGREEMENTSVALIDATION = 'waitingAgreementsValidation'
}

/**
 * Product agreements
 */
export interface CloudprojectProductAgreements {
  agreementsToValidate?: number[]
  agreementsValidated?: number[]
}

/*
 * Possible values for cloud project product name
 */
export enum CloudprojectProductName {
  REGISTRY = 'registry'
}

/*
 * Possible values for project status
 */
export enum CloudprojectProjectStatus {
  CREATING = 'creating',
  DELETED = 'deleted',
  DELETING = 'deleting',
  OK = 'ok',
  SUSPENDED = 'suspended'
}

/**
 * Usage information on your project
 */
export interface CloudprojectProjectUsage {
  current: CloudprojectCurrentUsage
}

/**
 * Snapshots usage for current month
 */
export interface CloudprojectSnapshotsUsage {
  detail: CloudprojectSnapshotUsageDetail[]
  total: OrderPrice
}

/**
 * Snapshot usage
 */
export interface CloudprojectSnapshotUsageDetail {
  price: OrderPrice
  region: string
  storedSize: any
}

/**
 * Usage information for current month on your project
 */
export interface CloudprojectStorageUsage {
  bandwidth: CloudprojectBandwidthStorageUsage[]
  total: OrderPrice
  volume: CloudprojectStorageVolumeUsage[]
}

/**
 * Storage volume used on your project
 */
export interface CloudprojectStorageVolumeUsage {
  region: string
  storedBytes: number
  total: OrderPrice
}

/**
 * Volumes usage for current month
 */
export interface CloudprojectVolumesUsage {
  detail: CloudprojectVolumeUsageDetail[]
  total: OrderPrice
}

/*
 * Possible values for volume type
 */
export enum CloudprojectVolumeType {
  CLASSIC = 'classic',
  HIGH_SPEED = 'high-speed'
}

/**
 * Volume usage
 */
export interface CloudprojectVolumeUsageDetail {
  price: OrderPrice
  volumeCapacity: any
  volumeId: string
  volumeType: CloudprojectVolumeType
}

export interface CloudProjectAclCreation {
  accountId: string
  type: CloudAclType
}

export interface CloudProjectActivateMonthlyBillingCreation {
  instances: CloudinstanceMonthlyInstanceBulkParams[]
}

export interface CloudProjectAlertingCreation {
  delay: CloudAlertingDelay
  email: string
  monthlyThreshold: number
}

export interface CloudProjectContainerRegistryCreation {
  name: string
  region: CloudcontainerRegistryregistryRegion
}

export interface CloudProjectContainerRegistryUpdate {
  name: string
}

export interface CloudProjectContainerRegistryUsersCreation {
  email?: string
  login?: string
}

export interface CloudProjectCreditCreation {
  code: string
}

export interface CloudProjectInstanceBulkCreation {
  autobackup?: CloudinstanceAutoBackup
  flavorId: string
  groupId?: string
  imageId?: string
  monthlyBilling?: boolean
  name: string
  networks?: CloudinstanceNetworkBulkParams[]
  number: number
  region: string
  sshKeyId?: string
  userData?: string
  volumeId?: string
}

export interface CloudProjectInstanceCreation {
  autobackup?: CloudinstanceAutoBackup
  flavorId: string
  groupId?: string
  imageId?: string
  monthlyBilling?: boolean
  name: string
  networks?: CloudinstanceNetworkParams[]
  region: string
  sshKeyId?: string
  userData?: string
  volumeId?: string
}

export interface CloudProjectInstanceGroupCreation {
  name: string
  region: string
  type: CloudinstancegroupInstanceGroupType
}

export interface CloudProjectInstanceInterfaceCreation {
  ip?: string
  networkId: string
}

export interface CloudProjectInstanceRebootCreation {
  type: CloudinstanceRebootType
}

export interface CloudProjectInstanceReinstallCreation {
  imageId: string
}

export interface CloudProjectInstanceRescueModeCreation {
  imageId?: string
  rescue: boolean
}

export interface CloudProjectInstanceResizeCreation {
  flavorId: string
}

export interface CloudProjectInstanceSnapshotCreation {
  snapshotName: string
}

export interface CloudProjectInstanceUpdate {
  instanceName: string
}

export interface CloudProjectIpFailoverAttachCreation {
  instanceId: string
}

export interface CloudProjectKubeCreation {
  name?: string
  region: CloudkubeRegion
  version?: CloudkubeVersion
}

export interface CloudProjectKubeNodeCreation {
  flavorName: string
  name?: string
}

export interface CloudProjectKubeResetCreation {
  version?: CloudkubeVersion
  workerNodesPolicy?: CloudkubeResetWorkerNodesPolicy
}

export interface CloudProjectKubeUpdate {
  name: string
}

export interface CloudProjectKubeUpdateCreation {
  strategy?: CloudkubeUpdateStrategy
}

export interface CloudProjectKubeUpdatePolicyUpdate {
  updatePolicy: CloudkubeUpdatePolicy
}

export interface CloudProjectMigrationUpdate {
  date: string
}

export interface CloudProjectNetworkPrivateCreation {
  name: string
  regions?: string[]
  vlanId?: number
}

export interface CloudProjectNetworkPrivateRegionCreation {
  region: string
}

export interface CloudProjectNetworkPrivateSubnetCreation {
  dhcp: boolean
  end: string
  network: string
  noGateway: boolean
  region: string
  start: string
}

export interface CloudProjectNetworkPrivateSubnetUpdate {
  dhcp: boolean
  disableGateway: boolean
  gatewayIp?: string
}

export interface CloudProjectNetworkPrivateUpdate {
  name: string
}

export interface CloudProjectRegionCreation {
  region: string
}

export interface CloudProjectRegionQuotaCreation {
  name: string
}

export interface CloudProjectRegionWorkflowBackupCreation {
  cron: string
  instanceId: string
  maxExecutionCount?: number
  name: string
  rotation: number
}

export interface CloudProjectSshkeyCreation {
  name: string
  publicKey: string
  region?: string
}

export interface CloudProjectStorageCorsCreation {
  origin: string
}

export interface CloudProjectStorageCreation {
  archive: boolean
  containerName: string
  region: string
}

export interface CloudProjectStoragePublicUrlCreation {
  expirationDate: string
  objectName: string
}

export interface CloudProjectStorageUpdate {
  containerType?: CloudstorageType
}

export interface CloudProjectStorageUserCreation {
  description?: string
  right: CloudstorageRight
}

export interface CloudProjectUserCreation {
  description?: string
  role?: ClouduserRole
  roles?: ClouduserRoleEnum[]
}

export interface CloudProjectUserRoleCreation {
  roleId: string
}

export interface CloudProjectUserTokenCreation {
  password: string
}

export interface CloudProjectVolumeAttachCreation {
  instanceId: string
}

export interface CloudProjectVolumeCreation {
  description?: string
  imageId?: string
  name?: string
  region: string
  size: number
  snapshotId?: string
  type: CloudvolumeVolumeType
}

export interface CloudProjectVolumeDetachCreation {
  instanceId: string
}

export interface CloudProjectVolumeSnapshotCreation {
  description?: string
  name?: string
}

export interface CloudProjectVolumeUpdate {
  description?: string
  name?: string
}

export interface CloudProjectVolumeUpsizeCreation {
  size: number
}

/**
 * Quotas
 */
export interface CloudquotaAllowedQuota {
  compute: CloudquotaComputeQuota
  name: string
  network: CloudquotaNetworkQuota
  volume: CloudquotaVolumeQuota
}

/**
 * Quotas for compute
 */
export interface CloudquotaComputeQuota {
  cores: number
  instances: number
  ram: number
}

/**
 * Quotas on instances
 */
export interface CloudquotaInstanceUsageQuotas {
  maxCores: number
  maxInstances: number
  maxRam: number
  usedCores: number
  usedInstances: number
  usedRAM: number
}

/**
 * Quotas on keypairs
 */
export interface CloudquotaKeypairQuotas {
  maxCount: number
}

/**
 * Quotas for network
 */
export interface CloudquotaNetworkQuota {
  networks: number
  ports: number
  subnets: number
}

/**
 * Quotas
 */
export interface CloudquotaQuotas {
  instance?: CloudquotaInstanceUsageQuotas
  keypair?: CloudquotaKeypairQuotas
  region: string
  volume?: CloudquotaVolumeUsageQuotas
}

/**
 * Quotas for volume
 */
export interface CloudquotaVolumeQuota {
  gigabytes: number
  snapshots: number
  volumes: number
}

/**
 * Quotas on volumes
 */
export interface CloudquotaVolumeUsageQuotas {
  maxGigabytes: number
  usedGigabytes: number
  volumeCount: number
}

/**
 * Details about your region
 */
export interface CloudRegion {
  continentCode: CloudRegionContinent
  datacenterLocation: string
  ipCountries: CloudIpCountryEnum[]
  name: string
  services: CloudComponent[]
  status: CloudRegionStatus
}

/*
 * Enum values for ContinentCode
 */
export enum CloudRegionContinent {
  EU = 'EU',
  NA = 'NA',
  US = 'US',
  ASIA = 'ASIA'
}

/*
 * Enum values for Status
 */
export enum CloudRegionStatus {
  UP = 'UP',
  DOWN = 'DOWN',
  MAINTENANCE = 'MAINTENANCE'
}

/**
 * Role permissions
 */
export interface CloudrolePermission {
  label: string
  roles: string[]
}

/**
 * Role
 */
export interface CloudroleRole {
  description: string
  id: string
  name: string
  permissions: string[]
}

/**
 * OpenStack role
 */
export interface CloudroleRoles {
  roles: CloudroleRole[]
  services: CloudroleService[]
}

/**
 * OpenStack service
 */
export interface CloudroleService {
  name: string
  permissions: CloudrolePermission[]
}

/*
 * Enum values for Status
 */
export enum CloudServiceStatus {
  UP = 'UP',
  DOWN = 'DOWN'
}

/**
 * Details about snapshot pricing
 */
export interface CloudSnapshotPrice {
  monthlyPrice: OrderPrice
  price: OrderPrice
  region: string
}

/**
 * SshKey
 */
export interface CloudsshkeySshKey {
  id: string
  name: string
  publicKey: string
  regions: string[]
}

/**
 * SshKeyDetail
 */
export interface CloudsshkeySshKeyDetail {
  fingerPrint: string
  id: string
  name: string
  publicKey: string
  regions: string[]
}

/**
 * Content
 */
export interface CloudstackContent {
  content: string
  type: string
}

/**
 * InstructionGuide
 */
export interface CloudstackInstructionGuide {
  content: CloudstackContent[]
  language: string
  sections: CloudstackSection[]
  title: string
}

/**
 * Section
 */
export interface CloudstackSection {
  content: CloudstackContent[]
  steps: CloudstackStep[]
  title: string
}

/**
 * Stack
 */
export interface CloudstackStack {
  commit: string
  description: string
  gitRepository: string
  instructions: CloudstackInstructionGuide[]
  name: string
  release: string
  uuid: string
}

/**
 * Step
 */
export interface CloudstackStep {
  content: CloudstackContent[]
  title: string
}

/**
 * Container
 */
export interface CloudstorageContainer {
  id: string
  name: string
  region: string
  storedBytes: number
  storedObjects: number
}

/**
 * ContainerAccess
 */
export interface CloudstorageContainerAccess {
  endpoints: CloudstorageEndpoint[]
  token: string
}

/**
 * ContainerDetail
 */
export interface CloudstorageContainerDetail {
  archive: boolean
  containerType: CloudstorageType
  cors: string[]
  name: string
  objects: CloudstorageContainerObject[]
  public: boolean
  region: string
  staticUrl: string
  storedBytes: number
  storedObjects: number
}

/**
 * ContainerObject
 */
export interface CloudstorageContainerObject {
  contentType: string
  lastModified: string
  name: string
  retrievalDelay: number
  retrievalState: CloudstorageRetrievalState
  size: number
}

/**
 * ContainerObjectTempURL
 */
export interface CloudstorageContainerObjectTempURL {
  expirationDate: string
  getURL: string
}

/**
 * Endpoint
 */
export interface CloudstorageEndpoint {
  region: string
  url: string
}

/*
 * RetrievalStateEnum
 */
export enum CloudstorageRetrievalState {
  SEALED = 'sealed',
  UNSEALING = 'unsealing',
  UNSEALED = 'unsealed'
}

/*
 * RightEnum
 */
export enum CloudstorageRight {
  ALL = 'all',
  READ = 'read',
  WRITE = 'write'
}

/*
 * TypeEnum
 */
export enum CloudstorageType {
  STATIC = 'static',
  PUBLIC = 'public',
  PRIVATE = 'private'
}

/**
 * Details about storage pricing
 */
export interface CloudStoragePrice {
  monthlyPrice: OrderPrice
  price: OrderPrice
  region: string
}

/*
 * PaymentTypeEnum
 */
export enum CloudusagePaymentType {
  PRE = 'pre',
  POST = 'post'
}

/**
 * Period
 */
export interface CloudusagePeriod {
  from: string
  to: string
}

/**
 * UsageBill
 */
export interface CloudusageUsageBill {
  bill_id: string
  credit: any
  part: any
  payment_type: CloudusagePaymentType
  total: any
}

/**
 * UsageCurrent
 */
export interface CloudusageUsageCurrent {
  hourlyUsage?: CloudbillingViewHourlyResources
  lastUpdate: string
  monthlyUsage?: CloudbillingViewMonthlyResources
  period: CloudusagePeriod
}

/**
 * UsageCurrentBills
 */
export interface CloudusageUsageCurrentBills {
  bills: CloudusageUsageBill[]
}

/**
 * UsageForecast
 */
export interface CloudusageUsageForecast {
  hourlyUsage?: CloudbillingViewHourlyResources
  lastUpdate: string
  monthlyUsage?: CloudbillingViewMonthlyResources
  period: CloudusagePeriod
  usableCredits?: CloudbillingViewUsedCredits
}

/**
 * UsageHistory
 */
export interface CloudusageUsageHistory {
  id: string
  lastUpdate: string
  period: CloudusagePeriod
}

/**
 * UsageHistoryDetail
 */
export interface CloudusageUsageHistoryDetail {
  hourlyUsage?: CloudbillingViewHourlyResources
  id: string
  lastUpdate: string
  monthlyUsage?: CloudbillingViewMonthlyResources
  period: CloudusagePeriod
}

/**
 * UsageHistoryDetailBills
 */
export interface CloudusageUsageHistoryDetailBills {
  bills: CloudusageUsageBill[]
}

/**
 * Openrc
 */
export interface ClouduserOpenrc {
  content: string
}

/*
 * OpenrcVersionEnum
 */
export enum ClouduserOpenrcVersion {
  V2_0 = 'v2.0',
  V3 = 'v3'
}

/**
 * Rclone
 */
export interface ClouduserRclone {
  content: string
}

/*
 * RoleEnum
 */
export enum ClouduserRole {
  ADMIN = 'admin',
  AUTHENTICATION = 'authentication',
  ADMINISTRATOR = 'administrator',
  COMPUTE_OPERATOR = 'compute_operator',
  INFRASTRUCTURE_SUPERVISOR = 'infrastructure_supervisor',
  NETWORK_SECURITY_OPERATOR = 'network_security_operator',
  NETWORK_OPERATOR = 'network_operator',
  BACKUP_OPERATOR = 'backup_operator',
  IMAGE_OPERATOR = 'image_operator',
  VOLUME_OPERATOR = 'volume_operator',
  OBJECTSTORE_OPERATOR = 'objectstore_operator'
}

/**
 * User
 */
export interface ClouduserUser {
  creationDate: string
  description: string
  id: number
  roles: CloudroleRole[]
  status: ClouduserUserStatus
  username: string
}

/**
 * UserDetail
 */
export interface ClouduserUserDetail {
  creationDate: string
  description: string
  id: number
  password: string
  roles: CloudroleRole[]
  status: ClouduserUserStatus
  username: string
}

/*
 * UserStatusEnum
 */
export enum ClouduserUserStatus {
  CREATING = 'creating',
  OK = 'ok',
  DELETING = 'deleting',
  DELETED = 'deleted'
}

/**
 * Snapshot
 */
export interface CloudvolumeSnapshot {
  creationDate: string
  description: string
  id: string
  name: string
  planCode?: string
  region: string
  size: number
  status: CloudvolumeSnapshotStatus
  volumeId: string
}

/*
 * SnapshotStatusEnum
 */
export enum CloudvolumeSnapshotStatus {
  CREATING = 'creating',
  AVAILABLE = 'available',
  DELETING = 'deleting',
  ERROR = 'error',
  ERROR_DELETING = 'error_deleting'
}

/**
 * Volume
 */
export interface CloudvolumeVolume {
  attachedTo: string[]
  bootable: boolean
  creationDate: string
  description: string
  id: string
  name: string
  planCode?: string
  region: string
  size: number
  status: string
  type: CloudvolumeVolumeType
}

/*
 * VolumeTypeEnum
 */
export enum CloudvolumeVolumeType {
  CLASSIC = 'classic',
  HIGH_SPEED = 'high-speed'
}

/**
 * Details about volume pricing
 */
export interface CloudVolumePrice {
  monthlyPrice: OrderPrice
  price: OrderPrice
  region: string
  volumeName: string
}

/**
 * A vRack allows to connect your OVH infrastructures accross products and datacenters
 */
export interface CloudVrack {
  description: string
  id: string
  name: string
}

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
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
 * Price with its currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/**
 * Cloud Archives Account
 */
export interface PcaAccount {
  domain: string
  host: string
  login: string
  password: string
  sshkey?: string
}

/**
 * cloud archives billing
 */
export interface PcaBilling {
  billed: boolean
  date: string
  id: number
  quantity: number
  reference: CloudpcaBillingRef
  total: number
}

/**
 * cloud archives files
 */
export interface PcaFile {
  id: string
  MD5: string
  name: string
  SHA1: string
  SHA256: string
  size: number
  state: string
  type: string
}

/**
 * cloud archives sessions
 */
export interface PcaSession {
  endDate?: string
  id: string
  login: string
  name: string
  size: number
  srcIp?: string
  startDate: string
  state: CloudpcaSessionState
}

/**
 * cloud archives tasks
 */
export interface PcaTask {
  comment?: string
  function: CloudpcaFunctionType
  id: string
  ipAddress?: string
  login: string
  status: CloudpcaTaskState
  todoDate: string
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


export class Cloud {
  constructor(private client: Client) {}

  /**
   * Operations about the PUBLICCLOUD service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/cloud`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Operations about the PUBLICCLOUD service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca#GET)
   */
  /*
  ListAvailableServices(serviceName: string): Promise<string[]> {
    let url = `/cloud/${serviceName}/pca`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Cloud Archives Account [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D#GET)
   */
  GetThisObjectProperties(pcaServiceName: string, serviceName: string): Promise<PcaAccount> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}`

    return this.client.request<PcaAccount>('GET', url)
  }

  /**
   * Cloud Archives Account [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D#PUT)
   */
  AlterThisObjectProperties(pcaServiceName: string, serviceName: string, payload: PcaAccount): Promise<void> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the pca.Billing objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/billing#GET)
   */
  CloudArchivesBillingItems(pcaServiceName: string, serviceName: string, billed?: boolean, dateFrom?: string, dateTo?: string): Promise<number[]> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/billing?`

    const queryParams = new QueryParams()
    if (billed) { queryParams.set('billed', billed.toString()) }
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * cloud archives billing [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/billing/%7BbillingId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingId: number, pcaServiceName: string, serviceName: string): Promise<PcaBilling> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/billing/${billingId}`

    return this.client.request<PcaBilling>('GET', url)
  }
  */

  /**
   * Details about a Service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(pcaServiceName: string, serviceName: string): Promise<ServicesService> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(pcaServiceName: string, serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the pca.Session objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions#GET)
   */
  CloudArchivesSessionsForAccount(pcaServiceName: string, serviceName: string, name?: string): Promise<string[]> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * cloud archives sessions [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D#GET)
   */
  /*
  GetThisObjectProperties(pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaSession> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}`

    return this.client.request<PcaSession>('GET', url)
  }
  */

  /**
   * cloud archives sessions [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(pcaServiceName: string, serviceName: string, sessionId: string, payload: PcaSession): Promise<void> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * cloud archives sessions [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D#DELETE)
   */
  CreateADeleteTaskForAllFilesInSession(pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaTask> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}`

    return this.client.request<PcaTask>('DELETE', url)
  }

  /**
   * List the pca.File objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D/files#GET)
   */
  CloudArchivesFilesInSession(pcaServiceName: string, serviceName: string, sessionId: string, name?: string): Promise<string[]> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}/files?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * cloud archives files [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D/files/%7BfileId%7D#GET)
   */
  /*
  GetThisObjectProperties(fileId: string, pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaFile> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}/files/${fileId}`

    return this.client.request<PcaFile>('GET', url)
  }
  */

  /**
   * restore operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D/restore#POST)
   */
  CreateARestoreTaskForSession(pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaTask> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}/restore`

    return this.client.request<PcaTask>('POST', url)
  }

  /**
   * List the pca.Task objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/tasks#GET)
   */
  CloudArchivesTasksForAccount(pcaServiceName: string, serviceName: string, _function?: CloudpcaFunctionType, status?: CloudpcaTaskState, todoDateFrom?: string, todoDateTo?: string): Promise<string[]> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/tasks?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }
    if (todoDateFrom) { queryParams.set('todoDate.from', todoDateFrom.toString()) }
    if (todoDateTo) { queryParams.set('todoDate.to', todoDateTo.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the pca.Task objects [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/tasks#POST)
   */
  CreateACloudArchivesTask(fileIds: string[], pcaServiceName: string, serviceName: string, sessionId: string, taskFunction: CloudpcaTaskType): Promise<PcaTask> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/tasks`

    return this.client.request<PcaTask>('POST', url, {fileIds, sessionId, taskFunction})
  }

  /**
   * cloud archives tasks [DEPRECATED]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(pcaServiceName: string, serviceName: string, taskId: string): Promise<PcaTask> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/tasks/${taskId}`

    return this.client.request<PcaTask>('GET', url)
  }
  */

  /**
   * usage operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/usage#GET)
   */
  ViewAccountCurrentTotalSessionsUsageBytes(pcaServiceName: string, serviceName: string): Promise<number> {
    let url = `/cloud/${serviceName}/pca/${pcaServiceName}/usage`

    return this.client.request<number>('GET', url)
  }

  /**
   * Get agreements related to a product [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/agreements#GET)
   */
  GetAgreementsRelatedToAProduct(product: CloudprojectProductName): Promise<CloudprojectProductAgreements> {
    let url = `/cloud/agreements?`

    const queryParams = new QueryParams()
    if (product) { queryParams.set('product', product.toString()) }

    return this.client.request<CloudprojectProductAgreements>('GET', url+queryParams.toString())
  }

  /**
   * Start a new cloud project [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/createProject#POST)
   */
  StartANewCloudProject(credit?: number, description?: string, voucher?: string): Promise<CloudprojectNewProject> {
    let url = `/cloud/createProject`

    return this.client.request<CloudprojectNewProject>('POST', url, {credit, description, voucher})
  }

  /**
   * Get information about a cloud project creation [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/createProjectInfo#GET)
   */
  GetInformationAboutACloudProjectCreation(voucher?: string): Promise<CloudprojectNewProjectInfo> {
    let url = `/cloud/createProjectInfo?`

    const queryParams = new QueryParams()
    if (voucher) { queryParams.set('voucher', voucher.toString()) }

    return this.client.request<CloudprojectNewProjectInfo>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/order#GET)
   */
  GetAllCloudPendingOrders(planCode?: string): Promise<CloudorderOrder[]> {
    let url = `/cloud/order?`

    const queryParams = new QueryParams()
    if (planCode) { queryParams.set('planCode', planCode) }

    return this.client.request<CloudorderOrder[]>('GET', url+queryParams.toString())
  }

  /**
   * Get services prices [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/price#GET)
   */
  GetServicesPrices(flavorId?: string, region?: string): Promise<CloudPrice> {
    let url = `/cloud/price?`

    const queryParams = new QueryParams()
    if (flavorId) { queryParams.set('flavorId', flavorId) }
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudPrice>('GET', url+queryParams.toString())
  }

  /**
   * Operations about the PUBLICCLOUD service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/cloud/project`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Operations about the PUBLICCLOUD service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<CloudProject> {
    let url = `/cloud/project/${serviceName}`

    return this.client.request<CloudProject>('GET', url)
  }
  */

  /**
   * Operations about the PUBLICCLOUD service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: CloudProject): Promise<void> {
    let url = `/cloud/project/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the cloud.Acl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl#GET)
   */
  GetACLOnYourCloudProject(serviceName: string, type?: CloudAclType): Promise<string[]> {
    let url = `/cloud/project/${serviceName}/acl?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the cloud.Acl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl#POST)
   */
  CreateNewACL(accountId: string, serviceName: string, type: CloudAclType): Promise<CloudAcl> {
    let url = `/cloud/project/${serviceName}/acl`

    return this.client.request<CloudAcl>('POST', url, {accountId, type})
  }

  /**
   * Cloud ACL [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl/%7BaccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(accountId: string, serviceName: string): Promise<CloudAcl> {
    let url = `/cloud/project/${serviceName}/acl/${accountId}`

    return this.client.request<CloudAcl>('GET', url)
  }
  */

  /**
   * Cloud ACL [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl/%7BaccountId%7D#DELETE)
   */
  DeleteACL(accountId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/acl/${accountId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/activateMonthlyBilling#POST)
   */
  ActivateMonthlyBillingOnMultipleInstances(instances: CloudinstanceMonthlyInstanceBulkParams[], serviceName: string): Promise<CloudinstanceInstanceDetail[]> {
    let url = `/cloud/project/${serviceName}/activateMonthlyBilling`

    return this.client.request<CloudinstanceInstanceDetail[]>('POST', url, {instances})
  }

  /**
   * List the cloud.Alerting objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting#GET)
   */
  ManageAlertsOnYourConsumption(serviceName: string): Promise<string[]> {
    let url = `/cloud/project/${serviceName}/alerting`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the cloud.Alerting objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting#POST)
   */
  AddNewAlert(delay: CloudAlertingDelay, email: string, monthlyThreshold: number, serviceName: string): Promise<CloudAlerting> {
    let url = `/cloud/project/${serviceName}/alerting`

    return this.client.request<CloudAlerting>('POST', url, {delay, email, monthlyThreshold})
  }

  /**
   * Cloud alerting consumption [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: string, serviceName: string): Promise<CloudAlerting> {
    let url = `/cloud/project/${serviceName}/alerting/${id}`

    return this.client.request<CloudAlerting>('GET', url)
  }
  */

  /**
   * Cloud alerting consumption [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: string, serviceName: string, payload: CloudAlerting): Promise<void> {
    let url = `/cloud/project/${serviceName}/alerting/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Cloud alerting consumption [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D#DELETE)
   */
  DeleteAlerting(id: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/alerting/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the cloud.AlertingAlert objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D/alert#GET)
   */
  SeeAlerts(id: string, serviceName: string): Promise<number[]> {
    let url = `/cloud/project/${serviceName}/alerting/${id}/alert`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Cloud alert on your consumption [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D/alert/%7BalertId%7D#GET)
   */
  /*
  GetThisObjectProperties(alertId: number, id: string, serviceName: string): Promise<CloudAlertingAlert> {
    let url = `/cloud/project/${serviceName}/alerting/${id}/alert/${alertId}`

    return this.client.request<CloudAlertingAlert>('GET', url)
  }
  */

  /**
   * bill operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/bill#GET)
   */
  GetYourProjectBills(from: string, serviceName: string, to: string): Promise<CloudprojectBill[]> {
    let url = `/cloud/project/${serviceName}/bill?`

    const queryParams = new QueryParams()
    if (from) { queryParams.set('from', from.toString()) }
    if (to) { queryParams.set('to', to.toString()) }

    return this.client.request<CloudprojectBill[]>('GET', url+queryParams.toString())
  }

  /**
   * cancel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/cancel#POST)
   */
  CancelProjectCreation(serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/cancel`

    return this.client.request<void>('POST', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/cloud/project/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/cloud/project/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * consumption operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/consumption#GET)
   */
  GetYourProjectConsumption(from: string, serviceName: string, to: string): Promise<CloudprojectProjectUsage> {
    let url = `/cloud/project/${serviceName}/consumption?`

    const queryParams = new QueryParams()
    if (from) { queryParams.set('from', from.toString()) }
    if (to) { queryParams.set('to', to.toString()) }

    return this.client.request<CloudprojectProjectUsage>('GET', url+queryParams.toString())
  }

  /**
   * Manage registries [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry#GET)
   */
  ListRegistriesOfTheProject(serviceName: string): Promise<CloudcontainerRegistryregistryRegistry[]> {
    let url = `/cloud/project/${serviceName}/containerRegistry`

    return this.client.request<CloudcontainerRegistryregistryRegistry[]>('GET', url)
  }

  /**
   * Manage registries [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry#POST)
   */
  CreateANewRegistry(name: string, region: CloudcontainerRegistryregistryRegion, serviceName: string): Promise<CloudcontainerRegistryregistryRegistry> {
    let url = `/cloud/project/${serviceName}/containerRegistry`

    return this.client.request<CloudcontainerRegistryregistryRegistry>('POST', url, {name, region})
  }

  /**
   * Manage a Docker registry [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D#DELETE)
   */
  DeleteARegistry(registryID: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Manage a Docker registry [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D#GET)
   */
  GetTheRegistryInformation(registryID: string, serviceName: string): Promise<CloudcontainerRegistryregistryRegistry> {
    let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}`

    return this.client.request<CloudcontainerRegistryregistryRegistry>('GET', url)
  }

  /**
   * Manage a Docker registry [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D#PUT)
   */
  UpdateTheRegistry(name: string, registryID: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}`

    return this.client.request<void>('PUT', url, {name})
  }

  /**
   * Manage users [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D/users#GET)
   */
  ListRegistryUser(registryID: string, serviceName: string): Promise<CloudcontainerRegistryuserUser[]> {
    let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}/users`

    return this.client.request<CloudcontainerRegistryuserUser[]>('GET', url)
  }

  /**
   * Manage users [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D/users#POST)
   */
  CreateANewRegistryUser(registryID: string, serviceName: string, email?: string, login?: string): Promise<CloudcontainerRegistryuserUser> {
    let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}/users`

    return this.client.request<CloudcontainerRegistryuserUser>('POST', url, {email, login})
  }

  /**
   * Manage users [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D/users/%7BuserID%7D#DELETE)
   */
  DeleteARegistryUser(registryID: string, serviceName: string, userID: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}/users/${userID}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the cloud.Credit objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/credit#GET)
   */
  GetYourCredit(serviceName: string): Promise<number[]> {
    let url = `/cloud/project/${serviceName}/credit`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the cloud.Credit objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/credit#POST)
   */
  AddCreditToYourProject(code: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/credit`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * Cloud credit [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/credit/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, serviceName: string): Promise<CloudCredit> {
    let url = `/cloud/project/${serviceName}/credit/${id}`

    return this.client.request<CloudCredit>('GET', url)
  }
  */

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/flavor#GET)
   */
  GetFlavors(serviceName: string, region?: string): Promise<CloudflavorFlavor[]> {
    let url = `/cloud/project/${serviceName}/flavor?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudflavorFlavor[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/flavor/%7BflavorId%7D#GET)
   */
  GetFlavor(flavorId: string, serviceName: string): Promise<CloudflavorFlavor> {
    let url = `/cloud/project/${serviceName}/flavor/${flavorId}`

    return this.client.request<CloudflavorFlavor>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/forecast#GET)
   */
  GetYourConsumptionForecast(serviceName: string, toDate: string): Promise<CloudforecastProjectForecast> {
    let url = `/cloud/project/${serviceName}/forecast?`

    const queryParams = new QueryParams()
    if (toDate) { queryParams.set('toDate', toDate.toString()) }

    return this.client.request<CloudforecastProjectForecast>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/image#GET)
   */
  GetImages(serviceName: string, flavorType?: string, osType?: CloudimageOSType, region?: string): Promise<CloudimageImage[]> {
    let url = `/cloud/project/${serviceName}/image?`

    const queryParams = new QueryParams()
    if (flavorType) { queryParams.set('flavorType', flavorType) }
    if (osType) { queryParams.set('osType', osType.toString()) }
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudimageImage[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/image/%7BimageId%7D#GET)
   */
  GetImage(imageId: string, serviceName: string): Promise<CloudimageImage> {
    let url = `/cloud/project/${serviceName}/image/${imageId}`

    return this.client.request<CloudimageImage>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance#GET)
   */
  GetInstances(serviceName: string, region?: string): Promise<CloudinstanceInstance[]> {
    let url = `/cloud/project/${serviceName}/instance?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudinstanceInstance[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance#POST)
   */
  CreateANewInstance(flavorId: string, name: string, region: string, serviceName: string, autobackup?: CloudinstanceAutoBackup, groupId?: string, imageId?: string, monthlyBilling?: boolean, networks?: CloudinstanceNetworkParams[], sshKeyId?: string, userData?: string, volumeId?: string): Promise<CloudinstanceInstanceDetail> {
    let url = `/cloud/project/${serviceName}/instance`

    return this.client.request<CloudinstanceInstanceDetail>('POST', url, {flavorId, name, region, autobackup, groupId, imageId, monthlyBilling, networks, sshKeyId, userData, volumeId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D#DELETE)
   */
  DeleteAnInstance(instanceId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D#GET)
   */
  GetInstance(instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}`

    return this.client.request<CloudinstanceInstanceDetail>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D#PUT)
   */
  AlterAnInstance(instanceId: string, instanceName: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}`

    return this.client.request<void>('PUT', url, {instanceName})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/activeMonthlyBilling#POST)
   */
  ActivateMonthlyBillingOnInstance(instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/activeMonthlyBilling`

    return this.client.request<CloudinstanceInstanceDetail>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/applicationAccess#POST)
   */
  ReturnInitialCredentialsOfApplicationsInstalledFromPublicImage(instanceId: string, serviceName: string): Promise<CloudinstanceApplicationAccess> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/applicationAccess`

    return this.client.request<CloudinstanceApplicationAccess>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface#GET)
   */
  GetInterfaces(instanceId: string, serviceName: string): Promise<CloudinstanceInterfaceInterface[]> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface`

    return this.client.request<CloudinstanceInterfaceInterface[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface#POST)
   */
  CreateInterfaceOnAnInstanceAndAttachedItToANetwork(instanceId: string, networkId: string, serviceName: string, ip?: string): Promise<CloudinstanceInterfaceInterface> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface`

    return this.client.request<CloudinstanceInterfaceInterface>('POST', url, {networkId, ip})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface/%7BinterfaceId%7D#DELETE)
   */
  DeleteAnInterface(instanceId: string, interfaceId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface/${interfaceId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface/%7BinterfaceId%7D#GET)
   */
  GetInterface(instanceId: string, interfaceId: string, serviceName: string): Promise<CloudinstanceInterfaceInterface> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface/${interfaceId}`

    return this.client.request<CloudinstanceInterfaceInterface>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/monitoring#GET)
   */
  ReturnManyStatisticsAboutTheVirtualMachineForAGivenPeriod(instanceId: string, period: CloudinstanceMetricsPeriod, serviceName: string, type: CloudinstanceMetricsType): Promise<CloudinstanceInstanceMetrics> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/monitoring?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<CloudinstanceInstanceMetrics>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/reboot#POST)
   */
  RebootAnInstance(instanceId: string, serviceName: string, type: CloudinstanceRebootType): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/reboot`

    return this.client.request<void>('POST', url, {type})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/reinstall#POST)
   */
  ReinstallAnInstance(imageId: string, instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/reinstall`

    return this.client.request<CloudinstanceInstanceDetail>('POST', url, {imageId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/rescueMode#POST)
   */
  EnableOrDisableRescueMode(instanceId: string, rescue: boolean, serviceName: string, imageId?: string): Promise<CloudinstanceRescueAdminPassword> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/rescueMode`

    return this.client.request<CloudinstanceRescueAdminPassword>('POST', url, {rescue, imageId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/resize#POST)
   */
  MigrateYourInstanceToAnotherFlavor(flavorId: string, instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/resize`

    return this.client.request<CloudinstanceInstanceDetail>('POST', url, {flavorId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/resume#POST)
   */
  ResumeASuspendedInstance(instanceId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/resume`

    return this.client.request<void>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/snapshot#POST)
   */
  SnapshotAnInstance(instanceId: string, serviceName: string, snapshotName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/snapshot`

    return this.client.request<void>('POST', url, {snapshotName})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/start#POST)
   */
  StartAnInstance(instanceId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/start`

    return this.client.request<void>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/stop#POST)
   */
  StopAnInstance(instanceId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/stop`

    return this.client.request<void>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/vnc#POST)
   */
  GetVNCAccessToYourInstance(instanceId: string, serviceName: string): Promise<CloudinstanceInstanceVnc> {
    let url = `/cloud/project/${serviceName}/instance/${instanceId}/vnc`

    return this.client.request<CloudinstanceInstanceVnc>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/bulk#POST)
   */
  CreateMultipleInstances(flavorId: string, name: string, number: number, region: string, serviceName: string, autobackup?: CloudinstanceAutoBackup, groupId?: string, imageId?: string, monthlyBilling?: boolean, networks?: CloudinstanceNetworkBulkParams[], sshKeyId?: string, userData?: string, volumeId?: string): Promise<CloudinstanceInstance[]> {
    let url = `/cloud/project/${serviceName}/instance/bulk`

    return this.client.request<CloudinstanceInstance[]>('POST', url, {flavorId, name, number, region, autobackup, groupId, imageId, monthlyBilling, networks, sshKeyId, userData, volumeId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group#GET)
   */
  GetTheDetailOfAGroup(serviceName: string, region?: string): Promise<CloudinstancegroupInstanceGroup[]> {
    let url = `/cloud/project/${serviceName}/instance/group?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudinstancegroupInstanceGroup[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group#POST)
   */
  CreateAGroup(name: string, region: string, serviceName: string, type: CloudinstancegroupInstanceGroupType): Promise<CloudinstancegroupInstanceGroup> {
    let url = `/cloud/project/${serviceName}/instance/group`

    return this.client.request<CloudinstancegroupInstanceGroup>('POST', url, {name, region, type})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group/%7BgroupId%7D#DELETE)
   */
  DeleteAGroup(groupId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/instance/group/${groupId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group/%7BgroupId%7D#GET)
   */
  GetAllGroups(groupId: string, serviceName: string, region?: string): Promise<CloudinstancegroupInstanceGroup> {
    let url = `/cloud/project/${serviceName}/instance/group/${groupId}?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudinstancegroupInstanceGroup>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip#GET)
   */
  GetIps(serviceName: string): Promise<CloudipCloudIp[]> {
    let url = `/cloud/project/${serviceName}/ip`

    return this.client.request<CloudipCloudIp[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip/failover#GET)
   */
  GetFailoverIps(serviceName: string): Promise<CloudipFailoverIp[]> {
    let url = `/cloud/project/${serviceName}/ip/failover`

    return this.client.request<CloudipFailoverIp[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip/failover/%7Bid%7D#GET)
   */
  GetFailoverIp(id: string, serviceName: string): Promise<CloudipFailoverIp> {
    let url = `/cloud/project/${serviceName}/ip/failover/${id}`

    return this.client.request<CloudipFailoverIp>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip/failover/%7Bid%7D/attach#POST)
   */
  AttachFailoverIpToAnInstance(id: string, instanceId: string, serviceName: string): Promise<CloudipFailoverIp> {
    let url = `/cloud/project/${serviceName}/ip/failover/${id}/attach`

    return this.client.request<CloudipFailoverIp>('POST', url, {instanceId})
  }

  /**
   * Manage your clusters [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube#GET)
   */
  ListYourManagedKubernetesClusters(serviceName: string): Promise<string[]> {
    let url = `/cloud/project/${serviceName}/kube`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Manage your clusters [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube#POST)
   */
  CreateANewManagedKubernetesCluster(region: CloudkubeRegion, serviceName: string, name?: string, version?: CloudkubeVersion): Promise<CloudkubeCluster> {
    let url = `/cloud/project/${serviceName}/kube`

    return this.client.request<CloudkubeCluster>('POST', url, {region, name, version})
  }

  /**
   * Manage your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D#GET)
   */
  GetInformationAboutYourManagedKubernetesCluster(kubeId: string, serviceName: string): Promise<CloudkubeCluster> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}`

    return this.client.request<CloudkubeCluster>('GET', url)
  }

  /**
   * Manage your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D#PUT)
   */
  UpdateInformationAboutYourManagedKubernetesCluster(kubeId: string, name: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}`

    return this.client.request<void>('PUT', url, {name})
  }

  /**
   * Manage your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D#DELETE)
   */
  DeleteYourManagedKubernetesCluster(kubeId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List all flavors available [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/flavors#GET)
   */
  ListAllFlavorsAvailable(kubeId: string, serviceName: string): Promise<CloudkubeFlavor[]> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/flavors`

    return this.client.request<CloudkubeFlavor[]>('GET', url)
  }

  /**
   * Get your cluster configuration [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/kubeconfig#POST)
   */
  GenerateKubeconfigFile(kubeId: string, serviceName: string): Promise<CloudkubeKubeconfig> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/kubeconfig`

    return this.client.request<CloudkubeKubeconfig>('POST', url)
  }

  /**
   * Manage your nodes [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node#GET)
   */
  ListYourNodes(kubeId: string, serviceName: string): Promise<CloudkubeNode[]> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/node`

    return this.client.request<CloudkubeNode[]>('GET', url)
  }

  /**
   * Manage your nodes [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node#POST)
   */
  DeployANodeForYourCluster(flavorName: string, kubeId: string, serviceName: string, name?: string): Promise<CloudkubeNode> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/node`

    return this.client.request<CloudkubeNode>('POST', url, {flavorName, name})
  }

  /**
   * Manage a single node on your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node/%7BnodeId%7D#DELETE)
   */
  DeleteANodeOnYourCluster(kubeId: string, nodeId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/node/${nodeId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Manage a single node on your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node/%7BnodeId%7D#GET)
   */
  GetInformationOnASpecificNodeOnYourCluster(kubeId: string, nodeId: string, serviceName: string): Promise<CloudkubeNode> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/node/${nodeId}`

    return this.client.request<CloudkubeNode>('GET', url)
  }

  /**
   * Reset your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/reset#POST)
   */
  ResetCluster_AllKubernetesDataWillBeErasedPodsServicesConfigurationEtcNodesWillBeEitherDeletedOrReinstalled(kubeId: string, serviceName: string, version?: CloudkubeVersion, workerNodesPolicy?: CloudkubeResetWorkerNodesPolicy): Promise<void> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/reset`

    return this.client.request<void>('POST', url, {version, workerNodesPolicy})
  }

  /**
   * Update cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/update#POST)
   */
  ForceClusterAndNodeUpdateToTheLatestPatchWithinMinorVersionOrNextMinorVersion(kubeId: string, serviceName: string, strategy?: CloudkubeUpdateStrategy): Promise<void> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/update`

    return this.client.request<void>('POST', url, {strategy})
  }

  /**
   * Manage the update policy of your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/updatePolicy#PUT)
   */
  ChangeTheUpdatePolicyOfYourCluster(kubeId: string, serviceName: string, updatePolicy: CloudkubeUpdatePolicy): Promise<void> {
    let url = `/cloud/project/${serviceName}/kube/${kubeId}/updatePolicy`

    return this.client.request<void>('PUT', url, {updatePolicy})
  }

  /**
   * List Kubernetes available regions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/regions#GET)
   */
  ListKubernetesAvailableRegions(serviceName: string): Promise<CloudkubeRegion[]> {
    let url = `/cloud/project/${serviceName}/kube/regions`

    return this.client.request<CloudkubeRegion[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/migration#GET)
   */
  GetPlannedMigrations(serviceName: string): Promise<CloudmigrationMigration[]> {
    let url = `/cloud/project/${serviceName}/migration`

    return this.client.request<CloudmigrationMigration[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/migration/%7BmigrationId%7D#GET)
   */
  GetPlannedMigration(migrationId: string, serviceName: string): Promise<CloudmigrationMigration> {
    let url = `/cloud/project/${serviceName}/migration/${migrationId}`

    return this.client.request<CloudmigrationMigration>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/migration/%7BmigrationId%7D#PUT)
   */
  UpdatePlannedMigration(date: string, migrationId: string, serviceName: string): Promise<CloudmigrationMigration> {
    let url = `/cloud/project/${serviceName}/migration/${migrationId}`

    return this.client.request<CloudmigrationMigration>('PUT', url, {date})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private#GET)
   */
  GetPrivateNetworks(serviceName: string): Promise<CloudnetworkNetwork[]> {
    let url = `/cloud/project/${serviceName}/network/private`

    return this.client.request<CloudnetworkNetwork[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private#POST)
   */
  CreateANewNetwork(name: string, serviceName: string, regions?: string[], vlanId?: number): Promise<CloudnetworkNetwork> {
    let url = `/cloud/project/${serviceName}/network/private`

    return this.client.request<CloudnetworkNetwork>('POST', url, {name, regions, vlanId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D#DELETE)
   */
  DeletePrivateNetwork(networkId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/network/private/${networkId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D#GET)
   */
  GetPrivateNetwork(networkId: string, serviceName: string): Promise<CloudnetworkNetwork> {
    let url = `/cloud/project/${serviceName}/network/private/${networkId}`

    return this.client.request<CloudnetworkNetwork>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D#PUT)
   */
  RenamePrivateNetwork(name: string, networkId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/network/private/${networkId}`

    return this.client.request<void>('PUT', url, {name})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/region#POST)
   */
  ActivatePrivateNetworkInANewRegion(networkId: string, region: string, serviceName: string): Promise<CloudnetworkNetwork> {
    let url = `/cloud/project/${serviceName}/network/private/${networkId}/region`

    return this.client.request<CloudnetworkNetwork>('POST', url, {region})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/subnet#GET)
   */
  GetNetworkSubnets(networkId: string, serviceName: string): Promise<CloudnetworkSubnet[]> {
    let url = `/cloud/project/${serviceName}/network/private/${networkId}/subnet`

    return this.client.request<CloudnetworkSubnet[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/subnet#POST)
   */
  CreateANewNetworkSubnet(dhcp: boolean, end: string, network: string, networkId: string, noGateway: boolean, region: string, serviceName: string, start: string): Promise<CloudnetworkSubnet> {
    let url = `/cloud/project/${serviceName}/network/private/${networkId}/subnet`

    return this.client.request<CloudnetworkSubnet>('POST', url, {dhcp, end, network, noGateway, region, start})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/subnet/%7BsubnetId%7D#DELETE)
   */
  DeleteANetworkSubnet(networkId: string, serviceName: string, subnetId: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/network/private/${networkId}/subnet/${subnetId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/public#GET)
   */
  GetPublicNetworks(serviceName: string): Promise<CloudnetworkNetwork[]> {
    let url = `/cloud/project/${serviceName}/network/public`

    return this.client.request<CloudnetworkNetwork[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/openstackClient#POST)
   */
  GetOVHPlaygroundSessionToUseTheOpenstackTerminal(serviceName: string): Promise<CloudopenstackClientSession> {
    let url = `/cloud/project/${serviceName}/openstackClient`

    return this.client.request<CloudopenstackClientSession>('POST', url)
  }

  /**
   * Manage the operations on your Cloud Project [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/operation#GET)
   */
  ListYourOperations(serviceName: string): Promise<CloudOperation[]> {
    let url = `/cloud/project/${serviceName}/operation`

    return this.client.request<CloudOperation[]>('GET', url)
  }

  /**
   * Manage one of your operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/operation/%7BoperationId%7D#GET)
   */
  GetInformationAboutOneOperation(operationId: string, serviceName: string): Promise<CloudOperation> {
    let url = `/cloud/project/${serviceName}/operation/${operationId}`

    return this.client.request<CloudOperation>('GET', url)
  }

  /**
   * List your quota [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/quota#GET)
   */
  ListQuotas(serviceName: string): Promise<CloudquotaQuotas[]> {
    let url = `/cloud/project/${serviceName}/quota`

    return this.client.request<CloudquotaQuotas[]>('GET', url)
  }

  /**
   * Manage your regions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region#GET)
   */
  ListYourRegions(serviceName: string): Promise<string[]> {
    let url = `/cloud/project/${serviceName}/region`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Manage your regions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region#POST)
   */
  RequestAccessToARegion(region: string, serviceName: string): Promise<CloudRegion> {
    let url = `/cloud/project/${serviceName}/region`

    return this.client.request<CloudRegion>('POST', url, {region})
  }

  /**
   * Manage one of your region [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D#GET)
   */
  GetInformationAboutYourRegion(regionName: string, serviceName: string): Promise<CloudRegion> {
    let url = `/cloud/project/${serviceName}/region/${regionName}`

    return this.client.request<CloudRegion>('GET', url)
  }

  /**
   * Consult quotas [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/quota#GET)
   */
  /*
  ListQuotas(regionName: string, serviceName: string): Promise<CloudquotaQuotas> {
    let url = `/cloud/project/${serviceName}/region/${regionName}/quota`

    return this.client.request<CloudquotaQuotas>('GET', url)
  }
  */

  /**
   * Consult quotas [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/quota#POST)
   */
  ChangeProjectQuotasOnRegion(name: string, regionName: string, serviceName: string): Promise<CloudOperation> {
    let url = `/cloud/project/${serviceName}/region/${regionName}/quota`

    return this.client.request<CloudOperation>('POST', url, {name})
  }

  /**
   * Get allowed quotas [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/quota/allowed#GET)
   */
  GetAllowedQuotasOnRegion(regionName: string, serviceName: string): Promise<CloudquotaAllowedQuota[]> {
    let url = `/cloud/project/${serviceName}/region/${regionName}/quota/allowed`

    return this.client.request<CloudquotaAllowedQuota[]>('GET', url)
  }

  /**
   * Manage your automated backups [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup#GET)
   */
  ListYourAutomatedBackups(regionName: string, serviceName: string): Promise<CloudBackup[]> {
    let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup`

    return this.client.request<CloudBackup[]>('GET', url)
  }

  /**
   * Manage your automated backups [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup#POST)
   */
  CreateANewAutomatedBackup(cron: string, instanceId: string, name: string, regionName: string, rotation: number, serviceName: string, maxExecutionCount?: number): Promise<CloudBackup> {
    let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup`

    return this.client.request<CloudBackup>('POST', url, {cron, instanceId, name, rotation, maxExecutionCount})
  }

  /**
   * Manage a backup workflow process [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup/%7BbackupWorkflowId%7D#DELETE)
   */
  DeleteABackupWorkflowProcess(backupWorkflowId: string, regionName: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup/${backupWorkflowId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Manage a backup workflow process [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup/%7BbackupWorkflowId%7D#GET)
   */
  GetDetailsAboutABackupWorkflowProcess(backupWorkflowId: string, regionName: string, serviceName: string): Promise<CloudBackup> {
    let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup/${backupWorkflowId}`

    return this.client.request<CloudBackup>('GET', url)
  }

  /**
   * Manage the regions you can add on your project [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/regionAvailable#GET)
   */
  ListTheRegionsOnWhichYouCanAskAnAccessTo(serviceName: string): Promise<CloudAvailableRegion[]> {
    let url = `/cloud/project/${serviceName}/regionAvailable`

    return this.client.request<CloudAvailableRegion[]>('GET', url)
  }

  /**
   * retain operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/retain#POST)
   */
  DoNotExpireTheProjectAndRetainItYouWillHaveToPayForTheResourcesYouWillUseAfterUsingThisCall(serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/retain`

    return this.client.request<void>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/role#GET)
   */
  GetAllRoles(serviceName: string): Promise<CloudroleRoles> {
    let url = `/cloud/project/${serviceName}/role`

    return this.client.request<CloudroleRoles>('GET', url)
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/cloud/project/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/cloud/project/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/snapshot#GET)
   */
  GetSnapshots(serviceName: string, flavorType?: string, region?: string): Promise<CloudimageImage[]> {
    let url = `/cloud/project/${serviceName}/snapshot?`

    const queryParams = new QueryParams()
    if (flavorType) { queryParams.set('flavorType', flavorType) }
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudimageImage[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/snapshot/%7BsnapshotId%7D#DELETE)
   */
  DeleteASnapshot(serviceName: string, snapshotId: string): Promise<CloudimageImage> {
    let url = `/cloud/project/${serviceName}/snapshot/${snapshotId}`

    return this.client.request<CloudimageImage>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/snapshot/%7BsnapshotId%7D#GET)
   */
  GetSnapshotDetails(serviceName: string, snapshotId: string): Promise<CloudimageImage> {
    let url = `/cloud/project/${serviceName}/snapshot/${snapshotId}`

    return this.client.request<CloudimageImage>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey#GET)
   */
  GetSSHKeys(serviceName: string, region?: string): Promise<CloudsshkeySshKey[]> {
    let url = `/cloud/project/${serviceName}/sshkey?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudsshkeySshKey[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey#POST)
   */
  CreateSSHKey(name: string, publicKey: string, serviceName: string, region?: string): Promise<CloudsshkeySshKeyDetail> {
    let url = `/cloud/project/${serviceName}/sshkey`

    return this.client.request<CloudsshkeySshKeyDetail>('POST', url, {name, publicKey, region})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey/%7BkeyId%7D#DELETE)
   */
  DeleteSSHKey(keyId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/sshkey/${keyId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey/%7BkeyId%7D#GET)
   */
  GetSSHKey(keyId: string, serviceName: string): Promise<CloudsshkeySshKeyDetail> {
    let url = `/cloud/project/${serviceName}/sshkey/${keyId}`

    return this.client.request<CloudsshkeySshKeyDetail>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/stack#GET)
   */
  GetStacks(serviceName: string): Promise<CloudstackStack[]> {
    let url = `/cloud/project/${serviceName}/stack`

    return this.client.request<CloudstackStack[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/stack/%7BstackId%7D#GET)
   */
  GetStack(serviceName: string, stackId: string): Promise<CloudstackStack> {
    let url = `/cloud/project/${serviceName}/stack/${stackId}`

    return this.client.request<CloudstackStack>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/stack/%7BstackId%7D/client#POST)
   */
  GetOVHPlaygroundSessionWithAStackInstalledToUseTheOpenstackTerminal(serviceName: string, stackId: string): Promise<CloudopenstackClientSession> {
    let url = `/cloud/project/${serviceName}/stack/${stackId}/client`

    return this.client.request<CloudopenstackClientSession>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage#GET)
   */
  GetStorageContainers(serviceName: string): Promise<CloudstorageContainer[]> {
    let url = `/cloud/project/${serviceName}/storage`

    return this.client.request<CloudstorageContainer[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage#POST)
   */
  CreateContainer(archive: boolean, containerName: string, region: string, serviceName: string): Promise<CloudstorageContainer> {
    let url = `/cloud/project/${serviceName}/storage`

    return this.client.request<CloudstorageContainer>('POST', url, {archive, containerName, region})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D#DELETE)
   */
  DeleteContainer(containerId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D#GET)
   */
  GetStorageContainer(containerId: string, serviceName: string, noObjects?: boolean): Promise<CloudstorageContainerDetail> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}?`

    const queryParams = new QueryParams()
    if (noObjects) { queryParams.set('noObjects', noObjects.toString()) }

    return this.client.request<CloudstorageContainerDetail>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D#PUT)
   */
  UpdateYourStorageContainer(containerId: string, serviceName: string, containerType?: CloudstorageType): Promise<void> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}`

    return this.client.request<void>('PUT', url, {containerType})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/cors#DELETE)
   */
  DeleteCORSSupportOnYourContainer(containerId: string, origin: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}/cors?`

    const queryParams = new QueryParams()
    if (origin) { queryParams.set('origin', origin) }

    return this.client.request<void>('DELETE', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/cors#POST)
   */
  AddCORSSupportOnYourContainer(containerId: string, origin: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}/cors`

    return this.client.request<void>('POST', url, {origin})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/publicUrl#POST)
   */
  GetAPublicTemporaryURLToAccessToOneOfYourObject(containerId: string, expirationDate: string, objectName: string, serviceName: string): Promise<CloudstorageContainerObjectTempURL> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}/publicUrl`

    return this.client.request<CloudstorageContainerObjectTempURL>('POST', url, {expirationDate, objectName})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/static#POST)
   */
  DeployYourContainerFilesAsAStaticWebSite(containerId: string, serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}/static`

    return this.client.request<void>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/user#POST)
   */
  CreateOpenstackUserWithOnlyAccessToThisContainer(containerId: string, right: CloudstorageRight, serviceName: string, description?: string): Promise<ClouduserUserDetail> {
    let url = `/cloud/project/${serviceName}/storage/${containerId}/user`

    return this.client.request<ClouduserUserDetail>('POST', url, {right, description})
  }

  /**
   * Missing description [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/access#GET)
   */
  AccessToStorageAPI(serviceName: string): Promise<CloudstorageContainerAccess> {
    let url = `/cloud/project/${serviceName}/storage/access`

    return this.client.request<CloudstorageContainerAccess>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/access#POST)
   */
  /*
  AccessToStorageAPI(serviceName: string): Promise<CloudstorageContainerAccess> {
    let url = `/cloud/project/${serviceName}/storage/access`

    return this.client.request<CloudstorageContainerAccess>('POST', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/cloud/project/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * unleash operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/unleash#POST)
   */
  RequestMoreQuotaOnYourCloudProject(serviceName: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/unleash`

    return this.client.request<void>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/current#GET)
   */
  GetCurrentUsage(serviceName: string): Promise<CloudusageUsageCurrent> {
    let url = `/cloud/project/${serviceName}/usage/current`

    return this.client.request<CloudusageUsageCurrent>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/forecast#GET)
   */
  GetUsageForecast(serviceName: string): Promise<CloudusageUsageForecast> {
    let url = `/cloud/project/${serviceName}/usage/forecast`

    return this.client.request<CloudusageUsageForecast>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/history#GET)
   */
  UsageInformationOnYourProject(serviceName: string, from?: string, to?: string): Promise<CloudusageUsageHistory[]> {
    let url = `/cloud/project/${serviceName}/usage/history?`

    const queryParams = new QueryParams()
    if (from) { queryParams.set('from', from.toString()) }
    if (to) { queryParams.set('to', to.toString()) }

    return this.client.request<CloudusageUsageHistory[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/history/%7BusageId%7D#GET)
   */
  UsageInformationDetails(serviceName: string, usageId: string): Promise<CloudusageUsageHistoryDetail> {
    let url = `/cloud/project/${serviceName}/usage/history/${usageId}`

    return this.client.request<CloudusageUsageHistoryDetail>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user#GET)
   */
  GetAllUsers(serviceName: string): Promise<ClouduserUser[]> {
    let url = `/cloud/project/${serviceName}/user`

    return this.client.request<ClouduserUser[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user#POST)
   */
  CreateUser(serviceName: string, description?: string, role?: ClouduserRole, roles?: ClouduserRoleEnum[]): Promise<ClouduserUserDetail> {
    let url = `/cloud/project/${serviceName}/user`

    return this.client.request<ClouduserUserDetail>('POST', url, {description, role, roles})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D#DELETE)
   */
  DeleteUser(serviceName: string, userId: number): Promise<void> {
    let url = `/cloud/project/${serviceName}/user/${userId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D#GET)
   */
  GetUserDetails(serviceName: string, userId: number): Promise<ClouduserUser> {
    let url = `/cloud/project/${serviceName}/user/${userId}`

    return this.client.request<ClouduserUser>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/openrc#GET)
   */
  GetRCFileOfOpenStack(region: string, serviceName: string, userId: number, version?: ClouduserOpenrcVersion): Promise<ClouduserOpenrc> {
    let url = `/cloud/project/${serviceName}/user/${userId}/openrc?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }
    if (version) { queryParams.set('version', version.toString()) }

    return this.client.request<ClouduserOpenrc>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/rclone#GET)
   */
  GetRcloneConfigurationFile(region: string, serviceName: string, userId: number): Promise<ClouduserRclone> {
    let url = `/cloud/project/${serviceName}/user/${userId}/rclone?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<ClouduserRclone>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/regeneratePassword#POST)
   */
  RegenerateUserPassword(serviceName: string, userId: number): Promise<ClouduserUserDetail> {
    let url = `/cloud/project/${serviceName}/user/${userId}/regeneratePassword`

    return this.client.request<ClouduserUserDetail>('POST', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role#GET)
   */
  GetUserRoles(serviceName: string, userId: number): Promise<CloudroleRole[]> {
    let url = `/cloud/project/${serviceName}/user/${userId}/role`

    return this.client.request<CloudroleRole[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role#POST)
   */
  AddARoleToAUser(roleId: string, serviceName: string, userId: number): Promise<ClouduserUserDetail> {
    let url = `/cloud/project/${serviceName}/user/${userId}/role`

    return this.client.request<ClouduserUserDetail>('POST', url, {roleId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role#PUT)
   */
  UpdateRolesOfAUser(rolesIds: string[], serviceName: string, userId: number): Promise<ClouduserUserDetail> {
    let url = `/cloud/project/${serviceName}/user/${userId}/role`

    return this.client.request<ClouduserUserDetail>('PUT', url, {rolesIds})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role/%7BroleId%7D#DELETE)
   */
  RemoveRoleForAUser(roleId: string, serviceName: string, userId: number): Promise<void> {
    let url = `/cloud/project/${serviceName}/user/${userId}/role/${roleId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role/%7BroleId%7D#GET)
   */
  GetRoleDetail(roleId: string, serviceName: string, userId: number): Promise<CloudroleRole> {
    let url = `/cloud/project/${serviceName}/user/${userId}/role/${roleId}`

    return this.client.request<CloudroleRole>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/token#POST)
   */
  GetTokenForUser(password: string, serviceName: string, userId: number): Promise<CloudauthenticationToken> {
    let url = `/cloud/project/${serviceName}/user/${userId}/token`

    return this.client.request<CloudauthenticationToken>('POST', url, {password})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume#GET)
   */
  GetVolumes(serviceName: string, region?: string): Promise<CloudvolumeVolume[]> {
    let url = `/cloud/project/${serviceName}/volume?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudvolumeVolume[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume#POST)
   */
  CreateAVolume(region: string, serviceName: string, size: number, type: CloudvolumeVolumeType, description?: string, imageId?: string, name?: string, snapshotId?: string): Promise<CloudvolumeVolume> {
    let url = `/cloud/project/${serviceName}/volume`

    return this.client.request<CloudvolumeVolume>('POST', url, {region, size, type, description, imageId, name, snapshotId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D#DELETE)
   */
  DeleteAVolume(serviceName: string, volumeId: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/volume/${volumeId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D#GET)
   */
  GetVolumeDetails(serviceName: string, volumeId: string): Promise<CloudvolumeVolume> {
    let url = `/cloud/project/${serviceName}/volume/${volumeId}`

    return this.client.request<CloudvolumeVolume>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D#PUT)
   */
  UpdateAVolume(serviceName: string, volumeId: string, description?: string, name?: string): Promise<CloudvolumeVolume> {
    let url = `/cloud/project/${serviceName}/volume/${volumeId}`

    return this.client.request<CloudvolumeVolume>('PUT', url, {description, name})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/attach#POST)
   */
  AttachAVolumeOnAnInstance(instanceId: string, serviceName: string, volumeId: string): Promise<CloudvolumeVolume> {
    let url = `/cloud/project/${serviceName}/volume/${volumeId}/attach`

    return this.client.request<CloudvolumeVolume>('POST', url, {instanceId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/detach#POST)
   */
  DetachAVolumeFromAnInstance(instanceId: string, serviceName: string, volumeId: string): Promise<CloudvolumeVolume> {
    let url = `/cloud/project/${serviceName}/volume/${volumeId}/detach`

    return this.client.request<CloudvolumeVolume>('POST', url, {instanceId})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/snapshot#POST)
   */
  SnapshotAVolume(serviceName: string, volumeId: string, description?: string, name?: string): Promise<CloudvolumeSnapshot> {
    let url = `/cloud/project/${serviceName}/volume/${volumeId}/snapshot`

    return this.client.request<CloudvolumeSnapshot>('POST', url, {description, name})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/upsize#POST)
   */
  ExtendAVolume(serviceName: string, size: number, volumeId: string): Promise<CloudvolumeVolume> {
    let url = `/cloud/project/${serviceName}/volume/${volumeId}/upsize`

    return this.client.request<CloudvolumeVolume>('POST', url, {size})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/snapshot#GET)
   */
  GetVolumeSnapshots(serviceName: string, region?: string): Promise<CloudvolumeSnapshot[]> {
    let url = `/cloud/project/${serviceName}/volume/snapshot?`

    const queryParams = new QueryParams()
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudvolumeSnapshot[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/snapshot/%7BsnapshotId%7D#DELETE)
   */
  DeleteAVolumeSnapshot(serviceName: string, snapshotId: string): Promise<void> {
    let url = `/cloud/project/${serviceName}/volume/snapshot/${snapshotId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/snapshot/%7BsnapshotId%7D#GET)
   */
  GetVolumeSnapshotDetails(serviceName: string, snapshotId: string): Promise<CloudvolumeSnapshot> {
    let url = `/cloud/project/${serviceName}/volume/snapshot/${snapshotId}`

    return this.client.request<CloudvolumeSnapshot>('GET', url)
  }

  /**
   * Manage the vRack on your Cloud Project [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/vrack#GET)
   */
  GetTheLinkedVRackOnYourProject(serviceName: string): Promise<CloudVrack> {
    let url = `/cloud/project/${serviceName}/vrack`

    return this.client.request<CloudVrack>('GET', url)
  }

  /**
   * Manage the vRack on your Cloud Project [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/vrack#POST)
   */
  OrderAndAttachANewVRackOnYourProject(serviceName: string): Promise<CloudOperation> {
    let url = `/cloud/project/${serviceName}/vrack`

    return this.client.request<CloudOperation>('POST', url)
  }

  /**
   * Get services prices for a subsidiary [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/subsidiaryPrice#GET)
   */
  GetServicesPricesForASubsidiary(ovhSubsidiary: NichandleOvhSubsidiary, flavorId?: string, region?: string): Promise<CloudPrice> {
    let url = `/cloud/subsidiaryPrice?`

    const queryParams = new QueryParams()
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }
    if (flavorId) { queryParams.set('flavorId', flavorId) }
    if (region) { queryParams.set('region', region) }

    return this.client.request<CloudPrice>('GET', url+queryParams.toString())
  }

}
