"use strict";
// GENERATED SDK for license/virtuozzo API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * A short description of what does the Task on your license
 */
var LicenseActionType;
(function (LicenseActionType) {
    LicenseActionType["ADDWINDOWFROMEXISTINGSERIAL"] = "addWindowFromExistingSerial";
    LicenseActionType["CHANGEIP"] = "changeIp";
    LicenseActionType["CHANGEOS"] = "changeOs";
    LicenseActionType["INSTALLLICENSE"] = "installLicense";
    LicenseActionType["OPTIONUPGRADE"] = "optionUpgrade";
    LicenseActionType["RELEASEOPTION"] = "releaseOption";
    LicenseActionType["VERSIONUPGRADE"] = "versionUpgrade";
})(LicenseActionType = exports.LicenseActionType || (exports.LicenseActionType = {}));
/*
 * Messages from change IP
 */
var LicenseChangeIpMessage;
(function (LicenseChangeIpMessage) {
    LicenseChangeIpMessage["OK"] = "OK";
    LicenseChangeIpMessage["DESTINATIONNOTALLOWED"] = "destinationNotAllowed";
    LicenseChangeIpMessage["LICENSEALREADYEXISTS"] = "licenseAlreadyExists";
    LicenseChangeIpMessage["NOTALLOWEDTOHANDLETHIS"] = "notAllowedToHandleThis";
    LicenseChangeIpMessage["NOTSAMETYPE"] = "notSameType";
    LicenseChangeIpMessage["SAMEIP"] = "sameIp";
    LicenseChangeIpMessage["VERSIONNOTALLOWED"] = "versionNotAllowed";
})(LicenseChangeIpMessage = exports.LicenseChangeIpMessage || (exports.LicenseChangeIpMessage = {}));
/*
 * Possible values for license type
 */
var LicenseLicenseType;
(function (LicenseLicenseType) {
    LicenseLicenseType["DEDICATED"] = "dedicated";
    LicenseLicenseType["DEDICATEDCLOUD"] = "dedicatedCloud";
    LicenseLicenseType["DEDICATEDFAILOVER"] = "dedicatedFailover";
    LicenseLicenseType["FAILOVER"] = "failover";
    LicenseLicenseType["VM"] = "vm";
    LicenseLicenseType["VPS"] = "vps";
    LicenseLicenseType["VPS_CEPH"] = "vps_ceph";
    LicenseLicenseType["VPS_CLASSIC"] = "vps_classic";
    LicenseLicenseType["VPS_CLOUD"] = "vps_cloud";
    LicenseLicenseType["VPS_CLOUD_2016"] = "vps_cloud_2016";
    LicenseLicenseType["VPS_SSD"] = "vps_ssd";
})(LicenseLicenseType = exports.LicenseLicenseType || (exports.LicenseLicenseType = {}));
/*
 * The name of an option currently enabled on your license
 */
var LicenseOptionLabel;
(function (LicenseOptionLabel) {
    LicenseOptionLabel["ANTISPAM_SPAMASSASSIN"] = "ANTISPAM_SPAMASSASSIN";
    LicenseOptionLabel["ANTIVIRUS_DRWEB"] = "ANTIVIRUS_DRWEB";
    LicenseOptionLabel["ANTIVIRUS_KASPERSKY"] = "ANTIVIRUS_KASPERSKY";
    LicenseOptionLabel["DOMAINS"] = "DOMAINS";
    LicenseOptionLabel["LANGUAGE_PACK"] = "LANGUAGE_PACK";
    LicenseOptionLabel["POWERPACK"] = "POWERPACK";
    LicenseOptionLabel["SQL_SERVER"] = "SQL_SERVER";
    LicenseOptionLabel["VIRTUOZZO_CONTAINERS"] = "VIRTUOZZO_CONTAINERS";
})(LicenseOptionLabel = exports.LicenseOptionLabel || (exports.LicenseOptionLabel = {}));
/*
 * All versions available for Virtuozzo products
 */
var LicenseOrderableVirtuozzoVersion;
(function (LicenseOrderableVirtuozzoVersion) {
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_CONTAINERS_4_FOR_LINUX"] = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX";
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"] = "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS";
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_4"] = "virtuozzo-4";
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_4_FOR_WINDOWS"] = "virtuozzo-4-for-windows";
})(LicenseOrderableVirtuozzoVersion = exports.LicenseOrderableVirtuozzoVersion || (exports.LicenseOrderableVirtuozzoVersion = {}));
/*
 * Tests that have failed for Virtuozzo products
 */
var LicensePotentialProblemVirtuozzo;
(function (LicensePotentialProblemVirtuozzo) {
    LicensePotentialProblemVirtuozzo["ISLINUXOS"] = "isLinuxOs";
    LicensePotentialProblemVirtuozzo["ISOSVIRTUOZZO4LIKE"] = "isOsVirtuozzo4Like";
    LicensePotentialProblemVirtuozzo["ISWINDOWSOS"] = "isWindowsOs";
})(LicensePotentialProblemVirtuozzo = exports.LicensePotentialProblemVirtuozzo || (exports.LicensePotentialProblemVirtuozzo = {}));
/*
 * All states a license can be in
 */
var LicenseState;
(function (LicenseState) {
    LicenseState["OK"] = "ok";
    LicenseState["RELEASED"] = "released";
    LicenseState["TERMINATED"] = "terminated";
    LicenseState["TODELIVER"] = "toDeliver";
})(LicenseState = exports.LicenseState || (exports.LicenseState = {}));
/*
 * All states a license Task can be in
 */
var LicenseTaskState;
(function (LicenseTaskState) {
    LicenseTaskState["CANCELLED"] = "cancelled";
    LicenseTaskState["DOING"] = "doing";
    LicenseTaskState["DONE"] = "done";
    LicenseTaskState["ERROR"] = "error";
    LicenseTaskState["TODO"] = "todo";
})(LicenseTaskState = exports.LicenseTaskState || (exports.LicenseTaskState = {}));
/*
 * All versions available for Virtuozzo products
 */
var LicenseVirtuozzoVersion;
(function (LicenseVirtuozzoVersion) {
    LicenseVirtuozzoVersion["VIRTUOZZO_CONTAINERS_4_FOR_LINUX"] = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX";
    LicenseVirtuozzoVersion["VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"] = "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS";
})(LicenseVirtuozzoVersion = exports.LicenseVirtuozzoVersion || (exports.LicenseVirtuozzoVersion = {}));
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
class LicenseVirtuozzo {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo#GET)
     */
    ListAvailableServices() {
        let url = `/license/virtuozzo`;
        return this.client.request('GET', url);
    }
    /**
     * Your Virtuozzo license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/license/virtuozzo/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Your Virtuozzo license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/license/virtuozzo/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * allowedDestinationIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/allowedDestinationIp#GET)
     */
    ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName) {
        let url = `/license/virtuozzo/${serviceName}/allowedDestinationIp`;
        return this.client.request('GET', url);
    }
    /**
     * canLicenseBeMovedTo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/canLicenseBeMovedTo#GET)
     */
    WillTellIfTheIpCanAcceptTheLicense(destinationIp, serviceName) {
        let url = `/license/virtuozzo/${serviceName}/canLicenseBeMovedTo?`;
        const queryParams = new query_params_1.default();
        if (destinationIp) {
            queryParams.set('destinationIp', destinationIp.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * changeIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/changeIp#POST)
     */
    MoveThisLicenseToAnotherIp(destinationIp, serviceName) {
        let url = `/license/virtuozzo/${serviceName}/changeIp`;
        return this.client.request('POST', url, { destinationIp });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/license/virtuozzo/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the license.Option objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/option#GET)
     */
    OptionsLinkedToThisLicense(serviceName, label) {
        let url = `/license/virtuozzo/${serviceName}/option?`;
        const queryParams = new query_params_1.default();
        if (label) {
            queryParams.set('label', label.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Your License options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/option/%7Blabel%7D#GET)
     */
    /*
    GetThisObjectProperties(label: LicenseOptionLabel, serviceName: string): Promise<LicenseOption> {
      let url = `/license/virtuozzo/${serviceName}/option/${label}`
  
      return this.client.request<LicenseOption>('GET', url)
    }
    */
    /**
     * Your License options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/option/%7Blabel%7D#DELETE)
     */
    ReleaseThisOption(label, serviceName) {
        let url = `/license/virtuozzo/${serviceName}/option/${label}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/license/virtuozzo/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/license/virtuozzo/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName, action, status) {
        let url = `/license/virtuozzo/${serviceName}/tasks?`;
        const queryParams = new query_params_1.default();
        if (action) {
            queryParams.set('action', action.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * licenses Todos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
      let url = `/license/virtuozzo/${serviceName}/tasks/${taskId}`
  
      return this.client.request<LicenseTask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/license/virtuozzo/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Get the orderable Virtuozzo versions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/virtuozzo/orderableVersions#GET)
     */
    GetTheOrderableVirtuozzoVersions(ip) {
        let url = `/license/virtuozzo/orderableVersions?`;
        const queryParams = new query_params_1.default();
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.LicenseVirtuozzo = LicenseVirtuozzo;
//# sourceMappingURL=license.virtuozzo.js.map