import { Client } from '../client';
export declare enum ReferenceCountry {
    ALL = "all",
    CA = "ca",
    CZ = "cz",
    DE = "de",
    EN = "en",
    ES = "es",
    FI = "fi",
    FR = "fr",
    GB = "gb",
    IE = "ie",
    IT = "it",
    LT = "lt",
    MA = "ma",
    NL = "nl",
    PL = "pl",
    PP = "pp",
    PT = "pt",
    QC = "qc",
    RU = "ru",
    SK = "sk",
    SN = "sn",
    TN = "tn",
    WE = "we"
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
/**
 * SMS details
 */
export interface SmsAccount {
    automaticRecreditAmount?: SmsPackQuantityAutomaticRecredit;
    callBack?: string;
    creditsHoldByQuota: any;
    creditsLeft: any;
    creditThresholdForAutomaticRecredit: any;
    description: string;
    name: string;
    smsResponse: SmsResponse;
    status: SmsStatusAccount;
    stopCallBack?: string;
    templates: SmsTemplates;
    userQuantityWithQuota: number;
}
/**
 * A structure describing all information about alert threshold informations
 */
export interface SmsAlertThreshold {
    alertEmail: string;
    alertNumber: string;
    alertThreshold: number;
    support: SmsSupport;
}
/**
 * SMS blacklist
 */
export interface SmsBlacklist {
    dateCreation: string;
    number: string;
}
export declare enum SmsCharset {
    UTF_8 = "UTF-8"
}
/**
 * The web access for your virtual number chat application
 */
export interface SmsChatAccess {
    creationDate: string;
    id: number;
    url: string;
}
export declare enum SmsClass {
    FLASH = "flash",
    PHONEDISPLAY = "phoneDisplay",
    SIM = "sim",
    TOOLKIT = "toolkit"
}
export declare type SmsCoding = '7bit' | '8bit';
export declare enum SmsCountry {
    AG = "ag",
    AI = "ai",
    ALL = "all",
    AN = "an",
    AR = "ar",
    AT = "at",
    AU = "au",
    AW = "aw",
    BA = "ba",
    BB = "bb",
    BE = "be",
    BG = "bg",
    BH = "bh",
    BM = "bm",
    BO = "bo",
    BR = "br",
    BZ = "bz",
    CH = "ch",
    CL = "cl",
    CN = "cn",
    CO = "co",
    CR = "cr",
    CU = "cu",
    CY = "cy",
    CZ = "cz",
    DE = "de",
    DK = "dk",
    DM = "dm",
    DZ = "dz",
    EC = "ec",
    EE = "ee",
    EG = "eg",
    ES = "es",
    FI = "fi",
    FR = "fr",
    GB = "gb",
    GD = "gd",
    GP = "gp",
    GR = "gr",
    GY = "gy",
    HK = "hk",
    HN = "hn",
    HR = "hr",
    HT = "ht",
    HU = "hu",
    ID = "id",
    IE = "ie",
    IL = "il",
    IN = "in",
    IS = "is",
    IT = "it",
    JM = "jm",
    JO = "jo",
    JP = "jp",
    KR = "kr",
    KW = "kw",
    KY = "ky",
    LB = "lb",
    LC = "lc",
    LT = "lt",
    LU = "lu",
    LV = "lv",
    MA = "ma",
    ME = "me",
    MQ = "mq",
    MS = "ms",
    MT = "mt",
    MY = "my",
    NC = "nc",
    NG = "ng",
    NL = "nl",
    NO = "no",
    NZ = "nz",
    PA = "pa",
    PE = "pe",
    PF = "pf",
    PH = "ph",
    PK = "pk",
    PL = "pl",
    PT = "pt",
    PY = "py",
    RE = "re",
    RO = "ro",
    RS = "rs",
    RU = "ru",
    SA = "sa",
    SE = "se",
    SG = "sg",
    SI = "si",
    SK = "sk",
    SR = "sr",
    TC = "tc",
    TH = "th",
    TN = "tn",
    TR = "tr",
    TT = "tt",
    TW = "tw",
    UA = "ua",
    UY = "uy",
    VC = "vc",
    VE = "ve",
    VG = "vg",
    VN = "vn",
    ZA = "za"
}
export declare enum SmsDocumentWayType {
    INCOMING = "incoming",
    OUTGOING = "outgoing"
}
/**
 * Sms reach list
 */
export interface SmsException {
    countrySuffixe: string;
    messages: string[];
    operators: string;
    restrictionCode: SmsRestrictionCode;
    substitution?: string;
}
/**
 * Sms operator informations
 */
export interface SmsHlr {
    country: string;
    countryCode: string;
    network: string;
    operator: string;
    region: string;
}
/**
 * Home Location Register informations. Give informations about a given cellular phone.
 */
export interface SmsHlrLookupNumber {
    datetime: string;
    id: number;
    msisdn: string;
    operatorCode: string;
    ported: boolean;
    reachable: boolean;
    roaming: boolean;
    status: SmsHlrStatuses;
    valid: boolean;
}
export declare enum SmsHlrStatuses {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
/**
 * Sms history of sms incoming received
 */
export interface SmsIncoming {
    creationDatetime: string;
    credits: any;
    id: number;
    message: string;
    sender: string;
    tag: string;
}
/**
 * Sms job
 */
export interface SmsJob {
    creationDatetime: string;
    credits: any;
    deliveryReceipt: number;
    differedDelivery: number;
    id: number;
    message: string;
    messageLength: number;
    numberOfSms: number;
    ptt: number;
    receiver: string;
    sender: string;
}
/**
 * Sms history of sms outgoing sent
 */
export interface SmsOutgoing {
    creationDatetime: string;
    credits: any;
    deliveryReceipt: number;
    differedDelivery: number;
    id: number;
    message: string;
    messageLength: number;
    numberOfSms: number;
    ptt: number;
    receiver: string;
    sender: string;
    tag: string;
    tariffCode: string;
}
/**
 * A structure describing all information about an sms pack offer
 */
export interface SmsPackOffer {
    countryDestination: string;
    giftPrice?: any;
    giftQuantity?: any;
    language: string;
    price: any;
    quantity: number;
    smsQuantity: any;
    totalPrice?: any;
}
export declare type SmsPackQuantityAutomaticRecredit = 100 | 1000 | 10000 | 200 | 250 | 500 | 5000;
export declare type SmsPackQuantity = 100 | 1000 | 10000 | 100000 | 1000000 | 200 | 250 | 2500 | 25000 | 500 | 5000 | 50000;
/**
 * Phone book
 */
export interface SmsPhonebook {
    bookKey: string;
    name: string;
    phoneKey: string;
}
/**
 * Phone book contact
 */
export interface SmsPhonebookContact {
    group: string;
    homeMobile?: any;
    homePhone?: any;
    id: number;
    name: string;
    surname: string;
    workMobile?: any;
    workPhone?: any;
}
export declare enum SmsPriority {
    HIGH = "high",
    LOW = "low",
    MEDIUM = "medium",
    VERYLOW = "veryLow"
}
/**
 * A structure describing ptt details
 */
export interface SmsPttDetails {
    comment: string;
    description: string;
    duration: SmsPttDurationType;
}
export declare enum SmsPttDurationType {
    INDETERMINATED = "indeterminated",
    PERMANENT = "permanent",
    TEMPORARY = "temporary"
}
/**
 * A structure describing all information about quota informations
 */
export interface SmsQuota {
    quotaLeft: any;
    quotaStatus: SmsQuotaStatusUser;
}
export declare enum SmsQuotaStatusUser {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
/**
 * Sms receivers preloaded
 */
export interface SmsReceiver {
    autoUpdate: boolean;
    canAutoUpdate: boolean;
    datetime: string;
    description: string;
    records: number;
    slotId: number;
}
/**
 * A structure giving operation price and asynchronous task ID
 */
export interface SmsReceiversAsynchronousCleanReport {
    taskId: number;
    totalCreditsRemoved: any;
}
export declare enum SmsRefererSender {
    CUSTOM = "custom",
    DOMAIN = "domain",
    LINE = "line",
    NIC = "nic",
    OWNER = "owner",
    VIRTUAL = "virtual"
}
/**
 * A structure describing how to manage an sms Response
 */
export interface SmsResponse {
    cgiUrl?: string;
    responseType: SmsResponseType;
    text?: string;
    trackingDefaultSmsSender?: string;
    trackingOptions?: SmsResponseTrackingOptions[];
}
export declare enum SmsResponseTrackingMedia {
    EMAIL = "email",
    SMS = "sms",
    VOICE = "voice"
}
/**
 * The tracking media response
 */
export interface SmsResponseTrackingOptions {
    media: SmsResponseTrackingMedia;
    sender: string;
    target: string;
}
export declare enum SmsResponseType {
    CGI = "cgi",
    NONE = "none",
    TEXT = "text"
}
export declare enum SmsRestrictionCode {
    ALPHA = "ALPHA",
    BAD_DLR = "BAD_DLR",
    BLOCKED = "BLOCKED",
    CODING = "CODING",
    DLR = "DLR",
    FLASHONLY = "FLASHONLY",
    MSISDN = "MSISDN"
}
/**
 * SMS senders
 */
export interface SmsSender {
    comment?: string;
    description: string;
    referer: SmsRefererSender;
    sender: string;
    status: SmsStatusSender;
    type?: SmsTypeSender;
    validationMedia?: string;
}
/**
 * A structure describing all information about senders available
 */
export interface SmsSenderAvailable {
    referer: SmsSenderReferer;
    sender: string;
}
export declare enum SmsSenderReferer {
    DOMAIN = "domain",
    NICHANDLE = "nichandle"
}
/**
 * A structure describing all information about quota informations
 */
export interface SmsSmsSendingReport {
    ids: number[];
    invalidReceivers: string[];
    totalCreditsRemoved: any;
    validReceivers: string[];
}
export declare enum SmsStatusAccount {
    DISABLE = "disable",
    ENABLE = "enable"
}
export declare enum SmsStatusSender {
    DISABLE = "disable",
    ENABLE = "enable",
    REFUSED = "refused",
    WAITINGVALIDATION = "waitingValidation"
}
export declare enum SmsSupport {
    BOTH = "both",
    MAIL = "mail",
    SMS = "sms"
}
/**
 * Operation on a SMS service
 */
export interface SmsTask {
    function: SmsTodoGeneralPublicFunctions;
    status: TelephonyTaskStatus;
    step: SmsTodoGeneralPublicSteps;
    taskId: number;
}
/**
 * Sms template for moderation (Needed to send in US country)
 */
export interface SmsTemplateControl {
    activity: SmsTypeTemplate;
    comment: string;
    datetime: string;
    description: string;
    message: string;
    name: string;
    status: SmsStatusSender;
}
/**
 * A structure describing all information about templates informations
 */
export interface SmsTemplates {
    customizedEmailMode: boolean;
    customizedSmsMode: boolean;
    emailBody?: string;
    emailFrom?: string;
    emailSubject?: string;
    smsBody?: string;
}
export declare enum SmsTodoGeneralPublicFunctions {
    CLEANSMSRECEIVERS = "cleanSmsReceivers"
}
export declare enum SmsTodoGeneralPublicSteps {
    CHECKORDER = "checkOrder",
    CREATEHLRS = "createHlrs",
    FINISHING = "finishing",
    SENDMAILREPORT = "sendMailReport",
    STARTING = "starting",
    WAITFORHLRS = "waitForHlrs"
}
export declare enum SmsTypeSender {
    ALPHA = "alpha",
    NUMERIC = "numeric",
    VIRTUAL = "virtual"
}
export declare enum SmsTypeTemplate {
    ALERTING = "alerting",
    AUTHENTIFICATION = "authentification",
    TRANSACTIONAL = "transactional"
}
/**
 * SMS users
 */
export interface SmsUser {
    alertThresholdInformations: SmsAlertThreshold;
    callBack?: string;
    ipRestrictions: string[];
    login: string;
    password: string;
    quotaInformations: SmsQuota;
    stopCallBack?: string;
}
/**
 * Virtual numbers
 */
export interface SmsVirtualNumber {
    countryCode: SmsVirtualNumberIsoCountryCode;
    number: string;
}
/**
 * Virtual numbers
 */
export interface SmsVirtualNumberGenericService {
    countryCode: SmsVirtualNumberIsoCountryCode;
    number: string;
}
export declare enum SmsVirtualNumberIsoCountryCode {
    BE = "be",
    CH = "ch",
    DE = "de",
    ES = "es",
    FR = "fr",
    UK = "uk"
}
/**
 * Sms job
 */
export interface SmsVirtualNumberJob {
    creationDatetime: string;
    credits: any;
    deliveryReceipt: number;
    differedDelivery: number;
    id: number;
    message: string;
    messageLength: number;
    numberOfSms: number;
    ptt: number;
    receiver: string;
}
export declare enum TelephonyContactsExportFormats {
    CSV = "csv"
}
/**
 * Telephony API related file hosted
 */
export interface TelephonyPcsFile {
    filename: string;
    status: TelephonyPcsFileStatus;
    url: string;
    urlExpirationDatetime: string;
}
export declare enum TelephonyPcsFileStatus {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
/**
 * Operation on a telephony service
 */
export interface TelephonyTask {
    action: string;
    message?: string;
    objectCreated?: string;
    serviceType: string;
    status: TelephonyTaskStatus;
    taskId: number;
}
export declare enum TelephonyTaskStatus {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    PAUSE = "pause",
    TODO = "todo"
}
export declare class Sms {
    private client;
    constructor(client: Client);
    /**
     * Operations about the VOIP service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * SMS details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<SmsAccount>;
    /**
     * SMS details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: SmsAccount): Promise<void>;
    /**
     * List the sms.Blacklist objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists#GET)
     */
    NumbersBlacklistedAssociatedToTheSmsAccount(serviceName: string): Promise<string[]>;
    /**
     * SMS blacklist [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists/%7Bnumber%7D#GET)
     */
    /**
     * SMS blacklist [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists/%7Bnumber%7D#DELETE)
     */
    DeleteTheBlacklistedSmsNumberGiven(number: string, serviceName: string): Promise<void>;
    /**
     * document operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/document#GET)
     */
    GetTheMedocumentIdGenerated(serviceName: string, wayType: SmsDocumentWayType, creationDatetimeFrom?: string, creationDatetimeTo?: string, tag?: string): Promise<string>;
    /**
     * exceptions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/exceptions#GET)
     */
    DescribeFilterExceptionsInSmsSendingFromASpecificReceiver(receiver: string, serviceName: string): Promise<SmsException[]>;
    /**
     * List the sms.HlrLookupNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr#GET)
     */
    HomeLocationRegisterInformationsGiveInformationsAboutAGivenCellularPhone(serviceName: string): Promise<number[]>;
    /**
     * List the sms.HlrLookupNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr#POST)
     */
    AddOneOrSeveralSendingHlrLookupRequest(serviceName: string, receivers?: string[], receiversDocumentUrl?: string): Promise<SmsSmsSendingReport>;
    /**
     * Home Location Register informations. Give informations about a given cellular phone. [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr/%7Bid%7D#GET)
     */
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr/%7Bid%7D/operator#GET)
     */
    /**
     * List the sms.Incoming objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming#GET)
     */
    SmsReceivedAssociatedToTheSmsAccount(serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, sender?: string, tag?: string): Promise<number[]>;
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming/%7Bid%7D#GET)
     */
    /**
     * Sms history of sms incoming received [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming/%7Bid%7D#DELETE)
     */
    DeleteTheSmsIncomingHistoryGiven(id: number, serviceName: string): Promise<void>;
    /**
     * List the sms.Job objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs#GET)
     */
    SmsInPendingAssociatedToTheSmsAccount(serviceName: string): Promise<number[]>;
    /**
     * List the sms.Job objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs#POST)
     */
    AddOneOrSeveralSendingJobs(message: string, serviceName: string, charset?: SmsCharset): any;
    class?: SmsClass;
    coding?: SmsCoding;
    differedPeriod?: number;
    noStopClause?: boolean;
    priority?: SmsPriority;
    receivers?: string[];
    receiversDocumentUrl?: string;
    receiversSlotId?: string;
    sender?: string;
    senderForResponse?: boolean;
    tag?: string;
    validityPeriod?: number;
    Promise<SmsSmsSendingReport>(): Promise<SmsSmsSendingReport>;
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs/%7Bid%7D#GET)
     */
    /**
     * Sms job [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs/%7Bid%7D#DELETE)
     */
    DeleteTheSmsJobGivenStopSending(id: number, serviceName: string): Promise<void>;
    /**
     * List the sms.Outgoing objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing#GET)
     */
    SmsSentAssociatedToTheSmsAccount(serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string): Promise<number[]>;
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D#GET)
     */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D#DELETE)
     */
    DeleteTheSmsOutgoingHistoryGiven(id: number, serviceName: string): Promise<void>;
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D/hlr#GET)
     */
    /**
     * List the sms.Phonebook objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks#GET)
     */
    ReturnPhonebooksAssociatedToThisAccount(serviceName: string): Promise<string[]>;
    /**
     * List the sms.Phonebook objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks#POST)
     */
    AddAPhonebookReturnTheBookKey(name: string, serviceName: string): Promise<string>;
    /**
     * Phone book [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#GET)
     */
    /**
     * Phone book [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#PUT)
     */
    /**
     * Phone book [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#DELETE)
     */
    DeleteAPhonebook(bookKey: string, serviceName: string): Promise<void>;
    /**
     * export operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/export#GET)
     */
    ExportThePhonebookContacts(bookKey: string, format: TelephonyContactsExportFormats, serviceName: string): Promise<TelephonyPcsFile>;
    /**
     * import operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/import#POST)
     */
    ImportAContactsFileSupportedFormatsAreExcelXlsAndXlsxAndCSV(bookKey: string, documentId: string, serviceName: string): Promise<TelephonyTask>;
    /**
     * List the sms.PhonebookContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact#GET)
     */
    PhonebookContacts(bookKey: string, serviceName: string): Promise<number[]>;
    /**
     * List the sms.PhonebookContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact#POST)
     */
    CreateAPhonebookContactReturnIdentifierOfThePhonebookContact(bookKey: string, group: string, name: string, serviceName: string, surname: string, homeMobile?: any, homePhone?: any, workMobile?: any, workPhone?: any): Promise<number>;
    /**
     * Phone book contact [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#GET)
     */
    /**
     * Phone book contact [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#PUT)
     */
    /**
     * Phone book contact [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#DELETE)
     */
    DeleteAPhonebookContact(bookKey: string, id: number, serviceName: string): Promise<void>;
    /**
     * List the sms.Receiver objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers#GET)
     */
    ReceiversPreloadedFromTextOrCsvDocumentFile(serviceName: string): Promise<number[]>;
    /**
     * List the sms.Receiver objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers#POST)
     */
    AddANewDocumentOfCsvReceivers(autoUpdate: boolean, description: string, serviceName: string, slotId: number, csvUrl?: string, documentId?: string): Promise<SmsReceiver>;
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#GET)
     */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#PUT)
     */
    /**
     * Sms receivers preloaded [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#DELETE)
     */
    DeleteTheDocumentFromTheSlot(serviceName: string, slotId: number): Promise<void>;
    /**
     * clean operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D/clean#POST)
     */
    CleanTheInvalidAndInactiveReceiversInTheDocumentByRequestingHLROnEachReceiverAReportIsSentByEmailAtTheEndOfTheOperation(freemium: boolean, priceOnly: boolean, serviceName: string, slotId: number): Promise<SmsReceiversAsynchronousCleanReport>;
    /**
     * csv operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D/csv#GET)
     */
    GetTheDocumentDataContainer(serviceName: string, slotId: number): Promise<string>;
    /**
     * seeOffers operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/seeOffers#GET)
     */
    DescribeSMSOffersAvailable(countryCurrencyPrice: ReferenceCountry, countryDestination: SmsCountry, quantity: SmsPackQuantity, serviceName: string): Promise<SmsPackOffer[]>;
    /**
     * List the sms.Sender objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders#GET)
     */
    SendersAllowedAssociatedToTheSmsAccount(serviceName: string): Promise<string[]>;
    /**
     * List the sms.Sender objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders#POST)
     */
    CreateTheSmsSenderGiven(sender: string, serviceName: string, description?: string, reason?: string): Promise<string>;
    /**
     * SMS senders [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#GET)
     */
    /**
     * SMS senders [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#PUT)
     */
    /**
     * SMS senders [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#DELETE)
     */
    DeleteTheSmsSenderGiven(sender: string, serviceName: string): Promise<void>;
    /**
     * validate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D/validate#POST)
     */
    ValidateAGivenSenderWithAnActivationCode(code: string, sender: string, serviceName: string): Promise<void>;
    /**
     * sendersAvailableForValidation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/sendersAvailableForValidation#GET)
     */
    TheSendersThatAreAttachedToYourPersonalInformationsOrOVHServicesAndThatCanBeAutomaticallyValidated(serviceName: string, referer?: SmsSenderReferer): Promise<SmsSenderAvailable[]>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * List the sms.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/task#GET)
     */
    OperationsOnASMSService(serviceName: string, status?: TelephonyTaskStatus): Promise<number[]>;
    /**
     * Operation on a SMS service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /**
     * List the sms.TemplateControl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl#GET)
     */
    TemplatePatternFilledUpForModerationNeededToSendInUSCountry(serviceName: string): Promise<string[]>;
    /**
     * List the sms.TemplateControl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl#POST)
     */
    CreateTheSmsTemplateControlGiven(activity: SmsTypeTemplate, message: string, name: string, serviceName: string, description?: string, reason?: string): Promise<void>;
    /**
     * Sms template for moderation (Needed to send in US country) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#GET)
     */
    /**
     * Sms template for moderation (Needed to send in US country) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#PUT)
     */
    /**
     * Sms template for moderation (Needed to send in US country) [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#DELETE)
     */
    DeleteTheSmsTemplateControl(name: string, serviceName: string): Promise<void>;
    /**
     * relaunchValidation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D/relaunchValidation#POST)
     */
    AttemptANewValidationAfterModerationRefusal(description: string, message: string, name: string, serviceName: string): Promise<void>;
    /**
     * transferCredits operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/transferCredits#POST)
     */
    CreditTransferBetweenTwoSmsAccounts(credits: any, serviceName: string, smsAccountTarget: string): Promise<void>;
    /**
     * List the sms.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users#GET)
     */
    UsersAssociatedToTheSmsAccount(serviceName: string): Promise<string[]>;
    /**
     * List the sms.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users#POST)
     */
    CreateANewUserForAnSmsAccount(login: string, password: string, serviceName: string): Promise<void>;
    /**
     * SMS users [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#GET)
     */
    /**
     * SMS users [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#PUT)
     */
    /**
     * SMS users [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#DELETE)
     */
    DeleteTheSmsUserGiven(login: string, serviceName: string): Promise<void>;
    /**
     * document operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/document#GET)
     */
    /**
     * List the sms.Incoming objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming#GET)
     */
    SmsReceivedAssociatedToTheSmsUser(login: string, serviceName: string, sender?: string, tag?: string): Promise<number[]>;
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming/%7Bid%7D#GET)
     */
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming/%7Bid%7D#DELETE)
     */
    /**
     * List the sms.Job objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs#GET)
     */
    SmsInPendingAssociatedToTheSmsUser(login: string, serviceName: string): Promise<number[]>;
    /**
     * List the sms.Job objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs#POST)
     */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs/%7Bid%7D#GET)
     */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs/%7Bid%7D#DELETE)
     */
    /**
     * List the sms.Outgoing objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing#GET)
     */
    SmsSentAssociatedToTheSmsUser(login: string, serviceName: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string): Promise<number[]>;
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D#GET)
     */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D#DELETE)
     */
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D/hlr#GET)
     */
    /**
     * List the sms.Receiver objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers#GET)
     */
    /**
     * List the sms.Receiver objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers#POST)
     */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#GET)
     */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#PUT)
     */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#DELETE)
     */
    /**
     * clean operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D/clean#POST)
     */
    /**
     * csv operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D/csv#GET)
     */
    /**
     * List the sms.VirtualNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers#GET)
     */
    VirtualNumbersAssociatedToTheSmsAccount(serviceName: string): Promise<string[]>;
    /**
     * Virtual numbers [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D#GET)
     */
    /**
     * The web access for your virtual number chat application [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#GET)
     */
    /**
     * The web access for your virtual number chat application [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#POST)
     */
    CreateANewWebAccessForThisRessource(number: string, serviceName: string): Promise<SmsChatAccess>;
    /**
     * The web access for your virtual number chat application [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#DELETE)
     */
    DeleteTheGivenWebAccess(number: string, serviceName: string): Promise<void>;
    /**
     * List the sms.Incoming objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming#GET)
     */
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming/%7Bid%7D#GET)
     */
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming/%7Bid%7D#DELETE)
     */
    /**
     * List the sms.VirtualNumberJob objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs#GET)
     */
    /**
     * List the sms.VirtualNumberJob objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs#POST)
     */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs/%7Bid%7D#GET)
     */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs/%7Bid%7D#DELETE)
     */
    /**
     * List the sms.Outgoing objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing#GET)
     */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D#GET)
     */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D#DELETE)
     */
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D/hlr#GET)
     */
    /**
     * Get informations about the given ptt code [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/ptts#GET)
     */
    GetInformationsAboutTheGivenPttCode(ptt: number): Promise<SmsPttDetails>;
}
//# sourceMappingURL=sms.d.ts.map