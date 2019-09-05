"use strict";
// GENERATED SDK for veeam/veeamEnterprise API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
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
/*
 * All possible states for a Veeam Enterprise Task
 */
var VeeamEnterpriseTaskState;
(function (VeeamEnterpriseTaskState) {
    VeeamEnterpriseTaskState["CANCELED"] = "canceled";
    VeeamEnterpriseTaskState["DOING"] = "doing";
    VeeamEnterpriseTaskState["DONE"] = "done";
    VeeamEnterpriseTaskState["ERROR"] = "error";
    VeeamEnterpriseTaskState["TOCREATE"] = "toCreate";
    VeeamEnterpriseTaskState["TODO"] = "todo";
    VeeamEnterpriseTaskState["UNFIXED"] = "unfixed";
    VeeamEnterpriseTaskState["WAITING"] = "waiting";
    VeeamEnterpriseTaskState["WAITINGFORCHILDS"] = "waitingForChilds";
})(VeeamEnterpriseTaskState = exports.VeeamEnterpriseTaskState || (exports.VeeamEnterpriseTaskState = {}));
class VeeamVeeamEnterprise {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the VEEAMENTERPRISE service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise#GET)
     */
    ListAvailableServices() {
        let url = `/veeam/veeamEnterprise`;
        return this.client.request('GET', url);
    }
    /**
     * Veeeam Enterprise offer [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/veeam/veeamEnterprise/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/veeam/veeamEnterprise/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * register operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/register#POST)
     */
    RegisterVeeamBackupServerToVeeamEnterprise(ip, password, port, serviceName, username) {
        let url = `/veeam/veeamEnterprise/${serviceName}/register`;
        return this.client.request('POST', url, { ip, password, port, username });
    }
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/veeam/veeamEnterprise/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/veeam/veeamEnterprise/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the veeam.veeamEnterprise.Task objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithVeeamEnterprise(serviceName, name, state) {
        let url = `/veeam/veeamEnterprise/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation with the Enterprise Account [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<VeeamveeamEnterpriseTask> {
      let url = `/veeam/veeamEnterprise/${serviceName}/task/${taskId}`
  
      return this.client.request<VeeamveeamEnterpriseTask>('GET', url)
    }
    */
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/veeam/veeamEnterprise/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * update operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeam/veeamEnterprise/%7BserviceName%7D/update#POST)
     */
    UpdateVeeamEnterpriseConfiguration(ip, password, port, serviceName, username) {
        let url = `/veeam/veeamEnterprise/${serviceName}/update`;
        return this.client.request('POST', url, { ip, password, port, username });
    }
}
exports.VeeamVeeamEnterprise = VeeamVeeamEnterprise;
//# sourceMappingURL=veeam.veeamEnterprise.js.map