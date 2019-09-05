import { Client } from '../client';
export interface EmailproAccount {
    spamDetected: boolean;
    id: number;
    lastUpdateDate?: string;
    currentUsage?: number;
    renewPeriod?: EmailprorenewPeriodEnum;
    state: EmailproObjectStateEnum;
    lastLogonDate?: string;
    creationDate?: string;
    domain: string;
    spamAndVirusConfiguration: EmailprospamAndVirusConfiguration;
    expirationOutlookDate?: string;
    firstName?: string;
    spamTicketNumber?: number;
    SAMAccountName?: string;
    mailingFilter?: EmailproMailingFilterEnum[];
    primaryEmailAddress: string;
    taskPendingId: number;
    hiddenFromGAL: boolean;
    lastLogoffDate?: string;
    expirationDate?: string;
    quota: number;
    displayName?: string;
    deleteAtExpiration?: boolean;
    login: string;
    lastName?: string;
    initial?: string;
    configured: boolean;
    passwordLastUpdate?: string;
}
export interface EmailproAccountAlias {
    creationDate: string;
    alias: string;
    taskPendingId: number;
}
export interface EmailproAccountDiagnosis {
    isSpammer: boolean;
    isLocked: boolean;
    canReceiveEmail: boolean;
    canSendEmail: boolean;
    lastCheck: string;
    isMxValid: boolean;
    isSrvValid: boolean;
    connectiveWebmail: boolean;
    isSuspended: boolean;
}
export interface EmailproAccountFullAccess {
    taskPendingId: number;
    creationDate: string;
    allowedAccountId: number;
}
export interface EmailproAccountSendAs {
    taskPendingId: number;
    creationDate: string;
    allowedAccountId: number;
}
export interface EmailproAccountSendOnBehalfTo {
    allowedAccountId: number;
    taskPendingId: number;
    creationDate: string;
}
export interface Emailprodisclaimer {
    creationDate: string;
    taskPendingId: number;
    name: string;
    outsideOnly: boolean;
    content: string;
}
export declare enum EmailproDisclaimerAttributeEnum {
    CITY = "City",
    COMPANY = "Company",
    COUNTRY = "Country",
    DEPARTMENT = "Department",
    DISPLAYNAME = "DisplayName",
    EMAIL = "Email",
    FAXNUMBER = "FaxNumber",
    FIRSTNAME = "FirstName",
    HOMEPHONENUMBER = "HomePhoneNumber",
    INITIALS = "Initials",
    LASTNAME = "LastName",
    MANAGER = "Manager",
    MOBILENUMBER = "MobileNumber",
    NOTES = "Notes",
    OFFICE = "Office",
    OTHERFAXNUMBER = "OtherFaxNumber",
    OTHERHOMEPHONENUMBER = "OtherHomePhoneNumber",
    OTHERPHONENUMBER = "OtherPhoneNumber",
    PAGERNUMBER = "PagerNumber",
    PHONENUMBER = "PhoneNumber",
    STATE = "State",
    STREET = "Street",
    TITLE = "Title",
    USERLOGONNAME = "UserLogonName",
    ZIPCODE = "ZipCode"
}
export interface EmailproDomain {
    mxRecord?: string[];
    state: EmailproObjectStateEnum;
    srvRecord?: string[];
    taskPendingId: number;
    mxIsValid: boolean;
    cnameToCheck?: string;
    mxRelay?: string;
    domainAliases: string[];
    srvIsValid: boolean;
    name: string;
    domainValidated: boolean;
    type: EmailproDomainTypeEnum;
    isAliasDomain: boolean;
}
export declare enum EmailproDomainTypeEnum {
    AUTHORITATIVE = "authoritative",
    NONAUTHORITATIVE = "nonAuthoritative"
}
export interface EmailproExternalContact {
    firstName?: string;
    lastName?: string;
    externalEmailAddress: string;
    displayName: string;
    creationDate: string;
    initials?: string;
    hiddenFromGAL: boolean;
    taskPendingId: number;
    id: number;
    state: EmailproObjectStateEnum;
}
export declare enum EmailproMailingFilterEnum {
    VADERETRO = "vaderetro"
}
export declare enum EmailproObjectStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    OK = "ok",
    REOPENING = "reopening",
    SUSPENDED = "suspended",
    SUSPENDING = "suspending",
    UNKNOWN = "unknown"
}
export declare enum EmailprorenewPeriodEnum {
    MONTHLY = "monthly",
    YEARLY = "yearly"
}
export interface EmailproServer {
    isAaaaValid: boolean;
    isPtrValid: boolean;
    version?: number;
    taskPendingId: number;
    isAValid: boolean;
    ip: string;
    state: EmailproServerStateEnum;
    diskSize?: number;
    ipV6?: string;
    isPtrV6Valid: boolean;
    currentDiskUsage?: number;
}
export declare enum EmailproServerStateEnum {
    CONFIGURATIONPENDING = "configurationPending",
    NOTCONFIGURED = "notConfigured",
    OK = "ok"
}
export interface EmailproService {
    domain: string;
    spamAndVirusConfiguration: EmailprospamAndVirusConfiguration;
    maxSendSize: number;
    state: EmailproServiceStateEnum;
    lastUpdateDate?: string;
    maxPasswordAge?: number;
    displayName?: string;
    minPasswordAge?: number;
    lockoutObservationWindow: number;
    hostname?: string;
    taskPendingId: number;
    minPasswordLength?: number;
    complexityEnabled: boolean;
    webUrl?: string;
    lockoutThreshold?: number;
    lockoutDuration: number;
    offer: EmailproServiceOfferEnum;
    maxReceiveSize: number;
}
export declare enum EmailproServiceOfferEnum {
    EMAILPRO = "emailpro"
}
export declare enum EmailproServiceStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    INMAINTENANCE = "inMaintenance",
    OK = "ok",
    REOPENING = "reopening",
    SUSPENDED = "suspended",
    SUSPENDING = "suspending"
}
export interface EmailprospamAndVirusConfiguration {
    checkSPF: boolean;
    tagVirus: boolean;
    putInJunk: boolean;
    tagSpam: boolean;
    deleteSpam: boolean;
    checkDKIM: boolean;
    deleteVirus: boolean;
}
export interface EmailproTask {
    finishDate?: string;
    id: number;
    todoDate: string;
    status: EmailproTaskStatusEnum;
    function: EmailproTaskFunctionEnum;
}
export declare enum EmailproTaskFunctionEnum {
    ADDACCOUNT = "addAccount",
    ADDALIAS = "addAlias",
    ADDDOMAIN = "addDomain",
    ADDDOMAINDISCLAIMER = "addDomainDisclaimer",
    ADDEXTERNALCONTACT = "addExternalContact",
    ADDFULLACCESS = "addFullAccess",
    ADDSENDAS = "addSendAs",
    ADDSENDONBEHALFTO = "addSendOnBehalfTo",
    ADDSERVICEAUTHORIZEDIP = "addServiceAuthorizedIp",
    CHANGEHOSTNAME = "changeHostname",
    CHANGEPASSWORD = "changePassword",
    CONFIGURECUSTOMER = "configureCustomer",
    DELETEACCOUNT = "deleteAccount",
    DELETEALIAS = "deleteAlias",
    DELETEDOMAIN = "deleteDomain",
    DELETEDOMAINDISCLAIMER = "deleteDomainDisclaimer",
    DELETEEXTERNALCONTACT = "deleteExternalContact",
    DELETEFULLACCESS = "deleteFullAccess",
    DELETESENDAS = "deleteSendAs",
    DELETESENDONBEHALFTO = "deleteSendOnBehalfTo",
    DELETESERVICE = "deleteService",
    DELETESERVICEAUTHORIZEDIP = "deleteServiceAuthorizedIp",
    DIAGNOSEACCOUNT = "diagnoseAccount",
    EXPANDDRIVE = "expandDrive",
    INSTALLSERVER = "installServer",
    MAINTENANCE = "maintenance",
    MIGRATEACCOUNTVIAOMM = "migrateAccountViaOMM",
    MIGRATIONACCOUNT = "migrationAccount",
    MIGRATIONDISCLAIMER = "migrationDisclaimer",
    MIGRATIONEXTERNALCONTACT = "migrationExternalContact",
    MIGRATIONHISTORY = "migrationHistory",
    MIGRATIONSERVICE = "migrationService",
    REOPENACCOUNT = "reOpenAccount",
    SETACCOUNT = "setAccount",
    SETALIAS = "setAlias",
    SETDNS = "setDns",
    SETDOMAIN = "setDomain",
    SETDOMAINDISCLAIMER = "setDomainDisclaimer",
    SETEXTERNALCONTACT = "setExternalContact",
    SETSERVICE = "setService",
    SUSPENDACCOUNT = "suspendAccount",
    SUSPENDSERVICE = "suspendService",
    UNKNOWN = "unknown",
    UNSUSPENDACCOUNT = "unsuspendAccount",
    UNSUSPENDSERVICE = "unsuspendService"
}
export declare enum EmailproTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
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
    deleteAtExpiration: boolean;
    automatic: boolean;
    manualPayment?: boolean;
    period?: number;
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
    contactBilling: string;
    creation: string;
    renewalType: ServiceRenewalTypeEnum;
    contactTech: string;
    contactAdmin: string;
    canDeleteAtExpiration: boolean;
    renew?: ServiceRenewType;
    serviceId: number;
    status: ServiceStateEnum;
    engagedUpTo?: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    domain: string;
}
export declare class EmailPro {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(service: string): Promise<EmailproService>;
    AlterThisObjectProperties(service: string, payload: EmailproService): Promise<void>;
    AccountsAssociatedToThisProService(service: string, id?: number, primaryEmailAddress?: string): Promise<string[]>;
    DeleteExistingMailboxInProServer(email: string, service: string): Promise<EmailproTask>;
    AliasesAssociatedToThisMailbox(email: string, service: string): Promise<string[]>;
    CreateNewAlias(alias: string, email: string, service: string): Promise<EmailproTask>;
    DeleteExistingAlias(alias: string, email: string, service: string): Promise<EmailproTask>;
    ChangeMailboxPassword(email: string, password: string, service: string): Promise<EmailproTask>;
    CreateNewDiagnosisRequest(email: string, password: string, service: string): Promise<EmailproTask>;
    FullAccessGrantedUsersForThisMailbox(email: string, service: string): Promise<number[]>;
    AllowFullAccessToAUser(allowedAccountId: number, email: string, service: string): Promise<EmailproTask>;
    RevokeFullAccess(allowedAccountId: number, email: string, service: string): Promise<EmailproTask>;
    SendAsGrantedUsersForThisMailbox(email: string, service: string): Promise<number[]>;
    AllowAnotherUserToSendMailsFromThisMailbox(allowAccountId: number, email: string, service: string): Promise<EmailproTask>;
    DeleteAllowedUserForSendAs(allowedAccountId: number, email: string, service: string): Promise<EmailproTask>;
    SendOnBehalfToGrantedUsersForThisMailbox(email: string, service: string): Promise<number[]>;
    AllowAnotherUserToSendOnBehalfToMailsFromThisMailbox(allowAccountId: number, email: string, service: string): Promise<EmailproTask>;
    DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, email: string, service: string): Promise<EmailproTask>;
    PendingTaskForThisMailbox(email: string, service: string): Promise<number[]>;
    TerminateAccountAtExpirationDate(email: string, service: string): Promise<string>;
    DetectsBillingTransitionStatusForTheService(service: string): Promise<boolean>;
    EmailproBillingPlan(service: string): Promise<string>;
    DomainsAssociatedToThisService(service: string, state?: EmailproObjectStateEnum): Promise<string[]>;
    CreateNewDomainInProServices(name: string, service: string, type: EmailproDomainTypeEnum, configureAutodiscover?: boolean, configureMx?: boolean, mxRelay?: string): Promise<EmailproTask>;
    DeleteExistingDomainInProServices(domainName: string, service: string): Promise<EmailproTask>;
    CreateOrganizationDisclaimerOfEachEmail(content: string, domainName: string, service: string, outsideOnly?: boolean): Promise<EmailproTask>;
    DeleteExistingOrganizationDisclaimer(domainName: string, service: string): Promise<EmailproTask>;
    GetDiclaimerAttributesToSubstituteWithActiveDirectoryProperties(domainName: string, service: string): Promise<EmailproDisclaimerAttributeEnum[]>;
    ExternalContactsForThisService(service: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string): Promise<string[]>;
    CreateNewExternalContact(externalEmailAddress: string, service: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string): Promise<EmailproTask>;
    DeleteExternalContact(externalEmailAddress: string, service: string): Promise<EmailproTask>;
    PendingActions(service: string): Promise<number[]>;
    UpdateSpamAndVirusFlagsOnAllActiveAccounts(service: string): Promise<void>;
}
//# sourceMappingURL=email.pro.d.ts.map