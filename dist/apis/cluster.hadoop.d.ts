import { Client } from '../client';
export declare type ClusterhadoopBillingNameEnum = '100-small' | '200-cpu-1' | '220-cpu-3' | '300-disk-1' | '310-disk-3' | '900-vm-1';
export interface ClusterhadoopClusterConsumption {
    quantity: any;
}
export declare enum ClusterhadoopClusterServiceNameEnum {
    HBASE = "HBase",
    HDFS = "HDFS",
    HUE = "HUE",
    HIVE = "Hive",
    OOZIE = "Oozie",
    SOLR = "Solr",
    SPARK = "Spark",
    SQOOP = "Sqoop",
    YARN = "YARN",
    ZOOKEEPER = "ZooKeeper"
}
export declare enum ClusterhadoopClusterStateEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETED = "deleted",
    DELETING = "deleting",
    DELIVERED = "delivered",
    DELIVERING = "delivering",
    TODELIVER = "toDeliver"
}
export interface Clusterhadoophadoop {
    state: ClusterhadoopClusterStateEnum;
    name: string;
    clouderaVersion: string;
    maxOrderableNodes: number;
}
export interface ClusterhadoopNetworkAcl {
    block: string;
    description?: string;
    state: ClusterhadoopNetworkAclStateEnum;
}
export declare enum ClusterhadoopNetworkAclStateEnum {
    DISABLED = "disabled",
    ENABLED = "enabled",
    PENDING = "pending"
}
export interface ClusterhadoopNode {
    isRemovable: boolean;
    softwareProfile: ClusterhadoopNodeProfileEnum;
    billingProfileName: ClusterhadoopBillingNameEnum;
    ip: string;
    state: ClusterhadoopNodeStateEnum;
    hostname: string;
}
export interface ClusterhadoopNodeBillingProfile {
    nbCPUThreads: number;
    nodeProfile: string;
    CPUFrequency: any;
    networkBandwidth: any;
    nbCPUCores: number;
    diskCapacity: any;
    ramQuantity: any;
}
export interface ClusterhadoopNodeConsumption {
    quantity: any;
    nodeProfile: ClusterhadoopBillingNameEnum;
    hostname: string;
}
export declare enum ClusterhadoopNodeProfileEnum {
    APPLICATIONSERVER = "ApplicationServer",
    BASICNODE = "BasicNode",
    CLOUDERAMANAGER = "ClouderaManager",
    MASTERSERVER = "MasterServer",
    SECONDARYSERVER = "SecondaryServer"
}
export declare enum ClusterhadoopNodeStateEnum {
    AVAILABLE = "available",
    DELIVERED = "delivered",
    TODEPLOY = "toDeploy",
    UNAVAILABLE = "unavailable"
}
export declare enum ClusterhadoopOperationStateEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface ClusterhadoopOrderInformations {
    minimumOrderableNodes: number;
    maximumOrderableNodes: number;
}
export interface ClusterhadoopRole {
    id: number;
    type: ClusterhadoopRoleTypeEnum;
}
export declare enum ClusterhadoopRoleTypeEnum {
    CLOUDERA_MANAGER = "cloudera_manager",
    DATA_NODE = "data_node",
    ELASTICSEARCH_SERVER = "elasticsearch_server",
    HBASE_MASTER = "hbase_master",
    HBASE_REGION_SERVER = "hbase_region_server",
    HIVE_SERVER2 = "hive_server2",
    HUE = "hue",
    IMPALA_DAEMON = "impala_daemon",
    IMPALA_SERVER = "impala_server",
    MAP_REDUCE_HISTORY_SERVER = "map_reduce_history_server",
    NAME_NODE = "name_node",
    OOZIE_SERVER = "oozie_server",
    OPEN_TSDB = "open_tsdb",
    SECONDARY_NAME_NODE = "secondary_name_node",
    SOLR_SERVER = "solr_server",
    SPARK_MASTER = "spark_master",
    SPARK_WORKER = "spark_worker",
    SQOOP_SERVER = "sqoop_server",
    YARN_NODE_MANAGER = "yarn_node_manager",
    YARN_RESOURCE_MANAGER = "yarn_resource_manager",
    ZOO_KEEPER = "zoo_keeper"
}
export interface ClusterhadoopTask {
    taskId: number;
    name: string;
    status: ClusterhadoopOperationStateEnum;
}
export interface ClusterhadoopUser {
    username: string;
    httpFrontend: boolean;
    clouderaManager: boolean;
    hue: boolean;
}
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
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
    period?: number;
    automatic: boolean;
    manualPayment?: boolean;
    forced: boolean;
    deleteAtExpiration: boolean;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesService {
    contactBilling: string;
    status: ServiceStateEnum;
    serviceId: number;
    contactTech: string;
    creation: string;
    renewalType: ServiceRenewalTypeEnum;
    renew?: ServiceRenewType;
    contactAdmin: string;
    engagedUpTo?: string;
    possibleRenewPeriod?: number[];
    expiration: string;
    domain: string;
    canDeleteAtExpiration: boolean;
}
export declare class ClusterHadoop {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<Clusterhadoophadoop>;
    GetTheCurrentConsumptionsThatYouWillBilledForOnTheNextBill(serviceName: string): Promise<ClusterhadoopClusterConsumption>;
    NetworkACLAssociatedWithThisHadoopCluster(serviceName: string): Promise<string[]>;
    AddAnACLToYourCluster(serviceName: string, block?: string, description?: string): Promise<ClusterhadoopTask>;
    AlterThisObjectProperties(block: string, serviceName: string, payload: ClusterhadoopNetworkAcl): Promise<void>;
    RemoveThisACL(block: string, serviceName: string): Promise<ClusterhadoopTask>;
    NodesOfTheCluster(serviceName: string, softwareProfile?: ClusterhadoopNodeProfileEnum): Promise<string[]>;
    RemoveThisNodeFromTheCluster(hostname: string, serviceName: string): Promise<ClusterhadoopTask>;
    DecommissionTheNodeAndAllTheServicesOnIt(hostname: string, serviceName: string): Promise<ClusterhadoopTask>;
    RecommissionTheNodeAndAllTheServicesOnIt(hostname: string, serviceName: string): Promise<ClusterhadoopTask>;
    RolesIeSetOfHadoopServicesOfTheNode(hostname: string, serviceName: string): Promise<ClusterhadoopRoleTypeEnum[]>;
    AddTheRoleToTheNode(hostname: string, serviceName: string, type: ClusterhadoopRoleTypeEnum): Promise<ClusterhadoopTask>;
    RemoveThisRoleFromTheNode(hostname: string, serviceName: string, type: ClusterhadoopRoleTypeEnum): Promise<ClusterhadoopTask>;
    RestartTheRoleOnTheNodeTHISACTIONWILLRESTARTOTHERDEPENDANTROLES(hostname: string, serviceName: string, type: ClusterhadoopRoleTypeEnum): Promise<ClusterhadoopTask>;
    StartTheRoleOnTheNode(hostname: string, serviceName: string, type: ClusterhadoopRoleTypeEnum): Promise<ClusterhadoopTask>;
    StopTheRoleOnTheNodeTHISACTIONWILLSTOPOTHERDEPENDANTROLES(hostname: string, serviceName: string, type: ClusterhadoopRoleTypeEnum): Promise<ClusterhadoopTask>;
    DetailedDescriptionForEachNodeProfile(serviceName: string): Promise<ClusterhadoopNodeBillingProfile[]>;
    GetTheCurrentNodeConsumptionsThatYouWillBilledForOnTheNextBill(serviceName: string): Promise<ClusterhadoopNodeConsumption[]>;
    ListOfOrderableNodeProfiles(serviceName: string): Promise<string[]>;
    OrderANewNodeInTheCluster(nodeProfile: string, serviceName: string): Promise<ClusterhadoopTask>;
    RestartTheClouderaManagerHadoopClusterTHISACTIONWILLRESTARTEVERYSERVICE(serviceName: string): Promise<ClusterhadoopTask>;
    RestartAClouderaManagerServiceTHISACTIONWILLRESTARTOTHERDEPENDANTSERVICES(service: ClusterhadoopClusterServiceNameEnum, serviceName: string): Promise<ClusterhadoopTask>;
    StartAClouderaManagerService(service: ClusterhadoopClusterServiceNameEnum, serviceName: string): Promise<ClusterhadoopTask>;
    StopAClouderaManagerServiceTHISACTIONWILLSTOPOTHERDEPENDANTSERVICES(service: ClusterhadoopClusterServiceNameEnum, serviceName: string): Promise<ClusterhadoopTask>;
    StartTheClouderaManagerHadoopCluster(serviceName: string): Promise<ClusterhadoopTask>;
    StopAClouderaManagerHadoopClusterTHISACTIONWILLSTOPEVERYSERVICE(serviceName: string): Promise<ClusterhadoopTask>;
    TasksAssociatedWithThisHadoopCluster(serviceName: string, status?: ClusterhadoopOperationStateEnum): Promise<number[]>;
    TerminateYourServiceTHECLUSTERWILLBEDELETEDALLYOURDATAWILLBELOST(serviceName: string): Promise<ClusterhadoopTask>;
    UsersAssociatedWithThisHadoopCluster(serviceName: string): Promise<string[]>;
    AddAnUserToYourCluster(clouderaManager: boolean, httpFrontend: boolean, hue: boolean, password: string, serviceName: string, username: string): Promise<ClusterhadoopTask>;
    RemoveThisUser(serviceName: string, username: string): Promise<ClusterhadoopTask>;
    ResetThePasswordForAGivenHadoopClusterUser(password: string, serviceName: string, username: string): Promise<ClusterhadoopTask>;
    GetTheOrderableNodeProfilesAndTheirCharacteristics(): Promise<ClusterhadoopNodeBillingProfile[]>;
    GetInformationsAboutTheOrderOfOneCluster(): Promise<ClusterhadoopOrderInformations>;
}
//# sourceMappingURL=cluster.hadoop.d.ts.map