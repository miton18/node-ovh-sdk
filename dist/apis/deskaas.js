"use strict";
// GENERATED SDK for deskaas API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * All states a Desktop As A Service can be in
 */
var DeskaasState;
(function (DeskaasState) {
    DeskaasState["AVAILABLE"] = "available";
    DeskaasState["DELIVERED"] = "delivered";
    DeskaasState["DISABLED"] = "disabled";
    DeskaasState["ERROR"] = "error";
    DeskaasState["RESERVED"] = "reserved";
})(DeskaasState = exports.DeskaasState || (exports.DeskaasState = {}));
/*
 * All states a Desktop As A Service Task can be in
 */
var DeskaasTaskState;
(function (DeskaasTaskState) {
    DeskaasTaskState["CANCELED"] = "canceled";
    DeskaasTaskState["DOING"] = "doing";
    DeskaasTaskState["DONE"] = "done";
    DeskaasTaskState["ERROR"] = "error";
    DeskaasTaskState["FIXING"] = "fixing";
    DeskaasTaskState["TOCANCEL"] = "toCancel";
    DeskaasTaskState["TOCREATE"] = "toCreate";
    DeskaasTaskState["TODO"] = "todo";
    DeskaasTaskState["UNKNOWN"] = "unknown";
    DeskaasTaskState["WAITINGFORCHILDS"] = "waitingForChilds";
    DeskaasTaskState["WAITINGTODO"] = "waitingTodo";
})(DeskaasTaskState = exports.DeskaasTaskState || (exports.DeskaasTaskState = {}));
/*
 * All activation states a Dedicated Cloud User can have
 */
var DeskaasuserActivationState;
(function (DeskaasuserActivationState) {
    DeskaasuserActivationState["DISABLED"] = "disabled";
    DeskaasuserActivationState["DISABLING"] = "disabling";
    DeskaasuserActivationState["ENABLED"] = "enabled";
    DeskaasuserActivationState["ENABLING"] = "enabling";
    DeskaasuserActivationState["TODISABLE"] = "toDisable";
    DeskaasuserActivationState["TOENABLE"] = "toEnable";
})(DeskaasuserActivationState = exports.DeskaasuserActivationState || (exports.DeskaasuserActivationState = {}));
/*
 * All states a Dedicated Cloud User can be in
 */
var DeskaasuserState;
(function (DeskaasuserState) {
    DeskaasuserState["CREATING"] = "creating";
    DeskaasuserState["DELETING"] = "deleting";
    DeskaasuserState["DELIVERED"] = "delivered";
    DeskaasuserState["ERROR"] = "error";
})(DeskaasuserState = exports.DeskaasuserState || (exports.DeskaasuserState = {}));
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
class Deskaas {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the DESKAAS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas#GET)
     */
    ListAvailableServices() {
        let url = `/deskaas`;
        return this.client.request('GET', url);
    }
    /**
     * Desktop As A Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/deskaas/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * changeAlias operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/changeAlias#POST)
     */
    ChangeTheVirtualDesktopAlias(alias, serviceName) {
        let url = `/deskaas/${serviceName}/changeAlias`;
        return this.client.request('POST', url, { alias });
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/deskaas/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/deskaas/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * console operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/console#POST)
     */
    NewConsoleAccess(serviceName) {
        let url = `/deskaas/${serviceName}/console`;
        return this.client.request('POST', url);
    }
    /**
     * passwordPolicy operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/passwordPolicy#GET)
     */
    GetTheCurrentPasswordPolicyForYourDesktopAsAService(serviceName) {
        let url = `/deskaas/${serviceName}/passwordPolicy`;
        return this.client.request('GET', url);
    }
    /**
     * reboot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/reboot#POST)
     */
    RebootTheOperatingSystemOfTheCloudDesktop(serviceName) {
        let url = `/deskaas/${serviceName}/reboot`;
        return this.client.request('POST', url);
    }
    /**
     * refresh operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/refresh#POST)
     */
    RefreshTheOperatingSystemOfTheDesktopAsAServiceAllYourPersonnalDataAreKept(serviceName) {
        let url = `/deskaas/${serviceName}/refresh`;
        return this.client.request('POST', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/deskaas/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/deskaas/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the deskaas.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithThisDesktopAsAService(serviceName, state) {
        let url = `/deskaas/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Desktop As A Service component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<DeskaasTask> {
      let url = `/deskaas/${serviceName}/task/${taskId}`
  
      return this.client.request<DeskaasTask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/deskaas/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * upgrade operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/upgrade#POST)
     */
    UpgradingTheDesktopAsAServiceToAnotherProfileTheVirtualDesktopWillNotBeAvailableDuringUpgradeAndHasToBeRestartedYouCannotDowngradeAVirtualDesktop(serviceName, newReference, planCode) {
        let url = `/deskaas/${serviceName}/upgrade`;
        return this.client.request('POST', url, { newReference, planCode });
    }
    /**
     * Desktop As A Service User [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DeskaasUser> {
      let url = `/deskaas/${serviceName}/user`
  
      return this.client.request<DeskaasUser>('GET', url)
    }
    */
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/changePassword#POST)
     */
    ChangeDesktopAsAServiceUserPassword(serviceName, password) {
        let url = `/deskaas/${serviceName}/user/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/changeProperties#POST)
     */
    ChangeDesktopAsAServiceUserProperties(serviceName, email) {
        let url = `/deskaas/${serviceName}/user/changeProperties`;
        return this.client.request('POST', url, { email });
    }
    /**
     * List the deskaas.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/task#GET)
     */
    TasksAssociatedWithThisUser(serviceName, state) {
        let url = `/deskaas/${serviceName}/user/task?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.Deskaas = Deskaas;
//# sourceMappingURL=deskaas.js.map