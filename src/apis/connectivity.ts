// GENERATED SDK for connectivity API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Activation type, for copper only
 */
export enum ConnectivityeligibilityActivationType {
  ACTIVATE = 'activate',
  CREATE = 'create',
  CREATENEIGHBOUR = 'createNeighbour'
}

/**
 * Address
 */
export interface ConnectivityeligibilityAddress {
  building?: string
  city: string
  door?: string
  floor?: string
  housingComplex?: string
  inseeCode: string
  ownerName?: string
  stairs?: string
  streetCode?: string
  streetName?: string
  streetNumber?: string
  zipCode: string
}

/**
 * Details of a Building
 */
export interface ConnectivityeligibilityBuilding {
  name: string
  nro?: string
  reference: string
  stairs: ConnectivityeligibilityBuildingStair[]
  type: ConnectivityeligibilityBuildingType
}

/**
 * Stair details of a Building
 */
export interface ConnectivityeligibilityBuildingStair {
  floors: string[]
  stair: string
}

/*
 * Building type
 */
export enum ConnectivityeligibilityBuildingType {
  BUILDING = 'BUILDING',
  HOUSE = 'HOUSE'
}

/**
 * Represent a city
 */
export interface ConnectivityeligibilityCity {
  city: string
  inseeCode: string
  locality?: string
  zipCode: string
}

/**
 * Copper informations
 */
export interface ConnectivityeligibilityCopperInfo {
  availablePairs?: number
  maxAvailablePairs?: number
  nra?: string
  sectionsLengths: ConnectivityeligibilitySectionLength[]
  status: ConnectivityeligibilityLineStatus
  underConstruction?: boolean
  unlistedNumber: boolean
}

/**
 * Eligibility test results
 */
export interface ConnectivityeligibilityEligibilityTest {
  eligibilityReference: string
  endpoint: ConnectivityeligibilityEndpoint
  offers: ConnectivityeligibilityOffer[]
}

/**
 * Endpoint informations
 */
export interface ConnectivityeligibilityEndpoint {
  address: ConnectivityeligibilityAddress
  copperInfo?: ConnectivityeligibilityCopperInfo
  fiberInfo?: ConnectivityeligibilityFiberInfo
  portability?: ConnectivityeligibilityPortability
  reference: string
  referenceType: ConnectivityeligibilityEndpointReferenceType
}

/*
 * Endpoint reference type
 */
export enum ConnectivityeligibilityEndpointReferenceType {
  BUILDING = 'building',
  LINENUMBER = 'lineNumber',
  OTP = 'otp'
}

/**
 * Fiber informations
 */
export interface ConnectivityeligibilityFiberInfo {
  buildingName: string
  buildingReference: string
  buildingType: ConnectivityeligibilityBuildingType
  nro?: string
  operatorCode: string
  operatorName: string
}

/**
 * Copper line details
 */
export interface ConnectivityeligibilityLine {
  address: ConnectivityeligibilityAddress
  copperInfo: ConnectivityeligibilityCopperInfo
  lineNumber: string
}

/*
 * Line status
 */
export enum ConnectivityeligibilityLineStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

/**
 * List of available meeting time slots
 */
export interface ConnectivityeligibilityMeetings {
  canBookFakeMeeting: boolean
  meetingSlots: ConnectivityeligibilityMeetingSlot[]
}

/**
 * Represents a time slot for a meeting
 */
export interface ConnectivityeligibilityMeetingSlot {
  endDate: string
  startDate: string
  uiCode: string
}

/**
 * Message
 */
export interface ConnectivityeligibilityMessage {
  availabilityDate?: string
  code: ConnectivityeligibilityMessageCode
  message: string
}

/*
 * Message codes
 */
export type ConnectivityeligibilityMessageCode = '2006' | '2011' | '2102' | '2103' | '2104' | '2105' | '3009' | '3011' | '3012' | '3013' | '3014' | '3031' | '3040' | '3041' | '3043' | '3044' | '3045' | '3046' | '3047' | '3048' | '3049' | 'ATTENUATION_LIMIT' | 'COMPATIBILITY_CHECK' | 'COPPER_NOT_AVAILABLE' | 'COPPER_NOT_YET_AVAILABLE' | 'DELAY_30' | 'DELAY_7' | 'EXTERNAL_WS_UNREACHABLE' | 'FIBER_NOT_AVAILABLE' | 'FIBER_NOT_DEPLOYED_IN_BUILDING' | 'FIBER_NOT_YET_AVAILABLE' | 'FIBER_NOT_YET_DEPLOYED' | 'INCOMPATIBLE_LOCAL_LOOP' | 'NETWORK_SATURATED' | 'OTP_NOT_CONNECTABLE' | 'OTP_NOT_MARKETABLE' | 'PAIRS_SATURATION' | 'PRODUCT_NOT_AVAILABLE' | 'PRODUCT_NOT_YET_AVAILABLE' | 'TOO_MUCH_ATTENUATION' | 'UNCERTAIN_DATA'

/**
 * Offer
 */
export interface ConnectivityeligibilityOffer {
  eligibility: ConnectivityeligibilityOfferEligibility
  product: ConnectivityeligibilityOfferProduct
}

/**
 * Offer eligibility
 */
export interface ConnectivityeligibilityOfferEligibility {
  activationTypes: ConnectivityeligibilityActivationTypeEnum[]
  eligible: boolean
  estimatedDownloadRate?: any
  estimatedUploadRate?: any
  reasons: ConnectivityeligibilityMessage[]
  underConditions: ConnectivityeligibilityMessage[]
}

/**
 * Offer product
 */
export interface ConnectivityeligibilityOfferProduct {
  code: string
  downloadRate: any
  grt: string[]
  guaranteed: boolean
  name: string
  pairs?: number
  provider: ConnectivityeligibilityOfferProductProvider
  type: ConnectivityeligibilityOfferProductType
  unbundlingType?: ConnectivityeligibilityOfferProductUnbundlingType
  uploadRate: any
}

/*
 * Offer product provider
 */
export enum ConnectivityeligibilityOfferProductProvider {
  AXIONE = 'AXIONE',
  KOSC = 'KOSC',
  ORANGE = 'ORANGE',
  SFR = 'SFR'
}

/*
 * Offer product type
 */
export enum ConnectivityeligibilityOfferProductType {
  ADSL = 'ADSL',
  FTTH = 'FTTH',
  SDSL = 'SDSL',
  VDSL = 'VDSL'
}

/*
 * Offer product unbundling type
 */
export enum ConnectivityeligibilityOfferProductUnbundlingType {
  FULL = 'full',
  PARTIAL = 'partial'
}

/**
 * Portability details of the line number
 */
export interface ConnectivityeligibilityPortability {
  eligibility: ConnectivityeligibilityPortabilityEligibility
  quarantineEndDate?: string
  type?: ConnectivityeligibilityPortabilityType
}

/**
 * Portability eligibility
 */
export interface ConnectivityeligibilityPortabilityEligibility {
  eligible: boolean
  reasons: ConnectivityeligibilityMessage[]
  underConditions: ConnectivityeligibilityMessage[]
}

/*
 * Portability type
 */
export enum ConnectivityeligibilityPortabilityType {
  PORTIN = 'portin',
  PORTINBACK = 'portinback',
  PORTOUT = 'portout',
  SUBSEQUENT = 'subsequent',
  SUBSQUENTPORTIN = 'subsquentportin'
}

/**
 * Section length of a copper line
 */
export interface ConnectivityeligibilitySectionLength {
  diameter: number
  length: number
}

/**
 * Details of a street
 */
export interface ConnectivityeligibilityStreet {
  streetCode: string
  streetName: string
}

/**
 * Generic incident structure
 */
export interface ConnectivitymonitoringGenericIncident {
  comment?: string
  creationDate: string
  departments: string[]
  endDate?: string
  id: number
  nra: string[]
  operators: ConnectivityOperatorEnum[]
  status: ConnectivitymonitoringGenericIncidentStatus
  taskId?: number
}

/*
 * Generic incident status
 */
export enum ConnectivitymonitoringGenericIncidentStatus {
  DETECTED = 'detected',
  VALIDATED = 'validated',
  CLOSED = 'closed'
}

/*
 * Operator
 */
export enum ConnectivityOperator {
  OVH = 'OVH',
  KOSC = 'KOSC',
  SFR = 'SFR',
  ORANGE = 'ORANGE',
  AXIONE = 'AXIONE'
}

/**
 * Async task
 */
export interface AsyncTask<T> {
  error?: string
  result?: T
  status: AsyncTaskStatus
}

/**
 * Async task array
 */
export interface AsyncTaskArray<T> {
  error?: string
  result?: T[]
  status: AsyncTaskStatus
}

/*
 * AsyncTask status
 */
export enum AsyncTaskStatus {
  ERROR = 'error',
  OK = 'ok',
  PENDING = 'pending'
}


export class Connectivity {
  constructor(private client: Client) {}

  /**
   * Get the details for a building [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/buildingDetails#POST)
   */
  GetTheDetailsForABuilding(building: string): Promise<any> {
    let url = `/connectivity/eligibility/search/buildingDetails`

    return this.client.request<any>('POST', url, {building})
  }

  /**
   * Get all buildings for a specific address [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/buildings#POST)
   */
  GetAllBuildingsForASpecificAddress(streetCode: string, streetNumber: string): Promise<any> {
    let url = `/connectivity/eligibility/search/buildings`

    return this.client.request<any>('POST', url, {streetCode, streetNumber})
  }

  /**
   * Get building references from a given line number [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/buildingsByLine#POST)
   */
  GetBuildingReferencesFromAGivenLineNumber(lineNumber: string, status: ConnectivityeligibilityLineStatus): Promise<any> {
    let url = `/connectivity/eligibility/search/buildingsByLine`

    return this.client.request<any>('POST', url, {lineNumber, status})
  }

  /**
   * Get all localities linked to a zip code [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/cities#POST)
   */
  GetAllLocalitiesLinkedToAZipCode(zipCode: string): Promise<any> {
    let url = `/connectivity/eligibility/search/cities`

    return this.client.request<any>('POST', url, {zipCode})
  }

  /**
   * Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/lines#POST)
   */
  SearchForActiveAndInactiveLinesAtAnAddressItWillSearchForActiveLinesOnlyIfTheOwnerNameIsSpecified(streetCode: string, streetNumber: string, ownerName?: string): Promise<any> {
    let url = `/connectivity/eligibility/search/lines`

    return this.client.request<any>('POST', url, {streetCode, streetNumber, ownerName})
  }

  /**
   * Search for available line creation meeting time slots, for copper only [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/meetings#POST)
   */
  SearchForAvailableLineCreationMeetingTimeSlotsForCopperOnly(eligibilityReference: string, productCode: string): Promise<any> {
    let url = `/connectivity/eligibility/search/meetings`

    return this.client.request<any>('POST', url, {eligibilityReference, productCode})
  }

  /**
   * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets) [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/streetNumbers#POST)
   */
  GetTheAvailableStreetNumbersForAGivenStreetCodeUniqueIdentifierOfAStreetYouCanGetWithTheMethodPOSTConnectivityeligibilitysearchstreets(streetCode: string): Promise<any> {
    let url = `/connectivity/eligibility/search/streetNumbers`

    return this.client.request<any>('POST', url, {streetCode})
  }

  /**
   * Get all street linked to a locality [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/streets#POST)
   */
  GetAllStreetLinkedToALocality(inseeCode: string): Promise<any> {
    let url = `/connectivity/eligibility/search/streets`

    return this.client.request<any>('POST', url, {inseeCode})
  }

  /**
   * Get an eligibility by its reference [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test#GET)
   */
  GetAnEligibilityByItsReference(eligibilityReference: string): Promise<ConnectivityeligibilityEligibilityTest> {
    let url = `/connectivity/eligibility/test?`

    const queryParams = new QueryParams()
    if (eligibilityReference) { queryParams.set('eligibilityReference', eligibilityReference) }

    return this.client.request<ConnectivityeligibilityEligibilityTest>('GET', url+queryParams.toString())
  }

  /**
   * Do an eligibility for an address, if no line exist [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/address#POST)
   */
  DoAnEligibilityForAnAddressIfNoLineExist(streetCode: string, streetNumber: string): Promise<any> {
    let url = `/connectivity/eligibility/test/address`

    return this.client.request<any>('POST', url, {streetCode, streetNumber})
  }

  /**
   * Do an eligibility for an address, if no line exist. Partners only. [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/address/partners#POST)
   */
  DoAnEligibilityForAnAddressIfNoLineExistPartnersOnly(streetCode: string, streetNumber: string): Promise<any> {
    let url = `/connectivity/eligibility/test/address/partners`

    return this.client.request<any>('POST', url, {streetCode, streetNumber})
  }

  /**
   * Do an eligibility test on a building, for fiber only [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/building#POST)
   */
  DoAnEligibilityTestOnABuildingForFiberOnly(building: string): Promise<any> {
    let url = `/connectivity/eligibility/test/building`

    return this.client.request<any>('POST', url, {building})
  }

  /**
   * Do an eligibility test on a line number, for copper only [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/line#POST)
   */
  DoAnEligibilityTestOnALineNumberForCopperOnly(lineNumber: string, status: ConnectivityeligibilityLineStatus): Promise<any> {
    let url = `/connectivity/eligibility/test/line`

    return this.client.request<any>('POST', url, {lineNumber, status})
  }

  /**
   * Do an eligibility test on a line number, for copper only. Partners only. [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/line/partners#POST)
   */
  DoAnEligibilityTestOnALineNumberForCopperOnlyPartnersOnly(lineNumber: string, status: ConnectivityeligibilityLineStatus): Promise<any> {
    let url = `/connectivity/eligibility/test/line/partners`

    return this.client.request<any>('POST', url, {lineNumber, status})
  }

  /**
   * Do an eligibility test on an OTP (Optical Termination Panel), for fiber only [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/otp#POST)
   */
  DoAnEligibilityTestOnAnOTPOpticalTerminationPanelForFiberOnly(otp: string): Promise<any> {
    let url = `/connectivity/eligibility/test/otp`

    return this.client.request<any>('POST', url, {otp})
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/monitoring/genericIncident/partners#GET)
   */
  ListDetectedValidatedAndRecentlyClosedGenericIncidentsForPartnersOnly(creationDate?: string, endDate?: string, status?: ConnectivitymonitoringGenericIncidentStatus): Promise<ConnectivitymonitoringGenericIncident[]> {
    let url = `/connectivity/monitoring/genericIncident/partners?`

    const queryParams = new QueryParams()
    if (creationDate) { queryParams.set('creationDate', creationDate.toString()) }
    if (endDate) { queryParams.set('endDate', endDate.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<ConnectivitymonitoringGenericIncident[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/monitoring/genericIncident/public#GET)
   */
  ListValidatedAndRecentlyClosedGenericIncidents(creationDate?: string, endDate?: string, status?: ConnectivitymonitoringGenericIncidentStatus): Promise<ConnectivitymonitoringGenericIncident[]> {
    let url = `/connectivity/monitoring/genericIncident/public?`

    const queryParams = new QueryParams()
    if (creationDate) { queryParams.set('creationDate', creationDate.toString()) }
    if (endDate) { queryParams.set('endDate', endDate.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<ConnectivitymonitoringGenericIncident[]>('GET', url+queryParams.toString())
  }

}
