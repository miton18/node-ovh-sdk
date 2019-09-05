"use strict";
// GENERATED SDK for veeamCloudConnect API
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
 * All states a Cloud Tenant backup repository can be in
 */
var VeeamCloudConnectBackupRepositoryState;
(function (VeeamCloudConnectBackupRepositoryState) {
    VeeamCloudConnectBackupRepositoryState["CONFIGURING"] = "configuring";
    VeeamCloudConnectBackupRepositoryState["DELIVERED"] = "delivered";
    VeeamCloudConnectBackupRepositoryState["DISABLED"] = "disabled";
    VeeamCloudConnectBackupRepositoryState["DISABLING"] = "disabling";
    VeeamCloudConnectBackupRepositoryState["ERROR"] = "error";
    VeeamCloudConnectBackupRepositoryState["MIGRATING"] = "migrating";
    VeeamCloudConnectBackupRepositoryState["REMOVING"] = "removing";
})(VeeamCloudConnectBackupRepositoryState = exports.VeeamCloudConnectBackupRepositoryState || (exports.VeeamCloudConnectBackupRepositoryState = {}));
/*
 * All Location where cloud can be physically located
 */
var VeeamCloudConnectLocation;
(function (VeeamCloudConnectLocation) {
    VeeamCloudConnectLocation["BHS1"] = "bhs1";
    VeeamCloudConnectLocation["RBX2"] = "rbx2";
    VeeamCloudConnectLocation["SBG1"] = "sbg1";
})(VeeamCloudConnectLocation = exports.VeeamCloudConnectLocation || (exports.VeeamCloudConnectLocation = {}));
/*
 * All orderable Veeam Cloud Connect offers
 */
var VeeamCloudConnectOffer;
(function (VeeamCloudConnectOffer) {
    VeeamCloudConnectOffer["ADVANCED"] = "advanced";
    VeeamCloudConnectOffer["DEMO"] = "demo";
    VeeamCloudConnectOffer["STARTER"] = "starter";
})(VeeamCloudConnectOffer = exports.VeeamCloudConnectOffer || (exports.VeeamCloudConnectOffer = {}));
/*
 * All states a Cloud Tenant Task can be in
 */
var VeeamCloudConnectTaskState;
(function (VeeamCloudConnectTaskState) {
    VeeamCloudConnectTaskState["CANCELED"] = "canceled";
    VeeamCloudConnectTaskState["DOING"] = "doing";
    VeeamCloudConnectTaskState["DONE"] = "done";
    VeeamCloudConnectTaskState["ERROR"] = "error";
    VeeamCloudConnectTaskState["FIXING"] = "fixing";
    VeeamCloudConnectTaskState["PROBLEM"] = "problem";
    VeeamCloudConnectTaskState["TOCREATE"] = "toCreate";
    VeeamCloudConnectTaskState["TODO"] = "todo";
    VeeamCloudConnectTaskState["UNKNOWN"] = "unknown";
    VeeamCloudConnectTaskState["WAITINGTODO"] = "waitingTodo";
})(VeeamCloudConnectTaskState = exports.VeeamCloudConnectTaskState || (exports.VeeamCloudConnectTaskState = {}));
class VeeamCloudConnect {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the VEEAMCC service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect#GET)
     */
    ListAvailableServices() {
        let url = `/veeamCloudConnect`;
        return this.client.request('GET', url);
    }
    /**
     * Veeam Cloud Connect account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/veeamCloudConnect/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * List the veeamCloudConnect.BackupRepository objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository#GET)
     */
    VeeamBackupRepositoryLinkedToThisVeeamCloudConnectAccount(serviceName) {
        let url = `/veeamCloudConnect/${serviceName}/backupRepository`;
        return this.client.request('GET', url);
    }
    /**
     * List the veeamCloudConnect.BackupRepository objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository#POST)
     */
    AddANewBackupRepositoryToYourProfessionalAccount(serviceName) {
        let url = `/veeamCloudConnect/${serviceName}/backupRepository`;
        return this.client.request('POST', url);
    }
    /**
     * Veeam Backup Repository [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D#GET)
     */
    /*
    GetThisObjectProperties(inventoryName: string, serviceName: string): Promise<VeeamCloudConnectBackupRepository> {
      let url = `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`
  
      return this.client.request<VeeamCloudConnectBackupRepository>('GET', url)
    }
    */
    /**
     * Veeam Backup Repository [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D#DELETE)
     */
    DeleteThisBackupRepository(inventoryName, serviceName) {
        let url = `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * upgradeQuota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/backupRepository/%7BinventoryName%7D/upgradeQuota#POST)
     */
    ChangeYourQuota(inventoryName, newQuota, serviceName) {
        let url = `/veeamCloudConnect/${serviceName}/backupRepository/${inventoryName}/upgradeQuota`;
        return this.client.request('POST', url, { newQuota });
    }
    /**
     * capabilities operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/capabilities#GET)
     */
    ShowCapabilitiesOfYourCurrentOffer(serviceName) {
        let url = `/veeamCloudConnect/${serviceName}/capabilities`;
        return this.client.request('GET', url);
    }
    /**
     * orderableUpgrade operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/orderableUpgrade#GET)
     */
    ListThePossibleUpgradesOnYourVeeamCloudConnectAccount(serviceName) {
        let url = `/veeamCloudConnect/${serviceName}/orderableUpgrade`;
        return this.client.request('GET', url);
    }
    /**
     * resetPassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/resetPassword#POST)
     */
    ResetYourCloudTenantPassword(serviceName) {
        let url = `/veeamCloudConnect/${serviceName}/resetPassword`;
        return this.client.request('POST', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/veeamCloudConnect/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/veeamCloudConnect/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the veeamCloudConnect.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/veeamCloudConnect/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithCloudTenant(serviceName, name, state) {
        let url = `/veeamCloudConnect/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.VeeamCloudConnect = VeeamCloudConnect;
//# sourceMappingURL=veeamCloudConnect.js.map