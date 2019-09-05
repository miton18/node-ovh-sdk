import { Client } from '../client';
export declare enum CloudAccessTypeEnum {
    FULL = "full",
    RESTRICTED = "restricted"
}
export interface CloudAcl {
    type: CloudAclTypeEnum;
    accountId: string;
}
export declare enum CloudAclTypeEnum {
    READONLY = "readOnly",
    READWRITE = "readWrite"
}
export interface CloudAlerting {
    creationDate: string;
    delay: CloudAlertingDelayEnum;
    monthlyThreshold: number;
    id: string;
    email: string;
    formattedMonthlyThreshold: OrderPrice;
}
export interface CloudAlertingAlert {
    alertDate: string;
    alertId: number;
    emails: string[];
}
export declare type CloudAlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400;
export interface CloudArchiveStoragePrice {
    monthlyPrice: OrderPrice;
    region: string;
}
export interface CloudauthenticationCatalog {
    endpoints: CloudauthenticationEndpoint[];
    id: string;
    type: string;
}
export interface CloudauthenticationDomain {
    name: string;
}
export interface CloudauthenticationEndpoint {
    region_id: string;
    service_id: string;
    legacy_endpoint_id: string;
    url: string;
    interface: string;
    id: string;
}
export interface CloudauthenticationOpenstackToken {
    roles: CloudauthenticationRole[];
    expires_at: string;
    issued_at: string;
    project: CloudauthenticationTokenProject;
    methods: string[];
    user: CloudauthenticationUserToken;
    catalog: CloudauthenticationCatalog[];
}
export interface CloudauthenticationRole {
    name: string;
    id: string;
}
export interface CloudauthenticationToken {
    token: CloudauthenticationOpenstackToken;
    XAuthToken: string;
}
export interface CloudauthenticationTokenProject {
    id: string;
    name: string;
    domain: CloudauthenticationDomain;
}
export interface CloudauthenticationUserToken {
    domain: CloudauthenticationDomain;
    id: string;
    name: string;
}
export interface CloudAvailableRegion {
    datacenterLocation: string;
    name: string;
    continentCode: CloudRegionContinent;
}
export interface CloudBackup {
    executions?: CloudExecution[];
    createdAt: string;
    cron: string;
    backupName: string;
    name: string;
    id: string;
    instanceId: string;
}
export interface CloudBandwidthStoragePrice {
    price: OrderPrice;
    region: string;
}
export interface CloudbillingViewBandwidthInstance {
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
}
export interface CloudbillingViewBandwidthStorage {
    totalPrice: any;
    quantity: CloudbillingViewQuantity;
}
export interface CloudbillingViewHourlyInstance {
    details: CloudbillingViewHourlyInstanceDetail[];
    region: string;
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
    reference: string;
}
export interface CloudbillingViewHourlyInstanceBandwidth {
    incomingBandwidth?: CloudbillingViewBandwidthInstance;
    outgoingBandwidth?: CloudbillingViewBandwidthInstance;
    totalPrice: any;
    region: string;
}
export interface CloudbillingViewHourlyInstanceDetail {
    totalPrice: any;
    quantity: CloudbillingViewQuantity;
    instanceId: string;
}
export interface CloudbillingViewHourlyInstanceOption {
    reference: string;
    details: CloudbillingViewHourlyInstanceOptionDetail[];
    region: string;
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
}
export interface CloudbillingViewHourlyInstanceOptionDetail {
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
    instanceId: string;
}
export interface CloudbillingViewHourlyResources {
    snapshot: CloudbillingViewHourlySnapshot[];
    instanceOption: CloudbillingViewHourlyInstanceOption[];
    volume: CloudbillingViewHourlyVolume[];
    instanceBandwidth: CloudbillingViewHourlyInstanceBandwidth[];
    storage: CloudbillingViewHourlyStorage[];
    instance: CloudbillingViewHourlyInstance[];
}
export interface CloudbillingViewHourlySnapshot {
    instance?: CloudbillingViewInstanceSnapshot;
    volume?: CloudbillingViewVolumeSnapshot;
    totalPrice: any;
    region: string;
}
export interface CloudbillingViewHourlyStorage {
    region: string;
    totalPrice: any;
    type: CloudbillingViewStorageTypeEnum;
    incomingBandwidth?: CloudbillingViewBandwidthStorage;
    outgoingBandwidth?: CloudbillingViewBandwidthStorage;
    stored?: CloudbillingViewStoredStorage;
}
export interface CloudbillingViewHourlyVolume {
    details: CloudbillingViewHourlyVolumeDetail[];
    region: string;
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
    type: string;
}
export interface CloudbillingViewHourlyVolumeDetail {
    volumeId: string;
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
}
export interface CloudbillingViewInstanceSnapshot {
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
}
export interface CloudbillingViewMonthlyInstance {
    reference: string;
    totalPrice: any;
    region: string;
    details: CloudbillingViewMonthlyInstanceDetail[];
}
export interface CloudbillingViewMonthlyInstanceDetail {
    totalPrice: any;
    instanceId: string;
    activation: string;
}
export interface CloudbillingViewMonthlyInstanceOption {
    reference: string;
    region: string;
    totalPrice: any;
    details: CloudbillingViewMonthlyInstanceOptionDetail[];
}
export interface CloudbillingViewMonthlyInstanceOptionDetail {
    totalPrice: any;
    instanceId: string;
}
export interface CloudbillingViewMonthlyResources {
    instanceOption: CloudbillingViewMonthlyInstanceOption[];
    instance: CloudbillingViewMonthlyInstance[];
}
export interface CloudbillingViewQuantity {
    unit: CloudbillingViewUnitQuantity;
    value: any;
}
export declare enum CloudbillingViewStorageTypeEnum {
    PCS = "pcs",
    PCA = "pca"
}
export interface CloudbillingViewStoredStorage {
    quantity: CloudbillingViewQuantity;
    totalPrice: any;
}
export declare enum CloudbillingViewUnitQuantity {
    GIB = "GiB",
    GIBH = "GiBh",
    HOUR = "Hour"
}
export interface CloudbillingViewUsedCredit {
    description: string;
    usedAmount: any;
    id: number;
}
export interface CloudbillingViewUsedCredits {
    details: CloudbillingViewUsedCredit[];
    totalCredit: any;
}
export interface CloudbillingViewVolumeSnapshot {
    totalPrice: any;
    quantity: CloudbillingViewQuantity;
}
export interface CloudcommonVoucherValidity {
    from?: string;
    to?: string;
}
export interface CloudComponent {
    status: CloudServiceStatus;
    name: string;
}
export declare enum CloudcontainerRegistryregistryRegionEnum {
    GRA7 = "GRA7"
}
export interface CloudcontainerRegistryregistryRegistry {
    status: CloudcontainerRegistryregistryStatusEnum;
    version: string;
    projectID: string;
    createdAt: string;
    id: string;
    region: CloudcontainerRegistryregistryRegionEnum;
    url: string;
    updatedAt: string;
    name: string;
}
export declare enum CloudcontainerRegistryregistryStatusEnum {
    ERROR = "ERROR",
    READY = "READY",
    DELETED = "DELETED",
    SUSPENDED = "SUSPENDED",
    INSTALLING = "INSTALLING",
    UPDATING = "UPDATING",
    RESTORING = "RESTORING",
    SUSPENDING = "SUSPENDING",
    DELETING = "DELETING"
}
export interface CloudcontainerRegistryuserUser {
    password?: string;
    email: string;
    id: string;
    user: string;
}
export interface CloudCredit {
    validity?: CloudcommonVoucherValidity;
    products?: string[];
    available_credit: OrderPrice;
    bill?: string;
    voucher?: string;
    used_credit: OrderPrice;
    id: number;
    description?: string;
    total_credit: OrderPrice;
}
export interface CloudExecution {
    executedAt: string;
    state: CloudExecutionState;
    stateInfo: string;
}
export declare enum CloudExecutionState {
    IDLE = "IDLE",
    RUNNING = "RUNNING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    PAUSED = "PAUSED"
}
export interface CloudflavorFlavor {
    osType: string;
    disk: number;
    outboundBandwidth?: number;
    id: string;
    available: boolean;
    vcpus: number;
    ram: number;
    name: string;
    type: string;
    region: string;
    inboundBandwidth?: number;
    planCodes: CloudflavorFlavorPlanCodes;
}
export interface CloudflavorFlavorPlanCodes {
    monthly?: string;
    hourly?: string;
}
export interface CloudFlavorPrice {
    flavorId: string;
    flavorName: string;
    region: string;
    monthlyPrice?: OrderPrice;
    price: OrderPrice;
}
export interface CloudforecastProjectForecast {
    lastMetric: string;
    projectForecast: OrderPrice;
}
export interface CloudimageImage {
    minRam: number;
    visibility: string;
    id: string;
    user: string;
    planCode?: string;
    creationDate: string;
    name: string;
    type: string;
    region: string;
    size: any;
    status: string;
    minDisk: number;
    flavorType?: string;
    tags?: string[];
}
export declare enum CloudimageOSTypeEnum {
    LINUX = "linux",
    BSD = "bsd",
    WINDOWS = "windows"
}
export interface CloudinstanceAccess {
    url: string;
    type: string;
    password: string;
    login: string;
}
export interface CloudinstanceApplicationAccess {
    accesses: CloudinstanceAccess[];
    status: CloudinstanceApplicationAccessStateEnum;
}
export declare enum CloudinstanceApplicationAccessStateEnum {
    INSTALLING = "installing",
    OK = "ok"
}
export interface CloudinstanceInstance {
    ipAddresses: CloudinstanceIpAddress[];
    created: string;
    name: string;
    region: string;
    imageId: string;
    id: string;
    planCode?: string;
    status: CloudinstanceInstanceStatusEnum;
    sshKeyId?: string;
    monthlyBilling?: CloudinstanceMonthlyBilling;
    flavorId: string;
}
export interface CloudinstanceInstanceDetail {
    monthlyBilling?: CloudinstanceMonthlyBilling;
    status: CloudinstanceInstanceStatusEnum;
    sshKey: CloudsshkeySshKeyDetail;
    created: string;
    ipAddresses: CloudinstanceIpAddress[];
    flavor: CloudflavorFlavor;
    id: string;
    image: CloudimageImage;
    planCode?: string;
    name: string;
    region: string;
}
export interface CloudinstanceInstanceMetrics {
    values: CloudinstanceInstanceMetricsValue[];
    unit: string;
}
export interface CloudinstanceInstanceMetricsValue {
    timestamp: number;
    value: any;
}
export declare enum CloudinstanceInstanceStatusEnum {
    ACTIVE = "ACTIVE",
    BUILDING = "BUILDING",
    DELETED = "DELETED",
    ERROR = "ERROR",
    HARD_REBOOT = "HARD_REBOOT",
    PASSWORD = "PASSWORD",
    PAUSED = "PAUSED",
    REBOOT = "REBOOT",
    REBUILD = "REBUILD",
    RESCUED = "RESCUED",
    RESIZED = "RESIZED",
    REVERT_RESIZE = "REVERT_RESIZE",
    SOFT_DELETED = "SOFT_DELETED",
    STOPPED = "STOPPED",
    SUSPENDED = "SUSPENDED",
    UNKNOWN = "UNKNOWN",
    VERIFY_RESIZE = "VERIFY_RESIZE",
    MIGRATING = "MIGRATING",
    RESIZE = "RESIZE",
    BUILD = "BUILD",
    SHUTOFF = "SHUTOFF",
    RESCUE = "RESCUE",
    SHELVED = "SHELVED",
    SHELVED_OFFLOADED = "SHELVED_OFFLOADED",
    RESCUING = "RESCUING",
    UNRESCUING = "UNRESCUING",
    SNAPSHOTTING = "SNAPSHOTTING",
    RESUMING = "RESUMING"
}
export interface CloudinstanceInstanceVnc {
    type: string;
    url: string;
}
export interface CloudinstanceIpAddress {
    version: number;
    type: string;
    ip: string;
    networkId: string;
    gatewayIp?: string;
}
export declare enum CloudinstanceMetricsPeriod {
    LASTDAY = "lastday",
    LASTMONTH = "lastmonth",
    LASTWEEK = "lastweek",
    LASTYEAR = "lastyear",
    TODAY = "today"
}
export declare enum CloudinstanceMetricsType {
    MEM_USED = "mem:used",
    MEM_MAX = "mem:max",
    CPU_USED = "cpu:used",
    CPU_MAX = "cpu:max",
    NET_TX = "net:tx",
    NET_RX = "net:rx"
}
export interface CloudinstanceMonthlyBilling {
    since: string;
    status: CloudinstanceMonthlyBillingStatusEnum;
}
export declare enum CloudinstanceMonthlyBillingStatusEnum {
    ACTIVATIONPENDING = "activationPending",
    OK = "ok"
}
export interface CloudinstanceMonthlyInstanceBulkParams {
    instanceId: string;
    region: string;
}
export interface CloudinstanceNetworkBulkParams {
    networkId: string;
}
export interface CloudinstanceNetworkParams {
    networkId: string;
    ip?: string;
}
export declare enum CloudinstanceRebootTypeEnum {
    SOFT = "soft",
    HARD = "hard"
}
export interface CloudinstanceRescueAdminPassword {
    adminPassword?: string;
}
export interface CloudinstancegroupInstanceGroup {
    type: CloudinstancegroupInstanceGroupTypeEnum;
    region: string;
    name: string;
    id: string;
    instance_ids: string[];
}
export declare enum CloudinstancegroupInstanceGroupTypeEnum {
    AFFINITY = "affinity",
    ANTI_AFFINITY = "anti-affinity"
}
export interface CloudinstanceInterfaceFixedIp {
    subnetId: string;
    ip: string;
}
export interface CloudinstanceInterfaceInterface {
    macAddress: string;
    type: string;
    id: string;
    state: string;
    fixedIps: CloudinstanceInterfaceFixedIp[];
    networkId: string;
}
export interface CloudipCloudIp {
    status: CloudipIpStatusEnum;
    ip?: string;
    type: string;
    id: string;
}
export interface CloudipFailoverIp {
    routedTo: string;
    ip?: string;
    progress: number;
    continentCode?: string;
    subType: CloudipIpSubTypeEnum;
    id: string;
    geoloc?: string;
    block?: string;
    status: CloudipIpStatusEnum;
}
export declare enum CloudipIpStatusEnum {
    OK = "ok",
    OPERATIONPENDING = "operationPending"
}
export declare enum CloudipIpSubTypeEnum {
    CLOUD = "cloud",
    OVH = "ovh"
}
export declare enum CloudIpCountryEnum {
    AU = "au",
    BE = "be",
    CA = "ca",
    CZ = "cz",
    DE = "de",
    ES = "es",
    FI = "fi",
    FR = "fr",
    IE = "ie",
    IT = "it",
    LT = "lt",
    NL = "nl",
    PL = "pl",
    PT = "pt",
    SG = "sg",
    UK = "uk",
    US = "us"
}
export interface CloudkubeCluster {
    nextUpgradeVersions?: CloudkubeVersion[];
    updatePolicy: string;
    createdAt: string;
    controlPlaneIsUpToDate: boolean;
    id: string;
    region: CloudkubeRegion;
    updatedAt: string;
    url: string;
    name: string;
    nodesUrl: string;
    isUpToDate: boolean;
    status: CloudkubeClusterStatus;
    version: string;
}
export declare enum CloudkubeClusterStatus {
    INSTALLING = "INSTALLING",
    UPDATING = "UPDATING",
    RESETTING = "RESETTING",
    SUSPENDING = "SUSPENDING",
    REOPENING = "REOPENING",
    DELETING = "DELETING",
    SUSPENDED = "SUSPENDED",
    ERROR = "ERROR",
    USER_ERROR = "USER_ERROR",
    USER_QUOTA_ERROR = "USER_QUOTA_ERROR",
    READY = "READY"
}
export interface CloudkubeFlavor {
    category: CloudkubeFlavorCategory;
    name: string;
    id: string;
    state: CloudkubeFlavorState;
}
export declare enum CloudkubeFlavorCategory {
    C = "c",
    G = "g",
    T = "t",
    B = "b",
    R = "r"
}
export declare enum CloudkubeFlavorState {
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable"
}
export interface CloudkubeKubeconfig {
    content: string;
}
export interface CloudkubeNode {
    version: string;
    isUpToDate: boolean;
    status: CloudkubeNodeStatus;
    instanceId?: string;
    id: string;
    updatedAt: string;
    name?: string;
    flavor: string;
    createdAt: string;
}
export declare enum CloudkubeNodeStatus {
    INSTALLING = "INSTALLING",
    UPDATING = "UPDATING",
    RESETTING = "RESETTING",
    SUSPENDING = "SUSPENDING",
    REOPENING = "REOPENING",
    DELETING = "DELETING",
    SUSPENDED = "SUSPENDED",
    ERROR = "ERROR",
    USER_ERROR = "USER_ERROR",
    USER_QUOTA_ERROR = "USER_QUOTA_ERROR",
    USER_NODE_NOT_FOUND_ERROR = "USER_NODE_NOT_FOUND_ERROR",
    USER_NODE_SUSPENDED_SERVICE = "USER_NODE_SUSPENDED_SERVICE",
    READY = "READY"
}
export declare enum CloudkubeRegion {
    GRA5 = "GRA5",
    GRA7 = "GRA7",
    BHS5 = "BHS5"
}
export declare enum CloudkubeResetWorkerNodesPolicy {
    REINSTALL = "reinstall",
    DELETE = "delete"
}
export declare enum CloudkubeUpdatePolicy {
    ALWAYS_UPDATE = "ALWAYS_UPDATE",
    MINIMAL_DOWNTIME = "MINIMAL_DOWNTIME",
    NEVER_UPDATE = "NEVER_UPDATE"
}
export declare enum CloudkubeUpdateStrategy {
    LATEST_PATCH = "LATEST_PATCH",
    NEXT_MINOR = "NEXT_MINOR"
}
export declare type CloudkubeVersion = '1.11' | '1.12' | '1.13' | '1.14' | '1.15';
export interface CloudmigrationMigration {
    date: string;
    resourceType: CloudmigrationResourceTypeEnum;
    migrationId: string;
    resourceId: string;
}
export declare enum CloudmigrationResourceTypeEnum {
    INSTANCE = "instance"
}
export interface CloudnetworkIPPool {
    end: string;
    start: string;
    network: string;
    dhcp: boolean;
    region: string;
}
export interface CloudnetworkNetwork {
    status: CloudnetworkNetworkStatusEnum;
    vlanId: number;
    id: string;
    name: string;
    regions: CloudnetworkNetworkRegion[];
    type?: CloudnetworkNetworkTypeEnum;
}
export interface CloudnetworkNetworkRegion {
    region: string;
    status: CloudnetworkNetworkRegionStatusEnum;
}
export declare enum CloudnetworkNetworkRegionStatusEnum {
    ACTIVE = "ACTIVE",
    BUILDING = "BUILDING"
}
export declare enum CloudnetworkNetworkStatusEnum {
    BUILDING = "BUILDING",
    ACTIVE = "ACTIVE",
    DELETING = "DELETING"
}
export declare enum CloudnetworkNetworkTypeEnum {
    PUBLIC = "public",
    PRIVATE = "private"
}
export interface CloudnetworkSubnet {
    id: string;
    ipPools: CloudnetworkIPPool[];
    gatewayIp?: string;
    cidr: string;
}
export interface CloudopenstackClientProfile {
    name: string;
}
export interface CloudopenstackClientSession {
    profile: CloudopenstackClientProfile;
    id: string;
    websocket: string;
    expires: string;
}
export interface CloudOperation {
    progress: number;
    id: string;
    createdAt: string;
    regions?: string[];
    startedAt?: string;
    status: CloudOperationStatus;
    completedAt?: string;
    action: string;
}
export declare enum CloudOperationStatus {
    CREATED = "created",
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
    IN_ERROR = "in-error",
    UNKNOWN = "unknown"
}
export interface CloudorderOrder {
    planCode: string;
    date: string;
    serviceName?: string;
    orderId: number;
    status: CloudorderStatusEnum;
}
export declare enum CloudorderStatusEnum {
    UNPAID = "unpaid",
    DELIVERING = "delivering",
    DELIVERED = "delivered",
    UNKNOWN = "unknown"
}
export declare enum CloudpcaBillingRefEnum {
    BACKUP = "backup",
    DELETE = "delete",
    RESTORE = "restore"
}
export interface CloudpcaDownloadCredentials {
    password: string;
    authEndpoint: string;
    container: string;
    tenantId: string;
    login: string;
    storageEndpoint: string;
    region: string;
    tenantName: string;
}
export declare enum CloudpcaFunctionTypeEnum {
    CREATEUSER = "createUser",
    DELETE = "delete",
    RESTORE = "restore",
    SETPASSWORD = "setPassword",
    SETSESSIONNAME = "setSessionName",
    SETSSHKEY = "setSshKey"
}
export declare enum CloudpcaSessionStateEnum {
    DOING = "doing",
    DOINGBACKUP = "doingBackup",
    DOINGDELETE = "doingDelete",
    DOINGRESTORE = "doingRestore",
    DONE = "done",
    ERROR = "error",
    FAILEDDELETE = "failedDelete",
    FAILEDRESTORE = "failedRestore",
    NEW = "new",
    TAGGING = "tagging",
    TOBACKUP = "toBackup",
    TODELETE = "toDelete",
    TORESTORE = "toRestore"
}
export declare enum CloudpcaTaskStateEnum {
    CANCELLED = "cancelled",
    DELETED = "deleted",
    DOING = "doing",
    DOINGBACKUP = "doingBackup",
    DOINGDELETE = "doingDelete",
    DOINGRESTORE = "doingRestore",
    DONE = "done",
    ERROR = "error",
    FAILEDDELETE = "failedDelete",
    FAILEDRESTORE = "failedRestore",
    NEW = "new",
    TAGGING = "tagging",
    TOBACKUP = "toBackup",
    TODELETE = "toDelete",
    TORESTORE = "toRestore",
    TODO = "todo"
}
export declare enum CloudpcaTaskTypeEnum {
    DELETE = "delete",
    RESTORE = "restore"
}
export interface CloudpcaTransferState {
    state: CloudpcaTransferStateEnum;
    projectId: string;
    transferDate?: string;
    agreements?: number[];
}
export declare enum CloudpcaTransferStateEnum {
    DELETED = "deleted",
    TRANSFERRED = "transferred",
    UNTRANSFERRED = "untransferred",
    WAITINGAGREEMENTSVALIDATION = "waitingAgreementsValidation"
}
export interface CloudPrice {
    instances: CloudFlavorPrice[];
    archive: CloudArchiveStoragePrice[];
    bandwidthArchiveIn: CloudBandwidthStoragePrice[];
    bandwidthArchiveOut: CloudBandwidthStoragePrice[];
    bandwidthStorage: CloudBandwidthStoragePrice[];
    volumes: CloudVolumePrice[];
    storage: CloudStoragePrice[];
    snapshots: CloudSnapshotPrice[];
    projectCreation: OrderPrice;
}
export interface CloudProject {
    project_id: string;
    unleash: boolean;
    creationDate: string;
    orderId?: number;
    description?: string;
    planCode: string;
    status: CloudprojectProjectStatus;
    access: CloudAccessTypeEnum;
    expiration?: string;
}
export interface CloudprojectBandwidthStorageUsage {
    region: string;
    downloadedBytes: number;
    total: OrderPrice;
}
export interface CloudprojectBill {
    billId: string;
    type: CloudprojectBillTypeEnum;
}
export declare enum CloudprojectBillTypeEnum {
    CREDITPURCHASED = "creditPurchased",
    MONTHLYCONSUMPTION = "monthlyConsumption",
    MONTHLYINSTANCEACTIVATION = "monthlyInstanceActivation"
}
export interface CloudprojectCurrentUsage {
    volumes: CloudprojectVolumesUsage;
    total: OrderPrice;
    instances: CloudprojectInstancesUsage;
    volumeSnapshots: CloudprojectSnapshotsUsage;
    storage: CloudprojectStorageUsage;
    snapshots: CloudprojectSnapshotsUsage;
}
export interface CloudprojectInstanceMonthlyBilling {
    activatedOn: string;
    cost: OrderPrice;
}
export interface CloudprojectInstancesUsage {
    detail: CloudprojectInstanceUsageDetail[];
    total: OrderPrice;
}
export interface CloudprojectInstanceUsageDetail {
    monthlyBilling: boolean;
    reference: string;
    monthly?: CloudprojectInstanceMonthlyBilling;
    hourly?: OrderPrice;
    instanceId: string;
}
export interface CloudprojectNewProject {
    agreements?: number[];
    status: CloudprojectNewProjectStatusEnum;
    credit?: CloudprojectNewProjectCredit;
    description?: string;
    orderId?: number;
    project?: string;
}
export interface CloudprojectNewProjectCredit {
    products?: string[];
    validity?: CloudcommonVoucherValidity;
    total_credit: OrderPrice;
    description?: string;
    id: number;
}
export interface CloudprojectNewProjectInfo {
    agreements?: number[];
    error?: CloudprojectNewProjectInfoError;
    order?: OrderPrice;
    voucher?: CloudprojectNewProjectInfoVoucher;
}
export interface CloudprojectNewProjectInfoError {
    message: string;
    code: CloudprojectNewProjectInfoErrorCodeEnum;
}
export declare enum CloudprojectNewProjectInfoErrorCodeEnum {
    ACCOUNTNOTELIGIBLE = "accountNotEligible",
    CHALLENGEPAYMENTMETHODREQUESTED = "challengePaymentMethodRequested",
    INVALIDPAYMENTMEAN = "invalidPaymentMean",
    MAXPROJECTSLIMITREACHED = "maxProjectsLimitReached",
    PAYPALACCOUNTNOTVERIFIED = "paypalAccountNotVerified",
    UNPAIDDEBTS = "unpaidDebts"
}
export interface CloudprojectNewProjectInfoVoucher {
    credit: OrderPrice;
    paymentMethodRequired: boolean;
}
export declare enum CloudprojectNewProjectStatusEnum {
    CREATING = "creating",
    OK = "ok",
    VALIDATIONPENDING = "validationPending",
    WAITINGAGREEMENTSVALIDATION = "waitingAgreementsValidation"
}
export interface CloudprojectProductAgreements {
    agreementsToValidate?: number[];
    agreementsValidated?: number[];
}
export declare enum CloudprojectProductNameEnum {
    REGISTRY = "registry"
}
export declare enum CloudprojectProjectStatus {
    CREATING = "creating",
    DELETED = "deleted",
    DELETING = "deleting",
    OK = "ok",
    SUSPENDED = "suspended"
}
export interface CloudprojectProjectUsage {
    current: CloudprojectCurrentUsage;
}
export interface CloudprojectSnapshotsUsage {
    detail: CloudprojectSnapshotUsageDetail[];
    total: OrderPrice;
}
export interface CloudprojectSnapshotUsageDetail {
    price: OrderPrice;
    storedSize: any;
    region: string;
}
export interface CloudprojectStorageUsage {
    bandwidth: CloudprojectBandwidthStorageUsage[];
    total: OrderPrice;
    volume: CloudprojectStorageVolumeUsage[];
}
export interface CloudprojectStorageVolumeUsage {
    storedBytes: number;
    region: string;
    total: OrderPrice;
}
export interface CloudprojectVolumesUsage {
    detail: CloudprojectVolumeUsageDetail[];
    total: OrderPrice;
}
export declare enum CloudprojectVolumeType {
    CLASSIC = "classic",
    HIGH_SPEED = "high-speed"
}
export interface CloudprojectVolumeUsageDetail {
    volumeType: CloudprojectVolumeType;
    volumeId: string;
    price: OrderPrice;
    volumeCapacity: any;
}
export interface CloudquotaAllowedQuota {
    volume: CloudquotaVolumeQuota;
    name: string;
    network: CloudquotaNetworkQuota;
    compute: CloudquotaComputeQuota;
}
export interface CloudquotaComputeQuota {
    instances: number;
    cores: number;
    ram: number;
}
export interface CloudquotaInstanceUsageQuotas {
    maxRam: number;
    maxCores: number;
    usedRAM: number;
    usedCores: number;
    usedInstances: number;
    maxInstances: number;
}
export interface CloudquotaKeypairQuotas {
    maxCount: number;
}
export interface CloudquotaNetworkQuota {
    networks: number;
    subnets: number;
    ports: number;
}
export interface CloudquotaQuotas {
    region: string;
    volume?: CloudquotaVolumeUsageQuotas;
    instance?: CloudquotaInstanceUsageQuotas;
    keypair?: CloudquotaKeypairQuotas;
}
export interface CloudquotaVolumeQuota {
    volumes: number;
    gigabytes: number;
    snapshots: number;
}
export interface CloudquotaVolumeUsageQuotas {
    maxGigabytes: number;
    volumeCount: number;
    usedGigabytes: number;
}
export interface CloudRegion {
    name: string;
    continentCode: CloudRegionContinent;
    datacenterLocation: string;
    services: CloudComponent[];
    ipCountries: CloudIpCountryEnum[];
    status: CloudRegionStatus;
}
export declare enum CloudRegionContinent {
    EU = "EU",
    NA = "NA",
    US = "US",
    ASIA = "ASIA"
}
export declare enum CloudRegionStatus {
    UP = "UP",
    DOWN = "DOWN",
    MAINTENANCE = "MAINTENANCE"
}
export interface CloudrolePermission {
    label: string;
    roles: string[];
}
export interface CloudroleRole {
    permissions: string[];
    name: string;
    id: string;
    description: string;
}
export interface CloudroleRoles {
    services: CloudroleService[];
    roles: CloudroleRole[];
}
export interface CloudroleService {
    name: string;
    permissions: CloudrolePermission[];
}
export declare enum CloudServiceStatus {
    UP = "UP",
    DOWN = "DOWN"
}
export interface CloudSnapshotPrice {
    monthlyPrice: OrderPrice;
    price: OrderPrice;
    region: string;
}
export interface CloudsshkeySshKey {
    regions: string[];
    name: string;
    id: string;
    publicKey: string;
}
export interface CloudsshkeySshKeyDetail {
    regions: string[];
    name: string;
    publicKey: string;
    fingerPrint: string;
    id: string;
}
export interface CloudstackContent {
    type: string;
    content: string;
}
export interface CloudstackInstructionGuide {
    sections: CloudstackSection[];
    language: string;
    content: CloudstackContent[];
    title: string;
}
export interface CloudstackSection {
    title: string;
    steps: CloudstackStep[];
    content: CloudstackContent[];
}
export interface CloudstackStack {
    instructions: CloudstackInstructionGuide[];
    description: string;
    release: string;
    uuid: string;
    name: string;
    gitRepository: string;
    commit: string;
}
export interface CloudstackStep {
    content: CloudstackContent[];
    title: string;
}
export interface CloudstorageContainer {
    storedObjects: number;
    id: string;
    region: string;
    storedBytes: number;
    name: string;
}
export interface CloudstorageContainerAccess {
    token: string;
    endpoints: CloudstorageEndpoint[];
}
export interface CloudstorageContainerDetail {
    staticUrl: string;
    public: boolean;
    cors: string[];
    archive: boolean;
    storedObjects: number;
    objects: CloudstorageContainerObject[];
    region: string;
    name: string;
    storedBytes: number;
    containerType: CloudstorageTypeEnum;
}
export interface CloudstorageContainerObject {
    lastModified: string;
    retrievalState: CloudstorageRetrievalStateEnum;
    contentType: string;
    size: number;
    retrievalDelay: number;
    name: string;
}
export interface CloudstorageContainerObjectTempURL {
    expirationDate: string;
    getURL: string;
}
export interface CloudstorageEndpoint {
    url: string;
    region: string;
}
export declare enum CloudstorageRetrievalStateEnum {
    SEALED = "sealed",
    UNSEALING = "unsealing",
    UNSEALED = "unsealed"
}
export declare enum CloudstorageRightEnum {
    ALL = "all",
    READ = "read",
    WRITE = "write"
}
export declare enum CloudstorageTypeEnum {
    STATIC = "static",
    PUBLIC = "public",
    PRIVATE = "private"
}
export interface CloudStoragePrice {
    price: OrderPrice;
    monthlyPrice: OrderPrice;
    region: string;
}
export declare enum CloudusagePaymentTypeEnum {
    PRE = "pre",
    POST = "post"
}
export interface CloudusagePeriod {
    from: string;
    to: string;
}
export interface CloudusageUsageBill {
    bill_id: string;
    total: any;
    part: any;
    credit: any;
    payment_type: CloudusagePaymentTypeEnum;
}
export interface CloudusageUsageCurrent {
    period: CloudusagePeriod;
    hourlyUsage?: CloudbillingViewHourlyResources;
    lastUpdate: string;
    monthlyUsage?: CloudbillingViewMonthlyResources;
}
export interface CloudusageUsageCurrentBills {
    bills: CloudusageUsageBill[];
}
export interface CloudusageUsageForecast {
    period: CloudusagePeriod;
    usableCredits?: CloudbillingViewUsedCredits;
    hourlyUsage?: CloudbillingViewHourlyResources;
    lastUpdate: string;
    monthlyUsage?: CloudbillingViewMonthlyResources;
}
export interface CloudusageUsageHistory {
    id: string;
    period: CloudusagePeriod;
    lastUpdate: string;
}
export interface CloudusageUsageHistoryDetail {
    lastUpdate: string;
    monthlyUsage?: CloudbillingViewMonthlyResources;
    hourlyUsage?: CloudbillingViewHourlyResources;
    period: CloudusagePeriod;
    id: string;
}
export interface CloudusageUsageHistoryDetailBills {
    bills: CloudusageUsageBill[];
}
export interface ClouduserOpenrc {
    content: string;
}
export declare enum ClouduserOpenrcVersionEnum {
    V2_0 = "v2.0",
    V3 = "v3"
}
export interface ClouduserRclone {
    content: string;
}
export declare enum ClouduserRoleEnum {
    ADMIN = "admin",
    AUTHENTICATION = "authentication",
    ADMINISTRATOR = "administrator",
    COMPUTE_OPERATOR = "compute_operator",
    INFRASTRUCTURE_SUPERVISOR = "infrastructure_supervisor",
    NETWORK_SECURITY_OPERATOR = "network_security_operator",
    NETWORK_OPERATOR = "network_operator",
    BACKUP_OPERATOR = "backup_operator",
    IMAGE_OPERATOR = "image_operator",
    VOLUME_OPERATOR = "volume_operator",
    OBJECTSTORE_OPERATOR = "objectstore_operator"
}
export interface ClouduserUser {
    id: number;
    username: string;
    description: string;
    creationDate: string;
    status: ClouduserUserStatusEnum;
}
export interface ClouduserUserDetail {
    roles: CloudroleRole[];
    password: string;
    status: ClouduserUserStatusEnum;
    description: string;
    username: string;
    id: number;
    creationDate: string;
}
export declare enum ClouduserUserStatusEnum {
    CREATING = "creating",
    OK = "ok",
    DELETING = "deleting",
    DELETED = "deleted"
}
export interface CloudvolumeSnapshot {
    status: CloudvolumeSnapshotStatusEnum;
    volumeId: string;
    size: number;
    region: string;
    name: string;
    creationDate: string;
    planCode?: string;
    description: string;
    id: string;
}
export declare enum CloudvolumeSnapshotStatusEnum {
    CREATING = "creating",
    AVAILABLE = "available",
    DELETING = "deleting",
    ERROR = "error",
    ERROR_DELETING = "error_deleting"
}
export interface CloudvolumeVolume {
    attachedTo: string[];
    planCode?: string;
    description: string;
    id: string;
    region: string;
    type: CloudvolumeVolumeTypeEnum;
    creationDate: string;
    name: string;
    bootable: boolean;
    size: number;
    status: string;
}
export declare enum CloudvolumeVolumeTypeEnum {
    CLASSIC = "classic",
    HIGH_SPEED = "high-speed"
}
export interface CloudVolumePrice {
    price: OrderPrice;
    volumeName: string;
    monthlyPrice: OrderPrice;
    region: string;
}
export interface CloudVrack {
    description: string;
    id: string;
    name: string;
}
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export declare enum NichandleOvhSubsidiaryEnum {
    ASIA = "ASIA",
    AU = "AU",
    CA = "CA",
    CZ = "CZ",
    DE = "DE",
    ES = "ES",
    EU = "EU",
    FI = "FI",
    FR = "FR",
    GB = "GB",
    IE = "IE",
    IT = "IT",
    LT = "LT",
    MA = "MA",
    NL = "NL",
    PL = "PL",
    PT = "PT",
    QC = "QC",
    SG = "SG",
    SN = "SN",
    TN = "TN",
    US = "US",
    WE = "WE",
    WS = "WS"
}
export declare enum OrderCurrencyCodeEnum {
    AUD = "AUD",
    CAD = "CAD",
    CZK = "CZK",
    EUR = "EUR",
    GBP = "GBP",
    LTL = "LTL",
    MAD = "MAD",
    N_A = "N/A",
    PLN = "PLN",
    SGD = "SGD",
    TND = "TND",
    USD = "USD",
    XOF = "XOF",
    POINTS = "points"
}
export interface OrderPrice {
    currencyCode: OrderCurrencyCodeEnum;
    text: string;
    value: any;
}
export interface PcaAccount {
    host: string;
    sshkey?: string;
    password: string;
    domain: string;
    login: string;
}
export interface PcaBilling {
    quantity: number;
    date: string;
    total: number;
    id: number;
    billed: boolean;
    reference: CloudpcaBillingRefEnum;
}
export interface PcaFile {
    id: string;
    MD5: string;
    state: string;
    name: string;
    type: string;
    SHA1: string;
    size: number;
    SHA256: string;
}
export interface PcaSession {
    srcIp?: string;
    endDate?: string;
    size: number;
    login: string;
    name: string;
    state: CloudpcaSessionStateEnum;
    startDate: string;
    id: string;
}
export interface PcaTask {
    comment?: string;
    login: string;
    ipAddress?: string;
    status: CloudpcaTaskStateEnum;
    todoDate: string;
    id: string;
    function: CloudpcaFunctionTypeEnum;
}
export declare enum ServiceRenewalTypeEnum {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
export interface ServiceRenewType {
    forced: boolean;
    deleteAtExpiration: boolean;
    manualPayment?: boolean;
    automatic: boolean;
    period?: number;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export declare enum ServiceTerminationFutureUseEnum {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReasonEnum {
    FEATURES_DONT_SUIT_ME = "FEATURES_DONT_SUIT_ME",
    LACK_OF_PERFORMANCES = "LACK_OF_PERFORMANCES",
    MIGRATED_TO_ANOTHER_OVH_PRODUCT = "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
    MIGRATED_TO_COMPETITOR = "MIGRATED_TO_COMPETITOR",
    NOT_ENOUGH_RECOGNITION = "NOT_ENOUGH_RECOGNITION",
    NOT_NEEDED_ANYMORE = "NOT_NEEDED_ANYMORE",
    NOT_RELIABLE = "NOT_RELIABLE",
    NO_ANSWER = "NO_ANSWER",
    OTHER = "OTHER",
    PRODUCT_DIMENSION_DONT_SUIT_ME = "PRODUCT_DIMENSION_DONT_SUIT_ME",
    PRODUCT_TOOLS_DONT_SUIT_ME = "PRODUCT_TOOLS_DONT_SUIT_ME",
    TOO_EXPENSIVE = "TOO_EXPENSIVE",
    TOO_HARD_TO_USE = "TOO_HARD_TO_USE",
    UNSATIFIED_BY_CUSTOMER_SUPPORT = "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export interface ServicesService {
    possibleRenewPeriod?: number[];
    status: ServiceStateEnum;
    expiration: string;
    serviceId: number;
    renew?: ServiceRenewType;
    contactAdmin: string;
    canDeleteAtExpiration: boolean;
    contactBilling: string;
    domain: string;
    contactTech: string;
    renewalType: ServiceRenewalTypeEnum;
    creation: string;
    engagedUpTo?: string;
}
export declare class Cloud {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(pcaServiceName: string, serviceName: string): Promise<PcaAccount>;
    AlterThisObjectProperties(pcaServiceName: string, serviceName: string, payload: PcaAccount): Promise<void>;
    CloudArchivesBillingItems(pcaServiceName: string, serviceName: string, billed?: boolean, dateFrom?: string, dateTo?: string): Promise<number[]>;
    CloudArchivesSessionsForAccount(pcaServiceName: string, serviceName: string, name?: string): Promise<string[]>;
    CreateADeleteTaskForAllFilesInSession(pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaTask>;
    CloudArchivesFilesInSession(pcaServiceName: string, serviceName: string, sessionId: string, name?: string): Promise<string[]>;
    CreateARestoreTaskForSession(pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaTask>;
    CloudArchivesTasksForAccount(pcaServiceName: string, serviceName: string, _function?: CloudpcaFunctionTypeEnum, status?: CloudpcaTaskStateEnum, todoDateFrom?: string, todoDateTo?: string): Promise<string[]>;
    CreateACloudArchivesTask(fileIds: string[], pcaServiceName: string, serviceName: string, sessionId: string, taskFunction: CloudpcaTaskTypeEnum): Promise<PcaTask>;
    ViewAccountCurrentTotalSessionsUsageBytes(pcaServiceName: string, serviceName: string): Promise<number>;
    GetAgreementsRelatedToAProduct(product: CloudprojectProductNameEnum): Promise<CloudprojectProductAgreements>;
    StartANewCloudProject(credit?: number, description?: string, voucher?: string): Promise<CloudprojectNewProject>;
    GetInformationAboutACloudProjectCreation(voucher?: string): Promise<CloudprojectNewProjectInfo>;
    GetAllCloudPendingOrders(planCode?: string): Promise<CloudorderOrder[]>;
    GetServicesPrices(flavorId?: string, region?: string): Promise<CloudPrice>;
    GetACLOnYourCloudProject(serviceName: string, type?: CloudAclTypeEnum): Promise<string[]>;
    CreateNewACL(accountId: string, serviceName: string, type: CloudAclTypeEnum): Promise<CloudAcl>;
    DeleteACL(accountId: string, serviceName: string): Promise<void>;
    ActivateMonthlyBillingOnMultipleInstances(instances: CloudinstanceMonthlyInstanceBulkParams[], serviceName: string): Promise<CloudinstanceInstanceDetail[]>;
    ManageAlertsOnYourConsumption(serviceName: string): Promise<string[]>;
    AddNewAlert(delay: CloudAlertingDelayEnum, email: string, monthlyThreshold: number, serviceName: string): Promise<CloudAlerting>;
    DeleteAlerting(id: string, serviceName: string): Promise<void>;
    SeeAlerts(id: string, serviceName: string): Promise<number[]>;
    GetYourProjectBills(from: string, serviceName: string, to: string): Promise<CloudprojectBill[]>;
    CancelProjectCreation(serviceName: string): Promise<void>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    GetYourProjectConsumption(from: string, serviceName: string, to: string): Promise<CloudprojectProjectUsage>;
    ListRegistriesOfTheProject(serviceName: string): Promise<CloudcontainerRegistryregistryRegistry[]>;
    CreateANewRegistry(name: string, region: CloudcontainerRegistryregistryRegionEnum, serviceName: string): Promise<CloudcontainerRegistryregistryRegistry>;
    DeleteARegistry(registryID: string, serviceName: string): Promise<void>;
    GetTheRegistryInformation(registryID: string, serviceName: string): Promise<CloudcontainerRegistryregistryRegistry>;
    UpdateTheRegistry(name: string, registryID: string, serviceName: string): Promise<void>;
    ListRegistryUser(registryID: string, serviceName: string): Promise<CloudcontainerRegistryuserUser[]>;
    CreateANewRegistryUser(registryID: string, serviceName: string, email?: string, login?: string): Promise<CloudcontainerRegistryuserUser>;
    DeleteARegistryUser(registryID: string, serviceName: string, userID: string): Promise<void>;
    GetYourCredit(serviceName: string): Promise<number[]>;
    AddCreditToYourProject(code: string, serviceName: string): Promise<void>;
    GetFlavors(serviceName: string, region?: string): Promise<CloudflavorFlavor[]>;
    GetFlavor(flavorId: string, serviceName: string): Promise<CloudflavorFlavor>;
    GetYourConsumptionForecast(serviceName: string, toDate: string): Promise<CloudforecastProjectForecast>;
    GetImages(serviceName: string, flavorType?: string, osType?: CloudimageOSTypeEnum, region?: string): Promise<CloudimageImage[]>;
    GetImage(imageId: string, serviceName: string): Promise<CloudimageImage>;
    GetInstances(serviceName: string, region?: string): Promise<CloudinstanceInstance[]>;
    CreateANewInstance(flavorId: string, name: string, region: string, serviceName: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, networks?: CloudinstanceNetworkParams[], sshKeyId?: string, userData?: string, volumeId?: string): Promise<CloudinstanceInstanceDetail>;
    DeleteAnInstance(instanceId: string, serviceName: string): Promise<void>;
    GetInstance(instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail>;
    AlterAnInstance(instanceId: string, instanceName: string, serviceName: string): Promise<void>;
    ActivateMonthlyBillingOnInstance(instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail>;
    ReturnInitialCredentialsOfApplicationsInstalledFromPublicImage(instanceId: string, serviceName: string): Promise<CloudinstanceApplicationAccess>;
    GetInterfaces(instanceId: string, serviceName: string): Promise<CloudinstanceInterfaceInterface[]>;
    CreateInterfaceOnAnInstanceAndAttachedItToANetwork(instanceId: string, networkId: string, serviceName: string, ip?: string): Promise<CloudinstanceInterfaceInterface>;
    DeleteAnInterface(instanceId: string, interfaceId: string, serviceName: string): Promise<void>;
    GetInterface(instanceId: string, interfaceId: string, serviceName: string): Promise<CloudinstanceInterfaceInterface>;
    ReturnManyStatisticsAboutTheVirtualMachineForAGivenPeriod(instanceId: string, period: CloudinstanceMetricsPeriod, serviceName: string, type: CloudinstanceMetricsType): Promise<CloudinstanceInstanceMetrics>;
    RebootAnInstance(instanceId: string, serviceName: string, type: CloudinstanceRebootTypeEnum): Promise<void>;
    ReinstallAnInstance(imageId: string, instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail>;
    EnableOrDisableRescueMode(instanceId: string, rescue: boolean, serviceName: string, imageId?: string): Promise<CloudinstanceRescueAdminPassword>;
    MigrateYourInstanceToAnotherFlavor(flavorId: string, instanceId: string, serviceName: string): Promise<CloudinstanceInstanceDetail>;
    ResumeASuspendedInstance(instanceId: string, serviceName: string): Promise<void>;
    SnapshotAnInstance(instanceId: string, serviceName: string, snapshotName: string): Promise<void>;
    StartAnInstance(instanceId: string, serviceName: string): Promise<void>;
    StopAnInstance(instanceId: string, serviceName: string): Promise<void>;
    GetVNCAccessToYourInstance(instanceId: string, serviceName: string): Promise<CloudinstanceInstanceVnc>;
    CreateMultipleInstances(flavorId: string, name: string, number: number, region: string, serviceName: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, networks?: CloudinstanceNetworkBulkParams[], sshKeyId?: string, userData?: string, volumeId?: string): Promise<CloudinstanceInstance[]>;
    GetTheDetailOfAGroup(serviceName: string, region?: string): Promise<CloudinstancegroupInstanceGroup[]>;
    CreateAGroup(name: string, region: string, serviceName: string, type: CloudinstancegroupInstanceGroupTypeEnum): Promise<CloudinstancegroupInstanceGroup>;
    DeleteAGroup(groupId: string, serviceName: string): Promise<void>;
    GetAllGroups(groupId: string, serviceName: string, region?: string): Promise<CloudinstancegroupInstanceGroup>;
    GetIps(serviceName: string): Promise<CloudipCloudIp[]>;
    GetFailoverIps(serviceName: string): Promise<CloudipFailoverIp[]>;
    GetFailoverIp(id: string, serviceName: string): Promise<CloudipFailoverIp>;
    AttachFailoverIpToAnInstance(id: string, instanceId: string, serviceName: string): Promise<CloudipFailoverIp>;
    ListYourManagedKubernetesClusters(serviceName: string): Promise<string[]>;
    CreateANewManagedKubernetesCluster(region: CloudkubeRegion, serviceName: string, name?: string, version?: CloudkubeVersion): Promise<CloudkubeCluster>;
    GetInformationAboutYourManagedKubernetesCluster(kubeId: string, serviceName: string): Promise<CloudkubeCluster>;
    UpdateInformationAboutYourManagedKubernetesCluster(kubeId: string, name: string, serviceName: string): Promise<void>;
    DeleteYourManagedKubernetesCluster(kubeId: string, serviceName: string): Promise<void>;
    ListAllFlavorsAvailable(kubeId: string, serviceName: string): Promise<CloudkubeFlavor[]>;
    GenerateKubeconfigFile(kubeId: string, serviceName: string): Promise<CloudkubeKubeconfig>;
    ListYourNodes(kubeId: string, serviceName: string): Promise<CloudkubeNode[]>;
    DeployANodeForYourCluster(flavorName: string, kubeId: string, serviceName: string, name?: string): Promise<CloudkubeNode>;
    DeleteANodeOnYourCluster(kubeId: string, nodeId: string, serviceName: string): Promise<void>;
    GetInformationOnASpecificNodeOnYourCluster(kubeId: string, nodeId: string, serviceName: string): Promise<CloudkubeNode>;
    ResetCluster_AllKubernetesDataWillBeErasedPodsServicesConfigurationEtcNodesWillBeEitherDeletedOrReinstalled(kubeId: string, serviceName: string, version?: CloudkubeVersion, workerNodesPolicy?: CloudkubeResetWorkerNodesPolicy): Promise<void>;
    ForceClusterAndNodeUpdateToTheLatestPatchWithinMinorVersionOrNextMinorVersion(kubeId: string, serviceName: string, strategy?: CloudkubeUpdateStrategy): Promise<void>;
    ChangeTheUpdatePolicyOfYourCluster(kubeId: string, serviceName: string, updatePolicy: CloudkubeUpdatePolicy): Promise<void>;
    ListKubernetesAvailableRegions(serviceName: string): Promise<CloudkubeRegion[]>;
    GetPlannedMigrations(serviceName: string): Promise<CloudmigrationMigration[]>;
    GetPlannedMigration(migrationId: string, serviceName: string): Promise<CloudmigrationMigration>;
    UpdatePlannedMigration(date: string, migrationId: string, serviceName: string): Promise<CloudmigrationMigration>;
    GetPrivateNetworks(serviceName: string): Promise<CloudnetworkNetwork[]>;
    CreateANewNetwork(name: string, serviceName: string, regions?: string[], vlanId?: number): Promise<CloudnetworkNetwork>;
    DeletePrivateNetwork(networkId: string, serviceName: string): Promise<void>;
    GetPrivateNetwork(networkId: string, serviceName: string): Promise<CloudnetworkNetwork>;
    RenamePrivateNetwork(name: string, networkId: string, serviceName: string): Promise<void>;
    ActivatePrivateNetworkInANewRegion(networkId: string, region: string, serviceName: string): Promise<CloudnetworkNetwork>;
    GetNetworkSubnets(networkId: string, serviceName: string): Promise<CloudnetworkSubnet[]>;
    CreateANewNetworkSubnet(dhcp: boolean, end: string, network: string, networkId: string, noGateway: boolean, region: string, serviceName: string, start: string): Promise<CloudnetworkSubnet>;
    DeleteANetworkSubnet(networkId: string, serviceName: string, subnetId: string): Promise<void>;
    GetPublicNetworks(serviceName: string): Promise<CloudnetworkNetwork[]>;
    GetOVHPlaygroundSessionToUseTheOpenstackTerminal(serviceName: string): Promise<CloudopenstackClientSession>;
    ListYourOperations(serviceName: string): Promise<CloudOperation[]>;
    GetInformationAboutOneOperation(operationId: string, serviceName: string): Promise<CloudOperation>;
    ListQuotas(serviceName: string): Promise<CloudquotaQuotas[]>;
    ListYourRegions(serviceName: string): Promise<string[]>;
    RequestAccessToARegion(region: string, serviceName: string): Promise<CloudRegion>;
    GetInformationAboutYourRegion(regionName: string, serviceName: string): Promise<CloudRegion>;
    ChangeProjectQuotasOnRegion(name: string, regionName: string, serviceName: string): Promise<CloudOperation>;
    GetAllowedQuotasOnRegion(regionName: string, serviceName: string): Promise<CloudquotaAllowedQuota[]>;
    ListYourAutomatedBackups(regionName: string, serviceName: string): Promise<CloudBackup[]>;
    CreateANewAutomatedBackup(cron: string, instanceId: string, name: string, regionName: string, rotation: number, serviceName: string, maxExecutionCount?: number): Promise<CloudBackup>;
    DeleteABackupWorkflowProcess(backupWorkflowId: string, regionName: string, serviceName: string): Promise<void>;
    GetDetailsAboutABackupWorkflowProcess(backupWorkflowId: string, regionName: string, serviceName: string): Promise<CloudBackup>;
    ListTheRegionsOnWhichYouCanAskAnAccessTo(serviceName: string): Promise<CloudAvailableRegion[]>;
    DoNotExpireTheProjectAndRetainItYouWillHaveToPayForTheResourcesYouWillUseAfterUsingThisCall(serviceName: string): Promise<void>;
    GetAllRoles(serviceName: string): Promise<CloudroleRoles>;
    GetSnapshots(serviceName: string, flavorType?: string, region?: string): Promise<CloudimageImage[]>;
    DeleteASnapshot(serviceName: string, snapshotId: string): Promise<CloudimageImage>;
    GetSnapshotDetails(serviceName: string, snapshotId: string): Promise<CloudimageImage>;
    GetSSHKeys(serviceName: string, region?: string): Promise<CloudsshkeySshKey[]>;
    CreateSSHKey(name: string, publicKey: string, serviceName: string, region?: string): Promise<CloudsshkeySshKeyDetail>;
    DeleteSSHKey(keyId: string, serviceName: string): Promise<void>;
    GetSSHKey(keyId: string, serviceName: string): Promise<CloudsshkeySshKeyDetail>;
    GetStacks(serviceName: string): Promise<CloudstackStack[]>;
    GetStack(serviceName: string, stackId: string): Promise<CloudstackStack>;
    GetOVHPlaygroundSessionWithAStackInstalledToUseTheOpenstackTerminal(serviceName: string, stackId: string): Promise<CloudopenstackClientSession>;
    GetStorageContainers(serviceName: string): Promise<CloudstorageContainer[]>;
    CreateContainer(archive: boolean, containerName: string, region: string, serviceName: string): Promise<CloudstorageContainer>;
    DeleteContainer(containerId: string, serviceName: string): Promise<void>;
    GetStorageContainer(containerId: string, serviceName: string, noObjects?: boolean): Promise<CloudstorageContainerDetail>;
    UpdateYourStorageContainer(containerId: string, serviceName: string, containerType?: CloudstorageTypeEnum): Promise<void>;
    DeleteCORSSupportOnYourContainer(containerId: string, origin: string, serviceName: string): Promise<void>;
    AddCORSSupportOnYourContainer(containerId: string, origin: string, serviceName: string): Promise<void>;
    GetAPublicTemporaryURLToAccessToOneOfYourObject(containerId: string, expirationDate: string, objectName: string, serviceName: string): Promise<CloudstorageContainerObjectTempURL>;
    DeployYourContainerFilesAsAStaticWebSite(containerId: string, serviceName: string): Promise<void>;
    CreateOpenstackUserWithOnlyAccessToThisContainer(containerId: string, right: CloudstorageRightEnum, serviceName: string, description?: string): Promise<ClouduserUserDetail>;
    AccessToStorageAPI(serviceName: string): Promise<CloudstorageContainerAccess>;
    TerminateYourService(serviceName: string): Promise<string>;
    RequestMoreQuotaOnYourCloudProject(serviceName: string): Promise<void>;
    GetCurrentUsage(serviceName: string): Promise<CloudusageUsageCurrent>;
    GetUsageForecast(serviceName: string): Promise<CloudusageUsageForecast>;
    UsageInformationOnYourProject(serviceName: string, from?: string, to?: string): Promise<CloudusageUsageHistory[]>;
    UsageInformationDetails(serviceName: string, usageId: string): Promise<CloudusageUsageHistoryDetail>;
    GetAllUsers(serviceName: string): Promise<ClouduserUser[]>;
    CreateUser(serviceName: string, description?: string, role?: ClouduserRoleEnum, roles?: ClouduserRoleEnum[]): Promise<ClouduserUserDetail>;
    DeleteUser(serviceName: string, userId: number): Promise<void>;
    GetUserDetails(serviceName: string, userId: number): Promise<ClouduserUser>;
    GetRCFileOfOpenStack(region: string, serviceName: string, userId: number, version?: ClouduserOpenrcVersionEnum): Promise<ClouduserOpenrc>;
    GetRcloneConfigurationFile(region: string, serviceName: string, userId: number): Promise<ClouduserRclone>;
    RegenerateUserPassword(serviceName: string, userId: number): Promise<ClouduserUserDetail>;
    GetUserRoles(serviceName: string, userId: number): Promise<CloudroleRole[]>;
    AddARoleToAUser(roleId: string, serviceName: string, userId: number): Promise<ClouduserUser>;
    UpdateRolesOfAUser(rolesIds: string[], serviceName: string, userId: number): Promise<ClouduserUser>;
    RemoveRoleForAUser(roleId: string, serviceName: string, userId: number): Promise<void>;
    GetRoleDetail(roleId: string, serviceName: string, userId: number): Promise<CloudroleRole>;
    GetTokenForUser(password: string, serviceName: string, userId: number): Promise<CloudauthenticationToken>;
    GetVolumes(serviceName: string, region?: string): Promise<CloudvolumeVolume[]>;
    CreateAVolume(region: string, serviceName: string, size: number, type: CloudvolumeVolumeTypeEnum, description?: string, imageId?: string, name?: string, snapshotId?: string): Promise<CloudvolumeVolume>;
    DeleteAVolume(serviceName: string, volumeId: string): Promise<void>;
    GetVolumeDetails(serviceName: string, volumeId: string): Promise<CloudvolumeVolume>;
    UpdateAVolume(serviceName: string, volumeId: string, description?: string, name?: string): Promise<CloudvolumeVolume>;
    AttachAVolumeOnAnInstance(instanceId: string, serviceName: string, volumeId: string): Promise<CloudvolumeVolume>;
    DetachAVolumeFromAnInstance(instanceId: string, serviceName: string, volumeId: string): Promise<CloudvolumeVolume>;
    SnapshotAVolume(serviceName: string, volumeId: string, description?: string, name?: string): Promise<CloudvolumeSnapshot>;
    ExtendAVolume(serviceName: string, size: number, volumeId: string): Promise<CloudvolumeVolume>;
    GetVolumeSnapshots(serviceName: string, region?: string): Promise<CloudvolumeSnapshot[]>;
    DeleteAVolumeSnapshot(serviceName: string, snapshotId: string): Promise<void>;
    GetVolumeSnapshotDetails(serviceName: string, snapshotId: string): Promise<CloudvolumeSnapshot>;
    GetTheLinkedVRackOnYourProject(serviceName: string): Promise<CloudVrack>;
    OrderAndAttachANewVRackOnYourProject(serviceName: string): Promise<CloudOperation>;
    GetServicesPricesForASubsidiary(ovhSubsidiary: NichandleOvhSubsidiaryEnum, flavorId?: string, region?: string): Promise<CloudPrice>;
}
//# sourceMappingURL=cloud.d.ts.map