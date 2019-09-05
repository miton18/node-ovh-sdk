// GENERATED SDK for newAccount API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Countries a nichandle can choose
 */
export enum NichandleCountry {
  AC = 'AC',
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AO = 'AO',
  AQ = 'AQ',
  AR = 'AR',
  AS = 'AS',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DG = 'DG',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EA = 'EA',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FM = 'FM',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GU = 'GU',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  IC = 'IC',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MH = 'MH',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  PW = 'PW',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TA = 'TA',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  UNKNOWN = 'UNKNOWN',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  XK = 'XK',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW'
}

/**
 * Describe all rules for a given field
 */
export interface NichandleCreationRule {
  defaultValue?: string
  examples?: string[]
  fieldName?: string
  in?: string[]
  mandatory: boolean
  prefix?: string
  regularExpression?: string
}

/**
 * Describe rules foreach field in order to create a nic
 */
export interface NichandleCreationRules {
  address: NichandleCreationRule
  area: NichandleCreationRule
  birthCity: NichandleCreationRule
  birthDay: NichandleCreationRule
  city: NichandleCreationRule
  companyNationalIdentificationNumber: NichandleCreationRule
  corporationType: NichandleCreationRule
  country: NichandleCreationRule
  email: NichandleCreationRule
  fax: NichandleCreationRule
  firstname: NichandleCreationRule
  italianSDI: NichandleCreationRule
  language: NichandleCreationRule
  legalform: NichandleCreationRule
  name: NichandleCreationRule
  nationalIdentificationNumber: NichandleCreationRule
  organisation: NichandleCreationRule
  ovhCompany: NichandleCreationRule
  ovhSubsidiary: NichandleCreationRule
  phone: NichandleCreationRule
  phoneCountry: NichandleCreationRule
  sex: NichandleCreationRule
  spareEmail: NichandleCreationRule
  vat: NichandleCreationRule
  zip: NichandleCreationRule
}

/*
 * Action a nichandle can perform on his account.
 */
export enum NichandleCreationRulesAction {
  CREATE = 'create',
  UPDATE = 'update'
}

/*
 * All genders a person can choose
 */
export enum NichandleGender {
  FEMALE = 'female',
  MALE = 'male'
}

/*
 * Languages a nichandle can choose
 */
export enum NichandleLanguage {
  CS_CZ = 'cs_CZ',
  DE_DE = 'de_DE',
  EN_AU = 'en_AU',
  EN_CA = 'en_CA',
  EN_GB = 'en_GB',
  EN_IE = 'en_IE',
  EN_US = 'en_US',
  ES_ES = 'es_ES',
  FI_FI = 'fi_FI',
  FR_CA = 'fr_CA',
  FR_FR = 'fr_FR',
  FR_MA = 'fr_MA',
  FR_SN = 'fr_SN',
  FR_TN = 'fr_TN',
  IT_IT = 'it_IT',
  LT_LT = 'lt_LT',
  NL_NL = 'nl_NL',
  PL_PL = 'pl_PL',
  PT_PT = 'pt_PT'
}

/*
 * Legal forms a nichandle can be registered as
 */
export enum NichandleLegalForm {
  ADMINISTRATION = 'administration',
  ASSOCIATION = 'association',
  CORPORATION = 'corporation',
  INDIVIDUAL = 'individual',
  OTHER = 'other',
  PERSONALCORPORATION = 'personalcorporation'
}

/**
 * Newly created OVH identifier and a login token for the API
 */
export interface NichandleNewAccountAndToken {
  consumerKey?: string
  ovhIdentifier: string
}

/*
 * OVH subsidiaries
 */
export enum NichandleOvhCompany {
  KIMSUFI = 'kimsufi',
  OVH = 'ovh',
  SOYOUSTART = 'soyoustart'
}

/*
 * OVH subsidiaries
 */
export enum NichandleOvhSubsidiary {
  ASIA = 'ASIA',
  AU = 'AU',
  CA = 'CA',
  CZ = 'CZ',
  DE = 'DE',
  ES = 'ES',
  EU = 'EU',
  FI = 'FI',
  FR = 'FR',
  GB = 'GB',
  IE = 'IE',
  IT = 'IT',
  LT = 'LT',
  MA = 'MA',
  NL = 'NL',
  PL = 'PL',
  PT = 'PT',
  QC = 'QC',
  SG = 'SG',
  SN = 'SN',
  TN = 'TN',
  US = 'US',
  WE = 'WE',
  WS = 'WS'
}

/**
 * A contract
 */
export interface OrderContract {
  content: string
  name: string
  url: string
}


export class NewAccount {
  constructor(private client: Client) {}

  /**
   * Create a new OVH identifier [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount#POST)
   */
  CreateANewOVHIdentifier(country: NichandleCountry, email: string, legalform: NichandleLegalForm, ovhCompany: NichandleOvhCompany, ovhSubsidiary: NichandleOvhSubsidiary, address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, fax?: string, firstname?: string, italianSDI?: string, language?: NichandleLanguage, name?: string, nationalIdentificationNumber?: string, organisation?: string, phone?: string, phoneCountry?: NichandleCountry, sex?: NichandleGender, spareEmail?: string, vat?: string, zip?: string): Promise<NichandleNewAccountAndToken> {
    let url = `/newAccount`

    return this.client.request<NichandleNewAccountAndToken>('POST', url, {country, email, legalform, ovhCompany, ovhSubsidiary, address, area, birthCity, birthDay, city, companyNationalIdentificationNumber, corporationType, fax, firstname, italianSDI, language, name, nationalIdentificationNumber, organisation, phone, phoneCountry, sex, spareEmail, vat, zip})
  }

  /**
   * All available areas for a given country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/area#GET)
   */
  AllAvailableAreasForAGivenCountry(country: NichandleCountry): Promise<string[]> {
    let url = `/newAccount/area?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Returns the contracts that governs the creation of an OVH identifier [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/contracts#GET)
   */
  ReturnsTheContractsThatGovernsTheCreationOfAnOVHIdentifier(company: NichandleOvhCompany, subsidiary: NichandleOvhSubsidiary): Promise<OrderContract[]> {
    let url = `/newAccount/contracts?`

    const queryParams = new QueryParams()
    if (company) { queryParams.set('company', company.toString()) }
    if (subsidiary) { queryParams.set('subsidiary', subsidiary.toString()) }

    return this.client.request<OrderContract[]>('GET', url+queryParams.toString())
  }

  /**
   * All available corporation types for a given country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/corporationType#GET)
   */
  AllAvailableCorporationTypesForAGivenCountry(country: NichandleCountry): Promise<string[]> {
    let url = `/newAccount/corporationType?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * All available countries for an ovh company and an ovh subsidiary [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/countries#GET)
   */
  AllAvailableCountriesForAnOvhCompanyAndAnOvhSubsidiary(ovhCompany: NichandleOvhCompany, ovhSubsidiary: NichandleOvhSubsidiary): Promise<NichandleCountryEnum[]> {
    let url = `/newAccount/countries?`

    const queryParams = new QueryParams()
    if (ovhCompany) { queryParams.set('ovhCompany', ovhCompany.toString()) }
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<NichandleCountryEnum[]>('GET', url+queryParams.toString())
  }

  /**
   * Give all the rules to follow in order to create an OVH identifier [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/creationRules#GET)
   */
  GiveAllTheRulesToFollowInOrderToCreateAnOVHIdentifier(country: NichandleCountry, legalform: NichandleLegalForm, ovhCompany: NichandleOvhCompany, ovhSubsidiary: NichandleOvhSubsidiary): Promise<NichandleCreationRules> {
    let url = `/newAccount/creationRules?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (legalform) { queryParams.set('legalform', legalform.toString()) }
    if (ovhCompany) { queryParams.set('ovhCompany', ovhCompany.toString()) }
    if (ovhSubsidiary) { queryParams.set('ovhSubsidiary', ovhSubsidiary.toString()) }

    return this.client.request<NichandleCreationRules>('GET', url+queryParams.toString())
  }

  /**
   * All available legal forms for a given country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/legalform#GET)
   */
  AllAvailableLegalFormsForAGivenCountry(country: NichandleCountry): Promise<string[]> {
    let url = `/newAccount/legalform?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Give all the rules to follow in order to create and update an OVH identifier [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/rules#POST)
   */
  GiveAllTheRulesToFollowInOrderToCreateAndUpdateAnOVHIdentifier(action?: NichandleCreationRulesAction, address?: string, area?: string, birthCity?: string, birthDay?: string, city?: string, companyNationalIdentificationNumber?: string, corporationType?: string, country?: NichandleCountry, email?: string, fax?: string, firstname?: string, italianSDI?: string, language?: NichandleLanguage, legalform?: NichandleLegalForm, name?: string, nationalIdentificationNumber?: string, organisation?: string, ovhCompany?: NichandleOvhCompany, ovhSubsidiary?: NichandleOvhSubsidiary, phone?: string, phoneCountry?: NichandleCountry, sex?: NichandleGender, spareEmail?: string, vat?: string, zip?: string): Promise<NichandleCreationRule[]> {
    let url = `/newAccount/rules`

    return this.client.request<NichandleCreationRule[]>('POST', url, {action, address, area, birthCity, birthDay, city, companyNationalIdentificationNumber, corporationType, country, email, fax, firstname, italianSDI, language, legalform, name, nationalIdentificationNumber, organisation, ovhCompany, ovhSubsidiary, phone, phoneCountry, sex, spareEmail, vat, zip})
  }

}
