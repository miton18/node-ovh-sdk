"use strict";
// GENERATED SDK for router API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * All states this object can be in
 */
var RouterIpStatus;
(function (RouterIpStatus) {
    RouterIpStatus["BLACKLISTED"] = "blacklisted";
    RouterIpStatus["DELETED"] = "deleted";
    RouterIpStatus["FREE"] = "free";
    RouterIpStatus["INSTALLING"] = "installing";
    RouterIpStatus["OK"] = "ok";
    RouterIpStatus["QUARANTINED"] = "quarantined";
    RouterIpStatus["REMOVING"] = "removing";
    RouterIpStatus["SUSPENDED"] = "suspended";
})(RouterIpStatus = exports.RouterIpStatus || (exports.RouterIpStatus = {}));
/*
 * Action to be taken against the Private Link request
 */
var RouterPrivLinkReqAction;
(function (RouterPrivLinkReqAction) {
    RouterPrivLinkReqAction["ACCEPT"] = "accept";
    RouterPrivLinkReqAction["CANCEL"] = "cancel";
    RouterPrivLinkReqAction["REJECT"] = "reject";
})(RouterPrivLinkReqAction = exports.RouterPrivLinkReqAction || (exports.RouterPrivLinkReqAction = {}));
/*
 * Request status of this private link (all links have to be accepted before being created)
 */
var RouterPrivLinkReqStatus;
(function (RouterPrivLinkReqStatus) {
    RouterPrivLinkReqStatus["ACCEPTED"] = "accepted";
    RouterPrivLinkReqStatus["CANCELLED"] = "cancelled";
    RouterPrivLinkReqStatus["ERROR"] = "error";
    RouterPrivLinkReqStatus["PENDING"] = "pending";
    RouterPrivLinkReqStatus["REJECTED"] = "rejected";
})(RouterPrivLinkReqStatus = exports.RouterPrivLinkReqStatus || (exports.RouterPrivLinkReqStatus = {}));
/*
 * Allowed protocols
 */
var RouterProtocol;
(function (RouterProtocol) {
    RouterProtocol["ANY"] = "any";
    RouterProtocol["TCP"] = "tcp";
    RouterProtocol["UDP"] = "udp";
})(RouterProtocol = exports.RouterProtocol || (exports.RouterProtocol = {}));
/*
 * All states this object can be in
 */
var RouterStatus;
(function (RouterStatus) {
    RouterStatus["CREATING"] = "creating";
    RouterStatus["ERROR"] = "error";
    RouterStatus["OFF"] = "off";
    RouterStatus["ON"] = "on";
    RouterStatus["REMOVING"] = "removing";
    RouterStatus["SUSPENDED"] = "suspended";
})(RouterStatus = exports.RouterStatus || (exports.RouterStatus = {}));
/*
 * All executable types of tasks
 */
var RouterTaskFunction;
(function (RouterTaskFunction) {
    RouterTaskFunction["ADDDNAT"] = "addDnat";
    RouterTaskFunction["ADDDNATMASTER"] = "addDnatMaster";
    RouterTaskFunction["ADDNETWORK"] = "addNetwork";
    RouterTaskFunction["ADDNETWORKMASTER"] = "addNetworkMaster";
    RouterTaskFunction["ADDPRIVATELINK"] = "addPrivateLink";
    RouterTaskFunction["ADDPRIVATELINKMASTER"] = "addPrivateLinkMaster";
    RouterTaskFunction["ADDPRIVATELINKROUTE"] = "addPrivateLinkRoute";
    RouterTaskFunction["ADDPRIVATELINKROUTEMASTER"] = "addPrivateLinkRouteMaster";
    RouterTaskFunction["ADDSNAT"] = "addSnat";
    RouterTaskFunction["ADDSNATMASTER"] = "addSnatMaster";
    RouterTaskFunction["DELDNAT"] = "delDnat";
    RouterTaskFunction["DELDNATMASTER"] = "delDnatMaster";
    RouterTaskFunction["DELNETWORK"] = "delNetwork";
    RouterTaskFunction["DELNETWORKMASTER"] = "delNetworkMaster";
    RouterTaskFunction["DELPRIVATELINK"] = "delPrivateLink";
    RouterTaskFunction["DELPRIVATELINKMASTER"] = "delPrivateLinkMaster";
    RouterTaskFunction["DELPRIVATELINKROUTE"] = "delPrivateLinkRoute";
    RouterTaskFunction["DELPRIVATELINKROUTEMASTER"] = "delPrivateLinkRouteMaster";
    RouterTaskFunction["DELSNAT"] = "delSnat";
    RouterTaskFunction["DELSNATMASTER"] = "delSnatMaster";
    RouterTaskFunction["VPNCREATION"] = "vpnCreation";
    RouterTaskFunction["VPNDELETION"] = "vpnDeletion";
    RouterTaskFunction["VPNSETCONFIG"] = "vpnSetConfig";
    RouterTaskFunction["VPNSETCONFIGMASTER"] = "vpnSetConfigMaster";
    RouterTaskFunction["VPNSETSECRETS"] = "vpnSetSecrets";
    RouterTaskFunction["VPNSETSECRETSMASTER"] = "vpnSetSecretsMaster";
})(RouterTaskFunction = exports.RouterTaskFunction || (exports.RouterTaskFunction = {}));
/*
 * All states a Task can be in
 */
var RouterTaskStatus;
(function (RouterTaskStatus) {
    RouterTaskStatus["CANCELLED"] = "cancelled";
    RouterTaskStatus["DOING"] = "doing";
    RouterTaskStatus["DONE"] = "done";
    RouterTaskStatus["ERROR"] = "error";
    RouterTaskStatus["TODO"] = "todo";
})(RouterTaskStatus = exports.RouterTaskStatus || (exports.RouterTaskStatus = {}));
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
class Router {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the ROUTER service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router#GET)
     */
    ListAvailableServices() {
        let url = `/router`;
        return this.client.request('GET', url);
    }
    /**
     * Router [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/router/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/router/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the router.Network objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network#GET)
     */
    NetworksMountedOnThisRouter(serviceName) {
        let url = `/router/${serviceName}/network`;
        return this.client.request('GET', url);
    }
    /**
     * List the router.Network objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network#POST)
     */
    AddANetworkToYourRouter(description, ipNet, serviceName, vlanTag) {
        let url = `/router/${serviceName}/network`;
        return this.client.request('POST', url, { description, ipNet, vlanTag });
    }
    /**
     * Network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#GET)
     */
    /*
    GetThisObjectProperties(ipNet: any, serviceName: string): Promise<RouterNetwork> {
      let url = `/router/${serviceName}/network/${ipNet}`
  
      return this.client.request<RouterNetwork>('GET', url)
    }
    */
    /**
     * Network [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#PUT)
     */
    AlterThisObjectProperties(ipNet, serviceName, payload) {
        let url = `/router/${serviceName}/network/${ipNet}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Network [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/network/%7BipNet%7D#DELETE)
     */
    RemoveThisNetworkFromYourRouter(ipNet, serviceName) {
        let url = `/router/${serviceName}/network/${ipNet}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the router.PrivateLink objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink#GET)
     */
    PrivateLinksSetUpOnThisRouter(serviceName) {
        let url = `/router/${serviceName}/privateLink`;
        return this.client.request('GET', url);
    }
    /**
     * List the router.PrivateLink objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink#POST)
     */
    AddANewPrivateLinkToYourRouterService(name, peerServiceName, serviceName) {
        let url = `/router/${serviceName}/privateLink`;
        return this.client.request('POST', url, { name, peerServiceName });
    }
    /**
     * Private Link to another service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#GET)
     */
    /*
    GetThisObjectProperties(peerServiceName: string, serviceName: string): Promise<RouterPrivateLink> {
      let url = `/router/${serviceName}/privateLink/${peerServiceName}`
  
      return this.client.request<RouterPrivateLink>('GET', url)
    }
    */
    /**
     * Private Link to another service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(peerServiceName: string, serviceName: string, payload: RouterPrivateLink): Promise<void> {
      let url = `/router/${serviceName}/privateLink/${peerServiceName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Private Link to another service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D#DELETE)
     */
    RemoveAnExistingPrivateLinkFromYourRouterService(peerServiceName, serviceName) {
        let url = `/router/${serviceName}/privateLink/${peerServiceName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Received Private Link requests [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/request#GET)
     */
    /*
    GetThisObjectProperties(peerServiceName: string, serviceName: string): Promise<RouterPrivateLinkRequest> {
      let url = `/router/${serviceName}/privateLink/${peerServiceName}/request`
  
      return this.client.request<RouterPrivateLinkRequest>('GET', url)
    }
    */
    /**
     * manage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/request/manage#POST)
     */
    AcceptRejectOrCancelAPendingRequest(action, peerServiceName, serviceName) {
        let url = `/router/${serviceName}/privateLink/${peerServiceName}/request/manage`;
        return this.client.request('POST', url, { action });
    }
    /**
     * List the router.PrivateLinkRoute objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route#GET)
     */
    RoutesSetUpInAPrivateLink(peerServiceName, serviceName) {
        let url = `/router/${serviceName}/privateLink/${peerServiceName}/route`;
        return this.client.request('GET', url);
    }
    /**
     * List the router.PrivateLinkRoute objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route#POST)
     */
    AddANewOutgoingRouteToYourRouter(network, peerServiceName, serviceName) {
        let url = `/router/${serviceName}/privateLink/${peerServiceName}/route`;
        return this.client.request('POST', url, { network });
    }
    /**
     * Outgoing routes configured inside a Private Link [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route/%7Bnetwork%7D#GET)
     */
    /*
    GetThisObjectProperties(network: string, peerServiceName: string, serviceName: string): Promise<RouterPrivateLinkRoute> {
      let url = `/router/${serviceName}/privateLink/${peerServiceName}/route/${network}`
  
      return this.client.request<RouterPrivateLinkRoute>('GET', url)
    }
    */
    /**
     * Outgoing routes configured inside a Private Link [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/privateLink/%7BpeerServiceName%7D/route/%7Bnetwork%7D#DELETE)
     */
    DeleteAnExistingRouteFromYourRouter(network, peerServiceName, serviceName) {
        let url = `/router/${serviceName}/privateLink/${peerServiceName}/route/${network}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/router/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/router/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the router.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/task#GET)
     */
    TasksForThisRouter(serviceName, _function, status) {
        let url = `/router/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (_function) {
            queryParams.set('function', _function.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<RouterTask> {
      let url = `/router/${serviceName}/task/${id}`
  
      return this.client.request<RouterTask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/router/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the router.Vpn objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn#GET)
     */
    VPNAssociatedWithThisRouter(serviceName) {
        let url = `/router/${serviceName}/vpn`;
        return this.client.request('GET', url);
    }
    /**
     * List the router.Vpn objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn#POST)
     */
    AddAVPNToYourRouter(clientPrivNet, psk, serverPrivNet, serviceName, clientIp) {
        let url = `/router/${serviceName}/vpn`;
        return this.client.request('POST', url, { clientPrivNet, psk, serverPrivNet, clientIp });
    }
    /**
     * Virtual Private Network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<RouterVpn> {
      let url = `/router/${serviceName}/vpn/${id}`
  
      return this.client.request<RouterVpn>('GET', url)
    }
    */
    /**
     * Virtual Private Network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: RouterVpn): Promise<void> {
      let url = `/router/${serviceName}/vpn/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Virtual Private Network [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D#DELETE)
     */
    DeleteAVPNFromYourRouter(id, serviceName) {
        let url = `/router/${serviceName}/vpn/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * setPsk operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/router/%7BserviceName%7D/vpn/%7Bid%7D/setPsk#POST)
     */
    ChangeYourVPNPSK(id, psk, serviceName) {
        let url = `/router/${serviceName}/vpn/${id}/setPsk`;
        return this.client.request('POST', url, { psk });
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map