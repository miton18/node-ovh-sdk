import { Client } from '../client';
export interface MsServicesAccount {
    lastLogoffDate?: string;
    state: MsServicesObjectStateEnum;
    lastUpdateDate?: string;
    taskPendingId: number;
    lastName?: string;
    userPrincipalName: string;
    id: number;
    displayName?: string;
    SAMAccountName?: string;
    guid?: string;
    passwordLastUpdate?: string;
    lastLogonDate?: string;
    firstName?: string;
    creationDate?: string;
    initials?: string;
}
export interface MsServicesActiveDirectoryOrganizationalUnit {
    maxPasswordAge?: number;
    lockoutDuration: number;
    complexityEnabled: boolean;
    state: MsServicesServiceStateEnum;
    minPasswordAge?: number;
    taskPendingId: number;
    lockoutObservationWindow: number;
    minPasswordLength?: number;
    officeTenantServiceName?: string;
    name: string;
    lockoutThreshold?: number;
}
export interface MsServicesActiveDirectorySyncClientUrl {
    url: string;
    expiration: string;
}
export interface MsServicesExchangeInformation {
    exchangeGuid?: string;
    deleteOutlookAtExpiration?: boolean;
    spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration;
    id: number;
    currentUsage?: number;
    owaLimited: boolean;
    spamTicketNumber?: number;
    state: MsServicesObjectStateEnum;
    litigationPeriod?: number;
    mailingFilter?: MsServicesMailingFilterEnum[];
    primaryEmailAddress: string;
    expirationOutlookDate?: string;
    deleteAtExpiration?: boolean;
    renewOutlookPeriod?: MsServicesRenewPeriodEnum;
    accountLicense: MsServicesExchangeLicenceEnum;
    outlookLicense: boolean;
    litigation: boolean;
    taskPendingId: number;
    hiddenFromGAL: boolean;
    configured: boolean;
    spamDetected: boolean;
    expirationDate?: string;
    quota: number;
    creationDate?: string;
    renewPeriod?: MsServicesRenewPeriodEnum;
}
export declare enum MsServicesExchangeLicenceEnum {
    BASIC = "basic",
    ENTERPRISE = "enterprise",
    STANDARD = "standard"
}
export interface MsServicesExchangeService {
    displayName?: string;
    spamAndVirusConfiguration: MsServicesSpamAndVirusConfiguration;
    sslExpirationDate?: string;
    offer: MsServicesServiceOfferEnum;
    state: MsServicesServiceStateEnum;
    hostname?: string;
    maxReceiveSize: number;
    taskPendingId: number;
    domain: string;
    maxSendSize: number;
}
export interface MsServicesexchangeTask {
    status: MsServicesTaskStatusEnum;
    function: string;
    id: number;
    todoDate: string;
    finishDate?: string;
}
export declare enum MsServicesLicensePeriodEnum {
    LASTMONTH = "lastMonth",
    LASTQUARTER = "lastQuarter",
    LASTWEEK = "lastWeek",
    LASTYEAR = "lastYear"
}
export declare enum MsServicesMailingFilterEnum {
    VADERETRO = "vaderetro"
}
export interface MsServicesMfaInformation {
    taskPendingId: number;
    activated: boolean;
    state: MsServicesObjectStateEnum;
}
export declare enum MsServicesObjectStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    MODIFYING = "modifying",
    OK = "ok",
    REOPENING = "reopening",
    SUSPENDED = "suspended",
    SUSPENDING = "suspending"
}
export declare enum MsServicesRenewPeriodEnum {
    MONTHLY = "monthly",
    YEARLY = "yearly"
}
export declare enum MsServicesServiceOfferEnum {
    DEDICATED = "dedicated",
    DEDICATEDCLUSTER = "dedicatedCluster",
    HOSTED = "hosted",
    PROVIDER = "provider"
}
export declare enum MsServicesServiceStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    INMAINTENANCE = "inMaintenance",
    OK = "ok",
    REOPENING = "reopening",
    SUSPENDED = "suspended",
    SUSPENDING = "suspending"
}
export declare enum MsServicesSharepointAccountAccessRightsEnum {
    ADMINISTRATOR = "administrator",
    USER = "user"
}
export interface MsServicesSharepointAccountLicense {
    license: MsServicesSharepointLicenseEnum;
    licenseQuantity: number;
}
export interface MsServicesSharepointDailyLicense {
    date: string;
    accountLicense: MsServicesSharepointAccountLicense[];
}
export interface MsServicesSharepointInformation {
    taskPendingId: number;
    state: MsServicesObjectStateEnum;
    accessRights: MsServicesSharepointAccountAccessRightsEnum;
    activeDirectoryAccountId: number;
    id: number;
    currentUsage?: number;
    officeLicense: boolean;
    deleteAtExpiration?: boolean;
    license: MsServicesSharepointLicenseEnum;
    configured: boolean;
    quota: number;
}
export declare enum MsServicesSharepointLicenseEnum {
    FOUNDATION = "foundation",
    STANDARD = "standard"
}
export interface MsServicesSharepointService {
    quota: number;
    domain: string;
    displayName?: string;
    currentUsage?: number;
    farmUrl: string;
    url?: string;
    offer: MsServicesSharepointServiceOfferEnum;
    state: MsServicesServiceStateEnum;
    taskPendingId: number;
}
export interface MsServicesSharepointServiceInfo {
    domain: string;
}
export declare enum MsServicesSharepointServiceOfferEnum {
    HOSTED = "hosted",
    PROVIDER = "provider"
}
export interface MsServicessharepointTask {
    id: number;
    function: string;
    status: MsServicesTaskStatusEnum;
    todoDate: string;
    finishDate?: string;
}
export interface MsServicesSpamAndVirusConfiguration {
    checkSPF: boolean;
    checkDKIM: boolean;
    tagSpam: boolean;
    deleteVirus: boolean;
    putInJunk: boolean;
    deleteSpam: boolean;
    tagVirus: boolean;
}
export interface MsServicesSyncAccountLicense {
    license: MsServicesSyncLicenseEnum;
    licenseQuantity: number;
}
export interface MsServicesSyncDailyLicense {
    accountLicense: MsServicesSyncAccountLicense[];
    date: string;
}
export interface MsServicesSyncInformation {
    configured: boolean;
    state: MsServicesObjectStateEnum;
    license: MsServicesSyncLicenseEnum;
    taskPendingId: number;
}
export declare enum MsServicesSyncLicenseEnum {
    STANDARD = "standard",
    STANDARDFREE = "standardFree"
}
export interface MsServicesSyncService {
    state: MsServicesServiceStateEnum;
    taskPendingId: number;
}
export interface MsServicesTask {
    function: MsServicesTaskFunctionEnum;
    status: MsServicesTaskStatusEnum;
    id: number;
    finishDate?: string;
    todoDate: string;
}
export declare enum MsServicesTaskFunctionEnum {
    ACTIVATEADSYNC = "activateADSync",
    ACTIVATESHAREPOINT = "activateSharepoint",
    ADDADACCOUNT = "addADAccount",
    ADDADOU = "addADOU",
    ADDADSYNCACCOUNT = "addADSyncAccount",
    ADDADUPNSUFFIX = "addADUPNSuffix",
    ALTERMFAONALLUSERS = "alterMfaOnAllUsers",
    CHANGEADPASSWORD = "changeADPassword",
    CHANGEADSYNCPASSWORD = "changeADSyncPassword",
    CONFIGUREEXCHANGEOWAMFA = "configureExchangeOwaMfa",
    DEACTIVATEADSYNC = "deactivateADSync",
    DELADOU = "delADOU",
    DELETEADACCOUNT = "deleteADAccount",
    DELETEADSYNCACCOUNT = "deleteADSyncAccount",
    DELETEADUPNSUFFIX = "deleteADUPNSuffix",
    DISABLEADACCOUNTMFA = "disableADAccountMfa",
    DISABLEADACCOUNTMFATEMPORARY = "disableADAccountMfaTemporary",
    ENABLEADACCOUNTMFA = "enableADAccountMfa",
    ENABLEADSYNCACCOUNT = "enableADSyncAccount",
    GENERATEADSYNCCLIENTURL = "generateADSyncClientUrl",
    RESETADACCOUNTMFA = "resetADAccountMfa",
    SETADACCOUNT = "setADAccount",
    SETPASSWORDPOLICY = "setPasswordPolicy"
}
export declare enum MsServicesTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export declare enum MsServicesUPNStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    OK = "ok"
}
export interface MsServicesupnSuffix {
    ownershipValidated: boolean;
    taskPendingId: number;
    suffix: string;
    state: MsServicesUPNStateEnum;
    cnameToCheck?: string;
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
    period?: number;
    automatic: boolean;
    manualPayment?: boolean;
    forced: boolean;
    deleteAtExpiration: boolean;
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
    status: ServiceStateEnum;
    serviceId: number;
    contactTech: string;
    creation: string;
    renewalType: ServiceRenewalTypeEnum;
    renew?: ServiceRenewType;
    contactAdmin: string;
    engagedUpTo?: string;
    possibleRenewPeriod?: number[];
    expiration: string;
    domain: string;
    canDeleteAtExpiration: boolean;
}
export declare class MsServices {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<MsServicesActiveDirectoryOrganizationalUnit>;
    AlterThisObjectProperties(serviceName: string, payload: MsServicesActiveDirectoryOrganizationalUnit): Promise<void>;
    AccountsAssociatedToThisActiveDirectoryService(serviceName: string, id?: number, userPrincipalName?: string): Promise<string[]>;
    ChangeAccountPassword(password: string, serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    ConfigureMailboxToBeOperational(serviceName: string, userPrincipalName: string): Promise<MsServicesexchangeTask>;
    CreateMultiFactorAuthenticationForThisAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    DeleteMultiFactorAuthenticationFeatureForThisAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    DisableMultiFactorAuthenticationForAPeriodOfTime(period: number, serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    EnableMfaEnabledByDefaultWhenCreated(serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    ResetMultiFactorAuthenticationStatusForThisAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    OndemandMySiteClearance(serviceName: string, userPrincipalName: string): Promise<MsServicessharepointTask>;
    ConfigureSharepointAccountToBeOperational(serviceName: string, userPrincipalName: string): Promise<MsServicessharepointTask>;
    CreateNewSyncAccount(license: MsServicesSyncLicenseEnum, serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    DeleteSyncAccount(serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    ConfigureSyncAccountToBeOperational(serviceName: string, userPrincipalName: string): Promise<MsServicesTask>;
    CreateMfaOnAllAccounts(serviceName: string): Promise<MsServicesTask>;
    DetectsBillingTransitionStatusForTheService(serviceName: string): Promise<boolean>;
    PendingActions(serviceName: string): Promise<number[]>;
    RemoveMfaOnAllAccounts(serviceName: string): Promise<MsServicesTask>;
    GetActiveLicensesForSpecificPeriodOfTime(period: MsServicesLicensePeriodEnum, serviceName: string, license?: MsServicesSharepointLicenseEnum): Promise<MsServicesSharepointDailyLicense[]>;
    RestoreAdministratorRights(serviceName: string): Promise<MsServicessharepointTask>;
    DeleteSyncService(serviceName: string): Promise<MsServicesTask>;
    GenerateTemporaryLinkToADSyncSoftwareExecutable(serviceName: string): Promise<MsServicesTask>;
    ActiveDirectoryUPNSuffix(serviceName: string): Promise<string[]>;
    CreateNewUPNSuffix(serviceName: string, suffix: string): Promise<MsServicesTask>;
    DeleteExistingUPNSuffix(serviceName: string, suffix: string): Promise<MsServicesTask>;
}
//# sourceMappingURL=msServices.d.ts.map