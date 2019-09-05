"use strict";
// GENERATED SDK for order API
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
 * Housing bay High Availablility offers
 */
var DedicatedhousingHaRoutingOffer;
(function (DedicatedhousingHaRoutingOffer) {
    DedicatedhousingHaRoutingOffer["HA2X2"] = "ha2x2";
    DedicatedhousingHaRoutingOffer["HA2X4"] = "ha2x4";
})(DedicatedhousingHaRoutingOffer = exports.DedicatedhousingHaRoutingOffer || (exports.DedicatedhousingHaRoutingOffer = {}));
/*
 * Nas HA localization
 */
var DedicatedNasHAZone;
(function (DedicatedNasHAZone) {
    DedicatedNasHAZone["BHS"] = "bhs";
    DedicatedNasHAZone["RBX"] = "rbx";
    DedicatedNasHAZone["SBG"] = "sbg";
})(DedicatedNasHAZone = exports.DedicatedNasHAZone || (exports.DedicatedNasHAZone = {}));
/*
 *  Different Bandwidth type orderable
 */
var DedicatedserverBandwidthOrderType;
(function (DedicatedserverBandwidthOrderType) {
    DedicatedserverBandwidthOrderType["PLATINUM"] = "platinum";
    DedicatedserverBandwidthOrderType["PREMIUM"] = "premium";
    DedicatedserverBandwidthOrderType["ULTIMATE"] = "ultimate";
})(DedicatedserverBandwidthOrderType = exports.DedicatedserverBandwidthOrderType || (exports.DedicatedserverBandwidthOrderType = {}));
/*
 * Firewall model name
 */
var DedicatedserverFirewallModel;
(function (DedicatedserverFirewallModel) {
    DedicatedserverFirewallModel["ASA5505"] = "asa5505";
    DedicatedserverFirewallModel["ASA5510"] = "asa5510";
    DedicatedserverFirewallModel["ASA5520"] = "asa5520";
})(DedicatedserverFirewallModel = exports.DedicatedserverFirewallModel || (exports.DedicatedserverFirewallModel = {}));
/*
 * Available localization for this static IP
 */
var DedicatedserverIpCountry;
(function (DedicatedserverIpCountry) {
    DedicatedserverIpCountry["AU"] = "au";
    DedicatedserverIpCountry["BE"] = "be";
    DedicatedserverIpCountry["CA"] = "ca";
    DedicatedserverIpCountry["CZ"] = "cz";
    DedicatedserverIpCountry["DE"] = "de";
    DedicatedserverIpCountry["ES"] = "es";
    DedicatedserverIpCountry["FI"] = "fi";
    DedicatedserverIpCountry["FR"] = "fr";
    DedicatedserverIpCountry["IE"] = "ie";
    DedicatedserverIpCountry["IT"] = "it";
    DedicatedserverIpCountry["LT"] = "lt";
    DedicatedserverIpCountry["NL"] = "nl";
    DedicatedserverIpCountry["PL"] = "pl";
    DedicatedserverIpCountry["PT"] = "pt";
    DedicatedserverIpCountry["SG"] = "sg";
    DedicatedserverIpCountry["UK"] = "uk";
    DedicatedserverIpCountry["US"] = "us";
})(DedicatedserverIpCountry = exports.DedicatedserverIpCountry || (exports.DedicatedserverIpCountry = {}));
/*
 * Available localization for this static IP
 */
var DedicatedserverIpStaticCountry;
(function (DedicatedserverIpStaticCountry) {
    DedicatedserverIpStaticCountry["BE"] = "be";
    DedicatedserverIpStaticCountry["CZ"] = "cz";
    DedicatedserverIpStaticCountry["DE"] = "de";
    DedicatedserverIpStaticCountry["ES"] = "es";
    DedicatedserverIpStaticCountry["FI"] = "fi";
    DedicatedserverIpStaticCountry["FR"] = "fr";
    DedicatedserverIpStaticCountry["IE"] = "ie";
    DedicatedserverIpStaticCountry["IT"] = "it";
    DedicatedserverIpStaticCountry["LT"] = "lt";
    DedicatedserverIpStaticCountry["NL"] = "nl";
    DedicatedserverIpStaticCountry["PL"] = "pl";
    DedicatedserverIpStaticCountry["PT"] = "pt";
    DedicatedserverIpStaticCountry["UK"] = "uk";
})(DedicatedserverIpStaticCountry = exports.DedicatedserverIpStaticCountry || (exports.DedicatedserverIpStaticCountry = {}));
/*
 * Orderable IP type
 */
var DedicatedserverIpTypeOrderable;
(function (DedicatedserverIpTypeOrderable) {
    DedicatedserverIpTypeOrderable["FAILOVER"] = "failover";
    DedicatedserverIpTypeOrderable["STATIC"] = "static";
    DedicatedserverIpTypeOrderable["UNSHIELDED"] = "unshielded";
})(DedicatedserverIpTypeOrderable = exports.DedicatedserverIpTypeOrderable || (exports.DedicatedserverIpTypeOrderable = {}));
/*
 * Dedicated server orderable features
 */
var DedicatedserverOrderableSysFeature;
(function (DedicatedserverOrderableSysFeature) {
    DedicatedserverOrderableSysFeature["BACKUPPROTOCOL"] = "backupProtocol";
    DedicatedserverOrderableSysFeature["MONITORING"] = "monitoring";
})(DedicatedserverOrderableSysFeature = exports.DedicatedserverOrderableSysFeature || (exports.DedicatedserverOrderableSysFeature = {}));
/*
 * distincts support level
 */
var DedicatedserverSupportLevelOrderable;
(function (DedicatedserverSupportLevelOrderable) {
    DedicatedserverSupportLevelOrderable["CRITICAL"] = "critical";
    DedicatedserverSupportLevelOrderable["FASTPATH"] = "fastpath";
    DedicatedserverSupportLevelOrderable["GS"] = "gs";
})(DedicatedserverSupportLevelOrderable = exports.DedicatedserverSupportLevelOrderable || (exports.DedicatedserverSupportLevelOrderable = {}));
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
 * The Dedicated Cloud ressource types that can be upgraded
 */
var DedicatedCloudressourcesUpgradeRessourceType;
(function (DedicatedCloudressourcesUpgradeRessourceType) {
    DedicatedCloudressourcesUpgradeRessourceType["ACCOUNT"] = "account";
    DedicatedCloudressourcesUpgradeRessourceType["ALL"] = "all";
    DedicatedCloudressourcesUpgradeRessourceType["FILER"] = "filer";
    DedicatedCloudressourcesUpgradeRessourceType["HOST"] = "host";
})(DedicatedCloudressourcesUpgradeRessourceType = exports.DedicatedCloudressourcesUpgradeRessourceType || (exports.DedicatedCloudressourcesUpgradeRessourceType = {}));
/*
 * The available billing type upgrade for Dedicated Cloud ressource
 */
var DedicatedCloudressourcesUpgradeType;
(function (DedicatedCloudressourcesUpgradeType) {
    DedicatedCloudressourcesUpgradeType["DEMOTOMONTHLY"] = "demoToMonthly";
    DedicatedCloudressourcesUpgradeType["FREESPARETOHOURLY"] = "freeSpareToHourly";
    DedicatedCloudressourcesUpgradeType["HOURLYTOMONTHLY"] = "hourlyToMonthly";
})(DedicatedCloudressourcesUpgradeType = exports.DedicatedCloudressourcesUpgradeType || (exports.DedicatedCloudressourcesUpgradeType = {}));
/*
 * Outlook version
 */
var EmailexchangeOutlookVersion;
(function (EmailexchangeOutlookVersion) {
    EmailexchangeOutlookVersion["MAC_X86_2011"] = "mac_x86_2011";
    EmailexchangeOutlookVersion["MAC_X86_2016"] = "mac_x86_2016";
    EmailexchangeOutlookVersion["WINDOWS_X64_2013"] = "windows_x64_2013";
    EmailexchangeOutlookVersion["WINDOWS_X64_2016"] = "windows_x64_2016";
    EmailexchangeOutlookVersion["WINDOWS_X86_2013"] = "windows_x86_2013";
    EmailexchangeOutlookVersion["WINDOWS_X86_2016"] = "windows_x86_2016";
})(EmailexchangeOutlookVersion = exports.EmailexchangeOutlookVersion || (exports.EmailexchangeOutlookVersion = {}));
/*
 * OVH licence account
 */
var EmailexchangeOvhLicence;
(function (EmailexchangeOvhLicence) {
    EmailexchangeOvhLicence["BASIC"] = "basic";
    EmailexchangeOvhLicence["ENTERPRISE"] = "enterprise";
    EmailexchangeOvhLicence["STANDARD"] = "standard";
})(EmailexchangeOvhLicence = exports.EmailexchangeOvhLicence || (exports.EmailexchangeOvhLicence = {}));
/*
 * Available datacenters
 */
var HostingPrivateDatabaseDatacenter;
(function (HostingPrivateDatabaseDatacenter) {
    HostingPrivateDatabaseDatacenter["GRA1"] = "gra1";
    HostingPrivateDatabaseDatacenter["GRA2"] = "gra2";
    HostingPrivateDatabaseDatacenter["P19"] = "p19";
})(HostingPrivateDatabaseDatacenter = exports.HostingPrivateDatabaseDatacenter || (exports.HostingPrivateDatabaseDatacenter = {}));
/*
 * Available offers
 */
var HostingPrivateDatabaseOffer;
(function (HostingPrivateDatabaseOffer) {
    HostingPrivateDatabaseOffer["CLASSIC"] = "classic";
    HostingPrivateDatabaseOffer["PUBLIC"] = "public";
})(HostingPrivateDatabaseOffer = exports.HostingPrivateDatabaseOffer || (exports.HostingPrivateDatabaseOffer = {}));
/*
 * Private database orderable versions
 */
var HostingPrivateDatabaseOrderableVersion;
(function (HostingPrivateDatabaseOrderableVersion) {
    HostingPrivateDatabaseOrderableVersion["MARIADB_10_1"] = "mariadb_10.1";
    HostingPrivateDatabaseOrderableVersion["MARIADB_10_2"] = "mariadb_10.2";
    HostingPrivateDatabaseOrderableVersion["MONGODB_3_4"] = "mongodb_3.4";
    HostingPrivateDatabaseOrderableVersion["MONGODB_4_0"] = "mongodb_4.0";
    HostingPrivateDatabaseOrderableVersion["MYSQL_5_5"] = "mysql_5.5";
    HostingPrivateDatabaseOrderableVersion["MYSQL_5_6"] = "mysql_5.6";
    HostingPrivateDatabaseOrderableVersion["MYSQL_5_7"] = "mysql_5.7";
    HostingPrivateDatabaseOrderableVersion["POSTGRESQL_10"] = "postgresql_10";
    HostingPrivateDatabaseOrderableVersion["POSTGRESQL_11"] = "postgresql_11";
    HostingPrivateDatabaseOrderableVersion["POSTGRESQL_9_4"] = "postgresql_9.4";
    HostingPrivateDatabaseOrderableVersion["POSTGRESQL_9_5"] = "postgresql_9.5";
    HostingPrivateDatabaseOrderableVersion["POSTGRESQL_9_6"] = "postgresql_9.6";
    HostingPrivateDatabaseOrderableVersion["REDIS_3_2"] = "redis_3.2";
    HostingPrivateDatabaseOrderableVersion["REDIS_4_0"] = "redis_4.0";
})(HostingPrivateDatabaseOrderableVersion = exports.HostingPrivateDatabaseOrderableVersion || (exports.HostingPrivateDatabaseOrderableVersion = {}));
/*
 * Hosting's CDN offer
 */
var HostingwebCdnOffer;
(function (HostingwebCdnOffer) {
    HostingwebCdnOffer["CDN_BUSINESS"] = "CDN_BUSINESS";
    HostingwebCdnOffer["CDN_BUSINESS_FREE"] = "CDN_BUSINESS_FREE";
})(HostingwebCdnOffer = exports.HostingwebCdnOffer || (exports.HostingwebCdnOffer = {}));
/*
 * Database capabitities type enum
 */
var HostingwebdatabaseDatabaseCapabilitiesType;
(function (HostingwebdatabaseDatabaseCapabilitiesType) {
    HostingwebdatabaseDatabaseCapabilitiesType["EXTRASQLPERSO"] = "extraSqlPerso";
    HostingwebdatabaseDatabaseCapabilitiesType["LOCAL"] = "local";
    HostingwebdatabaseDatabaseCapabilitiesType["PRIVATEDATABASE"] = "privateDatabase";
    HostingwebdatabaseDatabaseCapabilitiesType["SQLLOCAL"] = "sqlLocal";
    HostingwebdatabaseDatabaseCapabilitiesType["SQLPERSO"] = "sqlPerso";
    HostingwebdatabaseDatabaseCapabilitiesType["SQLPRO"] = "sqlPro";
})(HostingwebdatabaseDatabaseCapabilitiesType = exports.HostingwebdatabaseDatabaseCapabilitiesType || (exports.HostingwebdatabaseDatabaseCapabilitiesType = {}));
/*
 * Database Isolation enum
 */
var HostingwebdatabaseDatabaseIsolation;
(function (HostingwebdatabaseDatabaseIsolation) {
    HostingwebdatabaseDatabaseIsolation["DEDICATED"] = "dedicated";
    HostingwebdatabaseDatabaseIsolation["LOCAL"] = "local";
    HostingwebdatabaseDatabaseIsolation["SHARED"] = "shared";
})(HostingwebdatabaseDatabaseIsolation = exports.HostingwebdatabaseDatabaseIsolation || (exports.HostingwebdatabaseDatabaseIsolation = {}));
/*
 * Database Type enum
 */
var HostingwebdatabaseDatabaseType;
(function (HostingwebdatabaseDatabaseType) {
    HostingwebdatabaseDatabaseType["MARIADB"] = "mariadb";
    HostingwebdatabaseDatabaseType["MONGODB"] = "mongodb";
    HostingwebdatabaseDatabaseType["MYSQL"] = "mysql";
    HostingwebdatabaseDatabaseType["POSTGRESQL"] = "postgresql";
    HostingwebdatabaseDatabaseType["REDIS"] = "redis";
})(HostingwebdatabaseDatabaseType = exports.HostingwebdatabaseDatabaseType || (exports.HostingwebdatabaseDatabaseType = {}));
/*
 * Sql perso's offer enum
 */
var HostingwebdatabaseSqlPersoOffer;
(function (HostingwebdatabaseSqlPersoOffer) {
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_1_BASES_400_MB"] = "SQLPERSO_1_BASES_400_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_1_BASES_800_MB"] = "SQLPERSO_1_BASES_800_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_20_BASES_100_MB"] = "SQLPERSO_20_BASES_100_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_20_BASES_200_MB"] = "SQLPERSO_20_BASES_200_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_2_BASES_400_MB"] = "SQLPERSO_2_BASES_400_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_2_BASES_800_MB"] = "SQLPERSO_2_BASES_800_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_50_BASES_100_MB"] = "SQLPERSO_50_BASES_100_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_50_BASES_200_MB"] = "SQLPERSO_50_BASES_200_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_5_BASES_100_MB"] = "SQLPERSO_5_BASES_100_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_5_BASES_200_MB"] = "SQLPERSO_5_BASES_200_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_5_BASES_400_MB"] = "SQLPERSO_5_BASES_400_MB";
    HostingwebdatabaseSqlPersoOffer["SQLPERSO_5_BASES_800_MB"] = "SQLPERSO_5_BASES_800_MB";
})(HostingwebdatabaseSqlPersoOffer = exports.HostingwebdatabaseSqlPersoOffer || (exports.HostingwebdatabaseSqlPersoOffer = {}));
/*
 * Disk type available
 */
var HostingwebDiskType;
(function (HostingwebDiskType) {
    HostingwebDiskType["HDD"] = "HDD";
    HostingwebDiskType["SSD"] = "SSD";
})(HostingwebDiskType = exports.HostingwebDiskType || (exports.HostingwebDiskType = {}));
/*
 * Dns zone modification possibilities when installing a new hosting
 */
var HostingwebDnsZone;
(function (HostingwebDnsZone) {
    HostingwebDnsZone["NO_CHANGE"] = "NO_CHANGE";
    HostingwebDnsZone["RESET_ALL"] = "RESET_ALL";
    HostingwebDnsZone["RESET_ONLY_A"] = "RESET_ONLY_A";
    HostingwebDnsZone["RESET_ONLY_MX"] = "RESET_ONLY_MX";
})(HostingwebDnsZone = exports.HostingwebDnsZone || (exports.HostingwebDnsZone = {}));
/*
 * Highlight tips for offer
 */
var HostingwebHighLight;
(function (HostingwebHighLight) {
    HostingwebHighLight["BEST_SELLER"] = "best-seller";
    HostingwebHighLight["NEW"] = "new";
})(HostingwebHighLight = exports.HostingwebHighLight || (exports.HostingwebHighLight = {}));
/*
 * Module's name orderable when order a new hosting
 */
var HostingwebmoduleOrderableName;
(function (HostingwebmoduleOrderableName) {
    HostingwebmoduleOrderableName["DRUPAL"] = "DRUPAL";
    HostingwebmoduleOrderableName["JOOMLA"] = "JOOMLA";
    HostingwebmoduleOrderableName["PRESTASHOP"] = "PRESTASHOP";
    HostingwebmoduleOrderableName["WORDPRESS"] = "WORDPRESS";
})(HostingwebmoduleOrderableName = exports.HostingwebmoduleOrderableName || (exports.HostingwebmoduleOrderableName = {}));
/*
 * Different NodeJs versions available
 */
var HostingwebNodejsVersionAvailable;
(function (HostingwebNodejsVersionAvailable) {
    HostingwebNodejsVersionAvailable["NODEJS_10"] = "nodejs-10";
    HostingwebNodejsVersionAvailable["NODEJS_11"] = "nodejs-11";
    HostingwebNodejsVersionAvailable["NODEJS_8"] = "nodejs-8";
    HostingwebNodejsVersionAvailable["NODEJS_9"] = "nodejs-9";
})(HostingwebNodejsVersionAvailable = exports.HostingwebNodejsVersionAvailable || (exports.HostingwebNodejsVersionAvailable = {}));
/*
 * Hosting's offer
 */
var HostingwebOffer;
(function (HostingwebOffer) {
    HostingwebOffer["CLOUDWEB_1"] = "CLOUDWEB_1";
    HostingwebOffer["CLOUDWEB_2"] = "CLOUDWEB_2";
    HostingwebOffer["CLOUDWEB_3"] = "CLOUDWEB_3";
    HostingwebOffer["KS"] = "KS";
    HostingwebOffer["PERFORMANCE_1"] = "PERFORMANCE_1";
    HostingwebOffer["PERFORMANCE_2"] = "PERFORMANCE_2";
    HostingwebOffer["PERFORMANCE_3"] = "PERFORMANCE_3";
    HostingwebOffer["PERFORMANCE_4"] = "PERFORMANCE_4";
    HostingwebOffer["PERSO"] = "PERSO";
    HostingwebOffer["PRO"] = "PRO";
    HostingwebOffer["START"] = "START";
})(HostingwebOffer = exports.HostingwebOffer || (exports.HostingwebOffer = {}));
/*
 * Different PHP versions available
 */
var HostingwebPhpVersionAvailable;
(function (HostingwebPhpVersionAvailable) {
    HostingwebPhpVersionAvailable["PHPFPM_5_6"] = "phpfpm-5.6";
    HostingwebPhpVersionAvailable["PHPFPM_7_0"] = "phpfpm-7.0";
    HostingwebPhpVersionAvailable["PHPFPM_7_1"] = "phpfpm-7.1";
    HostingwebPhpVersionAvailable["PHPFPM_7_2"] = "phpfpm-7.2";
    HostingwebPhpVersionAvailable["PHPFPM_7_3"] = "phpfpm-7.3";
})(HostingwebPhpVersionAvailable = exports.HostingwebPhpVersionAvailable || (exports.HostingwebPhpVersionAvailable = {}));
/*
 * Different Python versions available
 */
var HostingwebPythonVersionAvailable;
(function (HostingwebPythonVersionAvailable) {
    HostingwebPythonVersionAvailable["PYTHON_2"] = "python-2";
    HostingwebPythonVersionAvailable["PYTHON_3"] = "python-3";
})(HostingwebPythonVersionAvailable = exports.HostingwebPythonVersionAvailable || (exports.HostingwebPythonVersionAvailable = {}));
/*
 * Different Ruby versions available
 */
var HostingwebRubyVersionAvailable;
(function (HostingwebRubyVersionAvailable) {
    HostingwebRubyVersionAvailable["RUBY_2_4"] = "ruby-2.4";
    HostingwebRubyVersionAvailable["RUBY_2_5"] = "ruby-2.5";
    HostingwebRubyVersionAvailable["RUBY_2_6"] = "ruby-2.6";
})(HostingwebRubyVersionAvailable = exports.HostingwebRubyVersionAvailable || (exports.HostingwebRubyVersionAvailable = {}));
/*
 * All versions for CloudLinux product
 */
var LicenseCloudLinuxVersion;
(function (LicenseCloudLinuxVersion) {
    LicenseCloudLinuxVersion["SINGLE"] = "SINGLE";
    LicenseCloudLinuxVersion["WITH_CPANEL"] = "WITH_CPANEL";
    LicenseCloudLinuxVersion["WITH_PLESK12"] = "WITH_PLESK12";
    LicenseCloudLinuxVersion["CLOUDLINUX_LICENSE"] = "cloudlinux-license";
})(LicenseCloudLinuxVersion = exports.LicenseCloudLinuxVersion || (exports.LicenseCloudLinuxVersion = {}));
/*
 * Possible values for license type
 */
var LicenseLicenseType;
(function (LicenseLicenseType) {
    LicenseLicenseType["DEDICATED"] = "dedicated";
    LicenseLicenseType["DEDICATEDCLOUD"] = "dedicatedCloud";
    LicenseLicenseType["DEDICATEDFAILOVER"] = "dedicatedFailover";
    LicenseLicenseType["FAILOVER"] = "failover";
    LicenseLicenseType["VM"] = "vm";
    LicenseLicenseType["VPS"] = "vps";
    LicenseLicenseType["VPS_CEPH"] = "vps_ceph";
    LicenseLicenseType["VPS_CLASSIC"] = "vps_classic";
    LicenseLicenseType["VPS_CLOUD"] = "vps_cloud";
    LicenseLicenseType["VPS_CLOUD_2016"] = "vps_cloud_2016";
    LicenseLicenseType["VPS_SSD"] = "vps_ssd";
})(LicenseLicenseType = exports.LicenseLicenseType || (exports.LicenseLicenseType = {}));
/*
 * All antispam available for Plesk products
 */
var LicenseOrderableAntispam;
(function (LicenseOrderableAntispam) {
    LicenseOrderableAntispam["SPAM_ASSASSIN"] = "SPAM_ASSASSIN";
})(LicenseOrderableAntispam = exports.LicenseOrderableAntispam || (exports.LicenseOrderableAntispam = {}));
/*
 * All antivirus available for Plesk products
 */
var LicenseOrderableAntivirus;
(function (LicenseOrderableAntivirus) {
    LicenseOrderableAntivirus["DR_WEB"] = "DR_WEB";
    LicenseOrderableAntivirus["KASPERSKY_UNLIMITED_MAILBOXES"] = "KASPERSKY_UNLIMITED_MAILBOXES";
    LicenseOrderableAntivirus["KASPERSKY"] = "kaspersky";
})(LicenseOrderableAntivirus = exports.LicenseOrderableAntivirus || (exports.LicenseOrderableAntivirus = {}));
/*
 * All versions available for Cpanel products
 */
var LicenseOrderableCpanelVersion;
(function (LicenseOrderableCpanelVersion) {
    LicenseOrderableCpanelVersion["VERSION_11_FOR_LINUX"] = "VERSION_11_FOR_LINUX";
    LicenseOrderableCpanelVersion["VERSION_11_FOR_VIRTUOZZO"] = "VERSION_11_FOR_VIRTUOZZO";
    LicenseOrderableCpanelVersion["VERSION_11_FOR_VPS"] = "VERSION_11_FOR_VPS";
    LicenseOrderableCpanelVersion["CPANEL_LICENSE_VERSION_11"] = "cpanel-license-version-11";
    LicenseOrderableCpanelVersion["CPANEL_LICENSE_VERSION_11_FOR_VIRTUOZZO"] = "cpanel-license-version-11-for-virtuozzo";
    LicenseOrderableCpanelVersion["CPANEL_LICENSE_VERSION_11_FOR_VPS"] = "cpanel-license-version-11-for-vps";
})(LicenseOrderableCpanelVersion = exports.LicenseOrderableCpanelVersion || (exports.LicenseOrderableCpanelVersion = {}));
/*
 * All versions available for DirectAdmin products
 */
var LicenseOrderableDirectAdminVersion;
(function (LicenseOrderableDirectAdminVersion) {
    LicenseOrderableDirectAdminVersion["DIRECTADMIN_1"] = "DIRECTADMIN_1";
    LicenseOrderableDirectAdminVersion["DIRECTADMIN_LICENSE"] = "directadmin-license";
})(LicenseOrderableDirectAdminVersion = exports.LicenseOrderableDirectAdminVersion || (exports.LicenseOrderableDirectAdminVersion = {}));
/*
 * All versions available for Virtuozzo products
 */
var LicenseOrderableVirtuozzoVersion;
(function (LicenseOrderableVirtuozzoVersion) {
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_CONTAINERS_4_FOR_LINUX"] = "VIRTUOZZO_CONTAINERS_4_FOR_LINUX";
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS"] = "VIRTUOZZO_CONTAINERS_4_FOR_WINDOWS";
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_4"] = "virtuozzo-4";
    LicenseOrderableVirtuozzoVersion["VIRTUOZZO_4_FOR_WINDOWS"] = "virtuozzo-4-for-windows";
})(LicenseOrderableVirtuozzoVersion = exports.LicenseOrderableVirtuozzoVersion || (exports.LicenseOrderableVirtuozzoVersion = {}));
/*
 * Application set available for Plesk products
 */
var LicensePleskApplicationSet;
(function (LicensePleskApplicationSet) {
    LicensePleskApplicationSet["APPLICATIONPACK"] = "applicationpack";
    LicensePleskApplicationSet["DEVELOPERPACK"] = "developerpack";
    LicensePleskApplicationSet["POWER_PACK_FOR_PLESK12"] = "power-pack-for-plesk12";
    LicensePleskApplicationSet["POWERPACK"] = "powerpack";
})(LicensePleskApplicationSet = exports.LicensePleskApplicationSet || (exports.LicensePleskApplicationSet = {}));
/*
 * All versions available for Plesk products
 */
var LicensePleskVersion;
(function (LicensePleskVersion) {
    LicensePleskVersion["PLESK_10_AND_LATER"] = "PLESK_10_AND_LATER";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_KVM"] = "PLESK_10_AND_LATER_FOR_KVM";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_VMWARE"] = "PLESK_10_AND_LATER_FOR_VMWARE";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_VZ"] = "PLESK_10_AND_LATER_FOR_VZ";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN"] = "PLESK_10_AND_LATER_FOR_WIN";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE"] = "PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN_FOR_VZ"] = "PLESK_10_AND_LATER_FOR_WIN_FOR_VZ";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_WIN_FOR_XEN"] = "PLESK_10_AND_LATER_FOR_WIN_FOR_XEN";
    LicensePleskVersion["PLESK_10_AND_LATER_FOR_XEN"] = "PLESK_10_AND_LATER_FOR_XEN";
    LicensePleskVersion["PLESK_12_VPS_WEB_ADMIN"] = "PLESK_12_VPS_WEB_ADMIN";
    LicensePleskVersion["PLESK_12_VPS_WEB_APP"] = "PLESK_12_VPS_WEB_APP";
    LicensePleskVersion["PLESK_12_VPS_WEB_HOST"] = "PLESK_12_VPS_WEB_HOST";
    LicensePleskVersion["PLESK_12_VPS_WEB_HOST_CLNX"] = "PLESK_12_VPS_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_12_VPS_WEB_PRO"] = "PLESK_12_VPS_WEB_PRO";
    LicensePleskVersion["PLESK_12_VPS_WEB_PRO_CLNX"] = "PLESK_12_VPS_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_12_WEB_ADMIN"] = "PLESK_12_WEB_ADMIN";
    LicensePleskVersion["PLESK_12_WEB_APP"] = "PLESK_12_WEB_APP";
    LicensePleskVersion["PLESK_12_WEB_HOST"] = "PLESK_12_WEB_HOST";
    LicensePleskVersion["PLESK_12_WEB_HOST_CLNX"] = "PLESK_12_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_12_WEB_PRO"] = "PLESK_12_WEB_PRO";
    LicensePleskVersion["PLESK_12_WEB_PRO_CLNX"] = "PLESK_12_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_75_RELOADED"] = "PLESK_75_RELOADED";
    LicensePleskVersion["PLESK_80"] = "PLESK_80";
    LicensePleskVersion["PLESK_80_FOR_VZ"] = "PLESK_80_FOR_VZ";
    LicensePleskVersion["PLESK_81_FOR_WIN"] = "PLESK_81_FOR_WIN";
    LicensePleskVersion["PLESK_9"] = "PLESK_9";
    LicensePleskVersion["PLESK_95"] = "PLESK_95";
    LicensePleskVersion["PLESK_95_FOR_VZ"] = "PLESK_95_FOR_VZ";
    LicensePleskVersion["PLESK_95_FOR_WIN"] = "PLESK_95_FOR_WIN";
    LicensePleskVersion["PLESK_9_FOR_VZ"] = "PLESK_9_FOR_VZ";
    LicensePleskVersion["PLESK_9_FOR_WIN"] = "PLESK_9_FOR_WIN";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_ADMIN"] = "PLESK_ONYX_VPS_WEB_ADMIN";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_APP"] = "PLESK_ONYX_VPS_WEB_APP";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_HOST"] = "PLESK_ONYX_VPS_WEB_HOST";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_HOST_CLNX"] = "PLESK_ONYX_VPS_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_PRO"] = "PLESK_ONYX_VPS_WEB_PRO";
    LicensePleskVersion["PLESK_ONYX_VPS_WEB_PRO_CLNX"] = "PLESK_ONYX_VPS_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_ONYX_WEB_ADMIN"] = "PLESK_ONYX_WEB_ADMIN";
    LicensePleskVersion["PLESK_ONYX_WEB_APP"] = "PLESK_ONYX_WEB_APP";
    LicensePleskVersion["PLESK_ONYX_WEB_HOST"] = "PLESK_ONYX_WEB_HOST";
    LicensePleskVersion["PLESK_ONYX_WEB_HOST_CLNX"] = "PLESK_ONYX_WEB_HOST_CLNX";
    LicensePleskVersion["PLESK_ONYX_WEB_PRO"] = "PLESK_ONYX_WEB_PRO";
    LicensePleskVersion["PLESK_ONYX_WEB_PRO_CLNX"] = "PLESK_ONYX_WEB_PRO_CLNX";
    LicensePleskVersion["PLESK_12_WEBADMIN_FOR_VPS"] = "plesk-12-webadmin-for-vps";
    LicensePleskVersion["PLESK_12_WEBHOST"] = "plesk-12-webhost";
    LicensePleskVersion["PLESK_12_WEBHOST_FOR_VPS"] = "plesk-12-webhost-for-vps";
    LicensePleskVersion["PLESK_12_WEBPRO"] = "plesk-12-webpro";
    LicensePleskVersion["PLESK_12_WEBPRO_FOR_VPS"] = "plesk-12-webpro-for-vps";
})(LicensePleskVersion = exports.LicensePleskVersion || (exports.LicensePleskVersion = {}));
/*
 * All versions for SQL Server product
 */
var LicenseSqlServerVersion;
(function (LicenseSqlServerVersion) {
    LicenseSqlServerVersion["SQL_SERVER_2008_STANDARD_EDITION_2_CPU"] = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU";
    LicenseSqlServerVersion["SQL_SERVER_2008_STANDARD_EDITION_4_CPU"] = "SQL_SERVER_2008_STANDARD_EDITION_4_CPU";
    LicenseSqlServerVersion["SQL_SERVER_2008_WEB_EDITION_2_CPU"] = "SQL_SERVER_2008_WEB_EDITION_2_CPU";
    LicenseSqlServerVersion["SQL_SERVER_2008_WEB_EDITION_4_CPU"] = "SQL_SERVER_2008_WEB_EDITION_4_CPU";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_10_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_12_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_16_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_18_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_18_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_20_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_20_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_24_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_24_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_2_CPU"] = "SQL_SERVER_2012_STANDARD_EDITION_2_CPU";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_32_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_32_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_4_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_6_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_STANDARD_EDITION_8_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_10_CORES"] = "SQL_SERVER_2012_WEB_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_12_CORES"] = "SQL_SERVER_2012_WEB_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_16_CORES"] = "SQL_SERVER_2012_WEB_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_18_CORES"] = "SQL_SERVER_2012_WEB_EDITION_18_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_20_CORES"] = "SQL_SERVER_2012_WEB_EDITION_20_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_24_CORES"] = "SQL_SERVER_2012_WEB_EDITION_24_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_32_CORES"] = "SQL_SERVER_2012_WEB_EDITION_32_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_4_CORES"] = "SQL_SERVER_2012_WEB_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_6_CORES"] = "SQL_SERVER_2012_WEB_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2012_WEB_EDITION_8_CORES"] = "SQL_SERVER_2012_WEB_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_10_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_12_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_16_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_18_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_18_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_20_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_20_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_24_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_24_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_4_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_6_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_STANDARD_EDITION_8_CORES"] = "SQL_SERVER_2014_STANDARD_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_10_CORES"] = "SQL_SERVER_2014_WEB_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_12_CORES"] = "SQL_SERVER_2014_WEB_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_16_CORES"] = "SQL_SERVER_2014_WEB_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_18_CORES"] = "SQL_SERVER_2014_WEB_EDITION_18_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_20_CORES"] = "SQL_SERVER_2014_WEB_EDITION_20_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_24_CORES"] = "SQL_SERVER_2014_WEB_EDITION_24_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_4_CORES"] = "SQL_SERVER_2014_WEB_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_6_CORES"] = "SQL_SERVER_2014_WEB_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2014_WEB_EDITION_8_CORES"] = "SQL_SERVER_2014_WEB_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_STANDARD_EDITION_10_CORES"] = "SQL_SERVER_2016_STANDARD_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_STANDARD_EDITION_12_CORES"] = "SQL_SERVER_2016_STANDARD_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_STANDARD_EDITION_14_CORES"] = "SQL_SERVER_2016_STANDARD_EDITION_14_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_STANDARD_EDITION_16_CORES"] = "SQL_SERVER_2016_STANDARD_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_STANDARD_EDITION_4_CORES"] = "SQL_SERVER_2016_STANDARD_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_STANDARD_EDITION_6_CORES"] = "SQL_SERVER_2016_STANDARD_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_STANDARD_EDITION_8_CORES"] = "SQL_SERVER_2016_STANDARD_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_WEB_EDITION_10_CORES"] = "SQL_SERVER_2016_WEB_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_WEB_EDITION_12_CORES"] = "SQL_SERVER_2016_WEB_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_WEB_EDITION_14_CORES"] = "SQL_SERVER_2016_WEB_EDITION_14_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_WEB_EDITION_16_CORES"] = "SQL_SERVER_2016_WEB_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_WEB_EDITION_4_CORES"] = "SQL_SERVER_2016_WEB_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_WEB_EDITION_6_CORES"] = "SQL_SERVER_2016_WEB_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2016_WEB_EDITION_8_CORES"] = "SQL_SERVER_2016_WEB_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_10_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_12_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_14_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_14_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_16_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_18_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_18_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_20_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_20_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_22_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_22_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_24_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_24_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_26_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_26_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_28_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_28_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_30_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_30_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_32_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_32_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_4_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_6_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_STANDARD_EDITION_8_CORES"] = "SQL_SERVER_2017_STANDARD_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_10_CORES"] = "SQL_SERVER_2017_WEB_EDITION_10_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_12_CORES"] = "SQL_SERVER_2017_WEB_EDITION_12_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_14_CORES"] = "SQL_SERVER_2017_WEB_EDITION_14_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_16_CORES"] = "SQL_SERVER_2017_WEB_EDITION_16_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_18_CORES"] = "SQL_SERVER_2017_WEB_EDITION_18_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_20_CORES"] = "SQL_SERVER_2017_WEB_EDITION_20_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_22_CORES"] = "SQL_SERVER_2017_WEB_EDITION_22_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_24_CORES"] = "SQL_SERVER_2017_WEB_EDITION_24_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_26_CORES"] = "SQL_SERVER_2017_WEB_EDITION_26_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_28_CORES"] = "SQL_SERVER_2017_WEB_EDITION_28_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_30_CORES"] = "SQL_SERVER_2017_WEB_EDITION_30_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_32_CORES"] = "SQL_SERVER_2017_WEB_EDITION_32_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_4_CORES"] = "SQL_SERVER_2017_WEB_EDITION_4_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_6_CORES"] = "SQL_SERVER_2017_WEB_EDITION_6_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2017_WEB_EDITION_8_CORES"] = "SQL_SERVER_2017_WEB_EDITION_8_CORES";
    LicenseSqlServerVersion["SQL_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU"] = "sql-server-2008-license-standard-edition-2-cpu";
    LicenseSqlServerVersion["SQL_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU"] = "sql-server-2008-license-standard-edition-4-cpu";
    LicenseSqlServerVersion["SQL_SERVER_2008_LICENSE_WEB_EDITION_2_CPU"] = "sql-server-2008-license-web-edition-2-cpu";
    LicenseSqlServerVersion["SQL_SERVER_2008_LICENSE_WEB_EDITION_4_CPU"] = "sql-server-2008-license-web-edition-4-cpu";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_10_CORES"] = "sql-server-2012-license-standard-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_12_CORES"] = "sql-server-2012-license-standard-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_16_CORES"] = "sql-server-2012-license-standard-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_18_CORES"] = "sql-server-2012-license-standard-edition-18-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU"] = "sql-server-2012-license-standard-edition-2-cpu";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_20_CORES"] = "sql-server-2012-license-standard-edition-20-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_24_CORES"] = "sql-server-2012-license-standard-edition-24-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_32_CORES"] = "sql-server-2012-license-standard-edition-32-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_4_CORES"] = "sql-server-2012-license-standard-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_6_CORES"] = "sql-server-2012-license-standard-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_STANDARD_EDITION_8_CORES"] = "sql-server-2012-license-standard-edition-8-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_10_CORES"] = "sql-server-2012-license-web-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_12_CORES"] = "sql-server-2012-license-web-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_16_CORES"] = "sql-server-2012-license-web-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_18_CORES"] = "sql-server-2012-license-web-edition-18-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_20_CORES"] = "sql-server-2012-license-web-edition-20-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_24_CORES"] = "sql-server-2012-license-web-edition-24-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_32_CORES"] = "sql-server-2012-license-web-edition-32-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_4_CORES"] = "sql-server-2012-license-web-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_6_CORES"] = "sql-server-2012-license-web-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2012_LICENSE_WEB_EDITION_8_CORES"] = "sql-server-2012-license-web-edition-8-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_10_CORES"] = "sql-server-2014-license-standard-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_12_CORES"] = "sql-server-2014-license-standard-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_16_CORES"] = "sql-server-2014-license-standard-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_18_CORES"] = "sql-server-2014-license-standard-edition-18-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_20_CORES"] = "sql-server-2014-license-standard-edition-20-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_24_CORES"] = "sql-server-2014-license-standard-edition-24-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_4_CORES"] = "sql-server-2014-license-standard-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_6_CORES"] = "sql-server-2014-license-standard-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_STANDARD_EDITION_8_CORES"] = "sql-server-2014-license-standard-edition-8-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_10_CORES"] = "sql-server-2014-license-web-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_12_CORES"] = "sql-server-2014-license-web-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_16_CORES"] = "sql-server-2014-license-web-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_18_CORES"] = "sql-server-2014-license-web-edition-18-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_20_CORES"] = "sql-server-2014-license-web-edition-20-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_24_CORES"] = "sql-server-2014-license-web-edition-24-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_4_CORES"] = "sql-server-2014-license-web-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_6_CORES"] = "sql-server-2014-license-web-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2014_LICENSE_WEB_EDITION_8_CORES"] = "sql-server-2014-license-web-edition-8-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_STANDARD_EDITION_10_CORES"] = "sql-server-2016-license-standard-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_STANDARD_EDITION_12_CORES"] = "sql-server-2016-license-standard-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_STANDARD_EDITION_14_CORES"] = "sql-server-2016-license-standard-edition-14-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_STANDARD_EDITION_16_CORES"] = "sql-server-2016-license-standard-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_STANDARD_EDITION_4_CORES"] = "sql-server-2016-license-standard-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_STANDARD_EDITION_6_CORES"] = "sql-server-2016-license-standard-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_STANDARD_EDITION_8_CORES"] = "sql-server-2016-license-standard-edition-8-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_WEB_EDITION_10_CORES"] = "sql-server-2016-license-web-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_WEB_EDITION_12_CORES"] = "sql-server-2016-license-web-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_WEB_EDITION_14_CORES"] = "sql-server-2016-license-web-edition-14-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_WEB_EDITION_16_CORES"] = "sql-server-2016-license-web-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_WEB_EDITION_4_CORES"] = "sql-server-2016-license-web-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_WEB_EDITION_6_CORES"] = "sql-server-2016-license-web-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2016_LICENSE_WEB_EDITION_8_CORES"] = "sql-server-2016-license-web-edition-8-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_10_CORES"] = "sql-server-2017-license-standard-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_12_CORES"] = "sql-server-2017-license-standard-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_14_CORES"] = "sql-server-2017-license-standard-edition-14-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_16_CORES"] = "sql-server-2017-license-standard-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_18_CORES"] = "sql-server-2017-license-standard-edition-18-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_20_CORES"] = "sql-server-2017-license-standard-edition-20-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_22_CORES"] = "sql-server-2017-license-standard-edition-22-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_24_CORES"] = "sql-server-2017-license-standard-edition-24-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_26_CORES"] = "sql-server-2017-license-standard-edition-26-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_28_CORES"] = "sql-server-2017-license-standard-edition-28-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_30_CORES"] = "sql-server-2017-license-standard-edition-30-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_32_CORES"] = "sql-server-2017-license-standard-edition-32-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_4_CORES"] = "sql-server-2017-license-standard-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_6_CORES"] = "sql-server-2017-license-standard-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_STANDARD_EDITION_8_CORES"] = "sql-server-2017-license-standard-edition-8-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_10_CORES"] = "sql-server-2017-license-web-edition-10-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_12_CORES"] = "sql-server-2017-license-web-edition-12-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_14_CORES"] = "sql-server-2017-license-web-edition-14-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_16_CORES"] = "sql-server-2017-license-web-edition-16-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_18_CORES"] = "sql-server-2017-license-web-edition-18-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_20_CORES"] = "sql-server-2017-license-web-edition-20-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_22_CORES"] = "sql-server-2017-license-web-edition-22-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_24_CORES"] = "sql-server-2017-license-web-edition-24-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_26_CORES"] = "sql-server-2017-license-web-edition-26-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_28_CORES"] = "sql-server-2017-license-web-edition-28-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_30_CORES"] = "sql-server-2017-license-web-edition-30-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_32_CORES"] = "sql-server-2017-license-web-edition-32-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_4_CORES"] = "sql-server-2017-license-web-edition-4-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_6_CORES"] = "sql-server-2017-license-web-edition-6-cores";
    LicenseSqlServerVersion["SQL_SERVER_2017_LICENSE_WEB_EDITION_8_CORES"] = "sql-server-2017-license-web-edition-8-cores";
})(LicenseSqlServerVersion = exports.LicenseSqlServerVersion || (exports.LicenseSqlServerVersion = {}));
/*
 * All versions for Windows products
 */
var LicenseWindowsOsVersion;
(function (LicenseWindowsOsVersion) {
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_ENTERPRISE_EDITION"] = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU"] = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_STANDARD_EDITION"] = "WINDOWS_SERVER_2003_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_EDITION"] = "WINDOWS_SERVER_2003_WEB_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_EDITION_2_CPU"] = "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION"] = "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_STANDARD_EDITION"] = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU"] = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_DATACENTER_EDITION"] = "WINDOWS_SERVER_2008_DATACENTER_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_ENTERPRISE_EDITION"] = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_STANDARD_EDITION"] = "WINDOWS_SERVER_2008_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_EDITION"] = "WINDOWS_SERVER_2008_WEB_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_STANDARD_EDITION"] = "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_DATACENTER_EDITION"] = "WINDOWS_SERVER_2012_DATACENTER_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU"] = "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU"] = "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_ENTERPRISE_EDITION"] = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU"] = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_STANDARD_EDITION"] = "WINDOWS_SERVER_2012_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU"] = "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU"] = "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_WEB_EDITION"] = "WINDOWS_SERVER_2012_WEB_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_1_CPU"] = "windows-server-2008-license-datacenter-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_2_CPU"] = "windows-server-2008-license-datacenter-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_4_CPU"] = "windows-server-2008-license-datacenter-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_1_CPU"] = "windows-server-2008-license-enterprise-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_2_CPU"] = "windows-server-2008-license-enterprise-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_4_CPU"] = "windows-server-2008-license-enterprise-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_1_CPU"] = "windows-server-2008-license-standard-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU"] = "windows-server-2008-license-standard-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU"] = "windows-server-2008-license-standard-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_1_CPU"] = "windows-server-2008-license-web-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_2_CPU"] = "windows-server-2008-license-web-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_4_CPU"] = "windows-server-2008-license-web-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_1_CPU"] = "windows-server-2012-license-datacenter-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_2_CPU"] = "windows-server-2012-license-datacenter-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_4_CPU"] = "windows-server-2012-license-datacenter-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_1_CPU"] = "windows-server-2012-license-standard-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU"] = "windows-server-2012-license-standard-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_4_CPU"] = "windows-server-2012-license-standard-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_10_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_12_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_14_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_16_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_18_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_20_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_22_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_24_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_8_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_10_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_12_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_14_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_16_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_18_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_20_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_22_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_24_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_8_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_10_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_12_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_14_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_16_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_18_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_20_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_22_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_24_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_8_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_10_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_12_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_14_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_16_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_18_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_20_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_22_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_24_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_8_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_10_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_12_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_14_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_16_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_18_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_20_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_22_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_24_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_8_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_10_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_12_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_14_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_16_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_18_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_20_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_22_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_24_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_8_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_10_CORES"] = "windows-server-2019-license-datacenter-edition-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_12_CORES"] = "windows-server-2019-license-datacenter-edition-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_14_CORES"] = "windows-server-2019-license-datacenter-edition-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_16_CORES"] = "windows-server-2019-license-datacenter-edition-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_18_CORES"] = "windows-server-2019-license-datacenter-edition-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_20_CORES"] = "windows-server-2019-license-datacenter-edition-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_22_CORES"] = "windows-server-2019-license-datacenter-edition-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_24_CORES"] = "windows-server-2019-license-datacenter-edition-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_26_CORES"] = "windows-server-2019-license-datacenter-edition-26-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_28_CORES"] = "windows-server-2019-license-datacenter-edition-28-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_30_CORES"] = "windows-server-2019-license-datacenter-edition-30-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_32_CORES"] = "windows-server-2019-license-datacenter-edition-32-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_34_CORES"] = "windows-server-2019-license-datacenter-edition-34-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_36_CORES"] = "windows-server-2019-license-datacenter-edition-36-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_38_CORES"] = "windows-server-2019-license-datacenter-edition-38-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_40_CORES"] = "windows-server-2019-license-datacenter-edition-40-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_42_CORES"] = "windows-server-2019-license-datacenter-edition-42-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_44_CORES"] = "windows-server-2019-license-datacenter-edition-44-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_46_CORES"] = "windows-server-2019-license-datacenter-edition-46-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_48_CORES"] = "windows-server-2019-license-datacenter-edition-48-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_50_CORES"] = "windows-server-2019-license-datacenter-edition-50-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_52_CORES"] = "windows-server-2019-license-datacenter-edition-52-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_54_CORES"] = "windows-server-2019-license-datacenter-edition-54-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_56_CORES"] = "windows-server-2019-license-datacenter-edition-56-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_58_CORES"] = "windows-server-2019-license-datacenter-edition-58-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_60_CORES"] = "windows-server-2019-license-datacenter-edition-60-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_62_CORES"] = "windows-server-2019-license-datacenter-edition-62-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_64_CORES"] = "windows-server-2019-license-datacenter-edition-64-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_8_CORES"] = "windows-server-2019-license-datacenter-edition-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_10_CORES"] = "windows-server-2019-license-standard-edition-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_12_CORES"] = "windows-server-2019-license-standard-edition-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_14_CORES"] = "windows-server-2019-license-standard-edition-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_16_CORES"] = "windows-server-2019-license-standard-edition-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_18_CORES"] = "windows-server-2019-license-standard-edition-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_20_CORES"] = "windows-server-2019-license-standard-edition-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_22_CORES"] = "windows-server-2019-license-standard-edition-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_24_CORES"] = "windows-server-2019-license-standard-edition-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_26_CORES"] = "windows-server-2019-license-standard-edition-26-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_28_CORES"] = "windows-server-2019-license-standard-edition-28-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_30_CORES"] = "windows-server-2019-license-standard-edition-30-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_32_CORES"] = "windows-server-2019-license-standard-edition-32-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_34_CORES"] = "windows-server-2019-license-standard-edition-34-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_36_CORES"] = "windows-server-2019-license-standard-edition-36-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_38_CORES"] = "windows-server-2019-license-standard-edition-38-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_40_CORES"] = "windows-server-2019-license-standard-edition-40-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_42_CORES"] = "windows-server-2019-license-standard-edition-42-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_44_CORES"] = "windows-server-2019-license-standard-edition-44-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_46_CORES"] = "windows-server-2019-license-standard-edition-46-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_48_CORES"] = "windows-server-2019-license-standard-edition-48-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_50_CORES"] = "windows-server-2019-license-standard-edition-50-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_52_CORES"] = "windows-server-2019-license-standard-edition-52-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_54_CORES"] = "windows-server-2019-license-standard-edition-54-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_56_CORES"] = "windows-server-2019-license-standard-edition-56-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_58_CORES"] = "windows-server-2019-license-standard-edition-58-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_60_CORES"] = "windows-server-2019-license-standard-edition-60-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_62_CORES"] = "windows-server-2019-license-standard-edition-62-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_64_CORES"] = "windows-server-2019-license-standard-edition-64-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_8_CORES"] = "windows-server-2019-license-standard-edition-8-cores";
})(LicenseWindowsOsVersion = exports.LicenseWindowsOsVersion || (exports.LicenseWindowsOsVersion = {}));
/*
 * All SQL Server versions for Windows products
 */
var LicenseWindowsSqlVersion;
(function (LicenseWindowsSqlVersion) {
    LicenseWindowsSqlVersion["SQL_SERVER_2008_STANDARD_EDITION"] = "SQL_SERVER_2008_STANDARD_EDITION";
    LicenseWindowsSqlVersion["SQL_SERVER_2008_STANDARD_EDITION_2_CPU"] = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU";
    LicenseWindowsSqlVersion["SQL_SERVER_2008_WEB_EDITION"] = "SQL_SERVER_2008_WEB_EDITION";
    LicenseWindowsSqlVersion["SQL_SERVER_2008_WEB_EDITION_2_CPU"] = "SQL_SERVER_2008_WEB_EDITION_2_CPU";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION"] = "SQL_SERVER_2012_STANDARD_EDITION";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_12_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_12_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_16_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_16_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_18_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_18_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_20_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_20_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_24_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_24_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_2_CPU"] = "SQL_SERVER_2012_STANDARD_EDITION_2_CPU";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_32_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_32_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_4_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_4_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_6_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_6_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_8_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_8_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_12_CORES"] = "SQL_SERVER_2012_WEB_EDITION_12_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_16_CORES"] = "SQL_SERVER_2012_WEB_EDITION_16_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_18_CORES"] = "SQL_SERVER_2012_WEB_EDITION_18_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_20_CORES"] = "SQL_SERVER_2012_WEB_EDITION_20_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_24_CORES"] = "SQL_SERVER_2012_WEB_EDITION_24_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_32_CORES"] = "SQL_SERVER_2012_WEB_EDITION_32_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_4_CORES"] = "SQL_SERVER_2012_WEB_EDITION_4_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_6_CORES"] = "SQL_SERVER_2012_WEB_EDITION_6_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_8_CORES"] = "SQL_SERVER_2012_WEB_EDITION_8_CORES";
})(LicenseWindowsSqlVersion = exports.LicenseWindowsSqlVersion || (exports.LicenseWindowsSqlVersion = {}));
/*
 * All versions for WorkLight product
 */
var LicenseWorkLightVersion;
(function (LicenseWorkLightVersion) {
    LicenseWorkLightVersion["VERSION_6_1U_1CPU"] = "VERSION-6.1U.1CPU";
    LicenseWorkLightVersion["VERSION_6_1U_2CPU"] = "VERSION-6.1U.2CPU";
    LicenseWorkLightVersion["VERSION_6_2U_1CPU"] = "VERSION-6.2U.1CPU";
    LicenseWorkLightVersion["VERSION_6_2U_2CPU"] = "VERSION-6.2U.2CPU";
    LicenseWorkLightVersion["VERSION_6_EVALUATION"] = "VERSION-6.EVALUATION";
    LicenseWorkLightVersion["WORKLIGHT_LICENSE_VERSION_6_1CPU_1U"] = "worklight-license-version-6-1cpu-1u";
    LicenseWorkLightVersion["WORKLIGHT_LICENSE_VERSION_6_1CPU_2U"] = "worklight-license-version-6-1cpu-2u";
    LicenseWorkLightVersion["WORKLIGHT_LICENSE_VERSION_6_2CPU_1U"] = "worklight-license-version-6-2cpu-1u";
    LicenseWorkLightVersion["WORKLIGHT_LICENSE_VERSION_6_2CPU_2U"] = "worklight-license-version-6-2cpu-2u";
})(LicenseWorkLightVersion = exports.LicenseWorkLightVersion || (exports.LicenseWorkLightVersion = {}));
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
 * OVH subsidiaries
 */
var NichandleOvhSubsidiary;
(function (NichandleOvhSubsidiary) {
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
    NichandleOvhSubsidiary["SN"] = "SN";
    NichandleOvhSubsidiary["TN"] = "TN";
})(NichandleOvhSubsidiary = exports.NichandleOvhSubsidiary || (exports.NichandleOvhSubsidiary = {}));
/*
 * Unit corresponding to a duration range
 */
var OrdercartDurationUnit;
(function (OrdercartDurationUnit) {
    OrdercartDurationUnit["MONTH"] = "month";
    OrdercartDurationUnit["DAY"] = "day";
    OrdercartDurationUnit["NONE"] = "none";
})(OrdercartDurationUnit = exports.OrdercartDurationUnit || (exports.OrdercartDurationUnit = {}));
/*
 * Capacity of a pricing (type)
 */
var OrdercartGenericProductPricingCapacities;
(function (OrdercartGenericProductPricingCapacities) {
    OrdercartGenericProductPricingCapacities["INSTALLATION"] = "installation";
    OrdercartGenericProductPricingCapacities["RENEW"] = "renew";
    OrdercartGenericProductPricingCapacities["UPGRADE"] = "upgrade";
    OrdercartGenericProductPricingCapacities["DOWNGRADE"] = "downgrade";
})(OrdercartGenericProductPricingCapacities = exports.OrdercartGenericProductPricingCapacities || (exports.OrdercartGenericProductPricingCapacities = {}));
/*
 * Strategy of a Pricing
 */
var OrdercartGenericProductPricingStrategy;
(function (OrdercartGenericProductPricingStrategy) {
    OrdercartGenericProductPricingStrategy["STAIRSTEP"] = "stairstep";
    OrdercartGenericProductPricingStrategy["VOLUME"] = "volume";
    OrdercartGenericProductPricingStrategy["TIERED"] = "tiered";
})(OrdercartGenericProductPricingStrategy = exports.OrdercartGenericProductPricingStrategy || (exports.OrdercartGenericProductPricingStrategy = {}));
/*
 * Type of a pricing
 */
var OrdercartGenericProductPricingType;
(function (OrdercartGenericProductPricingType) {
    OrdercartGenericProductPricingType["RENTAL"] = "rental";
    OrdercartGenericProductPricingType["CONSUMPTION"] = "consumption";
    OrdercartGenericProductPricingType["PURCHASE"] = "purchase";
})(OrdercartGenericProductPricingType = exports.OrdercartGenericProductPricingType || (exports.OrdercartGenericProductPricingType = {}));
/*
 * Type of a product
 */
var OrdercartGenericProductType;
(function (OrdercartGenericProductType) {
    OrdercartGenericProductType["DELIVERY"] = "delivery";
    OrdercartGenericProductType["DEPOSIT"] = "deposit";
    OrdercartGenericProductType["SHIPPING"] = "shipping";
    OrdercartGenericProductType["CLOUD_SERVICE"] = "cloud_service";
    OrdercartGenericProductType["SAAS_LICENSE"] = "saas_license";
    OrdercartGenericProductType["STORAGE"] = "storage";
    OrdercartGenericProductType["DOMAIN"] = "domain";
})(OrdercartGenericProductType = exports.OrdercartGenericProductType || (exports.OrdercartGenericProductType = {}));
/*
 * Label corresponding to different type of price
 */
var OrdercartPriceLabel;
(function (OrdercartPriceLabel) {
    OrdercartPriceLabel["PRICE"] = "PRICE";
    OrdercartPriceLabel["DISCOUNT"] = "DISCOUNT";
    OrdercartPriceLabel["FEE"] = "FEE";
    OrdercartPriceLabel["TOTAL"] = "TOTAL";
    OrdercartPriceLabel["RENEW"] = "RENEW";
})(OrdercartPriceLabel = exports.OrdercartPriceLabel || (exports.OrdercartPriceLabel = {}));
2016;
v1: OrdercatalogprivateCloudCapabilities;
2016;
v2: OrdercatalogprivateCloudCapabilities;
2016;
v3: OrdercatalogprivateCloudCapabilities;
2016;
v4: OrdercatalogprivateCloudCapabilities;
2016;
v5: OrdercatalogprivateCloudCapabilities;
2016;
v6: OrdercatalogprivateCloudCapabilities;
2016;
v7: OrdercatalogprivateCloudCapabilities;
OrdercatalogprivateCloudCapabilities;
/*
 * Currency code
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
 * Unit that represent the status of an operation
 */
var OrderupgradeOperationStatus;
(function (OrderupgradeOperationStatus) {
    OrderupgradeOperationStatus["TODO"] = "TODO";
    OrderupgradeOperationStatus["DOING"] = "DOING";
    OrderupgradeOperationStatus["DONE"] = "DONE";
    OrderupgradeOperationStatus["ERROR"] = "ERROR";
    OrderupgradeOperationStatus["DELAYED"] = "DELAYED";
    OrderupgradeOperationStatus["CANCELLED"] = "CANCELLED";
    OrderupgradeOperationStatus["SCHEDULED"] = "SCHEDULED";
})(OrderupgradeOperationStatus = exports.OrderupgradeOperationStatus || (exports.OrderupgradeOperationStatus = {}));
/*
 * Unit that represent the type of an operation
 */
var OrderupgradeOperationType;
(function (OrderupgradeOperationType) {
    OrderupgradeOperationType["UPGRADE"] = "UPGRADE";
})(OrderupgradeOperationType = exports.OrderupgradeOperationType || (exports.OrderupgradeOperationType = {}));
/*
 * How do you want your shipment shipped
 */
var OverTheBoxShippingMethod;
(function (OverTheBoxShippingMethod) {
    OverTheBoxShippingMethod["DHL"] = "dhl";
    OverTheBoxShippingMethod["MONDIALRELAY"] = "mondialRelay";
})(OverTheBoxShippingMethod = exports.OverTheBoxShippingMethod || (exports.OverTheBoxShippingMethod = {}));
/*
 * Typology of number
 */
var TelephonyLineType;
(function (TelephonyLineType) {
    TelephonyLineType["GEOGRAPHIC"] = "geographic";
    TelephonyLineType["NOGEOGRAPHIC"] = "nogeographic";
})(TelephonyLineType = exports.TelephonyLineType || (exports.TelephonyLineType = {}));
/*
 * Number country
 */
var TelephonyNumberCountry;
(function (TelephonyNumberCountry) {
    TelephonyNumberCountry["BE"] = "be";
    TelephonyNumberCountry["CH"] = "ch";
    TelephonyNumberCountry["DE"] = "de";
    TelephonyNumberCountry["ES"] = "es";
    TelephonyNumberCountry["FR"] = "fr";
    TelephonyNumberCountry["GB"] = "gb";
    TelephonyNumberCountry["IT"] = "it";
    TelephonyNumberCountry["UK"] = "uk";
})(TelephonyNumberCountry = exports.TelephonyNumberCountry || (exports.TelephonyNumberCountry = {}));
/*
 * Number offer
 */
var TelephonyNumberOffer;
(function (TelephonyNumberOffer) {
    TelephonyNumberOffer["ALIAS"] = "alias";
    TelephonyNumberOffer["DIDSONLY"] = "didsOnly";
})(TelephonyNumberOffer = exports.TelephonyNumberOffer || (exports.TelephonyNumberOffer = {}));
/*
 * Number special typology
 */
var TelephonyNumberSpecialTypology;
(function (TelephonyNumberSpecialTypology) {
    TelephonyNumberSpecialTypology["BE_ADULTS"] = "be_adults";
    TelephonyNumberSpecialTypology["BE_CONTENT"] = "be_content";
    TelephonyNumberSpecialTypology["BE_GAMES"] = "be_games";
    TelephonyNumberSpecialTypology["BE_GENERAL"] = "be_general";
    TelephonyNumberSpecialTypology["BE_RELAXING"] = "be_relaxing";
    TelephonyNumberSpecialTypology["FR_ACCESS"] = "fr_access";
    TelephonyNumberSpecialTypology["FR_ADULTS"] = "fr_adults";
    TelephonyNumberSpecialTypology["FR_ANNOUNCED"] = "fr_announced";
    TelephonyNumberSpecialTypology["FR_CONFERENCING"] = "fr_conferencing";
    TelephonyNumberSpecialTypology["FR_CONTENTSAUTO"] = "fr_contentsAuto";
    TelephonyNumberSpecialTypology["FR_CONTENTSMANUAL"] = "fr_contentsManual";
    TelephonyNumberSpecialTypology["FR_GAMES"] = "fr_games";
    TelephonyNumberSpecialTypology["FR_LINKING"] = "fr_linking";
    TelephonyNumberSpecialTypology["FR_M2M"] = "fr_m2m";
    TelephonyNumberSpecialTypology["FR_RELATIONSHIP"] = "fr_relationship";
})(TelephonyNumberSpecialTypology = exports.TelephonyNumberSpecialTypology || (exports.TelephonyNumberSpecialTypology = {}));
/*
 * Country of number to port
 */
var TelephonyportabilityCountriesAvailable;
(function (TelephonyportabilityCountriesAvailable) {
    TelephonyportabilityCountriesAvailable["BELGIUM"] = "belgium";
    TelephonyportabilityCountriesAvailable["FRANCE"] = "france";
    TelephonyportabilityCountriesAvailable["SWITZERLAND"] = "switzerland";
})(TelephonyportabilityCountriesAvailable = exports.TelephonyportabilityCountriesAvailable || (exports.TelephonyportabilityCountriesAvailable = {}));
/*
 * Type of number
 */
var TelephonyportabilityNumberType;
(function (TelephonyportabilityNumberType) {
    TelephonyportabilityNumberType["LANDLINE"] = "landline";
    TelephonyportabilityNumberType["SPECIAL"] = "special";
})(TelephonyportabilityNumberType = exports.TelephonyportabilityNumberType || (exports.TelephonyportabilityNumberType = {}));
/*
 * Type of your service offer
 */
var TelephonyportabilityOfferType;
(function (TelephonyportabilityOfferType) {
    TelephonyportabilityOfferType["COMPANY"] = "company";
    TelephonyportabilityOfferType["INDIVIDUAL"] = "individual";
})(TelephonyportabilityOfferType = exports.TelephonyportabilityOfferType || (exports.TelephonyportabilityOfferType = {}));
/*
 * Social reason
 */
var TelephonyportabilitySocialReason;
(function (TelephonyportabilitySocialReason) {
    TelephonyportabilitySocialReason["CORPORATION"] = "corporation";
    TelephonyportabilitySocialReason["INDIVIDUAL"] = "individual";
    TelephonyportabilitySocialReason["PROFESSIONAL"] = "professional";
})(TelephonyportabilitySocialReason = exports.TelephonyportabilitySocialReason || (exports.TelephonyportabilitySocialReason = {}));
/*
 * Special number category
 */
var TelephonyportabilitySpecialNumberCategory;
(function (TelephonyportabilitySpecialNumberCategory) {
    TelephonyportabilitySpecialNumberCategory["ACCESS"] = "access";
    TelephonyportabilitySpecialNumberCategory["ADULTS"] = "adults";
    TelephonyportabilitySpecialNumberCategory["ANNOUNCED"] = "announced";
    TelephonyportabilitySpecialNumberCategory["BE_ADULTS"] = "be_adults";
    TelephonyportabilitySpecialNumberCategory["BE_CONTENT"] = "be_content";
    TelephonyportabilitySpecialNumberCategory["BE_GAMES"] = "be_games";
    TelephonyportabilitySpecialNumberCategory["BE_GENERAL"] = "be_general";
    TelephonyportabilitySpecialNumberCategory["BE_RELAXING"] = "be_relaxing";
    TelephonyportabilitySpecialNumberCategory["CONFERENCING"] = "conferencing";
    TelephonyportabilitySpecialNumberCategory["CONTENTSAUTO"] = "contentsAuto";
    TelephonyportabilitySpecialNumberCategory["CONTENTSMANUAL"] = "contentsManual";
    TelephonyportabilitySpecialNumberCategory["DIRECTORY"] = "directory";
    TelephonyportabilitySpecialNumberCategory["GAMES"] = "games";
    TelephonyportabilitySpecialNumberCategory["LINKING"] = "linking";
    TelephonyportabilitySpecialNumberCategory["M2M"] = "m2m";
    TelephonyportabilitySpecialNumberCategory["RELATIONSHIP"] = "relationship";
})(TelephonyportabilitySpecialNumberCategory = exports.TelephonyportabilitySpecialNumberCategory || (exports.TelephonyportabilitySpecialNumberCategory = {}));
/*
 * All orderable Veeam Cloud Connect offers
 */
var VeeamCloudConnectOffer;
(function (VeeamCloudConnectOffer) {
    VeeamCloudConnectOffer["ADVANCED"] = "advanced";
    VeeamCloudConnectOffer["DEMO"] = "demo";
    VeeamCloudConnectOffer["STARTER"] = "starter";
})(VeeamCloudConnectOffer = exports.VeeamCloudConnectOffer || (exports.VeeamCloudConnectOffer = {}));
/*
 * Geolocation of the IP Address
 */
var VpsipGeolocation;
(function (VpsipGeolocation) {
    VpsipGeolocation["AU"] = "au";
    VpsipGeolocation["BE"] = "be";
    VpsipGeolocation["CA"] = "ca";
    VpsipGeolocation["CZ"] = "cz";
    VpsipGeolocation["DE"] = "de";
    VpsipGeolocation["ES"] = "es";
    VpsipGeolocation["FI"] = "fi";
    VpsipGeolocation["FR"] = "fr";
    VpsipGeolocation["IE"] = "ie";
    VpsipGeolocation["IT"] = "it";
    VpsipGeolocation["LT"] = "lt";
    VpsipGeolocation["NL"] = "nl";
    VpsipGeolocation["PL"] = "pl";
    VpsipGeolocation["PT"] = "pt";
    VpsipGeolocation["SG"] = "sg";
    VpsipGeolocation["UK"] = "uk";
    VpsipGeolocation["US"] = "us";
})(VpsipGeolocation = exports.VpsipGeolocation || (exports.VpsipGeolocation = {}));
/*
 * Possible localization for block
 */
var VrackBlockCountry;
(function (VrackBlockCountry) {
    VrackBlockCountry["BE"] = "be";
    VrackBlockCountry["CZ"] = "cz";
    VrackBlockCountry["DE"] = "de";
    VrackBlockCountry["ES"] = "es";
    VrackBlockCountry["FI"] = "fi";
    VrackBlockCountry["FR"] = "fr";
    VrackBlockCountry["IE"] = "ie";
    VrackBlockCountry["IT"] = "it";
    VrackBlockCountry["LT"] = "lt";
    VrackBlockCountry["NL"] = "nl";
    VrackBlockCountry["PL"] = "pl";
    VrackBlockCountry["PT"] = "pt";
    VrackBlockCountry["UK"] = "uk";
})(VrackBlockCountry = exports.VrackBlockCountry || (exports.VrackBlockCountry = {}));
class Order {
    constructor(client) {
        this.client = client;
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart#GET)
     */
    ListOfYourOVHOrderCarts(description) {
        let url = `/order/cart?`;
        const queryParams = new query_params_1.default();
        if (description) {
            queryParams.set('description', description);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart#POST)
     */
    CreateANewOVHOrderCart(payload) {
        let url = `/order/cart`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D#DELETE)
     */
    DeleteACart(cartId) {
        let url = `/order/cart/${cartId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D#GET)
     */
    RetrieveInformationAboutASpecificCart(cartId) {
        let url = `/order/cart/${cartId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D#PUT)
     */
    ModifyInformationAboutASpecificCart(cartId, payload) {
        let url = `/order/cart/${cartId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Create a analytics project [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics#GET)
     */
    GetInformationsAboutAnalyticsOffers(cartId) {
        let url = `/order/cart/${cartId}/analytics`;
        return this.client.request('GET', url);
    }
    /**
     * Create a analytics project [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics#POST)
     */
    PostANewAnalyticsItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/analytics`;
        return this.client.request('POST', url, payload);
    }
    /**
     * List all addons possible for a analytics project [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics/options#GET)
     */
    GetInformationsAboutAnalyticsOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/analytics/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List all addons possible for a analytics project [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/analytics/options#POST)
     */
    PostANewAnalyticsAddonInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/analytics/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/assign#POST)
     */
    AssignAShoppingCartToAnLoggedinClient(cartId) {
        let url = `/order/cart/${cartId}/assign`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers#GET)
     */
    GetInformationsAboutABaremetalServer(cartId) {
        let url = `/order/cart/${cartId}/baremetalServers`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers#POST)
     */
    PostANewBaremetalServerItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/baremetalServers`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers/options#GET)
     */
    GetInformationsAboutBaremetalServerOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/baremetalServers/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/baremetalServers/options#POST)
     */
    PostANewBaremetalServerOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/baremetalServers/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn#GET)
     */
    GetInformationsAboutCDNOffers(cartId) {
        let url = `/order/cart/${cartId}/cdn`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn#POST)
     */
    PostANewCDNItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cdn`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn/options#GET)
     */
    GetInformationsAboutCDNOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/cdn/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cdn/options#POST)
     */
    PostANewCDNOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cdn/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas#GET)
     */
    GetInformationsAboutCephAsAServiceOffers(cartId) {
        let url = `/order/cart/${cartId}/cephaas`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas#POST)
     */
    PostANewCephAsAServiceItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cephaas`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas/options#GET)
     */
    GetInformationsAboutCephAsAServiceOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/cephaas/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cephaas/options#POST)
     */
    PostANewCephAsAServiceOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cephaas/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/checkout#GET)
     */
    GetPricesAndContractsInformationForYourCart(cartId) {
        let url = `/order/cart/${cartId}/checkout`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/checkout#POST)
     */
    ValidateYourShoppingAndCreateOrder(cartId, payload) {
        let url = `/order/cart/${cartId}/checkout`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud#GET)
     */
    GetInformationsAboutPublicCloudOffers(cartId) {
        let url = `/order/cart/${cartId}/cloud`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud#POST)
     */
    PostANewPublicCloudItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cloud`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud/options#GET)
     */
    GetInformationsAboutPublicCloudOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/cloud/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloud/options#POST)
     */
    PostANewPublicCloudOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cloud/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb#GET)
     */
    GetInformationsAboutCloudWebOffers(cartId) {
        let url = `/order/cart/${cartId}/cloudweb`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb#POST)
     */
    PostANewCloudWebItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cloudweb`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb/options#GET)
     */
    GetInformationsAboutCloudWebOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/cloudweb/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/cloudweb/options#POST)
     */
    PostANewCloudWebOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/cloudweb/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/coupon#DELETE)
     */
    DeleteACouponFromCart(cartId, coupon) {
        let url = `/order/cart/${cartId}/coupon?`;
        const queryParams = new query_params_1.default();
        if (coupon) {
            queryParams.set('coupon', coupon);
        }
        return this.client.request('DELETE', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/coupon#GET)
     */
    RetrieveCouponsAssociatedToCart(cartId) {
        let url = `/order/cart/${cartId}/coupon`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/coupon#POST)
     */
    AddANewCouponToCart(cartId, payload) {
        let url = `/order/cart/${cartId}/coupon`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2#GET)
     */
    GetInformationsAboutSaaSCSP2Offers(cartId) {
        let url = `/order/cart/${cartId}/csp2`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2#POST)
     */
    PostANewSaaSCSP2OfferItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/csp2`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2/options#GET)
     */
    GetInformationsAboutSaaSCSP2Options(cartId, planCode) {
        let url = `/order/cart/${cartId}/csp2/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/csp2/options#POST)
     */
    PostANewSaaSCSP2OptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/csp2/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dbaasTimeseries#GET)
     */
    GetInformationsAboutATimeseriesOffer(cartId) {
        let url = `/order/cart/${cartId}/dbaasTimeseries`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dbaasTimeseries#POST)
     */
    PostANewTimeseriesOfferItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/dbaasTimeseries`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated#GET)
     */
    GetInformationsAboutADedicatedServer(cartId, family, planCode) {
        let url = `/order/cart/${cartId}/dedicated?`;
        const queryParams = new query_params_1.default();
        if (family) {
            queryParams.set('family', family);
        }
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated#POST)
     */
    PostANewDedicatedServerItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/dedicated`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated/options#GET)
     */
    GetInformationsAboutDedicatedServerOptions(cartId, planCode, family) {
        let url = `/order/cart/${cartId}/dedicated/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        if (family) {
            queryParams.set('family', family);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicated/options#POST)
     */
    PostANewDedicatedServerOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/dedicated/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs#GET)
     */
    GetInformationsAboutADedicatedLabsServer(cartId, planCode) {
        let url = `/order/cart/${cartId}/dedicatedLabs?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs#POST)
     */
    PostANewDedicatedLabsServerItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/dedicatedLabs`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs/options#GET)
     */
    GetInformationsAboutDedicatedLabsServerOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/dedicatedLabs/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedLabs/options#POST)
     */
    PostANewDedicatedLabsServerOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/dedicatedLabs/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller#GET)
     */
    GetInformationsAboutADedicatedServerForUSReseller(cartId, family, planCode) {
        let url = `/order/cart/${cartId}/dedicatedReseller?`;
        const queryParams = new query_params_1.default();
        if (family) {
            queryParams.set('family', family);
        }
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller#POST)
     */
    /*
    PostANewDedicatedServerItemInYourCart(cartId: string, payload: OrdercartGenericDedicatedCreation): Promise<OrdercartItem> {
      let url = `/order/cart/${cartId}/dedicatedReseller`
  
      return this.client.request<OrdercartItem>('POST', url, payload)
    }
    */
    /**
     * Missing description [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller/options#GET)
     */
    /*
    GetInformationsAboutDedicatedServerOptions(cartId: string, planCode: string, family?: string): Promise<OrdercartGenericOptionDefinition[]> {
      let url = `/order/cart/${cartId}/dedicatedReseller/options?`
  
      const queryParams = new QueryParams()
      if (planCode) { queryParams.set('planCode', planCode) }
      if (family) { queryParams.set('family', family) }
  
      return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Missing description [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dedicatedReseller/options#POST)
     */
    /*
    PostANewDedicatedServerOptionInYourCart(cartId: string, payload: OrdercartGenericDedicatedOptionsCreation): Promise<OrdercartItem> {
      let url = `/order/cart/${cartId}/dedicatedReseller/options`
  
      return this.client.request<OrdercartItem>('POST', url, payload)
    }
    */
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/deskaas#GET)
     */
    GetInformationsAboutDeskAsAServiceOffers(cartId) {
        let url = `/order/cart/${cartId}/deskaas`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/deskaas#POST)
     */
    PostANewDeskAsAServiceItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/deskaas`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover#GET)
     */
    GetInformationsAboutDedicatedDiscoverServerOffers(cartId) {
        let url = `/order/cart/${cartId}/discover`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover#POST)
     */
    PostANewDedicatedDiscoverServerItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/discover`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover/options#GET)
     */
    GetInformationsAboutDedicatedDiscoverServerOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/discover/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/discover/options#POST)
     */
    PostANewDedicatedDiscoverServerOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/discover/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dns#GET)
     */
    GetInformationsAboutDNSZoneOffer(cartId) {
        let url = `/order/cart/${cartId}/dns`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/dns#POST)
     */
    PostANewDNSZoneItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/dns`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain#GET)
     */
    GetInformationsAboutADomainName(cartId, domain) {
        let url = `/order/cart/${cartId}/domain?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain#POST)
     */
    PostANewDomainInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/domain`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain/options#GET)
     */
    GetInformationsAboutDomainNamesOptions(cartId, domain) {
        let url = `/order/cart/${cartId}/domain/options?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domain/options#POST)
     */
    PostANewDomainNameOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/domain/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainPacks#GET)
     */
    GetInformationsAboutDomainPacksOffersAllDom(cartId, domain) {
        let url = `/order/cart/${cartId}/domainPacks?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainPacks#POST)
     */
    PostANewDomainPacksItemAllDomInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/domainPacks`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainRestore#GET)
     */
    GetInformationsAboutDomainRestore(cartId, domain) {
        let url = `/order/cart/${cartId}/domainRestore?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer#GET)
     */
    GetInformationsAboutADomainNameTransfer(cartId, domain) {
        let url = `/order/cart/${cartId}/domainTransfer?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer#POST)
     */
    PostANewDomainTranferInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/domainTransfer`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer/options#GET)
     */
    GetInformationsAboutDomainNamesTransferOptions(cartId, domain) {
        let url = `/order/cart/${cartId}/domainTransfer/options?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/domainTransfer/options#POST)
     */
    PostANewDomainNameTransferOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/domainTransfer/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro#GET)
     */
    GetInformationsAboutEmailProOffers(cartId) {
        let url = `/order/cart/${cartId}/emailpro`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro#POST)
     */
    PostANewEmailProItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/emailpro`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro/options#GET)
     */
    GetInformationsAboutEmailProOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/emailpro/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/emailpro/options#POST)
     */
    PostANewEmailProOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/emailpro/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange#GET)
     */
    GetInformationsAboutExchangeOffers(cartId) {
        let url = `/order/cart/${cartId}/exchange`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange#POST)
     */
    PostANewExchangeItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/exchange`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange/options#GET)
     */
    GetInformationsAboutExchangeOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/exchange/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchange/options#POST)
     */
    PostANewExchangeOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/exchange/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise#GET)
     */
    GetInformationsAboutExchangeEnterpriseOffers(cartId) {
        let url = `/order/cart/${cartId}/exchangeEnterprise`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise#POST)
     */
    PostANewExchangeEnterpriseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/exchangeEnterprise`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise/options#GET)
     */
    GetInformationsAboutExchangeEnterpriseOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/exchangeEnterprise/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/exchangeEnterprise/options#POST)
     */
    PostANewExchangeEnterpriseOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/exchangeEnterprise/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/hostingReseller#GET)
     */
    GetInformationsAboutHostingResellerOffers(cartId) {
        let url = `/order/cart/${cartId}/hostingReseller`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/hostingReseller#POST)
     */
    PostANewHostingResellerItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/hostingReseller`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip#GET)
     */
    GetInformationsAboutIPAddressesOffers(cartId) {
        let url = `/order/cart/${cartId}/ip`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip#POST)
     */
    PostANewIPAddressesItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/ip`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip/options#GET)
     */
    GetInformationsAboutIPAddressesOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/ip/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ip/options#POST)
     */
    PostANewIPAddressesOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/ip/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing#GET)
     */
    GetInformationsAboutIPLoadBalancingOffers(cartId) {
        let url = `/order/cart/${cartId}/ipLoadbalancing`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing#POST)
     */
    PostANewIPLoadBalancingItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/ipLoadbalancing`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing/options#GET)
     */
    GetInformationsAboutIPLoadBalancingOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/ipLoadbalancing/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ipLoadbalancing/options#POST)
     */
    PostANewIPLoadBalancingOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/ipLoadbalancing/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item#GET)
     */
    ListAllTheItemsOfACart(cartId) {
        let url = `/order/cart/${cartId}/item`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D#DELETE)
     */
    DeleteAnItemFromACart(cartId, itemId) {
        let url = `/order/cart/${cartId}/item/${itemId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D#GET)
     */
    RetrieveInformationAboutASpecificItemOfACart(cartId, itemId) {
        let url = `/order/cart/${cartId}/item/${itemId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D#PUT)
     */
    UpdateSomeValuesOnACartItem(cartId, itemId, payload) {
        let url = `/order/cart/${cartId}/item/${itemId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration#GET)
     */
    RetrieveAllConfigurationItemOfTheCartItem(cartId, itemId, label) {
        let url = `/order/cart/${cartId}/item/${itemId}/configuration?`;
        const queryParams = new query_params_1.default();
        if (label) {
            queryParams.set('label', label);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration#POST)
     */
    SetupConfigurationItemForTheProduct(cartId, itemId, payload) {
        let url = `/order/cart/${cartId}/item/${itemId}/configuration`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration/%7BconfigurationId%7D#DELETE)
     */
    DeleteConfigurationItem(cartId, configurationId, itemId) {
        let url = `/order/cart/${cartId}/item/${itemId}/configuration/${configurationId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/configuration/%7BconfigurationId%7D#GET)
     */
    RetrieveConfigurationItem(cartId, configurationId, itemId) {
        let url = `/order/cart/${cartId}/item/${itemId}/configuration/${configurationId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/item/%7BitemId%7D/requiredConfiguration#GET)
     */
    RetrieveAllRequiredConfigurationItemOfTheCartItem(cartId, itemId) {
        let url = `/order/cart/${cartId}/item/${itemId}/requiredConfiguration`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes#GET)
     */
    GetInformationsAboutKubernetesOffers(cartId) {
        let url = `/order/cart/${cartId}/kubernetes`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes#POST)
     */
    PostANewKubernetesItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/kubernetes`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes/options#GET)
     */
    GetInformationsAboutKubernetesOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/kubernetes/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/kubernetes/options#POST)
     */
    PostANewKubernetesOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/kubernetes/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseCloudLinux#GET)
     */
    GetInformationsAboutCloudLinuxLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licenseCloudLinux`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseCloudLinux#POST)
     */
    PostANewCloudLinuxLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licenseCloudLinux`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensecPanel#GET)
     */
    GetInformationsAboutCPanelLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licensecPanel`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensecPanel#POST)
     */
    PostANewCPanelLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licensecPanel`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseDirectadmin#GET)
     */
    GetInformationsAboutDirectadminLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licenseDirectadmin`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseDirectadmin#POST)
     */
    PostANewDirectadminLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licenseDirectadmin`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk#GET)
     */
    GetInformationsAboutPleskLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licensePlesk`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk#POST)
     */
    PostANewPleskLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licensePlesk`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk/options#GET)
     */
    GetInformationsAboutPleskLicenseOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/licensePlesk/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licensePlesk/options#POST)
     */
    PostANewPleskLicenseOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licensePlesk/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseSqlServer#GET)
     */
    GetInformationsAboutSqlServerLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licenseSqlServer`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseSqlServer#POST)
     */
    PostANewSqlServerLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licenseSqlServer`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseVirtuozzo#GET)
     */
    GetInformationsAboutVirtuozzoLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licenseVirtuozzo`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseVirtuozzo#POST)
     */
    PostANewVirtuozzoLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licenseVirtuozzo`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWindows#GET)
     */
    GetInformationsAboutWindowsLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licenseWindows`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWindows#POST)
     */
    PostANewWindowsLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licenseWindows`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWorklight#GET)
     */
    GetInformationsAboutWorklightLicensesOffers(cartId) {
        let url = `/order/cart/${cartId}/licenseWorklight`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/licenseWorklight#POST)
     */
    PostANewWorklightLicenseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/licenseWorklight`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs#GET)
     */
    GetInformationsAboutLogsOffers(cartId) {
        let url = `/order/cart/${cartId}/logs`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs#POST)
     */
    PostANewLogsItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/logs`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs/options#GET)
     */
    GetInformationsAboutLogsOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/logs/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/logs/options#POST)
     */
    PostANewLogsOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/logs/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices#GET)
     */
    GetInformationsAboutManagedServicesOffers(cartId) {
        let url = `/order/cart/${cartId}/managedServices`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices#POST)
     */
    PostANewManagedServicesItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/managedServices`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices/options#GET)
     */
    GetInformationsAboutManagedServicesOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/managedServices/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/managedServices/options#POST)
     */
    PostANewManagedServicesOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/managedServices/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics#GET)
     */
    GetInformationsAboutMetricsOffers(cartId) {
        let url = `/order/cart/${cartId}/metrics`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics#POST)
     */
    PostANewMetricsItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/metrics`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics/options#GET)
     */
    GetInformationsAboutMetricsOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/metrics/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/metrics/options#POST)
     */
    PostANewMetricsOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/metrics/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft#GET)
     */
    GetInformationsAboutMicrosoftOffers(cartId) {
        let url = `/order/cart/${cartId}/microsoft`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft#POST)
     */
    PostANewMicrosoftOfferItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/microsoft`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft/options#GET)
     */
    GetInformationsAboutMicrosoftOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/microsoft/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/microsoft/options#POST)
     */
    PostANewMicrosoftOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/microsoft/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha#GET)
     */
    GetInformationsAboutNASHAOffers(cartId) {
        let url = `/order/cart/${cartId}/nasha`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha#POST)
     */
    PostANewNASHAItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/nasha`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha/options#GET)
     */
    GetInformationsAboutNASHAOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/nasha/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/nasha/options#POST)
     */
    PostANewNASHAOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/nasha/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365#GET)
     */
    GetInformationsAboutOffice365Licenses(cartId) {
        let url = `/order/cart/${cartId}/office365`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365#POST)
     */
    PostANewOffice365ItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/office365`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365/options#GET)
     */
    GetInformationsAboutOffice365Options(cartId, planCode) {
        let url = `/order/cart/${cartId}/office365/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365/options#POST)
     */
    PostANewOffice365OptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/office365/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid#GET)
     */
    GetInformationsAboutOffice365PrepaidLicenses(cartId) {
        let url = `/order/cart/${cartId}/office365Prepaid`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid#POST)
     */
    PostANewOffice365PrepaidItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/office365Prepaid`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid/options#GET)
     */
    GetInformationsAboutOffice365PrepaidOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/office365Prepaid/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/office365Prepaid/options#POST)
     */
    PostANewOffice365PrepaidOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/office365Prepaid/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb#GET)
     */
    GetInformationsAboutOverTheBoxOffers(cartId) {
        let url = `/order/cart/${cartId}/otb`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb#POST)
     */
    PostANewOverTheBoxItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/otb`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb/options#GET)
     */
    GetInformationsAboutOverTheBoxOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/otb/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/otb/options#POST)
     */
    PostANewOverTheBoxOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/otb/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ovhCloudConnect#GET)
     */
    GetInformationsAboutOVHcloudConnectOffers(cartId) {
        let url = `/order/cart/${cartId}/ovhCloudConnect`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/ovhCloudConnect#POST)
     */
    PostANewOVHcloudConnectItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/ovhCloudConnect`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/paasmon#GET)
     */
    GetInformationsAboutPaaSMonitoringOffers(cartId) {
        let url = `/order/cart/${cartId}/paasmon`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/paasmon#POST)
     */
    PostANewPaaSMonitoringItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/paasmon`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud#GET)
     */
    GetInformationsAboutHostedPrivateCloudOffers(cartId) {
        let url = `/order/cart/${cartId}/privateCloud`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud#POST)
     */
    PostANewHostedPrivateCloudItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloud`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud/options#GET)
     */
    GetInformationsAboutHostedPrivateCloudOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/privateCloud/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloud/options#POST)
     */
    PostANewHostedPrivateCloudOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloud/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI#GET)
     */
    GetInformationsAboutPrivateCloudCDIOffers(cartId) {
        let url = `/order/cart/${cartId}/privateCloudCDI`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI#POST)
     */
    PostANewPrivateCloudCDIItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudCDI`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI/options#GET)
     */
    GetInformationsAboutPrivateCloudCDIOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/privateCloudCDI/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudCDI/options#POST)
     */
    PostANewPrivateCloudCDIOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudCDI/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC#GET)
     */
    GetInformationsAboutPrivateCloudDedicatedCloudOffers(cartId) {
        let url = `/order/cart/${cartId}/privateCloudDC`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC#POST)
     */
    PostANewPrivateCloudDedicatedCloudItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudDC`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC/options#GET)
     */
    GetInformationsAboutPrivateCloudDedicatedCloudOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/privateCloudDC/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudDC/options#POST)
     */
    PostANewPrivateCloudDedicatedCloudOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudDC/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller#GET)
     */
    GetInformationsAboutPrivateCloudResellerOffers(cartId) {
        let url = `/order/cart/${cartId}/privateCloudReseller`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller#POST)
     */
    PostANewPrivateCloudResellerItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudReseller`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller/options#GET)
     */
    GetInformationsAboutPrivateCloudResellerOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/privateCloudReseller/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudReseller/options#POST)
     */
    PostANewPrivateCloudResellerOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudReseller/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise#GET)
     */
    GetInformationsAboutPrivateCloudResellerEnterpriseOffers(cartId) {
        let url = `/order/cart/${cartId}/privateCloudResellerEnterprise`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise#POST)
     */
    PostANewPrivateCloudResellerEnterpriseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudResellerEnterprise`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise/options#GET)
     */
    GetInformationsAboutPrivateCloudResellerEnterpriseOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/privateCloudResellerEnterprise/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudResellerEnterprise/options#POST)
     */
    PostANewPrivateCloudResellerEnterpriseOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudResellerEnterprise/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC#GET)
     */
    GetInformationsAboutPrivateCloudSDDCOffers(cartId) {
        let url = `/order/cart/${cartId}/privateCloudSDDC`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC#POST)
     */
    PostANewPrivateCloudSDDCItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudSDDC`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC/options#GET)
     */
    GetInformationsAboutPrivateCloudSDDCOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/privateCloudSDDC/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/privateCloudSDDC/options#POST)
     */
    PostANewPrivateCloudSDDCOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/privateCloudSDDC/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/reseller#GET)
     */
    GetInformationsAboutResellerOffers(cartId) {
        let url = `/order/cart/${cartId}/reseller`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/reseller#POST)
     */
    PostANewResellerOfferItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/reseller`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint#GET)
     */
    GetInformationsAboutSharepointOffers(cartId) {
        let url = `/order/cart/${cartId}/sharepoint`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint#POST)
     */
    PostANewSharepointOfferItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/sharepoint`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint/options#GET)
     */
    GetInformationsAboutSharepointOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/sharepoint/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sharepoint/options#POST)
     */
    PostANewSharepointOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/sharepoint/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sms#GET)
     */
    GetInformationsAboutSMSOffers(cartId) {
        let url = `/order/cart/${cartId}/sms`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sms#POST)
     */
    PostANewSMSItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/sms`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo#GET)
     */
    GetInformationsAboutSSLComodoOffers(cartId) {
        let url = `/order/cart/${cartId}/sslComodo`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo#POST)
     */
    PostANewSSLComodoItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/sslComodo`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo/options#GET)
     */
    GetInformationsAboutSSLComodoOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/sslComodo/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslComodo/options#POST)
     */
    PostANewSSLComodoOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/sslComodo/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway#GET)
     */
    GetInformationsAboutSSLGatewayOffers(cartId) {
        let url = `/order/cart/${cartId}/sslGateway`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway#POST)
     */
    PostANewSSLGatewayItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/sslGateway`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway/options#GET)
     */
    GetInformationsAboutSSLGatewayOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/sslGateway/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/sslGateway/options#POST)
     */
    PostANewSSLGatewayOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/sslGateway/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/summary#GET)
     */
    GetASummaryOfYourCurrentOrder(cartId) {
        let url = `/order/cart/${cartId}/summary`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony#GET)
     */
    GetInformationsAboutVoIPOffers(cartId) {
        let url = `/order/cart/${cartId}/telephony`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony#POST)
     */
    PostANewVoIPItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/telephony`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony/options#GET)
     */
    GetInformationsAboutVoIPOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/telephony/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/telephony/options#POST)
     */
    PostANewVoIPOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/telephony/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * List of OVHcloud Connect product [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vco#GET)
     */
    /*
    GetInformationsAboutOVHcloudConnectOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/cart/${cartId}/vco`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * List of OVHcloud Connect product [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vco#POST)
     */
    /*
    PostANewOVHcloudConnectItemInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number): Promise<OrdercartItem> {
      let url = `/order/cart/${cartId}/vco`
  
      return this.client.request<OrdercartItem>('POST', url, {duration, planCode, pricingMode, quantity})
    }
    */
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi#GET)
     */
    GetInformationsAboutHorizonViewOffers(cartId) {
        let url = `/order/cart/${cartId}/vdi`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi#POST)
     */
    PostANewHorizonViewItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/vdi`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi/options#GET)
     */
    GetInformationsAboutHorizonViewOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/vdi/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vdi/options#POST)
     */
    PostANewHorizonViewOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/vdi/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc#GET)
     */
    GetInformationsAboutVeeamCloudConnectOffers(cartId) {
        let url = `/order/cart/${cartId}/veeamcc`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc#POST)
     */
    PostANewVeeamCloudConnectItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/veeamcc`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc/options#GET)
     */
    GetInformationsAboutVeeamCloudConnectOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/veeamcc/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamcc/options#POST)
     */
    PostANewVeeamCloudConnectOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/veeamcc/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise#GET)
     */
    GetInformationsAboutVeeamEnterpriseOffers(cartId) {
        let url = `/order/cart/${cartId}/veeamEnterprise`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise#POST)
     */
    PostANewVeeamEnterpriseItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/veeamEnterprise`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise/options#GET)
     */
    GetInformationsAboutVeeamEnterpriseOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/veeamEnterprise/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/veeamEnterprise/options#POST)
     */
    PostANewVeeamEnterpriseOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/veeamEnterprise/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps#GET)
     */
    GetInformationsAboutVPSOffers(cartId) {
        let url = `/order/cart/${cartId}/vps`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps#POST)
     */
    PostANewVPSItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/vps`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps/options#GET)
     */
    GetInformationsAboutVPSOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/vps/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vps/options#POST)
     */
    PostANewVPSOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/vps/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrack#GET)
     */
    GetInformationsAboutVRackOffers(cartId) {
        let url = `/order/cart/${cartId}/vrack`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrack#POST)
     */
    PostANewVRackItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/vrack`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrackReseller#GET)
     */
    /*
    GetInformationsAboutVRackOffers(cartId: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/cart/${cartId}/vrackReseller`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Missing description [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/vrackReseller#POST)
     */
    /*
    PostANewVRackItemInYourCart(cartId: string, payload: OrdercartGenericProductCreation): Promise<OrdercartItem> {
      let url = `/order/cart/${cartId}/vrackReseller`
  
      return this.client.request<OrdercartItem>('POST', url, payload)
    }
    */
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting#GET)
     */
    GetInformationsAboutWebHostingOffers(cartId) {
        let url = `/order/cart/${cartId}/webHosting`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting#POST)
     */
    PostANewWebHostingItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/webHosting`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting/options#GET)
     */
    GetInformationsAboutWebHostingOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/webHosting/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/webHosting/options#POST)
     */
    PostANewWebHostingOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/webHosting/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * List of xdsl product [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl#GET)
     */
    GetInformationsAboutXdslOffers(cartId) {
        let url = `/order/cart/${cartId}/xdsl`;
        return this.client.request('GET', url);
    }
    /**
     * List of xdsl product [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl#POST)
     */
    PostANewXdslItemInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/xdsl`;
        return this.client.request('POST', url, payload);
    }
    /**
     * List of xdsl addon [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl/options#GET)
     */
    GetInformationsAboutXdslOptions(cartId, planCode) {
        let url = `/order/cart/${cartId}/xdsl/options?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List of xdsl addon [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cart/%7BcartId%7D/xdsl/options#POST)
     */
    PostANewXdslOptionInYourCart(cartId, payload) {
        let url = `/order/cart/${cartId}/xdsl/options`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Operations about the DEDICATED service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/baremetalServers#GET)
     */
    ListAvailableServices() {
        let url = `/order/cartServiceOption/baremetalServers`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/baremetalServers/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/baremetalServers/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalBaremetalServersOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/baremetalServers/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/baremetalServers/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/baremetalServers/%7BserviceName%7D#POST)
     */
    PostAnAdditionalBaremetalServersOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/baremetalServers/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the PUBLICCLOUD service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/cloud#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/cloud`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/cloud/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/cloud/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalCloudOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/cloud/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/cloud/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/cloud/%7BserviceName%7D#POST)
     */
    PostAnAdditionalCloudOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/cloud/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the DEDICATED service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/dedicated#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/dedicated`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/dedicated/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/dedicated/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalDedicatedOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/dedicated/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/dedicated/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/dedicated/%7BserviceName%7D#POST)
     */
    PostAnAdditionalDedicatedOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/dedicated/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the DOMAIN service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/domain#GET)
     */
    /*
    ListAvailableServices(whoisOwner?: string): Promise<string[]> {
      let url = `/order/cartServiceOption/domain?`
  
      const queryParams = new QueryParams()
      if (whoisOwner) { queryParams.set('whoisOwner', whoisOwner) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/domain/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/domain/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalDomainOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/domain/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/domain/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/domain/%7BserviceName%7D#POST)
     */
    PostAnAdditionalDomainOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/domain/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the PROEMAIL service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/emailpro#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/emailpro`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/emailpro/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/emailpro/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalEmailProOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/emailpro/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/emailpro/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/emailpro/%7BserviceName%7D#POST)
     */
    PostAnAdditionalEmailProOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/emailpro/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the IPLB service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/ipLoadbalancing#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/ipLoadbalancing`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/ipLoadbalancing/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalIPLoadBalancingOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/ipLoadbalancing/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/ipLoadbalancing/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/ipLoadbalancing/%7BserviceName%7D#POST)
     */
    PostAnAdditionalIPLoadBalancingOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/ipLoadbalancing/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the DBAAS-LOGS service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/logs#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/logs`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/logs/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/logs/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalLogsOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/logs/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/logs/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/logs/%7BserviceName%7D#POST)
     */
    PostAnAdditionalLogsOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/logs/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the MSSERVICES service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoft#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/microsoft`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/microsoft/#serviceName# [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoft/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalMicrosoftOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/microsoft/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/microsoft/#serviceName# [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoft/%7BserviceName%7D#POST)
     */
    PostAnAdditionalMicrosoftOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/microsoft/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the EXCHANGE service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoftExchange#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/microsoftExchange`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoftExchange/%7BserviceName%7D#GET)
     */
    /*
    GetInformationsAboutAdditionalMicrosoftOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
      let url = `/order/cartServiceOption/microsoftExchange/${serviceName}`
  
      return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/microsoftExchange/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/microsoftExchange/%7BserviceName%7D#POST)
     */
    /*
    PostAnAdditionalMicrosoftOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
      let url = `/order/cartServiceOption/microsoftExchange/${serviceName}`
  
      return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
    }
    */
    /**
     * Operations about the OFFICE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/office365Prepaid#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/office365Prepaid`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/office365/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/office365Prepaid/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalOfficeOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/office365Prepaid/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/office365/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/office365Prepaid/%7BserviceName%7D#POST)
     */
    PostAnAdditionalOfficeOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/office365Prepaid/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the PCC service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloud#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/privateCloud`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/privateCloud/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloud/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalPrivateCloudOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/privateCloud/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/privateCloud/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloud/%7BserviceName%7D#POST)
     */
    PostAnAdditionalPrivateCloudOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/privateCloud/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the PCC service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudReseller#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/privateCloudReseller`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName# [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudReseller/%7BserviceName%7D#GET)
     */
    /*
    GetInformationsAboutAdditionalPrivateCloudOfferForYourService(serviceName: string): Promise<OrdercartGenericOptionDefinition[]> {
      let url = `/order/cartServiceOption/privateCloudReseller/${serviceName}`
  
      return this.client.request<OrdercartGenericOptionDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/privateCloudReseller/#serviceName# [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudReseller/%7BserviceName%7D#POST)
     */
    /*
    PostAnAdditionalPrivateCloudOptionInYourCart(cartId: string, duration: string, planCode: string, pricingMode: string, quantity: number, serviceName: string): Promise<OrdercartItem> {
      let url = `/order/cartServiceOption/privateCloudReseller/${serviceName}`
  
      return this.client.request<OrdercartItem>('POST', url, {cartId, duration, planCode, pricingMode, quantity})
    }
    */
    /**
     * Operations about the PCC service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudResellerEnterprise#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/privateCloudResellerEnterprise`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudResellerEnterprise/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalPrivateCloudEnterpriseOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/privateCloudResellerEnterprise/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/privateCloudResellerEnterprise/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/privateCloudResellerEnterprise/%7BserviceName%7D#POST)
     */
    PostAnAdditionalPrivateCloudEnterpriseOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/privateCloudResellerEnterprise/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the SHAREPOINT service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sharepoint#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/sharepoint`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/sharepoint/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sharepoint/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalSharepointOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/sharepoint/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/sharepoint/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sharepoint/%7BserviceName%7D#POST)
     */
    PostAnAdditionalSharepointOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/sharepoint/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the SSLGATEWAY service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sslGateway#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/sslGateway`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/sslGateway/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sslGateway/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalSSLGatewayOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/sslGateway/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/sslGateway/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/sslGateway/%7BserviceName%7D#POST)
     */
    PostAnAdditionalSSLGatewayOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/sslGateway/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the HORIZONVIEW service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vdi#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/vdi`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/vdi/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vdi/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalHorizonViewOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/vdi/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/vdi/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vdi/%7BserviceName%7D#POST)
     */
    PostAnAdditionalHorizonViewOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/vdi/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the VPS service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vps#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/vps`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/vps/#serviceName# [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vps/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalVPSOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/vps/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/vps/#serviceName# [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/vps/%7BserviceName%7D#POST)
     */
    PostAnAdditionalVPSOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/vps/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Operations about the HOSTING service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/webHosting#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cartServiceOption/webHosting`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/cartServiceOptions/webHosting/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/webHosting/%7BserviceName%7D#GET)
     */
    GetInformationsAboutAdditionalWebHostingOfferForYourService(serviceName) {
        let url = `/order/cartServiceOption/webHosting/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/cartServiceOptions/webHosting/#serviceName# [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cartServiceOption/webHosting/%7BserviceName%7D#POST)
     */
    PostAnAdditionalWebHostingOptionInYourCart(cartId, duration, planCode, pricingMode, quantity, serviceName) {
        let url = `/order/cartServiceOption/webHosting/${serviceName}`;
        return this.client.request('POST', url, { cartId, duration, planCode, pricingMode, quantity });
    }
    /**
     * Missing description [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted#GET)
     */
    RetrieveListOfCatalogName() {
        let url = `/order/catalog/formatted`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/cloud#GET)
     */
    RetrieveInformationOfPublicCloudCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/cloud?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/dedicated#GET)
     */
    RetrieveInformationOfDedicatedServerCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/dedicated?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/deskaas#GET)
     */
    RetrieveInformationOfDeskAsAServiceCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/deskaas?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/discover#GET)
     */
    RetrieveInformationOfDedicatedDiscoverOfferServerCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/discover?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/ip#GET)
     */
    RetrieveInformationOfIPAddressesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/ip?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseCloudLinux#GET)
     */
    RetrieveInformationOfCloudLinuxLicensesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licenseCloudLinux?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licensecPanel#GET)
     */
    RetrieveInformationOfCPanelLicensesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licensecPanel?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseDirectadmin#GET)
     */
    RetrieveInformationOfDirectadminLicensesOffersCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licenseDirectadmin?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licensePlesk#GET)
     */
    RetrieveInformationOfPleskLicensesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licensePlesk?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseSqlServer#GET)
     */
    RetrieveInformationOfSqlServerLicensesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licenseSqlServer?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseVirtuozzo#GET)
     */
    RetrieveInformationOfVirtuozzoLicensesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licenseVirtuozzo?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseWindows#GET)
     */
    RetrieveInformationOfWindowsLicensesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licenseWindows?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/licenseWorklight#GET)
     */
    RetrieveInformationOfWorklightLicensesCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/licenseWorklight?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/logs#GET)
     */
    RetrieveInformationOfLogsDataPlatformCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/logs?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloud#GET)
     */
    RetrieveInformationOfPrivateCloudCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/privateCloud?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudCDI#GET)
     */
    RetrieveInformationOfPrivateCloudCDICatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/privateCloudCDI?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudDC#GET)
     */
    RetrieveInformationOfPrivateCloudDedicatedCloudCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/privateCloudDC?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudReseller#GET)
     */
    RetrieveInformationOfPrivateCloudResellerCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/privateCloudReseller?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudResellerEnterprise#GET)
     */
    RetrieveInformationOfPrivateCloudResellerEnterpriseCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/privateCloudResellerEnterprise?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/privateCloudSDDC#GET)
     */
    RetrieveInformationOfPrivateCloudSDDCCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/privateCloudSDDC?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/reseller#GET)
     */
    RetrieveInformationOfResellerCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/reseller?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/formatted/vps#GET)
     */
    RetrieveInformationOfVPSCatalog(ovhSubsidiary) {
        let url = `/order/catalog/formatted/vps?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/catalog/public/baremetalServers#GET)
     */
    RetrieveBaremetalServersCatalog(ovhSubsidiary) {
        let url = `/order/catalog/public/baremetalServers?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operations about the CDNANYCAST service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cdn/dedicated`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D#GET)
     */
    GetAllowedOptions(serviceName) {
        let url = `/order/cdn/dedicated/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Order Backend Option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/backend#GET)
     */
    GetAllowedDurationsForBackendOption(backend, serviceName) {
        let url = `/order/cdn/dedicated/${serviceName}/backend?`;
        const queryParams = new query_params_1.default();
        if (backend) {
            queryParams.set('backend', backend.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order Backend Option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/backend/%7Bduration%7D#GET)
     */
    GetPricesAndContractsInformation(backend, duration, serviceName) {
        let url = `/order/cdn/dedicated/${serviceName}/backend/${duration}?`;
        const queryParams = new query_params_1.default();
        if (backend) {
            queryParams.set('backend', backend.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order Backend Option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/backend/%7Bduration%7D#POST)
     */
    CreateOrder(backend, duration, serviceName) {
        let url = `/order/cdn/dedicated/${serviceName}/backend/${duration}`;
        return this.client.request('POST', url, { backend });
    }
    /**
     * Upgrade cacheRule Option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/cacheRule#GET)
     */
    GetAllowedDurationsForCacheRuleOption(cacheRule, serviceName) {
        let url = `/order/cdn/dedicated/${serviceName}/cacheRule?`;
        const queryParams = new query_params_1.default();
        if (cacheRule) {
            queryParams.set('cacheRule', cacheRule.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Upgrade cacheRule Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/cacheRule/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(cacheRule: CdnanycastOrderCacheRule, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cdn/dedicated/${serviceName}/cacheRule/${duration}?`
  
      const queryParams = new QueryParams()
      if (cacheRule) { queryParams.set('cacheRule', cacheRule.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade cacheRule Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/cacheRule/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(cacheRule: CdnanycastOrderCacheRule, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cdn/dedicated/${serviceName}/cacheRule/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {cacheRule})
    }
    */
    /**
     * Order Quota [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/quota#GET)
     */
    GetAllowedDurationsForQuotaOption(quota, serviceName) {
        let url = `/order/cdn/dedicated/${serviceName}/quota?`;
        const queryParams = new query_params_1.default();
        if (quota) {
            queryParams.set('quota', quota.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order Quota [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/quota/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, quota: CdnanycastOrderQuota, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cdn/dedicated/${serviceName}/quota/${duration}?`
  
      const queryParams = new QueryParams()
      if (quota) { queryParams.set('quota', quota.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order Quota [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/%7BserviceName%7D/quota/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, quota: CdnanycastOrderQuota, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cdn/dedicated/${serviceName}/quota/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {quota})
    }
    */
    /**
     * Order a New Dedicated CDN Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/new#GET)
     */
    GetAllowedDurationsForNewOption() {
        let url = `/order/cdn/dedicated/new`;
        return this.client.request('GET', url);
    }
    /**
     * Order a New Dedicated CDN Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string): Promise<OrderOrder> {
      let url = `/order/cdn/dedicated/new/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order a New Dedicated CDN Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/dedicated/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string): Promise<OrderOrder> {
      let url = `/order/cdn/dedicated/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Operations about the CDNSTATIC service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cdn/webstorage`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/cdn/webstorage/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Upgrade Storage Option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/storage#GET)
     */
    GetAllowedDurationsForTorageOption(serviceName, storage) {
        let url = `/order/cdn/webstorage/${serviceName}/storage?`;
        const queryParams = new query_params_1.default();
        if (storage) {
            queryParams.set('storage', storage.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Upgrade Storage Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/storage/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, storage: CdnwebstorageOrderStorage): Promise<OrderOrder> {
      let url = `/order/cdn/webstorage/${serviceName}/storage/${duration}?`
  
      const queryParams = new QueryParams()
      if (storage) { queryParams.set('storage', storage.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade Storage Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/storage/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, storage: CdnwebstorageOrderStorage): Promise<OrderOrder> {
      let url = `/order/cdn/webstorage/${serviceName}/storage/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {storage})
    }
    */
    /**
     * Order Traffic [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/traffic#GET)
     */
    /*
    GetPricesAndContractsInformation(bandwidth: CdnwebstorageOrderTraffic, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cdn/webstorage/${serviceName}/traffic?`
  
      const queryParams = new QueryParams()
      if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order Traffic [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cdn/webstorage/%7BserviceName%7D/traffic#POST)
     */
    /*
    CreateOrder(bandwidth: CdnwebstorageOrderTraffic, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cdn/webstorage/${serviceName}/traffic`
  
      return this.client.request<OrderOrder>('POST', url, {bandwidth})
    }
    */
    /**
     * Operations about the PUBLICCLOUD service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/cloud/project`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/cloud/project/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order credit usable on your Cloud project [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/credit#GET)
     */
    /*
    GetPricesAndContractsInformation(amount: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cloud/project/${serviceName}/credit?`
  
      const queryParams = new QueryParams()
      if (amount) { queryParams.set('amount', amount.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order credit usable on your Cloud project [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/credit#POST)
     */
    /*
    CreateOrder(amount: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/cloud/project/${serviceName}/credit`
  
      return this.client.request<OrderOrder>('POST', url, {amount})
    }
    */
    /**
     * Order failover ip on your Cloud project [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/ip#GET)
     */
    /*
    GetPricesAndContractsInformation(instanceId: string, quantity: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
      let url = `/order/cloud/project/${serviceName}/ip?`
  
      const queryParams = new QueryParams()
      if (instanceId) { queryParams.set('instanceId', instanceId) }
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
      if (country) { queryParams.set('country', country.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order failover ip on your Cloud project [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/cloud/project/%7BserviceName%7D/ip#POST)
     */
    /*
    CreateOrder(instanceId: string, quantity: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
      let url = `/order/cloud/project/${serviceName}/ip`
  
      return this.client.request<OrderOrder>('POST', url, {instanceId, quantity, country})
    }
    */
    /**
     * Operations about the HOUSING service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/dedicated/housing`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/dedicated/housing/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order an APC for this bay [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D/APC#GET)
     */
    GetAllowedDurationsForAPCOption(serviceName) {
        let url = `/order/dedicated/housing/${serviceName}/APC`;
        return this.client.request('GET', url);
    }
    /**
     * Order an APC for this bay [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D/APC/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/housing/${serviceName}/APC/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order an APC for this bay [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/housing/%7BserviceName%7D/APC/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/housing/${serviceName}/APC/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order a new Nas HA [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/nasha/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(datacenter: DedicatedNasHAZone, model: DedicatedNasHAOffer): Promise<string[]> {
      let url = `/order/dedicated/nasha/new?`
  
      const queryParams = new QueryParams()
      if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
      if (model) { queryParams.set('model', model.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new Nas HA [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/nasha/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(datacenter: DedicatedNasHAZone, duration: string, model: DedicatedNasHAOffer): Promise<OrderOrder> {
      let url = `/order/dedicated/nasha/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
      if (model) { queryParams.set('model', model.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new Nas HA [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/nasha/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(datacenter: DedicatedNasHAZone, duration: string, model: DedicatedNasHAOffer): Promise<OrderOrder> {
      let url = `/order/dedicated/nasha/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {datacenter, model})
    }
    */
    /**
     * Operations about the DEDICATED service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/dedicated/server`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/dedicated/server/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order a backup storage for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/backupStorage#GET)
     */
    GetAllowedDurationsForBackupStorageOption(capacity, serviceName) {
        let url = `/order/dedicated/server/${serviceName}/backupStorage?`;
        const queryParams = new query_params_1.default();
        if (capacity) {
            queryParams.set('capacity', capacity.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order a backup storage for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/backupStorage/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(capacity: DedicatedserverBackupStorageCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/backupStorage/${duration}?`
  
      const queryParams = new QueryParams()
      if (capacity) { queryParams.set('capacity', capacity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a backup storage for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/backupStorage/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(capacity: DedicatedserverBackupStorageCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/backupStorage/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {capacity})
    }
    */
    /**
     * Order bandwidth for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidth#GET)
     */
    GetAllowedDurationsForBandwidthOption(bandwidth, serviceName, type) {
        let url = `/order/dedicated/server/${serviceName}/bandwidth?`;
        const queryParams = new query_params_1.default();
        if (bandwidth) {
            queryParams.set('bandwidth', bandwidth.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order bandwidth for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidth/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(bandwidth: DedicatedserverBandwidthOrder, duration: string, serviceName: string, type: DedicatedserverBandwidthOrderType): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/bandwidth/${duration}?`
  
      const queryParams = new QueryParams()
      if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }
      if (type) { queryParams.set('type', type.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order bandwidth for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidth/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(bandwidth: DedicatedserverBandwidthOrder, duration: string, serviceName: string, type: DedicatedserverBandwidthOrderType): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/bandwidth/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {bandwidth, type})
    }
    */
    /**
     * Order vRack bandwidth for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidthvRack#GET)
     */
    GetAllowedDurationsForBandwidthvRackOption(bandwidth, serviceName) {
        let url = `/order/dedicated/server/${serviceName}/bandwidthvRack?`;
        const queryParams = new query_params_1.default();
        if (bandwidth) {
            queryParams.set('bandwidth', bandwidth.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order vRack bandwidth for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidthvRack/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(bandwidth: DedicatedserverBandwidthvRackOrder, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/bandwidthvRack/${duration}?`
  
      const queryParams = new QueryParams()
      if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order vRack bandwidth for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/bandwidthvRack/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(bandwidth: DedicatedserverBandwidthvRackOrder, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/bandwidthvRack/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {bandwidth})
    }
    */
    /**
     * Order a failover IP for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/failoverIP#GET)
     */
    GetAllowedDurationsForFailoverIPOption(country, serviceName) {
        let url = `/order/dedicated/server/${serviceName}/failoverIP?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order a failover IP for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/failoverIP/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(country: DedicatedserverIpCountry, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/failoverIP/${duration}?`
  
      const queryParams = new QueryParams()
      if (country) { queryParams.set('country', country.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a failover IP for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/failoverIP/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(country: DedicatedserverIpCountry, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/failoverIP/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {country})
    }
    */
    /**
     * Order a feature for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/feature#GET)
     */
    GetAllowedDurationsForFeatureOption(feature, serviceName) {
        let url = `/order/dedicated/server/${serviceName}/feature?`;
        const queryParams = new query_params_1.default();
        if (feature) {
            queryParams.set('feature', feature.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order a feature for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/feature/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, feature: DedicatedserverOrderableSysFeature, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/feature/${duration}?`
  
      const queryParams = new QueryParams()
      if (feature) { queryParams.set('feature', feature.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a feature for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/feature/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, feature: DedicatedserverOrderableSysFeature, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/feature/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {feature})
    }
    */
    /**
     * order a Firewall for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/firewall#GET)
     */
    GetAllowedDurationsForFirewallOption(firewallModel, serviceName) {
        let url = `/order/dedicated/server/${serviceName}/firewall?`;
        const queryParams = new query_params_1.default();
        if (firewallModel) {
            queryParams.set('firewallModel', firewallModel.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * order a Firewall for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/firewall/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, firewallModel: DedicatedserverFirewallModel, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/firewall/${duration}?`
  
      const queryParams = new QueryParams()
      if (firewallModel) { queryParams.set('firewallModel', firewallModel.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * order a Firewall for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/firewall/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, firewallModel: DedicatedserverFirewallModel, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/firewall/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {firewallModel})
    }
    */
    /**
     * Order IP for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ip#GET)
     */
    GetAllowedDurationsForIpOption(blockSize, serviceName, type, country, organisationId) {
        let url = `/order/dedicated/server/${serviceName}/ip?`;
        const queryParams = new query_params_1.default();
        if (blockSize) {
            queryParams.set('blockSize', blockSize.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (organisationId) {
            queryParams.set('organisationId', organisationId);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order IP for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ip/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(blockSize: DedicatedserverIpBlockSize, duration: string, serviceName: string, type: DedicatedserverIpTypeOrderable, country?: DedicatedserverIpCountry, organisationId?: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/ip/${duration}?`
  
      const queryParams = new QueryParams()
      if (blockSize) { queryParams.set('blockSize', blockSize.toString()) }
      if (type) { queryParams.set('type', type.toString()) }
      if (country) { queryParams.set('country', country.toString()) }
      if (organisationId) { queryParams.set('organisationId', organisationId) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order IP for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ip/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(blockSize: DedicatedserverIpBlockSize, duration: string, serviceName: string, type: DedicatedserverIpTypeOrderable, country?: DedicatedserverIpCountry, organisationId?: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/ip/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {blockSize, type, country, organisationId})
    }
    */
    /**
     * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ipMigration#GET)
     */
    GetAllowedDurationsForIpMigrationOption(ip, serviceName, token) {
        let url = `/order/dedicated/server/${serviceName}/ipMigration?`;
        const queryParams = new query_params_1.default();
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        if (token) {
            queryParams.set('token', token);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ipMigration/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, serviceName: string, token: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/ipMigration/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (token) { queryParams.set('token', token) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Migrate an IP from So you Start to OVH server, this operation is one-way only and can't be reverted [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/ipMigration/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, serviceName: string, token: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/ipMigration/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, token})
    }
    */
    /**
     * Order a kvm for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvm#GET)
     */
    GetAllowedDurationsForKvmOption(serviceName) {
        let url = `/order/dedicated/server/${serviceName}/kvm`;
        return this.client.request('GET', url);
    }
    /**
     * Order a kvm for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvm/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/kvm/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order a kvm for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvm/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/kvm/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order a kvmip express for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvmExpress#GET)
     */
    GetAllowedDurationsForKvmExpressOption(serviceName) {
        let url = `/order/dedicated/server/${serviceName}/kvmExpress`;
        return this.client.request('GET', url);
    }
    /**
     * Order a kvmip express for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvmExpress/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/kvmExpress/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order a kvmip express for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/kvmExpress/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/kvmExpress/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order professional use option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/professionalUse#GET)
     */
    GetAllowedDurationsForProfessionalUseOption(serviceName) {
        let url = `/order/dedicated/server/${serviceName}/professionalUse`;
        return this.client.request('GET', url);
    }
    /**
     * Order professional use option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/professionalUse/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/professionalUse/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order professional use option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/professionalUse/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/professionalUse/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order a static IP for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/staticIP#GET)
     */
    GetAllowedDurationsForTaticIPOption(country, serviceName) {
        let url = `/order/dedicated/server/${serviceName}/staticIP?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order a static IP for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/staticIP/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(country: DedicatedserverIpStaticCountry, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/staticIP/${duration}?`
  
      const queryParams = new QueryParams()
      if (country) { queryParams.set('country', country.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a static IP for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/staticIP/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(country: DedicatedserverIpStaticCountry, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/staticIP/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {country})
    }
    */
    /**
     * Order additionall traffic for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/traffic#GET)
     */
    GetAllowedDurationsForTrafficOption(serviceName, traffic) {
        let url = `/order/dedicated/server/${serviceName}/traffic?`;
        const queryParams = new query_params_1.default();
        if (traffic) {
            queryParams.set('traffic', traffic.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order additionall traffic for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/traffic/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, traffic: DedicatedserverTrafficOrder): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/traffic/${duration}?`
  
      const queryParams = new QueryParams()
      if (traffic) { queryParams.set('traffic', traffic.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order additionall traffic for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/traffic/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, traffic: DedicatedserverTrafficOrder): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/traffic/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {traffic})
    }
    */
    /**
     * Order an USB key for this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/usbKey#GET)
     */
    GetAllowedDurationsForUsbKeyOption(capacity, serviceName) {
        let url = `/order/dedicated/server/${serviceName}/usbKey?`;
        const queryParams = new query_params_1.default();
        if (capacity) {
            queryParams.set('capacity', capacity.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order an USB key for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/usbKey/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(capacity: DedicatedserverUsbKeyCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/usbKey/${duration}?`
  
      const queryParams = new QueryParams()
      if (capacity) { queryParams.set('capacity', capacity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order an USB key for this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicated/server/%7BserviceName%7D/usbKey/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(capacity: DedicatedserverUsbKeyCapacity, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicated/server/${serviceName}/usbKey/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {capacity})
    }
    */
    /**
     * Operations about the PCC service [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/dedicatedCloud`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/dedicatedCloud/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order additional bandwidth in your Private Cloud [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/additionalBandwidth#GET)
     */
    GetAllowedDurationsForAdditionalBandwidthOption(bandwidth, serviceName) {
        let url = `/order/dedicatedCloud/${serviceName}/additionalBandwidth?`;
        const queryParams = new query_params_1.default();
        if (bandwidth) {
            queryParams.set('bandwidth', bandwidth.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order additional bandwidth in your Private Cloud [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/additionalBandwidth/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(bandwidth: DedicatedCloudAdditionalBandwidth, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/additionalBandwidth/${duration}?`
  
      const queryParams = new QueryParams()
      if (bandwidth) { queryParams.set('bandwidth', bandwidth.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order additional bandwidth in your Private Cloud [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/additionalBandwidth/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(bandwidth: DedicatedCloudAdditionalBandwidth, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/additionalBandwidth/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {bandwidth})
    }
    */
    /**
     * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles) [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/filer#GET)
     */
    GetAllowedDurationsForFilerOption(name, serviceName, datacenterId, quantity) {
        let url = `/order/dedicatedCloud/${serviceName}/filer?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (datacenterId) {
            queryParams.set('datacenterId', datacenterId.toString());
        }
        if (quantity) {
            queryParams.set('quantity', quantity.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles) [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/filer/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, name: string, serviceName: string, datacenterId?: number, quantity?: number): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/filer/${duration}?`
  
      const queryParams = new QueryParams()
      if (name) { queryParams.set('name', name) }
      if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new Filer in a given Datacenter (available filers are given in /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles) [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/filer/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, name: string, serviceName: string, datacenterId?: number, quantity?: number): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/filer/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {name, datacenterId, quantity})
    }
    */
    /**
     * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles) [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/host#GET)
     */
    GetAllowedDurationsForHostOption(datacenterId, name, serviceName, quantity) {
        let url = `/order/dedicatedCloud/${serviceName}/host?`;
        const queryParams = new query_params_1.default();
        if (datacenterId) {
            queryParams.set('datacenterId', datacenterId.toString());
        }
        if (name) {
            queryParams.set('name', name);
        }
        if (quantity) {
            queryParams.set('quantity', quantity.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles) [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/host/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(datacenterId: number, duration: string, name: string, serviceName: string, quantity?: number): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/host/${duration}?`
  
      const queryParams = new QueryParams()
      if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
      if (name) { queryParams.set('name', name) }
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new Host in a given Datacenter  (orderable hosts are given by /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles) [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/host/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(datacenterId: number, duration: string, name: string, serviceName: string, quantity?: number): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/host/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {datacenterId, name, quantity})
    }
    */
    /**
     * Order an IP block for your Private Cloud [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/ip#GET)
     */
    /*
    GetAllowedDurationsForIpOption(country: DedicatedCloudIpCountries, description: string, estimatedClientsNumber: number, networkName: string, serviceName: string, size: DedicatedCloudOrderableIpBlockRange, usage: string): Promise<string[]> {
      let url = `/order/dedicatedCloud/${serviceName}/ip?`
  
      const queryParams = new QueryParams()
      if (country) { queryParams.set('country', country.toString()) }
      if (description) { queryParams.set('description', description) }
      if (estimatedClientsNumber) { queryParams.set('estimatedClientsNumber', estimatedClientsNumber.toString()) }
      if (networkName) { queryParams.set('networkName', networkName) }
      if (size) { queryParams.set('size', size.toString()) }
      if (usage) { queryParams.set('usage', usage) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order an IP block for your Private Cloud [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/ip/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(country: DedicatedCloudIpCountries, description: string, duration: string, estimatedClientsNumber: number, networkName: string, serviceName: string, size: DedicatedCloudOrderableIpBlockRange, usage: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/ip/${duration}?`
  
      const queryParams = new QueryParams()
      if (country) { queryParams.set('country', country.toString()) }
      if (description) { queryParams.set('description', description) }
      if (estimatedClientsNumber) { queryParams.set('estimatedClientsNumber', estimatedClientsNumber.toString()) }
      if (networkName) { queryParams.set('networkName', networkName) }
      if (size) { queryParams.set('size', size.toString()) }
      if (usage) { queryParams.set('usage', usage) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order an IP block for your Private Cloud [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/ip/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(country: DedicatedCloudIpCountries, description: string, duration: string, estimatedClientsNumber: number, networkName: string, serviceName: string, size: DedicatedCloudOrderableIpBlockRange, usage: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/ip/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {country, description, estimatedClientsNumber, networkName, size, usage})
    }
    */
    /**
     * Enable windows templates (SPLA) in your Private Cloud [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/spla#GET)
     */
    /*
    GetPricesAndContractsInformation(serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/spla`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Enable windows templates (SPLA) in your Private Cloud [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/spla#POST)
     */
    /*
    CreateOrder(serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/spla`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/upgradeRessource#GET)
     */
    GetAllowedDurationsForUpgradeRessourceOption(serviceName, upgradedRessourceType, upgradeType, upgradedRessourceId) {
        let url = `/order/dedicatedCloud/${serviceName}/upgradeRessource?`;
        const queryParams = new query_params_1.default();
        if (upgradedRessourceType) {
            queryParams.set('upgradedRessourceType', upgradedRessourceType.toString());
        }
        if (upgradeType) {
            queryParams.set('upgradeType', upgradeType.toString());
        }
        if (upgradedRessourceId) {
            queryParams.set('upgradedRessourceId', upgradedRessourceId.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/upgradeRessource/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, upgradedRessourceType: DedicatedCloudressourcesUpgradeRessourceType, upgradeType: DedicatedCloudressourcesUpgradeType, upgradedRessourceId?: number): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/upgradeRessource/${duration}?`
  
      const queryParams = new QueryParams()
      if (upgradedRessourceType) { queryParams.set('upgradedRessourceType', upgradedRessourceType.toString()) }
      if (upgradeType) { queryParams.set('upgradeType', upgradeType.toString()) }
      if (upgradedRessourceId) { queryParams.set('upgradedRessourceId', upgradedRessourceId.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade ressources billing type. For hourlyToMonthly, already consumed hours will be billed at the end of the month [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/upgradeRessource/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, upgradedRessourceType: DedicatedCloudressourcesUpgradeRessourceType, upgradeType: DedicatedCloudressourcesUpgradeType, upgradedRessourceId?: number): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/upgradeRessource/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {upgradedRessourceType, upgradeType, upgradedRessourceId})
    }
    */
    /**
     * Order VDI option in a given Datacenter [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/vdi#GET)
     */
    /*
    GetPricesAndContractsInformation(datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/vdi?`
  
      const queryParams = new QueryParams()
      if (datacenterId) { queryParams.set('datacenterId', datacenterId.toString()) }
      if (firstPublicIpAddress) { queryParams.set('firstPublicIpAddress', firstPublicIpAddress.toString()) }
      if (secondPublicIpAddress) { queryParams.set('secondPublicIpAddress', secondPublicIpAddress.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order VDI option in a given Datacenter [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/dedicatedCloud/%7BserviceName%7D/vdi#POST)
     */
    /*
    CreateOrder(datacenterId: number, firstPublicIpAddress: string, secondPublicIpAddress: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/dedicatedCloud/${serviceName}/vdi`
  
      return this.client.request<OrderOrder>('POST', url, {datacenterId, firstPublicIpAddress, secondPublicIpAddress})
    }
    */
    /**
     * Operations about the DNS service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/domain/zone`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D#GET)
     */
    /*
    GetAllowedOptions(zoneName: string): Promise<string[]> {
      let url = `/order/domain/zone/${zoneName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order Anycast [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D/dnsAnycast#GET)
     */
    GetAllowedDurationsForDnsAnycastOption(zoneName) {
        let url = `/order/domain/zone/${zoneName}/dnsAnycast`;
        return this.client.request('GET', url);
    }
    /**
     * Order Anycast [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D/dnsAnycast/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, zoneName: string): Promise<OrderOrder> {
      let url = `/order/domain/zone/${zoneName}/dnsAnycast/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order Anycast [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/%7BzoneName%7D/dnsAnycast/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, zoneName: string): Promise<OrderOrder> {
      let url = `/order/domain/zone/${zoneName}/dnsAnycast/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order a new DNS zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/new#GET)
     */
    /*
    GetPricesAndContractsInformation(zoneName: string, minimized?: boolean): Promise<OrderOrder> {
      let url = `/order/domain/zone/new?`
  
      const queryParams = new QueryParams()
      if (zoneName) { queryParams.set('zoneName', zoneName) }
      if (minimized) { queryParams.set('minimized', minimized.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new DNS zone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/domain/zone/new#POST)
     */
    /*
    CreateOrder(zoneName: string, minimized?: boolean): Promise<OrderOrder> {
      let url = `/order/domain/zone/new`
  
      return this.client.request<OrderOrder>('POST', url, {zoneName, minimized})
    }
    */
    /**
     * Operations about the MX service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/email/domain`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order a new mx plan [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(domain: string, offer: EmaildomainOffer): Promise<string[]> {
      let url = `/order/email/domain/new?`
  
      const queryParams = new QueryParams()
      if (domain) { queryParams.set('domain', domain) }
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new mx plan [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(domain: string, duration: string, offer: EmaildomainOffer): Promise<OrderOrder> {
      let url = `/order/email/domain/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (domain) { queryParams.set('domain', domain) }
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new mx plan [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/domain/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(domain: string, duration: string, offer: EmaildomainOffer): Promise<OrderOrder> {
      let url = `/order/email/domain/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {domain, offer})
    }
    */
    /**
     * Operations about the MSSERVICES service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/email/exchange`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Operations about the EXCHANGE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service#GET)
     */
    /*
    ListAvailableServices(organizationName: string): Promise<string[]> {
      let url = `/order/email/exchange/${organizationName}/service`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D#GET)
     */
    /*
    GetAllowedOptions(exchangeService: string, organizationName: string): Promise<string[]> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Create an order for an exchange account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account#GET)
     */
    GetAllowedDurationsForAccountOption(exchangeService, licence, number, organizationName, storageQuota) {
        let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/account?`;
        const queryParams = new query_params_1.default();
        if (licence) {
            queryParams.set('licence', licence.toString());
        }
        if (number) {
            queryParams.set('number', number.toString());
        }
        if (storageQuota) {
            queryParams.set('storageQuota', storageQuota.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for an exchange account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, exchangeService: string, licence: EmailexchangeOvhLicence, number: number, organizationName: string, storageQuota?: EmailexchangeaccountQuota): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/account/${duration}?`
  
      const queryParams = new QueryParams()
      if (licence) { queryParams.set('licence', licence.toString()) }
      if (number) { queryParams.set('number', number.toString()) }
      if (storageQuota) { queryParams.set('storageQuota', storageQuota.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for an exchange account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, exchangeService: string, licence: EmailexchangeOvhLicence, number: number, organizationName: string, storageQuota?: EmailexchangeaccountQuota): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/account/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {licence, number, storageQuota})
    }
    */
    /**
     * Create an order to upgrade your hosted account storage [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/accountUpgrade#GET)
     */
    GetAllowedDurationsForAccountUpgradeOption(exchangeService, newQuota, organizationName, primaryEmailAddress) {
        let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/accountUpgrade?`;
        const queryParams = new query_params_1.default();
        if (newQuota) {
            queryParams.set('newQuota', newQuota.toString());
        }
        if (primaryEmailAddress) {
            queryParams.set('primaryEmailAddress', primaryEmailAddress);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order to upgrade your hosted account storage [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/accountUpgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, exchangeService: string, newQuota: EmailexchangeaccountQuota, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/accountUpgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (newQuota) { queryParams.set('newQuota', newQuota.toString()) }
      if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order to upgrade your hosted account storage [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/accountUpgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, exchangeService: string, newQuota: EmailexchangeaccountQuota, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/accountUpgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {newQuota, primaryEmailAddress})
    }
    */
    /**
     * Create an order for a additional 50GB of space (Exchange 2010 reseller only) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/diskSpace#GET)
     */
    /*
    GetPricesAndContractsInformation(exchangeService: string, organizationName: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/diskSpace`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Create an order for a additional 50GB of space (Exchange 2010 reseller only) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/diskSpace#POST)
     */
    /*
    CreateOrder(exchangeService: string, organizationName: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/diskSpace`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Create an order for a outlook licence. [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlook#GET)
     */
    GetAllowedDurationsForOutlookOption(exchangeService, licence, organizationName, primaryEmailAddress) {
        let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/outlook?`;
        const queryParams = new query_params_1.default();
        if (licence) {
            queryParams.set('licence', licence.toString());
        }
        if (primaryEmailAddress) {
            queryParams.set('primaryEmailAddress', primaryEmailAddress);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for a outlook licence. [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlook/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, exchangeService: string, licence: EmailexchangeOutlookVersion, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/outlook/${duration}?`
  
      const queryParams = new QueryParams()
      if (licence) { queryParams.set('licence', licence.toString()) }
      if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for a outlook licence. [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlook/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, exchangeService: string, licence: EmailexchangeOutlookVersion, organizationName: string, primaryEmailAddress: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/outlook/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {licence, primaryEmailAddress})
    }
    */
    /**
     * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/upgrade#GET)
     */
    /*
    GetPricesAndContractsInformation(exchangeService: string, organizationName: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/upgrade`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Upgrade infrustruction to newest offer (Exchange 2013 to Exchange 2016) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/upgrade#POST)
     */
    /*
    CreateOrder(exchangeService: string, organizationName: string): Promise<OrderOrder> {
      let url = `/order/email/exchange/${organizationName}/service/${exchangeService}/upgrade`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Operations about the PROEMAIL service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/email/pro`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D#GET)
     */
    /*
    GetAllowedOptions(service: string): Promise<string[]> {
      let url = `/order/email/pro/${service}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Create an order for a pro account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D/account#GET)
     */
    /*
    GetAllowedDurationsForAccountOption(number: number, service: string): Promise<string[]> {
      let url = `/order/email/pro/${service}/account?`
  
      const queryParams = new QueryParams()
      if (number) { queryParams.set('number', number.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for a pro account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D/account/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, number: number, service: string): Promise<OrderOrder> {
      let url = `/order/email/pro/${service}/account/${duration}?`
  
      const queryParams = new QueryParams()
      if (number) { queryParams.set('number', number.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for a pro account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/email/pro/%7Bservice%7D/account/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, number: number, service: string): Promise<OrderOrder> {
      let url = `/order/email/pro/${service}/account/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {number})
    }
    */
    /**
     * Operations about the VOIP service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/freefax`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/freefax/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Convert the freefax service to a /telephony voicefax service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/%7BserviceName%7D/convertToVoicefax#GET)
     */
    /*
    GetPricesAndContractsInformation(billingAccount: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/freefax/${serviceName}/convertToVoicefax?`
  
      const queryParams = new QueryParams()
      if (billingAccount) { queryParams.set('billingAccount', billingAccount) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Convert the freefax service to a /telephony voicefax service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/%7BserviceName%7D/convertToVoicefax#POST)
     */
    /*
    CreateOrder(billingAccount: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/freefax/${serviceName}/convertToVoicefax`
  
      return this.client.request<OrderOrder>('POST', url, {billingAccount})
    }
    */
    /**
     * Credit freefax account pages [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/new#GET)
     */
    /*
    GetPricesAndContractsInformation(quantity: FreefaxQuantity): Promise<OrderOrder> {
      let url = `/order/freefax/new?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Credit freefax account pages [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/freefax/new#POST)
     */
    /*
    CreateOrder(quantity: FreefaxQuantity): Promise<OrderOrder> {
      let url = `/order/freefax/new`
  
      return this.client.request<OrderOrder>('POST', url, {quantity})
    }
    */
    /**
     * Operations about the SQLPRIVE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/hosting/privateDatabase`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/hosting/privateDatabase/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Create an order for change ram size on your private database [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D/ram#GET)
     */
    GetAllowedDurationsForRamOption(ram, serviceName) {
        let url = `/order/hosting/privateDatabase/${serviceName}/ram?`;
        const queryParams = new query_params_1.default();
        if (ram) {
            queryParams.set('ram', ram.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for change ram size on your private database [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D/ram/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/privateDatabase/${serviceName}/ram/${duration}?`
  
      const queryParams = new QueryParams()
      if (ram) { queryParams.set('ram', ram.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for change ram size on your private database [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/%7BserviceName%7D/ram/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/privateDatabase/${serviceName}/ram/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ram})
    }
    */
    /**
     * Order new private database [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ram: HostingPrivateDatabaseAvailableRamSize, version: HostingPrivateDatabaseOrderableVersion, datacenter?: HostingPrivateDatabaseDatacenter, offer?: HostingPrivateDatabaseOffer): Promise<string[]> {
      let url = `/order/hosting/privateDatabase/new?`
  
      const queryParams = new QueryParams()
      if (ram) { queryParams.set('ram', ram.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order new private database [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, version: HostingPrivateDatabaseOrderableVersion, datacenter?: HostingPrivateDatabaseDatacenter, offer?: HostingPrivateDatabaseOffer): Promise<OrderOrder> {
      let url = `/order/hosting/privateDatabase/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ram) { queryParams.set('ram', ram.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (datacenter) { queryParams.set('datacenter', datacenter.toString()) }
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order new private database [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/privateDatabase/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ram: HostingPrivateDatabaseAvailableRamSize, version: HostingPrivateDatabaseOrderableVersion, datacenter?: HostingPrivateDatabaseDatacenter, offer?: HostingPrivateDatabaseOffer): Promise<OrderOrder> {
      let url = `/order/hosting/privateDatabase/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ram, version, datacenter, offer})
    }
    */
    /**
     * Operations about the HOSTING service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/hosting/web`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/hosting/web/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order additional bandwidth [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/bandwidth#GET)
     */
    /*
    GetAllowedDurationsForBandwidthOption(serviceName: string, traffic: HostingwebBandwidthOffer): Promise<string[]> {
      let url = `/order/hosting/web/${serviceName}/bandwidth?`
  
      const queryParams = new QueryParams()
      if (traffic) { queryParams.set('traffic', traffic.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order additional bandwidth [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/bandwidth/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, traffic: HostingwebBandwidthOffer): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/bandwidth/${duration}?`
  
      const queryParams = new QueryParams()
      if (traffic) { queryParams.set('traffic', traffic.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order additional bandwidth [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/bandwidth/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, traffic: HostingwebBandwidthOffer): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/bandwidth/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {traffic})
    }
    */
    /**
     * Create an order for cdn option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/cdn#GET)
     */
    GetAllowedDurationsForCdnOption(offer, serviceName) {
        let url = `/order/hosting/web/${serviceName}/cdn?`;
        const queryParams = new query_params_1.default();
        if (offer) {
            queryParams.set('offer', offer.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for cdn option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/cdn/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, offer: HostingwebCdnOffer, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/cdn/${duration}?`
  
      const queryParams = new QueryParams()
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for cdn option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/cdn/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, offer: HostingwebCdnOffer, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/cdn/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {offer})
    }
    */
    /**
     * Create an order for change the hosting main domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/changeMainDomain#GET)
     */
    GetAllowedDurationsForChangeMainDomainOption(domain, mxplan, serviceName) {
        let url = `/order/hosting/web/${serviceName}/changeMainDomain?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        if (mxplan) {
            queryParams.set('mxplan', mxplan.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for change the hosting main domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/changeMainDomain/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(domain: string, duration: string, mxplan: HostingweborderMxPlan, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/changeMainDomain/${duration}?`
  
      const queryParams = new QueryParams()
      if (domain) { queryParams.set('domain', domain) }
      if (mxplan) { queryParams.set('mxplan', mxplan.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for change the hosting main domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/changeMainDomain/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(domain: string, duration: string, mxplan: HostingweborderMxPlan, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/changeMainDomain/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {domain, mxplan})
    }
    */
    /**
     * Create an order for extra sql perso [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/extraSqlPerso#GET)
     */
    GetAllowedDurationsForExtraSqlPersoOption(offer, serviceName) {
        let url = `/order/hosting/web/${serviceName}/extraSqlPerso?`;
        const queryParams = new query_params_1.default();
        if (offer) {
            queryParams.set('offer', offer.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for extra sql perso [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, offer: HostingwebdatabaseSqlPersoOffer, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/extraSqlPerso/${duration}?`
  
      const queryParams = new QueryParams()
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for extra sql perso [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, offer: HostingwebdatabaseSqlPersoOffer, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/extraSqlPerso/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {offer})
    }
    */
    /**
     * Create an order for hosted ssl option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/ssl#GET)
     */
    GetAllowedDurationsForSlOption(serviceName) {
        let url = `/order/hosting/web/${serviceName}/ssl`;
        return this.client.request('GET', url);
    }
    /**
     * Create an order for hosted ssl option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/ssl/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/ssl/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Create an order for hosted ssl option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/ssl/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/ssl/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Create an order for upgrade your hosting account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/upgrade#GET)
     */
    GetAllowedDurationsForUpgradeOption(offer, serviceName, startTime, waiveRetractationPeriod) {
        let url = `/order/hosting/web/${serviceName}/upgrade?`;
        const queryParams = new query_params_1.default();
        if (offer) {
            queryParams.set('offer', offer.toString());
        }
        if (startTime) {
            queryParams.set('startTime', startTime.toString());
        }
        if (waiveRetractationPeriod) {
            queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for upgrade your hosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, offer: HostingwebOffer, serviceName: string, startTime?: any, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (offer) { queryParams.set('offer', offer.toString()) }
      if (startTime) { queryParams.set('startTime', startTime.toString()) }
      if (waiveRetractationPeriod) { queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for upgrade your hosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, offer: HostingwebOffer, serviceName: string, startTime?: any, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
      let url = `/order/hosting/web/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {offer, startTime, waiveRetractationPeriod})
    }
    */
    /**
     * Order a new hosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(domain: string, offer: HostingwebOffer, dnsZone?: HostingwebDnsZone, module?: HostingwebmoduleOrderableName, waiveRetractationPeriod?: boolean): Promise<string[]> {
      let url = `/order/hosting/web/new?`
  
      const queryParams = new QueryParams()
      if (domain) { queryParams.set('domain', domain) }
      if (offer) { queryParams.set('offer', offer.toString()) }
      if (dnsZone) { queryParams.set('dnsZone', dnsZone.toString()) }
      if (module) { queryParams.set('module', module.toString()) }
      if (waiveRetractationPeriod) { queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new hosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(domain: string, duration: string, offer: HostingwebOffer, dnsZone?: HostingwebDnsZone, module?: HostingwebmoduleOrderableName, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
      let url = `/order/hosting/web/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (domain) { queryParams.set('domain', domain) }
      if (offer) { queryParams.set('offer', offer.toString()) }
      if (dnsZone) { queryParams.set('dnsZone', dnsZone.toString()) }
      if (module) { queryParams.set('module', module.toString()) }
      if (waiveRetractationPeriod) { queryParams.set('waiveRetractationPeriod', waiveRetractationPeriod.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new hosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hosting/web/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(domain: string, duration: string, offer: HostingwebOffer, dnsZone?: HostingwebDnsZone, module?: HostingwebmoduleOrderableName, waiveRetractationPeriod?: boolean): Promise<OrderOrder> {
      let url = `/order/hosting/web/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {domain, offer, dnsZone, module, waiveRetractationPeriod})
    }
    */
    /**
     * Order a HPC Spot Account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hpcspot/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(): Promise<string[]> {
      let url = `/order/hpcspot/new`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order a HPC Spot Account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hpcspot/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string): Promise<OrderOrder> {
      let url = `/order/hpcspot/new/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order a HPC Spot Account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/hpcspot/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string): Promise<OrderOrder> {
      let url = `/order/hpcspot/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cloudLinux/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ip: string, version: LicenseCloudLinuxVersion): Promise<string[]> {
      let url = `/order/license/cloudLinux/new?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cloudLinux/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseCloudLinuxVersion): Promise<OrderOrder> {
      let url = `/order/license/cloudLinux/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cloudLinux/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, version: LicenseCloudLinuxVersion): Promise<OrderOrder> {
      let url = `/order/license/cloudLinux/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, version})
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cpanel/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ip: string, version: LicenseOrderableCpanelVersion, serviceType?: LicenseLicenseType): Promise<string[]> {
      let url = `/order/license/cpanel/new?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cpanel/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseOrderableCpanelVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
      let url = `/order/license/cpanel/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/cpanel/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, version: LicenseOrderableCpanelVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
      let url = `/order/license/cpanel/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, version, serviceType})
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/directadmin/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ip: string, version: LicenseOrderableDirectAdminVersion, serviceType?: LicenseLicenseType): Promise<string[]> {
      let url = `/order/license/directadmin/new?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/directadmin/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseOrderableDirectAdminVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
      let url = `/order/license/directadmin/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/directadmin/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, version: LicenseOrderableDirectAdminVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
      let url = `/order/license/directadmin/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, version, serviceType})
    }
    */
    /**
     * Create an order for an new office tenant [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/office/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<string[]> {
      let url = `/order/license/office/new?`
  
      const queryParams = new QueryParams()
      if (giftCode) { queryParams.set('giftCode', giftCode) }
      if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
      if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for an new office tenant [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/office/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
      let url = `/order/license/office/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (giftCode) { queryParams.set('giftCode', giftCode) }
      if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
      if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for an new office tenant [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/office/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
      let url = `/order/license/office/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {giftCode, officeBusinessQuantity, officeProPlusQuantity})
    }
    */
    /**
     * Operations about the LICENSE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/license/plesk`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/license/plesk/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D/upgrade#GET)
     */
    /*
    GetAllowedDurationsForUpgradeOption(serviceName: string, antispam?: LicenseOrderableAntispam, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, version?: LicensePleskVersion, wordpressToolkit?: boolean): Promise<string[]> {
      let url = `/order/license/plesk/${serviceName}/upgrade?`
  
      const queryParams = new QueryParams()
      if (antispam) { queryParams.set('antispam', antispam.toString()) }
      if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
      if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
      if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
      if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
      if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
      if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, antispam?: LicenseOrderableAntispam, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, version?: LicensePleskVersion, wordpressToolkit?: boolean): Promise<OrderOrder> {
      let url = `/order/license/plesk/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (antispam) { queryParams.set('antispam', antispam.toString()) }
      if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
      if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
      if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
      if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
      if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
      if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, antispam?: LicenseOrderableAntispam, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, version?: LicensePleskVersion, wordpressToolkit?: boolean): Promise<OrderOrder> {
      let url = `/order/license/plesk/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {antispam, antivirus, applicationSet, domainNumber, languagePackNumber, powerpack, resellerManagement, version, wordpressToolkit})
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ip: string, version: LicensePleskVersion, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, serviceType?: LicenseLicenseType, wordpressToolkit?: boolean): Promise<string[]> {
      let url = `/order/license/plesk/new?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
      if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
      if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
      if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
      if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
      if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
      if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, version: LicensePleskVersion, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, serviceType?: LicenseLicenseType, wordpressToolkit?: boolean): Promise<OrderOrder> {
      let url = `/order/license/plesk/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (antivirus) { queryParams.set('antivirus', antivirus.toString()) }
      if (applicationSet) { queryParams.set('applicationSet', applicationSet.toString()) }
      if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
      if (languagePackNumber) { queryParams.set('languagePackNumber', languagePackNumber.toString()) }
      if (powerpack) { queryParams.set('powerpack', powerpack.toString()) }
      if (resellerManagement) { queryParams.set('resellerManagement', resellerManagement.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
      if (wordpressToolkit) { queryParams.set('wordpressToolkit', wordpressToolkit.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/plesk/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, version: LicensePleskVersion, antivirus?: LicenseOrderableAntivirus, applicationSet?: LicensePleskApplicationSet, domainNumber?: LicenseOrderablePleskDomainNumber, languagePackNumber?: LicenseOrderablePleskLanguagePack, powerpack?: boolean, resellerManagement?: boolean, serviceType?: LicenseLicenseType, wordpressToolkit?: boolean): Promise<OrderOrder> {
      let url = `/order/license/plesk/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, version, antivirus, applicationSet, domainNumber, languagePackNumber, powerpack, resellerManagement, serviceType, wordpressToolkit})
    }
    */
    /**
     * Operations about the LICENSE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/license/sqlserver`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/license/sqlserver/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D/upgrade#GET)
     */
    /*
    GetAllowedDurationsForUpgradeOption(serviceName: string, version: LicenseSqlServerVersion): Promise<string[]> {
      let url = `/order/license/sqlserver/${serviceName}/upgrade?`
  
      const queryParams = new QueryParams()
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
      let url = `/order/license/sqlserver/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
      let url = `/order/license/sqlserver/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {version})
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ip: string, version: LicenseSqlServerVersion): Promise<string[]> {
      let url = `/order/license/sqlserver/new?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
      let url = `/order/license/sqlserver/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/sqlserver/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, version: LicenseSqlServerVersion): Promise<OrderOrder> {
      let url = `/order/license/sqlserver/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, version})
    }
    */
    /**
     * Operations about the LICENSE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/license/virtuozzo`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/license/virtuozzo/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D/upgrade#GET)
     */
    /*
    GetAllowedDurationsForUpgradeOption(containerNumber: LicenseOrderableVirtuozzoContainerNumber, serviceName: string): Promise<string[]> {
      let url = `/order/license/virtuozzo/${serviceName}/upgrade?`
  
      const queryParams = new QueryParams()
      if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/license/virtuozzo/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/license/virtuozzo/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {containerNumber})
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(containerNumber: LicenseOrderableVirtuozzoContainerNumber, ip: string, version: LicenseOrderableVirtuozzoVersion, serviceType?: LicenseLicenseType): Promise<string[]> {
      let url = `/order/license/virtuozzo/new?`
  
      const queryParams = new QueryParams()
      if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, ip: string, version: LicenseOrderableVirtuozzoVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
      let url = `/order/license/virtuozzo/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (containerNumber) { queryParams.set('containerNumber', containerNumber.toString()) }
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/virtuozzo/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(containerNumber: LicenseOrderableVirtuozzoContainerNumber, duration: string, ip: string, version: LicenseOrderableVirtuozzoVersion, serviceType?: LicenseLicenseType): Promise<OrderOrder> {
      let url = `/order/license/virtuozzo/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {containerNumber, ip, version, serviceType})
    }
    */
    /**
     * Operations about the LICENSE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/license/windows`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/license/windows/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D/upgrade#GET)
     */
    /*
    GetAllowedDurationsForUpgradeOption(serviceName: string, sqlVersion?: LicenseWindowsSqlVersion, version?: LicenseWindowsOsVersion): Promise<string[]> {
      let url = `/order/license/windows/${serviceName}/upgrade?`
  
      const queryParams = new QueryParams()
      if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, sqlVersion?: LicenseWindowsSqlVersion, version?: LicenseWindowsOsVersion): Promise<OrderOrder> {
      let url = `/order/license/windows/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, sqlVersion?: LicenseWindowsSqlVersion, version?: LicenseWindowsOsVersion): Promise<OrderOrder> {
      let url = `/order/license/windows/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {sqlVersion, version})
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ip: string, version: LicenseWindowsOsVersion, serviceType?: LicenseLicenseType, sqlVersion?: LicenseWindowsSqlVersion): Promise<string[]> {
      let url = `/order/license/windows/new?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
      if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, version: LicenseWindowsOsVersion, serviceType?: LicenseLicenseType, sqlVersion?: LicenseWindowsSqlVersion): Promise<OrderOrder> {
      let url = `/order/license/windows/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
      if (serviceType) { queryParams.set('serviceType', serviceType.toString()) }
      if (sqlVersion) { queryParams.set('sqlVersion', sqlVersion.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/windows/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, version: LicenseWindowsOsVersion, serviceType?: LicenseLicenseType, sqlVersion?: LicenseWindowsSqlVersion): Promise<OrderOrder> {
      let url = `/order/license/windows/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, version, serviceType, sqlVersion})
    }
    */
    /**
     * Operations about the LICENSE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/license/worklight`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/license/worklight/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D/upgrade#GET)
     */
    /*
    GetAllowedDurationsForUpgradeOption(serviceName: string, version: LicenseWorkLightVersion): Promise<string[]> {
      let url = `/order/license/worklight/${serviceName}/upgrade?`
  
      const queryParams = new QueryParams()
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string, version: LicenseWorkLightVersion): Promise<OrderOrder> {
      let url = `/order/license/worklight/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Upgrade this license with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string, version: LicenseWorkLightVersion): Promise<OrderOrder> {
      let url = `/order/license/worklight/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {version})
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(ip: string, lessThan1000Users: boolean, version: LicenseWorkLightVersion): Promise<string[]> {
      let url = `/order/license/worklight/new?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (lessThan1000Users) { queryParams.set('lessThan1000Users', lessThan1000Users.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, ip: string, lessThan1000Users: boolean, version: LicenseWorkLightVersion): Promise<OrderOrder> {
      let url = `/order/license/worklight/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (ip) { queryParams.set('ip', ip.toString()) }
      if (lessThan1000Users) { queryParams.set('lessThan1000Users', lessThan1000Users.toString()) }
      if (version) { queryParams.set('version', version.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new license on a given Ip with some given options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/license/worklight/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, ip: string, lessThan1000Users: boolean, version: LicenseWorkLightVersion): Promise<OrderOrder> {
      let url = `/order/license/worklight/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {ip, lessThan1000Users, version})
    }
    */
    /**
     * Operations about the OVERTHEBOX service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/overTheBox`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/overTheBox/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Create an order to upgrade your overTheBox service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/%7BserviceName%7D/migrate#GET)
     */
    /*
    GetPricesAndContractsInformation(hardware: boolean, offer: string, serviceName: string, shippingContactID?: string, shippingMethod?: OverTheBoxShippingMethod, shippingRelayID?: number): Promise<OrderOrder> {
      let url = `/order/overTheBox/${serviceName}/migrate?`
  
      const queryParams = new QueryParams()
      if (hardware) { queryParams.set('hardware', hardware.toString()) }
      if (offer) { queryParams.set('offer', offer) }
      if (shippingContactID) { queryParams.set('shippingContactID', shippingContactID) }
      if (shippingMethod) { queryParams.set('shippingMethod', shippingMethod.toString()) }
      if (shippingRelayID) { queryParams.set('shippingRelayID', shippingRelayID.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order to upgrade your overTheBox service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/%7BserviceName%7D/migrate#POST)
     */
    /*
    CreateOrder(hardware: boolean, offer: string, serviceName: string, shippingContactID?: string, shippingMethod?: OverTheBoxShippingMethod, shippingRelayID?: number): Promise<OrderOrder> {
      let url = `/order/overTheBox/${serviceName}/migrate`
  
      return this.client.request<OrderOrder>('POST', url, {hardware, offer, shippingContactID, shippingMethod, shippingRelayID})
    }
    */
    /**
     * Subscribe to overTheBox service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(offer: string, deviceId?: string, voucher?: string): Promise<string[]> {
      let url = `/order/overTheBox/new?`
  
      const queryParams = new QueryParams()
      if (offer) { queryParams.set('offer', offer) }
      if (deviceId) { queryParams.set('deviceId', deviceId) }
      if (voucher) { queryParams.set('voucher', voucher) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Subscribe to overTheBox service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, offer: string, deviceId?: string, voucher?: string): Promise<OrderOrder> {
      let url = `/order/overTheBox/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (offer) { queryParams.set('offer', offer) }
      if (deviceId) { queryParams.set('deviceId', deviceId) }
      if (voucher) { queryParams.set('voucher', voucher) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Subscribe to overTheBox service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/overTheBox/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, offer: string, deviceId?: string, voucher?: string): Promise<OrderOrder> {
      let url = `/order/overTheBox/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {offer, deviceId, voucher})
    }
    */
    /**
     * Order router vpn [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/router/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(vrack: string): Promise<string[]> {
      let url = `/order/router/new?`
  
      const queryParams = new QueryParams()
      if (vrack) { queryParams.set('vrack', vrack) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order router vpn [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/router/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, vrack: string): Promise<OrderOrder> {
      let url = `/order/router/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (vrack) { queryParams.set('vrack', vrack) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order router vpn [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/router/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, vrack: string): Promise<OrderOrder> {
      let url = `/order/router/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {vrack})
    }
    */
    /**
     * Create an order for a new office tenant [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/saas/csp2/new#GET)
     */
    /*
    GetAllowedDurationsForNewOption(giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<string[]> {
      let url = `/order/saas/csp2/new?`
  
      const queryParams = new QueryParams()
      if (giftCode) { queryParams.set('giftCode', giftCode) }
      if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
      if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for a new office tenant [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/saas/csp2/new/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
      let url = `/order/saas/csp2/new/${duration}?`
  
      const queryParams = new QueryParams()
      if (giftCode) { queryParams.set('giftCode', giftCode) }
      if (officeBusinessQuantity) { queryParams.set('officeBusinessQuantity', officeBusinessQuantity.toString()) }
      if (officeProPlusQuantity) { queryParams.set('officeProPlusQuantity', officeProPlusQuantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for a new office tenant [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/saas/csp2/new/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, giftCode?: string, officeBusinessQuantity?: number, officeProPlusQuantity?: number): Promise<OrderOrder> {
      let url = `/order/saas/csp2/new/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {giftCode, officeBusinessQuantity, officeProPlusQuantity})
    }
    */
    /**
     * Operations about the VOIP service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/sms`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/sms/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order credits on an existing SMS account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/%7BserviceName%7D/credits#GET)
     */
    /*
    GetPricesAndContractsInformation(quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/sms/${serviceName}/credits?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order credits on an existing SMS account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/%7BserviceName%7D/credits#POST)
     */
    /*
    CreateOrder(quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/sms/${serviceName}/credits`
  
      return this.client.request<OrderOrder>('POST', url, {quantity})
    }
    */
    /**
     * Create and credit a new SMS Account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/new#GET)
     */
    /*
    GetPricesAndContractsInformation(quantity: number): Promise<OrderOrder> {
      let url = `/order/sms/new?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create and credit a new SMS Account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/sms/new#POST)
     */
    /*
    CreateOrder(quantity: number): Promise<OrderOrder> {
      let url = `/order/sms/new`
  
      return this.client.request<OrderOrder>('POST', url, {quantity})
    }
    */
    /**
     * Operations about the VOIP service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/telephony`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D#GET)
     */
    /*
    GetAllowedOptions(billingAccount: string): Promise<string[]> {
      let url = `/order/telephony/${billingAccount}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Purchase new accessories [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/accessories#GET)
     */
    /*
    GetPricesAndContractsInformation(accessories: string[], billingAccount: string, retractation: boolean, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/accessories?`
  
      const queryParams = new QueryParams()
      if (accessories) { queryParams.set('accessories', accessories.toString()) }
      if (retractation) { queryParams.set('retractation', retractation.toString()) }
      if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId.toString()) }
      if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Purchase new accessories [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/accessories#POST)
     */
    /*
    CreateOrder(accessories: string[], billingAccount: string, retractation: boolean, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/accessories`
  
      return this.client.request<OrderOrder>('POST', url, {accessories, retractation, shippingContactId, mondialRelayId})
    }
    */
    /**
     * Purchase a new line offer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/line#GET)
     */
    /*
    GetPricesAndContractsInformation(billingAccount: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: TelephonyLineTypeEnum[], brand?: string, mondialRelayId?: string, zones?: string[]): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/line?`
  
      const queryParams = new QueryParams()
      if (displayUniversalDirectories) { queryParams.set('displayUniversalDirectories', displayUniversalDirectories.toString()) }
      if (extraSimultaneousLines) { queryParams.set('extraSimultaneousLines', extraSimultaneousLines.toString()) }
      if (offers) { queryParams.set('offers', offers.toString()) }
      if (ownerContactIds) { queryParams.set('ownerContactIds', ownerContactIds.toString()) }
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
      if (retractation) { queryParams.set('retractation', retractation.toString()) }
      if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId.toString()) }
      if (types) { queryParams.set('types', types.toString()) }
      if (brand) { queryParams.set('brand', brand) }
      if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
      if (zones) { queryParams.set('zones', zones.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Purchase a new line offer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/line#POST)
     */
    /*
    CreateOrder(billingAccount: string, displayUniversalDirectories: boolean[], extraSimultaneousLines: number[], offers: string[], ownerContactIds: number[], quantity: number, retractation: boolean, shippingContactId: number, types: TelephonyLineTypeEnum[], brand?: string, mondialRelayId?: string, zones?: string[]): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/line`
  
      return this.client.request<OrderOrder>('POST', url, {displayUniversalDirectories, extraSimultaneousLines, offers, ownerContactIds, quantity, retractation, shippingContactId, types, brand, mondialRelayId, zones})
    }
    */
    /**
     * Purchase a new standard alias number [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberGeographic#GET)
     */
    /*
    GetPricesAndContractsInformation(billingAccount: string, city: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, zone: string, ape?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/numberGeographic?`
  
      const queryParams = new QueryParams()
      if (city) { queryParams.set('city', city) }
      if (country) { queryParams.set('country', country.toString()) }
      if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
      if (legalform) { queryParams.set('legalform', legalform.toString()) }
      if (offer) { queryParams.set('offer', offer.toString()) }
      if (retractation) { queryParams.set('retractation', retractation.toString()) }
      if (zone) { queryParams.set('zone', zone) }
      if (ape) { queryParams.set('ape', ape) }
      if (email) { queryParams.set('email', email) }
      if (firstname) { queryParams.set('firstname', firstname) }
      if (name) { queryParams.set('name', name) }
      if (organisation) { queryParams.set('organisation', organisation) }
      if (phone) { queryParams.set('phone', phone) }
      if (pool) { queryParams.set('pool', pool.toString()) }
      if (siret) { queryParams.set('siret', siret) }
      if (socialNomination) { queryParams.set('socialNomination', socialNomination) }
      if (specificNumber) { queryParams.set('specificNumber', specificNumber.toString()) }
      if (streetName) { queryParams.set('streetName', streetName) }
      if (streetNumber) { queryParams.set('streetNumber', streetNumber) }
      if (zip) { queryParams.set('zip', zip) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Purchase a new standard alias number [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberGeographic#POST)
     */
    /*
    CreateOrder(billingAccount: string, city: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, zone: string, ape?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/numberGeographic`
  
      return this.client.request<OrderOrder>('POST', url, {city, country, displayUniversalDirectory, legalform, offer, retractation, zone, ape, email, firstname, name, organisation, phone, pool, siret, socialNomination, specificNumber, streetName, streetNumber, zip})
    }
    */
    /**
     * Purchase a new standard alias number [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberNogeographic#GET)
     */
    /*
    GetPricesAndContractsInformation(billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, ape?: string, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/numberNogeographic?`
  
      const queryParams = new QueryParams()
      if (country) { queryParams.set('country', country.toString()) }
      if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
      if (legalform) { queryParams.set('legalform', legalform.toString()) }
      if (offer) { queryParams.set('offer', offer.toString()) }
      if (retractation) { queryParams.set('retractation', retractation.toString()) }
      if (ape) { queryParams.set('ape', ape) }
      if (city) { queryParams.set('city', city) }
      if (email) { queryParams.set('email', email) }
      if (firstname) { queryParams.set('firstname', firstname) }
      if (name) { queryParams.set('name', name) }
      if (organisation) { queryParams.set('organisation', organisation) }
      if (phone) { queryParams.set('phone', phone) }
      if (pool) { queryParams.set('pool', pool.toString()) }
      if (siret) { queryParams.set('siret', siret) }
      if (socialNomination) { queryParams.set('socialNomination', socialNomination) }
      if (specificNumber) { queryParams.set('specificNumber', specificNumber.toString()) }
      if (streetName) { queryParams.set('streetName', streetName) }
      if (streetNumber) { queryParams.set('streetNumber', streetNumber) }
      if (zip) { queryParams.set('zip', zip) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Purchase a new standard alias number [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberNogeographic#POST)
     */
    /*
    CreateOrder(billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, offer: TelephonyNumberOffer, retractation: boolean, ape?: string, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, siret?: string, socialNomination?: string, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/numberNogeographic`
  
      return this.client.request<OrderOrder>('POST', url, {country, displayUniversalDirectory, legalform, offer, retractation, ape, city, email, firstname, name, organisation, phone, pool, siret, socialNomination, specificNumber, streetName, streetNumber, zip})
    }
    */
    /**
     * Purchase a new standard alias number [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberSpecial#GET)
     */
    /*
    GetPricesAndContractsInformation(ape: string, billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, range: string, retractation: boolean, siret: string, socialNomination: string, typology: TelephonyNumberSpecialTypology, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/numberSpecial?`
  
      const queryParams = new QueryParams()
      if (ape) { queryParams.set('ape', ape) }
      if (country) { queryParams.set('country', country.toString()) }
      if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
      if (legalform) { queryParams.set('legalform', legalform.toString()) }
      if (range) { queryParams.set('range', range) }
      if (retractation) { queryParams.set('retractation', retractation.toString()) }
      if (siret) { queryParams.set('siret', siret) }
      if (socialNomination) { queryParams.set('socialNomination', socialNomination) }
      if (typology) { queryParams.set('typology', typology.toString()) }
      if (city) { queryParams.set('city', city) }
      if (email) { queryParams.set('email', email) }
      if (firstname) { queryParams.set('firstname', firstname) }
      if (name) { queryParams.set('name', name) }
      if (organisation) { queryParams.set('organisation', organisation) }
      if (phone) { queryParams.set('phone', phone) }
      if (pool) { queryParams.set('pool', pool.toString()) }
      if (specificNumber) { queryParams.set('specificNumber', specificNumber.toString()) }
      if (streetName) { queryParams.set('streetName', streetName) }
      if (streetNumber) { queryParams.set('streetNumber', streetNumber) }
      if (zip) { queryParams.set('zip', zip) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Purchase a new standard alias number [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/numberSpecial#POST)
     */
    /*
    CreateOrder(ape: string, billingAccount: string, country: TelephonyNumberCountry, displayUniversalDirectory: boolean, legalform: NichandleLegalForm, range: string, retractation: boolean, siret: string, socialNomination: string, typology: TelephonyNumberSpecialTypology, city?: string, email?: string, firstname?: string, name?: string, organisation?: string, phone?: string, pool?: TelephonyNumberPool, specificNumber?: any, streetName?: string, streetNumber?: string, zip?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/numberSpecial`
  
      return this.client.request<OrderOrder>('POST', url, {ape, country, displayUniversalDirectory, legalform, range, retractation, siret, socialNomination, typology, city, email, firstname, name, organisation, phone, pool, specificNumber, streetName, streetNumber, zip})
    }
    */
    /**
     * Order a new portability [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/portability#GET)
     */
    /*
    GetPricesAndContractsInformation(billingAccount: string, callNumber: string, city: string, country: TelephonyportabilityCountriesAvailable, displayUniversalDirectory: boolean, firstName: string, name: string, offer: TelephonyportabilityOfferType, socialReason: TelephonyportabilitySocialReason, streetName: string, streetNumber: any, type: TelephonyportabilityNumberType, zip: string, building?: string, contactName?: string, contactNumber?: string, desireDate?: string, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, floor?: any, lineToRedirectAliasTo?: any, listNumbers?: string, mobilePhone?: any, rio?: string, siret?: string, specialNumberCategory?: TelephonyportabilitySpecialNumberCategory, stair?: any, streetNumberExtra?: string, streetType?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/portability?`
  
      const queryParams = new QueryParams()
      if (callNumber) { queryParams.set('callNumber', callNumber) }
      if (city) { queryParams.set('city', city) }
      if (country) { queryParams.set('country', country.toString()) }
      if (displayUniversalDirectory) { queryParams.set('displayUniversalDirectory', displayUniversalDirectory.toString()) }
      if (firstName) { queryParams.set('firstName', firstName) }
      if (name) { queryParams.set('name', name) }
      if (offer) { queryParams.set('offer', offer.toString()) }
      if (socialReason) { queryParams.set('socialReason', socialReason.toString()) }
      if (streetName) { queryParams.set('streetName', streetName) }
      if (streetNumber) { queryParams.set('streetNumber', streetNumber.toString()) }
      if (type) { queryParams.set('type', type.toString()) }
      if (zip) { queryParams.set('zip', zip) }
      if (building) { queryParams.set('building', building) }
      if (contactName) { queryParams.set('contactName', contactName) }
      if (contactNumber) { queryParams.set('contactNumber', contactNumber) }
      if (desireDate) { queryParams.set('desireDate', desireDate.toString()) }
      if (door) { queryParams.set('door', door) }
      if (executeAsSoonAsPossible) { queryParams.set('executeAsSoonAsPossible', executeAsSoonAsPossible.toString()) }
      if (fiabilisation) { queryParams.set('fiabilisation', fiabilisation.toString()) }
      if (floor) { queryParams.set('floor', floor.toString()) }
      if (lineToRedirectAliasTo) { queryParams.set('lineToRedirectAliasTo', lineToRedirectAliasTo.toString()) }
      if (listNumbers) { queryParams.set('listNumbers', listNumbers) }
      if (mobilePhone) { queryParams.set('mobilePhone', mobilePhone.toString()) }
      if (rio) { queryParams.set('rio', rio) }
      if (siret) { queryParams.set('siret', siret) }
      if (specialNumberCategory) { queryParams.set('specialNumberCategory', specialNumberCategory.toString()) }
      if (stair) { queryParams.set('stair', stair.toString()) }
      if (streetNumberExtra) { queryParams.set('streetNumberExtra', streetNumberExtra) }
      if (streetType) { queryParams.set('streetType', streetType) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a new portability [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/portability#POST)
     */
    /*
    CreateOrder(billingAccount: string, callNumber: string, city: string, country: TelephonyportabilityCountriesAvailable, displayUniversalDirectory: boolean, firstName: string, name: string, offer: TelephonyportabilityOfferType, socialReason: TelephonyportabilitySocialReason, streetName: string, streetNumber: any, type: TelephonyportabilityNumberType, zip: string, building?: string, contactName?: string, contactNumber?: string, desireDate?: string, door?: string, executeAsSoonAsPossible?: boolean, fiabilisation?: boolean, floor?: any, lineToRedirectAliasTo?: any, listNumbers?: string, mobilePhone?: any, rio?: string, siret?: string, specialNumberCategory?: TelephonyportabilitySpecialNumberCategory, stair?: any, streetNumberExtra?: string, streetType?: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/portability`
  
      return this.client.request<OrderOrder>('POST', url, {callNumber, city, country, displayUniversalDirectory, firstName, name, offer, socialReason, streetName, streetNumber, type, zip, building, contactName, contactNumber, desireDate, door, executeAsSoonAsPossible, fiabilisation, floor, lineToRedirectAliasTo, listNumbers, mobilePhone, rio, siret, specialNumberCategory, stair, streetNumberExtra, streetType})
    }
    */
    /**
     * Credit security deposit [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/securityDeposit#GET)
     */
    /*
    GetPricesAndContractsInformation(amount: TelephonySecurityDepositAmounts, billingAccount: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/securityDeposit?`
  
      const queryParams = new QueryParams()
      if (amount) { queryParams.set('amount', amount.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Credit security deposit [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/%7BbillingAccount%7D/securityDeposit#POST)
     */
    /*
    CreateOrder(amount: TelephonySecurityDepositAmounts, billingAccount: string): Promise<OrderOrder> {
      let url = `/order/telephony/${billingAccount}/securityDeposit`
  
      return this.client.request<OrderOrder>('POST', url, {amount})
    }
    */
    /**
     * Operations about the VOIP service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/telephony/lines`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/telephony/lines/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Add extra simultaneous lines for a specifical line [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/addSimultaneousLines#GET)
     */
    /*
    GetPricesAndContractsInformation(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/lines/${serviceName}/addSimultaneousLines?`
  
      const queryParams = new QueryParams()
      if (billingAccount) { queryParams.set('billingAccount', billingAccount) }
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Add extra simultaneous lines for a specifical line [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/addSimultaneousLines#POST)
     */
    /*
    CreateOrder(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/lines/${serviceName}/addSimultaneousLines`
  
      return this.client.request<OrderOrder>('POST', url, {billingAccount, quantity})
    }
    */
    /**
     * Order a phone for this specific line [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/hardware#GET)
     */
    /*
    GetPricesAndContractsInformation(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/lines/${serviceName}/hardware?`
  
      const queryParams = new QueryParams()
      if (hardware) { queryParams.set('hardware', hardware) }
      if (retractation) { queryParams.set('retractation', retractation.toString()) }
      if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
      if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a phone for this specific line [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/hardware#POST)
     */
    /*
    CreateOrder(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/lines/${serviceName}/hardware`
  
      return this.client.request<OrderOrder>('POST', url, {hardware, retractation, mondialRelayId, shippingContactId})
    }
    */
    /**
     * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/updateSimultaneousChannels#GET)
     */
    /*
    GetPricesAndContractsInformation(quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/lines/${serviceName}/updateSimultaneousChannels?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/lines/%7BserviceName%7D/updateSimultaneousChannels#POST)
     */
    /*
    CreateOrder(quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/lines/${serviceName}/updateSimultaneousChannels`
  
      return this.client.request<OrderOrder>('POST', url, {quantity})
    }
    */
    /**
     * Purchase a new billing account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/new#GET)
     */
    /*
    GetPricesAndContractsInformation(): Promise<OrderOrder> {
      let url = `/order/telephony/new`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Purchase a new billing account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/new#POST)
     */
    /*
    CreateOrder(): Promise<OrderOrder> {
      let url = `/order/telephony/new`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Purchase spare phone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/spare/new#GET)
     */
    /*
    GetPricesAndContractsInformation(brand: string, quantity: number, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/spare/new?`
  
      const queryParams = new QueryParams()
      if (brand) { queryParams.set('brand', brand) }
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
      if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId.toString()) }
      if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Purchase spare phone [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/spare/new#POST)
     */
    /*
    CreateOrder(brand: string, quantity: number, shippingContactId: number, mondialRelayId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/spare/new`
  
      return this.client.request<OrderOrder>('POST', url, {brand, quantity, shippingContactId, mondialRelayId})
    }
    */
    /**
     * Operations about the VOIP service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/telephony/trunks`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/telephony/trunks/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Add extra simultaneous lines for a specifical line [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/addSimultaneousLines#GET)
     */
    /*
    GetPricesAndContractsInformation(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/trunks/${serviceName}/addSimultaneousLines?`
  
      const queryParams = new QueryParams()
      if (billingAccount) { queryParams.set('billingAccount', billingAccount) }
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Add extra simultaneous lines for a specifical line [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/addSimultaneousLines#POST)
     */
    /*
    CreateOrder(billingAccount: string, quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/trunks/${serviceName}/addSimultaneousLines`
  
      return this.client.request<OrderOrder>('POST', url, {billingAccount, quantity})
    }
    */
    /**
     * Order a phone for this specific line [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/hardware#GET)
     */
    /*
    GetPricesAndContractsInformation(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/trunks/${serviceName}/hardware?`
  
      const queryParams = new QueryParams()
      if (hardware) { queryParams.set('hardware', hardware) }
      if (retractation) { queryParams.set('retractation', retractation.toString()) }
      if (mondialRelayId) { queryParams.set('mondialRelayId', mondialRelayId) }
      if (shippingContactId) { queryParams.set('shippingContactId', shippingContactId) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order a phone for this specific line [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/hardware#POST)
     */
    /*
    CreateOrder(hardware: string, retractation: boolean, serviceName: string, mondialRelayId?: string, shippingContactId?: string): Promise<OrderOrder> {
      let url = `/order/telephony/trunks/${serviceName}/hardware`
  
      return this.client.request<OrderOrder>('POST', url, {hardware, retractation, mondialRelayId, shippingContactId})
    }
    */
    /**
     * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/updateSimultaneousChannels#GET)
     */
    /*
    GetPricesAndContractsInformation(quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/trunks/${serviceName}/updateSimultaneousChannels?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Update extra simultaneous channels for a specifical service to the requested amount [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/telephony/trunks/%7BserviceName%7D/updateSimultaneousChannels#POST)
     */
    /*
    CreateOrder(quantity: number, serviceName: string): Promise<OrderOrder> {
      let url = `/order/telephony/trunks/${serviceName}/updateSimultaneousChannels`
  
      return this.client.request<OrderOrder>('POST', url, {quantity})
    }
    */
    /**
     * Operations about the DEDICATED-OPTION service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/baremetalPrivateBandwidth`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/baremetalPrivateBandwidth [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth/%7BserviceName%7D#GET)
     */
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName) {
        let url = `/order/upgrade/baremetalPrivateBandwidth/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName# [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode, quantity, serviceName) {
        let url = `/order/upgrade/baremetalPrivateBandwidth/${serviceName}/${planCode}?`;
        const queryParams = new query_params_1.default();
        if (quantity) {
            queryParams.set('quantity', quantity.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Listing offers /order/upgrade/baremetalPrivateBandwidth/#serviceName# [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPrivateBandwidth/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    PerformTheRequestedUpgradeOfYourService(planCode, quantity, serviceName, autoPayWithPreferredPaymentMethod) {
        let url = `/order/upgrade/baremetalPrivateBandwidth/${serviceName}/${planCode}`;
        return this.client.request('POST', url, { quantity, autoPayWithPreferredPaymentMethod });
    }
    /**
     * Operations about the DEDICATED-OPTION service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/baremetalPublicBandwidth`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/baremetalPublicBandwidth [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/baremetalPublicBandwidth/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/baremetalPublicBandwidth/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/baremetalPublicBandwidth/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/baremetalPublicBandwidth/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/baremetalPublicBandwidth/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the CEPH service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/cephaas`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/cephaas [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/cephaas/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/cephaas/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/cephaas/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/cephaas/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/cephaas/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/cephaas/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the HOSTING_RESELLER service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/hostingReseller`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/hostingReseller [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/hostingReseller/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/hostingReseller/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/hostingReseller/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/hostingReseller/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/hostingReseller/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/hostingReseller/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the IPLB service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/ipLoadbalancing`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/ipLoadbalancing [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/ipLoadbalancing/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/ipLoadbalancing/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/ipLoadbalancing/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/ipLoadbalancing/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/ipLoadbalancing/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/ipLoadbalancing/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the DBAAS-LOGS service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/logs`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/logs [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/logs/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/logs/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/logs/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/logs/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/logs/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/logs/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the METRICS service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/metrics`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/metrics [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/metrics/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/metrics/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/metrics/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/metrics/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/metrics/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/metrics/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the EXCHANGE service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/microsoftExchange`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/microsoftExchange [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/microsoftExchange/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/microsoftExchange/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/microsoftExchange/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/microsoftExchange/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/microsoftExchange/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/microsoftExchange/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the PCC service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/privateCloud`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/privateCloud [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/privateCloud/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/privateCloud/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/privateCloud/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/privateCloud/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/privateCloud/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/privateCloud/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the SSLGATEWAY service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/sslGateway`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/sslGateway [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/sslGateway/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/sslGateway/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/sslGateway/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/sslGateway/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/sslGateway/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/sslGateway/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the VPS service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/upgrade/vps`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/vps [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps/%7BserviceName%7D#GET)
     */
    /*
    RetrieveAvailableOffersToUpgradeYourServiceTo(serviceName: string): Promise<OrdercartGenericProductDefinition[]> {
      let url = `/order/upgrade/vps/${serviceName}`
  
      return this.client.request<OrdercartGenericProductDefinition[]>('GET', url)
    }
    */
    /**
     * Listing offers /order/upgrade/vps/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps/%7BserviceName%7D/%7BplanCode%7D#GET)
     */
    /*
    GetAProvisionalOrderForTheSelectedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/vps/${serviceName}/${planCode}?`
  
      const queryParams = new QueryParams()
      if (quantity) { queryParams.set('quantity', quantity.toString()) }
  
      return this.client.request<OrderupgradeOperationAndOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Listing offers /order/upgrade/vps/#serviceName# [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/upgrade/vps/%7BserviceName%7D/%7BplanCode%7D#POST)
     */
    /*
    PerformTheRequestedUpgradeOfYourService(planCode: string, quantity: number, serviceName: string, autoPayWithPreferredPaymentMethod?: boolean): Promise<OrderupgradeOperationAndOrder> {
      let url = `/order/upgrade/vps/${serviceName}/${planCode}`
  
      return this.client.request<OrderupgradeOperationAndOrder>('POST', url, {quantity, autoPayWithPreferredPaymentMethod})
    }
    */
    /**
     * Operations about the VEEAMCC service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/veeamCloudConnect`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/veeamCloudConnect/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order an upgrade upon your Veeam Cloud Connect account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D/upgrade#GET)
     */
    /*
    GetAllowedDurationsForUpgradeOption(offer: VeeamCloudConnectOffer, serviceName: string): Promise<string[]> {
      let url = `/order/veeamCloudConnect/${serviceName}/upgrade?`
  
      const queryParams = new QueryParams()
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order an upgrade upon your Veeam Cloud Connect account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, offer: VeeamCloudConnectOffer, serviceName: string): Promise<OrderOrder> {
      let url = `/order/veeamCloudConnect/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (offer) { queryParams.set('offer', offer.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order an upgrade upon your Veeam Cloud Connect account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/veeamCloudConnect/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, offer: VeeamCloudConnectOffer, serviceName: string): Promise<OrderOrder> {
      let url = `/order/veeamCloudConnect/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {offer})
    }
    */
    /**
     * Operations about the VPS service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/order/vps`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List available options for this service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D#GET)
     */
    /*
    GetAllowedOptions(serviceName: string): Promise<string[]> {
      let url = `/order/vps/${serviceName}`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Order additional disk [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/additionalDisk#GET)
     */
    GetAllowedDurationsForAdditionalDiskOption(additionalDiskSize, serviceName) {
        let url = `/order/vps/${serviceName}/additionalDisk?`;
        const queryParams = new query_params_1.default();
        if (additionalDiskSize) {
            queryParams.set('additionalDiskSize', additionalDiskSize.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Order additional disk [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/additionalDisk/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(additionalDiskSize: VpsadditionalDiskAdditionalDiskSize, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/additionalDisk/${duration}?`
  
      const queryParams = new QueryParams()
      if (additionalDiskSize) { queryParams.set('additionalDiskSize', additionalDiskSize.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order additional disk [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/additionalDisk/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(additionalDiskSize: VpsadditionalDiskAdditionalDiskSize, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/additionalDisk/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {additionalDiskSize})
    }
    */
    /**
     * Order Automated Backup Option (vps Cloud only) [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/automatedBackup#GET)
     */
    GetAllowedDurationsForAutomatedBackupOption(serviceName) {
        let url = `/order/vps/${serviceName}/automatedBackup`;
        return this.client.request('GET', url);
    }
    /**
     * Order Automated Backup Option (vps Cloud only) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/automatedBackup/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/automatedBackup/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order Automated Backup Option (vps Cloud only) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/automatedBackup/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/automatedBackup/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Create an order for a cPanel license [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/cpanel#GET)
     */
    GetAllowedDurationsForCpanelOption(serviceName) {
        let url = `/order/vps/${serviceName}/cpanel`;
        return this.client.request('GET', url);
    }
    /**
     * Create an order for a cPanel license [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/cpanel/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/cpanel/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Create an order for a cPanel license [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/cpanel/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/cpanel/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order FtpBackup Option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ftpbackup#GET)
     */
    GetAllowedDurationsForFtpbackupOption(serviceName) {
        let url = `/order/vps/${serviceName}/ftpbackup`;
        return this.client.request('GET', url);
    }
    /**
     * Order FtpBackup Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ftpbackup/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/ftpbackup/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order FtpBackup Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ftpbackup/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/ftpbackup/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order Additional IP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ip#GET)
     */
    /*
    GetAllowedDurationsForIpOption(number: number, serviceName: string, country?: VpsipGeolocation): Promise<string[]> {
      let url = `/order/vps/${serviceName}/ip?`
  
      const queryParams = new QueryParams()
      if (number) { queryParams.set('number', number.toString()) }
      if (country) { queryParams.set('country', country.toString()) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order Additional IP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ip/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, number: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/ip/${duration}?`
  
      const queryParams = new QueryParams()
      if (number) { queryParams.set('number', number.toString()) }
      if (country) { queryParams.set('country', country.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order Additional IP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/ip/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, number: number, serviceName: string, country?: VpsipGeolocation): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/ip/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {number, country})
    }
    */
    /**
     * Create an order for a PLESK license [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/plesk#GET)
     */
    GetAllowedDurationsForPleskOption(domainNumber, serviceName) {
        let url = `/order/vps/${serviceName}/plesk?`;
        const queryParams = new query_params_1.default();
        if (domainNumber) {
            queryParams.set('domainNumber', domainNumber.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Create an order for a PLESK license [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/plesk/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(domainNumber: VpsPleskLicenseDomainNumber, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/plesk/${duration}?`
  
      const queryParams = new QueryParams()
      if (domainNumber) { queryParams.set('domainNumber', domainNumber.toString()) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Create an order for a PLESK license [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/plesk/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(domainNumber: VpsPleskLicenseDomainNumber, duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/plesk/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {domainNumber})
    }
    */
    /**
     * Order Snapshot Option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/snapshot#GET)
     */
    GetAllowedDurationsForNapshotOption(serviceName) {
        let url = `/order/vps/${serviceName}/snapshot`;
        return this.client.request('GET', url);
    }
    /**
     * Order Snapshot Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/snapshot/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/snapshot/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order Snapshot Option [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/snapshot/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/snapshot/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order Upgrade [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/upgrade#GET)
     */
    /*
    GetAllowedDurationsForUpgradeOption(model: string, serviceName: string): Promise<string[]> {
      let url = `/order/vps/${serviceName}/upgrade?`
  
      const queryParams = new QueryParams()
      if (model) { queryParams.set('model', model) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order Upgrade [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/upgrade/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, model: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/upgrade/${duration}?`
  
      const queryParams = new QueryParams()
      if (model) { queryParams.set('model', model) }
  
      return this.client.request<OrderOrder>('GET', url+queryParams.toString())
    }
    */
    /**
     * Order Upgrade [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/upgrade/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, model: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/upgrade/${duration}`
  
      return this.client.request<OrderOrder>('POST', url, {model})
    }
    */
    /**
     * Order Veeam Option [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/veeam#GET)
     */
    GetAllowedDurationsForVeeamOption(serviceName) {
        let url = `/order/vps/${serviceName}/veeam`;
        return this.client.request('GET', url);
    }
    /**
     * Order Veeam Option [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/veeam/%7Bduration%7D#GET)
     */
    /*
    GetPricesAndContractsInformation(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/veeam/${duration}`
  
      return this.client.request<OrderOrder>('GET', url)
    }
    */
    /**
     * Order Veeam Option [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/veeam/%7Bduration%7D#POST)
     */
    /*
    CreateOrder(duration: string, serviceName: string): Promise<OrderOrder> {
      let url = `/order/vps/${serviceName}/veeam/${duration}`
  
      return this.client.request<OrderOrder>('POST', url)
    }
    */
    /**
     * Order Windows Option (2015 only) [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/order/vps/%7BserviceName%7D/windows#GET)
     */
    GetAllowedDurationsForWindowsOption(serviceName) {
        let url = `/order/vps/${serviceName}/windows`;
        return this.client.request('GET', url);
    }
}
exports.Order = Order;
//# sourceMappingURL=order.js.map