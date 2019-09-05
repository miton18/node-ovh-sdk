"use strict";
// GENERATED SDK for overTheBox API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 *
 */
var OrderCurrencyCode;
(function (OrderCurrencyCode) {
    OrderCurrencyCode["AUD"] = "AUD";
    OrderCurrencyCode["CAD"] = "CAD";
    OrderCurrencyCode["CZK"] = "CZK";
    OrderCurrencyCode["EUR"] = "EUR";
    OrderCurrencyCode["GBP"] = "GBP";
    OrderCurrencyCode["LTL"] = "LTL";
    OrderCurrencyCode["MAD"] = "MAD";
    OrderCurrencyCode["N_A"] = "N/A";
    OrderCurrencyCode["PLN"] = "PLN";
    OrderCurrencyCode["SGD"] = "SGD";
    OrderCurrencyCode["TND"] = "TND";
    OrderCurrencyCode["USD"] = "USD";
    OrderCurrencyCode["XOF"] = "XOF";
    OrderCurrencyCode["POINTS"] = "points";
})(OrderCurrencyCode = exports.OrderCurrencyCode || (exports.OrderCurrencyCode = {}));
/*
 * Status of a task.
 */
var OverTheBoxActionStatus;
(function (OverTheBoxActionStatus) {
    OverTheBoxActionStatus["DOING"] = "doing";
    OverTheBoxActionStatus["DONE"] = "done";
    OverTheBoxActionStatus["ERROR"] = "error";
    OverTheBoxActionStatus["TODO"] = "todo";
})(OverTheBoxActionStatus = exports.OverTheBoxActionStatus || (exports.OverTheBoxActionStatus = {}));
/*
 * Status of a MPTCP Interface.
 */
var OverTheBoxMultipathStatus;
(function (OverTheBoxMultipathStatus) {
    OverTheBoxMultipathStatus["BACKUP"] = "backup";
    OverTheBoxMultipathStatus["HANDOVER"] = "handover";
    OverTheBoxMultipathStatus["MASTER"] = "master";
    OverTheBoxMultipathStatus["OFF"] = "off";
    OverTheBoxMultipathStatus["ON"] = "on";
})(OverTheBoxMultipathStatus = exports.OverTheBoxMultipathStatus || (exports.OverTheBoxMultipathStatus = {}));
/*
 * Status of the remote access.
 */
var OverTheBoxRemoteAccessStatus;
(function (OverTheBoxRemoteAccessStatus) {
    OverTheBoxRemoteAccessStatus["ACTIVE"] = "active";
    OverTheBoxRemoteAccessStatus["CREATING"] = "creating";
    OverTheBoxRemoteAccessStatus["DELETED"] = "deleted";
    OverTheBoxRemoteAccessStatus["DELETING"] = "deleting";
    OverTheBoxRemoteAccessStatus["PENDINGVALIDATION"] = "pendingValidation";
    OverTheBoxRemoteAccessStatus["TODELETE"] = "toDelete";
})(OverTheBoxRemoteAccessStatus = exports.OverTheBoxRemoteAccessStatus || (exports.OverTheBoxRemoteAccessStatus = {}));
/*
 * Status of the service.
 */
var OverTheBoxServiceStatus;
(function (OverTheBoxServiceStatus) {
    OverTheBoxServiceStatus["ACTIVE"] = "active";
    OverTheBoxServiceStatus["CREATING"] = "creating";
    OverTheBoxServiceStatus["DELETED"] = "deleted";
    OverTheBoxServiceStatus["SUSPENDED"] = "suspended";
    OverTheBoxServiceStatus["TOCREATE"] = "toCreate";
    OverTheBoxServiceStatus["TODELETE"] = "toDelete";
})(OverTheBoxServiceStatus = exports.OverTheBoxServiceStatus || (exports.OverTheBoxServiceStatus = {}));
/*
 * Status of a task.
 */
var OverTheBoxTaskStatus;
(function (OverTheBoxTaskStatus) {
    OverTheBoxTaskStatus["DOING"] = "doing";
    OverTheBoxTaskStatus["DONE"] = "done";
    OverTheBoxTaskStatus["ERROR"] = "error";
    OverTheBoxTaskStatus["TODO"] = "todo";
})(OverTheBoxTaskStatus = exports.OverTheBoxTaskStatus || (exports.OverTheBoxTaskStatus = {}));
/*
 * Tunnel mode of the service.
 */
var OverTheBoxTunnelMode;
(function (OverTheBoxTunnelMode) {
    OverTheBoxTunnelMode["GLORYTUN"] = "glorytun";
    OverTheBoxTunnelMode["GLORYTUN_HYBRID"] = "glorytun_hybrid";
    OverTheBoxTunnelMode["GLORYTUN_MUD"] = "glorytun_mud";
})(OverTheBoxTunnelMode = exports.OverTheBoxTunnelMode || (exports.OverTheBoxTunnelMode = {}));
/*
 * Enum of Offers
 */
var PriceOverTheBoxOffer;
(function (PriceOverTheBoxOffer) {
    PriceOverTheBoxOffer["PLUS_V1"] = "plus.v1";
})(PriceOverTheBoxOffer = exports.PriceOverTheBoxOffer || (exports.PriceOverTheBoxOffer = {}));
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
class OverTheBox {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the OVERTHEBOX service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox#GET)
     */
    ListAvailableServices() {
        let url = `/overTheBox`;
        return this.client.request('GET', url);
    }
    /**
     * Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/overTheBox/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/overTheBox/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D#DELETE)
     */
    ResiliateAService(serviceName) {
        let url = `/overTheBox/${serviceName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * availableReleaseChannels operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/availableReleaseChannels#GET)
     */
    ListAvailableReleaseChannelsForThisService(serviceName) {
        let url = `/overTheBox/${serviceName}/availableReleaseChannels`;
        return this.client.request('GET', url);
    }
    /**
     * List the overTheBox.Backup objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/backups#GET)
     */
    ListOfBackupsForThisService(serviceName) {
        let url = `/overTheBox/${serviceName}/backups`;
        return this.client.request('GET', url);
    }
    /**
     * Backup [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/backups/%7BbackupId%7D#GET)
     */
    /*
    GetThisObjectProperties(backupId: string, serviceName: string): Promise<OverTheBoxBackup> {
      let url = `/overTheBox/${serviceName}/backups/${backupId}`
  
      return this.client.request<OverTheBoxBackup>('GET', url)
    }
    */
    /**
     * cancelResiliation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/cancelResiliation#POST)
     */
    CancelTheResiliationOfTheService(serviceName) {
        let url = `/overTheBox/${serviceName}/cancelResiliation`;
        return this.client.request('POST', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/overTheBox/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Device [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<OverTheBoxDevice> {
      let url = `/overTheBox/${serviceName}/device`
  
      return this.client.request<OverTheBoxDevice>('GET', url)
    }
    */
    /**
     * Device [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device#DELETE)
     */
    UnlinkADeviceFromAService(serviceName) {
        let url = `/overTheBox/${serviceName}/device`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the overTheBox.DeviceAction objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/actions#GET)
     */
    ListOfActionsScheduledForThisDevice(serviceName, name, status) {
        let url = `/overTheBox/${serviceName}/device/actions?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the overTheBox.DeviceAction objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/actions#POST)
     */
    CreateADeviceActionOnTheDevice(name, serviceName) {
        let url = `/overTheBox/${serviceName}/device/actions`;
        return this.client.request('POST', url, { name });
    }
    /**
     * Device action [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/actions/%7BactionId%7D#GET)
     */
    /*
    GetThisObjectProperties(actionId: string, serviceName: string): Promise<OverTheBoxDeviceAction> {
      let url = `/overTheBox/${serviceName}/device/actions/${actionId}`
  
      return this.client.request<OverTheBoxDeviceAction>('GET', url)
    }
    */
    /**
     * availableActions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/availableActions#GET)
     */
    ListTheAvailableDeviceActions(serviceName) {
        let url = `/overTheBox/${serviceName}/device/availableActions`;
        return this.client.request('GET', url);
    }
    /**
     * backup operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/backup#POST)
     */
    CreateAnActionToGenerateABackup(serviceName) {
        let url = `/overTheBox/${serviceName}/device/backup`;
        return this.client.request('POST', url);
    }
    /**
     * logs operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/logs#POST)
     */
    GenerateATemporaryUrlToRetrieveDeviceLogs(serviceName) {
        let url = `/overTheBox/${serviceName}/device/logs`;
        return this.client.request('POST', url);
    }
    /**
     * restoreBackup operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/device/restoreBackup#POST)
     */
    CreateAGroupOfActionsToRestoreAGivenBackup(backupId, serviceName) {
        let url = `/overTheBox/${serviceName}/device/restoreBackup`;
        return this.client.request('POST', url, { backupId });
    }
    /**
     * linkDevice operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/linkDevice#POST)
     */
    LinkADeviceToThisService(deviceId, serviceName) {
        let url = `/overTheBox/${serviceName}/linkDevice`;
        return this.client.request('POST', url, { deviceId });
    }
    /**
     * offers operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/migration/offers#GET)
     */
    ListAllAvailableOffersOneCanMigrateTo(serviceName) {
        let url = `/overTheBox/${serviceName}/migration/offers`;
        return this.client.request('GET', url);
    }
    /**
     * List the overTheBox.RemoteAccess objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses#GET)
     */
    ListOfRemoteAccessesForTheService(serviceName) {
        let url = `/overTheBox/${serviceName}/remoteAccesses`;
        return this.client.request('GET', url);
    }
    /**
     * List the overTheBox.RemoteAccess objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses#POST)
     */
    CreateANewRemoteAccessForTheService(exposedPort, serviceName, allowedIp, expirationDate, publicKey) {
        let url = `/overTheBox/${serviceName}/remoteAccesses`;
        return this.client.request('POST', url, { exposedPort, allowedIp, expirationDate, publicKey });
    }
    /**
     * If authorized, a remote access will expose a port, allowing an access to the device remotely [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses/%7BremoteAccessId%7D#GET)
     */
    /*
    GetThisObjectProperties(remoteAccessId: string, serviceName: string): Promise<OverTheBoxRemoteAccess> {
      let url = `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`
  
      return this.client.request<OverTheBoxRemoteAccess>('GET', url)
    }
    */
    /**
     * If authorized, a remote access will expose a port, allowing an access to the device remotely [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses/%7BremoteAccessId%7D#DELETE)
     */
    DeleteARemoteAccess(remoteAccessId, serviceName) {
        let url = `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * authorize operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/remoteAccesses/%7BremoteAccessId%7D/authorize#POST)
     */
    AuthorizeTheRemoteAccess(remoteAccessId, serviceName) {
        let url = `/overTheBox/${serviceName}/remoteAccesses/${remoteAccessId}/authorize`;
        return this.client.request('POST', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/overTheBox/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/overTheBox/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the overTheBox.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/tasks#GET)
     */
    ListOfTasksScheduledForThisService(serviceName, name, status) {
        let url = `/overTheBox/${serviceName}/tasks?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: string): Promise<OverTheBoxTask> {
      let url = `/overTheBox/${serviceName}/tasks/${taskId}`
  
      return this.client.request<OverTheBoxTask>('GET', url)
    }
    */
    /**
     * List the available offers for the new call [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/availableOffers#GET)
     */
    ListTheAvailableOffersForTheNewCall() {
        let url = `/overTheBox/availableOffers`;
        return this.client.request('GET', url);
    }
    /**
     * Get the list of devices connected from the same IP address [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/overTheBox/devices#POST)
     */
    GetTheListOfDevicesConnectedFromTheSameIPAddress() {
        let url = `/overTheBox/devices`;
        return this.client.request('POST', url);
    }
}
exports.OverTheBox = OverTheBox;
//# sourceMappingURL=overTheBox.js.map