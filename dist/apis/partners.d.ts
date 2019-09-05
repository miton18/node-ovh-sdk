import { Client } from '../client';
export declare enum NichandleCountry {
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
/**
 * Possible choices for activitySectors
 */
export interface PartneractivitySectors {
    bankInsuranceFinance: boolean;
    businessServiceOrIndividuals: boolean;
    communicationOrMedia: boolean;
    digitalServicesCompanies: boolean;
    ecommerce: boolean;
    health: boolean;
    industryTransportationEnegy: boolean;
    other?: string;
    otherITOrTelecom: boolean;
    publicSectorOrEducation: boolean;
    resellerITOrTelecom: boolean;
    softwareEditor: boolean;
    tradeTradingDistribution: boolean;
    videoGames: boolean;
    webAgency: boolean;
}
/**
 * Partner Application
 */
export interface PartnerApplication {
    tieringLevel: string;
}
/**
 * Possible choices for clientKinds
 */
export interface PartnerclientKinds {
    association: boolean;
    individual: boolean;
    largeGroup: boolean;
    mediumBusiness: boolean;
    other?: string;
    publicSector: boolean;
    startup: boolean;
}
/**
 * Partner company
 */
export interface PartnerCompany {
    activitySectors: PartneractivitySectors;
    address: string;
    city: string;
    clientKinds: PartnerclientKinds;
    commercialName: string;
    country: string;
    description: string;
    email: string;
    employeesNumber: string;
    expertises: PartnerexpertisesChoices;
    externalCertifications: PartnerexternalCertifications;
    facebook: string;
    linkedin: string;
    logo: string;
    name: string;
    OVHCertifications: PartnerOVHCertifications;
    OVHCustomersAdvised: string;
    OVHKnowledgeResources: string;
    OVHProductsUsed: PartnerOVHProductsUsed;
    OVHTechnicalAdvancedResources: string;
    OVHTechnicalExpertResources: string;
    partnerKnowledges: PartnerpartnerKnowledges;
    phone: string;
    productCountries: PartnerproductCountries;
    registrationNumber: string;
    revenue: string;
    status: PartnercompanyStatus;
    twitter: string;
    website: string;
    zipCode: string;
}
export declare enum PartnercompanyStatus {
    DRAFT = "draft",
    SUBMITTED = "submitted",
    VALIDATED = "validated",
    REJECTED = "rejected"
}
/**
 * Partner contact
 */
export interface PartnerContact {
    email: string;
    facebook?: string;
    firstName: string;
    lastName: string;
    linkedin?: string;
    newsletter: string;
    otherNics: string[];
    phone: string;
    role: string;
    twitter?: string;
}
export declare enum PartneremployeesNumber {
    FROM1TO10 = "from1To10",
    FROM11TO50 = "from11To50",
    FROM51TO100 = "from51To100",
    FROM101TO500 = "from101To500",
    MORETHAN500 = "moreThan500"
}
/**
 * Possible choices for expertises
 */
export interface PartnerexpertisesChoices {
    consulting: PartnerexpertisesChoicesConsulting;
    installationAndIntegration: PartnerexpertisesChoicesInstallationAndIntegration;
    outsourcingAndMaintenance: PartnerexpertisesChoicesOutsourcingAndMaintenance;
    softwareAndDevelopment: PartnerexpertisesChoicesSoftwareAndDevelopment;
}
/**
 * Possible options for consulting expertises
 */
export interface PartnerexpertisesChoicesConsulting {
    auditAndConsulting: boolean;
    infrastructureArchitecture: boolean;
    ITSecurity: boolean;
    marketingCommerceAndCommunication: boolean;
    searchEngineOptimization: boolean;
}
/**
 * Possible options for installation and integration expertises
 */
export interface PartnerexpertisesChoicesInstallationAndIntegration {
    cloudInfrastructure: boolean;
    networkEquipment: boolean;
    peripheralsAndMobilitySolutions: boolean;
    telecomEquipmentAndInfrastructure: boolean;
}
/**
 * Possible options for outsourcing and maintenance expertises
 */
export interface PartnerexpertisesChoicesOutsourcingAndMaintenance {
    cmputerSupport: boolean;
    maintenanceOfNetworkEquipment: boolean;
    outsourcing: boolean;
}
/**
 * Possible options for software and development expertises
 */
export interface PartnerexpertisesChoicesSoftwareAndDevelopment {
    adviceAndexpertises: boolean;
    maintenanceOrApplicationManagement: boolean;
    networkEquipment: boolean;
    softwareSolutions: boolean;
}
/**
 * Possible choices for externalCertifications
 */
export interface PartnerexternalCertifications {
    aws: boolean;
    cisco: boolean;
    intel: boolean;
    microsoft: boolean;
    other?: string;
    vmware: boolean;
}
export declare enum PartnerknowledgeResourcesRange {
    NONE = "none",
    FROM1TO3 = "from1To3",
    FROM4TO10 = "from4To10",
    MORETHAN10 = "moreThan10"
}
/**
 * Partner Nic
 */
export interface PartnerNic {
    nic: string;
}
/**
 * Possible choices for OVHCertifications
 */
export interface PartnerOVHCertifications {
    advanced?: string;
    business?: string;
    technical?: string;
}
export declare enum PartnerOVHCustomersAdvised {
    NONE = "none",
    ONE = "one",
    FROM2TO3 = "from2To3",
    FROM4TO5 = "from4To5",
    MORETHAN5 = "moreThan5"
}
/**
 * Possible choices for OVHProductsUsed
 */
export interface PartnerOVHProductsUsed {
    cloud: PartnerOVHProductsUsedCloud;
    mobileHosting: PartnerOVHProductsUsedMobileHosting;
    telecom: PartnerOVHProductsUsedTelecom;
    web: PartnerOVHProductsUsedWeb;
}
/**
 * Possible options for OVHProductsUsed_cloud
 */
export interface PartnerOVHProductsUsedCloud {
    cloudDesktop: boolean;
    cloudDesktopInfrastructure: boolean;
    dedicated: boolean;
    nas: boolean;
    networkAndSecurity: boolean;
    privateCloud: boolean;
    publicCloud: boolean;
    vps: boolean;
    vrack: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_mobileHosting
 */
export interface PartnerOVHProductsUsedMobileHosting {
    logs: boolean;
    metrics: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_telecom
 */
export interface PartnerOVHProductsUsedTelecom {
    dsl: boolean;
    fax: boolean;
    overTheBox: boolean;
    sms: boolean;
    voip: boolean;
}
/**
 * Possible ranges for OVHProductsUsed_web
 */
export interface PartnerOVHProductsUsedWeb {
    domainName: boolean;
    exchange: boolean;
    office: boolean;
    sharepoint: boolean;
    webHosting: boolean;
}
/**
 * Possible choices for partnerKnowledges
 */
export interface PartnerpartnerKnowledges {
    events: boolean;
    forum: boolean;
    media: boolean;
    other?: string;
    searchEngine: boolean;
    socialNetwork: boolean;
    website: boolean;
}
/**
 * Possible choices for productCountries
 */
export interface PartnerproductCountries {
    australia: boolean;
    brazil: boolean;
    canada: boolean;
    czechRepublic: boolean;
    finland: boolean;
    france: boolean;
    germany: boolean;
    ireland: boolean;
    italy: boolean;
    lithuania: boolean;
    morocco: boolean;
    netherlands: boolean;
    other?: string;
    poland: boolean;
    portugal: boolean;
    senegal: boolean;
    singapore: boolean;
    spain: boolean;
    tunisia: boolean;
    uk: boolean;
}
export declare enum PartnerrevenueRange {
    LESSTHAN50000EUROS = "lessThan50000Euros",
    FROM50000TO500000EUROS = "from50000To500000Euros",
    FROM500000TO5000000EUROS = "from500000To5000000Euros",
    MORETHAN5000000EUROS = "moreThan5000000Euros",
    IDONOTWISHTODISCLOSETHISINFORMATION = "IDoNotWishToDiscloseThisInformation"
}
export declare enum PartnertechnicalAdvancedResourcesRange {
    NONE = "none",
    FROM1TO3 = "from1To3",
    FROM4TO10 = "from4To10",
    MORETHAN10 = "moreThan10"
}
export declare enum PartnertechnicalExpertResourcesRange {
    NONE = "none",
    FROM1TO3 = "from1To3",
    FROM4TO10 = "from4To10",
    MORETHAN10 = "moreThan10"
}
export declare class Partners {
    private client;
    constructor(client: Client);
    /**
     * Company.list [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company#GET)
     */
    ListCreatedCompanies(): Promise<string[]>;
    /**
     * Company.list [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company#POST)
     */
    CreatedANewCompanyForTheInscription(address: string, city: string, commercialName: string, country: NichandleCountry, description: string, email: string, employeesNumber: PartneremployeesNumber, logo: string, name: string, OVHCustomersAdvised: PartnerOVHCustomersAdvised, OVHKnowledgeResources: PartnerknowledgeResourcesRange, OVHTechnicalAdvancedResources: PartnertechnicalAdvancedResourcesRange, OVHTechnicalExpertResources: PartnertechnicalExpertResourcesRange, phone: string, revenue: PartnerrevenueRange, website: string, zipCode: string, activitySectors?: PartneractivitySectors, clientKinds?: PartnerclientKinds, expertises?: PartnerexpertisesChoices, externalCertifications?: PartnerexternalCertifications, facebook?: string, linkedin?: string, OVHCertifications?: PartnerOVHCertifications, OVHProductsUsed?: PartnerOVHProductsUsed, partnerKnowledges?: PartnerpartnerKnowledges, productCountries?: PartnerproductCountries, registrationNumber?: string, twitter?: string): Promise<PartnerCompany>;
    /**
     * Company.get [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D#GET)
     */
    GetInformationOnACreatedCompany(companyId: string): Promise<PartnerCompany>;
    /**
     * Company.get [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D#PUT)
     */
    UpdateSomeFieldsOnACreatedCompany(companyId: string, activitySectors?: PartneractivitySectors, address?: string, city?: string, clientKinds?: PartnerclientKinds, commercialName?: string, country?: NichandleCountry, description?: string, effective?: PartneremployeesNumber, email?: string, expertises?: PartnerexpertisesChoices, externalCertifications?: PartnerexternalCertifications, facebook?: string, linkedin?: string, logo?: string, name?: string, OVHCertifications?: PartnerOVHCertifications, OVHCustomersAdvised?: PartnerOVHCustomersAdvised, OVHKnowledgeResources?: PartnerknowledgeResourcesRange, OVHProductsUsed?: PartnerOVHProductsUsed, OVHTechnicalAdvancedResources?: PartnertechnicalAdvancedResourcesRange, OVHTechnicalExpertResources?: PartnertechnicalExpertResourcesRange, partnerKnowledges?: PartnerpartnerKnowledges, phone?: string, productCountries?: PartnerproductCountries, registrationNumber?: string, revenue?: PartnerrevenueRange, twitter?: string, website?: string, zipCode?: string): Promise<PartnerCompany>;
    /**
     * Company.get [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D#DELETE)
     */
    RemoveACompany(companyId: string): Promise<string>;
    /**
     * Application.create [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D/application#POST)
     */
    SubmitApplicationInformationForValidation(companyId: string, termsAndConditionsOfServiceAccepted: boolean): Promise<PartnerApplication>;
    /**
     * Application.create [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D/application#GET)
     */
    ComputeScoringScoreWithoutSubmittingApplication(companyId: string): Promise<PartnerApplication>;
    /**
     * Contact.list [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D/contact#GET)
     */
    ListCreatedContacts(companyId: string): Promise<string[]>;
    /**
     * Contact.list [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D/contact#POST)
     */
    CreatedANewContactForTheInscription(companyId: string, email: string, firstName: string, lastName: string, phone: string, role: string, facebook?: string, linkedin?: string, newsletter?: boolean, otherNics?: PartnerNic[], twitter?: string): Promise<PartnerContact>;
    /**
     * Contact.get [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D/contact/%7BcontactId%7D#GET)
     */
    GetInformationOnACreatedContact(companyId: string, contactId: string): Promise<PartnerContact>;
    /**
     * Contact.get [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D/contact/%7BcontactId%7D#PUT)
     */
    UpdateSomeFieldsOnACreatedContact(companyId: string, contactId: string, email?: string, facebook?: string, firstName?: string, lastName?: string, linkedin?: string, newsletter?: boolean, otherNics?: PartnerNic[], phone?: string, role?: string, twitter?: string): Promise<PartnerContact>;
    /**
     * Contact.get [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/partners/register/company/%7BcompanyId%7D/contact/%7BcontactId%7D#DELETE)
     */
    RemoveAContact(companyId: string, contactId: string): Promise<string>;
}
//# sourceMappingURL=partners.d.ts.map