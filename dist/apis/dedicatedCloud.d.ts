import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    value: T;
    unit: string;
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
export interface DedicatedCloudAllowedNetwork {
    state: DedicatedCloudAllowedNetworkStateEnum;
    description?: string;
    network: any;
    networkAccessId: number;
}
export declare enum DedicatedCloudAllowedNetworkStateEnum {
    ALLOWED = "allowed",
    TODELETE = "toDelete",
    TOUPDATE = "toUpdate"
}
export interface DedicatedCloudBackup {
    hostname?: string;
    restorePointInReport?: boolean;
    backupOffer?: DedicatedCloudbackupOfferTypeEnum;
    scheduleHour?: any;
    mailAddress?: string;
    state: DedicatedCloudBackupStateEnum;
    backupSizeInReport?: boolean;
    backupDurationInReport?: boolean;
    fullDayInReport?: boolean;
    diskSizeInReport?: boolean;
    encryption?: boolean;
    vmwareVmId?: string;
}
export interface DedicatedCloudbackupBackup {
    lastCreationTime?: string;
    restorePoints?: DedicatedCloudbackupRestorePoint[];
    offerType?: DedicatedCloudbackupOfferTypeEnum;
    encryption?: boolean;
    backupDays?: DedicatedCloudbackupBackupDaysEnum[];
    lastDuration?: any;
    allocatedDisk?: any;
    retentionTime?: number;
    lastResult?: DedicatedCloudbackupJobStateEnum;
    state?: DedicatedCloudbackupStateEnum;
    lastSuccessfulDuration?: any;
    lastSuccessfulCreationTime?: string;
}
export declare enum DedicatedCloudbackupBackupDaysEnum {
    FRIDAY = "Friday",
    MONDAY = "Monday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday",
    THURSDAY = "Thursday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday"
}
export declare enum DedicatedCloudbackupBackupTypeEnum {
    FULL = "full",
    INCREMENTAL = "incremental"
}
export declare enum DedicatedCloudbackupJobStateEnum {
    FAILED = "failed",
    RUNNING = "running",
    STOPPED = "stopped",
    STOPPING = "stopping",
    SUCCESS = "success",
    UNKNOWN = "unknown",
    WARNING = "warning"
}
export declare enum DedicatedCloudbackupOfferTypeEnum {
    ADVANCED = "advanced",
    BACKUP = "backup",
    CLASSIC = "classic",
    LEGACY = "legacy"
}
export interface DedicatedCloudbackupRestorePoint {
    size?: any;
    creationTime?: string;
    isCorrupted?: boolean;
    restorePointId: number;
    type?: DedicatedCloudbackupBackupTypeEnum;
}
export declare enum DedicatedCloudbackupStateEnum {
    DELETING = "deleting",
    DELIVERED = "delivered",
    DISABLED = "disabled",
    DISABLING = "disabling",
    ENABLING = "enabling",
    ERROR = "error",
    MIGRATING = "migrating",
    PENDING = "pending",
    REMOVED = "removed",
    STOPPING = "stopping",
    TOCREATE = "toCreate",
    TODELETE = "toDelete",
    TODISABLE = "toDisable",
    TOENABLE = "toEnable",
    TOSTOP = "toStop",
    UNKNOWN = "unknown"
}
export interface DedicatedCloudBackupJob {
    allocatedDisk?: any;
    vmName?: string;
    encryption?: boolean;
    backupDays?: DedicatedCloudbackupBackupDaysEnum[];
    retentionTime?: number;
    state: DedicatedCloudbackupStateEnum;
    offerType?: DedicatedCloudbackupOfferTypeEnum;
}
export declare enum DedicatedCloudBackupStateEnum {
    DISABLED = "disabled",
    DISABLING = "disabling",
    ENABLED = "enabled",
    ENABLING = "enabling",
    ERROR = "error",
    REMOVING = "removing"
}
export declare enum DedicatedCloudBillingTypeEnum {
    DEMO = "demo",
    MONTHLY = "monthly"
}
export declare enum DedicatedCloudBlockRegisterEnum {
    ARIN = "arin",
    RIPE = "ripe"
}
export interface DedicatedCloudCapabilities {
    canAddUser: boolean;
    upgradable: boolean;
    userAccessPolicyStatus: DedicatedCloudcapabilitiesFeatureStatusEnum;
    backupStatus: DedicatedCloudcapabilitiesFeatureStatusEnum;
    nexus1000vStatus: DedicatedCloudcapabilitiesFeatureStatusEnum;
    addRessourceRightStatus: DedicatedCloudcapabilitiesFeatureStatusEnum;
    fullAdminRoUserStatus: DedicatedCloudcapabilitiesFeatureStatusEnum;
}
export declare enum DedicatedCloudcapabilitiesFeatureStatusEnum {
    ACTIVE = "active",
    COMINGSOON = "comingSoon",
    NO = "no"
}
export declare enum DedicatedCloudCommercialNameEnum {
    DC = "DC",
    DC_ANCIENT = "DC-ANCIENT",
    DC_ANCIENT_HDS = "DC-ANCIENT-HDS",
    DC_ANCIENT_HIPAA = "DC-ANCIENT-HIPAA",
    DC_ANCIENT_NSX = "DC-ANCIENT-NSX",
    DC_ANCIENT_NSX_VROPS = "DC-ANCIENT-NSX-VROPS",
    DC_ANCIENT_PCIDSS = "DC-ANCIENT-PCIDSS",
    DC_ANCIENT_UNKNOWN = "DC-ANCIENT-UNKNOWN",
    DC_ANCIENT_VROPS = "DC-ANCIENT-VROPS",
    DC_HDS = "DC-HDS",
    DC_HIPAA = "DC-HIPAA",
    DC_LEGACY = "DC-LEGACY",
    DC_LEGACY_HDS = "DC-LEGACY-HDS",
    DC_LEGACY_HIPAA = "DC-LEGACY-HIPAA",
    DC_LEGACY_NSX = "DC-LEGACY-NSX",
    DC_LEGACY_NSX_VROPS = "DC-LEGACY-NSX-VROPS",
    DC_LEGACY_PCIDSS = "DC-LEGACY-PCIDSS",
    DC_LEGACY_UNKNOWN = "DC-LEGACY-UNKNOWN",
    DC_LEGACY_VROPS = "DC-LEGACY-VROPS",
    DC_NSX = "DC-NSX",
    DC_NSX_VROPS = "DC-NSX-VROPS",
    DC_PCIDSS = "DC-PCIDSS",
    DC_UNKNOWN = "DC-UNKNOWN",
    DC_VROPS = "DC-VROPS",
    SDDC = "SDDC",
    SDDC_HDS = "SDDC-HDS",
    SDDC_HIPAA = "SDDC-HIPAA",
    SDDC_LEGACY = "SDDC-LEGACY",
    SDDC_LEGACY_HDS = "SDDC-LEGACY-HDS",
    SDDC_LEGACY_HIPAA = "SDDC-LEGACY-HIPAA",
    SDDC_LEGACY_PCIDSS = "SDDC-LEGACY-PCIDSS",
    SDDC_LEGACY_UNKNOWN = "SDDC-LEGACY-UNKNOWN",
    SDDC_LEGACY_VROPS = "SDDC-LEGACY-VROPS",
    SDDC_LEGACY_VROPS_WITHOUT_NSX = "SDDC-LEGACY-VROPS-WITHOUT-NSX",
    SDDC_LEGACY_WITHOUT_NSX = "SDDC-LEGACY-WITHOUT-NSX",
    SDDC_PCIDSS = "SDDC-PCIDSS",
    SDDC_UNKNOWN = "SDDC-UNKNOWN",
    SDDC_VROPS = "SDDC-VROPS",
    SDDC_VROPS_WITHOUT_NSX = "SDDC-VROPS-WITHOUT-NSX",
    SDDC_WITHOUT_NSX = "SDDC-WITHOUT-NSX",
    UNKNOWN = "UNKNOWN",
    UNKNOWN_HDS = "UNKNOWN-HDS",
    UNKNOWN_HIPAA = "UNKNOWN-HIPAA",
    UNKNOWN_NSX = "UNKNOWN-NSX",
    UNKNOWN_NSX_VROPS = "UNKNOWN-NSX-VROPS",
    UNKNOWN_PCIDSS = "UNKNOWN-PCIDSS",
    UNKNOWN_UNKNOWN = "UNKNOWN-UNKNOWN",
    UNKNOWN_VROPS = "UNKNOWN-VROPS"
}
export interface DedicatedCloudCommercialRange {
    range?: string;
    commercialRangeName: string;
    allowedHypervisorVersions: DedicatedCloudHypervisorVersionEnum[];
    dedicatedCloudVersion: string;
    allowedNetworkRoles: DedicatedCloudrightNetworkRoleEnum[];
}
export interface DedicatedCloudDatacenter {
    commercialName: DedicatedCloudCommercialNameEnum;
    version: string;
    name: string;
    datacenterId: number;
    horizonViewName?: string;
    isRemovable: boolean;
    description: string;
    commercialRangeName: string;
}
export interface DedicatedClouddedicatedCloud {
    bandwidth: string;
    state: DedicatedCloudStateEnum;
    spla: boolean;
    webInterfaceUrl: string;
    sslV3?: boolean;
    advancedSecurity: boolean;
    commercialRange: string;
    userAccessPolicy: DedicatedCloudUserAccessPolicyEnum;
    managementInterface: DedicatedCloudManagementInterfaceEnum;
    userLimitConcurrentSession: number;
    servicePackName?: string;
    serviceName: string;
    billingType: DedicatedCloudBillingTypeEnum;
    certifiedInterfaceUrl: string;
    generation: DedicatedCloudGenerationEnum;
    description: string;
    userLogoutPolicy: DedicatedCloudUserLogoutPolicyEnum;
    vScopeUrl: string;
    userSessionTimeout: number;
    location: string;
    version: DedicatedCloudVersion;
}
export declare enum DedicatedClouddisasterRecoveryDrpTypeEnum {
    ONPREMISE = "onPremise",
    OVH = "ovh"
}
export interface DedicatedClouddisasterRecoveryLocalSiteDetails {
    zvmIp?: string;
    type: DedicatedClouddisasterRecoverySiteTypeEnum;
    zertoVersion: string;
    role: DedicatedClouddisasterRecoverySiteRoleEnum;
    state?: DedicatedCloudStateEnum;
}
export interface DedicatedClouddisasterRecoveryProfile {
    state: DedicatedCloudStateEnum;
    systemVersion: string;
    localSiteInformation?: DedicatedClouddisasterRecoveryLocalSiteDetails;
    remoteSiteInformation?: DedicatedClouddisasterRecoveryRemoteSiteDetails;
    drpType?: DedicatedClouddisasterRecoveryDrpTypeEnum;
}
export interface DedicatedClouddisasterRecoveryRemoteSiteDetails {
    state?: DedicatedCloudStateEnum;
    role?: DedicatedClouddisasterRecoverySiteRoleEnum;
    datacenterId?: number;
    zertoVersion?: string;
    remoteEndpointInternalIp?: string;
    type: DedicatedClouddisasterRecoverySiteTypeEnum;
    remoteZvmInternalIp?: string;
    serviceName?: string;
    remoteEndpointPublicIp?: string;
    vpnConfigState?: DedicatedClouddisasterRecoveryVpnConfigStateEnum;
    lastVpnConfig?: string;
    datacenterName?: string;
}
export declare enum DedicatedClouddisasterRecoverySiteRoleEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SINGLE = "single"
}
export declare enum DedicatedClouddisasterRecoverySiteTypeEnum {
    ONPREMISE = "onPremise",
    OVHPRIVATECLOUD = "ovhPrivateCloud"
}
export declare enum DedicatedClouddisasterRecoveryVpnConfigStateEnum {
    CONFIGURED = "configured",
    CONFIGURING = "configuring",
    ERROR = "error",
    NOTCONFIGURED = "notConfigured",
    TUNNELERROR = "tunnelError"
}
export interface DedicatedCloudFederation {
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudFederationAccessNetwork {
    description: string;
    domainAlias: string;
    activeDirectoryId: number;
    sslThumbprint?: string;
    username: string;
    baseDnForGroups: string;
    state: DedicatedCloudoptionAccessNetworkStateEnum;
    ldapTcpPort: number;
    ip: string;
    domainName: string;
    baseDnForUsers: string;
}
export interface DedicatedCloudFiler {
    fullProfile: string;
    billingType: DedicatedCloudressourcesBillingTypeEnum;
    spaceFree?: any;
    profile: string;
    name: string;
    size: any;
    state: DedicatedCloudfilerStateEnum;
    vmTotal?: number;
    spaceProvisionned?: any;
    spaceUsed?: any;
    filerId: number;
}
export interface DedicatedCloudfilerHourlyConsumption {
    lastUpdate: string;
    consumption: any;
}
export interface DedicatedCloudfilerProfile {
    name: string;
    size: any;
    fullName: string;
}
export declare enum DedicatedCloudfilerStateEnum {
    ADDING = "adding",
    DELIVERED = "delivered",
    ERROR = "error",
    REMOVING = "removing",
    UNKNOWN = "unknown"
}
export declare type DedicatedCloudGenerationEnum = '1.0' | '2.0';
export interface DedicatedCloudHcx {
    build?: string;
    version?: string;
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudHds {
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudHipaa {
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudHost {
    ram: any;
    cpuMaxCore?: number;
    state: DedicatedCloudhostStateEnum;
    vmTotal?: number;
    cpuUsed?: number;
    clusterName?: string;
    profileCode: string;
    connectionState?: DedicatedCloudhostSystemConnectionState;
    inMaintenance?: boolean;
    rack: string;
    billingType: DedicatedCloudressourcesBillingTypeEnum;
    memoryUsed?: any;
    profile: string;
    cpu: any;
    parentHostId?: number;
    hostId: number;
    cpuNum?: number;
    uptime?: number;
    cpuMax?: number;
    name: string;
    vmVcpuTotal?: number;
}
export interface DedicatedCloudhostHourlyConsumption {
    consumption: any;
    lastUpdate: string;
}
export interface DedicatedCloudhostProfile {
    core: string;
    ram: any;
    cpu: any;
    name: string;
}
export declare enum DedicatedCloudhostStateEnum {
    ADDING = "adding",
    DELIVERED = "delivered",
    ERROR = "error",
    REMOVING = "removing",
    UNKNOWN = "unknown"
}
export interface DedicatedCloudHostProfile {
    name: string;
    id: number;
}
export interface DedicatedCloudHostStockHypervisor {
    version: string;
    value: number;
}
export interface DedicatedCloudHostStockProcGen {
    value: DedicatedCloudHostStockHypervisor[];
    cpuGeneration: string;
}
export interface DedicatedCloudHostStockProfile {
    name: string;
    ref: string;
    value: DedicatedCloudHostStockProcGen[];
    id: number;
}
export declare enum DedicatedCloudhostSystemConnectionState {
    CONNECTED = "connected",
    DISCONNECTED = "disconnected",
    NOTRESPONDING = "notResponding"
}
export declare type DedicatedCloudHypervisorVersionEnum = '4.1' | '5.0' | '5.1' | '5.5' | '6.0' | '6.5' | 'hv3.1' | 'hvdc3.1' | 'nc1.0';
export interface DedicatedCloudIp {
    country: string;
    vlanNumber: number;
    register: DedicatedCloudBlockRegisterEnum;
    networkName: string;
    description: string;
    network: any;
}
export declare enum DedicatedCloudIpCountriesEnum {
    BE = "be",
    CA = "ca",
    CH = "ch",
    CZ = "cz",
    DE = "de",
    ES = "es",
    FI = "fi",
    FR = "fr",
    GB = "gb",
    IE = "ie",
    IT = "it",
    LT = "lt",
    NL = "nl",
    PL = "pl",
    PT = "pt",
    US = "us"
}
export interface DedicatedCloudIpDetails {
    usage: DedicatedCloudipUsageEnum;
    ip: string;
    usageDetails?: string;
    reverse?: string;
}
export declare enum DedicatedCloudipUsageEnum {
    RESERVED = "reserved",
    VM = "vm"
}
export declare enum DedicatedCloudManagementInterfaceEnum {
    AZURE = "azure",
    OPENSTACK = "openstack",
    SYSTEMCENTER = "systemcenter",
    VCLOUD = "vcloud",
    VCSA = "vcsa",
    VSPHERE = "vsphere"
}
export interface DedicatedCloudmetricsToken {
    warpEndpoint: string;
    token: string;
    opentsdbEndpoint: string;
}
export interface DedicatedCloudNsx {
    url?: string;
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudObjectRight {
    vmwareObjectId: string;
    objectRightId: number;
    right: DedicatedCloudrightRightEnum;
    propagate: boolean;
    type: DedicatedCloudrightUserObjectRightTypeEnum;
    name: string;
}
export declare enum DedicatedCloudoptionStateEnum {
    DISABLED = "disabled",
    DISABLING = "disabling",
    ENABLED = "enabled",
    ENABLING = "enabling",
    ERROR = "error",
    MIGRATING = "migrating",
    UNKNOWN = "unknown"
}
export declare enum DedicatedCloudoptionAccessNetworkStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    DELIVERED = "delivered",
    ERROR = "error",
    TOCREATE = "toCreate",
    TODELETE = "toDelete",
    TOUPDATE = "toUpdate",
    UNKNOWN = "unknown",
    UPDATING = "updating"
}
export interface DedicatedCloudoptionCompatibility {
    oldCommercialVersion: string;
    newCommercialVersion: string;
}
export interface DedicatedCloudOs {
    fullName: string;
    lastModificationDate: string;
    shortName: string;
}
export interface DedicatedCloudpasswordPolicy {
    deniedChars: string[];
    digitMandatory: boolean;
    maxLength: number;
    specialMandatory: boolean;
    validityPeriod: number;
    lowercaseLetterMandatory: boolean;
    minLength: number;
    historyCheck: number;
    letterMandatory: boolean;
    uppercaseLetterMandatory: boolean;
}
export interface DedicatedCloudPccStockProfile {
    count: number;
    realVersion: string;
    mode: string;
}
export interface DedicatedCloudPccZone {
    pccZone: string;
    id: number;
}
export interface DedicatedCloudPciDss {
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudPrivateGateway {
    customerPortGroup?: string;
    state: DedicatedCloudoptionStateEnum;
    customerNetmask?: string;
    customerIp?: string;
}
export interface DedicatedCloudresourceNewPrices {
    resources?: DedicatedCloudresourceNewPricesEntry[];
}
export interface DedicatedCloudresourceNewPricesEntry {
    billingType: DedicatedCloudressourcesBillingTypeEnum;
    resourceType: DedicatedCloudressourcesResourceTypeEnum;
    newPrice: OrderPrice;
    name: string;
    oldPrice: OrderPrice;
    changed: boolean;
}
export declare enum DedicatedCloudressourcesBillingTypeEnum {
    FREESPARE = "freeSpare",
    HOURLY = "hourly",
    MONTHLY = "monthly",
    UNDEFINED = "undefined"
}
export declare enum DedicatedCloudressourcesResourceTypeEnum {
    HOST = "host",
    STORAGE = "storage"
}
export interface DedicatedCloudRestorePoint {
    restorePointSize: any;
    restorePointId: number;
    isCorrupted: boolean;
    type?: DedicatedCloudbackupBackupTypeEnum;
    creationTime?: string;
}
export interface DedicatedCloudRight {
    canAddRessource: boolean;
    datacenterId: number;
    networkRole: DedicatedCloudrightNetworkRoleEnum;
    rightId: number;
    right: DedicatedCloudrightRightEnum;
    vmNetworkRole: DedicatedCloudrightVmNetworkRoleEnum;
}
export declare enum DedicatedCloudrightNetworkRoleEnum {
    ADMIN = "admin",
    MANAGER = "manager",
    NOACCESS = "noAccess",
    READONLY = "readonly"
}
export declare enum DedicatedCloudrightRightEnum {
    ADMIN = "admin",
    DISABLED = "disabled",
    READONLY = "readonly",
    READWRITE = "readwrite"
}
export declare enum DedicatedCloudrightUserObjectRightTypeEnum {
    CLUSTER = "cluster",
    DATASTORE = "datastore",
    DVPORTGROUP = "dvportgroup",
    FOLDER = "folder",
    POOL = "pool",
    VM = "vm"
}
export declare enum DedicatedCloudrightVmNetworkRoleEnum {
    ADMIN = "admin",
    NOACCESS = "noAccess",
    READONLY = "readonly"
}
export interface DedicatedCloudRobot {
    name: string;
    description?: string;
    type: string;
    criticity: string;
    enabled: boolean;
}
export interface DedicatedCloudServicePack {
    name: string;
    options: string[];
}
export declare enum DedicatedCloudservicePackEnum {
    DEFAULT = "default",
    HDS = "hds",
    HIPAA = "hipaa",
    LEGACY = "legacy",
    NSX = "nsx",
    NSX_AND_VROPS = "nsx-and-vrops",
    PCIDSS = "pcidss",
    VROPS = "vrops"
}
export declare enum DedicatedCloudservicePackStateEnum {
    ACTIVATING = "activating",
    ACTIVE = "active",
    ERROR = "error",
    WAITINGFORCUSTOMER = "waitingForCustomer"
}
export interface DedicatedCloudservicePackStatus {
    state: DedicatedCloudservicePackStateEnum;
    name: DedicatedCloudservicePackEnum;
}
export declare enum DedicatedCloudStateEnum {
    AVAILABLE = "available",
    DELIVERED = "delivered",
    DISABLED = "disabled",
    DISABLING = "disabling",
    ERROR = "error",
    MIGRATING = "migrating",
    PROVISIONNING = "provisionning",
    RECYCLING = "recycling",
    RESERVED = "reserved",
    TODISABLE = "toDisable",
    TOPROVISION = "toProvision",
    TORECYCLE = "toRecycle",
    TOREMOVE = "toRemove",
    TOUNPROVISION = "toUnprovision",
    UNPROVISIONNING = "unprovisionning"
}
export interface DedicatedCloudTask {
    vlanId?: number;
    progress: number;
    network?: string;
    name: string;
    maintenanceDateFrom?: string;
    maintenanceDateTo?: string;
    datacenterId?: number;
    hostId?: number;
    createdBy?: string;
    description?: string;
    type: string;
    taskId: number;
    endDate?: string;
    userId?: number;
    executionDate: string;
    filerId?: number;
    orderId?: number;
    createdFrom?: string;
    state: DedicatedCloudTaskStateEnum;
    lastModificationDate?: string;
    parentTaskId?: number;
    networkAccessId?: number;
}
export declare enum DedicatedCloudTaskStateEnum {
    CANCELED = "canceled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    FIXING = "fixing",
    TOCANCEL = "toCancel",
    TOCREATE = "toCreate",
    TODO = "todo",
    UNKNOWN = "unknown",
    WAITINGFORCHILDS = "waitingForChilds",
    WAITINGTODO = "waitingTodo"
}
export interface DedicatedCloudtwoFAWhitelist {
    id: number;
    state: DedicatedCloudTwoFAWhitelistStateEnum;
    description: string;
    ip: string;
}
export declare enum DedicatedCloudTwoFAWhitelistStateEnum {
    ENABLED = "enabled",
    ENABLING = "enabling",
    ERROR = "error",
    MIGRATING = "migrating",
    REMOVED = "removed",
    REMOVING = "removing"
}
export interface DedicatedCloudUser {
    isTokenValidator: boolean;
    firstName?: string;
    login: string;
    receiveAlerts: boolean;
    nsxRight: boolean;
    activationState?: DedicatedClouduserActivationStateEnum;
    canManageIpFailOvers: boolean;
    userId: number;
    email?: string;
    name: string;
    lastName?: string;
    canManageNetwork: boolean;
    state: DedicatedClouduserStateEnum;
    phoneNumber?: string;
    isEnableManageable: boolean;
    fullAdminRo: boolean;
    canManageRights: boolean;
}
export declare enum DedicatedClouduserActivationStateEnum {
    DISABLED = "disabled",
    DISABLING = "disabling",
    ENABLED = "enabled",
    ENABLING = "enabling",
    TODISABLE = "toDisable",
    TOENABLE = "toEnable"
}
export declare enum DedicatedClouduserStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    DELIVERED = "delivered",
    ERROR = "error"
}
export declare enum DedicatedCloudUserAccessPolicyEnum {
    FILTERED = "filtered",
    OPEN = "open"
}
export declare enum DedicatedCloudUserLogoutPolicyEnum {
    FIRST = "first",
    LAST = "last"
}
export interface DedicatedCloudVendor {
    vendorName: string;
}
export interface DedicatedCloudvendorOvhId {
    datacenterId?: number;
    hostId?: number;
    vmId?: number;
    filerId?: number;
}
export declare enum DedicatedCloudVendorObjectTypeEnum {
    CLUSTER = "cluster",
    DATACENTER = "datacenter",
    FILER = "filer",
    HOST = "host",
    VM = "vm"
}
export interface DedicatedCloudVersion {
    build: string;
    major: string;
    minor: string;
}
export declare enum DedicatedCloudvirtualDeviceConnectInfoStatus {
    OK = "ok",
    RECOVERABLEERROR = "recoverableError",
    UNRECOVERABLEERROR = "unrecoverableError",
    UNTRIED = "untried"
}
export interface DedicatedCloudvirtualMachineCdrom {
    connected?: boolean;
    iso?: string;
}
export declare enum DedicatedCloudvirtualMachineFaultToleranceState {
    DISABLED = "disabled",
    ENABLED = "enabled",
    NEEDSECONDARY = "needSecondary",
    NOTCONFIGURED = "notConfigured",
    RUNNING = "running",
    STARTING = "starting"
}
export declare enum DedicatedCloudvirtualMachinePowerState {
    DELETED = "deleted",
    POWEREDOFF = "poweredOff",
    POWEREDON = "poweredOn",
    SUSPENDED = "suspended"
}
export interface DedicatedCloudVlan {
    vlanId: number;
    vlanNumber: number;
    state: DedicatedCloudvlanStateEnum;
    name: string;
    routingRateLimit: string;
    type: DedicatedCloudvlanTypeEnum;
}
export declare enum DedicatedCloudvlanStateEnum {
    AVAILABLE = "available",
    DELIVERED = "delivered",
    DISABLED = "disabled",
    ERROR = "error",
    REMOVING = "removing",
    RESERVED = "reserved"
}
export declare enum DedicatedCloudvlanTypeEnum {
    ADMIN = "admin",
    FREE = "free",
    PAID = "paid"
}
export interface DedicatedCloudVm {
    netRx?: any;
    writePerSecond?: any;
    readPerSecond?: any;
    cpuMax?: any;
    cpuReadyPercent?: any;
    name?: string;
    writeRate?: any;
    vmId: number;
    readLatency?: any;
    writeLatency?: any;
    roleFt?: string;
    vmwareTools?: string;
    cpuReady?: any;
    cpuUsed?: number;
    clusterName?: string;
    memoryMax?: number;
    netTx?: any;
    filers?: DedicatedCloudvmFiler[];
    vmwareToolsVersion?: string;
    folderName?: string;
    moRef: string;
    cdroms?: DedicatedCloudvirtualMachineCdrom[];
    cpuNum?: number;
    powerState: DedicatedCloudvirtualMachinePowerState;
    snapshotNum?: number;
    netPacketRx?: any;
    backup?: DedicatedCloudbackupBackup;
    netPacketTx?: any;
    hostName?: string;
    readRate?: any;
    memoryTps?: string;
    networks?: DedicatedCloudvmNetwork[];
    stateFt?: DedicatedCloudvirtualMachineFaultToleranceState;
    memoryUsed?: number;
}
export interface DedicatedCloudVMEncryption {
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudVMEncryptionAccessNetwork {
    ip: string;
    description: string;
    sslThumbprint: string;
    kmsId: number;
    state: DedicatedCloudoptionAccessNetworkStateEnum;
    kmsTcpPort: number;
}
export interface DedicatedCloudvmFiler {
    committed: any;
    name: string;
    disks: DedicatedCloudvmFilerDisk[];
}
export interface DedicatedCloudvmFilerDisk {
    capacity: any;
    id: string;
}
export interface DedicatedCloudvmNetwork {
    macAddress: string;
    label: string;
    startConnected: boolean;
    connected: boolean;
    controler: string;
    status: DedicatedCloudvirtualDeviceConnectInfoStatus;
    backing: DedicatedCloudvmNetworkBacking;
    allowGuestControl: boolean;
}
export interface DedicatedCloudvmNetworkBacking {
    portGroupKey?: string;
    portKey?: string;
    useAutoDetect?: boolean;
    type: DedicatedCloudvmNetworkBackingTypeEnum;
    valueMoref?: string;
    deviceName?: string;
    switchUuid?: string;
}
export declare enum DedicatedCloudvmNetworkBackingTypeEnum {
    DVS = "DVS",
    VSS = "VSS"
}
export interface DedicatedCloudVrops {
    url?: string;
    state: DedicatedCloudoptionStateEnum;
}
export interface DedicatedCloudZpoolStockProfile {
    minimumAvailability: string;
    realCount: number;
    profile: string;
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
    manualPayment?: boolean;
    forced: boolean;
    deleteAtExpiration: boolean;
    automatic: boolean;
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
    contactBilling: string;
    expiration: string;
    domain: string;
    contactTech: string;
    status: ServiceStateEnum;
    canDeleteAtExpiration: boolean;
    possibleRenewPeriod?: number[];
    renewalType: ServiceRenewalTypeEnum;
    renew?: ServiceRenewType;
    engagedUpTo?: string;
    creation: string;
    serviceId: number;
    contactAdmin: string;
}
export interface VrackdedicatedCloud {
    dedicatedCloud: string;
    vlanId?: number;
    vrack: string;
}
export interface VrackTask {
    targetDomain?: string;
    todoDate?: string;
    status: VrackTaskStatusEnum;
    id: number;
    function: string;
    lastUpdate?: string;
    orderId?: number;
    serviceName?: string;
}
export declare enum VrackTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    INIT = "init",
    TODO = "todo"
}
export declare class DedicatedCloud {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<DedicatedClouddedicatedCloud>;
    AlterThisObjectProperties(serviceName: string, payload: DedicatedClouddedicatedCloud): Promise<DedicatedCloudTask>;
    NetworksAllowedToAccessToThisPrivateCloudManagementInterface(serviceName: string): Promise<number[]>;
    CreateANewAllowedNetworkForYourDedicatedCloud(network: any, serviceName: string, description?: string): Promise<DedicatedCloudTask>;
    RemoveThisNetworkFromYourPrivateCloud(networkAccessId: number, serviceName: string): Promise<DedicatedCloudTask>;
    TasksAssociatedWithThisAllowedNetwork(networkAccessId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskStateEnum): Promise<number[]>;
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, networkAccessId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask>;
    RestartTaskInError(networkAccessId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    UpdateThisPrivateCloudProperties(serviceName: string, description?: string, sslV3?: boolean, userAccessPolicy?: DedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: DedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number): Promise<DedicatedCloudTask>;
    GetTheNameOfTheCommercialRangesCompliantWithYourPrivateCloud(serviceName: string): Promise<string[]>;
    GetTheNameOfTheCommercialRangesOrderableInYourPrivateCloud(serviceName: string): Promise<string[]>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    DatacentersAssociatedWithThisPrivateCloud(serviceName: string): Promise<number[]>;
    AddANewDatacenterInYourPrivateCloud(commercialRangeName: string, serviceName: string, vrackName?: string): Promise<DedicatedCloudTask>;
    RemoveThisDatacenterFromYourPrivateCloudItHasToBeEmptyInOrderToBeRemovable(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask>;
    EditTheBackupOnAPrivateCloud(backupDurationInReport: boolean, backupOffer: DedicatedCloudbackupOfferTypeEnum, backupSizeInReport: boolean, datacenterId: number, diskSizeInReport: boolean, fullDayInReport: boolean, restorePointInReport: boolean, serviceName: string, mailAddress?: string, scheduleHour?: any): Promise<DedicatedCloudTask>;
    DisableBackupSolutionOnAPrivateCloud(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask>;
    EnableBackupSolutionOnAPrivateCloud(datacenterId: number, serviceName: string, backupOffer?: DedicatedCloudbackupOfferTypeEnum): Promise<DedicatedCloudTask>;
    DisableZerto(datacenterId: number, secondaryDatacenterId: number, secondaryServiceName: string, serviceName: string): Promise<DedicatedCloudTask>;
    EnableZertoReplicationBetween2OVHDedicatedClouds(datacenterId: number, primaryEndpointIp: string, secondaryDatacenterId: number, secondaryEndpointIp: string, secondaryServiceName: string, serviceName: string): Promise<DedicatedCloudTask>;
    GenerateANewPasswordForZertoSelfServicePortalAndReceiveItByEmail(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask>;
    GetTheCurrentStateOfZertoDeploymentOnYourDedicatedCloud(datacenterId: number, serviceName: string): Promise<DedicatedClouddisasterRecoveryProfile>;
    ConfigureVpnBetweenYourOVHPrivateCloudAndYourOnsiteInfrastructure(datacenterId: number, preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteZvmInternalIp: string, serviceName: string, remoteVraNetwork?: any): Promise<DedicatedCloudTask>;
    GetTheDefaultLocalVraNetworkSubnetSuggestedByOVH(datacenterId: number, serviceName: string): Promise<any>;
    DisableSingleSiteZerto(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask>;
    EnableZertoReplicationBetweenYourOVHPrivateCloudAndYourOnsiteInfrastructure(datacenterId: number, localVraNetwork: string, ovhEndpointIp: string, remoteVraNetwork: string, serviceName: string): Promise<DedicatedCloudTask>;
    FilersAssociatedWithThisDatacenter(datacenterId: number, serviceName: string): Promise<number[]>;
    HourlyConsumptionAssociatedWithThisFiler(datacenterId: number, filerId: number, serviceName: string): Promise<DedicatedCloudfilerHourlyConsumption>;
    RemoveTheFilerFromYourPrivateCloud(datacenterId: number, filerId: number, serviceName: string): Promise<DedicatedCloudTask>;
    TasksAssociatedWithThisFiler(datacenterId: number, filerId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskStateEnum): Promise<number[]>;
    HostsAssociatedWithThisDatacenter(datacenterId: number, serviceName: string): Promise<number[]>;
    AddASpareHostToYourPrivateCloud(datacenterId: number, hostId: number, reason: string, serviceName: string): Promise<DedicatedCloudTask>;
    HourlyConsumptionAssociatedWithThisHost(datacenterId: number, hostId: number, serviceName: string): Promise<DedicatedCloudhostHourlyConsumption>;
    RemoveTheHostFromYourPrivateCloud(datacenterId: number, hostId: number, serviceName: string): Promise<DedicatedCloudTask>;
    TasksAssociatedWithThisHost(datacenterId: number, hostId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskStateEnum): Promise<number[]>;
    ListAvailableFilersInAGivenPrivateCloudDatacenter(datacenterId: number, serviceName: string): Promise<DedicatedCloudfilerProfile[]>;
    ListAvailableHostsInAGivenPrivateCloudDatacenter(datacenterId: number, serviceName: string): Promise<DedicatedCloudhostProfile[]>;
    OrderANewHourlyFilerInAGivenDatacenter(datacenterId: number, name: string, serviceName: string): Promise<DedicatedCloudTask>;
    OrderANewHourlyHostInAGivenDatacenter(datacenterId: number, name: string, serviceName: string): Promise<DedicatedCloudTask>;
    RemoveThePrivateGatewayInYourPrivateCloudAndOpenPublicAccess(datacenterId: number, serviceName: string): Promise<DedicatedCloudTask>;
    DeployAPrivateGatewayOnYourPrivateCloudToBlockAllPublicAccess(datacenterId: number, ip: string, netmask: string, portgroup: string, serviceName: string): Promise<DedicatedCloudTask>;
    TasksAssociatedWithThisDatacenter(datacenterId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskStateEnum): Promise<number[]>;
    VirtualMachinessAssociatedWithThisDatacenter(datacenterId: number, serviceName: string): Promise<number[]>;
    EditABackupJob(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask>;
    DisableBackupSolutionOnThisVirtualMachine(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask>;
    EnableBackupSolutionOnThisVirtualMachine(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask>;
    RestorePointAssociatedToThisBackupJob(datacenterId: number, serviceName: string, vmId: number): Promise<number[]>;
    RestoreThisRestorePoint(datacenterId: number, filerId: number, restorePointId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask>;
    DisableBackupOnThisVirtualMachine(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask>;
    EditBackupOnThisVirtualMachine(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask>;
    EnableBackupOnThisVirtualMachine(backupDays: DedicatedCloudbackupBackupDaysEnum[], datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask>;
    ActiveDirectoriesLinkedToThisPrivateCloud(serviceName: string): Promise<number[]>;
    AddANewOptionUserAccess(baseDnForGroups: string, baseDnForUsers: string, domainAlias: string, domainName: string, ip: string, password: string, serviceName: string, username: string, description?: string): Promise<DedicatedCloudTask>;
    RemoveAnOptionUserAccess(activeDirectoryId: number, serviceName: string): Promise<DedicatedCloudTask>;
    ChangeActiveDirectoryProperties(activeDirectoryId: number, password: string, serviceName: string, username: string, description?: string): Promise<DedicatedCloudTask>;
    GrantActiveDirectoryUser(activeDirectoryId: number, serviceName: string, username: string): Promise<DedicatedCloudTask>;
    FilersMountedOnAllDatacentersOfYourPrivateCloudVsphere(serviceName: string): Promise<number[]>;
    GetFilteredTasksAssociatedWithThisPrivateCloud(serviceName: string, datacenterId?: number, endDateFrom?: string, endDateTo?: string, executionDateFrom?: string, executionDateTo?: string, filerId?: number, hostId?: number, lastModificationDateFrom?: string, lastModificationDateTo?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: DedicatedCloudTaskStateEnum[], userId?: number, vlanId?: number): Promise<number[]>;
    CheckIfVMwareHybridCloudExtensionOptionCanBeDisabled(serviceName: string): Promise<boolean>;
    CheckIfVMwareHybridCloudExtensionOptionCanBeEnabled(serviceName: string): Promise<boolean>;
    DisableVMwareHybridCloudExtensionOption(serviceName: string): Promise<DedicatedCloudTask>;
    EnableVMwareHybridCloudExtensionOption(serviceName: string): Promise<DedicatedCloudTask>;
    CheckIfHdsOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    CheckIfHdsOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    DisableHdsOption(serviceName: string): Promise<DedicatedCloudTask>;
    EnableHdsOption(serviceName: string): Promise<DedicatedCloudTask>;
    CheckIfHipaaOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    CheckIfHipaaOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    DisableHipaaOption(serviceName: string): Promise<DedicatedCloudTask>;
    EnableHipaaOption(serviceName: string): Promise<DedicatedCloudTask>;
    IpBlocksAttachedToThisPrivateCloud(serviceName: string): Promise<any>;
    ListDetailsAboutThisIPBlock(network: any, serviceName: string): Promise<DedicatedCloudIpDetails[]>;
    TasksAssociatedWithThisIPBlock(network: any, serviceName: string, name?: string, state?: DedicatedCloudTaskStateEnum): Promise<number[]>;
    GetTheNewPricesForYourPrivateCloud(serviceName: string): Promise<DedicatedCloudresourceNewPrices>;
    CheckIfNsxOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    CheckIfNsxOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    DisableNsxOption(serviceName: string): Promise<DedicatedCloudTask>;
    EnableNsxOption(serviceName: string): Promise<DedicatedCloudTask>;
    GetTheCountriesYouCanSelectInOrderdedicatedCloudserviceNameip(serviceName: string): Promise<DedicatedCloudIpCountriesEnum[]>;
    OrderANewHourlyFilerMountedInEveryDatacenterOfAGivenPrivateCloud(name: string, serviceName: string): Promise<DedicatedCloudTask>;
    GetTheCurrentPasswordPolicyForYourPrivateCloud(serviceName: string): Promise<DedicatedCloudpasswordPolicy>;
    CheckIfPCIDSSOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    CheckIfPCIDSSOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    DisablePCIDSSOption(serviceName: string): Promise<DedicatedCloudTask>;
    EnablePCIDSSOption(serviceName: string): Promise<DedicatedCloudTask>;
    ResetAllTriggeredAlarmsOnPCC(serviceName: string): Promise<DedicatedCloudTask>;
    RobotsThatCanRunOnThisPrivateCloud(serviceName: string): Promise<string[]>;
    RetrieveTheServicePackInformations(serviceName: string): Promise<DedicatedCloudservicePackStatus>;
    ServicePackCompliantWithTheCurrentPrivateCloud(serviceName: string): Promise<string[]>;
    TasksAssociatedWithThisPrivateCloud(serviceName: string, name?: string, state?: DedicatedCloudTaskStateEnum): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    IpAllowedToBypassTheTwoFactorAuthenticationOnThisPrivateCloudManagementInterface(serviceName: string): Promise<number[]>;
    AddAWhitelistedIpOnTheTwoFactorAuthentication(description: string, ip: string, serviceName: string): Promise<DedicatedCloudTask>;
    RemoveAWhitelistedIpOnTheTwoFactorAuthentication(id: number, serviceName: string): Promise<DedicatedCloudTask>;
    ChangePrivateCloudTwoFacterAuthenticationWhitelistProperties(id: number, serviceName: string, description?: string): Promise<DedicatedCloudTask>;
    UpgradeYourHypervisorToTheNextReleasedVersion(serviceName: string): Promise<DedicatedCloudTask>;
    PrivateCloudUsers(serviceName: string, name?: string): Promise<number[]>;
    CreateANewUserInYourPrivateCloud(name: string, serviceName: string, canAddRessource?: boolean, canManageRights?: boolean, email?: string, expirationDate?: string, firstName?: string, lastName?: string, networkRole?: DedicatedCloudrightNetworkRoleEnum, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: DedicatedCloudrightRightEnum, tokenValidator?: boolean, vmNetworkRole?: DedicatedCloudrightVmNetworkRoleEnum): Promise<DedicatedCloudTask>;
    RemoveAGivenUserFromYourPrivateCloud(serviceName: string, userId: number): Promise<DedicatedCloudTask>;
    ChangePrivateCloudUserPassword(serviceName: string, userId: number, password?: string): Promise<DedicatedCloudTask>;
    ChangePrivateCloudUserProperties(serviceName: string, userId: number, canManageIpFailOvers?: boolean, canManageNetwork?: boolean, canManageRights?: boolean, email?: string, firstName?: string, fullAdminRo?: boolean, lastName?: string, nsxRight?: boolean, phoneNumber?: string, receiveAlerts?: boolean, tokenValidator?: boolean): Promise<DedicatedCloudTask>;
    DisableTheGivenPrivateCloudUser(serviceName: string, userId: number): Promise<DedicatedCloudTask>;
    EnableTheGivenPrivateCloudUser(serviceName: string, userId: number): Promise<DedicatedCloudTask>;
    GetMetricsTokenToQueryVScopeGraphsData(serviceName: string, userId: number): Promise<DedicatedCloudmetricsToken>;
    UserRightsOnAnObject(serviceName: string, userId: number): Promise<number[]>;
    AddANewObjectRightToUserInDatacenterOnPrivateCloud(right: DedicatedCloudrightRightEnum, serviceName: string, type: DedicatedCloudrightUserObjectRightTypeEnum, userId: number, vmwareObjectId: string, propagate?: boolean): Promise<DedicatedCloudTask>;
    RemoveAnObjectRightFromUserInDatacenterOnPrivateCloud(objectRightId: number, serviceName: string, userId: number): Promise<DedicatedCloudTask>;
    UserRightsInAGivenDatacenters(serviceName: string, userId: number): Promise<number[]>;
    TasksAssociatedWithThisUser(serviceName: string, userId: number, name?: string, state?: DedicatedCloudTaskStateEnum): Promise<number[]>;
    GetAvailableObjectTypes(serviceName: string): Promise<string[]>;
    GetOvhIdFromObjectType(objectType: DedicatedCloudVendorObjectTypeEnum, serviceName: string, vendorId: string): Promise<DedicatedCloudvendorOvhId>;
    PrivateCloudVlans(serviceName: string): Promise<number[]>;
    VMEncryptionKMSLinkedToThisPrivateCloud(serviceName: string): Promise<number[]>;
    ChangeOptionUserAccessProperties(kmsId: number, serviceName: string, sslThumbprint: string, description?: string): Promise<DedicatedCloudTask>;
    ThisPrivateCloudVrack(serviceName: string): Promise<string[]>;
    RemoveThisDedicatedCloudVmNetworkFromThisVrack(serviceName: string, vrack: string): Promise<VrackTask>;
    CheckIfVRealizeOperationsOptionCanBeDisabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    CheckIfVRealizeOperationsOptionCanBeEnabled(serviceName: string): Promise<DedicatedCloudoptionCompatibility>;
    DisableVRealizeOperationsOption(serviceName: string): Promise<DedicatedCloudTask>;
    EnableVRealizeOperationsOption(serviceName: string): Promise<DedicatedCloudTask>;
    ListOfCommercialRangesAvailableInADedicatedCloud(): Promise<string[]>;
    ListOfLocationsAvailableInADedicatedCloud(): Promise<string[]>;
    OfferedHostProfile(pccZone: string): Promise<number[]>;
    OfferedHypervisorVersion(pccZone: string): Promise<string[]>;
    AvailableHostStock(pccZone: string, minYear?: number): Promise<DedicatedCloudHostStockProfile[]>;
    AvailablePCCStock(pccZone: string): Promise<DedicatedCloudPccStockProfile[]>;
    AvailableZpoolStock(pccZone: string, profileFilter?: string): Promise<DedicatedCloudZpoolStockProfile[]>;
}
//# sourceMappingURL=dedicatedCloud.d.ts.map