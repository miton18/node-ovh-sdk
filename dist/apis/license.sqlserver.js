"use strict";
// GENERATED SDK for license/sqlserver API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * A short description of what does the Task on your license
 */
var LicenseActionType;
(function (LicenseActionType) {
    LicenseActionType["ADDWINDOWFROMEXISTINGSERIAL"] = "addWindowFromExistingSerial";
    LicenseActionType["CHANGEIP"] = "changeIp";
    LicenseActionType["CHANGEOS"] = "changeOs";
    LicenseActionType["INSTALLLICENSE"] = "installLicense";
    LicenseActionType["OPTIONUPGRADE"] = "optionUpgrade";
    LicenseActionType["RELEASEOPTION"] = "releaseOption";
    LicenseActionType["VERSIONUPGRADE"] = "versionUpgrade";
})(LicenseActionType = exports.LicenseActionType || (exports.LicenseActionType = {}));
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
 * All states a license can be in
 */
var LicenseState;
(function (LicenseState) {
    LicenseState["OK"] = "ok";
    LicenseState["RELEASED"] = "released";
    LicenseState["TERMINATED"] = "terminated";
    LicenseState["TODELIVER"] = "toDeliver";
})(LicenseState = exports.LicenseState || (exports.LicenseState = {}));
/*
 * All states a license Task can be in
 */
var LicenseTaskState;
(function (LicenseTaskState) {
    LicenseTaskState["CANCELLED"] = "cancelled";
    LicenseTaskState["DOING"] = "doing";
    LicenseTaskState["DONE"] = "done";
    LicenseTaskState["ERROR"] = "error";
    LicenseTaskState["TODO"] = "todo";
})(LicenseTaskState = exports.LicenseTaskState || (exports.LicenseTaskState = {}));
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
class LicenseSqlserver {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver#GET)
     */
    ListAvailableServices() {
        let url = `/license/sqlserver`;
        return this.client.request('GET', url);
    }
    /**
     * Your SQL Server license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/license/sqlserver/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/license/sqlserver/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/license/sqlserver/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/license/sqlserver/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName, action, status) {
        let url = `/license/sqlserver/${serviceName}/tasks?`;
        const queryParams = new query_params_1.default();
        if (action) {
            queryParams.set('action', action.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * licenses Todos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
      let url = `/license/sqlserver/${serviceName}/tasks/${taskId}`
  
      return this.client.request<LicenseTask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/license/sqlserver/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Get the orderable Sql Server versions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/orderableVersions#GET)
     */
    GetTheOrderableSqlServerVersions(ip) {
        let url = `/license/sqlserver/orderableVersions?`;
        const queryParams = new query_params_1.default();
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.LicenseSqlserver = LicenseSqlserver;
//# sourceMappingURL=license.sqlserver.js.map