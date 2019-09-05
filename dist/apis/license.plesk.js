"use strict";
// GENERATED SDK for license/plesk API
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
 * All antivirus available for Plesk products
 */
var LicenseOrderableAntivirus;
(function (LicenseOrderableAntivirus) {
    LicenseOrderableAntivirus["DR_WEB"] = "DR_WEB";
    LicenseOrderableAntivirus["KASPERSKY_UNLIMITED_MAILBOXES"] = "KASPERSKY_UNLIMITED_MAILBOXES";
    LicenseOrderableAntivirus["KASPERSKY"] = "kaspersky";
})(LicenseOrderableAntivirus = exports.LicenseOrderableAntivirus || (exports.LicenseOrderableAntivirus = {}));
/*
 * Application set available for Plesk products
 */
var LicensePleskApplicationSet;
(function (LicensePleskApplicationSet) {
    LicensePleskApplicationSet["APPLICATIONPACK"] = "applicationpack";
    LicensePleskApplicationSet["DEVELOPERPACK"] = "developerpack";
    LicensePleskApplicationSet["POWER_PACK_FOR_PLESK12"] = "power-pack-for-plesk12";
    LicensePleskApplicationSet["POWERPACK"] = "powerpack";
})(LicensePleskApplicationSet = exports.LicensePleskApplicationSet || (exports.LicensePleskApplicationSet = {}));
/*
 * All versions available for Plesk products
 */
var LicensePleskVersion;
(function (LicensePleskVersion) {
    LicensePleskVersion["PLESK_10_AND_LATER"] = "PLESK_10_AND_LATER";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_KVM"] = "PLESK_10_AND_LATER_FOR_KVM";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_VMWARE"] = "PLESK_10_AND_LATER_FOR_VMWARE";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_VZ"] = "PLESK_10_AND_LATER_FOR_VZ";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN"] = "PLESK_10_AND_LATER_FOR_WIN";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE"] = "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN_FOR_VZ"] = "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN_FOR_XEN"] = "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_XEN"] = "PLESK_10_AND_LATER_FOR_XEN";
    LicensePleskVersion["PLESK_12_VPS_WEB_ADMIN"] = "PLESK_12_VPS_WEB_ADMIN";
    LicensePleskVersion["PLESK_12_VPS_WEB_APP"] = "PLESK_12_VPS_WEB_APP";
    LicensePleskVersion["PLESK_12_VPS_WEB_HOST"] = "PLESK_12_VPS_WEB_HOST";
    LicensePleskVersion["PLESK_12_VPS_WEB_HOST_CLNX"] = "PLESK_12_VPS_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_12_VPS_WEB_PRO"] = "PLESK_12_VPS_WEB_PRO";
    LicensePleskVersion["PLESK_12_VPS_WEB_PRO_CLNX"] = "PLESK_12_VPS_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_12_WEB_ADMIN"] = "PLESK_12_WEB_ADMIN";
    LicensePleskVersion["PLESK_12_WEB_APP"] = "PLESK_12_WEB_APP";
    LicensePleskVersion["PLESK_12_WEB_HOST"] = "PLESK_12_WEB_HOST";
    LicensePleskVersion["PLESK_12_WEB_HOST_CLNX"] = "PLESK_12_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_12_WEB_PRO"] = "PLESK_12_WEB_PRO";
    LicensePleskVersion["PLESK_12_WEB_PRO_CLNX"] = "PLESK_12_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_75_RELOADED"] = "PLESK_75_RELOADED";
    LicensePleskVersion["PLESK_80"] = "PLESK_80";
    LicensePleskVersion["PLESK_80_FOR_VZ"] = "PLESK_80_FOR_VZ";
    LicensePleskVersion["PLESK_81_FOR_WIN"] = "PLESK_81_FOR_WIN";
    LicensePleskVersion["PLESK_9"] = "PLESK_9";
    LicensePleskVersion["PLESK_95"] = "PLESK_95";
    LicensePleskVersion["PLESK_95_FOR_VZ"] = "PLESK_95_FOR_VZ";
    LicensePleskVersion["PLESK_95_FOR_WIN"] = "PLESK_95_FOR_WIN";
    LicensePleskVersion["PLESK_9_FOR_VZ"] = "PLESK_9_FOR_VZ";
    LicensePleskVersion["PLESK_9_FOR_WIN"] = "PLESK_9_FOR_WIN";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_ADMIN"] = "PLESK_ONYX_VPS_WEB_ADMIN";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_APP"] = "PLESK_ONYX_VPS_WEB_APP";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_HOST"] = "PLESK_ONYX_VPS_WEB_HOST";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_HOST_CLNX"] = "PLESK_ONYX_VPS_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_PRO"] = "PLESK_ONYX_VPS_WEB_PRO";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_PRO_CLNX"] = "PLESK_ONYX_VPS_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_ONYX_WEB_ADMIN"] = "PLESK_ONYX_WEB_ADMIN";
    LicensePleskVersion["PLESK_ONYX_WEB_APP"] = "PLESK_ONYX_WEB_APP";
    LicensePleskVersion["PLESK_ONYX_WEB_HOST"] = "PLESK_ONYX_WEB_HOST";
    LicensePleskVersion["PLESK_ONYX_WEB_HOST_CLNX"] = "PLESK_ONYX_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_ONYX_WEB_PRO"] = "PLESK_ONYX_WEB_PRO";
    LicensePleskVersion["PLESK_ONYX_WEB_PRO_CLNX"] = "PLESK_ONYX_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_12_WEBADMIN_FOR_VPS"] = "plesk-12-webadmin-for-vps";
    LicensePleskVersion["PLESK_12_WEBHOST"] = "plesk-12-webhost";
    LicensePleskVersion["PLESK_12_WEBHOST_FOR_VPS"] = "plesk-12-webhost-for-vps";
    LicensePleskVersion["PLESK_12_WEBPRO"] = "plesk-12-webpro";
    LicensePleskVersion["PLESK_12_WEBPRO_FOR_VPS"] = "plesk-12-webpro-for-vps";
})(LicensePleskVersion = exports.LicensePleskVersion || (exports.LicensePleskVersion = {}));
/*
 * Tests that have failed for Plesk products
 */
var LicensePotentialProblemPlesk;
(function (LicensePotentialProblemPlesk) {
    LicensePotentialProblemPlesk["ISHOSTOSHYPERVLIKE"] = "isHostOsHyperVLike";
    LicensePotentialProblemPlesk["ISHOSTOSVMWARELIKE"] = "isHostOsVMwareLike";
    LicensePotentialProblemPlesk["ISHOSTOSVIRTUOZZO4LIKE"] = "isHostOsVirtuozzo4Like";
    LicensePotentialProblemPlesk["ISHOSTOSXENLIKE"] = "isHostOsXenLike";
    LicensePotentialProblemPlesk["ISLINUXOS"] = "isLinuxOs";
    LicensePotentialProblemPlesk["ISOSCLOUDLINUX"] = "isOsCloudLinux";
    LicensePotentialProblemPlesk["ISOSPLESK10ANDLATER"] = "isOsPlesk10andLater";
    LicensePotentialProblemPlesk["ISOSPLESK12"] = "isOsPlesk12";
    LicensePotentialProblemPlesk["ISOSPLESKONYX"] = "isOsPleskOnyx";
    LicensePotentialProblemPlesk["ISWINDOWSOS"] = "isWindowsOs";
})(LicensePotentialProblemPlesk = exports.LicensePotentialProblemPlesk || (exports.LicensePotentialProblemPlesk = {}));
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
class LicensePlesk {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk#GET)
     */
    ListAvailableServices() {
        let url = `/license/plesk`;
        return this.client.request('GET', url);
    }
    /**
     * Your Plesk license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/license/plesk/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Your Plesk license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/license/plesk/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * allowedDestinationIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/allowedDestinationIp#GET)
     */
    ReturnsAnArrayOfIpsWhereTheLicenseCanBeMovedTo(serviceName) {
        let url = `/license/plesk/${serviceName}/allowedDestinationIp`;
        return this.client.request('GET', url);
    }
    /**
     * canLicenseBeMovedTo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/canLicenseBeMovedTo#GET)
     */
    WillTellIfTheIpCanAcceptTheLicense(destinationIp, serviceName) {
        let url = `/license/plesk/${serviceName}/canLicenseBeMovedTo?`;
        const queryParams = new query_params_1.default();
        if (destinationIp) {
            queryParams.set('destinationIp', destinationIp.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * changeIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/changeIp#POST)
     */
    MoveThisLicenseToAnotherIp(destinationIp, serviceName) {
        let url = `/license/plesk/${serviceName}/changeIp`;
        return this.client.request('POST', url, { destinationIp });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/license/plesk/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the license.Option objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/option#GET)
     */
    OptionsAttachedToThisLicense(serviceName) {
        let url = `/license/plesk/${serviceName}/option`;
        return this.client.request('GET', url);
    }
    /**
     * Your License options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/option/%7Blabel%7D#GET)
     */
    /*
    GetThisObjectProperties(label: LicenseOptionLabel, serviceName: string): Promise<LicenseOption> {
      let url = `/license/plesk/${serviceName}/option/${label}`
  
      return this.client.request<LicenseOption>('GET', url)
    }
    */
    /**
     * Your License options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/option/%7Blabel%7D#DELETE)
     */
    ReleaseThisOption(label, serviceName) {
        let url = `/license/plesk/${serviceName}/option/${label}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/license/plesk/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/license/plesk/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName, action, status) {
        let url = `/license/plesk/${serviceName}/tasks?`;
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
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
      let url = `/license/plesk/${serviceName}/tasks/${taskId}`
  
      return this.client.request<LicenseTask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/license/plesk/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Get the orderable Plesk versions and their associated compatibilities [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/plesk/orderableVersions#GET)
     */
    GetTheOrderablePleskVersionsAndTheirAssociatedCompatibilities(ip) {
        let url = `/license/plesk/orderableVersions?`;
        const queryParams = new query_params_1.default();
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.LicensePlesk = LicensePlesk;
//# sourceMappingURL=license.plesk.js.map