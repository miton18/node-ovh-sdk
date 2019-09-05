"use strict";
// GENERATED SDK for dedicatedCloud API
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
 * All states an Allowed Network can be in
 */
var DedicatedCloudAllowedNetworkState;
(function (DedicatedCloudAllowedNetworkState) {
    DedicatedCloudAllowedNetworkState["ALLOWED"] = "allowed";
    DedicatedCloudAllowedNetworkState["TODELETE"] = "toDelete";
    DedicatedCloudAllowedNetworkState["TOUPDATE"] = "toUpdate";
})(DedicatedCloudAllowedNetworkState = exports.DedicatedCloudAllowedNetworkState || (exports.DedicatedCloudAllowedNetworkState = {}));
/*
 * All the possible Days of Backup
 */
var DedicatedCloudbackupBackupDays;
(function (DedicatedCloudbackupBackupDays) {
    DedicatedCloudbackupBackupDays["FRIDAY"] = "Friday";
    DedicatedCloudbackupBackupDays["MONDAY"] = "Monday";
    DedicatedCloudbackupBackupDays["SATURDAY"] = "Saturday";
    DedicatedCloudbackupBackupDays["SUNDAY"] = "Sunday";
    DedicatedCloudbackupBackupDays["THURSDAY"] = "Thursday";
    DedicatedCloudbackupBackupDays["TUESDAY"] = "Tuesday";
    DedicatedCloudbackupBackupDays["WEDNESDAY"] = "Wednesday";
})(DedicatedCloudbackupBackupDays = exports.DedicatedCloudbackupBackupDays || (exports.DedicatedCloudbackupBackupDays = {}));
/*
 * All the type of a restore point
 */
var DedicatedCloudbackupBackupType;
(function (DedicatedCloudbackupBackupType) {
    DedicatedCloudbackupBackupType["FULL"] = "full";
    DedicatedCloudbackupBackupType["INCREMENTAL"] = "incremental";
})(DedicatedCloudbackupBackupType = exports.DedicatedCloudbackupBackupType || (exports.DedicatedCloudbackupBackupType = {}));
/*
 * State of the backup job
 */
var DedicatedCloudbackupJobState;
(function (DedicatedCloudbackupJobState) {
    DedicatedCloudbackupJobState["FAILED"] = "failed";
    DedicatedCloudbackupJobState["RUNNING"] = "running";
    DedicatedCloudbackupJobState["STOPPED"] = "stopped";
    DedicatedCloudbackupJobState["STOPPING"] = "stopping";
    DedicatedCloudbackupJobState["SUCCESS"] = "success";
    DedicatedCloudbackupJobState["UNKNOWN"] = "unknown";
    DedicatedCloudbackupJobState["WARNING"] = "warning";
})(DedicatedCloudbackupJobState = exports.DedicatedCloudbackupJobState || (exports.DedicatedCloudbackupJobState = {}));
/*
 * All the offer type of the backup
 */
var DedicatedCloudbackupOfferType;
(function (DedicatedCloudbackupOfferType) {
    DedicatedCloudbackupOfferType["ADVANCED"] = "advanced";
    DedicatedCloudbackupOfferType["BACKUP"] = "backup";
    DedicatedCloudbackupOfferType["CLASSIC"] = "classic";
    DedicatedCloudbackupOfferType["LEGACY"] = "legacy";
})(DedicatedCloudbackupOfferType = exports.DedicatedCloudbackupOfferType || (exports.DedicatedCloudbackupOfferType = {}));
/*
 * All the state of the backup
 */
var DedicatedCloudbackupState;
(function (DedicatedCloudbackupState) {
    DedicatedCloudbackupState["DELETING"] = "deleting";
    DedicatedCloudbackupState["DELIVERED"] = "delivered";
    DedicatedCloudbackupState["DISABLED"] = "disabled";
    DedicatedCloudbackupState["DISABLING"] = "disabling";
    DedicatedCloudbackupState["ENABLING"] = "enabling";
    DedicatedCloudbackupState["ERROR"] = "error";
    DedicatedCloudbackupState["MIGRATING"] = "migrating";
    DedicatedCloudbackupState["PENDING"] = "pending";
    DedicatedCloudbackupState["REMOVED"] = "removed";
    DedicatedCloudbackupState["STOPPING"] = "stopping";
    DedicatedCloudbackupState["TOCREATE"] = "toCreate";
    DedicatedCloudbackupState["TODELETE"] = "toDelete";
    DedicatedCloudbackupState["TODISABLE"] = "toDisable";
    DedicatedCloudbackupState["TOENABLE"] = "toEnable";
    DedicatedCloudbackupState["TOSTOP"] = "toStop";
    DedicatedCloudbackupState["UNKNOWN"] = "unknown";
})(DedicatedCloudbackupState = exports.DedicatedCloudbackupState || (exports.DedicatedCloudbackupState = {}));
/*
 * All states a Dedicated Cloud Backup can be in
 */
var DedicatedCloudBackupState;
(function (DedicatedCloudBackupState) {
    DedicatedCloudBackupState["DISABLED"] = "disabled";
    DedicatedCloudBackupState["DISABLING"] = "disabling";
    DedicatedCloudBackupState["ENABLED"] = "enabled";
    DedicatedCloudBackupState["ENABLING"] = "enabling";
    DedicatedCloudBackupState["ERROR"] = "error";
    DedicatedCloudBackupState["REMOVING"] = "removing";
})(DedicatedCloudBackupState = exports.DedicatedCloudBackupState || (exports.DedicatedCloudBackupState = {}));
/*
 * The billing type of this Dedicated Cloud
 */
var DedicatedCloudBillingType;
(function (DedicatedCloudBillingType) {
    DedicatedCloudBillingType["DEMO"] = "demo";
    DedicatedCloudBillingType["MONTHLY"] = "monthly";
})(DedicatedCloudBillingType = exports.DedicatedCloudBillingType || (exports.DedicatedCloudBillingType = {}));
/*
 * The Regional Internet Registry of this IP block
 */
var DedicatedCloudBlockRegister;
(function (DedicatedCloudBlockRegister) {
    DedicatedCloudBlockRegister["ARIN"] = "arin";
    DedicatedCloudBlockRegister["RIPE"] = "ripe";
})(DedicatedCloudBlockRegister = exports.DedicatedCloudBlockRegister || (exports.DedicatedCloudBlockRegister = {}));
/*
 * All Dedicated Cloud feature status available
 */
var DedicatedCloudcapabilitiesFeatureStatus;
(function (DedicatedCloudcapabilitiesFeatureStatus) {
    DedicatedCloudcapabilitiesFeatureStatus["ACTIVE"] = "active";
    DedicatedCloudcapabilitiesFeatureStatus["COMINGSOON"] = "comingSoon";
    DedicatedCloudcapabilitiesFeatureStatus["NO"] = "no";
})(DedicatedCloudcapabilitiesFeatureStatus = exports.DedicatedCloudcapabilitiesFeatureStatus || (exports.DedicatedCloudcapabilitiesFeatureStatus = {}));
/*
 * The commercial name component
 */
var DedicatedCloudCommercialName;
(function (DedicatedCloudCommercialName) {
    DedicatedCloudCommercialName["DC"] = "DC";
    DedicatedCloudCommercialName["DC_ANCIENT"] = "DC-ANCIENT";
    DedicatedCloudCommercialName["DC_ANCIENT_HDS"] = "DC-ANCIENT-HDS";
    DedicatedCloudCommercialName["DC_ANCIENT_HIPAA"] = "DC-ANCIENT-HIPAA";
    DedicatedCloudCommercialName["DC_ANCIENT_NSX"] = "DC-ANCIENT-NSX";
    DedicatedCloudCommercialName["DC_ANCIENT_NSX_VROPS"] = "DC-ANCIENT-NSX-VROPS";
    DedicatedCloudCommercialName["DC_ANCIENT_PCIDSS"] = "DC-ANCIENT-PCIDSS";
    DedicatedCloudCommercialName["DC_ANCIENT_UNKNOWN"] = "DC-ANCIENT-UNKNOWN";
    DedicatedCloudCommercialName["DC_ANCIENT_VROPS"] = "DC-ANCIENT-VROPS";
    DedicatedCloudCommercialName["DC_HDS"] = "DC-HDS";
    DedicatedCloudCommercialName["DC_HIPAA"] = "DC-HIPAA";
    DedicatedCloudCommercialName["DC_LEGACY"] = "DC-LEGACY";
    DedicatedCloudCommercialName["DC_LEGACY_HDS"] = "DC-LEGACY-HDS";
    DedicatedCloudCommercialName["DC_LEGACY_HIPAA"] = "DC-LEGACY-HIPAA";
    DedicatedCloudCommercialName["DC_LEGACY_NSX"] = "DC-LEGACY-NSX";
    DedicatedCloudCommercialName["DC_LEGACY_NSX_VROPS"] = "DC-LEGACY-NSX-VROPS";
    DedicatedCloudCommercialName["DC_LEGACY_PCIDSS"] = "DC-LEGACY-PCIDSS";
    DedicatedCloudCommercialName["DC_LEGACY_UNKNOWN"] = "DC-LEGACY-UNKNOWN";
    DedicatedCloudCommercialName["DC_LEGACY_VROPS"] = "DC-LEGACY-VROPS";
    DedicatedCloudCommercialName["DC_NSX"] = "DC-NSX";
    DedicatedCloudCommercialName["DC_NSX_VROPS"] = "DC-NSX-VROPS";
    DedicatedCloudCommercialName["DC_PCIDSS"] = "DC-PCIDSS";
    DedicatedCloudCommercialName["DC_UNKNOWN"] = "DC-UNKNOWN";
    DedicatedCloudCommercialName["DC_VROPS"] = "DC-VROPS";
    DedicatedCloudCommercialName["SDDC"] = "SDDC";
    DedicatedCloudCommercialName["SDDC_HDS"] = "SDDC-HDS";
    DedicatedCloudCommercialName["SDDC_HIPAA"] = "SDDC-HIPAA";
    DedicatedCloudCommercialName["SDDC_LEGACY"] = "SDDC-LEGACY";
    DedicatedCloudCommercialName["SDDC_LEGACY_HDS"] = "SDDC-LEGACY-HDS";
    DedicatedCloudCommercialName["SDDC_LEGACY_HIPAA"] = "SDDC-LEGACY-HIPAA";
    DedicatedCloudCommercialName["SDDC_LEGACY_PCIDSS"] = "SDDC-LEGACY-PCIDSS";
    DedicatedCloudCommercialName["SDDC_LEGACY_UNKNOWN"] = "SDDC-LEGACY-UNKNOWN";
    DedicatedCloudCommercialName["SDDC_LEGACY_VROPS"] = "SDDC-LEGACY-VROPS";
    DedicatedCloudCommercialName["SDDC_LEGACY_VROPS_WITHOUT_NSX"] = "SDDC-LEGACY-VROPS-WITHOUT-NSX";
    DedicatedCloudCommercialName["SDDC_LEGACY_WITHOUT_NSX"] = "SDDC-LEGACY-WITHOUT-NSX";
    DedicatedCloudCommercialName["SDDC_PCIDSS"] = "SDDC-PCIDSS";
    DedicatedCloudCommercialName["SDDC_UNKNOWN"] = "SDDC-UNKNOWN";
    DedicatedCloudCommercialName["SDDC_VROPS"] = "SDDC-VROPS";
    DedicatedCloudCommercialName["SDDC_VROPS_WITHOUT_NSX"] = "SDDC-VROPS-WITHOUT-NSX";
    DedicatedCloudCommercialName["SDDC_WITHOUT_NSX"] = "SDDC-WITHOUT-NSX";
    DedicatedCloudCommercialName["UNKNOWN"] = "UNKNOWN";
    DedicatedCloudCommercialName["UNKNOWN_HDS"] = "UNKNOWN-HDS";
    DedicatedCloudCommercialName["UNKNOWN_HIPAA"] = "UNKNOWN-HIPAA";
    DedicatedCloudCommercialName["UNKNOWN_NSX"] = "UNKNOWN-NSX";
    DedicatedCloudCommercialName["UNKNOWN_NSX_VROPS"] = "UNKNOWN-NSX-VROPS";
    DedicatedCloudCommercialName["UNKNOWN_PCIDSS"] = "UNKNOWN-PCIDSS";
    DedicatedCloudCommercialName["UNKNOWN_UNKNOWN"] = "UNKNOWN-UNKNOWN";
    DedicatedCloudCommercialName["UNKNOWN_VROPS"] = "UNKNOWN-VROPS";
})(DedicatedCloudCommercialName = exports.DedicatedCloudCommercialName || (exports.DedicatedCloudCommercialName = {}));
/*
 * Disaster Recovery Plan Types
 */
var DedicatedClouddisasterRecoveryDrpType;
(function (DedicatedClouddisasterRecoveryDrpType) {
    DedicatedClouddisasterRecoveryDrpType["ONPREMISE"] = "onPremise";
    DedicatedClouddisasterRecoveryDrpType["OVH"] = "ovh";
})(DedicatedClouddisasterRecoveryDrpType = exports.DedicatedClouddisasterRecoveryDrpType || (exports.DedicatedClouddisasterRecoveryDrpType = {}));
/*
 * Site manager configured mode
 */
var DedicatedClouddisasterRecoverySiteRole;
(function (DedicatedClouddisasterRecoverySiteRole) {
    DedicatedClouddisasterRecoverySiteRole["PRIMARY"] = "primary";
    DedicatedClouddisasterRecoverySiteRole["SECONDARY"] = "secondary";
    DedicatedClouddisasterRecoverySiteRole["SINGLE"] = "single";
})(DedicatedClouddisasterRecoverySiteRole = exports.DedicatedClouddisasterRecoverySiteRole || (exports.DedicatedClouddisasterRecoverySiteRole = {}));
/*
 * Site manager hosting type
 */
var DedicatedClouddisasterRecoverySiteType;
(function (DedicatedClouddisasterRecoverySiteType) {
    DedicatedClouddisasterRecoverySiteType["ONPREMISE"] = "onPremise";
    DedicatedClouddisasterRecoverySiteType["OVHPRIVATECLOUD"] = "ovhPrivateCloud";
})(DedicatedClouddisasterRecoverySiteType = exports.DedicatedClouddisasterRecoverySiteType || (exports.DedicatedClouddisasterRecoverySiteType = {}));
/*
 * Zerto VPN configuration state
 */
var DedicatedClouddisasterRecoveryVpnConfigState;
(function (DedicatedClouddisasterRecoveryVpnConfigState) {
    DedicatedClouddisasterRecoveryVpnConfigState["CONFIGURED"] = "configured";
    DedicatedClouddisasterRecoveryVpnConfigState["CONFIGURING"] = "configuring";
    DedicatedClouddisasterRecoveryVpnConfigState["ERROR"] = "error";
    DedicatedClouddisasterRecoveryVpnConfigState["NOTCONFIGURED"] = "notConfigured";
    DedicatedClouddisasterRecoveryVpnConfigState["TUNNELERROR"] = "tunnelError";
})(DedicatedClouddisasterRecoveryVpnConfigState = exports.DedicatedClouddisasterRecoveryVpnConfigState || (exports.DedicatedClouddisasterRecoveryVpnConfigState = {}));
/*
 * All states a Dedicated Cloud Filer can be in
 */
var DedicatedCloudfilerState;
(function (DedicatedCloudfilerState) {
    DedicatedCloudfilerState["ADDING"] = "adding";
    DedicatedCloudfilerState["DELIVERED"] = "delivered";
    DedicatedCloudfilerState["ERROR"] = "error";
    DedicatedCloudfilerState["REMOVING"] = "removing";
    DedicatedCloudfilerState["UNKNOWN"] = "unknown";
})(DedicatedCloudfilerState = exports.DedicatedCloudfilerState || (exports.DedicatedCloudfilerState = {}));
/*
 * All states a Dedicated Cloud Host can be in
 */
var DedicatedCloudhostState;
(function (DedicatedCloudhostState) {
    DedicatedCloudhostState["ADDING"] = "adding";
    DedicatedCloudhostState["DELIVERED"] = "delivered";
    DedicatedCloudhostState["ERROR"] = "error";
    DedicatedCloudhostState["REMOVING"] = "removing";
    DedicatedCloudhostState["UNKNOWN"] = "unknown";
})(DedicatedCloudhostState = exports.DedicatedCloudhostState || (exports.DedicatedCloudhostState = {}));
/*
 * The connection state of the host
 */
var DedicatedCloudhostSystemConnectionState;
(function (DedicatedCloudhostSystemConnectionState) {
    DedicatedCloudhostSystemConnectionState["CONNECTED"] = "connected";
    DedicatedCloudhostSystemConnectionState["DISCONNECTED"] = "disconnected";
    DedicatedCloudhostSystemConnectionState["NOTRESPONDING"] = "notResponding";
})(DedicatedCloudhostSystemConnectionState = exports.DedicatedCloudhostSystemConnectionState || (exports.DedicatedCloudhostSystemConnectionState = {}));
/*
 * All countries in which an Ip Block may be ordered
 */
var DedicatedCloudIpCountries;
(function (DedicatedCloudIpCountries) {
    DedicatedCloudIpCountries["BE"] = "be";
    DedicatedCloudIpCountries["CA"] = "ca";
    DedicatedCloudIpCountries["CH"] = "ch";
    DedicatedCloudIpCountries["CZ"] = "cz";
    DedicatedCloudIpCountries["DE"] = "de";
    DedicatedCloudIpCountries["ES"] = "es";
    DedicatedCloudIpCountries["FI"] = "fi";
    DedicatedCloudIpCountries["FR"] = "fr";
    DedicatedCloudIpCountries["GB"] = "gb";
    DedicatedCloudIpCountries["IE"] = "ie";
    DedicatedCloudIpCountries["IT"] = "it";
    DedicatedCloudIpCountries["LT"] = "lt";
    DedicatedCloudIpCountries["NL"] = "nl";
    DedicatedCloudIpCountries["PL"] = "pl";
    DedicatedCloudIpCountries["PT"] = "pt";
    DedicatedCloudIpCountries["US"] = "us";
})(DedicatedCloudIpCountries = exports.DedicatedCloudIpCountries || (exports.DedicatedCloudIpCountries = {}));
/*
 * IP address usage
 */
var DedicatedCloudipUsage;
(function (DedicatedCloudipUsage) {
    DedicatedCloudipUsage["RESERVED"] = "reserved";
    DedicatedCloudipUsage["VM"] = "vm";
})(DedicatedCloudipUsage = exports.DedicatedCloudipUsage || (exports.DedicatedCloudipUsage = {}));
/*
 * The management interface of this Dedicated Cloud
 */
var DedicatedCloudManagementInterface;
(function (DedicatedCloudManagementInterface) {
    DedicatedCloudManagementInterface["AZURE"] = "azure";
    DedicatedCloudManagementInterface["OPENSTACK"] = "openstack";
    DedicatedCloudManagementInterface["SYSTEMCENTER"] = "systemcenter";
    DedicatedCloudManagementInterface["VCLOUD"] = "vcloud";
    DedicatedCloudManagementInterface["VCSA"] = "vcsa";
    DedicatedCloudManagementInterface["VSPHERE"] = "vsphere";
})(DedicatedCloudManagementInterface = exports.DedicatedCloudManagementInterface || (exports.DedicatedCloudManagementInterface = {}));
/*
 * States of a Private Cloud option
 */
var DedicatedCloudoptionState;
(function (DedicatedCloudoptionState) {
    DedicatedCloudoptionState["DISABLED"] = "disabled";
    DedicatedCloudoptionState["DISABLING"] = "disabling";
    DedicatedCloudoptionState["ENABLED"] = "enabled";
    DedicatedCloudoptionState["ENABLING"] = "enabling";
    DedicatedCloudoptionState["ERROR"] = "error";
    DedicatedCloudoptionState["MIGRATING"] = "migrating";
    DedicatedCloudoptionState["UNKNOWN"] = "unknown";
})(DedicatedCloudoptionState = exports.DedicatedCloudoptionState || (exports.DedicatedCloudoptionState = {}));
/*
 * States of a Private Cloud option
 */
var DedicatedCloudoptionAccessNetworkState;
(function (DedicatedCloudoptionAccessNetworkState) {
    DedicatedCloudoptionAccessNetworkState["CREATING"] = "creating";
    DedicatedCloudoptionAccessNetworkState["DELETING"] = "deleting";
    DedicatedCloudoptionAccessNetworkState["DELIVERED"] = "delivered";
    DedicatedCloudoptionAccessNetworkState["ERROR"] = "error";
    DedicatedCloudoptionAccessNetworkState["TOCREATE"] = "toCreate";
    DedicatedCloudoptionAccessNetworkState["TODELETE"] = "toDelete";
    DedicatedCloudoptionAccessNetworkState["TOUPDATE"] = "toUpdate";
    DedicatedCloudoptionAccessNetworkState["UNKNOWN"] = "unknown";
    DedicatedCloudoptionAccessNetworkState["UPDATING"] = "updating";
})(DedicatedCloudoptionAccessNetworkState = exports.DedicatedCloudoptionAccessNetworkState || (exports.DedicatedCloudoptionAccessNetworkState = {}));
/*
 * The billing type of this Dedicated Cloud ressource
 */
var DedicatedCloudressourcesBillingType;
(function (DedicatedCloudressourcesBillingType) {
    DedicatedCloudressourcesBillingType["FREESPARE"] = "freeSpare";
    DedicatedCloudressourcesBillingType["HOURLY"] = "hourly";
    DedicatedCloudressourcesBillingType["MONTHLY"] = "monthly";
    DedicatedCloudressourcesBillingType["UNDEFINED"] = "undefined";
})(DedicatedCloudressourcesBillingType = exports.DedicatedCloudressourcesBillingType || (exports.DedicatedCloudressourcesBillingType = {}));
/*
 * The resource type of this Dedicated Cloud ressource
 */
var DedicatedCloudressourcesResourceType;
(function (DedicatedCloudressourcesResourceType) {
    DedicatedCloudressourcesResourceType["HOST"] = "host";
    DedicatedCloudressourcesResourceType["STORAGE"] = "storage";
})(DedicatedCloudressourcesResourceType = exports.DedicatedCloudressourcesResourceType || (exports.DedicatedCloudressourcesResourceType = {}));
/*
 * Determine how this user can act on the Dedicated Cloud vLans or vxLans
 */
var DedicatedCloudrightNetworkRole;
(function (DedicatedCloudrightNetworkRole) {
    DedicatedCloudrightNetworkRole["ADMIN"] = "admin";
    DedicatedCloudrightNetworkRole["MANAGER"] = "manager";
    DedicatedCloudrightNetworkRole["NOACCESS"] = "noAccess";
    DedicatedCloudrightNetworkRole["READONLY"] = "readonly";
})(DedicatedCloudrightNetworkRole = exports.DedicatedCloudrightNetworkRole || (exports.DedicatedCloudrightNetworkRole = {}));
/*
 * All rights a Dedicated Cloud user may be associated with
 */
var DedicatedCloudrightRight;
(function (DedicatedCloudrightRight) {
    DedicatedCloudrightRight["ADMIN"] = "admin";
    DedicatedCloudrightRight["DISABLED"] = "disabled";
    DedicatedCloudrightRight["READONLY"] = "readonly";
    DedicatedCloudrightRight["READWRITE"] = "readwrite";
})(DedicatedCloudrightRight = exports.DedicatedCloudrightRight || (exports.DedicatedCloudrightRight = {}));
/*
 * All types of objects handled in objectRights
 */
var DedicatedCloudrightUserObjectRightType;
(function (DedicatedCloudrightUserObjectRightType) {
    DedicatedCloudrightUserObjectRightType["CLUSTER"] = "cluster";
    DedicatedCloudrightUserObjectRightType["DATASTORE"] = "datastore";
    DedicatedCloudrightUserObjectRightType["DVPORTGROUP"] = "dvportgroup";
    DedicatedCloudrightUserObjectRightType["FOLDER"] = "folder";
    DedicatedCloudrightUserObjectRightType["POOL"] = "pool";
    DedicatedCloudrightUserObjectRightType["VM"] = "vm";
})(DedicatedCloudrightUserObjectRightType = exports.DedicatedCloudrightUserObjectRightType || (exports.DedicatedCloudrightUserObjectRightType = {}));
/*
 * Determine how this user can act on the Dedicated Cloud vmNetwork
 */
var DedicatedCloudrightVmNetworkRole;
(function (DedicatedCloudrightVmNetworkRole) {
    DedicatedCloudrightVmNetworkRole["ADMIN"] = "admin";
    DedicatedCloudrightVmNetworkRole["NOACCESS"] = "noAccess";
    DedicatedCloudrightVmNetworkRole["READONLY"] = "readonly";
})(DedicatedCloudrightVmNetworkRole = exports.DedicatedCloudrightVmNetworkRole || (exports.DedicatedCloudrightVmNetworkRole = {}));
/*
 * List of possible service pack
 */
var DedicatedCloudservicePack;
(function (DedicatedCloudservicePack) {
    DedicatedCloudservicePack["DEFAULT"] = "default";
    DedicatedCloudservicePack["HDS"] = "hds";
    DedicatedCloudservicePack["HIPAA"] = "hipaa";
    DedicatedCloudservicePack["LEGACY"] = "legacy";
    DedicatedCloudservicePack["NSX"] = "nsx";
    DedicatedCloudservicePack["NSX_AND_VROPS"] = "nsx-and-vrops";
    DedicatedCloudservicePack["PCIDSS"] = "pcidss";
    DedicatedCloudservicePack["VROPS"] = "vrops";
})(DedicatedCloudservicePack = exports.DedicatedCloudservicePack || (exports.DedicatedCloudservicePack = {}));
/*
 * List of possible state of the service pack
 */
var DedicatedCloudservicePackState;
(function (DedicatedCloudservicePackState) {
    DedicatedCloudservicePackState["ACTIVATING"] = "activating";
    DedicatedCloudservicePackState["ACTIVE"] = "active";
    DedicatedCloudservicePackState["ERROR"] = "error";
    DedicatedCloudservicePackState["WAITINGFORCUSTOMER"] = "waitingForCustomer";
})(DedicatedCloudservicePackState = exports.DedicatedCloudservicePackState || (exports.DedicatedCloudservicePackState = {}));
/*
 * All states a Dedicated Cloud can be in
 */
var DedicatedCloudState;
(function (DedicatedCloudState) {
    DedicatedCloudState["AVAILABLE"] = "available";
    DedicatedCloudState["DELIVERED"] = "delivered";
    DedicatedCloudState["DISABLED"] = "disabled";
    DedicatedCloudState["DISABLING"] = "disabling";
    DedicatedCloudState["ERROR"] = "error";
    DedicatedCloudState["MIGRATING"] = "migrating";
    DedicatedCloudState["PROVISIONNING"] = "provisionning";
    DedicatedCloudState["RECYCLING"] = "recycling";
    DedicatedCloudState["RESERVED"] = "reserved";
    DedicatedCloudState["TODISABLE"] = "toDisable";
    DedicatedCloudState["TOPROVISION"] = "toProvision";
    DedicatedCloudState["TORECYCLE"] = "toRecycle";
    DedicatedCloudState["TOREMOVE"] = "toRemove";
    DedicatedCloudState["TOUNPROVISION"] = "toUnprovision";
    DedicatedCloudState["UNPROVISIONNING"] = "unprovisionning";
})(DedicatedCloudState = exports.DedicatedCloudState || (exports.DedicatedCloudState = {}));
/*
 * All states a Dedicated Cloud Task can be in
 */
var DedicatedCloudTaskState;
(function (DedicatedCloudTaskState) {
    DedicatedCloudTaskState["CANCELED"] = "canceled";
    DedicatedCloudTaskState["DOING"] = "doing";
    DedicatedCloudTaskState["DONE"] = "done";
    DedicatedCloudTaskState["ERROR"] = "error";
    DedicatedCloudTaskState["FIXING"] = "fixing";
    DedicatedCloudTaskState["TOCANCEL"] = "toCancel";
    DedicatedCloudTaskState["TOCREATE"] = "toCreate";
    DedicatedCloudTaskState["TODO"] = "todo";
    DedicatedCloudTaskState["UNKNOWN"] = "unknown";
    DedicatedCloudTaskState["WAITINGFORCHILDS"] = "waitingForChilds";
    DedicatedCloudTaskState["WAITINGTODO"] = "waitingTodo";
})(DedicatedCloudTaskState = exports.DedicatedCloudTaskState || (exports.DedicatedCloudTaskState = {}));
/*
 * All states a Dedicated Cloud two factor authentication whitelist can be in
 */
var DedicatedCloudTwoFAWhitelistState;
(function (DedicatedCloudTwoFAWhitelistState) {
    DedicatedCloudTwoFAWhitelistState["ENABLED"] = "enabled";
    DedicatedCloudTwoFAWhitelistState["ENABLING"] = "enabling";
    DedicatedCloudTwoFAWhitelistState["ERROR"] = "error";
    DedicatedCloudTwoFAWhitelistState["MIGRATING"] = "migrating";
    DedicatedCloudTwoFAWhitelistState["REMOVED"] = "removed";
    DedicatedCloudTwoFAWhitelistState["REMOVING"] = "removing";
})(DedicatedCloudTwoFAWhitelistState = exports.DedicatedCloudTwoFAWhitelistState || (exports.DedicatedCloudTwoFAWhitelistState = {}));
/*
 * All activation states a Dedicated Cloud User can have
 */
var DedicatedClouduserActivationState;
(function (DedicatedClouduserActivationState) {
    DedicatedClouduserActivationState["DISABLED"] = "disabled";
    DedicatedClouduserActivationState["DISABLING"] = "disabling";
    DedicatedClouduserActivationState["ENABLED"] = "enabled";
    DedicatedClouduserActivationState["ENABLING"] = "enabling";
    DedicatedClouduserActivationState["TODISABLE"] = "toDisable";
    DedicatedClouduserActivationState["TOENABLE"] = "toEnable";
})(DedicatedClouduserActivationState = exports.DedicatedClouduserActivationState || (exports.DedicatedClouduserActivationState = {}));
/*
 * All states a Dedicated Cloud User can be in
 */
var DedicatedClouduserState;
(function (DedicatedClouduserState) {
    DedicatedClouduserState["CREATING"] = "creating";
    DedicatedClouduserState["DELETING"] = "deleting";
    DedicatedClouduserState["DELIVERED"] = "delivered";
    DedicatedClouduserState["ERROR"] = "error";
})(DedicatedClouduserState = exports.DedicatedClouduserState || (exports.DedicatedClouduserState = {}));
/*
 * Open or restricted access to management interface ?
 */
var DedicatedCloudUserAccessPolicy;
(function (DedicatedCloudUserAccessPolicy) {
    DedicatedCloudUserAccessPolicy["FILTERED"] = "filtered";
    DedicatedCloudUserAccessPolicy["OPEN"] = "open";
})(DedicatedCloudUserAccessPolicy = exports.DedicatedCloudUserAccessPolicy || (exports.DedicatedCloudUserAccessPolicy = {}));
/*
 * Which user will be disconnected first in case of quota of maximum connection is reached
 */
var DedicatedCloudUserLogoutPolicy;
(function (DedicatedCloudUserLogoutPolicy) {
    DedicatedCloudUserLogoutPolicy["FIRST"] = "first";
    DedicatedCloudUserLogoutPolicy["LAST"] = "last";
})(DedicatedCloudUserLogoutPolicy = exports.DedicatedCloudUserLogoutPolicy || (exports.DedicatedCloudUserLogoutPolicy = {}));
/*
 * Dedicated Cloud vendors objects types
 */
var DedicatedCloudVendorObjectType;
(function (DedicatedCloudVendorObjectType) {
    DedicatedCloudVendorObjectType["CLUSTER"] = "cluster";
    DedicatedCloudVendorObjectType["DATACENTER"] = "datacenter";
    DedicatedCloudVendorObjectType["FILER"] = "filer";
    DedicatedCloudVendorObjectType["HOST"] = "host";
    DedicatedCloudVendorObjectType["VM"] = "vm";
})(DedicatedCloudVendorObjectType = exports.DedicatedCloudVendorObjectType || (exports.DedicatedCloudVendorObjectType = {}));
/*
 * The connectable virtual device status
 */
var DedicatedCloudvirtualDeviceConnectInfoStatus;
(function (DedicatedCloudvirtualDeviceConnectInfoStatus) {
    DedicatedCloudvirtualDeviceConnectInfoStatus["OK"] = "ok";
    DedicatedCloudvirtualDeviceConnectInfoStatus["RECOVERABLEERROR"] = "recoverableError";
    DedicatedCloudvirtualDeviceConnectInfoStatus["UNRECOVERABLEERROR"] = "unrecoverableError";
    DedicatedCloudvirtualDeviceConnectInfoStatus["UNTRIED"] = "untried";
})(DedicatedCloudvirtualDeviceConnectInfoStatus = exports.DedicatedCloudvirtualDeviceConnectInfoStatus || (exports.DedicatedCloudvirtualDeviceConnectInfoStatus = {}));
/*
 * The fault tolerance state of the virtual machine
 */
var DedicatedCloudvirtualMachineFaultToleranceState;
(function (DedicatedCloudvirtualMachineFaultToleranceState) {
    DedicatedCloudvirtualMachineFaultToleranceState["DISABLED"] = "disabled";
    DedicatedCloudvirtualMachineFaultToleranceState["ENABLED"] = "enabled";
    DedicatedCloudvirtualMachineFaultToleranceState["NEEDSECONDARY"] = "needSecondary";
    DedicatedCloudvirtualMachineFaultToleranceState["NOTCONFIGURED"] = "notConfigured";
    DedicatedCloudvirtualMachineFaultToleranceState["RUNNING"] = "running";
    DedicatedCloudvirtualMachineFaultToleranceState["STARTING"] = "starting";
})(DedicatedCloudvirtualMachineFaultToleranceState = exports.DedicatedCloudvirtualMachineFaultToleranceState || (exports.DedicatedCloudvirtualMachineFaultToleranceState = {}));
/*
 * The power state of the virtual machine
 */
var DedicatedCloudvirtualMachinePowerState;
(function (DedicatedCloudvirtualMachinePowerState) {
    DedicatedCloudvirtualMachinePowerState["DELETED"] = "deleted";
    DedicatedCloudvirtualMachinePowerState["POWEREDOFF"] = "poweredOff";
    DedicatedCloudvirtualMachinePowerState["POWEREDON"] = "poweredOn";
    DedicatedCloudvirtualMachinePowerState["SUSPENDED"] = "suspended";
})(DedicatedCloudvirtualMachinePowerState = exports.DedicatedCloudvirtualMachinePowerState || (exports.DedicatedCloudvirtualMachinePowerState = {}));
/*
 * All states a Dedicated Cloud Vlan can be in
 */
var DedicatedCloudvlanState;
(function (DedicatedCloudvlanState) {
    DedicatedCloudvlanState["AVAILABLE"] = "available";
    DedicatedCloudvlanState["DELIVERED"] = "delivered";
    DedicatedCloudvlanState["DISABLED"] = "disabled";
    DedicatedCloudvlanState["ERROR"] = "error";
    DedicatedCloudvlanState["REMOVING"] = "removing";
    DedicatedCloudvlanState["RESERVED"] = "reserved";
})(DedicatedCloudvlanState = exports.DedicatedCloudvlanState || (exports.DedicatedCloudvlanState = {}));
/*
 * This Dedicated Cloud vlan type
 */
var DedicatedCloudvlanType;
(function (DedicatedCloudvlanType) {
    DedicatedCloudvlanType["ADMIN"] = "admin";
    DedicatedCloudvlanType["FREE"] = "free";
    DedicatedCloudvlanType["PAID"] = "paid";
})(DedicatedCloudvlanType = exports.DedicatedCloudvlanType || (exports.DedicatedCloudvlanType = {}));
/*
 * The type of the network backing
 */
var DedicatedCloudvmNetworkBackingType;
(function (DedicatedCloudvmNetworkBackingType) {
    DedicatedCloudvmNetworkBackingType["DVS"] = "DVS";
    DedicatedCloudvmNetworkBackingType["VSS"] = "VSS";
})(DedicatedCloudvmNetworkBackingType = exports.DedicatedCloudvmNetworkBackingType || (exports.DedicatedCloudvmNetworkBackingType = {}));
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
 * All states a vRack Task can be in
 */
var VrackTaskStatus;
(function (VrackTaskStatus) {
    VrackTaskStatus["CANCELLED"] = "cancelled";
    VrackTaskStatus["DOING"] = "doing";
    VrackTaskStatus["DONE"] = "done";
    VrackTaskStatus["INIT"] = "init";
    VrackTaskStatus["TODO"] = "todo";
})(VrackTaskStatus = exports.VrackTaskStatus || (exports.VrackTaskStatus = {}));
class DedicatedCloud {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the PCC service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud#GET)
     */
    ListAvailableServices() {
        let url = `/dedicatedCloud`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/dedicatedCloud/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/dedicatedCloud/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the dedicatedCloud.AllowedNetwork objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork#GET)
     */
    NetworksAllowedToAccessToThisPrivateCloudManagementInterface(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/allowedNetwork`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.AllowedNetwork objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork#POST)
     */
    CreateANewAllowedNetworkForYourDedicatedCloud(network, serviceName, description) {
        let url = `/dedicatedCloud/${serviceName}/allowedNetwork`;
        return this.client.request('POST', url, { network, description });
    }
    /**
     * Network allowed to connect to the Private Cloud management interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D#GET)
     */
    /*
    GetThisObjectProperties(networkAccessId: number, serviceName: string): Promise<DedicatedCloudAllowedNetwork> {
      let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`
  
      return this.client.request<DedicatedCloudAllowedNetwork>('GET', url)
    }
    */
    /**
     * Network allowed to connect to the Private Cloud management interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(networkAccessId: number, serviceName: string, payload: DedicatedCloudAllowedNetwork): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`
  
      return this.client.request<DedicatedCloudTask>('PUT', url, payload)
    }
    */
    /**
     * Network allowed to connect to the Private Cloud management interface [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D#DELETE)
     */
    RemoveThisNetworkFromYourPrivateCloud(networkAccessId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task#GET)
     */
    TasksAssociatedWithThisAllowedNetwork(networkAccessId, serviceName, name, state) {
        let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(networkAccessId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate, networkAccessId, serviceName, taskId) {
        let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task/${taskId}/changeMaintenanceExecutionDate`;
        return this.client.request('POST', url, { executionDate });
    }
    /**
     * resetTaskState operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/allowedNetwork/%7BnetworkAccessId%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    RestartTaskInError(networkAccessId, reason, serviceName, taskId) {
        let url = `/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}/task/${taskId}/resetTaskState`;
        return this.client.request('POST', url, { reason });
    }
    /**
     * The features available in your Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/capabilities#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudCapabilities> {
      let url = `/dedicatedCloud/${serviceName}/capabilities`
  
      return this.client.request<DedicatedCloudCapabilities>('GET', url)
    }
    */
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/dedicatedCloud/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/changeProperties#POST)
     */
    UpdateThisPrivateCloudProperties(serviceName, description, sslV3, userAccessPolicy, userLimitConcurrentSession, userLogoutPolicy, userSessionTimeout) {
        let url = `/dedicatedCloud/${serviceName}/changeProperties`;
        return this.client.request('POST', url, { description, sslV3, userAccessPolicy, userLimitConcurrentSession, userLogoutPolicy, userSessionTimeout });
    }
    /**
     * compliance operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/commercialRange/compliance#GET)
     */
    GetTheNameOfTheCommercialRangesCompliantWithYourPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/commercialRange/compliance`;
        return this.client.request('GET', url);
    }
    /**
     * orderable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/commercialRange/orderable#GET)
     */
    GetTheNameOfTheCommercialRangesOrderableInYourPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/commercialRange/orderable`;
        return this.client.request('GET', url);
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/dedicatedCloud/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the dedicatedCloud.Datacenter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter#GET)
     */
    DatacentersAssociatedWithThisPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.Datacenter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter#POST)
     */
    AddANewDatacenterInYourPrivateCloud(commercialRangeName, serviceName, vrackName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter`;
        return this.client.request('POST', url, { commercialRangeName, vrackName });
    }
    /**
     * Private Cloud Datacenter [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, serviceName: string): Promise<DedicatedCloudDatacenter> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}`
  
      return this.client.request<DedicatedCloudDatacenter>('GET', url)
    }
    */
    /**
     * Private Cloud Datacenter [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(datacenterId: number, serviceName: string, payload: DedicatedCloudDatacenter): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}`
  
      return this.client.request<DedicatedCloudTask>('PUT', url, payload)
    }
    */
    /**
     * Private Cloud Datacenter [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D#DELETE)
     */
    RemoveThisDatacenterFromYourPrivateCloudItHasToBeEmptyInOrderToBeRemovable(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Backup configured on a given Datacenter [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, serviceName: string): Promise<DedicatedCloudBackup> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup`
  
      return this.client.request<DedicatedCloudBackup>('GET', url)
    }
    */
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup/changeProperties#POST)
     */
    EditTheBackupOnAPrivateCloud(backupDurationInReport, backupOffer, backupSizeInReport, datacenterId, diskSizeInReport, fullDayInReport, restorePointInReport, serviceName, mailAddress, scheduleHour) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/changeProperties`;
        return this.client.request('POST', url, { backupDurationInReport, backupOffer, backupSizeInReport, diskSizeInReport, fullDayInReport, restorePointInReport, mailAddress, scheduleHour });
    }
    /**
     * disable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup/disable#POST)
     */
    DisableBackupSolutionOnAPrivateCloud(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/backup/enable#POST)
     */
    EnableBackupSolutionOnAPrivateCloud(datacenterId, serviceName, backupOffer) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/backup/enable`;
        return this.client.request('POST', url, { backupOffer });
    }
    /**
     * disable operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/disable#POST)
     */
    DisableZerto(datacenterId, secondaryDatacenterId, secondaryServiceName, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/disable`;
        return this.client.request('POST', url, { secondaryDatacenterId, secondaryServiceName });
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/enable#POST)
     */
    EnableZertoReplicationBetween2OVHDedicatedClouds(datacenterId, primaryEndpointIp, secondaryDatacenterId, secondaryEndpointIp, secondaryServiceName, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/enable`;
        return this.client.request('POST', url, { primaryEndpointIp, secondaryDatacenterId, secondaryEndpointIp, secondaryServiceName });
    }
    /**
     * generateZsspPassword operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/generateZsspPassword#POST)
     */
    GenerateANewPasswordForZertoSelfServicePortalAndReceiveItByEmail(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/generateZsspPassword`;
        return this.client.request('POST', url);
    }
    /**
     * state operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zerto/state#POST)
     */
    GetTheCurrentStateOfZertoDeploymentOnYourDedicatedCloud(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zerto/state`;
        return this.client.request('POST', url);
    }
    /**
     * configureVpn operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/configureVpn#POST)
     */
    ConfigureVpnBetweenYourOVHPrivateCloudAndYourOnsiteInfrastructure(datacenterId, preSharedKey, remoteEndpointInternalIp, remoteEndpointPublicIp, remoteZvmInternalIp, serviceName, remoteVraNetwork) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/configureVpn`;
        return this.client.request('POST', url, { preSharedKey, remoteEndpointInternalIp, remoteEndpointPublicIp, remoteZvmInternalIp, remoteVraNetwork });
    }
    /**
     * defaultLocalVraNetwork operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/defaultLocalVraNetwork#GET)
     */
    GetTheDefaultLocalVraNetworkSubnetSuggestedByOVH(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork`;
        return this.client.request('GET', url);
    }
    /**
     * disable operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/disable#POST)
     */
    DisableSingleSiteZerto(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/disasterRecovery/zertoSingle/enable#POST)
     */
    EnableZertoReplicationBetweenYourOVHPrivateCloudAndYourOnsiteInfrastructure(datacenterId, localVraNetwork, ovhEndpointIp, remoteVraNetwork, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/disasterRecovery/zertoSingle/enable`;
        return this.client.request('POST', url, { localVraNetwork, ovhEndpointIp, remoteVraNetwork });
    }
    /**
     * List the dedicatedCloud.Filer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer#GET)
     */
    FilersAssociatedWithThisDatacenter(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud Filer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, filerId: number, serviceName: string): Promise<DedicatedCloudFiler> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}`
  
      return this.client.request<DedicatedCloudFiler>('GET', url)
    }
    */
    /**
     * hourlyConsumption operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/hourlyConsumption#GET)
     */
    HourlyConsumptionAssociatedWithThisFiler(datacenterId, filerId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/hourlyConsumption`;
        return this.client.request('GET', url);
    }
    /**
     * remove operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/remove#POST)
     */
    RemoveTheFilerFromYourPrivateCloud(datacenterId, filerId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/remove`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task#GET)
     */
    TasksAssociatedWithThisFiler(datacenterId, filerId, serviceName, name, state) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    /*
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(datacenterId: number, executionDate: string, filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task/${taskId}/changeMaintenanceExecutionDate`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
    }
    */
    /**
     * resetTaskState operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    /*
    RestartTaskInError(datacenterId: number, filerId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/filer/${filerId}/task/${taskId}/resetTaskState`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {reason})
    }
    */
    /**
     * List the dedicatedCloud.Host objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host#GET)
     */
    HostsAssociatedWithThisDatacenter(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud Host [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, hostId: number, serviceName: string): Promise<DedicatedCloudHost> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}`
  
      return this.client.request<DedicatedCloudHost>('GET', url)
    }
    */
    /**
     * addHostSpare operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/addHostSpare#POST)
     */
    AddASpareHostToYourPrivateCloud(datacenterId, hostId, reason, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/addHostSpare`;
        return this.client.request('POST', url, { reason });
    }
    /**
     * hourlyConsumption operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/hourlyConsumption#GET)
     */
    HourlyConsumptionAssociatedWithThisHost(datacenterId, hostId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/hourlyConsumption`;
        return this.client.request('GET', url);
    }
    /**
     * remove operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/remove#POST)
     */
    RemoveTheHostFromYourPrivateCloud(datacenterId, hostId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/remove`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task#GET)
     */
    TasksAssociatedWithThisHost(datacenterId, hostId, serviceName, name, state) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, hostId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    /*
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(datacenterId: number, executionDate: string, hostId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task/${taskId}/changeMaintenanceExecutionDate`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
    }
    */
    /**
     * resetTaskState operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    /*
    RestartTaskInError(datacenterId: number, hostId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}/task/${taskId}/resetTaskState`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {reason})
    }
    */
    /**
     * orderableFilerProfiles operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderableFilerProfiles#GET)
     */
    ListAvailableFilersInAGivenPrivateCloudDatacenter(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderableFilerProfiles`;
        return this.client.request('GET', url);
    }
    /**
     * orderableHostProfiles operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderableHostProfiles#GET)
     */
    ListAvailableHostsInAGivenPrivateCloudDatacenter(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderableHostProfiles`;
        return this.client.request('GET', url);
    }
    /**
     * orderNewFilerHourly operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderNewFilerHourly#POST)
     */
    OrderANewHourlyFilerInAGivenDatacenter(datacenterId, name, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderNewFilerHourly`;
        return this.client.request('POST', url, { name });
    }
    /**
     * orderNewHostHourly operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/orderNewHostHourly#POST)
     */
    OrderANewHourlyHostInAGivenDatacenter(datacenterId, name, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/orderNewHostHourly`;
        return this.client.request('POST', url, { name });
    }
    /**
     * Private management gateway deployed in your Private Cloud to block all public access [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/privateGateway#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, serviceName: string): Promise<DedicatedCloudPrivateGateway> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway`
  
      return this.client.request<DedicatedCloudPrivateGateway>('GET', url)
    }
    */
    /**
     * disable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/privateGateway/disable#POST)
     */
    RemoveThePrivateGatewayInYourPrivateCloudAndOpenPublicAccess(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/privateGateway/enable#POST)
     */
    DeployAPrivateGatewayOnYourPrivateCloudToBlockAllPublicAccess(datacenterId, ip, netmask, portgroup, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/privateGateway/enable`;
        return this.client.request('POST', url, { ip, netmask, portgroup });
    }
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task#GET)
     */
    TasksAssociatedWithThisDatacenter(datacenterId, serviceName, name, state) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    /*
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(datacenterId: number, executionDate: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task/${taskId}/changeMaintenanceExecutionDate`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
    }
    */
    /**
     * resetTaskState operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    /*
    RestartTaskInError(datacenterId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/task/${taskId}/resetTaskState`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {reason})
    }
    */
    /**
     * List the dedicatedCloud.Vm objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm#GET)
     */
    VirtualMachinessAssociatedWithThisDatacenter(datacenterId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud Virtual Machine [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudVm> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}`
  
      return this.client.request<DedicatedCloudVm>('GET', url)
    }
    */
    /**
     * Private Cloud Backup Job [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, serviceName: string, vmId: number): Promise<DedicatedCloudBackupJob> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob`
  
      return this.client.request<DedicatedCloudBackupJob>('GET', url)
    }
    */
    /**
     * Private Cloud Backup Job [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob#POST)
     */
    EditABackupJob(backupDays, datacenterId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob`;
        return this.client.request('POST', url, { backupDays });
    }
    /**
     * disable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/disable#POST)
     */
    DisableBackupSolutionOnThisVirtualMachine(datacenterId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/enable#POST)
     */
    EnableBackupSolutionOnThisVirtualMachine(backupDays, datacenterId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/enable`;
        return this.client.request('POST', url, { backupDays });
    }
    /**
     * List the dedicatedCloud.RestorePoint objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/restorePoints#GET)
     */
    RestorePointAssociatedToThisBackupJob(datacenterId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/restorePoints`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud Restore Point [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/restorePoints/%7BrestorePointId%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenterId: number, restorePointId: number, serviceName: string, vmId: number): Promise<DedicatedCloudRestorePoint> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/restorePoints/${restorePointId}`
  
      return this.client.request<DedicatedCloudRestorePoint>('GET', url)
    }
    */
    /**
     * restore operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/backupJob/restorePoints/%7BrestorePointId%7D/restore#POST)
     */
    RestoreThisRestorePoint(datacenterId, filerId, restorePointId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/backupJob/restorePoints/${restorePointId}/restore`;
        return this.client.request('POST', url, { filerId });
    }
    /**
     * disableBackup operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/disableBackup#POST)
     */
    DisableBackupOnThisVirtualMachine(datacenterId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/disableBackup`;
        return this.client.request('POST', url);
    }
    /**
     * editBackup operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/editBackup#POST)
     */
    EditBackupOnThisVirtualMachine(backupDays, datacenterId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/editBackup`;
        return this.client.request('POST', url, { backupDays });
    }
    /**
     * enableBackup operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/enableBackup#POST)
     */
    EnableBackupOnThisVirtualMachine(backupDays, datacenterId, serviceName, vmId) {
        let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/enableBackup`;
        return this.client.request('POST', url, { backupDays });
    }
    /**
     * restoreBackup operations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/vm/%7BvmId%7D/restoreBackup#POST)
     */
    /*
    RestoreThisRestorePoint(datacenterId: number, filerId: number, restorePointId: number, serviceName: string, vmId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vm/${vmId}/restoreBackup`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {filerId, restorePointId})
    }
    */
    /**
     * Private Cloud Active Directory Federation option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudFederation> {
      let url = `/dedicatedCloud/${serviceName}/federation`
  
      return this.client.request<DedicatedCloudFederation>('GET', url)
    }
    */
    /**
     * List the dedicatedCloud.FederationAccessNetwork objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory#GET)
     */
    ActiveDirectoriesLinkedToThisPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.FederationAccessNetwork objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory#POST)
     */
    AddANewOptionUserAccess(baseDnForGroups, baseDnForUsers, domainAlias, domainName, ip, password, serviceName, username, description) {
        let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory`;
        return this.client.request('POST', url, { baseDnForGroups, baseDnForUsers, domainAlias, domainName, ip, password, username, description });
    }
    /**
     * Private Cloud federation option access network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D#GET)
     */
    /*
    GetThisObjectProperties(activeDirectoryId: number, serviceName: string): Promise<DedicatedCloudFederationAccessNetwork> {
      let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}`
  
      return this.client.request<DedicatedCloudFederationAccessNetwork>('GET', url)
    }
    */
    /**
     * Private Cloud federation option access network [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D#DELETE)
     */
    RemoveAnOptionUserAccess(activeDirectoryId, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D/changeProperties#POST)
     */
    ChangeActiveDirectoryProperties(activeDirectoryId, password, serviceName, username, description) {
        let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}/changeProperties`;
        return this.client.request('POST', url, { password, username, description });
    }
    /**
     * grantActiveDirectoryUser operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/federation/activeDirectory/%7BactiveDirectoryId%7D/grantActiveDirectoryUser#POST)
     */
    GrantActiveDirectoryUser(activeDirectoryId, serviceName, username) {
        let url = `/dedicatedCloud/${serviceName}/federation/activeDirectory/${activeDirectoryId}/grantActiveDirectoryUser`;
        return this.client.request('POST', url, { username });
    }
    /**
     * List the dedicatedCloud.Filer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer#GET)
     */
    FilersMountedOnAllDatacentersOfYourPrivateCloudVsphere(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/filer`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud Filer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D#GET)
     */
    /*
    GetThisObjectProperties(filerId: number, serviceName: string): Promise<DedicatedCloudFiler> {
      let url = `/dedicatedCloud/${serviceName}/filer/${filerId}`
  
      return this.client.request<DedicatedCloudFiler>('GET', url)
    }
    */
    /**
     * hourlyConsumption operations [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/hourlyConsumption#GET)
     */
    /*
    HourlyConsumptionAssociatedWithThisFiler(filerId: number, serviceName: string): Promise<DedicatedCloudfilerHourlyConsumption> {
      let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/hourlyConsumption`
  
      return this.client.request<DedicatedCloudfilerHourlyConsumption>('GET', url)
    }
    */
    /**
     * remove operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/remove#POST)
     */
    /*
    RemoveTheFilerFromYourPrivateCloud(filerId: number, serviceName: string): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/remove`
  
      return this.client.request<DedicatedCloudTask>('POST', url)
    }
    */
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task#GET)
     */
    /*
    TasksAssociatedWithThisFiler(filerId: number, serviceName: string, name?: string, state?: DedicatedCloudTaskState): Promise<number[]> {
      let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task?`
  
      const queryParams = new QueryParams()
      if (name) { queryParams.set('name', name) }
      if (state) { queryParams.set('state', state.toString()) }
  
      return this.client.request<number[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    /*
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, filerId: number, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task/${taskId}/changeMaintenanceExecutionDate`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
    }
    */
    /**
     * resetTaskState operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/filer/%7BfilerId%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    /*
    RestartTaskInError(filerId: number, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/filer/${filerId}/task/${taskId}/resetTaskState`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {reason})
    }
    */
    /**
     * globalTasks operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/globalTasks#GET)
     */
    GetFilteredTasksAssociatedWithThisPrivateCloud(serviceName, datacenterId, endDateFrom, endDateTo, executionDateFrom, executionDateTo, filerId, hostId, lastModificationDateFrom, lastModificationDateTo, name, networkAccessId, orderId, parentTaskId, state, userId, vlanId) {
        let url = `/dedicatedCloud/${serviceName}/globalTasks?`;
        const queryParams = new query_params_1.default();
        if (datacenterId) {
            queryParams.set('datacenterId', datacenterId.toString());
        }
        if (endDateFrom) {
            queryParams.set('endDate.from', endDateFrom.toString());
        }
        if (endDateTo) {
            queryParams.set('endDate.to', endDateTo.toString());
        }
        if (executionDateFrom) {
            queryParams.set('executionDate.from', executionDateFrom.toString());
        }
        if (executionDateTo) {
            queryParams.set('executionDate.to', executionDateTo.toString());
        }
        if (filerId) {
            queryParams.set('filerId', filerId.toString());
        }
        if (hostId) {
            queryParams.set('hostId', hostId.toString());
        }
        if (lastModificationDateFrom) {
            queryParams.set('lastModificationDate.from', lastModificationDateFrom.toString());
        }
        if (lastModificationDateTo) {
            queryParams.set('lastModificationDate.to', lastModificationDateTo.toString());
        }
        if (name) {
            queryParams.set('name', name);
        }
        if (networkAccessId) {
            queryParams.set('networkAccessId', networkAccessId.toString());
        }
        if (orderId) {
            queryParams.set('orderId', orderId.toString());
        }
        if (parentTaskId) {
            queryParams.set('parentTaskId', parentTaskId.toString());
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        if (userId) {
            queryParams.set('userId', userId.toString());
        }
        if (vlanId) {
            queryParams.set('vlanId', vlanId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Private Cloud VMware Hybrid Cloud Extension option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudHcx> {
      let url = `/dedicatedCloud/${serviceName}/hcx`
  
      return this.client.request<DedicatedCloudHcx>('GET', url)
    }
    */
    /**
     * canBeDisabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/canBeDisabled#GET)
     */
    CheckIfVMwareHybridCloudExtensionOptionCanBeDisabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hcx/canBeDisabled`;
        return this.client.request('GET', url);
    }
    /**
     * canBeEnabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/canBeEnabled#GET)
     */
    CheckIfVMwareHybridCloudExtensionOptionCanBeEnabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hcx/canBeEnabled`;
        return this.client.request('GET', url);
    }
    /**
     * disable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/disable#POST)
     */
    DisableVMwareHybridCloudExtensionOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hcx/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hcx/enable#POST)
     */
    EnableVMwareHybridCloudExtensionOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hcx/enable`;
        return this.client.request('POST', url);
    }
    /**
     * The Private Cloud Hds option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudHds> {
      let url = `/dedicatedCloud/${serviceName}/hds`
  
      return this.client.request<DedicatedCloudHds>('GET', url)
    }
    */
    /**
     * canBeDisabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/canBeDisabled#GET)
     */
    CheckIfHdsOptionCanBeDisabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hds/canBeDisabled`;
        return this.client.request('GET', url);
    }
    /**
     * canBeEnabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/canBeEnabled#GET)
     */
    CheckIfHdsOptionCanBeEnabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hds/canBeEnabled`;
        return this.client.request('GET', url);
    }
    /**
     * disable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/disable#POST)
     */
    DisableHdsOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hds/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hds/enable#POST)
     */
    EnableHdsOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hds/enable`;
        return this.client.request('POST', url);
    }
    /**
     * The Private Cloud Hipaa option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudHipaa> {
      let url = `/dedicatedCloud/${serviceName}/hipaa`
  
      return this.client.request<DedicatedCloudHipaa>('GET', url)
    }
    */
    /**
     * canBeDisabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/canBeDisabled#GET)
     */
    CheckIfHipaaOptionCanBeDisabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hipaa/canBeDisabled`;
        return this.client.request('GET', url);
    }
    /**
     * canBeEnabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/canBeEnabled#GET)
     */
    CheckIfHipaaOptionCanBeEnabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hipaa/canBeEnabled`;
        return this.client.request('GET', url);
    }
    /**
     * disable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/disable#POST)
     */
    DisableHipaaOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hipaa/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/hipaa/enable#POST)
     */
    EnableHipaaOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/hipaa/enable`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.Ip objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip#GET)
     */
    IpBlocksAttachedToThisPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/ip`;
        return this.client.request('GET', url);
    }
    /**
     * IP Blocks associated with a Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D#GET)
     */
    /*
    GetThisObjectProperties(network: any, serviceName: string): Promise<DedicatedCloudIp> {
      let url = `/dedicatedCloud/${serviceName}/ip/${network}`
  
      return this.client.request<DedicatedCloudIp>('GET', url)
    }
    */
    /**
     * details operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/details#GET)
     */
    ListDetailsAboutThisIPBlock(network, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/ip/${network}/details`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task#GET)
     */
    TasksAssociatedWithThisIPBlock(network, serviceName, name, state) {
        let url = `/dedicatedCloud/${serviceName}/ip/${network}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(network: any, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/ip/${network}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    /*
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, network: any, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/ip/${network}/task/${taskId}/changeMaintenanceExecutionDate`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
    }
    */
    /**
     * resetTaskState operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/ip/%7Bnetwork%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    /*
    RestartTaskInError(network: any, reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/ip/${network}/task/${taskId}/resetTaskState`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {reason})
    }
    */
    /**
     * newPrices operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/newPrices#GET)
     */
    GetTheNewPricesForYourPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/newPrices`;
        return this.client.request('GET', url);
    }
    /**
     * The Private Cloud Nsx option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudNsx> {
      let url = `/dedicatedCloud/${serviceName}/nsx`
  
      return this.client.request<DedicatedCloudNsx>('GET', url)
    }
    */
    /**
     * canBeDisabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/canBeDisabled#GET)
     */
    CheckIfNsxOptionCanBeDisabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/nsx/canBeDisabled`;
        return this.client.request('GET', url);
    }
    /**
     * canBeEnabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/canBeEnabled#GET)
     */
    CheckIfNsxOptionCanBeEnabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/nsx/canBeEnabled`;
        return this.client.request('GET', url);
    }
    /**
     * disable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/disable#POST)
     */
    DisableNsxOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/nsx/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/nsx/enable#POST)
     */
    EnableNsxOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/nsx/enable`;
        return this.client.request('POST', url);
    }
    /**
     * orderableIpCountries operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/orderableIpCountries#GET)
     */
    GetTheCountriesYouCanSelectInOrderdedicatedCloudserviceNameip(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/orderableIpCountries`;
        return this.client.request('GET', url);
    }
    /**
     * orderNewFilerHourly operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/orderNewFilerHourly#POST)
     */
    OrderANewHourlyFilerMountedInEveryDatacenterOfAGivenPrivateCloud(name, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/orderNewFilerHourly`;
        return this.client.request('POST', url, { name });
    }
    /**
     * passwordPolicy operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/passwordPolicy#GET)
     */
    GetTheCurrentPasswordPolicyForYourPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/passwordPolicy`;
        return this.client.request('GET', url);
    }
    /**
     * The Private Cloud PCI-DSS option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudPciDss> {
      let url = `/dedicatedCloud/${serviceName}/pcidss`
  
      return this.client.request<DedicatedCloudPciDss>('GET', url)
    }
    */
    /**
     * canBeDisabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/canBeDisabled#GET)
     */
    CheckIfPCIDSSOptionCanBeDisabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/pcidss/canBeDisabled`;
        return this.client.request('GET', url);
    }
    /**
     * canBeEnabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/canBeEnabled#GET)
     */
    CheckIfPCIDSSOptionCanBeEnabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/pcidss/canBeEnabled`;
        return this.client.request('GET', url);
    }
    /**
     * disable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/disable#POST)
     */
    DisablePCIDSSOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/pcidss/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/pcidss/enable#POST)
     */
    EnablePCIDSSOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/pcidss/enable`;
        return this.client.request('POST', url);
    }
    /**
     * resetTriggeredAlarm operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/resetTriggeredAlarm#POST)
     */
    ResetAllTriggeredAlarmsOnPCC(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/resetTriggeredAlarm`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.Robot objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/robot#GET)
     */
    RobotsThatCanRunOnThisPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/robot`;
        return this.client.request('GET', url);
    }
    /**
     * The robots used in Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/robot/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<DedicatedCloudRobot> {
      let url = `/dedicatedCloud/${serviceName}/robot/${name}`
  
      return this.client.request<DedicatedCloudRobot>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/dedicatedCloud/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/dedicatedCloud/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * servicePack operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/servicePack#GET)
     */
    RetrieveTheServicePackInformations(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/servicePack`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.ServicePack objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/servicePacks#GET)
     */
    ServicePackCompliantWithTheCurrentPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/servicePacks`;
        return this.client.request('GET', url);
    }
    /**
     * List of Service Pack compliant with the current Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/servicePacks/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<DedicatedCloudServicePack> {
      let url = `/dedicatedCloud/${serviceName}/servicePacks/${name}`
  
      return this.client.request<DedicatedCloudServicePack>('GET', url)
    }
    */
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithThisPrivateCloud(serviceName, name, state) {
        let url = `/dedicatedCloud/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    /*
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/task/${taskId}/changeMaintenanceExecutionDate`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
    }
    */
    /**
     * resetTaskState operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    /*
    RestartTaskInError(reason: string, serviceName: string, taskId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/task/${taskId}/resetTaskState`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {reason})
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.twoFAWhitelist objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist#GET)
     */
    IpAllowedToBypassTheTwoFactorAuthenticationOnThisPrivateCloudManagementInterface(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.twoFAWhitelist objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist#POST)
     */
    AddAWhitelistedIpOnTheTwoFactorAuthentication(description, ip, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist`;
        return this.client.request('POST', url, { description, ip });
    }
    /**
     * Trust IP which can bypass the two factor authentication [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<DedicatedCloudtwoFAWhitelist> {
      let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}`
  
      return this.client.request<DedicatedCloudtwoFAWhitelist>('GET', url)
    }
    */
    /**
     * Trust IP which can bypass the two factor authentication [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist/%7Bid%7D#DELETE)
     */
    RemoveAWhitelistedIpOnTheTwoFactorAuthentication(id, serviceName) {
        let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/twoFAWhitelist/%7Bid%7D/changeProperties#POST)
     */
    ChangePrivateCloudTwoFacterAuthenticationWhitelistProperties(id, serviceName, description) {
        let url = `/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}/changeProperties`;
        return this.client.request('POST', url, { description });
    }
    /**
     * upgradeHypervisor operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/upgradeHypervisor#POST)
     */
    UpgradeYourHypervisorToTheNextReleasedVersion(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/upgradeHypervisor`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user#GET)
     */
    PrivateCloudUsers(serviceName, name) {
        let url = `/dedicatedCloud/${serviceName}/user?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the dedicatedCloud.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user#POST)
     */
    CreateANewUserInYourPrivateCloud(name, serviceName, canAddRessource, canManageRights, email, expirationDate, firstName, lastName, networkRole, nsxRight, password, phoneNumber, receiveAlerts, right, tokenValidator, vmNetworkRole) {
        let url = `/dedicatedCloud/${serviceName}/user`;
        return this.client.request('POST', url, { name, canAddRessource, canManageRights, email, expirationDate, firstName, lastName, networkRole, nsxRight, password, phoneNumber, receiveAlerts, right, tokenValidator, vmNetworkRole });
    }
    /**
     * Private Cloud User [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, userId: number): Promise<DedicatedCloudUser> {
      let url = `/dedicatedCloud/${serviceName}/user/${userId}`
  
      return this.client.request<DedicatedCloudUser>('GET', url)
    }
    */
    /**
     * Private Cloud User [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D#DELETE)
     */
    RemoveAGivenUserFromYourPrivateCloud(serviceName, userId) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/changePassword#POST)
     */
    ChangePrivateCloudUserPassword(serviceName, userId, password) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/changeProperties#POST)
     */
    ChangePrivateCloudUserProperties(serviceName, userId, canManageIpFailOvers, canManageNetwork, canManageRights, email, firstName, fullAdminRo, lastName, nsxRight, phoneNumber, receiveAlerts, tokenValidator) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/changeProperties`;
        return this.client.request('POST', url, { canManageIpFailOvers, canManageNetwork, canManageRights, email, firstName, fullAdminRo, lastName, nsxRight, phoneNumber, receiveAlerts, tokenValidator });
    }
    /**
     * disable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/disable#POST)
     */
    DisableTheGivenPrivateCloudUser(serviceName, userId) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/enable#POST)
     */
    EnableTheGivenPrivateCloudUser(serviceName, userId) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/enable`;
        return this.client.request('POST', url);
    }
    /**
     * metricsToken operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/metricsToken#POST)
     */
    GetMetricsTokenToQueryVScopeGraphsData(serviceName, userId) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/metricsToken`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.ObjectRight objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight#GET)
     */
    UserRightsOnAnObject(serviceName, userId) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.ObjectRight objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight#POST)
     */
    AddANewObjectRightToUserInDatacenterOnPrivateCloud(right, serviceName, type, userId, vmwareObjectId, propagate) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight`;
        return this.client.request('POST', url, { right, type, vmwareObjectId, propagate });
    }
    /**
     * Private Cloud User object right [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight/%7BobjectRightId%7D#GET)
     */
    /*
    GetThisObjectProperties(objectRightId: number, serviceName: string, userId: number): Promise<DedicatedCloudObjectRight> {
      let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight/${objectRightId}`
  
      return this.client.request<DedicatedCloudObjectRight>('GET', url)
    }
    */
    /**
     * Private Cloud User object right [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/objectRight/%7BobjectRightId%7D#DELETE)
     */
    RemoveAnObjectRightFromUserInDatacenterOnPrivateCloud(objectRightId, serviceName, userId) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/objectRight/${objectRightId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicatedCloud.Right objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/right#GET)
     */
    UserRightsInAGivenDatacenters(serviceName, userId) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/right`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud User right [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/right/%7BrightId%7D#GET)
     */
    /*
    GetThisObjectProperties(rightId: number, serviceName: string, userId: number): Promise<DedicatedCloudRight> {
      let url = `/dedicatedCloud/${serviceName}/user/${userId}/right/${rightId}`
  
      return this.client.request<DedicatedCloudRight>('GET', url)
    }
    */
    /**
     * Private Cloud User right [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/right/%7BrightId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(rightId: number, serviceName: string, userId: number, payload: DedicatedCloudRight): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/user/${userId}/right/${rightId}`
  
      return this.client.request<DedicatedCloudTask>('PUT', url, payload)
    }
    */
    /**
     * List the dedicatedCloud.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task#GET)
     */
    TasksAssociatedWithThisUser(serviceName, userId, name, state) {
        let url = `/dedicatedCloud/${serviceName}/user/${userId}/task?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Private Cloud component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number, userId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/user/${userId}/task/${taskId}`
  
      return this.client.request<DedicatedCloudTask>('GET', url)
    }
    */
    /**
     * changeMaintenanceExecutionDate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task/%7BtaskId%7D/changeMaintenanceExecutionDate#POST)
     */
    /*
    ChangeTheExecutionDateOfAMaintenanceWorksOnlyIfTaskTypeIsMaintenanceAndIfItHasNotStartedYet(executionDate: string, serviceName: string, taskId: number, userId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/user/${userId}/task/${taskId}/changeMaintenanceExecutionDate`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {executionDate})
    }
    */
    /**
     * resetTaskState operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/user/%7BuserId%7D/task/%7BtaskId%7D/resetTaskState#POST)
     */
    /*
    RestartTaskInError(reason: string, serviceName: string, taskId: number, userId: number): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/user/${userId}/task/${taskId}/resetTaskState`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {reason})
    }
    */
    /**
     * The Private Cloud Vendor option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vendor#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudVendor> {
      let url = `/dedicatedCloud/${serviceName}/vendor`
  
      return this.client.request<DedicatedCloudVendor>('GET', url)
    }
    */
    /**
     * objectType operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vendor/objectType#POST)
     */
    GetAvailableObjectTypes(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vendor/objectType`;
        return this.client.request('POST', url);
    }
    /**
     * ovhId operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vendor/ovhId#POST)
     */
    GetOvhIdFromObjectType(objectType, serviceName, vendorId) {
        let url = `/dedicatedCloud/${serviceName}/vendor/ovhId`;
        return this.client.request('POST', url, { objectType, vendorId });
    }
    /**
     * List the dedicatedCloud.Vlan objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vlan#GET)
     */
    PrivateCloudVlans(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vlan`;
        return this.client.request('GET', url);
    }
    /**
     * Private Cloud Vlan [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vlan/%7BvlanId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, vlanId: number): Promise<DedicatedCloudVlan> {
      let url = `/dedicatedCloud/${serviceName}/vlan/${vlanId}`
  
      return this.client.request<DedicatedCloudVlan>('GET', url)
    }
    */
    /**
     * Private Cloud VM Encryption option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudVMEncryption> {
      let url = `/dedicatedCloud/${serviceName}/vmEncryption`
  
      return this.client.request<DedicatedCloudVMEncryption>('GET', url)
    }
    */
    /**
     * List the dedicatedCloud.VMEncryptionAccessNetwork objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms#GET)
     */
    VMEncryptionKMSLinkedToThisPrivateCloud(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicatedCloud.VMEncryptionAccessNetwork objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms#POST)
     */
    /*
    AddANewOptionUserAccess(ip: string, serviceName: string, sslThumbprint: string, description?: string): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms`
  
      return this.client.request<DedicatedCloudTask>('POST', url, {ip, sslThumbprint, description})
    }
    */
    /**
     * Private Cloud VM Encryption option access network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms/%7BkmsId%7D#GET)
     */
    /*
    GetThisObjectProperties(kmsId: number, serviceName: string): Promise<DedicatedCloudVMEncryptionAccessNetwork> {
      let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}`
  
      return this.client.request<DedicatedCloudVMEncryptionAccessNetwork>('GET', url)
    }
    */
    /**
     * Private Cloud VM Encryption option access network [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms/%7BkmsId%7D#DELETE)
     */
    /*
    RemoveAnOptionUserAccess(kmsId: number, serviceName: string): Promise<DedicatedCloudTask> {
      let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}`
  
      return this.client.request<DedicatedCloudTask>('DELETE', url)
    }
    */
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vmEncryption/kms/%7BkmsId%7D/changeProperties#POST)
     */
    ChangeOptionUserAccessProperties(kmsId, serviceName, sslThumbprint, description) {
        let url = `/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}/changeProperties`;
        return this.client.request('POST', url, { sslThumbprint, description });
    }
    /**
     * List the vrack.dedicatedCloud objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrack#GET)
     */
    ThisPrivateCloudVrack(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vrack`;
        return this.client.request('GET', url);
    }
    /**
     * vrack dedicated cloud interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrack/%7Bvrack%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, vrack: string): Promise<VrackdedicatedCloud> {
      let url = `/dedicatedCloud/${serviceName}/vrack/${vrack}`
  
      return this.client.request<VrackdedicatedCloud>('GET', url)
    }
    */
    /**
     * vrack dedicated cloud interface [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrack/%7Bvrack%7D#DELETE)
     */
    RemoveThisDedicatedCloudVmNetworkFromThisVrack(serviceName, vrack) {
        let url = `/dedicatedCloud/${serviceName}/vrack/${vrack}`;
        return this.client.request('DELETE', url);
    }
    /**
     * The Private Cloud vRealize Operations option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedCloudVrops> {
      let url = `/dedicatedCloud/${serviceName}/vrops`
  
      return this.client.request<DedicatedCloudVrops>('GET', url)
    }
    */
    /**
     * canBeDisabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/canBeDisabled#GET)
     */
    CheckIfVRealizeOperationsOptionCanBeDisabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vrops/canBeDisabled`;
        return this.client.request('GET', url);
    }
    /**
     * canBeEnabled operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/canBeEnabled#GET)
     */
    CheckIfVRealizeOperationsOptionCanBeEnabled(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vrops/canBeEnabled`;
        return this.client.request('GET', url);
    }
    /**
     * disable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/disable#POST)
     */
    DisableVRealizeOperationsOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vrops/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/enable#POST)
     */
    EnableVRealizeOperationsOption(serviceName) {
        let url = `/dedicatedCloud/${serviceName}/vrops/enable`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicatedCloud.CommercialRange objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/commercialRange#GET)
     */
    ListOfCommercialRangesAvailableInADedicatedCloud() {
        let url = `/dedicatedCloud/commercialRange`;
        return this.client.request('GET', url);
    }
    /**
     * The commercial ranges actually available in your Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/commercialRange/%7BcommercialRangeName%7D#GET)
     */
    /*
    GetThisObjectProperties(commercialRangeName: string): Promise<DedicatedCloudCommercialRange> {
      let url = `/dedicatedCloud/commercialRange/${commercialRangeName}`
  
      return this.client.request<DedicatedCloudCommercialRange>('GET', url)
    }
    */
    /**
     * List the dedicatedCloud.PccZone objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location#GET)
     */
    ListOfLocationsAvailableInADedicatedCloud() {
        let url = `/dedicatedCloud/location`;
        return this.client.request('GET', url);
    }
    /**
     * PccZones actually available in Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D#GET)
     */
    /*
    GetThisObjectProperties(pccZone: string): Promise<DedicatedCloudPccZone> {
      let url = `/dedicatedCloud/location/${pccZone}`
  
      return this.client.request<DedicatedCloudPccZone>('GET', url)
    }
    */
    /**
     * List the dedicatedCloud.HostProfile objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hostProfile#GET)
     */
    OfferedHostProfile(pccZone) {
        let url = `/dedicatedCloud/location/${pccZone}/hostProfile`;
        return this.client.request('GET', url);
    }
    /**
     * Host profiles actually available in Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hostProfile/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, pccZone: string): Promise<DedicatedCloudHostProfile> {
      let url = `/dedicatedCloud/location/${pccZone}/hostProfile/${id}`
  
      return this.client.request<DedicatedCloudHostProfile>('GET', url)
    }
    */
    /**
     * List the dedicatedCloud.Os objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hypervisor#GET)
     */
    OfferedHypervisorVersion(pccZone) {
        let url = `/dedicatedCloud/location/${pccZone}/hypervisor`;
        return this.client.request('GET', url);
    }
    /**
     * Hypervisors actually available in Private Cloud [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/hypervisor/%7BshortName%7D#GET)
     */
    /*
    GetThisObjectProperties(pccZone: string, shortName: string): Promise<DedicatedCloudOs> {
      let url = `/dedicatedCloud/location/${pccZone}/hypervisor/${shortName}`
  
      return this.client.request<DedicatedCloudOs>('GET', url)
    }
    */
    /**
     * host operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/stock/host#GET)
     */
    AvailableHostStock(pccZone, minYear) {
        let url = `/dedicatedCloud/location/${pccZone}/stock/host?`;
        const queryParams = new query_params_1.default();
        if (minYear) {
            queryParams.set('minYear', minYear.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * pcc operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/stock/pcc#GET)
     */
    AvailablePCCStock(pccZone) {
        let url = `/dedicatedCloud/location/${pccZone}/stock/pcc`;
        return this.client.request('GET', url);
    }
    /**
     * zpool operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicatedCloud/location/%7BpccZone%7D/stock/zpool#GET)
     */
    AvailableZpoolStock(pccZone, profileFilter) {
        let url = `/dedicatedCloud/location/${pccZone}/stock/zpool?`;
        const queryParams = new query_params_1.default();
        if (profileFilter) {
            queryParams.set('profileFilter', profileFilter);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.DedicatedCloud = DedicatedCloud;
//# sourceMappingURL=dedicatedCloud.js.map