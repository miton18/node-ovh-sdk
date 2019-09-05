import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    value: T;
    unit: string;
}
export interface DedicatedhousingApcOrderable {
    orderable: boolean;
    free: boolean;
}
export declare enum DedicatedhousingDatacenterEnum {
    GSW = "gsw",
    PDC1 = "pdc1"
}
export declare enum DedicatedhousingHaRoutingOfferEnum {
    HA2X2 = "ha2x2",
    HA2X4 = "ha2x4"
}
export interface DedicatedhousingHaRoutingOrderable {
    offer: DedicatedhousingHaRoutingOfferEnum[];
    orderable: boolean;
}
export interface DedicatedhousingHousing {
    securityCode: string;
    rack: string;
    name: string;
    options: DedicatedhousingOptions;
    network: DedicatedhousingNetworkInfo[];
    datacenter?: DedicatedhousingDatacenterEnum;
}
export interface DedicatedhousingIpInfo {
    reservedAddresses?: string[];
    gateway?: string;
    network: string;
}
export interface DedicatedhousingLinkInfo {
    router: string;
    port: string;
}
export interface DedicatedhousingNetworkInfo {
    ipv6?: DedicatedhousingIpInfo;
    ipv4?: DedicatedhousingIpInfo;
    link?: DedicatedhousingLinkInfo;
}
export interface DedicatedhousingOptions {
    apcCount: number;
    highAvailabilityRouting: string;
    handsneyes: boolean;
}
export interface DedicatedhousingTask {
    taskId: number;
    comment?: string;
    status: DedicatedTaskStatusEnum;
    startDate: string;
    lastUpdate?: string;
    function: DedicatedhousingTaskFunctionEnum;
    doneDate?: string;
}
export declare enum DedicatedhousingTaskFunctionEnum {
    APPLYBACKUPFTPACLS = "applyBackupFtpAcls",
    APPLYBACKUPFTPQUOTA = "applyBackupFtpQuota",
    CHANGEPASSWORDBACKUPFTP = "changePasswordBackupFTP",
    CREATEBACKUPFTP = "createBackupFTP",
    MIGRATEBACKUPFTP = "migrateBackupFTP",
    REMOVEBACKUPFTP = "removeBackupFTP"
}
export interface DedicatedserverBackupFtp {
    type: DedicatedserverBackupStorageTypeEnum;
    usage?: any;
    ftpBackupName: string;
    readOnlyDate?: string;
    quota?: any;
}
export interface DedicatedserverBackupFtpAcl {
    lastUpdate: string;
    ftp: boolean;
    ipBlock: string;
    cifs: boolean;
    nfs: boolean;
    isApplied: boolean;
}
export declare enum DedicatedserverBackupStorageTypeEnum {
    INCLUDED = "included",
    STORAGE = "storage"
}
export interface DedicatedserverTask {
    function: DedicatedTaskFunctionEnum;
    doneDate?: string;
    startDate: string;
    lastUpdate?: string;
    taskId: number;
    comment?: string;
    status: DedicatedTaskStatusEnum;
}
export declare enum DedicatedTaskFunctionEnum {
    ADDVIRTUALMAC = "addVirtualMac",
    ADDWINDOWSPLAFROMEXISTINGSERIAL = "addWindowSplaFromExistingSerial",
    APPLYBACKUPFTPACLS = "applyBackupFtpAcls",
    APPLYBACKUPFTPQUOTA = "applyBackupFtpQuota",
    BYPASSANTIDDOSGAME = "bypassAntiDDosGame",
    CHANGEPASSWORDBACKUPFTP = "changePasswordBackupFTP",
    CHANGERIPEORG = "changeRipeOrg",
    CHECKANDRELEASEIP = "checkAndReleaseIp",
    CREATEBACKUPFTP = "createBackupFTP",
    CREATEORUPDATERIPEORG = "createOrUpdateRipeOrg",
    CREATEPRIVATENETWORK = "createPrivateNetwork",
    DISABLEFIREWALL = "disableFirewall",
    ENABLEFIREWALL = "enableFirewall",
    GENERICMOVEFLOATINGIP = "genericMoveFloatingIp",
    HARDREBOOT = "hardReboot",
    MIGRATEBACKUPFTP = "migrateBackupFTP",
    MOVEFLOATINGIP = "moveFloatingIp",
    MOVEVIRTUALMAC = "moveVirtualMac",
    REBOOTPOWER8TO = "rebootPower8To",
    REINSTALLSERVER = "reinstallServer",
    RELEASEIP = "releaseIp",
    REMOVEBACKUPFTP = "removeBackupFTP",
    REMOVEVIRTUALMAC = "removeVirtualMac",
    REQUESTACCESSIPMI = "requestAccessIPMI",
    RESETIPMI = "resetIPMI",
    RESETIPMISESSION = "resetIPMISession",
    TESTIPMIHTTP = "testIPMIhttp",
    TESTIPMIPASSWORD = "testIPMIpassword",
    TESTIPMIPING = "testIPMIping",
    VIRTUALMACADD = "virtualMacAdd",
    VIRTUALMACDELETE = "virtualMacDelete"
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
    automatic: boolean;
    forced: boolean;
    manualPayment?: boolean;
    deleteAtExpiration: boolean;
    period?: number;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesService {
    contactBilling: string;
    canDeleteAtExpiration: boolean;
    expiration: string;
    domain: string;
    serviceId: number;
    possibleRenewPeriod?: number[];
    status: ServiceStateEnum;
    renew?: ServiceRenewType;
    engagedUpTo?: string;
    creation: string;
    contactAdmin: string;
    renewalType: ServiceRenewalTypeEnum;
    contactTech: string;
}
export declare class DedicatedHousing {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<DedicatedhousingHousing>;
    CreateANewBackupFTPSpace(serviceName: string): Promise<DedicatedserverTask>;
    TerminateYourBackupFTPServiceALLDATAWILLBEPERMANENTLYDELETED(serviceName: string): Promise<DedicatedserverTask>;
    ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName: string): Promise<string[]>;
    CreateANewBackupFTPACL(cifs: boolean, ipBlock: string, nfs: boolean, serviceName: string, ftp?: boolean): Promise<DedicatedserverTask>;
    AlterThisObjectProperties(ipBlock: string, serviceName: string, payload: DedicatedserverBackupFtpAcl): Promise<void>;
    RevokeThisACL(ipBlock: string, serviceName: string): Promise<DedicatedserverTask>;
    GetAllIPBlocksThatCanBeUsedInTheACL(serviceName: string): Promise<string[]>;
    ChangeYourBackupFTPPassword(serviceName: string): Promise<DedicatedserverTask>;
    IsAnAPCOrderableForThisHousingBay(serviceName: string): Promise<DedicatedhousingApcOrderable>;
    ViewTaskList(serviceName: string, _function?: DedicatedhousingTaskFunctionEnum, status?: DedicatedTaskStatusEnum): Promise<number[]>;
    ThisActionStopTheTaskProgressionIfItPossible(serviceName: string, taskId: number): Promise<void>;
}
//# sourceMappingURL=dedicated.housing.d.ts.map