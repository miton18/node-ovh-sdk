import { Client } from '../client';
export interface EmailexchangeAccount {
    domain: string;
    company?: string;
    owaLimited: boolean;
    firstName?: string;
    litigation: boolean;
    renewPeriod?: EmailexchangerenewPeriodEnum;
    creationDate?: string;
    quota: number;
    configured: boolean;
    lastName?: string;
    displayName?: string;
    outlookLicense: boolean;
    spamDetected: boolean;
    expirationOutlookDate?: string;
    lastLogonDate?: string;
    spamAndVirusConfiguration: EmailexchangespamAndVirusConfiguration;
    deleteOutlookAtExpiration?: boolean;
    taskPendingId: number;
    currentUsage?: number;
    deleteAtExpiration?: boolean;
    spamTicketNumber?: number;
    guid?: string;
    litigationPeriod?: number;
    primaryEmailAddress: string;
    id: number;
    passwordLastUpdate?: string;
    state: EmailexchangeObjectStateEnum;
    initial?: string;
    renewOutlookPeriod?: EmailexchangerenewPeriodEnum;
    accountLicense: EmailexchangeOvhLicenceEnum;
    SAMAccountName?: string;
    lastLogoffDate?: string;
    mailingFilter?: EmailexchangeMailingFilterEnum[];
    exchangeGuid?: string;
    expirationDate?: string;
    hiddenFromGAL: boolean;
    lastUpdateDate?: string;
    login: string;
}
export interface EmailexchangeAccountLicense {
    licenseQuantity: number;
    license: EmailexchangeOvhLicenceEnum;
}
export declare enum EmailexchangeactiveSyncNotificationStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    OK = "ok"
}
export declare enum EmailexchangeActiveSyncPolicyEnum {
    ALLOW = "allow",
    BLOCK = "block",
    QUARANTINE = "quarantine"
}
export declare enum EmailexchangeauthorizedIpStatusEnum {
    CREATING = "creating",
    DELETING = "deleting",
    OK = "ok"
}
export interface EmailexchangeDailyLicense {
    accountLicense: EmailexchangeAccountLicense[];
    outlookQuantity: number;
    date: string;
}
export declare enum EmailexchangeDeviceActiveSyncStateEnum {
    ALLOWED = "allowed",
    BLOCKED = "blocked",
    DEVICEDISCOVERY = "deviceDiscovery",
    QUARANTINED = "quarantined"
}
export interface Emailexchangedisclaimer {
    creationDate: string;
    taskPendingId: number;
    content: string;
    name: string;
    outsideOnly: boolean;
}
export declare enum EmailexchangeDisclaimerAttributeEnum {
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
export interface EmailexchangeDomain {
    mxIsValid: boolean;
    organization2010?: string;
    mxRelay?: string;
    type: EmailexchangeDomainTypeEnum;
    taskPendingId: number;
    state: EmailexchangeObjectStateEnum;
    srvIsValid: boolean;
    name: string;
    domainAliases: string[];
    cnameToCheck?: string;
    srvRecord?: string[];
    mxRecord?: string[];
    isAliasDomain: boolean;
    main?: boolean;
    domainValidated: boolean;
}
export declare enum EmailexchangeDomainTypeEnum {
    AUTHORITATIVE = "authoritative",
    NONAUTHORITATIVE = "nonAuthoritative"
}
export interface EmailexchangeexchangeAccountAlias {
    taskPendingId: number;
    alias: string;
    creationDate: string;
}
export interface EmailexchangeexchangeAccountArchive {
    guid?: string;
    state: EmailexchangeObjectStateEnum;
    creationDate: string;
    quota: number;
    taskPendingId?: number;
    currentUsage?: number;
}
export interface EmailexchangeexchangeAccountDiagnosis {
    isSrvValid: boolean;
    canReceiveEmail: boolean;
    isSpammer: boolean;
    isSuspended: boolean;
    lastCheck: string;
    connectiveOWA: boolean;
    isMxValid: boolean;
    canSendEmail: boolean;
    isLocked: boolean;
}
export interface EmailexchangeexchangeAccountFullAccess {
    creationDate: string;
    taskPendingId: number;
    allowedAccountId: number;
}
export interface EmailexchangeexchangeAccountProtocol {
    POP: boolean;
    IMAP: boolean;
    activeSync: boolean;
    webMail: boolean;
    lastUpdate?: string;
    creationDate: string;
    taskPendingId: number;
}
export interface EmailexchangeexchangeAccountSendAs {
    allowedAccountId: number;
    taskPendingId: number;
    creationDate: string;
}
export interface EmailexchangeexchangeAccountSendOnBehalfTo {
    taskPendingId: number;
    creationDate: string;
    allowedAccountId: number;
}
export declare type EmailexchangeexchangeCommercialVersionEnum = '2010' | '2013' | '2016' | '2019';
export interface EmailexchangeexchangeDistributionGroupManager {
    managerAccountId: number;
    managerEmailAddress: string;
    creationDate: string;
    taskPendingId: number;
}
export interface EmailexchangeexchangeDistributionGroupMember {
    memberEmailAddress: string;
    taskPendingId: number;
    memberAccountId?: number;
    creationDate: string;
    memberContactId?: number;
}
export interface EmailexchangeexchangeDistributionGroupSendAs {
    allowedAccountId: number;
    taskPendingId: number;
    creationDate: string;
}
export interface EmailexchangeexchangeDistributionGroupSendOnBehalfTo {
    creationDate: string;
    taskPendingId: number;
    allowedAccountId: number;
}
export interface EmailexchangeexchangeExternalContact {
    id: number;
    organization2010?: string;
    creationDate: string;
    taskPendingId: number;
    state: EmailexchangeObjectStateEnum;
    hiddenFromGAL: boolean;
    displayName: string;
    firstName?: string;
    externalEmailAddress: string;
    initials?: string;
    lastName?: string;
}
export interface EmailexchangeexchangeMailingListAlias {
    creationDate: string;
    taskPendingId: number;
    alias: string;
}
export interface EmailexchangeexchangePublicFolderPermission {
    allowedAccountId: number;
    accessRights: EmailexchangePublicFolderRightTypeEnum;
    state: EmailexchangeObjectStateEnum;
    creationDate: string;
    taskPendingId: number;
}
export interface EmailexchangeexchangeResourceAccountDelegate {
    allowedAccountId: number;
    delegateEmailAddress: string;
    taskPendingId: number;
    creationDate?: string;
}
export interface EmailexchangeExchangeService {
    spamAndVirusConfiguration: EmailexchangespamAndVirusConfiguration;
    offer: EmailexchangeServiceOfferEnum;
    minPasswordLength?: number;
    taskPendingId: number;
    lockoutObservationWindow: number;
    lastUpdateDate?: string;
    displayName?: string;
    passwordHistoryCount?: number;
    maxReceiveSize: number;
    webUrl?: string;
    maxPasswordAge?: number;
    sslExpirationDate?: string;
    hostname?: string;
    minPasswordAge?: number;
    lockoutThreshold?: number;
    state: EmailexchangeServiceStateEnum;
    domain: string;
    maxSendSize: number;
    complexityEnabled: boolean;
    lockoutDuration: number;
}
export interface EmailexchangeexchangeServiceActiveSyncNotification {
    primaryEmailAddress: string;
    state: EmailexchangeactiveSyncNotificationStateEnum;
    notifiedAccountId: number;
    creationDate: string;
}
export interface EmailexchangeexchangeServiceAuthorizedIp {
    status: EmailexchangeauthorizedIpStatusEnum;
    creationDate: string;
    ip: string;
}
export interface EmailexchangeexchangeServiceDevice {
    lastUpdate?: string;
    creationDate: string;
    deviceModel: string;
    taskPendingId: number;
    deviceId: string;
    IMEI: string;
    deviceState: EmailexchangeDeviceActiveSyncStateEnum;
    guid: string;
    identity: string;
}
export interface EmailexchangeexchangeServiceProtocol {
    IMAP: boolean;
    POP: boolean;
    webMail: boolean;
    activeSync: boolean;
    activeSyncPolicy: EmailexchangeActiveSyncPolicyEnum;
    taskPendingId: number;
    creationDate: string;
    lastUpdate?: string;
}
export interface EmailexchangeexchangeSharedAccountFullAccess {
    creationDate: string;
    taskPendingId: number;
    allowedAccountId: number;
}
export interface EmailexchangeexchangeSharedAccountSendAs {
    allowedAccountId: number;
    creationDate: string;
    taskPendingId: number;
}
export interface EmailexchangeexchangeSharedAccountSendOnBehalfTo {
    taskPendingId: number;
    creationDate: string;
    allowedAccountId: number;
}
export interface EmailexchangeExport {
    taskPendingId: number;
    creationDate: string;
    percentComplete: number;
}
export interface EmailexchangeExportUrl {
    expiration: string;
    url: string;
}
export declare enum EmailexchangeLanguageEnum {
    AR = "ar",
    BG = "bg",
    CZ = "cz",
    DA = "da",
    DE = "de",
    EL = "el",
    EN = "en",
    ES = "es",
    ET = "et",
    FI = "fi",
    FR = "fr",
    HE = "he",
    HI = "hi",
    HR = "hr",
    HU = "hu",
    ID = "id",
    IN = "in",
    IT = "it",
    JA = "ja",
    KO = "ko",
    KZ = "kz",
    LT = "lt",
    LV = "lv",
    MS = "ms",
    NB = "nb",
    NL = "nl",
    PL = "pl",
    PT = "pt",
    PT_BR = "pt-BR",
    RO = "ro",
    RS = "rs",
    RU = "ru",
    SK = "sk",
    SL = "sl",
    SV = "sv",
    TH = "th",
    TR = "tr",
    UK = "uk",
    VI = "vi",
    ZH_CN = "zh-CN"
}
export declare enum EmailexchangeMailingFilterEnum {
    VADERETRO = "vaderetro"
}
export interface EmailexchangemailingList {
    state: EmailexchangeObjectStateEnum;
    hiddenFromGAL: boolean;
    lastUpdateDate?: string;
    creationDate: string;
    taskPendingId: number;
    mailingListAddress: string;
    maxReceiveSize?: number;
    joinRestriction: EmailexchangeMailingListJoinRestrictionEnum;
    spamDetected: boolean;
    departRestriction: EmailexchangeMailingListDepartRestrictionEnum;
    spamTicketNumber?: number;
    displayName?: string;
    maxSendSize?: number;
    senderAuthentification: boolean;
}
export declare enum EmailexchangeMailingListDepartRestrictionEnum {
    CLOSED = "closed",
    OPEN = "open"
}
export declare enum EmailexchangeMailingListJoinRestrictionEnum {
    APPROVALREQUIRED = "approvalRequired",
    CLOSED = "closed",
    OPEN = "open"
}
export declare enum EmailexchangeObjectStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    INTERNALMIGRATION = "internalMigration",
    OK = "ok",
    REOPENING = "reopening",
    SUSPENDED = "suspended",
    SUSPENDING = "suspending"
}
export interface EmailexchangeOutlookUrl {
    expiration: string;
    serial: string;
    url: string;
}
export declare enum EmailexchangeOutlookVersionEnum {
    MAC_X86_2011 = "mac_x86_2011",
    MAC_X86_2016 = "mac_x86_2016",
    WINDOWS_X64_2013 = "windows_x64_2013",
    WINDOWS_X64_2016 = "windows_x64_2016",
    WINDOWS_X86_2013 = "windows_x86_2013",
    WINDOWS_X86_2016 = "windows_x86_2016"
}
export interface EmailexchangeOutlookVersions {
    outlookVersion: EmailexchangeOutlookVersionEnum;
    status: boolean;
    outlookLanguage: EmailexchangeLanguageEnum;
}
export declare enum EmailexchangeOvhLicenceEnum {
    BASIC = "basic",
    ENTERPRISE = "enterprise",
    STANDARD = "standard"
}
export interface EmailexchangepublicFolder {
    lastUserAccessTime?: string;
    itemCount?: number;
    state: EmailexchangeObjectStateEnum;
    type: EmailexchangePublicFolderTypeEnum;
    taskPendingId: number;
    quota: number;
    creationDate?: string;
    path: string;
    defaultPermission: EmailexchangePublicFolderRightTypeEnum;
    totalItemSize?: number;
    lastUserModificationTime?: string;
    lastModificationTime?: string;
    hasSubFolders?: boolean;
    lastAccessTime?: string;
    anonymousPermission: EmailexchangePublicFolderRightTypeEnum;
}
export interface EmailexchangePublicFolderQuota {
    quotaUsed: number;
    quotaLimit: number;
    quotaReserved: number;
}
export declare enum EmailexchangePublicFolderRightTypeEnum {
    EDITOR = "editor",
    NONE = "none",
    REVIEWER = "reviewer"
}
export declare enum EmailexchangePublicFolderTypeEnum {
    CALENDAR = "calendar",
    CONTACTS = "contacts",
    PLAIN = "plain",
    TASKS = "tasks"
}
export declare enum EmailexchangerenewPeriodEnum {
    MONTHLY = "monthly",
    YEARLY = "yearly"
}
export interface EmailexchangeresourceAccount {
    deleteComments: boolean;
    resourceEmailAddress: string;
    allowConflict: boolean;
    displayName: string;
    maximumDuration: number;
    deleteSubject: boolean;
    addOrganizerToSubject: boolean;
    showMeetingDetails: EmailexchangeShowMeetingDetailsEnum;
    location: string;
    capacity: number;
    creationDate?: string;
    type: EmailexchangeResourceTypeEnum;
    taskPendingId: number;
    bookingWindow: number;
    state: EmailexchangeObjectStateEnum;
}
export declare enum EmailexchangeResourceTypeEnum {
    EQUIPMENT = "equipment",
    ROOM = "room"
}
export interface EmailexchangeServer {
    owaMfa: boolean;
    isPtrValid: boolean;
    isAaaaValid: boolean;
    isAValid: boolean;
    ipV6?: string;
    currentDiskUsage?: number;
    diskSize?: number;
    taskPendingId: number;
    ip: string;
    state: EmailexchangeServerStateEnum;
    isPtrV6Valid: boolean;
    commercialVersion: EmailexchangeexchangeCommercialVersionEnum;
    version?: number;
    individual2010: boolean;
}
export declare enum EmailexchangeServerStateEnum {
    CONFIGURATIONPENDING = "configurationPending",
    NOTCONFIGURED = "notConfigured",
    OK = "ok"
}
export declare enum EmailexchangeServiceOfferEnum {
    DEDICATED = "dedicated",
    DEDICATEDCLUSTER = "dedicatedCluster",
    HOSTED = "hosted",
    PROVIDER = "provider"
}
export declare enum EmailexchangeServiceStateEnum {
    INMAINTENANCE = "inMaintenance",
    OK = "ok",
    SUSPENDED = "suspended"
}
export interface EmailexchangesharedAccount {
    lastLogoffDate?: string;
    sharedEmailAddress: string;
    lastName?: string;
    displayName?: string;
    spamDetected: boolean;
    initials?: string;
    lastLogonDate?: string;
    mailingFilter?: EmailexchangeMailingFilterEnum[];
    taskPendingId: number;
    currentUsage?: number;
    hiddenFromGAL: boolean;
    firstName?: string;
    spamTicketNumber?: number;
    quota: number;
    id: number;
    creationDate?: string;
    state: EmailexchangeObjectStateEnum;
}
export interface EmailexchangeSharedAccountQuota {
    quotaLimit: number;
    quotaUsed: number;
    quotaReserved: number;
}
export declare enum EmailexchangeShowMeetingDetailsEnum {
    AVAILABILITYONLY = "availabilityOnly",
    LIMITEDDETAILS = "limitedDetails",
    REVIEWER = "reviewer"
}
export interface EmailexchangespamAndVirusConfiguration {
    checkDKIM: boolean;
    tagSpam: boolean;
    putInJunk: boolean;
    deleteVirus: boolean;
    tagVirus: boolean;
    deleteSpam: boolean;
    checkSPF: boolean;
}
export interface EmailexchangeTask {
    function: EmailexchangeTaskFunctionEnum;
    todoDate: string;
    id: number;
    finishDate?: string;
    status: EmailexchangeTaskStatusEnum;
}
export declare enum EmailexchangeTaskFunctionEnum {
    ACTIVATESHAREPOINT = "activateSharepoint",
    ADDACCOUNT = "addAccount",
    ADDACCOUNTARCHIVE = "addAccountArchive",
    ADDACTIVESYNCMAILNOTIFICATION = "addActiveSyncMailNotification",
    ADDALIAS = "addAlias",
    ADDDISTRIBUTIONGROUP = "addDistributionGroup",
    ADDDISTRIBUTIONGROUPMANAGER = "addDistributionGroupManager",
    ADDDISTRIBUTIONGROUPMEMBER = "addDistributionGroupMember",
    ADDDISTRIBUTIONGROUPSENDAS = "addDistributionGroupSendAs",
    ADDDISTRIBUTIONGROUPSENDONBEHALFTO = "addDistributionGroupSendOnBehalfTo",
    ADDDOMAIN = "addDomain",
    ADDDOMAINDISCLAIMER = "addDomainDisclaimer",
    ADDEXCHANGESERVICEAUTHORIZEDIP = "addExchangeServiceAuthorizedIp",
    ADDEXPORTPSTREQUEST = "addExportPstRequest",
    ADDEXTERNALCONTACT = "addExternalContact",
    ADDFULLACCESS = "addFullAccess",
    ADDOUTLOOKLICENSE = "addOutlookLicense",
    ADDPUBLICFOLDER = "addPublicFolder",
    ADDPUBLICFOLDERPERMISSION = "addPublicFolderPermission",
    ADDRESOURCEACCOUNT = "addResourceAccount",
    ADDRESOURCEDELEGATE = "addResourceDelegate",
    ADDSENDAS = "addSendAs",
    ADDSENDONBEHALFTO = "addSendOnBehalfTo",
    ADDSHAREDACCOUNT = "addSharedAccount",
    ADDSHAREDACCOUNTFULLACCESS = "addSharedAccountFullAccess",
    ADDSHAREDACCOUNTSENDAS = "addSharedAccountSendAs",
    ADDSHAREDACCOUNTSENDONBEHALFTO = "addSharedAccountSendOnBehalfTo",
    CHANGEHOSTNAME = "changeHostname",
    CHANGEPASSWORD = "changePassword",
    CLEARDATAONDEVICE = "clearDataOnDevice",
    CLONETEMPLATEEXCHANGEPRIVATE = "cloneTemplateExchangePrivate",
    CONFIGUREEXCHANGECUSTOMER = "configureExchangeCustomer",
    DELETEACCOUNT = "deleteAccount",
    DELETEACCOUNTARCHIVE = "deleteAccountArchive",
    DELETEACTIVESYNCMAILNOTIFICATION = "deleteActiveSyncMailNotification",
    DELETEALIAS = "deleteAlias",
    DELETEDISTRIBUTIONGROUP = "deleteDistributionGroup",
    DELETEDISTRIBUTIONGROUPMANAGER = "deleteDistributionGroupManager",
    DELETEDISTRIBUTIONGROUPMEMBER = "deleteDistributionGroupMember",
    DELETEDISTRIBUTIONGROUPSENDAS = "deleteDistributionGroupSendAs",
    DELETEDISTRIBUTIONGROUPSENDONBEHALFTO = "deleteDistributionGroupSendOnBehalfTo",
    DELETEDOMAIN = "deleteDomain",
    DELETEDOMAINDISCLAIMER = "deleteDomainDisclaimer",
    DELETEEXCHANGESERVICE = "deleteExchangeService",
    DELETEEXCHANGESERVICEAUTHORIZEDIP = "deleteExchangeServiceAuthorizedIp",
    DELETEEXPORTPSTREQUEST = "deleteExportPstRequest",
    DELETEEXTERNALCONTACT = "deleteExternalContact",
    DELETEFULLACCESS = "deleteFullAccess",
    DELETEOUTLOOKLICENSE = "deleteOutlookLicense",
    DELETEPUBLICFOLDER = "deletePublicFolder",
    DELETEPUBLICFOLDERPERMISSION = "deletePublicFolderPermission",
    DELETERESOURCEACCOUNT = "deleteResourceAccount",
    DELETERESOURCEDELEGATE = "deleteResourceDelegate",
    DELETESENDAS = "deleteSendAs",
    DELETESENDONBEHALFTO = "deleteSendOnBehalfTo",
    DELETESHAREDACCOUNT = "deleteSharedAccount",
    DELETESHAREDACCOUNTFULLACCESS = "deleteSharedAccountFullAccess",
    DELETESHAREDACCOUNTSENDAS = "deleteSharedAccountSendAs",
    DELETESHAREDACCOUNTSENDONBEHALFTO = "deleteSharedAccountSendOnBehalfTo",
    DESTROYPRIVATEVM = "destroyPrivateVm",
    DIAGNOSEACCOUNT = "diagnoseAccount",
    EXPANDDRIVE = "expandDrive",
    GENERATEOUTLOOKURL = "generateOutlookUrl",
    GENERATEPSTURL = "generatePstUrl",
    INSTALLEXCHANGE = "installExchange",
    INSTALLSSL = "installSSL",
    MAINTENANCE = "maintenance",
    MIGRATIONACCOUNT = "migrationAccount",
    MIGRATIONDISCLAIMER = "migrationDisclaimer",
    MIGRATIONEXTERNALCONTACT = "migrationExternalContact",
    MIGRATIONHISTORY = "migrationHistory",
    MIGRATIONMAILINGLIST = "migrationMailingList",
    MIGRATIONRESOURCEACCOUNT = "migrationResourceAccount",
    MIGRATIONSERVICE = "migrationService",
    REOPENHOSTEDACCOUNT = "reOpenHostedAccount",
    REOPENOUTLOOKLICENSE = "reOpenOutlookLicense",
    REOPENPRIVATEACCOUNT = "reOpenPrivateAccount",
    REOPENPRIVATEVM = "reOpenPrivateVm",
    SETACCOUNT = "setAccount",
    SETACCOUNTARCHIVE = "setAccountArchive",
    SETALIAS = "setAlias",
    SETDISTRIBUTIONGROUP = "setDistributionGroup",
    SETDNS = "setDns",
    SETDOMAIN = "setDomain",
    SETDOMAINDISCLAIMER = "setDomainDisclaimer",
    SETEXCHANGEACCOUNTPROTOCOL = "setExchangeAccountProtocol",
    SETEXCHANGESERVICEDEVICE = "setExchangeServiceDevice",
    SETEXTERNALCONTACT = "setExternalContact",
    SETPUBLICFOLDER = "setPublicFolder",
    SETPUBLICFOLDERPERMISSION = "setPublicFolderPermission",
    SETRESOURCEACCOUNT = "setResourceAccount",
    SETSERVICE = "setService",
    SETSHAREDACCOUNT = "setSharedAccount",
    SUSPENDACCOUNT = "suspendAccount",
    SUSPENDEXCHANGESERVICE = "suspendExchangeService",
    SUSPENDHOSTEDACCOUNT = "suspendHostedAccount",
    SUSPENDOUTLOOKLICENSE = "suspendOutlookLicense",
    SUSPENDPRIVATEACCOUNT = "suspendPrivateAccount",
    SUSPENDPRIVATEVM = "suspendPrivateVm",
    UNSUSPENDACCOUNT = "unsuspendAccount",
    UNSUSPENDEXCHANGESERVICE = "unsuspendExchangeService",
    UNSUSPENDHOSTEDACCOUNT = "unsuspendHostedAccount",
    UPDATEEXCHANGESERVICEDEVICE = "updateExchangeServiceDevice",
    UPGRADE2016 = "upgrade2016"
}
export declare enum EmailexchangeTaskStatusEnum {
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
    automatic: boolean;
    manualPayment?: boolean;
    forced: boolean;
    period?: number;
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
    contactAdmin: string;
    engagedUpTo?: string;
    possibleRenewPeriod?: number[];
    creation: string;
    canDeleteAtExpiration: boolean;
    domain: string;
    status: ServiceStateEnum;
    expiration: string;
    serviceId: number;
    contactTech: string;
    renew?: ServiceRenewType;
    contactBilling: string;
    renewalType: ServiceRenewalTypeEnum;
}
export declare class EmailExchange {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<EmailexchangeExchangeService>;
    AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: EmailexchangeExchangeService): Promise<void>;
    AccountsAssociatedToThisExchangeService(exchangeService: string, organizationName: string, accountLicense?: EmailexchangeOvhLicenceEnum, id?: number, primaryEmailAddress?: string): Promise<string[]>;
    CreateNewMailboxInExchangeServer(domain: string, exchangeService: string, license: EmailexchangeOvhLicenceEnum, login: string, organizationName: string, password: string, company?: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, litigation?: boolean, litigationPeriod?: number, mailingFilter?: EmailexchangeMailingFilterEnum[], outlookLicense?: boolean, SAMAccountName?: string, spamAndVirusConfiguration?: EmailexchangespamAndVirusConfiguration): Promise<EmailexchangeTask>;
    DeleteExistingMailboxInExchangeServer(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    AliasesAssociatedToThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<string[]>;
    CreateNewAlias(alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    DeleteExistingAlias(alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    CreateNewArchiveMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string, quota?: number): Promise<EmailexchangeTask>;
    DeleteExistingArchiveMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    ChangeMailboxPassword(exchangeService: string, organizationName: string, password: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    CreateNewDiagnosisRequest(exchangeService: string, organizationName: string, password: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    RequestPSTFileForTheAccount(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    RemoveRequestOfPSTFile(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    GenerateTemporaryUrlToPSTFile(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    FullAccessGrantedUsersForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]>;
    AllowFullAccessToAUser(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    RevokeFullAccess(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    GenerateOutlookUrl(exchangeService: string, language: EmailexchangeLanguageEnum, organizationName: string, primaryEmailAddress: string, version: EmailexchangeOutlookVersionEnum): Promise<EmailexchangeTask>;
    SendAsGrantedUsersForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]>;
    AllowAnotherUserToSendMailsFromThisMailbox(allowAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    DeleteAllowedUserForSendAs(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    SendOnBehalfToGrantedUsersForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]>;
    AllowAnotherUserToSendOnBehalfToMailsFromThisMailbox(allowAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask>;
    PendingTaskForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]>;
    TerminateAccountAtExpirationDate(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<string>;
    ActivateSharepointInfraConnectedToThisExchangeService(exchangeService: string, organizationName: string, primaryEmailAddress: string, subDomain: string): Promise<EmailexchangeTask>;
    SettingSSLHostnameForExchangePrivateOffer(dcvEmail: string, exchangeService: string, hostname: string, organizationName: string, useDnsAssist: boolean): Promise<EmailexchangeTask>;
    GetDCVEmailsIfYourSslWillExpireInNext30Days(exchangeService: string, organizationName: string): Promise<string[]>;
    ListOfYourActiveSyncDevicesRegisteredOnThisExchangeService(exchangeService: string, organizationName: string, deviceState?: EmailexchangeDeviceActiveSyncStateEnum, identity?: string, IMEI?: string): Promise<string[]>;
    ExecutesAFactoryResetOnTheDeviceTHISOPERATIONCANNOTBEREVERSEDALLDATAONTHEDEVICEWILLBELOST(exchangeService: string, identity: string, organizationName: string): Promise<EmailexchangeTask>;
    DomainsAssociatedToThisService(exchangeService: string, organizationName: string, main?: boolean, state?: EmailexchangeObjectStateEnum): Promise<string[]>;
    CreateNewDomainInExchangeServices(exchangeService: string, name: string, organizationName: string, type: EmailexchangeDomainTypeEnum, configureAutodiscover?: boolean, configureMx?: boolean, main?: boolean, mxRelay?: string, organization2010?: string): Promise<EmailexchangeTask>;
    DeleteExistingDomainInExchangeServices(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeTask>;
    CreateOrganizationDisclaimerOfEachEmail(content: string, domainName: string, exchangeService: string, organizationName: string, outsideOnly?: boolean): Promise<EmailexchangeTask>;
    DeleteExistingOrganizationDisclaimer(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeTask>;
    GetDiclaimerAttributesToSubstituteWithActiveDirectoryProperties(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeDisclaimerAttributeEnum[]>;
    ExternalContactsForThisService(exchangeService: string, organizationName: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string): Promise<string[]>;
    CreateNewExternalContact(exchangeService: string, externalEmailAddress: string, organizationName: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, organization2010?: string): Promise<EmailexchangeTask>;
    DeleteExternalContact(exchangeService: string, externalEmailAddress: string, organizationName: string): Promise<EmailexchangeTask>;
    GetActiveLicensesForSpecificPeriodOfTime(exchangeService: string, organizationName: string, fromDate?: string, license?: EmailexchangeOvhLicenceEnum, toDate?: string): Promise<EmailexchangeDailyLicense[]>;
    MailingListForThisService(exchangeService: string, organizationName: string, mailingListAddress?: string): Promise<string[]>;
    AddMailingList(departRestriction: EmailexchangeMailingListDepartRestrictionEnum, exchangeService: string, joinRestriction: EmailexchangeMailingListJoinRestrictionEnum, mailingListAddress: string, organizationName: string, displayName?: string, hiddenFromGAL?: boolean, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean): Promise<EmailexchangeTask>;
    DeleteMailingList(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask>;
    AliasesAssociatedToThisMailingList(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<string[]>;
    MailingListAccountManager(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]>;
    AddNewMailingListManager(exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string): Promise<EmailexchangeTask>;
    DeleteMailingListManager(exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string): Promise<EmailexchangeTask>;
    MailingListAccountMember(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]>;
    AddNewMailingListMember(exchangeService: string, mailingListAddress: string, organizationName: string, memberAccountId?: number, memberContactId?: number): Promise<EmailexchangeTask>;
    DeleteMailingListMember(exchangeService: string, mailingListAddress: string, memberAccountId: number, organizationName: string): Promise<EmailexchangeTask>;
    MailingListContactMember(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]>;
    SendAs(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]>;
    AllowAnotherUserToSendAsoMailsFromThisMailingList(allowAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask>;
    SendOnBehalfTo(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]>;
    ShowAvailableOutlooks(exchangeService: string, organizationName: string, outlookLanguage?: EmailexchangeLanguageEnum, outlookVersion?: EmailexchangeOutlookVersionEnum): Promise<EmailexchangeOutlookVersions[]>;
    ExchangeAccountIdSubscribedToActiveSyncQuarantineNotifications(exchangeService: string, organizationName: string): Promise<number[]>;
    SubscribeNewAddressToActiveSyncQuarantineNotifications(exchangeService: string, notifiedAccountId: number, organizationName: string): Promise<EmailexchangeTask>;
    UnubscribeAddressFromActiveSyncQuarantineNotifications(exchangeService: string, notifiedAccountId: number, organizationName: string): Promise<EmailexchangeTask>;
    PublicFoldersAssociatedToThisService(exchangeService: string, organizationName: string, path?: string): Promise<string[]>;
    CreateOrganizationPublicFolder(exchangeService: string, organizationName: string, path: string, quota: number, type: EmailexchangePublicFolderTypeEnum, anonymousPermission?: EmailexchangePublicFolderRightTypeEnum, defaultPermission?: EmailexchangePublicFolderRightTypeEnum): Promise<EmailexchangeTask>;
    DeleteExistingOrganizationPublicFolder(exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeTask>;
    PublicFolderPermission(exchangeService: string, organizationName: string, path: string): Promise<number[]>;
    CreatePublicFolderPermission(accessRights: EmailexchangePublicFolderRightTypeEnum, allowedAccountId: number, exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeTask>;
    DeleteExistingPermissionFromPublicFolder(allowedAccountId: number, exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeTask>;
    GetPublicFolderQuotaUsageInTotalAvailableSpace(exchangeService: string, organizationName: string): Promise<EmailexchangePublicFolderQuota>;
    RenewSSLIfItWillExpireInNext30Days(dcv: string, exchangeService: string, organizationName: string): Promise<EmailexchangeTask>;
    ResourceAccountAssociatedToThisService(exchangeService: string, organizationName: string, resourceEmailAddress?: string): Promise<string[]>;
    CreateNewResourceAccountInExchangeServer(capacity: number, exchangeService: string, organizationName: string, resourceEmailAddress: string, type: EmailexchangeResourceTypeEnum, addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, showMeetingDetails?: EmailexchangeShowMeetingDetailsEnum): Promise<EmailexchangeTask>;
    DeleteExistingResourceAccountInExchangeServer(exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeTask>;
    ResourceAccountManager(exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<number[]>;
    AddNewResourceAccountDelegateInExchangeServer(allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeTask>;
    DeleteExistingResourceAccountDelegateInExchangeServer(allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeTask>;
    SharedAccountsAssociatedToThisExchangeService(exchangeService: string, organizationName: string, sharedEmailAddress?: string): Promise<string[]>;
    CreateNewSharedMailboxInExchangeServer(exchangeService: string, organizationName: string, quota: number, sharedEmailAddress: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: EmailexchangeMailingFilterEnum[]): Promise<EmailexchangeTask>;
    DeleteExistingSharedMailboxInExchangeServer(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask>;
    FullAccessGrantedUsersForThisSharedMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]>;
    SendAsGrantedUsersForThisSharedMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]>;
    AllowAnotherUserToSendMailsFromThisSharedMailbox(allowAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask>;
    SendOnBehalfToGrantedUsersForThisSharedMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]>;
    AllowAnotherUserToSendOnBehalfToMailsFromThisSharedMailbox(allowAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask>;
    GetSharedAccountQuotaUsageInTotalAvailableSpace(exchangeService: string, organizationName: string): Promise<EmailexchangeSharedAccountQuota>;
    PendingActions(exchangeService: string, organizationName: string): Promise<number[]>;
    UpdateDeviceList(exchangeService: string, organizationName: string): Promise<EmailexchangeTask>;
    UpdateSpamAndVirusFlagsOnAllActiveAccounts(exchangeService: string, organizationName: string): Promise<void>;
}
//# sourceMappingURL=email.exchange.d.ts.map