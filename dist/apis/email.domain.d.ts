import { Client } from '../client';
export declare enum DomainDomainFilterAction {
    ACCEPT = "accept",
    ACCOUNT = "account",
    DELETE = "delete",
    REDIRECT = "redirect"
}
export declare enum DomainDomainFilterOperand {
    CHECKSPF = "checkspf",
    CONTAINS = "contains",
    NOCONTAINS = "noContains"
}
export declare enum DomainDomainMlLanguage {
    DE = "de",
    EN = "en",
    ES = "es",
    FR = "fr",
    IT = "it",
    NL = "nl",
    PL = "pl",
    PT = "pt"
}
/**
 * Structure of mailinglist limits
 */
export interface DomainDomainMlLimits {
    subscribers: number;
}
/**
 * Structure of imapCopy
 */
export interface DomainDomainMlOptionsStruct {
    moderatorMessage: boolean;
    subscribeByModerator: boolean;
    usersPostOnly: boolean;
}
export declare enum DomainDomainMXFilter {
    CUSTOM = "CUSTOM",
    FULL_FILTERING = "FULL_FILTERING",
    NO_FILTERING = "NO_FILTERING",
    REDIRECT = "REDIRECT",
    SIMPLE_FILTERING = "SIMPLE_FILTERING"
}
export declare enum DomainDomainPopAction {
    ADDACCOUNT = "addAccount",
    CHANGEACCOUNT = "changeAccount",
    CHANGEPASSWORD = "changePassword",
    DELETEACCOUNT = "deleteAccount",
    INTERNALMIGRATION = "internalMigration",
    MIGRATION = "migration",
    TEMPORARYTASK = "temporaryTask",
    UNKNOWN = "unknown"
}
/**
 * Values of quota account (pop, mailing list, redirection, responder and big pop)
 */
export interface DomainDomainQuota {
    account: number;
    alias: number;
    mailingList: number;
    redirection: number;
    responder: number;
}
export declare enum DomainDomainSpecialAccountAction {
    ADD = "add",
    CHANGE = "change",
    DELETE = "delete"
}
export declare type DomainDomainSpecialAccountType = '25g' | 'alias' | 'delete' | 'filter' | 'forward' | 'responder';
export declare enum DomainDomainStatus {
    CLOSE = "close",
    OK = "ok",
    READONLY = "readOnly",
    UNKNOWN = "unknown"
}
/**
 * Values of number account (account, mailing list, redirection and responder)
 */
export interface DomainDomainSummary {
    account: number;
    mailingList: number;
    redirection: number;
    responder: number;
}
/**
 * Structure of usage account
 */
export interface DomainDomainUsageAccountStruct {
    date?: string;
    emailCount?: number;
    quota?: number;
}
/**
 * Zone resource records
 */
export interface DomainzoneRecord {
    fieldType: ZoneNamedResolutionFieldType;
    id: number;
    subDomain?: string;
    target: string;
    ttl?: number;
    zone: string;
}
/**
 * Account List
 */
export interface EmaildomainAccount {
    accountName: string;
    description: string;
    domain: string;
    email: string;
    isBlocked: boolean;
    size: number;
}
/**
 * Account List
 */
export interface EmaildomainAccountDelegated {
    accountName: string;
    allowedAccountSize?: number[];
    description: string;
    domain: string;
    email: string;
    isBlocked: boolean;
    size: number;
}
/**
 * Email ACL
 */
export interface EmaildomainAcl {
    accountId: string;
}
/**
 * Delegation List
 */
export interface EmaildomainDelegation {
    accountId: string;
}
/**
 * Email diagnoses
 */
export interface EmaildomainDiagnose {
    date: string;
    function: EmaildomainDomainDiagnoseFunction;
    id: number;
    name?: string;
    result?: EmaildomainDomainDiagnoseResult;
    trace?: any;
}
export declare enum EmaildomainDomainDiagnoseFunction {
    MX = "MX"
}
export declare enum EmaildomainDomainDiagnoseResult {
    CUSTOM = "CUSTOM",
    DEPRECATED = "DEPRECATED",
    KO = "KO",
    OK = "OK"
}
/**
 * Test and result, with proper test strings
 */
export interface EmaildomainDomainDiagnoseTraceStruct<T> {
    result: T;
    test: string;
}
/**
 * Domain service
 */
export interface EmaildomainDomainService {
    allowedAccountSize?: number[];
    creationDate?: string;
    domain: string;
    filerz?: number;
    linkTo?: string;
    migratedMXPlanServiceName?: string;
    offer?: string;
    status: DomainDomainStatus;
}
/**
 * Filter List
 */
export interface EmaildomainFilter {
    action?: DomainDomainFilterAction;
    actionParam?: string;
    active: boolean;
    domain: string;
    name: string;
    pop: string;
    priority: number;
}
/**
 * Mailing List
 */
export interface EmaildomainMailingList {
    id: number;
    language?: DomainDomainMlLanguage;
    name: string;
    nbSubscribers?: number;
    nbSubscribersUpdateDate?: string;
    options: DomainDomainMlOptionsStruct;
    ownerEmail: string;
    replyTo: string;
}
/**
 * Migration account
 */
export interface EmaildomainMigrationAccount {
    destinationEmailAddress: string;
    quota: number;
}
export declare enum EmaildomainMigrationCheckCode {
    ACCOUNT_EMPTY = "ACCOUNT_EMPTY",
    ACCOUNT_INPROGRESS = "ACCOUNT_INPROGRESS",
    DELEGATION_EXIST = "DELEGATION_EXIST",
    DOMAIN_EMPTY = "DOMAIN_EMPTY",
    FILTER_EXIST = "FILTER_EXIST",
    FORWARD_EXIST = "FORWARD_EXIST",
    FORWARD_LOCAL = "FORWARD_LOCAL",
    MAILINGLIST_EXIST = "MAILINGLIST_EXIST",
    MAILINGLIST_INPROGRESS = "MAILINGLIST_INPROGRESS",
    MAILPROXY_BAD_INFRA = "MAILPROXY_BAD_INFRA",
    MAILPROXY_EMPTY = "MAILPROXY_EMPTY",
    MAILPROXY_INPROGRESS = "MAILPROXY_INPROGRESS",
    MAILPROXY_RESERVATION = "MAILPROXY_RESERVATION",
    REDIRECTION_INPROGRESS = "REDIRECTION_INPROGRESS",
    RESPONDER_EXIST = "RESPONDER_EXIST",
    RESPONDER_INPROGRESS = "RESPONDER_INPROGRESS",
    UNKNOW = "UNKNOW"
}
/**
 * Check Migration result
 */
export interface EmaildomainMigrationCheckResultStruct {
    code: EmaildomainMigrationCheckCode;
    details?: string;
}
/**
 * Check Migration result
 */
export interface EmaildomainMigrationCheckStruct {
    alias?: string[];
    error?: EmaildomainMigrationCheckResultStruct[];
    filter?: string[];
    forward?: string[];
    warning?: EmaildomainMigrationCheckResultStruct[];
}
/**
 * Migration service
 */
export interface EmaildomainMigrationService {
    contactAdmin: string;
    contactBilling: string;
    contactTech: string;
    creation: string;
    destinationServiceName: string;
    expiration: string;
    type: EmaildomainMigrationServiceType;
}
export declare enum EmaildomainMigrationServiceType {
    EMAIL_PRO = "EMAIL PRO",
    HOSTED_EXCHANGE = "HOSTED EXCHANGE",
    PRIVATE_EXCHANGE = "PRIVATE EXCHANGE",
    PROVIDER_EXCHANGE = "PROVIDER EXCHANGE"
}
/**
 * Moderators List
 */
export interface EmaildomainModerator {
    domain: string;
    email: string;
    mailinglist: string;
}
/**
 * Global Redirection
 */
export interface EmaildomainRedirectionGlobal {
    from: string;
    id: string;
    to: string;
}
/**
 * Responder
 */
export interface EmaildomainResponder {
    account: string;
    content: string;
    copy: boolean;
    copyTo?: string;
    from?: string;
    to?: string;
}
/**
 * Responder of account
 */
export interface EmaildomainResponderAccount {
    account: string;
    content: string;
    copy: boolean;
    copyTo?: string;
    from?: string;
    to?: string;
}
/**
 * Rule List
 */
export interface EmaildomainRule {
    header: string;
    id: number;
    operand: DomainDomainFilterOperand;
    value: string;
}
/**
 * Subscribers List
 */
export interface EmaildomainSubscriber {
    domain: string;
    email: string;
    mailinglist: string;
}
/**
 * Task filter List
 */
export interface EmaildomainTaskFilter {
    account: string;
    action: string;
    domain: string;
    id: number;
    timestamp: string;
}
/**
 * Task Mailing List
 */
export interface EmaildomainTaskMl {
    account: string;
    action: string;
    date: string;
    domain: string;
    id: number;
    language: DomainDomainMlLanguage;
}
/**
 * Task Pop List
 */
export interface EmaildomainTaskPop {
    action: DomainDomainPopAction;
    date: string;
    domain: string;
    id: number;
    name: string;
}
/**
 * Task special account List
 */
export interface EmaildomainTaskSpecialAccount {
    account: string;
    action: DomainDomainSpecialAccountAction;
    date: string;
    domain: string;
    id: number;
    type: DomainDomainSpecialAccountType;
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
export declare enum ServiceTerminationReason {
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
export declare enum ZoneNamedResolutionFieldType {
    A = "A",
    AAAA = "AAAA",
    CAA = "CAA",
    CNAME = "CNAME",
    DKIM = "DKIM",
    DMARC = "DMARC",
    LOC = "LOC",
    MX = "MX",
    NAPTR = "NAPTR",
    NS = "NS",
    PTR = "PTR",
    SPF = "SPF",
    SRV = "SRV",
    SSHFP = "SSHFP",
    TLSA = "TLSA",
    TXT = "TXT"
}
export declare class EmailDomain {
    private client;
    constructor(client: Client);
    /**
     * Operations about the MX service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Domain service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D#GET)
     */
    GetThisObjectProperties(domain: string): Promise<EmaildomainDomainService>;
    /**
     * List the email.domain.Account objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account#GET)
     */
    GetAccounts(domain: string, accountName?: string, description?: string): Promise<string[]>;
    /**
     * List the email.domain.Account objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account#POST)
     */
    CreateNewMailboxInServer(accountName: string, domain: string, password: string, description?: string, size?: number): Promise<EmaildomainTaskPop>;
    /**
     * Account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#GET)
     */
    /**
     * Account List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#PUT)
     */
    AlterThisObjectProperties(accountName: string, domain: string, payload: EmaildomainAccount): Promise<void>;
    /**
     * Account List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#DELETE)
     */
    DeleteAnExistingMailboxInServer(accountName: string, domain: string): Promise<EmaildomainTaskPop>;
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/changePassword#POST)
     */
    ChangeMailboxPasswordLength_: any;
    [9]: any;
    30: any;
    NoSpaceAtBeginAndEndNoAccent(accountName: string, domain: string, password: string): Promise<EmaildomainTaskPop>;
    /**
     * List the email.domain.Delegation objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation#GET)
     */
    GetDelegations(accountName: string, domain: string): Promise<string[]>;
    /**
     * List the email.domain.Delegation objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation#POST)
     */
    CreateDelegationForThisAccount(accountId: string, accountName: string, domain: string): Promise<string>;
    /**
     * Delegation List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation/%7BaccountId%7D#GET)
     */
    /**
     * Delegation List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation/%7BaccountId%7D#DELETE)
     */
    DeleteAnExistingDelegation(accountId: string, accountName: string, domain: string): Promise<string>;
    /**
     * List the email.domain.Filter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter#GET)
     */
    GetFilters(accountName: string, domain: string): Promise<string[]>;
    /**
     * List the email.domain.Filter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter#POST)
     */
    CreateNewFilterForAccount(accountName: string, action: DomainDomainFilterAction, active: boolean, domain: string, header: string, name: string, operand: DomainDomainFilterOperand, priority: number, value: string, actionParam?: string): Promise<EmaildomainTaskFilter>;
    /**
     * Filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D#GET)
     */
    /**
     * Filter List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D#DELETE)
     */
    DeleteAnExistingFilter(accountName: string, domain: string, name: string): Promise<EmaildomainTaskFilter[]>;
    /**
     * changeActivity operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/changeActivity#POST)
     */
    ChangeFilterActivity(accountName: string, activity: boolean, domain: string, name: string): Promise<EmaildomainTaskFilter>;
    /**
     * changePriority operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/changePriority#POST)
     */
    ChangeFilterPriority(accountName: string, domain: string, name: string, priority: number): Promise<EmaildomainTaskFilter>;
    /**
     * List the email.domain.Rule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule#GET)
     */
    GetRules(accountName: string, domain: string, name: string): Promise<number[]>;
    /**
     * List the email.domain.Rule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule#POST)
     */
    CreateNewRuleForFilter(accountName: string, domain: string, header: string, name: string, operand: DomainDomainFilterOperand, value: string): Promise<EmaildomainTaskFilter>;
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule/%7Bid%7D#GET)
     */
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule/%7Bid%7D#DELETE)
     */
    /**
     * List the email.domain.MigrationService objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate#GET)
     */
    GetMigrationService(accountName: string, domain: string, type?: EmaildomainMigrationServiceType): Promise<string[]>;
    /**
     * Migration service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D#GET)
     */
    /**
     * List the email.domain.MigrationAccount objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress#GET)
     */
    ListOfEmailAddressAvailableForMigration(accountName: string, destinationServiceName: string, domain: string, quota?: number): Promise<string[]>;
    /**
     * Migration account [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D#GET)
     */
    /**
     * checkMigrate operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D/checkMigrate#GET)
     */
    CheckIfItPossibleToMigrate(accountName: string, destinationEmailAddress: string, destinationServiceName: string, domain: string): Promise<EmaildomainMigrationCheckStruct>;
    /**
     * migrate operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D/migrate#POST)
     */
    MigrateAccountToDestinationAccount(accountName: string, destinationEmailAddress: string, destinationServiceName: string, domain: string, password: string): Promise<EmaildomainTaskPop>;
    /**
     * updateUsage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/updateUsage#POST)
     */
    UpdateUsageOfAccount(accountName: string, domain: string): Promise<void>;
    /**
     * usage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/usage#GET)
     */
    UsageOfAccount(accountName: string, domain: string): Promise<DomainDomainUsageAccountStruct>;
    /**
     * List the email.domain.Acl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl#GET)
     */
    GetACLOnYourDomain(domain: string): Promise<string[]>;
    /**
     * List the email.domain.Acl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl#POST)
     */
    CreateNewACL(accountId: string, domain: string): Promise<EmaildomainAcl>;
    /**
     * Email ACL [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl/%7BaccountId%7D#GET)
     */
    /**
     * Email ACL [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl/%7BaccountId%7D#DELETE)
     */
    DeleteACL(accountId: string, domain: string): Promise<void>;
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(domain: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * changeDnsMXFilter operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/changeDnsMXFilter#POST)
     */
    ChangeMXFilterSoChangeMXDNSRecords(domain: string, mxFilter: DomainDomainMXFilter, customTarget?: string, subDomain?: string): Promise<void>;
    /**
     * confirmTermination operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourEmailService(domain: string, token: string, commentary?: string, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * dnsMXFilter operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/dnsMXFilter#GET)
     */
    DomainMXFilter(domain: string, subDomain?: string): Promise<DomainDomainMXFilter>;
    /**
     * dnsMXRecords operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/dnsMXRecords#GET)
     */
    DomainMXRecords(domain: string, subDomain?: string): Promise<string[]>;
    /**
     * List the email.domain.MailingList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList#GET)
     */
    GetMailingLists(domain: string, name?: string): Promise<string[]>;
    /**
     * List the email.domain.MailingList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList#POST)
     */
    CreateNewMailingList(domain: string, language: DomainDomainMlLanguage, name: string, options: DomainDomainMlOptionsStruct, ownerEmail: string, replyTo?: string): Promise<EmaildomainTaskMl>;
    /**
     * Mailing List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#GET)
     */
    /**
     * Mailing List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#PUT)
     */
    /**
     * Mailing List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#DELETE)
     */
    DeleteExistingMailingList(domain: string, name: string): Promise<EmaildomainTaskMl>;
    /**
     * changeOptions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/changeOptions#POST)
     */
    ChangeMailingListOptions(domain: string, name: string, options: DomainDomainMlOptionsStruct): Promise<EmaildomainTaskMl>;
    /**
     * List the email.domain.Moderator objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator#GET)
     */
    ListOfModerators(domain: string, name: string, email?: string): Promise<string[]>;
    /**
     * List the email.domain.Moderator objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator#POST)
     */
    AddModeratorToMailingList(domain: string, email: string, name: string): Promise<EmaildomainTaskMl>;
    /**
     * Moderators List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator/%7Bemail%7D#GET)
     */
    /**
     * Moderators List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator/%7Bemail%7D#DELETE)
     */
    DeleteExistingModerator(domain: string, email: string, name: string): Promise<EmaildomainTaskMl>;
    /**
     * sendListByEmail operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/sendListByEmail#POST)
     */
    SendModeratorsListAndSubscribersListOfThisMailingListByEmail(domain: string, email: string, name: string): Promise<EmaildomainTaskMl>;
    /**
     * List the email.domain.Subscriber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber#GET)
     */
    ListOfSubscribers(domain: string, name: string, email?: string): Promise<string[]>;
    /**
     * List the email.domain.Subscriber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber#POST)
     */
    AddSubscriberToMailingList(domain: string, email: string, name: string): Promise<EmaildomainTaskMl>;
    /**
     * Subscribers List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber/%7Bemail%7D#GET)
     */
    /**
     * Subscribers List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber/%7Bemail%7D#DELETE)
     */
    DeleteExistingSubscriber(domain: string, email: string, name: string): Promise<EmaildomainTaskMl>;
    /**
     * migrateDelegationV3toV6 operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/migrateDelegationV3toV6#POST)
     */
    CreateDelegationOfDomainWithSameNicThanV3(domain: string): Promise<void>;
    /**
     * quota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/quota#GET)
     */
    ListAllQuotasForThisDomain(domain: string): Promise<DomainDomainQuota>;
    /**
     * recommendedDNSRecords operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/recommendedDNSRecords#GET)
     */
    RecommendedDomainDNSRecords(domain: string): Promise<DomainzoneRecord[]>;
    /**
     * List the email.domain.RedirectionGlobal objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#GET)
     */
    GetRedirections(domain: string, from?: string, to?: string): Promise<string[]>;
    /**
     * List the email.domain.RedirectionGlobal objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#POST)
     */
    CreateNewRedirectionInServer(domain: string, from: string, localCopy: boolean, to: string): Promise<EmaildomainTaskSpecialAccount>;
    /**
     * Global Redirection [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D#GET)
     */
    /**
     * Global Redirection [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D#DELETE)
     */
    DeleteAnExistingRedirectionInServer(domain: string, id: string): Promise<EmaildomainTaskSpecialAccount>;
    /**
     * changeRedirection operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D/changeRedirection#POST)
     */
    ChangeRedirection(domain: string, id: string, to: string): Promise<EmaildomainTaskSpecialAccount>;
    /**
     * List the email.domain.Responder objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder#GET)
     */
    GetResponders(domain: string, account?: string): Promise<string[]>;
    /**
     * List the email.domain.Responder objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder#POST)
     */
    CreateNewResponderInServer(account: string, content: string, copy: boolean, domain: string, copyTo?: string, from?: string, to?: string): Promise<EmaildomainTaskSpecialAccount>;
    /**
     * Responder [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#GET)
     */
    /**
     * Responder [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#PUT)
     */
    /**
     * Responder [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#DELETE)
     */
    DeleteAnExistingResponderInServer(account: string, domain: string): Promise<EmaildomainTaskSpecialAccount>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/serviceInfos#PUT)
     */
    /**
     * summary operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/summary#GET)
     */
    SummaryForThisDomain(domain: string): Promise<DomainDomainSummary>;
    /**
     * List the email.domain.TaskPop objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/account#GET)
     */
    GetAccountTasks(domain: string, name?: string): Promise<number[]>;
    /**
     * Task Pop List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/account/%7Bid%7D#GET)
     */
    /**
     * List the email.domain.TaskFilter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/filter#GET)
     */
    GetFilterTasks(domain: string, account?: string): Promise<number[]>;
    /**
     * Task filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/filter/%7Bid%7D#GET)
     */
    /**
     * List the email.domain.TaskMl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/mailinglist#GET)
     */
    GetMailingListTasks(domain: string, account?: string): Promise<number[]>;
    /**
     * Task Mailing List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/mailinglist/%7Bid%7D#GET)
     */
    /**
     * List the email.domain.TaskSpecialAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/redirection#GET)
     */
    GetRedirectionTasks(domain: string, account?: string): Promise<number[]>;
    /**
     * Task special account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/redirection/%7Bid%7D#GET)
     */
    /**
     * List the email.domain.TaskSpecialAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/responder#GET)
     */
    GetResponderTasks(domain: string, account?: string): Promise<number[]>;
    /**
     * Task special account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/responder/%7Bid%7D#GET)
     */
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/terminate#POST)
     */
    TerminateYourEmailService(domain: string): Promise<string>;
    /**
     * List the email.domain.AccountDelegated objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount#GET)
     */
    DelegatedEmails(accountName?: string, domain?: string): Promise<string[]>;
    /**
     * Account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D#GET)
     */
    /**
     * Account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D#PUT)
     */
    /**
     * changePassword operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/changePassword#POST)
     */
    /**
     * List the email.domain.Filter objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter#GET)
     */
    /**
     * List the email.domain.Filter objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter#POST)
     */
    /**
     * Filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D#GET)
     */
    /**
     * Filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D#DELETE)
     */
    /**
     * changeActivity operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/changeActivity#POST)
     */
    /**
     * changePriority operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/changePriority#POST)
     */
    /**
     * List the email.domain.Rule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule#GET)
     */
    /**
     * List the email.domain.Rule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule#POST)
     */
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule/%7Bid%7D#GET)
     */
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule/%7Bid%7D#DELETE)
     */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#GET)
     */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#PUT)
     */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#POST)
     */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#DELETE)
     */
    /**
     * updateUsage operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/updateUsage#POST)
     */
    /**
     * usage operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/usage#POST)
     */
    /**
     * Get limits of mailing list [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/mailingListLimits#GET)
     */
    GetLimitsOfMailingList(moderatorMessage: boolean): Promise<DomainDomainMlLimits>;
}
//# sourceMappingURL=email.domain.d.ts.map