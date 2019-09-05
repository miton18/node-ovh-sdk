import { Client } from '../client';
export interface ComplexTypeRange<T> {
    to: T;
    from: T;
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
export interface IpAntiphishing {
    urlPhishing: string;
    ipOnAntiphishing: string;
    state: IpAntiphishingStateEnum;
    id: number;
    creationDate: string;
}
export declare enum IpAntiphishingStateEnum {
    BLOCKED = "blocked",
    BLOCKING = "blocking",
    UNBLOCKED = "unblocked",
    UNBLOCKING = "unblocking"
}
export interface IpArpBlockedIp {
    time: number;
    blockedSince: string;
    logs?: string;
    state: IpArpStateEnum;
    ipBlocked: string;
}
export declare enum IpArpStateEnum {
    BLOCKED = "blocked",
    UNBLOCKING = "unblocking"
}
export interface IpBlockedIp {
    state: IpBlockedIpStateEnum;
    logs?: string;
    ipBlocked: string;
    time: number;
    blockedSince: string;
}
export declare enum IpBlockedIpStateEnum {
    BLOCKED = "blocked",
    UNBLOCKING = "unblocking"
}
export interface IpDestination {
    nexthop?: string[];
    service: string;
}
export interface IpDestinations {
    dedicatedCloud?: IpDestination[];
    dedicatedServer?: IpDestination[];
    cloudProject?: IpDestination[];
    ipLoadbalancing?: IpDestination[];
    hostingReseller?: IpDestination[];
    vps?: IpDestination[];
}
export declare enum IpFirewallActionEnum {
    DENY = "deny",
    PERMIT = "permit"
}
export interface IpFirewallIp {
    state: IpFirewallStateEnum;
    ipOnFirewall: string;
    enabled: boolean;
}
export interface IpFirewallNetworkRule {
    protocol: IpFirewallProtocolEnum;
    source: string;
    rule: string;
    tcpOption?: string;
    destinationPort?: string;
    creationDate: string;
    destination: string;
    state: IpFirewallRuleStateEnum;
    sequence: number;
    action: IpFirewallActionEnum;
    sourcePort?: string;
    fragments?: boolean;
}
export interface IpFirewallOptionTCP {
    option?: IpFirewallTCPOptionEnum;
    fragments?: boolean;
}
export declare enum IpFirewallProtocolEnum {
    AH = "ah",
    ESP = "esp",
    GRE = "gre",
    ICMP = "icmp",
    IPV4 = "ipv4",
    TCP = "tcp",
    UDP = "udp"
}
export declare enum IpFirewallRuleStateEnum {
    CREATIONPENDING = "creationPending",
    OK = "ok",
    REMOVALPENDING = "removalPending"
}
export declare type IpFirewallSequenceRangeEnum = 0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export declare enum IpFirewallStateEnum {
    DISABLEFIREWALLPENDING = "disableFirewallPending",
    ENABLEFIREWALLPENDING = "enableFirewallPending",
    OK = "ok"
}
export declare enum IpFirewallTCPOptionEnum {
    ESTABLISHED = "established",
    SYN = "syn"
}
export interface IpGameMitigation {
    firewallModeEnabled: boolean;
    state: IpGameMitigationStateEnum;
    ipOnGame: string;
}
export interface IpGameMitigationRule {
    state: IpGameMitigationRuleStateEnum;
    id: number;
    protocol: IpGameMitigationRuleProtocolEnum;
    ports: any;
}
export declare enum IpGameMitigationRuleProtocolEnum {
    ARKSURVIVALEVOLVED = "arkSurvivalEvolved",
    ARMA = "arma",
    GTAMULTITHEFTAUTOSANANDREAS = "gtaMultiTheftAutoSanAndreas",
    GTASANANDREASMULTIPLAYERMOD = "gtaSanAndreasMultiplayerMod",
    HL2SOURCE = "hl2Source",
    MINECRAFTPOCKETEDITION = "minecraftPocketEdition",
    MINECRAFTQUERY = "minecraftQuery",
    MUMBLE = "mumble",
    OTHER = "other",
    RUST = "rust",
    TEAMSPEAK2 = "teamspeak2",
    TEAMSPEAK3 = "teamspeak3",
    TRACKMANIASHOOTMANIA = "trackmaniaShootmania"
}
export declare enum IpGameMitigationRuleStateEnum {
    CREATERULEPENDING = "createRulePending",
    DELETERULEPENDING = "deleteRulePending",
    OK = "ok"
}
export declare enum IpGameMitigationStateEnum {
    FIREWALLMODEDISABLEPENDING = "firewallModeDisablePending",
    FIREWALLMODEENABLEPENDING = "firewallModeEnablePending",
    OK = "ok"
}
export interface IpIp {
    type: IpIpTypeEnum;
    ip: string;
    description?: string;
    organisationId?: string;
    routedTo?: IpRoutedTo;
    canBeTerminated: boolean;
    country?: CoreTypesCountryEnum;
}
export interface IpIpMigrationToken {
    customerId: string;
    token: string;
}
export interface IpIpTask {
    lastUpdate?: string;
    comment?: string;
    startDate: string;
    status: IpTaskStatusEnum;
    doneDate?: string;
    function: IpTaskFunctionEnum;
    destination?: IpRoutedTo;
    taskId: number;
}
export declare enum IpIpTypeEnum {
    CDN = "cdn",
    CLOUD = "cloud",
    DEDICATED = "dedicated",
    FAILOVER = "failover",
    HOSTED_SSL = "hosted_ssl",
    HOUSING = "housing",
    LOADBALANCING = "loadBalancing",
    MAIL = "mail",
    OVERTHEBOX = "overthebox",
    PCC = "pcc",
    PCI = "pci",
    PRIVATE = "private",
    VPN = "vpn",
    VPS = "vps",
    VRACK = "vrack",
    XDSL = "xdsl"
}
export declare type IpLoadBalancingAdditionalPortEnum = 3306 | 443 | 5432 | 80;
export interface IpLoadBalancingBackendIp {
    backend: string;
    weight: number;
    mainBackendIp?: string;
    probe: IpLoadBalancingBackendProbeEnum;
    zone: IpLoadBalancingZoneEnum;
}
export declare enum IpLoadBalancingBackendProbeEnum {
    HTTP = "http",
    ICMP = "icmp",
    NONE = "none",
    OCO = "oco"
}
export interface IpLoadBalancingIp {
    zone: IpLoadBalancingZoneEnum[];
    serviceName: string;
    state: IpLoadBalancingStateEnum;
    stickiness: IpLoadBalancingStickinessEnum;
    ipLoadBalancing: string;
    ssl: IpLoadBalancingSslEnum;
}
export interface IpLoadBalancingIpLoadBalancingPort {
    dstPort: number;
    srcPort: IpLoadBalancingAdditionalPortEnum;
}
export declare enum IpLoadBalancingSslEnum {
    CUSTOMER = "customer",
    NONE = "none",
    OVH = "ovh"
}
export declare enum IpLoadBalancingStateEnum {
    BLACKLISTED = "blacklisted",
    DELETED = "deleted",
    FREE = "free",
    OK = "ok",
    QUARANTINED = "quarantined",
    SUSPENDED = "suspended"
}
export declare enum IpLoadBalancingStickinessEnum {
    COOKIE = "cookie",
    NONE = "none",
    SOURCEIP = "sourceIp"
}
export interface IpLoadBalancingTask {
    creationDate: string;
    action: IpLoadBalancingTaskActionEnum;
    status: string;
    id: number;
}
export declare enum IpLoadBalancingTaskActionEnum {
    ACTIVATESSL = "activateSsl",
    ADDBACKEND = "addBackend",
    ADDIPTOBACKEND = "addIpToBackend",
    ANNOUNCEIPLOADBALANCING = "announceIpLoadBalancing",
    BACKUPSTATESET = "backupStateSet",
    BACKUPSTATEUNSET = "backupStateUnset",
    CHANGEPROBE = "changeProbe",
    DELBACKEND = "delBackend",
    DESACTIVATESSL = "desactivateSsl",
    REMOVEIPFROMBACKEND = "removeIpFromBackend",
    SETPORTREDIRECTION = "setPortRedirection",
    SETSTICKINESS = "setStickiness",
    SETWEIGHT = "setWeight",
    UNANNOUNCEIPLOADBALANCING = "unannounceIpLoadBalancing",
    UNSETPORTREDIRECTION = "unsetPortRedirection"
}
export declare enum IpLoadBalancingZoneEnum {
    BHS = "bhs",
    GRA = "gra",
    RBX = "rbx",
    SBG = "sbg"
}
export interface IpMitigationAttack {
    startDate: string;
    endDate?: string;
    ipAttack: string;
    idAttack: number;
}
export interface IpMitigationDetailedStats {
    in?: IpMitigationTraffic;
    fragments?: boolean;
    srcPort?: number;
    destPort?: number;
    icmpCode?: number;
    syn?: boolean;
    out?: IpMitigationTraffic;
    icmpType?: number;
    protocol?: number;
}
export interface IpMitigationIp {
    permanent: boolean;
    auto: boolean;
    state: IpMitigationStateEnum;
    ipOnMitigation: string;
}
export interface IpMitigationProfile {
    state: IpMitigationProfileStateEnum;
    ipMitigationProfile: string;
    autoMitigationTimeOut: IpMitigationProfileAutoMitigationTimeOutEnum;
}
export declare type IpMitigationProfileAutoMitigationTimeOutEnum = 0 | 15 | 1560 | 360 | 60;
export declare enum IpMitigationProfileStateEnum {
    OK = "ok",
    TASKSPENDING = "tasksPending"
}
export declare enum IpMitigationStateEnum {
    CREATIONPENDING = "creationPending",
    OK = "ok",
    REMOVALPENDING = "removalPending"
}
export interface IpMitigationStats {
    timestamp: number;
    out?: IpMitigationTraffic;
    in?: IpMitigationTraffic;
}
export declare type IpMitigationStatsScaleEnum = '10s' | '1m' | '5m';
export interface IpMitigationTraffic {
    pps: number;
    bps: number;
}
export interface IpReverseDelegation {
    target: string;
}
export interface IpReverseIp {
    reverse: string;
    ipReverse: string;
}
export interface IpRipeInfos {
    description?: string;
    netname?: string;
}
export interface IpRoutedTo {
    serviceName?: string;
}
export interface IpServiceIp {
    country?: CoreTypesCountryEnum;
    routedTo?: IpRoutedTo;
    canBeTerminated: boolean;
    type: IpIpTypeEnum;
    ip: string;
    description?: string;
    organisationId?: string;
}
export interface IpSpamIp {
    state: IpSpamStateEnum;
    ipSpamming: string;
    date: string;
    time: number;
}
export declare enum IpSpamStateEnum {
    BLOCKEDFORSPAM = "blockedForSpam",
    UNBLOCKED = "unblocked",
    UNBLOCKING = "unblocking"
}
export interface IpSpamStats {
    averageSpamscore?: number;
    detectedSpams?: IpSpamTarget[];
    numberOfSpams: number;
    total: number;
    timestamp: number;
}
export interface IpSpamTarget {
    spamscore: number;
    destinationIp: string;
    date: number;
    messageId: string;
}
export declare enum IpTaskFunctionEnum {
    ARINBLOCKREASSIGN = "arinBlockReassign",
    CHANGERIPEORG = "changeRipeOrg",
    CHECKANDRELEASEIP = "checkAndReleaseIp",
    GENERICMOVEFLOATINGIP = "genericMoveFloatingIp"
}
export declare enum IpTaskStatusEnum {
    CANCELLED = "cancelled",
    CUSTOMERERROR = "customerError",
    DOING = "doing",
    DONE = "done",
    INIT = "init",
    OVHERROR = "ovhError",
    TODO = "todo"
}
export interface IpLoadbalancingTaskTask {
    progress: number;
    action: IpLoadbalancingTaskActionEnum;
    creationDate: string;
    zones: string[];
    status: IpLoadbalancingTaskStatusEnum;
    id: number;
    doneDate?: string;
}
export declare enum IpLoadbalancingTaskActionEnum {
    DELETEIPLB = "deleteIplb",
    DEPLOYIPLB = "deployIplb",
    INSTALL = "install",
    INSTALLIPLB = "installIplb",
    INSTALLZONE = "installZone",
    ORDERFREECERTIFICATE = "orderFreeCertificate",
    ORDERPAIDCERTIFICATE = "orderPaidCertificate",
    ORDERSSL = "orderSsl",
    REFRESHIPLB = "refreshIplb",
    RELEASEIPLB = "releaseIplb",
    RELEASEIPLBZONE = "releaseIplbZone",
    REOPENIPLB = "reopenIplb",
    SUSPENDIPLB = "suspendIplb",
    SUSPENDZONE = "suspendZone",
    SWITCHTOIPLBNEXTGENERATIONAPI = "switchToIplbNextGenerationApi",
    VRACKATTACH = "vrackAttach",
    VRACKDETACH = "vrackDetach"
}
export declare enum IpLoadbalancingTaskStatusEnum {
    BLOCKED = "blocked",
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
    period?: number;
    automatic: boolean;
    deleteAtExpiration: boolean;
    manualPayment?: boolean;
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
export interface ServicesNonExpiringService {
    domain: string;
    serviceId: number;
    contactAdmin: string;
    creation: string;
    contactTech: string;
    status: ServiceStateEnum;
    contactBilling: string;
}
export interface ServicesService {
    domain: string;
    contactTech: string;
    status: ServiceStateEnum;
    canDeleteAtExpiration: boolean;
    contactBilling: string;
    expiration: string;
    renew?: ServiceRenewType;
    engagedUpTo?: string;
    creation: string;
    serviceId: number;
    contactAdmin: string;
    possibleRenewPeriod?: number[];
    renewalType: ServiceRenewalTypeEnum;
}
export declare class Ip {
    private client;
    constructor(client: Client);
    YourOVHIPs(description?: string, ip?: string, routedToServiceName?: string, type?: IpIpTypeEnum): Promise<string[]>;
    GetThisObjectProperties(ip: string): Promise<IpIp>;
    AlterThisObjectProperties(ip: string, payload: IpIp): Promise<void>;
    AntiHackBlockedIP(ip: string, state?: IpBlockedIpStateEnum): Promise<string[]>;
    UnblockThisIP(ip: string, ipBlocked: string): Promise<void>;
    ARPBlockedIP(ip: string, state?: IpArpStateEnum): Promise<string[]>;
    ChangeOrganisationOfThisIP(ip: string, organisation: string): Promise<IpIpTask>;
    ReverseDelegationOnIPv6Subnet(ip: string): Promise<string[]>;
    AddTargetForReverseDelegationOnIPv6Subnet(ip: string, target: string): Promise<IpReverseDelegation>;
    DeleteATargetForReverseDelegationOnIPv6Subnet(ip: string, target: string): Promise<void>;
    IpUnderFirewall(ip: string, enabled?: boolean, state?: IpFirewallStateEnum): Promise<string[]>;
    AntiDDOSOptionAddNewIPOnFirewall(ip: string, ipOnFirewall: string): Promise<IpFirewallIp>;
    AntiDDOSOptionDeleteIPAndRulesFromFirewall(ip: string, ipOnFirewall: string): Promise<string>;
    RulesForThisIP(ip: string, ipOnFirewall: string, state?: IpFirewallRuleStateEnum): Promise<number[]>;
    AntiDDOSOptionAddNewRuleOnYourIP(action: IpFirewallActionEnum, ip: string, ipOnFirewall: string, protocol: IpFirewallProtocolEnum, sequence: IpFirewallSequenceRangeEnum, destinationPort?: number, source?: any, sourcePort?: number, tcpOption?: IpFirewallOptionTCP): Promise<IpFirewallNetworkRule>;
    AntiDDOSOptionDeleteRule(ip: string, ipOnFirewall: string, sequence: number): Promise<IpFirewallNetworkRule>;
    IpUnderGameAntiddos(ip: string): Promise<string[]>;
    IDsOfRulesConfiguredForThisIP(ip: string, ipOnGame: string): Promise<number[]>;
    AddNewRuleOnYourIP(ip: string, ipOnGame: string, ports: any, protocol: IpGameMitigationRuleProtocolEnum): Promise<IpGameMitigationRule>;
    DeleteRule(id: number, ip: string, ipOnGame: string): Promise<IpGameMitigationRule>;
    CloudLinuxLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    CpanelLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    DirectAdminLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    PleskLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    SQLServerLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    VirtuozzoLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    WindowsLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    WorkLightLicensesAssociatedToThisIP(ip: string, ipAddress?: string): Promise<string[]>;
    GenerateAMigrationToken(customerId: string, ip: string): Promise<IpIpMigrationToken>;
    IpUnderMitigation(ip: string, auto?: boolean, state?: IpMitigationStateEnum): Promise<string[]>;
    AntiDDOSOptionAddNewIPOnPermanentMitigation(ip: string, ipOnMitigation: string): Promise<IpMitigationIp>;
    AntiDDOSOptionDeleteIPFromMitigation(ip: string, ipOnMitigation: string): Promise<IpMitigationIp>;
    AntiDDOSOptionGetStatisticsAboutYourTrafficInAndOutDuringThisMitigation(from: string, ip: string, ipOnMitigation: string, scale: IpMitigationStatsScaleEnum, to: string): Promise<IpMitigationStats[]>;
    AntiDDOSOptionGetTopStreamOnYourIpOnASpecificTimestamp(date: string, ip: string, ipOnMitigation: string, scale: IpMitigationStatsScaleEnum): Promise<IpMitigationDetailedStats[]>;
    ManageMitigationProfileOnYourIPs(ip: string): Promise<string[]>;
    CreateNewProfileForOneOfYourIp(autoMitigationTimeOut: IpMitigationProfileAutoMitigationTimeOutEnum, ip: string, ipMitigationProfile: string): Promise<IpMitigationProfile>;
    DeleteMitigationProfile(ip: string, ipMitigationProfile: string): Promise<void>;
    MoveThisIPToAnotherService(ip: string, to: string, nexthop?: string): Promise<IpIpTask>;
    ListServicesAvailableAsADestination(ip: string): Promise<IpDestinations>;
    ParkThisIP(ip: string): Promise<IpIpTask>;
    IpUnderAntiphishing(ip: string, ipOnAntiphishing?: string, state?: IpAntiphishingStateEnum): Promise<number[]>;
    ReverseOnYourIp(ip: string): Promise<string[]>;
    AddReverseOnAnIp(ip: string, ipReverse: string, reverse: string): Promise<IpReverseIp>;
    DeleteAReverseOnOneIP(ip: string, ipReverse: string): Promise<void>;
    IpSpamming(ip: string, state?: IpSpamStateEnum): Promise<string[]>;
    GetStatisticsAboutTheEmailTraffic(from: string, ip: string, ipSpamming: string, to: string): Promise<IpSpamStats[]>;
    ReleaseTheIpFromAntispamSystem(ip: string, ipSpamming: string): Promise<IpSpamIp>;
    IPTasks(ip: string, _function?: IpTaskFunctionEnum, status?: IpTaskStatusEnum): Promise<number[]>;
    DeleteAFailoverIP(ip: string): Promise<IpIpTask>;
    ListAvailableServices(): Promise<string[]>;
    ListOfBackendsYouCanAttachToYourIP(serviceName: string): Promise<string[]>;
    BackendsForThisIPLoadBalancing(serviceName: string): Promise<string[]>;
    AddANewBackendOnYourIPLoadBalancing(ipBackend: string, probe: IpLoadBalancingBackendProbeEnum, serviceName: string, weight?: number): Promise<IpLoadBalancingTask>;
    RemoveABackendIP(backend: string, serviceName: string): Promise<IpLoadBalancingTask>;
    SetOrUnsetTheBackendAsABackupOfAnotherBackendRequestsWillBeDirectedToTheBackupOnlyIfTheMainBackendIsInProbeFail(backend: string, backupStateSet: boolean, serviceName: string, mainBackendIp?: string): Promise<IpLoadBalancingTask>;
    SetTheWeightOfABackendForInstanceIfBackendAHasAWeightOf8AndBackupBWasAWeightOf16BackendBWillReceiveTwiceMoreConnectionsAsBackendABackendsMustBeOnTheSamePOPForTheWeightParameterToTakeEffectBetweenThem(backend: string, serviceName: string, weight: number): Promise<IpLoadBalancingTask>;
    ImportYourOwnSslCertificateOnYourIPLoadBalancingSslOptionIsNeededToUseThisUrl(certificate: string, key: string, serviceName: string, chain?: string): Promise<IpLoadBalancingTask>;
    IpSubnetUsedByOVHToNatRequestsOnYourIpLbToYourBackendsYouMustEnsureThatYourBackendsAreNotPartOfANetworkThatOverlapWithThisOne(serviceName: string, zone: IpLoadBalancingZoneEnum): Promise<string>;
    GetAllSrcPort(serviceName: string): Promise<IpLoadBalancingAdditionalPortEnum[]>;
    AddANewPortRedirection(serviceName: string, payload: IpLoadBalancingIpLoadBalancingPort): Promise<IpLoadBalancingTask>;
    GetTheValueForTheGivenSrcPort(serviceName: string, srcPort: IpLoadBalancingAdditionalPortEnum): Promise<IpLoadBalancingIpLoadBalancingPort>;
    DeleteAPortRedirection(serviceName: string, srcPort: IpLoadBalancingAdditionalPortEnum): Promise<IpLoadBalancingTask>;
    IpSubnetUsedToSendProbesToYourBackends(serviceName: string, zone: IpLoadBalancingZoneEnum): Promise<string[]>;
    RestoreOVHSslCertificateOnYourIPLoadBalancingSslOptionIsNeededToUseThisUrlADCVMailWillBeSentToPostmaster: any;
    : Promise<IpLoadBalancingTask>;
}
//# sourceMappingURL=ip.d.ts.map