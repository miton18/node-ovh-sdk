// GENERATED SDK for kube API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Managed Kubernetes cluster description
 */
export interface KubeCluster {
  controlPlaneIsUpToDate: boolean
  createdAt: string
  id: string
  isUpToDate: boolean
  name: string
  nodesUrl: string
  status: KubeClusterStatus
  updatedAt: string
  updatePolicy: string
  url: string
  version: string
}

/*
 * Enum values for Status
 */
export enum KubeClusterStatus {
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
 * Kubeconfig description
 */
export interface KubeKubeconfig {
  content: string
}

/**
 * Node installed on your cluster
 */
export interface KubeNode {
  createdAt: string
  flavor: string
  id: string
  instanceId?: string
  isUpToDate: boolean
  name?: string
  projectId: string
  status: KubeNodeStatus
  updatedAt: string
  version: string
}

/*
 * Enum values for Status
 */
export enum KubeNodeStatus {
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

/**
 * Public Cloud project linked to a Kube cluster
 */
export interface KubePublicCloudProject {
  projectId: string
  region: string
}

/*
 * Enum values for worker nodes reset policy
 */
export enum KubeResetWorkerNodesPolicy {
  REINSTALL = 'reinstall',
  DELETE = 'delete'
}

/*
 * Enum values for UpdatePolicy
 */
export enum KubeUpdatePolicy {
  ALWAYS_UPDATE = 'ALWAYS_UPDATE',
  MINIMAL_DOWNTIME = 'MINIMAL_DOWNTIME',
  NEVER_UPDATE = 'NEVER_UPDATE'
}

/*
 * List of available versions for installation
 */
export type KubeVersion = '1.13' | '1.14' | '1.15'

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


export class Kube {
  constructor(private client: Client) {}

  /**
   * Operations about the KUBERNETES service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/kube`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Manage your cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D#GET)
   */
  GetInformationAboutYourManagedKubernetesCluster(serviceName: string): Promise<KubeCluster> {
    let url = `/kube/${serviceName}`

    return this.client.request<KubeCluster>('GET', url)
  }

  /**
   * Manage your cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D#PUT)
   */
  UpdateInformationAboutYourManagedKubernetesCluster(name: string, serviceName: string): Promise<void> {
    let url = `/kube/${serviceName}`

    return this.client.request<void>('PUT', url, {name})
  }

  /**
   * Change the contacts of this service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/kube/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/kube/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Get your cluster configuration [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/kubeconfig#GET)
   */
  GetKubeconfigFile(serviceName: string): Promise<KubeKubeconfig> {
    let url = `/kube/${serviceName}/kubeconfig`

    return this.client.request<KubeKubeconfig>('GET', url)
  }

  /**
   * Manage your Public Cloud cluster nodes [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node#GET)
   */
  ListYourNodesOnPublicCloud(serviceName: string): Promise<KubeNode[]> {
    let url = `/kube/${serviceName}/publiccloud/node`

    return this.client.request<KubeNode[]>('GET', url)
  }

  /**
   * Manage your Public Cloud cluster nodes [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node#POST)
   */
  DeployANodeForYourClusterOnPublicCloud(flavorName: string, serviceName: string, name?: string): Promise<KubeNode> {
    let url = `/kube/${serviceName}/publiccloud/node`

    return this.client.request<KubeNode>('POST', url, {flavorName, name})
  }

  /**
   * Manage a single node on your cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node/%7BnodeId%7D#DELETE)
   */
  DeleteANodeOnYourCluster(nodeId: string, serviceName: string): Promise<void> {
    let url = `/kube/${serviceName}/publiccloud/node/${nodeId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Manage a single node on your cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node/%7BnodeId%7D#GET)
   */
  GetInformationOnASpecificNodeOnYourCluster(nodeId: string, serviceName: string): Promise<KubeNode> {
    let url = `/kube/${serviceName}/publiccloud/node/${nodeId}`

    return this.client.request<KubeNode>('GET', url)
  }

  /**
   * Manage your Public Cloud projects linked to your cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/project#GET)
   */
  GetYourPublicCloudProjectLinkedToYourCluster(serviceName: string): Promise<KubePublicCloudProject> {
    let url = `/kube/${serviceName}/publiccloud/project`

    return this.client.request<KubePublicCloudProject>('GET', url)
  }

  /**
   * Reset your cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/reset#POST)
   */
  ResetCluster_AllKubernetesDataWillBeErasedPodsServicesConfigurationEtcNodesWillBeEitherDeletedOrReinstalled(serviceName: string, version?: KubeVersion, workerNodesPolicy?: KubeResetWorkerNodesPolicy): Promise<void> {
    let url = `/kube/${serviceName}/reset`

    return this.client.request<void>('POST', url, {version, workerNodesPolicy})
  }

  /**
   * Details about a Service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/serviceInfos#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/kube/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }

  /**
   * Details about a Service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/kube/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Terminate your service [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/kube/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Update cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/update#POST)
   */
  UpdateClusterToTheLatestPatchVersion(serviceName: string): Promise<void> {
    let url = `/kube/${serviceName}/update`

    return this.client.request<void>('POST', url)
  }

  /**
   * Manage the update policy of your cluster [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/updatePolicy#PUT)
   */
  ChangeTheUpdatePolicyOfYourCluster(serviceName: string, updatePolicy: KubeUpdatePolicy): Promise<void> {
    let url = `/kube/${serviceName}/updatePolicy`

    return this.client.request<void>('PUT', url, {updatePolicy})
  }

}
