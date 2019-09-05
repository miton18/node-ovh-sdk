"use strict";
// GENERATED SDK for service API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 *
 */
var OrderCurrencyCode;
(function (OrderCurrencyCode) {
    OrderCurrencyCode["AUD"] = "AUD";
    OrderCurrencyCode["CAD"] = "CAD";
    OrderCurrencyCode["CZK"] = "CZK";
    OrderCurrencyCode["EUR"] = "EUR";
    OrderCurrencyCode["GBP"] = "GBP";
    OrderCurrencyCode["LTL"] = "LTL";
    OrderCurrencyCode["MAD"] = "MAD";
    OrderCurrencyCode["N_A"] = "N/A";
    OrderCurrencyCode["PLN"] = "PLN";
    OrderCurrencyCode["SGD"] = "SGD";
    OrderCurrencyCode["TND"] = "TND";
    OrderCurrencyCode["USD"] = "USD";
    OrderCurrencyCode["XOF"] = "XOF";
    OrderCurrencyCode["POINTS"] = "points";
})(OrderCurrencyCode = exports.OrderCurrencyCode || (exports.OrderCurrencyCode = {}));
/*
 * Possible billing states
 */
var ServiceBillingState;
(function (ServiceBillingState) {
    ServiceBillingState["EXPIRED"] = "expired";
    ServiceBillingState["OK"] = "ok";
    ServiceBillingState["PENDING"] = "pending";
    ServiceBillingState["UNPAID"] = "unpaid";
})(ServiceBillingState = exports.ServiceBillingState || (exports.ServiceBillingState = {}));
/*
 * Interval enum information
 */
var ServicerenewInterval;
(function (ServicerenewInterval) {
    ServicerenewInterval["P1M"] = "P1M";
    ServicerenewInterval["P1Y"] = "P1Y";
    ServicerenewInterval["P2Y"] = "P2Y";
    ServicerenewInterval["P3M"] = "P3M";
    ServicerenewInterval["P3Y"] = "P3Y";
    ServicerenewInterval["P6M"] = "P6M";
})(ServicerenewInterval = exports.ServicerenewInterval || (exports.ServicerenewInterval = {}));
/*
 * Mode enum informations
 */
var ServicerenewMode;
(function (ServicerenewMode) {
    ServicerenewMode["AUTOMATICFORCEDPRODUCT"] = "automaticForcedProduct";
    ServicerenewMode["AUTOMATICV2012"] = "automaticV2012";
    ServicerenewMode["AUTOMATICV2014"] = "automaticV2014";
    ServicerenewMode["AUTOMATICV2016"] = "automaticV2016";
    ServicerenewMode["DELETEATENDENGAGEMENT"] = "deleteAtEndEngagement";
    ServicerenewMode["DELETEATEXPIRATION"] = "deleteAtExpiration";
    ServicerenewMode["MANUAL"] = "manual";
    ServicerenewMode["ONESHOT"] = "oneShot";
    ServicerenewMode["OPTION"] = "option";
})(ServicerenewMode = exports.ServicerenewMode || (exports.ServicerenewMode = {}));
/*
 * Possible resource states
 */
var ServiceResourceState;
(function (ServiceResourceState) {
    ServiceResourceState["DELETED"] = "deleted";
    ServiceResourceState["DELETING"] = "deleting";
    ServiceResourceState["OK"] = "ok";
    ServiceResourceState["OPENING"] = "opening";
    ServiceResourceState["SUSPENDED"] = "suspended";
    ServiceResourceState["SUSPENDING"] = "suspending";
    ServiceResourceState["TODELETE"] = "toDelete";
    ServiceResourceState["TOOPEN"] = "toOpen";
    ServiceResourceState["TOSUSPEND"] = "toSuspend";
})(ServiceResourceState = exports.ServiceResourceState || (exports.ServiceResourceState = {}));
class Service {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the services [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service#GET)
     */
    ListAvailableServices() {
        let url = `/service`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D#GET)
     */
    GetThisObjectProperties(serviceId) {
        let url = `/service/${serviceId}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D#PUT)
     */
    AlterThisObjectProperties(serviceId, payload) {
        let url = `/service/${serviceId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/renew#GET)
     */
    ListPossibleRenewsForThisService(serviceId, includeOptions) {
        let url = `/service/${serviceId}/renew?`;
        const queryParams = new query_params_1.default();
        if (includeOptions) {
            queryParams.set('includeOptions', includeOptions.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/renew#POST)
     */
    CreateARenewOrder(duration, serviceId, services, dryRun) {
        let url = `/service/${serviceId}/renew`;
        return this.client.request('POST', url, { duration, services, dryRun });
    }
    /**
     * reopen operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/reopen#POST)
     */
    ReopenASuspendedService(serviceId) {
        let url = `/service/${serviceId}/reopen`;
        return this.client.request('POST', url);
    }
    /**
     * suspend operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/suspend#POST)
     */
    SuspendTheServiceTheServiceWontBeAccessibleButYouWillStillBeChargedForIt(serviceId) {
        let url = `/service/${serviceId}/suspend`;
        return this.client.request('POST', url);
    }
    /**
     * terminate operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/terminate#POST)
     */
    TerminatesASuspendedService(serviceId) {
        let url = `/service/${serviceId}/terminate`;
        return this.client.request('POST', url);
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map