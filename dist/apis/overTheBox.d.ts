import { Client } from '../client';
export declare enum OrderCurrencyCodeEnum {
    AUD = "AUD",
    CAD = "CAD",
    CZK = "CZK",
    EUR = "EUR",
    GBP = "GBP",
    LTL = "LTL",
    MAD = "MAD",
    N_A = "N/A",
    PLN = "PLN",
    SGD = "SGD",
    TND = "TND",
    USD = "USD",
    XOF = "XOF",
    POINTS = "points"
}
export interface OrderPrice {
    value: any;
    currencyCode: OrderCurrencyCodeEnum;
    text: string;
}
export declare enum OverTheBoxActionStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface OverTheBoxAvailableDeviceAction {
    description: string;
    name: string;
}
export interface OverTheBoxAvailableMigrationOffer {
    description: string;
    price: OrderPrice;
    hardwareAvailable: boolean;
    offer: string;
    currentOfferPrice: OrderPrice;
    engagementMonths: number;
}
export interface OverTheBoxBackup {
    createdAt: string;
    deviceActionId?: string;
    backupId: string;
}
export interface OverTheBoxDevice {
    activated: boolean;
    networkInterfaces: OverTheBoxDeviceInterface[];
    deviceId: string;
    publicIp: string;
    lastSeen: string;
    systemVersion: string;
    version: string;
}
export interface OverTheBoxDeviceAction {
    name: string;
    status: OverTheBoxActionStatusEnum;
    actionId: string;
    createdAt: string;
    details: string;
    todoDate: string;
    updatedAt: string;
}
export interface OverTheBoxDeviceForRegistration {
    lastSeen: string;
    deviceId: string;
    activated: boolean;
}
export interface OverTheBoxDeviceInterface {
    gateway?: string;
    name: string;
    dnsServers?: string[];
    device?: string;
    netmask?: string;
    publicIp?: string;
    ip?: string;
    multipathStatus: OverTheBoxMultipathStatusEnum;
}
export interface OverTheBoxGraphEndpoint {
    readToken: string;
    readTokenID: string;
    host: string;
}
export declare enum OverTheBoxMultipathStatusEnum {
    BACKUP = "backup",
    HANDOVER = "handover",
    MASTER = "master",
    OFF = "off",
    ON = "on"
}
export interface OverTheBoxRemoteAccess {
    exposedPort: number;
    accepted: boolean;
    status: OverTheBoxRemoteAccessStatusEnum;
    remoteUserInfos: OverTheBoxRemoteAccessUserInfos;
    expirationDate: string;
    askDate: string;
    authorizedBy?: string;
    remoteAccessId: string;
    connectionInfos: OverTheBoxRemoteAccessConnectionInfos;
}
export interface OverTheBoxRemoteAccessConnectionInfos {
    port?: number;
    ip?: string;
}
export declare enum OverTheBoxRemoteAccessStatusEnum {
    ACTIVE = "active",
    CREATING = "creating",
    DELETED = "deleted",
    DELETING = "deleting",
    PENDINGVALIDATION = "pendingValidation",
    TODELETE = "toDelete"
}
export interface OverTheBoxRemoteAccessUserInfos {
    publicKey?: string;
    user: string;
    ip: string;
}
export interface OverTheBoxService {
    status: OverTheBoxServiceStatusEnum;
    customerDescription?: string;
    graphEndpoint?: OverTheBoxGraphEndpoint;
    SOCKSProxyEnabled: boolean;
    releaseChannel: string;
    serviceName: string;
    tunnelMode: OverTheBoxTunnelModeEnum;
}
export declare enum OverTheBoxServiceStatusEnum {
    ACTIVE = "active",
    CREATING = "creating",
    DELETED = "deleted",
    SUSPENDED = "suspended",
    TOCREATE = "toCreate",
    TODELETE = "toDelete"
}
export interface OverTheBoxTask {
    taskId: string;
    status: OverTheBoxTaskStatusEnum;
    name: string;
}
export declare enum OverTheBoxTaskStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface OverTheBoxTemporaryLogsLink {
    url: string;
    expirationDate: string;
}
export declare enum OverTheBoxTunnelModeEnum {
    GLORYTUN = "glorytun",
    GLORYTUN_HYBRID = "glorytun_hybrid",
    GLORYTUN_MUD = "glorytun_mud"
}
export declare enum PriceOverTheBoxOfferEnum {
    PLUS_V1 = "plus.v1"
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
    deleteAtExpiration: boolean;
    manualPayment?: boolean;
    period?: number;
    automatic: boolean;
    forced: boolean;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesService {
    engagedUpTo?: string;
    expiration: string;
    status: ServiceStateEnum;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    contactTech: string;
    creation: string;
    canDeleteAtExpiration: boolean;
    contactBilling: string;
    domain: string;
    contactAdmin: string;
    serviceId: number;
    renewalType: ServiceRenewalTypeEnum;
}
export declare class OverTheBox {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<OverTheBoxService>;
    AlterThisObjectProperties(serviceName: string, payload: OverTheBoxService): Promise<void>;
    ResiliateAService(serviceName: string): Promise<void>;
    ListAvailableReleaseChannelsForThisService(serviceName: string): Promise<string[]>;
    ListOfBackupsForThisService(serviceName: string): Promise<string[]>;
    CancelTheResiliationOfTheService(serviceName: string): Promise<void>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    UnlinkADeviceFromAService(serviceName: string): Promise<void>;
    ListOfActionsScheduledForThisDevice(serviceName: string, name?: string, status?: OverTheBoxActionStatusEnum): Promise<string[]>;
    CreateADeviceActionOnTheDevice(name: string, serviceName: string): Promise<OverTheBoxDeviceAction>;
    ListTheAvailableDeviceActions(serviceName: string): Promise<OverTheBoxAvailableDeviceAction[]>;
    CreateAnActionToGenerateABackup(serviceName: string): Promise<OverTheBoxDeviceAction>;
    GenerateATemporaryUrlToRetrieveDeviceLogs(serviceName: string): Promise<OverTheBoxTemporaryLogsLink>;
    CreateAGroupOfActionsToRestoreAGivenBackup(backupId: string, serviceName: string): Promise<OverTheBoxDeviceAction[]>;
    LinkADeviceToThisService(deviceId: string, serviceName: string): Promise<void>;
    ListAllAvailableOffersOneCanMigrateTo(serviceName: string): Promise<OverTheBoxAvailableMigrationOffer[]>;
    ListOfRemoteAccessesForTheService(serviceName: string): Promise<string[]>;
    CreateANewRemoteAccessForTheService(exposedPort: number, serviceName: string, allowedIp?: string, expirationDate?: string, publicKey?: string): Promise<OverTheBoxRemoteAccess>;
    DeleteARemoteAccess(remoteAccessId: string, serviceName: string): Promise<void>;
    AuthorizeTheRemoteAccess(remoteAccessId: string, serviceName: string): Promise<void>;
    ListOfTasksScheduledForThisService(serviceName: string, name?: string, status?: OverTheBoxTaskStatusEnum): Promise<string[]>;
    ListTheAvailableOffersForTheNewCall(): Promise<PriceOverTheBoxOfferEnum[]>;
    GetTheListOfDevicesConnectedFromTheSameIPAddress(): Promise<OverTheBoxDeviceForRegistration[]>;
}
//# sourceMappingURL=overTheBox.d.ts.map