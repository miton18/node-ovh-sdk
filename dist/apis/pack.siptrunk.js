"use strict";
// GENERATED SDK for pack/siptrunk API
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
class PackSiptrunk {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the PACK service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk#GET)
     */
    ListAvailableServices() {
        let url = `/pack/siptrunk`;
        return this.client.request('GET', url);
    }
    /**
     * Pack of SIP trunk services [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D#GET)
     */
    GetThisObjectProperties(packName) {
        let url = `/pack/siptrunk/${packName}`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(packName, contactAdmin, contactBilling, contactTech) {
        let url = `/pack/siptrunk/${packName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(packName: string): Promise<ServicesService> {
      let url = `/pack/siptrunk/${packName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(packName, payload) {
        let url = `/pack/siptrunk/${packName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
}
exports.PackSiptrunk = PackSiptrunk;
//# sourceMappingURL=pack.siptrunk.js.map