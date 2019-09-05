import { Client } from '../client';
export declare enum DnssecDnssecStatusEnum {
    DISABLEINPROGRESS = "disableInProgress",
    DISABLED = "disabled",
    ENABLEINPROGRESS = "enableInProgress",
    ENABLED = "enabled"
}
export interface DnssecKey {
    algorithm: DnssecKeyAlgorithmEnum;
    publicKey: string;
    flags: DnssecKeyFlagEnum;
    tag: number;
}
export declare type DnssecKeyAlgorithmEnum = 10 | 13 | 14 | 5 | 7 | 8;
export declare type DnssecKeyFlagEnum = 256 | 257;
export declare enum DnssecKeyStatusEnum {
    ACTIVE = "active",
    GENERATED = "generated",
    PUBLISHED = "published",
    REMOVED = "removed",
    RETIRED = "retired",
    REVOKED = "revoked"
}
export interface DomainconfigurationsObfuscatedEmail {
    value: string;
    type: DomainContactAllTypesEnum;
}
export interface DomainconfigurationsOptin {
    fields: DomainOptinFieldsEnum[];
    type: DomainContactAllTypesEnum;
}
export declare enum DomainContactAllTypesEnum {
    ADMIN = "admin",
    ALL = "all",
    BILLING = "billing",
    OWNER = "owner",
    TECH = "tech"
}
export interface DomainCurrentNameServer {
    host: string;
    toDelete: boolean;
    isUsed: boolean;
    id: number;
    ip?: string;
}
export interface DomaindataAfnicCorporationTrademarkContact {
    inpiTrademarkOwner: string;
    contactId: number;
    inpiNumber: string;
    id: number;
}
export interface DomaindataAssociationContact {
    publicationDate: string;
    contactId: number;
    publicationNumber: string;
    publicationPageNumber: string;
    declarationDate: string;
    id: number;
}
export interface DomaindataclaimNoticeAddress {
    stateOrProvince?: string;
    streets: string[];
    postalCode?: string;
    voiceExtension?: string;
    countryCode?: NichandleCountryEnum;
    fax?: any;
    voice?: any;
    faxExtension?: string;
    city?: string;
}
export interface DomaindataclaimNoticeClaimNotice {
    type?: DomaindataclaimNoticeClaimNoticeTypeEnum;
    endingDate: string;
    label: string;
    id: string;
    startingDate?: string;
    claims?: DomaindataclaimNoticeClaimNoticeDecision[];
}
export interface DomaindataclaimNoticeClaimNoticeDecision {
    classifications: DomaindataclaimNoticeClassification[];
    courtDecisions: DomaindataclaimNoticeCourtDecision[];
    goodsAndServices: string;
    markName: string;
    trademarkContacts: DomaindataclaimNoticeContact[];
    trademarkHolders: DomaindataclaimNoticeContact[];
    jurisdictionCountryCode: string;
    jurisdiction: string;
    trademarkUDRP: DomaindataclaimNoticeUDRP[];
}
export declare enum DomaindataclaimNoticeClaimNoticeTypeEnum {
    UK = "UK",
    TRADEMARK = "TRADEMARK"
}
export interface DomaindataclaimNoticeClassification {
    description: string;
    number: string;
}
export interface DomaindataclaimNoticeContact {
    entitlement?: string;
    name?: string;
    type?: string;
    address: DomaindataclaimNoticeAddress;
    organisation?: string;
    email?: string;
}
export interface DomaindataclaimNoticeCourtDecision {
    countryCode: string;
    referenceNumber: string;
    courtName: string;
    regions: string[];
}
export interface DomaindataclaimNoticeUDRP {
    caseNumber: string;
    udrpProvider: string;
}
export interface DomaindataProContact {
    jobDescription: string;
    licenseNumber: string;
    authority: string;
    authorityWebsite: string;
    id: number;
}
export interface DomaindataSmd {
    data: string;
    protectedLabels: DomaindataSmdLabel[];
    smdId?: string;
    notBefore?: string;
    id: number;
    notAfter?: string;
}
export interface DomaindataSmdLabel {
    trademark: string;
    label: string;
}
export interface DomainDnssecKey {
    status: DnssecKeyStatusEnum;
    publicKey: string;
    algorithm: DnssecKeyAlgorithmEnum;
    tag: number;
    id: number;
    flags: DnssecKeyFlagEnum;
}
export interface DomainDomain {
    glueRecordIpv6Supported: boolean;
    domain: string;
    transferLockStatus: DomainDomainLockStatusEnum;
    glueRecordMultiIpSupported: boolean;
    nameServerType: DomainDomainNsTypeEnum;
    parentService?: DomainParentService;
    offer: DomainOfferEnum;
    dnssecSupported: boolean;
    whoisOwner: string;
    lastUpdate: string;
    owoSupported: boolean;
}
export declare enum DomainDomainContactTypeEnum {
    ADMIN = "admin",
    BILLING = "billing",
    OWNER = "owner",
    TECH = "tech"
}
export declare enum DomainDomainLockStatusEnum {
    LOCKED = "locked",
    LOCKING = "locking",
    UNAVAILABLE = "unavailable",
    UNLOCKED = "unlocked",
    UNLOCKING = "unlocking"
}
export interface DomainDomainNs {
    host: string;
    ip?: string;
}
export declare enum DomainDomainNsStateEnum {
    KO = "ko",
    OK = "ok"
}
export interface DomainDomainNsStatus {
    type: DomainDomainNsTypeEnum;
    state: DomainDomainNsStateEnum;
    usedSince?: string;
}
export declare enum DomainDomainNsTypeEnum {
    EXTERNAL = "external",
    HOSTED = "hosted"
}
export declare enum DomainDomainOptionEnum {
    DNSANYCAST = "dnsAnycast"
}
export declare enum DomainDomainOptionStateEnum {
    RELEASED = "released",
    SUBSCRIBED = "subscribed"
}
export interface DomainGlueRecord {
    host: string;
    ips: string[];
}
export declare enum DomainOfferEnum {
    DIAMOND = "diamond",
    GOLD = "gold",
    PLATINUM = "platinum"
}
export declare enum DomainOperationStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export declare enum DomainOptinFieldsEnum {
    ADDRESS = "address",
    CITY = "city",
    COUNTRY = "country",
    EMAIL = "email",
    FAX = "fax",
    NAME = "name",
    ORGANISATION = "organisation",
    PHONE = "phone",
    PROVINCE = "province",
    ZIP = "zip"
}
export interface DomainOption {
    state: DomainDomainOptionStateEnum;
    expirationDate: string;
    option: DomainDomainOptionEnum;
}
export interface DomainOwo {
    field: DomainWhoisObfuscatorFieldsEnum;
}
export interface DomainParentService {
    name: string;
    type: DomainParentServiceTypeEnum;
}
export declare enum DomainParentServiceTypeEnum {
    _ALLDOM = "/allDom"
}
export interface DomainRule {
    required?: boolean;
    innerConfigurations?: DomainRule[];
    type: string;
    label?: string;
    allowedValues?: string[];
    description: string;
    fields?: string[];
}
export interface DomainrulesOptin {
    fields: DomainOptinFieldsEnum[];
    type: DomainContactAllTypesEnum;
}
export interface DomainTask {
    comment?: string;
    doneDate?: string;
    canRelaunch: boolean;
    id: number;
    creationDate: string;
    lastUpdate: string;
    function: string;
    canAccelerate: boolean;
    status: DomainOperationStatusEnum;
    canCancel: boolean;
    todoDate: string;
}
export interface DomainUkRegistrar {
    tag: string;
    name: string;
}
export declare enum DomainWhoisObfuscatorFieldsEnum {
    ADDRESS = "address",
    EMAIL = "email",
    PHONE = "phone"
}
export interface DomainzoneDnssec {
    status: DnssecDnssecStatusEnum;
}
export interface DomainzoneDynHostLogin {
    login: string;
    zone: string;
    subDomain: string;
}
export interface DomainzoneDynHostRecord {
    id: number;
    ip: string;
    subDomain?: string;
    ttl?: number;
    zone: string;
}
export interface DomainzoneRecord {
    zone: string;
    ttl?: number;
    subDomain?: string;
    id: number;
    fieldType: ZoneNamedResolutionFieldTypeEnum;
    target: string;
}
export interface DomainzoneRedirection {
    title?: string;
    zone: string;
    description?: string;
    type: ZoneRedirectionTypeEnum;
    target: string;
    id: number;
    subDomain?: string;
    keywords?: string;
}
export interface DomainzoneSoa {
    ttl: number;
    refresh: number;
    nxDomainTtl: number;
    expire: number;
    email: string;
    serial: number;
    server: string;
}
export interface DomainzoneTask {
    canCancel: boolean;
    status: DomainOperationStatusEnum;
    todoDate: string;
    doneDate?: string;
    comment?: string;
    canAccelerate: boolean;
    function: string;
    canRelaunch: boolean;
    id: number;
    creationDate: string;
    lastUpdate: string;
}
export interface DomainzoneZone {
    nameServers: string[];
    name: string;
    hasDnsAnycast: boolean;
    lastUpdate: string;
    dnssecSupported: boolean;
}
export interface DomainzoneZoneRestorePoint {
    creationDate: string;
    zoneFileUrl: string;
}
export declare enum NichandleCountryEnum {
    AC = "AC",
    AD = "AD",
    AE = "AE",
    AF = "AF",
    AG = "AG",
    AI = "AI",
    AL = "AL",
    AM = "AM",
    AO = "AO",
    AQ = "AQ",
    AR = "AR",
    AS = "AS",
    AT = "AT",
    AU = "AU",
    AW = "AW",
    AX = "AX",
    AZ = "AZ",
    BA = "BA",
    BB = "BB",
    BD = "BD",
    BE = "BE",
    BF = "BF",
    BG = "BG",
    BH = "BH",
    BI = "BI",
    BJ = "BJ",
    BL = "BL",
    BM = "BM",
    BN = "BN",
    BO = "BO",
    BQ = "BQ",
    BR = "BR",
    BS = "BS",
    BT = "BT",
    BW = "BW",
    BY = "BY",
    BZ = "BZ",
    CA = "CA",
    CC = "CC",
    CD = "CD",
    CF = "CF",
    CG = "CG",
    CH = "CH",
    CI = "CI",
    CK = "CK",
    CL = "CL",
    CM = "CM",
    CN = "CN",
    CO = "CO",
    CR = "CR",
    CU = "CU",
    CV = "CV",
    CW = "CW",
    CX = "CX",
    CY = "CY",
    CZ = "CZ",
    DE = "DE",
    DG = "DG",
    DJ = "DJ",
    DK = "DK",
    DM = "DM",
    DO = "DO",
    DZ = "DZ",
    EA = "EA",
    EC = "EC",
    EE = "EE",
    EG = "EG",
    EH = "EH",
    ER = "ER",
    ES = "ES",
    ET = "ET",
    FI = "FI",
    FJ = "FJ",
    FK = "FK",
    FM = "FM",
    FO = "FO",
    FR = "FR",
    GA = "GA",
    GB = "GB",
    GD = "GD",
    GE = "GE",
    GF = "GF",
    GG = "GG",
    GH = "GH",
    GI = "GI",
    GL = "GL",
    GM = "GM",
    GN = "GN",
    GP = "GP",
    GQ = "GQ",
    GR = "GR",
    GS = "GS",
    GT = "GT",
    GU = "GU",
    GW = "GW",
    GY = "GY",
    HK = "HK",
    HN = "HN",
    HR = "HR",
    HT = "HT",
    HU = "HU",
    IC = "IC",
    ID = "ID",
    IE = "IE",
    IL = "IL",
    IM = "IM",
    IN = "IN",
    IO = "IO",
    IQ = "IQ",
    IR = "IR",
    IS = "IS",
    IT = "IT",
    JE = "JE",
    JM = "JM",
    JO = "JO",
    JP = "JP",
    KE = "KE",
    KG = "KG",
    KH = "KH",
    KI = "KI",
    KM = "KM",
    KN = "KN",
    KP = "KP",
    KR = "KR",
    KW = "KW",
    KY = "KY",
    KZ = "KZ",
    LA = "LA",
    LB = "LB",
    LC = "LC",
    LI = "LI",
    LK = "LK",
    LR = "LR",
    LS = "LS",
    LT = "LT",
    LU = "LU",
    LV = "LV",
    LY = "LY",
    MA = "MA",
    MC = "MC",
    MD = "MD",
    ME = "ME",
    MF = "MF",
    MG = "MG",
    MH = "MH",
    MK = "MK",
    ML = "ML",
    MM = "MM",
    MN = "MN",
    MO = "MO",
    MP = "MP",
    MQ = "MQ",
    MR = "MR",
    MS = "MS",
    MT = "MT",
    MU = "MU",
    MV = "MV",
    MW = "MW",
    MX = "MX",
    MY = "MY",
    MZ = "MZ",
    NA = "NA",
    NC = "NC",
    NE = "NE",
    NF = "NF",
    NG = "NG",
    NI = "NI",
    NL = "NL",
    NO = "NO",
    NP = "NP",
    NR = "NR",
    NU = "NU",
    NZ = "NZ",
    OM = "OM",
    PA = "PA",
    PE = "PE",
    PF = "PF",
    PG = "PG",
    PH = "PH",
    PK = "PK",
    PL = "PL",
    PM = "PM",
    PN = "PN",
    PR = "PR",
    PS = "PS",
    PT = "PT",
    PW = "PW",
    PY = "PY",
    QA = "QA",
    RE = "RE",
    RO = "RO",
    RS = "RS",
    RU = "RU",
    RW = "RW",
    SA = "SA",
    SB = "SB",
    SC = "SC",
    SD = "SD",
    SE = "SE",
    SG = "SG",
    SH = "SH",
    SI = "SI",
    SJ = "SJ",
    SK = "SK",
    SL = "SL",
    SM = "SM",
    SN = "SN",
    SO = "SO",
    SR = "SR",
    SS = "SS",
    ST = "ST",
    SV = "SV",
    SX = "SX",
    SY = "SY",
    SZ = "SZ",
    TA = "TA",
    TC = "TC",
    TD = "TD",
    TF = "TF",
    TG = "TG",
    TH = "TH",
    TJ = "TJ",
    TK = "TK",
    TL = "TL",
    TM = "TM",
    TN = "TN",
    TO = "TO",
    TR = "TR",
    TT = "TT",
    TV = "TV",
    TW = "TW",
    TZ = "TZ",
    UA = "UA",
    UG = "UG",
    UM = "UM",
    UNKNOWN = "UNKNOWN",
    US = "US",
    UY = "UY",
    UZ = "UZ",
    VA = "VA",
    VC = "VC",
    VE = "VE",
    VG = "VG",
    VI = "VI",
    VN = "VN",
    VU = "VU",
    WF = "WF",
    WS = "WS",
    XK = "XK",
    YE = "YE",
    YT = "YT",
    ZA = "ZA",
    ZM = "ZM",
    ZW = "ZW"
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
    canDeleteAtExpiration: boolean;
    possibleRenewPeriod?: number[];
    creation: string;
    engagedUpTo?: string;
    contactAdmin: string;
    renewalType: ServiceRenewalTypeEnum;
    contactTech: string;
    renew?: ServiceRenewType;
    contactBilling: string;
    status: ServiceStateEnum;
    expiration: string;
    serviceId: number;
    domain: string;
}
export declare enum ZoneNamedResolutionFieldTypeEnum {
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
export declare enum ZoneRedirectionTypeEnum {
    INVISIBLE = "invisible",
    VISIBLE = "visible",
    VISIBLEPERMANENT = "visiblePermanent"
}
export interface ZoneResetRecord {
    target: string;
    fieldType: ZoneResettableNamedResolutionFieldTypeEnum;
}
export declare enum ZoneResettableNamedResolutionFieldTypeEnum {
    A = "A",
    MX = "MX"
}
export interface ZoneStatus {
    warnings?: string[];
    isDeployed: boolean;
    errors?: string[];
}
export declare class Domain {
    private client;
    constructor(client: Client);
    ListAvailableServices(whoisOwner?: string): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<DomainDomain>;
    AlterThisObjectProperties(serviceName: string, payload: DomainDomain): Promise<void>;
    ActivateTheDNSZoneForThisDomain(serviceName: string, minimized?: boolean): Promise<void>;
    ReturnAuthInfoCodeIfTheDomainIsUnlocked(serviceName: string): Promise<string>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    RetrieveObfuscatedEmailsConfiguration(serviceName: string): Promise<DomainconfigurationsObfuscatedEmail[]>;
    SaveANewObfuscatedEmailsConfiguration(contacts: DomainContactAllTypesEnum[], serviceName: string): Promise<DomainconfigurationsObfuscatedEmail[]>;
    RefreshAnObfuscatedEmailsConfiguration(contacts: DomainContactAllTypesEnum[], serviceName: string): Promise<void>;
    RetrieveOptinConfiguration(serviceName: string): Promise<DomainconfigurationsOptin[]>;
    SaveANewOptinConfiguration(optin: DomainconfigurationsOptin[], serviceName: string): Promise<DomainconfigurationsOptin[]>;
    ListOfDomainDSRecords(serviceName: string, flags?: DnssecKeyFlagEnum, status?: DnssecKeyStatusEnum): Promise<number[]>;
    UpdateDSRecords(keys: DnssecKey[], serviceName: string): Promise<DomainTask>;
    RegenerateTheObfuscatedEmailAddress(contactType: DomainDomainContactTypeEnum[], serviceName: string): Promise<void>;
    ListOfGlueRecord(serviceName: string, host?: string): Promise<string[]>;
    CreateAGlueRecord(host: string, ips: string[], serviceName: string): Promise<DomainTask>;
    DeleteTheGlueRecord(host: string, serviceName: string): Promise<DomainTask>;
    UpdateTheGlueRecord(host: string, ips: string[], serviceName: string): Promise<DomainTask>;
    ListOfCurrentNameServers(serviceName: string): Promise<number[]>;
    AddNewNameServer(nameServer: DomainDomainNs[], serviceName: string): Promise<DomainTask>;
    DeleteANameServer(id: number, serviceName: string): Promise<DomainTask>;
    GetNameServerStatus(id: number, serviceName: string): Promise<DomainDomainNsStatus>;
    UpdateDNSServers(nameServers: DomainDomainNs[], serviceName: string): Promise<DomainTask>;
    ListOfDomainOptions(serviceName: string): Promise<DomainDomainOptionEnum[]>;
    ReleaseAGivenOption(option: DomainDomainOptionEnum, serviceName: string): Promise<void>;
    ListOfWhoisObfuscators(serviceName: string, field?: DomainWhoisObfuscatorFieldsEnum): Promise<DomainWhoisObfuscatorFieldsEnum[]>;
    AddWhoisObfuscators(fields: DomainWhoisObfuscatorFieldsEnum[], serviceName: string): Promise<DomainWhoisObfuscatorFieldsEnum[]>;
    DeleteAWhoisObfuscator(field: DomainWhoisObfuscatorFieldsEnum, serviceName: string): Promise<void>;
    RetrieveEmailsObfuscationRule(serviceName: string): Promise<DomainContactAllTypesEnum[]>;
    RetrieveOptinRule(serviceName: string): Promise<DomainrulesOptin[]>;
    DomainPendingTasks(serviceName: string, _function?: string, status?: DomainOperationStatusEnum): Promise<number[]>;
    AccelerateTheTask(id: number, serviceName: string): Promise<void>;
    CancelTheTask(id: number, serviceName: string): Promise<void>;
    RelaunchTheTask(id: number, serviceName: string): Promise<void>;
    ScheduleAnOutgoingTransferTaskForThisDomainUkOnly(serviceName: string, tag: string): Promise<DomainTask>;
    ReturnTheListOfAllUkRegistrars(serviceName: string): Promise<DomainUkRegistrar[]>;
    RetrieveAllAssociationInformationAccordingToAfnic(): Promise<number[]>;
    PostANewAssociationInformationAccordingToAfnic(contactId: number, declarationDate: string, publicationDate: string, publicationNumber: string, publicationPageNumber: string): Promise<DomaindataAssociationContact>;
    RetrieveAnAssociationInformationAccordingToAfnic(associationInformationId: number): Promise<DomaindataAssociationContact>;
    RetrieveAllCorporationTrademarkInformationAccordingToAfnic(): Promise<number[]>;
    PostANewCorporationTrademarkInformationAccordingToAfnic(contactId: number, inpiNumber: string, inpiTrademarkOwner: string): Promise<DomaindataAfnicCorporationTrademarkContact>;
    RetrieveACorporationTrademarkInformationAccordingToAfnic(afnicCorporationTrademarkId: number): Promise<DomaindataAfnicCorporationTrademarkContact>;
    RetrieveClaimNoticesAssociatedToADomain(domain: string): Promise<DomaindataclaimNoticeClaimNotice>;
    ListAllTheExtensionsForASpecificCountry(country: NichandleCountryEnum): Promise<string[]>;
    RetrieveAllYourProContact(): Promise<number[]>;
    PostNewInformationAboutProContactInformation(authority: string, authorityWebsite: string, jobDescription: string, licenseNumber: string, contactId?: number): Promise<DomaindataProContact>;
    RetrieveInformationAboutAProContact(proContactId: number): Promise<DomaindataProContact>;
    ListAllYourSMDFiles(protectedLabelsLabel?: string): Promise<number[]>;
    PostANewSMDFile(data: string): Promise<DomaindataSmd>;
    RetrieveInformationAboutASMDFile(smdId: number): Promise<DomaindataSmd>;
    ModifyAnExistingSMDFile(data: string, smdId: number): Promise<DomaindataSmd>;
    DeleteASMDFile(smdId: number): Promise<void>;
    ListAllTheRulesForASpecificCartIditemId(cartId: string, itemId: number): Promise<DomainRule>;
    ConfirmTerminationOfYourService(token: string, zoneName: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    EnableDnssec(zoneName: string): Promise<void>;
    DisableDnssec(zoneName: string): Promise<void>;
    DynHostLogins(zoneName: string, login?: string, subDomain?: string): Promise<string[]>;
    CreateANewDynHostLogin(loginSuffix: string, password: string, subDomain: string, zoneName: string): Promise<DomainzoneDynHostLogin>;
    DeleteADynHostLogin(login: string, zoneName: string): Promise<void>;
    ChangePasswordOfTheDynHostLogin(login: string, password: string, zoneName: string): Promise<void>;
    DynHostRecords(zoneName: string, subDomain?: string): Promise<number[]>;
    CreateANewDynHostRecordDontForgetToRefreshTheZone(ip: string, zoneName: string, subDomain?: string): Promise<DomainzoneDynHostRecord>;
    DeleteADynHostRecordDontForgetToRefreshTheZone(id: number, zoneName: string): Promise<void>;
    ExportZone(zoneName: string): Promise<string>;
    ZoneRestorePoints(zoneName: string, creationDateFrom?: string, creationDateTo?: string): Promise<string[]>;
    RestoreTheDNSZone(creationDate: string, zoneName: string): Promise<DomainzoneTask>;
    ImportZone(zoneFile: string, zoneName: string): Promise<DomainzoneTask>;
    RecordsOfTheZone(zoneName: string, fieldType?: ZoneNamedResolutionFieldTypeEnum, subDomain?: string): Promise<number[]>;
    CreateANewDNSRecordDontForgetToRefreshTheZone(fieldType: ZoneNamedResolutionFieldTypeEnum, target: string, zoneName: string, subDomain?: string, ttl?: number): Promise<DomainzoneRecord>;
    DeleteADNSRecordDontForgetToRefreshTheZone(id: number, zoneName: string): Promise<void>;
    Redirections(zoneName: string, subDomain?: string): Promise<number[]>;
    CreateANewRedirectionDontForgetToRefreshTheZone(target: string, type: ZoneRedirectionTypeEnum, zoneName: string, description?: string, keywords?: string, subDomain?: string, title?: string): Promise<DomainzoneRedirection>;
    DeleteARedirectionDontForgetToRefreshTheZone(id: number, zoneName: string): Promise<void>;
    ApplyZoneModificationOnDNSServers(zoneName: string): Promise<void>;
    ResetTheDNSZone(zoneName: string, DnsRecords?: ZoneResetRecord[], minimized?: boolean): Promise<void>;
    ZoneStatus(zoneName: string): Promise<ZoneStatus>;
    TerminateYourService(zoneName: string): Promise<string>;
}
//# sourceMappingURL=domain.d.ts.map