"use strict";
// GENERATED SDK for dbaas/queue API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * AppStatus
 */
var DbaasqueueAppStatus;
(function (DbaasqueueAppStatus) {
    DbaasqueueAppStatus["NOT_CONFIGURED"] = "not_configured";
    DbaasqueueAppStatus["ACTIVE"] = "active";
    DbaasqueueAppStatus["DELETED"] = "deleted";
})(DbaasqueueAppStatus = exports.DbaasqueueAppStatus || (exports.DbaasqueueAppStatus = {}));
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
class DbaasQueue {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the PAAS_QUEUE service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue#GET)
     */
    ListAvailableServices() {
        let url = `/dbaas/queue`;
        return this.client.request('GET', url);
    }
    /**
     * App [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D#GET)
     */
    GetAnApplication(serviceName) {
        let url = `/dbaas/queue/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * App [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D#PUT)
     */
    UpdateAnApplication(name, serviceName) {
        let url = `/dbaas/queue/${serviceName}`;
        return this.client.request('PUT', url, { name });
    }
    /**
     * Key [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/key#GET)
     */
    ListAllKeysOfTheApplication(serviceName) {
        let url = `/dbaas/queue/${serviceName}/key`;
        return this.client.request('GET', url);
    }
    /**
     * Key [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/key/%7BkeyId%7D#GET)
     */
    GetAKey(keyId, serviceName) {
        let url = `/dbaas/queue/${serviceName}/key/${keyId}`;
        return this.client.request('GET', url);
    }
    /**
     * Metrics [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/metrics/account#GET)
     */
    GetMetricsAccount(serviceName) {
        let url = `/dbaas/queue/${serviceName}/metrics/account`;
        return this.client.request('GET', url);
    }
    /**
     * Region [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/region#GET)
     */
    ListAllRegionsID(serviceName) {
        let url = `/dbaas/queue/${serviceName}/region`;
        return this.client.request('GET', url);
    }
    /**
     * Region [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/region/%7BregionId%7D#GET)
     */
    GetOneRegion(regionId, serviceName) {
        let url = `/dbaas/queue/${serviceName}/region/${regionId}`;
        return this.client.request('GET', url);
    }
    /**
     * Role [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/role#GET)
     */
    ListAllRolesOfTheApplication(serviceName) {
        let url = `/dbaas/queue/${serviceName}/role`;
        return this.client.request('GET', url);
    }
    /**
     * Role [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/role/%7BroleName%7D#GET)
     */
    GetARole(roleName, serviceName) {
        let url = `/dbaas/queue/${serviceName}/role/${roleName}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/dbaas/queue/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/dbaas/queue/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Topic [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/topic#GET)
     */
    ListAllTopicsOfTheApplication(serviceName) {
        let url = `/dbaas/queue/${serviceName}/topic`;
        return this.client.request('GET', url);
    }
    /**
     * Topic [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/topic/%7BtopicId%7D#GET)
     */
    GetATopic(serviceName, topicId) {
        let url = `/dbaas/queue/${serviceName}/topic/${topicId}`;
        return this.client.request('GET', url);
    }
    /**
     * Topic [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/topic/%7BtopicId%7D#DELETE)
     */
    DeleteATopic(serviceName, topicId) {
        let url = `/dbaas/queue/${serviceName}/topic/${topicId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * User [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user#GET)
     */
    ListAllUsersOfTheApplication(serviceName) {
        let url = `/dbaas/queue/${serviceName}/user`;
        return this.client.request('GET', url);
    }
    /**
     * User [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user/%7BuserId%7D#GET)
     */
    GetAUser(serviceName, userId) {
        let url = `/dbaas/queue/${serviceName}/user/${userId}`;
        return this.client.request('GET', url);
    }
    /**
     * User [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user/%7BuserId%7D/changePassword#POST)
     */
    GenerateANewUserPassword(serviceName, userId) {
        let url = `/dbaas/queue/${serviceName}/user/${userId}/changePassword`;
        return this.client.request('POST', url);
    }
    /**
     * User roles [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dbaas/queue/%7BserviceName%7D/user/%7BuserId%7D/roles#GET)
     */
    GetUserRoles(serviceName, userId) {
        let url = `/dbaas/queue/${serviceName}/user/${userId}/roles`;
        return this.client.request('GET', url);
    }
}
exports.DbaasQueue = DbaasQueue;
//# sourceMappingURL=dbaas.queue.js.map