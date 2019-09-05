"use strict";
// GENERATED SDK for ipLoadbalancing API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Possible values for server status
 */
var IpLoadbalancingBackendCustomerServerStatus;
(function (IpLoadbalancingBackendCustomerServerStatus) {
    IpLoadbalancingBackendCustomerServerStatus["ACTIVE"] = "active";
    IpLoadbalancingBackendCustomerServerStatus["INACTIVE"] = "inactive";
})(IpLoadbalancingBackendCustomerServerStatus = exports.IpLoadbalancingBackendCustomerServerStatus || (exports.IpLoadbalancingBackendCustomerServerStatus = {}));
/*
 * Possible values for load balancing balance algorithm
 */
var IpLoadbalancingBalanceHTTP;
(function (IpLoadbalancingBalanceHTTP) {
    IpLoadbalancingBalanceHTTP["FIRST"] = "first";
    IpLoadbalancingBalanceHTTP["LEASTCONN"] = "leastconn";
    IpLoadbalancingBalanceHTTP["ROUNDROBIN"] = "roundrobin";
    IpLoadbalancingBalanceHTTP["SOURCE"] = "source";
    IpLoadbalancingBalanceHTTP["URI"] = "uri";
})(IpLoadbalancingBalanceHTTP = exports.IpLoadbalancingBalanceHTTP || (exports.IpLoadbalancingBalanceHTTP = {}));
/*
 * Possible values for load balancing balance algorithm
 */
var IpLoadbalancingBalanceTCP;
(function (IpLoadbalancingBalanceTCP) {
    IpLoadbalancingBalanceTCP["FIRST"] = "first";
    IpLoadbalancingBalanceTCP["LEASTCONN"] = "leastconn";
    IpLoadbalancingBalanceTCP["ROUNDROBIN"] = "roundrobin";
    IpLoadbalancingBalanceTCP["SOURCE"] = "source";
})(IpLoadbalancingBalanceTCP = exports.IpLoadbalancingBalanceTCP || (exports.IpLoadbalancingBalanceTCP = {}));
/*
 * Possible values for load balancing IP state
 */
var IpLoadbalancingIpState;
(function (IpLoadbalancingIpState) {
    IpLoadbalancingIpState["BLACKLISTED"] = "blacklisted";
    IpLoadbalancingIpState["DELETED"] = "deleted";
    IpLoadbalancingIpState["FREE"] = "free";
    IpLoadbalancingIpState["OK"] = "ok";
    IpLoadbalancingIpState["QUARANTINED"] = "quarantined";
    IpLoadbalancingIpState["SUSPENDED"] = "suspended";
})(IpLoadbalancingIpState = exports.IpLoadbalancingIpState || (exports.IpLoadbalancingIpState = {}));
/*
 * List of possible probe result matches. "status" is only supported for HTTP probes
 */
var IpLoadbalancingProbeExpectMatch;
(function (IpLoadbalancingProbeExpectMatch) {
    IpLoadbalancingProbeExpectMatch["CONTAINS"] = "contains";
    IpLoadbalancingProbeExpectMatch["DEFAULT"] = "default";
    IpLoadbalancingProbeExpectMatch["INTERNAL"] = "internal";
    IpLoadbalancingProbeExpectMatch["MATCHES"] = "matches";
    IpLoadbalancingProbeExpectMatch["STATUS"] = "status";
})(IpLoadbalancingProbeExpectMatch = exports.IpLoadbalancingProbeExpectMatch || (exports.IpLoadbalancingProbeExpectMatch = {}));
/*
 * List of possible method for HTTP probes. Consider using HEAD to save bandwidth when possible.
 */
var IpLoadbalancingProbeMethod;
(function (IpLoadbalancingProbeMethod) {
    IpLoadbalancingProbeMethod["GET"] = "GET";
    IpLoadbalancingProbeMethod["HEAD"] = "HEAD";
    IpLoadbalancingProbeMethod["OPTIONS"] = "OPTIONS";
    IpLoadbalancingProbeMethod["INTERNAL"] = "internal";
})(IpLoadbalancingProbeMethod = exports.IpLoadbalancingProbeMethod || (exports.IpLoadbalancingProbeMethod = {}));
/*
 * Possible values for farm probe
 */
var IpLoadbalancingProbeType;
(function (IpLoadbalancingProbeType) {
    IpLoadbalancingProbeType["HTTP"] = "http";
    IpLoadbalancingProbeType["INTERNAL"] = "internal";
    IpLoadbalancingProbeType["MYSQL"] = "mysql";
    IpLoadbalancingProbeType["OCO"] = "oco";
    IpLoadbalancingProbeType["PGSQL"] = "pgsql";
    IpLoadbalancingProbeType["SMTP"] = "smtp";
    IpLoadbalancingProbeType["TCP"] = "tcp";
})(IpLoadbalancingProbeType = exports.IpLoadbalancingProbeType || (exports.IpLoadbalancingProbeType = {}));
/*
 * Possible values for proxy type
 */
var IpLoadbalancingProxyProtocolVersion;
(function (IpLoadbalancingProxyProtocolVersion) {
    IpLoadbalancingProxyProtocolVersion["V1"] = "v1";
    IpLoadbalancingProxyProtocolVersion["V2"] = "v2";
    IpLoadbalancingProxyProtocolVersion["V2_SSL"] = "v2-ssl";
    IpLoadbalancingProxyProtocolVersion["V2_SSL_CN"] = "v2-ssl-cn";
})(IpLoadbalancingProxyProtocolVersion = exports.IpLoadbalancingProxyProtocolVersion || (exports.IpLoadbalancingProxyProtocolVersion = {}));
/*
 * List of possible route rule matches
 */
var IpLoadbalancingRouteRuleMatches;
(function (IpLoadbalancingRouteRuleMatches) {
    IpLoadbalancingRouteRuleMatches["CONTAINS"] = "contains";
    IpLoadbalancingRouteRuleMatches["ENDSWITH"] = "endswith";
    IpLoadbalancingRouteRuleMatches["EXISTS"] = "exists";
    IpLoadbalancingRouteRuleMatches["IN"] = "in";
    IpLoadbalancingRouteRuleMatches["INTERNAL"] = "internal";
    IpLoadbalancingRouteRuleMatches["IS"] = "is";
    IpLoadbalancingRouteRuleMatches["MATCHES"] = "matches";
    IpLoadbalancingRouteRuleMatches["STARTSWITH"] = "startswith";
})(IpLoadbalancingRouteRuleMatches = exports.IpLoadbalancingRouteRuleMatches || (exports.IpLoadbalancingRouteRuleMatches = {}));
/*
 * Route configuration status
 */
var IpLoadbalancingRouteStatus;
(function (IpLoadbalancingRouteStatus) {
    IpLoadbalancingRouteStatus["CREATING"] = "creating";
    IpLoadbalancingRouteStatus["DELETING"] = "deleting";
    IpLoadbalancingRouteStatus["INTERNAL"] = "internal";
    IpLoadbalancingRouteStatus["OK"] = "ok";
    IpLoadbalancingRouteStatus["UPDATING"] = "updating";
})(IpLoadbalancingRouteStatus = exports.IpLoadbalancingRouteStatus || (exports.IpLoadbalancingRouteStatus = {}));
/*
 * Possible values for ssl ciphers
 */
var IpLoadbalancingSslConfiguration;
(function (IpLoadbalancingSslConfiguration) {
    IpLoadbalancingSslConfiguration["INTERMEDIATE"] = "intermediate";
    IpLoadbalancingSslConfiguration["MODERN"] = "modern";
})(IpLoadbalancingSslConfiguration = exports.IpLoadbalancingSslConfiguration || (exports.IpLoadbalancingSslConfiguration = {}));
/*
 * Possible values for ssl type
 */
var IpLoadbalancingSslType;
(function (IpLoadbalancingSslType) {
    IpLoadbalancingSslType["BUILT"] = "built";
    IpLoadbalancingSslType["BUILT_NOT_ROUTED"] = "built_not_routed";
    IpLoadbalancingSslType["CUSTOM"] = "custom";
})(IpLoadbalancingSslType = exports.IpLoadbalancingSslType || (exports.IpLoadbalancingSslType = {}));
/*
 * Possible values for a Load Balancer status
 */
var IpLoadbalancingstatus;
(function (IpLoadbalancingstatus) {
    IpLoadbalancingstatus["ERROR"] = "error";
    IpLoadbalancingstatus["OK"] = "ok";
    IpLoadbalancingstatus["UNKNOWN"] = "unknown";
    IpLoadbalancingstatus["WARN"] = "warn";
})(IpLoadbalancingstatus = exports.IpLoadbalancingstatus || (exports.IpLoadbalancingstatus = {}));
/*
 * Possible values for HTTP backend stickiness
 */
var IpLoadbalancingStickinessHTTP;
(function (IpLoadbalancingStickinessHTTP) {
    IpLoadbalancingStickinessHTTP["COOKIE"] = "cookie";
    IpLoadbalancingStickinessHTTP["SOURCEIP"] = "sourceIp";
})(IpLoadbalancingStickinessHTTP = exports.IpLoadbalancingStickinessHTTP || (exports.IpLoadbalancingStickinessHTTP = {}));
/*
 * Possible values for TCP backend stickiness
 */
var IpLoadbalancingStickinessTCP;
(function (IpLoadbalancingStickinessTCP) {
    IpLoadbalancingStickinessTCP["SOURCEIP"] = "sourceIp";
})(IpLoadbalancingStickinessTCP = exports.IpLoadbalancingStickinessTCP || (exports.IpLoadbalancingStickinessTCP = {}));
/*
 * Possible task action
 */
var IpLoadbalancingTaskAction;
(function (IpLoadbalancingTaskAction) {
    IpLoadbalancingTaskAction["DELETEIPLB"] = "deleteIplb";
    IpLoadbalancingTaskAction["DEPLOYIPLB"] = "deployIplb";
    IpLoadbalancingTaskAction["INSTALL"] = "install";
    IpLoadbalancingTaskAction["INSTALLIPLB"] = "installIplb";
    IpLoadbalancingTaskAction["INSTALLZONE"] = "installZone";
    IpLoadbalancingTaskAction["ORDERFREECERTIFICATE"] = "orderFreeCertificate";
    IpLoadbalancingTaskAction["ORDERPAIDCERTIFICATE"] = "orderPaidCertificate";
    IpLoadbalancingTaskAction["ORDERSSL"] = "orderSsl";
    IpLoadbalancingTaskAction["REFRESHIPLB"] = "refreshIplb";
    IpLoadbalancingTaskAction["RELEASEIPLB"] = "releaseIplb";
    IpLoadbalancingTaskAction["RELEASEIPLBZONE"] = "releaseIplbZone";
    IpLoadbalancingTaskAction["REOPENIPLB"] = "reopenIplb";
    IpLoadbalancingTaskAction["SUSPENDIPLB"] = "suspendIplb";
    IpLoadbalancingTaskAction["SUSPENDZONE"] = "suspendZone";
    IpLoadbalancingTaskAction["SWITCHTOIPLBNEXTGENERATIONAPI"] = "switchToIplbNextGenerationApi";
    IpLoadbalancingTaskAction["VRACKATTACH"] = "vrackAttach";
    IpLoadbalancingTaskAction["VRACKDETACH"] = "vrackDetach";
})(IpLoadbalancingTaskAction = exports.IpLoadbalancingTaskAction || (exports.IpLoadbalancingTaskAction = {}));
/*
 * Possible task status
 */
var IpLoadbalancingTaskStatus;
(function (IpLoadbalancingTaskStatus) {
    IpLoadbalancingTaskStatus["BLOCKED"] = "blocked";
    IpLoadbalancingTaskStatus["CANCELLED"] = "cancelled";
    IpLoadbalancingTaskStatus["DOING"] = "doing";
    IpLoadbalancingTaskStatus["DONE"] = "done";
    IpLoadbalancingTaskStatus["ERROR"] = "error";
    IpLoadbalancingTaskStatus["TODO"] = "todo";
})(IpLoadbalancingTaskStatus = exports.IpLoadbalancingTaskStatus || (exports.IpLoadbalancingTaskStatus = {}));
/*
 * Possible values for load balancing vRack state
 */
var IpLoadbalancingVrackState;
(function (IpLoadbalancingVrackState) {
    IpLoadbalancingVrackState["ACTIVATING"] = "activating";
    IpLoadbalancingVrackState["ACTIVE"] = "active";
    IpLoadbalancingVrackState["DEACTIVATING"] = "deactivating";
    IpLoadbalancingVrackState["INACTIVE"] = "inactive";
})(IpLoadbalancingVrackState = exports.IpLoadbalancingVrackState || (exports.IpLoadbalancingVrackState = {}));
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
/*
 * All future uses you can provide for a service termination
 */
var ServiceTerminationFutureUse;
(function (ServiceTerminationFutureUse) {
    ServiceTerminationFutureUse["NOT_REPLACING_SERVICE"] = "NOT_REPLACING_SERVICE";
    ServiceTerminationFutureUse["OTHER"] = "OTHER";
    ServiceTerminationFutureUse["SUBSCRIBE_AN_OTHER_SERVICE"] = "SUBSCRIBE_AN_OTHER_SERVICE";
    ServiceTerminationFutureUse["SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR";
    ServiceTerminationFutureUse["SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
})(ServiceTerminationFutureUse = exports.ServiceTerminationFutureUse || (exports.ServiceTerminationFutureUse = {}));
/*
 * All reasons you can provide for a service termination
 */
var ServiceTerminationReason;
(function (ServiceTerminationReason) {
    ServiceTerminationReason["FEATURES_DONT_SUIT_ME"] = "FEATURES_DONT_SUIT_ME";
    ServiceTerminationReason["LACK_OF_PERFORMANCES"] = "LACK_OF_PERFORMANCES";
    ServiceTerminationReason["MIGRATED_TO_ANOTHER_OVH_PRODUCT"] = "MIGRATED_TO_ANOTHER_OVH_PRODUCT";
    ServiceTerminationReason["MIGRATED_TO_COMPETITOR"] = "MIGRATED_TO_COMPETITOR";
    ServiceTerminationReason["NOT_ENOUGH_RECOGNITION"] = "NOT_ENOUGH_RECOGNITION";
    ServiceTerminationReason["NOT_NEEDED_ANYMORE"] = "NOT_NEEDED_ANYMORE";
    ServiceTerminationReason["NOT_RELIABLE"] = "NOT_RELIABLE";
    ServiceTerminationReason["NO_ANSWER"] = "NO_ANSWER";
    ServiceTerminationReason["OTHER"] = "OTHER";
    ServiceTerminationReason["PRODUCT_DIMENSION_DONT_SUIT_ME"] = "PRODUCT_DIMENSION_DONT_SUIT_ME";
    ServiceTerminationReason["PRODUCT_TOOLS_DONT_SUIT_ME"] = "PRODUCT_TOOLS_DONT_SUIT_ME";
    ServiceTerminationReason["TOO_EXPENSIVE"] = "TOO_EXPENSIVE";
    ServiceTerminationReason["TOO_HARD_TO_USE"] = "TOO_HARD_TO_USE";
    ServiceTerminationReason["UNSATIFIED_BY_CUSTOMER_SUPPORT"] = "UNSATIFIED_BY_CUSTOMER_SUPPORT";
})(ServiceTerminationReason = exports.ServiceTerminationReason || (exports.ServiceTerminationReason = {}));
class IpLoadbalancing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the IPLB service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing#GET)
     */
    ListAvailableServices() {
        let url = `/ipLoadbalancing`;
        return this.client.request('GET', url);
    }
    /**
     * Your IP load balancing [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Your IP load balancing [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/ipLoadbalancing/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * availableFarmProbes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFarmProbes#GET)
     */
    AvailableFarmProbesForHealthChecks(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/availableFarmProbes`;
        return this.client.request('GET', url);
    }
    /**
     * availableFarmType operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFarmType#GET)
     */
    AvailableFarmTypes(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/availableFarmType`;
        return this.client.request('GET', url);
    }
    /**
     * availableFrontendType operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableFrontendType#GET)
     */
    AvailableFrontendType(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/availableFrontendType`;
        return this.client.request('GET', url);
    }
    /**
     * availableRouteActions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableRouteActions#GET)
     */
    AvailableRouteActions(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/availableRouteActions`;
        return this.client.request('GET', url);
    }
    /**
     * availableRouteRules operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/availableRouteRules#GET)
     */
    AvailableRouteMatchRules(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/availableRouteRules`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/ipLoadbalancing/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/ipLoadbalancing/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * definedFarms operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedFarms#GET)
     */
    ListOfDefinedFarmsAndWhetherTheyAreHTTPTCPOrUDP(serviceName, vrackNetworkId) {
        let url = `/ipLoadbalancing/${serviceName}/definedFarms?`;
        const queryParams = new query_params_1.default();
        if (vrackNetworkId) {
            queryParams.set('vrackNetworkId', vrackNetworkId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * definedFrontends operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedFrontends#GET)
     */
    ListOfDefinedFrontendsAndWhetherTheyAreHTTPTCPOrUDP(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/definedFrontends`;
        return this.client.request('GET', url);
    }
    /**
     * definedRoutes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/definedRoutes#GET)
     */
    ListOfDefinedRoutesAndWhetherTheyAreHTTPOrTCP(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/definedRoutes`;
        return this.client.request('GET', url);
    }
    /**
     * failover operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/failover#GET)
     */
    ListAllFailoverIpRoutedToThisIPLB(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/failover`;
        return this.client.request('GET', url);
    }
    /**
     * freeCertificate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/freeCertificate#POST)
     */
    OrderAFreeCertificateWeOrderAndDeliverItForYou(fqdn, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/freeCertificate`;
        return this.client.request('POST', url, { fqdn });
    }
    /**
     * List the ipLoadbalancing.backendHttp.BackendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm#GET)
     */
    HTTPFarmForThisIplb(serviceName, vrackNetworkId, zone) {
        let url = `/ipLoadbalancing/${serviceName}/http/farm?`;
        const queryParams = new query_params_1.default();
        if (vrackNetworkId) {
            queryParams.set('vrackNetworkId', vrackNetworkId.toString());
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.backendHttp.BackendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm#POST)
     */
    AddANewHTTPFarmOnYourIPLoadBalancing(serviceName, zone, balance, displayName, port, probe, stickiness, vrackNetworkId) {
        let url = `/ipLoadbalancing/${serviceName}/http/farm`;
        return this.client.request('POST', url, { zone, balance, displayName, port, probe, stickiness, vrackNetworkId });
    }
    /**
     * HTTP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#GET)
     */
    /*
    GetThisObjectProperties(farmId: number, serviceName: string): Promise<IpLoadbalancingbackendHttpBackendHttp> {
      let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`
  
      return this.client.request<IpLoadbalancingbackendHttpBackendHttp>('GET', url)
    }
    */
    /**
     * HTTP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(farmId: number, serviceName: string, payload: IpLoadbalancingbackendHttpBackendHttp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * HTTP Farm [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D#DELETE)
     */
    DeleteAnHTTPFarm(farmId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server#GET)
     */
    HTTPFarmServers(farmId, serviceName, address, cookie, status) {
        let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server?`;
        const queryParams = new query_params_1.default();
        if (address) {
            queryParams.set('address', address.toString());
        }
        if (cookie) {
            queryParams.set('cookie', cookie);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server#POST)
     */
    AddAServerToAnHTTPFarm(address, farmId, serviceName, status, backup, chain, cookie, displayName, port, probe, proxyProtocolVersion, ssl, weight) {
        let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server`;
        return this.client.request('POST', url, { address, status, backup, chain, cookie, displayName, port, probe, proxyProtocolVersion, ssl, weight });
    }
    /**
     * HTTP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
     */
    /*
    GetThisObjectProperties(farmId: number, serverId: number, serviceName: string): Promise<IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer> {
      let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`
  
      return this.client.request<IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer>('GET', url)
    }
    */
    /**
     * HTTP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(farmId: number, serverId: number, serviceName: string, payload: IpLoadbalancingbackendHttpCustomerServerBackendHTTPServer): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * HTTP Farm's Server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
     */
    DeleteAServerFromAnHTTPFarm(farmId, serverId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/http/farm/${farmId}/server/${serverId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.frontendHttp.FrontendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend#GET)
     */
    HTTPFrontendsForThisIplb(serviceName, defaultFarmId, port, zone) {
        let url = `/ipLoadbalancing/${serviceName}/http/frontend?`;
        const queryParams = new query_params_1.default();
        if (defaultFarmId) {
            queryParams.set('defaultFarmId', defaultFarmId.toString());
        }
        if (port) {
            queryParams.set('port', port);
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.frontendHttp.FrontendHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend#POST)
     */
    AddANewHttpFrontendOnYourIPLoadBalancing(port, serviceName, zone, allowedSource, dedicatedIpfo, defaultFarmId, defaultSslId, disabled, displayName, hsts, httpHeader, redirectLocation, ssl) {
        let url = `/ipLoadbalancing/${serviceName}/http/frontend`;
        return this.client.request('POST', url, { port, zone, allowedSource, dedicatedIpfo, defaultFarmId, defaultSslId, disabled, displayName, hsts, httpHeader, redirectLocation, ssl });
    }
    /**
     * Frontend HTTP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#GET)
     */
    /*
    GetThisObjectProperties(frontendId: number, serviceName: string): Promise<IpLoadbalancingfrontendHttpFrontendHttp> {
      let url = `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`
  
      return this.client.request<IpLoadbalancingfrontendHttpFrontendHttp>('GET', url)
    }
    */
    /**
     * Frontend HTTP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(frontendId: number, serviceName: string, payload: IpLoadbalancingfrontendHttpFrontendHttp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Frontend HTTP [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/frontend/%7BfrontendId%7D#DELETE)
     */
    DeleteAnHTTPFrontend(frontendId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/http/frontend/${frontendId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.RouteHttp.RouteHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route#GET)
     */
    HTTPRoutesForThisIplb(serviceName, frontendId) {
        let url = `/ipLoadbalancing/${serviceName}/http/route?`;
        const queryParams = new query_params_1.default();
        if (frontendId) {
            queryParams.set('frontendId', frontendId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.RouteHttp.RouteHttp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route#POST)
     */
    AddANewHTTPRouteToYourFrontend(action, serviceName, displayName, frontendId, weight) {
        let url = `/ipLoadbalancing/${serviceName}/http/route`;
        return this.client.request('POST', url, { action, displayName, frontendId, weight });
    }
    /**
     * HTTP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#GET)
     */
    /*
    GetThisObjectProperties(routeId: number, serviceName: string): Promise<IpLoadbalancingRouteHttpRouteHttp> {
      let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}`
  
      return this.client.request<IpLoadbalancingRouteHttpRouteHttp>('GET', url)
    }
    */
    /**
     * HTTP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(routeId: number, serviceName: string, payload: IpLoadbalancingRouteHttpRouteHttp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * HTTP Route [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D#DELETE)
     */
    DeleteThisHTTPRoute(routeId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule#GET)
     */
    /*
    HTTPRoutesForThisIplb(routeId: number, serviceName: string): Promise<number[]> {
      let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule#POST)
     */
    AddANewRuleToYourRoute(field, match, routeId, serviceName, displayName, negate, pattern, subField) {
        let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`;
        return this.client.request('POST', url, { field, match, displayName, negate, pattern, subField });
    }
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#GET)
     */
    /*
    GetThisObjectProperties(routeId: number, ruleId: number, serviceName: string): Promise<IpLoadbalancingRouteRuleRouteRule> {
      let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`
  
      return this.client.request<IpLoadbalancingRouteRuleRouteRule>('GET', url)
    }
    */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(routeId: number, ruleId: number, serviceName: string, payload: IpLoadbalancingRouteRuleRouteRule): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Rule of a route [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/http/route/%7BrouteId%7D/rule/%7BruleId%7D#DELETE)
     */
    DeleteThisRuleFromTheRoute(routeId, ruleId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule/${ruleId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * instancesState operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/instancesState#GET)
     */
    GetTheEffectiveStateOfYourIPLBInstancesOnIPLBServers(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/instancesState`;
        return this.client.request('GET', url);
    }
    /**
     * natIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/natIp#GET)
     */
    IpSubnetUsedByOVHToNatRequestsOnYourIPLBToYourBackendsYouMustEnsureThatYourBackendsAreNotPartOfANetworkThatOverlapWithThisOne(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/natIp`;
        return this.client.request('GET', url);
    }
    /**
     * pendingChanges operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/pendingChanges#GET)
     */
    ListThePendingChangesOnYourLoadBalancerConfigurationPerZone(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/pendingChanges`;
        return this.client.request('GET', url);
    }
    /**
     * List the ipLoadbalancing.Quota.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota#GET)
     */
    AvailableQuotaInformationsForCurrentBillingPeriodPerZone(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/quota`;
        return this.client.request('GET', url);
    }
    /**
     * Quota informations for current billing period for this zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota/%7Bzone%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, zone: string): Promise<IpLoadbalancingQuotaQuota> {
      let url = `/ipLoadbalancing/${serviceName}/quota/${zone}`
  
      return this.client.request<IpLoadbalancingQuotaQuota>('GET', url)
    }
    */
    /**
     * Quota informations for current billing period for this zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quota/%7Bzone%7D#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, zone: string, payload: IpLoadbalancingQuotaQuota): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/quota/${zone}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the ipLoadbalancing.QuotaHistory.QuotaHistory objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quotaHistory#GET)
     */
    QuotaHistoryInformationsPerMonth(serviceName, historizedDateFrom, historizedDateTo, zone) {
        let url = `/ipLoadbalancing/${serviceName}/quotaHistory?`;
        const queryParams = new query_params_1.default();
        if (historizedDateFrom) {
            queryParams.set('historizedDate.from', historizedDateFrom.toString());
        }
        if (historizedDateTo) {
            queryParams.set('historizedDate.to', historizedDateTo.toString());
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * QuotaHistory [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/quotaHistory/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<IpLoadbalancingQuotaHistoryQuotaHistory> {
      let url = `/ipLoadbalancing/${serviceName}/quotaHistory/${id}`
  
      return this.client.request<IpLoadbalancingQuotaHistoryQuotaHistory>('GET', url)
    }
    */
    /**
     * refresh operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/refresh#POST)
     */
    ApplyTheConfigurationToYourIplb(serviceName, zone) {
        let url = `/ipLoadbalancing/${serviceName}/refresh`;
        return this.client.request('POST', url, { zone });
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/ipLoadbalancing/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the ipLoadbalancing.Ssl.Ssl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl#GET)
     */
    SslForThisIplb(serviceName, fingerprint, serial, type) {
        let url = `/ipLoadbalancing/${serviceName}/ssl?`;
        const queryParams = new query_params_1.default();
        if (fingerprint) {
            queryParams.set('fingerprint', fingerprint);
        }
        if (serial) {
            queryParams.set('serial', serial);
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.Ssl.Ssl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl#POST)
     */
    AddANewCustomSSLCertificateOnYourIPLoadBalancing(certificate, key, serviceName, chain, displayName) {
        let url = `/ipLoadbalancing/${serviceName}/ssl`;
        return this.client.request('POST', url, { certificate, key, chain, displayName });
    }
    /**
     * Ssl [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<IpLoadbalancingSslSsl> {
      let url = `/ipLoadbalancing/${serviceName}/ssl/${id}`
  
      return this.client.request<IpLoadbalancingSslSsl>('GET', url)
    }
    */
    /**
     * Ssl [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: IpLoadbalancingSslSsl): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/ssl/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Ssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/ssl/%7Bid%7D#DELETE)
     */
    DeleteACustomSSLCertificate(id, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/ssl/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/status#GET)
     */
    GetTheGlobalStatusOfYourIPLB(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/status`;
        return this.client.request('GET', url);
    }
    /**
     * List the ipLoadbalancing.Task.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/task#GET)
     */
    TaskForThisIplb(serviceName, action, creationDateFrom, creationDateTo, doneDateFrom, doneDateTo, status) {
        let url = `/ipLoadbalancing/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (action) {
            queryParams.set('action', action.toString());
        }
        if (creationDateFrom) {
            queryParams.set('creationDate.from', creationDateFrom.toString());
        }
        if (creationDateTo) {
            queryParams.set('creationDate.to', creationDateTo.toString());
        }
        if (doneDateFrom) {
            queryParams.set('doneDate.from', doneDateFrom.toString());
        }
        if (doneDateTo) {
            queryParams.set('doneDate.to', doneDateTo.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * IP Load Balancing Operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<IpLoadbalancingTaskTask> {
      let url = `/ipLoadbalancing/${serviceName}/task/${id}`
  
      return this.client.request<IpLoadbalancingTaskTask>('GET', url)
    }
    */
    /**
     * List the ipLoadbalancing.backendTcp.BackendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm#GET)
     */
    TCPFarmForThisIplb(serviceName, vrackNetworkId, zone) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/farm?`;
        const queryParams = new query_params_1.default();
        if (vrackNetworkId) {
            queryParams.set('vrackNetworkId', vrackNetworkId.toString());
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.backendTcp.BackendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm#POST)
     */
    AddANewTCPFarmOnYourIPLoadBalancing(serviceName, zone, balance, displayName, port, probe, stickiness, vrackNetworkId) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/farm`;
        return this.client.request('POST', url, { zone, balance, displayName, port, probe, stickiness, vrackNetworkId });
    }
    /**
     * TCP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#GET)
     */
    /*
    GetThisObjectProperties(farmId: number, serviceName: string): Promise<IpLoadbalancingbackendTcpBackendTcp> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`
  
      return this.client.request<IpLoadbalancingbackendTcpBackendTcp>('GET', url)
    }
    */
    /**
     * TCP Farm [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(farmId: number, serviceName: string, payload: IpLoadbalancingbackendTcpBackendTcp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * TCP Farm [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D#DELETE)
     */
    DeleteATCPFarm(farmId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server#GET)
     */
    TCPFarmServers(farmId, serviceName, address, status) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server?`;
        const queryParams = new query_params_1.default();
        if (address) {
            queryParams.set('address', address.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server#POST)
     */
    AddAServerToATCPFarm(address, farmId, serviceName, status, backup, chain, displayName, port, probe, proxyProtocolVersion, ssl, weight) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server`;
        return this.client.request('POST', url, { address, status, backup, chain, displayName, port, probe, proxyProtocolVersion, ssl, weight });
    }
    /**
     * TCP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
     */
    /*
    GetThisObjectProperties(farmId: number, serverId: number, serviceName: string): Promise<IpLoadbalancingbackendTcpCustomerServerBackendTCPServer> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`
  
      return this.client.request<IpLoadbalancingbackendTcpCustomerServerBackendTCPServer>('GET', url)
    }
    */
    /**
     * TCP Farm's Server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(farmId: number, serverId: number, serviceName: string, payload: IpLoadbalancingbackendTcpCustomerServerBackendTCPServer): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * TCP Farm's Server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
     */
    DeleteAServerFromATCPFarm(farmId, serverId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.frontendTcp.FrontendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend#GET)
     */
    TCPFrontendsForThisIplb(serviceName, defaultFarmId, port, zone) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/frontend?`;
        const queryParams = new query_params_1.default();
        if (defaultFarmId) {
            queryParams.set('defaultFarmId', defaultFarmId.toString());
        }
        if (port) {
            queryParams.set('port', port);
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.frontendTcp.FrontendTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend#POST)
     */
    AddANewTCPFrontendOnYourIPLoadBalancing(port, serviceName, zone, allowedSource, dedicatedIpfo, defaultFarmId, defaultSslId, disabled, displayName, ssl) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/frontend`;
        return this.client.request('POST', url, { port, zone, allowedSource, dedicatedIpfo, defaultFarmId, defaultSslId, disabled, displayName, ssl });
    }
    /**
     * Frontend TCP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#GET)
     */
    /*
    GetThisObjectProperties(frontendId: number, serviceName: string): Promise<IpLoadbalancingfrontendTcpFrontendTcp> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`
  
      return this.client.request<IpLoadbalancingfrontendTcpFrontendTcp>('GET', url)
    }
    */
    /**
     * Frontend TCP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(frontendId: number, serviceName: string, payload: IpLoadbalancingfrontendTcpFrontendTcp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Frontend TCP [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/frontend/%7BfrontendId%7D#DELETE)
     */
    DeleteAnTCPFrontend(frontendId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.RouteTcp.RouteTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route#GET)
     */
    TCPRoutesForThisIplb(serviceName, frontendId) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/route?`;
        const queryParams = new query_params_1.default();
        if (frontendId) {
            queryParams.set('frontendId', frontendId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.RouteTcp.RouteTcp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route#POST)
     */
    AddANewTCPRouteToYourFrontend(action, serviceName, displayName, frontendId, weight) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/route`;
        return this.client.request('POST', url, { action, displayName, frontendId, weight });
    }
    /**
     * TCP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#GET)
     */
    /*
    GetThisObjectProperties(routeId: number, serviceName: string): Promise<IpLoadbalancingRouteTcpRouteTcp> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`
  
      return this.client.request<IpLoadbalancingRouteTcpRouteTcp>('GET', url)
    }
    */
    /**
     * TCP Route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(routeId: number, serviceName: string, payload: IpLoadbalancingRouteTcpRouteTcp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * TCP Route [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D#DELETE)
     */
    DeleteThisTCPRoute(routeId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule#GET)
     */
    /*
    HTTPRoutesForThisIplb(routeId: number, serviceName: string): Promise<number[]> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * List the ipLoadbalancing.RouteRule.RouteRule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule#POST)
     */
    /*
    AddANewRuleToYourRoute(field: string, match: IpLoadbalancingRouteRuleMatches, routeId: number, serviceName: string, displayName?: string, negate?: boolean, pattern?: string, subField?: string): Promise<IpLoadbalancingRouteRuleRouteRule> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule`
  
      return this.client.request<IpLoadbalancingRouteRuleRouteRule>('POST', url, {field, match, displayName, negate, pattern, subField})
    }
    */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#GET)
     */
    /*
    GetThisObjectProperties(routeId: number, ruleId: number, serviceName: string): Promise<IpLoadbalancingRouteRuleRouteRule> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`
  
      return this.client.request<IpLoadbalancingRouteRuleRouteRule>('GET', url)
    }
    */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(routeId: number, ruleId: number, serviceName: string, payload: IpLoadbalancingRouteRuleRouteRule): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Rule of a route [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/tcp/route/%7BrouteId%7D/rule/%7BruleId%7D#DELETE)
     */
    /*
    DeleteThisRuleFromTheRoute(routeId: number, ruleId: number, serviceName: string): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the ipLoadbalancing.backendUdp.BackendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm#GET)
     */
    UDPFarmForThisIplb(serviceName, vrackNetworkId, zone) {
        let url = `/ipLoadbalancing/${serviceName}/udp/farm?`;
        const queryParams = new query_params_1.default();
        if (vrackNetworkId) {
            queryParams.set('vrackNetworkId', vrackNetworkId.toString());
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.backendUdp.BackendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm#POST)
     */
    AddANewUDPFarmOnYourIPLoadBalancing(port, serviceName, zone, displayName, vrackNetworkId) {
        let url = `/ipLoadbalancing/${serviceName}/udp/farm`;
        return this.client.request('POST', url, { port, zone, displayName, vrackNetworkId });
    }
    /**
     * UDP Farm [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#GET)
     */
    /*
    GetThisObjectProperties(farmId: number, serviceName: string): Promise<IpLoadbalancingbackendUdpBackendUdp> {
      let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`
  
      return this.client.request<IpLoadbalancingbackendUdpBackendUdp>('GET', url)
    }
    */
    /**
     * UDP Farm [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(farmId: number, serviceName: string, payload: IpLoadbalancingbackendUdpBackendUdp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * UDP Farm [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D#DELETE)
     */
    DeleteAnUDPFarm(farmId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server#GET)
     */
    UDPFarmServers(farmId, serviceName, address, status) {
        let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server?`;
        const queryParams = new query_params_1.default();
        if (address) {
            queryParams.set('address', address.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server#POST)
     */
    AddAServerToAnUDPFarm(address, farmId, serviceName, status, displayName, port) {
        let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server`;
        return this.client.request('POST', url, { address, status, displayName, port });
    }
    /**
     * UDP Farm's Server [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#GET)
     */
    /*
    GetThisObjectProperties(farmId: number, serverId: number, serviceName: string): Promise<IpLoadbalancingbackendUdpCustomerServerBackendUDPServer> {
      let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`
  
      return this.client.request<IpLoadbalancingbackendUdpCustomerServerBackendUDPServer>('GET', url)
    }
    */
    /**
     * UDP Farm's Server [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(farmId: number, serverId: number, serviceName: string, payload: IpLoadbalancingbackendUdpCustomerServerBackendUDPServer): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * UDP Farm's Server [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/farm/%7BfarmId%7D/server/%7BserverId%7D#DELETE)
     */
    DeleteAServerFromAnUDPFarm(farmId, serverId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server/${serverId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.frontendUdp.FrontendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend#GET)
     */
    UDPFrontendsForThisIplb(serviceName, defaultFarmId, port, zone) {
        let url = `/ipLoadbalancing/${serviceName}/udp/frontend?`;
        const queryParams = new query_params_1.default();
        if (defaultFarmId) {
            queryParams.set('defaultFarmId', defaultFarmId.toString());
        }
        if (port) {
            queryParams.set('port', port);
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.frontendUdp.FrontendUdp objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend#POST)
     */
    AddANewUDPFrontendOnYourIPLoadBalancing(port, serviceName, zone, dedicatedIpfo, defaultFarmId, disabled, displayName) {
        let url = `/ipLoadbalancing/${serviceName}/udp/frontend`;
        return this.client.request('POST', url, { port, zone, dedicatedIpfo, defaultFarmId, disabled, displayName });
    }
    /**
     * Frontend UDP [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#GET)
     */
    /*
    GetThisObjectProperties(frontendId: number, serviceName: string): Promise<IpLoadbalancingfrontendUdpFrontendUdp> {
      let url = `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`
  
      return this.client.request<IpLoadbalancingfrontendUdpFrontendUdp>('GET', url)
    }
    */
    /**
     * Frontend UDP [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(frontendId: number, serviceName: string, payload: IpLoadbalancingfrontendUdpFrontendUdp): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Frontend UDP [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/udp/frontend/%7BfrontendId%7D#DELETE)
     */
    DeleteAnUDPFrontend(frontendId, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network#GET)
     */
    DescriptionsOfPrivateNetworksInTheVRackAttachedToThisLoadBalancer(serviceName, subnet, vlan) {
        let url = `/ipLoadbalancing/${serviceName}/vrack/network?`;
        const queryParams = new query_params_1.default();
        if (subnet) {
            queryParams.set('subnet', subnet.toString());
        }
        if (vlan) {
            queryParams.set('vlan', vlan.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ipLoadbalancing.VrackNetwork.VrackNetwork objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network#POST)
     */
    AddADescriptionOfAPrivateNetworkInTheAttachedVRack(natIp, serviceName, subnet, displayName, farmId, vlan) {
        let url = `/ipLoadbalancing/${serviceName}/vrack/network`;
        return this.client.request('POST', url, { natIp, subnet, displayName, farmId, vlan });
    }
    /**
     * Represents a private network in the vRack [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, vrackNetworkId: number): Promise<IpLoadbalancingVrackNetworkVrackNetwork> {
      let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`
  
      return this.client.request<IpLoadbalancingVrackNetworkVrackNetwork>('GET', url)
    }
    */
    /**
     * Represents a private network in the vRack [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, vrackNetworkId: number, payload: IpLoadbalancingVrackNetworkVrackNetwork): Promise<void> {
      let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Represents a private network in the vRack [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D#DELETE)
     */
    DeleteThisDescriptionOfAPrivateNetworkInTheVRackItMustNotBeUsedByAnyFarmServer(serviceName, vrackNetworkId) {
        let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * updateFarmId operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/network/%7BvrackNetworkId%7D/updateFarmId#POST)
     */
    UpdateFarmAttachedToThatVrackNetworkId(farmId, serviceName, vrackNetworkId) {
        let url = `/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}/updateFarmId`;
        return this.client.request('POST', url, { farmId });
    }
    /**
     * networkCreationRules operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/networkCreationRules#GET)
     */
    RulesToCreateANetworkAttachedToAVrack(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/vrack/networkCreationRules`;
        return this.client.request('GET', url);
    }
    /**
     * status operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/vrack/status#GET)
     */
    InformationAboutVRackForYourLoadBalancer(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/vrack/status`;
        return this.client.request('GET', url);
    }
    /**
     * List the ipLoadbalancing.Zone.Zone objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone#GET)
     */
    ZoneForThisIplb(serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/zone`;
        return this.client.request('GET', url);
    }
    /**
     * IP Load Balancing Zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<IpLoadbalancingZoneZone> {
      let url = `/ipLoadbalancing/${serviceName}/zone/${name}`
  
      return this.client.request<IpLoadbalancingZoneZone>('GET', url)
    }
    */
    /**
     * cancelTermination operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D/cancelTermination#POST)
     */
    CancelTheTerminationRequestOfYourServiceZoneOption(name, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/zone/${name}/cancelTermination`;
        return this.client.request('POST', url);
    }
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/%7BserviceName%7D/zone/%7Bname%7D/terminate#POST)
     */
    TerminateYourServiceZoneOption(name, serviceName) {
        let url = `/ipLoadbalancing/${serviceName}/zone/${name}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List of zone available for an IP load balancing [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ipLoadbalancing/availableZones#GET)
     */
    ListOfZoneAvailableForAnIPLoadBalancing() {
        let url = `/ipLoadbalancing/availableZones`;
        return this.client.request('GET', url);
    }
}
exports.IpLoadbalancing = IpLoadbalancing;
//# sourceMappingURL=ipLoadbalancing.js.map