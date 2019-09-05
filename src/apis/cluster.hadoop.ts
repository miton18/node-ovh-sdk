// GENERATED SDK for cluster/hadoop API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * All billing profile names
 */
export type ClusterhadoopBillingName = '100-small' | '200-cpu-1' | '220-cpu-3' | '300-disk-1' | '310-disk-3' | '900-vm-1'

/**
 * Detailed information on a Hadoop Cluster consumption
 */
export interface ClusterhadoopClusterConsumption {
  quantity: any
}

/*
 * All services names in a Hadoop Cluster
 */
export enum ClusterhadoopClusterServiceName {
  HBASE = 'HBase',
  HDFS = 'HDFS',
  HUE = 'HUE',
  HIVE = 'Hive',
  OOZIE = 'Oozie',
  SOLR = 'Solr',
  SPARK = 'Spark',
  SQOOP = 'Sqoop',
  YARN = 'YARN',
  ZOOKEEPER = 'ZooKeeper'
}

/*
 * All states a Hadoop Cluster can be in
 */
export enum ClusterhadoopClusterState {
  CREATED = 'created',
  CREATING = 'creating',
  DELETED = 'deleted',
  DELETING = 'deleting',
  DELIVERED = 'delivered',
  DELIVERING = 'delivering',
  TODELIVER = 'toDeliver'
}

/**
 * Managed Hadoop Cluster
 */
export interface Clusterhadoophadoop {
  clouderaVersion: string
  maxOrderableNodes: number
  name: string
  state: ClusterhadoopClusterState
}

/**
 * ACL for allowing ip blocks to access to your cluster
 */
export interface ClusterhadoopNetworkAcl {
  block: string
  description?: string
  state: ClusterhadoopNetworkAclState
}

/*
 * All states a Hadoop Cluster NetworkAcl can be in
 */
export enum ClusterhadoopNetworkAclState {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  PENDING = 'pending'
}

/**
 * Physical or Virtual Node
 */
export interface ClusterhadoopNode {
  billingProfileName: ClusterhadoopBillingName
  hostname: string
  ip: string
  isRemovable: boolean
  softwareProfile: ClusterhadoopNodeProfile
  state: ClusterhadoopNodeState
}

/**
 * Detailed information on a node billing profile
 */
export interface ClusterhadoopNodeBillingProfile {
  CPUFrequency: any
  diskCapacity: any
  nbCPUCores: number
  nbCPUThreads: number
  networkBandwidth: any
  nodeProfile: string
  ramQuantity: any
}

/**
 * Detailed information on a node consumption of a Hadoop Cluster
 */
export interface ClusterhadoopNodeConsumption {
  hostname: string
  nodeProfile: ClusterhadoopBillingName
  quantity: any
}

/*
 * All profiles a Hadoop Cluster Node can be
 */
export enum ClusterhadoopNodeProfile {
  APPLICATIONSERVER = 'ApplicationServer',
  BASICNODE = 'BasicNode',
  CLOUDERAMANAGER = 'ClouderaManager',
  MASTERSERVER = 'MasterServer',
  SECONDARYSERVER = 'SecondaryServer'
}

/*
 * All states a Hadoop Cluster Node can be in
 */
export enum ClusterhadoopNodeState {
  AVAILABLE = 'available',
  DELIVERED = 'delivered',
  TODEPLOY = 'toDeploy',
  UNAVAILABLE = 'unavailable'
}

/*
 * All states a Hadoop Cluster Cloud Task can be in
 */
export enum ClusterhadoopOperationState {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Detailed information on the order of one Hadoop Cluster
 */
export interface ClusterhadoopOrderInformations {
  maximumOrderableNodes: number
  minimumOrderableNodes: number
}

/**
 * Role (ie set of Hadoop services) of the Node
 */
export interface ClusterhadoopRole {
  id: number
  type: ClusterhadoopRoleType
}

/*
 * All roles a Hadoop Cluster Node can be
 */
export enum ClusterhadoopRoleType {
  CLOUDERA_MANAGER = 'cloudera_manager',
  DATA_NODE = 'data_node',
  ELASTICSEARCH_SERVER = 'elasticsearch_server',
  HBASE_MASTER = 'hbase_master',
  HBASE_REGION_SERVER = 'hbase_region_server',
  HIVE_SERVER2 = 'hive_server2',
  HUE = 'hue',
  IMPALA_DAEMON = 'impala_daemon',
  IMPALA_SERVER = 'impala_server',
  MAP_REDUCE_HISTORY_SERVER = 'map_reduce_history_server',
  NAME_NODE = 'name_node',
  OOZIE_SERVER = 'oozie_server',
  OPEN_TSDB = 'open_tsdb',
  SECONDARY_NAME_NODE = 'secondary_name_node',
  SOLR_SERVER = 'solr_server',
  SPARK_MASTER = 'spark_master',
  SPARK_WORKER = 'spark_worker',
  SQOOP_SERVER = 'sqoop_server',
  YARN_NODE_MANAGER = 'yarn_node_manager',
  YARN_RESOURCE_MANAGER = 'yarn_resource_manager',
  ZOO_KEEPER = 'zoo_keeper'
}

/**
 * Operation on a Hadoop Cluster component
 */
export interface ClusterhadoopTask {
  name: string
  status: ClusterhadoopOperationState
  taskId: number
}

/**
 * User allowed to access interfaces on your cluster
 */
export interface ClusterhadoopUser {
  clouderaManager: boolean
  httpFrontend: boolean
  hue: boolean
  username: string
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


export class ClusterHadoop {
  constructor(private client: Client) {}

  /**
   * Operations about the HADOOPCLUSTER service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/cluster/hadoop`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Managed Hadoop Cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<Clusterhadoophadoop> {
    let url = `/cluster/hadoop/${serviceName}`

    return this.client.request<Clusterhadoophadoop>('GET', url)
  }

  /**
   * consumptions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/consumptions#GET)
   */
  GetTheCurrentConsumptionsThatYouWillBilledForOnTheNextBill(serviceName: string): Promise<ClusterhadoopClusterConsumption> {
    let url = `/cluster/hadoop/${serviceName}/consumptions`

    return this.client.request<ClusterhadoopClusterConsumption>('GET', url)
  }

  /**
   * List the cluster.hadoop.NetworkAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl#GET)
   */
  NetworkACLAssociatedWithThisHadoopCluster(serviceName: string): Promise<string[]> {
    let url = `/cluster/hadoop/${serviceName}/networkAcl`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the cluster.hadoop.NetworkAcl objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl#POST)
   */
  AddAnACLToYourCluster(serviceName: string, block?: string, description?: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/networkAcl`

    return this.client.request<ClusterhadoopTask>('POST', url, {block, description})
  }

  /**
   * ACL for allowing ip blocks to access to your cluster [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl/%7Bblock%7D#GET)
   */
  /*
  GetThisObjectProperties(block: string, serviceName: string): Promise<ClusterhadoopNetworkAcl> {
    let url = `/cluster/hadoop/${serviceName}/networkAcl/${block}`

    return this.client.request<ClusterhadoopNetworkAcl>('GET', url)
  }
  */

  /**
   * ACL for allowing ip blocks to access to your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl/%7Bblock%7D#PUT)
   */
  AlterThisObjectProperties(block: string, serviceName: string, payload: ClusterhadoopNetworkAcl): Promise<void> {
    let url = `/cluster/hadoop/${serviceName}/networkAcl/${block}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * ACL for allowing ip blocks to access to your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl/%7Bblock%7D#DELETE)
   */
  RemoveThisACL(block: string, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/networkAcl/${block}`

    return this.client.request<ClusterhadoopTask>('DELETE', url)
  }

  /**
   * List the cluster.hadoop.Node objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node#GET)
   */
  NodesOfTheCluster(serviceName: string, softwareProfile?: ClusterhadoopNodeProfile): Promise<string[]> {
    let url = `/cluster/hadoop/${serviceName}/node?`

    const queryParams = new QueryParams()
    if (softwareProfile) { queryParams.set('softwareProfile', softwareProfile.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Physical or Virtual Node [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D#GET)
   */
  /*
  GetThisObjectProperties(hostname: string, serviceName: string): Promise<ClusterhadoopNode> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}`

    return this.client.request<ClusterhadoopNode>('GET', url)
  }
  */

  /**
   * Physical or Virtual Node [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D#DELETE)
   */
  RemoveThisNodeFromTheCluster(hostname: string, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}`

    return this.client.request<ClusterhadoopTask>('DELETE', url)
  }

  /**
   * decommission operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/decommission#POST)
   */
  DecommissionTheNodeAndAllTheServicesOnIt(hostname: string, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/decommission`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * recommission operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/recommission#POST)
   */
  RecommissionTheNodeAndAllTheServicesOnIt(hostname: string, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/recommission`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * List the cluster.hadoop.Role objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role#GET)
   */
  RolesIeSetOfHadoopServicesOfTheNode(hostname: string, serviceName: string): Promise<ClusterhadoopRoleTypeEnum[]> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role`

    return this.client.request<ClusterhadoopRoleTypeEnum[]>('GET', url)
  }

  /**
   * List the cluster.hadoop.Role objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role#POST)
   */
  AddTheRoleToTheNode(hostname: string, serviceName: string, type: ClusterhadoopRoleType): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role`

    return this.client.request<ClusterhadoopTask>('POST', url, {type})
  }

  /**
   * Role (ie set of Hadoop services) of the Node [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D#GET)
   */
  /*
  GetThisObjectProperties(hostname: string, serviceName: string, type: ClusterhadoopRoleType): Promise<ClusterhadoopRole> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}`

    return this.client.request<ClusterhadoopRole>('GET', url)
  }
  */

  /**
   * Role (ie set of Hadoop services) of the Node [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D#DELETE)
   */
  RemoveThisRoleFromTheNode(hostname: string, serviceName: string, type: ClusterhadoopRoleType): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}`

    return this.client.request<ClusterhadoopTask>('DELETE', url)
  }

  /**
   * restart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D/restart#POST)
   */
  RestartTheRoleOnTheNodeTHISACTIONWILLRESTARTOTHERDEPENDANTROLES(hostname: string, serviceName: string, type: ClusterhadoopRoleType): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/restart`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * start operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D/start#POST)
   */
  StartTheRoleOnTheNode(hostname: string, serviceName: string, type: ClusterhadoopRoleType): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/start`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * stop operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D/stop#POST)
   */
  StopTheRoleOnTheNodeTHISACTIONWILLSTOPOTHERDEPENDANTROLES(hostname: string, serviceName: string, type: ClusterhadoopRoleType): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/stop`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * nodeBillingProfiles operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/nodeBillingProfiles#GET)
   */
  DetailedDescriptionForEachNodeProfile(serviceName: string): Promise<ClusterhadoopNodeBillingProfile[]> {
    let url = `/cluster/hadoop/${serviceName}/nodeBillingProfiles`

    return this.client.request<ClusterhadoopNodeBillingProfile[]>('GET', url)
  }

  /**
   * nodeConsumptions operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/nodeConsumptions#GET)
   */
  GetTheCurrentNodeConsumptionsThatYouWillBilledForOnTheNextBill(serviceName: string): Promise<ClusterhadoopNodeConsumption[]> {
    let url = `/cluster/hadoop/${serviceName}/nodeConsumptions`

    return this.client.request<ClusterhadoopNodeConsumption[]>('GET', url)
  }

  /**
   * orderableNodeProfiles operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/orderableNodeProfiles#GET)
   */
  ListOfOrderableNodeProfiles(serviceName: string): Promise<string[]> {
    let url = `/cluster/hadoop/${serviceName}/orderableNodeProfiles`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * orderNewNodeHourly operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/orderNewNodeHourly#POST)
   */
  OrderANewNodeInTheCluster(nodeProfile: string, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/orderNewNodeHourly`

    return this.client.request<ClusterhadoopTask>('POST', url, {nodeProfile})
  }

  /**
   * restart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/restart#POST)
   */
  RestartTheClouderaManagerHadoopClusterTHISACTIONWILLRESTARTEVERYSERVICE(serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/restart`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * restart operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/service/restart#POST)
   */
  RestartAClouderaManagerServiceTHISACTIONWILLRESTARTOTHERDEPENDANTSERVICES(service: ClusterhadoopClusterServiceName, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/service/restart`

    return this.client.request<ClusterhadoopTask>('POST', url, {service})
  }

  /**
   * start operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/service/start#POST)
   */
  StartAClouderaManagerService(service: ClusterhadoopClusterServiceName, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/service/start`

    return this.client.request<ClusterhadoopTask>('POST', url, {service})
  }

  /**
   * stop operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/service/stop#POST)
   */
  StopAClouderaManagerServiceTHISACTIONWILLSTOPOTHERDEPENDANTSERVICES(service: ClusterhadoopClusterServiceName, serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/service/stop`

    return this.client.request<ClusterhadoopTask>('POST', url, {service})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/cluster/hadoop/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/cluster/hadoop/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * start operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/start#POST)
   */
  StartTheClouderaManagerHadoopCluster(serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/start`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * stop operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/stop#POST)
   */
  StopAClouderaManagerHadoopClusterTHISACTIONWILLSTOPEVERYSERVICE(serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/stop`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * List the cluster.hadoop.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/task#GET)
   */
  TasksAssociatedWithThisHadoopCluster(serviceName: string, status?: ClusterhadoopOperationState): Promise<number[]> {
    let url = `/cluster/hadoop/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a Hadoop Cluster component [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/task/${taskId}`

    return this.client.request<ClusterhadoopTask>('GET', url)
  }
  */

  /**
   * terminate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourServiceTHECLUSTERWILLBEDELETEDALLYOURDATAWILLBELOST(serviceName: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/terminate`

    return this.client.request<ClusterhadoopTask>('POST', url)
  }

  /**
   * List the cluster.hadoop.User objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user#GET)
   */
  UsersAssociatedWithThisHadoopCluster(serviceName: string): Promise<string[]> {
    let url = `/cluster/hadoop/${serviceName}/user`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the cluster.hadoop.User objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user#POST)
   */
  AddAnUserToYourCluster(clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, serviceName: string, username: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/user`

    return this.client.request<ClusterhadoopTask>('POST', url, {clouderaManager, httpFrontend, hue, password, username})
  }

  /**
   * User allowed to access interfaces on your cluster [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user/%7Busername%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, username: string): Promise<ClusterhadoopUser> {
    let url = `/cluster/hadoop/${serviceName}/user/${username}`

    return this.client.request<ClusterhadoopUser>('GET', url)
  }
  */

  /**
   * User allowed to access interfaces on your cluster [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user/%7Busername%7D#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, username: string, payload: ClusterhadoopUser): Promise<void> {
    let url = `/cluster/hadoop/${serviceName}/user/${username}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * User allowed to access interfaces on your cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user/%7Busername%7D#DELETE)
   */
  RemoveThisUser(serviceName: string, username: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/user/${username}`

    return this.client.request<ClusterhadoopTask>('DELETE', url)
  }

  /**
   * resetPassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user/%7Busername%7D/resetPassword#POST)
   */
  ResetThePasswordForAGivenHadoopClusterUser(password: string, serviceName: string, username: string): Promise<ClusterhadoopTask> {
    let url = `/cluster/hadoop/${serviceName}/user/${username}/resetPassword`

    return this.client.request<ClusterhadoopTask>('POST', url, {password})
  }

  /**
   * Get the orderable node profiles and their characteristics [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/orderableNodeProfiles#GET)
   */
  GetTheOrderableNodeProfilesAndTheirCharacteristics(): Promise<ClusterhadoopNodeBillingProfile[]> {
    let url = `/cluster/hadoop/orderableNodeProfiles`

    return this.client.request<ClusterhadoopNodeBillingProfile[]>('GET', url)
  }

  /**
   * Get informations about the order of one cluster [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/orderInformations#GET)
   */
  GetInformationsAboutTheOrderOfOneCluster(): Promise<ClusterhadoopOrderInformations> {
    let url = `/cluster/hadoop/orderInformations`

    return this.client.request<ClusterhadoopOrderInformations>('GET', url)
  }

}
