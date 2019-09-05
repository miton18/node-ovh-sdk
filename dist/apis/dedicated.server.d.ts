import { Client } from '../client';
export interface ComplexTypeChartReturn {
    unit?: string;
    values?: ComplexTypeChartTimestampValue[];
}
export interface ComplexTypeChartTimestampValue {
    value?: any;
    timestamp: number;
}
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
export interface DedicatedAvailabilities {
    hardware?: string;
    datacenters: DedicatedAvailabilityDatacenter[];
    region?: DedicatedAvailabilityRegionEnum;
}
export interface DedicatedAvailabilitiesRaw {
    orderedCheck: number;
    trueAvailable24H: number;
    lastRule?: string;
    reference: string;
    incomingDatacenter: number;
    availability: DedicatedAvailabilityEnum;
    zone: DedicatedAvailabilityRegionEnum;
    trueAvailable: number;
    ordered: number;
    trueAvailable4H: number;
    parentAvailable: number;
    available: number;
}
export interface DedicatedAvailabilityDatacenter {
    datacenter: DedicatedAvailabilityDatacenterEnum;
    availability: DedicatedAvailabilityEnum;
}
export declare enum DedicatedAvailabilityDatacenterEnum {
    BHS = "bhs",
    DEFAULT = "default",
    FRA = "fra",
    GRA = "gra",
    HIL = "hil",
    LON = "lon",
    RBX = "rbx",
    RBX_HZ = "rbx-hz",
    SBG = "sbg",
    SGP = "sgp",
    SYD = "syd",
    VIN = "vin",
    WAW = "waw"
}
export declare type DedicatedAvailabilityEnum = '1H-high' | '1H-low' | '240H' | '24H' | '72H' | 'unavailable' | 'unknown';
export declare enum DedicatedAvailabilityRegionEnum {
    EUROPE = "europe",
    NORTHAMERICA = "northAmerica"
}
export interface DedicatedBinaryFirewall {
    type: DedicatedProfileFirewallEnum;
    asa: string[];
    asdm: string[];
}
export interface DedicatedBinaryFirewallLink {
    url: string;
}
export interface DedicatedDatacenterAvailability {
    memory?: string;
    server: string;
    planCode: string;
    datacenters: DedicatedAvailabilityDatacenter[];
    fqn: string;
    storage?: string;
}
export declare enum DedicatedDatacenterEnum {
    BHS1 = "bhs1",
    BHS2 = "bhs2",
    BHS3 = "bhs3",
    BHS4 = "bhs4",
    BHS5 = "bhs5",
    BHS6 = "bhs6",
    BHS7 = "bhs7",
    DC1 = "dc1",
    ERI1 = "eri1",
    GRA1 = "gra1",
    GRA2 = "gra2",
    GSW = "gsw",
    HIL1 = "hil1",
    LIM1 = "lim1",
    P19 = "p19",
    RBX_HZ = "rbx-hz",
    RBX1 = "rbx1",
    RBX2 = "rbx2",
    RBX3 = "rbx3",
    RBX4 = "rbx4",
    RBX5 = "rbx5",
    RBX6 = "rbx6",
    RBX7 = "rbx7",
    SBG1 = "sbg1",
    SBG2 = "sbg2",
    SBG3 = "sbg3",
    SBG4 = "sbg4",
    SGP1 = "sgp1",
    SYD1 = "syd1",
    VIN1 = "vin1",
    WAW1 = "waw1"
}
export interface DedicatednetworkInterfaceControllerNetworkInterfaceController {
    mac: any;
    linkType: DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum;
}
export declare enum DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum {
    PRIVATE = "private",
    PUBLIC = "public"
}
export declare enum DedicatedOsAvailabilitiesEnum {
    ARCHLINUX_INSTALLER_64 = "archlinux-installer_64",
    CENTOS5_64 = "centos5_64",
    CENTOS6_CPANEL_LATEST_64 = "centos6-cpanel-latest_64",
    CENTOS6_OVH_64 = "centos6-ovh_64",
    CENTOS6_PLESK12_64 = "centos6-plesk12_64",
    CENTOS6_64 = "centos6_64",
    CENTOS7_CPANEL_LATEST_64 = "centos7-cpanel-latest_64",
    CENTOS7_DIRECTADMIN_64 = "centos7-directadmin_64",
    CENTOS7_FPGA_ACCELIZE_64 = "centos7-fpga-accelize_64",
    CENTOS7_FPGA_INTEL_OPENCL_64 = "centos7-fpga-intel-opencl_64",
    CENTOS7_PLESK125_64 = "centos7-plesk125_64",
    CENTOS7_PLESK12_64 = "centos7-plesk12_64",
    CENTOS7_PLESK17_64 = "centos7-plesk17_64",
    CENTOS7_64 = "centos7_64",
    CLOUDLINUX6_64 = "cloudlinux6_64",
    CLOUDLINUX7_64 = "cloudlinux7_64",
    COREOS_ALPHA_64 = "coreos-alpha_64",
    COREOS_64 = "coreos_64",
    DEBIAN7_ISPCONFIG3_64 = "debian7-ispconfig3_64",
    DEBIAN7_MINECRAFT_64 = "debian7-minecraft_64",
    DEBIAN7_PLESK12_64 = "debian7-plesk12_64",
    DEBIAN7_64 = "debian7_64",
    DEBIAN8_ISPCONFIG3_64 = "debian8-ispconfig3_64",
    DEBIAN8_PLESK125_64 = "debian8-plesk125_64",
    DEBIAN8_64 = "debian8_64",
    DEBIAN8_ARMHF_32 = "debian8_armhf_32",
    DEBIAN9_ISPCONFIG3_64 = "debian9-ispconfig3_64",
    DEBIAN9_64 = "debian9_64",
    DEBIAN9_ARMHF_32 = "debian9_armhf_32",
    DGX1_OS_3_64 = "dgx1-os-3_64",
    ESXI51_64 = "esxi51_64",
    ESXI55_64 = "esxi55_64",
    ESXI5_64 = "esxi5_64",
    ESXI60_64 = "esxi60_64",
    ESXI65_64 = "esxi65_64",
    FEDORA26_64 = "fedora26_64",
    FEDORA27_64 = "fedora27_64",
    FREEBSD10_ZFS_64 = "freebsd10-zfs_64",
    FREEBSD10_64 = "freebsd10_64",
    FREEBSD11_ZFS_64 = "freebsd11-zfs_64",
    GENTOO11_64 = "gentoo11_64",
    OPENMEDIAVAULT3_ARMHF_32 = "openmediavault3_armhf_32",
    OPENMEDIAVAULT_ARMHF_32 = "openmediavault_armhf_32",
    OPENSUSE42_64 = "opensuse42_64",
    PROXMOX4_ZFS_64 = "proxmox4-zfs_64",
    PROXMOX4_64 = "proxmox4_64",
    PROXMOX5_ZFS_64 = "proxmox5-zfs_64",
    PROXMOX5_64 = "proxmox5_64",
    SLACKWARE14_64 = "slackware14_64",
    SMARTOS_64 = "smartos_64",
    SOLUSVM_MASTER_VZ_64 = "solusvm-master-vz_64",
    SOLUSVM_SLAVE_VZ_64 = "solusvm-slave-vz_64",
    UBUNTU1404_PLESK125_64 = "ubuntu1404-plesk125_64",
    UBUNTU1404_SERVER_64 = "ubuntu1404-server_64",
    UBUNTU1510_SERVER_ARM64_64 = "ubuntu1510-server_arm64_64",
    UBUNTU1510_SERVER_PPC64EL_64 = "ubuntu1510-server_ppc64el_64",
    UBUNTU1604_DESKTOP_64 = "ubuntu1604-desktop_64",
    UBUNTU1604_SERVER_64 = "ubuntu1604-server_64",
    UBUNTU1604_SERVER_ARMHF_32 = "ubuntu1604-server_armhf_32",
    UBUNTU1604_SERVER_PPC64EL_64 = "ubuntu1604-server_ppc64el_64",
    UBUNTU1710_SERVER_64 = "ubuntu1710-server_64",
    WIN2008R2_DC_VIRTUOZZO46_64 = "win2008r2-dc-virtuozzo46_64",
    WIN2008R2_DC_64 = "win2008r2-dc_64",
    WIN2008R2_ENT_PLESK10_64 = "win2008r2-ent-plesk10_64",
    WIN2008R2_ENT_PLESK11_64 = "win2008r2-ent-plesk11_64",
    WIN2008R2_ENT_PLESK12_64 = "win2008r2-ent-plesk12_64",
    WIN2008R2_ENT_SP2010FOUND_64 = "win2008r2-ent-sp2010found_64",
    WIN2008R2_ENT_VIRTUOZZO46_64 = "win2008r2-ent-virtuozzo46_64",
    WIN2008R2_ENT_64 = "win2008r2-ent_64",
    WIN2008R2_STD_PLESK11_64 = "win2008r2-std-plesk11_64",
    WIN2008R2_STD_PLESK12_64 = "win2008r2-std-plesk12_64",
    WIN2008R2_STD_SP2010FOUND_64 = "win2008r2-std-sp2010found_64",
    WIN2008R2_STD_64 = "win2008r2-std_64",
    WIN2008R2_WEB_PLESK11_64 = "win2008r2-web-plesk11_64",
    WIN2008R2_WEB_PLESK12_64 = "win2008r2-web-plesk12_64",
    WIN2008R2_WEB_SP2010FOUND_64 = "win2008r2-web-sp2010found_64",
    WIN2008R2_WEB_64 = "win2008r2-web_64",
    WIN2008R2CORE_DC_64 = "win2008r2core-dc_64",
    WIN2008R2CORE_ENT_64 = "win2008r2core-ent_64",
    WIN2008R2CORE_HYPERV_64 = "win2008r2core-hyperv_64",
    WIN2008R2CORE_STD_64 = "win2008r2core-std_64",
    WIN2008R2CORE_WEB_64 = "win2008r2core-web_64",
    WIN2012_DC_64 = "win2012-dc_64",
    WIN2012_HYPERV3_64 = "win2012-hyperv3_64",
    WIN2012_STD_PLESK11_64 = "win2012-std-plesk11_64",
    WIN2012_STD_PLESK12_64 = "win2012-std-plesk12_64",
    WIN2012_STD_64 = "win2012-std_64",
    WIN2012R2_DC_64 = "win2012r2-dc_64",
    WIN2012R2_HYPERV3_64 = "win2012r2-hyperv3_64",
    WIN2012R2_STD_PLESK12_64 = "win2012r2-std-plesk12_64",
    WIN2012R2_STD_64 = "win2012r2-std_64",
    WIN2016_DC_64 = "win2016-dc_64",
    WIN2016_STD_64 = "win2016-std_64",
    WIN81_PRO_SYSPREP_64 = "win81-pro-sysprep_64",
    XENSERVER6_64 = "xenserver6_64"
}
export declare enum DedicatedProfileFirewallEnum {
    CISCO_ASA5505 = "cisco.asa5505",
    CISCO_ASA5510 = "cisco.asa5510",
    CISCO_ASA5520 = "cisco.asa5520"
}
export interface DedicatedserverAccess {
    password: string;
    url?: string;
    type: DedicatedserverAccessTypeEnum;
    user?: string;
}
export declare enum DedicatedserverAccessTypeEnum {
    DIRECTADMIN_PANEL = "DIRECTADMIN_PANEL",
    PLESK_PANEL = "PLESK_PANEL",
    PROXMOX_PANEL = "PROXMOX_PANEL",
    RDP = "RDP",
    SQL_SERVER = "SQL_SERVER",
    SSH = "SSH",
    WEB_PANEL = "WEB_PANEL"
}
export declare enum DedicatedserverAlertLanguageEnum {
    CZ = "cz",
    DE = "de",
    EN = "en",
    ES = "es",
    FI = "fi",
    FR = "fr",
    IT = "it",
    LT = "lt",
    NL = "nl",
    PL = "pl",
    PT = "pt"
}
export interface DedicatedserverbackupBackupContainer {
    swift?: DedicatedserverbackupBackupSwift;
    quota?: DedicatedserverbackupBackupQuota;
    name?: string;
    sftp?: DedicatedserverbackupBackupSftp;
    cloudProject?: DedicatedserverbackupBackupProject;
    region?: string;
    id?: string;
}
export interface DedicatedserverbackupBackupOffer {
    maxArchive?: any;
    maxBandwidthStorage?: any;
    maxStorage?: any;
    maxBandwidthArchive?: any;
}
export interface DedicatedserverbackupBackupPassword {
    swiftArchive?: string;
    sftpStorage?: string;
    swiftStorage?: string;
    sftpArchive?: string;
}
export interface DedicatedserverbackupBackupProject {
    description?: string;
    projectId?: string;
}
export interface DedicatedserverbackupBackupQuota {
    maxStorage?: any;
    usagePercent?: any;
    storageUsed?: any;
    maxBandwidth?: any;
}
export interface DedicatedserverbackupBackupSftp {
    username?: string;
    password?: string;
    url?: string;
}
export interface DedicatedserverbackupBackupStatus {
    code: DedicatedserverbackupBackupStatusCodeEnum;
    reason?: string;
}
export declare enum DedicatedserverbackupBackupStatusCodeEnum {
    DELETING = "DELETING",
    ERROR = "ERROR",
    OK = "OK",
    SUSPENDED = "SUSPENDED",
    SUSPENDING = "SUSPENDING",
    UNKNOWN = "UNKNOWN",
    WAITING_AGREEMENTS_VALIDATION = "WAITING_AGREEMENTS_VALIDATION"
}
export interface DedicatedserverbackupBackupSwift {
    authUrl?: string;
    username?: string;
    password?: string;
}
export interface DedicatedserverBackupCloud {
    agreements?: number[];
    storage?: DedicatedserverbackupBackupContainer;
    archive?: DedicatedserverbackupBackupContainer;
    status: DedicatedserverbackupBackupStatus;
}
export interface DedicatedserverBackupFtp {
    type: DedicatedserverBackupStorageTypeEnum;
    usage?: any;
    ftpBackupName: string;
    readOnlyDate?: string;
    quota?: any;
}
export interface DedicatedserverBackupFtpAcl {
    ftp: boolean;
    lastUpdate: string;
    isApplied: boolean;
    cifs: boolean;
    ipBlock: string;
    nfs: boolean;
}
export declare type DedicatedserverBackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000;
export interface DedicatedserverBackupStorageOrderable {
    capacities?: DedicatedserverBackupStorageCapacityEnum[];
    orderable: boolean;
}
export declare enum DedicatedserverBackupStorageTypeEnum {
    INCLUDED = "included",
    STORAGE = "storage"
}
export interface DedicatedserverBandwidthDetails {
    type?: DedicatedserverBandwidthTypeEnum;
    OvhToOvh?: any;
    InternetToOvh?: any;
    OvhToInternet?: any;
}
export interface DedicatedserverBandwidthOrderable {
    platinum?: DedicatedserverBandwidthOrderEnum[];
    premium?: DedicatedserverBandwidthOrderEnum[];
    ultimate?: DedicatedserverBandwidthOrderEnum[];
    orderable: boolean;
}
export declare type DedicatedserverBandwidthOrderEnum = 1000 | 2000 | 3000;
export declare enum DedicatedserverBandwidthTypeEnum {
    INCLUDED = "included",
    PLATINUM = "platinum",
    PREMIUM = "premium",
    STANDARD = "standard",
    ULTIMATE = "ultimate"
}
export interface DedicatedserverBandwidthvRackDetails {
    bandwidth?: any;
    type?: DedicatedserverBandwidthvRackTypeEnum;
}
export interface DedicatedserverBandwidthvRackOrderable {
    vrack?: DedicatedserverBandwidthvRackOrderEnum[];
    orderable: boolean;
}
export declare type DedicatedserverBandwidthvRackOrderEnum = 1000 | 3000;
export declare enum DedicatedserverBandwidthvRackTypeEnum {
    INCLUDED = "included",
    STANDARD = "standard"
}
export declare enum DedicatedserverBootModeEnum {
    LEGACY = "legacy",
    UEFI = "uefi",
    UEFI_LEGACY = "uefi-legacy"
}
export declare enum DedicatedserverBootOptionEnum {
    CPUFAMILY = "cpufamily",
    GRSEC = "grsec",
    IPV6 = "ipv6",
    SMP = "smp"
}
export declare enum DedicatedserverBootTypeEnum {
    HARDDISK = "harddisk",
    INTERNAL = "internal",
    IPXECUSTOMERSCRIPT = "ipxeCustomerScript",
    NETWORK = "network",
    RESCUE = "rescue"
}
export declare enum DedicatedserverBurstStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive",
    INACTIVELOCKED = "inactiveLocked"
}
export declare type DedicatedserverCacheTTLEnum = 1 | 10 | 15 | 3 | 5;
export declare enum DedicatedserverCpuFamilyEnum {
    ARM64 = "arm64",
    ARMHF32 = "armhf32",
    PPC64 = "ppc64",
    X86 = "x86",
    X86_HT = "x86-ht",
    X86_64 = "x86_64"
}
export interface DedicatedserverDedicated {
    serverId: number;
    linkSpeed?: number;
    rootDevice?: string;
    bootId?: number;
    name: string;
    reverse?: string;
    commercialRange?: string;
    datacenter: DedicatedDatacenterEnum;
    rescueMail?: string;
    monitoring: boolean;
    rack: string;
    ip: string;
    os: string;
    state: DedicatedserverStateEnum;
    supportLevel: DedicatedserverSupportLevelEnum;
    professionalUse: boolean;
}
export declare enum DedicatedserverDiskTypeEnum {
    NVME = "NVMe",
    SAS = "SAS",
    SATA = "SATA",
    SSD = "SSD",
    UNKNOWN = "Unknown"
}
export interface DedicatedserveremailAlert {
    enabled: boolean;
    language: DedicatedserverAlertLanguageEnum;
    alertId: number;
    email: string;
}
export interface DedicatedserverFirewall {
    model?: DedicatedserverFirewallModelEnum;
    firewall: string;
    mode: DedicatedserverFirewallModeEnum;
    ip: string;
    enabled: boolean;
}
export declare enum DedicatedserverFirewallModeEnum {
    ROUTED = "routed",
    TRANSPARENT = "transparent"
}
export declare enum DedicatedserverFirewallModelEnum {
    ASA5505 = "asa5505",
    ASA5510 = "asa5510",
    ASA5520 = "asa5520"
}
export declare type DedicatedserverFormFactorEnum = '0.25u' | '0.5u' | '1u' | '2u' | '3u' | '4u';
export interface DedicatedserverHardwareRaidConfiguration {
    diskCount: number;
    name: string;
    type: string;
    diskSize: any;
    mode: DedicatedserverHardwareSpecificationsRaidHardEnum;
    capacity: any;
    diskSpanSize: number;
}
export interface DedicatedserverHardwareRaidController {
    type: string;
    disks: DedicatedserverHardwareRaidDiskGroup[];
    model: string;
}
export interface DedicatedserverHardwareRaidDiskGroup {
    capacity: any;
    speed: any;
    type: DedicatedserverDiskTypeEnum;
    names: string[];
}
export interface DedicatedserverHardwareRaidProfile {
    controllers: DedicatedserverHardwareRaidController[];
}
export interface DedicatedserverHardwareRaidSize {
    configurations: DedicatedserverHardwareRaidConfiguration[];
}
export interface DedicatedserverHardwareSpecifications {
    processorArchitecture?: DedicatedserverCpuFamilyEnum;
    bootMode: DedicatedserverBootModeEnum;
    usbKeys?: any;
    numberOfProcessors?: number;
    description?: string;
    processorName?: string;
    diskGroups?: DedicatedserverHardwareSpecificationsDisk[];
    defaultHardwareRaidSize?: any;
    formFactor?: DedicatedserverFormFactorEnum;
    expansionCards?: DedicatedserverHardwareSpecificationsExpansionCard[];
    motherboard?: string;
    defaultHardwareRaidType?: DedicatedserverHardwareSpecificationsRaidHardEnum;
    coresPerProcessor?: number;
    memorySize?: any;
    threadsPerProcessor?: number;
}
export interface DedicatedserverHardwareSpecificationsDisk {
    diskSize?: any;
    description?: string;
    numberOfDisks?: number;
    diskGroupId?: number;
    defaultHardwareRaidType?: DedicatedserverHardwareSpecificationsRaidHardEnum;
    raidController?: string;
    defaultHardwareRaidSize?: any;
    diskType?: string;
}
export interface DedicatedserverHardwareSpecificationsExpansionCard {
    type: DedicatedserverHardwareSpecificationsExpansionCardTypeEnum;
    description: string;
}
export declare enum DedicatedserverHardwareSpecificationsExpansionCardTypeEnum {
    FPGA = "fpga",
    GPU = "gpu"
}
export declare enum DedicatedserverHardwareSpecificationsRaidHardEnum {
    RAID0 = "raid0",
    RAID1 = "raid1",
    RAID10 = "raid10",
    RAID1E = "raid1E",
    RAID5 = "raid5",
    RAID50 = "raid50",
    RAID6 = "raid6",
    RAID60 = "raid60"
}
export interface DedicatedserverInstallationProgressStatus {
    progress?: DedicatedserverInstallationProgressSteps[];
    elapsedTime: number;
}
export declare enum DedicatedserverInstallationProgressStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    EXPIRED = "expired",
    IDLE = "idle",
    PENDING = "pending",
    STOPPING = "stopping",
    TODO = "todo"
}
export interface DedicatedserverInstallationProgressSteps {
    error?: string;
    status: DedicatedserverInstallationProgressStatusEnum;
    comment: string;
}
export interface DedicatedserverInstallCustom {
    resetHwRaid?: boolean;
    noRaid?: boolean;
    useSpla?: boolean;
    postInstallationScriptReturn?: string;
    useDistribKernel?: boolean;
    softRaidDevices?: number;
    diskGroupId?: number;
    sshKeyName?: string;
    customHostname?: string;
    installRTM?: boolean;
    language?: string;
    postInstallationScriptLink?: string;
    installSqlServer?: boolean;
}
export interface DedicatedserverInstallTemplate {
    personal?: string[];
    ovh?: string[];
}
export interface DedicatedserverIntervention {
    type?: string;
    interventionId: number;
    date?: string;
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
export interface DedicatedserverIpmi {
    activated: boolean;
    supportedFeatures: DedicatedserverIpmiSupportedFeatures;
}
export declare enum DedicatedserverIpmiAccessTypeEnum {
    KVMIPHTML5URL = "kvmipHtml5URL",
    KVMIPJNLP = "kvmipJnlp",
    SERIALOVERLANSSHKEY = "serialOverLanSshKey",
    SERIALOVERLANURL = "serialOverLanURL"
}
export interface DedicatedserverIpmiAccessValue {
    value?: string;
    expiration?: string;
}
export interface DedicatedserverIpmiSupportedFeatures {
    serialOverLanSshKey: boolean;
    kvmipHtml5URL: boolean;
    kvmipJnlp: boolean;
    serialOverLanURL: boolean;
}
export interface DedicatedserverIpmiTestResult {
    date?: string;
    status?: string;
}
export declare enum DedicatedserverIpmiTestTypeEnum {
    HTTP = "http",
    PASSWORD = "password",
    PING = "ping"
}
export interface DedicatedserverIpOrderable {
    ipv4?: DedicatedserverIpOrderableDetails[];
    ipv6?: DedicatedserverIpOrderableDetails[];
}
export interface DedicatedserverIpOrderableDetails {
    number: number;
    type: DedicatedserverIpTypeOrderableEnum;
    included: boolean;
    blockSizes: DedicatedserverIpBlockSizeEnum[];
    ipNumber?: number;
    optionRequired?: DedicatedserverOptionRequiredEnum;
}
export declare enum DedicatedserverIpTypeOrderableEnum {
    FAILOVER = "failover",
    STATIC = "static",
    UNSHIELDED = "unshielded"
}
export interface Dedicatedserverkvm {
    name: string;
    expiration: string;
    ip?: string;
}
export declare type DedicatedserverMonitoringIntervalEnum = '1800' | '21600' | '300' | '3600';
export declare enum DedicatedserverMonitoringProtocolEnum {
    DNS = "DNS",
    FTP = "FTP",
    HTTP = "HTTP",
    IMAP = "IMAP",
    POP = "POP",
    SMTP = "SMTP",
    SSH = "SSH",
    OPENTCP = "openTCP"
}
export declare enum DedicatedserverMrtgPeriodEnum {
    DAILY = "daily",
    HOURLY = "hourly",
    MONTHLY = "monthly",
    WEEKLY = "weekly",
    YEARLY = "yearly"
}
export interface DedicatedserverMrtgTimestampValue {
    value?: any;
    timestamp: number;
}
export declare enum DedicatedserverMrtgTypeEnum {
    ERRORS_DOWNLOAD = "errors:download",
    ERRORS_UPLOAD = "errors:upload",
    PACKETS_DOWNLOAD = "packets:download",
    PACKETS_UPLOAD = "packets:upload",
    TRAFFIC_DOWNLOAD = "traffic:download",
    TRAFFIC_UPLOAD = "traffic:upload"
}
export interface DedicatedserverNetboot {
    bootId: number;
    kernel: string;
    description: string;
    bootType: DedicatedserverBootTypeEnum;
}
export interface DedicatedservernetbootOption {
    option: DedicatedserverBootOptionEnum;
    value: string;
}
export interface DedicatedserverNetworkSpecifications {
    connection?: any;
    vrack?: DedicatedserverBandwidthvRackDetails;
    switching?: DedicatedserverSwitchingDetails;
    traffic?: DedicatedserverTrafficDetails;
    bandwidth?: DedicatedserverBandwidthDetails;
    routing?: DedicatedserverRoutingDetails;
}
export interface DedicatedserverOption {
    state: DedicatedserverOptionStateEnum;
    option: DedicatedserverOptionEnum;
}
export declare enum DedicatedserverOptionEnum {
    BACKUPPROTOCOL = "BACKUPPROTOCOL",
    BANDWIDTH = "BANDWIDTH",
    BANDWIDTH_VRACK = "BANDWIDTH_VRACK",
    TRAFFIC = "TRAFFIC",
    TRAFFIC_DISCOVER = "TRAFFIC_DISCOVER",
    TUNING = "TUNING",
    TUNING_FIREWALL = "TUNING_FIREWALL",
    TUNING_KVM = "TUNING_KVM",
    USB_KVM_IP = "USB_KVM_IP"
}
export declare enum DedicatedserverOptionRequiredEnum {
    PROFESSIONALUSE = "professionalUse"
}
export declare enum DedicatedserverOptionStateEnum {
    RELEASED = "released",
    SUBSCRIBED = "subscribed"
}
export declare enum DedicatedserverOrderableSysFeatureEnum {
    BACKUPPROTOCOL = "backupProtocol",
    MONITORING = "monitoring"
}
export interface DedicatedserverRoutingDetails {
    ipv4?: DedicatedserverRoutingDetailsIpv4;
    ipv6?: DedicatedserverRoutingDetailsIpv6;
}
export interface DedicatedserverRoutingDetailsIpv4 {
    ip?: string;
    network?: any;
    gateway?: string;
}
export interface DedicatedserverRoutingDetailsIpv6 {
    ip?: any;
    network?: any;
    gateway?: string;
}
export interface DedicatedserverRtm {
    currentVersion?: string;
    installedVersion?: string;
    needsUpdate: boolean;
}
export declare enum DedicatedserverRtmChartPeriodEnum {
    DAILY = "daily",
    MONTHLY = "monthly",
    WEEKLY = "weekly",
    YEARLY = "yearly"
}
export declare enum DedicatedserverRtmChartTypeEnum {
    CPU = "cpu",
    LOADAVG1 = "loadavg1",
    LOADAVG15 = "loadavg15",
    LOADAVG5 = "loadavg5",
    MEMORY = "memory",
    PROCESSCOUNT = "processCount",
    PROCESSRUNNING = "processRunning",
    SWAP = "swap"
}
export interface DedicatedserverRtmCommandSize {
    memory?: any;
    command?: string;
}
export interface DedicatedserverRtmConnection {
    exe?: string;
    procname?: string;
    username?: string;
    port?: number;
    domain?: string;
    pid?: number;
    ip?: string;
    uid?: number;
    cmdline?: string;
}
export interface DedicatedserverRtmCpu {
    name?: string;
    cache?: any;
    freq?: any;
    core?: number;
}
export interface DedicatedserverRtmDisk {
    capacity?: any;
    temperature?: any;
    disk: string;
    model?: string;
}
export interface DedicatedserverRtmDiskSmart {
    temperature_celsius?: number;
    current_pending_sector?: number;
    uncorrected_read_errors?: number;
    realocated_event_count?: number;
    offline_uncorrectable?: number;
    uncorrected_write_errors?: number;
    other_errors?: number;
    udma_crc_error?: number;
    multizone_error_rate?: number;
    offline_seek_performance?: number;
}
export interface DedicatedserverRtmLoad {
    loadavg5?: any;
    swap?: any;
    cpu?: any;
    memory?: any;
    processCount?: number;
    loadavg15?: any;
    uptime?: number;
    loadavg1?: any;
    processRunning?: number;
}
export interface DedicatedserverRtmMemory {
    capacity?: any;
    slot?: string;
}
export interface DedicatedserverRtmMotherboardHw {
    manufacturer?: string;
    name?: string;
}
export interface DedicatedserverRtmOs {
    kernelRelease?: string;
    kernelVersion?: string;
    release?: string;
}
export interface DedicatedserverRtmPartition {
    inodeUsage?: any;
    usage?: any;
    mountPoint?: string;
    partition: string;
}
export interface DedicatedserverRtmPci {
    bus?: string;
    device?: string;
}
export interface DedicatedserverRtmRaid {
    unit: string;
}
export declare enum DedicatedserverRtmRaidStatusEnum {
    KO = "KO",
    OK = "OK",
    REBUILDING = "REBUILDING",
    UNKNOWN = "UNKNOWN"
}
export interface DedicatedserverRtmRaidVolume {
    stripe?: string;
    syncprogress?: string;
    type?: string;
    chunks?: string;
    volume?: string;
    letter?: string;
    phys?: string;
    status?: DedicatedserverRtmRaidStatusEnum;
    capacity?: any;
    label?: string;
}
export interface DedicatedserverRtmRaidVolumePort {
    serial?: string;
    syncprogress?: string;
    capacity?: any;
    status?: DedicatedserverRtmRaidStatusEnum;
    disk?: string;
    model?: string;
    port?: string;
}
export interface DedicatedserverServerBurst {
    status: DedicatedserverBurstStatusEnum;
    capacity?: any;
}
export interface DedicatedserverserviceMonitoring {
    monitoringId: number;
    challengeText?: string;
    protocol: DedicatedserverMonitoringProtocolEnum;
    enabled: boolean;
    ip: string;
    url?: string;
    interval: DedicatedserverMonitoringIntervalEnum;
    port: number;
}
export interface DedicatedserversmsAlert {
    toHour?: number;
    smsAccount: string;
    alertId: number;
    fromHour?: number;
    phoneNumberTo: string;
    enabled: boolean;
    language: DedicatedserverAlertLanguageEnum;
}
export interface Dedicatedserverspla {
    status: DedicatedserverSplaStatusEnum;
    id: number;
    lastUpdate: string;
    type: DedicatedserverSplaTypeEnum;
    serialNumber: string;
}
export declare enum DedicatedserverSplaStatusEnum {
    TERMINATED = "terminated",
    USED = "used",
    WAITINGTOCHECK = "waitingToCheck"
}
export declare enum DedicatedserverSplaTypeEnum {
    OS = "os",
    SQLSTD = "sqlstd",
    SQLWEB = "sqlweb"
}
export declare enum DedicatedserverStateEnum {
    ERROR = "error",
    HACKED = "hacked",
    HACKEDBLOCKED = "hackedBlocked",
    OK = "ok"
}
export declare enum DedicatedserverSupportLevelEnum {
    CRITICAL = "critical",
    FASTPATH = "fastpath",
    GS = "gs",
    PRO = "pro"
}
export interface DedicatedserverSupportLevelOrderable {
    levels?: DedicatedserverSupportLevelOrderableEnum[];
    orderable: boolean;
}
export declare enum DedicatedserverSupportLevelOrderableEnum {
    CRITICAL = "critical",
    FASTPATH = "fastpath",
    GS = "gs"
}
export interface DedicatedserverSupportReplaceHddInfo {
    slot_id?: number;
    disk_serial: string;
}
export interface DedicatedserverSwitchingDetails {
    name?: string;
}
export interface DedicatedserverTask {
    function: DedicatedTaskFunctionEnum;
    doneDate?: string;
    startDate: string;
    taskId: number;
    status: DedicatedTaskStatusEnum;
    comment?: string;
    lastUpdate?: string;
}
export interface DedicatedserverTemplateCaps {
    hybridSupport: boolean;
}
export interface DedicatedserverTrafficDetails {
    inputQuotaSize?: any;
    outputQuotaUsed?: any;
    isThrottled?: boolean;
    inputQuotaUsed?: any;
    outputQuotaSize?: any;
    resetQuotaDate?: string;
}
export interface DedicatedserverTrafficOrderable {
    traffic?: DedicatedserverTrafficOrderEnum[];
    orderable: boolean;
}
export declare type DedicatedserverTrafficOrderEnum = '100Mbps-Unlimited' | '250Mbps-Unlimited' | '500Mbps-Unlimited';
export declare type DedicatedserverUsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64;
export interface DedicatedserverUsbKeyOrderableDetails {
    optionRequired?: DedicatedserverOptionRequiredEnum;
    number: number;
    orderable: boolean;
    capacity: DedicatedserverUsbKeyCapacityEnum[];
}
export interface DedicatedserverVirtualMac {
    macAddress: string;
    type: DedicatedserverVmacTypeEnum;
}
export interface DedicatedserverVirtualMacManagement {
    virtualMachineName: string;
    ipAddress: string;
}
export declare enum DedicatedserverVmacTypeEnum {
    OVH = "ovh",
    VMWARE = "vmware"
}
export declare enum DedicatedStatusEnum {
    DISABLE = "disable",
    ENABLE = "enable"
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
export interface DedicatedvirtualNetworkInterfaceVirtualNetworkInterface {
    name: string;
    serverName: string;
    uuid: string;
    mode: DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum;
    vrack?: string;
}
export declare enum DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum {
    PUBLIC = "public",
    VRACK = "vrack"
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
export declare enum NichandleOvhSubsidiaryEnum {
    ASIA = "ASIA",
    AU = "AU",
    CA = "CA",
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
    QC = "QC",
    SG = "SG",
    SN = "SN",
    TN = "TN",
    US = "US",
    WE = "WE",
    WS = "WS"
}
export interface SecondaryDnsSecondaryDNS {
    ipMaster: string;
    dns: string;
    creationDate: string;
    domain: string;
}
export interface SecondaryDnsSecondaryDNSCheckField {
    fieldValue: string;
    fieldType: ZoneNamedResolutionFieldTypeEnum;
    subDomain: string;
}
export interface SecondaryDnsSecondaryDNSNameServer {
    hostname: string;
    ip: string;
    ipv6?: string;
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
    deleteAtExpiration: boolean;
    forced: boolean;
    manualPayment?: boolean;
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
    contactBilling: string;
    expiration: string;
    domain: string;
    creation: string;
    contactAdmin: string;
    possibleRenewPeriod?: number[];
    engagedUpTo?: string;
    serviceId: number;
    canDeleteAtExpiration: boolean;
    contactTech: string;
    renewalType: ServiceRenewalTypeEnum;
    renew?: ServiceRenewType;
}
export interface SupportNewMessageInfo {
    ticketId: number;
    ticketNumber: number;
    messageId: number;
}
export interface VrackdedicatedServer {
    vrack: string;
    dedicatedServer: string;
}
export interface VrackTask {
    targetDomain?: string;
    status: VrackTaskStatusEnum;
    function: string;
    todoDate?: string;
    serviceName?: string;
    orderId?: number;
    id: number;
    lastUpdate?: string;
}
export declare enum VrackTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    INIT = "init",
    TODO = "todo"
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
export declare class DedicatedServer {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetServer(serviceName: string): Promise<DedicatedserverDedicated>;
    AlterThisObjectProperties(serviceName: string, payload: DedicatedserverDedicated): Promise<void>;
    RetrieveSecretToConnectToTheServerApplication(serviceName: string): Promise<DedicatedserverAccess[]>;
    GetDetailsOnOfferedBackupCloudIfAvailableForTheCurrentServer(serviceName: string): Promise<DedicatedserverbackupBackupOffer>;
    ServerCompatiblesNetboots(serviceName: string, bootType?: DedicatedserverBootTypeEnum): Promise<number[]>;
    OptionUsedOnThisNetboot(bootId: number, serviceName: string): Promise<DedicatedserverBootOptionEnum[]>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    CreateANewStorageBackupSpaceAssociatedToServer(serviceName: string, cloudProjectId?: string, projectDescription?: string): Promise<DedicatedserverBackupCloud>;
    DeactivateTheCloudBackupAssociatedToTheServerThisDoesNotDeleteContainerData(serviceName: string): Promise<void>;
    ChangeYourCloudAccountPassword(serviceName: string): Promise<DedicatedserverbackupBackupPassword>;
    CreateANewBackupFTPSpace(serviceName: string): Promise<DedicatedserverTask>;
    TerminateYourBackupFTPServiceALLDATAWILLBEPERMANENTLYDELETED(serviceName: string): Promise<DedicatedserverTask>;
    ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName: string): Promise<string[]>;
    CreateANewBackupFTPACL(cifs: boolean, ipBlock: string, nfs: boolean, serviceName: string, ftp?: boolean): Promise<DedicatedserverTask>;
    RevokeThisACL(ipBlock: string, serviceName: string): Promise<DedicatedserverTask>;
    GetAllIPBlocksThatCanBeUsedInTheACL(serviceName: string): Promise<string[]>;
    ChangeYourBackupFTPPassword(serviceName: string): Promise<DedicatedserverTask>;
    IPMIAccessMethod(serviceName: string, type: DedicatedserverIpmiAccessTypeEnum): Promise<DedicatedserverIpmiAccessValue>;
    RequestAnAccesOnKVMIPMIInterface(serviceName: string, ttl: DedicatedserverCacheTTLEnum, type: DedicatedserverIpmiAccessTypeEnum, ipToAllow?: string, sshKey?: string): Promise<DedicatedserverTask>;
    ResetKVMIPMIInterface(serviceName: string): Promise<DedicatedserverTask>;
    ResetKVMIPMISessions(serviceName: string): Promise<DedicatedserverTask>;
    LaunchTestOnKVMIPMIInterface(serviceName: string, ttl: DedicatedserverCacheTTLEnum, type: DedicatedserverIpmiTestTypeEnum): Promise<DedicatedserverTask>;
    ResultOfHttpPingAndIdentificationTestsOnIPMIInterface(serviceName: string, type: DedicatedserverIpmiTestTypeEnum): Promise<DedicatedserverIpmiTestResult>;
    GetNameBinaryForAsa(serviceName: string): Promise<DedicatedBinaryFirewall>;
    GetUrlOfBinaryToUpdateFirewallAsa(binaryName: string, serviceName: string): Promise<DedicatedBinaryFirewallLink>;
    RetrieveCompatibleInstallTemplatePartitionsScheme(serviceName: string, templateName: string): Promise<string[]>;
    RetrieveCompatibleInstallTemplatesNames(serviceName: string): Promise<DedicatedserverInstallTemplate>;
    RetrieveHardwareRAIDProfile(serviceName: string): Promise<DedicatedserverHardwareRaidProfile>;
    GetHardwareRAIDSizeForAGivenConfiguration(partitionSchemeName: string, serviceName: string, templateName: string): Promise<DedicatedserverHardwareRaidSize>;
    StartAnInstall(serviceName: string, templateName: string, details?: DedicatedserverInstallCustom, partitionSchemeName?: string): Promise<DedicatedserverTask>;
    GetInstallationStatus(serviceName: string): Promise<DedicatedserverInstallationProgressStatus>;
    GivesSomeCapabilitiesRegardingTheTemplateForTheCurrentDedicatedServer(serviceName: string, templateName: string): Promise<DedicatedserverTemplateCaps>;
    TechnicalInterventionHistory(serviceName: string): Promise<number[]>;
    MergeASplittedBlockAndRouteItToTheChoosenServerYouCannotUndoThisOperation(block: string, serviceName: string): Promise<DedicatedserverTask>;
    CheckIfGivenIPCanBeMovedToThisServer(ip: string, serviceName: string): Promise<void>;
    RetrieveAvailableCountryForIPOrder(serviceName: string): Promise<DedicatedserverIpCountryEnum[]>;
    MoveAnIpFailoverToThisServer(ip: string, serviceName: string): Promise<DedicatedserverTask>;
    ListAllIpFromServer(serviceName: string): Promise<string[]>;
    GetTheWindowsLicenseCompliantWithYourServer(serviceName: string): Promise<LicenseWindowsOsVersionEnum[]>;
    GetTheWindowsSQLServerLicenseCompliantWithYourServer(serviceName: string): Promise<LicenseWindowsSqlVersionEnum[]>;
    AddYourExistingWindowsLicenseSerialToThisDedicatedServerWillBeManageableInLicensewindows(licenseId: string, serviceName: string, version: LicenseWindowsOsVersionEnum): Promise<DedicatedserverTask>;
    RetrieveTrafficGraphValues(period: DedicatedserverMrtgPeriodEnum, serviceName: string, type: DedicatedserverMrtgTypeEnum): Promise<DedicatedserverMrtgTimestampValue[]>;
    ListServerNetworkInterfaceController(serviceName: string, linkType?: DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkTypeEnum): Promise<any>;
    ListOfDedicatedServerOptions(serviceName: string): Promise<DedicatedserverOptionEnum[]>;
    ReleaseAGivenOption(option: DedicatedserverOptionEnum, serviceName: string): Promise<void>;
    GetTheBackupStorageOrderableWithYourServer(serviceName: string): Promise<DedicatedserverBackupStorageOrderable>;
    GetBandwidthOrderableWithYourServer(serviceName: string): Promise<DedicatedserverBandwidthOrderable>;
    GetVRackBandwidthOrderableWithYourServer(serviceName: string): Promise<DedicatedserverBandwidthvRackOrderable>;
    IsThisFeatureOrderableWithYourServer(feature: DedicatedserverOrderableSysFeatureEnum, serviceName: string): Promise<boolean>;
    GetIPOrderableWithYourServer(serviceName: string): Promise<DedicatedserverIpOrderable>;
    IsAKVMOrderableWithYourServer(serviceName: string): Promise<boolean>;
    IsAKVMExpressOrderableWithYourServer(serviceName: string): Promise<boolean>;
    IsProfessionalUseOrderableWithYourServer(serviceName: string): Promise<boolean>;
    GetOrderableTrafficWithYourServer(serviceName: string): Promise<DedicatedserverTrafficOrderable>;
    GetUSBKeysOrderableWithYourServer(serviceName: string): Promise<DedicatedserverUsbKeyOrderableDetails>;
    HardRebootThisServer(serviceName: string): Promise<DedicatedserverTask>;
    ListOfSecondaryDnsDomainName(serviceName: string): Promise<string[]>;
    AddADomainOnSecondaryDns(domain: string, serviceName: string, ip?: string): Promise<void>;
    RemoveThisDomain(domain: string, serviceName: string): Promise<void>;
    DomainNameServerInformations(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer>;
    DNSFieldToTemporarilyAddToYourZoneSoThatWeCanVerifyYouAreTheOwnerOfThisDomain(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNSCheckField>;
    SecondaryNameServerAvailableForYourServer(serviceName: string): Promise<SecondaryDnsSecondaryDNSNameServer>;
    ServiceMonitoringDetails(serviceName: string): Promise<number[]>;
    AddANewServiceMonitoring(enabled: boolean, interval: DedicatedserverMonitoringIntervalEnum, ip: string, port: number, protocol: DedicatedserverMonitoringProtocolEnum, serviceName: string, challengeText?: string, _url?: string): Promise<DedicatedserverserviceMonitoring>;
    RemoveThisServiceMonitoring(monitoringId: number, serviceName: string): Promise<void>;
    ServiceMonitoringAlertByEmail(monitoringId: number, serviceName: string): Promise<number[]>;
    AddANewEmailAlert(email: string, language: DedicatedserverAlertLanguageEnum, monitoringId: number, serviceName: string): Promise<DedicatedserveremailAlert>;
    RemoveThisEmailAlertMonitoring(alertId: number, monitoringId: number, serviceName: string): Promise<void>;
    ServiceMonitoringAlertBySMS(monitoringId: number, serviceName: string): Promise<number[]>;
    CreateASMSAlert(language: DedicatedserverAlertLanguageEnum, monitoringId: number, phoneNumberTo: string, serviceName: string, smsAccount: string, fromHour?: number, toHour?: number): Promise<DedicatedserversmsAlert>;
    RemoveThisSMSAlert(alertId: number, monitoringId: number, serviceName: string): Promise<void>;
    RetrieveHardwareInformationsAboutThisDedicatedServer(serviceName: string): Promise<DedicatedserverHardwareSpecifications>;
    RetrieveIPCapabilitiesAboutThisDedicatedServer(serviceName: string): Promise<DedicatedserverIpOrderable>;
    RetrieveNetworkInformationsAboutThisDedicatedServer(serviceName: string): Promise<DedicatedserverNetworkSpecifications>;
    YourOwnSPLALicensesAttachedToThisDedicatedServer(serviceName: string, status?: DedicatedserverSplaStatusEnum, type?: DedicatedserverSplaTypeEnum): Promise<number[]>;
    AddANewSPLALicense(serialNumber: string, serviceName: string, type: DedicatedserverSplaTypeEnum): Promise<number>;
    RevokeAnSPLALicense(id: number, serviceName: string): Promise<void>;
    RetrieveRTMGraphValues(period: DedicatedserverRtmChartPeriodEnum, serviceName: string, type: DedicatedserverRtmChartTypeEnum): Promise<ComplexTypeChartReturn>;
    GetServerOpenedConnections(serviceName: string): Promise<DedicatedserverRtmConnection[]>;
    GetServerCpuInformations(serviceName: string): Promise<DedicatedserverRtmCpu>;
    ServerDisks(serviceName: string): Promise<string[]>;
    GetDiskSmartInformations(disk: string, serviceName: string): Promise<DedicatedserverRtmDiskSmart>;
    GetServerLoad(serviceName: string): Promise<DedicatedserverRtmLoad>;
    GetServerMemoryInformations(serviceName: string): Promise<DedicatedserverRtmMemory[]>;
    GetServerMotherboardHardwareInformations(serviceName: string): Promise<DedicatedserverRtmMotherboardHw>;
    GetServerOsInformations(serviceName: string): Promise<DedicatedserverRtmOs>;
    ServerPartitions(serviceName: string): Promise<string[]>;
    RetrievePartitionCharts(partition: string, period: DedicatedserverRtmChartPeriodEnum, serviceName: string): Promise<ComplexTypeChartReturn>;
    GetServerPCIDevicesInformations(serviceName: string): Promise<DedicatedserverRtmPci[]>;
    GetServerProcess(serviceName: string): Promise<DedicatedserverRtmCommandSize[]>;
    ServerRaidInformations(serviceName: string): Promise<string[]>;
    RaidUnitVolumes(serviceName: string, unit: string): Promise<string[]>;
    RaidUnitVolumePorts(serviceName: string, unit: string, volume: string): Promise<string[]>;
    AskForABrokenHDDReplacement(comment: string, disks: DedicatedserverSupportReplaceHddInfo[], inverse: boolean, serviceName: string): Promise<SupportNewMessageInfo>;
    DedicatedServerTodos(serviceName: string, _function?: DedicatedTaskFunctionEnum, status?: DedicatedTaskStatusEnum): Promise<number[]>;
    ThisActionStopTheTaskProgressionIfItPossible(serviceName: string, taskId: number): Promise<void>;
    TerminateYourService(serviceName: string): Promise<string>;
    VirtualMACAddressesOfTheServer(serviceName: string): Promise<string[]>;
    AddAVirtualMacToAnIPAddress(ipAddress: string, serviceName: string, type: DedicatedserverVmacTypeEnum, virtualMachineName: string): Promise<DedicatedserverTask>;
    ListOfIPsAssociatedToThisVirtualMAC(macAddress: string, serviceName: string): Promise<string[]>;
    AddAnIPToThisVirtualMAC(ipAddress: string, macAddress: string, serviceName: string, virtualMachineName: string): Promise<DedicatedserverTask>;
    RemoveThisIpFromVirtualMacIfYouRemoveTheLastLinkedIpVirtualmacWillBeDeleted(ipAddress: string, macAddress: string, serviceName: string): Promise<DedicatedserverTask>;
    ListServerVirtualNetworkInterfaces(serviceName: string, mode?: DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceModeEnum, name?: string, vrack?: string): Promise<string[]>;
    ServerVracks(serviceName: string): Promise<string[]>;
    RemoveThisServerFromThisVrack(serviceName: string, vrack: string): Promise<VrackTask>;
    RetrieveVrackTrafficGraphValues(period: DedicatedserverMrtgPeriodEnum, serviceName: string, type: DedicatedserverMrtgTypeEnum, vrack: string): Promise<DedicatedserverMrtgTimestampValue[]>;
    ListTheAvailabilityOfDedicatedServer(country: NichandleOvhSubsidiaryEnum, hardware?: string): Promise<DedicatedAvailabilities[]>;
    ListTheOsAvailableForASpecifiedHardwareReference(hardware: string): Promise<DedicatedOsAvailabilitiesEnum[]>;
    GetVirtualNetworkInterfaceDetails(uuid: string): Promise<DedicatedvirtualNetworkInterfaceVirtualNetworkInterface>;
}
//# sourceMappingURL=dedicated.server.d.ts.map