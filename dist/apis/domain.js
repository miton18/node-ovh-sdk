"use strict";
// GENERATED SDK for domain API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Dnssec Status
 */
var DnssecDnssecStatus;
(function (DnssecDnssecStatus) {
    DnssecDnssecStatus["DISABLEINPROGRESS"] = "disableInProgress";
    DnssecDnssecStatus["DISABLED"] = "disabled";
    DnssecDnssecStatus["ENABLEINPROGRESS"] = "enableInProgress";
    DnssecDnssecStatus["ENABLED"] = "enabled";
})(DnssecDnssecStatus = exports.DnssecDnssecStatus || (exports.DnssecDnssecStatus = {}));
/*
 *
//                 Generated : The key has been created, but has not yet been used for anything.
//                 ###
//                 Published : The DNSKEY record is published in the zone, but predecessors of the key may be held in caches.
//                 ###
//                 Ready     : The new key data has been published for long enough to guarantee that any previous versions of the DNSKEY RRset have expired from caches.
//                 ###
//                 Active    : The key has started to be used to sign RRsets.
//                 ###
//                 Retired   : A successor key has become active and this key is no longer being used to generate RRSIGs.
//                 ###
//                 Removed   : The key has been removed from the zone.
//                 ###
//                 Revoked   : The key is published for a period with the "revoke" bit set as a way of notifying validating resolvers that have configured it as an trust anchor that it is about to be removed from the zone.
 */
var DnssecKeyStatus;
(function (DnssecKeyStatus) {
    DnssecKeyStatus["ACTIVE"] = "active";
    DnssecKeyStatus["GENERATED"] = "generated";
    DnssecKeyStatus["PUBLISHED"] = "published";
    DnssecKeyStatus["REMOVED"] = "removed";
    DnssecKeyStatus["RETIRED"] = "retired";
    DnssecKeyStatus["REVOKED"] = "revoked";
})(DnssecKeyStatus = exports.DnssecKeyStatus || (exports.DnssecKeyStatus = {}));
/*
 * Contact type fields
 */
var DomainContactAllTypes;
(function (DomainContactAllTypes) {
    DomainContactAllTypes["ADMIN"] = "admin";
    DomainContactAllTypes["ALL"] = "all";
    DomainContactAllTypes["BILLING"] = "billing";
    DomainContactAllTypes["OWNER"] = "owner";
    DomainContactAllTypes["TECH"] = "tech";
})(DomainContactAllTypes = exports.DomainContactAllTypes || (exports.DomainContactAllTypes = {}));
/*
 * Type of claim notice
 */
var DomaindataclaimNoticeClaimNoticeType;
(function (DomaindataclaimNoticeClaimNoticeType) {
    DomaindataclaimNoticeClaimNoticeType["UK"] = "UK";
    DomaindataclaimNoticeClaimNoticeType["TRADEMARK"] = "TRADEMARK";
})(DomaindataclaimNoticeClaimNoticeType = exports.DomaindataclaimNoticeClaimNoticeType || (exports.DomaindataclaimNoticeClaimNoticeType = {}));
/*
 * All contact type for a domain
 */
var DomainDomainContactType;
(function (DomainDomainContactType) {
    DomainDomainContactType["ADMIN"] = "admin";
    DomainDomainContactType["BILLING"] = "billing";
    DomainDomainContactType["OWNER"] = "owner";
    DomainDomainContactType["TECH"] = "tech";
})(DomainDomainContactType = exports.DomainDomainContactType || (exports.DomainDomainContactType = {}));
/*
 * Domain lock status
 */
var DomainDomainLockStatus;
(function (DomainDomainLockStatus) {
    DomainDomainLockStatus["LOCKED"] = "locked";
    DomainDomainLockStatus["LOCKING"] = "locking";
    DomainDomainLockStatus["UNAVAILABLE"] = "unavailable";
    DomainDomainLockStatus["UNLOCKED"] = "unlocked";
    DomainDomainLockStatus["UNLOCKING"] = "unlocking";
})(DomainDomainLockStatus = exports.DomainDomainLockStatus || (exports.DomainDomainLockStatus = {}));
/*
 * DNS server state
 */
var DomainDomainNsState;
(function (DomainDomainNsState) {
    DomainDomainNsState["KO"] = "ko";
    DomainDomainNsState["OK"] = "ok";
})(DomainDomainNsState = exports.DomainDomainNsState || (exports.DomainDomainNsState = {}));
/*
 * DomainNS Type
 */
var DomainDomainNsType;
(function (DomainDomainNsType) {
    DomainDomainNsType["EXTERNAL"] = "external";
    DomainDomainNsType["HOSTED"] = "hosted";
})(DomainDomainNsType = exports.DomainDomainNsType || (exports.DomainDomainNsType = {}));
/*
 * All options a domain can have
 */
var DomainDomainOption;
(function (DomainDomainOption) {
    DomainDomainOption["DNSANYCAST"] = "dnsAnycast";
})(DomainDomainOption = exports.DomainDomainOption || (exports.DomainDomainOption = {}));
/*
 * All states a domain Option can be in
 */
var DomainDomainOptionState;
(function (DomainDomainOptionState) {
    DomainDomainOptionState["RELEASED"] = "released";
    DomainDomainOptionState["SUBSCRIBED"] = "subscribed";
})(DomainDomainOptionState = exports.DomainDomainOptionState || (exports.DomainDomainOptionState = {}));
/*
 * Offer
 */
var DomainOffer;
(function (DomainOffer) {
    DomainOffer["DIAMOND"] = "diamond";
    DomainOffer["GOLD"] = "gold";
    DomainOffer["PLATINUM"] = "platinum";
})(DomainOffer = exports.DomainOffer || (exports.DomainOffer = {}));
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
 * Whois optin fields
 */
var DomainOptinFields;
(function (DomainOptinFields) {
    DomainOptinFields["ADDRESS"] = "address";
    DomainOptinFields["CITY"] = "city";
    DomainOptinFields["COUNTRY"] = "country";
    DomainOptinFields["EMAIL"] = "email";
    DomainOptinFields["FAX"] = "fax";
    DomainOptinFields["NAME"] = "name";
    DomainOptinFields["ORGANISATION"] = "organisation";
    DomainOptinFields["PHONE"] = "phone";
    DomainOptinFields["PROVINCE"] = "province";
    DomainOptinFields["ZIP"] = "zip";
})(DomainOptinFields = exports.DomainOptinFields || (exports.DomainOptinFields = {}));
/*
 * Parent service type enum
 */
var DomainParentServiceType;
(function (DomainParentServiceType) {
    DomainParentServiceType["_ALLDOM"] = "/allDom";
})(DomainParentServiceType = exports.DomainParentServiceType || (exports.DomainParentServiceType = {}));
/*
 * Whois obfuscable fields
 */
var DomainWhoisObfuscatorFields;
(function (DomainWhoisObfuscatorFields) {
    DomainWhoisObfuscatorFields["ADDRESS"] = "address";
    DomainWhoisObfuscatorFields["EMAIL"] = "email";
    DomainWhoisObfuscatorFields["PHONE"] = "phone";
})(DomainWhoisObfuscatorFields = exports.DomainWhoisObfuscatorFields || (exports.DomainWhoisObfuscatorFields = {}));
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
 * All future uses you can provide for a service termination
 */
var ServiceTerminationFutureUse;
(function (ServiceTerminationFutureUse) {
    ServiceTerminationFutureUse["NOT_REPLACING_SERVICE"] = "NOT_REPLACING_SERVICE";
    ServiceTerminationFutureUse["OTHER"] = "OTHER";
    ServiceTerminationFutureUse["SUBSCRIBE_AN_OTHER_SERVICE"] = "SUBSCRIBE_AN_OTHER_SERVICE";
    ServiceTerminationFutureUse["SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR";
    ServiceTerminationFutureUse["SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
})(ServiceTerminationFutureUse = exports.ServiceTerminationFutureUse || (exports.ServiceTerminationFutureUse = {}));
/*
 * All reasons you can provide for a service termination
 */
var ServiceTerminationReason;
(function (ServiceTerminationReason) {
    ServiceTerminationReason["FEATURES_DONT_SUIT_ME"] = "FEATURES_DONT_SUIT_ME";
    ServiceTerminationReason["LACK_OF_PERFORMANCES"] = "LACK_OF_PERFORMANCES";
    ServiceTerminationReason["MIGRATED_TO_ANOTHER_OVH_PRODUCT"] = "MIGRATED_TO_ANOTHER_OVH_PRODUCT";
    ServiceTerminationReason["MIGRATED_TO_COMPETITOR"] = "MIGRATED_TO_COMPETITOR";
    ServiceTerminationReason["NOT_ENOUGH_RECOGNITION"] = "NOT_ENOUGH_RECOGNITION";
    ServiceTerminationReason["NOT_NEEDED_ANYMORE"] = "NOT_NEEDED_ANYMORE";
    ServiceTerminationReason["NOT_RELIABLE"] = "NOT_RELIABLE";
    ServiceTerminationReason["NO_ANSWER"] = "NO_ANSWER";
    ServiceTerminationReason["OTHER"] = "OTHER";
    ServiceTerminationReason["PRODUCT_DIMENSION_DONT_SUIT_ME"] = "PRODUCT_DIMENSION_DONT_SUIT_ME";
    ServiceTerminationReason["PRODUCT_TOOLS_DONT_SUIT_ME"] = "PRODUCT_TOOLS_DONT_SUIT_ME";
    ServiceTerminationReason["TOO_EXPENSIVE"] = "TOO_EXPENSIVE";
    ServiceTerminationReason["TOO_HARD_TO_USE"] = "TOO_HARD_TO_USE";
    ServiceTerminationReason["UNSATIFIED_BY_CUSTOMER_SUPPORT"] = "UNSATIFIED_BY_CUSTOMER_SUPPORT";
})(ServiceTerminationReason = exports.ServiceTerminationReason || (exports.ServiceTerminationReason = {}));
/*
 * Resource record fieldType
 */
var ZoneNamedResolutionFieldType;
(function (ZoneNamedResolutionFieldType) {
    ZoneNamedResolutionFieldType["A"] = "A";
    ZoneNamedResolutionFieldType["AAAA"] = "AAAA";
    ZoneNamedResolutionFieldType["CAA"] = "CAA";
    ZoneNamedResolutionFieldType["CNAME"] = "CNAME";
    ZoneNamedResolutionFieldType["DKIM"] = "DKIM";
    ZoneNamedResolutionFieldType["DMARC"] = "DMARC";
    ZoneNamedResolutionFieldType["LOC"] = "LOC";
    ZoneNamedResolutionFieldType["MX"] = "MX";
    ZoneNamedResolutionFieldType["NAPTR"] = "NAPTR";
    ZoneNamedResolutionFieldType["NS"] = "NS";
    ZoneNamedResolutionFieldType["PTR"] = "PTR";
    ZoneNamedResolutionFieldType["SPF"] = "SPF";
    ZoneNamedResolutionFieldType["SRV"] = "SRV";
    ZoneNamedResolutionFieldType["SSHFP"] = "SSHFP";
    ZoneNamedResolutionFieldType["TLSA"] = "TLSA";
    ZoneNamedResolutionFieldType["TXT"] = "TXT";
})(ZoneNamedResolutionFieldType = exports.ZoneNamedResolutionFieldType || (exports.ZoneNamedResolutionFieldType = {}));
/*
 * Redirection type enum : visible -> Redirection by http code 302, visiblePermanent -> Redirection by http code 301, invisible -> Redirection by html frame
 */
var ZoneRedirectionType;
(function (ZoneRedirectionType) {
    ZoneRedirectionType["INVISIBLE"] = "invisible";
    ZoneRedirectionType["VISIBLE"] = "visible";
    ZoneRedirectionType["VISIBLEPERMANENT"] = "visiblePermanent";
})(ZoneRedirectionType = exports.ZoneRedirectionType || (exports.ZoneRedirectionType = {}));
/*
 * Resource record type
 */
var ZoneResettableNamedResolutionFieldType;
(function (ZoneResettableNamedResolutionFieldType) {
    ZoneResettableNamedResolutionFieldType["A"] = "A";
    ZoneResettableNamedResolutionFieldType["MX"] = "MX";
})(ZoneResettableNamedResolutionFieldType = exports.ZoneResettableNamedResolutionFieldType || (exports.ZoneResettableNamedResolutionFieldType = {}));
class Domain {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the DOMAIN service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain#GET)
     */
    ListAvailableServices(whoisOwner) {
        let url = `/domain?`;
        const queryParams = new query_params_1.default();
        if (whoisOwner) {
            queryParams.set('whoisOwner', whoisOwner);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Domain name administration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/domain/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Domain name administration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/domain/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * activateZone operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/activateZone#POST)
     */
    ActivateTheDNSZoneForThisDomain(serviceName, minimized) {
        let url = `/domain/${serviceName}/activateZone`;
        return this.client.request('POST', url, { minimized });
    }
    /**
     * authInfo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/authInfo#GET)
     */
    ReturnAuthInfoCodeIfTheDomainIsUnlocked(serviceName) {
        let url = `/domain/${serviceName}/authInfo`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/domain/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/obfuscatedEmails#GET)
     */
    RetrieveObfuscatedEmailsConfiguration(serviceName) {
        let url = `/domain/${serviceName}/configurations/obfuscatedEmails`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/obfuscatedEmails#PUT)
     */
    SaveANewObfuscatedEmailsConfiguration(contacts, serviceName) {
        let url = `/domain/${serviceName}/configurations/obfuscatedEmails`;
        return this.client.request('PUT', url, { contacts });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/obfuscatedEmails/refresh#POST)
     */
    RefreshAnObfuscatedEmailsConfiguration(contacts, serviceName) {
        let url = `/domain/${serviceName}/configurations/obfuscatedEmails/refresh`;
        return this.client.request('POST', url, { contacts });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/optin#GET)
     */
    RetrieveOptinConfiguration(serviceName) {
        let url = `/domain/${serviceName}/configurations/optin`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/configurations/optin#PUT)
     */
    SaveANewOptinConfiguration(optin, serviceName) {
        let url = `/domain/${serviceName}/configurations/optin`;
        return this.client.request('PUT', url, { optin });
    }
    /**
     * List the domain.DnssecKey objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/dsRecord#GET)
     */
    ListOfDomainDSRecords(serviceName, flags, status) {
        let url = `/domain/${serviceName}/dsRecord?`;
        const queryParams = new query_params_1.default();
        if (flags) {
            queryParams.set('flags', flags.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the domain.DnssecKey objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/dsRecord#POST)
     */
    UpdateDSRecords(keys, serviceName) {
        let url = `/domain/${serviceName}/dsRecord`;
        return this.client.request('POST', url, { keys });
    }
    /**
     * Domain's DNSSEC Key [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/dsRecord/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<DomainDnssecKey> {
      let url = `/domain/${serviceName}/dsRecord/${id}`
  
      return this.client.request<DomainDnssecKey>('GET', url)
    }
    */
    /**
     * refresh operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/email/obfuscated/refresh#POST)
     */
    RegenerateTheObfuscatedEmailAddress(contactType, serviceName) {
        let url = `/domain/${serviceName}/email/obfuscated/refresh`;
        return this.client.request('POST', url, { contactType });
    }
    /**
     * List the domain.GlueRecord objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord#GET)
     */
    ListOfGlueRecord(serviceName, host) {
        let url = `/domain/${serviceName}/glueRecord?`;
        const queryParams = new query_params_1.default();
        if (host) {
            queryParams.set('host', host);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the domain.GlueRecord objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord#POST)
     */
    CreateAGlueRecord(host, ips, serviceName) {
        let url = `/domain/${serviceName}/glueRecord`;
        return this.client.request('POST', url, { host, ips });
    }
    /**
     * Glue record [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord/%7Bhost%7D#GET)
     */
    /*
    GetThisObjectProperties(host: string, serviceName: string): Promise<DomainGlueRecord> {
      let url = `/domain/${serviceName}/glueRecord/${host}`
  
      return this.client.request<DomainGlueRecord>('GET', url)
    }
    */
    /**
     * Glue record [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord/%7Bhost%7D#DELETE)
     */
    DeleteTheGlueRecord(host, serviceName) {
        let url = `/domain/${serviceName}/glueRecord/${host}`;
        return this.client.request('DELETE', url);
    }
    /**
     * update operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/glueRecord/%7Bhost%7D/update#POST)
     */
    UpdateTheGlueRecord(host, ips, serviceName) {
        let url = `/domain/${serviceName}/glueRecord/${host}/update`;
        return this.client.request('POST', url, { ips });
    }
    /**
     * List the domain.CurrentNameServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer#GET)
     */
    ListOfCurrentNameServers(serviceName) {
        let url = `/domain/${serviceName}/nameServer`;
        return this.client.request('GET', url);
    }
    /**
     * List the domain.CurrentNameServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer#POST)
     */
    AddNewNameServer(nameServer, serviceName) {
        let url = `/domain/${serviceName}/nameServer`;
        return this.client.request('POST', url, { nameServer });
    }
    /**
     * CurrentNameServer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<DomainCurrentNameServer> {
      let url = `/domain/${serviceName}/nameServer/${id}`
  
      return this.client.request<DomainCurrentNameServer>('GET', url)
    }
    */
    /**
     * CurrentNameServer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer/%7Bid%7D#DELETE)
     */
    DeleteANameServer(id, serviceName) {
        let url = `/domain/${serviceName}/nameServer/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServer/%7Bid%7D/status#POST)
     */
    GetNameServerStatus(id, serviceName) {
        let url = `/domain/${serviceName}/nameServer/${id}/status`;
        return this.client.request('POST', url);
    }
    /**
     * update operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/nameServers/update#POST)
     */
    UpdateDNSServers(nameServers, serviceName) {
        let url = `/domain/${serviceName}/nameServers/update`;
        return this.client.request('POST', url, { nameServers });
    }
    /**
     * List the domain.Option objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/option#GET)
     */
    ListOfDomainOptions(serviceName) {
        let url = `/domain/${serviceName}/option`;
        return this.client.request('GET', url);
    }
    /**
     * Information about the options of a domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/option/%7Boption%7D#GET)
     */
    /*
    GetThisObjectProperties(option: DomainDomainOption, serviceName: string): Promise<DomainOption> {
      let url = `/domain/${serviceName}/option/${option}`
  
      return this.client.request<DomainOption>('GET', url)
    }
    */
    /**
     * Information about the options of a domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/option/%7Boption%7D#DELETE)
     */
    ReleaseAGivenOption(option, serviceName) {
        let url = `/domain/${serviceName}/option/${option}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the domain.Owo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo#GET)
     */
    ListOfWhoisObfuscators(serviceName, field) {
        let url = `/domain/${serviceName}/owo?`;
        const queryParams = new query_params_1.default();
        if (field) {
            queryParams.set('field', field.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the domain.Owo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo#POST)
     */
    AddWhoisObfuscators(fields, serviceName) {
        let url = `/domain/${serviceName}/owo`;
        return this.client.request('POST', url, { fields });
    }
    /**
     * Obfuscate whois [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo/%7Bfield%7D#GET)
     */
    /*
    GetThisObjectProperties(field: DomainWhoisObfuscatorFields, serviceName: string): Promise<DomainOwo> {
      let url = `/domain/${serviceName}/owo/${field}`
  
      return this.client.request<DomainOwo>('GET', url)
    }
    */
    /**
     * Obfuscate whois [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/owo/%7Bfield%7D#DELETE)
     */
    DeleteAWhoisObfuscator(field, serviceName) {
        let url = `/domain/${serviceName}/owo/${field}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/rules/emailsObfuscation#GET)
     */
    RetrieveEmailsObfuscationRule(serviceName) {
        let url = `/domain/${serviceName}/rules/emailsObfuscation`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/rules/optin#GET)
     */
    RetrieveOptinRule(serviceName) {
        let url = `/domain/${serviceName}/rules/optin`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/domain/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/domain/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the domain.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task#GET)
     */
    DomainPendingTasks(serviceName, _function, status) {
        let url = `/domain/${serviceName}/task?`;
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
     * Tasks associated to domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<DomainTask> {
      let url = `/domain/${serviceName}/task/${id}`
  
      return this.client.request<DomainTask>('GET', url)
    }
    */
    /**
     * accelerate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D/accelerate#POST)
     */
    AccelerateTheTask(id, serviceName) {
        let url = `/domain/${serviceName}/task/${id}/accelerate`;
        return this.client.request('POST', url);
    }
    /**
     * cancel operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D/cancel#POST)
     */
    CancelTheTask(id, serviceName) {
        let url = `/domain/${serviceName}/task/${id}/cancel`;
        return this.client.request('POST', url);
    }
    /**
     * relaunch operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/task/%7Bid%7D/relaunch#POST)
     */
    RelaunchTheTask(id, serviceName) {
        let url = `/domain/${serviceName}/task/${id}/relaunch`;
        return this.client.request('POST', url);
    }
    /**
     * ukOutgoingTransfer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/ukOutgoingTransfer#POST)
     */
    ScheduleAnOutgoingTransferTaskForThisDomainUkOnly(serviceName, tag) {
        let url = `/domain/${serviceName}/ukOutgoingTransfer`;
        return this.client.request('POST', url, { tag });
    }
    /**
     * ukRegistrars operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/%7BserviceName%7D/ukRegistrars#GET)
     */
    ReturnTheListOfAllUkRegistrars(serviceName) {
        let url = `/domain/${serviceName}/ukRegistrars`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicAssociationInformation#GET)
     */
    RetrieveAllAssociationInformationAccordingToAfnic() {
        let url = `/domain/data/afnicAssociationInformation`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicAssociationInformation#POST)
     */
    PostANewAssociationInformationAccordingToAfnic(contactId, declarationDate, publicationDate, publicationNumber, publicationPageNumber) {
        let url = `/domain/data/afnicAssociationInformation`;
        return this.client.request('POST', url, { contactId, declarationDate, publicationDate, publicationNumber, publicationPageNumber });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicAssociationInformation/%7BassociationInformationId%7D#GET)
     */
    RetrieveAnAssociationInformationAccordingToAfnic(associationInformationId) {
        let url = `/domain/data/afnicAssociationInformation/${associationInformationId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicCorporationTrademarkInformation#GET)
     */
    RetrieveAllCorporationTrademarkInformationAccordingToAfnic() {
        let url = `/domain/data/afnicCorporationTrademarkInformation`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicCorporationTrademarkInformation#POST)
     */
    PostANewCorporationTrademarkInformationAccordingToAfnic(contactId, inpiNumber, inpiTrademarkOwner) {
        let url = `/domain/data/afnicCorporationTrademarkInformation`;
        return this.client.request('POST', url, { contactId, inpiNumber, inpiTrademarkOwner });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/afnicCorporationTrademarkInformation/%7BafnicCorporationTrademarkId%7D#GET)
     */
    RetrieveACorporationTrademarkInformationAccordingToAfnic(afnicCorporationTrademarkId) {
        let url = `/domain/data/afnicCorporationTrademarkInformation/${afnicCorporationTrademarkId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/claimNotice#GET)
     */
    RetrieveClaimNoticesAssociatedToADomain(domain) {
        let url = `/domain/data/claimNotice?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/extension#GET)
     */
    ListAllTheExtensionsForASpecificCountry(country) {
        let url = `/domain/data/extension?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/proContact#GET)
     */
    RetrieveAllYourProContact() {
        let url = `/domain/data/proContact`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/proContact#POST)
     */
    PostNewInformationAboutProContactInformation(authority, authorityWebsite, jobDescription, licenseNumber, contactId) {
        let url = `/domain/data/proContact`;
        return this.client.request('POST', url, { authority, authorityWebsite, jobDescription, licenseNumber, contactId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/proContact/%7BproContactId%7D#GET)
     */
    RetrieveInformationAboutAProContact(proContactId) {
        let url = `/domain/data/proContact/${proContactId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd#GET)
     */
    ListAllYourSMDFiles(protectedLabelsLabel) {
        let url = `/domain/data/smd?`;
        const queryParams = new query_params_1.default();
        if (protectedLabelsLabel) {
            queryParams.set('protectedLabels.label', protectedLabelsLabel);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd#POST)
     */
    PostANewSMDFile(data) {
        let url = `/domain/data/smd`;
        return this.client.request('POST', url, { data });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd/%7BsmdId%7D#GET)
     */
    RetrieveInformationAboutASMDFile(smdId) {
        let url = `/domain/data/smd/${smdId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd/%7BsmdId%7D#PUT)
     */
    ModifyAnExistingSMDFile(data, smdId) {
        let url = `/domain/data/smd/${smdId}`;
        return this.client.request('PUT', url, { data });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/data/smd/%7BsmdId%7D#DELETE)
     */
    DeleteASMDFile(smdId) {
        let url = `/domain/data/smd/${smdId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Rules for creating a domain [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/rules#GET)
     */
    ListAllTheRulesForASpecificCartIditemId(cartId, itemId) {
        let url = `/domain/rules?`;
        const queryParams = new query_params_1.default();
        if (cartId) {
            queryParams.set('cartId', cartId);
        }
        if (itemId) {
            queryParams.set('itemId', itemId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operations about the DNS service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/domain/zone`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Zone dns Management [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D#GET)
     */
    /*
    GetThisObjectProperties(zoneName: string): Promise<DomainzoneZone> {
      let url = `/domain/zone/${zoneName}`
  
      return this.client.request<DomainzoneZone>('GET', url)
    }
    */
    /**
     * Change the contacts of this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/changeContact#POST)
     */
    /*
    LaunchAContactChangeProcedure(zoneName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
      let url = `/domain/zone/${zoneName}/changeContact`
  
      return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
    }
    */
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(token, zoneName, commentary, futureUse, reason) {
        let url = `/domain/zone/${zoneName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * Manage Dnssec for this zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dnssec#GET)
     */
    /*
    GetThisObjectProperties(zoneName: string): Promise<DomainzoneDnssec> {
      let url = `/domain/zone/${zoneName}/dnssec`
  
      return this.client.request<DomainzoneDnssec>('GET', url)
    }
    */
    /**
     * Manage Dnssec for this zone [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dnssec#POST)
     */
    EnableDnssec(zoneName) {
        let url = `/domain/zone/${zoneName}/dnssec`;
        return this.client.request('POST', url);
    }
    /**
     * Manage Dnssec for this zone [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dnssec#DELETE)
     */
    DisableDnssec(zoneName) {
        let url = `/domain/zone/${zoneName}/dnssec`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the domain.zone.DynHostLogin objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login#GET)
     */
    DynHostLogins(zoneName, login, subDomain) {
        let url = `/domain/zone/${zoneName}/dynHost/login?`;
        const queryParams = new query_params_1.default();
        if (login) {
            queryParams.set('login', login);
        }
        if (subDomain) {
            queryParams.set('subDomain', subDomain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the domain.zone.DynHostLogin objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login#POST)
     */
    CreateANewDynHostLogin(loginSuffix, password, subDomain, zoneName) {
        let url = `/domain/zone/${zoneName}/dynHost/login`;
        return this.client.request('POST', url, { loginSuffix, password, subDomain });
    }
    /**
     * Manage DynHost login [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D#GET)
     */
    /*
    GetThisObjectProperties(login: string, zoneName: string): Promise<DomainzoneDynHostLogin> {
      let url = `/domain/zone/${zoneName}/dynHost/login/${login}`
  
      return this.client.request<DomainzoneDynHostLogin>('GET', url)
    }
    */
    /**
     * Manage DynHost login [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D#PUT)
     */
    /*
    AlterThisObjectProperties(login: string, zoneName: string, payload: DomainzoneDynHostLogin): Promise<void> {
      let url = `/domain/zone/${zoneName}/dynHost/login/${login}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Manage DynHost login [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D#DELETE)
     */
    DeleteADynHostLogin(login, zoneName) {
        let url = `/domain/zone/${zoneName}/dynHost/login/${login}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/login/%7Blogin%7D/changePassword#POST)
     */
    ChangePasswordOfTheDynHostLogin(login, password, zoneName) {
        let url = `/domain/zone/${zoneName}/dynHost/login/${login}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * List the domain.zone.DynHostRecord objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record#GET)
     */
    DynHostRecords(zoneName, subDomain) {
        let url = `/domain/zone/${zoneName}/dynHost/record?`;
        const queryParams = new query_params_1.default();
        if (subDomain) {
            queryParams.set('subDomain', subDomain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the domain.zone.DynHostRecord objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record#POST)
     */
    CreateANewDynHostRecordDontForgetToRefreshTheZone(ip, zoneName, subDomain) {
        let url = `/domain/zone/${zoneName}/dynHost/record`;
        return this.client.request('POST', url, { ip, subDomain });
    }
    /**
     * DynHost record [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneDynHostRecord> {
      let url = `/domain/zone/${zoneName}/dynHost/record/${id}`
  
      return this.client.request<DomainzoneDynHostRecord>('GET', url)
    }
    */
    /**
     * DynHost record [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, zoneName: string, payload: DomainzoneDynHostRecord): Promise<void> {
      let url = `/domain/zone/${zoneName}/dynHost/record/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * DynHost record [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/dynHost/record/%7Bid%7D#DELETE)
     */
    DeleteADynHostRecordDontForgetToRefreshTheZone(id, zoneName) {
        let url = `/domain/zone/${zoneName}/dynHost/record/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * export operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/export#GET)
     */
    ExportZone(zoneName) {
        let url = `/domain/zone/${zoneName}/export`;
        return this.client.request('GET', url);
    }
    /**
     * List the domain.zone.ZoneRestorePoint objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/history#GET)
     */
    ZoneRestorePoints(zoneName, creationDateFrom, creationDateTo) {
        let url = `/domain/zone/${zoneName}/history?`;
        const queryParams = new query_params_1.default();
        if (creationDateFrom) {
            queryParams.set('creationDate.from', creationDateFrom.toString());
        }
        if (creationDateTo) {
            queryParams.set('creationDate.to', creationDateTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Zone restore point [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/history/%7BcreationDate%7D#GET)
     */
    /*
    GetThisObjectProperties(creationDate: string, zoneName: string): Promise<DomainzoneZoneRestorePoint> {
      let url = `/domain/zone/${zoneName}/history/${creationDate}`
  
      return this.client.request<DomainzoneZoneRestorePoint>('GET', url)
    }
    */
    /**
     * restore operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/history/%7BcreationDate%7D/restore#POST)
     */
    RestoreTheDNSZone(creationDate, zoneName) {
        let url = `/domain/zone/${zoneName}/history/${creationDate}/restore`;
        return this.client.request('POST', url);
    }
    /**
     * import operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/import#POST)
     */
    ImportZone(zoneFile, zoneName) {
        let url = `/domain/zone/${zoneName}/import`;
        return this.client.request('POST', url, { zoneFile });
    }
    /**
     * List the domain.zone.Record objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record#GET)
     */
    RecordsOfTheZone(zoneName, fieldType, subDomain) {
        let url = `/domain/zone/${zoneName}/record?`;
        const queryParams = new query_params_1.default();
        if (fieldType) {
            queryParams.set('fieldType', fieldType.toString());
        }
        if (subDomain) {
            queryParams.set('subDomain', subDomain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the domain.zone.Record objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record#POST)
     */
    CreateANewDNSRecordDontForgetToRefreshTheZone(fieldType, target, zoneName, subDomain, ttl) {
        let url = `/domain/zone/${zoneName}/record`;
        return this.client.request('POST', url, { fieldType, target, subDomain, ttl });
    }
    /**
     * Zone resource records [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneRecord> {
      let url = `/domain/zone/${zoneName}/record/${id}`
  
      return this.client.request<DomainzoneRecord>('GET', url)
    }
    */
    /**
     * Zone resource records [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, zoneName: string, payload: DomainzoneRecord): Promise<void> {
      let url = `/domain/zone/${zoneName}/record/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Zone resource records [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/record/%7Bid%7D#DELETE)
     */
    DeleteADNSRecordDontForgetToRefreshTheZone(id, zoneName) {
        let url = `/domain/zone/${zoneName}/record/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the domain.zone.Redirection objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection#GET)
     */
    Redirections(zoneName, subDomain) {
        let url = `/domain/zone/${zoneName}/redirection?`;
        const queryParams = new query_params_1.default();
        if (subDomain) {
            queryParams.set('subDomain', subDomain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the domain.zone.Redirection objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection#POST)
     */
    CreateANewRedirectionDontForgetToRefreshTheZone(target, type, zoneName, description, keywords, subDomain, title) {
        let url = `/domain/zone/${zoneName}/redirection`;
        return this.client.request('POST', url, { target, type, description, keywords, subDomain, title });
    }
    /**
     * Redirection [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneRedirection> {
      let url = `/domain/zone/${zoneName}/redirection/${id}`
  
      return this.client.request<DomainzoneRedirection>('GET', url)
    }
    */
    /**
     * Redirection [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, zoneName: string, payload: DomainzoneRedirection): Promise<void> {
      let url = `/domain/zone/${zoneName}/redirection/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Redirection [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/redirection/%7Bid%7D#DELETE)
     */
    DeleteARedirectionDontForgetToRefreshTheZone(id, zoneName) {
        let url = `/domain/zone/${zoneName}/redirection/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * refresh operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/refresh#POST)
     */
    ApplyZoneModificationOnDNSServers(zoneName) {
        let url = `/domain/zone/${zoneName}/refresh`;
        return this.client.request('POST', url);
    }
    /**
     * reset operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/reset#POST)
     */
    ResetTheDNSZone(zoneName, DnsRecords, minimized) {
        let url = `/domain/zone/${zoneName}/reset`;
        return this.client.request('POST', url, { DnsRecords, minimized });
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(zoneName: string): Promise<ServicesService> {
      let url = `/domain/zone/${zoneName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(zoneName: string, payload: ServicesService): Promise<void> {
      let url = `/domain/zone/${zoneName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Zone Start Of Authority [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/soa#GET)
     */
    /*
    GetThisObjectProperties(zoneName: string): Promise<DomainzoneSoa> {
      let url = `/domain/zone/${zoneName}/soa`
  
      return this.client.request<DomainzoneSoa>('GET', url)
    }
    */
    /**
     * Zone Start Of Authority [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/soa#PUT)
     */
    /*
    AlterThisObjectProperties(zoneName: string, payload: DomainzoneSoa): Promise<void> {
      let url = `/domain/zone/${zoneName}/soa`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/status#GET)
     */
    ZoneStatus(zoneName) {
        let url = `/domain/zone/${zoneName}/status`;
        return this.client.request('GET', url);
    }
    /**
     * List the domain.zone.Task objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task#GET)
     */
    /*
    DomainPendingTasks(zoneName: string, _function?: string, status?: DomainOperationStatus): Promise<number[]> {
      let url = `/domain/zone/${zoneName}/task?`
  
      const queryParams = new QueryParams()
      if (_function) { queryParams.set('function', _function) }
      if (status) { queryParams.set('status', status.toString()) }
  
      return this.client.request<number[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Tasks associated to a zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, zoneName: string): Promise<DomainzoneTask> {
      let url = `/domain/zone/${zoneName}/task/${id}`
  
      return this.client.request<DomainzoneTask>('GET', url)
    }
    */
    /**
     * accelerate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D/accelerate#POST)
     */
    /*
    AccelerateTheTask(id: number, zoneName: string): Promise<void> {
      let url = `/domain/zone/${zoneName}/task/${id}/accelerate`
  
      return this.client.request<void>('POST', url)
    }
    */
    /**
     * cancel operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D/cancel#POST)
     */
    /*
    CancelTheTask(id: number, zoneName: string): Promise<void> {
      let url = `/domain/zone/${zoneName}/task/${id}/cancel`
  
      return this.client.request<void>('POST', url)
    }
    */
    /**
     * relaunch operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/task/%7Bid%7D/relaunch#POST)
     */
    /*
    RelaunchTheTask(id: number, zoneName: string): Promise<void> {
      let url = `/domain/zone/${zoneName}/task/${id}/relaunch`
  
      return this.client.request<void>('POST', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/domain/zone/%7BzoneName%7D/terminate#POST)
     */
    TerminateYourService(zoneName) {
        let url = `/domain/zone/${zoneName}/terminate`;
        return this.client.request('POST', url);
    }
}
exports.Domain = Domain;
//# sourceMappingURL=domain.js.map