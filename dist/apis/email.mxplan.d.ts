import { Client } from '../client';
export interface EmailmxplanAccount {
    quota: any;
    domain: string;
    creationDate?: string;
    expirationDate?: string;
    lastName?: string;
    displayName?: string;
    renewPeriod?: EmailprorenewPeriodEnum;
    lastUpdateDate?: string;
    login: string;
    lastLogoffDate?: string;
    SAMAccountName?: string;
    mailingFilter?: EmailproMailingFilterEnum[];
    spamDetected: boolean;
    deleteAtExpiration?: boolean;
    spamAndVirusConfiguration: EmailprospamAndVirusConfiguration;
    firstName?: string;
    primaryEmailAddress: string;
    state: EmailproObjectStateEnum;
    initial?: string;
    hiddenFromGAL: boolean;
    passwordLastUpdate?: string;
    id: number;
    currentUsage?: number;
    expirationOutlookDate?: string;
    configured: boolean;
    lastLogonDate?: string;
    spamTicketNumber?: number;
    taskPendingId: number;
}
export interface EmailmxplanAccountAlias {
    creationDate: string;
    alias: string;
    taskPendingId: number;
}
export interface EmailmxplanaccountCapabilities {
    quotas?: any;
}
export interface EmailmxplanAccountDiagnosis {
    connectiveWebmail: boolean;
    isSrvValid: boolean;
    isMxValid: boolean;
    canReceiveEmail: boolean;
    isLocked: boolean;
    canSendEmail: boolean;
    isSuspended: boolean;
    isSpammer: boolean;
    lastCheck: string;
}
export interface EmailmxplanAccountFullAccess {
    creationDate: string;
    taskPendingId: number;
    allowedAccountId: number;
}
export interface EmailmxplanAccountSendAs {
    creationDate: string;
    taskPendingId: number;
    allowedAccountId: number;
}
export interface EmailmxplanAccountSendOnBehalfTo {
    creationDate: string;
    allowedAccountId: number;
    taskPendingId: number;
}
export interface EmailmxplanDomain {
    srvIsValid: boolean;
    type: EmailproDomainTypeEnum;
    state: EmailproObjectStateEnum;
    domainValidated: boolean;
    isAliasDomain: boolean;
    cnameToCheck?: string;
    mxRecord: string[];
    taskPendingId: number;
    srvRecord: string[];
    mxIsValid: boolean;
    name: string;
    mxRelay?: string;
    domainAliases: string[];
}
export interface EmailmxplanExternalContact {
    id: number;
    hiddenFromGAL: boolean;
    taskPendingId: number;
    firstName?: string;
    lastName?: string;
    creationDate: string;
    externalEmailAddress: string;
    displayName: string;
    state: EmailproObjectStateEnum;
    initials?: string;
}
export interface EmailmxplanServer {
    ipV6?: string;
    isAValid: boolean;
    taskPendingId: number;
    isPtrV6Valid: boolean;
    isPtrValid: boolean;
    diskSize?: number;
    ip: string;
    state: EmailproServerStateEnum;
    version?: number;
    isAaaaValid: boolean;
    currentDiskUsage?: number;
}
export interface EmailmxplanService {
    maxSendSize: number;
    webUrl?: string;
    lastUpdateDate?: string;
    minPasswordLength?: number;
    minPasswordAge?: number;
    displayName?: string;
    domain: string;
    maxReceiveSize: number;
    hostname?: string;
    offer: EmailmxplanServiceOfferEnum;
    lockoutThreshold?: number;
    complexityEnabled: boolean;
    state: EmailproServiceStateEnum;
    lockoutObservationWindow: number;
    lockoutDuration: number;
    spamAndVirusConfiguration: EmailprospamAndVirusConfiguration;
    taskPendingId: number;
    maxPasswordAge?: number;
}
export declare enum EmailmxplanServiceOfferEnum {
    MXPLAN = "MXPLAN"
}
export interface Emailprodisclaimer {
    outsideOnly: boolean;
    content: string;
    taskPendingId: number;
    name: string;
    creationDate: string;
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
export declare enum EmailproDomainTypeEnum {
    AUTHORITATIVE = "authoritative",
    NONAUTHORITATIVE = "nonAuthoritative"
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
export declare enum EmailproServerStateEnum {
    CONFIGURATIONPENDING = "configurationPending",
    NOTCONFIGURED = "notConfigured",
    OK = "ok"
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
    tagVirus: boolean;
    deleteVirus: boolean;
    checkDKIM: boolean;
    putInJunk: boolean;
    tagSpam: boolean;
    deleteSpam: boolean;
    checkSPF: boolean;
}
export interface EmailproTask {
    id: number;
    function: EmailproTaskFunctionEnum;
    finishDate?: string;
    status: EmailproTaskStatusEnum;
    todoDate: string;
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
export declare class EmailMxplan {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(service: string): Promise<EmailmxplanService>;
    AlterThisObjectProperties(service: string, payload: EmailmxplanService): Promise<void>;
    AccountsAssociatedToThisMxplanService(service: string, id?: number, primaryEmailAddress?: string): Promise<string[]>;
    DeleteExistingMailboxInMxplanServer(email: string, service: string): Promise<EmailproTask>;
    AliasesAssociatedToThisMailbox(email: string, service: string): Promise<string[]>;
    CreateNewAlias(alias: string, email: string, service: string): Promise<EmailproTask>;
    DeleteExistingAlias(alias: string, email: string, service: string): Promise<EmailproTask>;
    GetAvailableCapabilitiesForThisAccount(email: string, service: string): Promise<EmailmxplanaccountCapabilities>;
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
    DomainsAssociatedToThisService(service: string, state?: EmailproObjectStateEnum): Promise<string[]>;
    CreateOrganizationDisclaimerOfEachEmail(content: string, domainName: string, service: string, outsideOnly?: boolean): Promise<EmailproTask>;
    DeleteExistingOrganizationDisclaimer(domainName: string, service: string): Promise<EmailproTask>;
    GetDiclaimerAttributesToSubstituteWithActiveDirectoryProperties(domainName: string, service: string): Promise<EmailproDisclaimerAttributeEnum[]>;
    ExternalContactsForThisService(service: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string): Promise<string[]>;
    CreateNewExternalContact(externalEmailAddress: string, service: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string): Promise<EmailproTask>;
    DeleteExternalContact(externalEmailAddress: string, service: string): Promise<EmailproTask>;
    PendingActions(service: string): Promise<number[]>;
    UpdateSpamAndVirusFlagsOnAllActiveAccounts(service: string): Promise<void>;
}
//# sourceMappingURL=email.mxplan.d.ts.map