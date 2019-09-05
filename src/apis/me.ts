// GENERATED SDK for me API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * The current state of a contract agreement
 */
export enum AgreementsAgreementState {
  KO = 'ko',
  OBSOLETE = 'obsolete',
  OK = 'ok',
  TODO = 'todo'
}

/**
 * Contract of service
 */
export interface AgreementsContract {
  active: boolean
  date: string
  name: string
  pdf: string
  text: string
}

/**
 * Contract agreement
 */
export interface AgreementsContractAgreement {
  agreed: AgreementsAgreementState
  contractId: number
  date: string
  id: number
}

/**
 * API Application
 */
export interface Application {
  applicationId: number
  applicationKey: string
  description: string
  name: string
  status: ApplicationStatus
}

/*
 * List of state of an Api Application
 */
export enum ApplicationStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  INACTIVE = 'inactive',
  TRUSTED = 'trusted'
}

/**
 * API Credential
 */
export interface Credential {
  applicationId: number
  creation: string
  credentialId: number
  expiration?: string
  lastUse?: string
  ovhSupport: boolean
  rules: AuthAccessRule[]
  status: AuthCredentialState
}

/**
 * API Log
 */
export interface Log {
  account: string
  date: string
  ip?: string
  logId: number
  method: HttpMethod
  path: string
  route: string
}

/**
 * Access rule required for the application
 */
export interface AuthAccessRule {
  method: HttpMethod
  path: string
}

/*
 * All states a Credential can be in
 */
export enum AuthCredentialState {
  EXPIRED = 'expired',
  PENDINGVALIDATION = 'pendingValidation',
  REFUSED = 'refused',
  VALIDATED = 'validated'
}

/**
 * Available automatic payment means
 */
export interface BillingAutomaticPaymentMean {
  bankAccount: boolean
  creditCard: boolean
  deferredPaymentAccount: boolean
  paypal: boolean
}

/**
 * SEPA bank account info
 */
export interface BillingBankAccount {
  bic: string
  creationDate: string
  defaultPaymentMean: boolean
  description?: string
  iban: string
  icon?: BillingpaymentMethodIconData
  id: number
  mandateSignatureDate?: string
  ownerAddress: string
  ownerName: string
  state: BillingBankAccountState
  uniqueReference: string
  validationDocumentLink?: string
}

/*
 * List of bank account states
 */
export enum BillingBankAccountState {
  BLOCKEDFORINCIDENTS = 'blockedForIncidents',
  PENDINGVALIDATION = 'pendingValidation',
  VALID = 'valid'
}

/**
 * Details about a Bill
 */
export interface BillingBill {
  billId: string
  date: string
  orderId: number
  password: string
  pdfUrl: string
  priceWithoutTax: OrderPrice
  priceWithTax: OrderPrice
  tax: OrderPrice
  url: string
}

/**
 * Information about a Bill entry
 */
export interface BillingBillDetail {
  billDetailId: string
  description: string
  domain: string
  periodEnd?: string
  periodStart?: string
  quantity: string
  totalPrice: OrderPrice
  unitPrice: OrderPrice
}

/*
 * billing task status
 */
export enum BillingBillingTaskStatus {
  CANCELLED = 'cancelled',
  CUSTOMERERROR = 'customerError',
  DOING = 'doing',
  DONE = 'done',
  INIT = 'init',
  OVHERROR = 'ovhError',
  TODO = 'todo'
}

/**
 * Credit balance
 */
export interface BillingcreditBalance {
  amount: OrderPrice
  balanceDetails: BillingcreditbalanceBalanceDetail[]
  balanceName: string
  booked: BillingcreditbalanceBookedMovement[]
  creationDate: string
  expiring: BillingcreditbalanceExpiringMovement[]
  expiringSummary: BillingcreditbalanceExpiringMovement[]
  lastUpdate: string
  type: BillingcreditbalanceType
}

/**
 * Part of a balance
 */
export interface BillingcreditbalanceBalanceDetail {
  amount: OrderPrice
  serviceId?: number
}

/**
 * Movement already booked on orders
 */
export interface BillingcreditbalanceBookedMovement {
  amount: OrderPrice
  orderId: number
}

/**
 * Movement expiring soon
 */
export interface BillingcreditbalanceExpiringMovement {
  amount: OrderPrice
  creationDate: string
  expirationDate: string
  lastUpdate: string
  sourceObject: BillingcreditbalancemovementSubObject
}

/**
 * Credit balance
 */
export interface BillingcreditbalanceMovement {
  amount: OrderPrice
  balanceName: string
  creationDate: string
  expirationDate?: string
  lastUpdate: string
  movementId: number
  orderId?: number
  sourceObject: BillingcreditbalancemovementSubObject
  type: string
}

/**
 * Movement sub object
 */
export interface BillingcreditbalancemovementSubObject {
  id?: string
  name?: string
}

/*
 * Balance type
 */
export enum BillingcreditbalanceType {
  PREPAID_ACCOUNT = 'PREPAID_ACCOUNT',
  VOUCHER = 'VOUCHER',
  DEPOSIT = 'DEPOSIT',
  BONUS = 'BONUS'
}

/**
 * Credit balance applied on an Order
 */
export interface BillingCreditBalance {
  amount: OrderPrice
  balanceName: string
}

/**
 * Credit card informations
 */
export interface BillingCreditCard {
  defaultPaymentMean: boolean
  description?: string
  expirationDate: string
  icon?: BillingpaymentMethodIconData
  id: number
  number: string
  state: BillingCreditCardState
  threeDsValidated: boolean
  type: string
}

/*
 * State of you credit card
 */
export enum BillingCreditCardState {
  EXPIRED = 'expired',
  TOOMANYFAILURES = 'tooManyFailures',
  VALID = 'valid'
}

/**
 * Deferred payment account info
 */
export interface BillingDeferredPaymentAccount {
  creationDate: string
  defaultPaymentMean: boolean
  description?: string
  icon?: BillingpaymentMethodIconData
  id: number
  label?: string
  state: BillingDeferredPaymentAccountStatus
}

/*
 * Status of your deferred invoice payment account
 */
export enum BillingDeferredPaymentAccountStatus {
  VALID = 'valid'
}

/**
 * Details about a deposit
 */
export interface BillingDeposit {
  amount: OrderPrice
  date: string
  depositId: string
  orderId: number
  password: string
  paymentInfo?: DebtassociatedObjectPaymentInfo
  pdfUrl: string
  url: string
}

/**
 * Information about a Deposit entry
 */
export interface BillingDepositDetail {
  depositDetailId: string
  description: string
  domain: string
  quantity: string
  totalPrice: OrderPrice
  unitPrice: OrderPrice
}

/**
 * Balance of the fidelity account
 */
export interface BillingFidelityAccount {
  alertThreshold?: number
  balance: number
  canBeCredited: boolean
  lastUpdate: string
  openDate: string
}

/*
 * Operations a fidelity account movement can represent
 */
export enum BillingfidelityAccountOperation {
  BONUS = 'bonus',
  CANCEL_BONUS = 'cancel-bonus',
  CANCEL_CREDIT = 'cancel-credit',
  CANCEL_DEBIT = 'cancel-debit',
  CANCEL_PRE_DEBIT = 'cancel-pre-debit',
  CREDIT = 'credit',
  DEBIT = 'debit',
  PRE_CREDIT = 'pre-credit',
  PRE_DEBIT = 'pre-debit'
}

/**
 * Details about a fidelity account
 */
export interface BillingFidelityMovement {
  amount: number
  balance: number
  date: string
  description: string
  movementId: number
  operation: BillingfidelityAccountOperation
  order: number
  previousBalance: number
}

/**
 * Extensions of a detail
 */
export interface BillingItemDetail {
  order: BillingItemDetailOrder
}

/**
 * Order data for this Detail
 */
export interface BillingItemDetailOrder {
  action?: BillingItemDetailOrderAction
  configurations: BillingItemDetailOrderConfiguration[]
  plan: BillingItemDetailOrderPlan
}

/*
 * List of order actions
 */
export enum BillingItemDetailOrderAction {
  CONSUMPTION = 'consumption',
  INSTALLATION = 'installation',
  RENEW = 'renew',
  UPGRADE = 'upgrade'
}

/**
 * Configuration of order
 */
export interface BillingItemDetailOrderConfiguration {
  label: string
  value: string
}

/**
 * Plan data from order
 */
export interface BillingItemDetailOrderPlan {
  code?: string
  duration?: string
  pricingMode?: string
  product: BillingItemDetailOrderPlanProduct
  quantity?: number
}

/**
 * Product data from order
 */
export interface BillingItemDetailOrderPlanProduct {
  name?: string
}

/**
 * Status of your manual domain payment migration
 */
export interface BillingManualDomainPaymentStatus {
  domainsToMigrate?: number
  migratedDomains?: number
  status: BillingBillingTaskStatus
}

/**
 * Details about an OVH account
 */
export interface BillingMovement {
  amount: OrderPrice
  balance: OrderPrice
  date: string
  description: string
  movementId: number
  operation: BillingovhAccountOperation
  order: number
  previousBalance: OrderPrice
}

/**
 * Details about an Order
 */
export interface BillingOrder {
  date?: string
  expirationDate?: string
  orderId: number
  password: string
  pdfUrl: string
  priceWithoutTax: OrderPrice
  priceWithTax: OrderPrice
  retractionDate?: string
  tax: OrderPrice
  url: string
}

/**
 * The object the processing of the order leaded to
 */
export interface BillingorderAssociatedObject {
  id?: string
  type?: BillingorderassociatedObjectType
}

/*
 * Type of objects an order can be linked to
 */
export enum BillingorderassociatedObjectType {
  BILL = 'Bill',
  DEPOSIT = 'Deposit',
  REFUND = 'Refund',
  WITHDRAWAL = 'Withdrawal'
}

/**
 * Follow up history of an order
 */
export interface BillingorderFollowUp {
  history: BillingorderfollowUpHistory[]
  status: BillingorderfollowUpStatus
  step: BillingorderfollowUpStep
}

/**
 * Step history of order follow-up
 */
export interface BillingorderfollowUpHistory {
  date: string
  description: string
  label: BillingorderfollowUpHistoryStatus
}

/*
 * History label of order follow-up
 */
export enum BillingorderfollowUpHistoryStatus {
  DELIVERY = 'DELIVERY',
  FRAUD_CHECK = 'FRAUD_CHECK',
  FRAUD_DOCS_REQUESTED = 'FRAUD_DOCS_REQUESTED',
  FRAUD_MANUAL_REVIEW = 'FRAUD_MANUAL_REVIEW',
  FRAUD_REFUSED = 'FRAUD_REFUSED',
  INVOICE_IN_PROGRESS = 'INVOICE_IN_PROGRESS',
  INVOICE_SENT = 'INVOICE_SENT',
  ORDER_ACCEPTED = 'ORDER_ACCEPTED',
  ORDER_STARTED = 'ORDER_STARTED',
  PAYMENT_CONFIRMED = 'PAYMENT_CONFIRMED',
  PAYMENT_INITIATED = 'PAYMENT_INITIATED',
  PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
  REGISTERED_PAYMENT_INITIATED = 'REGISTERED_PAYMENT_INITIATED'
}

/*
 * Step status of order follow-up
 */
export enum BillingorderfollowUpStatus {
  DOING = 'DOING',
  DONE = 'DONE',
  ERROR = 'ERROR',
  TODO = 'TODO'
}

/*
 * Status of order follow-up
 */
export enum BillingorderfollowUpStep {
  AVAILABLE = 'AVAILABLE',
  DELIVERING = 'DELIVERING',
  VALIDATED = 'VALIDATED',
  VALIDATING = 'VALIDATING'
}

/*
 * All possible order status
 */
export enum BillingorderOrderStatus {
  CANCELLED = 'cancelled',
  CANCELLING = 'cancelling',
  CHECKING = 'checking',
  DELIVERED = 'delivered',
  DELIVERING = 'delivering',
  DOCUMENTSREQUESTED = 'documentsRequested',
  NOTPAID = 'notPaid',
  UNKNOWN = 'unknown'
}

/**
 * All data needed to use a payment mean
 */
export interface BillingorderPaymentMean {
  fee: any
  htmlForm?: string
  httpMethod: string
  logo?: string
  parameters: BillingorderpaymentMeanHttpParameter[]
  subType?: string
  url: string
}

/**
 * Parameter to give to a payment page
 */
export interface BillingorderpaymentMeanHttpParameter {
  choice?: BillingorderpaymentMeanHttpParameterChoice[]
  name: string
  value?: string
}

/**
 * Choice for an HTTP multi value parameter
 */
export interface BillingorderpaymentMeanHttpParameterChoice {
  name: string
  value: string
}

/**
 * TODO
 */
export interface BillingorderPaymentMeans {
  creditCard?: BillingorderPaymentMean[]
  edinar?: BillingorderPaymentMean[]
  fidelityPoints?: BillingorderPaymentMean[]
  ideal?: BillingorderPaymentMean[]
  multibanco?: BillingorderPaymentMean[]
  ovhAccount?: BillingorderPaymentMean[]
  paypal?: BillingorderPaymentMean[]
  promotion?: BillingorderPaymentMean[]
}

/**
 * Payment methods
 */
export interface BillingorderPaymentMethods {
  available: PaymentmethodAvailablePaymentMethod[]
  registered: number[]
}

/**
 * Pay with payment method parameter
 */
export interface BillingorderPayWithPaymentMethod {
  id: number
}

/**
 * A registered payment mean
 */
export interface BillingorderRegisteredPaymentMean {
  paymentMean: BillingReusablePaymentMean
}

/*
 * Retraction reason type
 */
export enum BillingorderRetractionReason {
  COMPETITOR = 'competitor',
  DIFFICULTY = 'difficulty',
  EXPENSIVE = 'expensive',
  OTHER = 'other',
  PERFORMANCE = 'performance',
  RELIABILITY = 'reliability',
  UNUSED = 'unused'
}

/**
 * Information about a Bill entry
 */
export interface BillingOrderDetail {
  cancelled: boolean
  description: string
  domain: string
  orderDetailId: number
  quantity: string
  totalPrice: OrderPrice
  unitPrice: OrderPrice
}

/**
 * Details about an OVH account
 */
export interface BillingOvhAccount {
  alertThreshold?: number
  balance: OrderPrice
  canBeCredited: boolean
  isActive: boolean
  lastUpdate: string
  openDate: string
  ovhAccountId: string
}

/*
 * Operations an OVH account movement can represent
 */
export enum BillingovhAccountOperation {
  CANCEL_CREDIT = 'cancel-credit',
  CANCEL_DEBIT = 'cancel-debit',
  CANCEL_PRE_DEBIT = 'cancel-pre-debit',
  CREDIT = 'credit',
  DEBIT = 'debit',
  PRE_CREDIT = 'pre-credit',
  PRE_DEBIT = 'pre-debit'
}

/**
 * Details about a payment
 */
export interface BillingPayment {
  paymentDate: string
  paymentIdentifier?: string
  paymentType: BillingPaymentMean
}

/*
 * All payment means you might have use on an OVH order
 */
export enum BillingPaymentMean {
  CASH = 'cash',
  CHARGEBACK = 'chargeback',
  CHEQUE = 'cheque',
  CREDITACCOUNT = 'creditAccount',
  CREDITCARD = 'creditCard',
  DEBTACCOUNT = 'debtAccount',
  DEPOSIT = 'deposit',
  DIGITALLAUNCHPAD = 'digitalLaunchPad',
  EDINAR = 'edinar',
  FIDELITYPOINTS = 'fidelityPoints',
  FREE = 'free',
  IDEAL = 'ideal',
  INCUBATORACCOUNT = 'incubatorAccount',
  MANDAT = 'mandat',
  MULTIBANCO = 'multibanco',
  NONE = 'none',
  OVHACCOUNT = 'ovhAccount',
  PAYMENTMANDATE = 'paymentMandate',
  PAYPAL = 'paypal',
  PAYU = 'payu',
  PLATNOSCI = 'platnosci',
  REFUND = 'refund',
  TRANSFER = 'transfer',
  WITHDRAWAL = 'withdrawal'
}

/**
 * A validation required to add a payment mean
 */
export interface BillingPaymentMeanValidation {
  id: number
  submitUrl?: string
  url: string
  validationType: BillingPaymentMeanValidationType
}

/*
 * All the validation you may have to do
 */
export enum BillingPaymentMeanValidationType {
  CREDITACCOUNT = 'creditAccount',
  DOCUMENTTOSEND = 'documentToSend',
  SIMPLEVALIDATION = 'simpleValidation'
}

/**
 * Available payment methods
 */
export interface BillingPaymentMethod {
  billingContactId: number
  creationDate: string
  default?: boolean
  description: string
  id: number
  paymentSubType?: BillingpaymentMethodPaymentSubType
  paymentType: BillingpaymentMethodPaymentType
  publicLabel: string
  status: BillingpaymentMethodStatus
}

/**
 * Payment method type icon
 */
export interface BillingpaymentMethodIconData {
  data?: string
  name?: string
}

/*
 * List of payment sub type enum
 */
export enum BillingpaymentMethodPaymentSubType {
  AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA'
}

/*
 * List of payment type enum
 */
export enum BillingpaymentMethodPaymentType {
  BANK_ACCOUNT = 'BANK_ACCOUNT',
  CREDIT_CARD = 'CREDIT_CARD',
  DEFERRED_PAYMENT_ACCOUNT = 'DEFERRED_PAYMENT_ACCOUNT',
  ENTERPRISE = 'ENTERPRISE',
  INTERNAL_TRUSTED_ACCOUNT = 'INTERNAL_TRUSTED_ACCOUNT',
  PAYPAL = 'PAYPAL'
}

/*
 * List of payment method status enum
 */
export enum BillingpaymentMethodStatus {
  BLOCKED = 'BLOCKED',
  BLOCKED_BY_CUSTOMER = 'BLOCKED_BY_CUSTOMER',
  BROKEN = 'BROKEN',
  CANCELED = 'CANCELED',
  CANCELED_BY_CUSTOMER = 'CANCELED_BY_CUSTOMER',
  CREATED = 'CREATED',
  ERROR = 'ERROR',
  EXPIRED = 'EXPIRED',
  PAUSED = 'PAUSED',
  VALID = 'VALID',
  VALID_FOR_CREDIT = 'VALID_FOR_CREDIT'
}

/**
 * Paypal account info
 */
export interface BillingPaypal {
  agreementId: string
  creationDate: string
  defaultPaymentMean: boolean
  description?: string
  email: string
  icon?: BillingpaymentMethodIconData
  id: number
  state: BillingPaypalState
}

/*
 * State of you paypal account
 */
export enum BillingPaypalState {
  TOOMANYFAILURES = 'tooManyFailures',
  VALID = 'valid'
}

/**
 * Details about a Refund
 */
export interface BillingRefund {
  date: string
  orderId: number
  originalBillId?: string
  password: string
  pdfUrl: string
  priceWithoutTax: OrderPrice
  priceWithTax: OrderPrice
  refundId: string
  tax: OrderPrice
  url: string
}

/**
 * Information about a Bill entry
 */
export interface BillingRefundDetail {
  description: string
  domain: string
  quantity: string
  reference: string
  refundDetailId: string
  refundId: string
  totalPrice: OrderPrice
  unitPrice: OrderPrice
}

/*
 * Reusable payment mean type
 */
export enum BillingReusablePaymentMean {
  CREDIT_CARD = 'CREDIT_CARD',
  ENTERPRISE = 'ENTERPRISE',
  INTERNAL_TRUSTED_ACCOUNT = 'INTERNAL_TRUSTED_ACCOUNT',
  PAYPAL = 'PAYPAL',
  BANKACCOUNT = 'bankAccount',
  CREDITCARD = 'creditCard',
  FIDELITYACCOUNT = 'fidelityAccount',
  OVHACCOUNT = 'ovhAccount'
}

/**
 * SLA properties
 */
export interface BillingSlaOperation {
  date: string
  description: string
  endDate?: string
  id: number
  name: string
  startDate: string
}

/**
 * Describe all services impacted by SLA
 */
export interface BillingSlaOperationService {
  description: string
  serviceName: string
  slaApplication: string
  slaPlan: string
}

/**
 * Details about a Voucher account
 */
export interface BillingVoucherAccount {
  balance: OrderPrice
  lastUpdate: string
  openDate: string
  voucherAccountId: string
}

/*
 * Operations a voucher account movement can represent
 */
export enum BillingvoucherAccountOperation {
  CANCEL_CREDIT = 'cancel-credit',
  CANCEL_DEBIT = 'cancel-debit',
  CANCEL_PRE_DEBIT = 'cancel-pre-debit',
  CREDIT = 'credit',
  DEBIT = 'debit',
  PRE_CREDIT = 'pre-credit',
  PRE_DEBIT = 'pre-debit'
}

/**
 * Details about a voucher account
 */
export interface BillingVoucherMovement {
  amount: OrderPrice
  balance: OrderPrice
  date: string
  description: string
  movementId: number
  operation: BillingvoucherAccountOperation
  order: number
  previousBalance: OrderPrice
}

/**
 * Details about a withdrawal
 */
export interface BillingWithdrawal {
  amount: OrderPrice
  country: string
  date: string
  orderId: number
  password: string
  pdfUrl: string
  url: string
  withdrawalId: string
}

/**
 * Information about a Withdrawal entry
 */
export interface BillingWithdrawalDetail {
  description: string
  domain: string
  quantity: string
  totalPrice: OrderPrice
  unitPrice: OrderPrice
  withdrawalDetailId: string
}

/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  key: string
  value: T
}

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
}

/**
 * Representation of an Address
 */
export interface ContactAddress {
  city: string
  country: NichandleCountry
  line1: string
  line2?: string
  line3?: string
  otherDetails?: string
  province?: string
  zip: string
}

/**
 * Representation of a Contact
 */
export interface ContactContact {
  address: ContactAddress
  birthCity?: string
  birthCountry?: NichandleCountry
  birthDay?: string
  birthZip?: string
  cellPhone?: any
  companyNationalIdentificationNumber?: string
  email: string
  fax?: any
  firstName: string
  gender?: NichandleGender
  id: number
  language: NichandleLanguage
  lastName: string
  legalForm: NichandleLegalForm
  nationalIdentificationNumber?: string
  nationality?: NichandleCountry
  organisationName?: string
  organisationType?: string
  phone?: any
  spareEmail?: string
  vat?: string
}

/**
 * Extras informations about a field
 */
export interface ContactFieldInformation {
  fieldName: string
  mandatory: boolean
  readOnly: boolean
}

/*
 * Continents
 */
export enum CoreTypesContinent {
  AFRICA = 'africa',
  ANTARTICA = 'antartica',
  ASIA = 'asia',
  EUROPE = 'europe',
  NORTH_AMERICA = 'north-america',
  OCEANIA = 'oceania',
  SOUTH_AMERICA = 'south-america'
}

/*
 * ISO country codes
 */
export enum CoreTypesCountry {
  AC = 'ac',
  AD = 'ad',
  AE = 'ae',
  AF = 'af',
  AG = 'ag',
  AI = 'ai',
  AL = 'al',
  AM = 'am',
  AN = 'an',
  AO = 'ao',
  AQ = 'aq',
  AR = 'ar',
  AS = 'as',
  AT = 'at',
  AU = 'au',
  AW = 'aw',
  AX = 'ax',
  AZ = 'az',
  BA = 'ba',
  BB = 'bb',
  BD = 'bd',
  BE = 'be',
  BF = 'bf',
  BG = 'bg',
  BH = 'bh',
  BI = 'bi',
  BJ = 'bj',
  BL = 'bl',
  BM = 'bm',
  BN = 'bn',
  BO = 'bo',
  BQ = 'bq',
  BR = 'br',
  BS = 'bs',
  BT = 'bt',
  BV = 'bv',
  BW = 'bw',
  BY = 'by',
  BZ = 'bz',
  CA = 'ca',
  CC = 'cc',
  CD = 'cd',
  CF = 'cf',
  CG = 'cg',
  CH = 'ch',
  CI = 'ci',
  CK = 'ck',
  CL = 'cl',
  CM = 'cm',
  CN = 'cn',
  CO = 'co',
  CR = 'cr',
  CS = 'cs',
  CU = 'cu',
  CV = 'cv',
  CW = 'cw',
  CX = 'cx',
  CY = 'cy',
  CZ = 'cz',
  DE = 'de',
  DJ = 'dj',
  DK = 'dk',
  DM = 'dm',
  DO = 'do',
  DZ = 'dz',
  EC = 'ec',
  EE = 'ee',
  EG = 'eg',
  EH = 'eh',
  ER = 'er',
  ES = 'es',
  ET = 'et',
  FC = 'fc',
  FD = 'fd',
  FI = 'fi',
  FJ = 'fj',
  FK = 'fk',
  FM = 'fm',
  FO = 'fo',
  FR = 'fr',
  FX = 'fx',
  GA = 'ga',
  GB = 'gb',
  GD = 'gd',
  GE = 'ge',
  GF = 'gf',
  GG = 'gg',
  GH = 'gh',
  GI = 'gi',
  GL = 'gl',
  GM = 'gm',
  GN = 'gn',
  GP = 'gp',
  GQ = 'gq',
  GR = 'gr',
  GS = 'gs',
  GT = 'gt',
  GU = 'gu',
  GW = 'gw',
  GY = 'gy',
  HK = 'hk',
  HM = 'hm',
  HN = 'hn',
  HR = 'hr',
  HT = 'ht',
  HU = 'hu',
  ID = 'id',
  IE = 'ie',
  IL = 'il',
  IM = 'im',
  IN = 'in',
  IO = 'io',
  IQ = 'iq',
  IR = 'ir',
  IS = 'is',
  IT = 'it',
  JE = 'je',
  JM = 'jm',
  JO = 'jo',
  JP = 'jp',
  KE = 'ke',
  KG = 'kg',
  KH = 'kh',
  KI = 'ki',
  KM = 'km',
  KN = 'kn',
  KP = 'kp',
  KR = 'kr',
  KW = 'kw',
  KY = 'ky',
  KZ = 'kz',
  LA = 'la',
  LB = 'lb',
  LC = 'lc',
  LI = 'li',
  LK = 'lk',
  LR = 'lr',
  LS = 'ls',
  LT = 'lt',
  LU = 'lu',
  LV = 'lv',
  LY = 'ly',
  MA = 'ma',
  MC = 'mc',
  MD = 'md',
  ME = 'me',
  MF = 'mf',
  MG = 'mg',
  MH = 'mh',
  MK = 'mk',
  ML = 'ml',
  MM = 'mm',
  MN = 'mn',
  MO = 'mo',
  MP = 'mp',
  MQ = 'mq',
  MR = 'mr',
  MS = 'ms',
  MT = 'mt',
  MU = 'mu',
  MV = 'mv',
  MW = 'mw',
  MX = 'mx',
  MY = 'my',
  MZ = 'mz',
  NA = 'na',
  NC = 'nc',
  NE = 'ne',
  NF = 'nf',
  NG = 'ng',
  NI = 'ni',
  NL = 'nl',
  NO = 'no',
  NP = 'np',
  NR = 'nr',
  NU = 'nu',
  NZ = 'nz',
  OM = 'om',
  PA = 'pa',
  PE = 'pe',
  PF = 'pf',
  PG = 'pg',
  PH = 'ph',
  PK = 'pk',
  PL = 'pl',
  PM = 'pm',
  PN = 'pn',
  PR = 'pr',
  PS = 'ps',
  PT = 'pt',
  PW = 'pw',
  PY = 'py',
  QA = 'qa',
  QC = 'qc',
  RE = 're',
  RO = 'ro',
  RS = 'rs',
  RU = 'ru',
  RW = 'rw',
  SA = 'sa',
  SB = 'sb',
  SC = 'sc',
  SD = 'sd',
  SE = 'se',
  SG = 'sg',
  SH = 'sh',
  SI = 'si',
  SJ = 'sj',
  SK = 'sk',
  SL = 'sl',
  SM = 'sm',
  SN = 'sn',
  SO = 'so',
  SR = 'sr',
  SS = 'ss',
  ST = 'st',
  SV = 'sv',
  SX = 'sx',
  SY = 'sy',
  SZ = 'sz',
  TC = 'tc',
  TD = 'td',
  TF = 'tf',
  TG = 'tg',
  TH = 'th',
  TJ = 'tj',
  TK = 'tk',
  TL = 'tl',
  TM = 'tm',
  TN = 'tn',
  TO = 'to',
  TP = 'tp',
  TR = 'tr',
  TT = 'tt',
  TV = 'tv',
  TW = 'tw',
  TZ = 'tz',
  UA = 'ua',
  UG = 'ug',
  UK = 'uk',
  UM = 'um',
  US = 'us',
  UY = 'uy',
  UZ = 'uz',
  VA = 'va',
  VC = 'vc',
  VE = 've',
  VG = 'vg',
  VI = 'vi',
  VN = 'vn',
  VU = 'vu',
  WE = 'we',
  WF = 'wf',
  WS = 'ws',
  YE = 'ye',
  YT = 'yt',
  YU = 'yu',
  ZA = 'za',
  ZM = 'zm',
  ZW = 'zw'
}

/**
 * The payment infos linked to this debt entry
 */
export interface DebtassociatedObjectPaymentInfo {
  description?: string
  paymentType: BillingPaymentMean
  publicLabel?: string
}

/*
 * Type of objects an order can be linked to
 */
export enum DebtassociatedObjectType {
  BILL = 'Bill',
  DEBTOPERATION = 'DebtOperation',
  DEPOSIT = 'Deposit',
  ORDER = 'Order',
  OVHACCOUNTMOVEMENT = 'OvhAccountMovement',
  REFUND = 'Refund',
  WITHDRAWAL = 'Withdrawal'
}

/**
 * Debt balance of the account
 */
export interface DebtBalance {
  active: boolean
  dueAmount: OrderPrice
  pendingAmount: OrderPrice
  todoAmount: OrderPrice
  unmaturedAmount: OrderPrice
}

/**
 * State of a debt
 */
export interface DebtDebt {
  amount: OrderPrice
  date: string
  debtId: number
  dueAmount: OrderPrice
  dueDate?: string
  orderId: number
  pendingAmount: OrderPrice
  todoAmount: OrderPrice
  unmaturedAmount: OrderPrice
}

/**
 * The object linked to this debt entry
 */
export interface DebtentryAssociatedObject {
  id?: string
  paymentInfo?: DebtassociatedObjectPaymentInfo
  subId?: string
  type?: DebtassociatedObjectType
}

/*
 * All operations a debt entry can represent
 */
export enum DebtentryOperation {
  CANCEL = 'CANCEL',
  CASH_MANUAL = 'CASH_MANUAL',
  CHECK_MANUAL = 'CHECK_MANUAL',
  CREDITCARD = 'CREDITCARD',
  CREDITCARD_AUTOMATIC = 'CREDITCARD_AUTOMATIC',
  CREDITCARD_MANUAL = 'CREDITCARD_MANUAL',
  CREDIT_ACCOUNT_AUTOMATIC = 'CREDIT_ACCOUNT_AUTOMATIC',
  EDINAR_MANUAL = 'EDINAR_MANUAL',
  IDEAL_MANUAL = 'IDEAL_MANUAL',
  MULTIBANCO_MANUAL = 'MULTIBANCO_MANUAL',
  ORDER = 'ORDER',
  PAYPAL_AUTOMATIC = 'PAYPAL_AUTOMATIC',
  PAYPAL_MANUAL = 'PAYPAL_MANUAL',
  PAYU_MANUAL = 'PAYU_MANUAL',
  RECOVERY_TRANSFER_AUTOMATIC = 'RECOVERY_TRANSFER_AUTOMATIC',
  REFUND = 'REFUND',
  REFUND_CHECK = 'REFUND_CHECK',
  REFUND_CREDITCARD = 'REFUND_CREDITCARD',
  REFUND_CREDIT_ACCOUNT = 'REFUND_CREDIT_ACCOUNT',
  REFUND_LOSS = 'REFUND_LOSS',
  REFUND_PAYPAL = 'REFUND_PAYPAL',
  REFUND_PAYU = 'REFUND_PAYU',
  REFUND_SEPA = 'REFUND_SEPA',
  REFUND_TRANSFER = 'REFUND_TRANSFER',
  REFUND_UNKNOWN = 'REFUND_UNKNOWN',
  SEPA_AUTOMATIC = 'SEPA_AUTOMATIC',
  TRANSFER_MANUAL = 'TRANSFER_MANUAL',
  UNPAID_CHECK = 'UNPAID_CHECK',
  UNPAID_CREDITCARD = 'UNPAID_CREDITCARD',
  UNPAID_CREDIT_ACCOUNT = 'UNPAID_CREDIT_ACCOUNT',
  UNPAID_PAYPAL = 'UNPAID_PAYPAL',
  UNPAID_SEPA = 'UNPAID_SEPA',
  UNPAID_WITHDRAW = 'UNPAID_WITHDRAW',
  WARRANT_MANUAL = 'WARRANT_MANUAL',
  WITHDRAW_AUTOMATIC = 'WITHDRAW_AUTOMATIC'
}

/*
 * All status a debt entry can be in
 */
export enum DebtentryStatus {
  CANCELLED = 'CANCELLED',
  DONE = 'DONE',
  FAILED = 'FAILED',
  PAID = 'PAID',
  PENDING = 'PENDING',
  TODO = 'TODO'
}

/**
 * Operation that happend on a debt
 */
export interface DebtOperation {
  amount: OrderPrice
  date: string
  depositOrderId: number
  operationId: number
  status: DebtentryStatus
  type?: DebtentryOperation
}

/**
 * Hardware RAID defined in this partitioning scheme
 */
export interface DedicatedinstallationTemplatehardwareRaid {
  disks: string[]
  mode: DedicatedTemplateOsHardwareRaid
  name: string
  step: number
}

/**
 * Partitioning schemes available on this template
 */
export interface DedicatedinstallationTemplatetemplatePartitioningSchemes {
  name: string
  priority: number
}

/**
 *  Partitions defined in this partitioning scheme
 */
export interface DedicatedinstallationTemplatetemplatePartitions {
  filesystem: DedicatedTemplateOsFileSystem
  mountpoint: string
  order: number
  raid?: DedicatedserverPartitionRaid
  size: any
  type: DedicatedTemplatePartitionType
  volumeName?: string
}

/**
 * Available installation templates
 */
export interface DedicatedinstallationTemplateTemplates {
  availableLanguages: DedicatedTemplateOsLanguageEnum[]
  beta?: boolean
  bitFormat: DedicatedserverBitFormat
  category: DedicatedTemplateOsUsage
  customization?: DedicatedTemplateOsProperties
  defaultLanguage: DedicatedTemplateOsLanguage
  deprecated?: boolean
  description: string
  distribution: string
  family: DedicatedTemplateOsType
  filesystems: DedicatedTemplateOsFileSystemEnum[]
  hardRaidConfiguration?: boolean
  lastModification?: string
  lvmReady?: boolean
  supportsDistributionKernel?: boolean
  supportsGptLabel?: boolean
  supportsRTM: boolean
  supportsSqlServer?: boolean
  supportsUEFI?: DedicatedserverSupportsUEFI
  templateName: string
}

/*
 * Available os bit format
 */
export type DedicatedserverBitFormat = 32 | 64

/*
 * partition raid type
 */
export type DedicatedserverPartitionRaid = '0' | '1' | '10' | '5' | '6'

/*
 * supports UEFI setup
 */
export enum DedicatedserverSupportsUEFI {
  NO = 'no',
  ONLY = 'only',
  YES = 'yes'
}

/*
 * Filesystems available
 */
export enum DedicatedTemplateOsFileSystem {
  BTRFS = 'btrfs',
  EXT3 = 'ext3',
  EXT4 = 'ext4',
  NTFS = 'ntfs',
  REISERFS = 'reiserfs',
  SWAP = 'swap',
  UFS = 'ufs',
  XFS = 'xfs',
  ZFS = 'zfs'
}

/*
 * Hardware RAID enum
 */
export enum DedicatedTemplateOsHardwareRaid {
  RAID0 = 'raid0',
  RAID1 = 'raid1',
  RAID10 = 'raid10',
  RAID5 = 'raid5',
  RAID50 = 'raid50',
  RAID6 = 'raid6',
  RAID60 = 'raid60'
}

/*
 * all language available
 */
export enum DedicatedTemplateOsLanguage {
  AR = 'ar',
  BG = 'bg',
  CS = 'cs',
  DA = 'da',
  DE = 'de',
  EL = 'el',
  EN = 'en',
  ES = 'es',
  ET = 'et',
  FI = 'fi',
  FR = 'fr',
  HE = 'he',
  HR = 'hr',
  HU = 'hu',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  LT = 'lt',
  LV = 'lv',
  NB = 'nb',
  NL = 'nl',
  NO = 'no',
  PL = 'pl',
  PT = 'pt',
  RO = 'ro',
  RU = 'ru',
  SK = 'sk',
  SL = 'sl',
  SR = 'sr',
  SV = 'sv',
  TH = 'th',
  TR = 'tr',
  TU = 'tu',
  UK = 'uk',
  ZH_HANS_CN = 'zh-Hans-CN',
  ZH_HANS_HK = 'zh-Hans-HK'
}

/**
 * A structure describing properties customizables about this dedicated installation template
 */
export interface DedicatedTemplateOsProperties {
  changeLog?: string
  customHostname?: string
  postInstallationScriptLink?: string
  postInstallationScriptReturn?: string
  rating?: number
  sshKeyName?: string
  useDistributionKernel?: boolean
}

/*
 * Os type
 */
export enum DedicatedTemplateOsType {
  BSD = 'bsd',
  LINUX = 'linux',
  SOLARIS = 'solaris',
  WINDOWS = 'windows'
}

/*
 * Os usage definition
 */
export enum DedicatedTemplateOsUsage {
  BASIC = 'basic',
  CUSTOMER = 'customer',
  HOSTING = 'hosting',
  OTHER = 'other',
  READYTOUSE = 'readyToUse',
  VIRTUALISATION = 'virtualisation'
}

/*
 * partition type
 */
export enum DedicatedTemplatePartitionType {
  LOGICAL = 'logical',
  LV = 'lv',
  PRIMARY = 'primary'
}

/*
 * Document file format
 */
export enum DomainDocumentFormats {
  GIF = 'gif',
  JPEG = 'jpeg',
  JPG = 'jpg',
  PDF = 'pdf',
  PNG = 'png'
}

/*
 * Operation functions
 */
export enum DomainNicOperationFunction {
  CONTACTCONTROL = 'ContactControl',
  DNSANYCASTACTIVATE = 'DnsAnycastActivate',
  DNSANYCASTDEACTIVATE = 'DnsAnycastDeactivate',
  DNSSECDISABLE = 'DnssecDisable',
  DNSSECENABLE = 'DnssecEnable',
  DNSSECRESIGNING = 'DnssecResigning',
  DNSSECROLLKSK = 'DnssecRollKsk',
  DNSSECROLLZSK = 'DnssecRollZsk',
  DOMAINCONTACTCONTROL = 'DomainContactControl',
  DOMAINCONTACTUPDATE = 'DomainContactUpdate',
  DOMAINCONTROL = 'DomainControl',
  DOMAINCREATE = 'DomainCreate',
  DOMAINDELETE = 'DomainDelete',
  DOMAINDNSUPDATE = 'DomainDnsUpdate',
  DOMAINDSUPDATE = 'DomainDsUpdate',
  DOMAINHOLD = 'DomainHold',
  DOMAINHOSTCREATE = 'DomainHostCreate',
  DOMAINHOSTDELETE = 'DomainHostDelete',
  DOMAINHOSTUPDATE = 'DomainHostUpdate',
  DOMAININCOMINGTRANSFER = 'DomainIncomingTransfer',
  DOMAINLOCK = 'DomainLock',
  DOMAINOUTGOINGTRANSFER = 'DomainOutgoingTransfer',
  DOMAINRENEW = 'DomainRenew',
  DOMAINRESTORE = 'DomainRestore',
  DOMAINTRADE = 'DomainTrade',
  ZONEIMPORT = 'ZoneImport'
}

/*
 * operation Action
 */
export enum DomainOperationAction {
  CANCANCEL = 'canCancel',
  CANCORRECT = 'canCorrect',
  CANRELAUNCH = 'canRelaunch',
  CANRESET = 'canReset'
}

/*
 * Operation status
 */
export enum DomainOperationStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * One step from an operation
 */
export interface DomainOperationStep {
  description: string
  executionDuration: number
  step: string
}

/**
 * Representation of country and continent from visitor IP
 */
export interface GeolocationContinentCountryLocation {
  continent: CoreTypesContinent
  countryCode: CoreTypesCountry
  ip: string
}

/*
 * All HTTP methods available
 */
export enum HttpMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

/**
 * Insight access token
 */
export interface InsightAccess {
  access: string
  createdAt: string
  expireAt: string
}

export interface MebillinggroupBillingGroup {
  contactId?: number
  creationDate: string
  groupId: number
  lastUpdate: string
  name: string
  paymentMethodId?: number
}

export interface MebillinggroupService {
  groupId: number
  serviceId: number
}

export interface MebillinggroupserviceCreate {
  serviceId: number
}

/**
 * Asynchronous task related to Billing
 */
export interface MebillingtasksTask {
  id: number
  metadata: MebillingtasksTaskMetadatum[]
  name: MebillingtasksTaskName
  status: MebillingtasksTaskStatus
  step: string
}

/**
 * Metadatum linked to a Task
 */
export interface MebillingtasksTaskMetadatum {
  key: string
  value: string
}

/*
 * Billing tasks names
 */
export enum MebillingtasksTaskName {
  CONTACT_CHANGE = 'contact/change'
}

/*
 * Billing tasks statuses
 */
export enum MebillingtasksTaskStatus {
  TODO = 'TODO',
  CANCELLED = 'CANCELLED',
  DOING = 'DOING',
  DONE = 'DONE',
  INIT = 'INIT',
  PROBLEM = 'PROBLEM',
  ERROR = 'ERROR'
}

/**
 * Consent campaign
 */
export interface MeconsentCampaign {
  description: string
  name: string
  type: MeconsentCampaignType
}

/*
 * Campaign type
 */
export enum MeconsentCampaignType {
  OPTIN = 'OPTIN',
  OPTOUT = 'OPTOUT'
}

/**
 * Customer consent information for a campaign
 */
export interface MeconsentConsent {
  campaign: string
  history: MeconsentDecision[]
  type: MeconsentCampaignType
  value: boolean
}

/**
 * Customer consent decision
 */
export interface MeconsentDecision {
  timestamp: string
  value: boolean
}

/**
 * Price with currency and amount in micro-cents
 */
export interface MeconsumptionPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
  valueInUcents: number
}

/**
 * List of consumptions recorded in a range
 */
export interface MeconsumptionTransaction {
  beginDate: string
  creationDate?: string
  elements: MeconsumptiontransactionElement[]
  endDate?: string
  id?: number
  lastUpdate?: string
  price: MeconsumptionPrice
  serviceId: number
}

/**
 * Element of consumption for resource
 */
export interface MeconsumptiontransactionElement {
  details: MeconsumptiontransactionelementDetail[]
  planCode: string
  planFamily: string
  price: MeconsumptionPrice
  quantity: number
}

/**
 * Element of consumption for resource
 */
export interface MeconsumptiontransactionelementDetail {
  price: MeconsumptionPrice
  quantity: number
  unique_id?: string
}

/**
 * Available payment method object
 */
export interface MepaymentmethodAvailablePaymentMethod {
  icon: MepaymentmethodIcon
  integration: PaymentmethodIntegrationType
  oneshot: boolean
  paymentType: string
  registerable: boolean
  registerableWithTransaction: boolean
}

/**
 * Callback URL's to register a new payment method
 */
export interface MepaymentmethodCallbackUrl {
  cancel: string
  error: string
  failure: string
  pending: string
  success: string
}

/**
 * Icon
 */
export interface MepaymentmethodIcon {
  data?: string
  name?: string
}

/**
 * Payment method object
 */
export interface MepaymentmethodPaymentMethod {
  billingContactId?: number
  creationDate: string
  default: boolean
  description?: string
  expirationDate?: string
  icon: MepaymentmethodIcon
  label?: string
  lastUpdate: string
  paymentMeanId?: number
  paymentMethodId: number
  paymentSubType?: string
  paymentType: string
  status: MepaymentmethodPaymentMethodStatus
}

/*
 * Payment method status enum
 */
export enum MepaymentmethodPaymentMethodStatus {
  CANCELED = 'CANCELED',
  CANCELING = 'CANCELING',
  CREATED = 'CREATED',
  ERROR = 'ERROR',
  EXPIRED = 'EXPIRED',
  CREATING = 'CREATING',
  MAINTENANCE = 'MAINTENANCE',
  PAUSED = 'PAUSED',
  VALID = 'VALID'
}

/**
 * Register validation payload result
 */
export interface MepaymentmethodRegisterValidationResult {
  formSessionId?: string
  merchantId?: string
  organizationId?: string
  paymentMethodId: number
  url?: string
  validationType: PaymentmethodIntegrationType
}

/**
 * Payment method transaction object
 */
export interface MepaymentmethodTransaction {
  amount: OrderPrice
  creationDate: string
  status: MepaymentmethodTransactionStatus
  transactionId: number
  type: MepaymentmethodTransactionType
}

/*
 * Payment transaction status enum
 */
export enum MepaymentmethodTransactionStatus {
  CANCELED = 'CANCELED',
  CANCELING = 'CANCELING',
  CONFIRMING = 'CONFIRMING',
  CREATED = 'CREATED',
  ERROR = 'ERROR',
  FAILED = 'FAILED',
  READY = 'READY',
  SUCCESS = 'SUCCESS'
}

/*
 * Payment transaction type enum
 */
export enum MepaymentmethodTransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT'
}

/**
 * Support level of an account
 */
export interface MeSupportLevelLevel {
  level: MeSupportLevelLevelType
}

/*
 * Type of level
 */
export enum MeSupportLevelLevelType {
  STANDARD = 'standard',
  PREMIUM = 'premium',
  PREMIUM_ACCREDITED = 'premium-accredited',
  BUSINESS = 'business',
  ENTERPRISE = 'enterprise'
}

/*
 * Accept or deny IP access
 */
export enum NichandleaccessRestrictionIpRestrictionRule {
  ACCEPT = 'accept',
  DENY = 'deny'
}

/**
 * Sms Two-Factor Authentication
 */
export interface NichandleaccessRestrictionSmsAccount {
  creationDate: string
  description: string
  id: number
  lastUsedDate?: string
  phoneNumber: string
  status: NichandleaccessRestrictionSmsStatus
}

/**
 * Send secret code
 */
export interface NichandleaccessRestrictionSmsCode {
  challenge: string
}

/**
 * Describe secret key
 */
export interface NichandleaccessRestrictionSmsSecret {
  id: number
  remainingTry: number
}

/*
 * Status of the Sms account
 */
export enum NichandleaccessRestrictionSmsStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  NEEDCODEVALIDATION = 'needCodeValidation',
  NEEDEMAILVALIDATION = 'needEmailValidation'
}

/**
 * SOTP Two-Factor Authentication
 */
export interface NichandleaccessRestrictionSOTPAccount {
  creationDate: string
  lastUsedDate?: string
  remaining: number
  status: NichandleaccessRestrictionSOTPStatus
}

/**
 * Describe SOTP secret keys
 */
export interface NichandleaccessRestrictionSOTPSecret {
  codes: string[]
}

/*
 * Status of SOTP account
 */
export enum NichandleaccessRestrictionSOTPStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  NEEDCODEVALIDATION = 'needCodeValidation',
  NEEDEMAILVALIDATION = 'needEmailValidation'
}

/**
 * Describe SOTP validation status
 */
export interface NichandleaccessRestrictionSOTPValidate {
  remainingCodes: number
}

/**
 * TOTP Two-Factor Authentication
 */
export interface NichandleaccessRestrictionTOTPAccount {
  creationDate: string
  description: string
  id: number
  lastUsedDate?: string
  status: NichandleaccessRestrictionTOTPStatus
}

/**
 * Describe TOTP secret keys
 */
export interface NichandleaccessRestrictionTOTPSecret {
  id: number
  qrcodeHelper: string
  secret: string
}

/*
 * Status of TOTP account
 */
export enum NichandleaccessRestrictionTOTPStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  NEEDCODEVALIDATION = 'needCodeValidation',
  NEEDEMAILVALIDATION = 'needEmailValidation'
}

/**
 * U2F Two-Factor Authentication
 */
export interface NichandleaccessRestrictionU2FAccount {
  creationDate: string
  description: string
  id: number
  lastUsedDate?: string
  status: NichandleaccessRestrictionU2FStatus
}

/**
 * U2F Register Request
 */
export interface NichandleaccessRestrictionU2FRegisterChallenge {
  applicationId: string
  id: number
  request: NichandleaccessRestrictionU2FRegistrationRequest
}

/**
 * Describe U2F RegistrationRequest
 */
export interface NichandleaccessRestrictionU2FRegistrationRequest {
  challenge: string
  version: string
}

/**
 * U2F Register Request
 */
export interface NichandleaccessRestrictionU2FSignChallenge {
  applicationId: string
  request: NichandleaccessRestrictionU2FSignRequest
}

/**
 * Describe U2F SignRequest
 */
export interface NichandleaccessRestrictionU2FSignRequest {
  challenge: string
  keyHandle: string
  version: string
}

/*
 * Status of U2F account
 */
export enum NichandleaccessRestrictionU2FStatus {
  DISABLED = 'disabled',
  ENABLED = 'enabled',
  NEEDCODEVALIDATION = 'needCodeValidation'
}

/**
 * X509 Certificate
 */
export interface NichandleAuthenticationCertificate {
  expiration: string
  subject: string
}

/**
 * A group
 */
export interface NichandleAuthenticationGroup {
  creation: string
  defaultGroup: boolean
  description: string
  lastUpdate: string
  name: string
  role: NichandleAuthenticationRole
}

/**
 * A SAML 2.0 provider
 */
export interface NichandleAuthenticationProvider {
  creation: string
  groupAttributeName: string
  idpSigningCertificate: NichandleAuthenticationCertificate
  lastUpdate: string
  ssoServiceUrl: string
}

/*
 * Permission given on the account
 */
export enum NichandleAuthenticationRole {
  REGULAR = 'REGULAR',
  ADMIN = 'ADMIN',
  UNPRIVILEGED = 'UNPRIVILEGED'
}

/**
 * Internal customer billing capacities for customer control panel
 */
export interface NichandleBillingCapacities {
  canUseDebtSystem: boolean
  canUsePostalMailForInvoices: boolean
  requiredPaymentMethod: NichandleRequiredPaymentMethod
}

/*
 * Allowed types of contact who can be changed by change contact task
 */
export enum NichandlechangeContactContactType {
  CONTACTADMIN = 'contactAdmin',
  CONTACTBILLING = 'contactBilling',
  CONTACTTECH = 'contactTech'
}

/*
 * State of contact change task
 */
export enum NichandlechangeContactTaskState {
  ABORTED = 'aborted',
  CHECKVALIDITY = 'checkValidity',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  EXPIRED = 'expired',
  REFUSED = 'refused',
  TODO = 'todo',
  VALIDATINGBYCUSTOMERS = 'validatingByCustomers'
}

/*
 * State of email change task
 */
export enum NichandlechangeEmailTaskState {
  ABORTED = 'aborted',
  DONE = 'done',
  REFUSED = 'refused',
  TODO = 'todo'
}

/**
 * Task running a contact change on a service
 */
export interface NichandlecontactChangeTask {
  askingAccount?: string
  contactTypes: NichandlechangeContactContactTypeEnum[]
  dateDone?: string
  dateRequest: string
  fromAccount: string
  id: number
  serviceDomain?: string
  state: NichandlechangeContactTaskState
  toAccount: string
}

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
 * Customer currency
 */
export interface NichandleCurrency {
  code: string
  symbol: string
}

/**
 * Login restrictions on a development version of the Manager
 */
export interface NichandleDeveloperModeRestriction {
  enabled: boolean
}

/**
 * List of documents added on your account
 */
export interface NichandledocumentDocument {
  creationDate: string
  expirationDate?: string
  getUrl: string
  id: string
  name: string
  putUrl: string
  size: number
  tags: any
  validationDate?: string
}

/**
 * Domain tasks
 */
export interface NichandleDomainTask {
  canAccelerate: boolean
  canCancel: boolean
  canRelaunch: boolean
  comment?: string
  creationDate: string
  domain: string
  doneDate?: string
  function: DomainNicOperationFunction
  id: number
  lastUpdate: string
  status: DomainOperationStatus
  todoDate: string
}

/**
 * Domain operation argument
 */
export interface NichandleDomainTaskArgument {
  acceptedFormats?: DomainDocumentFormatsEnum[]
  acceptedValues?: string[]
  description?: string
  fields?: XanderContactFieldEnum[]
  key: string
  maximumSize?: number
  minimumSize?: number
  readOnly: boolean
  template?: string
  type: string
  value?: string
}

/**
 * Domain operation progress
 */
export interface NichandleDomainTaskProgressBar {
  currentStep: DomainOperationStep
  expectedDoneDate?: string
  followUpSteps?: DomainOperationStep[]
  lastUpdateDate?: string
  progress: number
  taskActions: DomainOperationActionEnum[]
  taskStatus: DomainOperationStatus
}

/**
 * Task running an email change on an account
 */
export interface NichandleemailChangeTask {
  dateDone?: string
  dateRequest: string
  id: number
  newEmail: string
  state: NichandlechangeEmailTaskState
}

/**
 * Email notification
 */
export interface NichandleemailNotification {
  body: string
  date: string
  id: number
  subject: string
}

/*
 * All genders a person can choose
 */
export enum NichandleGender {
  FEMALE = 'female',
  MALE = 'male'
}

/*
 * Ip registries
 */
export enum NichandleIpRegistry {
  ARIN = 'ARIN',
  RIPE = 'RIPE'
}

/**
 * List of all IP Restrictions
 */
export interface NichandleIpRestriction {
  id: number
  ip: string
  rule: NichandleaccessRestrictionIpRestrictionRule
  warning: boolean
}

/**
 * IP Restriction default rule
 */
export interface NichandleIpRestrictionDefaultRule {
  rule: NichandleaccessRestrictionIpRestrictionRule
  warning: boolean
}

/**
 * Details about an IP block organisation
 */
export interface NichandleIpv4Org {
  abuse_mailbox: string
  address: string
  city: string
  country: NichandleCountry
  firstname: string
  lastname: string
  organisationId: string
  phone: any
  registry: NichandleIpRegistry
  state?: string
  zip?: string
}

/**
 * Customer IPXE scripts
 */
export interface Nichandleipxe {
  name: string
  script: string
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
 * Manager preference
 */
export interface NichandleManagerPreference {
  key: string
  value: string
}

/**
 * Auto renewal information
 */
export interface NichandleNicAutorenewInfos {
  active: boolean
  lastRenew?: string
  renewDay: number
}

/**
 * Details about your OVH identifier
 */
export interface NichandleNichandle {
  address?: string
  area?: string
  birthCity?: string
  birthDay?: string
  city?: string
  companyNationalIdentificationNumber?: string
  corporationType?: string
  country: NichandleCountry
  currency: NichandleCurrency
  customerCode?: string
  email: string
  fax?: string
  firstname?: string
  italianSDI?: string
  language?: NichandleLanguage
  legalform: NichandleLegalForm
  name?: string
  nationalIdentificationNumber?: string
  nichandle: string
  organisation?: string
  ovhCompany: NichandleOvhCompany
  ovhSubsidiary: NichandleOvhSubsidiary
  phone?: string
  phoneCountry?: NichandleCountry
  sex?: NichandleGender
  spareEmail?: string
  state: NichandleState
  vat?: string
  zip?: string
}

/**
 * SMS notifications
 */
export interface NichandleNichandleSmsNotification {
  abuse: boolean
  creationDate: string
  phoneNumber: string
  status: NichandleNotificationStatus
  updateDate?: string
}

/*
 * Status of your notification
 */
export enum NichandleNotificationStatus {
  OK = 'ok',
  WAITINGFORVALIDATION = 'waitingForValidation'
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

/*
 * Indicates the mandatory nature of having a valid payment method
 */
export enum NichandleRequiredPaymentMethod {
  MANDATORYFORAUTORENEW = 'mandatoryForAutorenew',
  MANDATORYFORPOSTPAID = 'mandatoryForPostpaid',
  NOTMANDATORY = 'notMandatory'
}

/**
 * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
 */
export interface NichandlesshKey {
  default: boolean
  key: string
  keyName: string
}

/*
 * States a nichandle can be in
 */
export enum NichandleState {
  COMPLETE = 'complete',
  INCOMPLETE = 'incomplete'
}

/**
 * Sub Account
 */
export interface NichandleSubAccount {
  creationDate: string
  description?: string
  id: number
}

/**
 * Credentials to interact with the api on behalf of the sub-account
 */
export interface NichandleSubAccountConsumerKey {
  consumerKey: string
}

/**
 * List of all OVH things you can subscribe to
 */
export interface NichandleSubscription {
  registered?: boolean
  type: string
}

/**
 * A user
 */
export interface NichandleUser {
  creation: string
  description: string
  email: string
  group: string
  lastUpdate: string
  login: string
  passwordLastUpdate: string
  status: NichandleUserStatus
}

/*
 * Status of a User
 */
export enum NichandleUserStatus {
  OK = 'OK',
  DISABLED = 'DISABLED',
  PASSWORD_CHANGE_REQUIRED = 'PASSWORD_CHANGE_REQUIRED'
}

/**
 * VIP Status by Universe
 */
export interface NichandleVipStatus {
  cloud: boolean
  dedicated: boolean
  telecom: boolean
  web: boolean
}

/**
 * Voucher Status and Information
 */
export interface NichandleVoucherStatus {
  validity: boolean
}

export enum OrderCurrencyCode {
  AUD = 'AUD',
  CAD = 'CAD',
  CZK = 'CZK',
  EUR = 'EUR',
  GBP = 'GBP',
  LTL = 'LTL',
  MAD = 'MAD',
  N_A = 'N/A',
  PLN = 'PLN',
  SGD = 'SGD',
  TND = 'TND',
  USD = 'USD',
  XOF = 'XOF',
  POINTS = 'points'
}

/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/**
 * Available payment methods
 */
export interface PaymentmethodAvailablePaymentMethod {
  icon: PaymentmethodIcon
  integration: PaymentmethodIntegrationType
  oneshot: boolean
  paymentType: string
  registerable: boolean
  registerableWithTransaction: boolean
}

/**
 * Payment icon
 */
export interface PaymentmethodIcon {
  data?: string
  name?: string
}

/*
 * Payment method integration type
 */
export enum PaymentmethodIntegrationType {
  DONE = 'DONE',
  IFRAME_VANTIV = 'IFRAME_VANTIV',
  IN_CONTEXT = 'IN_CONTEXT',
  REDIRECT = 'REDIRECT'
}

/**
 * Billing policies settings
 */
export interface TelephonyBillingSettings {
  renewByBillingContact: boolean
}

/**
 * Default IP restriction of a VoIP line
 */
export interface TelephonyDefaultIpRestriction {
  id: number
  subnet: any
  type: TelephonyProtocol
}

/**
 * Line description policies settings
 */
export interface TelephonyLineDescriptionSettings {
  displayOnBill: boolean
  displayOnIncomingCall: boolean
}

/**
 * Custom domains of your fax services
 */
export interface TelephonyMailDomain2Service {
  domain: string
  id: number
}

/*
 * Phone protocol
 */
export enum TelephonyProtocol {
  MGCP = 'mgcp',
  SIP = 'sip'
}

/**
 * Telephony settings linked to the customer account
 */
export interface TelephonySettings {
  billingPolicies: TelephonyBillingSettings
  lineDescriptionPolicies: TelephonyLineDescriptionSettings
}

/*
 * Available contact fields
 */
export enum XanderContactField {
  ADDRESS_CITY = 'address.city',
  ADDRESS_COUNTRY = 'address.country',
  ADDRESS_LINE1 = 'address.line1',
  ADDRESS_LINE2 = 'address.line2',
  ADDRESS_LINE3 = 'address.line3',
  ADDRESS_OTHERDETAILS = 'address.otherDetails',
  ADDRESS_PROVINCE = 'address.province',
  ADDRESS_ZIP = 'address.zip',
  BIRTHCITY = 'birthCity',
  BIRTHCOUNTRY = 'birthCountry',
  BIRTHDAY = 'birthDay',
  BIRTHZIP = 'birthZip',
  CELLPHONE = 'cellPhone',
  COMPANYNATIONALIDENTIFICATIONNUMBER = 'companyNationalIdentificationNumber',
  EMAIL = 'email',
  FAX = 'fax',
  FIRSTNAME = 'firstName',
  GENDER = 'gender',
  LANGUAGE = 'language',
  LASTNAME = 'lastName',
  LEGALFORM = 'legalForm',
  NATIONALIDENTIFICATIONNUMBER = 'nationalIdentificationNumber',
  NATIONALITY = 'nationality',
  ORGANISATIONNAME = 'organisationName',
  ORGANISATIONTYPE = 'organisationType',
  PHONE = 'phone',
  SPAREEMAIL = 'spareEmail',
  VAT = 'vat'
}

/**
 * Xdsl Settings
 */
export interface Setting {
  resellerFastModemShipping: boolean
  resellerModemBasicConfig: boolean
}


export class Me {
  constructor(private client: Client) {}

  /**
   * Details about your OVH identifier [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me#GET)
   */
  GetThisObjectProperties(): Promise<NichandleNichandle> {
    let url = `/me`

    return this.client.request<NichandleNichandle>('GET', url)
  }

  /**
   * Details about your OVH identifier [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me#PUT)
   */
  AlterThisObjectProperties(payload: NichandleNichandle): Promise<void> {
    let url = `/me`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * SOTP Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode#GET)
   */
  /*
  GetThisObjectProperties(): Promise<NichandleaccessRestrictionSOTPAccount> {
    let url = `/me/accessRestriction/backupCode`

    return this.client.request<NichandleaccessRestrictionSOTPAccount>('GET', url)
  }
  */

  /**
   * SOTP Two-Factor Authentication [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode#POST)
   */
  AddASOTPAccessRestriction(): Promise<NichandleaccessRestrictionSOTPSecret> {
    let url = `/me/accessRestriction/backupCode`

    return this.client.request<NichandleaccessRestrictionSOTPSecret>('POST', url)
  }

  /**
   * SOTP Two-Factor Authentication [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode#DELETE)
   */
  DeleteThisTwoFactor(): Promise<void> {
    let url = `/me/accessRestriction/backupCode`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode/disable#POST)
   */
  DisableThisSOTPAccount(code: string): Promise<void> {
    let url = `/me/accessRestriction/backupCode/disable`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * enable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode/enable#POST)
   */
  EnableThisSOTPAccount(code: string): Promise<void> {
    let url = `/me/accessRestriction/backupCode/enable`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * validate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode/validate#POST)
   */
  ValidateYourSOTPAccount(code: string): Promise<NichandleaccessRestrictionSOTPValidate> {
    let url = `/me/accessRestriction/backupCode/validate`

    return this.client.request<NichandleaccessRestrictionSOTPValidate>('POST', url, {code})
  }

  /**
   * Login restrictions on a development version of the Manager [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/developerMode#GET)
   */
  /*
  GetThisObjectProperties(): Promise<NichandleDeveloperModeRestriction> {
    let url = `/me/accessRestriction/developerMode`

    return this.client.request<NichandleDeveloperModeRestriction>('GET', url)
  }
  */

  /**
   * Login restrictions on a development version of the Manager [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/developerMode#PUT)
   */
  /*
  AlterThisObjectProperties(payload: NichandleDeveloperModeRestriction): Promise<void> {
    let url = `/me/accessRestriction/developerMode`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the nichandle.IpRestriction objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ip#GET)
   */
  ListOfIPRestrictions(): Promise<number[]> {
    let url = `/me/accessRestriction/ip`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the nichandle.IpRestriction objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ip#POST)
   */
  AddAnIPAccessRestriction(ip: string, rule: NichandleaccessRestrictionIpRestrictionRule, warning: boolean): Promise<void> {
    let url = `/me/accessRestriction/ip`

    return this.client.request<void>('POST', url, {ip, rule, warning})
  }

  /**
   * List of all IP Restrictions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ip/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleIpRestriction> {
    let url = `/me/accessRestriction/ip/${id}`

    return this.client.request<NichandleIpRestriction>('GET', url)
  }
  */

  /**
   * List of all IP Restrictions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ip/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: NichandleIpRestriction): Promise<void> {
    let url = `/me/accessRestriction/ip/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List of all IP Restrictions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ip/%7Bid%7D#DELETE)
   */
  DeleteThisRestrictionRule(id: number): Promise<void> {
    let url = `/me/accessRestriction/ip/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * IP Restriction default rule [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ipDefaultRule#GET)
   */
  /*
  GetThisObjectProperties(): Promise<NichandleIpRestrictionDefaultRule> {
    let url = `/me/accessRestriction/ipDefaultRule`

    return this.client.request<NichandleIpRestrictionDefaultRule>('GET', url)
  }
  */

  /**
   * IP Restriction default rule [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ipDefaultRule#PUT)
   */
  /*
  AlterThisObjectProperties(payload: NichandleIpRestrictionDefaultRule): Promise<void> {
    let url = `/me/accessRestriction/ipDefaultRule`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the nichandle.accessRestriction.SmsAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms#GET)
   */
  ListOfSmsAccounts(): Promise<number[]> {
    let url = `/me/accessRestriction/sms`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the nichandle.accessRestriction.SmsAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms#POST)
   */
  AddASMSAccessRestriction(phone: string): Promise<NichandleaccessRestrictionSmsSecret> {
    let url = `/me/accessRestriction/sms`

    return this.client.request<NichandleaccessRestrictionSmsSecret>('POST', url, {phone})
  }

  /**
   * Sms Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleaccessRestrictionSmsAccount> {
    let url = `/me/accessRestriction/sms/${id}`

    return this.client.request<NichandleaccessRestrictionSmsAccount>('GET', url)
  }
  */

  /**
   * Sms Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: NichandleaccessRestrictionSmsAccount): Promise<void> {
    let url = `/me/accessRestriction/sms/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Sms Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D#DELETE)
   */
  /*
  DeleteThisTwoFactor(id: number): Promise<void> {
    let url = `/me/accessRestriction/sms/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D/disable#POST)
   */
  DisableThisSMSAccount(code: string, id: number): Promise<void> {
    let url = `/me/accessRestriction/sms/${id}/disable`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * enable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D/enable#POST)
   */
  EnableThisSMSAccount(code: string, id: number): Promise<void> {
    let url = `/me/accessRestriction/sms/${id}/enable`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * sendCode operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D/sendCode#POST)
   */
  SendASMSToThisAccount(id: number): Promise<NichandleaccessRestrictionSmsCode> {
    let url = `/me/accessRestriction/sms/${id}/sendCode`

    return this.client.request<NichandleaccessRestrictionSmsCode>('POST', url)
  }

  /**
   * validate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D/validate#POST)
   */
  ValidateYourSMSAccount(code: string, id: number): Promise<void> {
    let url = `/me/accessRestriction/sms/${id}/validate`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * List the nichandle.accessRestriction.TOTPAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp#GET)
   */
  ListOfTOTPAccounts(): Promise<number[]> {
    let url = `/me/accessRestriction/totp`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the nichandle.accessRestriction.TOTPAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp#POST)
   */
  AddATOTPAccessRestriction(): Promise<NichandleaccessRestrictionTOTPSecret> {
    let url = `/me/accessRestriction/totp`

    return this.client.request<NichandleaccessRestrictionTOTPSecret>('POST', url)
  }

  /**
   * TOTP Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleaccessRestrictionTOTPAccount> {
    let url = `/me/accessRestriction/totp/${id}`

    return this.client.request<NichandleaccessRestrictionTOTPAccount>('GET', url)
  }
  */

  /**
   * TOTP Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: NichandleaccessRestrictionTOTPAccount): Promise<void> {
    let url = `/me/accessRestriction/totp/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * TOTP Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D#DELETE)
   */
  /*
  DeleteThisTwoFactor(id: number): Promise<void> {
    let url = `/me/accessRestriction/totp/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D/disable#POST)
   */
  DisableThisTOTPAccount(code: string, id: number): Promise<void> {
    let url = `/me/accessRestriction/totp/${id}/disable`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * enable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D/enable#POST)
   */
  EnableThisTOTPAccount(code: string, id: number): Promise<void> {
    let url = `/me/accessRestriction/totp/${id}/enable`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * validate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D/validate#POST)
   */
  ValidateYourTOTPAccount(code: string, id: number): Promise<void> {
    let url = `/me/accessRestriction/totp/${id}/validate`

    return this.client.request<void>('POST', url, {code})
  }

  /**
   * List the nichandle.accessRestriction.U2FAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f#GET)
   */
  ListOfU2FAccounts(): Promise<number[]> {
    let url = `/me/accessRestriction/u2f`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the nichandle.accessRestriction.U2FAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f#POST)
   */
  AddAU2FAccessRestriction(): Promise<NichandleaccessRestrictionU2FRegisterChallenge> {
    let url = `/me/accessRestriction/u2f`

    return this.client.request<NichandleaccessRestrictionU2FRegisterChallenge>('POST', url)
  }

  /**
   * U2F Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleaccessRestrictionU2FAccount> {
    let url = `/me/accessRestriction/u2f/${id}`

    return this.client.request<NichandleaccessRestrictionU2FAccount>('GET', url)
  }
  */

  /**
   * U2F Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: NichandleaccessRestrictionU2FAccount): Promise<void> {
    let url = `/me/accessRestriction/u2f/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * U2F Two-Factor Authentication [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D#DELETE)
   */
  /*
  DeleteThisTwoFactor(id: number): Promise<void> {
    let url = `/me/accessRestriction/u2f/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * challenge operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D/challenge#POST)
   */
  GetAnU2FChallenge(id: number): Promise<NichandleaccessRestrictionU2FSignChallenge> {
    let url = `/me/accessRestriction/u2f/${id}/challenge`

    return this.client.request<NichandleaccessRestrictionU2FSignChallenge>('POST', url)
  }

  /**
   * disable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D/disable#POST)
   */
  DisableThisU2FAccount(clientData: string, id: number, signatureData: string): Promise<void> {
    let url = `/me/accessRestriction/u2f/${id}/disable`

    return this.client.request<void>('POST', url, {clientData, signatureData})
  }

  /**
   * enable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D/enable#POST)
   */
  EnableThisU2FAccount(clientData: string, id: number, signatureData: string): Promise<void> {
    let url = `/me/accessRestriction/u2f/${id}/enable`

    return this.client.request<void>('POST', url, {clientData, signatureData})
  }

  /**
   * validate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D/validate#POST)
   */
  ValidateYourU2FAccount(clientData: string, id: number, registrationData: string): Promise<void> {
    let url = `/me/accessRestriction/u2f/${id}/validate`

    return this.client.request<void>('POST', url, {clientData, registrationData})
  }

  /**
   * List the agreements.ContractAgreement objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/agreements#GET)
   */
  ListOfContractsSignedBetweenYouAndOVH(agreed?: AgreementsAgreementState, contractId?: number): Promise<number[]> {
    let url = `/me/agreements?`

    const queryParams = new QueryParams()
    if (agreed) { queryParams.set('agreed', agreed.toString()) }
    if (contractId) { queryParams.set('contractId', contractId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Contract agreement [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/agreements/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<AgreementsContractAgreement> {
    let url = `/me/agreements/${id}`

    return this.client.request<AgreementsContractAgreement>('GET', url)
  }
  */

  /**
   * accept operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/agreements/%7Bid%7D/accept#POST)
   */
  AcceptThisContract(id: number): Promise<string> {
    let url = `/me/agreements/${id}/accept`

    return this.client.request<string>('POST', url)
  }

  /**
   * Contract of service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/agreements/%7Bid%7D/contract#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<AgreementsContract> {
    let url = `/me/agreements/${id}/contract`

    return this.client.request<AgreementsContract>('GET', url)
  }
  */

  /**
   * List the api.Application objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/application#GET)
   */
  ListOfYourApiApplication(): Promise<number[]> {
    let url = `/me/api/application`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * API Application [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/application/%7BapplicationId%7D#GET)
   */
  /*
  GetThisObjectProperties(applicationId: number): Promise<Application> {
    let url = `/me/api/application/${applicationId}`

    return this.client.request<Application>('GET', url)
  }
  */

  /**
   * API Application [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/application/%7BapplicationId%7D#DELETE)
   */
  RemoveThisApplicationItWillRevokeAllCredentialBelongingToThisApplication(applicationId: number): Promise<void> {
    let url = `/me/api/application/${applicationId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the api.Credential objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/credential#GET)
   */
  ListOfYourApiCredentials(applicationId?: number, status?: AuthCredentialState): Promise<number[]> {
    let url = `/me/api/credential?`

    const queryParams = new QueryParams()
    if (applicationId) { queryParams.set('applicationId', applicationId.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * API Credential [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/credential/%7BcredentialId%7D#GET)
   */
  /*
  GetThisObjectProperties(credentialId: number): Promise<Credential> {
    let url = `/me/api/credential/${credentialId}`

    return this.client.request<Credential>('GET', url)
  }
  */

  /**
   * API Credential [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/credential/%7BcredentialId%7D#DELETE)
   */
  RemoveThisCredential(credentialId: number): Promise<void> {
    let url = `/me/api/credential/${credentialId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * API Application [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/credential/%7BcredentialId%7D/application#GET)
   */
  /*
  GetThisObjectProperties(credentialId: number): Promise<Application> {
    let url = `/me/api/credential/${credentialId}/application`

    return this.client.request<Application>('GET', url)
  }
  */

  /**
   * List the api.Log objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/logs/self#GET)
   */
  ListOfApiCallsDoneWithYourAccount(): Promise<number[]> {
    let url = `/me/api/logs/self`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * API Log [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/logs/self/%7BlogId%7D#GET)
   */
  /*
  GetThisObjectProperties(logId: number): Promise<Log> {
    let url = `/me/api/logs/self/${logId}`

    return this.client.request<Log>('GET', url)
  }
  */

  /**
   * List the api.Log objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/logs/services#GET)
   */
  ListOfApiCallsDoneOnServicesYouHaveAccessTo(): Promise<number[]> {
    let url = `/me/api/logs/services`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * API Log [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/logs/services/%7BlogId%7D#GET)
   */
  /*
  GetThisObjectProperties(logId: number): Promise<Log> {
    let url = `/me/api/logs/services/${logId}`

    return this.client.request<Log>('GET', url)
  }
  */

  /**
   * Auto renewal information [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/autorenew#GET)
   */
  /*
  GetThisObjectProperties(): Promise<NichandleNicAutorenewInfos> {
    let url = `/me/autorenew`

    return this.client.request<NichandleNicAutorenewInfos>('GET', url)
  }
  */

  /**
   * Auto renewal information [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/autorenew#PUT)
   */
  /*
  AlterThisObjectProperties(payload: NichandleNicAutorenewInfos): Promise<void> {
    let url = `/me/autorenew`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Auto renewal information [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/autorenew#POST)
   */
  ActivateAutoRenewForThisNic(renewDay: number): Promise<void> {
    let url = `/me/autorenew`

    return this.client.request<void>('POST', url, {renewDay})
  }

  /**
   * availableAutomaticPaymentMeans operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/availableAutomaticPaymentMeans#GET)
   */
  ListAvailablePaymentMethodsInThisNicCountry(): Promise<BillingAutomaticPaymentMean> {
    let url = `/me/availableAutomaticPaymentMeans`

    return this.client.request<BillingAutomaticPaymentMean>('GET', url)
  }

  /**
   * List the billing.Bill objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill#GET)
   */
  ListOfAllTheBillsTheLoggedAccountHas(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]> {
    let url = `/me/bill?`

    const queryParams = new QueryParams()
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }
    if (orderId) { queryParams.set('orderId', orderId.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a Bill [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D#GET)
   */
  /*
  GetThisObjectProperties(billId: string): Promise<BillingBill> {
    let url = `/me/bill/${billId}`

    return this.client.request<BillingBill>('GET', url)
  }
  */

  /**
   * State of a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/debt#GET)
   */
  /*
  GetThisObjectProperties(billId: string): Promise<DebtDebt> {
    let url = `/me/bill/${billId}/debt`

    return this.client.request<DebtDebt>('GET', url)
  }
  */

  /**
   * List the debt.Operation objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/debt/operation#GET)
   */
  AllOperationsRelatedToTheseDebts(billId: string, depositOrderId?: number): Promise<number[]> {
    let url = `/me/bill/${billId}/debt/operation?`

    const queryParams = new QueryParams()
    if (depositOrderId) { queryParams.set('depositOrderId', depositOrderId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation that happend on a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/debt/operation/%7BoperationId%7D#GET)
   */
  /*
  GetThisObjectProperties(billId: string, operationId: number): Promise<DebtOperation> {
    let url = `/me/bill/${billId}/debt/operation/${operationId}`

    return this.client.request<DebtOperation>('GET', url)
  }
  */

  /**
   * associatedObject operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/debt/operation/%7BoperationId%7D/associatedObject#GET)
   */
  ReturnMainDataAboutTheObjectRelatedToThisDebtOperation(billId: string, operationId: number): Promise<DebtentryAssociatedObject> {
    let url = `/me/bill/${billId}/debt/operation/${operationId}/associatedObject`

    return this.client.request<DebtentryAssociatedObject>('GET', url)
  }

  /**
   * pay operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/debt/pay#POST)
   */
  CreateAnOrderInOrderToPayThisOrderDebt(billId: string): Promise<BillingOrder> {
    let url = `/me/bill/${billId}/debt/pay`

    return this.client.request<BillingOrder>('POST', url)
  }

  /**
   * List the billing.BillDetail objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/details#GET)
   */
  GiveAccessToAllEntriesOfTheBill(billId: string): Promise<string[]> {
    let url = `/me/bill/${billId}/details`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Information about a Bill entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/details/%7BbillDetailId%7D#GET)
   */
  /*
  GetThisObjectProperties(billDetailId: string, billId: string): Promise<BillingBillDetail> {
    let url = `/me/bill/${billId}/details/${billDetailId}`

    return this.client.request<BillingBillDetail>('GET', url)
  }
  */

  /**
   * Details about a payment [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/payment#GET)
   */
  /*
  GetThisObjectProperties(billId: string): Promise<BillingPayment> {
    let url = `/me/bill/${billId}/payment`

    return this.client.request<BillingPayment>('GET', url)
  }
  */

  /**
   * Manage billing groups [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group#GET)
   */
  RetrieveAllBillingGroups(name?: string): Promise<number[]> {
    let url = `/me/billing/group?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Manage billing groups [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group#POST)
   */
  CreateANewBillingGroup(payload: MebillinggroupBillingGroup): Promise<MebillinggroupBillingGroup> {
    let url = `/me/billing/group`

    return this.client.request<MebillinggroupBillingGroup>('POST', url, payload)
  }

  /**
   * Manage billing groups [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D#DELETE)
   */
  DeleteABillingGroup(groupId: number): Promise<void> {
    let url = `/me/billing/group/${groupId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Manage billing groups [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D#GET)
   */
  RetrieveInformationAboutABillingGroup(groupId: number): Promise<MebillinggroupBillingGroup> {
    let url = `/me/billing/group/${groupId}`

    return this.client.request<MebillinggroupBillingGroup>('GET', url)
  }

  /**
   * Manage billing groups [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D#PUT)
   */
  EditBillingGroup(groupId: number, payload: MebillinggroupBillingGroup): Promise<void> {
    let url = `/me/billing/group/${groupId}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service#GET)
   */
  RetrieveBillingGroupServiceIDList(groupId: number): Promise<number[]> {
    let url = `/me/billing/group/${groupId}/service`

    return this.client.request<number[]>('GET', url)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service#POST)
   */
  AssociateAServiceToABillingGroup(groupId: number, payload: MebillinggroupserviceCreate): Promise<MebillinggroupService> {
    let url = `/me/billing/group/${groupId}/service`

    return this.client.request<MebillinggroupService>('POST', url, payload)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service/%7BserviceId%7D#DELETE)
   */
  UnlinkAServiceFromABillingGroup(groupId: number, serviceId: number): Promise<void> {
    let url = `/me/billing/group/${groupId}/service/${serviceId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   *  [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service/%7BserviceId%7D#GET)
   */
  RetrieveInformationAboutABillingGroupService(groupId: number, serviceId: number): Promise<MebillinggroupService> {
    let url = `/me/billing/group/${groupId}/service/${serviceId}`

    return this.client.request<MebillinggroupService>('GET', url)
  }

  /**
   * invoicesByPostalMail operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/invoicesByPostalMail#POST)
   */
  EnableOrDisableInvoicesByPostalMail(enable: boolean): Promise<void> {
    let url = `/me/billing/invoicesByPostalMail`

    return this.client.request<void>('POST', url, {enable})
  }

  /**
   * invoicesByPostalMail operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/invoicesByPostalMail#GET)
   */
  SendInvoicesThroughPostalMail(): Promise<boolean> {
    let url = `/me/billing/invoicesByPostalMail`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * Get all certificates of the account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/certificates#GET)
   */
  GetAllCertificatesOfTheAccount(name?: string): Promise<string[]> {
    let url = `/me/certificates?`

    const queryParams = new QueryParams()
    if (name) { queryParams.set('name', name) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * changeEmail operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/changeEmail#POST)
   */
  InitiateAnEmailChangeProcedure(newEmail: string): Promise<NichandleemailChangeTask> {
    let url = `/me/changeEmail`

    return this.client.request<NichandleemailChangeTask>('POST', url, {newEmail})
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/changePassword#POST)
   */
  InitiateAPasswordChangeProcedure(): Promise<void> {
    let url = `/me/changePassword`

    return this.client.request<void>('POST', url)
  }

  /**
   * List all consent campaign available [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent#GET)
   */
  ListAllConsentCampaignAvailable(): Promise<MeconsentCampaign[]> {
    let url = `/me/consent`

    return this.client.request<MeconsentCampaign[]>('GET', url)
  }

  /**
   * Retrieve information about a consent campaign [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent/%7BcampaignName%7D#GET)
   */
  RetrieveInformationAboutAConsentCampaign(campaignName: string): Promise<MeconsentCampaign> {
    let url = `/me/consent/${campaignName}`

    return this.client.request<MeconsentCampaign>('GET', url)
  }

  /**
   * Get decision value for a consent campaign [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent/%7BcampaignName%7D/decision#GET)
   */
  GetDecisionValueForAConsentCampaign(campaignName: string): Promise<MeconsentConsent> {
    let url = `/me/consent/${campaignName}/decision`

    return this.client.request<MeconsentConsent>('GET', url)
  }

  /**
   * Get decision value for a consent campaign [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent/%7BcampaignName%7D/decision#PUT)
   */
  UpdateDecisionOfAConsentCampaign(campaignName: string, value: boolean): Promise<void> {
    let url = `/me/consent/${campaignName}/decision`

    return this.client.request<void>('PUT', url, {value})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consumption/usage/current#GET)
   */
  GetOngoingConsumptionsForAllServices(): Promise<MeconsumptionTransaction[]> {
    let url = `/me/consumption/usage/current`

    return this.client.request<MeconsumptionTransaction[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consumption/usage/forecast#GET)
   */
  GetForecastedConsumptionsForAllServices(): Promise<MeconsumptionTransaction[]> {
    let url = `/me/consumption/usage/forecast`

    return this.client.request<MeconsumptionTransaction[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consumption/usage/history#GET)
   */
  GetListOfTransactionsBetweenTwoDates(beginDate: string, endDate: string): Promise<MeconsumptionTransaction[]> {
    let url = `/me/consumption/usage/history?`

    const queryParams = new QueryParams()
    if (beginDate) { queryParams.set('beginDate', beginDate.toString()) }
    if (endDate) { queryParams.set('endDate', endDate.toString()) }

    return this.client.request<MeconsumptionTransaction[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact#GET)
   */
  RetrieveAllContactThatYouCreated(): Promise<number[]> {
    let url = `/me/contact`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact#POST)
   */
  CreateANewContact(address: ContactAddress, email: string, firstName: string, language: NichandleLanguage, lastName: string, legalForm: NichandleLegalForm, phone: any, birthCity?: string, birthCountry?: NichandleCountry, birthDay?: string, birthZip?: string, cellPhone?: any, companyNationalIdentificationNumber?: string, fax?: any, gender?: NichandleGender, nationalIdentificationNumber?: string, nationality?: NichandleCountry, organisationName?: string, organisationType?: string, vat?: string): Promise<ContactContact> {
    let url = `/me/contact`

    return this.client.request<ContactContact>('POST', url, {address, email, firstName, language, lastName, legalForm, phone, birthCity, birthCountry, birthDay, birthZip, cellPhone, companyNationalIdentificationNumber, fax, gender, nationalIdentificationNumber, nationality, organisationName, organisationType, vat})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact/%7BcontactId%7D#GET)
   */
  RetrieveInformationAboutAContact(contactId: number): Promise<ContactContact> {
    let url = `/me/contact/${contactId}`

    return this.client.request<ContactContact>('GET', url)
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact/%7BcontactId%7D#PUT)
   */
  UpdateAnExistingContact(contactId: number, address?: ContactAddress, birthCity?: string, birthCountry?: NichandleCountry, birthDay?: string, birthZip?: string, cellPhone?: any, companyNationalIdentificationNumber?: string, email?: string, fax?: any, firstName?: string, gender?: NichandleGender, language?: NichandleLanguage, lastName?: string, legalForm?: NichandleLegalForm, nationalIdentificationNumber?: string, nationality?: NichandleCountry, organisationName?: string, organisationType?: string, phone?: any, vat?: string): Promise<ContactContact> {
    let url = `/me/contact/${contactId}`

    return this.client.request<ContactContact>('PUT', url, {address, birthCity, birthCountry, birthDay, birthZip, cellPhone, companyNationalIdentificationNumber, email, fax, firstName, gender, language, lastName, legalForm, nationalIdentificationNumber, nationality, organisationName, organisationType, phone, vat})
  }

  /**
   * Missing description [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact/%7BcontactId%7D/fields#GET)
   */
  DisplayMandatoryreadonlyInformationsOfAContact(contactId: number): Promise<ContactFieldInformation[]> {
    let url = `/me/contact/${contactId}/fields`

    return this.client.request<ContactFieldInformation[]>('GET', url)
  }

  /**
   * Retrieve credit balance names [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance#GET)
   */
  RetrieveCreditBalanceNames(type?: BillingcreditbalanceType): Promise<string[]> {
    let url = `/me/credit/balance?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Retrieve a credit balance [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance/%7BbalanceName%7D#GET)
   */
  RetrieveACreditBalance(balanceName: string): Promise<BillingcreditBalance> {
    let url = `/me/credit/balance/${balanceName}`

    return this.client.request<BillingcreditBalance>('GET', url)
  }

  /**
   * Retrieve movements for a specific balance [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance/%7BbalanceName%7D/movement#GET)
   */
  RetrieveMovementsForASpecificBalance(balanceName: string): Promise<number[]> {
    let url = `/me/credit/balance/${balanceName}/movement`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Retrieve a specific movement for a credit balance [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance/%7BbalanceName%7D/movement/%7BmovementId%7D#GET)
   */
  RetrieveASpecificMovementForACreditBalance(balanceName: string, movementId: number): Promise<BillingcreditbalanceMovement> {
    let url = `/me/credit/balance/${balanceName}/movement/${movementId}`

    return this.client.request<BillingcreditbalanceMovement>('GET', url)
  }

  /**
   * Validate a code to generate associated credit [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/code#POST)
   */
  ValidateACodeToGenerateAssociatedCreditMovement(inputCode: string, serviceId?: number): Promise<BillingcreditbalanceMovement> {
    let url = `/me/credit/code`

    return this.client.request<BillingcreditbalanceMovement>('POST', url, {inputCode, serviceId})
  }

  /**
   * Debt balance of the account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount#GET)
   */
  /*
  GetThisObjectProperties(): Promise<DebtBalance> {
    let url = `/me/debtAccount`

    return this.client.request<DebtBalance>('GET', url)
  }
  */

  /**
   * List the debt.Debt objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount/debt#GET)
   */
  AllDebtsRelatedToYourAccount(): Promise<number[]> {
    let url = `/me/debtAccount/debt`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * State of a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount/debt/%7BdebtId%7D#GET)
   */
  /*
  GetThisObjectProperties(debtId: number): Promise<DebtDebt> {
    let url = `/me/debtAccount/debt/${debtId}`

    return this.client.request<DebtDebt>('GET', url)
  }
  */

  /**
   * List the debt.Operation objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount/debt/%7BdebtId%7D/operation#GET)
   */
  /*
  AllOperationsRelatedToTheseDebts(debtId: number, depositOrderId?: number): Promise<number[]> {
    let url = `/me/debtAccount/debt/${debtId}/operation?`

    const queryParams = new QueryParams()
    if (depositOrderId) { queryParams.set('depositOrderId', depositOrderId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Operation that happend on a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount/debt/%7BdebtId%7D/operation/%7BoperationId%7D#GET)
   */
  /*
  GetThisObjectProperties(debtId: number, operationId: number): Promise<DebtOperation> {
    let url = `/me/debtAccount/debt/${debtId}/operation/${operationId}`

    return this.client.request<DebtOperation>('GET', url)
  }
  */

  /**
   * associatedObject operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount/debt/%7BdebtId%7D/operation/%7BoperationId%7D/associatedObject#GET)
   */
  /*
  ReturnMainDataAboutTheObjectRelatedToThisDebtOperation(debtId: number, operationId: number): Promise<DebtentryAssociatedObject> {
    let url = `/me/debtAccount/debt/${debtId}/operation/${operationId}/associatedObject`

    return this.client.request<DebtentryAssociatedObject>('GET', url)
  }
  */

  /**
   * pay operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount/debt/%7BdebtId%7D/pay#POST)
   */
  /*
  CreateAnOrderInOrderToPayThisOrderDebt(debtId: number): Promise<BillingOrder> {
    let url = `/me/debtAccount/debt/${debtId}/pay`

    return this.client.request<BillingOrder>('POST', url)
  }
  */

  /**
   * pay operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/debtAccount/pay#POST)
   */
  CreateAnOrderInOrderToPayAllYourDueDebts(): Promise<BillingOrder> {
    let url = `/me/debtAccount/pay`

    return this.client.request<BillingOrder>('POST', url)
  }

  /**
   * List the billing.Deposit objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit#GET)
   */
  ListOfAllTheDepositsMadeToYourPrepaidAccountOrDebtAccount(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]> {
    let url = `/me/deposit?`

    const queryParams = new QueryParams()
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }
    if (orderId) { queryParams.set('orderId', orderId.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a deposit [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D#GET)
   */
  /*
  GetThisObjectProperties(depositId: string): Promise<BillingDeposit> {
    let url = `/me/deposit/${depositId}`

    return this.client.request<BillingDeposit>('GET', url)
  }
  */

  /**
   * List the billing.DepositDetail objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/details#GET)
   */
  GiveAccessToAllEntriesOfThisDeposit(depositId: string): Promise<string[]> {
    let url = `/me/deposit/${depositId}/details`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Information about a Deposit entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/details/%7BdepositDetailId%7D#GET)
   */
  /*
  GetThisObjectProperties(depositDetailId: string, depositId: string): Promise<BillingDepositDetail> {
    let url = `/me/deposit/${depositId}/details/${depositDetailId}`

    return this.client.request<BillingDepositDetail>('GET', url)
  }
  */

  /**
   * List the billing.Bill objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills#GET)
   */
  GetInvoicesPaidByThisDeposit(depositId: string): Promise<string[]> {
    let url = `/me/deposit/${depositId}/paidBills`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Details about a Bill [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D#GET)
   */
  /*
  GetThisObjectProperties(billId: string, depositId: string): Promise<BillingBill> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}`

    return this.client.request<BillingBill>('GET', url)
  }
  */

  /**
   * State of a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/debt#GET)
   */
  /*
  GetThisObjectProperties(billId: string, depositId: string): Promise<DebtDebt> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/debt`

    return this.client.request<DebtDebt>('GET', url)
  }
  */

  /**
   * List the debt.Operation objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/debt/operation#GET)
   */
  /*
  AllOperationsRelatedToTheseDebts(billId: string, depositId: string, depositOrderId?: number): Promise<number[]> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/debt/operation?`

    const queryParams = new QueryParams()
    if (depositOrderId) { queryParams.set('depositOrderId', depositOrderId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Operation that happend on a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/debt/operation/%7BoperationId%7D#GET)
   */
  /*
  GetThisObjectProperties(billId: string, depositId: string, operationId: number): Promise<DebtOperation> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/debt/operation/${operationId}`

    return this.client.request<DebtOperation>('GET', url)
  }
  */

  /**
   * associatedObject operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/debt/operation/%7BoperationId%7D/associatedObject#GET)
   */
  /*
  ReturnMainDataAboutTheObjectRelatedToThisDebtOperation(billId: string, depositId: string, operationId: number): Promise<DebtentryAssociatedObject> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/debt/operation/${operationId}/associatedObject`

    return this.client.request<DebtentryAssociatedObject>('GET', url)
  }
  */

  /**
   * pay operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/debt/pay#POST)
   */
  /*
  CreateAnOrderInOrderToPayThisOrderDebt(billId: string, depositId: string): Promise<BillingOrder> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/debt/pay`

    return this.client.request<BillingOrder>('POST', url)
  }
  */

  /**
   * List the billing.BillDetail objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/details#GET)
   */
  /*
  GiveAccessToAllEntriesOfTheBill(billId: string, depositId: string): Promise<string[]> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/details`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Information about a Bill entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/details/%7BbillDetailId%7D#GET)
   */
  /*
  GetThisObjectProperties(billDetailId: string, billId: string, depositId: string): Promise<BillingBillDetail> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/details/${billDetailId}`

    return this.client.request<BillingBillDetail>('GET', url)
  }
  */

  /**
   * Details about a payment [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/paidBills/%7BbillId%7D/payment#GET)
   */
  /*
  GetThisObjectProperties(billId: string, depositId: string): Promise<BillingPayment> {
    let url = `/me/deposit/${depositId}/paidBills/${billId}/payment`

    return this.client.request<BillingPayment>('GET', url)
  }
  */

  /**
   * Details about a payment [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit/%7BdepositId%7D/payment#GET)
   */
  /*
  GetThisObjectProperties(depositId: string): Promise<BillingPayment> {
    let url = `/me/deposit/${depositId}/payment`

    return this.client.request<BillingPayment>('GET', url)
  }
  */

  /**
   * List the nichandle.document.Document objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document#GET)
   */
  ListOfDocumentsAddedInYourAccount(): Promise<string[]> {
    let url = `/me/document`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the nichandle.document.Document objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document#POST)
   */
  CreateNewDocument(name: string, tags?: any): Promise<NichandledocumentDocument> {
    let url = `/me/document`

    return this.client.request<NichandledocumentDocument>('POST', url, {name, tags})
  }

  /**
   * List of documents added on your account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: string): Promise<NichandledocumentDocument> {
    let url = `/me/document/${id}`

    return this.client.request<NichandledocumentDocument>('GET', url)
  }
  */

  /**
   * List of documents added on your account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: string, payload: NichandledocumentDocument): Promise<void> {
    let url = `/me/document/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List of documents added on your account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document/%7Bid%7D#DELETE)
   */
  DeleteADocument(id: string): Promise<void> {
    let url = `/me/document/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Add CORS support on your container [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document/cors#POST)
   */
  AddCORSSupportOnYourContainer(origin: string): Promise<void> {
    let url = `/me/document/cors`

    return this.client.request<void>('POST', url, {origin})
  }

  /**
   * List the telephony.MailDomain2Service objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fax/customDomains#GET)
   */
  GetTheFaxCustomDomainsLinkedToTheCustomerAccount(): Promise<number[]> {
    let url = `/me/fax/customDomains`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.MailDomain2Service objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fax/customDomains#POST)
   */
  CreateACustomDomainForYourFaxServices(domain: string): Promise<TelephonyMailDomain2Service> {
    let url = `/me/fax/customDomains`

    return this.client.request<TelephonyMailDomain2Service>('POST', url, {domain})
  }

  /**
   * Custom domains of your fax services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fax/customDomains/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<TelephonyMailDomain2Service> {
    let url = `/me/fax/customDomains/${id}`

    return this.client.request<TelephonyMailDomain2Service>('GET', url)
  }
  */

  /**
   * Custom domains of your fax services [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fax/customDomains/%7Bid%7D#DELETE)
   */
  DeleteACustomDomainOfYourFaxServices(id: number): Promise<void> {
    let url = `/me/fax/customDomains/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Balance of the fidelity account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fidelityAccount#GET)
   */
  /*
  GetThisObjectProperties(): Promise<BillingFidelityAccount> {
    let url = `/me/fidelityAccount`

    return this.client.request<BillingFidelityAccount>('GET', url)
  }
  */

  /**
   * Balance of the fidelity account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fidelityAccount#PUT)
   */
  /*
  AlterThisObjectProperties(payload: BillingFidelityAccount): Promise<void> {
    let url = `/me/fidelityAccount`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * creditOrder operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fidelityAccount/creditOrder#POST)
   */
  GenerateAnOrderThatCanBePaidInOrderToCreditTheFidelityAccount(amount: number): Promise<BillingOrder> {
    let url = `/me/fidelityAccount/creditOrder`

    return this.client.request<BillingOrder>('POST', url, {amount})
  }

  /**
   * List the billing.FidelityMovement objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fidelityAccount/movements#GET)
   */
  ListOfEntriesOfTheFidelityAccount(dateFrom?: string, dateTo?: string): Promise<number[]> {
    let url = `/me/fidelityAccount/movements?`

    const queryParams = new QueryParams()
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a fidelity account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fidelityAccount/movements/%7BmovementId%7D#GET)
   */
  /*
  GetThisObjectProperties(movementId: number): Promise<BillingFidelityMovement> {
    let url = `/me/fidelityAccount/movements/${movementId}`

    return this.client.request<BillingFidelityMovement>('GET', url)
  }
  */

  /**
   * Route for getting visitor's country and continent [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/geolocation#POST)
   */
  FetchVisitorCountryAndRegion(): Promise<GeolocationContinentCountryLocation> {
    let url = `/me/geolocation`

    return this.client.request<GeolocationContinentCountryLocation>('POST', url)
  }

  /**
   * Groups linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group#GET)
   */
  RetrieveAllGroupsOfThisAccount(): Promise<string[]> {
    let url = `/me/identity/group`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Groups linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group#POST)
   */
  CreateANewGroup(name: string, description?: string, role?: NichandleAuthenticationRole): Promise<NichandleAuthenticationGroup> {
    let url = `/me/identity/group`

    return this.client.request<NichandleAuthenticationGroup>('POST', url, {name, description, role})
  }

  /**
   * A group linked to this account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group/%7Bgroup%7D#GET)
   */
  /*
  GetThisObjectProperties(group: string): Promise<NichandleAuthenticationGroup> {
    let url = `/me/identity/group/${group}`

    return this.client.request<NichandleAuthenticationGroup>('GET', url)
  }
  */

  /**
   * A group linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group/%7Bgroup%7D#DELETE)
   */
  DeleteThisObject(group: string): Promise<void> {
    let url = `/me/identity/group/${group}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * A group linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group/%7Bgroup%7D#PUT)
   */
  AlterAGroup(group: string, description?: string, role?: NichandleAuthenticationRole): Promise<void> {
    let url = `/me/identity/group/${group}`

    return this.client.request<void>('PUT', url, {description, role})
  }

  /**
   * Users linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user#GET)
   */
  RetrieveAllUsersOfThisAccount(): Promise<string[]> {
    let url = `/me/identity/user`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Users linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user#POST)
   */
  CreateANewUser(email: string, login: string, password: string, description?: string, group?: string): Promise<void> {
    let url = `/me/identity/user`

    return this.client.request<void>('POST', url, {email, login, password, description, group})
  }

  /**
   * A user linked to this account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user/%7Buser%7D#GET)
   */
  /*
  GetThisObjectProperties(user: string): Promise<NichandleUser> {
    let url = `/me/identity/user/${user}`

    return this.client.request<NichandleUser>('GET', url)
  }
  */

  /**
   * A user linked to this account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user/%7Buser%7D#DELETE)
   */
  /*
  DeleteThisObject(user: string): Promise<void> {
    let url = `/me/identity/user/${user}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * A user linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user/%7Buser%7D#PUT)
   */
  AlterAUser(user: string, description?: string, email?: string, group?: string): Promise<void> {
    let url = `/me/identity/user/${user}`

    return this.client.request<void>('PUT', url, {description, email, group})
  }

  /**
   * A user linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user/%7Buser%7D/disable#POST)
   */
  DisableThisUser(user: string): Promise<void> {
    let url = `/me/identity/user/${user}/disable`

    return this.client.request<void>('POST', url)
  }

  /**
   * A user linked to this account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user/%7Buser%7D/enable#POST)
   */
  EnableThisUser(user: string): Promise<void> {
    let url = `/me/identity/user/${user}/enable`

    return this.client.request<void>('POST', url)
  }

  /**
   * Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...) [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/insight#GET)
   */
  GetYourInsightAccessToken(): Promise<InsightAccess> {
    let url = `/me/insight`

    return this.client.request<InsightAccess>('GET', url)
  }

  /**
   * List the dedicated.installationTemplate.Templates objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate#GET)
   */
  YourCustomizedOperatingSystemInstallationTemplates(): Promise<string[]> {
    let url = `/me/installationTemplate`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.installationTemplate.Templates objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate#POST)
   */
  CreateATemplate(baseTemplateName: string, defaultLanguage: DedicatedTemplateOsLanguage, name: string): Promise<void> {
    let url = `/me/installationTemplate`

    return this.client.request<void>('POST', url, {baseTemplateName, defaultLanguage, name})
  }

  /**
   * Available installation templates [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D#GET)
   */
  /*
  GetThisObjectProperties(templateName: string): Promise<DedicatedinstallationTemplateTemplates> {
    let url = `/me/installationTemplate/${templateName}`

    return this.client.request<DedicatedinstallationTemplateTemplates>('GET', url)
  }
  */

  /**
   * Available installation templates [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(templateName: string, payload: DedicatedinstallationTemplateTemplates): Promise<void> {
    let url = `/me/installationTemplate/${templateName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Available installation templates [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D#DELETE)
   */
  RemoveThisTemplate(templateName: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * checkIntegrity operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/checkIntegrity#POST)
   */
  CheckTheIntegrityOfThisTemplate(templateName: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/checkIntegrity`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme#GET)
   */
  PartitioningSchemesAvailableOnThisTemplate(templateName: string): Promise<string[]> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme#POST)
   */
  AddASchemeOfPartition(name: string, priority: number, templateName: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme`

    return this.client.request<void>('POST', url, {name, priority})
  }

  /**
   * Partitioning schemes available on this template [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D#GET)
   */
  /*
  GetThisObjectProperties(schemeName: string, templateName: string): Promise<DedicatedinstallationTemplatetemplatePartitioningSchemes> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}`

    return this.client.request<DedicatedinstallationTemplatetemplatePartitioningSchemes>('GET', url)
  }
  */

  /**
   * Partitioning schemes available on this template [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(schemeName: string, templateName: string, payload: DedicatedinstallationTemplatetemplatePartitioningSchemes): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Partitioning schemes available on this template [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D#DELETE)
   */
  RemoveThisSchemeOfPartition(schemeName: string, templateName: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the dedicated.installationTemplate.hardwareRaid objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid#GET)
   */
  HardwareRAIDsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.installationTemplate.hardwareRaid objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid#POST)
   */
  AddAnHardwareRAIDInThisPartitioningScheme(disks: string[], mode: DedicatedTemplateOsHardwareRaid, name: string, schemeName: string, step: number, templateName: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`

    return this.client.request<void>('POST', url, {disks, mode, name, step})
  }

  /**
   * Hardware RAID defined in this partitioning scheme [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, schemeName: string, templateName: string): Promise<DedicatedinstallationTemplatehardwareRaid> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid/${name}`

    return this.client.request<DedicatedinstallationTemplatehardwareRaid>('GET', url)
  }
  */

  /**
   * Hardware RAID defined in this partitioning scheme [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid/%7Bname%7D#PUT)
   */
  /*
  AlterThisObjectProperties(name: string, schemeName: string, templateName: string, payload: DedicatedinstallationTemplatehardwareRaid): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid/${name}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Hardware RAID defined in this partitioning scheme [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid/%7Bname%7D#DELETE)
   */
  RemoveThisRAID(name: string, schemeName: string, templateName: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid/${name}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the dedicated.installationTemplate.templatePartitions objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition#GET)
   */
  PartitionsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the dedicated.installationTemplate.templatePartitions objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition#POST)
   */
  AddAPartitionInThisPartitioningScheme(filesystem: DedicatedTemplateOsFileSystem, mountpoint: string, schemeName: string, size: number, step: number, templateName: string, type: DedicatedTemplatePartitionType, raid?: number, volumeName?: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`

    return this.client.request<void>('POST', url, {filesystem, mountpoint, size, step, type, raid, volumeName})
  }

  /**
   *  Partitions defined in this partitioning scheme [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition/%7Bmountpoint%7D#GET)
   */
  /*
  GetThisObjectProperties(mountpoint: string, schemeName: string, templateName: string): Promise<DedicatedinstallationTemplatetemplatePartitions> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition/${mountpoint}`

    return this.client.request<DedicatedinstallationTemplatetemplatePartitions>('GET', url)
  }
  */

  /**
   *  Partitions defined in this partitioning scheme [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition/%7Bmountpoint%7D#PUT)
   */
  /*
  AlterThisObjectProperties(mountpoint: string, schemeName: string, templateName: string, payload: DedicatedinstallationTemplatetemplatePartitions): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition/${mountpoint}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   *  Partitions defined in this partitioning scheme [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition/%7Bmountpoint%7D#DELETE)
   */
  RemoveThisPartition(mountpoint: string, schemeName: string, templateName: string): Promise<void> {
    let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition/${mountpoint}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the nichandle.Ipv4Org objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipOrganisation#GET)
   */
  ListOfOrganisations(): Promise<string[]> {
    let url = `/me/ipOrganisation`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the nichandle.Ipv4Org objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipOrganisation#POST)
   */
  AddAnOrganisation(abuse_mailbox: string, address: string, city: string, country: NichandleCountry, firstname: string, lastname: string, phone: any, registry: NichandleIpRegistry, state?: string, zip?: string): Promise<void> {
    let url = `/me/ipOrganisation`

    return this.client.request<void>('POST', url, {abuse_mailbox, address, city, country, firstname, lastname, phone, registry, state, zip})
  }

  /**
   * Details about an IP block organisation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipOrganisation/%7BorganisationId%7D#GET)
   */
  /*
  GetThisObjectProperties(organisationId: string): Promise<NichandleIpv4Org> {
    let url = `/me/ipOrganisation/${organisationId}`

    return this.client.request<NichandleIpv4Org>('GET', url)
  }
  */

  /**
   * Details about an IP block organisation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipOrganisation/%7BorganisationId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(organisationId: string, payload: NichandleIpv4Org): Promise<void> {
    let url = `/me/ipOrganisation/${organisationId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Details about an IP block organisation [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipOrganisation/%7BorganisationId%7D#DELETE)
   */
  DeleteThisOrganisation(organisationId: string): Promise<void> {
    let url = `/me/ipOrganisation/${organisationId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the nichandle.ipxe objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipxeScript#GET)
   */
  ListOfAllYourIPXEScripts(): Promise<string[]> {
    let url = `/me/ipxeScript`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the nichandle.ipxe objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipxeScript#POST)
   */
  AddAnIPXEScript(description: string, name: string, script: string): Promise<Nichandleipxe> {
    let url = `/me/ipxeScript`

    return this.client.request<Nichandleipxe>('POST', url, {description, name, script})
  }

  /**
   * Customer IPXE scripts [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipxeScript/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string): Promise<Nichandleipxe> {
    let url = `/me/ipxeScript/${name}`

    return this.client.request<Nichandleipxe>('GET', url)
  }
  */

  /**
   * Customer IPXE scripts [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipxeScript/%7Bname%7D#DELETE)
   */
  RemoveThisIPXEScript(name: string): Promise<void> {
    let url = `/me/ipxeScript/${name}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * availableLists operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/mailingList/availableLists#GET)
   */
  ListOfMailingListYouCanSubscribe(): Promise<string[]> {
    let url = `/me/mailingList/availableLists`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * subscribe operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/mailingList/subscribe#POST)
   */
  SubscribeAnEmailToARestrictedMailingList(email: string, mailingList: string): Promise<void> {
    let url = `/me/mailingList/subscribe`

    return this.client.request<void>('POST', url, {email, mailingList})
  }

  /**
   * List the nichandle.emailNotification objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/notification/email/history#GET)
   */
  ListOfAllYourEmailNotifications(): Promise<number[]> {
    let url = `/me/notification/email/history`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Email notification [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/notification/email/history/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleemailNotification> {
    let url = `/me/notification/email/history/${id}`

    return this.client.request<NichandleemailNotification>('GET', url)
  }
  */

  /**
   * List the billing.Order objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order#GET)
   */
  ListOfAllTheOrdersTheLoggedAccountHas(dateFrom?: string, dateTo?: string): Promise<number[]> {
    let url = `/me/order?`

    const queryParams = new QueryParams()
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about an Order [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D#GET)
   */
  /*
  GetThisObjectProperties(orderId: number): Promise<BillingOrder> {
    let url = `/me/order/${orderId}`

    return this.client.request<BillingOrder>('GET', url)
  }
  */

  /**
   * associatedObject operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/associatedObject#GET)
   */
  ReturnMainDataAboutTheObjectTheProcessingOfTheOrderGenerated(orderId: number): Promise<BillingorderAssociatedObject> {
    let url = `/me/order/${orderId}/associatedObject`

    return this.client.request<BillingorderAssociatedObject>('GET', url)
  }

  /**
   * availableRegisteredPaymentMean operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/availableRegisteredPaymentMean#GET)
   */
  ListOfRegisteredPaymentMeanYouCanUseToPayThisOrder(orderId: number): Promise<BillingorderRegisteredPaymentMean[]> {
    let url = `/me/order/${orderId}/availableRegisteredPaymentMean`

    return this.client.request<BillingorderRegisteredPaymentMean[]>('GET', url)
  }

  /**
   * Details about a Bill [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/bill#GET)
   */
  /*
  GetThisObjectProperties(orderId: number): Promise<BillingBill> {
    let url = `/me/order/${orderId}/bill`

    return this.client.request<BillingBill>('GET', url)
  }
  */

  /**
   * State of a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/debt#GET)
   */
  /*
  GetThisObjectProperties(orderId: number): Promise<DebtDebt> {
    let url = `/me/order/${orderId}/debt`

    return this.client.request<DebtDebt>('GET', url)
  }
  */

  /**
   * List the debt.Operation objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/debt/operation#GET)
   */
  /*
  AllOperationsRelatedToTheseDebts(orderId: number, depositOrderId?: number): Promise<number[]> {
    let url = `/me/order/${orderId}/debt/operation?`

    const queryParams = new QueryParams()
    if (depositOrderId) { queryParams.set('depositOrderId', depositOrderId.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Operation that happend on a debt [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/debt/operation/%7BoperationId%7D#GET)
   */
  /*
  GetThisObjectProperties(operationId: number, orderId: number): Promise<DebtOperation> {
    let url = `/me/order/${orderId}/debt/operation/${operationId}`

    return this.client.request<DebtOperation>('GET', url)
  }
  */

  /**
   * associatedObject operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/debt/operation/%7BoperationId%7D/associatedObject#GET)
   */
  /*
  ReturnMainDataAboutTheObjectRelatedToThisDebtOperation(operationId: number, orderId: number): Promise<DebtentryAssociatedObject> {
    let url = `/me/order/${orderId}/debt/operation/${operationId}/associatedObject`

    return this.client.request<DebtentryAssociatedObject>('GET', url)
  }
  */

  /**
   * pay operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/debt/pay#POST)
   */
  /*
  CreateAnOrderInOrderToPayThisOrderDebt(orderId: number): Promise<BillingOrder> {
    let url = `/me/order/${orderId}/debt/pay`

    return this.client.request<BillingOrder>('POST', url)
  }
  */

  /**
   * List the billing.OrderDetail objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/details#GET)
   */
  GiveAccessToAllEntriesOfTheOrder(orderId: number): Promise<number[]> {
    let url = `/me/order/${orderId}/details`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Information about a Bill entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/details/%7BorderDetailId%7D#GET)
   */
  /*
  GetThisObjectProperties(orderDetailId: number, orderId: number): Promise<BillingOrderDetail> {
    let url = `/me/order/${orderId}/details/${orderDetailId}`

    return this.client.request<BillingOrderDetail>('GET', url)
  }
  */

  /**
   * Extensions of a detail [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/details/%7BorderDetailId%7D/extension#GET)
   */
  /*
  GetThisObjectProperties(orderDetailId: number, orderId: number): Promise<BillingItemDetail> {
    let url = `/me/order/${orderId}/details/${orderDetailId}/extension`

    return this.client.request<BillingItemDetail>('GET', url)
  }
  */

  /**
   * pay operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/pay#POST)
   */
  PayWithAPaymentMethodReference(orderId: number, paymentMethod: BillingorderPayWithPaymentMethod): Promise<void> {
    let url = `/me/order/${orderId}/pay`

    return this.client.request<void>('POST', url, {paymentMethod})
  }

  /**
   * Details about a payment [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/payment#GET)
   */
  /*
  GetThisObjectProperties(orderId: number): Promise<BillingPayment> {
    let url = `/me/order/${orderId}/payment`

    return this.client.request<BillingPayment>('GET', url)
  }
  */

  /**
   * paymentMeans operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/paymentMeans#GET)
   */
  /*
  ReturnMainDataAboutTheObjectTheProcessingOfTheOrderGenerated(orderId: number): Promise<BillingorderPaymentMeans> {
    let url = `/me/order/${orderId}/paymentMeans`

    return this.client.request<BillingorderPaymentMeans>('GET', url)
  }
  */

  /**
   * paymentMethods operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/paymentMethods#GET)
   */
  ListOfRegisteredPaymentMethodYouCanUseToPayThisOrder(orderId: number): Promise<BillingorderPaymentMethods> {
    let url = `/me/order/${orderId}/paymentMethods`

    return this.client.request<BillingorderPaymentMethods>('GET', url)
  }

  /**
   * payWithRegisteredPaymentMean operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/payWithRegisteredPaymentMean#POST)
   */
  PayWithAnAlreadyRegisteredPaymentMean(orderId: number, paymentMean: BillingReusablePaymentMean, paymentMeanId?: number): Promise<void> {
    let url = `/me/order/${orderId}/payWithRegisteredPaymentMean`

    return this.client.request<void>('POST', url, {paymentMean, paymentMeanId})
  }

  /**
   * Details about a Refund [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/refund#GET)
   */
  /*
  GetThisObjectProperties(orderId: number): Promise<BillingRefund> {
    let url = `/me/order/${orderId}/refund`

    return this.client.request<BillingRefund>('GET', url)
  }
  */

  /**
   * retraction operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/retraction#POST)
   */
  RequestRetractionOfOrder(orderId: number, reason: BillingorderRetractionReason, comment?: string): Promise<void> {
    let url = `/me/order/${orderId}/retraction`

    return this.client.request<void>('POST', url, {reason, comment})
  }

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/status#GET)
   */
  ReturnStatusOfOrder(orderId: number): Promise<BillingorderOrderStatus> {
    let url = `/me/order/${orderId}/status`

    return this.client.request<BillingorderOrderStatus>('GET', url)
  }

  /**
   * List the billing.OvhAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount#GET)
   */
  ListOfOVHAccountsTheLoggedAccountHas(): Promise<string[]> {
    let url = `/me/ovhAccount`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Details about an OVH account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount/%7BovhAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(ovhAccountId: string): Promise<BillingOvhAccount> {
    let url = `/me/ovhAccount/${ovhAccountId}`

    return this.client.request<BillingOvhAccount>('GET', url)
  }
  */

  /**
   * Details about an OVH account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount/%7BovhAccountId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(ovhAccountId: string, payload: BillingOvhAccount): Promise<void> {
    let url = `/me/ovhAccount/${ovhAccountId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * creditOrder operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount/%7BovhAccountId%7D/creditOrder#POST)
   */
  GenerateAnOrderThatCanBePaidInOrderToCreditTheOVHAccount(amount: number, ovhAccountId: string): Promise<BillingOrder> {
    let url = `/me/ovhAccount/${ovhAccountId}/creditOrder`

    return this.client.request<BillingOrder>('POST', url, {amount})
  }

  /**
   * List the billing.Movement objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount/%7BovhAccountId%7D/movements#GET)
   */
  DetailsAboutAnEntryOfTheOVHAccount(ovhAccountId: string, dateFrom?: string, dateTo?: string): Promise<number[]> {
    let url = `/me/ovhAccount/${ovhAccountId}/movements?`

    const queryParams = new QueryParams()
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about an OVH account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount/%7BovhAccountId%7D/movements/%7BmovementId%7D#GET)
   */
  /*
  GetThisObjectProperties(movementId: number, ovhAccountId: string): Promise<BillingMovement> {
    let url = `/me/ovhAccount/${ovhAccountId}/movements/${movementId}`

    return this.client.request<BillingMovement>('GET', url)
  }
  */

  /**
   * retrieveMoney operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount/%7BovhAccountId%7D/retrieveMoney#POST)
   */
  TransferMoneyFromOvhAccountToYourBankAccount(amount: number, bankAccountId: number, ovhAccountId: string): Promise<BillingOrder> {
    let url = `/me/ovhAccount/${ovhAccountId}/retrieveMoney`

    return this.client.request<BillingOrder>('POST', url, {amount, bankAccountId})
  }

  /**
   * Request a password recover [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/passwordRecover#POST)
   */
  RequestAPasswordRecover(ovhCompany: NichandleOvhCompany, ovhId: string): Promise<void> {
    let url = `/me/passwordRecover`

    return this.client.request<void>('POST', url, {ovhCompany, ovhId})
  }

  /**
   * Available payment methods [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/availableMethods#GET)
   */
  RetrieveAvailablePaymentMethod(): Promise<MepaymentmethodAvailablePaymentMethod[]> {
    let url = `/me/payment/availableMethods`

    return this.client.request<MepaymentmethodAvailablePaymentMethod[]>('GET', url)
  }

  /**
   * Manage payment method [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method#GET)
   */
  RetrievePaymentMethodIDList(paymentType?: string, status?: MepaymentmethodPaymentMethodStatus): Promise<number[]> {
    let url = `/me/payment/method?`

    const queryParams = new QueryParams()
    if (paymentType) { queryParams.set('paymentType', paymentType) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Manage payment method [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method#POST)
   */
  PayAnOrderAndRegisterANewPaymentMethodIfNecessary(callbackUrl: MepaymentmethodCallbackUrl, paymentType: string, _default?: boolean, description?: string, orderId?: number, register?: boolean): Promise<MepaymentmethodRegisterValidationResult> {
    let url = `/me/payment/method`

    return this.client.request<MepaymentmethodRegisterValidationResult>('POST', url, {callbackUrl, paymentType, _default, description, orderId, register})
  }

  /**
   * Manage payment method [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D#GET)
   */
  GetOnePaymentMethod(paymentMethodId: number): Promise<MepaymentmethodPaymentMethod> {
    let url = `/me/payment/method/${paymentMethodId}`

    return this.client.request<MepaymentmethodPaymentMethod>('GET', url)
  }

  /**
   * Manage payment method [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D#PUT)
   */
  EditPaymentMethod(paymentMethodId: number, _default?: boolean, description?: string): Promise<BillingPaymentMethod> {
    let url = `/me/payment/method/${paymentMethodId}`

    return this.client.request<BillingPaymentMethod>('PUT', url, {_default, description})
  }

  /**
   * Manage payment method [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D#DELETE)
   */
  CancelOnePaymentMethod(paymentMethodId: number): Promise<MepaymentmethodPaymentMethod> {
    let url = `/me/payment/method/${paymentMethodId}`

    return this.client.request<MepaymentmethodPaymentMethod>('DELETE', url)
  }

  /**
   * Challenge your payment method [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D/challenge#POST)
   */
  ChallengeOnePaymentMethod(challenge: string, paymentMethodId: number): Promise<MepaymentmethodPaymentMethod> {
    let url = `/me/payment/method/${paymentMethodId}/challenge`

    return this.client.request<MepaymentmethodPaymentMethod>('POST', url, {challenge})
  }

  /**
   * Finalize one payment method registration [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D/finalize#POST)
   */
  FinalizeOnePaymentMethodRegistration(paymentMethodId: number, expirationMonth?: number, expirationYear?: number, formSessionId?: string, registrationId?: string): Promise<MepaymentmethodPaymentMethod> {
    let url = `/me/payment/method/${paymentMethodId}/finalize`

    return this.client.request<MepaymentmethodPaymentMethod>('POST', url, {expirationMonth, expirationYear, formSessionId, registrationId})
  }

  /**
   * Retrieve payment method transaction ID list [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/transaction#GET)
   */
  RetrieveAssociatedPaymentMethodTransactionIDList(paymentMethodId?: number, status?: MepaymentmethodTransactionStatus): Promise<number[]> {
    let url = `/me/payment/transaction?`

    const queryParams = new QueryParams()
    if (paymentMethodId) { queryParams.set('paymentMethodId', paymentMethodId.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Manage payment method transaction [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/transaction/%7BtransactionId%7D#GET)
   */
  GetAssociatedPaymentMethodTransaction(transactionId: number): Promise<MepaymentmethodTransaction> {
    let url = `/me/payment/transaction/${transactionId}`

    return this.client.request<MepaymentmethodTransaction>('GET', url)
  }

  /**
   * List the billing.BankAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount#GET)
   */
  ListOfBankAccounts(state?: BillingBankAccountState): Promise<number[]> {
    let url = `/me/paymentMean/bankAccount?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the billing.BankAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount#POST)
   */
  EnablePaymentThroughANewAccount(bic: string, iban: string, ownerAddress: string, ownerName: string, description?: string, setDefault?: boolean): Promise<BillingPaymentMeanValidation> {
    let url = `/me/paymentMean/bankAccount`

    return this.client.request<BillingPaymentMeanValidation>('POST', url, {bic, iban, ownerAddress, ownerName, description, setDefault})
  }

  /**
   * SEPA bank account info [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<BillingBankAccount> {
    let url = `/me/paymentMean/bankAccount/${id}`

    return this.client.request<BillingBankAccount>('GET', url)
  }
  */

  /**
   * SEPA bank account info [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: BillingBankAccount): Promise<void> {
    let url = `/me/paymentMean/bankAccount/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * SEPA bank account info [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount/%7Bid%7D#DELETE)
   */
  DisablePaymentThroughThisAccount(id: number): Promise<void> {
    let url = `/me/paymentMean/bankAccount/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * challenge operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount/%7Bid%7D/challenge#POST)
   */
  ChallengeYourBankAccount(challenge: string, id: number): Promise<void> {
    let url = `/me/paymentMean/bankAccount/${id}/challenge`

    return this.client.request<void>('POST', url, {challenge})
  }

  /**
   * chooseAsDefaultPaymentMean operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount/%7Bid%7D/chooseAsDefaultPaymentMean#POST)
   */
  ChooseThisBankAccountAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id: number): Promise<void> {
    let url = `/me/paymentMean/bankAccount/${id}/chooseAsDefaultPaymentMean`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the billing.CreditCard objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard#GET)
   */
  ListOfCreditCards(): Promise<number[]> {
    let url = `/me/paymentMean/creditCard`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the billing.CreditCard objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard#POST)
   */
  AddANewCreditCard(description?: string, returnUrl?: string, setDefault?: boolean): Promise<BillingPaymentMeanValidation> {
    let url = `/me/paymentMean/creditCard`

    return this.client.request<BillingPaymentMeanValidation>('POST', url, {description, returnUrl, setDefault})
  }

  /**
   * Credit card informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<BillingCreditCard> {
    let url = `/me/paymentMean/creditCard/${id}`

    return this.client.request<BillingCreditCard>('GET', url)
  }
  */

  /**
   * Credit card informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: BillingCreditCard): Promise<void> {
    let url = `/me/paymentMean/creditCard/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Credit card informations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard/%7Bid%7D#DELETE)
   */
  DisablePaymentThroughThisCreditCard(id: number): Promise<void> {
    let url = `/me/paymentMean/creditCard/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * challenge operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard/%7Bid%7D/challenge#POST)
   */
  /*
  ChallengeYourBankAccount(challenge: string, id: number): Promise<void> {
    let url = `/me/paymentMean/creditCard/${id}/challenge`

    return this.client.request<void>('POST', url, {challenge})
  }
  */

  /**
   * chooseAsDefaultPaymentMean operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard/%7Bid%7D/chooseAsDefaultPaymentMean#POST)
   */
  ChooseThisCreditCardAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id: number): Promise<void> {
    let url = `/me/paymentMean/creditCard/${id}/chooseAsDefaultPaymentMean`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the billing.DeferredPaymentAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/deferredPaymentAccount#GET)
   */
  ListOfAuthorizedDeferredPaymentAccountForThisCustomer(): Promise<number[]> {
    let url = `/me/paymentMean/deferredPaymentAccount`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Deferred payment account info [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/deferredPaymentAccount/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<BillingDeferredPaymentAccount> {
    let url = `/me/paymentMean/deferredPaymentAccount/${id}`

    return this.client.request<BillingDeferredPaymentAccount>('GET', url)
  }
  */

  /**
   * Deferred payment account info [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/deferredPaymentAccount/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: BillingDeferredPaymentAccount): Promise<void> {
    let url = `/me/paymentMean/deferredPaymentAccount/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * chooseAsDefaultPaymentMean operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/deferredPaymentAccount/%7Bid%7D/chooseAsDefaultPaymentMean#POST)
   */
  AllowYouToUseDeferredPaymentWillCancelThePreviousChoice(id: number): Promise<void> {
    let url = `/me/paymentMean/deferredPaymentAccount/${id}/chooseAsDefaultPaymentMean`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the billing.Paypal objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal#GET)
   */
  ListOfPaypalAccountsUsableForPaymentsOnThisAccount(): Promise<number[]> {
    let url = `/me/paymentMean/paypal`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the billing.Paypal objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal#POST)
   */
  EnablePaymentThroughANewPayPalAccount(description?: string, returnUrl?: string, setDefault?: boolean): Promise<BillingPaymentMeanValidation> {
    let url = `/me/paymentMean/paypal`

    return this.client.request<BillingPaymentMeanValidation>('POST', url, {description, returnUrl, setDefault})
  }

  /**
   * Paypal account info [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<BillingPaypal> {
    let url = `/me/paymentMean/paypal/${id}`

    return this.client.request<BillingPaypal>('GET', url)
  }
  */

  /**
   * Paypal account info [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: BillingPaypal): Promise<void> {
    let url = `/me/paymentMean/paypal/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Paypal account info [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal/%7Bid%7D#DELETE)
   */
  DisablePaymentThroughThisPayPalAccount(id: number): Promise<void> {
    let url = `/me/paymentMean/paypal/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * challenge operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal/%7Bid%7D/challenge#POST)
   */
  /*
  ChallengeYourBankAccount(challenge: string, id: number): Promise<void> {
    let url = `/me/paymentMean/paypal/${id}/challenge`

    return this.client.request<void>('POST', url, {challenge})
  }
  */

  /**
   * chooseAsDefaultPaymentMean operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal/%7Bid%7D/chooseAsDefaultPaymentMean#POST)
   */
  ChooseThisPaypalAgreementAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id: number): Promise<void> {
    let url = `/me/paymentMean/paypal/${id}/chooseAsDefaultPaymentMean`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the billing.Refund objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/refund#GET)
   */
  ListOfAllTheRefundsTheLoggedAccountHas(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]> {
    let url = `/me/refund?`

    const queryParams = new QueryParams()
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }
    if (orderId) { queryParams.set('orderId', orderId.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a Refund [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/refund/%7BrefundId%7D#GET)
   */
  /*
  GetThisObjectProperties(refundId: string): Promise<BillingRefund> {
    let url = `/me/refund/${refundId}`

    return this.client.request<BillingRefund>('GET', url)
  }
  */

  /**
   * List the billing.RefundDetail objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/refund/%7BrefundId%7D/details#GET)
   */
  GiveAccessToAllEntriesOfTheRefund(refundId: string): Promise<string[]> {
    let url = `/me/refund/${refundId}/details`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Information about a Bill entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/refund/%7BrefundId%7D/details/%7BrefundDetailId%7D#GET)
   */
  /*
  GetThisObjectProperties(refundDetailId: string, refundId: string): Promise<BillingRefundDetail> {
    let url = `/me/refund/${refundId}/details/${refundDetailId}`

    return this.client.request<BillingRefundDetail>('GET', url)
  }
  */

  /**
   * Details about a payment [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/refund/%7BrefundId%7D/payment#GET)
   */
  /*
  GetThisObjectProperties(refundId: string): Promise<BillingPayment> {
    let url = `/me/refund/${refundId}/payment`

    return this.client.request<BillingPayment>('GET', url)
  }
  */

  /**
   * List the billing.SlaOperation objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla#GET)
   */
  ListActiveSLA(): Promise<number[]> {
    let url = `/me/sla`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * SLA properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<BillingSlaOperation> {
    let url = `/me/sla/${id}`

    return this.client.request<BillingSlaOperation>('GET', url)
  }
  */

  /**
   * apply operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D/apply#POST)
   */
  AskForSLAApplication(id: number): Promise<void> {
    let url = `/me/sla/${id}/apply`

    return this.client.request<void>('POST', url)
  }

  /**
   * canBeApplied operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D/canBeApplied#GET)
   */
  CheckWhetherThisSLACanBeAppliedOnYourServices(id: number): Promise<boolean> {
    let url = `/me/sla/${id}/canBeApplied`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * services operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D/services#GET)
   */
  GetServicesImpactedByThisSLA(id: number): Promise<BillingSlaOperationService[]> {
    let url = `/me/sla/${id}/services`

    return this.client.request<BillingSlaOperationService[]>('GET', url)
  }

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D/status#GET)
   */
  GetTheStatusRequestOfThisSLA(id: number): Promise<string> {
    let url = `/me/sla/${id}/status`

    return this.client.request<string>('GET', url)
  }

  /**
   * List the nichandle.sshKey objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sshKey#GET)
   */
  ListOfYourPublicSSHKeys(): Promise<string[]> {
    let url = `/me/sshKey`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the nichandle.sshKey objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sshKey#POST)
   */
  AddANewPublicSSHKey(key: string, keyName: string): Promise<void> {
    let url = `/me/sshKey`

    return this.client.request<void>('POST', url, {key, keyName})
  }

  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sshKey/%7BkeyName%7D#GET)
   */
  /*
  GetThisObjectProperties(keyName: string): Promise<NichandlesshKey> {
    let url = `/me/sshKey/${keyName}`

    return this.client.request<NichandlesshKey>('GET', url)
  }
  */

  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sshKey/%7BkeyName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(keyName: string, payload: NichandlesshKey): Promise<void> {
    let url = `/me/sshKey/${keyName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Customer public SSH key, can be used for rescue netboot or server access after reinstallation [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sshKey/%7BkeyName%7D#DELETE)
   */
  RemoveThisPublicSSHKey(keyName: string): Promise<void> {
    let url = `/me/sshKey/${keyName}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the nichandle.SubAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subAccount#GET)
   */
  ListOfSubaccounts(): Promise<number[]> {
    let url = `/me/subAccount`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the nichandle.SubAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subAccount#POST)
   */
  CreateANewSubaccount(description?: string): Promise<number> {
    let url = `/me/subAccount`

    return this.client.request<number>('POST', url, {description})
  }

  /**
   * Sub Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subAccount/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleSubAccount> {
    let url = `/me/subAccount/${id}`

    return this.client.request<NichandleSubAccount>('GET', url)
  }
  */

  /**
   * Sub Account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subAccount/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: NichandleSubAccount): Promise<void> {
    let url = `/me/subAccount/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * createConsumerKey operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subAccount/%7Bid%7D/createConsumerKey#POST)
   */
  CreateAConsumerKeyForTheCurrentApplication(id: number): Promise<NichandleSubAccountConsumerKey> {
    let url = `/me/subAccount/${id}/createConsumerKey`

    return this.client.request<NichandleSubAccountConsumerKey>('POST', url)
  }

  /**
   * List the nichandle.Subscription objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subscription#GET)
   */
  ListOfAllOVHThingsYouCanSubscribeTo(): Promise<string[]> {
    let url = `/me/subscription`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List of all OVH things you can subscribe to [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subscription/%7BsubscriptionType%7D#GET)
   */
  /*
  GetThisObjectProperties(subscriptionType: string): Promise<NichandleSubscription> {
    let url = `/me/subscription/${subscriptionType}`

    return this.client.request<NichandleSubscription>('GET', url)
  }
  */

  /**
   * List of all OVH things you can subscribe to [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subscription/%7BsubscriptionType%7D#PUT)
   */
  /*
  AlterThisObjectProperties(subscriptionType: string, payload: NichandleSubscription): Promise<void> {
    let url = `/me/subscription/${subscriptionType}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Fetch the support level of the account [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/supportLevel#GET)
   */
  FetchTheSupportLevelOfTheAccount(): Promise<MeSupportLevelLevel> {
    let url = `/me/supportLevel`

    return this.client.request<MeSupportLevelLevel>('GET', url)
  }

  /**
   * List the nichandle.contactChange.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange#GET)
   */
  ListOfServiceContactChangeTasksYouAreInvolvedIn(askingAccount?: string, state?: NichandlechangeContactTaskState, toAccount?: string): Promise<number[]> {
    let url = `/me/task/contactChange?`

    const queryParams = new QueryParams()
    if (askingAccount) { queryParams.set('askingAccount', askingAccount) }
    if (state) { queryParams.set('state', state.toString()) }
    if (toAccount) { queryParams.set('toAccount', toAccount) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task running a contact change on a service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandlecontactChangeTask> {
    let url = `/me/task/contactChange/${id}`

    return this.client.request<NichandlecontactChangeTask>('GET', url)
  }
  */

  /**
   * accept operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange/%7Bid%7D/accept#POST)
   */
  AcceptThisChangeRequest(id: number, token: string): Promise<void> {
    let url = `/me/task/contactChange/${id}/accept`

    return this.client.request<void>('POST', url, {token})
  }

  /**
   * refuse operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange/%7Bid%7D/refuse#POST)
   */
  RefuseThisChangeRequest(id: number, token: string): Promise<void> {
    let url = `/me/task/contactChange/${id}/refuse`

    return this.client.request<void>('POST', url, {token})
  }

  /**
   * resendEmail operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange/%7Bid%7D/resendEmail#POST)
   */
  ThisCallWillSendYouANewEmailContainingANewToken(id: number): Promise<void> {
    let url = `/me/task/contactChange/${id}/resendEmail`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the nichandle.DomainTask objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain#GET)
   */
  ListOfDomainTask(domain?: string, _function?: DomainNicOperationFunction, status?: DomainOperationStatus): Promise<number[]> {
    let url = `/me/task/domain?`

    const queryParams = new QueryParams()
    if (domain) { queryParams.set('domain', domain) }
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Domain tasks [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleDomainTask> {
    let url = `/me/task/domain/${id}`

    return this.client.request<NichandleDomainTask>('GET', url)
  }
  */

  /**
   * accelerate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/accelerate#POST)
   */
  AccelerateTheTask(id: number): Promise<void> {
    let url = `/me/task/domain/${id}/accelerate`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the nichandle.DomainTaskArgument objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/argument#GET)
   */
  ListOfArguments(id: number): Promise<string[]> {
    let url = `/me/task/domain/${id}/argument`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Domain operation argument [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/argument/%7Bkey%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number, key: string): Promise<NichandleDomainTaskArgument> {
    let url = `/me/task/domain/${id}/argument/${key}`

    return this.client.request<NichandleDomainTaskArgument>('GET', url)
  }
  */

  /**
   * Domain operation argument [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/argument/%7Bkey%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, key: string, payload: NichandleDomainTaskArgument): Promise<void> {
    let url = `/me/task/domain/${id}/argument/${key}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * cancel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/cancel#POST)
   */
  CancelTheTask(id: number): Promise<void> {
    let url = `/me/task/domain/${id}/cancel`

    return this.client.request<void>('POST', url)
  }

  /**
   * Domain operation progress [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/progressbar#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleDomainTaskProgressBar> {
    let url = `/me/task/domain/${id}/progressbar`

    return this.client.request<NichandleDomainTaskProgressBar>('GET', url)
  }
  */

  /**
   * relaunch operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/relaunch#POST)
   */
  RelaunchTheTask(id: number): Promise<void> {
    let url = `/me/task/domain/${id}/relaunch`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the nichandle.emailChange.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/emailChange#GET)
   */
  ListOfEmailChangeTasksYouAreInvolvedIn(state?: NichandlechangeEmailTaskState): Promise<number[]> {
    let url = `/me/task/emailChange?`

    const queryParams = new QueryParams()
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task running an email change on an account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/emailChange/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<NichandleemailChangeTask> {
    let url = `/me/task/emailChange/${id}`

    return this.client.request<NichandleemailChangeTask>('GET', url)
  }
  */

  /**
   * accept operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/emailChange/%7Bid%7D/accept#POST)
   */
  /*
  AcceptThisChangeRequest(id: number, token: string): Promise<void> {
    let url = `/me/task/emailChange/${id}/accept`

    return this.client.request<void>('POST', url, {token})
  }
  */

  /**
   * refuse operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/emailChange/%7Bid%7D/refuse#POST)
   */
  /*
  RefuseThisChangeRequest(id: number, token: string): Promise<void> {
    let url = `/me/task/emailChange/${id}/refuse`

    return this.client.request<void>('POST', url, {token})
  }
  */

  /**
   * List the telephony.DefaultIpRestriction objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/defaultIpRestriction#GET)
   */
  TheDefaultSIPIPRestictionsForYourFutureVoIPLines(): Promise<number[]> {
    let url = `/me/telephony/defaultIpRestriction`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.DefaultIpRestriction objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/defaultIpRestriction#POST)
   */
  CreateADefaultIPRestrictionForYourFutureVoIPLines(subnet: any, type: TelephonyProtocol): Promise<TelephonyDefaultIpRestriction> {
    let url = `/me/telephony/defaultIpRestriction`

    return this.client.request<TelephonyDefaultIpRestriction>('POST', url, {subnet, type})
  }

  /**
   * Default IP restriction of a VoIP line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/defaultIpRestriction/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<TelephonyDefaultIpRestriction> {
    let url = `/me/telephony/defaultIpRestriction/${id}`

    return this.client.request<TelephonyDefaultIpRestriction>('GET', url)
  }
  */

  /**
   * Default IP restriction of a VoIP line [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/defaultIpRestriction/%7Bid%7D#DELETE)
   */
  DeleteADefaultIPRestrictionForYourFutureVoIPLines(id: number): Promise<void> {
    let url = `/me/telephony/defaultIpRestriction/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * settings operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/settings#GET)
   */
  GetTheTelephonySettingsLinkedToTheCustomerAccount(): Promise<TelephonySettings> {
    let url = `/me/telephony/settings`

    return this.client.request<TelephonySettings>('GET', url)
  }

  /**
   * settings operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/settings#POST)
   */
  ChangeTheTelephonySettingsLinkedToTheCustomerAccount(settings: TelephonySettings): Promise<void> {
    let url = `/me/telephony/settings`

    return this.client.request<void>('POST', url, {settings})
  }

  /**
   * vipStatus operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/vipStatus#GET)
   */
  VIPStatusOfThisAccount(): Promise<NichandleVipStatus> {
    let url = `/me/vipStatus`

    return this.client.request<NichandleVipStatus>('GET', url)
  }

  /**
   * checkValidity operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/voucher/checkValidity#POST)
   */
  VerifyExistingVoucher(voucher: string): Promise<NichandleVoucherStatus> {
    let url = `/me/voucher/checkValidity`

    return this.client.request<NichandleVoucherStatus>('POST', url, {voucher})
  }

  /**
   * List the billing.Withdrawal objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/withdrawal#GET)
   */
  ListOfAllTheWithdrawalsMadeFromYourPrepaidAccount(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]> {
    let url = `/me/withdrawal?`

    const queryParams = new QueryParams()
    if (dateFrom) { queryParams.set('date.from', dateFrom.toString()) }
    if (dateTo) { queryParams.set('date.to', dateTo.toString()) }
    if (orderId) { queryParams.set('orderId', orderId.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a withdrawal [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/withdrawal/%7BwithdrawalId%7D#GET)
   */
  /*
  GetThisObjectProperties(withdrawalId: string): Promise<BillingWithdrawal> {
    let url = `/me/withdrawal/${withdrawalId}`

    return this.client.request<BillingWithdrawal>('GET', url)
  }
  */

  /**
   * List the billing.WithdrawalDetail objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/withdrawal/%7BwithdrawalId%7D/details#GET)
   */
  GiveAccessToAllEntriesOfThisWithdrawal(withdrawalId: string): Promise<string[]> {
    let url = `/me/withdrawal/${withdrawalId}/details`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Information about a Withdrawal entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/withdrawal/%7BwithdrawalId%7D/details/%7BwithdrawalDetailId%7D#GET)
   */
  /*
  GetThisObjectProperties(withdrawalDetailId: string, withdrawalId: string): Promise<BillingWithdrawalDetail> {
    let url = `/me/withdrawal/${withdrawalId}/details/${withdrawalDetailId}`

    return this.client.request<BillingWithdrawalDetail>('GET', url)
  }
  */

  /**
   * Details about a payment [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/withdrawal/%7BwithdrawalId%7D/payment#GET)
   */
  /*
  GetThisObjectProperties(withdrawalId: string): Promise<BillingPayment> {
    let url = `/me/withdrawal/${withdrawalId}/payment`

    return this.client.request<BillingPayment>('GET', url)
  }
  */

  /**
   * setting operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/xdsl/setting#GET)
   */
  GetXdslSettingsLinkedToTheNichandle(): Promise<Setting> {
    let url = `/me/xdsl/setting`

    return this.client.request<Setting>('GET', url)
  }

  /**
   * setting operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/xdsl/setting#POST)
   */
  ChangeXdslSettingsLinkedToTheNichandle(resellerFastModemShipping?: boolean, resellerModemBasicConfig?: boolean): Promise<void> {
    let url = `/me/xdsl/setting`

    return this.client.request<void>('POST', url, {resellerFastModemShipping, resellerModemBasicConfig})
  }

}
