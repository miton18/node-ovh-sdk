"use strict";
// GENERATED SDK for me API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * The current state of a contract agreement
 */
var AgreementsAgreementState;
(function (AgreementsAgreementState) {
    AgreementsAgreementState["KO"] = "ko";
    AgreementsAgreementState["OBSOLETE"] = "obsolete";
    AgreementsAgreementState["OK"] = "ok";
    AgreementsAgreementState["TODO"] = "todo";
})(AgreementsAgreementState = exports.AgreementsAgreementState || (exports.AgreementsAgreementState = {}));
/*
 * List of state of an Api Application
 */
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["ACTIVE"] = "active";
    ApplicationStatus["BLOCKED"] = "blocked";
    ApplicationStatus["INACTIVE"] = "inactive";
    ApplicationStatus["TRUSTED"] = "trusted";
})(ApplicationStatus = exports.ApplicationStatus || (exports.ApplicationStatus = {}));
/*
 * All states a Credential can be in
 */
var AuthCredentialState;
(function (AuthCredentialState) {
    AuthCredentialState["EXPIRED"] = "expired";
    AuthCredentialState["PENDINGVALIDATION"] = "pendingValidation";
    AuthCredentialState["REFUSED"] = "refused";
    AuthCredentialState["VALIDATED"] = "validated";
})(AuthCredentialState = exports.AuthCredentialState || (exports.AuthCredentialState = {}));
/*
 * List of bank account states
 */
var BillingBankAccountState;
(function (BillingBankAccountState) {
    BillingBankAccountState["BLOCKEDFORINCIDENTS"] = "blockedForIncidents";
    BillingBankAccountState["PENDINGVALIDATION"] = "pendingValidation";
    BillingBankAccountState["VALID"] = "valid";
})(BillingBankAccountState = exports.BillingBankAccountState || (exports.BillingBankAccountState = {}));
/*
 * billing task status
 */
var BillingBillingTaskStatus;
(function (BillingBillingTaskStatus) {
    BillingBillingTaskStatus["CANCELLED"] = "cancelled";
    BillingBillingTaskStatus["CUSTOMERERROR"] = "customerError";
    BillingBillingTaskStatus["DOING"] = "doing";
    BillingBillingTaskStatus["DONE"] = "done";
    BillingBillingTaskStatus["INIT"] = "init";
    BillingBillingTaskStatus["OVHERROR"] = "ovhError";
    BillingBillingTaskStatus["TODO"] = "todo";
})(BillingBillingTaskStatus = exports.BillingBillingTaskStatus || (exports.BillingBillingTaskStatus = {}));
/*
 * Balance type
 */
var BillingcreditbalanceType;
(function (BillingcreditbalanceType) {
    BillingcreditbalanceType["PREPAID_ACCOUNT"] = "PREPAID_ACCOUNT";
    BillingcreditbalanceType["VOUCHER"] = "VOUCHER";
    BillingcreditbalanceType["DEPOSIT"] = "DEPOSIT";
    BillingcreditbalanceType["BONUS"] = "BONUS";
})(BillingcreditbalanceType = exports.BillingcreditbalanceType || (exports.BillingcreditbalanceType = {}));
/*
 * State of you credit card
 */
var BillingCreditCardState;
(function (BillingCreditCardState) {
    BillingCreditCardState["EXPIRED"] = "expired";
    BillingCreditCardState["TOOMANYFAILURES"] = "tooManyFailures";
    BillingCreditCardState["VALID"] = "valid";
})(BillingCreditCardState = exports.BillingCreditCardState || (exports.BillingCreditCardState = {}));
/*
 * Status of your deferred invoice payment account
 */
var BillingDeferredPaymentAccountStatus;
(function (BillingDeferredPaymentAccountStatus) {
    BillingDeferredPaymentAccountStatus["VALID"] = "valid";
})(BillingDeferredPaymentAccountStatus = exports.BillingDeferredPaymentAccountStatus || (exports.BillingDeferredPaymentAccountStatus = {}));
/*
 * Operations a fidelity account movement can represent
 */
var BillingfidelityAccountOperation;
(function (BillingfidelityAccountOperation) {
    BillingfidelityAccountOperation["BONUS"] = "bonus";
    BillingfidelityAccountOperation["CANCEL_BONUS"] = "cancel-bonus";
    BillingfidelityAccountOperation["CANCEL_CREDIT"] = "cancel-credit";
    BillingfidelityAccountOperation["CANCEL_DEBIT"] = "cancel-debit";
    BillingfidelityAccountOperation["CANCEL_PRE_DEBIT"] = "cancel-pre-debit";
    BillingfidelityAccountOperation["CREDIT"] = "credit";
    BillingfidelityAccountOperation["DEBIT"] = "debit";
    BillingfidelityAccountOperation["PRE_CREDIT"] = "pre-credit";
    BillingfidelityAccountOperation["PRE_DEBIT"] = "pre-debit";
})(BillingfidelityAccountOperation = exports.BillingfidelityAccountOperation || (exports.BillingfidelityAccountOperation = {}));
/*
 * List of order actions
 */
var BillingItemDetailOrderAction;
(function (BillingItemDetailOrderAction) {
    BillingItemDetailOrderAction["CONSUMPTION"] = "consumption";
    BillingItemDetailOrderAction["INSTALLATION"] = "installation";
    BillingItemDetailOrderAction["RENEW"] = "renew";
    BillingItemDetailOrderAction["UPGRADE"] = "upgrade";
})(BillingItemDetailOrderAction = exports.BillingItemDetailOrderAction || (exports.BillingItemDetailOrderAction = {}));
/*
 * Type of objects an order can be linked to
 */
var BillingorderassociatedObjectType;
(function (BillingorderassociatedObjectType) {
    BillingorderassociatedObjectType["BILL"] = "Bill";
    BillingorderassociatedObjectType["DEPOSIT"] = "Deposit";
    BillingorderassociatedObjectType["REFUND"] = "Refund";
    BillingorderassociatedObjectType["WITHDRAWAL"] = "Withdrawal";
})(BillingorderassociatedObjectType = exports.BillingorderassociatedObjectType || (exports.BillingorderassociatedObjectType = {}));
/*
 * History label of order follow-up
 */
var BillingorderfollowUpHistoryStatus;
(function (BillingorderfollowUpHistoryStatus) {
    BillingorderfollowUpHistoryStatus["DELIVERY"] = "DELIVERY";
    BillingorderfollowUpHistoryStatus["FRAUD_CHECK"] = "FRAUD_CHECK";
    BillingorderfollowUpHistoryStatus["FRAUD_DOCS_REQUESTED"] = "FRAUD_DOCS_REQUESTED";
    BillingorderfollowUpHistoryStatus["FRAUD_MANUAL_REVIEW"] = "FRAUD_MANUAL_REVIEW";
    BillingorderfollowUpHistoryStatus["FRAUD_REFUSED"] = "FRAUD_REFUSED";
    BillingorderfollowUpHistoryStatus["INVOICE_IN_PROGRESS"] = "INVOICE_IN_PROGRESS";
    BillingorderfollowUpHistoryStatus["INVOICE_SENT"] = "INVOICE_SENT";
    BillingorderfollowUpHistoryStatus["ORDER_ACCEPTED"] = "ORDER_ACCEPTED";
    BillingorderfollowUpHistoryStatus["ORDER_STARTED"] = "ORDER_STARTED";
    BillingorderfollowUpHistoryStatus["PAYMENT_CONFIRMED"] = "PAYMENT_CONFIRMED";
    BillingorderfollowUpHistoryStatus["PAYMENT_INITIATED"] = "PAYMENT_INITIATED";
    BillingorderfollowUpHistoryStatus["PAYMENT_RECEIVED"] = "PAYMENT_RECEIVED";
    BillingorderfollowUpHistoryStatus["REGISTERED_PAYMENT_INITIATED"] = "REGISTERED_PAYMENT_INITIATED";
})(BillingorderfollowUpHistoryStatus = exports.BillingorderfollowUpHistoryStatus || (exports.BillingorderfollowUpHistoryStatus = {}));
/*
 * Step status of order follow-up
 */
var BillingorderfollowUpStatus;
(function (BillingorderfollowUpStatus) {
    BillingorderfollowUpStatus["DOING"] = "DOING";
    BillingorderfollowUpStatus["DONE"] = "DONE";
    BillingorderfollowUpStatus["ERROR"] = "ERROR";
    BillingorderfollowUpStatus["TODO"] = "TODO";
})(BillingorderfollowUpStatus = exports.BillingorderfollowUpStatus || (exports.BillingorderfollowUpStatus = {}));
/*
 * Status of order follow-up
 */
var BillingorderfollowUpStep;
(function (BillingorderfollowUpStep) {
    BillingorderfollowUpStep["AVAILABLE"] = "AVAILABLE";
    BillingorderfollowUpStep["DELIVERING"] = "DELIVERING";
    BillingorderfollowUpStep["VALIDATED"] = "VALIDATED";
    BillingorderfollowUpStep["VALIDATING"] = "VALIDATING";
})(BillingorderfollowUpStep = exports.BillingorderfollowUpStep || (exports.BillingorderfollowUpStep = {}));
/*
 * All possible order status
 */
var BillingorderOrderStatus;
(function (BillingorderOrderStatus) {
    BillingorderOrderStatus["CANCELLED"] = "cancelled";
    BillingorderOrderStatus["CANCELLING"] = "cancelling";
    BillingorderOrderStatus["CHECKING"] = "checking";
    BillingorderOrderStatus["DELIVERED"] = "delivered";
    BillingorderOrderStatus["DELIVERING"] = "delivering";
    BillingorderOrderStatus["DOCUMENTSREQUESTED"] = "documentsRequested";
    BillingorderOrderStatus["NOTPAID"] = "notPaid";
    BillingorderOrderStatus["UNKNOWN"] = "unknown";
})(BillingorderOrderStatus = exports.BillingorderOrderStatus || (exports.BillingorderOrderStatus = {}));
/*
 * Retraction reason type
 */
var BillingorderRetractionReason;
(function (BillingorderRetractionReason) {
    BillingorderRetractionReason["COMPETITOR"] = "competitor";
    BillingorderRetractionReason["DIFFICULTY"] = "difficulty";
    BillingorderRetractionReason["EXPENSIVE"] = "expensive";
    BillingorderRetractionReason["OTHER"] = "other";
    BillingorderRetractionReason["PERFORMANCE"] = "performance";
    BillingorderRetractionReason["RELIABILITY"] = "reliability";
    BillingorderRetractionReason["UNUSED"] = "unused";
})(BillingorderRetractionReason = exports.BillingorderRetractionReason || (exports.BillingorderRetractionReason = {}));
/*
 * Operations an OVH account movement can represent
 */
var BillingovhAccountOperation;
(function (BillingovhAccountOperation) {
    BillingovhAccountOperation["CANCEL_CREDIT"] = "cancel-credit";
    BillingovhAccountOperation["CANCEL_DEBIT"] = "cancel-debit";
    BillingovhAccountOperation["CANCEL_PRE_DEBIT"] = "cancel-pre-debit";
    BillingovhAccountOperation["CREDIT"] = "credit";
    BillingovhAccountOperation["DEBIT"] = "debit";
    BillingovhAccountOperation["PRE_CREDIT"] = "pre-credit";
    BillingovhAccountOperation["PRE_DEBIT"] = "pre-debit";
})(BillingovhAccountOperation = exports.BillingovhAccountOperation || (exports.BillingovhAccountOperation = {}));
/*
 * All payment means you might have use on an OVH order
 */
var BillingPaymentMean;
(function (BillingPaymentMean) {
    BillingPaymentMean["CASH"] = "cash";
    BillingPaymentMean["CHARGEBACK"] = "chargeback";
    BillingPaymentMean["CHEQUE"] = "cheque";
    BillingPaymentMean["CREDITACCOUNT"] = "creditAccount";
    BillingPaymentMean["CREDITCARD"] = "creditCard";
    BillingPaymentMean["DEBTACCOUNT"] = "debtAccount";
    BillingPaymentMean["DEPOSIT"] = "deposit";
    BillingPaymentMean["DIGITALLAUNCHPAD"] = "digitalLaunchPad";
    BillingPaymentMean["EDINAR"] = "edinar";
    BillingPaymentMean["FIDELITYPOINTS"] = "fidelityPoints";
    BillingPaymentMean["FREE"] = "free";
    BillingPaymentMean["IDEAL"] = "ideal";
    BillingPaymentMean["INCUBATORACCOUNT"] = "incubatorAccount";
    BillingPaymentMean["MANDAT"] = "mandat";
    BillingPaymentMean["MULTIBANCO"] = "multibanco";
    BillingPaymentMean["NONE"] = "none";
    BillingPaymentMean["OVHACCOUNT"] = "ovhAccount";
    BillingPaymentMean["PAYMENTMANDATE"] = "paymentMandate";
    BillingPaymentMean["PAYPAL"] = "paypal";
    BillingPaymentMean["PAYU"] = "payu";
    BillingPaymentMean["PLATNOSCI"] = "platnosci";
    BillingPaymentMean["REFUND"] = "refund";
    BillingPaymentMean["TRANSFER"] = "transfer";
    BillingPaymentMean["WITHDRAWAL"] = "withdrawal";
})(BillingPaymentMean = exports.BillingPaymentMean || (exports.BillingPaymentMean = {}));
/*
 * All the validation you may have to do
 */
var BillingPaymentMeanValidationType;
(function (BillingPaymentMeanValidationType) {
    BillingPaymentMeanValidationType["CREDITACCOUNT"] = "creditAccount";
    BillingPaymentMeanValidationType["DOCUMENTTOSEND"] = "documentToSend";
    BillingPaymentMeanValidationType["SIMPLEVALIDATION"] = "simpleValidation";
})(BillingPaymentMeanValidationType = exports.BillingPaymentMeanValidationType || (exports.BillingPaymentMeanValidationType = {}));
/*
 * List of payment sub type enum
 */
var BillingpaymentMethodPaymentSubType;
(function (BillingpaymentMethodPaymentSubType) {
    BillingpaymentMethodPaymentSubType["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
    BillingpaymentMethodPaymentSubType["MASTERCARD"] = "MASTERCARD";
    BillingpaymentMethodPaymentSubType["VISA"] = "VISA";
})(BillingpaymentMethodPaymentSubType = exports.BillingpaymentMethodPaymentSubType || (exports.BillingpaymentMethodPaymentSubType = {}));
/*
 * List of payment type enum
 */
var BillingpaymentMethodPaymentType;
(function (BillingpaymentMethodPaymentType) {
    BillingpaymentMethodPaymentType["BANK_ACCOUNT"] = "BANK_ACCOUNT";
    BillingpaymentMethodPaymentType["CREDIT_CARD"] = "CREDIT_CARD";
    BillingpaymentMethodPaymentType["DEFERRED_PAYMENT_ACCOUNT"] = "DEFERRED_PAYMENT_ACCOUNT";
    BillingpaymentMethodPaymentType["ENTERPRISE"] = "ENTERPRISE";
    BillingpaymentMethodPaymentType["INTERNAL_TRUSTED_ACCOUNT"] = "INTERNAL_TRUSTED_ACCOUNT";
    BillingpaymentMethodPaymentType["PAYPAL"] = "PAYPAL";
})(BillingpaymentMethodPaymentType = exports.BillingpaymentMethodPaymentType || (exports.BillingpaymentMethodPaymentType = {}));
/*
 * List of payment method status enum
 */
var BillingpaymentMethodStatus;
(function (BillingpaymentMethodStatus) {
    BillingpaymentMethodStatus["BLOCKED"] = "BLOCKED";
    BillingpaymentMethodStatus["BLOCKED_BY_CUSTOMER"] = "BLOCKED_BY_CUSTOMER";
    BillingpaymentMethodStatus["BROKEN"] = "BROKEN";
    BillingpaymentMethodStatus["CANCELED"] = "CANCELED";
    BillingpaymentMethodStatus["CANCELED_BY_CUSTOMER"] = "CANCELED_BY_CUSTOMER";
    BillingpaymentMethodStatus["CREATED"] = "CREATED";
    BillingpaymentMethodStatus["ERROR"] = "ERROR";
    BillingpaymentMethodStatus["EXPIRED"] = "EXPIRED";
    BillingpaymentMethodStatus["PAUSED"] = "PAUSED";
    BillingpaymentMethodStatus["VALID"] = "VALID";
    BillingpaymentMethodStatus["VALID_FOR_CREDIT"] = "VALID_FOR_CREDIT";
})(BillingpaymentMethodStatus = exports.BillingpaymentMethodStatus || (exports.BillingpaymentMethodStatus = {}));
/*
 * State of you paypal account
 */
var BillingPaypalState;
(function (BillingPaypalState) {
    BillingPaypalState["TOOMANYFAILURES"] = "tooManyFailures";
    BillingPaypalState["VALID"] = "valid";
})(BillingPaypalState = exports.BillingPaypalState || (exports.BillingPaypalState = {}));
/*
 * Reusable payment mean type
 */
var BillingReusablePaymentMean;
(function (BillingReusablePaymentMean) {
    BillingReusablePaymentMean["CREDIT_CARD"] = "CREDIT_CARD";
    BillingReusablePaymentMean["ENTERPRISE"] = "ENTERPRISE";
    BillingReusablePaymentMean["INTERNAL_TRUSTED_ACCOUNT"] = "INTERNAL_TRUSTED_ACCOUNT";
    BillingReusablePaymentMean["PAYPAL"] = "PAYPAL";
    BillingReusablePaymentMean["BANKACCOUNT"] = "bankAccount";
    BillingReusablePaymentMean["CREDITCARD"] = "creditCard";
    BillingReusablePaymentMean["FIDELITYACCOUNT"] = "fidelityAccount";
    BillingReusablePaymentMean["OVHACCOUNT"] = "ovhAccount";
})(BillingReusablePaymentMean = exports.BillingReusablePaymentMean || (exports.BillingReusablePaymentMean = {}));
/*
 * Operations a voucher account movement can represent
 */
var BillingvoucherAccountOperation;
(function (BillingvoucherAccountOperation) {
    BillingvoucherAccountOperation["CANCEL_CREDIT"] = "cancel-credit";
    BillingvoucherAccountOperation["CANCEL_DEBIT"] = "cancel-debit";
    BillingvoucherAccountOperation["CANCEL_PRE_DEBIT"] = "cancel-pre-debit";
    BillingvoucherAccountOperation["CREDIT"] = "credit";
    BillingvoucherAccountOperation["DEBIT"] = "debit";
    BillingvoucherAccountOperation["PRE_CREDIT"] = "pre-credit";
    BillingvoucherAccountOperation["PRE_DEBIT"] = "pre-debit";
})(BillingvoucherAccountOperation = exports.BillingvoucherAccountOperation || (exports.BillingvoucherAccountOperation = {}));
/*
 * Continents
 */
var CoreTypesContinent;
(function (CoreTypesContinent) {
    CoreTypesContinent["AFRICA"] = "africa";
    CoreTypesContinent["ANTARTICA"] = "antartica";
    CoreTypesContinent["ASIA"] = "asia";
    CoreTypesContinent["EUROPE"] = "europe";
    CoreTypesContinent["NORTH_AMERICA"] = "north-america";
    CoreTypesContinent["OCEANIA"] = "oceania";
    CoreTypesContinent["SOUTH_AMERICA"] = "south-america";
})(CoreTypesContinent = exports.CoreTypesContinent || (exports.CoreTypesContinent = {}));
/*
 * ISO country codes
 */
var CoreTypesCountry;
(function (CoreTypesCountry) {
    CoreTypesCountry["AC"] = "ac";
    CoreTypesCountry["AD"] = "ad";
    CoreTypesCountry["AE"] = "ae";
    CoreTypesCountry["AF"] = "af";
    CoreTypesCountry["AG"] = "ag";
    CoreTypesCountry["AI"] = "ai";
    CoreTypesCountry["AL"] = "al";
    CoreTypesCountry["AM"] = "am";
    CoreTypesCountry["AN"] = "an";
    CoreTypesCountry["AO"] = "ao";
    CoreTypesCountry["AQ"] = "aq";
    CoreTypesCountry["AR"] = "ar";
    CoreTypesCountry["AS"] = "as";
    CoreTypesCountry["AT"] = "at";
    CoreTypesCountry["AU"] = "au";
    CoreTypesCountry["AW"] = "aw";
    CoreTypesCountry["AX"] = "ax";
    CoreTypesCountry["AZ"] = "az";
    CoreTypesCountry["BA"] = "ba";
    CoreTypesCountry["BB"] = "bb";
    CoreTypesCountry["BD"] = "bd";
    CoreTypesCountry["BE"] = "be";
    CoreTypesCountry["BF"] = "bf";
    CoreTypesCountry["BG"] = "bg";
    CoreTypesCountry["BH"] = "bh";
    CoreTypesCountry["BI"] = "bi";
    CoreTypesCountry["BJ"] = "bj";
    CoreTypesCountry["BL"] = "bl";
    CoreTypesCountry["BM"] = "bm";
    CoreTypesCountry["BN"] = "bn";
    CoreTypesCountry["BO"] = "bo";
    CoreTypesCountry["BQ"] = "bq";
    CoreTypesCountry["BR"] = "br";
    CoreTypesCountry["BS"] = "bs";
    CoreTypesCountry["BT"] = "bt";
    CoreTypesCountry["BV"] = "bv";
    CoreTypesCountry["BW"] = "bw";
    CoreTypesCountry["BY"] = "by";
    CoreTypesCountry["BZ"] = "bz";
    CoreTypesCountry["CA"] = "ca";
    CoreTypesCountry["CC"] = "cc";
    CoreTypesCountry["CD"] = "cd";
    CoreTypesCountry["CF"] = "cf";
    CoreTypesCountry["CG"] = "cg";
    CoreTypesCountry["CH"] = "ch";
    CoreTypesCountry["CI"] = "ci";
    CoreTypesCountry["CK"] = "ck";
    CoreTypesCountry["CL"] = "cl";
    CoreTypesCountry["CM"] = "cm";
    CoreTypesCountry["CN"] = "cn";
    CoreTypesCountry["CO"] = "co";
    CoreTypesCountry["CR"] = "cr";
    CoreTypesCountry["CS"] = "cs";
    CoreTypesCountry["CU"] = "cu";
    CoreTypesCountry["CV"] = "cv";
    CoreTypesCountry["CW"] = "cw";
    CoreTypesCountry["CX"] = "cx";
    CoreTypesCountry["CY"] = "cy";
    CoreTypesCountry["CZ"] = "cz";
    CoreTypesCountry["DE"] = "de";
    CoreTypesCountry["DJ"] = "dj";
    CoreTypesCountry["DK"] = "dk";
    CoreTypesCountry["DM"] = "dm";
    CoreTypesCountry["DO"] = "do";
    CoreTypesCountry["DZ"] = "dz";
    CoreTypesCountry["EC"] = "ec";
    CoreTypesCountry["EE"] = "ee";
    CoreTypesCountry["EG"] = "eg";
    CoreTypesCountry["EH"] = "eh";
    CoreTypesCountry["ER"] = "er";
    CoreTypesCountry["ES"] = "es";
    CoreTypesCountry["ET"] = "et";
    CoreTypesCountry["FC"] = "fc";
    CoreTypesCountry["FD"] = "fd";
    CoreTypesCountry["FI"] = "fi";
    CoreTypesCountry["FJ"] = "fj";
    CoreTypesCountry["FK"] = "fk";
    CoreTypesCountry["FM"] = "fm";
    CoreTypesCountry["FO"] = "fo";
    CoreTypesCountry["FR"] = "fr";
    CoreTypesCountry["FX"] = "fx";
    CoreTypesCountry["GA"] = "ga";
    CoreTypesCountry["GB"] = "gb";
    CoreTypesCountry["GD"] = "gd";
    CoreTypesCountry["GE"] = "ge";
    CoreTypesCountry["GF"] = "gf";
    CoreTypesCountry["GG"] = "gg";
    CoreTypesCountry["GH"] = "gh";
    CoreTypesCountry["GI"] = "gi";
    CoreTypesCountry["GL"] = "gl";
    CoreTypesCountry["GM"] = "gm";
    CoreTypesCountry["GN"] = "gn";
    CoreTypesCountry["GP"] = "gp";
    CoreTypesCountry["GQ"] = "gq";
    CoreTypesCountry["GR"] = "gr";
    CoreTypesCountry["GS"] = "gs";
    CoreTypesCountry["GT"] = "gt";
    CoreTypesCountry["GU"] = "gu";
    CoreTypesCountry["GW"] = "gw";
    CoreTypesCountry["GY"] = "gy";
    CoreTypesCountry["HK"] = "hk";
    CoreTypesCountry["HM"] = "hm";
    CoreTypesCountry["HN"] = "hn";
    CoreTypesCountry["HR"] = "hr";
    CoreTypesCountry["HT"] = "ht";
    CoreTypesCountry["HU"] = "hu";
    CoreTypesCountry["ID"] = "id";
    CoreTypesCountry["IE"] = "ie";
    CoreTypesCountry["IL"] = "il";
    CoreTypesCountry["IM"] = "im";
    CoreTypesCountry["IN"] = "in";
    CoreTypesCountry["IO"] = "io";
    CoreTypesCountry["IQ"] = "iq";
    CoreTypesCountry["IR"] = "ir";
    CoreTypesCountry["IS"] = "is";
    CoreTypesCountry["IT"] = "it";
    CoreTypesCountry["JE"] = "je";
    CoreTypesCountry["JM"] = "jm";
    CoreTypesCountry["JO"] = "jo";
    CoreTypesCountry["JP"] = "jp";
    CoreTypesCountry["KE"] = "ke";
    CoreTypesCountry["KG"] = "kg";
    CoreTypesCountry["KH"] = "kh";
    CoreTypesCountry["KI"] = "ki";
    CoreTypesCountry["KM"] = "km";
    CoreTypesCountry["KN"] = "kn";
    CoreTypesCountry["KP"] = "kp";
    CoreTypesCountry["KR"] = "kr";
    CoreTypesCountry["KW"] = "kw";
    CoreTypesCountry["KY"] = "ky";
    CoreTypesCountry["KZ"] = "kz";
    CoreTypesCountry["LA"] = "la";
    CoreTypesCountry["LB"] = "lb";
    CoreTypesCountry["LC"] = "lc";
    CoreTypesCountry["LI"] = "li";
    CoreTypesCountry["LK"] = "lk";
    CoreTypesCountry["LR"] = "lr";
    CoreTypesCountry["LS"] = "ls";
    CoreTypesCountry["LT"] = "lt";
    CoreTypesCountry["LU"] = "lu";
    CoreTypesCountry["LV"] = "lv";
    CoreTypesCountry["LY"] = "ly";
    CoreTypesCountry["MA"] = "ma";
    CoreTypesCountry["MC"] = "mc";
    CoreTypesCountry["MD"] = "md";
    CoreTypesCountry["ME"] = "me";
    CoreTypesCountry["MF"] = "mf";
    CoreTypesCountry["MG"] = "mg";
    CoreTypesCountry["MH"] = "mh";
    CoreTypesCountry["MK"] = "mk";
    CoreTypesCountry["ML"] = "ml";
    CoreTypesCountry["MM"] = "mm";
    CoreTypesCountry["MN"] = "mn";
    CoreTypesCountry["MO"] = "mo";
    CoreTypesCountry["MP"] = "mp";
    CoreTypesCountry["MQ"] = "mq";
    CoreTypesCountry["MR"] = "mr";
    CoreTypesCountry["MS"] = "ms";
    CoreTypesCountry["MT"] = "mt";
    CoreTypesCountry["MU"] = "mu";
    CoreTypesCountry["MV"] = "mv";
    CoreTypesCountry["MW"] = "mw";
    CoreTypesCountry["MX"] = "mx";
    CoreTypesCountry["MY"] = "my";
    CoreTypesCountry["MZ"] = "mz";
    CoreTypesCountry["NA"] = "na";
    CoreTypesCountry["NC"] = "nc";
    CoreTypesCountry["NE"] = "ne";
    CoreTypesCountry["NF"] = "nf";
    CoreTypesCountry["NG"] = "ng";
    CoreTypesCountry["NI"] = "ni";
    CoreTypesCountry["NL"] = "nl";
    CoreTypesCountry["NO"] = "no";
    CoreTypesCountry["NP"] = "np";
    CoreTypesCountry["NR"] = "nr";
    CoreTypesCountry["NU"] = "nu";
    CoreTypesCountry["NZ"] = "nz";
    CoreTypesCountry["OM"] = "om";
    CoreTypesCountry["PA"] = "pa";
    CoreTypesCountry["PE"] = "pe";
    CoreTypesCountry["PF"] = "pf";
    CoreTypesCountry["PG"] = "pg";
    CoreTypesCountry["PH"] = "ph";
    CoreTypesCountry["PK"] = "pk";
    CoreTypesCountry["PL"] = "pl";
    CoreTypesCountry["PM"] = "pm";
    CoreTypesCountry["PN"] = "pn";
    CoreTypesCountry["PR"] = "pr";
    CoreTypesCountry["PS"] = "ps";
    CoreTypesCountry["PT"] = "pt";
    CoreTypesCountry["PW"] = "pw";
    CoreTypesCountry["PY"] = "py";
    CoreTypesCountry["QA"] = "qa";
    CoreTypesCountry["QC"] = "qc";
    CoreTypesCountry["RE"] = "re";
    CoreTypesCountry["RO"] = "ro";
    CoreTypesCountry["RS"] = "rs";
    CoreTypesCountry["RU"] = "ru";
    CoreTypesCountry["RW"] = "rw";
    CoreTypesCountry["SA"] = "sa";
    CoreTypesCountry["SB"] = "sb";
    CoreTypesCountry["SC"] = "sc";
    CoreTypesCountry["SD"] = "sd";
    CoreTypesCountry["SE"] = "se";
    CoreTypesCountry["SG"] = "sg";
    CoreTypesCountry["SH"] = "sh";
    CoreTypesCountry["SI"] = "si";
    CoreTypesCountry["SJ"] = "sj";
    CoreTypesCountry["SK"] = "sk";
    CoreTypesCountry["SL"] = "sl";
    CoreTypesCountry["SM"] = "sm";
    CoreTypesCountry["SN"] = "sn";
    CoreTypesCountry["SO"] = "so";
    CoreTypesCountry["SR"] = "sr";
    CoreTypesCountry["SS"] = "ss";
    CoreTypesCountry["ST"] = "st";
    CoreTypesCountry["SV"] = "sv";
    CoreTypesCountry["SX"] = "sx";
    CoreTypesCountry["SY"] = "sy";
    CoreTypesCountry["SZ"] = "sz";
    CoreTypesCountry["TC"] = "tc";
    CoreTypesCountry["TD"] = "td";
    CoreTypesCountry["TF"] = "tf";
    CoreTypesCountry["TG"] = "tg";
    CoreTypesCountry["TH"] = "th";
    CoreTypesCountry["TJ"] = "tj";
    CoreTypesCountry["TK"] = "tk";
    CoreTypesCountry["TL"] = "tl";
    CoreTypesCountry["TM"] = "tm";
    CoreTypesCountry["TN"] = "tn";
    CoreTypesCountry["TO"] = "to";
    CoreTypesCountry["TP"] = "tp";
    CoreTypesCountry["TR"] = "tr";
    CoreTypesCountry["TT"] = "tt";
    CoreTypesCountry["TV"] = "tv";
    CoreTypesCountry["TW"] = "tw";
    CoreTypesCountry["TZ"] = "tz";
    CoreTypesCountry["UA"] = "ua";
    CoreTypesCountry["UG"] = "ug";
    CoreTypesCountry["UK"] = "uk";
    CoreTypesCountry["UM"] = "um";
    CoreTypesCountry["US"] = "us";
    CoreTypesCountry["UY"] = "uy";
    CoreTypesCountry["UZ"] = "uz";
    CoreTypesCountry["VA"] = "va";
    CoreTypesCountry["VC"] = "vc";
    CoreTypesCountry["VE"] = "ve";
    CoreTypesCountry["VG"] = "vg";
    CoreTypesCountry["VI"] = "vi";
    CoreTypesCountry["VN"] = "vn";
    CoreTypesCountry["VU"] = "vu";
    CoreTypesCountry["WE"] = "we";
    CoreTypesCountry["WF"] = "wf";
    CoreTypesCountry["WS"] = "ws";
    CoreTypesCountry["YE"] = "ye";
    CoreTypesCountry["YT"] = "yt";
    CoreTypesCountry["YU"] = "yu";
    CoreTypesCountry["ZA"] = "za";
    CoreTypesCountry["ZM"] = "zm";
    CoreTypesCountry["ZW"] = "zw";
})(CoreTypesCountry = exports.CoreTypesCountry || (exports.CoreTypesCountry = {}));
/*
 * Type of objects an order can be linked to
 */
var DebtassociatedObjectType;
(function (DebtassociatedObjectType) {
    DebtassociatedObjectType["BILL"] = "Bill";
    DebtassociatedObjectType["DEBTOPERATION"] = "DebtOperation";
    DebtassociatedObjectType["DEPOSIT"] = "Deposit";
    DebtassociatedObjectType["ORDER"] = "Order";
    DebtassociatedObjectType["OVHACCOUNTMOVEMENT"] = "OvhAccountMovement";
    DebtassociatedObjectType["REFUND"] = "Refund";
    DebtassociatedObjectType["WITHDRAWAL"] = "Withdrawal";
})(DebtassociatedObjectType = exports.DebtassociatedObjectType || (exports.DebtassociatedObjectType = {}));
/*
 * All operations a debt entry can represent
 */
var DebtentryOperation;
(function (DebtentryOperation) {
    DebtentryOperation["CANCEL"] = "CANCEL";
    DebtentryOperation["CASH_MANUAL"] = "CASH_MANUAL";
    DebtentryOperation["CHECK_MANUAL"] = "CHECK_MANUAL";
    DebtentryOperation["CREDITCARD"] = "CREDITCARD";
    DebtentryOperation["CREDITCARD_AUTOMATIC"] = "CREDITCARD_AUTOMATIC";
    DebtentryOperation["CREDITCARD_MANUAL"] = "CREDITCARD_MANUAL";
    DebtentryOperation["CREDIT_ACCOUNT_AUTOMATIC"] = "CREDIT_ACCOUNT_AUTOMATIC";
    DebtentryOperation["EDINAR_MANUAL"] = "EDINAR_MANUAL";
    DebtentryOperation["IDEAL_MANUAL"] = "IDEAL_MANUAL";
    DebtentryOperation["MULTIBANCO_MANUAL"] = "MULTIBANCO_MANUAL";
    DebtentryOperation["ORDER"] = "ORDER";
    DebtentryOperation["PAYPAL_AUTOMATIC"] = "PAYPAL_AUTOMATIC";
    DebtentryOperation["PAYPAL_MANUAL"] = "PAYPAL_MANUAL";
    DebtentryOperation["PAYU_MANUAL"] = "PAYU_MANUAL";
    DebtentryOperation["RECOVERY_TRANSFER_AUTOMATIC"] = "RECOVERY_TRANSFER_AUTOMATIC";
    DebtentryOperation["REFUND"] = "REFUND";
    DebtentryOperation["REFUND_CHECK"] = "REFUND_CHECK";
    DebtentryOperation["REFUND_CREDITCARD"] = "REFUND_CREDITCARD";
    DebtentryOperation["REFUND_CREDIT_ACCOUNT"] = "REFUND_CREDIT_ACCOUNT";
    DebtentryOperation["REFUND_LOSS"] = "REFUND_LOSS";
    DebtentryOperation["REFUND_PAYPAL"] = "REFUND_PAYPAL";
    DebtentryOperation["REFUND_PAYU"] = "REFUND_PAYU";
    DebtentryOperation["REFUND_SEPA"] = "REFUND_SEPA";
    DebtentryOperation["REFUND_TRANSFER"] = "REFUND_TRANSFER";
    DebtentryOperation["REFUND_UNKNOWN"] = "REFUND_UNKNOWN";
    DebtentryOperation["SEPA_AUTOMATIC"] = "SEPA_AUTOMATIC";
    DebtentryOperation["TRANSFER_MANUAL"] = "TRANSFER_MANUAL";
    DebtentryOperation["UNPAID_CHECK"] = "UNPAID_CHECK";
    DebtentryOperation["UNPAID_CREDITCARD"] = "UNPAID_CREDITCARD";
    DebtentryOperation["UNPAID_CREDIT_ACCOUNT"] = "UNPAID_CREDIT_ACCOUNT";
    DebtentryOperation["UNPAID_PAYPAL"] = "UNPAID_PAYPAL";
    DebtentryOperation["UNPAID_SEPA"] = "UNPAID_SEPA";
    DebtentryOperation["UNPAID_WITHDRAW"] = "UNPAID_WITHDRAW";
    DebtentryOperation["WARRANT_MANUAL"] = "WARRANT_MANUAL";
    DebtentryOperation["WITHDRAW_AUTOMATIC"] = "WITHDRAW_AUTOMATIC";
})(DebtentryOperation = exports.DebtentryOperation || (exports.DebtentryOperation = {}));
/*
 * All status a debt entry can be in
 */
var DebtentryStatus;
(function (DebtentryStatus) {
    DebtentryStatus["CANCELLED"] = "CANCELLED";
    DebtentryStatus["DONE"] = "DONE";
    DebtentryStatus["FAILED"] = "FAILED";
    DebtentryStatus["PAID"] = "PAID";
    DebtentryStatus["PENDING"] = "PENDING";
    DebtentryStatus["TODO"] = "TODO";
})(DebtentryStatus = exports.DebtentryStatus || (exports.DebtentryStatus = {}));
/*
 * supports UEFI setup
 */
var DedicatedserverSupportsUEFI;
(function (DedicatedserverSupportsUEFI) {
    DedicatedserverSupportsUEFI["NO"] = "no";
    DedicatedserverSupportsUEFI["ONLY"] = "only";
    DedicatedserverSupportsUEFI["YES"] = "yes";
})(DedicatedserverSupportsUEFI = exports.DedicatedserverSupportsUEFI || (exports.DedicatedserverSupportsUEFI = {}));
/*
 * Filesystems available
 */
var DedicatedTemplateOsFileSystem;
(function (DedicatedTemplateOsFileSystem) {
    DedicatedTemplateOsFileSystem["BTRFS"] = "btrfs";
    DedicatedTemplateOsFileSystem["EXT3"] = "ext3";
    DedicatedTemplateOsFileSystem["EXT4"] = "ext4";
    DedicatedTemplateOsFileSystem["NTFS"] = "ntfs";
    DedicatedTemplateOsFileSystem["REISERFS"] = "reiserfs";
    DedicatedTemplateOsFileSystem["SWAP"] = "swap";
    DedicatedTemplateOsFileSystem["UFS"] = "ufs";
    DedicatedTemplateOsFileSystem["XFS"] = "xfs";
    DedicatedTemplateOsFileSystem["ZFS"] = "zfs";
})(DedicatedTemplateOsFileSystem = exports.DedicatedTemplateOsFileSystem || (exports.DedicatedTemplateOsFileSystem = {}));
/*
 * Hardware RAID enum
 */
var DedicatedTemplateOsHardwareRaid;
(function (DedicatedTemplateOsHardwareRaid) {
    DedicatedTemplateOsHardwareRaid["RAID0"] = "raid0";
    DedicatedTemplateOsHardwareRaid["RAID1"] = "raid1";
    DedicatedTemplateOsHardwareRaid["RAID10"] = "raid10";
    DedicatedTemplateOsHardwareRaid["RAID5"] = "raid5";
    DedicatedTemplateOsHardwareRaid["RAID50"] = "raid50";
    DedicatedTemplateOsHardwareRaid["RAID6"] = "raid6";
    DedicatedTemplateOsHardwareRaid["RAID60"] = "raid60";
})(DedicatedTemplateOsHardwareRaid = exports.DedicatedTemplateOsHardwareRaid || (exports.DedicatedTemplateOsHardwareRaid = {}));
/*
 * all language available
 */
var DedicatedTemplateOsLanguage;
(function (DedicatedTemplateOsLanguage) {
    DedicatedTemplateOsLanguage["AR"] = "ar";
    DedicatedTemplateOsLanguage["BG"] = "bg";
    DedicatedTemplateOsLanguage["CS"] = "cs";
    DedicatedTemplateOsLanguage["DA"] = "da";
    DedicatedTemplateOsLanguage["DE"] = "de";
    DedicatedTemplateOsLanguage["EL"] = "el";
    DedicatedTemplateOsLanguage["EN"] = "en";
    DedicatedTemplateOsLanguage["ES"] = "es";
    DedicatedTemplateOsLanguage["ET"] = "et";
    DedicatedTemplateOsLanguage["FI"] = "fi";
    DedicatedTemplateOsLanguage["FR"] = "fr";
    DedicatedTemplateOsLanguage["HE"] = "he";
    DedicatedTemplateOsLanguage["HR"] = "hr";
    DedicatedTemplateOsLanguage["HU"] = "hu";
    DedicatedTemplateOsLanguage["IT"] = "it";
    DedicatedTemplateOsLanguage["JA"] = "ja";
    DedicatedTemplateOsLanguage["KO"] = "ko";
    DedicatedTemplateOsLanguage["LT"] = "lt";
    DedicatedTemplateOsLanguage["LV"] = "lv";
    DedicatedTemplateOsLanguage["NB"] = "nb";
    DedicatedTemplateOsLanguage["NL"] = "nl";
    DedicatedTemplateOsLanguage["NO"] = "no";
    DedicatedTemplateOsLanguage["PL"] = "pl";
    DedicatedTemplateOsLanguage["PT"] = "pt";
    DedicatedTemplateOsLanguage["RO"] = "ro";
    DedicatedTemplateOsLanguage["RU"] = "ru";
    DedicatedTemplateOsLanguage["SK"] = "sk";
    DedicatedTemplateOsLanguage["SL"] = "sl";
    DedicatedTemplateOsLanguage["SR"] = "sr";
    DedicatedTemplateOsLanguage["SV"] = "sv";
    DedicatedTemplateOsLanguage["TH"] = "th";
    DedicatedTemplateOsLanguage["TR"] = "tr";
    DedicatedTemplateOsLanguage["TU"] = "tu";
    DedicatedTemplateOsLanguage["UK"] = "uk";
    DedicatedTemplateOsLanguage["ZH_HANS_CN"] = "zh-Hans-CN";
    DedicatedTemplateOsLanguage["ZH_HANS_HK"] = "zh-Hans-HK";
})(DedicatedTemplateOsLanguage = exports.DedicatedTemplateOsLanguage || (exports.DedicatedTemplateOsLanguage = {}));
/*
 * Os type
 */
var DedicatedTemplateOsType;
(function (DedicatedTemplateOsType) {
    DedicatedTemplateOsType["BSD"] = "bsd";
    DedicatedTemplateOsType["LINUX"] = "linux";
    DedicatedTemplateOsType["SOLARIS"] = "solaris";
    DedicatedTemplateOsType["WINDOWS"] = "windows";
})(DedicatedTemplateOsType = exports.DedicatedTemplateOsType || (exports.DedicatedTemplateOsType = {}));
/*
 * Os usage definition
 */
var DedicatedTemplateOsUsage;
(function (DedicatedTemplateOsUsage) {
    DedicatedTemplateOsUsage["BASIC"] = "basic";
    DedicatedTemplateOsUsage["CUSTOMER"] = "customer";
    DedicatedTemplateOsUsage["HOSTING"] = "hosting";
    DedicatedTemplateOsUsage["OTHER"] = "other";
    DedicatedTemplateOsUsage["READYTOUSE"] = "readyToUse";
    DedicatedTemplateOsUsage["VIRTUALISATION"] = "virtualisation";
})(DedicatedTemplateOsUsage = exports.DedicatedTemplateOsUsage || (exports.DedicatedTemplateOsUsage = {}));
/*
 * partition type
 */
var DedicatedTemplatePartitionType;
(function (DedicatedTemplatePartitionType) {
    DedicatedTemplatePartitionType["LOGICAL"] = "logical";
    DedicatedTemplatePartitionType["LV"] = "lv";
    DedicatedTemplatePartitionType["PRIMARY"] = "primary";
})(DedicatedTemplatePartitionType = exports.DedicatedTemplatePartitionType || (exports.DedicatedTemplatePartitionType = {}));
/*
 * Document file format
 */
var DomainDocumentFormats;
(function (DomainDocumentFormats) {
    DomainDocumentFormats["GIF"] = "gif";
    DomainDocumentFormats["JPEG"] = "jpeg";
    DomainDocumentFormats["JPG"] = "jpg";
    DomainDocumentFormats["PDF"] = "pdf";
    DomainDocumentFormats["PNG"] = "png";
})(DomainDocumentFormats = exports.DomainDocumentFormats || (exports.DomainDocumentFormats = {}));
/*
 * Operation functions
 */
var DomainNicOperationFunction;
(function (DomainNicOperationFunction) {
    DomainNicOperationFunction["CONTACTCONTROL"] = "ContactControl";
    DomainNicOperationFunction["DNSANYCASTACTIVATE"] = "DnsAnycastActivate";
    DomainNicOperationFunction["DNSANYCASTDEACTIVATE"] = "DnsAnycastDeactivate";
    DomainNicOperationFunction["DNSSECDISABLE"] = "DnssecDisable";
    DomainNicOperationFunction["DNSSECENABLE"] = "DnssecEnable";
    DomainNicOperationFunction["DNSSECRESIGNING"] = "DnssecResigning";
    DomainNicOperationFunction["DNSSECROLLKSK"] = "DnssecRollKsk";
    DomainNicOperationFunction["DNSSECROLLZSK"] = "DnssecRollZsk";
    DomainNicOperationFunction["DOMAINCONTACTCONTROL"] = "DomainContactControl";
    DomainNicOperationFunction["DOMAINCONTACTUPDATE"] = "DomainContactUpdate";
    DomainNicOperationFunction["DOMAINCONTROL"] = "DomainControl";
    DomainNicOperationFunction["DOMAINCREATE"] = "DomainCreate";
    DomainNicOperationFunction["DOMAINDELETE"] = "DomainDelete";
    DomainNicOperationFunction["DOMAINDNSUPDATE"] = "DomainDnsUpdate";
    DomainNicOperationFunction["DOMAINDSUPDATE"] = "DomainDsUpdate";
    DomainNicOperationFunction["DOMAINHOLD"] = "DomainHold";
    DomainNicOperationFunction["DOMAINHOSTCREATE"] = "DomainHostCreate";
    DomainNicOperationFunction["DOMAINHOSTDELETE"] = "DomainHostDelete";
    DomainNicOperationFunction["DOMAINHOSTUPDATE"] = "DomainHostUpdate";
    DomainNicOperationFunction["DOMAININCOMINGTRANSFER"] = "DomainIncomingTransfer";
    DomainNicOperationFunction["DOMAINLOCK"] = "DomainLock";
    DomainNicOperationFunction["DOMAINOUTGOINGTRANSFER"] = "DomainOutgoingTransfer";
    DomainNicOperationFunction["DOMAINRENEW"] = "DomainRenew";
    DomainNicOperationFunction["DOMAINRESTORE"] = "DomainRestore";
    DomainNicOperationFunction["DOMAINTRADE"] = "DomainTrade";
    DomainNicOperationFunction["ZONEIMPORT"] = "ZoneImport";
})(DomainNicOperationFunction = exports.DomainNicOperationFunction || (exports.DomainNicOperationFunction = {}));
/*
 * operation Action
 */
var DomainOperationAction;
(function (DomainOperationAction) {
    DomainOperationAction["CANCANCEL"] = "canCancel";
    DomainOperationAction["CANCORRECT"] = "canCorrect";
    DomainOperationAction["CANRELAUNCH"] = "canRelaunch";
    DomainOperationAction["CANRESET"] = "canReset";
})(DomainOperationAction = exports.DomainOperationAction || (exports.DomainOperationAction = {}));
/*
 * Operation status
 */
var DomainOperationStatus;
(function (DomainOperationStatus) {
    DomainOperationStatus["CANCELLED"] = "cancelled";
    DomainOperationStatus["DOING"] = "doing";
    DomainOperationStatus["DONE"] = "done";
    DomainOperationStatus["ERROR"] = "error";
    DomainOperationStatus["TODO"] = "todo";
})(DomainOperationStatus = exports.DomainOperationStatus || (exports.DomainOperationStatus = {}));
/*
 * All HTTP methods available
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
/*
 * Billing tasks names
 */
var MebillingtasksTaskName;
(function (MebillingtasksTaskName) {
    MebillingtasksTaskName["CONTACT_CHANGE"] = "contact/change";
})(MebillingtasksTaskName = exports.MebillingtasksTaskName || (exports.MebillingtasksTaskName = {}));
/*
 * Billing tasks statuses
 */
var MebillingtasksTaskStatus;
(function (MebillingtasksTaskStatus) {
    MebillingtasksTaskStatus["TODO"] = "TODO";
    MebillingtasksTaskStatus["CANCELLED"] = "CANCELLED";
    MebillingtasksTaskStatus["DOING"] = "DOING";
    MebillingtasksTaskStatus["DONE"] = "DONE";
    MebillingtasksTaskStatus["INIT"] = "INIT";
    MebillingtasksTaskStatus["PROBLEM"] = "PROBLEM";
    MebillingtasksTaskStatus["ERROR"] = "ERROR";
})(MebillingtasksTaskStatus = exports.MebillingtasksTaskStatus || (exports.MebillingtasksTaskStatus = {}));
/*
 * Campaign type
 */
var MeconsentCampaignType;
(function (MeconsentCampaignType) {
    MeconsentCampaignType["OPTIN"] = "OPTIN";
    MeconsentCampaignType["OPTOUT"] = "OPTOUT";
})(MeconsentCampaignType = exports.MeconsentCampaignType || (exports.MeconsentCampaignType = {}));
/*
 * Payment method status enum
 */
var MepaymentmethodPaymentMethodStatus;
(function (MepaymentmethodPaymentMethodStatus) {
    MepaymentmethodPaymentMethodStatus["CANCELED"] = "CANCELED";
    MepaymentmethodPaymentMethodStatus["CANCELING"] = "CANCELING";
    MepaymentmethodPaymentMethodStatus["CREATED"] = "CREATED";
    MepaymentmethodPaymentMethodStatus["ERROR"] = "ERROR";
    MepaymentmethodPaymentMethodStatus["EXPIRED"] = "EXPIRED";
    MepaymentmethodPaymentMethodStatus["CREATING"] = "CREATING";
    MepaymentmethodPaymentMethodStatus["MAINTENANCE"] = "MAINTENANCE";
    MepaymentmethodPaymentMethodStatus["PAUSED"] = "PAUSED";
    MepaymentmethodPaymentMethodStatus["VALID"] = "VALID";
})(MepaymentmethodPaymentMethodStatus = exports.MepaymentmethodPaymentMethodStatus || (exports.MepaymentmethodPaymentMethodStatus = {}));
/*
 * Payment transaction status enum
 */
var MepaymentmethodTransactionStatus;
(function (MepaymentmethodTransactionStatus) {
    MepaymentmethodTransactionStatus["CANCELED"] = "CANCELED";
    MepaymentmethodTransactionStatus["CANCELING"] = "CANCELING";
    MepaymentmethodTransactionStatus["CONFIRMING"] = "CONFIRMING";
    MepaymentmethodTransactionStatus["CREATED"] = "CREATED";
    MepaymentmethodTransactionStatus["ERROR"] = "ERROR";
    MepaymentmethodTransactionStatus["FAILED"] = "FAILED";
    MepaymentmethodTransactionStatus["READY"] = "READY";
    MepaymentmethodTransactionStatus["SUCCESS"] = "SUCCESS";
})(MepaymentmethodTransactionStatus = exports.MepaymentmethodTransactionStatus || (exports.MepaymentmethodTransactionStatus = {}));
/*
 * Payment transaction type enum
 */
var MepaymentmethodTransactionType;
(function (MepaymentmethodTransactionType) {
    MepaymentmethodTransactionType["CREDIT"] = "CREDIT";
    MepaymentmethodTransactionType["DEBIT"] = "DEBIT";
})(MepaymentmethodTransactionType = exports.MepaymentmethodTransactionType || (exports.MepaymentmethodTransactionType = {}));
/*
 * Type of level
 */
var MeSupportLevelLevelType;
(function (MeSupportLevelLevelType) {
    MeSupportLevelLevelType["STANDARD"] = "standard";
    MeSupportLevelLevelType["PREMIUM"] = "premium";
    MeSupportLevelLevelType["PREMIUM_ACCREDITED"] = "premium-accredited";
    MeSupportLevelLevelType["BUSINESS"] = "business";
    MeSupportLevelLevelType["ENTERPRISE"] = "enterprise";
})(MeSupportLevelLevelType = exports.MeSupportLevelLevelType || (exports.MeSupportLevelLevelType = {}));
/*
 * Accept or deny IP access
 */
var NichandleaccessRestrictionIpRestrictionRule;
(function (NichandleaccessRestrictionIpRestrictionRule) {
    NichandleaccessRestrictionIpRestrictionRule["ACCEPT"] = "accept";
    NichandleaccessRestrictionIpRestrictionRule["DENY"] = "deny";
})(NichandleaccessRestrictionIpRestrictionRule = exports.NichandleaccessRestrictionIpRestrictionRule || (exports.NichandleaccessRestrictionIpRestrictionRule = {}));
/*
 * Status of the Sms account
 */
var NichandleaccessRestrictionSmsStatus;
(function (NichandleaccessRestrictionSmsStatus) {
    NichandleaccessRestrictionSmsStatus["DISABLED"] = "disabled";
    NichandleaccessRestrictionSmsStatus["ENABLED"] = "enabled";
    NichandleaccessRestrictionSmsStatus["NEEDCODEVALIDATION"] = "needCodeValidation";
    NichandleaccessRestrictionSmsStatus["NEEDEMAILVALIDATION"] = "needEmailValidation";
})(NichandleaccessRestrictionSmsStatus = exports.NichandleaccessRestrictionSmsStatus || (exports.NichandleaccessRestrictionSmsStatus = {}));
/*
 * Status of SOTP account
 */
var NichandleaccessRestrictionSOTPStatus;
(function (NichandleaccessRestrictionSOTPStatus) {
    NichandleaccessRestrictionSOTPStatus["DISABLED"] = "disabled";
    NichandleaccessRestrictionSOTPStatus["ENABLED"] = "enabled";
    NichandleaccessRestrictionSOTPStatus["NEEDCODEVALIDATION"] = "needCodeValidation";
    NichandleaccessRestrictionSOTPStatus["NEEDEMAILVALIDATION"] = "needEmailValidation";
})(NichandleaccessRestrictionSOTPStatus = exports.NichandleaccessRestrictionSOTPStatus || (exports.NichandleaccessRestrictionSOTPStatus = {}));
/*
 * Status of TOTP account
 */
var NichandleaccessRestrictionTOTPStatus;
(function (NichandleaccessRestrictionTOTPStatus) {
    NichandleaccessRestrictionTOTPStatus["DISABLED"] = "disabled";
    NichandleaccessRestrictionTOTPStatus["ENABLED"] = "enabled";
    NichandleaccessRestrictionTOTPStatus["NEEDCODEVALIDATION"] = "needCodeValidation";
    NichandleaccessRestrictionTOTPStatus["NEEDEMAILVALIDATION"] = "needEmailValidation";
})(NichandleaccessRestrictionTOTPStatus = exports.NichandleaccessRestrictionTOTPStatus || (exports.NichandleaccessRestrictionTOTPStatus = {}));
/*
 * Status of U2F account
 */
var NichandleaccessRestrictionU2FStatus;
(function (NichandleaccessRestrictionU2FStatus) {
    NichandleaccessRestrictionU2FStatus["DISABLED"] = "disabled";
    NichandleaccessRestrictionU2FStatus["ENABLED"] = "enabled";
    NichandleaccessRestrictionU2FStatus["NEEDCODEVALIDATION"] = "needCodeValidation";
})(NichandleaccessRestrictionU2FStatus = exports.NichandleaccessRestrictionU2FStatus || (exports.NichandleaccessRestrictionU2FStatus = {}));
/*
 * Permission given on the account
 */
var NichandleAuthenticationRole;
(function (NichandleAuthenticationRole) {
    NichandleAuthenticationRole["REGULAR"] = "REGULAR";
    NichandleAuthenticationRole["ADMIN"] = "ADMIN";
    NichandleAuthenticationRole["UNPRIVILEGED"] = "UNPRIVILEGED";
})(NichandleAuthenticationRole = exports.NichandleAuthenticationRole || (exports.NichandleAuthenticationRole = {}));
/*
 * Allowed types of contact who can be changed by change contact task
 */
var NichandlechangeContactContactType;
(function (NichandlechangeContactContactType) {
    NichandlechangeContactContactType["CONTACTADMIN"] = "contactAdmin";
    NichandlechangeContactContactType["CONTACTBILLING"] = "contactBilling";
    NichandlechangeContactContactType["CONTACTTECH"] = "contactTech";
})(NichandlechangeContactContactType = exports.NichandlechangeContactContactType || (exports.NichandlechangeContactContactType = {}));
/*
 * State of contact change task
 */
var NichandlechangeContactTaskState;
(function (NichandlechangeContactTaskState) {
    NichandlechangeContactTaskState["ABORTED"] = "aborted";
    NichandlechangeContactTaskState["CHECKVALIDITY"] = "checkValidity";
    NichandlechangeContactTaskState["DOING"] = "doing";
    NichandlechangeContactTaskState["DONE"] = "done";
    NichandlechangeContactTaskState["ERROR"] = "error";
    NichandlechangeContactTaskState["EXPIRED"] = "expired";
    NichandlechangeContactTaskState["REFUSED"] = "refused";
    NichandlechangeContactTaskState["TODO"] = "todo";
    NichandlechangeContactTaskState["VALIDATINGBYCUSTOMERS"] = "validatingByCustomers";
})(NichandlechangeContactTaskState = exports.NichandlechangeContactTaskState || (exports.NichandlechangeContactTaskState = {}));
/*
 * State of email change task
 */
var NichandlechangeEmailTaskState;
(function (NichandlechangeEmailTaskState) {
    NichandlechangeEmailTaskState["ABORTED"] = "aborted";
    NichandlechangeEmailTaskState["DONE"] = "done";
    NichandlechangeEmailTaskState["REFUSED"] = "refused";
    NichandlechangeEmailTaskState["TODO"] = "todo";
})(NichandlechangeEmailTaskState = exports.NichandlechangeEmailTaskState || (exports.NichandlechangeEmailTaskState = {}));
/*
 * Countries a nichandle can choose
 */
var NichandleCountry;
(function (NichandleCountry) {
    NichandleCountry["AC"] = "AC";
    NichandleCountry["AD"] = "AD";
    NichandleCountry["AE"] = "AE";
    NichandleCountry["AF"] = "AF";
    NichandleCountry["AG"] = "AG";
    NichandleCountry["AI"] = "AI";
    NichandleCountry["AL"] = "AL";
    NichandleCountry["AM"] = "AM";
    NichandleCountry["AO"] = "AO";
    NichandleCountry["AQ"] = "AQ";
    NichandleCountry["AR"] = "AR";
    NichandleCountry["AS"] = "AS";
    NichandleCountry["AT"] = "AT";
    NichandleCountry["AU"] = "AU";
    NichandleCountry["AW"] = "AW";
    NichandleCountry["AX"] = "AX";
    NichandleCountry["AZ"] = "AZ";
    NichandleCountry["BA"] = "BA";
    NichandleCountry["BB"] = "BB";
    NichandleCountry["BD"] = "BD";
    NichandleCountry["BE"] = "BE";
    NichandleCountry["BF"] = "BF";
    NichandleCountry["BG"] = "BG";
    NichandleCountry["BH"] = "BH";
    NichandleCountry["BI"] = "BI";
    NichandleCountry["BJ"] = "BJ";
    NichandleCountry["BL"] = "BL";
    NichandleCountry["BM"] = "BM";
    NichandleCountry["BN"] = "BN";
    NichandleCountry["BO"] = "BO";
    NichandleCountry["BQ"] = "BQ";
    NichandleCountry["BR"] = "BR";
    NichandleCountry["BS"] = "BS";
    NichandleCountry["BT"] = "BT";
    NichandleCountry["BW"] = "BW";
    NichandleCountry["BY"] = "BY";
    NichandleCountry["BZ"] = "BZ";
    NichandleCountry["CA"] = "CA";
    NichandleCountry["CC"] = "CC";
    NichandleCountry["CD"] = "CD";
    NichandleCountry["CF"] = "CF";
    NichandleCountry["CG"] = "CG";
    NichandleCountry["CH"] = "CH";
    NichandleCountry["CI"] = "CI";
    NichandleCountry["CK"] = "CK";
    NichandleCountry["CL"] = "CL";
    NichandleCountry["CM"] = "CM";
    NichandleCountry["CN"] = "CN";
    NichandleCountry["CO"] = "CO";
    NichandleCountry["CR"] = "CR";
    NichandleCountry["CU"] = "CU";
    NichandleCountry["CV"] = "CV";
    NichandleCountry["CW"] = "CW";
    NichandleCountry["CX"] = "CX";
    NichandleCountry["CY"] = "CY";
    NichandleCountry["CZ"] = "CZ";
    NichandleCountry["DE"] = "DE";
    NichandleCountry["DG"] = "DG";
    NichandleCountry["DJ"] = "DJ";
    NichandleCountry["DK"] = "DK";
    NichandleCountry["DM"] = "DM";
    NichandleCountry["DO"] = "DO";
    NichandleCountry["DZ"] = "DZ";
    NichandleCountry["EA"] = "EA";
    NichandleCountry["EC"] = "EC";
    NichandleCountry["EE"] = "EE";
    NichandleCountry["EG"] = "EG";
    NichandleCountry["EH"] = "EH";
    NichandleCountry["ER"] = "ER";
    NichandleCountry["ES"] = "ES";
    NichandleCountry["ET"] = "ET";
    NichandleCountry["FI"] = "FI";
    NichandleCountry["FJ"] = "FJ";
    NichandleCountry["FK"] = "FK";
    NichandleCountry["FM"] = "FM";
    NichandleCountry["FO"] = "FO";
    NichandleCountry["FR"] = "FR";
    NichandleCountry["GA"] = "GA";
    NichandleCountry["GB"] = "GB";
    NichandleCountry["GD"] = "GD";
    NichandleCountry["GE"] = "GE";
    NichandleCountry["GF"] = "GF";
    NichandleCountry["GG"] = "GG";
    NichandleCountry["GH"] = "GH";
    NichandleCountry["GI"] = "GI";
    NichandleCountry["GL"] = "GL";
    NichandleCountry["GM"] = "GM";
    NichandleCountry["GN"] = "GN";
    NichandleCountry["GP"] = "GP";
    NichandleCountry["GQ"] = "GQ";
    NichandleCountry["GR"] = "GR";
    NichandleCountry["GS"] = "GS";
    NichandleCountry["GT"] = "GT";
    NichandleCountry["GU"] = "GU";
    NichandleCountry["GW"] = "GW";
    NichandleCountry["GY"] = "GY";
    NichandleCountry["HK"] = "HK";
    NichandleCountry["HN"] = "HN";
    NichandleCountry["HR"] = "HR";
    NichandleCountry["HT"] = "HT";
    NichandleCountry["HU"] = "HU";
    NichandleCountry["IC"] = "IC";
    NichandleCountry["ID"] = "ID";
    NichandleCountry["IE"] = "IE";
    NichandleCountry["IL"] = "IL";
    NichandleCountry["IM"] = "IM";
    NichandleCountry["IN"] = "IN";
    NichandleCountry["IO"] = "IO";
    NichandleCountry["IQ"] = "IQ";
    NichandleCountry["IR"] = "IR";
    NichandleCountry["IS"] = "IS";
    NichandleCountry["IT"] = "IT";
    NichandleCountry["JE"] = "JE";
    NichandleCountry["JM"] = "JM";
    NichandleCountry["JO"] = "JO";
    NichandleCountry["JP"] = "JP";
    NichandleCountry["KE"] = "KE";
    NichandleCountry["KG"] = "KG";
    NichandleCountry["KH"] = "KH";
    NichandleCountry["KI"] = "KI";
    NichandleCountry["KM"] = "KM";
    NichandleCountry["KN"] = "KN";
    NichandleCountry["KP"] = "KP";
    NichandleCountry["KR"] = "KR";
    NichandleCountry["KW"] = "KW";
    NichandleCountry["KY"] = "KY";
    NichandleCountry["KZ"] = "KZ";
    NichandleCountry["LA"] = "LA";
    NichandleCountry["LB"] = "LB";
    NichandleCountry["LC"] = "LC";
    NichandleCountry["LI"] = "LI";
    NichandleCountry["LK"] = "LK";
    NichandleCountry["LR"] = "LR";
    NichandleCountry["LS"] = "LS";
    NichandleCountry["LT"] = "LT";
    NichandleCountry["LU"] = "LU";
    NichandleCountry["LV"] = "LV";
    NichandleCountry["LY"] = "LY";
    NichandleCountry["MA"] = "MA";
    NichandleCountry["MC"] = "MC";
    NichandleCountry["MD"] = "MD";
    NichandleCountry["ME"] = "ME";
    NichandleCountry["MF"] = "MF";
    NichandleCountry["MG"] = "MG";
    NichandleCountry["MH"] = "MH";
    NichandleCountry["MK"] = "MK";
    NichandleCountry["ML"] = "ML";
    NichandleCountry["MM"] = "MM";
    NichandleCountry["MN"] = "MN";
    NichandleCountry["MO"] = "MO";
    NichandleCountry["MP"] = "MP";
    NichandleCountry["MQ"] = "MQ";
    NichandleCountry["MR"] = "MR";
    NichandleCountry["MS"] = "MS";
    NichandleCountry["MT"] = "MT";
    NichandleCountry["MU"] = "MU";
    NichandleCountry["MV"] = "MV";
    NichandleCountry["MW"] = "MW";
    NichandleCountry["MX"] = "MX";
    NichandleCountry["MY"] = "MY";
    NichandleCountry["MZ"] = "MZ";
    NichandleCountry["NA"] = "NA";
    NichandleCountry["NC"] = "NC";
    NichandleCountry["NE"] = "NE";
    NichandleCountry["NF"] = "NF";
    NichandleCountry["NG"] = "NG";
    NichandleCountry["NI"] = "NI";
    NichandleCountry["NL"] = "NL";
    NichandleCountry["NO"] = "NO";
    NichandleCountry["NP"] = "NP";
    NichandleCountry["NR"] = "NR";
    NichandleCountry["NU"] = "NU";
    NichandleCountry["NZ"] = "NZ";
    NichandleCountry["OM"] = "OM";
    NichandleCountry["PA"] = "PA";
    NichandleCountry["PE"] = "PE";
    NichandleCountry["PF"] = "PF";
    NichandleCountry["PG"] = "PG";
    NichandleCountry["PH"] = "PH";
    NichandleCountry["PK"] = "PK";
    NichandleCountry["PL"] = "PL";
    NichandleCountry["PM"] = "PM";
    NichandleCountry["PN"] = "PN";
    NichandleCountry["PR"] = "PR";
    NichandleCountry["PS"] = "PS";
    NichandleCountry["PT"] = "PT";
    NichandleCountry["PW"] = "PW";
    NichandleCountry["PY"] = "PY";
    NichandleCountry["QA"] = "QA";
    NichandleCountry["RE"] = "RE";
    NichandleCountry["RO"] = "RO";
    NichandleCountry["RS"] = "RS";
    NichandleCountry["RU"] = "RU";
    NichandleCountry["RW"] = "RW";
    NichandleCountry["SA"] = "SA";
    NichandleCountry["SB"] = "SB";
    NichandleCountry["SC"] = "SC";
    NichandleCountry["SD"] = "SD";
    NichandleCountry["SE"] = "SE";
    NichandleCountry["SG"] = "SG";
    NichandleCountry["SH"] = "SH";
    NichandleCountry["SI"] = "SI";
    NichandleCountry["SJ"] = "SJ";
    NichandleCountry["SK"] = "SK";
    NichandleCountry["SL"] = "SL";
    NichandleCountry["SM"] = "SM";
    NichandleCountry["SN"] = "SN";
    NichandleCountry["SO"] = "SO";
    NichandleCountry["SR"] = "SR";
    NichandleCountry["SS"] = "SS";
    NichandleCountry["ST"] = "ST";
    NichandleCountry["SV"] = "SV";
    NichandleCountry["SX"] = "SX";
    NichandleCountry["SY"] = "SY";
    NichandleCountry["SZ"] = "SZ";
    NichandleCountry["TA"] = "TA";
    NichandleCountry["TC"] = "TC";
    NichandleCountry["TD"] = "TD";
    NichandleCountry["TF"] = "TF";
    NichandleCountry["TG"] = "TG";
    NichandleCountry["TH"] = "TH";
    NichandleCountry["TJ"] = "TJ";
    NichandleCountry["TK"] = "TK";
    NichandleCountry["TL"] = "TL";
    NichandleCountry["TM"] = "TM";
    NichandleCountry["TN"] = "TN";
    NichandleCountry["TO"] = "TO";
    NichandleCountry["TR"] = "TR";
    NichandleCountry["TT"] = "TT";
    NichandleCountry["TV"] = "TV";
    NichandleCountry["TW"] = "TW";
    NichandleCountry["TZ"] = "TZ";
    NichandleCountry["UA"] = "UA";
    NichandleCountry["UG"] = "UG";
    NichandleCountry["UM"] = "UM";
    NichandleCountry["UNKNOWN"] = "UNKNOWN";
    NichandleCountry["US"] = "US";
    NichandleCountry["UY"] = "UY";
    NichandleCountry["UZ"] = "UZ";
    NichandleCountry["VA"] = "VA";
    NichandleCountry["VC"] = "VC";
    NichandleCountry["VE"] = "VE";
    NichandleCountry["VG"] = "VG";
    NichandleCountry["VI"] = "VI";
    NichandleCountry["VN"] = "VN";
    NichandleCountry["VU"] = "VU";
    NichandleCountry["WF"] = "WF";
    NichandleCountry["WS"] = "WS";
    NichandleCountry["XK"] = "XK";
    NichandleCountry["YE"] = "YE";
    NichandleCountry["YT"] = "YT";
    NichandleCountry["ZA"] = "ZA";
    NichandleCountry["ZM"] = "ZM";
    NichandleCountry["ZW"] = "ZW";
})(NichandleCountry = exports.NichandleCountry || (exports.NichandleCountry = {}));
/*
 * All genders a person can choose
 */
var NichandleGender;
(function (NichandleGender) {
    NichandleGender["FEMALE"] = "female";
    NichandleGender["MALE"] = "male";
})(NichandleGender = exports.NichandleGender || (exports.NichandleGender = {}));
/*
 * Ip registries
 */
var NichandleIpRegistry;
(function (NichandleIpRegistry) {
    NichandleIpRegistry["ARIN"] = "ARIN";
    NichandleIpRegistry["RIPE"] = "RIPE";
})(NichandleIpRegistry = exports.NichandleIpRegistry || (exports.NichandleIpRegistry = {}));
/*
 * Languages a nichandle can choose
 */
var NichandleLanguage;
(function (NichandleLanguage) {
    NichandleLanguage["CS_CZ"] = "cs_CZ";
    NichandleLanguage["DE_DE"] = "de_DE";
    NichandleLanguage["EN_AU"] = "en_AU";
    NichandleLanguage["EN_CA"] = "en_CA";
    NichandleLanguage["EN_GB"] = "en_GB";
    NichandleLanguage["EN_IE"] = "en_IE";
    NichandleLanguage["EN_US"] = "en_US";
    NichandleLanguage["ES_ES"] = "es_ES";
    NichandleLanguage["FI_FI"] = "fi_FI";
    NichandleLanguage["FR_CA"] = "fr_CA";
    NichandleLanguage["FR_FR"] = "fr_FR";
    NichandleLanguage["FR_MA"] = "fr_MA";
    NichandleLanguage["FR_SN"] = "fr_SN";
    NichandleLanguage["FR_TN"] = "fr_TN";
    NichandleLanguage["IT_IT"] = "it_IT";
    NichandleLanguage["LT_LT"] = "lt_LT";
    NichandleLanguage["NL_NL"] = "nl_NL";
    NichandleLanguage["PL_PL"] = "pl_PL";
    NichandleLanguage["PT_PT"] = "pt_PT";
})(NichandleLanguage = exports.NichandleLanguage || (exports.NichandleLanguage = {}));
/*
 * Legal forms a nichandle can be registered as
 */
var NichandleLegalForm;
(function (NichandleLegalForm) {
    NichandleLegalForm["ADMINISTRATION"] = "administration";
    NichandleLegalForm["ASSOCIATION"] = "association";
    NichandleLegalForm["CORPORATION"] = "corporation";
    NichandleLegalForm["INDIVIDUAL"] = "individual";
    NichandleLegalForm["OTHER"] = "other";
    NichandleLegalForm["PERSONALCORPORATION"] = "personalcorporation";
})(NichandleLegalForm = exports.NichandleLegalForm || (exports.NichandleLegalForm = {}));
/*
 * Status of your notification
 */
var NichandleNotificationStatus;
(function (NichandleNotificationStatus) {
    NichandleNotificationStatus["OK"] = "ok";
    NichandleNotificationStatus["WAITINGFORVALIDATION"] = "waitingForValidation";
})(NichandleNotificationStatus = exports.NichandleNotificationStatus || (exports.NichandleNotificationStatus = {}));
/*
 * OVH subsidiaries
 */
var NichandleOvhCompany;
(function (NichandleOvhCompany) {
    NichandleOvhCompany["KIMSUFI"] = "kimsufi";
    NichandleOvhCompany["OVH"] = "ovh";
    NichandleOvhCompany["SOYOUSTART"] = "soyoustart";
})(NichandleOvhCompany = exports.NichandleOvhCompany || (exports.NichandleOvhCompany = {}));
/*
 * OVH subsidiaries
 */
var NichandleOvhSubsidiary;
(function (NichandleOvhSubsidiary) {
    NichandleOvhSubsidiary["ASIA"] = "ASIA";
    NichandleOvhSubsidiary["AU"] = "AU";
    NichandleOvhSubsidiary["CA"] = "CA";
    NichandleOvhSubsidiary["CZ"] = "CZ";
    NichandleOvhSubsidiary["DE"] = "DE";
    NichandleOvhSubsidiary["ES"] = "ES";
    NichandleOvhSubsidiary["EU"] = "EU";
    NichandleOvhSubsidiary["FI"] = "FI";
    NichandleOvhSubsidiary["FR"] = "FR";
    NichandleOvhSubsidiary["GB"] = "GB";
    NichandleOvhSubsidiary["IE"] = "IE";
    NichandleOvhSubsidiary["IT"] = "IT";
    NichandleOvhSubsidiary["LT"] = "LT";
    NichandleOvhSubsidiary["MA"] = "MA";
    NichandleOvhSubsidiary["NL"] = "NL";
    NichandleOvhSubsidiary["PL"] = "PL";
    NichandleOvhSubsidiary["PT"] = "PT";
    NichandleOvhSubsidiary["QC"] = "QC";
    NichandleOvhSubsidiary["SG"] = "SG";
    NichandleOvhSubsidiary["SN"] = "SN";
    NichandleOvhSubsidiary["TN"] = "TN";
    NichandleOvhSubsidiary["US"] = "US";
    NichandleOvhSubsidiary["WE"] = "WE";
    NichandleOvhSubsidiary["WS"] = "WS";
})(NichandleOvhSubsidiary = exports.NichandleOvhSubsidiary || (exports.NichandleOvhSubsidiary = {}));
/*
 * Indicates the mandatory nature of having a valid payment method
 */
var NichandleRequiredPaymentMethod;
(function (NichandleRequiredPaymentMethod) {
    NichandleRequiredPaymentMethod["MANDATORYFORAUTORENEW"] = "mandatoryForAutorenew";
    NichandleRequiredPaymentMethod["MANDATORYFORPOSTPAID"] = "mandatoryForPostpaid";
    NichandleRequiredPaymentMethod["NOTMANDATORY"] = "notMandatory";
})(NichandleRequiredPaymentMethod = exports.NichandleRequiredPaymentMethod || (exports.NichandleRequiredPaymentMethod = {}));
/*
 * States a nichandle can be in
 */
var NichandleState;
(function (NichandleState) {
    NichandleState["COMPLETE"] = "complete";
    NichandleState["INCOMPLETE"] = "incomplete";
})(NichandleState = exports.NichandleState || (exports.NichandleState = {}));
/*
 * Status of a User
 */
var NichandleUserStatus;
(function (NichandleUserStatus) {
    NichandleUserStatus["OK"] = "OK";
    NichandleUserStatus["DISABLED"] = "DISABLED";
    NichandleUserStatus["PASSWORD_CHANGE_REQUIRED"] = "PASSWORD_CHANGE_REQUIRED";
})(NichandleUserStatus = exports.NichandleUserStatus || (exports.NichandleUserStatus = {}));
var OrderCurrencyCode;
(function (OrderCurrencyCode) {
    OrderCurrencyCode["AUD"] = "AUD";
    OrderCurrencyCode["CAD"] = "CAD";
    OrderCurrencyCode["CZK"] = "CZK";
    OrderCurrencyCode["EUR"] = "EUR";
    OrderCurrencyCode["GBP"] = "GBP";
    OrderCurrencyCode["LTL"] = "LTL";
    OrderCurrencyCode["MAD"] = "MAD";
    OrderCurrencyCode["N_A"] = "N/A";
    OrderCurrencyCode["PLN"] = "PLN";
    OrderCurrencyCode["SGD"] = "SGD";
    OrderCurrencyCode["TND"] = "TND";
    OrderCurrencyCode["USD"] = "USD";
    OrderCurrencyCode["XOF"] = "XOF";
    OrderCurrencyCode["POINTS"] = "points";
})(OrderCurrencyCode = exports.OrderCurrencyCode || (exports.OrderCurrencyCode = {}));
/*
 * Payment method integration type
 */
var PaymentmethodIntegrationType;
(function (PaymentmethodIntegrationType) {
    PaymentmethodIntegrationType["DONE"] = "DONE";
    PaymentmethodIntegrationType["IFRAME_VANTIV"] = "IFRAME_VANTIV";
    PaymentmethodIntegrationType["IN_CONTEXT"] = "IN_CONTEXT";
    PaymentmethodIntegrationType["REDIRECT"] = "REDIRECT";
})(PaymentmethodIntegrationType = exports.PaymentmethodIntegrationType || (exports.PaymentmethodIntegrationType = {}));
/*
 * Phone protocol
 */
var TelephonyProtocol;
(function (TelephonyProtocol) {
    TelephonyProtocol["MGCP"] = "mgcp";
    TelephonyProtocol["SIP"] = "sip";
})(TelephonyProtocol = exports.TelephonyProtocol || (exports.TelephonyProtocol = {}));
/*
 * Available contact fields
 */
var XanderContactField;
(function (XanderContactField) {
    XanderContactField["ADDRESS_CITY"] = "address.city";
    XanderContactField["ADDRESS_COUNTRY"] = "address.country";
    XanderContactField["ADDRESS_LINE1"] = "address.line1";
    XanderContactField["ADDRESS_LINE2"] = "address.line2";
    XanderContactField["ADDRESS_LINE3"] = "address.line3";
    XanderContactField["ADDRESS_OTHERDETAILS"] = "address.otherDetails";
    XanderContactField["ADDRESS_PROVINCE"] = "address.province";
    XanderContactField["ADDRESS_ZIP"] = "address.zip";
    XanderContactField["BIRTHCITY"] = "birthCity";
    XanderContactField["BIRTHCOUNTRY"] = "birthCountry";
    XanderContactField["BIRTHDAY"] = "birthDay";
    XanderContactField["BIRTHZIP"] = "birthZip";
    XanderContactField["CELLPHONE"] = "cellPhone";
    XanderContactField["COMPANYNATIONALIDENTIFICATIONNUMBER"] = "companyNationalIdentificationNumber";
    XanderContactField["EMAIL"] = "email";
    XanderContactField["FAX"] = "fax";
    XanderContactField["FIRSTNAME"] = "firstName";
    XanderContactField["GENDER"] = "gender";
    XanderContactField["LANGUAGE"] = "language";
    XanderContactField["LASTNAME"] = "lastName";
    XanderContactField["LEGALFORM"] = "legalForm";
    XanderContactField["NATIONALIDENTIFICATIONNUMBER"] = "nationalIdentificationNumber";
    XanderContactField["NATIONALITY"] = "nationality";
    XanderContactField["ORGANISATIONNAME"] = "organisationName";
    XanderContactField["ORGANISATIONTYPE"] = "organisationType";
    XanderContactField["PHONE"] = "phone";
    XanderContactField["SPAREEMAIL"] = "spareEmail";
    XanderContactField["VAT"] = "vat";
})(XanderContactField = exports.XanderContactField || (exports.XanderContactField = {}));
class Me {
    constructor(client) {
        this.client = client;
    }
    /**
     * Details about your OVH identifier [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me#GET)
     */
    GetThisObjectProperties() {
        let url = `/me`;
        return this.client.request('GET', url);
    }
    /**
     * Details about your OVH identifier [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me#PUT)
     */
    AlterThisObjectProperties(payload) {
        let url = `/me`;
        return this.client.request('PUT', url, payload);
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
    AddASOTPAccessRestriction() {
        let url = `/me/accessRestriction/backupCode`;
        return this.client.request('POST', url);
    }
    /**
     * SOTP Two-Factor Authentication [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode#DELETE)
     */
    DeleteThisTwoFactor() {
        let url = `/me/accessRestriction/backupCode`;
        return this.client.request('DELETE', url);
    }
    /**
     * disable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode/disable#POST)
     */
    DisableThisSOTPAccount(code) {
        let url = `/me/accessRestriction/backupCode/disable`;
        return this.client.request('POST', url, { code });
    }
    /**
     * enable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode/enable#POST)
     */
    EnableThisSOTPAccount(code) {
        let url = `/me/accessRestriction/backupCode/enable`;
        return this.client.request('POST', url, { code });
    }
    /**
     * validate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/backupCode/validate#POST)
     */
    ValidateYourSOTPAccount(code) {
        let url = `/me/accessRestriction/backupCode/validate`;
        return this.client.request('POST', url, { code });
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
    ListOfIPRestrictions() {
        let url = `/me/accessRestriction/ip`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.IpRestriction objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/ip#POST)
     */
    AddAnIPAccessRestriction(ip, rule, warning) {
        let url = `/me/accessRestriction/ip`;
        return this.client.request('POST', url, { ip, rule, warning });
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
    DeleteThisRestrictionRule(id) {
        let url = `/me/accessRestriction/ip/${id}`;
        return this.client.request('DELETE', url);
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
    ListOfSmsAccounts() {
        let url = `/me/accessRestriction/sms`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.accessRestriction.SmsAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms#POST)
     */
    AddASMSAccessRestriction(phone) {
        let url = `/me/accessRestriction/sms`;
        return this.client.request('POST', url, { phone });
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
    DisableThisSMSAccount(code, id) {
        let url = `/me/accessRestriction/sms/${id}/disable`;
        return this.client.request('POST', url, { code });
    }
    /**
     * enable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D/enable#POST)
     */
    EnableThisSMSAccount(code, id) {
        let url = `/me/accessRestriction/sms/${id}/enable`;
        return this.client.request('POST', url, { code });
    }
    /**
     * sendCode operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D/sendCode#POST)
     */
    SendASMSToThisAccount(id) {
        let url = `/me/accessRestriction/sms/${id}/sendCode`;
        return this.client.request('POST', url);
    }
    /**
     * validate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/sms/%7Bid%7D/validate#POST)
     */
    ValidateYourSMSAccount(code, id) {
        let url = `/me/accessRestriction/sms/${id}/validate`;
        return this.client.request('POST', url, { code });
    }
    /**
     * List the nichandle.accessRestriction.TOTPAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp#GET)
     */
    ListOfTOTPAccounts() {
        let url = `/me/accessRestriction/totp`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.accessRestriction.TOTPAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp#POST)
     */
    AddATOTPAccessRestriction() {
        let url = `/me/accessRestriction/totp`;
        return this.client.request('POST', url);
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
    DisableThisTOTPAccount(code, id) {
        let url = `/me/accessRestriction/totp/${id}/disable`;
        return this.client.request('POST', url, { code });
    }
    /**
     * enable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D/enable#POST)
     */
    EnableThisTOTPAccount(code, id) {
        let url = `/me/accessRestriction/totp/${id}/enable`;
        return this.client.request('POST', url, { code });
    }
    /**
     * validate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/totp/%7Bid%7D/validate#POST)
     */
    ValidateYourTOTPAccount(code, id) {
        let url = `/me/accessRestriction/totp/${id}/validate`;
        return this.client.request('POST', url, { code });
    }
    /**
     * List the nichandle.accessRestriction.U2FAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f#GET)
     */
    ListOfU2FAccounts() {
        let url = `/me/accessRestriction/u2f`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.accessRestriction.U2FAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f#POST)
     */
    AddAU2FAccessRestriction() {
        let url = `/me/accessRestriction/u2f`;
        return this.client.request('POST', url);
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
    GetAnU2FChallenge(id) {
        let url = `/me/accessRestriction/u2f/${id}/challenge`;
        return this.client.request('POST', url);
    }
    /**
     * disable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D/disable#POST)
     */
    DisableThisU2FAccount(clientData, id, signatureData) {
        let url = `/me/accessRestriction/u2f/${id}/disable`;
        return this.client.request('POST', url, { clientData, signatureData });
    }
    /**
     * enable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D/enable#POST)
     */
    EnableThisU2FAccount(clientData, id, signatureData) {
        let url = `/me/accessRestriction/u2f/${id}/enable`;
        return this.client.request('POST', url, { clientData, signatureData });
    }
    /**
     * validate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/accessRestriction/u2f/%7Bid%7D/validate#POST)
     */
    ValidateYourU2FAccount(clientData, id, registrationData) {
        let url = `/me/accessRestriction/u2f/${id}/validate`;
        return this.client.request('POST', url, { clientData, registrationData });
    }
    /**
     * List the agreements.ContractAgreement objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/agreements#GET)
     */
    ListOfContractsSignedBetweenYouAndOVH(agreed, contractId) {
        let url = `/me/agreements?`;
        const queryParams = new query_params_1.default();
        if (agreed) {
            queryParams.set('agreed', agreed.toString());
        }
        if (contractId) {
            queryParams.set('contractId', contractId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    AcceptThisContract(id) {
        let url = `/me/agreements/${id}/accept`;
        return this.client.request('POST', url);
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
    ListOfYourApiApplication() {
        let url = `/me/api/application`;
        return this.client.request('GET', url);
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
    RemoveThisApplicationItWillRevokeAllCredentialBelongingToThisApplication(applicationId) {
        let url = `/me/api/application/${applicationId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the api.Credential objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/api/credential#GET)
     */
    ListOfYourApiCredentials(applicationId, status) {
        let url = `/me/api/credential?`;
        const queryParams = new query_params_1.default();
        if (applicationId) {
            queryParams.set('applicationId', applicationId.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    RemoveThisCredential(credentialId) {
        let url = `/me/api/credential/${credentialId}`;
        return this.client.request('DELETE', url);
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
    ListOfApiCallsDoneWithYourAccount() {
        let url = `/me/api/logs/self`;
        return this.client.request('GET', url);
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
    ListOfApiCallsDoneOnServicesYouHaveAccessTo() {
        let url = `/me/api/logs/services`;
        return this.client.request('GET', url);
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
    ActivateAutoRenewForThisNic(renewDay) {
        let url = `/me/autorenew`;
        return this.client.request('POST', url, { renewDay });
    }
    /**
     * availableAutomaticPaymentMeans operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/availableAutomaticPaymentMeans#GET)
     */
    ListAvailablePaymentMethodsInThisNicCountry() {
        let url = `/me/availableAutomaticPaymentMeans`;
        return this.client.request('GET', url);
    }
    /**
     * List the billing.Bill objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill#GET)
     */
    ListOfAllTheBillsTheLoggedAccountHas(dateFrom, dateTo, orderId) {
        let url = `/me/bill?`;
        const queryParams = new query_params_1.default();
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        if (orderId) {
            queryParams.set('orderId', orderId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    AllOperationsRelatedToTheseDebts(billId, depositOrderId) {
        let url = `/me/bill/${billId}/debt/operation?`;
        const queryParams = new query_params_1.default();
        if (depositOrderId) {
            queryParams.set('depositOrderId', depositOrderId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    ReturnMainDataAboutTheObjectRelatedToThisDebtOperation(billId, operationId) {
        let url = `/me/bill/${billId}/debt/operation/${operationId}/associatedObject`;
        return this.client.request('GET', url);
    }
    /**
     * pay operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/debt/pay#POST)
     */
    CreateAnOrderInOrderToPayThisOrderDebt(billId) {
        let url = `/me/bill/${billId}/debt/pay`;
        return this.client.request('POST', url);
    }
    /**
     * List the billing.BillDetail objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/bill/%7BbillId%7D/details#GET)
     */
    GiveAccessToAllEntriesOfTheBill(billId) {
        let url = `/me/bill/${billId}/details`;
        return this.client.request('GET', url);
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
    RetrieveAllBillingGroups(name) {
        let url = `/me/billing/group?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Manage billing groups [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group#POST)
     */
    CreateANewBillingGroup(payload) {
        let url = `/me/billing/group`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Manage billing groups [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D#DELETE)
     */
    DeleteABillingGroup(groupId) {
        let url = `/me/billing/group/${groupId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Manage billing groups [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D#GET)
     */
    RetrieveInformationAboutABillingGroup(groupId) {
        let url = `/me/billing/group/${groupId}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage billing groups [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D#PUT)
     */
    EditBillingGroup(groupId, payload) {
        let url = `/me/billing/group/${groupId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service#GET)
     */
    RetrieveBillingGroupServiceIDList(groupId) {
        let url = `/me/billing/group/${groupId}/service`;
        return this.client.request('GET', url);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service#POST)
     */
    AssociateAServiceToABillingGroup(groupId, payload) {
        let url = `/me/billing/group/${groupId}/service`;
        return this.client.request('POST', url, payload);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service/%7BserviceId%7D#DELETE)
     */
    UnlinkAServiceFromABillingGroup(groupId, serviceId) {
        let url = `/me/billing/group/${groupId}/service/${serviceId}`;
        return this.client.request('DELETE', url);
    }
    /**
     *  [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/group/%7BgroupId%7D/service/%7BserviceId%7D#GET)
     */
    RetrieveInformationAboutABillingGroupService(groupId, serviceId) {
        let url = `/me/billing/group/${groupId}/service/${serviceId}`;
        return this.client.request('GET', url);
    }
    /**
     * invoicesByPostalMail operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/invoicesByPostalMail#POST)
     */
    EnableOrDisableInvoicesByPostalMail(enable) {
        let url = `/me/billing/invoicesByPostalMail`;
        return this.client.request('POST', url, { enable });
    }
    /**
     * invoicesByPostalMail operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/billing/invoicesByPostalMail#GET)
     */
    SendInvoicesThroughPostalMail() {
        let url = `/me/billing/invoicesByPostalMail`;
        return this.client.request('GET', url);
    }
    /**
     * Get all certificates of the account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/certificates#GET)
     */
    GetAllCertificatesOfTheAccount(name) {
        let url = `/me/certificates?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * changeEmail operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/changeEmail#POST)
     */
    InitiateAnEmailChangeProcedure(newEmail) {
        let url = `/me/changeEmail`;
        return this.client.request('POST', url, { newEmail });
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/changePassword#POST)
     */
    InitiateAPasswordChangeProcedure() {
        let url = `/me/changePassword`;
        return this.client.request('POST', url);
    }
    /**
     * List all consent campaign available [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent#GET)
     */
    ListAllConsentCampaignAvailable() {
        let url = `/me/consent`;
        return this.client.request('GET', url);
    }
    /**
     * Retrieve information about a consent campaign [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent/%7BcampaignName%7D#GET)
     */
    RetrieveInformationAboutAConsentCampaign(campaignName) {
        let url = `/me/consent/${campaignName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get decision value for a consent campaign [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent/%7BcampaignName%7D/decision#GET)
     */
    GetDecisionValueForAConsentCampaign(campaignName) {
        let url = `/me/consent/${campaignName}/decision`;
        return this.client.request('GET', url);
    }
    /**
     * Get decision value for a consent campaign [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consent/%7BcampaignName%7D/decision#PUT)
     */
    UpdateDecisionOfAConsentCampaign(campaignName, value) {
        let url = `/me/consent/${campaignName}/decision`;
        return this.client.request('PUT', url, { value });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consumption/usage/current#GET)
     */
    GetOngoingConsumptionsForAllServices() {
        let url = `/me/consumption/usage/current`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consumption/usage/forecast#GET)
     */
    GetForecastedConsumptionsForAllServices() {
        let url = `/me/consumption/usage/forecast`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/consumption/usage/history#GET)
     */
    GetListOfTransactionsBetweenTwoDates(beginDate, endDate) {
        let url = `/me/consumption/usage/history?`;
        const queryParams = new query_params_1.default();
        if (beginDate) {
            queryParams.set('beginDate', beginDate.toString());
        }
        if (endDate) {
            queryParams.set('endDate', endDate.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact#GET)
     */
    RetrieveAllContactThatYouCreated() {
        let url = `/me/contact`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact#POST)
     */
    CreateANewContact(address, email, firstName, language, lastName, legalForm, phone, birthCity, birthCountry, birthDay, birthZip, cellPhone, companyNationalIdentificationNumber, fax, gender, nationalIdentificationNumber, nationality, organisationName, organisationType, vat) {
        let url = `/me/contact`;
        return this.client.request('POST', url, { address, email, firstName, language, lastName, legalForm, phone, birthCity, birthCountry, birthDay, birthZip, cellPhone, companyNationalIdentificationNumber, fax, gender, nationalIdentificationNumber, nationality, organisationName, organisationType, vat });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact/%7BcontactId%7D#GET)
     */
    RetrieveInformationAboutAContact(contactId) {
        let url = `/me/contact/${contactId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact/%7BcontactId%7D#PUT)
     */
    UpdateAnExistingContact(contactId, address, birthCity, birthCountry, birthDay, birthZip, cellPhone, companyNationalIdentificationNumber, email, fax, firstName, gender, language, lastName, legalForm, nationalIdentificationNumber, nationality, organisationName, organisationType, phone, vat) {
        let url = `/me/contact/${contactId}`;
        return this.client.request('PUT', url, { address, birthCity, birthCountry, birthDay, birthZip, cellPhone, companyNationalIdentificationNumber, email, fax, firstName, gender, language, lastName, legalForm, nationalIdentificationNumber, nationality, organisationName, organisationType, phone, vat });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/contact/%7BcontactId%7D/fields#GET)
     */
    DisplayMandatoryreadonlyInformationsOfAContact(contactId) {
        let url = `/me/contact/${contactId}/fields`;
        return this.client.request('GET', url);
    }
    /**
     * Retrieve credit balance names [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance#GET)
     */
    RetrieveCreditBalanceNames(type) {
        let url = `/me/credit/balance?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Retrieve a credit balance [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance/%7BbalanceName%7D#GET)
     */
    RetrieveACreditBalance(balanceName) {
        let url = `/me/credit/balance/${balanceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Retrieve movements for a specific balance [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance/%7BbalanceName%7D/movement#GET)
     */
    RetrieveMovementsForASpecificBalance(balanceName) {
        let url = `/me/credit/balance/${balanceName}/movement`;
        return this.client.request('GET', url);
    }
    /**
     * Retrieve a specific movement for a credit balance [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/balance/%7BbalanceName%7D/movement/%7BmovementId%7D#GET)
     */
    RetrieveASpecificMovementForACreditBalance(balanceName, movementId) {
        let url = `/me/credit/balance/${balanceName}/movement/${movementId}`;
        return this.client.request('GET', url);
    }
    /**
     * Validate a code to generate associated credit [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/credit/code#POST)
     */
    ValidateACodeToGenerateAssociatedCreditMovement(inputCode, serviceId) {
        let url = `/me/credit/code`;
        return this.client.request('POST', url, { inputCode, serviceId });
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
    AllDebtsRelatedToYourAccount() {
        let url = `/me/debtAccount/debt`;
        return this.client.request('GET', url);
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
    CreateAnOrderInOrderToPayAllYourDueDebts() {
        let url = `/me/debtAccount/pay`;
        return this.client.request('POST', url);
    }
    /**
     * List the billing.Deposit objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/deposit#GET)
     */
    ListOfAllTheDepositsMadeToYourPrepaidAccountOrDebtAccount(dateFrom, dateTo, orderId) {
        let url = `/me/deposit?`;
        const queryParams = new query_params_1.default();
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        if (orderId) {
            queryParams.set('orderId', orderId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    GiveAccessToAllEntriesOfThisDeposit(depositId) {
        let url = `/me/deposit/${depositId}/details`;
        return this.client.request('GET', url);
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
    GetInvoicesPaidByThisDeposit(depositId) {
        let url = `/me/deposit/${depositId}/paidBills`;
        return this.client.request('GET', url);
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
    ListOfDocumentsAddedInYourAccount() {
        let url = `/me/document`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.document.Document objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document#POST)
     */
    CreateNewDocument(name, tags) {
        let url = `/me/document`;
        return this.client.request('POST', url, { name, tags });
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
    DeleteADocument(id) {
        let url = `/me/document/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Add CORS support on your container [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/document/cors#POST)
     */
    AddCORSSupportOnYourContainer(origin) {
        let url = `/me/document/cors`;
        return this.client.request('POST', url, { origin });
    }
    /**
     * List the telephony.MailDomain2Service objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fax/customDomains#GET)
     */
    GetTheFaxCustomDomainsLinkedToTheCustomerAccount() {
        let url = `/me/fax/customDomains`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.MailDomain2Service objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fax/customDomains#POST)
     */
    CreateACustomDomainForYourFaxServices(domain) {
        let url = `/me/fax/customDomains`;
        return this.client.request('POST', url, { domain });
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
    DeleteACustomDomainOfYourFaxServices(id) {
        let url = `/me/fax/customDomains/${id}`;
        return this.client.request('DELETE', url);
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
    GenerateAnOrderThatCanBePaidInOrderToCreditTheFidelityAccount(amount) {
        let url = `/me/fidelityAccount/creditOrder`;
        return this.client.request('POST', url, { amount });
    }
    /**
     * List the billing.FidelityMovement objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/fidelityAccount/movements#GET)
     */
    ListOfEntriesOfTheFidelityAccount(dateFrom, dateTo) {
        let url = `/me/fidelityAccount/movements?`;
        const queryParams = new query_params_1.default();
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    FetchVisitorCountryAndRegion() {
        let url = `/me/geolocation`;
        return this.client.request('POST', url);
    }
    /**
     * Groups linked to this account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group#GET)
     */
    RetrieveAllGroupsOfThisAccount() {
        let url = `/me/identity/group`;
        return this.client.request('GET', url);
    }
    /**
     * Groups linked to this account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group#POST)
     */
    CreateANewGroup(name, description, role) {
        let url = `/me/identity/group`;
        return this.client.request('POST', url, { name, description, role });
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
    DeleteThisObject(group) {
        let url = `/me/identity/group/${group}`;
        return this.client.request('DELETE', url);
    }
    /**
     * A group linked to this account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/group/%7Bgroup%7D#PUT)
     */
    AlterAGroup(group, description, role) {
        let url = `/me/identity/group/${group}`;
        return this.client.request('PUT', url, { description, role });
    }
    /**
     * Users linked to this account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user#GET)
     */
    RetrieveAllUsersOfThisAccount() {
        let url = `/me/identity/user`;
        return this.client.request('GET', url);
    }
    /**
     * Users linked to this account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user#POST)
     */
    CreateANewUser(email, login, password, description, group) {
        let url = `/me/identity/user`;
        return this.client.request('POST', url, { email, login, password, description, group });
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
    AlterAUser(user, description, email, group) {
        let url = `/me/identity/user/${user}`;
        return this.client.request('PUT', url, { description, email, group });
    }
    /**
     * A user linked to this account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user/%7Buser%7D/disable#POST)
     */
    DisableThisUser(user) {
        let url = `/me/identity/user/${user}/disable`;
        return this.client.request('POST', url);
    }
    /**
     * A user linked to this account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/identity/user/%7Buser%7D/enable#POST)
     */
    EnableThisUser(user) {
        let url = `/me/identity/user/${user}/enable`;
        return this.client.request('POST', url);
    }
    /**
     * Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...) [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/insight#GET)
     */
    GetYourInsightAccessToken() {
        let url = `/me/insight`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.installationTemplate.Templates objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate#GET)
     */
    YourCustomizedOperatingSystemInstallationTemplates() {
        let url = `/me/installationTemplate`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.installationTemplate.Templates objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate#POST)
     */
    CreateATemplate(baseTemplateName, defaultLanguage, name) {
        let url = `/me/installationTemplate`;
        return this.client.request('POST', url, { baseTemplateName, defaultLanguage, name });
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
    RemoveThisTemplate(templateName) {
        let url = `/me/installationTemplate/${templateName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * checkIntegrity operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/checkIntegrity#POST)
     */
    CheckTheIntegrityOfThisTemplate(templateName) {
        let url = `/me/installationTemplate/${templateName}/checkIntegrity`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicated.installationTemplate.templatePartitioningSchemes objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme#GET)
     */
    PartitioningSchemesAvailableOnThisTemplate(templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.installationTemplate.templatePartitioningSchemes objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme#POST)
     */
    AddASchemeOfPartition(name, priority, templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme`;
        return this.client.request('POST', url, { name, priority });
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
    RemoveThisSchemeOfPartition(schemeName, templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.installationTemplate.hardwareRaid objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid#GET)
     */
    HardwareRAIDsDefinedInThisPartitioningScheme(schemeName, templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.installationTemplate.hardwareRaid objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid#POST)
     */
    AddAnHardwareRAIDInThisPartitioningScheme(disks, mode, name, schemeName, step, templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`;
        return this.client.request('POST', url, { disks, mode, name, step });
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
    RemoveThisRAID(name, schemeName, templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid/${name}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.installationTemplate.templatePartitions objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition#GET)
     */
    PartitionsDefinedInThisPartitioningScheme(schemeName, templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.installationTemplate.templatePartitions objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition#POST)
     */
    AddAPartitionInThisPartitioningScheme(filesystem, mountpoint, schemeName, size, step, templateName, type, raid, volumeName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`;
        return this.client.request('POST', url, { filesystem, mountpoint, size, step, type, raid, volumeName });
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
    RemoveThisPartition(mountpoint, schemeName, templateName) {
        let url = `/me/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition/${mountpoint}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the nichandle.Ipv4Org objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipOrganisation#GET)
     */
    ListOfOrganisations() {
        let url = `/me/ipOrganisation`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.Ipv4Org objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipOrganisation#POST)
     */
    AddAnOrganisation(abuse_mailbox, address, city, country, firstname, lastname, phone, registry, state, zip) {
        let url = `/me/ipOrganisation`;
        return this.client.request('POST', url, { abuse_mailbox, address, city, country, firstname, lastname, phone, registry, state, zip });
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
    DeleteThisOrganisation(organisationId) {
        let url = `/me/ipOrganisation/${organisationId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the nichandle.ipxe objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipxeScript#GET)
     */
    ListOfAllYourIPXEScripts() {
        let url = `/me/ipxeScript`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.ipxe objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ipxeScript#POST)
     */
    AddAnIPXEScript(description, name, script) {
        let url = `/me/ipxeScript`;
        return this.client.request('POST', url, { description, name, script });
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
    RemoveThisIPXEScript(name) {
        let url = `/me/ipxeScript/${name}`;
        return this.client.request('DELETE', url);
    }
    /**
     * availableLists operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/mailingList/availableLists#GET)
     */
    ListOfMailingListYouCanSubscribe() {
        let url = `/me/mailingList/availableLists`;
        return this.client.request('GET', url);
    }
    /**
     * subscribe operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/mailingList/subscribe#POST)
     */
    SubscribeAnEmailToARestrictedMailingList(email, mailingList) {
        let url = `/me/mailingList/subscribe`;
        return this.client.request('POST', url, { email, mailingList });
    }
    /**
     * List the nichandle.emailNotification objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/notification/email/history#GET)
     */
    ListOfAllYourEmailNotifications() {
        let url = `/me/notification/email/history`;
        return this.client.request('GET', url);
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
    ListOfAllTheOrdersTheLoggedAccountHas(dateFrom, dateTo) {
        let url = `/me/order?`;
        const queryParams = new query_params_1.default();
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    ReturnMainDataAboutTheObjectTheProcessingOfTheOrderGenerated(orderId) {
        let url = `/me/order/${orderId}/associatedObject`;
        return this.client.request('GET', url);
    }
    /**
     * availableRegisteredPaymentMean operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/availableRegisteredPaymentMean#GET)
     */
    ListOfRegisteredPaymentMeanYouCanUseToPayThisOrder(orderId) {
        let url = `/me/order/${orderId}/availableRegisteredPaymentMean`;
        return this.client.request('GET', url);
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
    GiveAccessToAllEntriesOfTheOrder(orderId) {
        let url = `/me/order/${orderId}/details`;
        return this.client.request('GET', url);
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
    PayWithAPaymentMethodReference(orderId, paymentMethod) {
        let url = `/me/order/${orderId}/pay`;
        return this.client.request('POST', url, { paymentMethod });
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
    ListOfRegisteredPaymentMethodYouCanUseToPayThisOrder(orderId) {
        let url = `/me/order/${orderId}/paymentMethods`;
        return this.client.request('GET', url);
    }
    /**
     * payWithRegisteredPaymentMean operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/payWithRegisteredPaymentMean#POST)
     */
    PayWithAnAlreadyRegisteredPaymentMean(orderId, paymentMean, paymentMeanId) {
        let url = `/me/order/${orderId}/payWithRegisteredPaymentMean`;
        return this.client.request('POST', url, { paymentMean, paymentMeanId });
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
    RequestRetractionOfOrder(orderId, reason, comment) {
        let url = `/me/order/${orderId}/retraction`;
        return this.client.request('POST', url, { reason, comment });
    }
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/order/%7BorderId%7D/status#GET)
     */
    ReturnStatusOfOrder(orderId) {
        let url = `/me/order/${orderId}/status`;
        return this.client.request('GET', url);
    }
    /**
     * List the billing.OvhAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount#GET)
     */
    ListOfOVHAccountsTheLoggedAccountHas() {
        let url = `/me/ovhAccount`;
        return this.client.request('GET', url);
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
    GenerateAnOrderThatCanBePaidInOrderToCreditTheOVHAccount(amount, ovhAccountId) {
        let url = `/me/ovhAccount/${ovhAccountId}/creditOrder`;
        return this.client.request('POST', url, { amount });
    }
    /**
     * List the billing.Movement objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/ovhAccount/%7BovhAccountId%7D/movements#GET)
     */
    DetailsAboutAnEntryOfTheOVHAccount(ovhAccountId, dateFrom, dateTo) {
        let url = `/me/ovhAccount/${ovhAccountId}/movements?`;
        const queryParams = new query_params_1.default();
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    TransferMoneyFromOvhAccountToYourBankAccount(amount, bankAccountId, ovhAccountId) {
        let url = `/me/ovhAccount/${ovhAccountId}/retrieveMoney`;
        return this.client.request('POST', url, { amount, bankAccountId });
    }
    /**
     * Request a password recover [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/passwordRecover#POST)
     */
    RequestAPasswordRecover(ovhCompany, ovhId) {
        let url = `/me/passwordRecover`;
        return this.client.request('POST', url, { ovhCompany, ovhId });
    }
    /**
     * Available payment methods [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/availableMethods#GET)
     */
    RetrieveAvailablePaymentMethod() {
        let url = `/me/payment/availableMethods`;
        return this.client.request('GET', url);
    }
    /**
     * Manage payment method [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method#GET)
     */
    RetrievePaymentMethodIDList(paymentType, status) {
        let url = `/me/payment/method?`;
        const queryParams = new query_params_1.default();
        if (paymentType) {
            queryParams.set('paymentType', paymentType);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Manage payment method [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method#POST)
     */
    PayAnOrderAndRegisterANewPaymentMethodIfNecessary(callbackUrl, paymentType, _default, description, orderId, register) {
        let url = `/me/payment/method`;
        return this.client.request('POST', url, { callbackUrl, paymentType, _default, description, orderId, register });
    }
    /**
     * Manage payment method [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D#GET)
     */
    GetOnePaymentMethod(paymentMethodId) {
        let url = `/me/payment/method/${paymentMethodId}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage payment method [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D#PUT)
     */
    EditPaymentMethod(paymentMethodId, _default, description) {
        let url = `/me/payment/method/${paymentMethodId}`;
        return this.client.request('PUT', url, { _default, description });
    }
    /**
     * Manage payment method [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D#DELETE)
     */
    CancelOnePaymentMethod(paymentMethodId) {
        let url = `/me/payment/method/${paymentMethodId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Challenge your payment method [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D/challenge#POST)
     */
    ChallengeOnePaymentMethod(challenge, paymentMethodId) {
        let url = `/me/payment/method/${paymentMethodId}/challenge`;
        return this.client.request('POST', url, { challenge });
    }
    /**
     * Finalize one payment method registration [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/method/%7BpaymentMethodId%7D/finalize#POST)
     */
    FinalizeOnePaymentMethodRegistration(paymentMethodId, expirationMonth, expirationYear, formSessionId, registrationId) {
        let url = `/me/payment/method/${paymentMethodId}/finalize`;
        return this.client.request('POST', url, { expirationMonth, expirationYear, formSessionId, registrationId });
    }
    /**
     * Retrieve payment method transaction ID list [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/transaction#GET)
     */
    RetrieveAssociatedPaymentMethodTransactionIDList(paymentMethodId, status) {
        let url = `/me/payment/transaction?`;
        const queryParams = new query_params_1.default();
        if (paymentMethodId) {
            queryParams.set('paymentMethodId', paymentMethodId.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Manage payment method transaction [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/payment/transaction/%7BtransactionId%7D#GET)
     */
    GetAssociatedPaymentMethodTransaction(transactionId) {
        let url = `/me/payment/transaction/${transactionId}`;
        return this.client.request('GET', url);
    }
    /**
     * List the billing.BankAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount#GET)
     */
    ListOfBankAccounts(state) {
        let url = `/me/paymentMean/bankAccount?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the billing.BankAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount#POST)
     */
    EnablePaymentThroughANewAccount(bic, iban, ownerAddress, ownerName, description, setDefault) {
        let url = `/me/paymentMean/bankAccount`;
        return this.client.request('POST', url, { bic, iban, ownerAddress, ownerName, description, setDefault });
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
    DisablePaymentThroughThisAccount(id) {
        let url = `/me/paymentMean/bankAccount/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * challenge operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount/%7Bid%7D/challenge#POST)
     */
    ChallengeYourBankAccount(challenge, id) {
        let url = `/me/paymentMean/bankAccount/${id}/challenge`;
        return this.client.request('POST', url, { challenge });
    }
    /**
     * chooseAsDefaultPaymentMean operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/bankAccount/%7Bid%7D/chooseAsDefaultPaymentMean#POST)
     */
    ChooseThisBankAccountAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id) {
        let url = `/me/paymentMean/bankAccount/${id}/chooseAsDefaultPaymentMean`;
        return this.client.request('POST', url);
    }
    /**
     * List the billing.CreditCard objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard#GET)
     */
    ListOfCreditCards() {
        let url = `/me/paymentMean/creditCard`;
        return this.client.request('GET', url);
    }
    /**
     * List the billing.CreditCard objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/creditCard#POST)
     */
    AddANewCreditCard(description, returnUrl, setDefault) {
        let url = `/me/paymentMean/creditCard`;
        return this.client.request('POST', url, { description, returnUrl, setDefault });
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
    DisablePaymentThroughThisCreditCard(id) {
        let url = `/me/paymentMean/creditCard/${id}`;
        return this.client.request('DELETE', url);
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
    ChooseThisCreditCardAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id) {
        let url = `/me/paymentMean/creditCard/${id}/chooseAsDefaultPaymentMean`;
        return this.client.request('POST', url);
    }
    /**
     * List the billing.DeferredPaymentAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/deferredPaymentAccount#GET)
     */
    ListOfAuthorizedDeferredPaymentAccountForThisCustomer() {
        let url = `/me/paymentMean/deferredPaymentAccount`;
        return this.client.request('GET', url);
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
    AllowYouToUseDeferredPaymentWillCancelThePreviousChoice(id) {
        let url = `/me/paymentMean/deferredPaymentAccount/${id}/chooseAsDefaultPaymentMean`;
        return this.client.request('POST', url);
    }
    /**
     * List the billing.Paypal objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal#GET)
     */
    ListOfPaypalAccountsUsableForPaymentsOnThisAccount() {
        let url = `/me/paymentMean/paypal`;
        return this.client.request('GET', url);
    }
    /**
     * List the billing.Paypal objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/paymentMean/paypal#POST)
     */
    EnablePaymentThroughANewPayPalAccount(description, returnUrl, setDefault) {
        let url = `/me/paymentMean/paypal`;
        return this.client.request('POST', url, { description, returnUrl, setDefault });
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
    DisablePaymentThroughThisPayPalAccount(id) {
        let url = `/me/paymentMean/paypal/${id}`;
        return this.client.request('DELETE', url);
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
    ChooseThisPaypalAgreementAsYourDefaultPaymentMeanWillCancelThePreviousChoice(id) {
        let url = `/me/paymentMean/paypal/${id}/chooseAsDefaultPaymentMean`;
        return this.client.request('POST', url);
    }
    /**
     * List the billing.Refund objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/refund#GET)
     */
    ListOfAllTheRefundsTheLoggedAccountHas(dateFrom, dateTo, orderId) {
        let url = `/me/refund?`;
        const queryParams = new query_params_1.default();
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        if (orderId) {
            queryParams.set('orderId', orderId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    GiveAccessToAllEntriesOfTheRefund(refundId) {
        let url = `/me/refund/${refundId}/details`;
        return this.client.request('GET', url);
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
    ListActiveSLA() {
        let url = `/me/sla`;
        return this.client.request('GET', url);
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
    AskForSLAApplication(id) {
        let url = `/me/sla/${id}/apply`;
        return this.client.request('POST', url);
    }
    /**
     * canBeApplied operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D/canBeApplied#GET)
     */
    CheckWhetherThisSLACanBeAppliedOnYourServices(id) {
        let url = `/me/sla/${id}/canBeApplied`;
        return this.client.request('GET', url);
    }
    /**
     * services operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D/services#GET)
     */
    GetServicesImpactedByThisSLA(id) {
        let url = `/me/sla/${id}/services`;
        return this.client.request('GET', url);
    }
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sla/%7Bid%7D/status#GET)
     */
    GetTheStatusRequestOfThisSLA(id) {
        let url = `/me/sla/${id}/status`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.sshKey objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sshKey#GET)
     */
    ListOfYourPublicSSHKeys() {
        let url = `/me/sshKey`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.sshKey objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/sshKey#POST)
     */
    AddANewPublicSSHKey(key, keyName) {
        let url = `/me/sshKey`;
        return this.client.request('POST', url, { key, keyName });
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
    RemoveThisPublicSSHKey(keyName) {
        let url = `/me/sshKey/${keyName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the nichandle.SubAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subAccount#GET)
     */
    ListOfSubaccounts() {
        let url = `/me/subAccount`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.SubAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subAccount#POST)
     */
    CreateANewSubaccount(description) {
        let url = `/me/subAccount`;
        return this.client.request('POST', url, { description });
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
    CreateAConsumerKeyForTheCurrentApplication(id) {
        let url = `/me/subAccount/${id}/createConsumerKey`;
        return this.client.request('POST', url);
    }
    /**
     * List the nichandle.Subscription objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/subscription#GET)
     */
    ListOfAllOVHThingsYouCanSubscribeTo() {
        let url = `/me/subscription`;
        return this.client.request('GET', url);
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
    FetchTheSupportLevelOfTheAccount() {
        let url = `/me/supportLevel`;
        return this.client.request('GET', url);
    }
    /**
     * List the nichandle.contactChange.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange#GET)
     */
    ListOfServiceContactChangeTasksYouAreInvolvedIn(askingAccount, state, toAccount) {
        let url = `/me/task/contactChange?`;
        const queryParams = new query_params_1.default();
        if (askingAccount) {
            queryParams.set('askingAccount', askingAccount);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        if (toAccount) {
            queryParams.set('toAccount', toAccount);
        }
        return this.client.request('GET', url + queryParams.toString());
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
    AcceptThisChangeRequest(id, token) {
        let url = `/me/task/contactChange/${id}/accept`;
        return this.client.request('POST', url, { token });
    }
    /**
     * refuse operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange/%7Bid%7D/refuse#POST)
     */
    RefuseThisChangeRequest(id, token) {
        let url = `/me/task/contactChange/${id}/refuse`;
        return this.client.request('POST', url, { token });
    }
    /**
     * resendEmail operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/contactChange/%7Bid%7D/resendEmail#POST)
     */
    ThisCallWillSendYouANewEmailContainingANewToken(id) {
        let url = `/me/task/contactChange/${id}/resendEmail`;
        return this.client.request('POST', url);
    }
    /**
     * List the nichandle.DomainTask objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain#GET)
     */
    ListOfDomainTask(domain, _function, status) {
        let url = `/me/task/domain?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        if (_function) {
            queryParams.set('function', _function.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    AccelerateTheTask(id) {
        let url = `/me/task/domain/${id}/accelerate`;
        return this.client.request('POST', url);
    }
    /**
     * List the nichandle.DomainTaskArgument objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/argument#GET)
     */
    ListOfArguments(id) {
        let url = `/me/task/domain/${id}/argument`;
        return this.client.request('GET', url);
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
    CancelTheTask(id) {
        let url = `/me/task/domain/${id}/cancel`;
        return this.client.request('POST', url);
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
    RelaunchTheTask(id) {
        let url = `/me/task/domain/${id}/relaunch`;
        return this.client.request('POST', url);
    }
    /**
     * List the nichandle.emailChange.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/task/emailChange#GET)
     */
    ListOfEmailChangeTasksYouAreInvolvedIn(state) {
        let url = `/me/task/emailChange?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    TheDefaultSIPIPRestictionsForYourFutureVoIPLines() {
        let url = `/me/telephony/defaultIpRestriction`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.DefaultIpRestriction objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/defaultIpRestriction#POST)
     */
    CreateADefaultIPRestrictionForYourFutureVoIPLines(subnet, type) {
        let url = `/me/telephony/defaultIpRestriction`;
        return this.client.request('POST', url, { subnet, type });
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
    DeleteADefaultIPRestrictionForYourFutureVoIPLines(id) {
        let url = `/me/telephony/defaultIpRestriction/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * settings operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/settings#GET)
     */
    GetTheTelephonySettingsLinkedToTheCustomerAccount() {
        let url = `/me/telephony/settings`;
        return this.client.request('GET', url);
    }
    /**
     * settings operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/telephony/settings#POST)
     */
    ChangeTheTelephonySettingsLinkedToTheCustomerAccount(settings) {
        let url = `/me/telephony/settings`;
        return this.client.request('POST', url, { settings });
    }
    /**
     * vipStatus operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/vipStatus#GET)
     */
    VIPStatusOfThisAccount() {
        let url = `/me/vipStatus`;
        return this.client.request('GET', url);
    }
    /**
     * checkValidity operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/voucher/checkValidity#POST)
     */
    VerifyExistingVoucher(voucher) {
        let url = `/me/voucher/checkValidity`;
        return this.client.request('POST', url, { voucher });
    }
    /**
     * List the billing.Withdrawal objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/withdrawal#GET)
     */
    ListOfAllTheWithdrawalsMadeFromYourPrepaidAccount(dateFrom, dateTo, orderId) {
        let url = `/me/withdrawal?`;
        const queryParams = new query_params_1.default();
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        if (orderId) {
            queryParams.set('orderId', orderId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    GiveAccessToAllEntriesOfThisWithdrawal(withdrawalId) {
        let url = `/me/withdrawal/${withdrawalId}/details`;
        return this.client.request('GET', url);
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
    GetXdslSettingsLinkedToTheNichandle() {
        let url = `/me/xdsl/setting`;
        return this.client.request('GET', url);
    }
    /**
     * setting operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/me/xdsl/setting#POST)
     */
    ChangeXdslSettingsLinkedToTheNichandle(resellerFastModemShipping, resellerModemBasicConfig) {
        let url = `/me/xdsl/setting`;
        return this.client.request('POST', url, { resellerFastModemShipping, resellerModemBasicConfig });
    }
}
exports.Me = Me;
//# sourceMappingURL=me.js.map