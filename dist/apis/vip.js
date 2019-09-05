"use strict";
// GENERATED SDK for vip API
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
 * Available universe for VIP service
 */
var VipUniverse;
(function (VipUniverse) {
    VipUniverse["CLOUD"] = "cloud";
    VipUniverse["DEDICATED"] = "dedicated";
    VipUniverse["TELECOM"] = "telecom";
    VipUniverse["WEB"] = "web";
})(VipUniverse = exports.VipUniverse || (exports.VipUniverse = {}));
class Vip {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the SUPPORT_PLUS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip#GET)
     */
    ListAvailableServices() {
        let url = `/vip`;
        return this.client.request('GET', url);
    }
    /**
     * Vip Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/vip/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/vip/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vip/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/vip/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
}
exports.Vip = Vip;
//# sourceMappingURL=vip.js.map