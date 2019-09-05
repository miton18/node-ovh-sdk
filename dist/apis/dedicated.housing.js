"use strict";
// GENERATED SDK for dedicated/housing API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Housing bay datacenters
 */
var DedicatedhousingDatacenter;
(function (DedicatedhousingDatacenter) {
    DedicatedhousingDatacenter["GSW"] = "gsw";
    DedicatedhousingDatacenter["PDC1"] = "pdc1";
})(DedicatedhousingDatacenter = exports.DedicatedhousingDatacenter || (exports.DedicatedhousingDatacenter = {}));
/*
 * Housing bay High Availablility offers
 */
var DedicatedhousingHaRoutingOffer;
(function (DedicatedhousingHaRoutingOffer) {
    DedicatedhousingHaRoutingOffer["HA2X2"] = "ha2x2";
    DedicatedhousingHaRoutingOffer["HA2X4"] = "ha2x4";
})(DedicatedhousingHaRoutingOffer = exports.DedicatedhousingHaRoutingOffer || (exports.DedicatedhousingHaRoutingOffer = {}));
/*
 * Distincts task
 */
var DedicatedhousingTaskFunction;
(function (DedicatedhousingTaskFunction) {
    DedicatedhousingTaskFunction["APPLYBACKUPFTPACLS"] = "applyBackupFtpAcls";
    DedicatedhousingTaskFunction["APPLYBACKUPFTPQUOTA"] = "applyBackupFtpQuota";
    DedicatedhousingTaskFunction["CHANGEPASSWORDBACKUPFTP"] = "changePasswordBackupFTP";
    DedicatedhousingTaskFunction["CREATEBACKUPFTP"] = "createBackupFTP";
    DedicatedhousingTaskFunction["MIGRATEBACKUPFTP"] = "migrateBackupFTP";
    DedicatedhousingTaskFunction["REMOVEBACKUPFTP"] = "removeBackupFTP";
})(DedicatedhousingTaskFunction = exports.DedicatedhousingTaskFunction || (exports.DedicatedhousingTaskFunction = {}));
/*
 * Different backup storage type
 */
var DedicatedserverBackupStorageType;
(function (DedicatedserverBackupStorageType) {
    DedicatedserverBackupStorageType["INCLUDED"] = "included";
    DedicatedserverBackupStorageType["STORAGE"] = "storage";
})(DedicatedserverBackupStorageType = exports.DedicatedserverBackupStorageType || (exports.DedicatedserverBackupStorageType = {}));
/*
 * different task operation
 */
var DedicatedTaskFunction;
(function (DedicatedTaskFunction) {
    DedicatedTaskFunction["INFRA_002_VIRTUALNETWORKINTERFACE"] = "INFRA_002_VirtualNetworkInterface";
    DedicatedTaskFunction["ADDVIRTUALMAC"] = "addVirtualMac";
    DedicatedTaskFunction["ADDWINDOWSPLAFROMEXISTINGSERIAL"] = "addWindowSplaFromExistingSerial";
    DedicatedTaskFunction["APPLYBACKUPFTPACLS"] = "applyBackupFtpAcls";
    DedicatedTaskFunction["APPLYBACKUPFTPQUOTA"] = "applyBackupFtpQuota";
    DedicatedTaskFunction["BYPASSANTIDDOSGAME"] = "bypassAntiDDosGame";
    DedicatedTaskFunction["CHANGEPASSWORDBACKUPFTP"] = "changePasswordBackupFTP";
    DedicatedTaskFunction["CHANGERIPEORG"] = "changeRipeOrg";
    DedicatedTaskFunction["CHECKANDRELEASEIP"] = "checkAndReleaseIp";
    DedicatedTaskFunction["CREATEBACKUPFTP"] = "createBackupFTP";
    DedicatedTaskFunction["CREATEORUPDATERIPEORG"] = "createOrUpdateRipeOrg";
    DedicatedTaskFunction["CREATEPRIVATENETWORK"] = "createPrivateNetwork";
    DedicatedTaskFunction["DISABLEFIREWALL"] = "disableFirewall";
    DedicatedTaskFunction["ENABLEFIREWALL"] = "enableFirewall";
    DedicatedTaskFunction["GENERICMOVEFLOATINGIP"] = "genericMoveFloatingIp";
    DedicatedTaskFunction["HARDREBOOT"] = "hardReboot";
    DedicatedTaskFunction["MIGRATEBACKUPFTP"] = "migrateBackupFTP";
    DedicatedTaskFunction["MOVEFLOATINGIP"] = "moveFloatingIp";
    DedicatedTaskFunction["MOVEVIRTUALMAC"] = "moveVirtualMac";
    DedicatedTaskFunction["REBOOTPOWER8TO"] = "rebootPower8To";
    DedicatedTaskFunction["REINSTALLSERVER"] = "reinstallServer";
    DedicatedTaskFunction["RELEASEIP"] = "releaseIp";
    DedicatedTaskFunction["REMOVEBACKUPFTP"] = "removeBackupFTP";
    DedicatedTaskFunction["REMOVEVIRTUALMAC"] = "removeVirtualMac";
    DedicatedTaskFunction["REQUESTACCESSIPMI"] = "requestAccessIPMI";
    DedicatedTaskFunction["RESETIPMI"] = "resetIPMI";
    DedicatedTaskFunction["RESETIPMISESSION"] = "resetIPMISession";
    DedicatedTaskFunction["TESTIPMIHTTP"] = "testIPMIhttp";
    DedicatedTaskFunction["TESTIPMIPASSWORD"] = "testIPMIpassword";
    DedicatedTaskFunction["TESTIPMIPING"] = "testIPMIping";
    DedicatedTaskFunction["VIRTUALMACADD"] = "virtualMacAdd";
    DedicatedTaskFunction["VIRTUALMACDELETE"] = "virtualMacDelete";
})(DedicatedTaskFunction = exports.DedicatedTaskFunction || (exports.DedicatedTaskFunction = {}));
/*
 * different task status
 */
var DedicatedTaskStatus;
(function (DedicatedTaskStatus) {
    DedicatedTaskStatus["CANCELLED"] = "cancelled";
    DedicatedTaskStatus["CUSTOMERERROR"] = "customerError";
    DedicatedTaskStatus["DOING"] = "doing";
    DedicatedTaskStatus["DONE"] = "done";
    DedicatedTaskStatus["INIT"] = "init";
    DedicatedTaskStatus["OVHERROR"] = "ovhError";
    DedicatedTaskStatus["TODO"] = "todo";
})(DedicatedTaskStatus = exports.DedicatedTaskStatus || (exports.DedicatedTaskStatus = {}));
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
class DedicatedHousing {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the HOUSING service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing#GET)
     */
    ListAvailableServices() {
        let url = `/dedicated/housing`;
        return this.client.request('GET', url);
    }
    /**
     * Housing bay [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/dedicated/housing/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Backup Ftp assigned to this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedserverBackupFtp> {
      let url = `/dedicated/housing/${serviceName}/features/backupFTP`
  
      return this.client.request<DedicatedserverBackupFtp>('GET', url)
    }
    */
    /**
     * Backup Ftp assigned to this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP#POST)
     */
    CreateANewBackupFTPSpace(serviceName) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP`;
        return this.client.request('POST', url);
    }
    /**
     * Backup Ftp assigned to this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP#DELETE)
     */
    TerminateYourBackupFTPServiceALLDATAWILLBEPERMANENTLYDELETED(serviceName) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access#GET)
     */
    ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP/access`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access#POST)
     */
    CreateANewBackupFTPACL(cifs, ipBlock, nfs, serviceName, ftp) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP/access`;
        return this.client.request('POST', url, { cifs, ipBlock, nfs, ftp });
    }
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#GET)
     */
    /*
    GetThisObjectProperties(ipBlock: string, serviceName: string): Promise<DedicatedserverBackupFtpAcl> {
      let url = `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`
  
      return this.client.request<DedicatedserverBackupFtpAcl>('GET', url)
    }
    */
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#PUT)
     */
    AlterThisObjectProperties(ipBlock, serviceName, payload) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#DELETE)
     */
    RevokeThisACL(ipBlock, serviceName) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP/access/${ipBlock}`;
        return this.client.request('DELETE', url);
    }
    /**
     * authorizableBlocks operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/authorizableBlocks#GET)
     */
    GetAllIPBlocksThatCanBeUsedInTheACL(serviceName) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP/authorizableBlocks`;
        return this.client.request('GET', url);
    }
    /**
     * password operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/features/backupFTP/password#POST)
     */
    ChangeYourBackupFTPPassword(serviceName) {
        let url = `/dedicated/housing/${serviceName}/features/backupFTP/password`;
        return this.client.request('POST', url);
    }
    /**
     * APC operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/orderable/APC#GET)
     */
    IsAnAPCOrderableForThisHousingBay(serviceName) {
        let url = `/dedicated/housing/${serviceName}/orderable/APC`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/dedicated/housing/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/dedicated/housing/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the dedicated.housing.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/task#GET)
     */
    ViewTaskList(serviceName, _function, status) {
        let url = `/dedicated/housing/${serviceName}/task?`;
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
     * Housing tasks [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatedhousingTask> {
      let url = `/dedicated/housing/${serviceName}/task/${taskId}`
  
      return this.client.request<DedicatedhousingTask>('GET', url)
    }
    */
    /**
     * cancel operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/housing/%7BserviceName%7D/task/%7BtaskId%7D/cancel#POST)
     */
    ThisActionStopTheTaskProgressionIfItPossible(serviceName, taskId) {
        let url = `/dedicated/housing/${serviceName}/task/${taskId}/cancel`;
        return this.client.request('POST', url);
    }
}
exports.DedicatedHousing = DedicatedHousing;
//# sourceMappingURL=dedicated.housing.js.map