// GENERATED SDK for analytics API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Cluster information
 */
export interface AnalyticsCluster {
  analyticsProjectId?: string
  clusterName?: string
  clusterType?: string
  deploymentEndDate?: string
  deploymentStartDate?: string
  domain?: string
  nodes?: AnalyticsclusterNode[]
  osProjectId?: string
  osRegion?: string
  serviceName: string
  status: AnalyticsStatus
}

/**
 * Cluster activity
 */
export interface AnalyticsclusterActivity {
  description: string
  status: AnalyticsStatus
  timestamp: string
  user?: string
}

/**
 * Analytics Cluster deployment parameters
 */
export interface AnalyticsclusterDeploy {
  clusterName: string
  clusterType: string
  edgeNodeStorage: number
  hdfsEffectiveStorage: number
  hdfsReplicationFactor: number
  masterNodeStorage: number
  masterPassword: string
  nodes: AnalyticsnodeDeploy[]
  osProjectId: string
  osProjectName: string
  osRegion: string
  osToken: string
  sshPublicKey: string
}

/**
 * Cluster deployment status
 */
export interface AnalyticsclusterdeployStatus {
  percentage: number
  status: AnalyticsStatus
  task: string
}

/**
 * Analytics Cluster destruction parameters
 */
export interface AnalyticsclusterDestroy {
  osToken: string
}

/**
 * Cluster node information
 */
export interface AnalyticsclusterNode {
  deploymentEndDate?: string
  deploymentStartDate?: string
  flavor?: string
  hostname?: string
  ip?: string
  nodeId: string
  nodeType: AnalyticsnodeType
  osRegion?: string
  status: AnalyticsStatus
  storage?: number
}

/**
 * Component of the service
 */
export interface AnalyticsComponent {
  name: string
  version: string
}

/**
 * node capability
 */
export interface AnalyticsnodeCapability {
  instanceMax: number
  instanceMin: number
  instanceType: string[]
  rawStorageMaxGb: number
  rawStorageMinGb: number
}

/**
 * Node information
 */
export interface AnalyticsnodeDeploy {
  nodeFlavor: string
  nodeType: AnalyticsnodeType
}

/*
 * Node type
 */
export enum AnalyticsnodeType {
  MASTER = 'MASTER',
  SLAVE = 'SLAVE',
  EDGE = 'EDGE',
  UTILITY = 'UTILITY'
}

/**
 * Platform capabilities
 */
export interface AnalyticsplatformCapability {
  availableRegion: string[]
  bastionNode: AnalyticsnodeCapability
  components: AnalyticsComponent[]
  edgeNode: AnalyticsnodeCapability
  hdfsReplicationFactor: number
  masterNode: AnalyticsnodeCapability
  requirements?: AnalyticsplatformCapabilityRequirement[]
  utilityNode: AnalyticsnodeCapability
  version: string
  versionDescription: string
  workerNode: AnalyticsnodeCapability
}

/**
 * Requirement for fields to be displayed or hidden
 */
export interface AnalyticsplatformCapabilityRequirement {
  display: boolean
  fieldName: string
}

/*
 * Status code
 */
export enum AnalyticsStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  DONE = 'DONE',
  ERROR = 'ERROR',
  UNKNOWN = 'UNKNOWN',
  OK = 'OK',
  TO_DEPLOY = 'TO_DEPLOY',
  DEPLOYING = 'DEPLOYING',
  DEPLOYED = 'DEPLOYED',
  TO_DESTROY = 'TO_DESTROY',
  DESTROYED = 'DESTROYED',
  INITIALIZED = 'INITIALIZED'
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


export class Analytics {
  constructor(private client: Client) {}

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/capabilities/platforms#GET)
   */
  PlatformCapabilities(): Promise<AnalyticsplatformCapability[]> {
    let url = `/analytics/capabilities/platforms`

    return this.client.request<AnalyticsplatformCapability[]>('GET', url)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/analytics/platforms`

    return this.client.request<string[]>('GET', url)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D#GET)
   */
  GetDetailsAboutAService(serviceName: string): Promise<AnalyticsCluster> {
    let url = `/analytics/platforms/${serviceName}`

    return this.client.request<AnalyticsCluster>('GET', url)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/activity#GET)
   */
  GetActivityLogs(serviceName: string): Promise<AnalyticsclusterActivity[]> {
    let url = `/analytics/platforms/${serviceName}/activity`

    return this.client.request<AnalyticsclusterActivity[]>('GET', url)
  }

  /**
   * Change the contacts of this service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/analytics/platforms/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Confirm termination of your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/analytics/platforms/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/deploy#POST)
   */
  DeployAnAnalyticsDataPlatform(serviceName: string, payload: AnalyticsclusterDeploy): Promise<AnalyticsclusterDeploy> {
    let url = `/analytics/platforms/${serviceName}/deploy`

    return this.client.request<AnalyticsclusterDeploy>('POST', url, payload)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/destroy#POST)
   */
  DestroyAnAnalyticsDataPlatform(serviceName: string, payload: AnalyticsclusterDestroy): Promise<void> {
    let url = `/analytics/platforms/${serviceName}/destroy`

    return this.client.request<void>('POST', url, payload)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/nodes#GET)
   */
  ListAvailableNodes(serviceName: string): Promise<string[]> {
    let url = `/analytics/platforms/${serviceName}/nodes`

    return this.client.request<string[]>('GET', url)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/nodes/%7BnodeId%7D#GET)
   */
  GetDetailsAboutNodes(nodeId: string, serviceName: string): Promise<AnalyticsclusterNode> {
    let url = `/analytics/platforms/${serviceName}/nodes/${nodeId}`

    return this.client.request<AnalyticsclusterNode>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/serviceInfos#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/analytics/platforms/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/analytics/platforms/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/status#GET)
   */
  GetClusterDeploymentStatus(serviceName: string): Promise<AnalyticsclusterdeployStatus[]> {
    let url = `/analytics/platforms/${serviceName}/status`

    return this.client.request<AnalyticsclusterdeployStatus[]>('GET', url)
  }

  /**
   * Terminate your service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/analytics/platforms/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

}
