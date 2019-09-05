import { Client } from '../client';
/**
 * Cluster information
 */
export interface AnalyticsCluster {
    analyticsProjectId?: string;
    clusterName?: string;
    clusterType?: string;
    deploymentEndDate?: string;
    deploymentStartDate?: string;
    domain?: string;
    nodes?: AnalyticsclusterNode[];
    osProjectId?: string;
    osRegion?: string;
    serviceName: string;
    status: AnalyticsStatus;
}
/**
 * Cluster activity
 */
export interface AnalyticsclusterActivity {
    description: string;
    status: AnalyticsStatus;
    timestamp: string;
    user?: string;
}
/**
 * Analytics Cluster deployment parameters
 */
export interface AnalyticsclusterDeploy {
    clusterName: string;
    clusterType: string;
    edgeNodeStorage: number;
    hdfsEffectiveStorage: number;
    hdfsReplicationFactor: number;
    masterNodeStorage: number;
    masterPassword: string;
    nodes: AnalyticsnodeDeploy[];
    osProjectId: string;
    osProjectName: string;
    osRegion: string;
    osToken: string;
    sshPublicKey: string;
}
/**
 * Cluster deployment status
 */
export interface AnalyticsclusterdeployStatus {
    percentage: number;
    status: AnalyticsStatus;
    task: string;
}
/**
 * Analytics Cluster destruction parameters
 */
export interface AnalyticsclusterDestroy {
    osToken: string;
}
/**
 * Cluster node information
 */
export interface AnalyticsclusterNode {
    deploymentEndDate?: string;
    deploymentStartDate?: string;
    flavor?: string;
    hostname?: string;
    ip?: string;
    nodeId: string;
    nodeType: AnalyticsnodeType;
    osRegion?: string;
    status: AnalyticsStatus;
    storage?: number;
}
/**
 * Component of the service
 */
export interface AnalyticsComponent {
    name: string;
    version: string;
}
/**
 * node capability
 */
export interface AnalyticsnodeCapability {
    instanceMax: number;
    instanceMin: number;
    instanceType: string[];
    rawStorageMaxGb: number;
    rawStorageMinGb: number;
}
/**
 * Node information
 */
export interface AnalyticsnodeDeploy {
    nodeFlavor: string;
    nodeType: AnalyticsnodeType;
}
export declare enum AnalyticsnodeType {
    MASTER = "MASTER",
    SLAVE = "SLAVE",
    EDGE = "EDGE",
    UTILITY = "UTILITY"
}
/**
 * Platform capabilities
 */
export interface AnalyticsplatformCapability {
    availableRegion: string[];
    bastionNode: AnalyticsnodeCapability;
    components: AnalyticsComponent[];
    edgeNode: AnalyticsnodeCapability;
    hdfsReplicationFactor: number;
    masterNode: AnalyticsnodeCapability;
    requirements?: AnalyticsplatformCapabilityRequirement[];
    utilityNode: AnalyticsnodeCapability;
    version: string;
    versionDescription: string;
    workerNode: AnalyticsnodeCapability;
}
/**
 * Requirement for fields to be displayed or hidden
 */
export interface AnalyticsplatformCapabilityRequirement {
    display: boolean;
    fieldName: string;
}
export declare enum AnalyticsStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    SUCCEEDED = "SUCCEEDED",
    FAILED = "FAILED",
    DONE = "DONE",
    ERROR = "ERROR",
    UNKNOWN = "UNKNOWN",
    OK = "OK",
    TO_DEPLOY = "TO_DEPLOY",
    DEPLOYING = "DEPLOYING",
    DEPLOYED = "DEPLOYED",
    TO_DESTROY = "TO_DESTROY",
    DESTROYED = "DESTROYED",
    INITIALIZED = "INITIALIZED"
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
export declare enum ServiceTerminationFutureUse {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReason {
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
export declare class Analytics {
    private client;
    constructor(client: Client);
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/capabilities/platforms#GET)
     */
    PlatformCapabilities(): Promise<AnalyticsplatformCapability[]>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D#GET)
     */
    GetDetailsAboutAService(serviceName: string): Promise<AnalyticsCluster>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/activity#GET)
     */
    GetActivityLogs(serviceName: string): Promise<AnalyticsclusterActivity[]>;
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/deploy#POST)
     */
    DeployAnAnalyticsDataPlatform(serviceName: string, payload: AnalyticsclusterDeploy): Promise<AnalyticsclusterDeploy>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/destroy#POST)
     */
    DestroyAnAnalyticsDataPlatform(serviceName: string, payload: AnalyticsclusterDestroy): Promise<void>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/nodes#GET)
     */
    ListAvailableNodes(serviceName: string): Promise<string[]>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/nodes/%7BnodeId%7D#GET)
     */
    GetDetailsAboutNodes(nodeId: string, serviceName: string): Promise<AnalyticsclusterNode>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<ServicesService>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/status#GET)
     */
    GetClusterDeploymentStatus(serviceName: string): Promise<AnalyticsclusterdeployStatus[]>;
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
}
//# sourceMappingURL=analytics.d.ts.map