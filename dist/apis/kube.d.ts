import { Client } from '../client';
/**
 * Managed Kubernetes cluster description
 */
export interface KubeCluster {
    controlPlaneIsUpToDate: boolean;
    createdAt: string;
    id: string;
    isUpToDate: boolean;
    name: string;
    nodesUrl: string;
    status: KubeClusterStatus;
    updatedAt: string;
    updatePolicy: string;
    url: string;
    version: string;
}
export declare enum KubeClusterStatus {
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
/**
 * Kubeconfig description
 */
export interface KubeKubeconfig {
    content: string;
}
/**
 * Node installed on your cluster
 */
export interface KubeNode {
    createdAt: string;
    flavor: string;
    id: string;
    instanceId?: string;
    isUpToDate: boolean;
    name?: string;
    projectId: string;
    status: KubeNodeStatus;
    updatedAt: string;
    version: string;
}
export declare enum KubeNodeStatus {
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
/**
 * Public Cloud project linked to a Kube cluster
 */
export interface KubePublicCloudProject {
    projectId: string;
    region: string;
}
export declare enum KubeResetWorkerNodesPolicy {
    REINSTALL = "reinstall",
    DELETE = "delete"
}
export declare enum KubeUpdatePolicy {
    ALWAYS_UPDATE = "ALWAYS_UPDATE",
    MINIMAL_DOWNTIME = "MINIMAL_DOWNTIME",
    NEVER_UPDATE = "NEVER_UPDATE"
}
export declare type KubeVersion = '1.13' | '1.14' | '1.15';
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
export declare class Kube {
    private client;
    constructor(client: Client);
    /**
     * Operations about the KUBERNETES service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Manage your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D#GET)
     */
    GetInformationAboutYourManagedKubernetesCluster(serviceName: string): Promise<KubeCluster>;
    /**
     * Manage your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D#PUT)
     */
    UpdateInformationAboutYourManagedKubernetesCluster(name: string, serviceName: string): Promise<void>;
    /**
     * Change the contacts of this service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Confirm termination of your service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * Get your cluster configuration [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/kubeconfig#GET)
     */
    GetKubeconfigFile(serviceName: string): Promise<KubeKubeconfig>;
    /**
     * Manage your Public Cloud cluster nodes [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node#GET)
     */
    ListYourNodesOnPublicCloud(serviceName: string): Promise<KubeNode[]>;
    /**
     * Manage your Public Cloud cluster nodes [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node#POST)
     */
    DeployANodeForYourClusterOnPublicCloud(flavorName: string, serviceName: string, name?: string): Promise<KubeNode>;
    /**
     * Manage a single node on your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node/%7BnodeId%7D#DELETE)
     */
    DeleteANodeOnYourCluster(nodeId: string, serviceName: string): Promise<void>;
    /**
     * Manage a single node on your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node/%7BnodeId%7D#GET)
     */
    GetInformationOnASpecificNodeOnYourCluster(nodeId: string, serviceName: string): Promise<KubeNode>;
    /**
     * Manage your Public Cloud projects linked to your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/project#GET)
     */
    GetYourPublicCloudProjectLinkedToYourCluster(serviceName: string): Promise<KubePublicCloudProject>;
    /**
     * Reset your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/reset#POST)
     */
    ResetCluster_AllKubernetesDataWillBeErasedPodsServicesConfigurationEtcNodesWillBeEitherDeletedOrReinstalled(serviceName: string, version?: KubeVersion, workerNodesPolicy?: KubeResetWorkerNodesPolicy): Promise<void>;
    /**
     * Details about a Service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<ServicesService>;
    /**
     * Details about a Service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * Terminate your service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * Update cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/update#POST)
     */
    UpdateClusterToTheLatestPatchVersion(serviceName: string): Promise<void>;
    /**
     * Manage the update policy of your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/updatePolicy#PUT)
     */
    ChangeTheUpdatePolicyOfYourCluster(serviceName: string, updatePolicy: KubeUpdatePolicy): Promise<void>;
}
//# sourceMappingURL=kube.d.ts.map