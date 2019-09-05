"use strict";
// GENERATED SDK for stack/mis API
Object.defineProperty(exports, "__esModule", { value: true });
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
 * Stack type
 */
var StackStackType;
(function (StackStackType) {
    StackStackType["MDS"] = "MDS";
    StackStackType["MIS"] = "MIS";
    StackStackType["MOS"] = "MOS";
})(StackStackType = exports.StackStackType || (exports.StackStackType = {}));
class StackMis {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the GS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis#GET)
     */
    ListAvailableServices() {
        let url = `/stack/mis`;
        return this.client.request('GET', url);
    }
    /**
     * Stack MIS [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/stack/mis/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/stack/mis/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/stack/mis/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
}
exports.StackMis = StackMis;
//# sourceMappingURL=stack.mis.js.map