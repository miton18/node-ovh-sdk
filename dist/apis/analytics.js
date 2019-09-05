"use strict";
// GENERATED SDK for analytics API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Node type
 */
var AnalyticsnodeType;
(function (AnalyticsnodeType) {
    AnalyticsnodeType["MASTER"] = "MASTER";
    AnalyticsnodeType["SLAVE"] = "SLAVE";
    AnalyticsnodeType["EDGE"] = "EDGE";
    AnalyticsnodeType["UTILITY"] = "UTILITY";
})(AnalyticsnodeType = exports.AnalyticsnodeType || (exports.AnalyticsnodeType = {}));
/*
 * Status code
 */
var AnalyticsStatus;
(function (AnalyticsStatus) {
    AnalyticsStatus["PENDING"] = "PENDING";
    AnalyticsStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AnalyticsStatus["SUCCEEDED"] = "SUCCEEDED";
    AnalyticsStatus["FAILED"] = "FAILED";
    AnalyticsStatus["DONE"] = "DONE";
    AnalyticsStatus["ERROR"] = "ERROR";
    AnalyticsStatus["UNKNOWN"] = "UNKNOWN";
    AnalyticsStatus["OK"] = "OK";
    AnalyticsStatus["TO_DEPLOY"] = "TO_DEPLOY";
    AnalyticsStatus["DEPLOYING"] = "DEPLOYING";
    AnalyticsStatus["DEPLOYED"] = "DEPLOYED";
    AnalyticsStatus["TO_DESTROY"] = "TO_DESTROY";
    AnalyticsStatus["DESTROYED"] = "DESTROYED";
    AnalyticsStatus["INITIALIZED"] = "INITIALIZED";
})(AnalyticsStatus = exports.AnalyticsStatus || (exports.AnalyticsStatus = {}));
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
var ServiceState;
(function (ServiceState) {
    ServiceState["EXPIRED"] = "expired";
    ServiceState["INCREATION"] = "inCreation";
    ServiceState["OK"] = "ok";
    ServiceState["PENDINGDEBT"] = "pendingDebt";
    ServiceState["UNPAID"] = "unPaid";
})(ServiceState = exports.ServiceState || (exports.ServiceState = {}));
/*
 * All future uses you can provide for a service termination
 */
var ServiceTerminationFutureUse;
(function (ServiceTerminationFutureUse) {
    ServiceTerminationFutureUse["NOT_REPLACING_SERVICE"] = "NOT_REPLACING_SERVICE";
    ServiceTerminationFutureUse["OTHER"] = "OTHER";
    ServiceTerminationFutureUse["SUBSCRIBE_AN_OTHER_SERVICE"] = "SUBSCRIBE_AN_OTHER_SERVICE";
    ServiceTerminationFutureUse["SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR";
    ServiceTerminationFutureUse["SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
})(ServiceTerminationFutureUse = exports.ServiceTerminationFutureUse || (exports.ServiceTerminationFutureUse = {}));
/*
 * All reasons you can provide for a service termination
 */
var ServiceTerminationReason;
(function (ServiceTerminationReason) {
    ServiceTerminationReason["FEATURES_DONT_SUIT_ME"] = "FEATURES_DONT_SUIT_ME";
    ServiceTerminationReason["LACK_OF_PERFORMANCES"] = "LACK_OF_PERFORMANCES";
    ServiceTerminationReason["MIGRATED_TO_ANOTHER_OVH_PRODUCT"] = "MIGRATED_TO_ANOTHER_OVH_PRODUCT";
    ServiceTerminationReason["MIGRATED_TO_COMPETITOR"] = "MIGRATED_TO_COMPETITOR";
    ServiceTerminationReason["NOT_ENOUGH_RECOGNITION"] = "NOT_ENOUGH_RECOGNITION";
    ServiceTerminationReason["NOT_NEEDED_ANYMORE"] = "NOT_NEEDED_ANYMORE";
    ServiceTerminationReason["NOT_RELIABLE"] = "NOT_RELIABLE";
    ServiceTerminationReason["NO_ANSWER"] = "NO_ANSWER";
    ServiceTerminationReason["OTHER"] = "OTHER";
    ServiceTerminationReason["PRODUCT_DIMENSION_DONT_SUIT_ME"] = "PRODUCT_DIMENSION_DONT_SUIT_ME";
    ServiceTerminationReason["PRODUCT_TOOLS_DONT_SUIT_ME"] = "PRODUCT_TOOLS_DONT_SUIT_ME";
    ServiceTerminationReason["TOO_EXPENSIVE"] = "TOO_EXPENSIVE";
    ServiceTerminationReason["TOO_HARD_TO_USE"] = "TOO_HARD_TO_USE";
    ServiceTerminationReason["UNSATIFIED_BY_CUSTOMER_SUPPORT"] = "UNSATIFIED_BY_CUSTOMER_SUPPORT";
})(ServiceTerminationReason = exports.ServiceTerminationReason || (exports.ServiceTerminationReason = {}));
class Analytics {
    constructor(client) {
        this.client = client;
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/capabilities/platforms#GET)
     */
    PlatformCapabilities() {
        let url = `/analytics/capabilities/platforms`;
        return this.client.request('GET', url);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms#GET)
     */
    ListAvailableServices() {
        let url = `/analytics/platforms`;
        return this.client.request('GET', url);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D#GET)
     */
    GetDetailsAboutAService(serviceName) {
        let url = `/analytics/platforms/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/activity#GET)
     */
    GetActivityLogs(serviceName) {
        let url = `/analytics/platforms/${serviceName}/activity`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/analytics/platforms/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/analytics/platforms/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/deploy#POST)
     */
    DeployAnAnalyticsDataPlatform(serviceName, payload) {
        let url = `/analytics/platforms/${serviceName}/deploy`;
        return this.client.request('POST', url, payload);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/destroy#POST)
     */
    DestroyAnAnalyticsDataPlatform(serviceName, payload) {
        let url = `/analytics/platforms/${serviceName}/destroy`;
        return this.client.request('POST', url, payload);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/nodes#GET)
     */
    ListAvailableNodes(serviceName) {
        let url = `/analytics/platforms/${serviceName}/nodes`;
        return this.client.request('GET', url);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/nodes/%7BnodeId%7D#GET)
     */
    GetDetailsAboutNodes(nodeId, serviceName) {
        let url = `/analytics/platforms/${serviceName}/nodes/${nodeId}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/analytics/platforms/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/analytics/platforms/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/status#GET)
     */
    GetClusterDeploymentStatus(serviceName) {
        let url = `/analytics/platforms/${serviceName}/status`;
        return this.client.request('GET', url);
    }
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/analytics/platforms/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/analytics/platforms/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
}
exports.Analytics = Analytics;
//# sourceMappingURL=analytics.js.map