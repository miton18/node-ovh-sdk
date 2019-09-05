"use strict";
// GENERATED SDK for dedicated/nasha API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Nas HA localization
 */
var DedicatedNasHAZone;
(function (DedicatedNasHAZone) {
    DedicatedNasHAZone["BHS"] = "bhs";
    DedicatedNasHAZone["RBX"] = "rbx";
    DedicatedNasHAZone["SBG"] = "sbg";
})(DedicatedNasHAZone = exports.DedicatedNasHAZone || (exports.DedicatedNasHAZone = {}));
/*
 * Acl Type
 */
var DedicatedstorageAclType;
(function (DedicatedstorageAclType) {
    DedicatedstorageAclType["READONLY"] = "readonly";
    DedicatedstorageAclType["READWRITE"] = "readwrite";
})(DedicatedstorageAclType = exports.DedicatedstorageAclType || (exports.DedicatedstorageAclType = {}));
/*
 * Atime values
 */
var DedicatedstorageAtime;
(function (DedicatedstorageAtime) {
    DedicatedstorageAtime["OFF"] = "off";
    DedicatedstorageAtime["ON"] = "on";
})(DedicatedstorageAtime = exports.DedicatedstorageAtime || (exports.DedicatedstorageAtime = {}));
/*
 * Available types for NAS usage
 */
var DedicatedstorageNasUsageType;
(function (DedicatedstorageNasUsageType) {
    DedicatedstorageNasUsageType["SIZE"] = "size";
    DedicatedstorageNasUsageType["USED"] = "used";
    DedicatedstorageNasUsageType["USEDBYSNAPSHOTS"] = "usedbysnapshots";
})(DedicatedstorageNasUsageType = exports.DedicatedstorageNasUsageType || (exports.DedicatedstorageNasUsageType = {}));
/*
 * Available types for NAS partition usage
 */
var DedicatedstoragePartitionUsageType;
(function (DedicatedstoragePartitionUsageType) {
    DedicatedstoragePartitionUsageType["SIZE"] = "size";
    DedicatedstoragePartitionUsageType["USED"] = "used";
    DedicatedstoragePartitionUsageType["USEDBYSNAPSHOTS"] = "usedbysnapshots";
})(DedicatedstoragePartitionUsageType = exports.DedicatedstoragePartitionUsageType || (exports.DedicatedstoragePartitionUsageType = {}));
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
 * Partition snapshot allowed
 */
var DedicatedstorageSnapshot;
(function (DedicatedstorageSnapshot) {
    DedicatedstorageSnapshot["DAY_1"] = "day-1";
    DedicatedstorageSnapshot["DAY_2"] = "day-2";
    DedicatedstorageSnapshot["DAY_3"] = "day-3";
    DedicatedstorageSnapshot["DAY_7"] = "day-7";
    DedicatedstorageSnapshot["HOUR_1"] = "hour-1";
    DedicatedstorageSnapshot["HOUR_6"] = "hour-6";
})(DedicatedstorageSnapshot = exports.DedicatedstorageSnapshot || (exports.DedicatedstorageSnapshot = {}));
/*
 * Sync values
 */
var DedicatedstorageSync;
(function (DedicatedstorageSync) {
    DedicatedstorageSync["ALWAYS"] = "always";
    DedicatedstorageSync["DISABLED"] = "disabled";
    DedicatedstorageSync["STANDARD"] = "standard";
})(DedicatedstorageSync = exports.DedicatedstorageSync || (exports.DedicatedstorageSync = {}));
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
class DedicatedNasha {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the STORAGE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha#GET)
     */
    ListAvailableServices() {
        let url = `/dedicated/nasha`;
        return this.client.request('GET', url);
    }
    /**
     * Storage nas HA [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/dedicated/nasha/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Storage nas HA [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/dedicated/nasha/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/dedicated/nasha/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/dedicated/nasha/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the dedicated.nasha.Partition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition#GET)
     */
    GetPartitionList(serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nasha.Partition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition#POST)
     */
    CreateANewPartition(partitionName, protocol, serviceName, size) {
        let url = `/dedicated/nasha/${serviceName}/partition`;
        return this.client.request('POST', url, { partitionName, protocol, size });
    }
    /**
     * Storage zpool partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D#GET)
     */
    /*
    GetThisObjectProperties(partitionName: string, serviceName: string): Promise<DedicatednashaPartition> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}`
  
      return this.client.request<DedicatednashaPartition>('GET', url)
    }
    */
    /**
     * Storage zpool partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(partitionName: string, serviceName: string, payload: DedicatednashaPartition): Promise<void> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Storage zpool partition [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D#DELETE)
     */
    DeleteThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.nasha.Access objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access#GET)
     */
    GetACLForThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nasha.Access objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access#POST)
     */
    AddANewACLEntry(ip, partitionName, serviceName, type) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access`;
        return this.client.request('POST', url, { ip, type });
    }
    /**
     * Define Acl for partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, partitionName: string, serviceName: string): Promise<DedicatednashaAccess> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`
  
      return this.client.request<DedicatednashaAccess>('GET', url)
    }
    */
    /**
     * Define Acl for partition [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#DELETE)
     */
    DeleteAnACLEntry(ip, partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`;
        return this.client.request('DELETE', url);
    }
    /**
     * authorizableBlocks operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/authorizableBlocks#GET)
     */
    GetAllRIPEARINBlocksThatCanBeUsedInTheACL(partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableBlocks`;
        return this.client.request('GET', url);
    }
    /**
     * authorizableIps operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/authorizableIps#GET)
     */
    GetAllIPsThatCanBeUsedInTheACL(partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableIps`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nasha.customSnap objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot#GET)
     */
    GetCustomSnapshotsForThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nasha.customSnap objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot#POST)
     */
    CreateANewSnapshot(name, partitionName, serviceName, expiration) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`;
        return this.client.request('POST', url, { name, expiration });
    }
    /**
     * Custom Snapshot [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, partitionName: string, serviceName: string): Promise<DedicatednashacustomSnap> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot/${name}`
  
      return this.client.request<DedicatednashacustomSnap>('GET', url)
    }
    */
    /**
     * Custom Snapshot [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/customSnapshot/%7Bname%7D#DELETE)
     */
    DeleteAGivenSnapshot(name, partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot/${name}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Partition options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/options#GET)
     */
    /*
    GetThisObjectProperties(partitionName: string, serviceName: string): Promise<Dedicatednashaoptions> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/options`
  
      return this.client.request<Dedicatednashaoptions>('GET', url)
    }
    */
    /**
     * Partition options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/options#POST)
     */
    SetupOptions(partitionName, serviceName, atime, recordsize, sync) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/options`;
        return this.client.request('POST', url, { atime, recordsize, sync });
    }
    /**
     * List the dedicated.nasha.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#GET)
     */
    GetQuotaForThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nasha.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#POST)
     */
    SetANewQuota(partitionName, serviceName, size, uid) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`;
        return this.client.request('POST', url, { size, uid });
    }
    /**
     * Partition Quota [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#GET)
     */
    /*
    GetThisObjectProperties(partitionName: string, serviceName: string, uid: number): Promise<DedicatednashaQuota> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota/${uid}`
  
      return this.client.request<DedicatednashaQuota>('GET', url)
    }
    */
    /**
     * Partition Quota [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#DELETE)
     */
    DeleteAGivenQuota(partitionName, serviceName, uid) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/quota/${uid}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.nasha.Snapshot objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot#GET)
     */
    GetScheduledSnapshotTypesForThisPartition(partitionName, serviceName) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.nasha.Snapshot objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot#POST)
     */
    ScheduleANewSnapshotType(partitionName, serviceName, snapshotType) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`;
        return this.client.request('POST', url, { snapshotType });
    }
    /**
     * Partition Snapshot [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot/%7BsnapshotType%7D#GET)
     */
    /*
    GetThisObjectProperties(partitionName: string, serviceName: string, snapshotType: DedicatedstorageSnapshot): Promise<DedicatednashaSnapshot> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot/${snapshotType}`
  
      return this.client.request<DedicatednashaSnapshot>('GET', url)
    }
    */
    /**
     * Partition Snapshot [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/snapshot/%7BsnapshotType%7D#DELETE)
     */
    /*
    DeleteAGivenSnapshot(partitionName: string, serviceName: string, snapshotType: DedicatedstorageSnapshot): Promise<DedicatednasTaskTask> {
      let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot/${snapshotType}`
  
      return this.client.request<DedicatednasTaskTask>('DELETE', url)
    }
    */
    /**
     * use operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/partition/%7BpartitionName%7D/use#GET)
     */
    ReturnStatisticsAboutThePartition(partitionName, serviceName, type) {
        let url = `/dedicated/nasha/${serviceName}/partition/${partitionName}/use?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/dedicated/nasha/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/dedicated/nasha/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the dedicated.nasTask.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/task#GET)
     */
    ViewTaskList(serviceName, operation, status) {
        let url = `/dedicated/nasha/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (operation) {
            queryParams.set('operation', operation.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Storage task [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatednasTaskTask> {
      let url = `/dedicated/nasha/${serviceName}/task/${taskId}`
  
      return this.client.request<DedicatednasTaskTask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/dedicated/nasha/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * use operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/use#GET)
     */
    ReturnStatisticsAboutTheNas(serviceName, type) {
        let url = `/dedicated/nasha/${serviceName}/use?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Partition Vrack [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/%7BserviceName%7D/vrack#DELETE)
     */
    DeleteTheVrackContainer(serviceName) {
        let url = `/dedicated/nasha/${serviceName}/vrack`;
        return this.client.request('DELETE', url);
    }
    /**
     * Get availabilities of nasha offer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nasha/availabilities#GET)
     */
    GetAvailabilitiesOfNashaOffer() {
        let url = `/dedicated/nasha/availabilities`;
        return this.client.request('GET', url);
    }
}
exports.DedicatedNasha = DedicatedNasha;
//# sourceMappingURL=dedicated.nasha.js.map