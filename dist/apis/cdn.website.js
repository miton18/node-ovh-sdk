"use strict";
// GENERATED SDK for cdn/website API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * All states a status can be in
 */
var CdnwebsiteBackendStatus;
(function (CdnwebsiteBackendStatus) {
    CdnwebsiteBackendStatus["CREATING"] = "creating";
    CdnwebsiteBackendStatus["ERROR"] = "error";
    CdnwebsiteBackendStatus["ON"] = "on";
    CdnwebsiteBackendStatus["REMOVING"] = "removing";
})(CdnwebsiteBackendStatus = exports.CdnwebsiteBackendStatus || (exports.CdnwebsiteBackendStatus = {}));
/*
 * All states a status can be in
 */
var CdnwebsiteDomainStatus;
(function (CdnwebsiteDomainStatus) {
    CdnwebsiteDomainStatus["ERROR"] = "error";
    CdnwebsiteDomainStatus["ON"] = "on";
    CdnwebsiteDomainStatus["REMOVING"] = "removing";
})(CdnwebsiteDomainStatus = exports.CdnwebsiteDomainStatus || (exports.CdnwebsiteDomainStatus = {}));
/*
 * All states a status can be in
 */
var CdnwebsiteDomainZoneStatus;
(function (CdnwebsiteDomainZoneStatus) {
    CdnwebsiteDomainZoneStatus["ERROR"] = "error";
    CdnwebsiteDomainZoneStatus["ON"] = "on";
    CdnwebsiteDomainZoneStatus["REMOVING"] = "removing";
})(CdnwebsiteDomainZoneStatus = exports.CdnwebsiteDomainZoneStatus || (exports.CdnwebsiteDomainZoneStatus = {}));
/*
 * Period of the statistics
 */
var CdnwebsiteStatsPeriod;
(function (CdnwebsiteStatsPeriod) {
    CdnwebsiteStatsPeriod["DAY"] = "day";
    CdnwebsiteStatsPeriod["MONTH"] = "month";
    CdnwebsiteStatsPeriod["WEEK"] = "week";
})(CdnwebsiteStatsPeriod = exports.CdnwebsiteStatsPeriod || (exports.CdnwebsiteStatsPeriod = {}));
/*
 * Type of statistics related to cache
 */
var CdnwebsiteStatsType;
(function (CdnwebsiteStatsType) {
    CdnwebsiteStatsType["BACKEND"] = "backend";
    CdnwebsiteStatsType["CDN"] = "cdn";
})(CdnwebsiteStatsType = exports.CdnwebsiteStatsType || (exports.CdnwebsiteStatsType = {}));
/*
 * Value bandwidth or request
 */
var CdnwebsiteStatsValue;
(function (CdnwebsiteStatsValue) {
    CdnwebsiteStatsValue["BANDWIDTH"] = "bandwidth";
    CdnwebsiteStatsValue["REQUEST"] = "request";
})(CdnwebsiteStatsValue = exports.CdnwebsiteStatsValue || (exports.CdnwebsiteStatsValue = {}));
/*
 * All function CDN task can be
 */
var CdnwebsiteTaskFunction;
(function (CdnwebsiteTaskFunction) {
    CdnwebsiteTaskFunction["FLUSHALL"] = "flushAll";
    CdnwebsiteTaskFunction["INSTALLBACKEND"] = "installBackend";
    CdnwebsiteTaskFunction["REMOVEBACKEND"] = "removeBackend";
    CdnwebsiteTaskFunction["REMOVEDOMAIN"] = "removeDomain";
    CdnwebsiteTaskFunction["REMOVEZONE"] = "removeZone";
})(CdnwebsiteTaskFunction = exports.CdnwebsiteTaskFunction || (exports.CdnwebsiteTaskFunction = {}));
/*
 * All states a CDN task can be in
 */
var CdnwebsiteTaskState;
(function (CdnwebsiteTaskState) {
    CdnwebsiteTaskState["CANCELLED"] = "cancelled";
    CdnwebsiteTaskState["DOING"] = "doing";
    CdnwebsiteTaskState["DONE"] = "done";
    CdnwebsiteTaskState["ERROR"] = "error";
    CdnwebsiteTaskState["TODO"] = "todo";
})(CdnwebsiteTaskState = exports.CdnwebsiteTaskState || (exports.CdnwebsiteTaskState = {}));
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
class CdnWebsite {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the CDNWEBSITE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website#GET)
     */
    ListAvailableServices() {
        let url = `/cdn/website`;
        return this.client.request('GET', url);
    }
    /**
     * Website CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/cdn/website/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/cdn/website/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/cdn/website/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Zone on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<CdnwebsiteZone> {
      let url = `/cdn/website/${serviceName}/zone`
  
      return this.client.request<CdnwebsiteZone>('GET', url)
    }
    */
    /**
     * Zone on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#POST)
     */
    ConfigureAZoneOnCDN(serviceName, zone) {
        let url = `/cdn/website/${serviceName}/zone`;
        return this.client.request('POST', url, { zone });
    }
    /**
     * Zone on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone#DELETE)
     */
    RemoveAZoneFromTheCDN(serviceName) {
        let url = `/cdn/website/${serviceName}/zone`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cdn.website.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends#GET)
     */
    BackendAssociatedToThisZone(serviceName) {
        let url = `/cdn/website/${serviceName}/zone/backends`;
        return this.client.request('GET', url);
    }
    /**
     * List the cdn.website.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends#POST)
     */
    ConfigureABackendOnTheZone(ipv4, serviceName) {
        let url = `/cdn/website/${serviceName}/zone/backends`;
        return this.client.request('POST', url, { ipv4 });
    }
    /**
     * Backend on zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D#GET)
     */
    /*
    GetThisObjectProperties(ipv4: string, serviceName: string): Promise<CdnwebsiteBackend> {
      let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}`
  
      return this.client.request<CdnwebsiteBackend>('GET', url)
    }
    */
    /**
     * Backend on zone [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D#DELETE)
     */
    RemoveABackendFromTheZone(ipv4, serviceName) {
        let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cdn.website.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D/tasks#GET)
     */
    TaskAssociatedToThisBackend(ipv4, serviceName) {
        let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}/tasks`;
        return this.client.request('GET', url);
    }
    /**
     * Task on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/backends/%7Bipv4%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(ipv4: string, serviceName: string, taskId: number): Promise<CdnwebsiteTask> {
      let url = `/cdn/website/${serviceName}/zone/backends/${ipv4}/tasks/${taskId}`
  
      return this.client.request<CdnwebsiteTask>('GET', url)
    }
    */
    /**
     * List the cdn.website.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains#GET)
     */
    DomainAssociatedToThisZone(serviceName) {
        let url = `/cdn/website/${serviceName}/zone/domains`;
        return this.client.request('GET', url);
    }
    /**
     * List the cdn.website.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains#POST)
     */
    ConfigureADomainOnCDN(domain, serviceName) {
        let url = `/cdn/website/${serviceName}/zone/domains`;
        return this.client.request('POST', url, { domain });
    }
    /**
     * Domain on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string): Promise<CdnwebsiteDomain> {
      let url = `/cdn/website/${serviceName}/zone/domains/${domain}`
  
      return this.client.request<CdnwebsiteDomain>('GET', url)
    }
    */
    /**
     * Domain on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D#DELETE)
     */
    RemoveADomainFromTheCDN(domain, serviceName) {
        let url = `/cdn/website/${serviceName}/zone/domains/${domain}`;
        return this.client.request('DELETE', url);
    }
    /**
     * flush operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/flush#POST)
     */
    FlushAllCache(domain, serviceName) {
        let url = `/cdn/website/${serviceName}/zone/domains/${domain}/flush`;
        return this.client.request('POST', url);
    }
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/statistics#GET)
     */
    GetStatisticsAboutRequestOnCDNBandwidthValueInBytes(domain, period, serviceName, type, value) {
        let url = `/cdn/website/${serviceName}/zone/domains/${domain}/statistics?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        if (value) {
            queryParams.set('value', value.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the cdn.website.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/tasks#GET)
     */
    TaskAssociatedToThisDomain(domain, serviceName) {
        let url = `/cdn/website/${serviceName}/zone/domains/${domain}/tasks`;
        return this.client.request('GET', url);
    }
    /**
     * Task on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/domains/%7Bdomain%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string, taskId: number): Promise<CdnwebsiteTask> {
      let url = `/cdn/website/${serviceName}/zone/domains/${domain}/tasks/${taskId}`
  
      return this.client.request<CdnwebsiteTask>('GET', url)
    }
    */
    /**
     * List the cdn.website.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/website/%7BserviceName%7D/zone/tasks#GET)
     */
    TaskAssociatedToThisZone(serviceName) {
        let url = `/cdn/website/${serviceName}/zone/tasks`;
        return this.client.request('GET', url);
    }
}
exports.CdnWebsite = CdnWebsite;
//# sourceMappingURL=cdn.website.js.map