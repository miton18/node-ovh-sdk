"use strict";
// GENERATED SDK for hosting/web API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
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
 * Attached domain cdn enum
 */
var HostingwebattachedDomainCdn;
(function (HostingwebattachedDomainCdn) {
    HostingwebattachedDomainCdn["ACTIVE"] = "active";
    HostingwebattachedDomainCdn["NONE"] = "none";
})(HostingwebattachedDomainCdn = exports.HostingwebattachedDomainCdn || (exports.HostingwebattachedDomainCdn = {}));
/*
 * Attached domain firewall enum
 */
var HostingwebattachedDomainFirewall;
(function (HostingwebattachedDomainFirewall) {
    HostingwebattachedDomainFirewall["ACTIVE"] = "active";
    HostingwebattachedDomainFirewall["NONE"] = "none";
})(HostingwebattachedDomainFirewall = exports.HostingwebattachedDomainFirewall || (exports.HostingwebattachedDomainFirewall = {}));
/*
 * AttachedDomain status
 */
var HostingwebattachedDomainStatus;
(function (HostingwebattachedDomainStatus) {
    HostingwebattachedDomainStatus["CREATED"] = "created";
    HostingwebattachedDomainStatus["CREATING"] = "creating";
    HostingwebattachedDomainStatus["DELETING"] = "deleting";
    HostingwebattachedDomainStatus["UPDATING"] = "updating";
})(HostingwebattachedDomainStatus = exports.HostingwebattachedDomainStatus || (exports.HostingwebattachedDomainStatus = {}));
/*
 * List of backup types
 */
var HostingwebbackupType;
(function (HostingwebbackupType) {
    HostingwebbackupType["DAILY_1"] = "daily.1";
    HostingwebbackupType["DAILY_2"] = "daily.2";
    HostingwebbackupType["DAILY_3"] = "daily.3";
    HostingwebbackupType["WEEKLY_1"] = "weekly.1";
    HostingwebbackupType["WEEKLY_2"] = "weekly.2";
})(HostingwebbackupType = exports.HostingwebbackupType || (exports.HostingwebbackupType = {}));
/*
 * Cdn status
 */
var HostingwebcdnStatus;
(function (HostingwebcdnStatus) {
    HostingwebcdnStatus["CREATED"] = "created";
    HostingwebcdnStatus["CREATING"] = "creating";
    HostingwebcdnStatus["DELETING"] = "deleting";
    HostingwebcdnStatus["FLUSHING"] = "flushing";
})(HostingwebcdnStatus = exports.HostingwebcdnStatus || (exports.HostingwebcdnStatus = {}));
/*
 * Available cluster countries
 */
var HostingwebCountry;
(function (HostingwebCountry) {
    HostingwebCountry["BE"] = "BE";
    HostingwebCountry["CZ"] = "CZ";
    HostingwebCountry["DE"] = "DE";
    HostingwebCountry["ES"] = "ES";
    HostingwebCountry["FI"] = "FI";
    HostingwebCountry["FR"] = "FR";
    HostingwebCountry["IE"] = "IE";
    HostingwebCountry["IT"] = "IT";
    HostingwebCountry["LT"] = "LT";
    HostingwebCountry["NL"] = "NL";
    HostingwebCountry["PL"] = "PL";
    HostingwebCountry["PT"] = "PT";
    HostingwebCountry["UK"] = "UK";
})(HostingwebCountry = exports.HostingwebCountry || (exports.HostingwebCountry = {}));
/*
 * Cron's language
 */
var HostingwebcronLanguage;
(function (HostingwebcronLanguage) {
    HostingwebcronLanguage["NODE10"] = "node10";
    HostingwebcronLanguage["NODE11"] = "node11";
    HostingwebcronLanguage["NODE8"] = "node8";
    HostingwebcronLanguage["NODE9"] = "node9";
    HostingwebcronLanguage["OTHER"] = "other";
    HostingwebcronLanguage["PHP4"] = "php4";
    HostingwebcronLanguage["PHP5_2"] = "php5.2";
    HostingwebcronLanguage["PHP5_3"] = "php5.3";
    HostingwebcronLanguage["PHP5_4"] = "php5.4";
    HostingwebcronLanguage["PHP5_5"] = "php5.5";
    HostingwebcronLanguage["PHP5_6"] = "php5.6";
    HostingwebcronLanguage["PHP7_0"] = "php7.0";
    HostingwebcronLanguage["PHP7_1"] = "php7.1";
    HostingwebcronLanguage["PHP7_2"] = "php7.2";
    HostingwebcronLanguage["PHP7_3"] = "php7.3";
    HostingwebcronLanguage["PYTHON2"] = "python2";
    HostingwebcronLanguage["PYTHON3"] = "python3";
    HostingwebcronLanguage["RUBY2_4"] = "ruby2.4";
    HostingwebcronLanguage["RUBY2_5"] = "ruby2.5";
    HostingwebcronLanguage["RUBY2_6"] = "ruby2.6";
})(HostingwebcronLanguage = exports.HostingwebcronLanguage || (exports.HostingwebcronLanguage = {}));
/*
 * Cron status
 */
var HostingwebcronStatus;
(function (HostingwebcronStatus) {
    HostingwebcronStatus["DISABLED"] = "disabled";
    HostingwebcronStatus["ENABLED"] = "enabled";
    HostingwebcronStatus["SUSPENDED"] = "suspended";
})(HostingwebcronStatus = exports.HostingwebcronStatus || (exports.HostingwebcronStatus = {}));
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
 * List of dump types
 */
var HostingwebdatabasedumpDate;
(function (HostingwebdatabasedumpDate) {
    HostingwebdatabasedumpDate["DAILY_1"] = "daily.1";
    HostingwebdatabasedumpDate["NOW"] = "now";
    HostingwebdatabasedumpDate["WEEKLY_1"] = "weekly.1";
})(HostingwebdatabasedumpDate = exports.HostingwebdatabasedumpDate || (exports.HostingwebdatabasedumpDate = {}));
/*
 * Database dump status
 */
var HostingwebdatabasedumpStatus;
(function (HostingwebdatabasedumpStatus) {
    HostingwebdatabasedumpStatus["CREATED"] = "created";
    HostingwebdatabasedumpStatus["CREATING"] = "creating";
    HostingwebdatabasedumpStatus["DELETING"] = "deleting";
})(HostingwebdatabasedumpStatus = exports.HostingwebdatabasedumpStatus || (exports.HostingwebdatabasedumpStatus = {}));
/*
 * Database mode
 */
var HostingwebdatabaseMode;
(function (HostingwebdatabaseMode) {
    HostingwebdatabaseMode["BESTEFFORT"] = "besteffort";
    HostingwebdatabaseMode["CLASSIC"] = "classic";
    HostingwebdatabaseMode["MODULE"] = "module";
})(HostingwebdatabaseMode = exports.HostingwebdatabaseMode || (exports.HostingwebdatabaseMode = {}));
/*
 * Types of action you can request for your database
 */
var HostingwebdatabaseRequestAction;
(function (HostingwebdatabaseRequestAction) {
    HostingwebdatabaseRequestAction["CHECK_QUOTA"] = "CHECK_QUOTA";
})(HostingwebdatabaseRequestAction = exports.HostingwebdatabaseRequestAction || (exports.HostingwebdatabaseRequestAction = {}));
/*
 * Database state
 */
var HostingwebdatabaseState;
(function (HostingwebdatabaseState) {
    HostingwebdatabaseState["CLOSE"] = "close";
    HostingwebdatabaseState["OK"] = "ok";
    HostingwebdatabaseState["READONLY"] = "readonly";
})(HostingwebdatabaseState = exports.HostingwebdatabaseState || (exports.HostingwebdatabaseState = {}));
/*
 * Types of statistics available for the database
 */
var HostingwebdatabaseStatisticsType;
(function (HostingwebdatabaseStatisticsType) {
    HostingwebdatabaseStatisticsType["STATEMENT"] = "statement";
    HostingwebdatabaseStatisticsType["STATEMENTMEANTIME"] = "statementMeanTime";
})(HostingwebdatabaseStatisticsType = exports.HostingwebdatabaseStatisticsType || (exports.HostingwebdatabaseStatisticsType = {}));
/*
 * Database status
 */
var HostingwebdatabaseStatus;
(function (HostingwebdatabaseStatus) {
    HostingwebdatabaseStatus["CHECKING"] = "checking";
    HostingwebdatabaseStatus["CREATED"] = "created";
    HostingwebdatabaseStatus["CREATING"] = "creating";
    HostingwebdatabaseStatus["DELETING"] = "deleting";
    HostingwebdatabaseStatus["DUMPING"] = "dumping";
    HostingwebdatabaseStatus["IMPORTING"] = "importing";
    HostingwebdatabaseStatus["LOCKED"] = "locked";
    HostingwebdatabaseStatus["OPTIMIZING"] = "optimizing";
    HostingwebdatabaseStatus["RESTORING"] = "restoring";
    HostingwebdatabaseStatus["UPDATING"] = "updating";
})(HostingwebdatabaseStatus = exports.HostingwebdatabaseStatus || (exports.HostingwebdatabaseStatus = {}));
/*
 * Indicates the current support state of your database version
 */
var HostingwebdatabaseSupportedVersion;
(function (HostingwebdatabaseSupportedVersion) {
    HostingwebdatabaseSupportedVersion["BETA"] = "beta";
    HostingwebdatabaseSupportedVersion["DEPRECATED"] = "deprecated";
    HostingwebdatabaseSupportedVersion["STABLE"] = "stable";
})(HostingwebdatabaseSupportedVersion = exports.HostingwebdatabaseSupportedVersion || (exports.HostingwebdatabaseSupportedVersion = {}));
/*
 * Available datacenters
 */
var HostingwebDatacenter;
(function (HostingwebDatacenter) {
    HostingwebDatacenter["GRA1"] = "gra1";
    HostingwebDatacenter["GRA2"] = "gra2";
    HostingwebDatacenter["P19"] = "p19";
})(HostingwebDatacenter = exports.HostingwebDatacenter || (exports.HostingwebDatacenter = {}));
/*
 * Disk type available
 */
var HostingwebDiskType;
(function (HostingwebDiskType) {
    HostingwebDiskType["HDD"] = "HDD";
    HostingwebDiskType["SSD"] = "SSD";
})(HostingwebDiskType = exports.HostingwebDiskType || (exports.HostingwebDiskType = {}));
/*
 * EnvVar status
 */
var HostingwebenvVarStatus;
(function (HostingwebenvVarStatus) {
    HostingwebenvVarStatus["CREATED"] = "created";
    HostingwebenvVarStatus["CREATING"] = "creating";
    HostingwebenvVarStatus["DELETING"] = "deleting";
    HostingwebenvVarStatus["UPDATING"] = "updating";
})(HostingwebenvVarStatus = exports.HostingwebenvVarStatus || (exports.HostingwebenvVarStatus = {}));
/*
 * EnvVar type
 */
var HostingwebenvVarType;
(function (HostingwebenvVarType) {
    HostingwebenvVarType["INTEGER"] = "integer";
    HostingwebenvVarType["PASSWORD"] = "password";
    HostingwebenvVarType["STRING"] = "string";
})(HostingwebenvVarType = exports.HostingwebenvVarType || (exports.HostingwebenvVarType = {}));
/*
 * Available status for freedoms
 */
var HostingwebfreedomStatus;
(function (HostingwebfreedomStatus) {
    HostingwebfreedomStatus["BLOCKEDBYCUSTOMER"] = "blockedByCustomer";
    HostingwebfreedomStatus["BLOCKEDBYSYSTEM"] = "blockedBySystem";
    HostingwebfreedomStatus["OK"] = "ok";
    HostingwebfreedomStatus["PRESET"] = "preset";
})(HostingwebfreedomStatus = exports.HostingwebfreedomStatus || (exports.HostingwebfreedomStatus = {}));
/*
 * Highlight tips for offer
 */
var HostingwebHighLight;
(function (HostingwebHighLight) {
    HostingwebHighLight["BEST_SELLER"] = "best-seller";
    HostingwebHighLight["NEW"] = "new";
})(HostingwebHighLight = exports.HostingwebHighLight || (exports.HostingwebHighLight = {}));
/*
 * Hostedssl report value
 */
var HostingwebhostedsslReportValue;
(function (HostingwebhostedsslReportValue) {
    HostingwebhostedsslReportValue["COMPLETED"] = "completed";
    HostingwebhostedsslReportValue["IN_PROGRESS"] = "in-progress";
    HostingwebhostedsslReportValue["NON_COMPLETED"] = "non-completed";
    HostingwebhostedsslReportValue["NON_REQUIRED"] = "non-required";
    HostingwebhostedsslReportValue["NOT_APPLICABLE"] = "not-applicable";
    HostingwebhostedsslReportValue["NOT_PROVIDED"] = "not-provided";
})(HostingwebhostedsslReportValue = exports.HostingwebhostedsslReportValue || (exports.HostingwebhostedsslReportValue = {}));
/*
 * Hostedssl status
 */
var HostingwebhostedsslStatus;
(function (HostingwebhostedsslStatus) {
    HostingwebhostedsslStatus["CREATED"] = "created";
    HostingwebhostedsslStatus["CREATING"] = "creating";
    HostingwebhostedsslStatus["DELETING"] = "deleting";
    HostingwebhostedsslStatus["IMPORTING"] = "importing";
    HostingwebhostedsslStatus["REGENERATING"] = "regenerating";
})(HostingwebhostedsslStatus = exports.HostingwebhostedsslStatus || (exports.HostingwebhostedsslStatus = {}));
/*
 * Availability of an email address for a local SEO order
 */
var HostingweblocalSeoaccountEmailAvailability;
(function (HostingweblocalSeoaccountEmailAvailability) {
    HostingweblocalSeoaccountEmailAvailability["AVAILABLE"] = "available";
    HostingweblocalSeoaccountEmailAvailability["MERGE"] = "merge";
    HostingweblocalSeoaccountEmailAvailability["NIC"] = "nic";
    HostingweblocalSeoaccountEmailAvailability["TAKEN"] = "taken";
})(HostingweblocalSeoaccountEmailAvailability = exports.HostingweblocalSeoaccountEmailAvailability || (exports.HostingweblocalSeoaccountEmailAvailability = {}));
/*
 * Account status
 */
var HostingweblocalSeoaccountStatus;
(function (HostingweblocalSeoaccountStatus) {
    HostingweblocalSeoaccountStatus["CREATED"] = "created";
    HostingweblocalSeoaccountStatus["CREATING"] = "creating";
    HostingweblocalSeoaccountStatus["DELETING"] = "deleting";
    HostingweblocalSeoaccountStatus["UPDATING"] = "updating";
})(HostingweblocalSeoaccountStatus = exports.HostingweblocalSeoaccountStatus || (exports.HostingweblocalSeoaccountStatus = {}));
/*
 * Sync status of a location field
 */
var HostingweblocalSeoFieldStatus;
(function (HostingweblocalSeoFieldStatus) {
    HostingweblocalSeoFieldStatus["MATCH"] = "MATCH";
    HostingweblocalSeoFieldStatus["MISMATCH"] = "MISMATCH";
    HostingweblocalSeoFieldStatus["MISSING"] = "MISSING";
    HostingweblocalSeoFieldStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
    HostingweblocalSeoFieldStatus["PRESENT"] = "PRESENT";
})(HostingweblocalSeoFieldStatus = exports.HostingweblocalSeoFieldStatus || (exports.HostingweblocalSeoFieldStatus = {}));
/*
 * Status of a listing
 */
var HostingweblocalSeoFlowStatus;
(function (HostingweblocalSeoFlowStatus) {
    HostingweblocalSeoFlowStatus["ALL_INFORMATION_SUBMITTED"] = "ALL_INFORMATION_SUBMITTED";
    HostingweblocalSeoFlowStatus["DONT_REMOVE"] = "DONT_REMOVE";
    HostingweblocalSeoFlowStatus["INACTIVE"] = "INACTIVE";
    HostingweblocalSeoFlowStatus["MANUALLY_DEACTIVATED"] = "MANUALLY_DEACTIVATED";
    HostingweblocalSeoFlowStatus["NEEDS_REVIEW"] = "NEEDS_REVIEW";
    HostingweblocalSeoFlowStatus["NOT_SUPPORTED"] = "NOT_SUPPORTED";
    HostingweblocalSeoFlowStatus["NO_ACTION_NEEDED"] = "NO_ACTION_NEEDED";
    HostingweblocalSeoFlowStatus["REMOVAL_NEEDED"] = "REMOVAL_NEEDED";
    HostingweblocalSeoFlowStatus["REMOVAL_REVIEW_NEEDED"] = "REMOVAL_REVIEW_NEEDED";
    HostingweblocalSeoFlowStatus["REMOVAL_SUBMITTED"] = "REMOVAL_SUBMITTED";
    HostingweblocalSeoFlowStatus["REMOVED"] = "REMOVED";
    HostingweblocalSeoFlowStatus["SUBMISSION_NEEDED"] = "SUBMISSION_NEEDED";
    HostingweblocalSeoFlowStatus["WAITING_DIRECTORY_ACTION"] = "WAITING_DIRECTORY_ACTION";
    HostingweblocalSeoFlowStatus["WAITING_USER_ACTION"] = "WAITING_USER_ACTION";
})(HostingweblocalSeoFlowStatus = exports.HostingweblocalSeoFlowStatus || (exports.HostingweblocalSeoFlowStatus = {}));
/*
 * Sync status of a listing
 */
var HostingweblocalSeoListingStatus;
(function (HostingweblocalSeoListingStatus) {
    HostingweblocalSeoListingStatus["IN_SYNC"] = "IN_SYNC";
    HostingweblocalSeoListingStatus["NOT_FOUND"] = "NOT_FOUND";
    HostingweblocalSeoListingStatus["NOT_IN_SYNC"] = "NOT_IN_SYNC";
    HostingweblocalSeoListingStatus["NOT_SUPPORTED"] = "NOT_SUPPORTED";
    HostingweblocalSeoListingStatus["NO_ONLINE_LISTING"] = "NO_ONLINE_LISTING";
    HostingweblocalSeoListingStatus["TECHNICAL_PROBLEMS"] = "TECHNICAL_PROBLEMS";
})(HostingweblocalSeoListingStatus = exports.HostingweblocalSeoListingStatus || (exports.HostingweblocalSeoListingStatus = {}));
/*
 * Location country
 */
var HostingweblocalSeolocationCountry;
(function (HostingweblocalSeolocationCountry) {
    HostingweblocalSeolocationCountry["FR"] = "FR";
})(HostingweblocalSeolocationCountry = exports.HostingweblocalSeolocationCountry || (exports.HostingweblocalSeolocationCountry = {}));
/*
 * Location offer
 */
var HostingweblocalSeolocationOffer;
(function (HostingweblocalSeolocationOffer) {
    HostingweblocalSeolocationOffer["NORMAL"] = "normal";
})(HostingweblocalSeolocationOffer = exports.HostingweblocalSeolocationOffer || (exports.HostingweblocalSeolocationOffer = {}));
/*
 * Location status
 */
var HostingweblocalSeolocationStatus;
(function (HostingweblocalSeolocationStatus) {
    HostingweblocalSeolocationStatus["CREATED"] = "created";
    HostingweblocalSeolocationStatus["CREATING"] = "creating";
    HostingweblocalSeolocationStatus["DELETING"] = "deleting";
    HostingweblocalSeolocationStatus["UPDATING"] = "updating";
})(HostingweblocalSeolocationStatus = exports.HostingweblocalSeolocationStatus || (exports.HostingweblocalSeolocationStatus = {}));
/*
 * Types of action you can request for your mail
 */
var HostingwebmailAction;
(function (HostingwebmailAction) {
    HostingwebmailAction["BLOCK"] = "BLOCK";
    HostingwebmailAction["PURGE"] = "PURGE";
    HostingwebmailAction["UNBLOCK"] = "UNBLOCK";
})(HostingwebmailAction = exports.HostingwebmailAction || (exports.HostingwebmailAction = {}));
/*
 * Mail state enum
 */
var HostingwebmailState;
(function (HostingwebmailState) {
    HostingwebmailState["BOUNCE"] = "bounce";
    HostingwebmailState["FORCE"] = "force";
    HostingwebmailState["KO"] = "ko";
    HostingwebmailState["OK"] = "ok";
    HostingwebmailState["PURGING"] = "purging";
    HostingwebmailState["SPAM"] = "spam";
})(HostingwebmailState = exports.HostingwebmailState || (exports.HostingwebmailState = {}));
/*
 * The type of the admin name
 */
var HostingwebmoduleAdminNameType;
(function (HostingwebmoduleAdminNameType) {
    HostingwebmoduleAdminNameType["EMAIL"] = "email";
    HostingwebmoduleAdminNameType["STRING"] = "string";
})(HostingwebmoduleAdminNameType = exports.HostingwebmoduleAdminNameType || (exports.HostingwebmoduleAdminNameType = {}));
/*
 * Branch enum
 */
var HostingwebmoduleBranch;
(function (HostingwebmoduleBranch) {
    HostingwebmoduleBranch["OLD"] = "old";
    HostingwebmoduleBranch["STABLE"] = "stable";
    HostingwebmoduleBranch["TESTING"] = "testing";
})(HostingwebmoduleBranch = exports.HostingwebmoduleBranch || (exports.HostingwebmoduleBranch = {}));
/*
 * The type of the dependency. A dependency can be a standard database (like MySQL or PostgreSQL) or a key-value store (like Redis or Memcached) for example
 */
var HostingwebmoduleDependencyType;
(function (HostingwebmoduleDependencyType) {
    HostingwebmoduleDependencyType["MYSQL"] = "mysql";
})(HostingwebmoduleDependencyType = exports.HostingwebmoduleDependencyType || (exports.HostingwebmoduleDependencyType = {}));
/*
 * Install language
 */
var HostingwebmoduleLanguage;
(function (HostingwebmoduleLanguage) {
    HostingwebmoduleLanguage["CZ"] = "cz";
    HostingwebmoduleLanguage["DE"] = "de";
    HostingwebmoduleLanguage["EN"] = "en";
    HostingwebmoduleLanguage["ES"] = "es";
    HostingwebmoduleLanguage["FI"] = "fi";
    HostingwebmoduleLanguage["FR"] = "fr";
    HostingwebmoduleLanguage["IT"] = "it";
    HostingwebmoduleLanguage["LT"] = "lt";
    HostingwebmoduleLanguage["NL"] = "nl";
    HostingwebmoduleLanguage["PL"] = "pl";
    HostingwebmoduleLanguage["PT"] = "pt";
})(HostingwebmoduleLanguage = exports.HostingwebmoduleLanguage || (exports.HostingwebmoduleLanguage = {}));
/*
 * Module status
 */
var HostingwebmoduleStatus;
(function (HostingwebmoduleStatus) {
    HostingwebmoduleStatus["CREATED"] = "created";
    HostingwebmoduleStatus["CREATING"] = "creating";
    HostingwebmoduleStatus["DELETING"] = "deleting";
    HostingwebmoduleStatus["UPDATING"] = "updating";
})(HostingwebmoduleStatus = exports.HostingwebmoduleStatus || (exports.HostingwebmoduleStatus = {}));
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
 * Hosting's OS
 */
var HostingwebOperatingSystem;
(function (HostingwebOperatingSystem) {
    HostingwebOperatingSystem["LINUX"] = "linux";
})(HostingwebOperatingSystem = exports.HostingwebOperatingSystem || (exports.HostingwebOperatingSystem = {}));
/*
 * Hosting configuration image to run website
 */
var HostingwebovhconfigContainer;
(function (HostingwebovhconfigContainer) {
    HostingwebovhconfigContainer["JESSIE_I386"] = "jessie.i386";
    HostingwebovhconfigContainer["LEGACY"] = "legacy";
    HostingwebovhconfigContainer["STABLE"] = "stable";
    HostingwebovhconfigContainer["TESTING"] = "testing";
})(HostingwebovhconfigContainer = exports.HostingwebovhconfigContainer || (exports.HostingwebovhconfigContainer = {}));
/*
 * Hosting configuration engine
 */
var HostingwebovhConfigEngineName;
(function (HostingwebovhConfigEngineName) {
    HostingwebovhConfigEngineName["PHP"] = "php";
    HostingwebovhConfigEngineName["PHPCGI"] = "phpcgi";
})(HostingwebovhConfigEngineName = exports.HostingwebovhConfigEngineName || (exports.HostingwebovhConfigEngineName = {}));
/*
 * Hosting configuration environment
 */
var HostingwebovhConfigEnvironment;
(function (HostingwebovhConfigEnvironment) {
    HostingwebovhConfigEnvironment["DEVELOPMENT"] = "development";
    HostingwebovhConfigEnvironment["PRODUCTION"] = "production";
})(HostingwebovhConfigEnvironment = exports.HostingwebovhConfigEnvironment || (exports.HostingwebovhConfigEnvironment = {}));
/*
 * Hosting configuration firewall
 */
var HostingwebovhConfigHttpFirewall;
(function (HostingwebovhConfigHttpFirewall) {
    HostingwebovhConfigHttpFirewall["NONE"] = "none";
    HostingwebovhConfigHttpFirewall["SECURITY"] = "security";
})(HostingwebovhConfigHttpFirewall = exports.HostingwebovhConfigHttpFirewall || (exports.HostingwebovhConfigHttpFirewall = {}));
/*
 * Ovhconfig status
 */
var HostingwebovhConfigStatus;
(function (HostingwebovhConfigStatus) {
    HostingwebovhConfigStatus["CREATED"] = "created";
    HostingwebovhConfigStatus["ROLLBACKING"] = "rollbacking";
    HostingwebovhConfigStatus["UPDATING"] = "updating";
})(HostingwebovhConfigStatus = exports.HostingwebovhConfigStatus || (exports.HostingwebovhConfigStatus = {}));
/*
 * OwnLogs status
 */
var HostingwebownLogsStatus;
(function (HostingwebownLogsStatus) {
    HostingwebownLogsStatus["CREATED"] = "created";
    HostingwebownLogsStatus["CREATING"] = "creating";
    HostingwebownLogsStatus["DELETING"] = "deleting";
})(HostingwebownLogsStatus = exports.HostingwebownLogsStatus || (exports.HostingwebownLogsStatus = {}));
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
 * Different support of PHP versions
 */
var HostingwebPhpVersionState;
(function (HostingwebPhpVersionState) {
    HostingwebPhpVersionState["BETA"] = "BETA";
    HostingwebPhpVersionState["END_OF_LIFE"] = "END_OF_LIFE";
    HostingwebPhpVersionState["SECURITY_FIXES"] = "SECURITY_FIXES";
    HostingwebPhpVersionState["SUPPORTED"] = "SUPPORTED";
})(HostingwebPhpVersionState = exports.HostingwebPhpVersionState || (exports.HostingwebPhpVersionState = {}));
/*
 * Different Python versions available
 */
var HostingwebPythonVersionAvailable;
(function (HostingwebPythonVersionAvailable) {
    HostingwebPythonVersionAvailable["PYTHON_2"] = "python-2";
    HostingwebPythonVersionAvailable["PYTHON_3"] = "python-3";
})(HostingwebPythonVersionAvailable = exports.HostingwebPythonVersionAvailable || (exports.HostingwebPythonVersionAvailable = {}));
/*
 * Types of action you can request for your web hosting
 */
var HostingwebRequestAction;
(function (HostingwebRequestAction) {
    HostingwebRequestAction["CHECK_QUOTA"] = "CHECK_QUOTA";
    HostingwebRequestAction["FLUSH_CACHE"] = "FLUSH_CACHE";
    HostingwebRequestAction["SCAN_ANTIHACK"] = "SCAN_ANTIHACK";
})(HostingwebRequestAction = exports.HostingwebRequestAction || (exports.HostingwebRequestAction = {}));
/*
 * Hosting's type
 */
var HostingwebResource;
(function (HostingwebResource) {
    HostingwebResource["BESTEFFORT"] = "bestEffort";
    HostingwebResource["CLOUD"] = "cloud";
    HostingwebResource["DEDICATED"] = "dedicated";
    HostingwebResource["SHARED"] = "shared";
})(HostingwebResource = exports.HostingwebResource || (exports.HostingwebResource = {}));
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
 * Runtime env enum
 */
var HostingwebruntimeEnv;
(function (HostingwebruntimeEnv) {
    HostingwebruntimeEnv["DEVELOPMENT"] = "development";
    HostingwebruntimeEnv["PRODUCTION"] = "production";
})(HostingwebruntimeEnv = exports.HostingwebruntimeEnv || (exports.HostingwebruntimeEnv = {}));
/*
 * Runtime state enum
 */
var HostingwebruntimeState;
(function (HostingwebruntimeState) {
    HostingwebruntimeState["CREATED"] = "created";
    HostingwebruntimeState["CREATING"] = "creating";
    HostingwebruntimeState["DELETING"] = "deleting";
    HostingwebruntimeState["UPDATING"] = "updating";
})(HostingwebruntimeState = exports.HostingwebruntimeState || (exports.HostingwebruntimeState = {}));
/*
 * Runtime backend type enum
 */
var HostingwebruntimeType;
(function (HostingwebruntimeType) {
    HostingwebruntimeType["NODEJS_10"] = "nodejs-10";
    HostingwebruntimeType["NODEJS_11"] = "nodejs-11";
    HostingwebruntimeType["NODEJS_8"] = "nodejs-8";
    HostingwebruntimeType["NODEJS_9"] = "nodejs-9";
    HostingwebruntimeType["PHPFPM_5_6"] = "phpfpm-5.6";
    HostingwebruntimeType["PHPFPM_7_0"] = "phpfpm-7.0";
    HostingwebruntimeType["PHPFPM_7_1"] = "phpfpm-7.1";
    HostingwebruntimeType["PHPFPM_7_2"] = "phpfpm-7.2";
    HostingwebruntimeType["PHPFPM_7_3"] = "phpfpm-7.3";
    HostingwebruntimeType["PYTHON_2"] = "python-2";
    HostingwebruntimeType["PYTHON_3"] = "python-3";
    HostingwebruntimeType["RUBY_2_4"] = "ruby-2.4";
    HostingwebruntimeType["RUBY_2_5"] = "ruby-2.5";
    HostingwebruntimeType["RUBY_2_6"] = "ruby-2.6";
})(HostingwebruntimeType = exports.HostingwebruntimeType || (exports.HostingwebruntimeType = {}));
/*
 * Hosting's state
 */
var HostingwebState;
(function (HostingwebState) {
    HostingwebState["ACTIVE"] = "active";
    HostingwebState["BLOQUED"] = "bloqued";
    HostingwebState["MAINTENANCE"] = "maintenance";
})(HostingwebState = exports.HostingwebState || (exports.HostingwebState = {}));
/*
 * Available periods for statistics
 */
var HostingwebStatisticsPeriod;
(function (HostingwebStatisticsPeriod) {
    HostingwebStatisticsPeriod["DAILY"] = "daily";
    HostingwebStatisticsPeriod["MONTHLY"] = "monthly";
    HostingwebStatisticsPeriod["WEEKLY"] = "weekly";
    HostingwebStatisticsPeriod["YEARLY"] = "yearly";
})(HostingwebStatisticsPeriod = exports.HostingwebStatisticsPeriod || (exports.HostingwebStatisticsPeriod = {}));
/*
 * Types of statistics available for the web hosting
 */
var HostingwebStatisticsType;
(function (HostingwebStatisticsType) {
    HostingwebStatisticsType["IN_FTPCOMMANDS"] = "in.ftpCommands";
    HostingwebStatisticsType["IN_HTTPHITS"] = "in.httpHits";
    HostingwebStatisticsType["IN_HTTPMEANRESPONSETIME"] = "in.httpMeanResponseTime";
    HostingwebStatisticsType["OUT_TCPCONN"] = "out.tcpConn";
    HostingwebStatisticsType["SYS_CPUUSAGE"] = "sys.cpuUsage";
    HostingwebStatisticsType["SYS_WORKERSPAWNOVERLOAD"] = "sys.workerSpawnOverload";
})(HostingwebStatisticsType = exports.HostingwebStatisticsType || (exports.HostingwebStatisticsType = {}));
/*
 * Task object type listing
 */
var HostingwebtaskObjectType;
(function (HostingwebtaskObjectType) {
    HostingwebtaskObjectType["ABUSE"] = "Abuse";
    HostingwebtaskObjectType["ATTACHEDDOMAIN"] = "AttachedDomain";
    HostingwebtaskObjectType["BLOCKEDIP"] = "BlockedIp";
    HostingwebtaskObjectType["CDN"] = "Cdn";
    HostingwebtaskObjectType["CRON"] = "Cron";
    HostingwebtaskObjectType["DATABASE"] = "Database";
    HostingwebtaskObjectType["DUMP"] = "Dump";
    HostingwebtaskObjectType["ENVVAR"] = "EnvVar";
    HostingwebtaskObjectType["FILERZ"] = "Filerz";
    HostingwebtaskObjectType["HOSTEDSSL"] = "Hostedssl";
    HostingwebtaskObjectType["HOSTING"] = "Hosting";
    HostingwebtaskObjectType["INDY"] = "Indy";
    HostingwebtaskObjectType["INFRA"] = "Infra";
    HostingwebtaskObjectType["MINOR"] = "Minor";
    HostingwebtaskObjectType["MODULE"] = "Module";
    HostingwebtaskObjectType["OTHER"] = "Other";
    HostingwebtaskObjectType["OVHCONFIG"] = "OvhConfig";
    HostingwebtaskObjectType["OVHORG"] = "OvhOrg";
    HostingwebtaskObjectType["OWNLOGS"] = "OwnLogs";
    HostingwebtaskObjectType["RUNTIME"] = "Runtime";
    HostingwebtaskObjectType["SCAN"] = "Scan";
    HostingwebtaskObjectType["SQLPERSO"] = "Sqlperso";
    HostingwebtaskObjectType["USER"] = "User";
    HostingwebtaskObjectType["USERLOGS"] = "UserLogs";
    HostingwebtaskObjectType["WEB"] = "Web";
    HostingwebtaskObjectType["WEBD"] = "Webd";
})(HostingwebtaskObjectType = exports.HostingwebtaskObjectType || (exports.HostingwebtaskObjectType = {}));
/*
 * Task's status
 */
var HostingwebtaskStatus;
(function (HostingwebtaskStatus) {
    HostingwebtaskStatus["CANCELLED"] = "cancelled";
    HostingwebtaskStatus["DOING"] = "doing";
    HostingwebtaskStatus["DONE"] = "done";
    HostingwebtaskStatus["ERROR"] = "error";
    HostingwebtaskStatus["INIT"] = "init";
    HostingwebtaskStatus["TODO"] = "todo";
})(HostingwebtaskStatus = exports.HostingwebtaskStatus || (exports.HostingwebtaskStatus = {}));
/*
 * Account's ssh state
 */
var HostingwebuserSshState;
(function (HostingwebuserSshState) {
    HostingwebuserSshState["ACTIVE"] = "active";
    HostingwebuserSshState["NONE"] = "none";
    HostingwebuserSshState["SFTPONLY"] = "sftponly";
})(HostingwebuserSshState = exports.HostingwebuserSshState || (exports.HostingwebuserSshState = {}));
/*
 * Account's state
 */
var HostingwebuserState;
(function (HostingwebuserState) {
    HostingwebuserState["OFF"] = "off";
    HostingwebuserState["RW"] = "rw";
})(HostingwebuserState = exports.HostingwebuserState || (exports.HostingwebuserState = {}));
/*
 * User status
 */
var HostingwebuserStatus;
(function (HostingwebuserStatus) {
    HostingwebuserStatus["CREATED"] = "created";
    HostingwebuserStatus["CREATING"] = "creating";
    HostingwebuserStatus["DELETING"] = "deleting";
    HostingwebuserStatus["UPDATING"] = "updating";
})(HostingwebuserStatus = exports.HostingwebuserStatus || (exports.HostingwebuserStatus = {}));
/*
 * UserLogs status
 */
var HostingwebuserLogsStatus;
(function (HostingwebuserLogsStatus) {
    HostingwebuserLogsStatus["CREATED"] = "created";
    HostingwebuserLogsStatus["CREATING"] = "creating";
    HostingwebuserLogsStatus["DELETING"] = "deleting";
    HostingwebuserLogsStatus["UPDATING"] = "updating";
})(HostingwebuserLogsStatus = exports.HostingwebuserLogsStatus || (exports.HostingwebuserLogsStatus = {}));
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
class HostingWeb {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the HOSTING service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web#GET)
     */
    ListAvailableServices() {
        let url = `/hosting/web`;
        return this.client.request('GET', url);
    }
    /**
     * Web Hosting [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/hosting/web/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Web Hosting [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/hosting/web/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * activatePrivateDatabase operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/activatePrivateDatabase#POST)
     */
    ActivateAnIncludedPrivateDatabaseOnYourHostingOffer(ram, serviceName, version) {
        let url = `/hosting/web/${serviceName}/activatePrivateDatabase`;
        return this.client.request('POST', url, { ram, version });
    }
    /**
     * List the hosting.web.attachedDomain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain#GET)
     */
    DomainsOrSubdomainsAttachedToYourHosting(serviceName, domain, path) {
        let url = `/hosting/web/${serviceName}/attachedDomain?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        if (path) {
            queryParams.set('path', path);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.attachedDomain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain#POST)
     */
    LinkADomainToThisHosting(domain, path, serviceName, cdn, firewall, ownLog, runtimeId, ssl) {
        let url = `/hosting/web/${serviceName}/attachedDomain`;
        return this.client.request('POST', url, { domain, path, cdn, firewall, ownLog, runtimeId, ssl });
    }
    /**
     * Virtual service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string): Promise<HostingwebattachedDomain> {
      let url = `/hosting/web/${serviceName}/attachedDomain/${domain}`
  
      return this.client.request<HostingwebattachedDomain>('GET', url)
    }
    */
    /**
     * Virtual service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D#PUT)
     */
    /*
    AlterThisObjectProperties(domain: string, serviceName: string, payload: HostingwebattachedDomain): Promise<void> {
      let url = `/hosting/web/${serviceName}/attachedDomain/${domain}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Virtual service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D#DELETE)
     */
    UnlinkDomainFromHosting(domain, serviceName) {
        let url = `/hosting/web/${serviceName}/attachedDomain/${domain}`;
        return this.client.request('DELETE', url);
    }
    /**
     * purgeCache operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D/purgeCache#POST)
     */
    PurgeCacheForThisAttachedDomain(domain, serviceName) {
        let url = `/hosting/web/${serviceName}/attachedDomain/${domain}/purgeCache`;
        return this.client.request('POST', url);
    }
    /**
     * restart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/attachedDomain/%7Bdomain%7D/restart#POST)
     */
    RestartTheVirtualHostOfTheAttachedDomain(domain, serviceName) {
        let url = `/hosting/web/${serviceName}/attachedDomain/${domain}/restart`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.web.boostHistory objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/boostHistory#GET)
     */
    HistoryOfYourHostingBoost(serviceName, date) {
        let url = `/hosting/web/${serviceName}/boostHistory?`;
        const queryParams = new query_params_1.default();
        if (date) {
            queryParams.set('date', date.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * History of your boost requests [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/boostHistory/%7Bdate%7D#GET)
     */
    /*
    GetThisObjectProperties(date: string, serviceName: string): Promise<HostingwebboostHistory> {
      let url = `/hosting/web/${serviceName}/boostHistory/${date}`
  
      return this.client.request<HostingwebboostHistory>('GET', url)
    }
    */
    /**
     * CDN service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<Hostingwebcdn> {
      let url = `/hosting/web/${serviceName}/cdn`
  
      return this.client.request<Hostingwebcdn>('GET', url)
    }
    */
    /**
     * serviceInfos operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/hosting/web/${serviceName}/cdn/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * serviceInfosUpdate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn/serviceInfosUpdate#POST)
     */
    /*
    AlterThisObjectProperties(renew: ServiceRenewType, serviceName: string): Promise<void> {
      let url = `/hosting/web/${serviceName}/cdn/serviceInfosUpdate`
  
      return this.client.request<void>('POST', url, {renew})
    }
    */
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cdn/terminate#POST)
     */
    TerminateYourCdnSubService(serviceName) {
        let url = `/hosting/web/${serviceName}/cdn/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/hosting/web/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/hosting/web/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the hosting.web.cron objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron#GET)
     */
    CronsOnYourHosting(serviceName, command, description, email, language) {
        let url = `/hosting/web/${serviceName}/cron?`;
        const queryParams = new query_params_1.default();
        if (command) {
            queryParams.set('command', command);
        }
        if (description) {
            queryParams.set('description', description);
        }
        if (email) {
            queryParams.set('email', email);
        }
        if (language) {
            queryParams.set('language', language.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.cron objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron#POST)
     */
    CreateNewCron(command, frequency, language, serviceName, description, email, status) {
        let url = `/hosting/web/${serviceName}/cron`;
        return this.client.request('POST', url, { command, frequency, language, description, email, status });
    }
    /**
     * Hosting crons [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebcron> {
      let url = `/hosting/web/${serviceName}/cron/${id}`
  
      return this.client.request<Hostingwebcron>('GET', url)
    }
    */
    /**
     * Hosting crons [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: Hostingwebcron): Promise<void> {
      let url = `/hosting/web/${serviceName}/cron/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Hosting crons [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cron/%7Bid%7D#DELETE)
     */
    DeleteCron(id, serviceName) {
        let url = `/hosting/web/${serviceName}/cron/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * cronAvailableLanguage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/cronAvailableLanguage#GET)
     */
    ListAvailableCronLanguage(serviceName) {
        let url = `/hosting/web/${serviceName}/cronAvailableLanguage`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.web.database objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database#GET)
     */
    DatabasesLinkedToYourHosting(serviceName, mode, name, server, type, user) {
        let url = `/hosting/web/${serviceName}/database?`;
        const queryParams = new query_params_1.default();
        if (mode) {
            queryParams.set('mode', mode.toString());
        }
        if (name) {
            queryParams.set('name', name);
        }
        if (server) {
            queryParams.set('server', server);
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        if (user) {
            queryParams.set('user', user);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.database objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database#POST)
     */
    InstallNewDatabase(capabilitie, serviceName, type, user, password, quota, version) {
        let url = `/hosting/web/${serviceName}/database`;
        return this.client.request('POST', url, { capabilitie, type, user, password, quota, version });
    }
    /**
     * Database [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<Hostingwebdatabase> {
      let url = `/hosting/web/${serviceName}/database/${name}`
  
      return this.client.request<Hostingwebdatabase>('GET', url)
    }
    */
    /**
     * Database [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D#DELETE)
     */
    DeleteDatabase(name, serviceName) {
        let url = `/hosting/web/${serviceName}/database/${name}`;
        return this.client.request('DELETE', url);
    }
    /**
     * capabilities operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/capabilities#GET)
     */
    GetAvailableCapabilitiesForThisDatabase(name, serviceName) {
        let url = `/hosting/web/${serviceName}/database/${name}/capabilities`;
        return this.client.request('GET', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/changePassword#POST)
     */
    RequestAPasswordChange(name, password, serviceName) {
        let url = `/hosting/web/${serviceName}/database/${name}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * List the hosting.web.database.dump objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump#GET)
     */
    DumpAvailableForYourDatabases(name, serviceName, creationDate, deletionDate, type) {
        let url = `/hosting/web/${serviceName}/database/${name}/dump?`;
        const queryParams = new query_params_1.default();
        if (creationDate) {
            queryParams.set('creationDate', creationDate.toString());
        }
        if (deletionDate) {
            queryParams.set('deletionDate', deletionDate.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.database.dump objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump#POST)
     */
    RequestTheDumpFromYourDatabase(date, name, serviceName, sendEmail) {
        let url = `/hosting/web/${serviceName}/database/${name}/dump`;
        return this.client.request('POST', url, { date, sendEmail });
    }
    /**
     * Dump [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, name: string, serviceName: string): Promise<Hostingwebdatabasedump> {
      let url = `/hosting/web/${serviceName}/database/${name}/dump/${id}`
  
      return this.client.request<Hostingwebdatabasedump>('GET', url)
    }
    */
    /**
     * Dump [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump/%7Bid%7D#DELETE)
     */
    DeleteDumpBeforeExpirationDate(id, name, serviceName) {
        let url = `/hosting/web/${serviceName}/database/${name}/dump/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * restore operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/dump/%7Bid%7D/restore#POST)
     */
    RequestTheRestoreFromThisDump(id, name, serviceName) {
        let url = `/hosting/web/${serviceName}/database/${name}/dump/${id}/restore`;
        return this.client.request('POST', url);
    }
    /**
     * import operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/import#POST)
     */
    ImportADumpFromAnSpecificFileUploadedWithMedocuments(documentId, name, serviceName, flushDatabase, sendEmail) {
        let url = `/hosting/web/${serviceName}/database/${name}/import`;
        return this.client.request('POST', url, { documentId, flushDatabase, sendEmail });
    }
    /**
     * request operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/request#POST)
     */
    RequestSpecificOperationForYourDatabase(action, name, serviceName) {
        let url = `/hosting/web/${serviceName}/database/${name}/request`;
        return this.client.request('POST', url, { action });
    }
    /**
     * restore operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/restore#POST)
     */
    RequestTheRestoreFromYourDatabaseBackup(date, name, serviceName, sendEmail) {
        let url = `/hosting/web/${serviceName}/database/${name}/restore`;
        return this.client.request('POST', url, { date, sendEmail });
    }
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/database/%7Bname%7D/statistics#GET)
     */
    GetStatisticsAboutThisDatabase(name, period, serviceName, type) {
        let url = `/hosting/web/${serviceName}/database/${name}/statistics?`;
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
     * databaseAvailableType operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/databaseAvailableType#GET)
     */
    ListAvailableDatabaseType(serviceName) {
        let url = `/hosting/web/${serviceName}/databaseAvailableType`;
        return this.client.request('GET', url);
    }
    /**
     * databaseAvailableVersion operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/databaseAvailableVersion#GET)
     */
    ListAvailableDatabaseVersionFollowingAType(serviceName, type) {
        let url = `/hosting/web/${serviceName}/databaseAvailableVersion?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * databaseCreationCapabilities operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/databaseCreationCapabilities#GET)
     */
    ListAvailableDatabaseYouCanInstall(serviceName) {
        let url = `/hosting/web/${serviceName}/databaseCreationCapabilities`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.web.dump objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/dump#GET)
     */
    DumpsLinkedToYourHosting(serviceName, creationDate, databaseName, deletionDate, orphan) {
        let url = `/hosting/web/${serviceName}/dump?`;
        const queryParams = new query_params_1.default();
        if (creationDate) {
            queryParams.set('creationDate', creationDate.toString());
        }
        if (databaseName) {
            queryParams.set('databaseName', databaseName);
        }
        if (deletionDate) {
            queryParams.set('deletionDate', deletionDate.toString());
        }
        if (orphan) {
            queryParams.set('orphan', orphan.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Dump [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/dump/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebdump> {
      let url = `/hosting/web/${serviceName}/dump/${id}`
  
      return this.client.request<Hostingwebdump>('GET', url)
    }
    */
    /**
     * Dump [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/dump/%7Bid%7D#DELETE)
     */
    /*
    DeleteDumpBeforeExpirationDate(id: number, serviceName: string): Promise<Hostingwebtask> {
      let url = `/hosting/web/${serviceName}/dump/${id}`
  
      return this.client.request<Hostingwebtask>('DELETE', url)
    }
    */
    /**
     * Hosting automated emails [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<Hostingwebemail> {
      let url = `/hosting/web/${serviceName}/email`
  
      return this.client.request<Hostingwebemail>('GET', url)
    }
    */
    /**
     * Hosting automated emails [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: Hostingwebemail): Promise<void> {
      let url = `/hosting/web/${serviceName}/email`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * bounces operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email/bounces#GET)
     */
    RequestTheLastBounces(limit, serviceName) {
        let url = `/hosting/web/${serviceName}/email/bounces?`;
        const queryParams = new query_params_1.default();
        if (limit) {
            queryParams.set('limit', limit.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * request operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email/request#POST)
     */
    RequestSpecificOperationForYourEmail(action, serviceName) {
        let url = `/hosting/web/${serviceName}/email/request`;
        return this.client.request('POST', url, { action });
    }
    /**
     * volumes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/email/volumes#GET)
     */
    RequestTheHistoryVolumeOfEmailSent(serviceName) {
        let url = `/hosting/web/${serviceName}/email/volumes`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.web.envVar objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar#GET)
     */
    EnvironmentVariablesSetOnYourWebhosting(serviceName, type) {
        let url = `/hosting/web/${serviceName}/envVar?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.envVar objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar#POST)
     */
    SetAVariableToThisHosting(key, serviceName, type, value) {
        let url = `/hosting/web/${serviceName}/envVar`;
        return this.client.request('POST', url, { key, type, value });
    }
    /**
     * Environment variables set into your webhosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar/%7Bkey%7D#GET)
     */
    /*
    GetThisObjectProperties(key: string, serviceName: string): Promise<HostingwebenvVar> {
      let url = `/hosting/web/${serviceName}/envVar/${key}`
  
      return this.client.request<HostingwebenvVar>('GET', url)
    }
    */
    /**
     * Environment variables set into your webhosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar/%7Bkey%7D#PUT)
     */
    /*
    AlterThisObjectProperties(key: string, serviceName: string, payload: HostingwebenvVar): Promise<void> {
      let url = `/hosting/web/${serviceName}/envVar/${key}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Environment variables set into your webhosting account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/envVar/%7Bkey%7D#DELETE)
     */
    RemoveVariableFromHosting(key, serviceName) {
        let url = `/hosting/web/${serviceName}/envVar/${key}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the hosting.web.extrasqlperso objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso#GET)
     */
    SqlpersoLinkedToYourHosting(serviceName) {
        let url = `/hosting/web/${serviceName}/extraSqlPerso`;
        return this.client.request('GET', url);
    }
    /**
     * Sqlperso service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<Hostingwebextrasqlperso> {
      let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}`
  
      return this.client.request<Hostingwebextrasqlperso>('GET', url)
    }
    */
    /**
     * databases operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/databases#GET)
     */
    GetDatabasesLinkedWithThisOption(name, serviceName) {
        let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/databases`;
        return this.client.request('GET', url);
    }
    /**
     * serviceInfos operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<ServicesService> {
      let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * serviceInfosUpdate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/serviceInfosUpdate#POST)
     */
    /*
    AlterThisObjectProperties(name: string, renew: ServiceRenewType, serviceName: string): Promise<void> {
      let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/serviceInfosUpdate`
  
      return this.client.request<void>('POST', url, {renew})
    }
    */
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/extraSqlPerso/%7Bname%7D/terminate#POST)
     */
    TerminateYourExtraSqlPersoSubService(name, serviceName) {
        let url = `/hosting/web/${serviceName}/extraSqlPerso/${name}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.web.freedom objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/freedom#GET)
     */
    FreedomLinkedToThisHostingAccount(serviceName, status) {
        let url = `/hosting/web/${serviceName}/freedom?`;
        const queryParams = new query_params_1.default();
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Freedoms linked to this hosting account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/freedom/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string): Promise<Hostingwebfreedom> {
      let url = `/hosting/web/${serviceName}/freedom/${domain}`
  
      return this.client.request<Hostingwebfreedom>('GET', url)
    }
    */
    /**
     * Freedoms linked to this hosting account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/freedom/%7Bdomain%7D#DELETE)
     */
    DeleteTheFreedom(domain, serviceName) {
        let url = `/hosting/web/${serviceName}/freedom/${domain}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the hosting.web.indy objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/indy#GET)
     */
    UserOfMultidomainIndependentAllowedOnYourHosting(serviceName, login) {
        let url = `/hosting/web/${serviceName}/indy?`;
        const queryParams = new query_params_1.default();
        if (login) {
            queryParams.set('login', login);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Hosting indys [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/indy/%7Blogin%7D#GET)
     */
    /*
    GetThisObjectProperties(login: string, serviceName: string): Promise<Hostingwebindy> {
      let url = `/hosting/web/${serviceName}/indy/${login}`
  
      return this.client.request<Hostingwebindy>('GET', url)
    }
    */
    /**
     * List the hosting.web.localSeo.account objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/account#GET)
     */
    LocalSEOAccountsAssociatedToTheHosting(serviceName, email) {
        let url = `/hosting/web/${serviceName}/localSeo/account?`;
        const queryParams = new query_params_1.default();
        if (email) {
            queryParams.set('email', email);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Local SEO accounts [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/account/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<HostingweblocalSeoaccount> {
      let url = `/hosting/web/${serviceName}/localSeo/account/${id}`
  
      return this.client.request<HostingweblocalSeoaccount>('GET', url)
    }
    */
    /**
     * login operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/account/%7Bid%7D/login#POST)
     */
    LoginThisLocationForSSO(id, serviceName) {
        let url = `/hosting/web/${serviceName}/localSeo/account/${id}/login`;
        return this.client.request('POST', url);
    }
    /**
     * emailAvailability operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/emailAvailability#GET)
     */
    CheckEmailAvailabilityForALocalSEOOrder(email, serviceName) {
        let url = `/hosting/web/${serviceName}/localSeo/emailAvailability?`;
        const queryParams = new query_params_1.default();
        if (email) {
            queryParams.set('email', email);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.localSeo.location objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location#GET)
     */
    LocalSEOLocationsAssociatedToTheHosting(serviceName) {
        let url = `/hosting/web/${serviceName}/localSeo/location`;
        return this.client.request('GET', url);
    }
    /**
     * Local SEO locations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<HostingweblocalSeolocation> {
      let url = `/hosting/web/${serviceName}/localSeo/location/${id}`
  
      return this.client.request<HostingweblocalSeolocation>('GET', url)
    }
    */
    /**
     * serviceInfos operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<ServicesService> {
      let url = `/hosting/web/${serviceName}/localSeo/location/${id}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * serviceInfosUpdate operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D/serviceInfosUpdate#POST)
     */
    /*
    AlterThisObjectProperties(id: number, renew: ServiceRenewType, serviceName: string): Promise<void> {
      let url = `/hosting/web/${serviceName}/localSeo/location/${id}/serviceInfosUpdate`
  
      return this.client.request<void>('POST', url, {renew})
    }
    */
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/localSeo/location/%7Bid%7D/terminate#POST)
     */
    TerminateALocalSEOSubService(id, serviceName) {
        let url = `/hosting/web/${serviceName}/localSeo/location/${id}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.web.module objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module#GET)
     */
    ModuleInstalledOnYourHosting(serviceName) {
        let url = `/hosting/web/${serviceName}/module`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.web.module objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module#POST)
     */
    InstallANewModule(moduleId, serviceName, adminName, adminPassword, dependencies, domain, language, path) {
        let url = `/hosting/web/${serviceName}/module`;
        return this.client.request('POST', url, { moduleId, adminName, adminPassword, dependencies, domain, language, path });
    }
    /**
     * Hosting modules installed [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebmodule> {
      let url = `/hosting/web/${serviceName}/module/${id}`
  
      return this.client.request<Hostingwebmodule>('GET', url)
    }
    */
    /**
     * Hosting modules installed [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module/%7Bid%7D#DELETE)
     */
    DeleteAModuleInstalled(id, serviceName) {
        let url = `/hosting/web/${serviceName}/module/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/module/%7Bid%7D/changePassword#POST)
     */
    GenerateANewAdminPasswordForYourModule(id, serviceName) {
        let url = `/hosting/web/${serviceName}/module/${id}/changePassword`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.web.ovhConfig objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig#GET)
     */
    ConfigurationUsedOnYourHosting(serviceName, historical, path) {
        let url = `/hosting/web/${serviceName}/ovhConfig?`;
        const queryParams = new query_params_1.default();
        if (historical) {
            queryParams.set('historical', historical.toString());
        }
        if (path) {
            queryParams.set('path', path);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Virtual service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<HostingwebovhConfig> {
      let url = `/hosting/web/${serviceName}/ovhConfig/${id}`
  
      return this.client.request<HostingwebovhConfig>('GET', url)
    }
    */
    /**
     * changeConfiguration operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig/%7Bid%7D/changeConfiguration#POST)
     */
    ApplyANewConfigurationOnThisPath(id, serviceName, container, engineName, engineVersion, environment, httpFirewall) {
        let url = `/hosting/web/${serviceName}/ovhConfig/${id}/changeConfiguration`;
        return this.client.request('POST', url, { container, engineName, engineVersion, environment, httpFirewall });
    }
    /**
     * rollback operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfig/%7Bid%7D/rollback#POST)
     */
    RollbackToAnOldConfiguration(id, rollbackId, serviceName) {
        let url = `/hosting/web/${serviceName}/ovhConfig/${id}/rollback`;
        return this.client.request('POST', url, { rollbackId });
    }
    /**
     * ovhConfigRefresh operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ovhConfigRefresh#POST)
     */
    SynchronizeTheConfigurationListingWithContentOnYourHosting(serviceName) {
        let url = `/hosting/web/${serviceName}/ovhConfigRefresh`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.web.ownLogs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs#GET)
     */
    OwnLogsLinkedToYourHosting(serviceName) {
        let url = `/hosting/web/${serviceName}/ownLogs`;
        return this.client.request('GET', url);
    }
    /**
     * Hosting own logs [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<HostingwebownLogs> {
      let url = `/hosting/web/${serviceName}/ownLogs/${id}`
  
      return this.client.request<HostingwebownLogs>('GET', url)
    }
    */
    /**
     * List the hosting.web.userLogs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs#GET)
     */
    UserAllowedToConnectIntoYourLogsInterface(id, serviceName, login) {
        let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs?`;
        const queryParams = new query_params_1.default();
        if (login) {
            queryParams.set('login', login);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.userLogs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs#POST)
     */
    CreateNewUserLogs(description, id, login, password, serviceName, ownLogsId) {
        let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs`;
        return this.client.request('POST', url, { description, login, password, ownLogsId });
    }
    /**
     * Hosting users logs [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<HostingwebuserLogs> {
      let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}`
  
      return this.client.request<HostingwebuserLogs>('GET', url)
    }
    */
    /**
     * Hosting users logs [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, login: string, serviceName: string, payload: HostingwebuserLogs): Promise<void> {
      let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Hosting users logs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D#DELETE)
     */
    DeleteTheUserLogs(id, login, serviceName) {
        let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ownLogs/%7Bid%7D/userLogs/%7Blogin%7D/changePassword#POST)
     */
    /*
    RequestAPasswordChange(id: number, login: string, password: string, serviceName: string): Promise<string> {
      let url = `/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}/changePassword`
  
      return this.client.request<string>('POST', url, {password})
    }
    */
    /**
     * privateDatabaseCreationCapabilities operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/privateDatabaseCreationCapabilities#GET)
     */
    ListAvailablePrivateDatabaseYouCanInstall(serviceName) {
        let url = `/hosting/web/${serviceName}/privateDatabaseCreationCapabilities`;
        return this.client.request('GET', url);
    }
    /**
     * privateDatabases operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/privateDatabases#GET)
     */
    ListLinkedPrivateDatabases(serviceName) {
        let url = `/hosting/web/${serviceName}/privateDatabases`;
        return this.client.request('GET', url);
    }
    /**
     * request operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/request#POST)
     */
    RequestSpecificOperationForYourHosting(action, serviceName) {
        let url = `/hosting/web/${serviceName}/request`;
        return this.client.request('POST', url, { action });
    }
    /**
     * requestBoost operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/requestBoost#POST)
     */
    AllowsYouToBoostYourOffer(serviceName, offer) {
        let url = `/hosting/web/${serviceName}/requestBoost`;
        return this.client.request('POST', url, { offer });
    }
    /**
     * restoreSnapshot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/restoreSnapshot#POST)
     */
    RestoreThisSnapshotALLCURRENTDATAWILLBEREPLACEDBYYOURSNAPSHOT(backup, serviceName) {
        let url = `/hosting/web/${serviceName}/restoreSnapshot`;
        return this.client.request('POST', url, { backup });
    }
    /**
     * List the hosting.web.runtime objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime#GET)
     */
    ListOfRuntimeConfigurationsToYourHosting(serviceName, name, type) {
        let url = `/hosting/web/${serviceName}/runtime?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.runtime objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime#POST)
     */
    RequestTheCreationOfANewRuntimeConfiguration(serviceName, appBootstrap, appEnv, attachedDomains, isDefault, name, publicDir, type) {
        let url = `/hosting/web/${serviceName}/runtime`;
        return this.client.request('POST', url, { appBootstrap, appEnv, attachedDomains, isDefault, name, publicDir, type });
    }
    /**
     * The runtime configuration of an attached domain for cloud web offer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebruntime> {
      let url = `/hosting/web/${serviceName}/runtime/${id}`
  
      return this.client.request<Hostingwebruntime>('GET', url)
    }
    */
    /**
     * The runtime configuration of an attached domain for cloud web offer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: Hostingwebruntime): Promise<void> {
      let url = `/hosting/web/${serviceName}/runtime/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * The runtime configuration of an attached domain for cloud web offer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D#DELETE)
     */
    DeleteARuntimeConfigurationOfAnHosting(id, serviceName) {
        let url = `/hosting/web/${serviceName}/runtime/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * attachedDomains operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtime/%7Bid%7D/attachedDomains#GET)
     */
    GetTheAttachedDomainsLinkedToThisRuntimeConfiguration(id, serviceName) {
        let url = `/hosting/web/${serviceName}/runtime/${id}/attachedDomains`;
        return this.client.request('GET', url);
    }
    /**
     * runtimeAvailableTypes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/runtimeAvailableTypes#GET)
     */
    ListAvailableRuntimeConfigurationsAvailableBackendTypes(serviceName, language) {
        let url = `/hosting/web/${serviceName}/runtimeAvailableTypes?`;
        const queryParams = new query_params_1.default();
        if (language) {
            queryParams.set('language', language);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/hosting/web/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/hosting/web/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Hostedssl [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<Hostingwebssl> {
      let url = `/hosting/web/${serviceName}/ssl`
  
      return this.client.request<Hostingwebssl>('GET', url)
    }
    */
    /**
     * Hostedssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl#POST)
     */
    CreateTheFreeDefaultHostedSslORImportYourProperSSLOnYourHosting(serviceName, certificate, chain, key) {
        let url = `/hosting/web/${serviceName}/ssl`;
        return this.client.request('POST', url, { certificate, chain, key });
    }
    /**
     * Hostedssl [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl#DELETE)
     */
    DeleteTheHostedSslOnYourHosting(serviceName) {
        let url = `/hosting/web/${serviceName}/ssl`;
        return this.client.request('DELETE', url);
    }
    /**
     * domains operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl/domains#GET)
     */
    GetDomainsLinkedToThisHostedSsl(serviceName) {
        let url = `/hosting/web/${serviceName}/ssl/domains`;
        return this.client.request('GET', url);
    }
    /**
     * regenerate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl/regenerate#POST)
     */
    RequestTheRegenerationOfYourHostedSsl(serviceName) {
        let url = `/hosting/web/${serviceName}/ssl/regenerate`;
        return this.client.request('POST', url);
    }
    /**
     * Hostedssl Report [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/ssl/report#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<Hostingwebsslreport> {
      let url = `/hosting/web/${serviceName}/ssl/report`
  
      return this.client.request<Hostingwebsslreport>('GET', url)
    }
    */
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/statistics#GET)
     */
    GetStatisticsAboutThisWebHosting(period, serviceName, type) {
        let url = `/hosting/web/${serviceName}/statistics?`;
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
     * List the hosting.web.task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/tasks#GET)
     */
    TasksAttachedToYourHosting(serviceName, _function, status) {
        let url = `/hosting/web/${serviceName}/tasks?`;
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
     * Tasks [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Hostingwebtask> {
      let url = `/hosting/web/${serviceName}/tasks/${id}`
  
      return this.client.request<Hostingwebtask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/hosting/web/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * token operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/token#GET)
     */
    UseToLinkAnExternalDomainThisTokenHasToBeInsertIntoATXTFieldOnYourDnsZoneWithOvhcontrolSubdomain(serviceName) {
        let url = `/hosting/web/${serviceName}/token`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.web.user objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user#GET)
     */
    UserAllowedToConnectIntoYourHosting(serviceName, home, login) {
        let url = `/hosting/web/${serviceName}/user?`;
        const queryParams = new query_params_1.default();
        if (home) {
            queryParams.set('home', home);
        }
        if (login) {
            queryParams.set('login', login);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.user objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user#POST)
     */
    CreateNewFtpsshUser(home, login, password, serviceName, sshState) {
        let url = `/hosting/web/${serviceName}/user`;
        return this.client.request('POST', url, { home, login, password, sshState });
    }
    /**
     * Hosting users [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D#GET)
     */
    /*
    GetThisObjectProperties(login: string, serviceName: string): Promise<Hostingwebuser> {
      let url = `/hosting/web/${serviceName}/user/${login}`
  
      return this.client.request<Hostingwebuser>('GET', url)
    }
    */
    /**
     * Hosting users [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D#PUT)
     */
    /*
    AlterThisObjectProperties(login: string, serviceName: string, payload: Hostingwebuser): Promise<void> {
      let url = `/hosting/web/${serviceName}/user/${login}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Hosting users [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D#DELETE)
     */
    DeleteFtpsshUser(login, serviceName) {
        let url = `/hosting/web/${serviceName}/user/${login}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/user/%7Blogin%7D/changePassword#POST)
     */
    /*
    RequestAPasswordChange(login: string, password: string, serviceName: string): Promise<Hostingwebtask> {
      let url = `/hosting/web/${serviceName}/user/${login}/changePassword`
  
      return this.client.request<Hostingwebtask>('POST', url, {password})
    }
    */
    /**
     * List the hosting.web.userLogs objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs#GET)
     */
    /*
    UserAllowedToConnectIntoYourLogsInterface(serviceName: string, login?: string): Promise<string[]> {
      let url = `/hosting/web/${serviceName}/userLogs?`
  
      const queryParams = new QueryParams()
      if (login) { queryParams.set('login', login) }
  
      return this.client.request<string[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * List the hosting.web.userLogs objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs#POST)
     */
    /*
    CreateNewUserLogs(description: string, login: string, password: string, serviceName: string, ownLogsId?: number): Promise<string> {
      let url = `/hosting/web/${serviceName}/userLogs`
  
      return this.client.request<string>('POST', url, {description, login, password, ownLogsId})
    }
    */
    /**
     * Hosting users logs [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D#GET)
     */
    /*
    GetThisObjectProperties(login: string, serviceName: string): Promise<HostingwebuserLogs> {
      let url = `/hosting/web/${serviceName}/userLogs/${login}`
  
      return this.client.request<HostingwebuserLogs>('GET', url)
    }
    */
    /**
     * Hosting users logs [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D#PUT)
     */
    /*
    AlterThisObjectProperties(login: string, serviceName: string, payload: HostingwebuserLogs): Promise<void> {
      let url = `/hosting/web/${serviceName}/userLogs/${login}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Hosting users logs [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D#DELETE)
     */
    /*
    DeleteTheUserLogs(login: string, serviceName: string): Promise<string> {
      let url = `/hosting/web/${serviceName}/userLogs/${login}`
  
      return this.client.request<string>('DELETE', url)
    }
    */
    /**
     * changePassword operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogs/%7Blogin%7D/changePassword#POST)
     */
    /*
    RequestAPasswordChange(login: string, password: string, serviceName: string): Promise<string> {
      let url = `/hosting/web/${serviceName}/userLogs/${login}/changePassword`
  
      return this.client.request<string>('POST', url, {password})
    }
    */
    /**
     * userLogsToken operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/%7BserviceName%7D/userLogsToken#GET)
     */
    GetATemporaryTokenToAccessTheYourWebHostingLogsInterface(serviceName, attachedDomain, remoteCheck, ttl) {
        let url = `/hosting/web/${serviceName}/userLogsToken?`;
        const queryParams = new query_params_1.default();
        if (attachedDomain) {
            queryParams.set('attachedDomain', attachedDomain);
        }
        if (remoteCheck) {
            queryParams.set('remoteCheck', remoteCheck.toString());
        }
        if (ttl) {
            queryParams.set('ttl', ttl.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Find hosting service linked to a domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/attachedDomain#GET)
     */
    FindHostingServiceLinkedToADomain(domain) {
        let url = `/hosting/web/attachedDomain?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get available offer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/availableOffer#GET)
     */
    GetAvailableOffer(domain) {
        let url = `/hosting/web/availableOffer?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get current incident [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/incident#GET)
     */
    GetCurrentIncident() {
        let url = `/hosting/web/incident`;
        return this.client.request('GET', url);
    }
    /**
     * Get list of directories associated to a local SEO offer and a country [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/directoriesList#GET)
     */
    GetListOfDirectoriesAssociatedToALocalSEOOfferAndACountry(country, offer) {
        let url = `/hosting/web/localSeo/directoriesList?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (offer) {
            queryParams.set('offer', offer.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Check email availability for a local SEO order [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/emailAvailability#GET)
     */
    /*
    CheckEmailAvailabilityForALocalSEOOrder(email: string): Promise<HostingweblocalSeoEmailAvailability> {
      let url = `/hosting/web/localSeo/emailAvailability?`
  
      const queryParams = new QueryParams()
      if (email) { queryParams.set('email', email) }
  
      return this.client.request<HostingweblocalSeoEmailAvailability>('GET', url+queryParams.toString())
    }
    */
    /**
     * Check visibility of a location [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/visibilityCheck#POST)
     */
    CheckVisibilityOfALocation(country, name, street, zip) {
        let url = `/hosting/web/localSeo/visibilityCheck`;
        return this.client.request('POST', url, { country, name, street, zip });
    }
    /**
     * Get the result of a visibility check [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/localSeo/visibilityCheckResult#GET)
     */
    GetTheResultOfAVisibilityCheck(directory, id, token) {
        let url = `/hosting/web/localSeo/visibilityCheckResult?`;
        const queryParams = new query_params_1.default();
        if (directory) {
            queryParams.set('directory', directory);
        }
        if (id) {
            queryParams.set('id', id.toString());
        }
        if (token) {
            queryParams.set('token', token);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.web.ModuleList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/moduleList#GET)
     */
    IDsOfAllModulesAvailable(active, branch, latest) {
        let url = `/hosting/web/moduleList?`;
        const queryParams = new query_params_1.default();
        if (active) {
            queryParams.set('active', active.toString());
        }
        if (branch) {
            queryParams.set('branch', branch.toString());
        }
        if (latest) {
            queryParams.set('latest', latest.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * A module specifically packaged by OVH [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/moduleList/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number): Promise<HostingwebModuleList> {
      let url = `/hosting/web/moduleList/${id}`
  
      return this.client.request<HostingwebModuleList>('GET', url)
    }
    */
    /**
     * Get offer capabilities [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/web/offerCapabilities#GET)
     */
    GetOfferCapabilities(offer) {
        let url = `/hosting/web/offerCapabilities?`;
        const queryParams = new query_params_1.default();
        if (offer) {
            queryParams.set('offer', offer.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.HostingWeb = HostingWeb;
//# sourceMappingURL=hosting.web.js.map