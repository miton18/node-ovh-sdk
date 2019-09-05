"use strict";
// GENERATED SDK for cluster/hadoop API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * All services names in a Hadoop Cluster
 */
var ClusterhadoopClusterServiceName;
(function (ClusterhadoopClusterServiceName) {
    ClusterhadoopClusterServiceName["HBASE"] = "HBase";
    ClusterhadoopClusterServiceName["HDFS"] = "HDFS";
    ClusterhadoopClusterServiceName["HUE"] = "HUE";
    ClusterhadoopClusterServiceName["HIVE"] = "Hive";
    ClusterhadoopClusterServiceName["OOZIE"] = "Oozie";
    ClusterhadoopClusterServiceName["SOLR"] = "Solr";
    ClusterhadoopClusterServiceName["SPARK"] = "Spark";
    ClusterhadoopClusterServiceName["SQOOP"] = "Sqoop";
    ClusterhadoopClusterServiceName["YARN"] = "YARN";
    ClusterhadoopClusterServiceName["ZOOKEEPER"] = "ZooKeeper";
})(ClusterhadoopClusterServiceName = exports.ClusterhadoopClusterServiceName || (exports.ClusterhadoopClusterServiceName = {}));
/*
 * All states a Hadoop Cluster can be in
 */
var ClusterhadoopClusterState;
(function (ClusterhadoopClusterState) {
    ClusterhadoopClusterState["CREATED"] = "created";
    ClusterhadoopClusterState["CREATING"] = "creating";
    ClusterhadoopClusterState["DELETED"] = "deleted";
    ClusterhadoopClusterState["DELETING"] = "deleting";
    ClusterhadoopClusterState["DELIVERED"] = "delivered";
    ClusterhadoopClusterState["DELIVERING"] = "delivering";
    ClusterhadoopClusterState["TODELIVER"] = "toDeliver";
})(ClusterhadoopClusterState = exports.ClusterhadoopClusterState || (exports.ClusterhadoopClusterState = {}));
/*
 * All states a Hadoop Cluster NetworkAcl can be in
 */
var ClusterhadoopNetworkAclState;
(function (ClusterhadoopNetworkAclState) {
    ClusterhadoopNetworkAclState["DISABLED"] = "disabled";
    ClusterhadoopNetworkAclState["ENABLED"] = "enabled";
    ClusterhadoopNetworkAclState["PENDING"] = "pending";
})(ClusterhadoopNetworkAclState = exports.ClusterhadoopNetworkAclState || (exports.ClusterhadoopNetworkAclState = {}));
/*
 * All profiles a Hadoop Cluster Node can be
 */
var ClusterhadoopNodeProfile;
(function (ClusterhadoopNodeProfile) {
    ClusterhadoopNodeProfile["APPLICATIONSERVER"] = "ApplicationServer";
    ClusterhadoopNodeProfile["BASICNODE"] = "BasicNode";
    ClusterhadoopNodeProfile["CLOUDERAMANAGER"] = "ClouderaManager";
    ClusterhadoopNodeProfile["MASTERSERVER"] = "MasterServer";
    ClusterhadoopNodeProfile["SECONDARYSERVER"] = "SecondaryServer";
})(ClusterhadoopNodeProfile = exports.ClusterhadoopNodeProfile || (exports.ClusterhadoopNodeProfile = {}));
/*
 * All states a Hadoop Cluster Node can be in
 */
var ClusterhadoopNodeState;
(function (ClusterhadoopNodeState) {
    ClusterhadoopNodeState["AVAILABLE"] = "available";
    ClusterhadoopNodeState["DELIVERED"] = "delivered";
    ClusterhadoopNodeState["TODEPLOY"] = "toDeploy";
    ClusterhadoopNodeState["UNAVAILABLE"] = "unavailable";
})(ClusterhadoopNodeState = exports.ClusterhadoopNodeState || (exports.ClusterhadoopNodeState = {}));
/*
 * All states a Hadoop Cluster Cloud Task can be in
 */
var ClusterhadoopOperationState;
(function (ClusterhadoopOperationState) {
    ClusterhadoopOperationState["CANCELLED"] = "cancelled";
    ClusterhadoopOperationState["DOING"] = "doing";
    ClusterhadoopOperationState["DONE"] = "done";
    ClusterhadoopOperationState["ERROR"] = "error";
    ClusterhadoopOperationState["TODO"] = "todo";
})(ClusterhadoopOperationState = exports.ClusterhadoopOperationState || (exports.ClusterhadoopOperationState = {}));
/*
 * All roles a Hadoop Cluster Node can be
 */
var ClusterhadoopRoleType;
(function (ClusterhadoopRoleType) {
    ClusterhadoopRoleType["CLOUDERA_MANAGER"] = "cloudera_manager";
    ClusterhadoopRoleType["DATA_NODE"] = "data_node";
    ClusterhadoopRoleType["ELASTICSEARCH_SERVER"] = "elasticsearch_server";
    ClusterhadoopRoleType["HBASE_MASTER"] = "hbase_master";
    ClusterhadoopRoleType["HBASE_REGION_SERVER"] = "hbase_region_server";
    ClusterhadoopRoleType["HIVE_SERVER2"] = "hive_server2";
    ClusterhadoopRoleType["HUE"] = "hue";
    ClusterhadoopRoleType["IMPALA_DAEMON"] = "impala_daemon";
    ClusterhadoopRoleType["IMPALA_SERVER"] = "impala_server";
    ClusterhadoopRoleType["MAP_REDUCE_HISTORY_SERVER"] = "map_reduce_history_server";
    ClusterhadoopRoleType["NAME_NODE"] = "name_node";
    ClusterhadoopRoleType["OOZIE_SERVER"] = "oozie_server";
    ClusterhadoopRoleType["OPEN_TSDB"] = "open_tsdb";
    ClusterhadoopRoleType["SECONDARY_NAME_NODE"] = "secondary_name_node";
    ClusterhadoopRoleType["SOLR_SERVER"] = "solr_server";
    ClusterhadoopRoleType["SPARK_MASTER"] = "spark_master";
    ClusterhadoopRoleType["SPARK_WORKER"] = "spark_worker";
    ClusterhadoopRoleType["SQOOP_SERVER"] = "sqoop_server";
    ClusterhadoopRoleType["YARN_NODE_MANAGER"] = "yarn_node_manager";
    ClusterhadoopRoleType["YARN_RESOURCE_MANAGER"] = "yarn_resource_manager";
    ClusterhadoopRoleType["ZOO_KEEPER"] = "zoo_keeper";
})(ClusterhadoopRoleType = exports.ClusterhadoopRoleType || (exports.ClusterhadoopRoleType = {}));
/*
 * Detailed renewal type of a service
 */
var ServiceRenewalType;
(function (ServiceRenewalType) {
    ServiceRenewalType["AUTOMATICFORCEDPRODUCT"] = "automaticForcedProduct";
    ServiceRenewalType["AUTOMATICV2012"] = "automaticV2012";
    ServiceRenewalType["AUTOMATICV2014"] = "automaticV2014";
    ServiceRenewalType["AUTOMATICV2016"] = "automaticV2016";
    ServiceRenewalType["MANUAL"] = "manual";
    ServiceRenewalType["ONESHOT"] = "oneShot";
    ServiceRenewalType["OPTION"] = "option";
})(ServiceRenewalType = exports.ServiceRenewalType || (exports.ServiceRenewalType = {}));
/*
 *
 */
var ServiceState;
(function (ServiceState) {
    ServiceState["EXPIRED"] = "expired";
    ServiceState["INCREATION"] = "inCreation";
    ServiceState["OK"] = "ok";
    ServiceState["PENDINGDEBT"] = "pendingDebt";
    ServiceState["UNPAID"] = "unPaid";
})(ServiceState = exports.ServiceState || (exports.ServiceState = {}));
class ClusterHadoop {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the HADOOPCLUSTER service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop#GET)
     */
    ListAvailableServices() {
        let url = `/cluster/hadoop`;
        return this.client.request('GET', url);
    }
    /**
     * Managed Hadoop Cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/cluster/hadoop/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * consumptions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/consumptions#GET)
     */
    GetTheCurrentConsumptionsThatYouWillBilledForOnTheNextBill(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/consumptions`;
        return this.client.request('GET', url);
    }
    /**
     * List the cluster.hadoop.NetworkAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl#GET)
     */
    NetworkACLAssociatedWithThisHadoopCluster(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/networkAcl`;
        return this.client.request('GET', url);
    }
    /**
     * List the cluster.hadoop.NetworkAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl#POST)
     */
    AddAnACLToYourCluster(serviceName, block, description) {
        let url = `/cluster/hadoop/${serviceName}/networkAcl`;
        return this.client.request('POST', url, { block, description });
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
    AlterThisObjectProperties(block, serviceName, payload) {
        let url = `/cluster/hadoop/${serviceName}/networkAcl/${block}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * ACL for allowing ip blocks to access to your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/networkAcl/%7Bblock%7D#DELETE)
     */
    RemoveThisACL(block, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/networkAcl/${block}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cluster.hadoop.Node objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node#GET)
     */
    NodesOfTheCluster(serviceName, softwareProfile) {
        let url = `/cluster/hadoop/${serviceName}/node?`;
        const queryParams = new query_params_1.default();
        if (softwareProfile) {
            queryParams.set('softwareProfile', softwareProfile.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    RemoveThisNodeFromTheCluster(hostname, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}`;
        return this.client.request('DELETE', url);
    }
    /**
     * decommission operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/decommission#POST)
     */
    DecommissionTheNodeAndAllTheServicesOnIt(hostname, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/decommission`;
        return this.client.request('POST', url);
    }
    /**
     * recommission operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/recommission#POST)
     */
    RecommissionTheNodeAndAllTheServicesOnIt(hostname, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/recommission`;
        return this.client.request('POST', url);
    }
    /**
     * List the cluster.hadoop.Role objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role#GET)
     */
    RolesIeSetOfHadoopServicesOfTheNode(hostname, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role`;
        return this.client.request('GET', url);
    }
    /**
     * List the cluster.hadoop.Role objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role#POST)
     */
    AddTheRoleToTheNode(hostname, serviceName, type) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role`;
        return this.client.request('POST', url, { type });
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
    RemoveThisRoleFromTheNode(hostname, serviceName, type) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}`;
        return this.client.request('DELETE', url);
    }
    /**
     * restart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D/restart#POST)
     */
    RestartTheRoleOnTheNodeTHISACTIONWILLRESTARTOTHERDEPENDANTROLES(hostname, serviceName, type) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/restart`;
        return this.client.request('POST', url);
    }
    /**
     * start operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D/start#POST)
     */
    StartTheRoleOnTheNode(hostname, serviceName, type) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/start`;
        return this.client.request('POST', url);
    }
    /**
     * stop operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/node/%7Bhostname%7D/role/%7Btype%7D/stop#POST)
     */
    StopTheRoleOnTheNodeTHISACTIONWILLSTOPOTHERDEPENDANTROLES(hostname, serviceName, type) {
        let url = `/cluster/hadoop/${serviceName}/node/${hostname}/role/${type}/stop`;
        return this.client.request('POST', url);
    }
    /**
     * nodeBillingProfiles operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/nodeBillingProfiles#GET)
     */
    DetailedDescriptionForEachNodeProfile(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/nodeBillingProfiles`;
        return this.client.request('GET', url);
    }
    /**
     * nodeConsumptions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/nodeConsumptions#GET)
     */
    GetTheCurrentNodeConsumptionsThatYouWillBilledForOnTheNextBill(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/nodeConsumptions`;
        return this.client.request('GET', url);
    }
    /**
     * orderableNodeProfiles operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/orderableNodeProfiles#GET)
     */
    ListOfOrderableNodeProfiles(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/orderableNodeProfiles`;
        return this.client.request('GET', url);
    }
    /**
     * orderNewNodeHourly operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/orderNewNodeHourly#POST)
     */
    OrderANewNodeInTheCluster(nodeProfile, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/orderNewNodeHourly`;
        return this.client.request('POST', url, { nodeProfile });
    }
    /**
     * restart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/restart#POST)
     */
    RestartTheClouderaManagerHadoopClusterTHISACTIONWILLRESTARTEVERYSERVICE(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/restart`;
        return this.client.request('POST', url);
    }
    /**
     * restart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/service/restart#POST)
     */
    RestartAClouderaManagerServiceTHISACTIONWILLRESTARTOTHERDEPENDANTSERVICES(service, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/service/restart`;
        return this.client.request('POST', url, { service });
    }
    /**
     * start operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/service/start#POST)
     */
    StartAClouderaManagerService(service, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/service/start`;
        return this.client.request('POST', url, { service });
    }
    /**
     * stop operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/service/stop#POST)
     */
    StopAClouderaManagerServiceTHISACTIONWILLSTOPOTHERDEPENDANTSERVICES(service, serviceName) {
        let url = `/cluster/hadoop/${serviceName}/service/stop`;
        return this.client.request('POST', url, { service });
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
    StartTheClouderaManagerHadoopCluster(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/start`;
        return this.client.request('POST', url);
    }
    /**
     * stop operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/stop#POST)
     */
    StopAClouderaManagerHadoopClusterTHISACTIONWILLSTOPEVERYSERVICE(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/stop`;
        return this.client.request('POST', url);
    }
    /**
     * List the cluster.hadoop.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithThisHadoopCluster(serviceName, status) {
        let url = `/cluster/hadoop/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    TerminateYourServiceTHECLUSTERWILLBEDELETEDALLYOURDATAWILLBELOST(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the cluster.hadoop.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user#GET)
     */
    UsersAssociatedWithThisHadoopCluster(serviceName) {
        let url = `/cluster/hadoop/${serviceName}/user`;
        return this.client.request('GET', url);
    }
    /**
     * List the cluster.hadoop.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user#POST)
     */
    AddAnUserToYourCluster(clouderaManager, httpFrontend, hue, password, serviceName, username) {
        let url = `/cluster/hadoop/${serviceName}/user`;
        return this.client.request('POST', url, { clouderaManager, httpFrontend, hue, password, username });
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
    RemoveThisUser(serviceName, username) {
        let url = `/cluster/hadoop/${serviceName}/user/${username}`;
        return this.client.request('DELETE', url);
    }
    /**
     * resetPassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/%7BserviceName%7D/user/%7Busername%7D/resetPassword#POST)
     */
    ResetThePasswordForAGivenHadoopClusterUser(password, serviceName, username) {
        let url = `/cluster/hadoop/${serviceName}/user/${username}/resetPassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * Get the orderable node profiles and their characteristics [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/orderableNodeProfiles#GET)
     */
    GetTheOrderableNodeProfilesAndTheirCharacteristics() {
        let url = `/cluster/hadoop/orderableNodeProfiles`;
        return this.client.request('GET', url);
    }
    /**
     * Get informations about the order of one cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cluster/hadoop/orderInformations#GET)
     */
    GetInformationsAboutTheOrderOfOneCluster() {
        let url = `/cluster/hadoop/orderInformations`;
        return this.client.request('GET', url);
    }
}
exports.ClusterHadoop = ClusterHadoop;
//# sourceMappingURL=cluster.hadoop.js.map