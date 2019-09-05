import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export interface DedicatednashaAccess {
    type: DedicatedstorageAclTypeEnum;
    ip: string;
    accessId: number;
}
export interface DedicatednashacustomSnap {
    expiration?: string;
    name: string;
}
export interface Dedicatednashaoptions {
    sync: string;
    atime: string;
    recordsize: string;
    id: number;
}
export interface DedicatednashaPartition {
    partitionName: string;
    size: number;
    protocol: DedicatedstorageProtocolEnum;
    usedBySnapshots?: number;
    partitionCapacity?: number;
}
export interface DedicatednashaQuota {
    size: number;
    uid: number;
}
export interface DedicatednashaSnapshot {
    snapshotType: DedicatedstorageSnapshotEnum;
}
export interface DedicatednashaStorage {
    monitored: boolean;
    datacenter?: string;
    ip?: string;
    zpoolSize: number;
    zpoolCapacity: number;
    customName?: string;
    serviceName: string;
    canCreatePartition: boolean;
}
export interface DedicatednashaVrack {
    serviceIp: any;
    vrackName: string;
    id: number;
    type: string;
}
export interface DedicatedNasHAAvailabilities {
    offer: DedicatedNasHAOfferEnum;
    datacenters: DedicatedNasHAAvailabilityDatacenter[];
}
export interface DedicatedNasHAAvailabilityDatacenter {
    datacenter: DedicatedNasHAZoneEnum;
    availability: DedicatedNasHAAvailabilityEnum;
}
export declare type DedicatedNasHAAvailabilityEnum = '1H' | '240H' | '24H' | '72H' | 'unknown';
export declare type DedicatedNasHAOfferEnum = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g';
export declare enum DedicatedNasHAZoneEnum {
    BHS = "bhs",
    RBX = "rbx",
    SBG = "sbg"
}
export interface DedicatednasTaskTask {
    details?: string;
    status: DedicatedTaskStatusEnum;
    operation: DedicatedstorageTaskFunctionEnum;
    taskId: number;
    storageName?: string;
    todoDate?: string;
    doneDate?: string;
    lastUpdate?: string;
    partitionName?: string;
}
export declare enum DedicatedstorageAclTypeEnum {
    READONLY = "readonly",
    READWRITE = "readwrite"
}
export declare enum DedicatedstorageAtimeEnum {
    OFF = "off",
    ON = "on"
}
export declare enum DedicatedstorageNasUsageTypeEnum {
    SIZE = "size",
    USED = "used",
    USEDBYSNAPSHOTS = "usedbysnapshots"
}
export declare enum DedicatedstoragePartitionUsageTypeEnum {
    SIZE = "size",
    USED = "used",
    USEDBYSNAPSHOTS = "usedbysnapshots"
}
export declare enum DedicatedstorageProtocolEnum {
    CIFS = "CIFS",
    NFS = "NFS",
    NFS_CIFS = "NFS_CIFS"
}
export declare type DedicatedstorageRecordSizeEnum = '131072' | '16384' | '32768' | '4096' | '65536' | '8192';
export declare enum DedicatedstorageSnapshotEnum {
    DAY_1 = "day-1",
    DAY_2 = "day-2",
    DAY_3 = "day-3",
    DAY_7 = "day-7",
    HOUR_1 = "hour-1",
    HOUR_6 = "hour-6"
}
export declare enum DedicatedstorageSyncEnum {
    ALWAYS = "always",
    DISABLED = "disabled",
    STANDARD = "standard"
}
export declare enum DedicatedstorageTaskFunctionEnum {
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
export declare enum DedicatedTaskStatusEnum {
    CANCELLED = "cancelled",
    CUSTOMERERROR = "customerError",
    DOING = "doing",
    DONE = "done",
    INIT = "init",
    OVHERROR = "ovhError",
    TODO = "todo"
}
export declare enum ServiceRenewalTypeEnum {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
export interface ServiceRenewType {
    manualPayment?: boolean;
    deleteAtExpiration: boolean;
    automatic: boolean;
    forced: boolean;
    period?: number;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export declare enum ServiceTerminationFutureUseEnum {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReasonEnum {
    FEATURES_DONT_SUIT_ME = "FEATURES_DONT_SUIT_ME",
    LACK_OF_PERFORMANCES = "LACK_OF_PERFORMANCES",
    MIGRATED_TO_ANOTHER_OVH_PRODUCT = "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
    MIGRATED_TO_COMPETITOR = "MIGRATED_TO_COMPETITOR",
    NOT_ENOUGH_RECOGNITION = "NOT_ENOUGH_RECOGNITION",
    NOT_NEEDED_ANYMORE = "NOT_NEEDED_ANYMORE",
    NOT_RELIABLE = "NOT_RELIABLE",
    NO_ANSWER = "NO_ANSWER",
    OTHER = "OTHER",
    PRODUCT_DIMENSION_DONT_SUIT_ME = "PRODUCT_DIMENSION_DONT_SUIT_ME",
    PRODUCT_TOOLS_DONT_SUIT_ME = "PRODUCT_TOOLS_DONT_SUIT_ME",
    TOO_EXPENSIVE = "TOO_EXPENSIVE",
    TOO_HARD_TO_USE = "TOO_HARD_TO_USE",
    UNSATIFIED_BY_CUSTOMER_SUPPORT = "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export interface ServicesService {
    domain: string;
    status: ServiceStateEnum;
    contactAdmin: string;
    contactTech: string;
    renew?: ServiceRenewType;
    creation: string;
    contactBilling: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    canDeleteAtExpiration: boolean;
    engagedUpTo?: string;
    renewalType: ServiceRenewalTypeEnum;
    serviceId: number;
}
export declare class DedicatedNasha {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<DedicatednashaStorage>;
    AlterThisObjectProperties(serviceName: string, payload: DedicatednashaStorage): Promise<void>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    GetPartitionList(serviceName: string): Promise<string[]>;
    CreateANewPartition(partitionName: string, protocol: DedicatedstorageProtocolEnum, serviceName: string, size: number): Promise<DedicatednasTaskTask>;
    DeleteThisPartition(partitionName: string, serviceName: string): Promise<DedicatednasTaskTask>;
    GetACLForThisPartition(partitionName: string, serviceName: string): Promise<string[]>;
    AddANewACLEntry(ip: string, partitionName: string, serviceName: string, type?: DedicatedstorageAclTypeEnum): Promise<DedicatednasTaskTask>;
    DeleteAnACLEntry(ip: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask>;
    GetAllRIPEARINBlocksThatCanBeUsedInTheACL(partitionName: string, serviceName: string): Promise<string[]>;
    GetAllIPsThatCanBeUsedInTheACL(partitionName: string, serviceName: string): Promise<string[]>;
    GetCustomSnapshotsForThisPartition(partitionName: string, serviceName: string): Promise<string[]>;
    CreateANewSnapshot(name: string, partitionName: string, serviceName: string, expiration?: string): Promise<DedicatednasTaskTask>;
    DeleteAGivenSnapshot(name: string, partitionName: string, serviceName: string): Promise<DedicatednasTaskTask>;
    SetupOptions(partitionName: string, serviceName: string, atime?: DedicatedstorageAtimeEnum, recordsize?: DedicatedstorageRecordSizeEnum, sync?: DedicatedstorageSyncEnum): Promise<DedicatednasTaskTask>;
    GetQuotaForThisPartition(partitionName: string, serviceName: string): Promise<number[]>;
    SetANewQuota(partitionName: string, serviceName: string, size: number, uid: number): Promise<DedicatednasTaskTask>;
    DeleteAGivenQuota(partitionName: string, serviceName: string, uid: number): Promise<DedicatednasTaskTask>;
    GetScheduledSnapshotTypesForThisPartition(partitionName: string, serviceName: string): Promise<DedicatedstorageSnapshotEnum[]>;
    ScheduleANewSnapshotType(partitionName: string, serviceName: string, snapshotType: DedicatedstorageSnapshotEnum): Promise<DedicatednasTaskTask>;
    ReturnStatisticsAboutThePartition(partitionName: string, serviceName: string, type: DedicatedstoragePartitionUsageTypeEnum): Promise<any>;
    ViewTaskList(serviceName: string, operation?: DedicatedstorageTaskFunctionEnum, status?: DedicatedTaskStatusEnum): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    ReturnStatisticsAboutTheNas(serviceName: string, type: DedicatedstorageNasUsageTypeEnum): Promise<any>;
    DeleteTheVrackContainer(serviceName: string): Promise<DedicatednasTaskTask>;
    GetAvailabilitiesOfNashaOffer(): Promise<DedicatedNasHAAvailabilities[]>;
}
//# sourceMappingURL=dedicated.nasha.d.ts.map