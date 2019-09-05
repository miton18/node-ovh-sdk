"use strict";
// GENERATED SDK for hpcspot API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * All types a HPC Spot consumption can be in
 */
var HpcspotConsumptionType;
(function (HpcspotConsumptionType) {
    HpcspotConsumptionType["JOB"] = "job";
    HpcspotConsumptionType["RESERVATION"] = "reservation";
    HpcspotConsumptionType["SESSION"] = "session";
})(HpcspotConsumptionType = exports.HpcspotConsumptionType || (exports.HpcspotConsumptionType = {}));
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
class Hpcspot {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the HPCSPOT service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot#GET)
     */
    ListAvailableServices() {
        let url = `/hpcspot`;
        return this.client.request('GET', url);
    }
    /**
     * Account HPC Spot [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/hpcspot/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * List the hpcspot.Consumption objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/consumption#GET)
     */
    DetailsOfTheConsumptionOfYourAccount(serviceName, hpcspotItemEndDateFrom, hpcspotItemEndDateTo, hpcspotItemId, orderId, type) {
        let url = `/hpcspot/${serviceName}/consumption?`;
        const queryParams = new query_params_1.default();
        if (hpcspotItemEndDateFrom) {
            queryParams.set('hpcspotItemEndDate.from', hpcspotItemEndDateFrom.toString());
        }
        if (hpcspotItemEndDateTo) {
            queryParams.set('hpcspotItemEndDate.to', hpcspotItemEndDateTo.toString());
        }
        if (hpcspotItemId) {
            queryParams.set('hpcspotItemId', hpcspotItemId.toString());
        }
        if (orderId) {
            queryParams.set('orderId', orderId.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Detail of a HPC Spot consumtion [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/consumption/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<HpcspotConsumption> {
      let url = `/hpcspot/${serviceName}/consumption/${id}`
  
      return this.client.request<HpcspotConsumption>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/hpcspot/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hpcspot/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/hpcspot/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
}
exports.Hpcspot = Hpcspot;
//# sourceMappingURL=hpcspot.js.map