"use strict";
// GENERATED SDK for sslGateway API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
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
/*
 * Possible values for SSL Gateway domain state
 */
var SslGatewayDomainState;
(function (SslGatewayDomainState) {
    SslGatewayDomainState["CREATING"] = "creating";
    SslGatewayDomainState["DELETED"] = "deleted";
    SslGatewayDomainState["DELETING"] = "deleting";
    SslGatewayDomainState["HTTP_ONLY"] = "http-only";
    SslGatewayDomainState["INTERNAL"] = "internal";
    SslGatewayDomainState["OK"] = "ok";
})(SslGatewayDomainState = exports.SslGatewayDomainState || (exports.SslGatewayDomainState = {}));
/*
 * List of SSL Gateway offers
 */
var SslGatewayOffer;
(function (SslGatewayOffer) {
    SslGatewayOffer["ADVANCED"] = "advanced";
    SslGatewayOffer["ENTERPRISE"] = "enterprise";
    SslGatewayOffer["FREE"] = "free";
    SslGatewayOffer["INTERNAL"] = "internal";
})(SslGatewayOffer = exports.SslGatewayOffer || (exports.SslGatewayOffer = {}));
/*
 * Possible values for SSL Gateway server state
 */
var SslGatewayServerState;
(function (SslGatewayServerState) {
    SslGatewayServerState["CREATING"] = "creating";
    SslGatewayServerState["DELETED"] = "deleted";
    SslGatewayServerState["DELETING"] = "deleting";
    SslGatewayServerState["INTERNAL"] = "internal";
    SslGatewayServerState["OK"] = "ok";
    SslGatewayServerState["UPDATING"] = "updating";
})(SslGatewayServerState = exports.SslGatewayServerState || (exports.SslGatewayServerState = {}));
/*
 * Possible values for ssl ciphers
 */
var SslGatewaySslConfiguration;
(function (SslGatewaySslConfiguration) {
    SslGatewaySslConfiguration["INTERMEDIATE"] = "intermediate";
    SslGatewaySslConfiguration["INTERNAL"] = "internal";
    SslGatewaySslConfiguration["MODERN"] = "modern";
})(SslGatewaySslConfiguration = exports.SslGatewaySslConfiguration || (exports.SslGatewaySslConfiguration = {}));
/*
 * Possible values for SSL Gateway state
 */
var SslGatewayState;
(function (SslGatewayState) {
    SslGatewayState["CREATING"] = "creating";
    SslGatewayState["DELETED"] = "deleted";
    SslGatewayState["DELETING"] = "deleting";
    SslGatewayState["HTTP_ONLY"] = "http-only";
    SslGatewayState["INTERNAL"] = "internal";
    SslGatewayState["OK"] = "ok";
    SslGatewayState["SUSPENDED"] = "suspended";
    SslGatewayState["UPGRADING"] = "upgrading";
})(SslGatewayState = exports.SslGatewayState || (exports.SslGatewayState = {}));
/*
 * Possible task action
 */
var SslGatewayTaskAction;
(function (SslGatewayTaskAction) {
    SslGatewayTaskAction["ADDDOMAIN"] = "addDomain";
    SslGatewayTaskAction["ADDPAIDCERTIFICATE"] = "addPaidCertificate";
    SslGatewayTaskAction["ADDSERVER"] = "addServer";
    SslGatewayTaskAction["CREATESERVICE"] = "createService";
    SslGatewayTaskAction["DELETEDOMAIN"] = "deleteDomain";
    SslGatewayTaskAction["DELETESERVER"] = "deleteServer";
    SslGatewayTaskAction["DELETESERVICE"] = "deleteService";
    SslGatewayTaskAction["INTERNALTASK"] = "internalTask";
    SslGatewayTaskAction["UPDATESERVER"] = "updateServer";
    SslGatewayTaskAction["UPDATESERVICE"] = "updateService";
    SslGatewayTaskAction["UPGRADE"] = "upgrade";
})(SslGatewayTaskAction = exports.SslGatewayTaskAction || (exports.SslGatewayTaskAction = {}));
/*
 * Possible task status
 */
var SslGatewayTaskStatus;
(function (SslGatewayTaskStatus) {
    SslGatewayTaskStatus["BLOCKED"] = "blocked";
    SslGatewayTaskStatus["CANCELLED"] = "cancelled";
    SslGatewayTaskStatus["DOING"] = "doing";
    SslGatewayTaskStatus["DONE"] = "done";
    SslGatewayTaskStatus["ERROR"] = "error";
    SslGatewayTaskStatus["PAUSED"] = "paused";
    SslGatewayTaskStatus["TODO"] = "todo";
})(SslGatewayTaskStatus = exports.SslGatewayTaskStatus || (exports.SslGatewayTaskStatus = {}));
class SslGateway {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the SSLGATEWAY service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway#GET)
     */
    ListAvailableServices() {
        let url = `/sslGateway`;
        return this.client.request('GET', url);
    }
    /**
     * Your SSL Gateway [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/sslGateway/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Your SSL Gateway [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/sslGateway/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/sslGateway/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/sslGateway/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the sslGateway.Domain objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain#GET)
     */
    DomainsAttachedToYourSSLGateway(serviceName) {
        let url = `/sslGateway/${serviceName}/domain`;
        return this.client.request('GET', url);
    }
    /**
     * List the sslGateway.Domain objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain#POST)
     */
    AttachANewDomainToYourSSLGateway(domain, serviceName) {
        let url = `/sslGateway/${serviceName}/domain`;
        return this.client.request('POST', url, { domain });
    }
    /**
     * Domain attached to an SSL Gateway [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SslGatewayDomain> {
      let url = `/sslGateway/${serviceName}/domain/${id}`
  
      return this.client.request<SslGatewayDomain>('GET', url)
    }
    */
    /**
     * Domain attached to an SSL Gateway [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/domain/%7Bid%7D#DELETE)
     */
    DetachADomainFromYourSSLGateway(id, serviceName) {
        let url = `/sslGateway/${serviceName}/domain/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * natIp operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/natIp#GET)
     */
    IpSubnetUsedByOVHToNatRequestsToYourSSLGatewayBackends(serviceName) {
        let url = `/sslGateway/${serviceName}/natIp`;
        return this.client.request('GET', url);
    }
    /**
     * renewCertificate operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/renewCertificate#POST)
     */
    RenewYourSSLCertificates(serviceName, domain) {
        let url = `/sslGateway/${serviceName}/renewCertificate`;
        return this.client.request('POST', url, { domain });
    }
    /**
     * List the sslGateway.Server objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server#GET)
     */
    ServersAttachedToYourSSLGateway(serviceName) {
        let url = `/sslGateway/${serviceName}/server`;
        return this.client.request('GET', url);
    }
    /**
     * List the sslGateway.Server objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server#POST)
     */
    AddANewServerToYourSSLGateway(address, port, serviceName) {
        let url = `/sslGateway/${serviceName}/server`;
        return this.client.request('POST', url, { address, port });
    }
    /**
     * Server attached to an SSL Gateway [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SslGatewayServer> {
      let url = `/sslGateway/${serviceName}/server/${id}`
  
      return this.client.request<SslGatewayServer>('GET', url)
    }
    */
    /**
     * Server attached to an SSL Gateway [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: SslGatewayServer): Promise<void> {
      let url = `/sslGateway/${serviceName}/server/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Server attached to an SSL Gateway [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/server/%7Bid%7D#DELETE)
     */
    RemoveAServer(id, serviceName) {
        let url = `/sslGateway/${serviceName}/server/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/sslGateway/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/sslGateway/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the sslGateway.Task objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/task#GET)
     */
    TaskForThisSSLGateway(serviceName) {
        let url = `/sslGateway/${serviceName}/task`;
        return this.client.request('GET', url);
    }
    /**
     * SSL Gateway tasks [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SslGatewayTask> {
      let url = `/sslGateway/${serviceName}/task/${id}`
  
      return this.client.request<SslGatewayTask>('GET', url)
    }
    */
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/sslGateway/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List of zone available for an SSL Gateway [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/availableZones#GET)
     */
    ListOfZoneAvailableForAnSSLGateway() {
        let url = `/sslGateway/availableZones`;
        return this.client.request('GET', url);
    }
    /**
     * Check domain eligibility. Return list of eligible IP(s) for this domain. [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sslGateway/eligibility#GET)
     */
    CheckDomainEligibilityReturnListOfEligibleIPsForThisDomain(domain) {
        let url = `/sslGateway/eligibility?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.SslGateway = SslGateway;
//# sourceMappingURL=sslGateway.js.map