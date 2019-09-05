"use strict";
// GENERATED SDK for paas/timeseries API
Object.defineProperty(exports, "__esModule", { value: true });
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
 * Metric name
 */
var PaastimeseriesconsumptionitemMetricName;
(function (PaastimeseriesconsumptionitemMetricName) {
    PaastimeseriesconsumptionitemMetricName["STORAGE"] = "storage";
    PaastimeseriesconsumptionitemMetricName["INPUT"] = "input";
    PaastimeseriesconsumptionitemMetricName["OUTPUT"] = "output";
})(PaastimeseriesconsumptionitemMetricName = exports.PaastimeseriesconsumptionitemMetricName || (exports.PaastimeseriesconsumptionitemMetricName = {}));
/*
 * Tokens permissions
 */
var PaastimeseriesPermission;
(function (PaastimeseriesPermission) {
    PaastimeseriesPermission["READ"] = "READ";
    PaastimeseriesPermission["WRITE"] = "WRITE";
})(PaastimeseriesPermission = exports.PaastimeseriesPermission || (exports.PaastimeseriesPermission = {}));
/*
 * Project quotas
 */
var PaastimeseriesQuotaType;
(function (PaastimeseriesQuotaType) {
    PaastimeseriesQuotaType["DDP"] = "ddp";
    PaastimeseriesQuotaType["MADS"] = "mads";
})(PaastimeseriesQuotaType = exports.PaastimeseriesQuotaType || (exports.PaastimeseriesQuotaType = {}));
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
 * The current status for the project
 */
var TimeseriesStatusType;
(function (TimeseriesStatusType) {
    TimeseriesStatusType["ACTIVE"] = "ACTIVE";
    TimeseriesStatusType["CREATION"] = "CREATION";
    TimeseriesStatusType["DELETED"] = "DELETED";
    TimeseriesStatusType["UNCONFIGURED"] = "UNCONFIGURED";
})(TimeseriesStatusType = exports.TimeseriesStatusType || (exports.TimeseriesStatusType = {}));
class PaasTimeseries {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the PAAS_TIMESERIES service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries#GET)
     */
    ListAvailableServices() {
        let url = `/paas/timeseries`;
        return this.client.request('GET', url);
    }
    /**
     * Timeseries project [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/paas/timeseries/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Timeseries project [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/paas/timeseries/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Change the contacts of this service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/paas/timeseries/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Consumption [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/consumption#GET)
     */
    GetConsumption(serviceName) {
        let url = `/paas/timeseries/${serviceName}/consumption`;
        return this.client.request('GET', url);
    }
    /**
     * Keys [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key#GET)
     */
    GetKeysForAProject(serviceName) {
        let url = `/paas/timeseries/${serviceName}/key`;
        return this.client.request('GET', url);
    }
    /**
     * Keys [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key#POST)
     */
    CreateAKeyForAProject(permissions, serviceName, tags, description) {
        let url = `/paas/timeseries/${serviceName}/key`;
        return this.client.request('POST', url, { permissions, tags, description });
    }
    /**
     * Key [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key/%7BkeyId%7D#GET)
     */
    GetAKey(keyId, serviceName) {
        let url = `/paas/timeseries/${serviceName}/key/${keyId}`;
        return this.client.request('GET', url);
    }
    /**
     * Key [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key/%7BkeyId%7D#PUT)
     */
    CreateAKey(keyId, permissions, serviceName, tags, description) {
        let url = `/paas/timeseries/${serviceName}/key/${keyId}`;
        return this.client.request('PUT', url, { permissions, tags, description });
    }
    /**
     * Key [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/key/%7BkeyId%7D#DELETE)
     */
    DeleteAOpenTSDBToken(keyId, serviceName) {
        let url = `/paas/timeseries/${serviceName}/key/${keyId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Quotas [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/quota#GET)
     */
    GetQuotas(serviceName) {
        let url = `/paas/timeseries/${serviceName}/quota`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/paas/timeseries/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/paas/timeseries/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Setup your project on our platform [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/%7BserviceName%7D/setup#POST)
     */
    SetupAProject(displayName, serviceName, description, raTokenId, raTokenKey, regionId) {
        let url = `/paas/timeseries/${serviceName}/setup`;
        return this.client.request('POST', url, { displayName, description, raTokenId, raTokenKey, regionId });
    }
    /**
     * Regions [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/paas/timeseries/region#GET)
     */
    GetAvailableRegions() {
        let url = `/paas/timeseries/region`;
        return this.client.request('GET', url);
    }
}
exports.PaasTimeseries = PaasTimeseries;
//# sourceMappingURL=paas.timeseries.js.map