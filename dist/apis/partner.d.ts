import { Client } from '../client';
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
export declare enum PartnerAcceptanceStatusEnum {
    OPEN = "Open",
    REJECTED = "Rejected",
    REGISTEREDQUALIFIED = "RegisteredQualified",
    ADVANCEDQUALIFIED = "AdvancedQualified",
    REGISTERED = "Registered",
    ADVANCED = "Advanced",
    ADVANCEDHANDOPERATED = "AdvancedHandOperated"
}
export interface PartnerAccount {
    city: string;
    country: NichandleCountryEnum;
    name: string;
}
export declare enum PartnerAreaOfExpertiseEnum {
    HPC = "HPC",
    DC = "DC",
    PC = "PC",
    ORCHESTRATION = "Orchestration",
    BIGDATA = "BigData",
    VPS = "VPS",
    SECURITYCERTIF = "SecurityCertif",
    DOMAINNAME = "DomainName",
    EMAILMSSOLUTION = "EmailMsSolution",
    WH = "WH",
    CONNECTIVITY = "Connectivity",
    VOIP = "VoIP"
}
export interface PartnerContact {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    position: PartnerPositionEnum;
}
export interface PartnerformField {
    fieldConfig: PartnerformfieldConfig;
}
export interface PartnerformfieldConfig {
    label: string;
    section: string;
    type: string;
}
export interface PartnerformSchema {
    account: PartnerformschemaAccount;
    areaOfExpertise: PartnerformschemaAreaOfExpertise;
    contact: PartnerformschemaContact;
    partnersProgramReason: PartnerformField;
    salesProjection: PartnerformField;
}
export interface PartnerformschemaAccount {
    city: PartnerformField;
    country: PartnerformschemaaccountCountry;
    name: PartnerformField;
}
export interface PartnerformschemaaccountCountry {
    fieldConfig: PartnerformfieldConfig;
    options: PartnerformschemaaccountcountryOption[];
}
export interface PartnerformschemaaccountcountryOption {
    text: string;
    value: NichandleCountryEnum;
}
export interface PartnerformschemaAreaOfExpertise {
    fieldConfig: PartnerformfieldConfig;
    options: PartnerformschemaareaOfExpertiseOption[];
}
export interface PartnerformschemaareaOfExpertiseOption {
    text: string;
    value: PartnerAreaOfExpertiseEnum;
}
export interface PartnerformschemaContact {
    email: PartnerformField;
    firstName: PartnerformField;
    lastName: PartnerformField;
    phone: PartnerformField;
    position: PartnerformschemacontactPosition;
}
export interface PartnerformschemacontactPosition {
    fieldConfig: PartnerformfieldConfig;
    options: PartnerformschemacontactpositionOption[];
}
export interface PartnerformschemacontactpositionOption {
    text: string;
    value: PartnerPositionEnum;
}
export interface PartnerPartner {
    acceptanceStatus: PartnerAcceptanceStatusEnum;
    account: PartnerAccount;
    areaOfExpertise: PartnerAreaOfExpertiseEnum[];
    contact: PartnerContact;
    partnersProgramReason: string;
    salesProjection: any;
}
export declare enum PartnerPositionEnum {
    ITSYSADMIN = "ITSysAdmin",
    ITDEVOPS = "ITDevops",
    ITOTHER = "ITOther",
    MARKETING = "Marketing",
    SALES = "Sales",
    PURCHASING = "Purchasing",
    RD = "RD",
    AF = "AF",
    HR = "HR",
    PRODUCTION = "Production",
    LC = "LC",
    OTHER = "Other"
}
export declare class Partner {
    private client;
    constructor(client: Client);
    GetPartnerStatus(): Promise<PartnerPartner>;
    RegisterAsAPartner(payload: PartnerPartner): Promise<void>;
    GetPartnerFormSchema(): Promise<PartnerformSchema>;
}
//# sourceMappingURL=partner.d.ts.map