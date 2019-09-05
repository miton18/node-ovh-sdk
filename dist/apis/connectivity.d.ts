import { Client } from '../client';
export declare enum ConnectivityeligibilityActivationTypeEnum {
    ACTIVATE = "activate",
    CREATE = "create",
    CREATENEIGHBOUR = "createNeighbour"
}
export interface ConnectivityeligibilityAddress {
    stairs?: string;
    ownerName?: string;
    zipCode: string;
    housingComplex?: string;
    floor?: string;
    streetNumber?: string;
    streetCode?: string;
    streetName?: string;
    city: string;
    inseeCode: string;
    door?: string;
    building?: string;
}
export interface ConnectivityeligibilityBuilding {
    stairs: ConnectivityeligibilityBuildingStair[];
    name: string;
    type: ConnectivityeligibilityBuildingTypeEnum;
    nro?: string;
    reference: string;
}
export interface ConnectivityeligibilityBuildingStair {
    floors: string[];
    stair: string;
}
export declare enum ConnectivityeligibilityBuildingTypeEnum {
    BUILDING = "BUILDING",
    HOUSE = "HOUSE"
}
export interface ConnectivityeligibilityCity {
    inseeCode: string;
    city: string;
    zipCode: string;
    locality?: string;
}
export interface ConnectivityeligibilityCopperInfo {
    status: ConnectivityeligibilityLineStatusEnum;
    underConstruction?: boolean;
    unlistedNumber: boolean;
    availablePairs?: number;
    nra?: string;
    sectionsLengths: ConnectivityeligibilitySectionLength[];
    maxAvailablePairs?: number;
}
export interface ConnectivityeligibilityEligibilityTest {
    offers: ConnectivityeligibilityOffer[];
    eligibilityReference: string;
    endpoint: ConnectivityeligibilityEndpoint;
}
export interface ConnectivityeligibilityEndpoint {
    copperInfo?: ConnectivityeligibilityCopperInfo;
    portability?: ConnectivityeligibilityPortability;
    fiberInfo?: ConnectivityeligibilityFiberInfo;
    reference: string;
    referenceType: ConnectivityeligibilityEndpointReferenceTypeEnum;
    address: ConnectivityeligibilityAddress;
}
export declare enum ConnectivityeligibilityEndpointReferenceTypeEnum {
    BUILDING = "building",
    LINENUMBER = "lineNumber",
    OTP = "otp"
}
export interface ConnectivityeligibilityFiberInfo {
    operatorName: string;
    buildingReference: string;
    buildingName: string;
    operatorCode: string;
    nro?: string;
    buildingType: ConnectivityeligibilityBuildingTypeEnum;
}
export interface ConnectivityeligibilityLine {
    lineNumber: string;
    copperInfo: ConnectivityeligibilityCopperInfo;
    address: ConnectivityeligibilityAddress;
}
export declare enum ConnectivityeligibilityLineStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export interface ConnectivityeligibilityMeetings {
    meetingSlots: ConnectivityeligibilityMeetingSlot[];
    canBookFakeMeeting: boolean;
}
export interface ConnectivityeligibilityMeetingSlot {
    endDate: string;
    uiCode: string;
    startDate: string;
}
export interface ConnectivityeligibilityMessage {
    availabilityDate?: string;
    code: ConnectivityeligibilityMessageCodeEnum;
    message: string;
}
export declare type ConnectivityeligibilityMessageCodeEnum = '2006' | '2011' | '2102' | '2103' | '2104' | '2105' | '3009' | '3011' | '3012' | '3013' | '3014' | '3031' | '3040' | '3041' | '3043' | '3044' | '3045' | '3046' | '3047' | '3048' | '3049' | 'ATTENUATION_LIMIT' | 'COMPATIBILITY_CHECK' | 'COPPER_NOT_AVAILABLE' | 'COPPER_NOT_YET_AVAILABLE' | 'DELAY_30' | 'DELAY_7' | 'EXTERNAL_WS_UNREACHABLE' | 'FIBER_NOT_AVAILABLE' | 'FIBER_NOT_DEPLOYED_IN_BUILDING' | 'FIBER_NOT_YET_AVAILABLE' | 'FIBER_NOT_YET_DEPLOYED' | 'INCOMPATIBLE_LOCAL_LOOP' | 'NETWORK_SATURATED' | 'OTP_NOT_CONNECTABLE' | 'OTP_NOT_MARKETABLE' | 'PAIRS_SATURATION' | 'PRODUCT_NOT_AVAILABLE' | 'PRODUCT_NOT_YET_AVAILABLE' | 'TOO_MUCH_ATTENUATION' | 'UNCERTAIN_DATA';
export interface ConnectivityeligibilityOffer {
    product: ConnectivityeligibilityOfferProduct;
    eligibility: ConnectivityeligibilityOfferEligibility;
}
export interface ConnectivityeligibilityOfferEligibility {
    activationTypes: ConnectivityeligibilityActivationTypeEnum[];
    underConditions: ConnectivityeligibilityMessage[];
    estimatedDownloadRate?: any;
    estimatedUploadRate?: any;
    eligible: boolean;
    reasons: ConnectivityeligibilityMessage[];
}
export interface ConnectivityeligibilityOfferProduct {
    name: string;
    type: ConnectivityeligibilityOfferProductTypeEnum;
    code: string;
    uploadRate: any;
    pairs?: number;
    guaranteed: boolean;
    unbundlingType?: ConnectivityeligibilityOfferProductUnbundlingTypeEnum;
    downloadRate: any;
    grt: string[];
    provider: ConnectivityeligibilityOfferProductProviderEnum;
}
export declare enum ConnectivityeligibilityOfferProductProviderEnum {
    AXIONE = "AXIONE",
    KOSC = "KOSC",
    ORANGE = "ORANGE",
    SFR = "SFR"
}
export declare enum ConnectivityeligibilityOfferProductTypeEnum {
    ADSL = "ADSL",
    FTTH = "FTTH",
    SDSL = "SDSL",
    VDSL = "VDSL"
}
export declare enum ConnectivityeligibilityOfferProductUnbundlingTypeEnum {
    FULL = "full",
    PARTIAL = "partial"
}
export interface ConnectivityeligibilityPortability {
    quarantineEndDate?: string;
    type?: ConnectivityeligibilityPortabilityTypeEnum;
    eligibility: ConnectivityeligibilityPortabilityEligibility;
}
export interface ConnectivityeligibilityPortabilityEligibility {
    eligible: boolean;
    underConditions: ConnectivityeligibilityMessage[];
    reasons: ConnectivityeligibilityMessage[];
}
export declare enum ConnectivityeligibilityPortabilityTypeEnum {
    PORTIN = "portin",
    PORTINBACK = "portinback",
    PORTOUT = "portout",
    SUBSEQUENT = "subsequent",
    SUBSQUENTPORTIN = "subsquentportin"
}
export interface ConnectivityeligibilitySectionLength {
    diameter: number;
    length: number;
}
export interface ConnectivityeligibilityStreet {
    streetName: string;
    streetCode: string;
}
export interface ConnectivitymonitoringGenericIncident {
    nra: string[];
    operators: ConnectivityOperatorEnum[];
    creationDate: string;
    id: number;
    taskId?: number;
    comment?: string;
    status: ConnectivitymonitoringGenericIncidentStatusEnum;
    endDate?: string;
    departments: string[];
}
export declare enum ConnectivitymonitoringGenericIncidentStatusEnum {
    DETECTED = "detected",
    VALIDATED = "validated",
    CLOSED = "closed"
}
export declare enum ConnectivityOperatorEnum {
    OVH = "OVH",
    KOSC = "KOSC",
    SFR = "SFR",
    ORANGE = "ORANGE",
    AXIONE = "AXIONE"
}
export interface AsyncTask<T> {
    status: AsyncTaskStatusEnum;
    error?: string;
    result?: T;
}
export interface AsyncTaskArray<T> {
    error?: string;
    result?: T[];
    status: AsyncTaskStatusEnum;
}
export declare enum AsyncTaskStatusEnum {
    ERROR = "error",
    OK = "ok",
    PENDING = "pending"
}
export declare class Connectivity {
    private client;
    constructor(client: Client);
    GetTheDetailsForABuilding(building: string): Promise<any>;
    GetAllBuildingsForASpecificAddress(streetCode: string, streetNumber: string): Promise<any>;
    GetBuildingReferencesFromAGivenLineNumber(lineNumber: string, status: ConnectivityeligibilityLineStatusEnum): Promise<any>;
    GetAllLocalitiesLinkedToAZipCode(zipCode: string): Promise<any>;
    SearchForActiveAndInactiveLinesAtAnAddressItWillSearchForActiveLinesOnlyIfTheOwnerNameIsSpecified(streetCode: string, streetNumber: string, ownerName?: string): Promise<any>;
    SearchForAvailableLineCreationMeetingTimeSlotsForCopperOnly(eligibilityReference: string, productCode: string): Promise<any>;
    GetTheAvailableStreetNumbersForAGivenStreetCodeUniqueIdentifierOfAStreetYouCanGetWithTheMethodPOSTConnectivityeligibilitysearchstreets(streetCode: string): Promise<any>;
    GetAllStreetLinkedToALocality(inseeCode: string): Promise<any>;
    GetAnEligibilityByItsReference(eligibilityReference: string): Promise<ConnectivityeligibilityEligibilityTest>;
    DoAnEligibilityForAnAddressIfNoLineExist(streetCode: string, streetNumber: string): Promise<any>;
    DoAnEligibilityForAnAddressIfNoLineExistPartnersOnly(streetCode: string, streetNumber: string): Promise<any>;
    DoAnEligibilityTestOnABuildingForFiberOnly(building: string): Promise<any>;
    DoAnEligibilityTestOnALineNumberForCopperOnly(lineNumber: string, status: ConnectivityeligibilityLineStatusEnum): Promise<any>;
    DoAnEligibilityTestOnALineNumberForCopperOnlyPartnersOnly(lineNumber: string, status: ConnectivityeligibilityLineStatusEnum): Promise<any>;
    DoAnEligibilityTestOnAnOTPOpticalTerminationPanelForFiberOnly(otp: string): Promise<any>;
    ListDetectedValidatedAndRecentlyClosedGenericIncidentsForPartnersOnly(creationDate?: string, endDate?: string, status?: ConnectivitymonitoringGenericIncidentStatusEnum): Promise<ConnectivitymonitoringGenericIncident[]>;
    ListValidatedAndRecentlyClosedGenericIncidents(creationDate?: string, endDate?: string, status?: ConnectivitymonitoringGenericIncidentStatusEnum): Promise<ConnectivitymonitoringGenericIncident[]>;
}
//# sourceMappingURL=connectivity.d.ts.map