"use strict";
// GENERATED SDK for cdn/dedicated API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * All type a cache can be in
 */
var CdnanycastCacheRuleCacheType;
(function (CdnanycastCacheRuleCacheType) {
    CdnanycastCacheRuleCacheType["FORCECACHE"] = "forceCache";
    CdnanycastCacheRuleCacheType["NOCACHE"] = "noCache";
})(CdnanycastCacheRuleCacheType = exports.CdnanycastCacheRuleCacheType || (exports.CdnanycastCacheRuleCacheType = {}));
/*
 * All states an anycast pool can be in
 */
var CdnanycastCacheRuleFileType;
(function (CdnanycastCacheRuleFileType) {
    CdnanycastCacheRuleFileType["EXTENSION"] = "extension";
    CdnanycastCacheRuleFileType["FILE"] = "file";
    CdnanycastCacheRuleFileType["FOLDER"] = "folder";
})(CdnanycastCacheRuleFileType = exports.CdnanycastCacheRuleFileType || (exports.CdnanycastCacheRuleFileType = {}));
/*
 * All states a status can be in
 */
var CdnanycastCacheRuleStatus;
(function (CdnanycastCacheRuleStatus) {
    CdnanycastCacheRuleStatus["CREATING"] = "creating";
    CdnanycastCacheRuleStatus["DELETING"] = "deleting";
    CdnanycastCacheRuleStatus["ERROR"] = "error";
    CdnanycastCacheRuleStatus["OFF"] = "off";
    CdnanycastCacheRuleStatus["ON"] = "on";
    CdnanycastCacheRuleStatus["UPDATING"] = "updating";
})(CdnanycastCacheRuleStatus = exports.CdnanycastCacheRuleStatus || (exports.CdnanycastCacheRuleStatus = {}));
/*
 * All states a status can be in
 */
var CdnanycastDomainStatus;
(function (CdnanycastDomainStatus) {
    CdnanycastDomainStatus["ERROR"] = "error";
    CdnanycastDomainStatus["OFF"] = "off";
    CdnanycastDomainStatus["ON"] = "on";
    CdnanycastDomainStatus["REMOVING"] = "removing";
})(CdnanycastDomainStatus = exports.CdnanycastDomainStatus || (exports.CdnanycastDomainStatus = {}));
/*
 * All type of Domain
 */
var CdnanycastDomainType;
(function (CdnanycastDomainType) {
    CdnanycastDomainType["PLAIN"] = "plain";
    CdnanycastDomainType["SSL"] = "ssl";
})(CdnanycastDomainType = exports.CdnanycastDomainType || (exports.CdnanycastDomainType = {}));
/*
 * All Pop status
 */
var CdnanycastPopStatus;
(function (CdnanycastPopStatus) {
    CdnanycastPopStatus["DOWN"] = "down";
    CdnanycastPopStatus["OK"] = "ok";
    CdnanycastPopStatus["REROUTED"] = "rerouted";
    CdnanycastPopStatus["UNKNOWN"] = "unknown";
})(CdnanycastPopStatus = exports.CdnanycastPopStatus || (exports.CdnanycastPopStatus = {}));
/*
 * All states a CDN SSL can be in
 */
var CdnanycastSslState;
(function (CdnanycastSslState) {
    CdnanycastSslState["CHECKING"] = "checking";
    CdnanycastSslState["CREATING"] = "creating";
    CdnanycastSslState["ERROR"] = "error";
    CdnanycastSslState["OFF"] = "off";
    CdnanycastSslState["ON"] = "on";
    CdnanycastSslState["REMOVING"] = "removing";
    CdnanycastSslState["UPDATING"] = "updating";
    CdnanycastSslState["UPLOADING"] = "uploading";
})(CdnanycastSslState = exports.CdnanycastSslState || (exports.CdnanycastSslState = {}));
/*
 * Period of the statistics
 */
var CdnanycastStatsPeriod;
(function (CdnanycastStatsPeriod) {
    CdnanycastStatsPeriod["DAY"] = "day";
    CdnanycastStatsPeriod["MONTH"] = "month";
    CdnanycastStatsPeriod["WEEK"] = "week";
})(CdnanycastStatsPeriod = exports.CdnanycastStatsPeriod || (exports.CdnanycastStatsPeriod = {}));
/*
 * Type of statistics related to cache
 */
var CdnanycastStatsType;
(function (CdnanycastStatsType) {
    CdnanycastStatsType["BACKEND"] = "backend";
    CdnanycastStatsType["CDN"] = "cdn";
    CdnanycastStatsType["THREAT"] = "threat";
})(CdnanycastStatsType = exports.CdnanycastStatsType || (exports.CdnanycastStatsType = {}));
/*
 * Value bandwidth or request
 */
var CdnanycastStatsValue;
(function (CdnanycastStatsValue) {
    CdnanycastStatsValue["BANDWIDTH"] = "bandwidth";
    CdnanycastStatsValue["REQUEST"] = "request";
})(CdnanycastStatsValue = exports.CdnanycastStatsValue || (exports.CdnanycastStatsValue = {}));
/*
 * All function CDN task can be
 */
var CdnanycastTaskFunction;
(function (CdnanycastTaskFunction) {
    CdnanycastTaskFunction["FLUSH"] = "flush";
    CdnanycastTaskFunction["FLUSHALL"] = "flushAll";
    CdnanycastTaskFunction["GENERATESSL"] = "generateSsl";
    CdnanycastTaskFunction["INSTALLSSL"] = "installSsl";
    CdnanycastTaskFunction["REINSTALLSSL"] = "reinstallSsl";
    CdnanycastTaskFunction["REMOVEDOMAIN"] = "removeDomain";
    CdnanycastTaskFunction["UNINSTALLSSL"] = "uninstallSsl";
    CdnanycastTaskFunction["UPDATECACHERULE"] = "updateCacheRule";
})(CdnanycastTaskFunction = exports.CdnanycastTaskFunction || (exports.CdnanycastTaskFunction = {}));
/*
 * All states a CDN task can be in
 */
var CdnanycastTaskState;
(function (CdnanycastTaskState) {
    CdnanycastTaskState["CANCELLED"] = "cancelled";
    CdnanycastTaskState["DOING"] = "doing";
    CdnanycastTaskState["DONE"] = "done";
    CdnanycastTaskState["ERROR"] = "error";
    CdnanycastTaskState["TODO"] = "todo";
})(CdnanycastTaskState = exports.CdnanycastTaskState || (exports.CdnanycastTaskState = {}));
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
class CdnDedicated {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the CDNANYCAST service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated#GET)
     */
    ListAvailableServices() {
        let url = `/cdn/dedicated`;
        return this.client.request('GET', url);
    }
    /**
     * Anycast IP of a CDN customer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/cdn/dedicated/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/cdn/dedicated/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * List the cdnanycast.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains#GET)
     */
    DomainsAssociatedToThisAnycast(serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains`;
        return this.client.request('GET', url);
    }
    /**
     * List the cdnanycast.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains#POST)
     */
    AddADomainOnCDN(domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains`;
        return this.client.request('POST', url, { domain });
    }
    /**
     * Domain on CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string): Promise<CdnanycastDomain> {
      let url = `/cdn/dedicated/${serviceName}/domains/${domain}`
  
      return this.client.request<CdnanycastDomain>('GET', url)
    }
    */
    /**
     * Domain on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#PUT)
     */
    AlterThisObjectProperties(domain, serviceName, payload) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Domain on CDN [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#DELETE)
     */
    RemoveADomainFromTheCDN(domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cdnanycast.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends#GET)
     */
    BackendAssociatedToTheDomain(domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends`;
        return this.client.request('GET', url);
    }
    /**
     * List the cdnanycast.Backend objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends#POST)
     */
    AddABackendIP(domain, ip, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends`;
        return this.client.request('POST', url, { ip });
    }
    /**
     * Backend for a domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends/%7Bip%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, ip: string, serviceName: string): Promise<CdnanycastBackend> {
      let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends/${ip}`
  
      return this.client.request<CdnanycastBackend>('GET', url)
    }
    */
    /**
     * Backend for a domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends/%7Bip%7D#DELETE)
     */
    RemoveABackendIP(domain, ip, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends/${ip}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cdnanycast.CacheRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules#GET)
     */
    CacheRulesAssociatedToTheDomain(domain, serviceName, fileMatch) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules?`;
        const queryParams = new query_params_1.default();
        if (fileMatch) {
            queryParams.set('fileMatch', fileMatch);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the cdnanycast.CacheRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules#POST)
     */
    AddACacheRuleToADomain(cacheType, domain, fileMatch, fileType, serviceName, ttl) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules`;
        return this.client.request('POST', url, { cacheType, fileMatch, fileType, ttl });
    }
    /**
     * CacheRules for a domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#GET)
     */
    /*
    GetThisObjectProperties(cacheRuleId: number, domain: string, serviceName: string): Promise<CdnanycastCacheRule> {
      let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`
  
      return this.client.request<CdnanycastCacheRule>('GET', url)
    }
    */
    /**
     * CacheRules for a domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(cacheRuleId: number, domain: string, serviceName: string, payload: CdnanycastCacheRule): Promise<void> {
      let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * CacheRules for a domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#DELETE)
     */
    RemoveCacheRule(cacheRuleId, domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * flush operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/flush#POST)
     */
    FlushTheCache(cacheRuleId, domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/flush`;
        return this.client.request('POST', url);
    }
    /**
     * List the cdnanycast.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/tasks#GET)
     */
    TaskAssociatedToTheCacheRule(cacheRuleId, domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/tasks`;
        return this.client.request('GET', url);
    }
    /**
     * Task on a CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(cacheRuleId: number, domain: string, serviceName: string, taskId: number): Promise<CdnanycastTask> {
      let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/tasks/${taskId}`
  
      return this.client.request<CdnanycastTask>('GET', url)
    }
    */
    /**
     * flush operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/flush#POST)
     */
    FlushAllCache(domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/flush`;
        return this.client.request('POST', url);
    }
    /**
     * logs operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/logs#POST)
     */
    GenerateURLToRealTimeLogs(domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/logs`;
        return this.client.request('POST', url);
    }
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/statistics#GET)
     */
    ReturnStatsAboutADomain(domain, period, serviceName, type, value) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/statistics?`;
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
     * List the cdnanycast.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/tasks#GET)
     */
    TaskAssociatedToTheDomain(domain, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/domains/${domain}/tasks`;
        return this.client.request('GET', url);
    }
    /**
     * Task on a CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string, taskId: number): Promise<CdnanycastTask> {
      let url = `/cdn/dedicated/${serviceName}/domains/${domain}/tasks/${taskId}`
  
      return this.client.request<CdnanycastTask>('GET', url)
    }
    */
    /**
     * logs operations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/logs#POST)
     */
    /*
    GenerateURLToRealTimeLogs(serviceName: string): Promise<CdnanycastLogsURL> {
      let url = `/cdn/dedicated/${serviceName}/logs`
  
      return this.client.request<CdnanycastLogsURL>('POST', url)
    }
    */
    /**
     * quota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/quota#GET)
     */
    ReturnQuotaHistory(period, serviceName) {
        let url = `/cdn/dedicated/${serviceName}/quota?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/cdn/dedicated/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/cdn/dedicated/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * CDN Ssl [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<CdnanycastSsl> {
      let url = `/cdn/dedicated/${serviceName}/ssl`
  
      return this.client.request<CdnanycastSsl>('GET', url)
    }
    */
    /**
     * CDN Ssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#POST)
     */
    AddASSLOnCDNOrGenerateALetsEncryptCertificate(name, serviceName, certificate, chain, key) {
        let url = `/cdn/dedicated/${serviceName}/ssl`;
        return this.client.request('POST', url, { name, certificate, chain, key });
    }
    /**
     * CDN Ssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#DELETE)
     */
    RemoveSSLOfTheCDN(serviceName) {
        let url = `/cdn/dedicated/${serviceName}/ssl`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cdnanycast.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/tasks#GET)
     */
    TaskAssociatedToTheSsl(serviceName, _function, status) {
        let url = `/cdn/dedicated/${serviceName}/ssl/tasks?`;
        const queryParams = new query_params_1.default();
        if (_function) {
            queryParams.set('function', _function.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task on a CDN [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<CdnanycastTask> {
      let url = `/cdn/dedicated/${serviceName}/ssl/tasks/${taskId}`
  
      return this.client.request<CdnanycastTask>('GET', url)
    }
    */
    /**
     * update operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/update#POST)
     */
    UpdateAnExistingSSLWithACustomCertificate(certificate, key, serviceName, chain) {
        let url = `/cdn/dedicated/${serviceName}/ssl/update`;
        return this.client.request('POST', url, { certificate, key, chain });
    }
    /**
     * List the cdnanycast.Pop objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/pops#GET)
     */
    ListOfCDNPops() {
        let url = `/cdn/dedicated/pops`;
        return this.client.request('GET', url);
    }
}
exports.CdnDedicated = CdnDedicated;
//# sourceMappingURL=cdn.dedicated.js.map