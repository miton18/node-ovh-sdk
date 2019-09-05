import { Client } from '../client';
/**
 * Elasticsearch alias
 */
export interface DbaaslogsAlias {
    aliasId: string;
    createdAt: string;
    description?: string;
    isEditable: boolean;
    isShareable: boolean;
    name: string;
    optionId?: string;
    updatedAt?: string;
}
/**
 * Network allowed to join input
 */
export interface DbaaslogsAllowedNetwork {
    allowedNetworkId: string;
    network: string;
}
/**
 * Stream archive
 */
export interface DbaaslogsArchive {
    archiveId: string;
    createdAt?: string;
    filename: string;
    md5: string;
    retrievalDelay: number;
    retrievalState: DbaaslogsArchiveRetrievalState;
    sha256: string;
    size: number;
}
export declare enum DbaaslogsArchiveRetrievalState {
    SEALED = "sealed",
    UNSEALING = "unsealing",
    UNSEALED = "unsealed"
}
/**
 * Stream archive url
 */
export interface DbaaslogsArchiveUrl {
    expirationDate: string;
    url: string;
}
/**
 * Cluster
 */
export interface DbaaslogsCluster {
    clusterId: string;
    clusterType: DbaaslogsClusterClusterType;
    dedicatedInputPEM: string;
    directInputPEM: string;
    hostname: string;
    isDefault: boolean;
    isUnlocked: boolean;
    region: DbaaslogsClusterRegion;
}
/**
 * Cluster allowed network
 */
export interface DbaaslogsClusterAllowedNetwork {
    allowedNetworkId: string;
    flowType: DbaaslogsClusterAllowedNetworkFlowType;
    network: string;
}
export interface DbaaslogsClusterAllowedNetworkCreation {
    flowType: DbaaslogsClusterAllowedNetworkFlowType;
    network: string;
}
export declare enum DbaaslogsClusterAllowedNetworkFlowType {
    QUERY = "QUERY",
    DIRECT_INPUT = "DIRECT_INPUT",
    ALL = "ALL"
}
export declare enum DbaaslogsClusterClusterType {
    TRIAL = "TRIAL",
    PRO = "PRO",
    DEDICATED = "DEDICATED"
}
export declare enum DbaaslogsClusterRegion {
    GRA = "GRA",
    RBX = "RBX",
    BHS = "BHS",
    SBG = "SBG",
    P_19 = "P-19"
}
/**
 * Graylog dashboard
 */
export interface DbaaslogsDashboard {
    createdAt: string;
    dashboardId: string;
    description: string;
    isEditable: boolean;
    isShareable: boolean;
    optionId?: string;
    title: string;
    updatedAt?: string;
}
/**
 * Input engine
 */
export interface DbaaslogsEngine {
    engineId: string;
    isDeprecated: boolean;
    name: DbaaslogsEngineName;
    version: string;
}
export declare enum DbaaslogsEngineName {
    FLOWGGER = "FLOWGGER",
    LOGSTASH = "LOGSTASH",
    TEST = "TEST"
}
/**
 * Flowgger configuration
 */
export interface DbaaslogsFlowggerConfiguration {
    logFormat: DbaaslogsFlowggerConfigurationLogFormat;
    logFraming: DbaaslogsFlowggerConfigurationLogFraming;
}
export declare enum DbaaslogsFlowggerConfigurationLogFormat {
    RFC5424 = "RFC5424",
    LTSV = "LTSV",
    GELF = "GELF",
    CAPNP = "CAPNP"
}
export declare enum DbaaslogsFlowggerConfigurationLogFraming {
    LINE = "LINE",
    NUL = "NUL",
    SYSLEN = "SYSLEN",
    CAPNP = "CAPNP"
}
/**
 * Helper
 */
export interface DbaaslogsHelper {
    description: string;
    engineId: string;
    helperId: string;
    sections: DbaaslogsHelperSection[];
    title: string;
}
/**
 * Helper section
 */
export interface DbaaslogsHelperSection {
    content: string;
    name: DbaaslogsHelperSectionName;
}
export declare enum DbaaslogsHelperSectionName {
    LOGSTASH_INPUT = "LOGSTASH_INPUT",
    LOGSTASH_FILTER = "LOGSTASH_FILTER",
    LOGSTASH_PATTERN = "LOGSTASH_PATTERN"
}
/**
 * Elasticsearch index
 */
export interface DbaaslogsIndex {
    alertNotifyEnabled?: boolean;
    createdAt: string;
    description?: string;
    indexId: string;
    isEditable: boolean;
    isShareable: boolean;
    maxSize: number;
    name: string;
    optionId?: string;
    updatedAt?: string;
}
/**
 * Input
 */
export interface DbaaslogsInput {
    autoSelectOption?: boolean;
    createdAt: string;
    description: string;
    engineId: string;
    exposedPort?: string;
    hostname: string;
    inputId: string;
    isRestartRequired: boolean;
    optionId?: string;
    publicAddress: string;
    singleInstanceEnabled?: boolean;
    sslCertificate: string;
    status: DbaaslogsInputStatus;
    streamId: string;
    title: string;
    updatedAt?: string;
}
/**
 * Action on input
 */
export interface DbaaslogsInputAction {
    isAllowed: boolean;
    type: DbaaslogsInputActionType;
}
export declare enum DbaaslogsInputActionType {
    END = "END",
    LOG = "LOG",
    START = "START",
    TEST = "TEST",
    DESTROY = "DESTROY",
    RESTART = "RESTART"
}
export interface DbaaslogsInputAllowedNetworkCreation {
    network: string;
}
export interface DbaaslogsInputConfigurationFlowggerUpdate {
    logFormat: DbaaslogsFlowggerConfigurationLogFormat;
    logFraming: DbaaslogsFlowggerConfigurationLogFraming;
}
export interface DbaaslogsInputConfigurationLogstashUpdate {
    filterSection?: string;
    inputSection: string;
    patternSection?: string;
}
export interface DbaaslogsInputCreation {
    autoSelectOption?: boolean;
    description: string;
    engineId: string;
    exposedPort?: string;
    optionId?: string;
    singleInstanceEnabled?: boolean;
    streamId: string;
    title: string;
}
export declare enum DbaaslogsInputStatus {
    INIT = "INIT",
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    PROCESSING = "PROCESSING"
}
export interface DbaaslogsInputUpdate {
    description: string;
    engineId: string;
    exposedPort?: string;
    optionId?: string;
    singleInstanceEnabled?: boolean;
    streamId: string;
    title: string;
}
/**
 * Logstash configuration
 */
export interface DbaaslogsLogstashConfiguration {
    filterSection?: string;
    inputSection: string;
    patternSection?: string;
}
/**
 * Member
 */
export interface DbaaslogsMember {
    createdAt: string;
    note?: string;
    username: string;
}
/**
 * DBaaS Logs offer
 */
export interface DbaaslogsOffer {
    curNbAlias: number;
    curNbDashboard: number;
    curNbIndex: number;
    curNbInput: number;
    curNbRole: number;
    curNbStream: number;
    esStorage?: number;
    maxNbAlias: number;
    maxNbDashboard: number;
    maxNbIndex: number;
    maxNbInput: number;
    maxNbRole: number;
    maxNbStream: number;
    reference: string;
    retention?: number;
}
/**
 * Asynchronous operation
 */
export interface DbaaslogsOperation {
    aliasId?: string;
    createdAt: string;
    dashboardId?: string;
    indexId?: string;
    inputId?: string;
    operationId: string;
    optionId?: string;
    roleId?: string;
    state: DbaaslogsOperationState;
    streamId?: string;
    updatedAt?: string;
}
export declare enum DbaaslogsOperationState {
    PENDING = "PENDING",
    RECEIVED = "RECEIVED",
    STARTED = "STARTED",
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE",
    REVOKED = "REVOKED",
    RETRY = "RETRY",
    RUNNING = "RUNNING"
}
/**
 * DBaaS Logs option
 */
export interface DbaaslogsOption {
    createdAt: string;
    curNbAlias: number;
    curNbDashboard: number;
    curNbIndex: number;
    curNbInput: number;
    curNbRole: number;
    curNbStream: number;
    indexSize?: number;
    maxNbAlias: number;
    maxNbDashboard: number;
    maxNbIndex: number;
    maxNbInput: number;
    maxNbRole: number;
    maxNbStream: number;
    optionId: string;
    reference: string;
    state: DbaaslogsOptionState;
    updatedAt?: string;
}
export declare enum DbaaslogsOptionState {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
export interface DbaaslogsOutputElasticsearchAliasCreation {
    autoSelectOption?: boolean;
    description: string;
    optionId?: string;
    suffix: string;
}
export interface DbaaslogsOutputElasticsearchAliasIndexCreation {
    indexId: string;
}
export interface DbaaslogsOutputElasticsearchAliasStreamCreation {
    streamId: string;
}
export interface DbaaslogsOutputElasticsearchAliasUpdate {
    description: string;
    optionId?: string;
}
export interface DbaaslogsOutputElasticsearchIndexCreation {
    alertNotifyEnabled?: boolean;
    autoSelectOption?: boolean;
    description: string;
    optionId?: string;
    suffix: string;
}
export interface DbaaslogsOutputElasticsearchIndexUpdate {
    alertNotifyEnabled?: boolean;
    description: string;
}
export interface DbaaslogsOutputGraylogDashboardCreation {
    autoSelectOption?: boolean;
    description: string;
    optionId?: string;
    title: string;
}
export interface DbaaslogsOutputGraylogDashboardDuplicateCreation {
    autoSelectOption?: boolean;
    description: string;
    optionId?: string;
    streamId?: string;
    title: string;
}
export interface DbaaslogsOutputGraylogDashboardUpdate {
    description: string;
    optionId?: string;
    title: string;
}
export interface DbaaslogsOutputGraylogStreamAlertCreation {
    backlog: number;
    conditionType?: DbaaslogsStreamAlertConditionConditionType;
    constraintType?: DbaaslogsStreamAlertConditionConstraintType;
    field?: string;
    grace: number;
    queryFilter?: string;
    repeatNotificationsEnabled?: boolean;
    threshold?: number;
    thresholdType?: DbaaslogsStreamAlertConditionThresholdType;
    time?: number;
    title: string;
    value?: string;
}
export interface DbaaslogsOutputGraylogStreamAlertUpdate {
    backlog: number;
    conditionType?: DbaaslogsStreamAlertConditionConditionType;
    constraintType?: DbaaslogsStreamAlertConditionConstraintType;
    field?: string;
    grace: number;
    queryFilter?: string;
    repeatNotificationsEnabled?: boolean;
    threshold?: number;
    thresholdType?: DbaaslogsStreamAlertConditionThresholdType;
    time?: number;
    title: string;
    value?: string;
}
export interface DbaaslogsOutputGraylogStreamCreation {
    autoSelectOption?: boolean;
    coldStorageCompression?: DbaaslogsStreamColdStorageCompression;
    coldStorageContent?: DbaaslogsStreamColdStorageContent;
    coldStorageEnabled?: boolean;
    coldStorageNotifyEnabled?: boolean;
    coldStorageRetention?: number;
    coldStorageTarget?: DbaaslogsStreamColdStorageTarget;
    description: string;
    indexingEnabled?: boolean;
    optionId?: string;
    parentStreamId?: string;
    title: string;
    webSocketEnabled?: boolean;
}
export interface DbaaslogsOutputGraylogStreamRuleCreation {
    field: string;
    isInverted?: boolean;
    operator: DbaaslogsStreamRuleOperator;
    value: string;
}
export interface DbaaslogsOutputGraylogStreamUpdate {
    coldStorageCompression?: DbaaslogsStreamColdStorageCompression;
    coldStorageContent?: DbaaslogsStreamColdStorageContent;
    coldStorageEnabled?: boolean;
    coldStorageNotifyEnabled?: boolean;
    coldStorageRetention?: number;
    coldStorageTarget?: DbaaslogsStreamColdStorageTarget;
    description: string;
    indexingEnabled?: boolean;
    optionId?: string;
    title: string;
    webSocketEnabled?: boolean;
}
/**
 * Role permission
 */
export interface DbaaslogsPermission {
    aliasId?: string;
    dashboardId?: string;
    indexId?: string;
    permissionId: string;
    permissionType?: DbaaslogsPermissionType;
    streamId?: string;
}
export declare enum DbaaslogsPermissionDashboardPermissionType {
    READ_ONLY = "READ_ONLY",
    READ_WRITE = "READ_WRITE"
}
export declare enum DbaaslogsPermissionIndexPermissionType {
    READ_ONLY = "READ_ONLY",
    READ_WRITE = "READ_WRITE"
}
export declare enum DbaaslogsPermissionType {
    READ_ONLY = "READ_ONLY",
    READ_WRITE = "READ_WRITE"
}
/**
 * DBaaS Logs offer
 */
export interface DbaaslogsPublicOffer {
    esStorage: number;
    maxNbAlias: number;
    maxNbDashboard: number;
    maxNbIndex: number;
    maxNbInput: number;
    maxNbRole: number;
    maxNbStream: number;
    reference: string;
}
/**
 * DBaaS Logs quota
 */
export interface DbaaslogsQuota {
    curNbAlias: number;
    curNbDashboard: number;
    curNbIndex: number;
    curNbInput: number;
    curNbRole: number;
    curNbStream: number;
    maxNbAlias: number;
    maxNbDashboard: number;
    maxNbIndex: number;
    maxNbInput: number;
    maxNbRole: number;
    maxNbStream: number;
}
/**
 * Role
 */
export interface DbaaslogsRole {
    createdAt: string;
    description: string;
    name: string;
    optionId?: string;
    roleId: string;
    updatedAt?: string;
}
export interface DbaaslogsRoleCreation {
    autoSelectOption?: boolean;
    description: string;
    name: string;
    optionId?: string;
}
export interface DbaaslogsRoleMemberCreation {
    note?: string;
    username: string;
}
export interface DbaaslogsRoleMemberUpdate {
    note?: string;
}
export interface DbaaslogsRolePermissionAliasCreation {
    aliasId: string;
}
export interface DbaaslogsRolePermissionDashboardCreation {
    dashboardId: string;
    permissionType?: DbaaslogsPermissionDashboardPermissionType;
}
export interface DbaaslogsRolePermissionIndexCreation {
    indexId: string;
    permissionType?: DbaaslogsPermissionIndexPermissionType;
}
export interface DbaaslogsRolePermissionStreamCreation {
    streamId: string;
}
export interface DbaaslogsRoleUpdate {
    description: string;
    name: string;
    optionId?: string;
}
/**
 * Service
 */
export interface DbaaslogsService {
    createdAt: string;
    displayName?: string;
    isCapped: boolean;
    serviceName: string;
    state?: DbaaslogsServiceState;
    updatedAt?: string;
    username: string;
}
/**
 * Metrics access
 */
export interface DbaaslogsServiceMetric {
    host: string;
    token: string;
}
export declare enum DbaaslogsServiceState {
    INIT = "INIT",
    TO_CONFIG = "TO_CONFIG",
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
/**
 * Graylog stream
 */
export interface DbaaslogsStream {
    canAlert: boolean;
    coldStorageCompression?: DbaaslogsStreamColdStorageCompression;
    coldStorageContent?: DbaaslogsStreamColdStorageContent;
    coldStorageEnabled?: boolean;
    coldStorageNotifyEnabled?: boolean;
    coldStorageRetention?: number;
    coldStorageTarget?: DbaaslogsStreamColdStorageTarget;
    createdAt: string;
    description: string;
    indexingEnabled?: boolean;
    isEditable: boolean;
    isShareable: boolean;
    nbArchive: number;
    optionId?: string;
    parentStreamId?: string;
    streamId: string;
    title: string;
    updatedAt?: string;
    webSocketEnabled?: boolean;
}
/**
 * Alert condition
 */
export interface DbaaslogsStreamAlertCondition {
    alertId: string;
    backlog: number;
    conditionType?: DbaaslogsStreamAlertConditionConditionType;
    constraintType?: DbaaslogsStreamAlertConditionConstraintType;
    field?: string;
    grace: number;
    queryFilter?: string;
    repeatNotificationsEnabled?: boolean;
    threshold?: number;
    thresholdType?: DbaaslogsStreamAlertConditionThresholdType;
    time?: number;
    title: string;
    value?: string;
}
export declare enum DbaaslogsStreamAlertConditionConditionType {
    MESSAGE_COUNT = "MESSAGE_COUNT",
    FIELD_VALUE = "FIELD_VALUE",
    FIELD_CONTENT_VALUE = "FIELD_CONTENT_VALUE"
}
export declare enum DbaaslogsStreamAlertConditionConstraintType {
    MEAN = "MEAN",
    MIN = "MIN",
    MAX = "MAX",
    SUM = "SUM",
    STDDEV = "STDDEV"
}
export declare enum DbaaslogsStreamAlertConditionThresholdType {
    MORE = "MORE",
    LESS = "LESS",
    LOWER = "LOWER",
    HIGHER = "HIGHER"
}
export declare enum DbaaslogsStreamColdStorageCompression {
    LZMA = "LZMA",
    GZIP = "GZIP",
    DEFLATED = "DEFLATED",
    ZSTD = "ZSTD"
}
export declare enum DbaaslogsStreamColdStorageContent {
    ALL = "ALL",
    GELF = "GELF",
    PLAIN = "PLAIN"
}
export declare enum DbaaslogsStreamColdStorageTarget {
    PCA = "PCA",
    PCS = "PCS"
}
/**
 * Stream rule
 */
export interface DbaaslogsStreamRule {
    field: string;
    isInverted?: boolean;
    operator?: DbaaslogsStreamRuleOperator;
    ruleId: string;
    value: string;
}
export declare enum DbaaslogsStreamRuleOperator {
    MATCH_EXACTLY = "MATCH_EXACTLY",
    GREATER_THAN = "GREATER_THAN",
    SMALLER_THAN = "SMALLER_THAN",
    FIELD_PRESENCE = "FIELD_PRESENCE"
}
/**
 * Temporary url informations
 */
export interface DbaaslogsTemporaryLogsLink {
    expirationDate: string;
    url: string;
}
/**
 * Config test results
 */
export interface DbaaslogsTestResult {
    stderr?: string;
    stdout?: string;
    updatedAt?: string;
}
/**
 * Token
 */
export interface DbaaslogsToken {
    clusterId?: string;
    createdAt: string;
    name: string;
    tokenId: string;
    updatedAt?: string;
    value: string;
}
export interface DbaaslogsTokenCreation {
    clusterId?: string;
    name: string;
}
export interface DbaaslogsUpdate {
    displayName?: string;
    isCapped?: boolean;
}
/**
 * Web address
 */
export interface DbaaslogsUrl {
    address: string;
    type: DbaaslogsUrlType;
}
export declare enum DbaaslogsUrlType {
    GRAYLOG_WEBUI = "GRAYLOG_WEBUI",
    GRAYLOG_API = "GRAYLOG_API",
    ELASTICSEARCH_API = "ELASTICSEARCH_API",
    KIBANA_WEBUI = "KIBANA_WEBUI",
    CONSOLE = "CONSOLE",
    WEB_SOCKET = "WEB_SOCKET",
    SERVICE_DOMAIN = "SERVICE_DOMAIN",
    TCP_TLS_GELF = "TCP_TLS_GELF",
    TCP_GELF = "TCP_GELF",
    UDP_GELF = "UDP_GELF",
    TCP_TLS_RFC5424 = "TCP_TLS_RFC5424",
    TCP_RFC5424 = "TCP_RFC5424",
    UDP_RFC5424 = "UDP_RFC5424",
    TCP_TLS_LTSV_LINE = "TCP_TLS_LTSV_LINE",
    TCP_TLS_LTSV_NUL = "TCP_TLS_LTSV_NUL",
    TCP_LTSV_LINE = "TCP_LTSV_LINE",
    TCP_LTSV_NUL = "TCP_LTSV_NUL",
    TCP_TLS_CAP_N_PROTO = "TCP_TLS_CAP_N_PROTO",
    TCP_CAP_N_PROTO = "TCP_CAP_N_PROTO",
    UDP_LTSV_NUL = "UDP_LTSV_NUL",
    UDP_LTSV_LINE = "UDP_LTSV_LINE",
    UDP_CAP_N_PROTO = "UDP_CAP_N_PROTO",
    HTTP_GELF = "HTTP_GELF",
    HTTP_TLS_GELF = "HTTP_TLS_GELF",
    TCP_BEATS = "TCP_BEATS",
    TCP_TLS_BEATS = "TCP_TLS_BEATS"
}
export interface DbaaslogsUserChangePasswordCreation {
    password: string;
}
export declare enum ServiceRenewalType {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
    manualPayment?: boolean;
    period?: number;
}
export declare enum ServiceState {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
/**
 * Details about a Service
 */
export interface ServicesService {
    canDeleteAtExpiration: boolean;
    contactAdmin: string;
    contactBilling: string;
    contactTech: string;
    creation: string;
    domain: string;
    engagedUpTo?: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    renewalType: ServiceRenewalType;
    serviceId: number;
    status: ServiceState;
}
export declare class DbaasLogs {
    private client;
    constructor(client: Client);
    /**
     * Operations about the DBAAS-LOGS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Operations about the DBAAS-LOGS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D#GET)
     */
    ReturnsTheServiceObjectOfConnectedIdentity(serviceName: string): Promise<DbaaslogsService>;
    /**
     * Operations about the DBAAS-LOGS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D#PUT)
     */
    UpdateTheServiceProperties(serviceName: string, payload: DbaaslogsUpdate): Promise<DbaaslogsOperation>;
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Service Clusters [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster#GET)
     */
    ReturnsTheListOfAllowedCluster(serviceName: string): Promise<string[]>;
    /**
     * Service Clusters [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D#GET)
     */
    ReturnsDetailsOfAnAllowedCluster(clusterId: string, serviceName: string): Promise<DbaaslogsCluster>;
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork#GET)
     */
    ListAllTheNetworkIDAllowedToContactGivenCluster(clusterId: string, serviceName: string): Promise<string[]>;
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork#POST)
     */
    AllowAnIPToContactCluster(clusterId: string, serviceName: string, payload: DbaaslogsClusterAllowedNetworkCreation): Promise<DbaaslogsOperation>;
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork/%7BallowedNetworkId%7D#DELETE)
     */
    RemoveTheSpecifiedIPFromTheListOfAllowedNetworks(allowedNetworkId: string, clusterId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork/%7BallowedNetworkId%7D#GET)
     */
    ReturnsDetailsOfAnAllowedNetwork(allowedNetworkId: string, clusterId: string, serviceName: string): Promise<DbaaslogsClusterAllowedNetwork>;
    /**
     * Inputs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input#GET)
     */
    ReturnsTheListOfRegisteredInputAttachedToTheLoggedUser(serviceName: string): Promise<string[]>;
    /**
     * Inputs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input#POST)
     */
    RegisterANewInputObject(serviceName: string, payload: DbaaslogsInputCreation): Promise<DbaaslogsOperation>;
    /**
     * Input [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D#DELETE)
     */
    RemoveTheSpecifiedInputObject(inputId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * Input [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedInput(inputId: string, serviceName: string): Promise<DbaaslogsInput>;
    /**
     * Input [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D#PUT)
     */
    UpdateInformationOfSpecifiedInputObject(inputId: string, serviceName: string, payload: DbaaslogsInputUpdate): Promise<DbaaslogsOperation>;
    /**
     * InputActions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/action#GET)
     */
    ReturnsActionsOfSpecifiedInput(inputId: string, serviceName: string): Promise<DbaaslogsInputAction[]>;
    /**
     * InputAllowedNetworks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork#GET)
     */
    ListAllNetworkIDAllowedToJoinInput(inputId: string, serviceName: string): Promise<string[]>;
    /**
     * InputAllowedNetworks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork#POST)
     */
    AllowAnIpToJoinInput(inputId: string, serviceName: string, payload: DbaaslogsInputAllowedNetworkCreation): Promise<DbaaslogsOperation>;
    /**
     * InputAllowedNetwork [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork/%7BallowedNetworkId%7D#DELETE)
     */
    /**
     * InputAllowedNetwork [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork/%7BallowedNetworkId%7D#GET)
     */
    /**
     * InputConfigtest [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configtest#POST)
     */
    ValidateConfigurationOfSpecifiedInput(inputId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * InputConfigtestResult [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configtest/result#GET)
     */
    ReturnsTheConfigTestOperationResult(inputId: string, serviceName: string): Promise<DbaaslogsTestResult>;
    /**
     * FlowggerConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/flowgger#GET)
     */
    ReturnsTheFlowggerConfiguration(inputId: string, serviceName: string): Promise<DbaaslogsFlowggerConfiguration>;
    /**
     * FlowggerConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/flowgger#PUT)
     */
    UpdateTheFlowggerConfiguration(inputId: string, serviceName: string, payload: DbaaslogsInputConfigurationFlowggerUpdate): Promise<DbaaslogsOperation>;
    /**
     * LogstashConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/logstash#GET)
     */
    ReturnsTheLogstashConfiguration(inputId: string, serviceName: string): Promise<DbaaslogsLogstashConfiguration>;
    /**
     * LogstashConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/logstash#PUT)
     */
    UpdateTheLogstashConfiguration(inputId: string, serviceName: string, payload: DbaaslogsInputConfigurationLogstashUpdate): Promise<DbaaslogsOperation>;
    /**
     * InputEnd [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/end#POST)
     */
    ScheduleTheEndOfSpecifiedInput(inputId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * InputLogs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/logs/url#POST)
     */
    GenerateATemporaryUrlToRetrieveInputLogs(inputId: string, serviceName: string): Promise<DbaaslogsTemporaryLogsLink>;
    /**
     * InputRestart [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/restart#POST)
     */
    ScheduleTheRestartOfSpecifiedInput(inputId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * InputStart [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/start#POST)
     */
    ScheduleTheStartOfSpecifiedInput(inputId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * InputUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/url#GET)
     */
    ReturnsTheListOfUrlsOfSpecifiedInput(inputId: string, serviceName: string): Promise<DbaaslogsUrl[]>;
    /**
     * Service Metrics [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/metrics#GET)
     */
    ReturnsMetricsCredentials(serviceName: string): Promise<DbaaslogsServiceMetric>;
    /**
     * ServiceOffer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/offer#GET)
     */
    ReturnsTheSubscribedOffer(serviceName: string): Promise<DbaaslogsOffer>;
    /**
     * Operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/operation#GET)
     */
    LatestOperations(serviceName: string): Promise<string[]>;
    /**
     * Operation [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/operation/%7BoperationId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedOperation(operationId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * ServiceOptions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/option#GET)
     */
    ReturnsTheSubscribedAdditionalOptions(serviceName: string): Promise<string[]>;
    /**
     * ServiceOption [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/option/%7BoptionId%7D#GET)
     */
    ReturnsDetailsOfASubscribedOption(optionId: string, serviceName: string): Promise<DbaaslogsOption>;
    /**
     * ServiceOption [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/option/%7BoptionId%7D/terminate#POST)
     */
    RemoveTheSpecifiedSubscribedOption(optionId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * Aliases [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias#GET)
     */
    ReturnsTheListOfAliasForConnectedUser(serviceName: string): Promise<string[]>;
    /**
     * Aliases [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias#POST)
     */
    RegisterANewElasticsearchAlias(serviceName: string, payload: DbaaslogsOutputElasticsearchAliasCreation): Promise<DbaaslogsOperation>;
    /**
     * Alias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D#DELETE)
     */
    RemoveSpecifiedElasticsearchAlias(aliasId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * Alias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D#GET)
     */
    ReturnsSpecifiedElasticsearchAlias(aliasId: string, serviceName: string): Promise<DbaaslogsAlias>;
    /**
     * Alias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D#PUT)
     */
    UpdateSpecifiedElasticsearchAlias(aliasId: string, serviceName: string, payload: DbaaslogsOutputElasticsearchAliasUpdate): Promise<DbaaslogsOperation>;
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/index#GET)
     */
    ReturnsTheListOfElasticsearchIndexesAttachedToSpecifiedElasticsearchAlias(aliasId: string, serviceName: string): Promise<string[]>;
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/index#POST)
     */
    AttachAElasticsearchIndexToSpecifiedElasticsearchAlias(aliasId: string, serviceName: string, payload: DbaaslogsOutputElasticsearchAliasIndexCreation): Promise<DbaaslogsOperation>;
    /**
     * AliasStream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/index/%7BindexId%7D#DELETE)
     */
    DetachAElasticsearchIndexFromSpecifiedElasticsearchAlias(aliasId: string, indexId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/stream#GET)
     */
    ReturnsTheListOfGraylogStreamsAttachedToSpecifiedElasticsearchAlias(aliasId: string, serviceName: string): Promise<string[]>;
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/stream#POST)
     */
    AttachAGraylogStreamToSpecifiedElasticsearchAlias(aliasId: string, serviceName: string, payload: DbaaslogsOutputElasticsearchAliasStreamCreation): Promise<DbaaslogsOperation>;
    /**
     * AliasStream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/stream/%7BstreamId%7D#DELETE)
     */
    DetachAGraylogStreamFromSpecifiedElasticsearchAlias(aliasId: string, serviceName: string, streamId: string): Promise<DbaaslogsOperation>;
    /**
     * StreamUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/url#GET)
     */
    ReturnsTheListOfUrlsOfSpecifiedGraylogStream(aliasId: string, serviceName: string): Promise<DbaaslogsUrl[]>;
    /**
     * Indexes [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index#GET)
     */
    ReturnsTheListOfElasticsearchIndexes(serviceName: string): Promise<string[]>;
    /**
     * Indexes [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index#POST)
     */
    RegisterANewElasticsearchIndex(serviceName: string, payload: DbaaslogsOutputElasticsearchIndexCreation): Promise<DbaaslogsOperation>;
    /**
     * Index [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D#DELETE)
     */
    RemoveSpecifiedElasticsearchIndex(indexId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * Index [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D#GET)
     */
    ReturnsSpecifiedElasticsearchIndex(indexId: string, serviceName: string): Promise<DbaaslogsIndex>;
    /**
     * Index [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D#PUT)
     */
    UpdateSpecifiedElasticsearchIndex(indexId: string, serviceName: string, payload: DbaaslogsOutputElasticsearchIndexUpdate): Promise<DbaaslogsOperation>;
    /**
     * StreamUrls [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D/url#GET)
     */
    /**
     * Dashboards [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard#GET)
     */
    ReturnsTheListOfGraylogDashboards(serviceName: string): Promise<string[]>;
    /**
     * Dashboards [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard#POST)
     */
    RegisterANewGraylogDashboard(serviceName: string, payload: DbaaslogsOutputGraylogDashboardCreation): Promise<DbaaslogsOperation>;
    /**
     * Dashboard [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D#DELETE)
     */
    RemoveSpecifiedGraylogDashboard(dashboardId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * Dashboard [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogDashboard(dashboardId: string, serviceName: string): Promise<DbaaslogsDashboard>;
    /**
     * Dashboard [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D#PUT)
     */
    UpdateInformationOfSpecifiedGraylogDashboard(dashboardId: string, serviceName: string, payload: DbaaslogsOutputGraylogDashboardUpdate): Promise<DbaaslogsOperation>;
    /**
     * DashboardClone [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D/duplicate#POST)
     */
    CopyAllWidgetsFromSpecifiedDashboardToANewOne(dashboardId: string, serviceName: string, payload: DbaaslogsOutputGraylogDashboardDuplicateCreation): Promise<DbaaslogsOperation>;
    /**
     * DashboardUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D/url#GET)
     */
    ReturnsTheListOfUrlsOfSpecifiedGraylogDashboard(dashboardId: string, serviceName: string): Promise<DbaaslogsUrl[]>;
    /**
     * Streams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream#GET)
     */
    ReturnsTheListOfGraylogStreams(serviceName: string): Promise<string[]>;
    /**
     * Streams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream#POST)
     */
    RegisterANewGraylogStream(serviceName: string, payload: DbaaslogsOutputGraylogStreamCreation): Promise<DbaaslogsOperation>;
    /**
     * Stream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D#DELETE)
     */
    RemoveSpecifiedGraylogStream(serviceName: string, streamId: string): Promise<DbaaslogsOperation>;
    /**
     * Stream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogStream(serviceName: string, streamId: string): Promise<DbaaslogsStream>;
    /**
     * Stream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D#PUT)
     */
    UpdateInformationOfSpecifiedGraylogStream(serviceName: string, streamId: string, payload: DbaaslogsOutputGraylogStreamUpdate): Promise<DbaaslogsOperation>;
    /**
     * StreamAlerts [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert#GET)
     */
    ReturnsTheListOfConfiguredAlertsOfSpecifiedGraylogStream(serviceName: string, streamId: string): Promise<string[]>;
    /**
     * StreamAlerts [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert#POST)
     */
    RegisterANewAlertOnSpecifiedGraylogStream(serviceName: string, streamId: string, payload: DbaaslogsOutputGraylogStreamAlertCreation): Promise<DbaaslogsOperation>;
    /**
     * StreamAlert [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert/%7BalertId%7D#DELETE)
     */
    RemoveAlertFromSpecifiedGraylogStream(alertId: string, serviceName: string, streamId: string): Promise<DbaaslogsOperation>;
    /**
     * StreamAlert [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert/%7BalertId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogStreamAlert(alertId: string, serviceName: string, streamId: string): Promise<DbaaslogsStreamAlertCondition>;
    /**
     * StreamAlert [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert/%7BalertId%7D#PUT)
     */
    UpdateAlertInformationOfSpecifiedGraylogStream(alertId: string, serviceName: string, streamId: string, payload: DbaaslogsOutputGraylogStreamAlertUpdate): Promise<DbaaslogsOperation>;
    /**
     * StreamArchives [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/archive#GET)
     */
    ReturnsTheListOfArchives(serviceName: string, streamId: string): Promise<string[]>;
    /**
     * StreamArchive [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/archive/%7BarchiveId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedArchive(archiveId: string, serviceName: string, streamId: string): Promise<DbaaslogsArchive>;
    /**
     * Streams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/archive/%7BarchiveId%7D/url#POST)
     */
    GetAPublicTemporaryURLToAccessTheArchive(archiveId: string, serviceName: string, streamId: string): Promise<DbaaslogsArchiveUrl>;
    /**
     * StreamRules [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule#GET)
     */
    ReturnsTheListOfRulesOfSpecifiedGraylogStream(serviceName: string, streamId: string): Promise<string[]>;
    /**
     * StreamRules [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule#POST)
     */
    RegisterANewRuleOnSpecifiedGraylogStream(serviceName: string, streamId: string, payload: DbaaslogsOutputGraylogStreamRuleCreation): Promise<DbaaslogsOperation>;
    /**
     * StreamRule [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule/%7BruleId%7D#DELETE)
     */
    RemoveSpecifiedGraylogStreamRule(ruleId: string, serviceName: string, streamId: string): Promise<DbaaslogsOperation>;
    /**
     * StreamRule [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule/%7BruleId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogStreamRule(ruleId: string, serviceName: string, streamId: string): Promise<DbaaslogsStreamRule[]>;
    /**
     * StreamUrls [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/url#GET)
     */
    /**
     * ServiceQuota [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/quota#GET)
     */
    ReturnsTheOverallQuotaLimits(serviceName: string): Promise<DbaaslogsQuota>;
    /**
     * Roles [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role#GET)
     */
    ReturnsTheListOfRoles(serviceName: string): Promise<string[]>;
    /**
     * Roles [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role#POST)
     */
    RegisterANewRole(serviceName: string, payload: DbaaslogsRoleCreation): Promise<DbaaslogsOperation>;
    /**
     * Role [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D#DELETE)
     */
    RemoveSpecifiedRole(roleId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * Role [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedRole(roleId: string, serviceName: string): Promise<DbaaslogsRole>;
    /**
     * Role [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D#PUT)
     */
    UpdateInformationOfSpecifiedRole(roleId: string, serviceName: string, payload: DbaaslogsRoleUpdate): Promise<DbaaslogsOperation>;
    /**
     * RoleMembers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member#GET)
     */
    ReturnsTheMemberListOfSpecifiedRole(roleId: string, serviceName: string): Promise<string[]>;
    /**
     * RoleMembers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member#POST)
     */
    AppendUserIntoTheMemberListOfSpecifiedRole(roleId: string, serviceName: string, payload: DbaaslogsRoleMemberCreation): Promise<DbaaslogsOperation>;
    /**
     * RoleMember [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member/%7Busername%7D#DELETE)
     */
    RemoveUserFromTheMemberListOfSpecifiedRole(roleId: string, serviceName: string, username: string): Promise<DbaaslogsOperation>;
    /**
     * RoleMember [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member/%7Busername%7D#GET)
     */
    ReturnsTheMemberMetadata(roleId: string, serviceName: string, username: string): Promise<DbaaslogsMember>;
    /**
     * RoleMember [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member/%7Busername%7D#PUT)
     */
    UpdateTheMemberMetadata(roleId: string, serviceName: string, username: string, payload: DbaaslogsRoleMemberUpdate): Promise<DbaaslogsOperation>;
    /**
     * RolePermissions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission#GET)
     */
    ReturnsTheListOfPermissionsOfSpecifiedRole(roleId: string, serviceName: string): Promise<string[]>;
    /**
     * RolePermission [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/%7BpermissionId%7D#DELETE)
     */
    RemoveSpecifiedPermission(permissionId: string, roleId: string, serviceName: string): Promise<DbaaslogsOperation>;
    /**
     * RolePermission [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/%7BpermissionId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedPermission(permissionId: string, roleId: string, serviceName: string): Promise<DbaaslogsPermission>;
    /**
     * RolePermissionAlias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/alias#POST)
     */
    AppendAElasticsearchAliasPermissionToRole(roleId: string, serviceName: string, payload: DbaaslogsRolePermissionAliasCreation): Promise<DbaaslogsOperation>;
    /**
     * RolePermissionIndex [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/dashboard#POST)
     */
    AppendAGraylogDashboardPermissionToRole(roleId: string, serviceName: string, payload: DbaaslogsRolePermissionDashboardCreation): Promise<DbaaslogsOperation>;
    /**
     * RolePermissionIndex [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/index#POST)
     */
    AppendAElasticsearchIndexPermissionToRole(roleId: string, serviceName: string, payload: DbaaslogsRolePermissionIndexCreation): Promise<DbaaslogsOperation>;
    /**
     * RolePermissionIndex [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/stream#POST)
     */
    AppendAGraylogStreamPermissionToRole(roleId: string, serviceName: string, payload: DbaaslogsRolePermissionStreamCreation): Promise<DbaaslogsOperation>;
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<ServicesService>;
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * Tokens [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token#GET)
     */
    ReturnsTheListOfServiceTokens(serviceName: string): Promise<string[]>;
    /**
     * Tokens [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token#POST)
     */
    AddANewToken(serviceName: string, payload: DbaaslogsTokenCreation): Promise<DbaaslogsOperation>;
    /**
     * Token [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token/%7BtokenId%7D#DELETE)
     */
    DeleteTheSpecifiedToken(serviceName: string, tokenId: string): Promise<DbaaslogsOperation>;
    /**
     * Token [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token/%7BtokenId%7D#GET)
     */
    ReturnsTheSpecifiedToken(serviceName: string, tokenId: string): Promise<DbaaslogsToken>;
    /**
     * ServiceUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/url#GET)
     */
    ReturnsPlatformUsefulUrls(serviceName: string): Promise<DbaaslogsUrl[]>;
    /**
     * ServiceChangePassword [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/user/changePassword#POST)
     */
    InitiateAPasswordChangeProcedure(serviceName: string, payload: DbaaslogsUserChangePasswordCreation): Promise<DbaaslogsOperation>;
    /**
     * Engines [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine#GET)
     */
    ReturnsTheListOfAvailableInputEngines(): Promise<string[]>;
    /**
     * Engine [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine/%7BengineId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedInputEngine(engineId: string): Promise<DbaaslogsEngine>;
    /**
     * Input engine helpers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine/%7BengineId%7D/helper#GET)
     */
    ReturnTheListOfAvailableHelpersForTheGivenInputEngine(engineId: string): Promise<string[]>;
    /**
     * Input engine helpers [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine/%7BengineId%7D/helper/%7BhelperId%7D#GET)
     */
    /**
     * Offer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/offer/%7Breference%7D#GET)
     */
    DisplaySpecifiedOffer(reference: string): Promise<DbaaslogsPublicOffer>;
}
//# sourceMappingURL=dbaas.logs.d.ts.map