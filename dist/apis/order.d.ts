import { Client } from '../client';
export declare type CdnwebstorageOrderStorageEnum = '100GB' | '10TB' | '1TB' | '500GB' | '50TB' | '5TB';
export declare type CdnwebstorageOrderTrafficEnum = 1 | 10 | 100 | 1000 | 10000;
export declare type CdnanycastOrderCacheRuleEnum = 100 | 1000;
export declare type CdnanycastOrderQuotaEnum = 1 | 10 | 100 | 1000;
export interface ComplexTypeSafeKeyValue<T> {
    key: string;
    value: T;
}
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
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
export declare enum DedicatedhousingHaRoutingOfferEnum {
    HA2X2 = "ha2x2",
    HA2X4 = "ha2x4"
}
export declare type DedicatedNasHAOfferEnum = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g';
export declare enum DedicatedNasHAZoneEnum {
    BHS = "bhs",
    RBX = "rbx",
    SBG = "sbg"
}
export declare type DedicatedserverBackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000;
export declare type DedicatedserverBandwidthOrderEnum = 1000 | 2000 | 3000;
export declare enum DedicatedserverBandwidthOrderTypeEnum {
    PLATINUM = "platinum",
    PREMIUM = "premium",
    ULTIMATE = "ultimate"
}
export declare type DedicatedserverBandwidthvRackOrderEnum = 1000 | 3000;
export declare enum DedicatedserverFirewallModelEnum {
    ASA5505 = "asa5505",
    ASA5510 = "asa5510",
    ASA5520 = "asa5520"
}
export declare type DedicatedserverIpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8;
export declare enum DedicatedserverIpCountryEnum {
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
export declare enum DedicatedserverIpStaticCountryEnum {
    BE = "be",
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
    UK = "uk"
}
export declare enum DedicatedserverIpTypeOrderableEnum {
    FAILOVER = "failover",
    STATIC = "static",
    UNSHIELDED = "unshielded"
}
export declare enum DedicatedserverOrderableSysFeatureEnum {
    BACKUPPROTOCOL = "backupProtocol",
    MONITORING = "monitoring"
}
export declare enum DedicatedserverSupportLevelOrderableEnum {
    CRITICAL = "critical",
    FASTPATH = "fastpath",
    GS = "gs"
}
export declare type DedicatedserverTrafficOrderEnum = '100Mbps-Unlimited' | '250Mbps-Unlimited' | '500Mbps-Unlimited';
export declare type DedicatedserverUsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64;
export declare type DedicatedCloudAdditionalBandwidthEnum = '1500';
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
export declare type DedicatedCloudOrderableIpBlockRangeEnum = '24' | '25' | '26' | '27' | '28';
export declare enum DedicatedCloudressourcesUpgradeRessourceTypeEnum {
    ACCOUNT = "account",
    ALL = "all",
    FILER = "filer",
    HOST = "host"
}
export declare enum DedicatedCloudressourcesUpgradeTypeEnum {
    DEMOTOMONTHLY = "demoToMonthly",
    FREESPARETOHOURLY = "freeSpareToHourly",
    HOURLYTOMONTHLY = "hourlyToMonthly"
}
export declare type EmaildomainOfferEnum = '100' | '25' | '5' | 'FULL';
export declare type EmailexchangeaccountQuotaEnum = 300 | 50;
export declare enum EmailexchangeOutlookVersionEnum {
    MAC_X86_2011 = "mac_x86_2011",
    MAC_X86_2016 = "mac_x86_2016",
    WINDOWS_X64_2013 = "windows_x64_2013",
    WINDOWS_X64_2016 = "windows_x64_2016",
    WINDOWS_X86_2013 = "windows_x86_2013",
    WINDOWS_X86_2016 = "windows_x86_2016"
}
export declare enum EmailexchangeOvhLicenceEnum {
    BASIC = "basic",
    ENTERPRISE = "enterprise",
    STANDARD = "standard"
}
export declare type FreefaxQuantityEnum = 10 | 100 | 1000 | 10000 | 100000 | 200 | 2000 | 50 | 500 | 5000;
export declare type HostingPrivateDatabaseAvailableRamSizeEnum = '1024' | '2048' | '4096' | '512';
export declare enum HostingPrivateDatabaseDatacenterEnum {
    GRA1 = "gra1",
    GRA2 = "gra2",
    P19 = "p19"
}
export declare enum HostingPrivateDatabaseOfferEnum {
    CLASSIC = "classic",
    PUBLIC = "public"
}
export declare enum HostingPrivateDatabaseOrderableVersionEnum {
    MARIADB_10_1 = "mariadb_10.1",
    MARIADB_10_2 = "mariadb_10.2",
    MONGODB_3_4 = "mongodb_3.4",
    MONGODB_4_0 = "mongodb_4.0",
    MYSQL_5_5 = "mysql_5.5",
    MYSQL_5_6 = "mysql_5.6",
    MYSQL_5_7 = "mysql_5.7",
    POSTGRESQL_10 = "postgresql_10",
    POSTGRESQL_11 = "postgresql_11",
    POSTGRESQL_9_4 = "postgresql_9.4",
    POSTGRESQL_9_5 = "postgresql_9.5",
    POSTGRESQL_9_6 = "postgresql_9.6",
    REDIS_3_2 = "redis_3.2",
    REDIS_4_0 = "redis_4.0"
}
export declare type HostingwebBandwidthOfferEnum = 10 | 100 | 1000 | 10000 | 20 | 250 | 30 | 40 | 50 | 500;
export interface HostingwebCapabilities {
    attachedDomains: number;
    crontab: boolean;
    databaseEngines: number;
    databases: HostingwebdatabaseCreationDatabaseCapabilities[];
    disk?: HostingwebDiskType;
    emails: HostingwebCreationEmailCapabilities;
    envVars: number;
    extraUsers: number;
    filesBrowser: boolean;
    highlight?: HostingwebHighLightEnum;
    languages: HostingwebCronLanguageAvailable;
    moduleOneClick: boolean;
    privateDatabases: HostingwebdatabaseCreationDatabaseCapabilities[];
    runtimes: number;
    sitesRecommended?: number;
    ssh: boolean;
    traffic?: any;
}
export declare enum HostingwebCdnOfferEnum {
    CDN_BUSINESS = "CDN_BUSINESS",
    CDN_BUSINESS_FREE = "CDN_BUSINESS_FREE"
}
export interface HostingwebCreationEmailCapabilities {
    available: number;
    quota: any;
}
export interface HostingwebCronLanguageAvailable {
    nodejs: HostingwebNodejsVersionAvailableEnum[];
    php: HostingwebPhpVersionAvailableEnum[];
    python: HostingwebPythonVersionAvailableEnum[];
    ruby: HostingwebRubyVersionAvailableEnum[];
}
export interface HostingwebdatabaseCreationDatabaseCapabilities {
    available: number;
    engines: HostingwebdatabaseDatabaseTypeEnum[];
    isolation: HostingwebdatabaseDatabaseIsolationEnum;
    quota: any;
    type: HostingwebdatabaseDatabaseCapabilitiesTypeEnum;
}
export declare enum HostingwebdatabaseDatabaseCapabilitiesTypeEnum {
    EXTRASQLPERSO = "extraSqlPerso",
    LOCAL = "local",
    PRIVATEDATABASE = "privateDatabase",
    SQLLOCAL = "sqlLocal",
    SQLPERSO = "sqlPerso",
    SQLPRO = "sqlPro"
}
export declare enum HostingwebdatabaseDatabaseIsolationEnum {
    DEDICATED = "dedicated",
    LOCAL = "local",
    SHARED = "shared"
}
export declare enum HostingwebdatabaseDatabaseTypeEnum {
    MARIADB = "mariadb",
    MONGODB = "mongodb",
    MYSQL = "mysql",
    POSTGRESQL = "postgresql",
    REDIS = "redis"
}
export declare enum HostingwebdatabaseSqlPersoOfferEnum {
    SQLPERSO_1_BASES_400_MB = "SQLPERSO_1_BASES_400_MB",
    SQLPERSO_1_BASES_800_MB = "SQLPERSO_1_BASES_800_MB",
    SQLPERSO_20_BASES_100_MB = "SQLPERSO_20_BASES_100_MB",
    SQLPERSO_20_BASES_200_MB = "SQLPERSO_20_BASES_200_MB",
    SQLPERSO_2_BASES_400_MB = "SQLPERSO_2_BASES_400_MB",
    SQLPERSO_2_BASES_800_MB = "SQLPERSO_2_BASES_800_MB",
    SQLPERSO_50_BASES_100_MB = "SQLPERSO_50_BASES_100_MB",
    SQLPERSO_50_BASES_200_MB = "SQLPERSO_50_BASES_200_MB",
    SQLPERSO_5_BASES_100_MB = "SQLPERSO_5_BASES_100_MB",
    SQLPERSO_5_BASES_200_MB = "SQLPERSO_5_BASES_200_MB",
    SQLPERSO_5_BASES_400_MB = "SQLPERSO_5_BASES_400_MB",
    SQLPERSO_5_BASES_800_MB = "SQLPERSO_5_BASES_800_MB"
}
export interface HostingwebDiskType {
    type: HostingwebDiskTypeEnum;
    unit: string;
    value: any;
}
export declare enum HostingwebDiskTypeEnum {
    HDD = "HDD",
    SSD = "SSD"
}
export declare enum HostingwebDnsZoneEnum {
    NO_CHANGE = "NO_CHANGE",
    RESET_ALL = "RESET_ALL",
    RESET_ONLY_A = "RESET_ONLY_A",
    RESET_ONLY_MX = "RESET_ONLY_MX"
}
export declare enum HostingwebHighLightEnum {
    BEST_SELLER = "best-seller",
    NEW = "new"
}
export declare enum HostingwebmoduleOrderableNameEnum {
    DRUPAL = "DRUPAL",
    JOOMLA = "JOOMLA",
    PRESTASHOP = "PRESTASHOP",
    WORDPRESS = "WORDPRESS"
}
export declare enum HostingwebNodejsVersionAvailableEnum {
    NODEJS_10 = "nodejs-10",
    NODEJS_11 = "nodejs-11",
    NODEJS_8 = "nodejs-8",
    NODEJS_9 = "nodejs-9"
}
export declare enum HostingwebOfferEnum {
    CLOUDWEB_1 = "CLOUDWEB_1",
    CLOUDWEB_2 = "CLOUDWEB_2",
    CLOUDWEB_3 = "CLOUDWEB_3",
    KS = "KS",
    PERFORMANCE_1 = "PERFORMANCE_1",
    PERFORMANCE_2 = "PERFORMANCE_2",
    PERFORMANCE_3 = "PERFORMANCE_3",
    PERFORMANCE_4 = "PERFORMANCE_4",
    PERSO = "PERSO",
    PRO = "PRO",
    START = "START"
}
export declare type HostingweborderMxPlanEnum = '005' | '025' | '100' | 'delete' | 'full';
export declare enum HostingwebPhpVersionAvailableEnum {
    PHPFPM_5_6 = "phpfpm-5.6",
    PHPFPM_7_0 = "phpfpm-7.0",
    PHPFPM_7_1 = "phpfpm-7.1",
    PHPFPM_7_2 = "phpfpm-7.2",
    PHPFPM_7_3 = "phpfpm-7.3"
}
export declare enum HostingwebPythonVersionAvailableEnum {
    PYTHON_2 = "python-2",
    PYTHON_3 = "python-3"
}
export declare enum HostingwebRubyVersionAvailableEnum {
    RUBY_2_4 = "ruby-2.4",
    RUBY_2_5 = "ruby-2.5",
    RUBY_2_6 = "ruby-2.6"
}
export declare enum LicenseCloudLinuxVersionEnum {
    SINGLE = "SINGLE",
    WITH_CPANEL = "WITH_CPANEL",
    WITH_PLESK12 = "WITH_PLESK12",
    CLOUDLINUX_LICENSE = "cloudlinux-license"
}
export declare enum LicenseLicenseTypeEnum {
    DEDICATED = "dedicated",
    DEDICATEDCLOUD = "dedicatedCloud",
    DEDICATEDFAILOVER = "dedicatedFailover",
    FAILOVER = "failover",
    VM = "vm",
    VPS = "vps",
    VPS_CEPH = "vps_ceph",
    VPS_CLASSIC = "vps_classic",
    VPS_CLOUD = "vps_cloud",
    VPS_CLOUD_2016 = "vps_cloud_2016",
    VPS_SSD = "vps_ssd"
}
export declare enum LicenseOrderableAntispamEnum {
    SPAM_ASSASSIN = "SPAM_ASSASSIN"
}
export declare enum LicenseOrderableAntivirusEnum {
    DR_WEB = "DR_WEB",
    KASPERSKY_UNLIMITED_MAILBOXES = "KASPERSKY_UNLIMITED_MAILBOXES",
    KASPERSKY = "kaspersky"
}
export declare enum LicenseOrderableCpanelVersionEnum {
    VERSION_11_FOR_LINUX = "VERSION_11_FOR_LINUX",
    VERSION_11_FOR_VIRTUOZZO = "VERSION_11_FOR_VIRTUOZZO",
    VERSION_11_FOR_VPS = "VERSION_11_FOR_VPS",
    CPANEL_LICENSE_VERSION_11 = "cpanel-license-version-11",
    CPANEL_LICENSE_VERSION_11_FOR_VIRTUOZZO = "cpanel-license-version-11-for-virtuozzo",
    CPANEL_LICENSE_VERSION_11_FOR_VPS = "cpanel-license-version-11-for-vps"
}
export declare enum LicenseOrderableDirectAdminVersionEnum {
    DIRECTADMIN_1 = "DIRECTADMIN_1",
    DIRECTADMIN_LICENSE = "directadmin-license"
}
export declare type LicenseOrderablePleskDomainNumberEnum = '10' | '100' | '30' | '300' | 'hostingsuite' | 'unlimited';
export declare type LicenseOrderablePleskLanguagePackEnum = '1' | '1-extra-language-for-plesk12' | '2' | '2-extra-languages-for-plesk12' | '3' | '3-extra-languages-for-plesk12' | '4' | '4-extra-languages-for-plesk12' | '5' | '5-extra-languages-for-plesk12' | 'unlimited' | 'unlimited-extra-languages-for-plesk12';
export declare type LicenseOrderableVirtuozzoContainerNumberEnum = '2_CPU_001_CONTAINER' | '2_CPU_003_CONTAINER' | '2_CPU_010_CONTAINER' | '2_CPU_030_CONTAINER' | '2_CPU_060_CONTAINER' | '2_CPU_100_CONTAINER';
export declare enum LicenseOrderableVirtuozzoVersionEnum {
    VIRTUOZZO_CONTAINERS_4_FOR_LINUX = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX",
    VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS = "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS",
    VIRTUOZZO_4 = "virtuozzo-4",
    VIRTUOZZO_4_FOR_WINDOWS = "virtuozzo-4-for-windows"
}
export declare enum LicensePleskApplicationSetEnum {
    APPLICATIONPACK = "applicationpack",
    DEVELOPERPACK = "developerpack",
    POWER_PACK_FOR_PLESK12 = "power-pack-for-plesk12",
    POWERPACK = "powerpack"
}
export declare enum LicensePleskVersionEnum {
    PLESK_10_AND_LATER = "PLESK_10_AND_LATER",
    PLESK_10_AND_LATER_FOR_KVM = "PLESK_10_AND_LATER_FOR_KVM",
    PLESK_10_AND_LATER_FOR_VMWARE = "PLESK_10_AND_LATER_FOR_VMWARE",
    PLESK_10_AND_LATER_FOR_VZ = "PLESK_10_AND_LATER_FOR_VZ",
    PLESK_10_AND_LATER_FOR_WIN = "PLESK_10_AND_LATER_FOR_WIN",
    PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE = "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE",
    PLESK_10_AND_LATER_FOR_WIN_FOR_VZ = "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ",
    PLESK_10_AND_LATER_FOR_WIN_FOR_XEN = "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN",
    PLESK_10_AND_LATER_FOR_XEN = "PLESK_10_AND_LATER_FOR_XEN",
    PLESK_12_VPS_WEB_ADMIN = "PLESK_12_VPS_WEB_ADMIN",
    PLESK_12_VPS_WEB_APP = "PLESK_12_VPS_WEB_APP",
    PLESK_12_VPS_WEB_HOST = "PLESK_12_VPS_WEB_HOST",
    PLESK_12_VPS_WEB_HOST_CLNX = "PLESK_12_VPS_WEB_HOST_CLNX",
    PLESK_12_VPS_WEB_PRO = "PLESK_12_VPS_WEB_PRO",
    PLESK_12_VPS_WEB_PRO_CLNX = "PLESK_12_VPS_WEB_PRO_CLNX",
    PLESK_12_WEB_ADMIN = "PLESK_12_WEB_ADMIN",
    PLESK_12_WEB_APP = "PLESK_12_WEB_APP",
    PLESK_12_WEB_HOST = "PLESK_12_WEB_HOST",
    PLESK_12_WEB_HOST_CLNX = "PLESK_12_WEB_HOST_CLNX",
    PLESK_12_WEB_PRO = "PLESK_12_WEB_PRO",
    PLESK_12_WEB_PRO_CLNX = "PLESK_12_WEB_PRO_CLNX",
    PLESK_75_RELOADED = "PLESK_75_RELOADED",
    PLESK_80 = "PLESK_80",
    PLESK_80_FOR_VZ = "PLESK_80_FOR_VZ",
    PLESK_81_FOR_WIN = "PLESK_81_FOR_WIN",
    PLESK_9 = "PLESK_9",
    PLESK_95 = "PLESK_95",
    PLESK_95_FOR_VZ = "PLESK_95_FOR_VZ",
    PLESK_95_FOR_WIN = "PLESK_95_FOR_WIN",
    PLESK_9_FOR_VZ = "PLESK_9_FOR_VZ",
    PLESK_9_FOR_WIN = "PLESK_9_FOR_WIN",
    PLESK_ONYX_VPS_WEB_ADMIN = "PLESK_ONYX_VPS_WEB_ADMIN",
    PLESK_ONYX_VPS_WEB_APP = "PLESK_ONYX_VPS_WEB_APP",
    PLESK_ONYX_VPS_WEB_HOST = "PLESK_ONYX_VPS_WEB_HOST",
    PLESK_ONYX_VPS_WEB_HOST_CLNX = "PLESK_ONYX_VPS_WEB_HOST_CLNX",
    PLESK_ONYX_VPS_WEB_PRO = "PLESK_ONYX_VPS_WEB_PRO",
    PLESK_ONYX_VPS_WEB_PRO_CLNX = "PLESK_ONYX_VPS_WEB_PRO_CLNX",
    PLESK_ONYX_WEB_ADMIN = "PLESK_ONYX_WEB_ADMIN",
    PLESK_ONYX_WEB_APP = "PLESK_ONYX_WEB_APP",
    PLESK_ONYX_WEB_HOST = "PLESK_ONYX_WEB_HOST",
    PLESK_ONYX_WEB_HOST_CLNX = "PLESK_ONYX_WEB_HOST_CLNX",
    PLESK_ONYX_WEB_PRO = "PLESK_ONYX_WEB_PRO",
    PLESK_ONYX_WEB_PRO_CLNX = "PLESK_ONYX_WEB_PRO_CLNX",
    PLESK_12_WEBADMIN_FOR_VPS = "plesk-12-webadmin-for-vps",
    PLESK_12_WEBHOST = "plesk-12-webhost",
    PLESK_12_WEBHOST_FOR_VPS = "plesk-12-webhost-for-vps",
    PLESK_12_WEBPRO = "plesk-12-webpro",
    PLESK_12_WEBPRO_FOR_VPS = "plesk-12-webpro-for-vps"
}
export declare enum LicenseSqlServerVersionEnum {
    SQL_SERVER_2008_STANDARD_EDITION_2_CPU = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
    SQL_SERVER_2008_STANDARD_EDITION_4_CPU = "SQL_SERVER_2008_STANDARD_EDITION_4_CPU",
    SQL_SERVER_2008_WEB_EDITION_2_CPU = "SQL_SERVER_2008_WEB_EDITION_2_CPU",
    SQL_SERVER_2008_WEB_EDITION_4_CPU = "SQL_SERVER_2008_WEB_EDITION_4_CPU",
    SQL_SERVER_2012_STANDARD_EDITION_10_CORES = "SQL_SERVER_2012_STANDARD_EDITION_10_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_12_CORES = "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_16_CORES = "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_18_CORES = "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_20_CORES = "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_24_CORES = "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_2_CPU = "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
    SQL_SERVER_2012_STANDARD_EDITION_32_CORES = "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_4_CORES = "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_6_CORES = "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_8_CORES = "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
    SQL_SERVER_2012_WEB_EDITION_10_CORES = "SQL_SERVER_2012_WEB_EDITION_10_CORES",
    SQL_SERVER_2012_WEB_EDITION_12_CORES = "SQL_SERVER_2012_WEB_EDITION_12_CORES",
    SQL_SERVER_2012_WEB_EDITION_16_CORES = "SQL_SERVER_2012_WEB_EDITION_16_CORES",
    SQL_SERVER_2012_WEB_EDITION_18_CORES = "SQL_SERVER_2012_WEB_EDITION_18_CORES",
    SQL_SERVER_2012_WEB_EDITION_20_CORES = "SQL_SERVER_2012_WEB_EDITION_20_CORES",
    SQL_SERVER_2012_WEB_EDITION_24_CORES = "SQL_SERVER_2012_WEB_EDITION_24_CORES",
    SQL_SERVER_2012_WEB_EDITION_32_CORES = "SQL_SERVER_2012_WEB_EDITION_32_CORES",
    SQL_SERVER_2012_WEB_EDITION_4_CORES = "SQL_SERVER_2012_WEB_EDITION_4_CORES",
    SQL_SERVER_2012_WEB_EDITION_6_CORES = "SQL_SERVER_2012_WEB_EDITION_6_CORES",
    SQL_SERVER_2012_WEB_EDITION_8_CORES = "SQL_SERVER_2012_WEB_EDITION_8_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_10_CORES = "SQL_SERVER_2014_STANDARD_EDITION_10_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_12_CORES = "SQL_SERVER_2014_STANDARD_EDITION_12_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_16_CORES = "SQL_SERVER_2014_STANDARD_EDITION_16_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_18_CORES = "SQL_SERVER_2014_STANDARD_EDITION_18_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_20_CORES = "SQL_SERVER_2014_STANDARD_EDITION_20_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_24_CORES = "SQL_SERVER_2014_STANDARD_EDITION_24_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_4_CORES = "SQL_SERVER_2014_STANDARD_EDITION_4_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_6_CORES = "SQL_SERVER_2014_STANDARD_EDITION_6_CORES",
    SQL_SERVER_2014_STANDARD_EDITION_8_CORES = "SQL_SERVER_2014_STANDARD_EDITION_8_CORES",
    SQL_SERVER_2014_WEB_EDITION_10_CORES = "SQL_SERVER_2014_WEB_EDITION_10_CORES",
    SQL_SERVER_2014_WEB_EDITION_12_CORES = "SQL_SERVER_2014_WEB_EDITION_12_CORES",
    SQL_SERVER_2014_WEB_EDITION_16_CORES = "SQL_SERVER_2014_WEB_EDITION_16_CORES",
    SQL_SERVER_2014_WEB_EDITION_18_CORES = "SQL_SERVER_2014_WEB_EDITION_18_CORES",
    SQL_SERVER_2014_WEB_EDITION_20_CORES = "SQL_SERVER_2014_WEB_EDITION_20_CORES",
    SQL_SERVER_2014_WEB_EDITION_24_CORES = "SQL_SERVER_2014_WEB_EDITION_24_CORES",
    SQL_SERVER_2014_WEB_EDITION_4_CORES = "SQL_SERVER_2014_WEB_EDITION_4_CORES",
    SQL_SERVER_2014_WEB_EDITION_6_CORES = "SQL_SERVER_2014_WEB_EDITION_6_CORES",
    SQL_SERVER_2014_WEB_EDITION_8_CORES = "SQL_SERVER_2014_WEB_EDITION_8_CORES",
    SQL_SERVER_2016_STANDARD_EDITION_10_CORES = "SQL_SERVER_2016_STANDARD_EDITION_10_CORES",
    SQL_SERVER_2016_STANDARD_EDITION_12_CORES = "SQL_SERVER_2016_STANDARD_EDITION_12_CORES",
    SQL_SERVER_2016_STANDARD_EDITION_14_CORES = "SQL_SERVER_2016_STANDARD_EDITION_14_CORES",
    SQL_SERVER_2016_STANDARD_EDITION_16_CORES = "SQL_SERVER_2016_STANDARD_EDITION_16_CORES",
    SQL_SERVER_2016_STANDARD_EDITION_4_CORES = "SQL_SERVER_2016_STANDARD_EDITION_4_CORES",
    SQL_SERVER_2016_STANDARD_EDITION_6_CORES = "SQL_SERVER_2016_STANDARD_EDITION_6_CORES",
    SQL_SERVER_2016_STANDARD_EDITION_8_CORES = "SQL_SERVER_2016_STANDARD_EDITION_8_CORES",
    SQL_SERVER_2016_WEB_EDITION_10_CORES = "SQL_SERVER_2016_WEB_EDITION_10_CORES",
    SQL_SERVER_2016_WEB_EDITION_12_CORES = "SQL_SERVER_2016_WEB_EDITION_12_CORES",
    SQL_SERVER_2016_WEB_EDITION_14_CORES = "SQL_SERVER_2016_WEB_EDITION_14_CORES",
    SQL_SERVER_2016_WEB_EDITION_16_CORES = "SQL_SERVER_2016_WEB_EDITION_16_CORES",
    SQL_SERVER_2016_WEB_EDITION_4_CORES = "SQL_SERVER_2016_WEB_EDITION_4_CORES",
    SQL_SERVER_2016_WEB_EDITION_6_CORES = "SQL_SERVER_2016_WEB_EDITION_6_CORES",
    SQL_SERVER_2016_WEB_EDITION_8_CORES = "SQL_SERVER_2016_WEB_EDITION_8_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_10_CORES = "SQL_SERVER_2017_STANDARD_EDITION_10_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_12_CORES = "SQL_SERVER_2017_STANDARD_EDITION_12_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_14_CORES = "SQL_SERVER_2017_STANDARD_EDITION_14_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_16_CORES = "SQL_SERVER_2017_STANDARD_EDITION_16_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_18_CORES = "SQL_SERVER_2017_STANDARD_EDITION_18_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_20_CORES = "SQL_SERVER_2017_STANDARD_EDITION_20_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_22_CORES = "SQL_SERVER_2017_STANDARD_EDITION_22_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_24_CORES = "SQL_SERVER_2017_STANDARD_EDITION_24_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_26_CORES = "SQL_SERVER_2017_STANDARD_EDITION_26_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_28_CORES = "SQL_SERVER_2017_STANDARD_EDITION_28_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_30_CORES = "SQL_SERVER_2017_STANDARD_EDITION_30_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_32_CORES = "SQL_SERVER_2017_STANDARD_EDITION_32_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_4_CORES = "SQL_SERVER_2017_STANDARD_EDITION_4_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_6_CORES = "SQL_SERVER_2017_STANDARD_EDITION_6_CORES",
    SQL_SERVER_2017_STANDARD_EDITION_8_CORES = "SQL_SERVER_2017_STANDARD_EDITION_8_CORES",
    SQL_SERVER_2017_WEB_EDITION_10_CORES = "SQL_SERVER_2017_WEB_EDITION_10_CORES",
    SQL_SERVER_2017_WEB_EDITION_12_CORES = "SQL_SERVER_2017_WEB_EDITION_12_CORES",
    SQL_SERVER_2017_WEB_EDITION_14_CORES = "SQL_SERVER_2017_WEB_EDITION_14_CORES",
    SQL_SERVER_2017_WEB_EDITION_16_CORES = "SQL_SERVER_2017_WEB_EDITION_16_CORES",
    SQL_SERVER_2017_WEB_EDITION_18_CORES = "SQL_SERVER_2017_WEB_EDITION_18_CORES",
    SQL_SERVER_2017_WEB_EDITION_20_CORES = "SQL_SERVER_2017_WEB_EDITION_20_CORES",
    SQL_SERVER_2017_WEB_EDITION_22_CORES = "SQL_SERVER_2017_WEB_EDITION_22_CORES",
    SQL_SERVER_2017_WEB_EDITION_24_CORES = "SQL_SERVER_2017_WEB_EDITION_24_CORES",
    SQL_SERVER_2017_WEB_EDITION_26_CORES = "SQL_SERVER_2017_WEB_EDITION_26_CORES",
    SQL_SERVER_2017_WEB_EDITION_28_CORES = "SQL_SERVER_2017_WEB_EDITION_28_CORES",
    SQL_SERVER_2017_WEB_EDITION_30_CORES = "SQL_SERVER_2017_WEB_EDITION_30_CORES",
    SQL_SERVER_2017_WEB_EDITION_32_CORES = "SQL_SERVER_2017_WEB_EDITION_32_CORES",
    SQL_SERVER_2017_WEB_EDITION_4_CORES = "SQL_SERVER_2017_WEB_EDITION_4_CORES",
    SQL_SERVER_2017_WEB_EDITION_6_CORES = "SQL_SERVER_2017_WEB_EDITION_6_CORES",
    SQL_SERVER_2017_WEB_EDITION_8_CORES = "SQL_SERVER_2017_WEB_EDITION_8_CORES",
    SQL_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU = "sql-server-2008-license-standard-edition-2-cpu",
    SQL_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU = "sql-server-2008-license-standard-edition-4-cpu",
    SQL_SERVER_2008_LICENSE_WEB_EDITION_2_CPU = "sql-server-2008-license-web-edition-2-cpu",
    SQL_SERVER_2008_LICENSE_WEB_EDITION_4_CPU = "sql-server-2008-license-web-edition-4-cpu",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_10_CORES = "sql-server-2012-license-standard-edition-10-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_12_CORES = "sql-server-2012-license-standard-edition-12-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_16_CORES = "sql-server-2012-license-standard-edition-16-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_18_CORES = "sql-server-2012-license-standard-edition-18-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU = "sql-server-2012-license-standard-edition-2-cpu",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_20_CORES = "sql-server-2012-license-standard-edition-20-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_24_CORES = "sql-server-2012-license-standard-edition-24-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_32_CORES = "sql-server-2012-license-standard-edition-32-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_4_CORES = "sql-server-2012-license-standard-edition-4-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_6_CORES = "sql-server-2012-license-standard-edition-6-cores",
    SQL_SERVER_2012_LICENSE_STANDARD_EDITION_8_CORES = "sql-server-2012-license-standard-edition-8-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_10_CORES = "sql-server-2012-license-web-edition-10-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_12_CORES = "sql-server-2012-license-web-edition-12-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_16_CORES = "sql-server-2012-license-web-edition-16-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_18_CORES = "sql-server-2012-license-web-edition-18-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_20_CORES = "sql-server-2012-license-web-edition-20-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_24_CORES = "sql-server-2012-license-web-edition-24-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_32_CORES = "sql-server-2012-license-web-edition-32-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_4_CORES = "sql-server-2012-license-web-edition-4-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_6_CORES = "sql-server-2012-license-web-edition-6-cores",
    SQL_SERVER_2012_LICENSE_WEB_EDITION_8_CORES = "sql-server-2012-license-web-edition-8-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_10_CORES = "sql-server-2014-license-standard-edition-10-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_12_CORES = "sql-server-2014-license-standard-edition-12-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_16_CORES = "sql-server-2014-license-standard-edition-16-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_18_CORES = "sql-server-2014-license-standard-edition-18-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_20_CORES = "sql-server-2014-license-standard-edition-20-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_24_CORES = "sql-server-2014-license-standard-edition-24-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_4_CORES = "sql-server-2014-license-standard-edition-4-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_6_CORES = "sql-server-2014-license-standard-edition-6-cores",
    SQL_SERVER_2014_LICENSE_STANDARD_EDITION_8_CORES = "sql-server-2014-license-standard-edition-8-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_10_CORES = "sql-server-2014-license-web-edition-10-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_12_CORES = "sql-server-2014-license-web-edition-12-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_16_CORES = "sql-server-2014-license-web-edition-16-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_18_CORES = "sql-server-2014-license-web-edition-18-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_20_CORES = "sql-server-2014-license-web-edition-20-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_24_CORES = "sql-server-2014-license-web-edition-24-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_4_CORES = "sql-server-2014-license-web-edition-4-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_6_CORES = "sql-server-2014-license-web-edition-6-cores",
    SQL_SERVER_2014_LICENSE_WEB_EDITION_8_CORES = "sql-server-2014-license-web-edition-8-cores",
    SQL_SERVER_2016_LICENSE_STANDARD_EDITION_10_CORES = "sql-server-2016-license-standard-edition-10-cores",
    SQL_SERVER_2016_LICENSE_STANDARD_EDITION_12_CORES = "sql-server-2016-license-standard-edition-12-cores",
    SQL_SERVER_2016_LICENSE_STANDARD_EDITION_14_CORES = "sql-server-2016-license-standard-edition-14-cores",
    SQL_SERVER_2016_LICENSE_STANDARD_EDITION_16_CORES = "sql-server-2016-license-standard-edition-16-cores",
    SQL_SERVER_2016_LICENSE_STANDARD_EDITION_4_CORES = "sql-server-2016-license-standard-edition-4-cores",
    SQL_SERVER_2016_LICENSE_STANDARD_EDITION_6_CORES = "sql-server-2016-license-standard-edition-6-cores",
    SQL_SERVER_2016_LICENSE_STANDARD_EDITION_8_CORES = "sql-server-2016-license-standard-edition-8-cores",
    SQL_SERVER_2016_LICENSE_WEB_EDITION_10_CORES = "sql-server-2016-license-web-edition-10-cores",
    SQL_SERVER_2016_LICENSE_WEB_EDITION_12_CORES = "sql-server-2016-license-web-edition-12-cores",
    SQL_SERVER_2016_LICENSE_WEB_EDITION_14_CORES = "sql-server-2016-license-web-edition-14-cores",
    SQL_SERVER_2016_LICENSE_WEB_EDITION_16_CORES = "sql-server-2016-license-web-edition-16-cores",
    SQL_SERVER_2016_LICENSE_WEB_EDITION_4_CORES = "sql-server-2016-license-web-edition-4-cores",
    SQL_SERVER_2016_LICENSE_WEB_EDITION_6_CORES = "sql-server-2016-license-web-edition-6-cores",
    SQL_SERVER_2016_LICENSE_WEB_EDITION_8_CORES = "sql-server-2016-license-web-edition-8-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_10_CORES = "sql-server-2017-license-standard-edition-10-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_12_CORES = "sql-server-2017-license-standard-edition-12-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_14_CORES = "sql-server-2017-license-standard-edition-14-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_16_CORES = "sql-server-2017-license-standard-edition-16-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_18_CORES = "sql-server-2017-license-standard-edition-18-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_20_CORES = "sql-server-2017-license-standard-edition-20-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_22_CORES = "sql-server-2017-license-standard-edition-22-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_24_CORES = "sql-server-2017-license-standard-edition-24-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_26_CORES = "sql-server-2017-license-standard-edition-26-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_28_CORES = "sql-server-2017-license-standard-edition-28-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_30_CORES = "sql-server-2017-license-standard-edition-30-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_32_CORES = "sql-server-2017-license-standard-edition-32-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_4_CORES = "sql-server-2017-license-standard-edition-4-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_6_CORES = "sql-server-2017-license-standard-edition-6-cores",
    SQL_SERVER_2017_LICENSE_STANDARD_EDITION_8_CORES = "sql-server-2017-license-standard-edition-8-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_10_CORES = "sql-server-2017-license-web-edition-10-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_12_CORES = "sql-server-2017-license-web-edition-12-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_14_CORES = "sql-server-2017-license-web-edition-14-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_16_CORES = "sql-server-2017-license-web-edition-16-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_18_CORES = "sql-server-2017-license-web-edition-18-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_20_CORES = "sql-server-2017-license-web-edition-20-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_22_CORES = "sql-server-2017-license-web-edition-22-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_24_CORES = "sql-server-2017-license-web-edition-24-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_26_CORES = "sql-server-2017-license-web-edition-26-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_28_CORES = "sql-server-2017-license-web-edition-28-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_30_CORES = "sql-server-2017-license-web-edition-30-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_32_CORES = "sql-server-2017-license-web-edition-32-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_4_CORES = "sql-server-2017-license-web-edition-4-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_6_CORES = "sql-server-2017-license-web-edition-6-cores",
    SQL_SERVER_2017_LICENSE_WEB_EDITION_8_CORES = "sql-server-2017-license-web-edition-8-cores"
}
export declare enum LicenseWindowsOsVersionEnum {
    WINDOWS_SERVER_2003_ENTERPRISE_EDITION = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION",
    WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU",
    WINDOWS_SERVER_2003_STANDARD_EDITION = "WINDOWS_SERVER_2003_STANDARD_EDITION",
    WINDOWS_SERVER_2003_WEB_EDITION = "WINDOWS_SERVER_2003_WEB_EDITION",
    WINDOWS_SERVER_2003_WEB_EDITION_2_CPU = "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU",
    WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION = "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION",
    WINDOWS_SERVER_2003_WEB_STANDARD_EDITION = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION",
    WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU",
    WINDOWS_SERVER_2008_DATACENTER_EDITION = "WINDOWS_SERVER_2008_DATACENTER_EDITION",
    WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU = "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU",
    WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU = "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU",
    WINDOWS_SERVER_2008_ENTERPRISE_EDITION = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION",
    WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU",
    WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU",
    WINDOWS_SERVER_2008_STANDARD_EDITION = "WINDOWS_SERVER_2008_STANDARD_EDITION",
    WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU = "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU",
    WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU = "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU",
    WINDOWS_SERVER_2008_WEB_EDITION = "WINDOWS_SERVER_2008_WEB_EDITION",
    WINDOWS_SERVER_2008_WEB_EDITION_2_CPU = "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU",
    WINDOWS_SERVER_2008_WEB_EDITION_4_CPU = "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU",
    WINDOWS_SERVER_2008_WEB_STANDARD_EDITION = "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION",
    WINDOWS_SERVER_2012_DATACENTER_EDITION = "WINDOWS_SERVER_2012_DATACENTER_EDITION",
    WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU = "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU",
    WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU = "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU",
    WINDOWS_SERVER_2012_ENTERPRISE_EDITION = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION",
    WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU",
    WINDOWS_SERVER_2012_STANDARD_EDITION = "WINDOWS_SERVER_2012_STANDARD_EDITION",
    WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU = "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU",
    WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU = "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU",
    WINDOWS_SERVER_2012_WEB_EDITION = "WINDOWS_SERVER_2012_WEB_EDITION",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
    WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_1_CPU = "windows-server-2008-license-datacenter-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_2_CPU = "windows-server-2008-license-datacenter-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_4_CPU = "windows-server-2008-license-datacenter-edition-4-cpu",
    WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_1_CPU = "windows-server-2008-license-enterprise-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_2_CPU = "windows-server-2008-license-enterprise-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_4_CPU = "windows-server-2008-license-enterprise-edition-4-cpu",
    WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_1_CPU = "windows-server-2008-license-standard-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU = "windows-server-2008-license-standard-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU = "windows-server-2008-license-standard-edition-4-cpu",
    WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_1_CPU = "windows-server-2008-license-web-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_2_CPU = "windows-server-2008-license-web-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_4_CPU = "windows-server-2008-license-web-edition-4-cpu",
    WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_1_CPU = "windows-server-2012-license-datacenter-edition-1-cpu",
    WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_2_CPU = "windows-server-2012-license-datacenter-edition-2-cpu",
    WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_4_CPU = "windows-server-2012-license-datacenter-edition-4-cpu",
    WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_1_CPU = "windows-server-2012-license-standard-edition-1-cpu",
    WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU = "windows-server-2012-license-standard-edition-2-cpu",
    WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_4_CPU = "windows-server-2012-license-standard-edition-4-cpu",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_10_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_12_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_14_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_16_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_18_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_20_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_22_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_24_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_8_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_10_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_12_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_14_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_16_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_18_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_20_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_22_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_24_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_8_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_10_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_12_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_14_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_16_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_18_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_20_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_22_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_24_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_8_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_10_CORES = "windows-server-2016-license-standard-edition-1-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_12_CORES = "windows-server-2016-license-standard-edition-1-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_14_CORES = "windows-server-2016-license-standard-edition-1-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_16_CORES = "windows-server-2016-license-standard-edition-1-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_18_CORES = "windows-server-2016-license-standard-edition-1-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_20_CORES = "windows-server-2016-license-standard-edition-1-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_22_CORES = "windows-server-2016-license-standard-edition-1-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_24_CORES = "windows-server-2016-license-standard-edition-1-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_8_CORES = "windows-server-2016-license-standard-edition-1-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_10_CORES = "windows-server-2016-license-standard-edition-2-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_12_CORES = "windows-server-2016-license-standard-edition-2-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_14_CORES = "windows-server-2016-license-standard-edition-2-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_16_CORES = "windows-server-2016-license-standard-edition-2-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_18_CORES = "windows-server-2016-license-standard-edition-2-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_20_CORES = "windows-server-2016-license-standard-edition-2-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_22_CORES = "windows-server-2016-license-standard-edition-2-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_24_CORES = "windows-server-2016-license-standard-edition-2-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_8_CORES = "windows-server-2016-license-standard-edition-2-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_10_CORES = "windows-server-2016-license-standard-edition-4-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_12_CORES = "windows-server-2016-license-standard-edition-4-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_14_CORES = "windows-server-2016-license-standard-edition-4-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_16_CORES = "windows-server-2016-license-standard-edition-4-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_18_CORES = "windows-server-2016-license-standard-edition-4-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_20_CORES = "windows-server-2016-license-standard-edition-4-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_22_CORES = "windows-server-2016-license-standard-edition-4-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_24_CORES = "windows-server-2016-license-standard-edition-4-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_8_CORES = "windows-server-2016-license-standard-edition-4-cpu-8-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_10_CORES = "windows-server-2019-license-datacenter-edition-10-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_12_CORES = "windows-server-2019-license-datacenter-edition-12-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_14_CORES = "windows-server-2019-license-datacenter-edition-14-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_16_CORES = "windows-server-2019-license-datacenter-edition-16-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_18_CORES = "windows-server-2019-license-datacenter-edition-18-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_20_CORES = "windows-server-2019-license-datacenter-edition-20-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_22_CORES = "windows-server-2019-license-datacenter-edition-22-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_24_CORES = "windows-server-2019-license-datacenter-edition-24-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_26_CORES = "windows-server-2019-license-datacenter-edition-26-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_28_CORES = "windows-server-2019-license-datacenter-edition-28-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_30_CORES = "windows-server-2019-license-datacenter-edition-30-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_32_CORES = "windows-server-2019-license-datacenter-edition-32-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_34_CORES = "windows-server-2019-license-datacenter-edition-34-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_36_CORES = "windows-server-2019-license-datacenter-edition-36-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_38_CORES = "windows-server-2019-license-datacenter-edition-38-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_40_CORES = "windows-server-2019-license-datacenter-edition-40-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_42_CORES = "windows-server-2019-license-datacenter-edition-42-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_44_CORES = "windows-server-2019-license-datacenter-edition-44-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_46_CORES = "windows-server-2019-license-datacenter-edition-46-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_48_CORES = "windows-server-2019-license-datacenter-edition-48-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_50_CORES = "windows-server-2019-license-datacenter-edition-50-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_52_CORES = "windows-server-2019-license-datacenter-edition-52-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_54_CORES = "windows-server-2019-license-datacenter-edition-54-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_56_CORES = "windows-server-2019-license-datacenter-edition-56-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_58_CORES = "windows-server-2019-license-datacenter-edition-58-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_60_CORES = "windows-server-2019-license-datacenter-edition-60-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_62_CORES = "windows-server-2019-license-datacenter-edition-62-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_64_CORES = "windows-server-2019-license-datacenter-edition-64-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_8_CORES = "windows-server-2019-license-datacenter-edition-8-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_10_CORES = "windows-server-2019-license-standard-edition-10-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_12_CORES = "windows-server-2019-license-standard-edition-12-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_14_CORES = "windows-server-2019-license-standard-edition-14-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_16_CORES = "windows-server-2019-license-standard-edition-16-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_18_CORES = "windows-server-2019-license-standard-edition-18-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_20_CORES = "windows-server-2019-license-standard-edition-20-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_22_CORES = "windows-server-2019-license-standard-edition-22-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_24_CORES = "windows-server-2019-license-standard-edition-24-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_26_CORES = "windows-server-2019-license-standard-edition-26-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_28_CORES = "windows-server-2019-license-standard-edition-28-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_30_CORES = "windows-server-2019-license-standard-edition-30-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_32_CORES = "windows-server-2019-license-standard-edition-32-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_34_CORES = "windows-server-2019-license-standard-edition-34-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_36_CORES = "windows-server-2019-license-standard-edition-36-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_38_CORES = "windows-server-2019-license-standard-edition-38-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_40_CORES = "windows-server-2019-license-standard-edition-40-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_42_CORES = "windows-server-2019-license-standard-edition-42-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_44_CORES = "windows-server-2019-license-standard-edition-44-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_46_CORES = "windows-server-2019-license-standard-edition-46-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_48_CORES = "windows-server-2019-license-standard-edition-48-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_50_CORES = "windows-server-2019-license-standard-edition-50-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_52_CORES = "windows-server-2019-license-standard-edition-52-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_54_CORES = "windows-server-2019-license-standard-edition-54-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_56_CORES = "windows-server-2019-license-standard-edition-56-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_58_CORES = "windows-server-2019-license-standard-edition-58-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_60_CORES = "windows-server-2019-license-standard-edition-60-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_62_CORES = "windows-server-2019-license-standard-edition-62-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_64_CORES = "windows-server-2019-license-standard-edition-64-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_8_CORES = "windows-server-2019-license-standard-edition-8-cores"
}
export declare enum LicenseWindowsSqlVersionEnum {
    SQL_SERVER_2008_STANDARD_EDITION = "SQL_SERVER_2008_STANDARD_EDITION",
    SQL_SERVER_2008_STANDARD_EDITION_2_CPU = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
    SQL_SERVER_2008_WEB_EDITION = "SQL_SERVER_2008_WEB_EDITION",
    SQL_SERVER_2008_WEB_EDITION_2_CPU = "SQL_SERVER_2008_WEB_EDITION_2_CPU",
    SQL_SERVER_2012_STANDARD_EDITION = "SQL_SERVER_2012_STANDARD_EDITION",
    SQL_SERVER_2012_STANDARD_EDITION_12_CORES = "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_16_CORES = "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_18_CORES = "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_20_CORES = "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_24_CORES = "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_2_CPU = "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
    SQL_SERVER_2012_STANDARD_EDITION_32_CORES = "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_4_CORES = "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_6_CORES = "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_8_CORES = "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
    SQL_SERVER_2012_WEB_EDITION_12_CORES = "SQL_SERVER_2012_WEB_EDITION_12_CORES",
    SQL_SERVER_2012_WEB_EDITION_16_CORES = "SQL_SERVER_2012_WEB_EDITION_16_CORES",
    SQL_SERVER_2012_WEB_EDITION_18_CORES = "SQL_SERVER_2012_WEB_EDITION_18_CORES",
    SQL_SERVER_2012_WEB_EDITION_20_CORES = "SQL_SERVER_2012_WEB_EDITION_20_CORES",
    SQL_SERVER_2012_WEB_EDITION_24_CORES = "SQL_SERVER_2012_WEB_EDITION_24_CORES",
    SQL_SERVER_2012_WEB_EDITION_32_CORES = "SQL_SERVER_2012_WEB_EDITION_32_CORES",
    SQL_SERVER_2012_WEB_EDITION_4_CORES = "SQL_SERVER_2012_WEB_EDITION_4_CORES",
    SQL_SERVER_2012_WEB_EDITION_6_CORES = "SQL_SERVER_2012_WEB_EDITION_6_CORES",
    SQL_SERVER_2012_WEB_EDITION_8_CORES = "SQL_SERVER_2012_WEB_EDITION_8_CORES"
}
export declare enum LicenseWorkLightVersionEnum {
    VERSION_6_1U_1CPU = "VERSION-6.1U.1CPU",
    VERSION_6_1U_2CPU = "VERSION-6.1U.2CPU",
    VERSION_6_2U_1CPU = "VERSION-6.2U.1CPU",
    VERSION_6_2U_2CPU = "VERSION-6.2U.2CPU",
    VERSION_6_EVALUATION = "VERSION-6.EVALUATION",
    WORKLIGHT_LICENSE_VERSION_6_1CPU_1U = "worklight-license-version-6-1cpu-1u",
    WORKLIGHT_LICENSE_VERSION_6_1CPU_2U = "worklight-license-version-6-1cpu-2u",
    WORKLIGHT_LICENSE_VERSION_6_2CPU_1U = "worklight-license-version-6-2cpu-1u",
    WORKLIGHT_LICENSE_VERSION_6_2CPU_2U = "worklight-license-version-6-2cpu-2u"
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
export declare enum NichandleLegalFormEnum {
    ADMINISTRATION = "administration",
    ASSOCIATION = "association",
    CORPORATION = "corporation",
    INDIVIDUAL = "individual",
    OTHER = "other",
    PERSONALCORPORATION = "personalcorporation"
}
export declare enum NichandleOvhSubsidiaryEnum {
    CZ = "CZ",
    DE = "DE",
    ES = "ES",
    EU = "EU",
    FI = "FI",
    FR = "FR",
    GB = "GB",
    IE = "IE",
    IT = "IT",
    LT = "LT",
    MA = "MA",
    NL = "NL",
    PL = "PL",
    PT = "PT",
    SN = "SN",
    TN = "TN"
}
export interface OrdercartCart {
    cartId: string;
    description: string;
    expire?: string;
    items: number[];
    readOnly: boolean;
}
export interface OrdercartCheckout {
    autoPayWithPreferredPaymentMethod: boolean;
    waiveRetractationPeriod: boolean;
}
export interface OrdercartConfigurationItem {
    id: number;
    label: string;
    value: string;
}
export interface OrdercartConfigurationRequirements {
    fields?: string[];
    label: string;
    required: boolean;
    type: string;
}
export interface OrdercartCouponCreation {
    coupon: string;
}
export interface OrdercartCreation {
    description: string;
    expire: string;
    ovhSubsidiary: NichandleOvhSubsidiaryEnum;
}
export interface OrdercartDomainPacksCreation {
    domain: string;
    duration: string;
    planCode: string;
    pricingMode: string;
    quantity: number;
}
export interface OrdercartDomainPacksDescription {
    domains: OrdercartDomainPacksDescriptionItem[];
}
export interface OrdercartDomainPacksDescriptionItem {
    available: boolean;
    domain: string;
}
export interface OrdercartDomainPacksProductInformation {
    description: OrdercartDomainPacksDescription;
    planCode: string;
    prices: OrdercartGenericProductPricing[];
}
export interface OrdercartDomainSettings {
    domain: string;
}
export declare enum OrdercartDurationUnitEnum {
    MONTH = "month",
    DAY = "day",
    NONE = "none"
}
export interface OrdercartGenericDedicatedCreation {
    duration: any;
    planCode: string;
    pricingMode: string;
    quantity: number;
}
export interface OrdercartGenericDedicatedOptionsCreation {
    duration: any;
    itemId: number;
    planCode: string;
    pricingMode: string;
    quantity: number;
}
export interface OrdercartGenericDomainCreation {
    domain: string;
    duration?: any;
    offerId?: string;
    quantity?: number;
}
export interface OrdercartGenericDomainOptionsCreation {
    duration: any;
    itemId: number;
    planCode: string;
    pricingMode: string;
    quantity: number;
}
export interface OrdercartGenericOptionCreation {
    duration: any;
    itemId: number;
    planCode: string;
    pricingMode: string;
    quantity: number;
}
export interface OrdercartGenericOptionDefinition {
    exclusive: boolean;
    family: string;
    mandatory: boolean;
    planCode: string;
    prices: OrdercartGenericProductPricing[];
    productName: string;
    productType: OrdercartGenericProductTypeEnum;
}
export interface OrdercartGenericProductCreation {
    duration: any;
    planCode: string;
    pricingMode: string;
    quantity: number;
}
export interface OrdercartGenericProductDefinition {
    planCode: string;
    prices: OrdercartGenericProductPricing[];
    productName: string;
    productType: OrdercartGenericProductTypeEnum;
}
export interface OrdercartGenericProductPricing {
    capacities: OrdercartGenericProductPricingCapacitiesEnum[];
    description: string;
    duration: any;
    interval: number;
    maximumQuantity: number;
    maximumRepeat?: number;
    minimumQuantity: number;
    minimumRepeat: number;
    price: OrderPrice;
    priceInUcents: number;
    pricingMode: string;
    pricingType: OrdercartGenericProductPricingTypeEnum;
}
export declare enum OrdercartGenericProductPricingCapacitiesEnum {
    INSTALLATION = "installation",
    RENEW = "renew",
    UPGRADE = "upgrade",
    DOWNGRADE = "downgrade"
}
export declare enum OrdercartGenericProductPricingStrategyEnum {
    STAIRSTEP = "stairstep",
    VOLUME = "volume",
    TIERED = "tiered"
}
export declare enum OrdercartGenericProductPricingTypeEnum {
    RENTAL = "rental",
    CONSUMPTION = "consumption",
    PURCHASE = "purchase"
}
export declare enum OrdercartGenericProductTypeEnum {
    DELIVERY = "delivery",
    DEPOSIT = "deposit",
    SHIPPING = "shipping",
    CLOUD_SERVICE = "cloud_service",
    SAAS_LICENSE = "saas_license",
    STORAGE = "storage",
    DOMAIN = "domain"
}
export interface OrdercartItem {
    cartId: string;
    configurations?: number[];
    duration?: any;
    itemId: number;
    offerId: string;
    options: number[];
    parentItemId?: number;
    prices: OrdercartPrice[];
    productId: string;
    settings: OrdercartDomainSettings;
}
export interface OrdercartItemConfigurationCreation {
    label: string;
    value: string;
}
export interface OrdercartItemUpdate {
    duration: any;
    quantity: number;
}
export interface OrdercartPrice {
    label: OrdercartPriceLabelEnum;
    price: OrderPrice;
}
export declare enum OrdercartPriceLabelEnum {
    PRICE = "PRICE",
    DISCOUNT = "DISCOUNT",
    FEE = "FEE",
    TOTAL = "TOTAL",
    RENEW = "RENEW"
}
export interface OrdercartProductInformation {
    configurations: OrdercartConfigurationRequirements[];
    deliveryTime: string;
    duration: any;
    offer?: string;
    orderable: boolean;
    phase: string;
    prices?: OrdercartPrice[];
    pricingMode: string;
    productId: string;
    quantityMax: number;
}
export interface OrdercartUpdate {
    description: string;
    expire: string;
}
export interface OrdercartWebHostingProductInformation {
    description: HostingwebCapabilities;
    planCode: string;
    prices: OrdercartGenericProductPricing[];
}
export interface OrdercatalogAddonItem {
    addons: OrdercatalogAddonOffer[];
    exclusive: boolean;
    family: string;
    mandatory: boolean;
}
export interface OrdercatalogAddonOffer {
    invoiceName: string;
    plan: OrdercatalogProductPlan;
}
export interface OrdercatalogCatalog {
    catalogId: number;
    merchantCode: string;
    plansFamily: OrdercatalogPlansItem[];
}
export interface OrdercatalogConfigurationItem {
    defaultValue?: string;
    isCustom: boolean;
    isMandatory: boolean;
    name: string;
    values: string[];
}
export interface OrdercatalogpccCatalog {
    catalogId: number;
    catalogName: string;
    commercialRanges: OrdercatalogpccCommercialRange[];
    merchantCode: string;
    plans: OrdercatalogProductPlan[];
}
export interface OrdercatalogpccCommercialRange {
    datacenters: OrdercatalogpccDatacenter[];
    defaultZone: string;
    name: string;
}
export interface OrdercatalogpccDatacenter {
    cityCode: string;
    cityName: string;
    countryCode: NichandleCountryEnum;
    defaultHypervisor: string;
    hypervisors: OrdercatalogpccHypervisor[];
    mainPlan: string;
    orderable: boolean;
    orderableOptions: boolean;
    orderableResources: boolean;
    storagesNoPack: string[];
    zoneFullName: string;
    zoneName: string;
}
export interface OrdercatalogpccHost {
    name: string;
    onInitialOrder: boolean;
    onUpgradeOrder: boolean;
    planCode: string;
    specifications: OrdercatalogpccHostSpecifications;
    storagesPack: string[];
}
export interface OrdercatalogpccHostCpuSpecifications {
    cores: number;
    frequency: any;
    generation: string;
    model: string;
    socket: number;
    threads: number;
}
export interface OrdercatalogpccHostMemorySpecifications {
    ram: any;
}
export interface OrdercatalogpccHostNetworkSpecifications {
    nics: number;
    speed: any;
}
export interface OrdercatalogpccHostSpecifications {
    cpu: OrdercatalogpccHostCpuSpecifications;
    memory: OrdercatalogpccHostMemorySpecifications;
    network: OrdercatalogpccHostNetworkSpecifications[];
}
export interface OrdercatalogpccHypervisor {
    hosts: OrdercatalogpccHost[];
    name: string;
    options: OrdercatalogpccOption[];
    orderable: boolean;
    servicePacks: OrdercatalogpccServicePack[];
    shortName: string;
    storages: OrdercatalogpccStorage[];
    type: string;
}
export interface OrdercatalogpccOption {
    maxInitialQuantity: number;
    name: string;
    onInitialOrder: boolean;
    onUpgradeOrder: boolean;
    planCode: string;
    type: string;
}
export interface OrdercatalogpccServicePack {
    name: string;
    options: OrdercatalogpccServicePackOption[];
    planCode: string;
    upgradableTo: string[];
}
export interface OrdercatalogpccServicePackOption {
    name: string;
    planCode: string;
    type: string;
}
export interface OrdercatalogpccStorage {
    name: string;
    onInitialOrder: boolean;
    onUpgradeOrder: boolean;
    planCode: string;
    specifications: OrdercatalogpccStorageSpecifications;
}
export interface OrdercatalogpccStorageSpecifications {
    size: any;
    type: string;
}
export interface OrdercatalogPlansItem {
    family: string;
    plans: OrdercatalogProductPlan[];
}
export interface OrdercatalogPricing {
    capacities: string[];
    commitment: number;
    description: string;
    interval: number;
    intervalUnit: string;
    maximumQuantity?: number;
    maximumRepeat?: number;
    minimumQuantity: number;
    minimumRepeat: number;
    mustBeCompleted: boolean;
    price: OrderPrice;
    priceCapInUcents?: number;
    priceInUcents: number;
    pricingStrategy: string;
}
export interface OrdercatalogPricingDefault {
    default: OrdercatalogPricing[];
}
export interface OrdercatalogprivateCloudCapabilities {
    hds: boolean;
    hipaa: boolean;
    nsx: boolean;
    pcidss: boolean;
    vrops: boolean;
}
export interface OrdercatalogprivateCloudCapabilitiesListing {
}
export interface OrdercatalogprivateCloudCatalog {
    catalogId: number;
    catalogName: string;
    defaultHypervisor: string;
    defaultZone: string;
    merchantCode: string;
    options: OrdercatalogprivateCloudCapabilitiesListing;
    zones: OrdercatalogprivateCloudZonesListing;
}
export interface OrdercatalogprivateCloudZone {
    cityName: string;
    country: string;
    defaultHypervisor: string;
    defaultVersion: string;
    internalName: string;
    plans: OrdercatalogProductPlan[];
}
export interface OrdercatalogprivateCloudZonesListing {
    bhs: OrdercatalogprivateCloudZone;
    eri: OrdercatalogprivateCloudZone;
    lim: OrdercatalogprivateCloudZone;
    rbx: OrdercatalogprivateCloudZone;
    sbg: OrdercatalogprivateCloudZone;
    waw: OrdercatalogprivateCloudZone;
}
export interface OrdercatalogProduct {
    configurations: OrdercatalogConfigurationItem[];
    description: string;
    name: string;
    technicalDetails?: any;
}
export interface OrdercatalogProductOfferDetails {
    metadatas: any;
    pricings: OrdercatalogPricingDefault;
    product: OrdercatalogProduct;
}
export interface OrdercatalogProductPlan {
    addonsFamily: OrdercatalogAddonItem[];
    consumptionBillingStrategy?: string;
    details: OrdercatalogProductOfferDetails;
    invoiceName: string;
    planCode: string;
    pricingType: string;
}
export interface OrdercatalogpublicAddonFamily {
    addons: string[];
    default?: string;
    exclusive: boolean;
    mandatory: boolean;
    name: string;
}
export interface OrdercatalogpublicCatalog {
    addons: OrdercatalogpublicPlan[];
    catalogId: number;
    locale: OrdercatalogpublicLocale;
    planFamilies: OrdercatalogpublicPlanFamily[];
    plans: OrdercatalogpublicPlan[];
    products: OrdercatalogpublicProduct[];
}
export interface OrdercatalogpublicConfiguration {
    isCustom: boolean;
    isMandatory: boolean;
    name: string;
    values: string[];
}
export interface OrdercatalogpublicDedicatedServerCatalog {
    addons: OrdercatalogpublicPlan[];
    catalogId: number;
    locale: OrdercatalogpublicLocale;
    planFamilies: OrdercatalogpublicAddonFamily[];
    plans: OrdercatalogpublicPlan[];
    products: OrdercatalogpublicDedicatedServerProduct[];
}
export interface OrdercatalogpublicDedicatedServerProduct {
    blobs?: OrdercatalogpublicDedicatedServerProductBlob;
    description: string;
    name: string;
}
export interface OrdercatalogpublicDedicatedServerProductBlob {
    technical?: OrdercatalogpublicDedicatedServerProductBlobTechnical;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnical {
    bandwidth?: OrdercatalogpublicDedicatedServerProductBlobTechnicalNetwork;
    cpu?: OrdercatalogpublicDedicatedServerProductBlobTechnicalCPU;
    gpu?: OrdercatalogpublicDedicatedServerProductBlobTechnicalGPU;
    memory?: OrdercatalogpublicDedicatedServerProductBlobTechnicalMemory;
    server?: OrdercatalogpublicDedicatedServerProductBlobTechnicalServer;
    storage?: OrdercatalogpublicDedicatedServerProductBlobTechnicalStorage;
    vrack?: OrdercatalogpublicDedicatedServerProductBlobTechnicalNetwork;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalCPU {
    boost: number;
    brand: string;
    cores: number;
    frequency: any;
    model: string;
    score: number;
    threads: number;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalDisk {
    capacity: number;
    interface: string;
    number: number;
    specs: string;
    technology: string;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalFrame {
    model: string;
    size: string;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalGPU {
    memory: number;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalMemory {
    ecc: boolean;
    frequency: number;
    ramType: string;
    size: number;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalNetwork {
    burst?: number;
    guaranteed: boolean;
    level: number;
    limit?: number;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalServer {
    cpu: OrdercatalogpublicDedicatedServerProductBlobTechnicalCPU;
    frame: OrdercatalogpublicDedicatedServerProductBlobTechnicalFrame;
    range: string;
}
export interface OrdercatalogpublicDedicatedServerProductBlobTechnicalStorage {
    disks: OrdercatalogpublicDedicatedServerProductBlobTechnicalDisk[];
    raid: string;
}
export interface OrdercatalogpublicLocale {
    currencyCode: OrderCurrencyCodeEnum;
    subsidiary: NichandleOvhSubsidiaryEnum;
    taxRate: any;
}
export interface OrdercatalogpublicPlan {
    addonFamilies: OrdercatalogpublicAddonFamily[];
    configurations: OrdercatalogpublicConfiguration[];
    family?: string;
    invoiceName: string;
    planCode: string;
    pricingType: OrdercartGenericProductPricingTypeEnum;
    pricings: OrdercatalogpublicPricing[];
    product: string;
}
export interface OrdercatalogpublicPlanFamily {
    name: string;
}
export interface OrdercatalogpublicPricing {
    capacities: OrdercartGenericProductPricingCapacitiesEnum[];
    commitment: number;
    description: string;
    interval: number;
    intervalUnit: OrdercartDurationUnitEnum;
    mode: string;
    mustBeCompleted: boolean;
    phase: number;
    price: number;
    quantity: OrdercatalogpublicPricingMinMax;
    repeat: OrdercatalogpublicPricingMinMax;
    strategy: OrdercartGenericProductPricingStrategyEnum;
    tax: number;
    type: OrdercartGenericProductPricingTypeEnum;
}
export interface OrdercatalogpublicPricingMinMax {
    max?: number;
    min: number;
}
export interface OrdercatalogpublicProduct {
    description: string;
    name: string;
}
export interface OrderContract {
    content: string;
    name: string;
    url: string;
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
    contracts: OrderContract[];
    details: OrderOrderDetail[];
    orderId?: number;
    prices: OrderOrderPrices;
    url?: string;
}
export interface OrderOrderDetail {
    description: string;
    detailType?: OrderOrderDetailTypeEnum;
    domain: string;
    quantity: number;
    totalPrice: OrderPrice;
    unitPrice: OrderPrice;
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
    tax: OrderPrice;
    withTax: OrderPrice;
    withoutTax: OrderPrice;
}
export interface OrderPrice {
    currencyCode: OrderCurrencyCodeEnum;
    text: string;
    value: any;
}
export interface OrderupgradeOperation {
    id: number;
    product: OrderupgradeOperationProduct;
    status: OrderupgradeOperationStatusEnum;
    type: OrderupgradeOperationTypeEnum;
}
export interface OrderupgradeOperationAndOrder {
    operation?: OrderupgradeOperation;
    order?: OrderOrder;
}
export interface OrderupgradeOperationProduct {
    description: string;
    name: string;
}
export declare enum OrderupgradeOperationStatusEnum {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE",
    ERROR = "ERROR",
    DELAYED = "DELAYED",
    CANCELLED = "CANCELLED",
    SCHEDULED = "SCHEDULED"
}
export declare enum OrderupgradeOperationTypeEnum {
    UPGRADE = "UPGRADE"
}
export declare enum OverTheBoxShippingMethodEnum {
    DHL = "dhl",
    MONDIALRELAY = "mondialRelay"
}
export declare enum TelephonyLineTypeEnum {
    GEOGRAPHIC = "geographic",
    NOGEOGRAPHIC = "nogeographic"
}
export declare enum TelephonyNumberCountryEnum {
    BE = "be",
    CH = "ch",
    DE = "de",
    ES = "es",
    FR = "fr",
    GB = "gb",
    IT = "it",
    UK = "uk"
}
export declare enum TelephonyNumberOffer {
    ALIAS = "alias",
    DIDSONLY = "didsOnly"
}
export declare type TelephonyNumberPoolEnum = 10 | 100 | 50;
export declare enum TelephonyNumberSpecialTypologyEnum {
    BE_ADULTS = "be_adults",
    BE_CONTENT = "be_content",
    BE_GAMES = "be_games",
    BE_GENERAL = "be_general",
    BE_RELAXING = "be_relaxing",
    FR_ACCESS = "fr_access",
    FR_ADULTS = "fr_adults",
    FR_ANNOUNCED = "fr_announced",
    FR_CONFERENCING = "fr_conferencing",
    FR_CONTENTSAUTO = "fr_contentsAuto",
    FR_CONTENTSMANUAL = "fr_contentsManual",
    FR_GAMES = "fr_games",
    FR_LINKING = "fr_linking",
    FR_M2M = "fr_m2m",
    FR_RELATIONSHIP = "fr_relationship"
}
export declare enum TelephonyportabilityCountriesAvailable {
    BELGIUM = "belgium",
    FRANCE = "france",
    SWITZERLAND = "switzerland"
}
export declare enum TelephonyportabilityNumberType {
    LANDLINE = "landline",
    SPECIAL = "special"
}
export declare enum TelephonyportabilityOfferType {
    COMPANY = "company",
    INDIVIDUAL = "individual"
}
export declare enum TelephonyportabilitySocialReason {
    CORPORATION = "corporation",
    INDIVIDUAL = "individual",
    PROFESSIONAL = "professional"
}
export declare enum TelephonyportabilitySpecialNumberCategoryEnum {
    ACCESS = "access",
    ADULTS = "adults",
    ANNOUNCED = "announced",
    BE_ADULTS = "be_adults",
    BE_CONTENT = "be_content",
    BE_GAMES = "be_games",
    BE_GENERAL = "be_general",
    BE_RELAXING = "be_relaxing",
    CONFERENCING = "conferencing",
    CONTENTSAUTO = "contentsAuto",
    CONTENTSMANUAL = "contentsManual",
    DIRECTORY = "directory",
    GAMES = "games",
    LINKING = "linking",
    M2M = "m2m",
    RELATIONSHIP = "relationship"
}
export declare type TelephonySecurityDepositAmountsEnum = 10 | 100 | 1000 | 10000 | 20 | 200 | 2000 | 30 | 300 | 3000 | 40 | 400 | 4000 | 50 | 500 | 5000;
export declare enum VeeamCloudConnectOffer {
    ADVANCED = "advanced",
    DEMO = "demo",
    STARTER = "starter"
}
export declare type VpsadditionalDiskAdditionalDiskSizeEnum = '100' | '200' | '50' | '500';
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
export declare type VpsPleskLicenseDomainNumberEnum = '10' | '100' | '300' | 'hostingsuite';
export declare enum VrackBlockCountryEnum {
    BE = "be",
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
    UK = "uk"
}
export declare type VrackBlockSizeEnum = '128' | '16' | '256' | '32' | '4' | '64' | '8';
export declare class Order {
    private client;
    constructor(client: Client);
    ListOfYourOVHOrderCarts(description?: string): Promise<string[]>;
    CreateANewOVHOrderCart(payload: OrdercartCreation): Promise<OrdercartCart>;
    DeleteACart(cartId: string): Promise<void>;
    RetrieveInformationAboutASpecificCart(cartId: string): Promise<OrdercartCart>;
    ModifyInformationAboutASpecificCart(cartId: string, payload: OrdercartUpdate): Promise<OrdercartCart>;
    GetInformationsAboutAnalyticsOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewAnalyticsItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutAnalyticsOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewAnalyticsAddonInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    AssignAShoppingCartToAnLoggedinClient(cartId: string): Promise<void>;
    GetInformationsAboutABaremetalServer(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewBaremetalServerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutBaremetalServerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewBaremetalServerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutCDNOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewCDNItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutCDNOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewCDNOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutCephAsAServiceOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewCephAsAServiceItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutCephAsAServiceOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewCephAsAServiceOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetPricesAndContractsInformationForYourCart(cartId: string): Promise<OrderOrder>;
    ValidateYourShoppingAndCreateOrder(cartId: string, payload: OrdercartCheckout): Promise<OrderOrder>;
    GetInformationsAboutPublicCloudOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPublicCloudItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPublicCloudOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewPublicCloudOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutCloudWebOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewCloudWebItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutCloudWebOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewCloudWebOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    DeleteACouponFromCart(cartId: string, coupon: string): Promise<void>;
    RetrieveCouponsAssociatedToCart(cartId: string): Promise<string[]>;
    AddANewCouponToCart(cartId: string, payload: OrdercartCouponCreation): Promise<string[]>;
    GetInformationsAboutSaaSCSP2Offers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewSaaSCSP2OfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutSaaSCSP2Options(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewSaaSCSP2OptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutATimeseriesOffer(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewTimeseriesOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutADedicatedServer(cartId: string, family?: string, planCode?: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewDedicatedServerItemInYourCart(cartId: string, payload: OrdercartGenericDedicatedCreation): Promise<OrdercartItem>;
    GetInformationsAboutDedicatedServerOptions(cartId: string, planCode: string, family?: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewDedicatedServerOptionInYourCart(cartId: string, payload: OrdercartGenericDedicatedOptionsCreation): Promise<OrdercartItem>;
    GetInformationsAboutADedicatedLabsServer(cartId: string, planCode?: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewDedicatedLabsServerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutDedicatedLabsServerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewDedicatedLabsServerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutADedicatedServerForUSReseller(cartId: string, family?: string, planCode?: string): Promise<OrdercartGenericProductDefinition[]>;
    GetInformationsAboutDeskAsAServiceOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewDeskAsAServiceItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutDedicatedDiscoverServerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewDedicatedDiscoverServerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutDedicatedDiscoverServerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewDedicatedDiscoverServerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutDNSZoneOffer(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewDNSZoneItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutADomainName(cartId: string, domain: string): Promise<OrdercartProductInformation[]>;
    PostANewDomainInYourCart(cartId: string, payload: OrdercartGenericDomainCreation): Promise<OrdercartItem>;
    GetInformationsAboutDomainNamesOptions(cartId: string, domain: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewDomainNameOptionInYourCart(cartId: string, payload: OrdercartGenericDomainOptionsCreation): Promise<OrdercartItem>;
    GetInformationsAboutDomainPacksOffersAllDom(cartId: string, domain: string): Promise<OrdercartDomainPacksProductInformation[]>;
    PostANewDomainPacksItemAllDomInYourCart(cartId: string, payload: OrdercartDomainPacksCreation): Promise<OrdercartItem>;
    GetInformationsAboutDomainRestore(cartId: string, domain: string): Promise<OrdercartGenericProductDefinition[]>;
    GetInformationsAboutADomainNameTransfer(cartId: string, domain: string): Promise<OrdercartProductInformation[]>;
    PostANewDomainTranferInYourCart(cartId: string, payload: OrdercartGenericDomainCreation): Promise<OrdercartItem>;
    GetInformationsAboutDomainNamesTransferOptions(cartId: string, domain: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewDomainNameTransferOptionInYourCart(cartId: string, payload: OrdercartGenericDomainOptionsCreation): Promise<OrdercartItem>;
    GetInformationsAboutEmailProOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewEmailProItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutEmailProOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewEmailProOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutExchangeOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewExchangeItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutExchangeOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewExchangeOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutExchangeEnterpriseOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewExchangeEnterpriseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutExchangeEnterpriseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewExchangeEnterpriseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutHostingResellerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewHostingResellerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutIPAddressesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewIPAddressesItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutIPAddressesOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewIPAddressesOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutIPLoadBalancingOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewIPLoadBalancingItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutIPLoadBalancingOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewIPLoadBalancingOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    ListAllTheItemsOfACart(cartId: string): Promise<number[]>;
    DeleteAnItemFromACart(cartId: string, itemId: number): Promise<void>;
    RetrieveInformationAboutASpecificItemOfACart(cartId: string, itemId: number): Promise<OrdercartItem>;
    UpdateSomeValuesOnACartItem(cartId: string, itemId: number, payload: OrdercartItemUpdate): Promise<OrdercartItem>;
    RetrieveAllConfigurationItemOfTheCartItem(cartId: string, itemId: number, label?: string): Promise<number[]>;
    SetupConfigurationItemForTheProduct(cartId: string, itemId: number, payload: OrdercartItemConfigurationCreation): Promise<OrdercartConfigurationItem>;
    DeleteConfigurationItem(cartId: string, configurationId: number, itemId: number): Promise<void>;
    RetrieveConfigurationItem(cartId: string, configurationId: number, itemId: number): Promise<OrdercartConfigurationItem>;
    RetrieveAllRequiredConfigurationItemOfTheCartItem(cartId: string, itemId: number): Promise<OrdercartConfigurationRequirements[]>;
    GetInformationsAboutKubernetesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewKubernetesItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutKubernetesOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewKubernetesOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutCloudLinuxLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewCloudLinuxLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutCPanelLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewCPanelLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutDirectadminLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewDirectadminLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPleskLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPleskLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPleskLicenseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewPleskLicenseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutSqlServerLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewSqlServerLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutVirtuozzoLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewVirtuozzoLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutWindowsLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewWindowsLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutWorklightLicensesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewWorklightLicenseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutLogsOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewLogsItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutLogsOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewLogsOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutManagedServicesOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewManagedServicesItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutManagedServicesOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewManagedServicesOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutMetricsOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewMetricsItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutMetricsOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewMetricsOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutMicrosoftOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewMicrosoftOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutMicrosoftOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewMicrosoftOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutNASHAOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewNASHAItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutNASHAOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewNASHAOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutOffice365Licenses(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewOffice365ItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutOffice365Options(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewOffice365OptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutOffice365PrepaidLicenses(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewOffice365PrepaidItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutOffice365PrepaidOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewOffice365PrepaidOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutOverTheBoxOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewOverTheBoxItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutOverTheBoxOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewOverTheBoxOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutOVHcloudConnectOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewOVHcloudConnectItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPaaSMonitoringOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPaaSMonitoringItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutHostedPrivateCloudOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewHostedPrivateCloudItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutHostedPrivateCloudOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewHostedPrivateCloudOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudCDIOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPrivateCloudCDIItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudCDIOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewPrivateCloudCDIOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudDedicatedCloudOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPrivateCloudDedicatedCloudItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudDedicatedCloudOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewPrivateCloudDedicatedCloudOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudResellerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPrivateCloudResellerItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudResellerOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewPrivateCloudResellerOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudResellerEnterpriseOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPrivateCloudResellerEnterpriseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudResellerEnterpriseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewPrivateCloudResellerEnterpriseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudSDDCOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewPrivateCloudSDDCItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutPrivateCloudSDDCOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewPrivateCloudSDDCOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutResellerOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewResellerOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutSharepointOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewSharepointOfferItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutSharepointOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewSharepointOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutSMSOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewSMSItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutSSLComodoOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewSSLComodoItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutSSLComodoOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewSSLComodoOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutSSLGatewayOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewSSLGatewayItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutSSLGatewayOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewSSLGatewayOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetASummaryOfYourCurrentOrder(cartId: string): Promise<OrderOrder>;
    GetInformationsAboutVoIPOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewVoIPItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutVoIPOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewVoIPOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutHorizonViewOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewHorizonViewItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutHorizonViewOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewHorizonViewOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutVeeamCloudConnectOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewVeeamCloudConnectItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutVeeamCloudConnectOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewVeeamCloudConnectOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutVeeamEnterpriseOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewVeeamEnterpriseItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutVeeamEnterpriseOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewVeeamEnterpriseOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutVPSOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewVPSItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutVPSOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewVPSOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutVRackOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewVRackItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutWebHostingOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewWebHostingItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutWebHostingOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewWebHostingOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    GetInformationsAboutXdslOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]>;
    PostANewXdslItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem>;
    GetInformationsAboutXdslOptions(cartId: string, planCode: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostANewXdslOptionInYourCart(cartId: string, payload: OrdercartGenericOptionCreation): Promise<OrdercartItem>;
    ListAvailableServices(): Promise<string[]>;
    GetInformationsAboutAdditionalCloudOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalCloudOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalDedicatedOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalDedicatedOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalDomainOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalDomainOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalEmailProOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalEmailProOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalIPLoadBalancingOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalIPLoadBalancingOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalLogsOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalLogsOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalMicrosoftOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalMicrosoftOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalOfficeOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalOfficeOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalPrivateCloudOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalPrivateCloudOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalPrivateCloudEnterpriseOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalPrivateCloudEnterpriseOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalSharepointOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalSharepointOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalSSLGatewayOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalSSLGatewayOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalHorizonViewOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalHorizonViewOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalVPSOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalVPSOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    GetInformationsAboutAdditionalWebHostingOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]>;
    PostAnAdditionalWebHostingOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem>;
    RetrieveListOfCatalogName(): Promise<string[]>;
    RetrieveInformationOfPublicCloudCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfDedicatedServerCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfDeskAsAServiceCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfDedicatedDiscoverOfferServerCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfIPAddressesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfCloudLinuxLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfCPanelLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfDirectadminLicensesOffersCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfPleskLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfSqlServerLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfVirtuozzoLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfWindowsLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfWorklightLicensesCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfLogsDataPlatformCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfPrivateCloudCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogpccCatalog>;
    RetrieveInformationOfPrivateCloudCDICatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogprivateCloudCatalog>;
    RetrieveInformationOfPrivateCloudDedicatedCloudCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogprivateCloudCatalog>;
    RetrieveInformationOfPrivateCloudResellerCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogpccCatalog>;
    RetrieveInformationOfPrivateCloudResellerEnterpriseCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogpccCatalog>;
    RetrieveInformationOfPrivateCloudSDDCCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogprivateCloudCatalog>;
    RetrieveInformationOfResellerCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveInformationOfVPSCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogCatalog>;
    RetrieveBaremetalServersCatalog(ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<OrdercatalogpublicDedicatedServerCatalog>;
    GetAllowedOptions(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForBackendOption(backend: number, serviceName: string): Promise<string[]>;
    GetPricesAndContractsInformation(backend: number, duration: string, serviceName: string): Promise<OrderOrder>;
    CreateOrder(backend: number, duration: string, serviceName: string): Promise<OrderOrder>;
    GetAllowedDurationsForCacheRuleOption(cacheRule: CdnanycastOrderCacheRuleEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForQuotaOption(quota: CdnanycastOrderQuotaEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForNewOption(): Promise<string[]>;
    GetAllowedDurationsForTorageOption(serviceName: string, storage: CdnwebstorageOrderStorageEnum): Promise<string[]>;
    GetAllowedDurationsForAPCOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForBackupStorageOption(capacity: DedicatedserverBackupStorageCapacityEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForBandwidthOption(bandwidth: DedicatedserverBandwidthOrderEnum, serviceName: string, type: DedicatedserverBandwidthOrderTypeEnum): Promise<string[]>;
    GetAllowedDurationsForBandwidthvRackOption(bandwidth: DedicatedserverBandwidthvRackOrderEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForFailoverIPOption(country: DedicatedserverIpCountryEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForFeatureOption(feature: DedicatedserverOrderableSysFeatureEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForFirewallOption(firewallModel: DedicatedserverFirewallModelEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForIpOption(blockSize: DedicatedserverIpBlockSizeEnum, serviceName: string, type: DedicatedserverIpTypeOrderableEnum, country?: DedicatedserverIpCountryEnum, organisationId?: string): Promise<string[]>;
    GetAllowedDurationsForIpMigrationOption(ip: string, serviceName: string, token: string): Promise<string[]>;
    GetAllowedDurationsForKvmOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForKvmExpressOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForProfessionalUseOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForTaticIPOption(country: DedicatedserverIpStaticCountryEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForTrafficOption(serviceName: string, traffic: DedicatedserverTrafficOrderEnum): Promise<string[]>;
    GetAllowedDurationsForUsbKeyOption(capacity: DedicatedserverUsbKeyCapacityEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForAdditionalBandwidthOption(bandwidth: DedicatedCloudAdditionalBandwidthEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForFilerOption(name: string, serviceName: string, datacenterId?: number, quantity?: number): Promise<string[]>;
    GetAllowedDurationsForHostOption(datacenterId: number, name: string, serviceName: string, quantity?: number): Promise<string[]>;
    GetAllowedDurationsForUpgradeRessourceOption(serviceName: string, upgradedRessourceType: DedicatedCloudressourcesUpgradeRessourceTypeEnum, upgradeType: DedicatedCloudressourcesUpgradeTypeEnum, upgradedRessourceId?: number): Promise<string[]>;
    GetAllowedDurationsForDnsAnycastOption(zoneName: string): Promise<string[]>;
    GetAllowedDurationsForAccountOption(exchangeService: string, licence: EmailexchangeOvhLicenceEnum, number: number, organizationName: string, storageQuota?: EmailexchangeaccountQuotaEnum): Promise<string[]>;
    GetAllowedDurationsForAccountUpgradeOption(exchangeService: string, newQuota: EmailexchangeaccountQuotaEnum, organizationName: string, primaryEmailAddress: string): Promise<string[]>;
    GetAllowedDurationsForOutlookOption(exchangeService: string, licence: EmailexchangeOutlookVersionEnum, organizationName: string, primaryEmailAddress: string): Promise<string[]>;
    GetAllowedDurationsForRamOption(ram: HostingPrivateDatabaseAvailableRamSizeEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForCdnOption(offer: HostingwebCdnOfferEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForChangeMainDomainOption(domain: string, mxplan: HostingweborderMxPlanEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForExtraSqlPersoOption(offer: HostingwebdatabaseSqlPersoOfferEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForSlOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForUpgradeOption(offer: HostingwebOfferEnum, serviceName: string, startTime?: any, waiveRetractationPeriod?: boolean): Promise<string[]>;
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]>;
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder>;
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder>;
    GetAllowedDurationsForAdditionalDiskOption(additionalDiskSize: VpsadditionalDiskAdditionalDiskSizeEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForAutomatedBackupOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForCpanelOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForFtpbackupOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForPleskOption(domainNumber: VpsPleskLicenseDomainNumberEnum, serviceName: string): Promise<string[]>;
    GetAllowedDurationsForNapshotOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForVeeamOption(serviceName: string): Promise<string[]>;
    GetAllowedDurationsForWindowsOption(serviceName: string): Promise<string[]>;
}
//# sourceMappingURL=order.d.ts.map