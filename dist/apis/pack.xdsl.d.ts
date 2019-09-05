import { Client } from '../client';
export interface ConnectivityeligibilityBuilding {
    nro?: string;
    reference: string;
    stairs: ConnectivityeligibilityBuildingStair[];
    type: ConnectivityeligibilityBuildingTypeEnum;
    name: string;
}
export interface ConnectivityeligibilityBuildingStair {
    stair: string;
    floors: string[];
}
export declare enum ConnectivityeligibilityBuildingTypeEnum {
    BUILDING = "BUILDING",
    HOUSE = "HOUSE"
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
export interface OrderPrice {
    value: any;
    currencyCode: OrderCurrencyCodeEnum;
    text: string;
}
export interface PackxdsladdressMoveCreation {
    address: EligibilityAddress;
    meeting: EligibilityBookMeetingSlot;
}
export interface PackxdsladdressMoveEligibility {
    keepCurrentPortability?: EligibilityPortability;
    offers: PackxdsladdressMoveOffer[];
}
export interface PackxdsladdressMoveLandline {
    status: EligibilityLandlineStatusEnum;
    unbundling: DeconsolidationEnum;
    lineNumber: string;
    portLineNumber: boolean;
    rio?: string;
}
export interface PackxdsladdressMoveOffer {
    syncUpload: number;
    type: DslTypeEnum;
    unbundling: DeconsolidationEnum;
    estimatedUpload: number;
    reseller: boolean;
    lineSectionsLength: LineSectionLength[];
    offerCode: string;
    nra: string;
    price: OrderPrice;
    syncDownload: number;
    lineStatus: EligibilityLandlineStatusEnum;
    meetingSlots?: EligibilityMeetingSlots;
    address: EligibilityAddress;
    estimatedDownload: number;
    portability: EligibilityPortability;
    provider: EligibilityProviderEnum;
}
export interface PackxdslAsyncTask<T> {
    status: PackxdslAsyncTaskStatusEnum;
    result?: T;
    error?: string;
}
export declare enum PackxdslAsyncTaskStatusEnum {
    ERROR = "error",
    OK = "ok",
    PENDING = "pending"
}
export declare enum PackxdslDomainActionEnum {
    CREATE = "create",
    TRADE = "trade",
    TRANSFER = "transfer"
}
export interface PackxdslExchangeAccountService {
    domain: string;
    exchangeService: string;
    organizationName: string;
}
export interface PackxdslExchangeLiteService {
    domain: string;
}
export interface PackxdslHubic {
    bytes: number;
    voucher?: string;
    domain: string;
    size: string;
    isUsed: boolean;
}
export interface PackxdslmigrationMigrationOffer {
    url: string;
    subServicesToDelete: PackxdslmigrationSubServiceToDelete[];
    options: PackxdslmigrationOfferAvailableOption[];
    due?: OrderPrice;
    engageMonths?: number;
    needModem: boolean;
    engagementMonths: number[];
    description: string;
    currentOfferPrice: OrderPrice;
    price: OrderPrice;
    firstYearPromo?: OrderPrice;
    modemMacToReturn?: string;
    modemRental?: OrderPrice;
    contracts: OrderContract[];
    contractList: string[];
    installFees?: OrderPrice;
    needNewModem: boolean;
    offerName: string;
}
export interface PackxdslmigrationMigrationOfferResponse {
    offers: PackxdslmigrationMigrationOffer[];
    buildings: ConnectivityeligibilityBuilding[];
}
export interface PackxdslmigrationOfferAvailableOption {
    optional: number;
    included: number;
    name: string;
    optionalPrice?: OrderPrice;
    duration: number;
}
export interface PackxdslmigrationOfferOption {
    quantity: number;
    name: string;
}
export interface PackxdslmigrationOfferServiceToDelete {
    service: string;
    type: PackxdslServiceNameEnum;
}
export interface PackxdslmigrationSubServiceToDelete {
    type: PackxdslServiceNameEnum;
    numberToDelete: number;
    services: string[];
}
export interface PackxdslPackAdsl {
    offerPrice: OrderPrice;
    capabilities: PackxdslPackCapabilities;
    packName: string;
    offerDescription: string;
    description?: string;
}
export interface PackxdslPackCapabilities {
    canMoveAddress: boolean;
    isLegacyOffer: boolean;
}
export interface PackxdslPackDetail {
    number: string;
    description: string;
    accessname: string;
    type: DslTypeEnum;
    packname: string;
}
export interface PackxdslpromotionCodeCapabilities {
    amount: OrderPrice;
    engagement: number;
    reasonCodes: PackxdslpromotionCodeReasonCodes[];
    canGenerate: boolean;
}
export declare enum PackxdslpromotionCodeReasonCodes {
    NOMOREAVAILABLE = "noMoreAvailable",
    OFFERNOTCOMPATIBLE = "offerNotCompatible",
    SERVICENOTINOKSTATE = "serviceNotInOkState",
    STILLENGAGED = "stillEngaged",
    TASKINPROGRESS = "taskInProgress"
}
export interface PackxdslResiliationFollowUpDetail {
    registrationDate: string;
    status: string;
    needModemReturn: boolean;
    dateTodo: string;
}
export declare enum PackxdslResiliationReasonEnum {
    ADDRESSMOVE = "addressMove",
    BILLINGPROBLEMS = "billingProblems",
    CESSATIONOFACTIVITY = "cessationOfActivity",
    CHANGEOFTERMS = "changeOfTerms",
    FTTH = "ftth",
    GOTOCOMPETITOR = "goToCompetitor",
    OTHER = "other",
    TECHNICALPROBLEMS = "technicalProblems"
}
export interface PackxdslResiliationSurvey {
    type: PackxdslResiliationReasonEnum;
    comment?: string;
}
export interface PackxdslResiliationTerms {
    resiliationDate: string;
    due: OrderPrice;
    resiliationReasons: PackxdslResiliationReasonEnum[];
    minResiliationDate: string;
    engageDate?: string;
}
export interface PackxdslService {
    domain: string;
    type: PackxdslServiceNameEnum;
    id: any;
}
export interface PackxdslServiceInformation {
    used: number;
    inCreation: number;
    total: number;
    name: PackxdslServiceNameEnum;
}
export declare enum PackxdslServiceNameEnum {
    DOMAIN = "domain",
    EMAILPRO = "emailPro",
    EXCHANGEACCOUNT = "exchangeAccount",
    EXCHANGEINDIVIDUAL = "exchangeIndividual",
    EXCHANGELITE = "exchangeLite",
    EXCHANGEORGANIZATION = "exchangeOrganization",
    HOSTEDEMAIL = "hostedEmail",
    HUBIC = "hubic",
    MODEM = "modem",
    OVERTHEBOXHARDWARE = "overTheBoxHardware",
    OVERTHEBOXSERVICE = "overTheBoxService",
    SITEBUILDERFULL = "siteBuilderFull",
    SITEBUILDERSTART = "siteBuilderStart",
    VOIPALIAS = "voipAlias",
    VOIPBILLINGACCOUNT = "voipBillingAccount",
    VOIPECOFAX = "voipEcoFax",
    VOIPLINE = "voipLine",
    XDSLACCESS = "xdslAccess"
}
export interface PackxdslShippingAddress {
    cityName: string;
    address: string;
    countryCode: string;
    zipCode: string;
    shippingId: string;
    firstName: string;
    lastName: string;
}
export declare enum PackxdslShippingAddressContextEnum {
    MIGRATION = "migration",
    VOIPLINE = "voipLine"
}
export interface PackxdslSiteBuilderDomain {
    domain: string;
    defaultSubDomain: string;
}
export interface PackxdslSiteBuilderTemplate {
    previewImg: string;
    reference: string;
    name: string;
    bkId: number;
    id: number;
    thumbImage: string;
}
export interface PackxdslTask {
    updateDate: string;
    status: PackxdslTaskStatusEnum;
    id: number;
    function: string;
}
export declare enum PackxdslTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    PROBLEM = "problem",
    TODO = "todo"
}
export interface PackxdslUnpackTerms {
    renewPeriod: any;
    renewPrice: OrderPrice;
    price: OrderPrice;
    isAllowed: boolean;
}
export interface PackxdslVoIPHardware {
    url?: string;
    max?: number;
    label: string;
    deposit?: OrderPrice;
    name: string;
    image?: string;
    needShipping: boolean;
}
export interface PackxdslVoIPLineOrder {
    needPayment: boolean;
    taskIds: number[];
    orderId: number;
    orderUrl: string;
}
export interface PackxdslVoipLineService {
    billingAccount: string;
    domain: string;
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
    deleteAtExpiration: boolean;
    forced: boolean;
    period?: number;
    manualPayment?: boolean;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesService {
    engagedUpTo?: string;
    canDeleteAtExpiration: boolean;
    serviceId: number;
    contactAdmin: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    contactTech: string;
    domain: string;
    status: ServiceStateEnum;
    renewalType: ServiceRenewalTypeEnum;
    expiration: string;
    contactBilling: string;
    creation: string;
}
export declare enum DeconsolidationEnum {
    CREATENEIGHBOUR = "createNeighbour",
    CREATION = "creation",
    CREATIONNEIGHBOUR = "creationNeighbour",
    PARTIAL = "partial",
    TOTAL = "total"
}
export declare enum DslTypeEnum {
    ADSL = "adsl",
    FTTH = "ftth",
    SDSL = "sdsl",
    VDSL = "vdsl"
}
export interface EligibilityAddress {
    city: EligibilityCity;
    stair?: string;
    residence?: string;
    floor?: string;
    street?: EligibilityStreet;
    door?: string;
    owner?: string;
    building?: string;
    logo?: string;
    streetNumber?: string;
}
export interface EligibilityBookMeetingSlot {
    name: string;
    fakeMeeting: boolean;
    meetingSlot?: EligibilityMeetingSlot;
}
export interface EligibilityCity {
    name: string;
    inseeCode: string;
    zipCode: string;
    locality?: string;
}
export interface EligibilityCodeAndMessage {
    code: string;
    message: string;
}
export declare enum EligibilityLandlineStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export interface EligibilityMeetingSlot {
    uiCode: string;
    startDate: string;
    endDate: string;
}
export interface EligibilityMeetingSlots {
    meetingSlots: EligibilityMeetingSlot[];
    canBookFakeMeeting: boolean;
}
export interface EligibilityPortability {
    comments: EligibilityCodeAndMessage[];
    warnings: EligibilityCodeAndMessage[];
    underCondition: boolean;
    eligible: boolean;
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
export interface HubicHubicDetailsResponse {
    email: string;
}
export interface LineSectionLength {
    diameter: number;
    length: number;
}
export declare class PackXdsl {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(packName: string): Promise<PackxdslPackAdsl>;
    AlterThisObjectProperties(packName: string, payload: PackxdslPackAdsl): Promise<void>;
    EligibilityToMoveTheAccess(packName: string, address?: EligibilityAddress, lineNumber?: string): Promise<any>;
    MoveTheXdslAccessToAnotherAddress(keepCurrentNumber: boolean, offerCode: string, packName: string, creation?: PackxdsladdressMoveCreation, landline?: PackxdsladdressMoveLandline, moveOutDate?: string, provider?: EligibilityProviderEnum): Promise<any>;
    MoveTheFTTHAccessToAnotherAddress(buildingReference: string, floor: string, otp: boolean, packName: string, stair: string, moveOutDate?: string, otpReference?: string): Promise<any>;
    CheckIfTheResiliationCanBeCancelled(packName: string): Promise<boolean>;
    CancelTheOngoingResiliation(packName: string): Promise<void>;
    LaunchAContactChangeProcedure(packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    GetTheAvailableTldsForDomainOrder(packName: string): Promise<string[]>;
    DomainServices(packName: string): Promise<string[]>;
    ActivateADomainService(action: PackxdslDomainActionEnum, domain: string, packName: string, tld: string, authInfo?: string): Promise<PackxdslTask>;
    ListTheAvailableDomainsForTheEmailProService(packName: string): Promise<string[]>;
    CheckIfTheGivenEmailAddressIsAvailableForAnEmailProActivation(email: string, packName: string): Promise<boolean>;
    ListTheEmailProServices(packName: string): Promise<string[]>;
    ActivateAnEmailProService(email: string, packName: string, password: string): Promise<PackxdslTask>;
    Exchange2013Services(packName: string): Promise<string[]>;
    GetTheAvailableDomains(packName: string): Promise<string[]>;
    CheckIfTheEmailAddressIsAvailableForServiceCreation(email: string, packName: string): Promise<boolean>;
    ExchangeServices(packName: string): Promise<string[]>;
    ActivateAnExchangeService(email: string, packName: string, password: string): Promise<PackxdslTask>;
    ExchangeLiteServices(packName: string): Promise<string[]>;
    ActivateAExchangeLiteService(email: string, packName: string, password: string, antispam?: boolean, displayName?: string, firstName?: string, initials?: string, lastName?: string): Promise<PackxdslTask>;
    Exchange2013OrganizationServices(packName: string): Promise<string[]>;
    GetTheHostedemailAvailableDomains(packName: string): Promise<string[]>;
    HostedEmailServices(packName: string): Promise<string[]>;
    ActivateAnHostedEmailService(email: string, packName: string, password: string): Promise<PackxdslTask>;
    HubicPersoServices(packName: string): Promise<string[]>;
    DetailsAssociatedToAVoucher(domain: string, packName: string): Promise<any>;
    MigrateToTheSelectedOffer(acceptContracts: boolean, offerName: string, packName: string, buildingReference?: string, engageMonths?: number, floor?: string, mondialRelayId?: number, nicShipping?: string, options?: PackxdslmigrationOfferOption[], otp?: boolean, otpReference?: string, stair?: string, subServicesToDelete?: PackxdslmigrationOfferServiceToDelete[]): Promise<PackxdslTask>;
    GetThePossibilitiesOfMigrationOffersAvailable(packName: string): Promise<any>;
    CalculateServicesToDeleteWithNewOfferAndOptions(offerName: string, packName: string, options?: PackxdslmigrationOfferOption[]): Promise<PackxdslmigrationSubServiceToDelete[]>;
    GetInformationsAboutThePromotionCodeGeneration(packName: string): Promise<PackxdslpromotionCodeCapabilities>;
    CreatesATaskToGenerateANewPromotionCode(packName: string): Promise<PackxdslTask>;
    ResiliateThePack(packName: string, resiliationSurvey: PackxdslResiliationSurvey, resiliationDate?: string, servicesToKeep?: any): Promise<PackxdslResiliationFollowUpDetail>;
    GetInformationAboutTheOngoingResiliation(packName: string): Promise<PackxdslResiliationFollowUpDetail>;
    GetResiliationTerms(packName: string, resiliationDate?: string): Promise<PackxdslResiliationTerms>;
    InformationsAboutTheServicesIncludedInThePack(packName: string): Promise<PackxdslServiceInformation[]>;
    AllowedShippingAddressesGivenAContext(context: PackxdslShippingAddressContextEnum, packName: string): Promise<PackxdslShippingAddress[]>;
    GetTheAvailableTemplates(packName: string): Promise<PackxdslSiteBuilderTemplate[]>;
    SitebuilderFullServices(packName: string): Promise<string[]>;
    ActivateASitebuilderFullService(domain: string, packName: string, subdomain: string, templateId: number): Promise<PackxdslTask>;
    SitebuilderStartServices(packName: string): Promise<string[]>;
    ListServicesContainedInThePack(packName: string): Promise<string[]>;
    GiveTheConditionToUnpackServiceFromPack(domain: string, packName: string): Promise<PackxdslUnpackTerms>;
    TasksScheduledForThisPack(packName: string, _function?: string, status?: PackxdslTaskStatusEnum): Promise<number[]>;
    VOIPBillingAccounts(packName: string): Promise<string[]>;
    VOIPEcofaxService(packName: string): Promise<string[]>;
    ActivateAVoicefaxService(packName: string): Promise<PackxdslTask>;
    CreateANewShippingIdToBeUsedForVoipLineServiceCreation(address: string, cityName: string, firstName: string, lastName: string, packName: string, zipCode: string): Promise<number>;
    GetAvailableHardwares(packName: string): Promise<PackxdslVoIPHardware[]>;
    GetAvailableShippingAddresses(packName: string): Promise<PackxdslShippingAddress[]>;
    VOIPLineServices(packName: string): Promise<string[]>;
    ActivateAVoipLineService(hardwareNames: string[], packName: string, mondialRelayId?: string, shippingId?: string): Promise<PackxdslVoIPLineOrder>;
    XDSLAccessServices(packName: string): Promise<string[]>;
}
//# sourceMappingURL=pack.xdsl.d.ts.map