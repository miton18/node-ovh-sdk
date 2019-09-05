import { Client } from '../client';
export declare enum AgreementsAgreementStateEnum {
    KO = "ko",
    OBSOLETE = "obsolete",
    OK = "ok",
    TODO = "todo"
}
export interface AgreementsContract {
    active: boolean;
    date: string;
    name: string;
    pdf: string;
    text: string;
}
export interface AgreementsContractAgreement {
    agreed: AgreementsAgreementStateEnum;
    contractId: number;
    date: string;
    id: number;
}
export interface Application {
    applicationId: number;
    applicationKey: string;
    description: string;
    name: string;
    status: ApplicationStatusEnum;
}
export declare enum ApplicationStatusEnum {
    ACTIVE = "active",
    BLOCKED = "blocked",
    INACTIVE = "inactive",
    TRUSTED = "trusted"
}
export interface Credential {
    applicationId: number;
    creation: string;
    credentialId: number;
    expiration?: string;
    lastUse?: string;
    ovhSupport: boolean;
    rules: AuthAccessRule[];
    status: AuthCredentialStateEnum;
}
export interface Log {
    account: string;
    date: string;
    ip?: string;
    logId: number;
    method: HttpMethodEnum;
    path: string;
    route: string;
}
export interface AuthAccessRule {
    method: AuthMethodEnum;
    path: string;
}
export declare enum AuthCredentialStateEnum {
    EXPIRED = "expired",
    PENDINGVALIDATION = "pendingValidation",
    REFUSED = "refused",
    VALIDATED = "validated"
}
export declare enum AuthMethodEnum {
    DELETE = "DELETE",
    GET = "GET",
    POST = "POST",
    PUT = "PUT"
}
export interface BillingAutomaticPaymentMean {
    bankAccount: boolean;
    creditCard: boolean;
    deferredPaymentAccount: boolean;
    paypal: boolean;
}
export interface BillingBankAccount {
    bic: string;
    creationDate: string;
    defaultPaymentMean: boolean;
    description?: string;
    iban: string;
    icon?: BillingpaymentMethodIconData;
    id: number;
    mandateSignatureDate?: string;
    ownerAddress: string;
    ownerName: string;
    state: BillingBankAccountStateEnum;
    uniqueReference: string;
    validationDocumentLink?: string;
}
export declare enum BillingBankAccountStateEnum {
    BLOCKEDFORINCIDENTS = "blockedForIncidents",
    PENDINGVALIDATION = "pendingValidation",
    VALID = "valid"
}
export interface BillingBill {
    billId: string;
    date: string;
    orderId: number;
    password: string;
    pdfUrl: string;
    priceWithTax: OrderPrice;
    priceWithoutTax: OrderPrice;
    tax: OrderPrice;
    url: string;
}
export interface BillingBillDetail {
    billDetailId: string;
    description: string;
    domain: string;
    periodEnd?: string;
    periodStart?: string;
    quantity: string;
    totalPrice: OrderPrice;
    unitPrice: OrderPrice;
}
export declare enum BillingBillingTaskStatusEnum {
    CANCELLED = "cancelled",
    CUSTOMERERROR = "customerError",
    DOING = "doing",
    DONE = "done",
    INIT = "init",
    OVHERROR = "ovhError",
    TODO = "todo"
}
export interface BillingcreditBalance {
    amount: OrderPrice;
    balanceName: string;
    booked: BillingcreditbalanceBookedMovement[];
    creationDate: string;
    expiring: BillingcreditbalanceExpiringMovement[];
    expiringSummary: BillingcreditbalanceExpiringMovement[];
    lastUpdate: string;
    type: BillingcreditbalanceType;
}
export interface BillingcreditbalanceBookedMovement {
    amount: OrderPrice;
    orderId: number;
}
export interface BillingcreditbalanceExpiringMovement {
    amount: OrderPrice;
    creationDate: string;
    expirationDate: string;
    lastUpdate: string;
    sourceObject: BillingcreditbalancemovementSubObject;
}
export interface BillingcreditbalanceMovement {
    amount: OrderPrice;
    balanceName: string;
    creationDate: string;
    expirationDate?: string;
    lastUpdate: string;
    movementId: number;
    orderId?: number;
    sourceObject: BillingcreditbalancemovementSubObject;
    type: string;
}
export interface BillingcreditbalancemovementSubObject {
    id?: string;
    name?: string;
}
export declare enum BillingcreditbalanceType {
    PREPAID_ACCOUNT = "PREPAID_ACCOUNT",
    VOUCHER = "VOUCHER",
    DEPOSIT = "DEPOSIT",
    BONUS = "BONUS"
}
export interface BillingCreditBalance {
    amount: OrderPrice;
    balanceName: string;
}
export interface BillingCreditCard {
    defaultPaymentMean: boolean;
    description?: string;
    expirationDate: string;
    icon?: BillingpaymentMethodIconData;
    id: number;
    number: string;
    state: BillingCreditCardStateEnum;
    threeDsValidated: boolean;
    type: string;
}
export declare enum BillingCreditCardStateEnum {
    EXPIRED = "expired",
    TOOMANYFAILURES = "tooManyFailures",
    VALID = "valid"
}
export interface BillingDeferredPaymentAccount {
    creationDate: string;
    defaultPaymentMean: boolean;
    description?: string;
    icon?: BillingpaymentMethodIconData;
    id: number;
    label?: string;
    state: BillingDeferredPaymentAccountStatusEnum;
}
export declare enum BillingDeferredPaymentAccountStatusEnum {
    VALID = "valid"
}
export interface BillingDeposit {
    amount: OrderPrice;
    date: string;
    depositId: string;
    orderId: number;
    password: string;
    paymentInfo?: DebtassociatedObjectPaymentInfo;
    pdfUrl: string;
    url: string;
}
export interface BillingDepositDetail {
    depositDetailId: string;
    description: string;
    domain: string;
    quantity: string;
    totalPrice: OrderPrice;
    unitPrice: OrderPrice;
}
export interface BillingFidelityAccount {
    alertThreshold?: number;
    balance: number;
    canBeCredited: boolean;
    lastUpdate: string;
    openDate: string;
}
export declare enum BillingfidelityAccountOperationEnum {
    BONUS = "bonus",
    CANCEL_BONUS = "cancel-bonus",
    CANCEL_CREDIT = "cancel-credit",
    CANCEL_DEBIT = "cancel-debit",
    CANCEL_PRE_DEBIT = "cancel-pre-debit",
    CREDIT = "credit",
    DEBIT = "debit",
    PRE_CREDIT = "pre-credit",
    PRE_DEBIT = "pre-debit"
}
export interface BillingFidelityMovement {
    amount: number;
    balance: number;
    date: string;
    description: string;
    movementId: number;
    operation: BillingfidelityAccountOperationEnum;
    order: number;
    previousBalance: number;
}
export interface BillingItemDetail {
    order: BillingItemDetailOrder;
}
export interface BillingItemDetailOrder {
    action?: BillingItemDetailOrderActionEnum;
    configurations: BillingItemDetailOrderConfiguration[];
    plan: BillingItemDetailOrderPlan;
}
export declare enum BillingItemDetailOrderActionEnum {
    CONSUMPTION = "consumption",
    INSTALLATION = "installation",
    RENEW = "renew",
    UPGRADE = "upgrade"
}
export interface BillingItemDetailOrderConfiguration {
    label: string;
    value: string;
}
export interface BillingItemDetailOrderPlan {
    code?: string;
    duration?: string;
    pricingMode?: string;
    product: BillingItemDetailOrderPlanProduct;
    quantity?: number;
}
export interface BillingItemDetailOrderPlanProduct {
    name?: string;
}
export interface BillingManualDomainPaymentStatus {
    domainsToMigrate?: number;
    migratedDomains?: number;
    status: BillingBillingTaskStatusEnum;
}
export interface BillingMovement {
    amount: OrderPrice;
    balance: OrderPrice;
    date: string;
    description: string;
    movementId: number;
    operation: BillingovhAccountOperationEnum;
    order: number;
    previousBalance: OrderPrice;
}
export interface BillingOrder {
    date?: string;
    expirationDate?: string;
    orderId: number;
    password: string;
    pdfUrl: string;
    priceWithTax: OrderPrice;
    priceWithoutTax: OrderPrice;
    retractionDate?: string;
    tax: OrderPrice;
    url: string;
}
export interface BillingorderAssociatedObject {
    id?: string;
    type?: BillingorderassociatedObjectTypeEnum;
}
export declare enum BillingorderassociatedObjectTypeEnum {
    BILL = "Bill",
    DEPOSIT = "Deposit",
    REFUND = "Refund",
    WITHDRAWAL = "Withdrawal"
}
export declare enum BillingorderOrderStatusEnum {
    CANCELLED = "cancelled",
    CANCELLING = "cancelling",
    CHECKING = "checking",
    DELIVERED = "delivered",
    DELIVERING = "delivering",
    DOCUMENTSREQUESTED = "documentsRequested",
    NOTPAID = "notPaid",
    UNKNOWN = "unknown"
}
export interface BillingorderPaymentMean {
    fee: any;
    htmlForm?: string;
    httpMethod: string;
    logo?: string;
    parameters: BillingorderpaymentMeanHttpParameter[];
    subType?: string;
    url: string;
}
export interface BillingorderpaymentMeanHttpParameter {
    choice?: BillingorderpaymentMeanHttpParameterChoice[];
    name: string;
    value?: string;
}
export interface BillingorderpaymentMeanHttpParameterChoice {
    name: string;
    value: string;
}
export interface BillingorderPaymentMeans {
    creditCard?: BillingorderPaymentMean[];
    edinar?: BillingorderPaymentMean[];
    fidelityPoints?: BillingorderPaymentMean[];
    ideal?: BillingorderPaymentMean[];
    multibanco?: BillingorderPaymentMean[];
    ovhAccount?: BillingorderPaymentMean[];
    paypal?: BillingorderPaymentMean[];
    promotion?: BillingorderPaymentMean[];
}
export interface BillingorderPaymentMethods {
    available: PaymentmethodAvailablePaymentMethod[];
    registered: number[];
}
export interface BillingorderPayWithPaymentMethod {
    id: number;
}
export interface BillingorderRegisteredPaymentMean {
    paymentMean: BillingReusablePaymentMeanEnum;
}
export declare enum BillingorderRetractionReasonEnum {
    COMPETITOR = "competitor",
    DIFFICULTY = "difficulty",
    EXPENSIVE = "expensive",
    OTHER = "other",
    PERFORMANCE = "performance",
    RELIABILITY = "reliability",
    UNUSED = "unused"
}
export interface BillingOrderDetail {
    cancelled: boolean;
    description: string;
    domain: string;
    orderDetailId: number;
    quantity: string;
    totalPrice: OrderPrice;
    unitPrice: OrderPrice;
}
export interface BillingOvhAccount {
    alertThreshold?: number;
    balance: OrderPrice;
    canBeCredited: boolean;
    isActive: boolean;
    lastUpdate: string;
    openDate: string;
    ovhAccountId: string;
}
export declare enum BillingovhAccountOperationEnum {
    CANCEL_CREDIT = "cancel-credit",
    CANCEL_DEBIT = "cancel-debit",
    CANCEL_PRE_DEBIT = "cancel-pre-debit",
    CREDIT = "credit",
    DEBIT = "debit",
    PRE_CREDIT = "pre-credit",
    PRE_DEBIT = "pre-debit"
}
export interface BillingPayment {
    paymentDate: string;
    paymentIdentifier?: string;
    paymentType: BillingPaymentMeanEnum;
}
export declare enum BillingPaymentMeanEnum {
    CASH = "cash",
    CHARGEBACK = "chargeback",
    CHEQUE = "cheque",
    CREDITACCOUNT = "creditAccount",
    CREDITCARD = "creditCard",
    DEBTACCOUNT = "debtAccount",
    DEPOSIT = "deposit",
    DIGITALLAUNCHPAD = "digitalLaunchPad",
    EDINAR = "edinar",
    FIDELITYPOINTS = "fidelityPoints",
    FREE = "free",
    IDEAL = "ideal",
    INCUBATORACCOUNT = "incubatorAccount",
    MANDAT = "mandat",
    MULTIBANCO = "multibanco",
    NONE = "none",
    OVHACCOUNT = "ovhAccount",
    PAYMENTMANDATE = "paymentMandate",
    PAYPAL = "paypal",
    PAYU = "payu",
    PLATNOSCI = "platnosci",
    REFUND = "refund",
    TRANSFER = "transfer",
    WITHDRAWAL = "withdrawal"
}
export interface BillingPaymentMeanValidation {
    id: number;
    submitUrl?: string;
    url: string;
    validationType: BillingPaymentMeanValidationType;
}
export declare enum BillingPaymentMeanValidationType {
    CREDITACCOUNT = "creditAccount",
    DOCUMENTTOSEND = "documentToSend",
    SIMPLEVALIDATION = "simpleValidation"
}
export interface BillingPaymentMethod {
    billingContactId: number;
    creationDate: string;
    default?: boolean;
    description: string;
    id: number;
    paymentSubType?: BillingpaymentMethodPaymentSubTypeEnum;
    paymentType: BillingpaymentMethodPaymentTypeEnum;
    publicLabel: string;
    status: BillingpaymentMethodStatusEnum;
}
export interface BillingpaymentMethodIconData {
    data?: string;
    name?: string;
}
export declare enum BillingpaymentMethodPaymentSubTypeEnum {
    AMERICAN_EXPRESS = "AMERICAN_EXPRESS",
    MASTERCARD = "MASTERCARD",
    VISA = "VISA"
}
export declare enum BillingpaymentMethodPaymentTypeEnum {
    BANK_ACCOUNT = "BANK_ACCOUNT",
    CREDIT_CARD = "CREDIT_CARD",
    DEFERRED_PAYMENT_ACCOUNT = "DEFERRED_PAYMENT_ACCOUNT",
    ENTERPRISE = "ENTERPRISE",
    INTERNAL_TRUSTED_ACCOUNT = "INTERNAL_TRUSTED_ACCOUNT",
    PAYPAL = "PAYPAL"
}
export declare enum BillingpaymentMethodStatusEnum {
    BLOCKED = "BLOCKED",
    BLOCKED_BY_CUSTOMER = "BLOCKED_BY_CUSTOMER",
    BROKEN = "BROKEN",
    CANCELED = "CANCELED",
    CANCELED_BY_CUSTOMER = "CANCELED_BY_CUSTOMER",
    CREATED = "CREATED",
    ERROR = "ERROR",
    EXPIRED = "EXPIRED",
    PAUSED = "PAUSED",
    VALID = "VALID",
    VALID_FOR_CREDIT = "VALID_FOR_CREDIT"
}
export interface BillingPaypal {
    agreementId: string;
    creationDate: string;
    defaultPaymentMean: boolean;
    description?: string;
    email: string;
    icon?: BillingpaymentMethodIconData;
    id: number;
    state: BillingPaypalStateEnum;
}
export declare enum BillingPaypalStateEnum {
    TOOMANYFAILURES = "tooManyFailures",
    VALID = "valid"
}
export interface BillingRefund {
    date: string;
    orderId: number;
    originalBillId?: string;
    password: string;
    pdfUrl: string;
    priceWithTax: OrderPrice;
    priceWithoutTax: OrderPrice;
    refundId: string;
    tax: OrderPrice;
    url: string;
}
export interface BillingRefundDetail {
    description: string;
    domain: string;
    quantity: string;
    reference: string;
    refundDetailId: string;
    refundId: string;
    totalPrice: OrderPrice;
    unitPrice: OrderPrice;
}
export declare enum BillingReusablePaymentMeanEnum {
    CREDIT_CARD = "CREDIT_CARD",
    ENTERPRISE = "ENTERPRISE",
    INTERNAL_TRUSTED_ACCOUNT = "INTERNAL_TRUSTED_ACCOUNT",
    PAYPAL = "PAYPAL",
    BANKACCOUNT = "bankAccount",
    CREDITCARD = "creditCard",
    FIDELITYACCOUNT = "fidelityAccount",
    OVHACCOUNT = "ovhAccount"
}
export interface BillingSlaOperation {
    date: string;
    description: string;
    endDate?: string;
    id: number;
    name: string;
    startDate: string;
}
export interface BillingSlaOperationService {
    description: string;
    serviceName: string;
    slaApplication: string;
    slaPlan: string;
}
export interface BillingVoucherAccount {
    balance: OrderPrice;
    lastUpdate: string;
    openDate: string;
    voucherAccountId: string;
}
export declare enum BillingvoucherAccountOperationEnum {
    CANCEL_CREDIT = "cancel-credit",
    CANCEL_DEBIT = "cancel-debit",
    CANCEL_PRE_DEBIT = "cancel-pre-debit",
    CREDIT = "credit",
    DEBIT = "debit",
    PRE_CREDIT = "pre-credit",
    PRE_DEBIT = "pre-debit"
}
export interface BillingVoucherMovement {
    amount: OrderPrice;
    balance: OrderPrice;
    date: string;
    description: string;
    movementId: number;
    operation: BillingvoucherAccountOperationEnum;
    order: number;
    previousBalance: OrderPrice;
}
export interface BillingWithdrawal {
    amount: OrderPrice;
    country: string;
    date: string;
    orderId: number;
    password: string;
    pdfUrl: string;
    url: string;
    withdrawalId: string;
}
export interface BillingWithdrawalDetail {
    description: string;
    domain: string;
    quantity: string;
    totalPrice: OrderPrice;
    unitPrice: OrderPrice;
    withdrawalDetailId: string;
}
export interface ComplexTypeSafeKeyValue<T> {
    key: string;
    value: T;
}
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export interface ContactAddress {
    city: string;
    country: NichandleCountryEnum;
    line1: string;
    line2?: string;
    line3?: string;
    otherDetails?: string;
    province?: string;
    zip: string;
}
export interface ContactContact {
    address: ContactAddress;
    birthCity?: string;
    birthCountry?: NichandleCountryEnum;
    birthDay?: string;
    birthZip?: string;
    cellPhone?: any;
    companyNationalIdentificationNumber?: string;
    email: string;
    fax?: any;
    firstName: string;
    gender?: NichandleGenderEnum;
    id: number;
    language: NichandleLanguageEnum;
    lastName: string;
    legalForm: NichandleLegalFormEnum;
    nationalIdentificationNumber?: string;
    nationality?: NichandleCountryEnum;
    organisationName?: string;
    organisationType?: string;
    phone?: any;
    spareEmail?: string;
    vat?: string;
}
export interface ContactFieldInformation {
    fieldName: string;
    mandatory: boolean;
    readOnly: boolean;
}
export declare enum CoreTypesContinentEnum {
    AFRICA = "africa",
    ANTARTICA = "antartica",
    ASIA = "asia",
    EUROPE = "europe",
    NORTH_AMERICA = "north-america",
    OCEANIA = "oceania",
    SOUTH_AMERICA = "south-america"
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
export interface DebtassociatedObjectPaymentInfo {
    description?: string;
    paymentType: BillingPaymentMeanEnum;
    publicLabel?: string;
}
export declare enum DebtassociatedObjectTypeEnum {
    BILL = "Bill",
    DEBTOPERATION = "DebtOperation",
    DEPOSIT = "Deposit",
    ORDER = "Order",
    OVHACCOUNTMOVEMENT = "OvhAccountMovement",
    REFUND = "Refund",
    WITHDRAWAL = "Withdrawal"
}
export interface DebtBalance {
    active: boolean;
    dueAmount: OrderPrice;
    pendingAmount: OrderPrice;
    todoAmount: OrderPrice;
    unmaturedAmount: OrderPrice;
}
export interface DebtDebt {
    amount: OrderPrice;
    date: string;
    debtId: number;
    dueAmount: OrderPrice;
    dueDate?: string;
    orderId: number;
    pendingAmount: OrderPrice;
    todoAmount: OrderPrice;
    unmaturedAmount: OrderPrice;
}
export interface DebtentryAssociatedObject {
    id?: string;
    paymentInfo?: DebtassociatedObjectPaymentInfo;
    subId?: string;
    type?: DebtassociatedObjectTypeEnum;
}
export declare enum DebtentryOperationEnum {
    CANCEL = "CANCEL",
    CASH_MANUAL = "CASH_MANUAL",
    CHECK_MANUAL = "CHECK_MANUAL",
    CREDITCARD = "CREDITCARD",
    CREDITCARD_AUTOMATIC = "CREDITCARD_AUTOMATIC",
    CREDITCARD_MANUAL = "CREDITCARD_MANUAL",
    CREDIT_ACCOUNT_AUTOMATIC = "CREDIT_ACCOUNT_AUTOMATIC",
    EDINAR_MANUAL = "EDINAR_MANUAL",
    IDEAL_MANUAL = "IDEAL_MANUAL",
    MULTIBANCO_MANUAL = "MULTIBANCO_MANUAL",
    ORDER = "ORDER",
    PAYPAL_AUTOMATIC = "PAYPAL_AUTOMATIC",
    PAYPAL_MANUAL = "PAYPAL_MANUAL",
    PAYU_MANUAL = "PAYU_MANUAL",
    RECOVERY_TRANSFER_AUTOMATIC = "RECOVERY_TRANSFER_AUTOMATIC",
    REFUND = "REFUND",
    REFUND_CHECK = "REFUND_CHECK",
    REFUND_CREDITCARD = "REFUND_CREDITCARD",
    REFUND_CREDIT_ACCOUNT = "REFUND_CREDIT_ACCOUNT",
    REFUND_LOSS = "REFUND_LOSS",
    REFUND_PAYPAL = "REFUND_PAYPAL",
    REFUND_PAYU = "REFUND_PAYU",
    REFUND_SEPA = "REFUND_SEPA",
    REFUND_TRANSFER = "REFUND_TRANSFER",
    REFUND_UNKNOWN = "REFUND_UNKNOWN",
    SEPA_AUTOMATIC = "SEPA_AUTOMATIC",
    TRANSFER_MANUAL = "TRANSFER_MANUAL",
    UNPAID_CHECK = "UNPAID_CHECK",
    UNPAID_CREDITCARD = "UNPAID_CREDITCARD",
    UNPAID_CREDIT_ACCOUNT = "UNPAID_CREDIT_ACCOUNT",
    UNPAID_PAYPAL = "UNPAID_PAYPAL",
    UNPAID_SEPA = "UNPAID_SEPA",
    UNPAID_WITHDRAW = "UNPAID_WITHDRAW",
    WARRANT_MANUAL = "WARRANT_MANUAL",
    WITHDRAW_AUTOMATIC = "WITHDRAW_AUTOMATIC"
}
export declare enum DebtentryStatusEnum {
    CANCELLED = "CANCELLED",
    DONE = "DONE",
    FAILED = "FAILED",
    PAID = "PAID",
    PENDING = "PENDING",
    TODO = "TODO"
}
export interface DebtOperation {
    amount: OrderPrice;
    date: string;
    depositOrderId: number;
    operationId: number;
    status: DebtentryStatusEnum;
    type?: DebtentryOperationEnum;
}
export interface DedicatedinstallationTemplatehardwareRaid {
    disks: string[];
    mode: DedicatedTemplateOsHardwareRaidEnum;
    name: string;
    step: number;
}
export interface DedicatedinstallationTemplatetemplatePartitioningSchemes {
    name: string;
    priority: number;
}
export interface DedicatedinstallationTemplatetemplatePartitions {
    filesystem: DedicatedTemplateOsFileSystemEnum;
    mountpoint: string;
    order: number;
    raid?: DedicatedserverPartitionRaidEnum;
    size: any;
    type: DedicatedTemplatePartitionTypeEnum;
    volumeName?: string;
}
export interface DedicatedinstallationTemplateTemplates {
    availableLanguages: DedicatedTemplateOsLanguageEnum[];
    beta?: boolean;
    bitFormat: DedicatedserverBitFormatEnum;
    category: DedicatedTemplateOsUsageEnum;
    customization?: DedicatedTemplateOsProperties;
    defaultLanguage: DedicatedTemplateOsLanguageEnum;
    deprecated?: boolean;
    description: string;
    distribution: string;
    family: DedicatedTemplateOsTypeEnum;
    filesystems: DedicatedTemplateOsFileSystemEnum[];
    hardRaidConfiguration?: boolean;
    lastModification?: string;
    lvmReady?: boolean;
    supportsDistributionKernel?: boolean;
    supportsGptLabel?: boolean;
    supportsRTM: boolean;
    supportsSqlServer?: boolean;
    supportsUEFI?: DedicatedserverSupportsUEFIEnum;
    templateName: string;
}
export declare type DedicatedserverBitFormatEnum = 32 | 64;
export declare type DedicatedserverPartitionRaidEnum = '0' | '1' | '10' | '5' | '6';
export declare enum DedicatedserverSupportsUEFIEnum {
    NO = "no",
    ONLY = "only",
    YES = "yes"
}
export declare enum DedicatedTemplateOsFileSystemEnum {
    BTRFS = "btrfs",
    EXT3 = "ext3",
    EXT4 = "ext4",
    NTFS = "ntfs",
    REISERFS = "reiserfs",
    SWAP = "swap",
    UFS = "ufs",
    XFS = "xfs",
    ZFS = "zfs"
}
export declare enum DedicatedTemplateOsHardwareRaidEnum {
    RAID0 = "raid0",
    RAID1 = "raid1",
    RAID10 = "raid10",
    RAID5 = "raid5",
    RAID50 = "raid50",
    RAID6 = "raid6",
    RAID60 = "raid60"
}
export declare enum DedicatedTemplateOsLanguageEnum {
    AR = "ar",
    BG = "bg",
    CS = "cs",
    DA = "da",
    DE = "de",
    EL = "el",
    EN = "en",
    ES = "es",
    ET = "et",
    FI = "fi",
    FR = "fr",
    HE = "he",
    HR = "hr",
    HU = "hu",
    IT = "it",
    JA = "ja",
    KO = "ko",
    LT = "lt",
    LV = "lv",
    NB = "nb",
    NL = "nl",
    NO = "no",
    PL = "pl",
    PT = "pt",
    RO = "ro",
    RU = "ru",
    SK = "sk",
    SL = "sl",
    SR = "sr",
    SV = "sv",
    TH = "th",
    TR = "tr",
    TU = "tu",
    UK = "uk",
    ZH_HANS_CN = "zh-Hans-CN",
    ZH_HANS_HK = "zh-Hans-HK"
}
export interface DedicatedTemplateOsProperties {
    changeLog?: string;
    customHostname?: string;
    postInstallationScriptLink?: string;
    postInstallationScriptReturn?: string;
    rating?: number;
    sshKeyName?: string;
    useDistributionKernel?: boolean;
}
export declare enum DedicatedTemplateOsTypeEnum {
    BSD = "bsd",
    LINUX = "linux",
    SOLARIS = "solaris",
    WINDOWS = "windows"
}
export declare enum DedicatedTemplateOsUsageEnum {
    BASIC = "basic",
    CUSTOMER = "customer",
    HOSTING = "hosting",
    OTHER = "other",
    READYTOUSE = "readyToUse",
    VIRTUALISATION = "virtualisation"
}
export declare enum DedicatedTemplatePartitionTypeEnum {
    LOGICAL = "logical",
    LV = "lv",
    PRIMARY = "primary"
}
export declare enum DomainDocumentFormatsEnum {
    GIF = "gif",
    JPEG = "jpeg",
    JPG = "jpg",
    PDF = "pdf",
    PNG = "png"
}
export declare enum DomainNicOperationFunctionEnum {
    CONTACTCONTROL = "ContactControl",
    DNSANYCASTACTIVATE = "DnsAnycastActivate",
    DNSANYCASTDEACTIVATE = "DnsAnycastDeactivate",
    DNSSECDISABLE = "DnssecDisable",
    DNSSECENABLE = "DnssecEnable",
    DNSSECRESIGNING = "DnssecResigning",
    DNSSECROLLKSK = "DnssecRollKsk",
    DNSSECROLLZSK = "DnssecRollZsk",
    DOMAINCONTACTCONTROL = "DomainContactControl",
    DOMAINCONTACTUPDATE = "DomainContactUpdate",
    DOMAINCONTROL = "DomainControl",
    DOMAINCREATE = "DomainCreate",
    DOMAINDELETE = "DomainDelete",
    DOMAINDNSUPDATE = "DomainDnsUpdate",
    DOMAINDSUPDATE = "DomainDsUpdate",
    DOMAINHOLD = "DomainHold",
    DOMAINHOSTCREATE = "DomainHostCreate",
    DOMAINHOSTDELETE = "DomainHostDelete",
    DOMAINHOSTUPDATE = "DomainHostUpdate",
    DOMAININCOMINGTRANSFER = "DomainIncomingTransfer",
    DOMAINLOCK = "DomainLock",
    DOMAINOUTGOINGTRANSFER = "DomainOutgoingTransfer",
    DOMAINRENEW = "DomainRenew",
    DOMAINRESTORE = "DomainRestore",
    DOMAINTRADE = "DomainTrade",
    ZONEIMPORT = "ZoneImport"
}
export declare enum DomainOperationActionEnum {
    CANCANCEL = "canCancel",
    CANCORRECT = "canCorrect",
    CANRELAUNCH = "canRelaunch",
    CANRESET = "canReset"
}
export declare enum DomainOperationStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface DomainOperationStep {
    description: string;
    executionDuration: number;
    step: string;
}
export interface GeolocationContinentCountryLocation {
    continent: CoreTypesContinentEnum;
    countryCode: CoreTypesCountryEnum;
    ip: string;
}
export declare enum HttpMethodEnum {
    DELETE = "DELETE",
    GET = "GET",
    POST = "POST",
    PUT = "PUT"
}
export interface InsightAccess {
    access: string;
    createdAt: string;
    expireAt: string;
}
export interface MebillinggroupBillingGroup {
    contactId?: number;
    creationDate: string;
    groupId: number;
    lastUpdate: string;
    name: string;
    paymentMethodId?: number;
}
export interface MebillinggroupService {
    groupId: number;
    serviceId: number;
}
export interface MebillinggroupserviceCreate {
    serviceId: number;
}
export interface MebillingtasksTask {
    id: number;
    metadata: MebillingtasksTaskMetadatum[];
    name: MebillingtasksTaskNameEnum;
    status: MebillingtasksTaskStatusEnum;
    step: string;
}
export interface MebillingtasksTaskMetadatum {
    key: string;
    value: string;
}
export declare enum MebillingtasksTaskNameEnum {
    CONTACT_CHANGE = "contact/change"
}
export declare enum MebillingtasksTaskStatusEnum {
    TODO = "TODO",
    CANCELLED = "CANCELLED",
    DOING = "DOING",
    DONE = "DONE",
    INIT = "INIT",
    PROBLEM = "PROBLEM",
    ERROR = "ERROR"
}
export interface MeconsentCampaign {
    description: string;
    name: string;
    type: MeconsentCampaignTypeEnum;
}
export declare enum MeconsentCampaignTypeEnum {
    OPTIN = "OPTIN",
    OPTOUT = "OPTOUT"
}
export interface MeconsentConsent {
    campaign: string;
    history: MeconsentDecision[];
    type: MeconsentCampaignTypeEnum;
    value: boolean;
}
export interface MeconsentDecision {
    timestamp: string;
    value: boolean;
}
export interface MeconsumptionPrice {
    currencyCode: OrderCurrencyCodeEnum;
    text: string;
    value: any;
    valueInUcents: number;
}
export interface MeconsumptionTransaction {
    beginDate: string;
    creationDate?: string;
    elements: MeconsumptiontransactionElement[];
    endDate?: string;
    id?: number;
    lastUpdate?: string;
    price: MeconsumptionPrice;
    serviceId: number;
}
export interface MeconsumptiontransactionElement {
    details: MeconsumptiontransactionelementDetail[];
    planCode: string;
    planFamily: string;
    price: MeconsumptionPrice;
    quantity: number;
}
export interface MeconsumptiontransactionelementDetail {
    price: MeconsumptionPrice;
    quantity: number;
    unique_id?: string;
}
export interface MepaymentmethodAvailablePaymentMethod {
    icon: MepaymentmethodIcon;
    integration: PaymentmethodIntegrationType;
    oneshot: boolean;
    paymentType: string;
    registerable: boolean;
    registerableWithTransaction: boolean;
}
export interface MepaymentmethodCallbackUrl {
    cancel: string;
    error: string;
    failure: string;
    pending: string;
    success: string;
}
export interface MepaymentmethodIcon {
    data?: string;
    name?: string;
}
export interface MepaymentmethodPaymentMethod {
    billingContactId?: number;
    creationDate: string;
    default: boolean;
    description?: string;
    expirationDate?: string;
    icon: MepaymentmethodIcon;
    label?: string;
    lastUpdate: string;
    paymentMeanId?: number;
    paymentMethodId: number;
    paymentSubType?: string;
    paymentType: string;
    status: MepaymentmethodPaymentMethodStatus;
}
export declare enum MepaymentmethodPaymentMethodStatus {
    CANCELED = "CANCELED",
    CANCELING = "CANCELING",
    CREATED = "CREATED",
    ERROR = "ERROR",
    EXPIRED = "EXPIRED",
    CREATING = "CREATING",
    MAINTENANCE = "MAINTENANCE",
    PAUSED = "PAUSED",
    VALID = "VALID"
}
export interface MepaymentmethodRegisterValidationResult {
    formSessionId?: string;
    merchantId?: string;
    organizationId?: string;
    paymentMethodId: number;
    url?: string;
    validationType: PaymentmethodIntegrationType;
}
export interface MepaymentmethodTransaction {
    amount: OrderPrice;
    creationDate: string;
    status: MepaymentmethodTransactionStatus;
    transactionId: number;
    type: MepaymentmethodTransactionType;
}
export declare enum MepaymentmethodTransactionStatus {
    CANCELED = "CANCELED",
    CANCELING = "CANCELING",
    CONFIRMING = "CONFIRMING",
    CREATED = "CREATED",
    ERROR = "ERROR",
    FAILED = "FAILED",
    READY = "READY",
    SUCCESS = "SUCCESS"
}
export declare enum MepaymentmethodTransactionType {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT"
}
export interface MeSupportLevelLevel {
    level: MeSupportLevelLevelTypeEnum;
}
export declare enum MeSupportLevelLevelTypeEnum {
    STANDARD = "standard",
    PREMIUM = "premium",
    PREMIUM_ACCREDITED = "premium-accredited",
    BUSINESS = "business",
    ENTERPRISE = "enterprise"
}
export declare enum NichandleaccessRestrictionIpRestrictionRuleEnum {
    ACCEPT = "accept",
    DENY = "deny"
}
export interface NichandleaccessRestrictionSmsAccount {
    creationDate: string;
    description: string;
    id: number;
    lastUsedDate?: string;
    phoneNumber: string;
    status: NichandleaccessRestrictionSmsStatusEnum;
}
export interface NichandleaccessRestrictionSmsCode {
    challenge: string;
}
export interface NichandleaccessRestrictionSmsSecret {
    id: number;
    remainingTry: number;
}
export declare enum NichandleaccessRestrictionSmsStatusEnum {
    DISABLED = "disabled",
    ENABLED = "enabled",
    NEEDCODEVALIDATION = "needCodeValidation",
    NEEDEMAILVALIDATION = "needEmailValidation"
}
export interface NichandleaccessRestrictionSOTPAccount {
    creationDate: string;
    lastUsedDate?: string;
    remaining: number;
    status: NichandleaccessRestrictionSOTPStatusEnum;
}
export interface NichandleaccessRestrictionSOTPSecret {
    codes: string[];
}
export declare enum NichandleaccessRestrictionSOTPStatusEnum {
    DISABLED = "disabled",
    ENABLED = "enabled",
    NEEDCODEVALIDATION = "needCodeValidation",
    NEEDEMAILVALIDATION = "needEmailValidation"
}
export interface NichandleaccessRestrictionSOTPValidate {
    remainingCodes: number;
}
export interface NichandleaccessRestrictionTOTPAccount {
    creationDate: string;
    description: string;
    id: number;
    lastUsedDate?: string;
    status: NichandleaccessRestrictionTOTPStatusEnum;
}
export interface NichandleaccessRestrictionTOTPSecret {
    id: number;
    qrcodeHelper: string;
    secret: string;
}
export declare enum NichandleaccessRestrictionTOTPStatusEnum {
    DISABLED = "disabled",
    ENABLED = "enabled",
    NEEDCODEVALIDATION = "needCodeValidation",
    NEEDEMAILVALIDATION = "needEmailValidation"
}
export interface NichandleaccessRestrictionU2FAccount {
    creationDate: string;
    description: string;
    id: number;
    lastUsedDate?: string;
    status: NichandleaccessRestrictionU2FStatusEnum;
}
export interface NichandleaccessRestrictionU2FRegisterChallenge {
    applicationId: string;
    id: number;
    request: NichandleaccessRestrictionU2FRegistrationRequest;
}
export interface NichandleaccessRestrictionU2FRegistrationRequest {
    challenge: string;
    version: string;
}
export interface NichandleaccessRestrictionU2FSignChallenge {
    applicationId: string;
    request: NichandleaccessRestrictionU2FSignRequest;
}
export interface NichandleaccessRestrictionU2FSignRequest {
    challenge: string;
    keyHandle: string;
    version: string;
}
export declare enum NichandleaccessRestrictionU2FStatusEnum {
    DISABLED = "disabled",
    ENABLED = "enabled",
    NEEDCODEVALIDATION = "needCodeValidation"
}
export interface NichandleAuthenticationCertificate {
    expiration: string;
    subject: string;
}
export interface NichandleAuthenticationGroup {
    creation: string;
    defaultGroup: boolean;
    description: string;
    lastUpdate: string;
    name: string;
    role: NichandleAuthenticationRoleEnum;
}
export interface NichandleAuthenticationProvider {
    creation: string;
    groupAttributeName: string;
    idpSigningCertificate: NichandleAuthenticationCertificate;
    lastUpdate: string;
    ssoServiceUrl: string;
}
export declare enum NichandleAuthenticationRoleEnum {
    REGULAR = "REGULAR",
    ADMIN = "ADMIN",
    UNPRIVILEGED = "UNPRIVILEGED"
}
export interface NichandleBillingCapacities {
    canUseDebtSystem: boolean;
    canUsePostalMailForInvoices: boolean;
    requiredPaymentMethod: NichandleRequiredPaymentMethodEnum;
}
export declare enum NichandlechangeContactContactTypeEnum {
    CONTACTADMIN = "contactAdmin",
    CONTACTBILLING = "contactBilling",
    CONTACTTECH = "contactTech"
}
export declare enum NichandlechangeContactTaskStateEnum {
    ABORTED = "aborted",
    CHECKVALIDITY = "checkValidity",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    EXPIRED = "expired",
    REFUSED = "refused",
    TODO = "todo",
    VALIDATINGBYCUSTOMERS = "validatingByCustomers"
}
export declare enum NichandlechangeEmailTaskStateEnum {
    ABORTED = "aborted",
    DONE = "done",
    REFUSED = "refused",
    TODO = "todo"
}
export interface NichandlecontactChangeTask {
    askingAccount?: string;
    contactTypes: NichandlechangeContactContactTypeEnum[];
    dateDone?: string;
    dateRequest: string;
    fromAccount: string;
    id: number;
    serviceDomain?: string;
    state: NichandlechangeContactTaskStateEnum;
    toAccount: string;
}
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
export interface NichandleCurrency {
    code: string;
    symbol: string;
}
export interface NichandleDeveloperModeRestriction {
    enabled: boolean;
}
export interface NichandledocumentDocument {
    creationDate: string;
    expirationDate?: string;
    getUrl: string;
    id: string;
    name: string;
    putUrl: string;
    size: number;
    tags: any;
    validationDate?: string;
}
export interface NichandleDomainTask {
    canAccelerate: boolean;
    canCancel: boolean;
    canRelaunch: boolean;
    comment?: string;
    creationDate: string;
    domain: string;
    doneDate?: string;
    function: DomainNicOperationFunctionEnum;
    id: number;
    lastUpdate: string;
    status: DomainOperationStatusEnum;
    todoDate: string;
}
export interface NichandleDomainTaskArgument {
    acceptedFormats?: DomainDocumentFormatsEnum[];
    acceptedValues?: string[];
    description?: string;
    fields?: XanderContactFieldEnum[];
    key: string;
    maximumSize?: number;
    minimumSize?: number;
    readOnly: boolean;
    template?: string;
    type: string;
    value?: string;
}
export interface NichandleDomainTaskProgressBar {
    currentStep: DomainOperationStep;
    expectedDoneDate?: string;
    followUpSteps?: DomainOperationStep[];
    lastUpdateDate?: string;
    progress: number;
    taskActions: DomainOperationActionEnum[];
    taskStatus: DomainOperationStatusEnum;
}
export interface NichandleemailChangeTask {
    dateDone?: string;
    dateRequest: string;
    id: number;
    newEmail: string;
    state: NichandlechangeEmailTaskStateEnum;
}
export interface NichandleemailNotification {
    body: string;
    date: string;
    id: number;
    subject: string;
}
export declare enum NichandleGenderEnum {
    FEMALE = "female",
    MALE = "male"
}
export declare enum NichandleIpRegistryEnum {
    ARIN = "ARIN",
    RIPE = "RIPE"
}
export interface NichandleIpRestriction {
    id: number;
    ip: string;
    rule: NichandleaccessRestrictionIpRestrictionRuleEnum;
    warning: boolean;
}
export interface NichandleIpRestrictionDefaultRule {
    rule: NichandleaccessRestrictionIpRestrictionRuleEnum;
    warning: boolean;
}
export interface NichandleIpv4Org {
    abuse_mailbox: string;
    address: string;
    city: string;
    country: NichandleCountryEnum;
    firstname: string;
    lastname: string;
    organisationId: string;
    phone: any;
    registry: NichandleIpRegistryEnum;
    state?: string;
    zip?: string;
}
export interface Nichandleipxe {
    name: string;
    script: string;
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
export interface NichandleManagerPreference {
    key: string;
    value: string;
}
export interface NichandleNicAutorenewInfos {
    active: boolean;
    lastRenew?: string;
    renewDay: number;
}
export interface NichandleNichandle {
    address?: string;
    area?: string;
    birthCity?: string;
    birthDay?: string;
    city?: string;
    companyNationalIdentificationNumber?: string;
    corporationType?: string;
    country: NichandleCountryEnum;
    currency: NichandleCurrency;
    customerCode?: string;
    email: string;
    fax?: string;
    firstname?: string;
    italianSDI?: string;
    language?: NichandleLanguageEnum;
    legalform: NichandleLegalFormEnum;
    name?: string;
    nationalIdentificationNumber?: string;
    nichandle: string;
    organisation?: string;
    ovhCompany: NichandleOvhCompanyEnum;
    ovhSubsidiary: NichandleOvhSubsidiaryEnum;
    phone?: string;
    phoneCountry?: NichandleCountryEnum;
    sex?: NichandleGenderEnum;
    spareEmail?: string;
    state: NichandleStateEnum;
    vat?: string;
    zip?: string;
}
export interface NichandleNichandleSmsNotification {
    abuse: boolean;
    creationDate: string;
    phoneNumber: string;
    status: NichandleNotificationStatusEnum;
    updateDate?: string;
}
export declare enum NichandleNotificationStatusEnum {
    OK = "ok",
    WAITINGFORVALIDATION = "waitingForValidation"
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
export declare enum NichandleRequiredPaymentMethodEnum {
    MANDATORYFORAUTORENEW = "mandatoryForAutorenew",
    MANDATORYFORPOSTPAID = "mandatoryForPostpaid",
    NOTMANDATORY = "notMandatory"
}
export interface NichandlesshKey {
    default: boolean;
    key: string;
    keyName: string;
}
export declare enum NichandleStateEnum {
    COMPLETE = "complete",
    INCOMPLETE = "incomplete"
}
export interface NichandleSubAccount {
    creationDate: string;
    description?: string;
    id: number;
}
export interface NichandleSubAccountConsumerKey {
    consumerKey: string;
}
export interface NichandleSubscription {
    registered?: boolean;
    type: string;
}
export interface NichandleUser {
    creation: string;
    description: string;
    email: string;
    group: string;
    lastUpdate: string;
    login: string;
    passwordLastUpdate: string;
    status: NichandleUserStatus;
}
export declare enum NichandleUserStatus {
    OK = "OK",
    DISABLED = "DISABLED",
    PASSWORD_CHANGE_REQUIRED = "PASSWORD_CHANGE_REQUIRED"
}
export interface NichandleVipStatus {
    cloud: boolean;
    dedicated: boolean;
    telecom: boolean;
    web: boolean;
}
export interface NichandleVoucherStatus {
    validity: boolean;
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
    currencyCode: OrderCurrencyCodeEnum;
    text: string;
    value: any;
}
export interface PaymentmethodAvailablePaymentMethod {
    icon: PaymentmethodIcon;
    integration: PaymentmethodIntegrationType;
    oneshot: boolean;
    paymentType: string;
    registerable: boolean;
    registerableWithTransaction: boolean;
}
export interface PaymentmethodIcon {
    data?: string;
    name?: string;
}
export declare enum PaymentmethodIntegrationType {
    DONE = "DONE",
    IFRAME_VANTIV = "IFRAME_VANTIV",
    IN_CONTEXT = "IN_CONTEXT",
    REDIRECT = "REDIRECT"
}
export interface TelephonyBillingSettings {
    renewByBillingContact: boolean;
}
export interface TelephonyDefaultIpRestriction {
    id: number;
    subnet: any;
    type: TelephonyProtocolEnum;
}
export interface TelephonyLineDescriptionSettings {
    displayOnBill: boolean;
    displayOnIncomingCall: boolean;
}
export interface TelephonyMailDomain2Service {
    domain: string;
    id: number;
}
export declare enum TelephonyProtocolEnum {
    MGCP = "mgcp",
    SIP = "sip"
}
export interface TelephonySettings {
    billingPolicies: TelephonyBillingSettings;
    lineDescriptionPolicies: TelephonyLineDescriptionSettings;
}
export declare enum XanderContactFieldEnum {
    ADDRESS_CITY = "address.city",
    ADDRESS_COUNTRY = "address.country",
    ADDRESS_LINE1 = "address.line1",
    ADDRESS_LINE2 = "address.line2",
    ADDRESS_LINE3 = "address.line3",
    ADDRESS_OTHERDETAILS = "address.otherDetails",
    ADDRESS_PROVINCE = "address.province",
    ADDRESS_ZIP = "address.zip",
    BIRTHCITY = "birthCity",
    BIRTHCOUNTRY = "birthCountry",
    BIRTHDAY = "birthDay",
    BIRTHZIP = "birthZip",
    CELLPHONE = "cellPhone",
    COMPANYNATIONALIDENTIFICATIONNUMBER = "companyNationalIdentificationNumber",
    EMAIL = "email",
    FAX = "fax",
    FIRSTNAME = "firstName",
    GENDER = "gender",
    LANGUAGE = "language",
    LASTNAME = "lastName",
    LEGALFORM = "legalForm",
    NATIONALIDENTIFICATIONNUMBER = "nationalIdentificationNumber",
    NATIONALITY = "nationality",
    ORGANISATIONNAME = "organisationName",
    ORGANISATIONTYPE = "organisationType",
    PHONE = "phone",
    SPAREEMAIL = "spareEmail",
    VAT = "vat"
}
export interface Setting {
    resellerFastModemShipping: boolean;
    resellerModemBasicConfig: boolean;
}
export declare class Me {
    private client;
    constructor(client: Client);
    GetThisObjectProperties(): Promise<NichandleNichandle>;
    AlterThisObjectProperties(payload: NichandleNichandle): Promise<void>;
    AddASOTPAccessRestriction(): Promise<NichandleaccessRestrictionSOTPSecret>;
    DeleteThisTwoFactor(): Promise<void>;
    DisableThisSOTPAccount(code: string): Promise<void>;
    EnableThisSOTPAccount(code: string): Promise<void>;
    ValidateYourSOTPAccount(code: string): Promise<NichandleaccessRestrictionSOTPValidate>;
    ListOfIPRestrictions(): Promise<number[]>;
    AddAnIPAccessRestriction(ip: string, rule: NichandleaccessRestrictionIpRestrictionRuleEnum, warning: boolean): Promise<void>;
    DeleteThisRestrictionRule(id: number): Promise<void>;
    ListOfSmsAccounts(): Promise<number[]>;
    AddASMSAccessRestriction(phone: string): Promise<NichandleaccessRestrictionSmsSecret>;
    DisableThisSMSAccount(code: string, id: number): Promise<void>;
    EnableThisSMSAccount(code: string, id: number): Promise<void>;
    SendASMSToThisAccount(id: number): Promise<NichandleaccessRestrictionSmsCode>;
    ValidateYourSMSAccount(code: string, id: number): Promise<void>;
    ListOfTOTPAccounts(): Promise<number[]>;
    AddATOTPAccessRestriction(): Promise<NichandleaccessRestrictionTOTPSecret>;
    DisableThisTOTPAccount(code: string, id: number): Promise<void>;
    EnableThisTOTPAccount(code: string, id: number): Promise<void>;
    ValidateYourTOTPAccount(code: string, id: number): Promise<void>;
    ListOfU2FAccounts(): Promise<number[]>;
    AddAU2FAccessRestriction(): Promise<NichandleaccessRestrictionU2FRegisterChallenge>;
    GetAnU2FChallenge(id: number): Promise<NichandleaccessRestrictionU2FSignChallenge>;
    DisableThisU2FAccount(clientData: string, id: number, signatureData: string): Promise<void>;
    EnableThisU2FAccount(clientData: string, id: number, signatureData: string): Promise<void>;
    ValidateYourU2FAccount(clientData: string, id: number, registrationData: string): Promise<void>;
    ListOfContractsSignedBetweenYouAndOVH(agreed?: AgreementsAgreementStateEnum, contractId?: number): Promise<number[]>;
    AcceptThisContract(id: number): Promise<string>;
    ListOfYourApiApplication(): Promise<number[]>;
    RemoveThisApplicationItWillRevokeAllCredentialBelongingToThisApplication(applicationId: number): Promise<void>;
    ListOfYourApiCredentials(applicationId?: number, status?: AuthCredentialStateEnum): Promise<number[]>;
    RemoveThisCredential(credentialId: number): Promise<void>;
    ListOfApiCallsDoneWithYourAccount(): Promise<number[]>;
    ListOfApiCallsDoneOnServicesYouHaveAccessTo(): Promise<number[]>;
    ActivateAutoRenewForThisNic(renewDay: number): Promise<void>;
    ListAvailablePaymentMethodsInThisNicCountry(): Promise<BillingAutomaticPaymentMean>;
    ListOfAllTheBillsTheLoggedAccountHas(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]>;
    AllOperationsRelatedToTheseDebts(billId: string, depositOrderId?: number): Promise<number[]>;
    ReturnMainDataAboutTheObjectRelatedToThisDebtOperation(billId: string, operationId: number): Promise<DebtentryAssociatedObject>;
    CreateAnOrderInOrderToPayThisOrderDebt(billId: string): Promise<BillingOrder>;
    GiveAccessToAllEntriesOfTheBill(billId: string): Promise<string[]>;
    RetrieveAllBillingGroups(name?: string): Promise<number[]>;
    CreateANewBillingGroup(payload: MebillinggroupBillingGroup): Promise<MebillinggroupBillingGroup>;
    DeleteABillingGroup(groupId: number): Promise<void>;
    RetrieveInformationAboutABillingGroup(groupId: number): Promise<MebillinggroupBillingGroup>;
    EditBillingGroup(groupId: number, payload: MebillinggroupBillingGroup): Promise<void>;
    RetrieveBillingGroupServiceIDList(groupId: number): Promise<number[]>;
    AssociateAServiceToABillingGroup(groupId: number, payload: MebillinggroupserviceCreate): Promise<MebillinggroupService>;
    UnlinkAServiceFromABillingGroup(groupId: number, serviceId: number): Promise<void>;
    RetrieveInformationAboutABillingGroupService(groupId: number, serviceId: number): Promise<MebillinggroupService>;
    EnableOrDisableInvoicesByPostalMail(enable: boolean): Promise<void>;
    SendInvoicesThroughPostalMail(): Promise<boolean>;
    GetAllCertificatesOfTheAccount(name?: string): Promise<string[]>;
    InitiateAnEmailChangeProcedure(newEmail: string): Promise<NichandleemailChangeTask>;
    InitiateAPasswordChangeProcedure(): Promise<void>;
    ListAllConsentCampaignAvailable(): Promise<MeconsentCampaign[]>;
    RetrieveInformationAboutAConsentCampaign(campaignName: string): Promise<MeconsentCampaign>;
    GetDecisionValueForAConsentCampaign(campaignName: string): Promise<MeconsentConsent>;
    UpdateDecisionOfAConsentCampaign(campaignName: string, value: boolean): Promise<void>;
    GetOngoingConsumptionsForAllServices(): Promise<MeconsumptionTransaction[]>;
    GetForecastedConsumptionsForAllServices(): Promise<MeconsumptionTransaction[]>;
    GetListOfTransactionsBetweenTwoDates(beginDate: string, endDate: string): Promise<MeconsumptionTransaction[]>;
    RetrieveAllContactThatYouCreated(): Promise<number[]>;
    CreateANewContact(address: ContactAddress, email: string, firstName: string, language: NichandleLanguageEnum, lastName: string, legalForm: NichandleLegalFormEnum, phone: any, birthCity?: string, birthCountry?: NichandleCountryEnum, birthDay?: string, birthZip?: string, cellPhone?: any, companyNationalIdentificationNumber?: string, fax?: any, gender?: NichandleGenderEnum, nationalIdentificationNumber?: string, nationality?: NichandleCountryEnum, organisationName?: string, organisationType?: string, vat?: string): Promise<ContactContact>;
    RetrieveInformationAboutAContact(contactId: number): Promise<ContactContact>;
    UpdateAnExistingContact(contactId: number, address?: ContactAddress, birthCity?: string, birthCountry?: NichandleCountryEnum, birthDay?: string, birthZip?: string, cellPhone?: any, companyNationalIdentificationNumber?: string, email?: string, fax?: any, firstName?: string, gender?: NichandleGenderEnum, language?: NichandleLanguageEnum, lastName?: string, legalForm?: NichandleLegalFormEnum, nationalIdentificationNumber?: string, nationality?: NichandleCountryEnum, organisationName?: string, organisationType?: string, phone?: any, vat?: string): Promise<ContactContact>;
    DisplayMandatoryreadonlyInformationsOfAContact(contactId: number): Promise<ContactFieldInformation[]>;
    RetrieveCreditBalanceNames(type?: BillingcreditbalanceType): Promise<string[]>;
    RetrieveACreditBalance(balanceName: string): Promise<BillingcreditBalance>;
    RetrieveMovementsForASpecificBalance(balanceName: string): Promise<number[]>;
    RetrieveASpecificMovementForACreditBalance(balanceName: string, movementId: number): Promise<BillingcreditbalanceMovement>;
    ValidateACodeToGenerateAssociatedCreditMovement(inputCode: string, serviceId?: number): Promise<BillingcreditbalanceMovement>;
    AllDebtsRelatedToYourAccount(): Promise<number[]>;
    CreateAnOrderInOrderToPayAllYourDueDebts(): Promise<BillingOrder>;
    ListOfAllTheDepositsMadeToYourPrepaidAccountOrDebtAccount(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]>;
    GiveAccessToAllEntriesOfThisDeposit(depositId: string): Promise<string[]>;
    GetInvoicesPaidByThisDeposit(depositId: string): Promise<string[]>;
    ListOfDocumentsAddedInYourAccount(): Promise<string[]>;
    CreateNewDocument(name: string, tags?: any): Promise<NichandledocumentDocument>;
    DeleteADocument(id: string): Promise<void>;
    AddCORSSupportOnYourContainer(origin: string): Promise<void>;
    GetTheFaxCustomDomainsLinkedToTheCustomerAccount(): Promise<number[]>;
    CreateACustomDomainForYourFaxServices(domain: string): Promise<TelephonyMailDomain2Service>;
    DeleteACustomDomainOfYourFaxServices(id: number): Promise<void>;
    GenerateAnOrderThatCanBePaidInOrderToCreditTheFidelityAccount(amount: number): Promise<BillingOrder>;
    ListOfEntriesOfTheFidelityAccount(dateFrom?: string, dateTo?: string): Promise<number[]>;
    FetchVisitorCountryAndRegion(): Promise<GeolocationContinentCountryLocation>;
    RetrieveAllGroupsOfThisAccount(): Promise<string[]>;
    CreateANewGroup(name: string, description?: string, role?: NichandleAuthenticationRoleEnum): Promise<NichandleAuthenticationGroup>;
    DeleteThisObject(group: string): Promise<void>;
    AlterAGroup(group: string, description?: string, role?: NichandleAuthenticationRoleEnum): Promise<void>;
    RetrieveAllUsersOfThisAccount(): Promise<string[]>;
    CreateANewUser(email: string, login: string, password: string, description?: string, group?: string): Promise<void>;
    AlterAUser(user: string, description?: string, email?: string, group?: string): Promise<void>;
    DisableThisUser(user: string): Promise<void>;
    EnableThisUser(user: string): Promise<void>;
    GetYourInsightAccessToken(): Promise<InsightAccess>;
    YourCustomizedOperatingSystemInstallationTemplates(): Promise<string[]>;
    CreateATemplate(baseTemplateName: string, defaultLanguage: DedicatedTemplateOsLanguageEnum, name: string): Promise<void>;
    RemoveThisTemplate(templateName: string): Promise<void>;
    CheckTheIntegrityOfThisTemplate(templateName: string): Promise<void>;
    PartitioningSchemesAvailableOnThisTemplate(templateName: string): Promise<string[]>;
    AddASchemeOfPartition(name: string, priority: number, templateName: string): Promise<void>;
    RemoveThisSchemeOfPartition(schemeName: string, templateName: string): Promise<void>;
    HardwareRAIDsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]>;
    AddAnHardwareRAIDInThisPartitioningScheme(disks: string[], mode: DedicatedTemplateOsHardwareRaidEnum, name: string, schemeName: string, step: number, templateName: string): Promise<void>;
    RemoveThisRAID(name: string, schemeName: string, templateName: string): Promise<void>;
    PartitionsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]>;
    AddAPartitionInThisPartitioningScheme(filesystem: DedicatedTemplateOsFileSystemEnum, mountpoint: string, schemeName: string, size: number, step: number, templateName: string, type: DedicatedTemplatePartitionTypeEnum, raid?: number, volumeName?: string): Promise<void>;
    RemoveThisPartition(mountpoint: string, schemeName: string, templateName: string): Promise<void>;
    ListOfOrganisations(): Promise<string[]>;
    AddAnOrganisation(abuse_mailbox: string, address: string, city: string, country: NichandleCountryEnum, firstname: string, lastname: string, phone: any, registry: NichandleIpRegistryEnum, state?: string, zip?: string): Promise<void>;
    DeleteThisOrganisation(organisationId: string): Promise<void>;
    ListOfAllYourIPXEScripts(): Promise<string[]>;
    AddAnIPXEScript(description: string, name: string, script: string): Promise<Nichandleipxe>;
    RemoveThisIPXEScript(name: string): Promise<void>;
    ListOfMailingListYouCanSubscribe(): Promise<string[]>;
    SubscribeAnEmailToARestrictedMailingList(email: string, mailingList: string): Promise<void>;
    ListOfAllYourEmailNotifications(): Promise<number[]>;
    ListOfAllTheOrdersTheLoggedAccountHas(dateFrom?: string, dateTo?: string): Promise<number[]>;
    ReturnMainDataAboutTheObjectTheProcessingOfTheOrderGenerated(orderId: number): Promise<BillingorderAssociatedObject>;
    ListOfRegisteredPaymentMeanYouCanUseToPayThisOrder(orderId: number): Promise<BillingorderRegisteredPaymentMean[]>;
    GiveAccessToAllEntriesOfTheOrder(orderId: number): Promise<number[]>;
    PayWithAPaymentMethodReference(orderId: number, paymentMethod: BillingorderPayWithPaymentMethod): Promise<void>;
    ListOfRegisteredPaymentMethodYouCanUseToPayThisOrder(orderId: number): Promise<BillingorderPaymentMethods>;
    PayWithAnAlreadyRegisteredPaymentMean(orderId: number, paymentMean: BillingReusablePaymentMeanEnum, paymentMeanId?: number): Promise<void>;
    RequestRetractionOfOrder(orderId: number, reason: BillingorderRetractionReasonEnum, comment?: string): Promise<void>;
    ReturnStatusOfOrder(orderId: number): Promise<BillingorderOrderStatusEnum>;
    ListOfOVHAccountsTheLoggedAccountHas(): Promise<string[]>;
    GenerateAnOrderThatCanBePaidInOrderToCreditTheOVHAccount(amount: number, ovhAccountId: string): Promise<BillingOrder>;
    DetailsAboutAnEntryOfTheOVHAccount(ovhAccountId: string, dateFrom?: string, dateTo?: string): Promise<number[]>;
    TransferMoneyFromOvhAccountToYourBankAccount(amount: number, bankAccountId: number, ovhAccountId: string): Promise<BillingOrder>;
    RequestAPasswordRecover(ovhCompany: NichandleOvhCompanyEnum, ovhId: string): Promise<void>;
    RetrieveAvailablePaymentMethod(): Promise<MepaymentmethodAvailablePaymentMethod[]>;
    RetrievePaymentMethodIDList(paymentType?: string, status?: MepaymentmethodPaymentMethodStatus): Promise<number[]>;
    PayAnOrderAndRegisterANewPaymentMethodIfNecessary(callbackUrl: MepaymentmethodCallbackUrl, paymentType: string, _default?: boolean, description?: string, orderId?: number, register?: boolean): Promise<MepaymentmethodRegisterValidationResult>;
    GetOnePaymentMethod(paymentMethodId: number): Promise<MepaymentmethodPaymentMethod>;
    EditPaymentMethod(paymentMethodId: number, _default?: boolean, description?: string): Promise<BillingPaymentMethod>;
    CancelOnePaymentMethod(paymentMethodId: number): Promise<MepaymentmethodPaymentMethod>;
    ChallengeOnePaymentMethod(challenge: string, paymentMethodId: number): Promise<MepaymentmethodPaymentMethod>;
    FinalizeOnePaymentMethodRegistration(paymentMethodId: number, expirationMonth?: number, expirationYear?: number, formSessionId?: string, registrationId?: string): Promise<MepaymentmethodPaymentMethod>;
    RetrieveAssociatedPaymentMethodTransactionIDList(paymentMethodId?: number, status?: MepaymentmethodTransactionStatus): Promise<number[]>;
    GetAssociatedPaymentMethodTransaction(transactionId: number): Promise<MepaymentmethodTransaction>;
    ListOfBankAccounts(state?: BillingBankAccountStateEnum): Promise<number[]>;
    EnablePaymentThroughANewAccount(bic: string, iban: string, ownerAddress: string, ownerName: string, description?: string, setDefault?: boolean): Promise<BillingPaymentMeanValidation>;
    DisablePaymentThroughThisAccount(id: number): Promise<void>;
    ChallengeYourBankAccount(challenge: string, id: number): Promise<void>;
    ChooseThisBankAccountAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id: number): Promise<void>;
    ListOfCreditCards(): Promise<number[]>;
    AddANewCreditCard(description?: string, returnUrl?: string, setDefault?: boolean): Promise<BillingPaymentMeanValidation>;
    DisablePaymentThroughThisCreditCard(id: number): Promise<void>;
    ChooseThisCreditCardAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id: number): Promise<void>;
    ListOfAuthorizedDeferredPaymentAccountForThisCustomer(): Promise<number[]>;
    AllowYouToUseDeferredPaymentWillCancelThePreviousChoice(id: number): Promise<void>;
    ListOfPaypalAccountsUsableForPaymentsOnThisAccount(): Promise<number[]>;
    EnablePaymentThroughANewPayPalAccount(description?: string, returnUrl?: string, setDefault?: boolean): Promise<BillingPaymentMeanValidation>;
    DisablePaymentThroughThisPayPalAccount(id: number): Promise<void>;
    ChooseThisPaypalAgreementAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id: number): Promise<void>;
    ListOfAllTheRefundsTheLoggedAccountHas(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]>;
    GiveAccessToAllEntriesOfTheRefund(refundId: string): Promise<string[]>;
    ListActiveSLA(): Promise<number[]>;
    AskForSLAApplication(id: number): Promise<void>;
    CheckWhetherThisSLACanBeAppliedOnYourServices(id: number): Promise<boolean>;
    GetServicesImpactedByThisSLA(id: number): Promise<BillingSlaOperationService[]>;
    GetTheStatusRequestOfThisSLA(id: number): Promise<string>;
    ListOfYourPublicSSHKeys(): Promise<string[]>;
    AddANewPublicSSHKey(key: string, keyName: string): Promise<void>;
    RemoveThisPublicSSHKey(keyName: string): Promise<void>;
    ListOfSubaccounts(): Promise<number[]>;
    CreateANewSubaccount(description?: string): Promise<number>;
    CreateAConsumerKeyForTheCurrentApplication(id: number): Promise<NichandleSubAccountConsumerKey>;
    ListOfAllOVHThingsYouCanSubscribeTo(): Promise<string[]>;
    FetchTheSupportLevelOfTheAccount(): Promise<MeSupportLevelLevel>;
    ListOfServiceContactChangeTasksYouAreInvolvedIn(askingAccount?: string, state?: NichandlechangeContactTaskStateEnum, toAccount?: string): Promise<number[]>;
    AcceptThisChangeRequest(id: number, token: string): Promise<void>;
    RefuseThisChangeRequest(id: number, token: string): Promise<void>;
    ThisCallWillSendYouANewEmailContainingANewToken(id: number): Promise<void>;
    ListOfDomainTask(domain?: string, _function?: DomainNicOperationFunctionEnum, status?: DomainOperationStatusEnum): Promise<number[]>;
    AccelerateTheTask(id: number): Promise<void>;
    ListOfArguments(id: number): Promise<string[]>;
    CancelTheTask(id: number): Promise<void>;
    RelaunchTheTask(id: number): Promise<void>;
    ListOfEmailChangeTasksYouAreInvolvedIn(state?: NichandlechangeEmailTaskStateEnum): Promise<number[]>;
    TheDefaultSIPIPRestictionsForYourFutureVoIPLines(): Promise<number[]>;
    CreateADefaultIPRestrictionForYourFutureVoIPLines(subnet: any, type: TelephonyProtocolEnum): Promise<TelephonyDefaultIpRestriction>;
    DeleteADefaultIPRestrictionForYourFutureVoIPLines(id: number): Promise<void>;
    ChangeTheTelephonySettingsLinkedToTheCustomerAccount(settings: TelephonySettings): Promise<void>;
    GetTheTelephonySettingsLinkedToTheCustomerAccount(): Promise<TelephonySettings>;
    VIPStatusOfThisAccount(): Promise<NichandleVipStatus>;
    VerifyExistingVoucher(voucher: string): Promise<NichandleVoucherStatus>;
    ListOfAllTheWithdrawalsMadeFromYourPrepaidAccount(dateFrom?: string, dateTo?: string, orderId?: number): Promise<string[]>;
    GiveAccessToAllEntriesOfThisWithdrawal(withdrawalId: string): Promise<string[]>;
    ChangeXdslSettingsLinkedToTheNichandle(resellerFastModemShipping?: boolean, resellerModemBasicConfig?: boolean): Promise<void>;
    GetXdslSettingsLinkedToTheNichandle(): Promise<Setting>;
}
//# sourceMappingURL=me.d.ts.map