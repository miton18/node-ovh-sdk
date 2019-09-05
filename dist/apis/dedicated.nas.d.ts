import { Client } from '../client';
/**
 * Define Acl for partition
 */
export interface DedicatednasAccess {
    accessId: number;
    ip: string;
}
/**
 * Storage nas
 */
export interface DedicatednasNas {
    canCreatePartition: boolean;
    customName?: string;
    datacenter?: string;
    ip?: string;
    mountPath: string;
    serviceName: string;
    zpoolSize: number;
}
/**
 * Storage partition
 */
export interface DedicatednasPartition {
    partitionName: string;
    protocol: DedicatedstorageProtocol;
    size: number;
}
/**
 * Partition Quota
 */
export interface DedicatednasQuota {
    size: number;
    uid: number;
}
/**
 * Storage task
 */
export interface DedicatednasTaskTask {
    details?: string;
    doneDate?: string;
    lastUpdate?: string;
    operation: DedicatedstorageTaskFunction;
    partitionName?: string;
    status: DedicatedTaskStatus;
    storageName?: string;
    taskId: number;
    todoDate?: string;
}
export declare enum DedicatedstorageProtocol {
    CIFS = "CIFS",
    NFS = "NFS",
    NFS_CIFS = "NFS_CIFS"
}
export declare enum DedicatedstorageTaskFunction {
    BACKUPRECURSIVEDESTROY = "backupRecursiveDestroy",
    CLUSTERLECLERCACLUPDATE = "clusterLeclercAclUpdate",
    CLUSTERLECLERCCHANGESERVICEIP = "clusterLeclercChangeServiceIp",
    CLUSTERLECLERCCUSTOMSNAPCREATE = "clusterLeclercCustomSnapCreate",
    CLUSTERLECLERCCUSTOMSNAPDELETE = "clusterLeclercCustomSnapDelete",
    CLUSTERLECLERCDELETESNAPSHOTDIRECTORY = "clusterLeclercDeleteSnapshotDirectory",
    CLUSTERLECLERCDESTROYNASCONTAINER = "clusterLeclercDestroyNasContainer",
    CLUSTERLECLERCPARTITIONADD = "clusterLeclercPartitionAdd",
    CLUSTERLECLERCPARTITIONDELETE = "clusterLeclercPartitionDelete",
    CLUSTERLECLERCPARTITIONUPDATE = "clusterLeclercPartitionUpdate",
    CLUSTERLECLERCQUOTAUPDATE = "clusterLeclercQuotaUpdate",
    CLUSTERLECLERCSETUPNASCONTAINER = "clusterLeclercSetupNasContainer",
    CLUSTERLECLERCSNAPSHOTUPDATE = "clusterLeclercSnapshotUpdate",
    CLUSTERLECLERCZFSOPTIONS = "clusterLeclercZfsOptions",
    NASACLUPDATE = "nasAclUpdate",
    NASDELETESNAPSHOTDIRECTORY = "nasDeleteSnapshotDirectory",
    NASPARTITIONADD = "nasPartitionAdd",
    NASPARTITIONDELETE = "nasPartitionDelete",
    NASPARTITIONUPDATE = "nasPartitionUpdate",
    NASQUOTAUPDATE = "nasQuotaUpdate",
    REMOTEBACKUPRECURSIVEDESTROY = "remoteBackupRecursiveDestroy"
}
export declare enum DedicatedTaskStatus {
    CANCELLED = "cancelled",
    CUSTOMERERROR = "customerError",
    DOING = "doing",
    DONE = "done",
    INIT = "init",
    OVHERROR = "ovhError",
    TODO = "todo"
}
export declare enum ServiceRenewalType {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
    manualPayment?: boolean;
    period?: number;
}
export declare enum ServiceState {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
/**
 * Details about a Service
 */
export interface ServicesService {
    canDeleteAtExpiration: boolean;
    contactAdmin: string;
    contactBilling: string;
    contactTech: string;
    creation: string;
    domain: string;
    engagedUpTo?: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    renewalType: ServiceRenewalType;
    serviceId: number;
    status: ServiceState;
}
export declare class DedicatedNas {
    private client;
    constructor(client: Client);
    /**
     * Operations about the STORAGE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Storage nas [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<DedicatednasNas>;
    /**
     * Storage nas [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: DedicatednasNas): Promise<void>;
    /**
     * List the dedicated.nas.Partition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition#GET)
     */
    GetPartitionList(serviceName: string): Promise<string[]>;
    /**
     * List the dedicated.nas.Partition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition#POST)
     */
    CreateANewPartition(partitionName: string, protocol: DedicatedstorageProtocol, serviceName: string, size: number): Promise<DedicatednasTaskTask>;
    /**
     * Storage partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#GET)
     */
    /**
     * Storage partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#PUT)
     */
    /**
     * Storage partition [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D#DELETE)
     */
    DeleteThisPartition(partitionName: string, serviceName: string): Promise<DedicatednasTaskTask>;
    /**
     * List the dedicated.nas.Access objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access#GET)
     */
    GetACLForThisPartition(partitionName: string, serviceName: string): Promise<string[]>;
    /**
     * List the dedicated.nas.Access objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access#POST)
     */
    AddAnAclToThisPartition(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask>;
    /**
     * Define Acl for partition [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#GET)
     */
    /**
     * Define Acl for partition [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/access/%7Bip%7D#DELETE)
     */
    DeleteAGivenSnapshot(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask>;
    /**
     * authorizableIps operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/authorizableIps#GET)
     */
    GetAllIPsThatCanBeUsedInTheACL(partitionName: string, serviceName: string): Promise<string[]>;
    /**
     * List the dedicated.nas.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#GET)
     */
    GetQuotaForThisPartition(partitionName: string, serviceName: string): Promise<number[]>;
    /**
     * List the dedicated.nas.Quota objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota#POST)
     */
    SetANewQuota(partitionName: string, serviceName: string, size: number, uid: number): Promise<DedicatednasTaskTask>;
    /**
     * Partition Quota [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#GET)
     */
    /**
     * Partition Quota [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/partition/%7BpartitionName%7D/quota/%7Buid%7D#DELETE)
     */
    DeleteAGivenQuota(partitionName: string, serviceName: string, uid: number): Promise<DedicatednasTaskTask>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * List the dedicated.nasTask.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/nas/%7BserviceName%7D/task#GET)
     */
    ViewTaskList(serviceName: string, operation?: DedicatedstorageTaskFunction, status?: DedicatedTaskStatus): Promise<number[]>;
}
//# sourceMappingURL=dedicated.nas.d.ts.map