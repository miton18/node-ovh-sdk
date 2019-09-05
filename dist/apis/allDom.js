"use strict";
// GENERATED SDK for allDom API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Type
 */
var AllDomType;
(function (AllDomType) {
    AllDomType["FRENCH"] = "french";
    AllDomType["FRENCH_INTERNATIONAL"] = "french+international";
    AllDomType["INTERNATIONAL"] = "international";
})(AllDomType = exports.AllDomType || (exports.AllDomType = {}));
/*
 * Offer
 */
var DomainOffer;
(function (DomainOffer) {
    DomainOffer["DIAMOND"] = "diamond";
    DomainOffer["GOLD"] = "gold";
    DomainOffer["PLATINUM"] = "platinum";
})(DomainOffer = exports.DomainOffer || (exports.DomainOffer = {}));
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
class AllDom {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the ALLDOM service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom#GET)
     */
    ListAvailableServices() {
        let url = `/allDom`;
        return this.client.request('GET', url);
    }
    /**
     * AllDom administration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/allDom/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * List the allDom.AllDomDomain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/domain#GET)
     */
    DomainsAttachedToThisAllDom(serviceName, domain) {
        let url = `/allDom/${serviceName}/domain?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Domain name of a allDom [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/domain/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string): Promise<AllDomAllDomDomain> {
      let url = `/allDom/${serviceName}/domain/${domain}`
  
      return this.client.request<AllDomAllDomDomain>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/allDom/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/allDom/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/allDom/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
}
exports.AllDom = AllDom;
//# sourceMappingURL=allDom.js.map