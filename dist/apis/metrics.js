"use strict";
// GENERATED SDK for metrics API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Type of the service
 */
var OfferType;
(function (OfferType) {
    OfferType["CLOUD"] = "cloud";
    OfferType["LIVE"] = "live";
})(OfferType = exports.OfferType || (exports.OfferType = {}));
/*
 * Metrics service token permissions
 */
var Permission;
(function (Permission) {
    Permission["READ"] = "read";
    Permission["WRITE"] = "write";
})(Permission = exports.Permission || (exports.Permission = {}));
/*
 * Status of of the service
 */
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["NEW"] = "new";
    ServiceStatus["ALIVE"] = "alive";
    ServiceStatus["DISABLED"] = "disabled";
    ServiceStatus["DEAD"] = "dead";
})(ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {}));
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
class Metrics {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the METRICS service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics#GET)
     */
    ListAvailableServices() {
        let url = `/metrics`;
        return this.client.request('GET', url);
    }
    /**
     * Operations about the METRICS service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D#GET)
     */
    GetService(serviceName) {
        let url = `/metrics/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Operations about the METRICS service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D#PUT)
     */
    ModifyService(serviceName, payload) {
        let url = `/metrics/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/metrics/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/metrics/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * Metrics service consumption [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/consumption#GET)
     */
    GetConsumptionForYourService(serviceName, duration) {
        let url = `/metrics/${serviceName}/consumption?`;
        const queryParams = new query_params_1.default();
        if (duration) {
            queryParams.set('duration', duration.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Look for service/token [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/lookup/token#POST)
     */
    FindTokenIDForASpecificToken(serviceName, payload) {
        let url = `/metrics/${serviceName}/lookup/token`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Metrics service quota management [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/quota#PUT)
     */
    SetOverquota(serviceName, payload) {
        let url = `/metrics/${serviceName}/quota`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/metrics/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/metrics/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/metrics/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token#GET)
     */
    GetListOfTokens(serviceName) {
        let url = `/metrics/${serviceName}/token`;
        return this.client.request('GET', url);
    }
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token#POST)
     */
    CreateAToken(serviceName, payload) {
        let url = `/metrics/${serviceName}/token`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#DELETE)
     */
    RevokeAToken(serviceName, tokenId) {
        let url = `/metrics/${serviceName}/token/${tokenId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#GET)
     */
    GetASpecificToken(serviceName, tokenId) {
        let url = `/metrics/${serviceName}/token/${tokenId}`;
        return this.client.request('GET', url);
    }
    /**
     * Metrics service token operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/metrics/%7BserviceName%7D/token/%7BtokenId%7D#PUT)
     */
    ModifyAToken(serviceName, tokenId, payload) {
        let url = `/metrics/${serviceName}/token/${tokenId}`;
        return this.client.request('PUT', url, payload);
    }
}
exports.Metrics = Metrics;
//# sourceMappingURL=metrics.js.map