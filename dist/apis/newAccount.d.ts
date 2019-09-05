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
export interface NichandleCreationRule {
    regularExpression?: string;
    prefix?: string;
    examples?: string[];
    in?: string[];
    defaultValue?: string;
    mandatory: boolean;
    fieldName?: string;
}
export interface NichandleCreationRules {
    ovhSubsidiary: NichandleCreationRule;
    nationalIdentificationNumber: NichandleCreationRule;
    italianSDI: NichandleCreationRule;
    sex: NichandleCreationRule;
    address: NichandleCreationRule;
    phoneCountry: NichandleCreationRule;
    country: NichandleCreationRule;
    vat: NichandleCreationRule;
    companyNationalIdentificationNumber: NichandleCreationRule;
    birthDay: NichandleCreationRule;
    phone: NichandleCreationRule;
    birthCity: NichandleCreationRule;
    language: NichandleCreationRule;
    spareEmail: NichandleCreationRule;
    city: NichandleCreationRule;
    area: NichandleCreationRule;
    email: NichandleCreationRule;
    organisation: NichandleCreationRule;
    name: NichandleCreationRule;
    fax: NichandleCreationRule;
    legalform: NichandleCreationRule;
    ovhCompany: NichandleCreationRule;
    corporationType: NichandleCreationRule;
    zip: NichandleCreationRule;
    firstname: NichandleCreationRule;
}
export declare enum NichandleCreationRulesActionEnum {
    CREATE = "create",
    UPDATE = "update"
}
export declare enum NichandleGenderEnum {
    FEMALE = "female",
    MALE = "male"
}
export declare enum NichandleLanguageEnum {
    CS_CZ = "cs_CZ",
    DE_DE = "de_DE",
    EN_AU = "en_AU",
    EN_CA = "en_CA",
    EN_GB = "en_GB",
    EN_IE = "en_IE",
    EN_US = "en_US",
    ES_ES = "es_ES",
    FI_FI = "fi_FI",
    FR_CA = "fr_CA",
    FR_FR = "fr_FR",
    FR_MA = "fr_MA",
    FR_SN = "fr_SN",
    FR_TN = "fr_TN",
    IT_IT = "it_IT",
    LT_LT = "lt_LT",
    NL_NL = "nl_NL",
    PL_PL = "pl_PL",
    PT_PT = "pt_PT"
}
export declare enum NichandleLegalFormEnum {
    ADMINISTRATION = "administration",
    ASSOCIATION = "association",
    CORPORATION = "corporation",
    INDIVIDUAL = "individual",
    OTHER = "other",
    PERSONALCORPORATION = "personalcorporation"
}
export interface NichandleNewAccountAndToken {
    consumerKey?: string;
    ovhIdentifier: string;
}
export declare enum NichandleOvhCompanyEnum {
    KIMSUFI = "kimsufi",
    OVH = "ovh",
    SOYOUSTART = "soyoustart"
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
export interface OrderContract {
    url: string;
    name: string;
    content: string;
}
export declare class NewAccount {
    private client;
    constructor(client: Client);
    CreateANewOVHIdentifier(country: NichandleCountryEnum, email: string, legalform: NichandleLegalFormEnum, ovhCompany: NichandleOvhCompanyEnum, ovhSubsidiary: NichandleOvhSubsidiaryEnum, address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, fax?: string, firstname?: string, italianSDI?: string, language?: NichandleLanguageEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, phone?: string, phoneCountry?: NichandleCountryEnum, sex?: NichandleGenderEnum, spareEmail?: string, vat?: string, zip?: string): Promise<NichandleNewAccountAndToken>;
    AllAvailableAreasForAGivenCountry(country: NichandleCountryEnum): Promise<string[]>;
    ReturnsTheContractsThatGovernsTheCreationOfAnOVHIdentifier(company: NichandleOvhCompanyEnum, subsidiary: NichandleOvhSubsidiaryEnum): Promise<OrderContract[]>;
    AllAvailableCorporationTypesForAGivenCountry(country: NichandleCountryEnum): Promise<string[]>;
    AllAvailableCountriesForAnOvhCompanyAndAnOvhSubsidiary(ovhCompany: NichandleOvhCompanyEnum, ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<NichandleCountryEnum[]>;
    GiveAllTheRulesToFollowInOrderToCreateAnOVHIdentifier(country: NichandleCountryEnum, legalform: NichandleLegalFormEnum, ovhCompany: NichandleOvhCompanyEnum, ovhSubsidiary: NichandleOvhSubsidiaryEnum): Promise<NichandleCreationRules>;
    AllAvailableLegalFormsForAGivenCountry(country: NichandleCountryEnum): Promise<string[]>;
    GiveAllTheRulesToFollowInOrderToCreateAndUpdateAnOVHIdentifier(action?: NichandleCreationRulesActionEnum, address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: NichandleCountryEnum, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: NichandleLanguageEnum, legalform?: NichandleLegalFormEnum, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany?: NichandleOvhCompanyEnum, ovhSubsidiary?: NichandleOvhSubsidiaryEnum, phone?: string, phoneCountry?: NichandleCountryEnum, sex?: NichandleGenderEnum, spareEmail?: string, vat?: string, zip?: string): Promise<NichandleCreationRule[]>;
}
//# sourceMappingURL=newAccount.d.ts.map