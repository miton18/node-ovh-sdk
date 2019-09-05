import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export interface ComplexTypeUnitAndValues<T> {
    unit: string;
    values: T[];
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
export interface DedicatedserverBackupFtpAcl {
    ftp: boolean;
    ipBlock: string;
    lastUpdate: string;
    isApplied: boolean;
    nfs: boolean;
    cifs: boolean;
}
export interface DedicatedserverTask {
    comment?: string;
    status: DedicatedTaskStatusEnum;
    startDate: string;
    doneDate?: string;
    taskId: number;
    lastUpdate?: string;
    function: DedicatedTaskFunctionEnum;
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
export interface SecondaryDnsSecondaryDNS {
    creationDate: string;
    domain: string;
    ipMaster: string;
    dns: string;
}
export interface SecondaryDnsSecondaryDNSNameServer {
    ipv6?: string;
    hostname: string;
    ip: string;
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
export interface VpsAutomatedBackup {
    schedule?: any;
    state: VpsBackupStateEnum;
}
export interface VpsautomatedBackupAttached {
    access: VpsautomatedBackupattachedInfos;
    restorePoint: string;
}
export interface VpsautomatedBackupattachedInfos {
    additionalDisk?: string;
    nfs?: string;
    smb?: string;
}
export interface VpsBackupFtp {
    quota?: any;
    ftpBackupName: string;
    type: string;
    readOnlyDate?: string;
    usage?: any;
}
export declare enum VpsBackupStateEnum {
    DISABLED = "disabled",
    ENABLED = "enabled"
}
export interface VpsDatacenter {
    longName: string;
    name: string;
}
export interface VpsDisk {
    size: number;
    lowFreeSpaceThreshold?: number;
    state: VpsdiskStateEnum;
    monitoring?: boolean;
    type: VpsdiskTypeEnum;
    id: number;
    bandwidthLimit: number;
}
export declare enum VpsdiskStateEnum {
    CONNECTED = "connected",
    DISCONNECTED = "disconnected",
    PENDING = "pending"
}
export declare enum VpsdiskStatisticTypeEnum {
    MAX = "max",
    USED = "used"
}
export declare enum VpsdiskTypeEnum {
    ADDITIONAL = "additional",
    PRIMARY = "primary"
}
export interface VpsImage {
    name: string;
    id: string;
}
export interface VpsIp {
    gateway?: string;
    version: CoreTypesIpVersionEnum;
    type: VpsipTypeEnum;
    reverse?: string;
    ipAddress: string;
    geolocation: VpsipGeolocationEnum;
    macAddress?: string;
}
export declare enum VpsipGeolocationEnum {
    AU = "au",
    BE = "be",
    CA = "ca",
    CZ = "cz",
    DE = "de",
    ES = "es",
    FI = "fi",
    FR = "fr",
    IE = "ie",
    IT = "it",
    LT = "lt",
    NL = "nl",
    PL = "pl",
    PT = "pt",
    SG = "sg",
    UK = "uk",
    US = "us"
}
export interface VpsipServiceStatus {
    ping: VpsipServiceStatusStateEnum;
    http: VpsipServiceStatusService;
    dns: VpsipServiceStatusService;
    tools?: VpsipServiceStatusStateEnum;
    https: VpsipServiceStatusService;
    smtp: VpsipServiceStatusService;
    ssh: VpsipServiceStatusService;
}
export interface VpsipServiceStatusService {
    state: VpsipServiceStatusStateEnum;
    port: number;
}
export declare enum VpsipServiceStatusStateEnum {
    DOWN = "down",
    UP = "up"
}
export declare enum VpsipTypeEnum {
    ADDITIONAL = "additional",
    PRIMARY = "primary"
}
export interface VpsmigrationMigration {
    date: string;
    id: string;
}
export interface VpsModel {
    availableOptions: VpsVpsOptionEnum[];
    datacenter: string[];
    disk: number;
    maximumAdditionnalIp: number;
    memory: number;
    version: VpsVpsVersionEnum;
    name: string;
    offer: string;
    vcore: number;
}
export interface VpsOption {
    option: VpsVpsOptionEnum;
    state: VpsVpsOptionStateEnum;
}
export declare enum VpsRestoreStateEnum {
    AVAILABLE = "available",
    RESTORED = "restored",
    RESTORING = "restoring"
}
export declare enum VpsRestoreTypeEnum {
    FILE = "file",
    FULL = "full"
}
export interface VpsSnapshot {
    creationDate: string;
    description: string;
}
export interface VpsSoftware {
    id: number;
    name: string;
    type: VpsSoftwareTypeEnum;
    status: VpsSoftwareStatusEnum;
}
export declare enum VpsSoftwareStatusEnum {
    DEPRECATED = "deprecated",
    STABLE = "stable",
    TESTING = "testing"
}
export declare enum VpsSoftwareTypeEnum {
    DATABASE = "database",
    ENVIRONMENT = "environment",
    WEBSERVER = "webserver"
}
export interface VpsTask {
    id: number;
    progress: number;
    type: VpsTaskTypeEnum;
    state: VpsTaskStateEnum;
}
export declare enum VpsTaskStateEnum {
    BLOCKED = "blocked",
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    PAUSED = "paused",
    TODO = "todo",
    WAITINGACK = "waitingAck"
}
export declare enum VpsTaskTypeEnum {
    ADDVEEAMBACKUPJOB = "addVeeamBackupJob",
    CHANGEROOTPASSWORD = "changeRootPassword",
    CREATESNAPSHOT = "createSnapshot",
    DELETESNAPSHOT = "deleteSnapshot",
    DELIVERVM = "deliverVm",
    GETCONSOLEURL = "getConsoleUrl",
    INTERNALTASK = "internalTask",
    OPENCONSOLEACCESS = "openConsoleAccess",
    PROVISIONINGADDITIONALIP = "provisioningAdditionalIp",
    REOPENVM = "reOpenVm",
    REBOOTVM = "rebootVm",
    REINSTALLVM = "reinstallVm",
    REMOVEVEEAMBACKUP = "removeVeeamBackup",
    RESTOREFULLVEEAMBACKUP = "restoreFullVeeamBackup",
    RESTOREVEEAMBACKUP = "restoreVeeamBackup",
    RESTOREVM = "restoreVm",
    REVERTSNAPSHOT = "revertSnapshot",
    SETMONITORING = "setMonitoring",
    SETNETBOOT = "setNetboot",
    STARTVM = "startVm",
    STOPVM = "stopVm",
    UPGRADEVM = "upgradeVm"
}
export interface VpsTemplate {
    availableLanguage: string[];
    id: number;
    bitFormat: VpsTemplateBitFormatEnum;
    locale: string;
    distribution: string;
    name: string;
}
export declare type VpsTemplateBitFormatEnum = 32 | 64;
export interface VpsVeeam {
    backup: boolean;
}
export declare enum VpsveeamExportTypeEnum {
    NFS = "nfs",
    SMB = "smb"
}
export interface VpsveeamInfos {
    nfs: string;
    smb: string;
}
export interface VpsveeamRestoredBackup {
    state: VpsveeamStateEnum;
    restorePointId: number;
    accessInfos: VpsveeamInfos;
}
export interface VpsveeamRestorePoint {
    id: number;
    creationTime: string;
}
export declare enum VpsveeamStateEnum {
    MOUNTED = "mounted",
    RESTORING = "restoring",
    UNMOUNTED = "unmounted",
    UNMOUNTING = "unmounting"
}
export interface VpsVnc {
    port: number;
    host: string;
    password: string;
}
export declare enum VpsVncProtocolEnum {
    VNC = "VNC",
    VNCOVERWEBSOCKET = "VNCOverWebSocket"
}
export interface VpsVPS {
    netbootMode: VpsVpsNetbootEnum;
    cluster: string;
    offerType: VpsVpsOfferEnum;
    monitoringIpBlocks: string[];
    displayName?: string;
    state: VpsVpsStateEnum;
    memoryLimit: number;
    slaMonitoring?: boolean;
    model: VpsModel;
    vcore: number;
    name: string;
    keymap?: VpsVpsKeymapEnum;
    zone: string;
}
export interface VpsVpsBillingVersion {
    version: number;
}
export declare enum VpsVpsKeymapEnum {
    FR = "fr",
    US = "us"
}
export declare enum VpsVpsMonitoringPeriodEnum {
    LASTDAY = "lastday",
    LASTMONTH = "lastmonth",
    LASTWEEK = "lastweek",
    LASTYEAR = "lastyear",
    TODAY = "today"
}
export declare enum VpsVpsNetbootEnum {
    LOCAL = "local",
    RESCUE = "rescue"
}
export declare enum VpsVpsOfferEnum {
    BETA_CLASSIC = "beta-classic",
    CLASSIC = "classic",
    CLOUD = "cloud",
    CLOUDRAM = "cloudram",
    GAME_CLASSIC = "game-classic",
    LOWLAT = "lowlat",
    SSD = "ssd"
}
export declare enum VpsVpsOptionEnum {
    ADDITIONALDISK = "additionalDisk",
    AUTOMATEDBACKUP = "automatedBackup",
    CPANEL = "cpanel",
    FTPBACKUP = "ftpbackup",
    PLESK = "plesk",
    SNAPSHOT = "snapshot",
    VEEAM = "veeam",
    WINDOWS = "windows"
}
export declare enum VpsVpsOptionStateEnum {
    RELEASED = "released",
    SUBSCRIBED = "subscribed"
}
export declare enum VpsVpsStateEnum {
    INSTALLING = "installing",
    MAINTENANCE = "maintenance",
    REBOOTING = "rebooting",
    RUNNING = "running",
    STOPPED = "stopped",
    STOPPING = "stopping",
    UPGRADING = "upgrading"
}
export declare enum VpsVpsStatisticTypeEnum {
    CPU_IOWAIT = "cpu:iowait",
    CPU_MAX = "cpu:max",
    CPU_NICE = "cpu:nice",
    CPU_SYS = "cpu:sys",
    CPU_USED = "cpu:used",
    CPU_USER = "cpu:user",
    MEM_MAX = "mem:max",
    MEM_USED = "mem:used",
    NET_RX = "net:rx",
    NET_TX = "net:tx"
}
export interface VpsVpsTimestampValue {
    timestamp: number;
    value?: any;
}
export declare type VpsVpsVersionEnum = '2013v1' | '2014v1' | '2015v1' | '2017v1' | '2017v2' | '2017v3' | '2018v1' | '2018v2' | '2019v1';
export declare class Vps {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<VpsVPS>;
    AlterThisObjectProperties(serviceName: string, payload: VpsVPS): Promise<void>;
    ReturnAllActiveOptionsForTheVirtualServer(serviceName: string): Promise<VpsVpsOptionEnum[]>;
    BackupAttachedToYourVPS(serviceName: string): Promise<VpsautomatedBackupAttached[]>;
    CreateAVPSTaskThatWillUmountARestoredBackupOnYourVPS(restorePoint: string, serviceName: string): Promise<VpsTask>;
    CreatesAVPSTaskThatWillRestoreTheGivenRestorePoint(restorePoint: string, serviceName: string, type: VpsRestoreTypeEnum, changePassword?: boolean): Promise<VpsTask>;
    GetAvailableRestorePoints(serviceName: string, state: VpsRestoreStateEnum): Promise<string[]>;
    ReturnAllModelsTheVirtualServerCanBeUpgradedTo(serviceName: string): Promise<VpsModel[]>;
    ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName: string): Promise<string[]>;
    CreateANewBackupFTPACL(cifs: boolean, ipBlock: string, nfs: boolean, serviceName: string, ftp?: boolean): Promise<DedicatedserverTask>;
    RevokeThisACL(ipBlock: string, serviceName: string): Promise<DedicatedserverTask>;
    GetAllIPBlocksThatCanBeUsedInTheACL(serviceName: string): Promise<string[]>;
    ChangeYourBackupFTPPassword(serviceName: string): Promise<DedicatedserverTask>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    CreateASnapshotOfTheVirtualServerIfTheSnapshotOptionIsEnabledAndIfThereIsNoExistingSnapshot(serviceName: string, description?: string): Promise<VpsTask>;
    DisksAssociatedToThisVirtualServer(serviceName: string): Promise<number[]>;
    ReturnManyStatisticsAboutTheDiskForAGivenPeriod(id: number, period: VpsVpsMonitoringPeriodEnum, serviceName: string, type: VpsdiskStatisticTypeEnum): Promise<any>;
    ReturnManyStatisticsAboutTheDiskAtThatTime(id: number, serviceName: string, type: VpsdiskStatisticTypeEnum): Promise<any>;
    ListAvailableSoftwaresForThisTemplateId(serviceName: string): Promise<number[]>;
    ReturnTheVPSConsoleURL(serviceName: string): Promise<string>;
    GetTheCountriesYouCanSelectForYourIPsGeolocation(serviceName: string): Promise<VpsipGeolocationEnum[]>;
    IpsAssociatedToThisVirtualServer(serviceName: string): Promise<string[]>;
    ReleaseAGivenIpAdditionalIp(ipAddress: string, serviceName: string): Promise<void>;
    ReturnAllModelsForTheRangeOfTheVirtualServer(serviceName: string): Promise<VpsModel[]>;
    ReturnManyStatisticsAboutTheVirtualMachineForAGivenPeriod(period: VpsVpsMonitoringPeriodEnum, serviceName: string, type: VpsVpsStatisticTypeEnum): Promise<any>;
    ReturnTheNecessaryInformationsToOpenAVNCConnectionToYourVPS(serviceName: string, protocol?: VpsVncProtocolEnum): Promise<VpsVnc>;
    ListOfVPSOptions(serviceName: string): Promise<VpsVpsOptionEnum[]>;
    ReleaseAGivenOption(option: VpsVpsOptionEnum, serviceName: string, deleteNow?: boolean): Promise<void>;
    RequestARebootOfTheMachine(serviceName: string): Promise<VpsTask>;
    ReinstallTheVirtualServer(serviceName: string, templateId: number, doNotSendPassword?: boolean, language?: string, softwareId?: number[], sshKey?: string[]): Promise<VpsTask>;
    ListOfSecondaryDnsDomainName(serviceName: string): Promise<string[]>;
    AddADomainOnSecondaryDns(domain: string, serviceName: string, ip?: string): Promise<void>;
    RemoveThisDomain(domain: string, serviceName: string): Promise<void>;
    DomainNameServerInformations(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer>;
    SecondaryNameServerAvailableForYourServer(serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer>;
    StartTheProcessInOrderToSetTheRootPasswordOfTheVirtualMachineBeCarefulInCaseOfCloudModelARebootIsMandatory(serviceName: string): Promise<VpsTask>;
    CreatesAVpsTaskThatWillDeleteTheSnapshot(serviceName: string): Promise<VpsTask>;
    RevertTheVirtualServerToThisSnapshot(serviceName: string): Promise<VpsTask>;
    RequestTheMachineToStart(serviceName: string): Promise<VpsTask>;
    GiveTheStatusOfTheServicesOfTheMainIP(serviceName: string): Promise<VpsipServiceStatus>;
    RequestTheMachineToStop(serviceName: string): Promise<VpsTask>;
    TasksAssociatedToThisVirtualServer(serviceName: string, state?: VpsTaskStateEnum, type?: VpsTaskTypeEnum): Promise<number[]>;
    TemplatesAvailableForThisVirtualServer(serviceName: string): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    ReturnManyStatisticsAboutTheVirtualMachineAtThatTime(serviceName: string, type: VpsVpsStatisticTypeEnum): Promise<any>;
    CreatesAVPSTaskThatWillUnmountTheBackup(serviceName: string): Promise<VpsTask>;
    VeeamRestorePointsForTheVPS(serviceName: string, creationTime?: string): Promise<number[]>;
    ListAllTheDatacentersForASpecificCountry(country: NichandleCountryEnum): Promise<string[]>;
}
//# sourceMappingURL=vps.d.ts.map