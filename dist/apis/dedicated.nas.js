"use strict";
// GENERATED SDK for dedicated/nas API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Partition Protocol
 */
var DedicatedstorageProtocol;
(function (DedicatedstorageProtocol) {
    DedicatedstorageProtocol["CIFS"] = "CIFS";
    DedicatedstorageProtocol["NFS"] = "NFS";
    DedicatedstorageProtocol["NFS_CIFS"] = "NFS_CIFS";
})(DedicatedstorageProtocol = exports.DedicatedstorageProtocol || (exports.DedicatedstorageProtocol = {}));
/*
 * Distincts task
 */
var DedicatedstorageTaskFunction;
(function (DedicatedstorageTaskFunction) {
    DedicatedstorageTaskFunction["BACKUPRECURSIVEDESTROY"] = "backupRecursiveDestroy";
    DedicatedstorageTaskFunction["CLUSTERLECLERCACLUPDATE"] = "clusterLeclercAclUpdate";
    DedicatedstorageTaskFunction["CLUSTERLECLERCCHANGESERVICEIP"] = "clusterLeclercChangeServiceIp";
    DedicatedstorageTaskFunction["CLUSTERLECLERCCUSTOMSNAPCREATE"] = "clusterLeclercCustomSnapCreate";
    DedicatedstorageTaskFunction["CLUSTERLECLERCCUSTOMSNAPDELETE"] = "clusterLeclercCustomSnapDelete";
    DedicatedstorageTaskFunction["CLUSTERLECLERCDELETESNAPSHOTDIRECTORY"] = "clusterLeclercDeleteSnapshotDirectory";
    DedicatedstorageTaskFunction["CLUSTERLECLERCDESTROYNASCONTAINER"] = "clusterLeclercDestroyNasContainer";
    DedicatedstorageTaskFunction["CLUSTERLECLERCPARTITIONADD"] = "clusterLeclercPartitionAdd";
    DedicatedstorageTaskFunction["CLUSTERLECLERCPARTITIONDELETE"] = "clusterLeclercPartitionDelete";
    DedicatedstorageTaskFunction["CLUSTERLECLERCPARTITIONUPDATE"] = "clusterLeclercPartitionUpdate";
    DedicatedstorageTaskFunction["CLUSTERLECLERCQUOTAUPDATE"] = "clusterLeclercQuotaUpdate";
    DedicatedstorageTaskFunction["CLUSTERLECLERCSETUPNASCONTAINER"] = "clusterLeclercSetupNasContainer";
    DedicatedstorageTaskFunction["CLUSTERLECLERCSNAPSHOTUPDATE"] = "clusterLeclercSnapshotUpdate";
    DedicatedstorageTaskFunction["CLUSTERLECLERCZFSOPTIONS"] = "clusterLeclercZfsOptions";
    DedicatedstorageTaskFunction["NASACLUPDATE"] = "nasAclUpdate";
    DedicatedstorageTaskFunction["NASDELETESNAPSHOTDIRECTORY"] = "nasDeleteSnapshotDirectory";
    DedicatedstorageTaskFunction["NASPARTITIONADD"] = "nasPartitionAdd";
    DedicatedstorageTaskFunction["NASPARTITIONDELETE"] = "nasPartitionDelete";
    DedicatedstorageTaskFunction["NASPARTITIONUPDATE"] = "nasPartitionUpdate";
    DedicatedstorageTaskFunction["NASQUOTAUPDATE"] = "nasQuotaUpdate";
    DedicatedstorageTaskFunction["REMOTEBACKUPRECURSIVEDESTROY"] = "remoteBackupRecursiveDestroy";
})(DedicatedstorageTaskFunction = exports.DedicatedstorageTaskFunction || (exports.DedicatedstorageTaskFunction = {}));
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
class DedicatedNas {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the STORAGE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas#GET)
     */
    ListAvailableServices() {
        let url = `/dedicated/nas`;
        return this.client.request('GET', url);
    }
    /**
     * Storage nas [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/dedicated/nas/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Storage nas [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/dedicated/nas/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the dedicated.nas.Partition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition#GET)
     */
    GetPartitionList(serviceName) {
        let url = `/dedicated/nas/${serviceName}/partition`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nas.Partition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition#POST)
     */
    CreateANewPartition(partitionName, protocol, serviceName, size) {
        let url = `/dedicated/nas/${serviceName}/partition`;
        return this.client.request('POST', url, { partitionName, protocol, size });
    }
    /**
     * Storage partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#GET)
     */
    /*
    GetThisObjectProperties(partitionName: string, serviceName: string): Promise<DedicatednasPartition> {
      let url = `/dedicated/nas/${serviceName}/partition/${partitionName}`
  
      return this.client.request<DedicatednasPartition>('GET', url)
    }
    */
    /**
     * Storage partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(partitionName: string, serviceName: string, payload: DedicatednasPartition): Promise<void> {
      let url = `/dedicated/nas/${serviceName}/partition/${partitionName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Storage partition [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#DELETE)
     */
    DeleteThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.nas.Access objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access#GET)
     */
    GetACLForThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nas.Access objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access#POST)
     */
    AddAnAclToThisPartition(ip, partitionName, serviceName) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access`;
        return this.client.request('POST', url, { ip });
    }
    /**
     * Define Acl for partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasAccess> {
      let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access/${ip}`
  
      return this.client.request<DedicatednasAccess>('GET', url)
    }
    */
    /**
     * Define Acl for partition [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#DELETE)
     */
    DeleteAGivenSnapshot(ip, partitionName, serviceName) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/access/${ip}`;
        return this.client.request('DELETE', url);
    }
    /**
     * authorizableIps operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/authorizableIps#GET)
     */
    GetAllIPsThatCanBeUsedInTheACL(partitionName, serviceName) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/authorizableIps`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nas.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#GET)
     */
    GetQuotaForThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nas.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#POST)
     */
    SetANewQuota(partitionName, serviceName, size, uid) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota`;
        return this.client.request('POST', url, { size, uid });
    }
    /**
     * Partition Quota [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#GET)
     */
    /*
    GetThisObjectProperties(partitionName: string, serviceName: string, uid: number): Promise<DedicatednasQuota> {
      let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota/${uid}`
  
      return this.client.request<DedicatednasQuota>('GET', url)
    }
    */
    /**
     * Partition Quota [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#DELETE)
     */
    DeleteAGivenQuota(partitionName, serviceName, uid) {
        let url = `/dedicated/nas/${serviceName}/partition/${partitionName}/quota/${uid}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/dedicated/nas/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/dedicated/nas/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the dedicated.nasTask.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/task#GET)
     */
    ViewTaskList(serviceName, operation, status) {
        let url = `/dedicated/nas/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (operation) {
            queryParams.set('operation', operation.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.DedicatedNas = DedicatedNas;
//# sourceMappingURL=dedicated.nas.js.map