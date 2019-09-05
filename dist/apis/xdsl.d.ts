import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export interface ComplexTypeUnitAndValues<T> {
    unit: string;
    values: T[];
}
export interface ConnectivityeligibilityMeetings {
    canBookFakeMeeting: boolean;
    meetingSlots: ConnectivityeligibilityMeetingSlot[];
}
export interface ConnectivityeligibilityMeetingSlot {
    startDate: string;
    uiCode: string;
    endDate: string;
}
export declare enum CoreTypesCountryEnum {
    AC = "ac",
    AD = "ad",
    AE = "ae",
    AF = "af",
    AG = "ag",
    AI = "ai",
    AL = "al",
    AM = "am",
    AN = "an",
    AO = "ao",
    AQ = "aq",
    AR = "ar",
    AS = "as",
    AT = "at",
    AU = "au",
    AW = "aw",
    AX = "ax",
    AZ = "az",
    BA = "ba",
    BB = "bb",
    BD = "bd",
    BE = "be",
    BF = "bf",
    BG = "bg",
    BH = "bh",
    BI = "bi",
    BJ = "bj",
    BL = "bl",
    BM = "bm",
    BN = "bn",
    BO = "bo",
    BQ = "bq",
    BR = "br",
    BS = "bs",
    BT = "bt",
    BV = "bv",
    BW = "bw",
    BY = "by",
    BZ = "bz",
    CA = "ca",
    CC = "cc",
    CD = "cd",
    CF = "cf",
    CG = "cg",
    CH = "ch",
    CI = "ci",
    CK = "ck",
    CL = "cl",
    CM = "cm",
    CN = "cn",
    CO = "co",
    CR = "cr",
    CS = "cs",
    CU = "cu",
    CV = "cv",
    CW = "cw",
    CX = "cx",
    CY = "cy",
    CZ = "cz",
    DE = "de",
    DJ = "dj",
    DK = "dk",
    DM = "dm",
    DO = "do",
    DZ = "dz",
    EC = "ec",
    EE = "ee",
    EG = "eg",
    EH = "eh",
    ER = "er",
    ES = "es",
    ET = "et",
    FC = "fc",
    FD = "fd",
    FI = "fi",
    FJ = "fj",
    FK = "fk",
    FM = "fm",
    FO = "fo",
    FR = "fr",
    FX = "fx",
    GA = "ga",
    GB = "gb",
    GD = "gd",
    GE = "ge",
    GF = "gf",
    GG = "gg",
    GH = "gh",
    GI = "gi",
    GL = "gl",
    GM = "gm",
    GN = "gn",
    GP = "gp",
    GQ = "gq",
    GR = "gr",
    GS = "gs",
    GT = "gt",
    GU = "gu",
    GW = "gw",
    GY = "gy",
    HK = "hk",
    HM = "hm",
    HN = "hn",
    HR = "hr",
    HT = "ht",
    HU = "hu",
    ID = "id",
    IE = "ie",
    IL = "il",
    IM = "im",
    IN = "in",
    IO = "io",
    IQ = "iq",
    IR = "ir",
    IS = "is",
    IT = "it",
    JE = "je",
    JM = "jm",
    JO = "jo",
    JP = "jp",
    KE = "ke",
    KG = "kg",
    KH = "kh",
    KI = "ki",
    KM = "km",
    KN = "kn",
    KP = "kp",
    KR = "kr",
    KW = "kw",
    KY = "ky",
    KZ = "kz",
    LA = "la",
    LB = "lb",
    LC = "lc",
    LI = "li",
    LK = "lk",
    LR = "lr",
    LS = "ls",
    LT = "lt",
    LU = "lu",
    LV = "lv",
    LY = "ly",
    MA = "ma",
    MC = "mc",
    MD = "md",
    ME = "me",
    MF = "mf",
    MG = "mg",
    MH = "mh",
    MK = "mk",
    ML = "ml",
    MM = "mm",
    MN = "mn",
    MO = "mo",
    MP = "mp",
    MQ = "mq",
    MR = "mr",
    MS = "ms",
    MT = "mt",
    MU = "mu",
    MV = "mv",
    MW = "mw",
    MX = "mx",
    MY = "my",
    MZ = "mz",
    NA = "na",
    NC = "nc",
    NE = "ne",
    NF = "nf",
    NG = "ng",
    NI = "ni",
    NL = "nl",
    NO = "no",
    NP = "np",
    NR = "nr",
    NU = "nu",
    NZ = "nz",
    OM = "om",
    PA = "pa",
    PE = "pe",
    PF = "pf",
    PG = "pg",
    PH = "ph",
    PK = "pk",
    PL = "pl",
    PM = "pm",
    PN = "pn",
    PR = "pr",
    PS = "ps",
    PT = "pt",
    PW = "pw",
    PY = "py",
    QA = "qa",
    QC = "qc",
    RE = "re",
    RO = "ro",
    RS = "rs",
    RU = "ru",
    RW = "rw",
    SA = "sa",
    SB = "sb",
    SC = "sc",
    SD = "sd",
    SE = "se",
    SG = "sg",
    SH = "sh",
    SI = "si",
    SJ = "sj",
    SK = "sk",
    SL = "sl",
    SM = "sm",
    SN = "sn",
    SO = "so",
    SR = "sr",
    SS = "ss",
    ST = "st",
    SV = "sv",
    SX = "sx",
    SY = "sy",
    SZ = "sz",
    TC = "tc",
    TD = "td",
    TF = "tf",
    TG = "tg",
    TH = "th",
    TJ = "tj",
    TK = "tk",
    TL = "tl",
    TM = "tm",
    TN = "tn",
    TO = "to",
    TP = "tp",
    TR = "tr",
    TT = "tt",
    TV = "tv",
    TW = "tw",
    TZ = "tz",
    UA = "ua",
    UG = "ug",
    UK = "uk",
    UM = "um",
    US = "us",
    UY = "uy",
    UZ = "uz",
    VA = "va",
    VC = "vc",
    VE = "ve",
    VG = "vg",
    VI = "vi",
    VN = "vn",
    VU = "vu",
    WE = "we",
    WF = "wf",
    WS = "ws",
    YE = "ye",
    YT = "yt",
    YU = "yu",
    ZA = "za",
    ZM = "zm",
    ZW = "zw"
}
export declare enum CoreTypesIpVersionEnum {
    V4 = "v4",
    V6 = "v6"
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
export interface OrderContract {
    name: string;
    url: string;
    content: string;
}
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
export interface OrderOrder {
    prices: OrderOrderPrices;
    details: OrderOrderDetail[];
    url?: string;
    contracts: OrderContract[];
    orderId?: number;
}
export interface OrderOrderDetail {
    totalPrice: OrderPrice;
    quantity: number;
    detailType?: OrderOrderDetailTypeEnum;
    description: string;
    unitPrice: OrderPrice;
    domain: string;
}
export declare enum OrderOrderDetailTypeEnum {
    ACCESSORY = "ACCESSORY",
    CAUTION = "CAUTION",
    CHOOSED = "CHOOSED",
    CONSUMPTION = "CONSUMPTION",
    CREATION = "CREATION",
    DELIVERY = "DELIVERY",
    DURATION = "DURATION",
    GIFT = "GIFT",
    INSTALLATION = "INSTALLATION",
    LICENSE = "LICENSE",
    MUTE = "MUTE",
    OTHER = "OTHER",
    OUTPLAN = "OUTPLAN",
    QUANTITY = "QUANTITY",
    REFUND = "REFUND",
    RENEW = "RENEW",
    SPECIAL = "SPECIAL",
    SWITCH = "SWITCH",
    TRANSFER = "TRANSFER",
    VOUCHER = "VOUCHER"
}
export interface OrderOrderPrices {
    withTax: OrderPrice;
    withoutTax: OrderPrice;
    tax: OrderPrice;
}
export interface OrderPrice {
    value: any;
    text: string;
    currencyCode: OrderCurrencyCodeEnum;
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
    deleteAtExpiration: boolean;
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
    status: ServiceStateEnum;
    domain: string;
    engagedUpTo?: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    expiration: string;
    renewalType: ServiceRenewalTypeEnum;
    contactBilling: string;
    contactAdmin: string;
    contactTech: string;
    creation: string;
    serviceId: number;
    canDeleteAtExpiration: boolean;
}
export interface SparexdslXdslSpare {
    macAddress: string;
    brand: string;
}
export interface TelephonyContact {
    name?: string;
    country?: CoreTypesCountryEnum;
    phone?: string;
    firstname?: string;
    email?: string;
    organisation?: string;
    address?: string;
    city?: string;
    zip?: string;
}
export interface TelephonyRma {
    offerTypeOld: TelephonyRmaOfferTypeEnum;
    cancellable: boolean;
    status: TelephonyRmaStatusEnum;
    type: TelephonyRmaTypeEnum;
    steps: TelephonyRmaStep[];
    process: TelephonyRmaReplaceTypeEnum;
    id: string;
    shippingContact: TelephonyContact;
    offerTypeNew?: TelephonyRmaOfferTypeEnum;
    terminationDatetime?: string;
    receptionDatetime?: string;
    newMerchandise?: string;
    creationDatetime: string;
    equipmentReference: string;
}
export declare enum TelephonyRmaOfferTypeEnum {
    DEPOSIT = "deposit",
    LOAN = "loan",
    PURCHASE = "purchase"
}
export declare enum TelephonyRmaReplaceTypeEnum {
    CHANGEPHONE = "changePhone",
    PHONERESTITUTION = "phoneRestitution",
    UNDEFINED = "undefined"
}
export declare enum TelephonyRmaStatusEnum {
    CLOSED = "closed",
    OPEN = "open",
    RECEIVED = "received"
}
export interface TelephonyRmaStep {
    name: TelephonyRmaStepNameEnum;
    status: TelephonyRmaStepStatusEnum;
    infos?: string;
    description: string;
    doneDate?: string;
}
export declare enum TelephonyRmaStepNameEnum {
    DISPATCHJUSTIFICATION = "dispatchJustification",
    EQUIPMENTSENDING = "equipmentSending",
    EQUIPMENTTESTING = "equipmentTesting",
    OPENING = "opening",
    PARCELRECEPTION = "parcelReception",
    PARCELVALIDATION = "parcelValidation",
    VALIDATION = "validation"
}
export declare enum TelephonyRmaStepStatusEnum {
    DONE = "done",
    TODO = "todo"
}
export declare enum TelephonyRmaTypeEnum {
    AFTER_SALE_EQUIPMENT_SERVICE_EXCHANGE = "after sale equipment service exchange",
    AFTER_SALE_PHONE_SERVICE_EXCHANGE = "after sale phone service exchange",
    EQUIPMENT_RESTITUTION = "equipment restitution",
    FAST_EXCHANGE = "fast exchange",
    OLD_MERCHANDISE_RECEPTION_BEFORE_EXCHANGE = "old merchandise reception before exchange",
    PHONE_RESTITUTION = "phone restitution",
    RESENDS_DUE_TO_SHIPPING_LOST_BY_THE_CARRIER = "resends due to shipping lost by the carrier",
    RESENDS_DUE_TO_SHIPPING_NOT_WITHDRAW = "resends due to shipping not withdraw",
    SPECIFIC_RETURN_MERCHANDISE_AUTHORISATION = "specific return merchandise authorisation",
    TERMINATION = "termination",
    UNKNOWN = "unknown"
}
export interface Access {
    accessType: DslTypeEnum;
    capabilities: AccessCapabilities;
    address: AddressDetail;
    role: AccessRoleEnum;
    packName?: string;
    monitoring: boolean;
    description: string;
    accessName: string;
    pairsNumber: number;
    ipv6Enabled: boolean;
    nra: string;
    status: AccessStatusEnum;
    lnsRateLimit?: number;
}
export interface AccessCapabilities {
    canApplyLnsRateLimit: boolean;
    canGetRadiusConnectionLogs: boolean;
    hasDslamPort: boolean;
    canResetDslamPort: boolean;
    canChangeLns: boolean;
    canChangeDslamProfile: boolean;
}
export interface AccessDiagnostic {
    isActiveOnLns?: boolean;
    diagnosticTime: string;
    lineDetails?: LineDiagnostic[];
    ping?: boolean;
    remaining: number;
    isModemConnected?: boolean;
    capabilities: AccessDiagnosticCapabilities;
    incident?: boolean;
}
export interface AccessDiagnosticCapabilities {
    proposedProfileId: boolean;
    isActiveOnLns: boolean;
    sync: boolean;
    isModemConnected: boolean;
    ping: boolean;
    lineTest: boolean;
    incident: boolean;
}
export declare enum AccessRoleEnum {
    BACKUP = "backup",
    MAIN = "main"
}
export declare enum AccessStatisticsTypeEnum {
    PING = "ping",
    TRAFFIC_DOWNLOAD = "traffic:download",
    TRAFFIC_UPLOAD = "traffic:upload"
}
export declare enum AccessStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    CLOSE = "close",
    DELETING = "deleting",
    DOING = "doing",
    MIGRATION = "migration",
    SLAMMING = "slamming",
    UPGRADEOFFER = "upgradeOffer"
}
export interface AddressDetail {
    lastName: string;
    street: string;
    zipCode: string;
    rivoliCode: string;
    stairs?: string;
    door?: string;
    firstName: string;
    building?: string;
    floor?: string;
    residence?: string;
    city: string;
    numberStreet: string;
    inseeCode: string;
}
export interface AntiSpam {
    date: string;
    lastSpamDetected: string;
    ip: string;
    status: AntiSpamAntiSpamStatusEnum;
}
export declare enum AntiSpamAntiSpamStatusEnum {
    BLOCK = "block",
    DONE = "done",
    NEW = "new",
    UNBLOCK = "unblock",
    WARN = "warn"
}
export interface AntiSpamEvidencesInfo {
    error?: string;
    result?: AntiSpamEvidencesInfoDetail[];
    status: AntiSpamEvidencesInfoStatusEnum;
}
export interface AntiSpamEvidencesInfoDetail {
    filename: string;
    date: string;
    url: string;
}
export declare enum AntiSpamEvidencesInfoStatusEnum {
    ERROR = "error",
    OK = "ok",
    PENDING = "pending"
}
export interface AsyncTask<T> {
    status: AsyncTaskStatusEnum;
    result?: T;
    error?: string;
}
export interface AsyncTaskArray<T> {
    result?: T[];
    error?: string;
    status: AsyncTaskStatusEnum;
}
export declare enum AsyncTaskStatusEnum {
    ERROR = "error",
    OK = "ok",
    PENDING = "pending"
}
export interface ConnectedDevice {
    interfaceType: string;
    leaseTimeRemaining: number;
    ipAddress: string;
    macAddress: string;
    informationDate: string;
    hostName: string;
    addressSource: XdslModemConfigConnectedDeviceAddressSourceEnum;
    active: boolean;
}
export declare enum DeconsolidationEnum {
    CREATENEIGHBOUR = "createNeighbour",
    CREATION = "creation",
    CREATIONNEIGHBOUR = "creationNeighbour",
    PARTIAL = "partial",
    TOTAL = "total"
}
export interface DeconsolidationTerms {
    engagement: any;
    price: OrderPrice;
    monthlyPrice: OrderPrice;
}
export interface DeviceModemInfo {
    oui: string;
    overEthernet?: string;
    macAddress: string;
    serial: string;
    ip: string;
    softVersion: string;
    model: string;
    lastUpdate: string;
    pppLogin?: string;
    brand: string;
}
export interface DHCP {
    defaultGateway: string;
    startAddress: string;
    secondaryDNS?: string;
    taskId?: number;
    leaseTime: number;
    dhcpName: string;
    endAddress: string;
    domainName: string;
    primaryDNS: string;
    serverEnabled: boolean;
    subnetMask: string;
}
export interface DHCPStaticAddress {
    taskId?: number;
    name?: string;
    IPAddress: string;
    MACAddress: string;
}
export interface DslamLineProfile {
    isCurrent: boolean;
    id: number;
    name: string;
}
export interface DslamPort {
    profile?: DslamLineProfile;
    status: DslamPortStatusEnum;
    lastDesyncDate?: string;
    lastSyncDate?: string;
}
export interface DslamPortLog {
    date: string;
    numberOfOccurrences: number;
    message: string;
    lastOccurrenceDate: string;
}
export declare enum DslamPortStatusEnum {
    ACTIVATED = "activated",
    DEACTIVATED = "deactivated",
    OUTOFSYNC = "outofsync"
}
export declare enum DslTypeEnum {
    ADSL = "adsl",
    FTTH = "ftth",
    SDSL = "sdsl",
    VDSL = "vdsl"
}
export interface EligibilityAddress {
    logo?: string;
    streetNumber?: string;
    door?: string;
    building?: string;
    stair?: string;
    street?: EligibilityStreet;
    city: EligibilityCity;
    residence?: string;
    floor?: string;
    owner?: string;
}
export interface EligibilityBuilding {
    nro: string;
    type: EligibilityBuildingTypeEnum;
    reference: string;
    name: string;
}
export declare enum EligibilityBuildingTypeEnum {
    BUILDING = "BUILDING",
    HOUSE = "HOUSE"
}
export interface EligibilityCity {
    zipCode: string;
    name: string;
    locality?: string;
    inseeCode: string;
}
export interface EligibilityCodeAndMessage {
    code: string;
    message: string;
}
export interface EligibilityEligibility {
    characteristics: EligibilityLineCharacteristics;
    endpoint: EligibilityLineEndpointEnum;
    offers: EligibilityOffer[];
    portability: EligibilityPortability;
    infos: EligibilityLineInfos;
    id: string;
    address?: EligibilityAddress;
}
export interface EligibilityFiberEligibility {
    id: string;
    offers: EligibilityFiberOffer[];
}
export interface EligibilityFiberOffer {
    eligible: boolean;
    gtr: GtrEnum[];
    downloadRate?: any;
    availibilityDate?: string;
    uploadRate?: any;
    label: string;
    reason?: string;
    guaranteed: boolean;
    type: DslTypeEnum;
}
export interface EligibilityFiberStreet {
    streetCode: string;
    streetName: string;
}
export declare enum EligibilityLandlineStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export interface EligibilityLine {
    address: EligibilityAddress;
    lineNumber: string;
    lineStatus: EligibilityLandlineStatusEnum;
    contactName: string;
}
export interface EligibilityLineCharacteristics {
    desaturationFreePairs: number;
    nra: string;
    distance: number;
    calibration: EligibilityLineSectionCalibration[];
    mitigationSdsl: any;
    freePairs: number;
    mitigation: any;
}
export declare enum EligibilityLineEndpointEnum {
    ADDRESS = "address",
    LINE = "line"
}
export interface EligibilityLineInfos {
    lineNumber?: string;
    lineStatus?: EligibilityLandlineStatusEnum;
    createNeighbour: boolean;
    unlistedNumber: boolean;
}
export interface EligibilityLineSectionCalibration {
    diameter: number;
    length: number;
}
export interface EligibilityMeetingSlot {
    startDate: string;
    uiCode: string;
    endDate: string;
}
export interface EligibilityMeetingSlots {
    canBookFakeMeeting: boolean;
    meetingSlots: EligibilityMeetingSlot[];
}
export interface EligibilityOffer {
    desaturation?: boolean;
    type: DslTypeEnum;
    provider?: EligibilityProviderEnum;
    guaranteed: boolean;
    uploadRate?: any;
    label: string;
    rate?: any;
    pairs?: number;
    unbundling?: DeconsolidationEnum[];
    gtr: GtrEnum[];
    downloadRate?: any;
}
export interface EligibilityPortability {
    underCondition: boolean;
    eligible: boolean;
    comments: EligibilityCodeAndMessage[];
    warnings: EligibilityCodeAndMessage[];
}
export declare enum EligibilityProviderEnum {
    AXIONE = "axione",
    FT = "ft",
    KOSC = "kosc",
    OVH = "ovh",
    SFR = "sfr"
}
export interface EligibilityStreet {
    name: string;
    rivoliCode: string;
}
export interface EmailproTask {
    status: EmailproTaskStatusEnum;
    todoDate: string;
    function: string;
    finishDate?: string;
}
export declare enum EmailproTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface ExtraIpRangeMove {
    date: string;
    moveTo: string;
    ipRange: any;
}
export declare type FaultRepairTimeEnum = '4HNO' | '4HO' | 'NORMAL';
export declare type GtrEnum = '4hno' | '4ho' | 'none';
export interface Incident {
    comment: string;
    operators: OperatorTypeEnum[];
    endDate?: string;
    departments: string[];
    taskId?: number;
    id: number;
    nra: string[];
    creationDate: string;
}
export interface IP {
    version: CoreTypesIpVersionEnum;
    status: IpStatusEnum;
    ip: string;
    range: number;
    dnsList: string[];
}
export declare enum IpStatusEnum {
    ACTIVE = "active",
    CLOSE = "close",
    TODELETE = "toDelete"
}
export interface LAN {
    IPAddress: string;
    taskId?: number;
    lanName: string;
    subnetMask: string;
    addressingType: XdslModemConfigAddressingTypeEnum;
}
export interface LandlineConcentrationPoint {
    lineInitialSection: number;
    lineInitialSectionPair: number;
    lineHead: string;
}
export interface Line {
    directDistribution?: boolean;
    syncDown?: any;
    portability: boolean;
    mitigation: any;
    syncUp?: any;
    lineSectionsLength: LineSectionLength[];
    faultRepairTime: FaultRepairTimeEnum;
    concentrationPoint?: LandlineConcentrationPoint;
    number: string;
    deconsolidation: DeconsolidationEnum;
    distance: number;
    originalNumber?: string;
}
export interface LineDiagnostic {
    proposedProfileId?: number;
    number: string;
    lineTestTime?: string;
    sync: boolean;
    lineTest?: LineTestEnum;
}
export interface LineDiagnosticAnswers {
    siteClosedDays?: string;
    modemType?: string;
    hasModemKeptSynchronization?: boolean;
    startMorningHours?: string;
    uploadBandwidthTest?: number;
    bandwidthTestUnit?: LineDiagnosticBandwidthTestUnitEnum;
    individualSite?: boolean;
    modemStillSynchronized?: boolean;
    datetimeOfAppearance?: string;
    problemType?: LineDiagnosticProblemTypeEnum;
    siteOpening?: string;
    startAfternoonHours?: string;
    resolvedAfterTests?: boolean;
    idAppointment?: number;
    severalInternetConnections?: boolean;
    conditionsAccepted?: boolean;
    comment?: string;
    ovhTicket?: string;
    contactPhone?: string;
    secureSite?: boolean;
    downloadBandwidthTest?: number;
    siteDigicode?: string;
    followBySms?: boolean;
    modemIsSynchronized?: boolean;
    endAfternoonHours?: string;
    endMorningHours?: string;
    modemMac?: string;
}
export declare enum LineDiagnosticBandwidthTestUnitEnum {
    KBPS = "Kbps",
    MBPS = "Mbps"
}
export interface LineDiagnosticConnectionInformations {
    upstreamSync?: any;
    upstreamMargin?: any;
    downstreamAttenuation?: any;
    downstreamSync?: any;
    downstreamMargin?: any;
    ifName?: string;
    profile?: string;
    upstreamAttenuation?: any;
    crcError?: number;
}
export declare enum LineDiagnosticCustomerActionsEnum {
    BEPREPAREDTOCHECKMODEMSYNCHRONIZATION = "bePreparedToCheckModemSynchronization",
    CHANGEDSLFILTERANDPLUGINDTI = "changeDslFilterAndPlugInDti",
    CHANGEEXTENSIONCABLE = "changeExtensionCable",
    CHANGEPROFILE = "changeProfile",
    CHECKCONNECTIONCABLE = "checkConnectionCable",
    CHECKCONNECTIONLOGINANDPARAMETERS = "checkConnectionLoginAndParameters",
    CHECKFILTER = "checkFilter",
    CONNECTMODEMTOOTHERPLUGS = "connectModemToOtherPlugs",
    NEUTRALTEST = "neutralTest",
    REBOOTMODEM = "rebootModem",
    RESETMODEM = "resetModem",
    UNPLUGEVERYMODEMS = "unplugEveryModems",
    UNPLUGMODEM = "unplugModem"
}
export interface LineDiagnosticCustomerActionToDo {
    name: LineDiagnosticCustomerActionsEnum;
    description: string;
}
export interface LineDiagnosticDiagnostic {
    status: LineDiagnosticDiagnosticStatusEnum;
    data: LineDiagnosticDiagnosticData;
    faultType: LineDiagnosticFaultTypeEnum;
    id: number;
}
export interface LineDiagnosticDiagnosticData {
    actionsDone: LineDiagnosticCustomerActionsEnum[];
    comment?: string;
    answers: LineDiagnosticAnswers;
    toAnswer: LineDiagnosticQuestion[];
    creationDate: string;
    timeout: number;
    seltTest: LineDiagnosticSeltResult;
    diagnosticDoneDate?: string;
    lastUpdate: string;
    robotAction?: LineDiagnosticRobotActionsEnum;
    actionsToDo: LineDiagnosticCustomerActionToDo[];
    error: string;
    lineDetails: LineDiagnosticLineDetails;
}
export declare enum LineDiagnosticDiagnosticStatusEnum {
    CANCELLED = "cancelled",
    CONNECTIONPROBLEM = "connectionProblem",
    GENERICINCIDENTPENDING = "genericIncidentPending",
    HAVETOCONNECTMODEMONTHERIGHTPLUG = "haveToConnectModemOnTheRightPlug",
    INIT = "init",
    INTERVENTIONREQUESTED = "interventionRequested",
    NOBANDWIDTHFAULT = "noBandwidthFault",
    NOPROBLEMANYMORE = "noProblemAnymore",
    NOSYNCFAULTDIAGNOSTICREQUIRED = "noSyncFaultDiagnosticRequired",
    PROBLEM = "problem",
    RESOLVEDAFTERTESTS = "resolvedAfterTests",
    SLEEPING = "sleeping",
    VALIDATIONREFUSED = "validationRefused",
    WAITINGHUMAN = "waitingHuman",
    WAITINGROBOT = "waitingRobot",
    WAITINGVALIDATION = "waitingValidation"
}
export declare enum LineDiagnosticFaultTypeEnum {
    ALIGNMENT = "alignment",
    NOSYNC = "noSync",
    SYNCLOSSORLOWBANDWIDTH = "syncLossOrLowBandwidth",
    UNKNOWN = "unknown"
}
export interface LineDiagnosticLineCapabilities {
    mitigation?: string;
    down?: any;
    ping?: any;
    up?: any;
}
export interface LineDiagnosticLineDetails {
    operator: LineDiagnosticProviderEnum;
    dslamIsSynchronized?: boolean;
    description?: string;
    length: number;
    accessName: string;
    number: string;
    nra?: string;
    accessPing?: boolean;
    address?: string;
    gtr: boolean;
    contactPhone?: string;
    lineType: DslTypeEnum;
    connectionInfo?: LineDiagnosticConnectionInformations;
    lineCapabilities?: LineDiagnosticLineCapabilities;
    sections?: LineDiagnosticSection[];
}
export interface LineDiagnosticPossibleValue {
    id?: number;
    value?: string;
    label?: string;
}
export declare enum LineDiagnosticProblemTypeEnum {
    LOWBANDWIDTH = "lowBandwidth",
    SYNCLOSS = "syncLoss"
}
export declare enum LineDiagnosticProviderEnum {
    AXIONE = "axione",
    FT = "ft",
    FTBYSFR = "ftBySfr",
    KOSC = "kosc",
    KOSCDEG = "koscDeg",
    OVH = "ovh",
    SFR = "sfr"
}
export interface LineDiagnosticQuestion {
    enumValues?: string[];
    required?: boolean;
    type: string;
    defaultValue?: string;
    name: LineDiagnosticQuestionsEnum;
    description: string;
    possibleValues?: LineDiagnosticPossibleValue[];
}
export declare enum LineDiagnosticQuestionsEnum {
    BANDWIDTHTESTUNIT = "bandwidthTestUnit",
    COMMENT = "comment",
    CONDITIONSACCEPTED = "conditionsAccepted",
    CONTACTPHONE = "contactPhone",
    DATETIMEOFAPPEARANCE = "datetimeOfAppearance",
    DOWNLOADBANDWIDTHTEST = "downloadBandwidthTest",
    ENDAFTERNOONHOURS = "endAfternoonHours",
    ENDMORNINGHOURS = "endMorningHours",
    FOLLOWBYSMS = "followBySms",
    HASMODEMKEPTSYNCHRONIZATION = "hasModemKeptSynchronization",
    IDAPPOINTMENT = "idAppointment",
    INDIVIDUALSITE = "individualSite",
    MODEMISSYNCHRONIZED = "modemIsSynchronized",
    MODEMMAC = "modemMac",
    MODEMSTILLSYNCHRONIZED = "modemStillSynchronized",
    MODEMTYPE = "modemType",
    OVHTICKET = "ovhTicket",
    PROBLEMTYPE = "problemType",
    RESOLVEDAFTERTESTS = "resolvedAfterTests",
    SECURESITE = "secureSite",
    SEVERALINTERNETCONNECTIONS = "severalInternetConnections",
    SITECLOSEDDAYS = "siteClosedDays",
    SITEDIGICODE = "siteDigicode",
    SITEOPENING = "siteOpening",
    STARTAFTERNOONHOURS = "startAfternoonHours",
    STARTMORNINGHOURS = "startMorningHours",
    UPLOADBANDWIDTHTEST = "uploadBandwidthTest"
}
export declare enum LineDiagnosticRobotActionsEnum {
    ALIGNMENTLOCKTEST = "alignmentLockTest",
    ALIGNMENTRESETTEST = "alignmentResetTest",
    ALIGNMENTTESTRESULT = "alignmentTestResult",
    CHECKCUSTOMERTICKET = "checkCustomerTicket",
    CHECKIFACCESSPING = "checkIfAccessPing",
    CHECKIFRESOLVEDAFTERCONNECTIONTESTS = "checkIfResolvedAfterConnectionTests",
    CHECKIFRESOLVEDAFTERINSTALLATIONCHECK = "checkIfResolvedAfterInstallationCheck",
    CHECKIFRESOLVEDAFTERTESTS = "checkIfResolvedAfterTests",
    CHECKIFSEVERALCONNECTIONS = "checkIfSeveralConnections",
    CHECKINSTALLATION = "checkInstallation",
    CHECKPROBLEM = "checkProblem",
    CHECKSYNCHRONIZATIONWITHOUTOTHERMODEMS = "checkSynchronizationWithoutOtherModems",
    CUSTOMERPRELOCCHECKS = "customerPrelocChecks",
    FINDPROBLEM = "findProblem",
    INSTALLATIONCHECK = "installationCheck",
    LOCKUNLOCK = "lockUnlock",
    NEEDTOREQUESTMONITORING = "needToRequestMonitoring",
    NEEDTOREQUESTOPERATORINTERVENTION = "needToRequestOperatorIntervention",
    NEEDTOREQUESTOVHINTERVENTION = "needToRequestOvhIntervention",
    REQUESTMONITORING = "requestMonitoring",
    REQUESTOPERATORINTERVENTION = "requestOperatorIntervention",
    REQUESTOVHINTERVENTION = "requestOvhIntervention",
    SELTTEST = "seltTest"
}
export interface LineDiagnosticSection {
    section: number;
    length: number;
}
export declare enum LineDiagnosticSeltPrelocEnum {
    CUST = "CUST",
    DSLAM = "DSLAM",
    LINE = "LINE",
    RE = "RE"
}
export interface LineDiagnosticSeltResult {
    date?: string;
    preloc?: LineDiagnosticSeltPrelocEnum;
    state?: LineDiagnosticSeltStateEnum;
    status?: LineDiagnosticSeltStatusEnum;
    distance?: number;
}
export declare enum LineDiagnosticSeltStateEnum {
    OPEN = "open",
    SHORT = "short",
    SYNCED = "synced",
    UNKNOWN = "unknown"
}
export declare enum LineDiagnosticSeltStatusEnum {
    FAILED = "failed",
    NOTAVAILABLE = "notAvailable",
    OK = "ok"
}
export interface LineSectionLength {
    length: number;
    diameter: number;
}
export declare enum LineStatisticsTypeEnum {
    ATTENUATION_DOWNLOAD = "attenuation:download",
    ATTENUATION_UPLOAD = "attenuation:upload",
    SNR_DOWNLOAD = "snr:download",
    SNR_UPLOAD = "snr:upload",
    SYNCHRONIZATION_DOWNLOAD = "synchronization:download",
    SYNCHRONIZATION_UPLOAD = "synchronization:upload"
}
export declare enum LineTestEnum {
    ACTIONPENDING = "actionPending",
    CUSTOMERSIDEPROBLEM = "customerSideProblem",
    ERROR = "error",
    NOPROBLEM = "noProblem",
    OVHSIDEPROBLEM = "ovhSideProblem"
}
export interface Modem {
    model: string;
    dmzIP?: string;
    mtuSize?: XdslModemConfigMTUSizeEnum;
    easyFirewallLevel?: XdslModemConfigEasyFirewallLevelEnum;
    brandName: string;
    capabilities: ModemCapabilities;
    ipv6Support: boolean;
    macAddress: string;
    managedByOvh: boolean;
    isBridged: boolean;
    lastCwmpRequestDate?: string;
}
export interface ModemCapabilities {
    canChangeManagement: boolean;
    canChangeBridgeMode: boolean;
    canChangeFirmware: boolean;
    canChangeLAN: boolean;
    canRefreshConnectedDevices: boolean;
    canReconfigureVoip: boolean;
    canChangeDHCP: boolean;
    canChangeWLAN: boolean;
    canChangeEasyFirewallLevel: boolean;
    canReset: boolean;
    canBeManagedByOvh: boolean;
    canChangeMtu: boolean;
    canReboot: boolean;
    canChangeDMZ: boolean;
    canChangePortMapping: boolean;
}
export interface ModemInfo {
    statistics: StatsModemInfo;
    device: DeviceModemInfo;
}
export interface MonitoringNotification {
    enabled: boolean;
    type: MonitoringNotificationsTypeEnum;
    phone?: string;
    id: number;
    email?: string;
    downThreshold: number;
    smsAccount?: string;
    allowIncident: boolean;
    frequency: MonitoringNotificationsFrequencyEnum;
}
export declare type MonitoringNotificationsFrequencyEnum = '1h' | '5m' | '6h' | 'once';
export declare enum MonitoringNotificationsTypeEnum {
    MAIL = "mail",
    SMS = "sms"
}
export declare enum OperatorTypeEnum {
    COLLECT = "collect",
    KOSC = "kosc",
    OVH = "ovh"
}
export declare enum OrderFollowupDurationUnitEnum {
    DAY = "day",
    HOUR = "hour",
    MINUTE = "minute"
}
export interface OrderFollowupStep {
    doneDate?: string;
    expectedDuration: number;
    comments: string[];
    status: OrderFollowupStepStatusEnum;
    durationUnit: OrderFollowupDurationUnitEnum;
    name: OrderFollowupStepNameEnum;
}
export declare enum OrderFollowupStepNameEnum {
    ACCESSISOPERATIONAL = "accessIsOperational",
    CHECKINFRASTRUCTURE = "checkInfrastructure",
    CONFIGUREACCESSONOVH = "configureAccessOnOVH",
    ORDERPAYED = "orderPayed",
    ORDERRECEIVED = "orderReceived",
    ORDERTREATMENT = "orderTreatment",
    SENDMODEM = "sendModem",
    SENDORDERTOPROVIDER = "sendOrderToProvider",
    SETUPCUSTOMERPREMISESEQUIPMENT = "setupCustomerPremisesEquipment",
    WAITINGFORPROVIDERINSTALLREPORT = "waitingForProviderInstallReport",
    WAITINGFORWITHDRAWALPERIODTOBEOVER = "waitingForWithdrawalPeriodToBeOver"
}
export declare enum OrderFollowupStepStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo",
    WAITINGCUSTOMER = "waitingCustomer"
}
export interface PendingAction {
    dateTodo: string;
    action: string;
}
export interface PortMapping {
    externalPortStart: number;
    internalClient: string;
    internalPort: number;
    allowedRemoteIp?: string;
    name: string;
    externalPortEnd?: number;
    protocol: XdslModemConfigProtocolTypeEnum;
    id: number;
    description?: string;
    taskId?: number;
}
export interface RadiusConnectionLog {
    login: string;
    state: string;
    message: string;
    date: string;
}
export interface ResiliationFollowUpDetail {
    registrationDate: string;
    status: string;
    needModemReturn: boolean;
    dateTodo: string;
}
export declare enum ResiliationReasonEnum {
    ADDRESSMOVE = "addressMove",
    BILLINGPROBLEMS = "billingProblems",
    CESSATIONOFACTIVITY = "cessationOfActivity",
    CHANGEOFTERMS = "changeOfTerms",
    FTTH = "ftth",
    GOTOCOMPETITOR = "goToCompetitor",
    OTHER = "other",
    TECHNICALPROBLEMS = "technicalProblems"
}
export interface ResiliationSurvey {
    comment?: string;
    type: ResiliationReasonEnum;
}
export interface ResiliationTerms {
    resiliationDate: string;
    engageDate?: string;
    due: OrderPrice;
    minResiliationDate: string;
    resiliationReasons: ResiliationReasonEnum[];
}
export declare enum ServiceStatusEnum {
    DISABLED = "disabled",
    ENABLED = "enabled"
}
export declare enum StatisticsPeriodEnum {
    DAILY = "daily",
    MONTHLY = "monthly",
    PREVIEW = "preview",
    WEEKLY = "weekly",
    YEARLY = "yearly"
}
export interface StatsModemInfo {
    upstreamSync: any;
    connectionUptime: number;
    modulation: string;
    upstreamMargin: any;
    syncUptime: number;
    quarterHourStart: number;
    downstreamMargin: any;
    downstreamAttenuation: any;
    lastUpdate: string;
    downstreamSync: any;
    upstreamAttenuation: any;
    crcError: number;
    deviceUptime: number;
}
export interface Task {
    updateDate: string;
    status: TaskStatusEnum;
    id: number;
    todoDate: string;
    function: string;
}
export declare enum TaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    PROBLEM = "problem",
    TODO = "todo"
}
export interface TemplateModem {
    LAN: TemplateModemLAN[];
    capabilities: string;
    WLAN: TemplateModemWLAN[];
    parametersToIgnore?: TemplateModemParametersToIgnore;
    creationDate: string;
    mtuSize?: XdslModemConfigMTUSizeEnum;
    name: string;
    portMapping: TemplateModemPortMapping[];
    DHCP: TemplateModemDHCP[];
    dmzIP?: string;
}
export interface TemplateModemDHCP {
    startAddress: string;
    defaultGateway: string;
    secondaryDNS?: string;
    primaryDNS: string;
    serverEnabled: boolean;
    domainName: string;
    dhcpName: string;
    endAddress: string;
    leaseTime: number;
    subnetMask: string;
}
export interface TemplateModemLAN {
    IPAddress: string;
    subnetMask: string;
    addressingType: XdslModemConfigAddressingTypeEnum;
    lanName: string;
}
export interface TemplateModemParametersToIgnore {
    dmzIP?: boolean;
    WLANList?: string[];
    portMappingList?: string[];
    LANandDHCP?: boolean;
    mtuSize?: boolean;
}
export interface TemplateModemPortMapping {
    allowedRemoteIp?: string;
    internalPort: number;
    internalClient: string;
    externalPortStart: number;
    description?: string;
    protocol: XdslModemConfigProtocolTypeEnum;
    externalPortEnd?: number;
    name: string;
}
export declare enum TemplateModemSecurityTypeEnum {
    NONE = "None",
    WPA = "WPA",
    WPA2 = "WPA2",
    WPAANDWPA2 = "WPAandWPA2"
}
export interface TemplateModemWLAN {
    channelMode: XdslModemConfigChannelModeEnum;
    enabled: boolean;
    SSID: string;
    SSIDAdvertisementEnabled: boolean;
    channel: number;
    bandSteering: boolean;
    securityType: TemplateModemSecurityTypeEnum;
    securityKey: string;
    wifiName: string;
    frequency: XdslModemConfigFrequencyEnum;
    guest: boolean;
}
export interface TimestampAndValue {
    value?: any;
    timestamp: number;
}
export interface WLAN {
    guest: boolean;
    bandSteering: boolean;
    frequency: XdslModemConfigFrequencyEnum;
    securityType: XdslModemConfigSecurityTypeEnum;
    securityKey: string;
    wifiName: string;
    SSIDAdvertisementEnabled: boolean;
    SSID: string;
    enabled: boolean;
    channel: number;
    taskId?: number;
    channelMode: XdslModemConfigChannelModeEnum;
}
export declare type WLANFrequencyEnum = '2.4GHz' | '5GHz';
export interface XdslEmailPro {
    firstName?: string;
    id: number;
    lastLogoffDate?: string;
    currentUsage: any;
    initial?: string;
    primaryEmailAddress: string;
    taskPendingId?: number;
    lastName?: string;
    domain: string;
    lastLogonDate?: string;
    quota: any;
    passwordLastUpdate?: string;
    login: string;
    displayName?: string;
    state: EmailproObjectStateEnum;
}
export declare enum XdslModemConfigAddressingTypeEnum {
    DHCP = "DHCP",
    STATIC = "Static"
}
export declare enum XdslModemConfigChannelModeEnum {
    AUTO = "Auto",
    MANUAL = "Manual"
}
export declare enum XdslModemConfigConnectedDeviceAddressSourceEnum {
    DHCP = "DHCP",
    STATIC = "Static",
    UNKNOWN = "Unknown"
}
export declare enum XdslModemConfigEasyFirewallLevelEnum {
    BLOCKALL = "BlockAll",
    DISABLED = "Disabled",
    NORMAL = "Normal"
}
export declare type XdslModemConfigFrequencyEnum = '2.4GHz' | '5GHz';
export declare type XdslModemConfigMTUSizeEnum = 1432 | 1456 | 1492;
export declare enum XdslModemConfigProtocolTypeEnum {
    TCP = "TCP",
    UDP = "UDP"
}
export declare enum XdslModemConfigSecurityTypeEnum {
    NONE = "None",
    WEP = "WEP",
    WPA = "WPA",
    WPA2 = "WPA2",
    WPAANDWPA2 = "WPAandWPA2"
}
export declare class Xdsl {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<Access>;
    AlterThisObjectProperties(serviceName: string, payload: Access): Promise<void>;
    InformationsAboutTheExtraIPRangeDuringAddressMove(serviceName: string): Promise<ExtraIpRangeMove>;
    InitiateTheExtraIPRangeMigration(serviceName: string): Promise<Task>;
    ListAntiSpamsForThisAccess(serviceName: string): Promise<string[]>;
    ListOfEvidencesStoredOnPCSForThisIp(ip: string, serviceName: string): Promise<AntiSpamEvidencesInfo>;
    ApplyTemplateModemToExistingModem(serviceName: string, templateName: string): Promise<Task>;
    GetInformationAboutTheOngoingResiliation(serviceName: string): Promise<boolean>;
    CancelTheOngoingResiliation(serviceName: string): Promise<void>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    RunDiagnosticOnTheAccess(serviceName: string): Promise<Task>;
    ListOfIPsAddressesForThisAccess(serviceName: string): Promise<string[]>;
    OrderAnExtra29RangeOfIPv4Addresses(serviceName: string): Promise<Task>;
    StopRenewingThisExtraIPv4Option(ip: string, serviceName: string): Promise<void>;
    ChangeTheStatusOfTheIPv6ForThisAccess(enabled: boolean, serviceName: string): Promise<Task>;
    TheLinesOfTheAccess(serviceName: string): Promise<string[]>;
    CancelLineDiagnosticIfPossible(number: string, serviceName: string): Promise<void>;
    UpdateAndGetAdvancedDiagnosticOfTheLine(faultType: LineDiagnosticFaultTypeEnum, number: string, serviceName: string, actionsDone?: LineDiagnosticCustomerActionsEnum[], answers?: LineDiagnosticAnswers): Promise<LineDiagnosticDiagnostic>;
    ListAllAvailablesProfilesForThisPort(number: string, serviceName: string): Promise<DslamLineProfile[]>;
    ChangeTheProfileOfThePort(dslamProfileId: number, number: string, serviceName: string): Promise<Task>;
    GetTheLogsEmittedByTheDSLAMForThisPort(limit: number, number: string, serviceName: string): Promise<DslamPortLog[]>;
    ResetThePortOnTheDSLAM(number: string, serviceName: string): Promise<Task>;
    GetVariousStatisticsAboutTheLine(number: string, period: StatisticsPeriodEnum, serviceName: string, type: LineStatisticsTypeEnum): Promise<any>;
    ListAvailableWLANChannelForThisModem(frequency: WLANFrequencyEnum, serviceName: string): Promise<number[]>;
    GetTheStatusOfTheBlocIPOnModem(serviceName: string): Promise<ServiceStatusEnum>;
    ChangeTheStatusOfTheBlocIPOnModem(serviceName: string, status: ServiceStatusEnum): Promise<Task>;
    ChangeTheStatusOfCallWaitingOnModem(callWaiting: ServiceStatusEnum, serviceName: string): Promise<Task>;
    GetTheStatusOfCallWaitingOnModem(serviceName: string): Promise<ServiceStatusEnum>;
    ReplaceAccessModemByLastModelFeesWillBeApplied(serviceName: string, contactShipping?: string): Promise<OrderOrder>;
    ListOfDevicesConnectedOnThisModem(serviceName: string): Promise<string[]>;
    GetTheStatusOfContentSharingOnModem(serviceName: string): Promise<ServiceStatusEnum>;
    ChangeTheStatusOfContentSharingOnModem(contentSharing: ServiceStatusEnum, serviceName: string): Promise<Task>;
    RemoveAllTheCurrentPortMappingRulesAndSetTheSameConfigAsTheAccessGivenInParameters(accessName: string, serviceName: string): Promise<void>;
    LaunchATaskToInstallTargetFirmwareOnModem(firmware: string, serviceName: string, todoDate?: string): Promise<Task>;
    GetTheFirmwareVersionInstalledOnModem(serviceName: string): Promise<string>;
    ListAvailableFirmwareForThisModem(serviceName: string): Promise<string[]>;
    GetTheStatusOfFtpServiceOnModem(serviceName: string): Promise<ServiceStatusEnum>;
    ChangeTheStatusOfTheFtpServiceOnModem(ftp: ServiceStatusEnum, serviceName: string): Promise<Task>;
    ChangeTheStatusOfTheIpsecAlgServiceOnModem(ipsecAlg: ServiceStatusEnum, serviceName: string): Promise<Task>;
    GetTheStatusOfIpsecAlgServiceOnModem(serviceName: string): Promise<ServiceStatusEnum>;
    ListOfLANsOnThisModem(serviceName: string): Promise<string[]>;
    ListOfDHCPOnThisModem(lanName: string, serviceName: string): Promise<string[]>;
    ListOfDHCPStaticAddressOfThisModem(dhcpName: string, lanName: string, serviceName: string): Promise<string[]>;
    AddADHCPStaticLease(dhcpName: string, IPAddress: string, lanName: string, MACAddress: string, serviceName: string, name?: string): Promise<DHCPStaticAddress>;
    DeleteThisPortMapping(dhcpName: string, lanName: string, MACAddress: string, serviceName: string): Promise<Task>;
    ListOfPortMappingsOnThisModem(serviceName: string): Promise<string[]>;
    AddAPortMapping(externalPortStart: number, internalClient: string, internalPort: number, name: string, protocol: XdslModemConfigProtocolTypeEnum, serviceName: string, allowedRemoteIp?: string, description?: string, externalPortEnd?: number): Promise<PortMapping>;
    RebootTheModem(serviceName: string, todoDate?: string): Promise<Task>;
    ReconfigureVoipLineOnModem(serviceName: string): Promise<void>;
    RefreshTheListOfConnectedDevicesOnTheModem(serviceName: string): Promise<Task>;
    ResetTheModemToItsDefaultConfiguration(serviceName: string, resetOvhConfig?: boolean): Promise<Task>;
    RemoveAllTheCurrentPortMappingRules(serviceName: string): Promise<void>;
    GetGeneralModemInformation(serviceName: string): Promise<any>;
    ChangeTheStatusOfTheSipAlgServiceOnModem(serviceName: string, sipAlg: ServiceStatusEnum): Promise<Task>;
    GetTheStatusOfSipAlgServiceOnModem(serviceName: string): Promise<ServiceStatusEnum>;
    ChangeTheStatusOfTheUpnpOnModem(serviceName: string, upnp: ServiceStatusEnum): Promise<Task>;
    GetTheStatusOfTheUpnpOnModem(serviceName: string): Promise<ServiceStatusEnum>;
    ListOfWLANsOnThisModem(serviceName: string): Promise<string[]>;
    ListTheNotificationsForThisAccess(serviceName: string): Promise<number[]>;
    AddANotification(frequency: MonitoringNotificationsFrequencyEnum, serviceName: string, type: MonitoringNotificationsTypeEnum, allowIncident?: boolean, downThreshold?: number, email?: string, phone?: string, smsAccount?: string): Promise<MonitoringNotification>;
    DeleteThisNotification(id: number, serviceName: string): Promise<void>;
    GetTheStatusOfTheOrder(serviceName: string): Promise<OrderFollowupStep[]>;
    BookAMeetingAndRelaunchOrder(endDate: string, serviceName: string, startDate: string, uiCode: string): Promise<void>;
    ListTheRadiusConnectionLogs(serviceName: string): Promise<RadiusConnectionLog[]>;
    RenewPPPPasswordAndSendThePPPLoginInformationsToTheEmailOfTheNicAdmin(serviceName: string): Promise<void>;
    SwitchThisAccessToTotalDeconsolidation(serviceName: string, noPortability?: boolean, rio?: string): Promise<Task>;
    ResiliateTheAccess(resiliationSurvey: ResiliationSurvey, serviceName: string, resiliationDate?: string): Promise<ResiliationFollowUpDetail>;
    GetResiliationTerms(serviceName: string, resiliationDate?: string): Promise<ResiliationTerms>;
    ReturnMerchandiseAuthorisationAssociated(serviceName: string): Promise<string[]>;
    CancelTheRma(id: string, serviceName: string): Promise<void>;
    SearchForAvailableLineCreationMeetingTimeSlotsForOrderOnly(serviceName: string): Promise<any>;
    UnlockOrderInWaitingCustomerStatusItOnlyConcernsOrdersWhoseModemIsSentBeforeAnythingHaveBeenForwardedToOurProvider(serviceName: string): Promise<void>;
    GetVariousStatisticsAboutThisAccess(period: StatisticsPeriodEnum, serviceName: string, type: AccessStatisticsTypeEnum): Promise<any>;
    TasksScheduledForThisAccess(serviceName: string, _function?: string, status?: TaskStatusEnum): Promise<number[]>;
    DeleteTheTaskInProblemFromTheResults(id: number, serviceName: string): Promise<void>;
    GiveThePriceToRequestTotalDeconsolidationOnTheAccess(serviceName: string): Promise<DeconsolidationTerms>;
    UpdateRIOOrDisablePortabilityForOrderInErrorBecauseOfMissingOrInvalidRIO(relaunchWithoutPortability: boolean, serviceName: string, rio?: string): Promise<void>;
    GetTheCitiesFromAZipCode(zipCode: string): Promise<EligibilityCity[]>;
    GetTheActiveLinesAtGivenAddress(city: EligibilityCity, contactName: string, street: EligibilityStreet, streetNumber?: string): Promise<any>;
    GetTheInactiveLinesAtGivenAddress(city: EligibilityCity, street: EligibilityStreet, contactName?: string, streetNumber?: string): Promise<any>;
    SearchForMeetingTimeSlot(eligibilityId: string, offerLabel: string): Promise<any>;
    GetAllBuildingsForASpecificAddress(streetCode: string, streetNumber: string): Promise<any>;
    GetAllLocalitiesLinkedToAZipCode(zipCode: string): Promise<any>;
    GetAllStreetLinkedToALocality(inseeCode: string): Promise<any>;
    GetTheAvailableStreetNumbersForAGivenStreetCodeUniqueIdentifierOfAStreetYouCanGetWithTheMethodPOSTXdsleligibilitysearchstreets(streetCode: string): Promise<any>;
    GetTheStreetsFromACityInseeCodeAndPartialStreetName(inseeCode: string, partialName: string): Promise<EligibilityStreet[]>;
    GetAnEligibilityByItsId(id: string): Promise<EligibilityEligibility>;
    DoAnEligibilityForAnAddressIfNoLineExist(address: EligibilityAddress): Promise<any>;
    PerformAFiberEligibilityForABuilding(building: string): Promise<any>;
    DoAnEligibilityForALine(lineNumber: string, lineStatus: EligibilityLandlineStatusEnum): Promise<any>;
    DeleteTheEmail(email: string): Promise<void>;
    ChangeTheEmailPassword(email: string, password: string): Promise<EmailproTask>;
    ListOfIncidents(creationDate?: string, endDate?: string): Promise<number[]>;
    DeleteTheSpareAsIfItWasNotBelongingToOVHAnymore(spare: string): Promise<void>;
    ReturnTheListOfBrandCompatibleToBeReplaced(spare: string): Promise<string[]>;
    ReplaceTheModemByItsSpare(domain: string, spare: string): Promise<void>;
    ReturnTheBrokenEquipmentInInstantRefund(spare: string): Promise<void>;
    GetAllAvailableSpareBrands(): Promise<string[]>;
    ListOfTemplateModem(): Promise<string[]>;
    CreateNewModemTemplateFromExistingModem(name: string, serviceName: string): Promise<TemplateModem>;
    DeleteThisModemTemplate(name: string): Promise<void>;
}
//# sourceMappingURL=xdsl.d.ts.map