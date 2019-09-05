"use strict";
// GENERATED SDK for dbaas/logs API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Possible values for ArchiveRetrievalStateEnum
 */
var DbaaslogsArchiveRetrievalState;
(function (DbaaslogsArchiveRetrievalState) {
    DbaaslogsArchiveRetrievalState["SEALED"] = "sealed";
    DbaaslogsArchiveRetrievalState["UNSEALING"] = "unsealing";
    DbaaslogsArchiveRetrievalState["UNSEALED"] = "unsealed";
})(DbaaslogsArchiveRetrievalState = exports.DbaaslogsArchiveRetrievalState || (exports.DbaaslogsArchiveRetrievalState = {}));
/*
 * Possible values for ClusterAllowedNetworkFlowTypeEnum
 */
var DbaaslogsClusterAllowedNetworkFlowType;
(function (DbaaslogsClusterAllowedNetworkFlowType) {
    DbaaslogsClusterAllowedNetworkFlowType["QUERY"] = "QUERY";
    DbaaslogsClusterAllowedNetworkFlowType["DIRECT_INPUT"] = "DIRECT_INPUT";
    DbaaslogsClusterAllowedNetworkFlowType["ALL"] = "ALL";
})(DbaaslogsClusterAllowedNetworkFlowType = exports.DbaaslogsClusterAllowedNetworkFlowType || (exports.DbaaslogsClusterAllowedNetworkFlowType = {}));
/*
 * Possible values for ClusterClusterTypeEnum
 */
var DbaaslogsClusterClusterType;
(function (DbaaslogsClusterClusterType) {
    DbaaslogsClusterClusterType["TRIAL"] = "TRIAL";
    DbaaslogsClusterClusterType["PRO"] = "PRO";
    DbaaslogsClusterClusterType["DEDICATED"] = "DEDICATED";
})(DbaaslogsClusterClusterType = exports.DbaaslogsClusterClusterType || (exports.DbaaslogsClusterClusterType = {}));
/*
 * Possible values for ClusterRegionEnum
 */
var DbaaslogsClusterRegion;
(function (DbaaslogsClusterRegion) {
    DbaaslogsClusterRegion["GRA"] = "GRA";
    DbaaslogsClusterRegion["RBX"] = "RBX";
    DbaaslogsClusterRegion["BHS"] = "BHS";
    DbaaslogsClusterRegion["SBG"] = "SBG";
    DbaaslogsClusterRegion["P_19"] = "P-19";
})(DbaaslogsClusterRegion = exports.DbaaslogsClusterRegion || (exports.DbaaslogsClusterRegion = {}));
/*
 * Possible values for EngineNameEnum
 */
var DbaaslogsEngineName;
(function (DbaaslogsEngineName) {
    DbaaslogsEngineName["FLOWGGER"] = "FLOWGGER";
    DbaaslogsEngineName["LOGSTASH"] = "LOGSTASH";
    DbaaslogsEngineName["TEST"] = "TEST";
})(DbaaslogsEngineName = exports.DbaaslogsEngineName || (exports.DbaaslogsEngineName = {}));
/*
 * Possible values for FlowggerConfigurationLogFormatEnum
 */
var DbaaslogsFlowggerConfigurationLogFormat;
(function (DbaaslogsFlowggerConfigurationLogFormat) {
    DbaaslogsFlowggerConfigurationLogFormat["RFC5424"] = "RFC5424";
    DbaaslogsFlowggerConfigurationLogFormat["LTSV"] = "LTSV";
    DbaaslogsFlowggerConfigurationLogFormat["GELF"] = "GELF";
    DbaaslogsFlowggerConfigurationLogFormat["CAPNP"] = "CAPNP";
})(DbaaslogsFlowggerConfigurationLogFormat = exports.DbaaslogsFlowggerConfigurationLogFormat || (exports.DbaaslogsFlowggerConfigurationLogFormat = {}));
/*
 * Possible values for FlowggerConfigurationLogFramingEnum
 */
var DbaaslogsFlowggerConfigurationLogFraming;
(function (DbaaslogsFlowggerConfigurationLogFraming) {
    DbaaslogsFlowggerConfigurationLogFraming["LINE"] = "LINE";
    DbaaslogsFlowggerConfigurationLogFraming["NUL"] = "NUL";
    DbaaslogsFlowggerConfigurationLogFraming["SYSLEN"] = "SYSLEN";
    DbaaslogsFlowggerConfigurationLogFraming["CAPNP"] = "CAPNP";
})(DbaaslogsFlowggerConfigurationLogFraming = exports.DbaaslogsFlowggerConfigurationLogFraming || (exports.DbaaslogsFlowggerConfigurationLogFraming = {}));
/*
 * Possible values for HelperSectionName
 */
var DbaaslogsHelperSectionName;
(function (DbaaslogsHelperSectionName) {
    DbaaslogsHelperSectionName["LOGSTASH_INPUT"] = "LOGSTASH_INPUT";
    DbaaslogsHelperSectionName["LOGSTASH_FILTER"] = "LOGSTASH_FILTER";
    DbaaslogsHelperSectionName["LOGSTASH_PATTERN"] = "LOGSTASH_PATTERN";
})(DbaaslogsHelperSectionName = exports.DbaaslogsHelperSectionName || (exports.DbaaslogsHelperSectionName = {}));
/*
 * Possible values for InputActionTypeEnum
 */
var DbaaslogsInputActionType;
(function (DbaaslogsInputActionType) {
    DbaaslogsInputActionType["END"] = "END";
    DbaaslogsInputActionType["LOG"] = "LOG";
    DbaaslogsInputActionType["START"] = "START";
    DbaaslogsInputActionType["TEST"] = "TEST";
    DbaaslogsInputActionType["DESTROY"] = "DESTROY";
    DbaaslogsInputActionType["RESTART"] = "RESTART";
})(DbaaslogsInputActionType = exports.DbaaslogsInputActionType || (exports.DbaaslogsInputActionType = {}));
/*
 * Possible values for InputStatusEnum
 */
var DbaaslogsInputStatus;
(function (DbaaslogsInputStatus) {
    DbaaslogsInputStatus["INIT"] = "INIT";
    DbaaslogsInputStatus["PENDING"] = "PENDING";
    DbaaslogsInputStatus["RUNNING"] = "RUNNING";
    DbaaslogsInputStatus["PROCESSING"] = "PROCESSING";
})(DbaaslogsInputStatus = exports.DbaaslogsInputStatus || (exports.DbaaslogsInputStatus = {}));
/*
 * Possible values for OperationStateEnum
 */
var DbaaslogsOperationState;
(function (DbaaslogsOperationState) {
    DbaaslogsOperationState["PENDING"] = "PENDING";
    DbaaslogsOperationState["RECEIVED"] = "RECEIVED";
    DbaaslogsOperationState["STARTED"] = "STARTED";
    DbaaslogsOperationState["SUCCESS"] = "SUCCESS";
    DbaaslogsOperationState["FAILURE"] = "FAILURE";
    DbaaslogsOperationState["REVOKED"] = "REVOKED";
    DbaaslogsOperationState["RETRY"] = "RETRY";
    DbaaslogsOperationState["RUNNING"] = "RUNNING";
})(DbaaslogsOperationState = exports.DbaaslogsOperationState || (exports.DbaaslogsOperationState = {}));
/*
 * Possible values for OptionStateEnum
 */
var DbaaslogsOptionState;
(function (DbaaslogsOptionState) {
    DbaaslogsOptionState["ENABLED"] = "ENABLED";
    DbaaslogsOptionState["DISABLED"] = "DISABLED";
})(DbaaslogsOptionState = exports.DbaaslogsOptionState || (exports.DbaaslogsOptionState = {}));
/*
 * Possible values for PermissionDashboardPermissionTypeEnum
 */
var DbaaslogsPermissionDashboardPermissionType;
(function (DbaaslogsPermissionDashboardPermissionType) {
    DbaaslogsPermissionDashboardPermissionType["READ_ONLY"] = "READ_ONLY";
    DbaaslogsPermissionDashboardPermissionType["READ_WRITE"] = "READ_WRITE";
})(DbaaslogsPermissionDashboardPermissionType = exports.DbaaslogsPermissionDashboardPermissionType || (exports.DbaaslogsPermissionDashboardPermissionType = {}));
/*
 * Possible values for PermissionIndexPermissionTypeEnum
 */
var DbaaslogsPermissionIndexPermissionType;
(function (DbaaslogsPermissionIndexPermissionType) {
    DbaaslogsPermissionIndexPermissionType["READ_ONLY"] = "READ_ONLY";
    DbaaslogsPermissionIndexPermissionType["READ_WRITE"] = "READ_WRITE";
})(DbaaslogsPermissionIndexPermissionType = exports.DbaaslogsPermissionIndexPermissionType || (exports.DbaaslogsPermissionIndexPermissionType = {}));
/*
 * Possible values for PermissionTypeEnum
 */
var DbaaslogsPermissionType;
(function (DbaaslogsPermissionType) {
    DbaaslogsPermissionType["READ_ONLY"] = "READ_ONLY";
    DbaaslogsPermissionType["READ_WRITE"] = "READ_WRITE";
})(DbaaslogsPermissionType = exports.DbaaslogsPermissionType || (exports.DbaaslogsPermissionType = {}));
/*
 * Possible values for ServiceStateEnum
 */
var DbaaslogsServiceState;
(function (DbaaslogsServiceState) {
    DbaaslogsServiceState["INIT"] = "INIT";
    DbaaslogsServiceState["TO_CONFIG"] = "TO_CONFIG";
    DbaaslogsServiceState["ENABLED"] = "ENABLED";
    DbaaslogsServiceState["DISABLED"] = "DISABLED";
})(DbaaslogsServiceState = exports.DbaaslogsServiceState || (exports.DbaaslogsServiceState = {}));
/*
 * Possible values for StreamAlertConditionConditionTypeEnum
 */
var DbaaslogsStreamAlertConditionConditionType;
(function (DbaaslogsStreamAlertConditionConditionType) {
    DbaaslogsStreamAlertConditionConditionType["MESSAGE_COUNT"] = "MESSAGE_COUNT";
    DbaaslogsStreamAlertConditionConditionType["FIELD_VALUE"] = "FIELD_VALUE";
    DbaaslogsStreamAlertConditionConditionType["FIELD_CONTENT_VALUE"] = "FIELD_CONTENT_VALUE";
})(DbaaslogsStreamAlertConditionConditionType = exports.DbaaslogsStreamAlertConditionConditionType || (exports.DbaaslogsStreamAlertConditionConditionType = {}));
/*
 * Possible values for StreamAlertConditionConstraintTypeEnum
 */
var DbaaslogsStreamAlertConditionConstraintType;
(function (DbaaslogsStreamAlertConditionConstraintType) {
    DbaaslogsStreamAlertConditionConstraintType["MEAN"] = "MEAN";
    DbaaslogsStreamAlertConditionConstraintType["MIN"] = "MIN";
    DbaaslogsStreamAlertConditionConstraintType["MAX"] = "MAX";
    DbaaslogsStreamAlertConditionConstraintType["SUM"] = "SUM";
    DbaaslogsStreamAlertConditionConstraintType["STDDEV"] = "STDDEV";
})(DbaaslogsStreamAlertConditionConstraintType = exports.DbaaslogsStreamAlertConditionConstraintType || (exports.DbaaslogsStreamAlertConditionConstraintType = {}));
/*
 * Possible values for StreamAlertConditionThresholdTypeEnum
 */
var DbaaslogsStreamAlertConditionThresholdType;
(function (DbaaslogsStreamAlertConditionThresholdType) {
    DbaaslogsStreamAlertConditionThresholdType["MORE"] = "MORE";
    DbaaslogsStreamAlertConditionThresholdType["LESS"] = "LESS";
    DbaaslogsStreamAlertConditionThresholdType["LOWER"] = "LOWER";
    DbaaslogsStreamAlertConditionThresholdType["HIGHER"] = "HIGHER";
})(DbaaslogsStreamAlertConditionThresholdType = exports.DbaaslogsStreamAlertConditionThresholdType || (exports.DbaaslogsStreamAlertConditionThresholdType = {}));
/*
 * Possible values for StreamColdStorageCompressionEnum
 */
var DbaaslogsStreamColdStorageCompression;
(function (DbaaslogsStreamColdStorageCompression) {
    DbaaslogsStreamColdStorageCompression["LZMA"] = "LZMA";
    DbaaslogsStreamColdStorageCompression["GZIP"] = "GZIP";
    DbaaslogsStreamColdStorageCompression["DEFLATED"] = "DEFLATED";
    DbaaslogsStreamColdStorageCompression["ZSTD"] = "ZSTD";
})(DbaaslogsStreamColdStorageCompression = exports.DbaaslogsStreamColdStorageCompression || (exports.DbaaslogsStreamColdStorageCompression = {}));
/*
 * Possible values for StreamColdStorageContentEnum
 */
var DbaaslogsStreamColdStorageContent;
(function (DbaaslogsStreamColdStorageContent) {
    DbaaslogsStreamColdStorageContent["ALL"] = "ALL";
    DbaaslogsStreamColdStorageContent["GELF"] = "GELF";
    DbaaslogsStreamColdStorageContent["PLAIN"] = "PLAIN";
})(DbaaslogsStreamColdStorageContent = exports.DbaaslogsStreamColdStorageContent || (exports.DbaaslogsStreamColdStorageContent = {}));
/*
 * Possible values for StreamColdStorageTargetEnum
 */
var DbaaslogsStreamColdStorageTarget;
(function (DbaaslogsStreamColdStorageTarget) {
    DbaaslogsStreamColdStorageTarget["PCA"] = "PCA";
    DbaaslogsStreamColdStorageTarget["PCS"] = "PCS";
})(DbaaslogsStreamColdStorageTarget = exports.DbaaslogsStreamColdStorageTarget || (exports.DbaaslogsStreamColdStorageTarget = {}));
/*
 * Possible values for StreamRuleOperatorEnum
 */
var DbaaslogsStreamRuleOperator;
(function (DbaaslogsStreamRuleOperator) {
    DbaaslogsStreamRuleOperator["MATCH_EXACTLY"] = "MATCH_EXACTLY";
    DbaaslogsStreamRuleOperator["GREATER_THAN"] = "GREATER_THAN";
    DbaaslogsStreamRuleOperator["SMALLER_THAN"] = "SMALLER_THAN";
    DbaaslogsStreamRuleOperator["FIELD_PRESENCE"] = "FIELD_PRESENCE";
})(DbaaslogsStreamRuleOperator = exports.DbaaslogsStreamRuleOperator || (exports.DbaaslogsStreamRuleOperator = {}));
/*
 * Possible values for UrlTypeEnum
 */
var DbaaslogsUrlType;
(function (DbaaslogsUrlType) {
    DbaaslogsUrlType["GRAYLOG_WEBUI"] = "GRAYLOG_WEBUI";
    DbaaslogsUrlType["GRAYLOG_API"] = "GRAYLOG_API";
    DbaaslogsUrlType["ELASTICSEARCH_API"] = "ELASTICSEARCH_API";
    DbaaslogsUrlType["KIBANA_WEBUI"] = "KIBANA_WEBUI";
    DbaaslogsUrlType["CONSOLE"] = "CONSOLE";
    DbaaslogsUrlType["WEB_SOCKET"] = "WEB_SOCKET";
    DbaaslogsUrlType["SERVICE_DOMAIN"] = "SERVICE_DOMAIN";
    DbaaslogsUrlType["TCP_TLS_GELF"] = "TCP_TLS_GELF";
    DbaaslogsUrlType["TCP_GELF"] = "TCP_GELF";
    DbaaslogsUrlType["UDP_GELF"] = "UDP_GELF";
    DbaaslogsUrlType["TCP_TLS_RFC5424"] = "TCP_TLS_RFC5424";
    DbaaslogsUrlType["TCP_RFC5424"] = "TCP_RFC5424";
    DbaaslogsUrlType["UDP_RFC5424"] = "UDP_RFC5424";
    DbaaslogsUrlType["TCP_TLS_LTSV_LINE"] = "TCP_TLS_LTSV_LINE";
    DbaaslogsUrlType["TCP_TLS_LTSV_NUL"] = "TCP_TLS_LTSV_NUL";
    DbaaslogsUrlType["TCP_LTSV_LINE"] = "TCP_LTSV_LINE";
    DbaaslogsUrlType["TCP_LTSV_NUL"] = "TCP_LTSV_NUL";
    DbaaslogsUrlType["TCP_TLS_CAP_N_PROTO"] = "TCP_TLS_CAP_N_PROTO";
    DbaaslogsUrlType["TCP_CAP_N_PROTO"] = "TCP_CAP_N_PROTO";
    DbaaslogsUrlType["UDP_LTSV_NUL"] = "UDP_LTSV_NUL";
    DbaaslogsUrlType["UDP_LTSV_LINE"] = "UDP_LTSV_LINE";
    DbaaslogsUrlType["UDP_CAP_N_PROTO"] = "UDP_CAP_N_PROTO";
    DbaaslogsUrlType["HTTP_GELF"] = "HTTP_GELF";
    DbaaslogsUrlType["HTTP_TLS_GELF"] = "HTTP_TLS_GELF";
    DbaaslogsUrlType["TCP_BEATS"] = "TCP_BEATS";
    DbaaslogsUrlType["TCP_TLS_BEATS"] = "TCP_TLS_BEATS";
})(DbaaslogsUrlType = exports.DbaaslogsUrlType || (exports.DbaaslogsUrlType = {}));
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
var ServiceState;
(function (ServiceState) {
    ServiceState["EXPIRED"] = "expired";
    ServiceState["INCREATION"] = "inCreation";
    ServiceState["OK"] = "ok";
    ServiceState["PENDINGDEBT"] = "pendingDebt";
    ServiceState["UNPAID"] = "unPaid";
})(ServiceState = exports.ServiceState || (exports.ServiceState = {}));
class DbaasLogs {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the DBAAS-LOGS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs#GET)
     */
    ListAvailableServices() {
        let url = `/dbaas/logs`;
        return this.client.request('GET', url);
    }
    /**
     * Operations about the DBAAS-LOGS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D#GET)
     */
    ReturnsTheServiceObjectOfConnectedIdentity(serviceName) {
        let url = `/dbaas/logs/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Operations about the DBAAS-LOGS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D#PUT)
     */
    UpdateTheServiceProperties(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/dbaas/logs/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Service Clusters [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster#GET)
     */
    ReturnsTheListOfAllowedCluster(serviceName) {
        let url = `/dbaas/logs/${serviceName}/cluster`;
        return this.client.request('GET', url);
    }
    /**
     * Service Clusters [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D#GET)
     */
    ReturnsDetailsOfAnAllowedCluster(clusterId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/cluster/${clusterId}`;
        return this.client.request('GET', url);
    }
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork#GET)
     */
    ListAllTheNetworkIDAllowedToContactGivenCluster(clusterId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/cluster/${clusterId}/allowedNetwork`;
        return this.client.request('GET', url);
    }
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork#POST)
     */
    AllowAnIPToContactCluster(clusterId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/cluster/${clusterId}/allowedNetwork`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork/%7BallowedNetworkId%7D#DELETE)
     */
    RemoveTheSpecifiedIPFromTheListOfAllowedNetworks(allowedNetworkId, clusterId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/cluster/${clusterId}/allowedNetwork/${allowedNetworkId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Cluster allowed networks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/cluster/%7BclusterId%7D/allowedNetwork/%7BallowedNetworkId%7D#GET)
     */
    ReturnsDetailsOfAnAllowedNetwork(allowedNetworkId, clusterId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/cluster/${clusterId}/allowedNetwork/${allowedNetworkId}`;
        return this.client.request('GET', url);
    }
    /**
     * Inputs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input#GET)
     */
    ReturnsTheListOfRegisteredInputAttachedToTheLoggedUser(serviceName) {
        let url = `/dbaas/logs/${serviceName}/input`;
        return this.client.request('GET', url);
    }
    /**
     * Inputs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input#POST)
     */
    RegisterANewInputObject(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/input`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Input [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D#DELETE)
     */
    RemoveTheSpecifiedInputObject(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Input [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}`;
        return this.client.request('GET', url);
    }
    /**
     * Input [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D#PUT)
     */
    UpdateInformationOfSpecifiedInputObject(inputId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * InputActions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/action#GET)
     */
    ReturnsActionsOfSpecifiedInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/action`;
        return this.client.request('GET', url);
    }
    /**
     * InputAllowedNetworks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork#GET)
     */
    ListAllNetworkIDAllowedToJoinInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/allowedNetwork`;
        return this.client.request('GET', url);
    }
    /**
     * InputAllowedNetworks [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork#POST)
     */
    AllowAnIpToJoinInput(inputId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/allowedNetwork`;
        return this.client.request('POST', url, payload);
    }
    /**
     * InputAllowedNetwork [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork/%7BallowedNetworkId%7D#DELETE)
     */
    /*
    RemoveTheSpecifiedIPFromTheListOfAllowedNetworks(allowedNetworkId: string, inputId: string, serviceName: string): Promise<DbaaslogsOperation> {
      let url = `/dbaas/logs/${serviceName}/input/${inputId}/allowedNetwork/${allowedNetworkId}`
  
      return this.client.request<DbaaslogsOperation>('DELETE', url)
    }
    */
    /**
     * InputAllowedNetwork [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/allowedNetwork/%7BallowedNetworkId%7D#GET)
     */
    /*
    ListAllNetworkIDAllowedToJoinInput(allowedNetworkId: string, inputId: string, serviceName: string): Promise<DbaaslogsAllowedNetwork> {
      let url = `/dbaas/logs/${serviceName}/input/${inputId}/allowedNetwork/${allowedNetworkId}`
  
      return this.client.request<DbaaslogsAllowedNetwork>('GET', url)
    }
    */
    /**
     * InputConfigtest [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configtest#POST)
     */
    ValidateConfigurationOfSpecifiedInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/configtest`;
        return this.client.request('POST', url);
    }
    /**
     * InputConfigtestResult [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configtest/result#GET)
     */
    ReturnsTheConfigTestOperationResult(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/configtest/result`;
        return this.client.request('GET', url);
    }
    /**
     * FlowggerConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/flowgger#GET)
     */
    ReturnsTheFlowggerConfiguration(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/configuration/flowgger`;
        return this.client.request('GET', url);
    }
    /**
     * FlowggerConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/flowgger#PUT)
     */
    UpdateTheFlowggerConfiguration(inputId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/configuration/flowgger`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * LogstashConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/logstash#GET)
     */
    ReturnsTheLogstashConfiguration(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/configuration/logstash`;
        return this.client.request('GET', url);
    }
    /**
     * LogstashConfiguration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/configuration/logstash#PUT)
     */
    UpdateTheLogstashConfiguration(inputId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/configuration/logstash`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * InputEnd [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/end#POST)
     */
    ScheduleTheEndOfSpecifiedInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/end`;
        return this.client.request('POST', url);
    }
    /**
     * InputLogs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/logs/url#POST)
     */
    GenerateATemporaryUrlToRetrieveInputLogs(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/logs/url`;
        return this.client.request('POST', url);
    }
    /**
     * InputRestart [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/restart#POST)
     */
    ScheduleTheRestartOfSpecifiedInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/restart`;
        return this.client.request('POST', url);
    }
    /**
     * InputStart [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/start#POST)
     */
    ScheduleTheStartOfSpecifiedInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/start`;
        return this.client.request('POST', url);
    }
    /**
     * InputUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/input/%7BinputId%7D/url#GET)
     */
    ReturnsTheListOfUrlsOfSpecifiedInput(inputId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/input/${inputId}/url`;
        return this.client.request('GET', url);
    }
    /**
     * Service Metrics [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/metrics#GET)
     */
    ReturnsMetricsCredentials(serviceName) {
        let url = `/dbaas/logs/${serviceName}/metrics`;
        return this.client.request('GET', url);
    }
    /**
     * ServiceOffer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/offer#GET)
     */
    ReturnsTheSubscribedOffer(serviceName) {
        let url = `/dbaas/logs/${serviceName}/offer`;
        return this.client.request('GET', url);
    }
    /**
     * Operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/operation#GET)
     */
    LatestOperations(serviceName) {
        let url = `/dbaas/logs/${serviceName}/operation`;
        return this.client.request('GET', url);
    }
    /**
     * Operation [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/operation/%7BoperationId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedOperation(operationId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/operation/${operationId}`;
        return this.client.request('GET', url);
    }
    /**
     * ServiceOptions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/option#GET)
     */
    ReturnsTheSubscribedAdditionalOptions(serviceName) {
        let url = `/dbaas/logs/${serviceName}/option`;
        return this.client.request('GET', url);
    }
    /**
     * ServiceOption [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/option/%7BoptionId%7D#GET)
     */
    ReturnsDetailsOfASubscribedOption(optionId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/option/${optionId}`;
        return this.client.request('GET', url);
    }
    /**
     * ServiceOption [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/option/%7BoptionId%7D/terminate#POST)
     */
    RemoveTheSpecifiedSubscribedOption(optionId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/option/${optionId}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Aliases [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias#GET)
     */
    ReturnsTheListOfAliasForConnectedUser(serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias`;
        return this.client.request('GET', url);
    }
    /**
     * Aliases [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias#POST)
     */
    RegisterANewElasticsearchAlias(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Alias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D#DELETE)
     */
    RemoveSpecifiedElasticsearchAlias(aliasId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Alias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D#GET)
     */
    ReturnsSpecifiedElasticsearchAlias(aliasId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}`;
        return this.client.request('GET', url);
    }
    /**
     * Alias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D#PUT)
     */
    UpdateSpecifiedElasticsearchAlias(aliasId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/index#GET)
     */
    ReturnsTheListOfElasticsearchIndexesAttachedToSpecifiedElasticsearchAlias(aliasId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}/index`;
        return this.client.request('GET', url);
    }
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/index#POST)
     */
    AttachAElasticsearchIndexToSpecifiedElasticsearchAlias(aliasId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}/index`;
        return this.client.request('POST', url, payload);
    }
    /**
     * AliasStream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/index/%7BindexId%7D#DELETE)
     */
    DetachAElasticsearchIndexFromSpecifiedElasticsearchAlias(aliasId, indexId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}/index/${indexId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/stream#GET)
     */
    ReturnsTheListOfGraylogStreamsAttachedToSpecifiedElasticsearchAlias(aliasId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}/stream`;
        return this.client.request('GET', url);
    }
    /**
     * AliasStreams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/stream#POST)
     */
    AttachAGraylogStreamToSpecifiedElasticsearchAlias(aliasId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}/stream`;
        return this.client.request('POST', url, payload);
    }
    /**
     * AliasStream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/stream/%7BstreamId%7D#DELETE)
     */
    DetachAGraylogStreamFromSpecifiedElasticsearchAlias(aliasId, serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}/stream/${streamId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * StreamUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/alias/%7BaliasId%7D/url#GET)
     */
    ReturnsTheListOfUrlsOfSpecifiedGraylogStream(aliasId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/alias/${aliasId}/url`;
        return this.client.request('GET', url);
    }
    /**
     * Indexes [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index#GET)
     */
    ReturnsTheListOfElasticsearchIndexes(serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/index`;
        return this.client.request('GET', url);
    }
    /**
     * Indexes [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index#POST)
     */
    RegisterANewElasticsearchIndex(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/index`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Index [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D#DELETE)
     */
    RemoveSpecifiedElasticsearchIndex(indexId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/index/${indexId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Index [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D#GET)
     */
    ReturnsSpecifiedElasticsearchIndex(indexId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/index/${indexId}`;
        return this.client.request('GET', url);
    }
    /**
     * Index [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D#PUT)
     */
    UpdateSpecifiedElasticsearchIndex(indexId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/elasticsearch/index/${indexId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * StreamUrls [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/elasticsearch/index/%7BindexId%7D/url#GET)
     */
    /*
    ReturnsTheListOfUrlsOfSpecifiedGraylogStream(indexId: string, serviceName: string): Promise<DbaaslogsUrl[]> {
      let url = `/dbaas/logs/${serviceName}/output/elasticsearch/index/${indexId}/url`
  
      return this.client.request<DbaaslogsUrl[]>('GET', url)
    }
    */
    /**
     * Dashboards [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard#GET)
     */
    ReturnsTheListOfGraylogDashboards(serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/dashboard`;
        return this.client.request('GET', url);
    }
    /**
     * Dashboards [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard#POST)
     */
    RegisterANewGraylogDashboard(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/dashboard`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Dashboard [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D#DELETE)
     */
    RemoveSpecifiedGraylogDashboard(dashboardId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Dashboard [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogDashboard(dashboardId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}`;
        return this.client.request('GET', url);
    }
    /**
     * Dashboard [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D#PUT)
     */
    UpdateInformationOfSpecifiedGraylogDashboard(dashboardId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * DashboardClone [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D/duplicate#POST)
     */
    CopyAllWidgetsFromSpecifiedDashboardToANewOne(dashboardId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}/duplicate`;
        return this.client.request('POST', url, payload);
    }
    /**
     * DashboardUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/dashboard/%7BdashboardId%7D/url#GET)
     */
    ReturnsTheListOfUrlsOfSpecifiedGraylogDashboard(dashboardId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}/url`;
        return this.client.request('GET', url);
    }
    /**
     * Streams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream#GET)
     */
    ReturnsTheListOfGraylogStreams(serviceName) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream`;
        return this.client.request('GET', url);
    }
    /**
     * Streams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream#POST)
     */
    RegisterANewGraylogStream(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Stream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D#DELETE)
     */
    RemoveSpecifiedGraylogStream(serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Stream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogStream(serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}`;
        return this.client.request('GET', url);
    }
    /**
     * Stream [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D#PUT)
     */
    UpdateInformationOfSpecifiedGraylogStream(serviceName, streamId, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * StreamAlerts [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert#GET)
     */
    ReturnsTheListOfConfiguredAlertsOfSpecifiedGraylogStream(serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/alert`;
        return this.client.request('GET', url);
    }
    /**
     * StreamAlerts [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert#POST)
     */
    RegisterANewAlertOnSpecifiedGraylogStream(serviceName, streamId, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/alert`;
        return this.client.request('POST', url, payload);
    }
    /**
     * StreamAlert [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert/%7BalertId%7D#DELETE)
     */
    RemoveAlertFromSpecifiedGraylogStream(alertId, serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/alert/${alertId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * StreamAlert [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert/%7BalertId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogStreamAlert(alertId, serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/alert/${alertId}`;
        return this.client.request('GET', url);
    }
    /**
     * StreamAlert [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/alert/%7BalertId%7D#PUT)
     */
    UpdateAlertInformationOfSpecifiedGraylogStream(alertId, serviceName, streamId, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/alert/${alertId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * StreamArchives [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/archive#GET)
     */
    ReturnsTheListOfArchives(serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/archive`;
        return this.client.request('GET', url);
    }
    /**
     * StreamArchive [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/archive/%7BarchiveId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedArchive(archiveId, serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/archive/${archiveId}`;
        return this.client.request('GET', url);
    }
    /**
     * Streams [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/archive/%7BarchiveId%7D/url#POST)
     */
    GetAPublicTemporaryURLToAccessTheArchive(archiveId, serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/archive/${archiveId}/url`;
        return this.client.request('POST', url);
    }
    /**
     * StreamRules [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule#GET)
     */
    ReturnsTheListOfRulesOfSpecifiedGraylogStream(serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/rule`;
        return this.client.request('GET', url);
    }
    /**
     * StreamRules [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule#POST)
     */
    RegisterANewRuleOnSpecifiedGraylogStream(serviceName, streamId, payload) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/rule`;
        return this.client.request('POST', url, payload);
    }
    /**
     * StreamRule [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule/%7BruleId%7D#DELETE)
     */
    RemoveSpecifiedGraylogStreamRule(ruleId, serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/rule/${ruleId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * StreamRule [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/rule/%7BruleId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedGraylogStreamRule(ruleId, serviceName, streamId) {
        let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/rule/${ruleId}`;
        return this.client.request('GET', url);
    }
    /**
     * StreamUrls [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/output/graylog/stream/%7BstreamId%7D/url#GET)
     */
    /*
    ReturnsTheListOfUrlsOfSpecifiedGraylogStream(serviceName: string, streamId: string): Promise<DbaaslogsUrl[]> {
      let url = `/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/url`
  
      return this.client.request<DbaaslogsUrl[]>('GET', url)
    }
    */
    /**
     * ServiceQuota [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/quota#GET)
     */
    ReturnsTheOverallQuotaLimits(serviceName) {
        let url = `/dbaas/logs/${serviceName}/quota`;
        return this.client.request('GET', url);
    }
    /**
     * Roles [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role#GET)
     */
    ReturnsTheListOfRoles(serviceName) {
        let url = `/dbaas/logs/${serviceName}/role`;
        return this.client.request('GET', url);
    }
    /**
     * Roles [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role#POST)
     */
    RegisterANewRole(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/role`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Role [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D#DELETE)
     */
    RemoveSpecifiedRole(roleId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Role [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedRole(roleId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}`;
        return this.client.request('GET', url);
    }
    /**
     * Role [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D#PUT)
     */
    UpdateInformationOfSpecifiedRole(roleId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * RoleMembers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member#GET)
     */
    ReturnsTheMemberListOfSpecifiedRole(roleId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/member`;
        return this.client.request('GET', url);
    }
    /**
     * RoleMembers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member#POST)
     */
    AppendUserIntoTheMemberListOfSpecifiedRole(roleId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/member`;
        return this.client.request('POST', url, payload);
    }
    /**
     * RoleMember [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member/%7Busername%7D#DELETE)
     */
    RemoveUserFromTheMemberListOfSpecifiedRole(roleId, serviceName, username) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/member/${username}`;
        return this.client.request('DELETE', url);
    }
    /**
     * RoleMember [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member/%7Busername%7D#GET)
     */
    ReturnsTheMemberMetadata(roleId, serviceName, username) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/member/${username}`;
        return this.client.request('GET', url);
    }
    /**
     * RoleMember [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/member/%7Busername%7D#PUT)
     */
    UpdateTheMemberMetadata(roleId, serviceName, username, payload) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/member/${username}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * RolePermissions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission#GET)
     */
    ReturnsTheListOfPermissionsOfSpecifiedRole(roleId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/permission`;
        return this.client.request('GET', url);
    }
    /**
     * RolePermission [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/%7BpermissionId%7D#DELETE)
     */
    RemoveSpecifiedPermission(permissionId, roleId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/permission/${permissionId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * RolePermission [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/%7BpermissionId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedPermission(permissionId, roleId, serviceName) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/permission/${permissionId}`;
        return this.client.request('GET', url);
    }
    /**
     * RolePermissionAlias [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/alias#POST)
     */
    AppendAElasticsearchAliasPermissionToRole(roleId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/permission/alias`;
        return this.client.request('POST', url, payload);
    }
    /**
     * RolePermissionIndex [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/dashboard#POST)
     */
    AppendAGraylogDashboardPermissionToRole(roleId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/permission/dashboard`;
        return this.client.request('POST', url, payload);
    }
    /**
     * RolePermissionIndex [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/index#POST)
     */
    AppendAElasticsearchIndexPermissionToRole(roleId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/permission/index`;
        return this.client.request('POST', url, payload);
    }
    /**
     * RolePermissionIndex [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/role/%7BroleId%7D/permission/stream#POST)
     */
    AppendAGraylogStreamPermissionToRole(roleId, serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/role/${roleId}/permission/stream`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/dbaas/logs/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Tokens [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token#GET)
     */
    ReturnsTheListOfServiceTokens(serviceName) {
        let url = `/dbaas/logs/${serviceName}/token`;
        return this.client.request('GET', url);
    }
    /**
     * Tokens [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token#POST)
     */
    AddANewToken(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/token`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Token [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token/%7BtokenId%7D#DELETE)
     */
    DeleteTheSpecifiedToken(serviceName, tokenId) {
        let url = `/dbaas/logs/${serviceName}/token/${tokenId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Token [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/token/%7BtokenId%7D#GET)
     */
    ReturnsTheSpecifiedToken(serviceName, tokenId) {
        let url = `/dbaas/logs/${serviceName}/token/${tokenId}`;
        return this.client.request('GET', url);
    }
    /**
     * ServiceUrls [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/url#GET)
     */
    ReturnsPlatformUsefulUrls(serviceName) {
        let url = `/dbaas/logs/${serviceName}/url`;
        return this.client.request('GET', url);
    }
    /**
     * ServiceChangePassword [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/%7BserviceName%7D/user/changePassword#POST)
     */
    InitiateAPasswordChangeProcedure(serviceName, payload) {
        let url = `/dbaas/logs/${serviceName}/user/changePassword`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Engines [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine#GET)
     */
    ReturnsTheListOfAvailableInputEngines() {
        let url = `/dbaas/logs/input/engine`;
        return this.client.request('GET', url);
    }
    /**
     * Engine [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine/%7BengineId%7D#GET)
     */
    ReturnsDetailsOfSpecifiedInputEngine(engineId) {
        let url = `/dbaas/logs/input/engine/${engineId}`;
        return this.client.request('GET', url);
    }
    /**
     * Input engine helpers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine/%7BengineId%7D/helper#GET)
     */
    ReturnTheListOfAvailableHelpersForTheGivenInputEngine(engineId) {
        let url = `/dbaas/logs/input/engine/${engineId}/helper`;
        return this.client.request('GET', url);
    }
    /**
     * Input engine helpers [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/input/engine/%7BengineId%7D/helper/%7BhelperId%7D#GET)
     */
    /*
    ReturnsDetailsOfSpecifiedInputEngine(engineId: string, helperId: string): Promise<DbaaslogsHelper> {
      let url = `/dbaas/logs/input/engine/${engineId}/helper/${helperId}`
  
      return this.client.request<DbaaslogsHelper>('GET', url)
    }
    */
    /**
     * Offer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/logs/offer/%7Breference%7D#GET)
     */
    DisplaySpecifiedOffer(reference) {
        let url = `/dbaas/logs/offer/${reference}`;
        return this.client.request('GET', url);
    }
}
exports.DbaasLogs = DbaasLogs;
//# sourceMappingURL=dbaas.logs.js.map