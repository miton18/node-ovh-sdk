"use strict";
// GENERATED SDK for xdsl API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
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
 * Ip versions
 */
var CoreTypesIpVersion;
(function (CoreTypesIpVersion) {
    CoreTypesIpVersion["V4"] = "v4";
    CoreTypesIpVersion["V6"] = "v6";
})(CoreTypesIpVersion = exports.CoreTypesIpVersion || (exports.CoreTypesIpVersion = {}));
/*
 * Current object state
 */
var EmailproObjectState;
(function (EmailproObjectState) {
    EmailproObjectState["CREATING"] = "creating";
    EmailproObjectState["DELETING"] = "deleting";
    EmailproObjectState["OK"] = "ok";
    EmailproObjectState["REOPENING"] = "reopening";
    EmailproObjectState["SUSPENDED"] = "suspended";
    EmailproObjectState["SUSPENDING"] = "suspending";
    EmailproObjectState["UNKNOWN"] = "unknown";
})(EmailproObjectState = exports.EmailproObjectState || (exports.EmailproObjectState = {}));
/*
 *
 */
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
 * Product type of item in order
 */
var OrderOrderDetailType;
(function (OrderOrderDetailType) {
    OrderOrderDetailType["ACCESSORY"] = "ACCESSORY";
    OrderOrderDetailType["CAUTION"] = "CAUTION";
    OrderOrderDetailType["CHOOSED"] = "CHOOSED";
    OrderOrderDetailType["CONSUMPTION"] = "CONSUMPTION";
    OrderOrderDetailType["CREATION"] = "CREATION";
    OrderOrderDetailType["DELIVERY"] = "DELIVERY";
    OrderOrderDetailType["DURATION"] = "DURATION";
    OrderOrderDetailType["GIFT"] = "GIFT";
    OrderOrderDetailType["INSTALLATION"] = "INSTALLATION";
    OrderOrderDetailType["LICENSE"] = "LICENSE";
    OrderOrderDetailType["MUTE"] = "MUTE";
    OrderOrderDetailType["OTHER"] = "OTHER";
    OrderOrderDetailType["OUTPLAN"] = "OUTPLAN";
    OrderOrderDetailType["QUANTITY"] = "QUANTITY";
    OrderOrderDetailType["REFUND"] = "REFUND";
    OrderOrderDetailType["RENEW"] = "RENEW";
    OrderOrderDetailType["SPECIAL"] = "SPECIAL";
    OrderOrderDetailType["SWITCH"] = "SWITCH";
    OrderOrderDetailType["TRANSFER"] = "TRANSFER";
    OrderOrderDetailType["VOUCHER"] = "VOUCHER";
})(OrderOrderDetailType = exports.OrderOrderDetailType || (exports.OrderOrderDetailType = {}));
/*
 * Detailed renewal type of a service
 */
var ServiceRenewalType;
(function (ServiceRenewalType) {
    ServiceRenewalType["AUTOMATICFORCEDPRODUCT"] = "automaticForcedProduct";
    ServiceRenewalType["AUTOMATICV2012"] = "automaticV2012";
    ServiceRenewalType["AUTOMATICV2014"] = "automaticV2014";
    ServiceRenewalType["AUTOMATICV2016"] = "automaticV2016";
    ServiceRenewalType["MANUAL"] = "manual";
    ServiceRenewalType["ONESHOT"] = "oneShot";
    ServiceRenewalType["OPTION"] = "option";
})(ServiceRenewalType = exports.ServiceRenewalType || (exports.ServiceRenewalType = {}));
/*
 *
 */
var ServiceState;
(function (ServiceState) {
    ServiceState["EXPIRED"] = "expired";
    ServiceState["INCREATION"] = "inCreation";
    ServiceState["OK"] = "ok";
    ServiceState["PENDINGDEBT"] = "pendingDebt";
    ServiceState["UNPAID"] = "unPaid";
})(ServiceState = exports.ServiceState || (exports.ServiceState = {}));
/*
 * Return merchandise authorisation offer type
 */
var TelephonyRmaOfferType;
(function (TelephonyRmaOfferType) {
    TelephonyRmaOfferType["DEPOSIT"] = "deposit";
    TelephonyRmaOfferType["LOAN"] = "loan";
    TelephonyRmaOfferType["PURCHASE"] = "purchase";
})(TelephonyRmaOfferType = exports.TelephonyRmaOfferType || (exports.TelephonyRmaOfferType = {}));
/*
 * Return merchandise authorisation type
 */
var TelephonyRmaReplaceType;
(function (TelephonyRmaReplaceType) {
    TelephonyRmaReplaceType["CHANGEPHONE"] = "changePhone";
    TelephonyRmaReplaceType["PHONERESTITUTION"] = "phoneRestitution";
    TelephonyRmaReplaceType["UNDEFINED"] = "undefined";
})(TelephonyRmaReplaceType = exports.TelephonyRmaReplaceType || (exports.TelephonyRmaReplaceType = {}));
/*
 * Return merchandise authorisation step
 */
var TelephonyRmaStatus;
(function (TelephonyRmaStatus) {
    TelephonyRmaStatus["CLOSED"] = "closed";
    TelephonyRmaStatus["OPEN"] = "open";
    TelephonyRmaStatus["RECEIVED"] = "received";
})(TelephonyRmaStatus = exports.TelephonyRmaStatus || (exports.TelephonyRmaStatus = {}));
/*
 * RMA step names
 */
var TelephonyRmaStepName;
(function (TelephonyRmaStepName) {
    TelephonyRmaStepName["DISPATCHJUSTIFICATION"] = "dispatchJustification";
    TelephonyRmaStepName["EQUIPMENTSENDING"] = "equipmentSending";
    TelephonyRmaStepName["EQUIPMENTTESTING"] = "equipmentTesting";
    TelephonyRmaStepName["OPENING"] = "opening";
    TelephonyRmaStepName["PARCELRECEPTION"] = "parcelReception";
    TelephonyRmaStepName["PARCELVALIDATION"] = "parcelValidation";
    TelephonyRmaStepName["VALIDATION"] = "validation";
})(TelephonyRmaStepName = exports.TelephonyRmaStepName || (exports.TelephonyRmaStepName = {}));
/*
 * Status of the RMA step
 */
var TelephonyRmaStepStatus;
(function (TelephonyRmaStepStatus) {
    TelephonyRmaStepStatus["DONE"] = "done";
    TelephonyRmaStepStatus["TODO"] = "todo";
})(TelephonyRmaStepStatus = exports.TelephonyRmaStepStatus || (exports.TelephonyRmaStepStatus = {}));
/*
 * Return merchandise authorisation type
 */
var TelephonyRmaType;
(function (TelephonyRmaType) {
    TelephonyRmaType["AFTER_SALE_EQUIPMENT_SERVICE_EXCHANGE"] = "after sale equipment service exchange";
    TelephonyRmaType["AFTER_SALE_PHONE_SERVICE_EXCHANGE"] = "after sale phone service exchange";
    TelephonyRmaType["EQUIPMENT_RESTITUTION"] = "equipment restitution";
    TelephonyRmaType["FAST_EXCHANGE"] = "fast exchange";
    TelephonyRmaType["OLD_MERCHANDISE_RECEPTION_BEFORE_EXCHANGE"] = "old merchandise reception before exchange";
    TelephonyRmaType["PHONE_RESTITUTION"] = "phone restitution";
    TelephonyRmaType["RESENDS_DUE_TO_SHIPPING_LOST_BY_THE_CARRIER"] = "resends due to shipping lost by the carrier";
    TelephonyRmaType["RESENDS_DUE_TO_SHIPPING_NOT_WITHDRAW"] = "resends due to shipping not withdraw";
    TelephonyRmaType["SPECIFIC_RETURN_MERCHANDISE_AUTHORISATION"] = "specific return merchandise authorisation";
    TelephonyRmaType["TERMINATION"] = "termination";
    TelephonyRmaType["UNKNOWN"] = "unknown";
})(TelephonyRmaType = exports.TelephonyRmaType || (exports.TelephonyRmaType = {}));
/*
 * Available access roles
 */
var AccessRole;
(function (AccessRole) {
    AccessRole["BACKUP"] = "backup";
    AccessRole["MAIN"] = "main";
})(AccessRole = exports.AccessRole || (exports.AccessRole = {}));
/*
 * Various types of statisctics available for the access.
 */
var AccessStatisticsType;
(function (AccessStatisticsType) {
    AccessStatisticsType["PING"] = "ping";
    AccessStatisticsType["TRAFFIC_DOWNLOAD"] = "traffic:download";
    AccessStatisticsType["TRAFFIC_UPLOAD"] = "traffic:upload";
})(AccessStatisticsType = exports.AccessStatisticsType || (exports.AccessStatisticsType = {}));
/*
 * Status of the access
 */
var AccessStatus;
(function (AccessStatus) {
    AccessStatus["ACTIVE"] = "active";
    AccessStatus["CANCELLED"] = "cancelled";
    AccessStatus["CLOSE"] = "close";
    AccessStatus["DELETING"] = "deleting";
    AccessStatus["DOING"] = "doing";
    AccessStatus["MIGRATION"] = "migration";
    AccessStatus["SLAMMING"] = "slamming";
    AccessStatus["UPGRADEOFFER"] = "upgradeOffer";
})(AccessStatus = exports.AccessStatus || (exports.AccessStatus = {}));
/*
 * AntiSpam status
 */
var AntiSpamAntiSpamStatus;
(function (AntiSpamAntiSpamStatus) {
    AntiSpamAntiSpamStatus["BLOCK"] = "block";
    AntiSpamAntiSpamStatus["DONE"] = "done";
    AntiSpamAntiSpamStatus["NEW"] = "new";
    AntiSpamAntiSpamStatus["UNBLOCK"] = "unblock";
    AntiSpamAntiSpamStatus["WARN"] = "warn";
})(AntiSpamAntiSpamStatus = exports.AntiSpamAntiSpamStatus || (exports.AntiSpamAntiSpamStatus = {}));
/*
 * Evidences AsyncTask status
 */
var AntiSpamEvidencesInfoStatus;
(function (AntiSpamEvidencesInfoStatus) {
    AntiSpamEvidencesInfoStatus["ERROR"] = "error";
    AntiSpamEvidencesInfoStatus["OK"] = "ok";
    AntiSpamEvidencesInfoStatus["PENDING"] = "pending";
})(AntiSpamEvidencesInfoStatus = exports.AntiSpamEvidencesInfoStatus || (exports.AntiSpamEvidencesInfoStatus = {}));
/*
 * AsyncTask status
 */
var AsyncTaskStatus;
(function (AsyncTaskStatus) {
    AsyncTaskStatus["ERROR"] = "error";
    AsyncTaskStatus["OK"] = "ok";
    AsyncTaskStatus["PENDING"] = "pending";
})(AsyncTaskStatus = exports.AsyncTaskStatus || (exports.AsyncTaskStatus = {}));
/*
 * Deconsolidation of the line.
 */
var Deconsolidation;
(function (Deconsolidation) {
    Deconsolidation["CREATENEIGHBOUR"] = "createNeighbour";
    Deconsolidation["CREATION"] = "creation";
    Deconsolidation["CREATIONNEIGHBOUR"] = "creationNeighbour";
    Deconsolidation["PARTIAL"] = "partial";
    Deconsolidation["TOTAL"] = "total";
})(Deconsolidation = exports.Deconsolidation || (exports.Deconsolidation = {}));
/*
 * Different states of a DSLAM port
 */
var DslamPortStatus;
(function (DslamPortStatus) {
    DslamPortStatus["ACTIVATED"] = "activated";
    DslamPortStatus["DEACTIVATED"] = "deactivated";
    DslamPortStatus["OUTOFSYNC"] = "outofsync";
})(DslamPortStatus = exports.DslamPortStatus || (exports.DslamPortStatus = {}));
/*
 * Possible DSL technologies
 */
var DslType;
(function (DslType) {
    DslType["ADSL"] = "adsl";
    DslType["FTTH"] = "ftth";
    DslType["SDSL"] = "sdsl";
    DslType["VDSL"] = "vdsl";
})(DslType = exports.DslType || (exports.DslType = {}));
/*
 * Type of building
 */
var EligibilityBuildingType;
(function (EligibilityBuildingType) {
    EligibilityBuildingType["BUILDING"] = "BUILDING";
    EligibilityBuildingType["HOUSE"] = "HOUSE";
})(EligibilityBuildingType = exports.EligibilityBuildingType || (exports.EligibilityBuildingType = {}));
/*
 * Status of a landline
 */
var EligibilityLandlineStatus;
(function (EligibilityLandlineStatus) {
    EligibilityLandlineStatus["ACTIVE"] = "active";
    EligibilityLandlineStatus["INACTIVE"] = "inactive";
})(EligibilityLandlineStatus = exports.EligibilityLandlineStatus || (exports.EligibilityLandlineStatus = {}));
/*
 * Type of the endpoint for the eligibility
 */
var EligibilityLineEndpoint;
(function (EligibilityLineEndpoint) {
    EligibilityLineEndpoint["ADDRESS"] = "address";
    EligibilityLineEndpoint["LINE"] = "line";
})(EligibilityLineEndpoint = exports.EligibilityLineEndpoint || (exports.EligibilityLineEndpoint = {}));
/*
 * The providers
 */
var EligibilityProvider;
(function (EligibilityProvider) {
    EligibilityProvider["AXIONE"] = "axione";
    EligibilityProvider["FT"] = "ft";
    EligibilityProvider["KOSC"] = "kosc";
    EligibilityProvider["OVH"] = "ovh";
    EligibilityProvider["SFR"] = "sfr";
})(EligibilityProvider = exports.EligibilityProvider || (exports.EligibilityProvider = {}));
/*
 * Status of an Email Pro task.
 */
var EmailproTaskStatus;
(function (EmailproTaskStatus) {
    EmailproTaskStatus["CANCELLED"] = "cancelled";
    EmailproTaskStatus["DOING"] = "doing";
    EmailproTaskStatus["DONE"] = "done";
    EmailproTaskStatus["ERROR"] = "error";
    EmailproTaskStatus["TODO"] = "todo";
})(EmailproTaskStatus = exports.EmailproTaskStatus || (exports.EmailproTaskStatus = {}));
/*
 * Status of an IP.
 */
var IpStatus;
(function (IpStatus) {
    IpStatus["ACTIVE"] = "active";
    IpStatus["CLOSE"] = "close";
    IpStatus["TODELETE"] = "toDelete";
})(IpStatus = exports.IpStatus || (exports.IpStatus = {}));
/*
 * bandwidth unit for proof.ovh.net test values
 */
var LineDiagnosticBandwidthTestUnit;
(function (LineDiagnosticBandwidthTestUnit) {
    LineDiagnosticBandwidthTestUnit["KBPS"] = "Kbps";
    LineDiagnosticBandwidthTestUnit["MBPS"] = "Mbps";
})(LineDiagnosticBandwidthTestUnit = exports.LineDiagnosticBandwidthTestUnit || (exports.LineDiagnosticBandwidthTestUnit = {}));
/*
 * Customer possible actions
 */
var LineDiagnosticCustomerActions;
(function (LineDiagnosticCustomerActions) {
    LineDiagnosticCustomerActions["BEPREPAREDTOCHECKMODEMSYNCHRONIZATION"] = "bePreparedToCheckModemSynchronization";
    LineDiagnosticCustomerActions["CHANGEDSLFILTERANDPLUGINDTI"] = "changeDslFilterAndPlugInDti";
    LineDiagnosticCustomerActions["CHANGEEXTENSIONCABLE"] = "changeExtensionCable";
    LineDiagnosticCustomerActions["CHANGEPROFILE"] = "changeProfile";
    LineDiagnosticCustomerActions["CHECKCONNECTIONCABLE"] = "checkConnectionCable";
    LineDiagnosticCustomerActions["CHECKCONNECTIONLOGINANDPARAMETERS"] = "checkConnectionLoginAndParameters";
    LineDiagnosticCustomerActions["CHECKFILTER"] = "checkFilter";
    LineDiagnosticCustomerActions["CONNECTMODEMTOOTHERPLUGS"] = "connectModemToOtherPlugs";
    LineDiagnosticCustomerActions["NEUTRALTEST"] = "neutralTest";
    LineDiagnosticCustomerActions["REBOOTMODEM"] = "rebootModem";
    LineDiagnosticCustomerActions["RESETMODEM"] = "resetModem";
    LineDiagnosticCustomerActions["UNPLUGEVERYMODEMS"] = "unplugEveryModems";
    LineDiagnosticCustomerActions["UNPLUGMODEM"] = "unplugModem";
})(LineDiagnosticCustomerActions = exports.LineDiagnosticCustomerActions || (exports.LineDiagnosticCustomerActions = {}));
/*
 * Diagnostic status possible values
 */
var LineDiagnosticDiagnosticStatus;
(function (LineDiagnosticDiagnosticStatus) {
    LineDiagnosticDiagnosticStatus["CANCELLED"] = "cancelled";
    LineDiagnosticDiagnosticStatus["CONNECTIONPROBLEM"] = "connectionProblem";
    LineDiagnosticDiagnosticStatus["GENERICINCIDENTPENDING"] = "genericIncidentPending";
    LineDiagnosticDiagnosticStatus["HAVETOCONNECTMODEMONTHERIGHTPLUG"] = "haveToConnectModemOnTheRightPlug";
    LineDiagnosticDiagnosticStatus["INIT"] = "init";
    LineDiagnosticDiagnosticStatus["INTERVENTIONREQUESTED"] = "interventionRequested";
    LineDiagnosticDiagnosticStatus["NOBANDWIDTHFAULT"] = "noBandwidthFault";
    LineDiagnosticDiagnosticStatus["NOPROBLEMANYMORE"] = "noProblemAnymore";
    LineDiagnosticDiagnosticStatus["NOSYNCFAULTDIAGNOSTICREQUIRED"] = "noSyncFaultDiagnosticRequired";
    LineDiagnosticDiagnosticStatus["PROBLEM"] = "problem";
    LineDiagnosticDiagnosticStatus["RESOLVEDAFTERTESTS"] = "resolvedAfterTests";
    LineDiagnosticDiagnosticStatus["SLEEPING"] = "sleeping";
    LineDiagnosticDiagnosticStatus["VALIDATIONREFUSED"] = "validationRefused";
    LineDiagnosticDiagnosticStatus["WAITINGHUMAN"] = "waitingHuman";
    LineDiagnosticDiagnosticStatus["WAITINGROBOT"] = "waitingRobot";
    LineDiagnosticDiagnosticStatus["WAITINGVALIDATION"] = "waitingValidation";
})(LineDiagnosticDiagnosticStatus = exports.LineDiagnosticDiagnosticStatus || (exports.LineDiagnosticDiagnosticStatus = {}));
/*
 * Line diagnostic fault type
 */
var LineDiagnosticFaultType;
(function (LineDiagnosticFaultType) {
    LineDiagnosticFaultType["ALIGNMENT"] = "alignment";
    LineDiagnosticFaultType["NOSYNC"] = "noSync";
    LineDiagnosticFaultType["SYNCLOSSORLOWBANDWIDTH"] = "syncLossOrLowBandwidth";
    LineDiagnosticFaultType["UNKNOWN"] = "unknown";
})(LineDiagnosticFaultType = exports.LineDiagnosticFaultType || (exports.LineDiagnosticFaultType = {}));
/*
 * Possible customer questions
 */
var LineDiagnosticProblemType;
(function (LineDiagnosticProblemType) {
    LineDiagnosticProblemType["LOWBANDWIDTH"] = "lowBandwidth";
    LineDiagnosticProblemType["SYNCLOSS"] = "syncLoss";
})(LineDiagnosticProblemType = exports.LineDiagnosticProblemType || (exports.LineDiagnosticProblemType = {}));
/*
 * The providers for xdsl access
 */
var LineDiagnosticProvider;
(function (LineDiagnosticProvider) {
    LineDiagnosticProvider["AXIONE"] = "axione";
    LineDiagnosticProvider["FT"] = "ft";
    LineDiagnosticProvider["FTBYSFR"] = "ftBySfr";
    LineDiagnosticProvider["KOSC"] = "kosc";
    LineDiagnosticProvider["KOSCDEG"] = "koscDeg";
    LineDiagnosticProvider["OVH"] = "ovh";
    LineDiagnosticProvider["SFR"] = "sfr";
})(LineDiagnosticProvider = exports.LineDiagnosticProvider || (exports.LineDiagnosticProvider = {}));
/*
 * Possible customer questions
 */
var LineDiagnosticQuestions;
(function (LineDiagnosticQuestions) {
    LineDiagnosticQuestions["BANDWIDTHTESTUNIT"] = "bandwidthTestUnit";
    LineDiagnosticQuestions["COMMENT"] = "comment";
    LineDiagnosticQuestions["CONDITIONSACCEPTED"] = "conditionsAccepted";
    LineDiagnosticQuestions["CONTACTPHONE"] = "contactPhone";
    LineDiagnosticQuestions["DATETIMEOFAPPEARANCE"] = "datetimeOfAppearance";
    LineDiagnosticQuestions["DOWNLOADBANDWIDTHTEST"] = "downloadBandwidthTest";
    LineDiagnosticQuestions["ENDAFTERNOONHOURS"] = "endAfternoonHours";
    LineDiagnosticQuestions["ENDMORNINGHOURS"] = "endMorningHours";
    LineDiagnosticQuestions["FOLLOWBYSMS"] = "followBySms";
    LineDiagnosticQuestions["HASMODEMKEPTSYNCHRONIZATION"] = "hasModemKeptSynchronization";
    LineDiagnosticQuestions["IDAPPOINTMENT"] = "idAppointment";
    LineDiagnosticQuestions["INDIVIDUALSITE"] = "individualSite";
    LineDiagnosticQuestions["MODEMISSYNCHRONIZED"] = "modemIsSynchronized";
    LineDiagnosticQuestions["MODEMMAC"] = "modemMac";
    LineDiagnosticQuestions["MODEMSTILLSYNCHRONIZED"] = "modemStillSynchronized";
    LineDiagnosticQuestions["MODEMTYPE"] = "modemType";
    LineDiagnosticQuestions["OVHTICKET"] = "ovhTicket";
    LineDiagnosticQuestions["PROBLEMTYPE"] = "problemType";
    LineDiagnosticQuestions["RESOLVEDAFTERTESTS"] = "resolvedAfterTests";
    LineDiagnosticQuestions["SECURESITE"] = "secureSite";
    LineDiagnosticQuestions["SEVERALINTERNETCONNECTIONS"] = "severalInternetConnections";
    LineDiagnosticQuestions["SITECLOSEDDAYS"] = "siteClosedDays";
    LineDiagnosticQuestions["SITEDIGICODE"] = "siteDigicode";
    LineDiagnosticQuestions["SITEOPENING"] = "siteOpening";
    LineDiagnosticQuestions["STARTAFTERNOONHOURS"] = "startAfternoonHours";
    LineDiagnosticQuestions["STARTMORNINGHOURS"] = "startMorningHours";
    LineDiagnosticQuestions["UPLOADBANDWIDTHTEST"] = "uploadBandwidthTest";
})(LineDiagnosticQuestions = exports.LineDiagnosticQuestions || (exports.LineDiagnosticQuestions = {}));
/*
 * Diagnostic robot possible actions
 */
var LineDiagnosticRobotActions;
(function (LineDiagnosticRobotActions) {
    LineDiagnosticRobotActions["ALIGNMENTLOCKTEST"] = "alignmentLockTest";
    LineDiagnosticRobotActions["ALIGNMENTRESETTEST"] = "alignmentResetTest";
    LineDiagnosticRobotActions["ALIGNMENTTESTRESULT"] = "alignmentTestResult";
    LineDiagnosticRobotActions["CHECKCUSTOMERTICKET"] = "checkCustomerTicket";
    LineDiagnosticRobotActions["CHECKIFACCESSPING"] = "checkIfAccessPing";
    LineDiagnosticRobotActions["CHECKIFRESOLVEDAFTERCONNECTIONTESTS"] = "checkIfResolvedAfterConnectionTests";
    LineDiagnosticRobotActions["CHECKIFRESOLVEDAFTERINSTALLATIONCHECK"] = "checkIfResolvedAfterInstallationCheck";
    LineDiagnosticRobotActions["CHECKIFRESOLVEDAFTERTESTS"] = "checkIfResolvedAfterTests";
    LineDiagnosticRobotActions["CHECKIFSEVERALCONNECTIONS"] = "checkIfSeveralConnections";
    LineDiagnosticRobotActions["CHECKINSTALLATION"] = "checkInstallation";
    LineDiagnosticRobotActions["CHECKPROBLEM"] = "checkProblem";
    LineDiagnosticRobotActions["CHECKSYNCHRONIZATIONWITHOUTOTHERMODEMS"] = "checkSynchronizationWithoutOtherModems";
    LineDiagnosticRobotActions["CUSTOMERPRELOCCHECKS"] = "customerPrelocChecks";
    LineDiagnosticRobotActions["FINDPROBLEM"] = "findProblem";
    LineDiagnosticRobotActions["INSTALLATIONCHECK"] = "installationCheck";
    LineDiagnosticRobotActions["LOCKUNLOCK"] = "lockUnlock";
    LineDiagnosticRobotActions["NEEDTOREQUESTMONITORING"] = "needToRequestMonitoring";
    LineDiagnosticRobotActions["NEEDTOREQUESTOPERATORINTERVENTION"] = "needToRequestOperatorIntervention";
    LineDiagnosticRobotActions["NEEDTOREQUESTOVHINTERVENTION"] = "needToRequestOvhIntervention";
    LineDiagnosticRobotActions["REQUESTMONITORING"] = "requestMonitoring";
    LineDiagnosticRobotActions["REQUESTOPERATORINTERVENTION"] = "requestOperatorIntervention";
    LineDiagnosticRobotActions["REQUESTOVHINTERVENTION"] = "requestOvhIntervention";
    LineDiagnosticRobotActions["SELTTEST"] = "seltTest";
})(LineDiagnosticRobotActions = exports.LineDiagnosticRobotActions || (exports.LineDiagnosticRobotActions = {}));
/*
 * Possible SELT test prelocalizations
 */
var LineDiagnosticSeltPreloc;
(function (LineDiagnosticSeltPreloc) {
    LineDiagnosticSeltPreloc["CUST"] = "CUST";
    LineDiagnosticSeltPreloc["DSLAM"] = "DSLAM";
    LineDiagnosticSeltPreloc["LINE"] = "LINE";
    LineDiagnosticSeltPreloc["RE"] = "RE";
})(LineDiagnosticSeltPreloc = exports.LineDiagnosticSeltPreloc || (exports.LineDiagnosticSeltPreloc = {}));
/*
 * Possible SELT test states
 */
var LineDiagnosticSeltState;
(function (LineDiagnosticSeltState) {
    LineDiagnosticSeltState["OPEN"] = "open";
    LineDiagnosticSeltState["SHORT"] = "short";
    LineDiagnosticSeltState["SYNCED"] = "synced";
    LineDiagnosticSeltState["UNKNOWN"] = "unknown";
})(LineDiagnosticSeltState = exports.LineDiagnosticSeltState || (exports.LineDiagnosticSeltState = {}));
/*
 * Possible SELT test status
 */
var LineDiagnosticSeltStatus;
(function (LineDiagnosticSeltStatus) {
    LineDiagnosticSeltStatus["FAILED"] = "failed";
    LineDiagnosticSeltStatus["NOTAVAILABLE"] = "notAvailable";
    LineDiagnosticSeltStatus["OK"] = "ok";
})(LineDiagnosticSeltStatus = exports.LineDiagnosticSeltStatus || (exports.LineDiagnosticSeltStatus = {}));
/*
 * Various types of statisctics available for the line.
 */
var LineStatisticsType;
(function (LineStatisticsType) {
    LineStatisticsType["ATTENUATION_DOWNLOAD"] = "attenuation:download";
    LineStatisticsType["ATTENUATION_UPLOAD"] = "attenuation:upload";
    LineStatisticsType["SNR_DOWNLOAD"] = "snr:download";
    LineStatisticsType["SNR_UPLOAD"] = "snr:upload";
    LineStatisticsType["SYNCHRONIZATION_DOWNLOAD"] = "synchronization:download";
    LineStatisticsType["SYNCHRONIZATION_UPLOAD"] = "synchronization:upload";
})(LineStatisticsType = exports.LineStatisticsType || (exports.LineStatisticsType = {}));
/*
 * Line tests results
 */
var LineTest;
(function (LineTest) {
    LineTest["ACTIONPENDING"] = "actionPending";
    LineTest["CUSTOMERSIDEPROBLEM"] = "customerSideProblem";
    LineTest["ERROR"] = "error";
    LineTest["NOPROBLEM"] = "noProblem";
    LineTest["OVHSIDEPROBLEM"] = "ovhSideProblem";
})(LineTest = exports.LineTest || (exports.LineTest = {}));
/*
 * Type of notification.
 */
var MonitoringNotificationsType;
(function (MonitoringNotificationsType) {
    MonitoringNotificationsType["MAIL"] = "mail";
    MonitoringNotificationsType["SMS"] = "sms";
})(MonitoringNotificationsType = exports.MonitoringNotificationsType || (exports.MonitoringNotificationsType = {}));
/*
 * Operators
 */
var OperatorType;
(function (OperatorType) {
    OperatorType["COLLECT"] = "collect";
    OperatorType["KOSC"] = "kosc";
    OperatorType["OVH"] = "ovh";
})(OperatorType = exports.OperatorType || (exports.OperatorType = {}));
/*
 * The duration units
 */
var OrderFollowupDurationUnit;
(function (OrderFollowupDurationUnit) {
    OrderFollowupDurationUnit["DAY"] = "day";
    OrderFollowupDurationUnit["HOUR"] = "hour";
    OrderFollowupDurationUnit["MINUTE"] = "minute";
})(OrderFollowupDurationUnit = exports.OrderFollowupDurationUnit || (exports.OrderFollowupDurationUnit = {}));
/*
 * The status of an order step
 */
var OrderFollowupStepName;
(function (OrderFollowupStepName) {
    OrderFollowupStepName["ACCESSISOPERATIONAL"] = "accessIsOperational";
    OrderFollowupStepName["CHECKINFRASTRUCTURE"] = "checkInfrastructure";
    OrderFollowupStepName["CONFIGUREACCESSONOVH"] = "configureAccessOnOVH";
    OrderFollowupStepName["ORDERPAYED"] = "orderPayed";
    OrderFollowupStepName["ORDERRECEIVED"] = "orderReceived";
    OrderFollowupStepName["ORDERTREATMENT"] = "orderTreatment";
    OrderFollowupStepName["SENDMODEM"] = "sendModem";
    OrderFollowupStepName["SENDORDERTOPROVIDER"] = "sendOrderToProvider";
    OrderFollowupStepName["SETUPCUSTOMERPREMISESEQUIPMENT"] = "setupCustomerPremisesEquipment";
    OrderFollowupStepName["WAITINGFORPROVIDERINSTALLREPORT"] = "waitingForProviderInstallReport";
    OrderFollowupStepName["WAITINGFORWITHDRAWALPERIODTOBEOVER"] = "waitingForWithdrawalPeriodToBeOver";
})(OrderFollowupStepName = exports.OrderFollowupStepName || (exports.OrderFollowupStepName = {}));
/*
 * The status of an order step
 */
var OrderFollowupStepStatus;
(function (OrderFollowupStepStatus) {
    OrderFollowupStepStatus["DOING"] = "doing";
    OrderFollowupStepStatus["DONE"] = "done";
    OrderFollowupStepStatus["ERROR"] = "error";
    OrderFollowupStepStatus["TODO"] = "todo";
    OrderFollowupStepStatus["WAITINGCUSTOMER"] = "waitingCustomer";
})(OrderFollowupStepStatus = exports.OrderFollowupStepStatus || (exports.OrderFollowupStepStatus = {}));
/*
 * Reason of a resiliation
 */
var ResiliationReason;
(function (ResiliationReason) {
    ResiliationReason["ADDRESSMOVE"] = "addressMove";
    ResiliationReason["BILLINGPROBLEMS"] = "billingProblems";
    ResiliationReason["CESSATIONOFACTIVITY"] = "cessationOfActivity";
    ResiliationReason["CHANGEOFTERMS"] = "changeOfTerms";
    ResiliationReason["FTTH"] = "ftth";
    ResiliationReason["GOTOCOMPETITOR"] = "goToCompetitor";
    ResiliationReason["OTHER"] = "other";
    ResiliationReason["TECHNICALPROBLEMS"] = "technicalProblems";
})(ResiliationReason = exports.ResiliationReason || (exports.ResiliationReason = {}));
/*
 * Status of the service
 */
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["DISABLED"] = "disabled";
    ServiceStatus["ENABLED"] = "enabled";
})(ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {}));
/*
 * Periods for statistics.
 */
var StatisticsPeriod;
(function (StatisticsPeriod) {
    StatisticsPeriod["DAILY"] = "daily";
    StatisticsPeriod["MONTHLY"] = "monthly";
    StatisticsPeriod["PREVIEW"] = "preview";
    StatisticsPeriod["WEEKLY"] = "weekly";
    StatisticsPeriod["YEARLY"] = "yearly";
})(StatisticsPeriod = exports.StatisticsPeriod || (exports.StatisticsPeriod = {}));
/*
 * Status of a task.
 */
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["CANCELLED"] = "cancelled";
    TaskStatus["DOING"] = "doing";
    TaskStatus["DONE"] = "done";
    TaskStatus["ERROR"] = "error";
    TaskStatus["PROBLEM"] = "problem";
    TaskStatus["TODO"] = "todo";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
/*
 * Type of WLAN security protection
 */
var TemplateModemSecurityType;
(function (TemplateModemSecurityType) {
    TemplateModemSecurityType["NONE"] = "None";
    TemplateModemSecurityType["WPA"] = "WPA";
    TemplateModemSecurityType["WPA2"] = "WPA2";
    TemplateModemSecurityType["WPAANDWPA2"] = "WPAandWPA2";
})(TemplateModemSecurityType = exports.TemplateModemSecurityType || (exports.TemplateModemSecurityType = {}));
/*
 * How the modem gets its LAN IP Address
 */
var XdslModemConfigAddressingType;
(function (XdslModemConfigAddressingType) {
    XdslModemConfigAddressingType["DHCP"] = "DHCP";
    XdslModemConfigAddressingType["STATIC"] = "Static";
})(XdslModemConfigAddressingType = exports.XdslModemConfigAddressingType || (exports.XdslModemConfigAddressingType = {}));
/*
 * How the WiFi channel is selected
 */
var XdslModemConfigChannelMode;
(function (XdslModemConfigChannelMode) {
    XdslModemConfigChannelMode["AUTO"] = "Auto";
    XdslModemConfigChannelMode["MANUAL"] = "Manual";
})(XdslModemConfigChannelMode = exports.XdslModemConfigChannelMode || (exports.XdslModemConfigChannelMode = {}));
/*
 * How did the device got its IP Address
 */
var XdslModemConfigConnectedDeviceAddressSource;
(function (XdslModemConfigConnectedDeviceAddressSource) {
    XdslModemConfigConnectedDeviceAddressSource["DHCP"] = "DHCP";
    XdslModemConfigConnectedDeviceAddressSource["STATIC"] = "Static";
    XdslModemConfigConnectedDeviceAddressSource["UNKNOWN"] = "Unknown";
})(XdslModemConfigConnectedDeviceAddressSource = exports.XdslModemConfigConnectedDeviceAddressSource || (exports.XdslModemConfigConnectedDeviceAddressSource = {}));
/*
 * Level of the Firewall ( BlockAll will block all connections, Normal will block all incoming connections except those in PortMapping and let go all outgoing connections , Disabled will disable all the Firewall and let all incoming or outgoing connections pass through )
 */
var XdslModemConfigEasyFirewallLevel;
(function (XdslModemConfigEasyFirewallLevel) {
    XdslModemConfigEasyFirewallLevel["BLOCKALL"] = "BlockAll";
    XdslModemConfigEasyFirewallLevel["DISABLED"] = "Disabled";
    XdslModemConfigEasyFirewallLevel["NORMAL"] = "Normal";
})(XdslModemConfigEasyFirewallLevel = exports.XdslModemConfigEasyFirewallLevel || (exports.XdslModemConfigEasyFirewallLevel = {}));
/*
 * Type of protocol for the Port Mapping
 */
var XdslModemConfigProtocolType;
(function (XdslModemConfigProtocolType) {
    XdslModemConfigProtocolType["TCP"] = "TCP";
    XdslModemConfigProtocolType["UDP"] = "UDP";
})(XdslModemConfigProtocolType = exports.XdslModemConfigProtocolType || (exports.XdslModemConfigProtocolType = {}));
/*
 * Type of WLAN security protection
 */
var XdslModemConfigSecurityType;
(function (XdslModemConfigSecurityType) {
    XdslModemConfigSecurityType["NONE"] = "None";
    XdslModemConfigSecurityType["WEP"] = "WEP";
    XdslModemConfigSecurityType["WPA"] = "WPA";
    XdslModemConfigSecurityType["WPA2"] = "WPA2";
    XdslModemConfigSecurityType["WPAANDWPA2"] = "WPAandWPA2";
})(XdslModemConfigSecurityType = exports.XdslModemConfigSecurityType || (exports.XdslModemConfigSecurityType = {}));
class Xdsl {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the XDSL service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl#GET)
     */
    ListAvailableServices() {
        let url = `/xdsl`;
        return this.client.request('GET', url);
    }
    /**
     * XDSL Access [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/xdsl/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * XDSL Access [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/xdsl/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * extraIpRange operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/addressMove/extraIpRange#GET)
     */
    InformationsAboutTheExtraIPRangeDuringAddressMove(serviceName) {
        let url = `/xdsl/${serviceName}/addressMove/extraIpRange`;
        return this.client.request('GET', url);
    }
    /**
     * extraIpRangeMove operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/addressMove/extraIpRangeMove#POST)
     */
    InitiateTheExtraIPRangeMigration(serviceName) {
        let url = `/xdsl/${serviceName}/addressMove/extraIpRangeMove`;
        return this.client.request('POST', url);
    }
    /**
     * List the xdsl.AntiSpam objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/antiSpams#GET)
     */
    ListAntiSpamsForThisAccess(serviceName) {
        let url = `/xdsl/${serviceName}/antiSpams`;
        return this.client.request('GET', url);
    }
    /**
     * Spams detected from xdsl access [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/antiSpams/%7Bip%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, serviceName: string): Promise<AntiSpam> {
      let url = `/xdsl/${serviceName}/antiSpams/${ip}`
  
      return this.client.request<AntiSpam>('GET', url)
    }
    */
    /**
     * evidences operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/antiSpams/%7Bip%7D/evidences#GET)
     */
    ListOfEvidencesStoredOnPCSForThisIp(ip, serviceName) {
        let url = `/xdsl/${serviceName}/antiSpams/${ip}/evidences`;
        return this.client.request('GET', url);
    }
    /**
     * applyTemplateToModem operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/applyTemplateToModem#POST)
     */
    ApplyTemplateModemToExistingModem(serviceName, templateName) {
        let url = `/xdsl/${serviceName}/applyTemplateToModem`;
        return this.client.request('POST', url, { templateName });
    }
    /**
     * canCancelResiliation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/canCancelResiliation#GET)
     */
    GetInformationAboutTheOngoingResiliation(serviceName) {
        let url = `/xdsl/${serviceName}/canCancelResiliation`;
        return this.client.request('GET', url);
    }
    /**
     * cancelResiliation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/cancelResiliation#POST)
     */
    CancelTheOngoingResiliation(serviceName) {
        let url = `/xdsl/${serviceName}/cancelResiliation`;
        return this.client.request('POST', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/xdsl/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Diagnostic of the access [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/diagnostic#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<AccessDiagnostic> {
      let url = `/xdsl/${serviceName}/diagnostic`
  
      return this.client.request<AccessDiagnostic>('GET', url)
    }
    */
    /**
     * Diagnostic of the access [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/diagnostic#POST)
     */
    RunDiagnosticOnTheAccess(serviceName) {
        let url = `/xdsl/${serviceName}/diagnostic`;
        return this.client.request('POST', url);
    }
    /**
     * Detected incident [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/incident#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<Incident> {
      let url = `/xdsl/${serviceName}/incident`
  
      return this.client.request<Incident>('GET', url)
    }
    */
    /**
     * List the xdsl.IP objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips#GET)
     */
    ListOfIPsAddressesForThisAccess(serviceName) {
        let url = `/xdsl/${serviceName}/ips`;
        return this.client.request('GET', url);
    }
    /**
     * List the xdsl.IP objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips#POST)
     */
    OrderAnExtra29RangeOfIPv4Addresses(serviceName) {
        let url = `/xdsl/${serviceName}/ips`;
        return this.client.request('POST', url);
    }
    /**
     * Informations about an IP address [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips/%7Bip%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, serviceName: string): Promise<IP> {
      let url = `/xdsl/${serviceName}/ips/${ip}`
  
      return this.client.request<IP>('GET', url)
    }
    */
    /**
     * Informations about an IP address [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ips/%7Bip%7D#DELETE)
     */
    StopRenewingThisExtraIPv4Option(ip, serviceName) {
        let url = `/xdsl/${serviceName}/ips/${ip}`;
        return this.client.request('DELETE', url);
    }
    /**
     * ipv6 operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/ipv6#POST)
     */
    ChangeTheStatusOfTheIPv6ForThisAccess(enabled, serviceName) {
        let url = `/xdsl/${serviceName}/ipv6`;
        return this.client.request('POST', url, { enabled });
    }
    /**
     * List the xdsl.Line objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines#GET)
     */
    TheLinesOfTheAccess(serviceName) {
        let url = `/xdsl/${serviceName}/lines`;
        return this.client.request('GET', url);
    }
    /**
     * Information about the physical copper line [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D#GET)
     */
    /*
    GetThisObjectProperties(number: string, serviceName: string): Promise<Line> {
      let url = `/xdsl/${serviceName}/lines/${number}`
  
      return this.client.request<Line>('GET', url)
    }
    */
    /**
     * cancel operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/diagnostic/cancel#POST)
     */
    CancelLineDiagnosticIfPossible(number, serviceName) {
        let url = `/xdsl/${serviceName}/lines/${number}/diagnostic/cancel`;
        return this.client.request('POST', url);
    }
    /**
     * run operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/diagnostic/run#POST)
     */
    UpdateAndGetAdvancedDiagnosticOfTheLine(faultType, number, serviceName, actionsDone, answers) {
        let url = `/xdsl/${serviceName}/lines/${number}/diagnostic/run`;
        return this.client.request('POST', url, { faultType, actionsDone, answers });
    }
    /**
     * Information about the port on the DSLAM [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort#GET)
     */
    /*
    GetThisObjectProperties(number: string, serviceName: string): Promise<DslamPort> {
      let url = `/xdsl/${serviceName}/lines/${number}/dslamPort`
  
      return this.client.request<DslamPort>('GET', url)
    }
    */
    /**
     * availableProfiles operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/availableProfiles#GET)
     */
    ListAllAvailablesProfilesForThisPort(number, serviceName) {
        let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/availableProfiles`;
        return this.client.request('GET', url);
    }
    /**
     * changeProfile operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/changeProfile#POST)
     */
    ChangeTheProfileOfThePort(dslamProfileId, number, serviceName) {
        let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/changeProfile`;
        return this.client.request('POST', url, { dslamProfileId });
    }
    /**
     * logs operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/logs#GET)
     */
    GetTheLogsEmittedByTheDSLAMForThisPort(limit, number, serviceName) {
        let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/logs?`;
        const queryParams = new query_params_1.default();
        if (limit) {
            queryParams.set('limit', limit.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * reset operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/dslamPort/reset#POST)
     */
    ResetThePortOnTheDSLAM(number, serviceName) {
        let url = `/xdsl/${serviceName}/lines/${number}/dslamPort/reset`;
        return this.client.request('POST', url);
    }
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/lines/%7Bnumber%7D/statistics#GET)
     */
    GetVariousStatisticsAboutTheLine(number, period, serviceName, type) {
        let url = `/xdsl/${serviceName}/lines/${number}/statistics?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<Modem> {
      let url = `/xdsl/${serviceName}/modem`
  
      return this.client.request<Modem>('GET', url)
    }
    */
    /**
     * Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: Modem): Promise<void> {
      let url = `/xdsl/${serviceName}/modem`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * availableWLANChannel operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/availableWLANChannel#GET)
     */
    ListAvailableWLANChannelForThisModem(frequency, serviceName) {
        let url = `/xdsl/${serviceName}/modem/availableWLANChannel?`;
        const queryParams = new query_params_1.default();
        if (frequency) {
            queryParams.set('frequency', frequency.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * blocIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/blocIp#GET)
     */
    GetTheStatusOfTheBlocIPOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/blocIp`;
        return this.client.request('GET', url);
    }
    /**
     * blocIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/blocIp#POST)
     */
    ChangeTheStatusOfTheBlocIPOnModem(serviceName, status) {
        let url = `/xdsl/${serviceName}/modem/blocIp`;
        return this.client.request('POST', url, { status });
    }
    /**
     * callWaiting operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/callWaiting#GET)
     */
    GetTheStatusOfCallWaitingOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/callWaiting`;
        return this.client.request('GET', url);
    }
    /**
     * callWaiting operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/callWaiting#POST)
     */
    ChangeTheStatusOfCallWaitingOnModem(callWaiting, serviceName) {
        let url = `/xdsl/${serviceName}/modem/callWaiting`;
        return this.client.request('POST', url, { callWaiting });
    }
    /**
     * comfortExchange operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/comfortExchange#POST)
     */
    ReplaceAccessModemByLastModelFeesWillBeApplied(serviceName, contactShipping) {
        let url = `/xdsl/${serviceName}/modem/comfortExchange`;
        return this.client.request('POST', url, { contactShipping });
    }
    /**
     * List the xdsl.connectedDevice objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/connectedDevices#GET)
     */
    ListOfDevicesConnectedOnThisModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/connectedDevices`;
        return this.client.request('GET', url);
    }
    /**
     * Connected Device [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/connectedDevices/%7BmacAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(macAddress: string, serviceName: string): Promise<ConnectedDevice> {
      let url = `/xdsl/${serviceName}/modem/connectedDevices/${macAddress}`
  
      return this.client.request<ConnectedDevice>('GET', url)
    }
    */
    /**
     * contentSharing operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/contentSharing#POST)
     */
    ChangeTheStatusOfContentSharingOnModem(contentSharing, serviceName) {
        let url = `/xdsl/${serviceName}/modem/contentSharing`;
        return this.client.request('POST', url, { contentSharing });
    }
    /**
     * contentSharing operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/contentSharing#GET)
     */
    GetTheStatusOfContentSharingOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/contentSharing`;
        return this.client.request('GET', url);
    }
    /**
     * duplicatePortMappingConfig operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/duplicatePortMappingConfig#POST)
     */
    RemoveAllTheCurrentPortMappingRulesAndSetTheSameConfigAsTheAccessGivenInParameters(accessName, serviceName) {
        let url = `/xdsl/${serviceName}/modem/duplicatePortMappingConfig`;
        return this.client.request('POST', url, { accessName });
    }
    /**
     * firmware operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/firmware#POST)
     */
    LaunchATaskToInstallTargetFirmwareOnModem(firmware, serviceName, todoDate) {
        let url = `/xdsl/${serviceName}/modem/firmware`;
        return this.client.request('POST', url, { firmware, todoDate });
    }
    /**
     * firmware operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/firmware#GET)
     */
    GetTheFirmwareVersionInstalledOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/firmware`;
        return this.client.request('GET', url);
    }
    /**
     * firmwareAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/firmwareAvailable#GET)
     */
    ListAvailableFirmwareForThisModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/firmwareAvailable`;
        return this.client.request('GET', url);
    }
    /**
     * ftp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ftp#GET)
     */
    GetTheStatusOfFtpServiceOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/ftp`;
        return this.client.request('GET', url);
    }
    /**
     * ftp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ftp#POST)
     */
    ChangeTheStatusOfTheFtpServiceOnModem(ftp, serviceName) {
        let url = `/xdsl/${serviceName}/modem/ftp`;
        return this.client.request('POST', url, { ftp });
    }
    /**
     * ipsecAlg operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ipsecAlg#GET)
     */
    GetTheStatusOfIpsecAlgServiceOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/ipsecAlg`;
        return this.client.request('GET', url);
    }
    /**
     * ipsecAlg operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/ipsecAlg#POST)
     */
    ChangeTheStatusOfTheIpsecAlgServiceOnModem(ipsecAlg, serviceName) {
        let url = `/xdsl/${serviceName}/modem/ipsecAlg`;
        return this.client.request('POST', url, { ipsecAlg });
    }
    /**
     * List the xdsl.LAN objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan#GET)
     */
    ListOfLANsOnThisModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/lan`;
        return this.client.request('GET', url);
    }
    /**
     * LAN Configuration of the Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D#GET)
     */
    /*
    GetThisObjectProperties(lanName: string, serviceName: string): Promise<LAN> {
      let url = `/xdsl/${serviceName}/modem/lan/${lanName}`
  
      return this.client.request<LAN>('GET', url)
    }
    */
    /**
     * LAN Configuration of the Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(lanName: string, serviceName: string, payload: LAN): Promise<void> {
      let url = `/xdsl/${serviceName}/modem/lan/${lanName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the xdsl.DHCP objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp#GET)
     */
    ListOfDHCPOnThisModem(lanName, serviceName) {
        let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp`;
        return this.client.request('GET', url);
    }
    /**
     * DHCP Configuration of the Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D#GET)
     */
    /*
    GetThisObjectProperties(dhcpName: string, lanName: string, serviceName: string): Promise<DHCP> {
      let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}`
  
      return this.client.request<DHCP>('GET', url)
    }
    */
    /**
     * DHCP Configuration of the Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(dhcpName: string, lanName: string, serviceName: string, payload: DHCP): Promise<void> {
      let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the xdsl.DHCPStaticAddress objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses#GET)
     */
    ListOfDHCPStaticAddressOfThisModem(dhcpName, lanName, serviceName) {
        let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses`;
        return this.client.request('GET', url);
    }
    /**
     * List the xdsl.DHCPStaticAddress objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses#POST)
     */
    AddADHCPStaticLease(dhcpName, IPAddress, lanName, MACAddress, serviceName, name) {
        let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses`;
        return this.client.request('POST', url, { IPAddress, MACAddress, name });
    }
    /**
     * DHCP Static Address [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses/%7BMACAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(dhcpName: string, lanName: string, MACAddress: string, serviceName: string): Promise<DHCPStaticAddress> {
      let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`
  
      return this.client.request<DHCPStaticAddress>('GET', url)
    }
    */
    /**
     * DHCP Static Address [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses/%7BMACAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(dhcpName: string, lanName: string, MACAddress: string, serviceName: string, payload: DHCPStaticAddress): Promise<void> {
      let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * DHCP Static Address [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/lan/%7BlanName%7D/dhcp/%7BdhcpName%7D/DHCPStaticAddresses/%7BMACAddress%7D#DELETE)
     */
    DeleteThisPortMapping(dhcpName, lanName, MACAddress, serviceName) {
        let url = `/xdsl/${serviceName}/modem/lan/${lanName}/dhcp/${dhcpName}/DHCPStaticAddresses/${MACAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the xdsl.PortMapping objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings#GET)
     */
    ListOfPortMappingsOnThisModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/portMappings`;
        return this.client.request('GET', url);
    }
    /**
     * List the xdsl.PortMapping objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings#POST)
     */
    AddAPortMapping(externalPortStart, internalClient, internalPort, name, protocol, serviceName, allowedRemoteIp, description, externalPortEnd) {
        let url = `/xdsl/${serviceName}/modem/portMappings`;
        return this.client.request('POST', url, { externalPortStart, internalClient, internalPort, name, protocol, allowedRemoteIp, description, externalPortEnd });
    }
    /**
     * Port Mappings [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<PortMapping> {
      let url = `/xdsl/${serviceName}/modem/portMappings/${name}`
  
      return this.client.request<PortMapping>('GET', url)
    }
    */
    /**
     * Port Mappings [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings/%7Bname%7D#PUT)
     */
    /*
    AlterThisObjectProperties(name: string, serviceName: string, payload: PortMapping): Promise<void> {
      let url = `/xdsl/${serviceName}/modem/portMappings/${name}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Port Mappings [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/portMappings/%7Bname%7D#DELETE)
     */
    /*
    DeleteThisPortMapping(name: string, serviceName: string): Promise<Task> {
      let url = `/xdsl/${serviceName}/modem/portMappings/${name}`
  
      return this.client.request<Task>('DELETE', url)
    }
    */
    /**
     * reboot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/reboot#POST)
     */
    RebootTheModem(serviceName, todoDate) {
        let url = `/xdsl/${serviceName}/modem/reboot`;
        return this.client.request('POST', url, { todoDate });
    }
    /**
     * reconfigureVoip operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/reconfigureVoip#POST)
     */
    ReconfigureVoipLineOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/reconfigureVoip`;
        return this.client.request('POST', url);
    }
    /**
     * refreshConnectedDevices operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/refreshConnectedDevices#POST)
     */
    RefreshTheListOfConnectedDevicesOnTheModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/refreshConnectedDevices`;
        return this.client.request('POST', url);
    }
    /**
     * reset operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/reset#POST)
     */
    ResetTheModemToItsDefaultConfiguration(serviceName, resetOvhConfig) {
        let url = `/xdsl/${serviceName}/modem/reset`;
        return this.client.request('POST', url, { resetOvhConfig });
    }
    /**
     * resetPortMappingConfig operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/resetPortMappingConfig#POST)
     */
    RemoveAllTheCurrentPortMappingRules(serviceName) {
        let url = `/xdsl/${serviceName}/modem/resetPortMappingConfig`;
        return this.client.request('POST', url);
    }
    /**
     * retrieveInfo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/retrieveInfo#POST)
     */
    GetGeneralModemInformation(serviceName) {
        let url = `/xdsl/${serviceName}/modem/retrieveInfo`;
        return this.client.request('POST', url);
    }
    /**
     * sipAlg operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/sipAlg#GET)
     */
    GetTheStatusOfSipAlgServiceOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/sipAlg`;
        return this.client.request('GET', url);
    }
    /**
     * sipAlg operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/sipAlg#POST)
     */
    ChangeTheStatusOfTheSipAlgServiceOnModem(serviceName, sipAlg) {
        let url = `/xdsl/${serviceName}/modem/sipAlg`;
        return this.client.request('POST', url, { sipAlg });
    }
    /**
     * upnp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/upnp#POST)
     */
    ChangeTheStatusOfTheUpnpOnModem(serviceName, upnp) {
        let url = `/xdsl/${serviceName}/modem/upnp`;
        return this.client.request('POST', url, { upnp });
    }
    /**
     * upnp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/upnp#GET)
     */
    GetTheStatusOfTheUpnpOnModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/upnp`;
        return this.client.request('GET', url);
    }
    /**
     * List the xdsl.WLAN objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/wifi#GET)
     */
    ListOfWLANsOnThisModem(serviceName) {
        let url = `/xdsl/${serviceName}/modem/wifi`;
        return this.client.request('GET', url);
    }
    /**
     * WLAN Configuration of the Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/wifi/%7BwifiName%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, wifiName: string): Promise<WLAN> {
      let url = `/xdsl/${serviceName}/modem/wifi/${wifiName}`
  
      return this.client.request<WLAN>('GET', url)
    }
    */
    /**
     * WLAN Configuration of the Modem [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/modem/wifi/%7BwifiName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, wifiName: string, payload: WLAN): Promise<void> {
      let url = `/xdsl/${serviceName}/modem/wifi/${wifiName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the xdsl.MonitoringNotification objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications#GET)
     */
    ListTheNotificationsForThisAccess(serviceName) {
        let url = `/xdsl/${serviceName}/monitoringNotifications`;
        return this.client.request('GET', url);
    }
    /**
     * List the xdsl.MonitoringNotification objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications#POST)
     */
    AddANotification(frequency, serviceName, type, allowIncident, downThreshold, email, phone, smsAccount) {
        let url = `/xdsl/${serviceName}/monitoringNotifications`;
        return this.client.request('POST', url, { frequency, type, allowIncident, downThreshold, email, phone, smsAccount });
    }
    /**
     * Defines where and how the notifications will be sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<MonitoringNotification> {
      let url = `/xdsl/${serviceName}/monitoringNotifications/${id}`
  
      return this.client.request<MonitoringNotification>('GET', url)
    }
    */
    /**
     * Defines where and how the notifications will be sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: MonitoringNotification): Promise<void> {
      let url = `/xdsl/${serviceName}/monitoringNotifications/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Defines where and how the notifications will be sent [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/monitoringNotifications/%7Bid%7D#DELETE)
     */
    DeleteThisNotification(id, serviceName) {
        let url = `/xdsl/${serviceName}/monitoringNotifications/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * orderFollowup operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/orderFollowup#GET)
     */
    GetTheStatusOfTheOrder(serviceName) {
        let url = `/xdsl/${serviceName}/orderFollowup`;
        return this.client.request('GET', url);
    }
    /**
     * orderMeeting operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/orderMeeting#POST)
     */
    BookAMeetingAndRelaunchOrder(endDate, serviceName, startDate, uiCode) {
        let url = `/xdsl/${serviceName}/orderMeeting`;
        return this.client.request('POST', url, { endDate, startDate, uiCode });
    }
    /**
     * Scheduled action before the next renewal of the service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/pendingAction#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<PendingAction> {
      let url = `/xdsl/${serviceName}/pendingAction`
  
      return this.client.request<PendingAction>('GET', url)
    }
    */
    /**
     * radiusConnectionLogs operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/radiusConnectionLogs#GET)
     */
    ListTheRadiusConnectionLogs(serviceName) {
        let url = `/xdsl/${serviceName}/radiusConnectionLogs`;
        return this.client.request('GET', url);
    }
    /**
     * requestPPPLoginMail operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/requestPPPLoginMail#POST)
     */
    RenewPPPPasswordAndSendThePPPLoginInformationsToTheEmailOfTheNicAdmin(serviceName) {
        let url = `/xdsl/${serviceName}/requestPPPLoginMail`;
        return this.client.request('POST', url);
    }
    /**
     * requestTotalDeconsolidation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/requestTotalDeconsolidation#POST)
     */
    SwitchThisAccessToTotalDeconsolidation(serviceName, noPortability, rio) {
        let url = `/xdsl/${serviceName}/requestTotalDeconsolidation`;
        return this.client.request('POST', url, { noPortability, rio });
    }
    /**
     * resiliate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/resiliate#POST)
     */
    ResiliateTheAccess(resiliationSurvey, serviceName, resiliationDate) {
        let url = `/xdsl/${serviceName}/resiliate`;
        return this.client.request('POST', url, { resiliationSurvey, resiliationDate });
    }
    /**
     * resiliationFollowup operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/resiliationFollowup#GET)
     */
    /*
    GetInformationAboutTheOngoingResiliation(serviceName: string): Promise<ResiliationFollowUpDetail> {
      let url = `/xdsl/${serviceName}/resiliationFollowup`
  
      return this.client.request<ResiliationFollowUpDetail>('GET', url)
    }
    */
    /**
     * resiliationTerms operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/resiliationTerms#GET)
     */
    GetResiliationTerms(serviceName, resiliationDate) {
        let url = `/xdsl/${serviceName}/resiliationTerms?`;
        const queryParams = new query_params_1.default();
        if (resiliationDate) {
            queryParams.set('resiliationDate', resiliationDate.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the telephony.Rma objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma#GET)
     */
    ReturnMerchandiseAuthorisationAssociated(serviceName) {
        let url = `/xdsl/${serviceName}/rma`;
        return this.client.request('GET', url);
    }
    /**
     * Current Return Merchandise Authorisation [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: string, serviceName: string): Promise<TelephonyRma> {
      let url = `/xdsl/${serviceName}/rma/${id}`
  
      return this.client.request<TelephonyRma>('GET', url)
    }
    */
    /**
     * Current Return Merchandise Authorisation [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: string, serviceName: string, payload: TelephonyRma): Promise<void> {
      let url = `/xdsl/${serviceName}/rma/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Current Return Merchandise Authorisation [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/rma/%7Bid%7D#DELETE)
     */
    CancelTheRma(id, serviceName) {
        let url = `/xdsl/${serviceName}/rma/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * searchOrderMeetings operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/searchOrderMeetings#POST)
     */
    SearchForAvailableLineCreationMeetingTimeSlotsForOrderOnly(serviceName) {
        let url = `/xdsl/${serviceName}/searchOrderMeetings`;
        return this.client.request('POST', url);
    }
    /**
     * sendOrderToProvider operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/sendOrderToProvider#POST)
     */
    UnlockOrderInWaitingCustomerStatusItOnlyConcernsOrdersWhoseModemIsSentBeforeAnythingHaveBeenForwardedToOurProvider(serviceName) {
        let url = `/xdsl/${serviceName}/sendOrderToProvider`;
        return this.client.request('POST', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/xdsl/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/xdsl/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/statistics#GET)
     */
    GetVariousStatisticsAboutThisAccess(period, serviceName, type) {
        let url = `/xdsl/${serviceName}/statistics?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the xdsl.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/tasks#GET)
     */
    TasksScheduledForThisAccess(serviceName, _function, status) {
        let url = `/xdsl/${serviceName}/tasks?`;
        const queryParams = new query_params_1.default();
        if (_function) {
            queryParams.set('function', _function);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Describes the current status of a task [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Task> {
      let url = `/xdsl/${serviceName}/tasks/${id}`
  
      return this.client.request<Task>('GET', url)
    }
    */
    /**
     * archive operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/tasks/%7Bid%7D/archive#POST)
     */
    DeleteTheTaskInProblemFromTheResults(id, serviceName) {
        let url = `/xdsl/${serviceName}/tasks/${id}/archive`;
        return this.client.request('POST', url);
    }
    /**
     * totalDeconsolidationTerms operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/totalDeconsolidationTerms#GET)
     */
    GiveThePriceToRequestTotalDeconsolidationOnTheAccess(serviceName) {
        let url = `/xdsl/${serviceName}/totalDeconsolidationTerms`;
        return this.client.request('GET', url);
    }
    /**
     * updateInvalidOrMissingRio operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/%7BserviceName%7D/updateInvalidOrMissingRio#POST)
     */
    UpdateRIOOrDisablePortabilityForOrderInErrorBecauseOfMissingOrInvalidRIO(relaunchWithoutPortability, serviceName, rio) {
        let url = `/xdsl/${serviceName}/updateInvalidOrMissingRio`;
        return this.client.request('POST', url, { relaunchWithoutPortability, rio });
    }
    /**
     * Get the cities from a zipCode [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/cities#GET)
     */
    GetTheCitiesFromAZipCode(zipCode) {
        let url = `/xdsl/eligibility/cities?`;
        const queryParams = new query_params_1.default();
        if (zipCode) {
            queryParams.set('zipCode', zipCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get the active lines at given address [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/lines/active#POST)
     */
    GetTheActiveLinesAtGivenAddress(city, contactName, street, streetNumber) {
        let url = `/xdsl/eligibility/lines/active`;
        return this.client.request('POST', url, { city, contactName, street, streetNumber });
    }
    /**
     * Get the inactive lines at given address [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/lines/inactive#POST)
     */
    GetTheInactiveLinesAtGivenAddress(city, street, contactName, streetNumber) {
        let url = `/xdsl/eligibility/lines/inactive`;
        return this.client.request('POST', url, { city, street, contactName, streetNumber });
    }
    /**
     * Search for meeting time slot [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/meetings#GET)
     */
    SearchForMeetingTimeSlot(eligibilityId, offerLabel) {
        let url = `/xdsl/eligibility/meetings?`;
        const queryParams = new query_params_1.default();
        if (eligibilityId) {
            queryParams.set('eligibilityId', eligibilityId);
        }
        if (offerLabel) {
            queryParams.set('offerLabel', offerLabel);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get all buildings for a specific address [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/buildings#POST)
     */
    GetAllBuildingsForASpecificAddress(streetCode, streetNumber) {
        let url = `/xdsl/eligibility/search/buildings`;
        return this.client.request('POST', url, { streetCode, streetNumber });
    }
    /**
     * Get all localities linked to a zip code [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/cities#POST)
     */
    GetAllLocalitiesLinkedToAZipCode(zipCode) {
        let url = `/xdsl/eligibility/search/cities`;
        return this.client.request('POST', url, { zipCode });
    }
    /**
     * Get all street linked to a locality [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/fiberStreets#POST)
     */
    GetAllStreetLinkedToALocality(inseeCode) {
        let url = `/xdsl/eligibility/search/fiberStreets`;
        return this.client.request('POST', url, { inseeCode });
    }
    /**
     * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /xdsl/eligibility/search/streets) [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/search/streetNumbers#POST)
     */
    GetTheAvailableStreetNumbersForAGivenStreetCodeUniqueIdentifierOfAStreetYouCanGetWithTheMethodPOSTXdsleligibilitysearchstreets(streetCode) {
        let url = `/xdsl/eligibility/search/streetNumbers`;
        return this.client.request('POST', url, { streetCode });
    }
    /**
     * Get the streets from a city inseeCode and partial street name [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/streets#GET)
     */
    GetTheStreetsFromACityInseeCodeAndPartialStreetName(inseeCode, partialName) {
        let url = `/xdsl/eligibility/streets?`;
        const queryParams = new query_params_1.default();
        if (inseeCode) {
            queryParams.set('inseeCode', inseeCode);
        }
        if (partialName) {
            queryParams.set('partialName', partialName);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get an eligibility by its id [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test#GET)
     */
    GetAnEligibilityByItsId(id) {
        let url = `/xdsl/eligibility/test?`;
        const queryParams = new query_params_1.default();
        if (id) {
            queryParams.set('id', id);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Do an eligibility for an address, if no line exist [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test/address#POST)
     */
    DoAnEligibilityForAnAddressIfNoLineExist(address) {
        let url = `/xdsl/eligibility/test/address`;
        return this.client.request('POST', url, { address });
    }
    /**
     * Perform a fiber eligibility for a building [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test/fiber/building#POST)
     */
    PerformAFiberEligibilityForABuilding(building) {
        let url = `/xdsl/eligibility/test/fiber/building`;
        return this.client.request('POST', url, { building });
    }
    /**
     * Do an eligibility for a line [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/eligibility/test/line#POST)
     */
    DoAnEligibilityForALine(lineNumber, lineStatus) {
        let url = `/xdsl/eligibility/test/line`;
        return this.client.request('POST', url, { lineNumber, lineStatus });
    }
    /**
     * Operations about the XDSL service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/xdsl/email/pro`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * XDSL Email Pro [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D#GET)
     */
    /*
    GetThisObjectProperties(email: string): Promise<XdslEmailPro> {
      let url = `/xdsl/email/pro/${email}`
  
      return this.client.request<XdslEmailPro>('GET', url)
    }
    */
    /**
     * XDSL Email Pro [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D#PUT)
     */
    /*
    AlterThisObjectProperties(email: string, payload: XdslEmailPro): Promise<void> {
      let url = `/xdsl/email/pro/${email}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * XDSL Email Pro [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D#DELETE)
     */
    DeleteTheEmail(email) {
        let url = `/xdsl/email/pro/${email}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/email/pro/%7Bemail%7D/changePassword#POST)
     */
    ChangeTheEmailPassword(email, password) {
        let url = `/xdsl/email/pro/${email}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * List the xdsl.Incident objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/incidents#GET)
     */
    ListOfIncidents(creationDate, endDate) {
        let url = `/xdsl/incidents?`;
        const queryParams = new query_params_1.default();
        if (creationDate) {
            queryParams.set('creationDate', creationDate.toString());
        }
        if (endDate) {
            queryParams.set('endDate', endDate.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Detected incident [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/incidents/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number): Promise<Incident> {
      let url = `/xdsl/incidents/${id}`
  
      return this.client.request<Incident>('GET', url)
    }
    */
    /**
     * Operations about the XDSL service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/xdsl/spare`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Spare properties [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D#GET)
     */
    /*
    GetThisObjectProperties(spare: string): Promise<SparexdslXdslSpare> {
      let url = `/xdsl/spare/${spare}`
  
      return this.client.request<SparexdslXdslSpare>('GET', url)
    }
    */
    /**
     * Spare properties [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D#DELETE)
     */
    DeleteTheSpareAsIfItWasNotBelongingToOVHAnymore(spare) {
        let url = `/xdsl/spare/${spare}`;
        return this.client.request('DELETE', url);
    }
    /**
     * compatibleReplacement operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/compatibleReplacement#GET)
     */
    ReturnTheListOfBrandCompatibleToBeReplaced(spare) {
        let url = `/xdsl/spare/${spare}/compatibleReplacement`;
        return this.client.request('GET', url);
    }
    /**
     * replace operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/replace#POST)
     */
    ReplaceTheModemByItsSpare(domain, spare) {
        let url = `/xdsl/spare/${spare}/replace`;
        return this.client.request('POST', url, { domain });
    }
    /**
     * returnMerchandise operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/returnMerchandise#POST)
     */
    ReturnTheBrokenEquipmentInInstantRefund(spare) {
        let url = `/xdsl/spare/${spare}/returnMerchandise`;
        return this.client.request('POST', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(spare: string): Promise<ServicesService> {
      let url = `/xdsl/spare/${spare}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/%7Bspare%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(spare: string, payload: ServicesService): Promise<void> {
      let url = `/xdsl/spare/${spare}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Get all available spare brands [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/spare/brands#GET)
     */
    GetAllAvailableSpareBrands() {
        let url = `/xdsl/spare/brands`;
        return this.client.request('GET', url);
    }
    /**
     * List the xdsl.TemplateModem objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem#GET)
     */
    ListOfTemplateModem() {
        let url = `/xdsl/templateModem`;
        return this.client.request('GET', url);
    }
    /**
     * List the xdsl.TemplateModem objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem#POST)
     */
    CreateNewModemTemplateFromExistingModem(name, serviceName) {
        let url = `/xdsl/templateModem`;
        return this.client.request('POST', url, { name, serviceName });
    }
    /**
     * Modem Template [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string): Promise<TemplateModem> {
      let url = `/xdsl/templateModem/${name}`
  
      return this.client.request<TemplateModem>('GET', url)
    }
    */
    /**
     * Modem Template [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem/%7Bname%7D#PUT)
     */
    /*
    AlterThisObjectProperties(name: string, payload: TemplateModem): Promise<void> {
      let url = `/xdsl/templateModem/${name}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Modem Template [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/xdsl/templateModem/%7Bname%7D#DELETE)
     */
    DeleteThisModemTemplate(name) {
        let url = `/xdsl/templateModem/${name}`;
        return this.client.request('DELETE', url);
    }
}
exports.Xdsl = Xdsl;
//# sourceMappingURL=xdsl.js.map