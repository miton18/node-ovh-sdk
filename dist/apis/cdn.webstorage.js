"use strict";
// GENERATED SDK for cdn/webstorage API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Period of the statistics
 */
var CdnwebstorageStatsPeriod;
(function (CdnwebstorageStatsPeriod) {
    CdnwebstorageStatsPeriod["DAY"] = "day";
    CdnwebstorageStatsPeriod["MONTH"] = "month";
    CdnwebstorageStatsPeriod["WEEK"] = "week";
})(CdnwebstorageStatsPeriod = exports.CdnwebstorageStatsPeriod || (exports.CdnwebstorageStatsPeriod = {}));
/*
 * Type of statistics related to cache
 */
var CdnwebstorageStatsType;
(function (CdnwebstorageStatsType) {
    CdnwebstorageStatsType["BACKEND"] = "backend";
    CdnwebstorageStatsType["CDN"] = "cdn";
    CdnwebstorageStatsType["QUOTA"] = "quota";
})(CdnwebstorageStatsType = exports.CdnwebstorageStatsType || (exports.CdnwebstorageStatsType = {}));
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
class CdnWebstorage {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the CDNSTATIC service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage#GET)
     */
    ListAvailableServices() {
        let url = `/cdn/webstorage`;
        return this.client.request('GET', url);
    }
    /**
     * Static CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/cdn/webstorage/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * credentials operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/credentials#GET)
     */
    GivesForCustomerCredentialsToAccesssSwiftAccount(serviceName) {
        let url = `/cdn/webstorage/${serviceName}/credentials`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/cdn/webstorage/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/cdn/webstorage/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/webstorage/%7BserviceName%7D/statistics#GET)
     */
    ReturnStatsAboutBandwidthConsumption(period, serviceName, type) {
        let url = `/cdn/webstorage/${serviceName}/statistics?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.CdnWebstorage = CdnWebstorage;
//# sourceMappingURL=cdn.webstorage.js.map