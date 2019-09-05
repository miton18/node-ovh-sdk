"use strict";
// GENERATED SDK for services API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Currency code
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
 * Type of item
 */
var ServicesbillingInvoiceLineType;
(function (ServicesbillingInvoiceLineType) {
    ServicesbillingInvoiceLineType["ACCESSORY"] = "accessory";
    ServicesbillingInvoiceLineType["CONSUMPTION"] = "consumption";
    ServicesbillingInvoiceLineType["CREATION"] = "creation";
    ServicesbillingInvoiceLineType["DEPOSIT"] = "deposit";
    ServicesbillingInvoiceLineType["DURATION"] = "duration";
    ServicesbillingInvoiceLineType["GIFT"] = "gift";
    ServicesbillingInvoiceLineType["INSTALLATION"] = "installation";
    ServicesbillingInvoiceLineType["MISC"] = "misc";
    ServicesbillingInvoiceLineType["OTHER"] = "other";
    ServicesbillingInvoiceLineType["OUTPLAN"] = "outplan";
    ServicesbillingInvoiceLineType["QUANTITY"] = "quantity";
    ServicesbillingInvoiceLineType["SPECIAL"] = "special";
    ServicesbillingInvoiceLineType["VOUCHER"] = "voucher";
})(ServicesbillingInvoiceLineType = exports.ServicesbillingInvoiceLineType || (exports.ServicesbillingInvoiceLineType = {}));
class Services {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get list of your service details [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/services#GET)
     */
    ListAvailableServices(orderBy, routes, sort) {
        let url = `/services?`;
        const queryParams = new query_params_1.default();
        if (orderBy) {
            queryParams.set('orderBy', orderBy);
        }
        if (routes) {
            queryParams.set('routes', routes);
        }
        if (sort) {
            queryParams.set('sort', sort);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get list of your service details [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/services/%7BserviceId%7D#GET)
     */
    GetDetailsAboutAService(serviceId) {
        let url = `/services/${serviceId}`;
        return this.client.request('GET', url);
    }
    /**
     * Engagement for a given service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/services/%7BserviceId%7D/billing/engagement#GET)
     */
    GetEngagementDetails(serviceId) {
        let url = `/services/${serviceId}/billing/engagement`;
        return this.client.request('GET', url);
    }
}
exports.Services = Services;
//# sourceMappingURL=services.js.map