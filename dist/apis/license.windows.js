"use strict";
// GENERATED SDK for license/windows API
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
 * The name of an option currently enabled on your license
 */
var LicenseOptionLabel;
(function (LicenseOptionLabel) {
    LicenseOptionLabel["ANTISPAM_SPAMASSASSIN"] = "ANTISPAM_SPAMASSASSIN";
    LicenseOptionLabel["ANTIVIRUS_DRWEB"] = "ANTIVIRUS_DRWEB";
    LicenseOptionLabel["ANTIVIRUS_KASPERSKY"] = "ANTIVIRUS_KASPERSKY";
    LicenseOptionLabel["DOMAINS"] = "DOMAINS";
    LicenseOptionLabel["LANGUAGE_PACK"] = "LANGUAGE_PACK";
    LicenseOptionLabel["POWERPACK"] = "POWERPACK";
    LicenseOptionLabel["SQL_SERVER"] = "SQL_SERVER";
    LicenseOptionLabel["VIRTUOZZO_CONTAINERS"] = "VIRTUOZZO_CONTAINERS";
})(LicenseOptionLabel = exports.LicenseOptionLabel || (exports.LicenseOptionLabel = {}));
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
class LicenseWindows {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the LICENSE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows#GET)
     */
    ListAvailableServices() {
        let url = `/license/windows`;
        return this.client.request('GET', url);
    }
    /**
     * Your Windows license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/license/windows/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Your Windows license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/license/windows/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/license/windows/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the license.Option objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/option#GET)
     */
    OptionsAttachedToThisLicense(serviceName) {
        let url = `/license/windows/${serviceName}/option`;
        return this.client.request('GET', url);
    }
    /**
     * Your License options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/option/%7Blabel%7D#GET)
     */
    /*
    GetThisObjectProperties(label: LicenseOptionLabel, serviceName: string): Promise<LicenseOption> {
      let url = `/license/windows/${serviceName}/option/${label}`
  
      return this.client.request<LicenseOption>('GET', url)
    }
    */
    /**
     * Your License options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/option/%7Blabel%7D#DELETE)
     */
    ReleaseThisOption(label, serviceName) {
        let url = `/license/windows/${serviceName}/option/${label}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/license/windows/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/license/windows/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * sqlServer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/sqlServer#POST)
     */
    LinkYourOwnSqlServerLicenseToThisWindowsLicense(licenseId, serviceName, version) {
        let url = `/license/windows/${serviceName}/sqlServer`;
        return this.client.request('POST', url, { licenseId, version });
    }
    /**
     * List the license.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/tasks#GET)
     */
    TasksLinkedToThisLicense(serviceName, action, status) {
        let url = `/license/windows/${serviceName}/tasks?`;
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
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
      let url = `/license/windows/${serviceName}/tasks/${taskId}`
  
      return this.client.request<LicenseTask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/license/windows/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Get the orderable Windows versions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/windows/orderableVersions#GET)
     */
    GetTheOrderableWindowsVersions(ip) {
        let url = `/license/windows/orderableVersions?`;
        const queryParams = new query_params_1.default();
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.LicenseWindows = LicenseWindows;
//# sourceMappingURL=license.windows.js.map