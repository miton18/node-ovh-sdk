"use strict";
// GENERATED SDK for price API
Object.defineProperty(exports, "__esModule", { value: true });
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
 * Enum of AntiDDoSPros
 */
var PriceDedicatedServerAntiDDoSPro;
(function (PriceDedicatedServerAntiDDoSPro) {
    PriceDedicatedServerAntiDDoSPro["SK"] = "sk";
})(PriceDedicatedServerAntiDDoSPro = exports.PriceDedicatedServerAntiDDoSPro || (exports.PriceDedicatedServerAntiDDoSPro = {}));
/*
 * Enum of Firewalls
 */
var PriceDedicatedServerFirewall;
(function (PriceDedicatedServerFirewall) {
    PriceDedicatedServerFirewall["ASA5505"] = "asa5505";
    PriceDedicatedServerFirewall["ASA5510"] = "asa5510";
    PriceDedicatedServerFirewall["ASA5520"] = "asa5520";
})(PriceDedicatedServerFirewall = exports.PriceDedicatedServerFirewall || (exports.PriceDedicatedServerFirewall = {}));
/*
 * Enum of Ips
 */
var PriceDedicatedServerIp;
(function (PriceDedicatedServerIp) {
    PriceDedicatedServerIp["KIMSUFI"] = "kimsufi";
    PriceDedicatedServerIp["PARKING"] = "parking";
})(PriceDedicatedServerIp = exports.PriceDedicatedServerIp || (exports.PriceDedicatedServerIp = {}));
/*
 * Enum of ProfessionalUses
 */
var PriceDedicatedServerProfessionalUse;
(function (PriceDedicatedServerProfessionalUse) {
    PriceDedicatedServerProfessionalUse["BHG"] = "bhg";
    PriceDedicatedServerProfessionalUse["EG"] = "eg";
    PriceDedicatedServerProfessionalUse["HG"] = "hg";
    PriceDedicatedServerProfessionalUse["MG"] = "mg";
    PriceDedicatedServerProfessionalUse["SP"] = "sp";
})(PriceDedicatedServerProfessionalUse = exports.PriceDedicatedServerProfessionalUse || (exports.PriceDedicatedServerProfessionalUse = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2013v1Bhs1aFilerHourly;
(function (PriceDedicatedCloud2013v1Bhs1aFilerHourly) {
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["NFS_13200G_GB"] = "nfs-13200g-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["NFS_3600_GB"] = "nfs-3600-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
})(PriceDedicatedCloud2013v1Bhs1aFilerHourly = exports.PriceDedicatedCloud2013v1Bhs1aFilerHourly || (exports.PriceDedicatedCloud2013v1Bhs1aFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2013v1Bhs1aFilerMonthly;
(function (PriceDedicatedCloud2013v1Bhs1aFilerMonthly) {
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["NFS_3600_GB"] = "nfs-3600-GB";
    PriceDedicatedCloud2013v1Bhs1aFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
})(PriceDedicatedCloud2013v1Bhs1aFilerMonthly = exports.PriceDedicatedCloud2013v1Bhs1aFilerMonthly || (exports.PriceDedicatedCloud2013v1Bhs1aFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2013v1Bhs1aHostHourly;
(function (PriceDedicatedCloud2013v1Bhs1aHostHourly) {
    PriceDedicatedCloud2013v1Bhs1aHostHourly["L"] = "L";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["L_"] = "L+";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["L__"] = "L++";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["L2"] = "L2";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["L2_"] = "L2+";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["M"] = "M";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["S"] = "S";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["S__"] = "S++";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["XL"] = "XL";
    PriceDedicatedCloud2013v1Bhs1aHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2013v1Bhs1aHostHourly = exports.PriceDedicatedCloud2013v1Bhs1aHostHourly || (exports.PriceDedicatedCloud2013v1Bhs1aHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2013v1Bhs1aHostMonthly;
(function (PriceDedicatedCloud2013v1Bhs1aHostMonthly) {
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["L"] = "L";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["L__"] = "L++";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["L2"] = "L2";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["L2_"] = "L2+";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["M"] = "M";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["S"] = "S";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["S__"] = "S++";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2013v1Bhs1aHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2013v1Bhs1aHostMonthly = exports.PriceDedicatedCloud2013v1Bhs1aHostMonthly || (exports.PriceDedicatedCloud2013v1Bhs1aHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2013v1Rbx2aFilerHourly;
(function (PriceDedicatedCloud2013v1Rbx2aFilerHourly) {
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["NFS_13200G_GB"] = "nfs-13200g-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["NFS_3600_GB"] = "nfs-3600-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
})(PriceDedicatedCloud2013v1Rbx2aFilerHourly = exports.PriceDedicatedCloud2013v1Rbx2aFilerHourly || (exports.PriceDedicatedCloud2013v1Rbx2aFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2013v1Rbx2aFilerMonthly;
(function (PriceDedicatedCloud2013v1Rbx2aFilerMonthly) {
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["NFS_3600_GB"] = "nfs-3600-GB";
    PriceDedicatedCloud2013v1Rbx2aFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
})(PriceDedicatedCloud2013v1Rbx2aFilerMonthly = exports.PriceDedicatedCloud2013v1Rbx2aFilerMonthly || (exports.PriceDedicatedCloud2013v1Rbx2aFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2013v1Rbx2aHostHourly;
(function (PriceDedicatedCloud2013v1Rbx2aHostHourly) {
    PriceDedicatedCloud2013v1Rbx2aHostHourly["L"] = "L";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["L_"] = "L+";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["L__"] = "L++";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["L2"] = "L2";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["L2_"] = "L2+";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["M"] = "M";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["S"] = "S";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["S__"] = "S++";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["XL"] = "XL";
    PriceDedicatedCloud2013v1Rbx2aHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2013v1Rbx2aHostHourly = exports.PriceDedicatedCloud2013v1Rbx2aHostHourly || (exports.PriceDedicatedCloud2013v1Rbx2aHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2013v1Rbx2aHostMonthly;
(function (PriceDedicatedCloud2013v1Rbx2aHostMonthly) {
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["L"] = "L";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["L__"] = "L++";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["L2"] = "L2";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["L2_"] = "L2+";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["M"] = "M";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["S"] = "S";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["S__"] = "S++";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2013v1Rbx2aHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2013v1Rbx2aHostMonthly = exports.PriceDedicatedCloud2013v1Rbx2aHostMonthly || (exports.PriceDedicatedCloud2013v1Rbx2aHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2013v1Sbg1aFilerHourly;
(function (PriceDedicatedCloud2013v1Sbg1aFilerHourly) {
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["NFS_13200G_GB"] = "nfs-13200g-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["NFS_3600_GB"] = "nfs-3600-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
})(PriceDedicatedCloud2013v1Sbg1aFilerHourly = exports.PriceDedicatedCloud2013v1Sbg1aFilerHourly || (exports.PriceDedicatedCloud2013v1Sbg1aFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2013v1Sbg1aFilerMonthly;
(function (PriceDedicatedCloud2013v1Sbg1aFilerMonthly) {
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["NFS_3600_GB"] = "nfs-3600-GB";
    PriceDedicatedCloud2013v1Sbg1aFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
})(PriceDedicatedCloud2013v1Sbg1aFilerMonthly = exports.PriceDedicatedCloud2013v1Sbg1aFilerMonthly || (exports.PriceDedicatedCloud2013v1Sbg1aFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2013v1Sbg1aHostHourly;
(function (PriceDedicatedCloud2013v1Sbg1aHostHourly) {
    PriceDedicatedCloud2013v1Sbg1aHostHourly["L"] = "L";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["L_"] = "L+";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["L__"] = "L++";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["L2"] = "L2";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["L2_"] = "L2+";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["M"] = "M";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["S"] = "S";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["S__"] = "S++";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["XL"] = "XL";
    PriceDedicatedCloud2013v1Sbg1aHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2013v1Sbg1aHostHourly = exports.PriceDedicatedCloud2013v1Sbg1aHostHourly || (exports.PriceDedicatedCloud2013v1Sbg1aHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2013v1Sbg1aHostMonthly;
(function (PriceDedicatedCloud2013v1Sbg1aHostMonthly) {
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["L"] = "L";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["L__"] = "L++";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["L2"] = "L2";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["L2_"] = "L2+";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["M"] = "M";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["S"] = "S";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["S__"] = "S++";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2013v1Sbg1aHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2013v1Sbg1aHostMonthly = exports.PriceDedicatedCloud2013v1Sbg1aHostMonthly || (exports.PriceDedicatedCloud2013v1Sbg1aHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly) {
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly = exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly;
(function (PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly) {
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly = exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly || (exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly;
(function (PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly) {
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly = exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly || (exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly;
(function (PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly) {
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly = exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly || (exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly;
(function (PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly) {
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly = exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly || (exports.PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["ISCSI_13200G_GB"] = "iscsi-13200g-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["ISCSI_1200_GB"] = "iscsi-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["ISCSI_13200_GB"] = "iscsi-13200-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["ISCSI_3300_GB"] = "iscsi-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["ISCSI_6600_GB"] = "iscsi-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["ISCSI_800_GB"] = "iscsi-800-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_100_GB"] = "nfs-100-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly["L"] = "L";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly["L_"] = "L+";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly["M"] = "M";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly["XL"] = "XL";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly["L"] = "L";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly["L_"] = "L+";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly["M"] = "M";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly["XL"] = "XL";
    PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly["XL_"] = "XL+";
})(PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly) {
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly = exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly) {
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly = exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly;
(function (PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly) {
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly = exports.PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly || (exports.PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly;
(function (PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly) {
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly["NFS_1200_GB"] = "nfs-1200-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly["NFS_13200_GB"] = "nfs-13200-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly["NFS_1600_GB"] = "nfs-1600-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly["NFS_2400_GB"] = "nfs-2400-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly["NFS_3300_GB"] = "nfs-3300-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly["NFS_6600_GB"] = "nfs-6600-GB";
    PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly["NFS_800_GB"] = "nfs-800-GB";
})(PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly = exports.PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly || (exports.PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly = {}));
/*
 * Enum of Hourlys
 */
var PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly;
(function (PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly) {
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly = exports.PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly || (exports.PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly = {}));
/*
 * Enum of Monthlys
 */
var PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly;
(function (PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly) {
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly["SDDC_128"] = "SDDC-128";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly["SDDC_16"] = "SDDC-16";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly["SDDC_256"] = "SDDC-256";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly["SDDC_512"] = "SDDC-512";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly["SDDC_64"] = "SDDC-64";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly["SDDCVSAN_256"] = "SDDCVSAN-256";
    PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly["SDDCVSAN_512"] = "SDDCVSAN-512";
})(PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly = exports.PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly || (exports.PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly = {}));
/*
 * Enum of Options
 */
var PriceDomainZoneOption;
(function (PriceDomainZoneOption) {
    PriceDomainZoneOption["DNSANYCAST"] = "dnsAnycast";
})(PriceDomainZoneOption = exports.PriceDomainZoneOption || (exports.PriceDomainZoneOption = {}));
/*
 * Enum of Offers
 */
var PriceEmailExchangeOffer;
(function (PriceEmailExchangeOffer) {
    PriceEmailExchangeOffer["HOSTED"] = "hosted";
})(PriceEmailExchangeOffer = exports.PriceEmailExchangeOffer || (exports.PriceEmailExchangeOffer = {}));
/*
 * Enum of PrivateDatabases
 */
var PriceHostingPrivateDatabase;
(function (PriceHostingPrivateDatabase) {
    PriceHostingPrivateDatabase["MYSQL_4_1_1024"] = "mysql_4.1_1024";
    PriceHostingPrivateDatabase["MYSQL_4_1_128"] = "mysql_4.1_128";
    PriceHostingPrivateDatabase["MYSQL_4_1_256"] = "mysql_4.1_256";
    PriceHostingPrivateDatabase["MYSQL_4_1_512"] = "mysql_4.1_512";
    PriceHostingPrivateDatabase["MYSQL_5_0_1024"] = "mysql_5.0_1024";
    PriceHostingPrivateDatabase["MYSQL_5_0_128"] = "mysql_5.0_128";
    PriceHostingPrivateDatabase["MYSQL_5_0_256"] = "mysql_5.0_256";
    PriceHostingPrivateDatabase["MYSQL_5_0_512"] = "mysql_5.0_512";
    PriceHostingPrivateDatabase["MYSQL_5_1_1024"] = "mysql_5.1_1024";
    PriceHostingPrivateDatabase["MYSQL_5_1_128"] = "mysql_5.1_128";
    PriceHostingPrivateDatabase["MYSQL_5_1_256"] = "mysql_5.1_256";
    PriceHostingPrivateDatabase["MYSQL_5_1_512"] = "mysql_5.1_512";
    PriceHostingPrivateDatabase["MYSQL_5_5_1024"] = "mysql_5.5_1024";
    PriceHostingPrivateDatabase["MYSQL_5_5_128"] = "mysql_5.5_128";
    PriceHostingPrivateDatabase["MYSQL_5_5_256"] = "mysql_5.5_256";
    PriceHostingPrivateDatabase["MYSQL_5_5_512"] = "mysql_5.5_512";
})(PriceHostingPrivateDatabase = exports.PriceHostingPrivateDatabase || (exports.PriceHostingPrivateDatabase = {}));
/*
 * Enum of Cdns
 */
var PriceHostingWebCdn;
(function (PriceHostingWebCdn) {
    PriceHostingWebCdn["CDN_BUSINESS"] = "CDN_BUSINESS";
})(PriceHostingWebCdn = exports.PriceHostingWebCdn || (exports.PriceHostingWebCdn = {}));
/*
 * Enum of ExtraSqlPersos
 */
var PriceHostingWebExtraSqlPerso;
(function (PriceHostingWebExtraSqlPerso) {
    PriceHostingWebExtraSqlPerso["SQLPERSO_1_BASES_400_MB"] = "SQLPERSO_1_BASES_400_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_1_BASES_800_MB"] = "SQLPERSO_1_BASES_800_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_20_BASES_100_MB"] = "SQLPERSO_20_BASES_100_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_20_BASES_200_MB"] = "SQLPERSO_20_BASES_200_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_2_BASES_400_MB"] = "SQLPERSO_2_BASES_400_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_2_BASES_800_MB"] = "SQLPERSO_2_BASES_800_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_50_BASES_100_MB"] = "SQLPERSO_50_BASES_100_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_50_BASES_200_MB"] = "SQLPERSO_50_BASES_200_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_5_BASES_100_MB"] = "SQLPERSO_5_BASES_100_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_5_BASES_200_MB"] = "SQLPERSO_5_BASES_200_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_5_BASES_400_MB"] = "SQLPERSO_5_BASES_400_MB";
    PriceHostingWebExtraSqlPerso["SQLPERSO_5_BASES_800_MB"] = "SQLPERSO_5_BASES_800_MB";
})(PriceHostingWebExtraSqlPerso = exports.PriceHostingWebExtraSqlPerso || (exports.PriceHostingWebExtraSqlPerso = {}));
/*
 * Enum of Ssls
 */
var PriceHostingWebSsl;
(function (PriceHostingWebSsl) {
    PriceHostingWebSsl["HOSTEDSSL"] = "HOSTEDSSL";
})(PriceHostingWebSsl = exports.PriceHostingWebSsl || (exports.PriceHostingWebSsl = {}));
/*
 * Enum of Subscriptions
 */
var PriceHpcspotAccountSubscription;
(function (PriceHpcspotAccountSubscription) {
    PriceHpcspotAccountSubscription["HPCSPOT"] = "HPCSPOT";
})(PriceHpcspotAccountSubscription = exports.PriceHpcspotAccountSubscription || (exports.PriceHpcspotAccountSubscription = {}));
/*
 * Enum of Offices
 */
var PriceLicenseOffice;
(function (PriceLicenseOffice) {
    PriceLicenseOffice["OFFICEBUSINESS"] = "officeBusiness";
    PriceLicenseOffice["OFFICEPROPLUS"] = "officeProPlus";
})(PriceLicenseOffice = exports.PriceLicenseOffice || (exports.PriceLicenseOffice = {}));
/*
 * Enum of Offers
 */
var PriceOverTheBoxOffer;
(function (PriceOverTheBoxOffer) {
    PriceOverTheBoxOffer["PLUS_V1"] = "plus.v1";
})(PriceOverTheBoxOffer = exports.PriceOverTheBoxOffer || (exports.PriceOverTheBoxOffer = {}));
/*
 * Enum of Installations
 */
var PricePackXdslInstallation;
(function (PricePackXdslInstallation) {
    PricePackXdslInstallation["ENTERPRISE"] = "enterprise";
    PricePackXdslInstallation["EXPRESS"] = "express";
    PricePackXdslInstallation["EXPRESSLITE"] = "expressLite";
})(PricePackXdslInstallation = exports.PricePackXdslInstallation || (exports.PricePackXdslInstallation = {}));
/*
 * Enum of Offerss
 */
var PricePackXdslOffers;
(function (PricePackXdslOffers) {
    PricePackXdslOffers["ENTERPRISE"] = "enterprise";
    PricePackXdslOffers["EXPRESS"] = "express";
    PricePackXdslOffers["EXPRESSLITE"] = "expressLite";
})(PricePackXdslOffers = exports.PricePackXdslOffers || (exports.PricePackXdslOffers = {}));
/*
 * Enum of Optionss
 */
var PricePackXdslOptions;
(function (PricePackXdslOptions) {
    PricePackXdslOptions["ENTERPRISEGTR"] = "enterpriseGtr";
    PricePackXdslOptions["VDSLFT"] = "vdslFt";
})(PricePackXdslOptions = exports.PricePackXdslOptions || (exports.PricePackXdslOptions = {}));
/*
 * Enum of Licenses
 */
var PriceSaasCsp2License;
(function (PriceSaasCsp2License) {
    PriceSaasCsp2License["AZUREACTIVEDIRECTORYBASIC"] = "AzureActiveDirectoryBasic";
    PriceSaasCsp2License["AZUREACTIVEDIRECTORYPREMIUMP1"] = "AzureActiveDirectoryPremiumP1";
    PriceSaasCsp2License["BUSINESS"] = "Business";
    PriceSaasCsp2License["BUSINESSESSENTIALS"] = "BusinessEssentials";
    PriceSaasCsp2License["BUSINESSPREMIUM"] = "BusinessPremium";
    PriceSaasCsp2License["ENTERPRISEE1"] = "EnterpriseE1";
    PriceSaasCsp2License["ENTERPRISEE3"] = "EnterpriseE3";
    PriceSaasCsp2License["ENTERPRISEK1"] = "EnterpriseK1";
    PriceSaasCsp2License["EXCHANGEONLINEPLAN1"] = "ExchangeOnlinePlan1";
    PriceSaasCsp2License["PROPLUS"] = "ProPlus";
    PriceSaasCsp2License["PROJECTONLINE"] = "ProjectOnline";
    PriceSaasCsp2License["PROJECTONLINEPROFESSIONAL"] = "ProjectOnlineProfessional";
    PriceSaasCsp2License["VISIOPRO"] = "VisioPro";
})(PriceSaasCsp2License = exports.PriceSaasCsp2License || (exports.PriceSaasCsp2License = {}));
/*
 * Enum of Offers
 */
var PriceTelephonyOffer;
(function (PriceTelephonyOffer) {
    PriceTelephonyOffer["DISCOVERY"] = "discovery";
    PriceTelephonyOffer["ENTERPRISE"] = "enterprise";
    PriceTelephonyOffer["ENTERPRISEMOBILE"] = "enterpriseMobile";
    PriceTelephonyOffer["RESELLERENTERPRISE"] = "resellerEnterprise";
    PriceTelephonyOffer["RESELLERENTERPRISEMOBILE"] = "resellerEnterpriseMobile";
})(PriceTelephonyOffer = exports.PriceTelephonyOffer || (exports.PriceTelephonyOffer = {}));
/*
 * Enum of Models
 */
var PriceVps2013v1ClassicModel;
(function (PriceVps2013v1ClassicModel) {
    PriceVps2013v1ClassicModel["MODEL1"] = "model1";
    PriceVps2013v1ClassicModel["MODEL2"] = "model2";
    PriceVps2013v1ClassicModel["MODEL3"] = "model3";
    PriceVps2013v1ClassicModel["MODEL4"] = "model4";
    PriceVps2013v1ClassicModel["MODEL5"] = "model5";
    PriceVps2013v1ClassicModel["MODEL6"] = "model6";
})(PriceVps2013v1ClassicModel = exports.PriceVps2013v1ClassicModel || (exports.PriceVps2013v1ClassicModel = {}));
/*
 * Enum of Models
 */
var PriceVps2013v1CloudModel;
(function (PriceVps2013v1CloudModel) {
    PriceVps2013v1CloudModel["MODEL1"] = "model1";
    PriceVps2013v1CloudModel["MODEL2"] = "model2";
    PriceVps2013v1CloudModel["MODEL3"] = "model3";
    PriceVps2013v1CloudModel["MODEL4"] = "model4";
    PriceVps2013v1CloudModel["MODEL5"] = "model5";
    PriceVps2013v1CloudModel["MODEL6"] = "model6";
})(PriceVps2013v1CloudModel = exports.PriceVps2013v1CloudModel || (exports.PriceVps2013v1CloudModel = {}));
/*
 * Enum of Options
 */
var PriceVps2013v1CloudOption;
(function (PriceVps2013v1CloudOption) {
    PriceVps2013v1CloudOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2013v1CloudOption["IP"] = "ip";
    PriceVps2013v1CloudOption["SNAPSHOT"] = "snapshot";
    PriceVps2013v1CloudOption["VEEAM"] = "veeam";
})(PriceVps2013v1CloudOption = exports.PriceVps2013v1CloudOption || (exports.PriceVps2013v1CloudOption = {}));
/*
 * Enum of Models
 */
var PriceVps2013v1LowlatModel;
(function (PriceVps2013v1LowlatModel) {
    PriceVps2013v1LowlatModel["MODEL1"] = "model1";
    PriceVps2013v1LowlatModel["MODEL2"] = "model2";
    PriceVps2013v1LowlatModel["MODEL3"] = "model3";
})(PriceVps2013v1LowlatModel = exports.PriceVps2013v1LowlatModel || (exports.PriceVps2013v1LowlatModel = {}));
/*
 * Enum of Models
 */
var PriceVps2014v1ClassicModel;
(function (PriceVps2014v1ClassicModel) {
    PriceVps2014v1ClassicModel["MODEL1"] = "model1";
    PriceVps2014v1ClassicModel["MODEL2"] = "model2";
    PriceVps2014v1ClassicModel["MODEL3"] = "model3";
    PriceVps2014v1ClassicModel["MODEL4"] = "model4";
})(PriceVps2014v1ClassicModel = exports.PriceVps2014v1ClassicModel || (exports.PriceVps2014v1ClassicModel = {}));
/*
 * Enum of Models
 */
var PriceVps2014v1CloudModel;
(function (PriceVps2014v1CloudModel) {
    PriceVps2014v1CloudModel["MODEL1"] = "model1";
    PriceVps2014v1CloudModel["MODEL2"] = "model2";
    PriceVps2014v1CloudModel["MODEL3"] = "model3";
    PriceVps2014v1CloudModel["MODEL4"] = "model4";
})(PriceVps2014v1CloudModel = exports.PriceVps2014v1CloudModel || (exports.PriceVps2014v1CloudModel = {}));
/*
 * Enum of Options
 */
var PriceVps2014v1CloudOption;
(function (PriceVps2014v1CloudOption) {
    PriceVps2014v1CloudOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2014v1CloudOption["IP"] = "ip";
    PriceVps2014v1CloudOption["SNAPSHOT"] = "snapshot";
    PriceVps2014v1CloudOption["VEEAM"] = "veeam";
})(PriceVps2014v1CloudOption = exports.PriceVps2014v1CloudOption || (exports.PriceVps2014v1CloudOption = {}));
/*
 * Enum of Models
 */
var PriceVps2015v1CloudModel;
(function (PriceVps2015v1CloudModel) {
    PriceVps2015v1CloudModel["MODEL1"] = "model1";
    PriceVps2015v1CloudModel["MODEL2"] = "model2";
    PriceVps2015v1CloudModel["MODEL3"] = "model3";
})(PriceVps2015v1CloudModel = exports.PriceVps2015v1CloudModel || (exports.PriceVps2015v1CloudModel = {}));
/*
 * Enum of Options
 */
var PriceVps2015v1CloudOption;
(function (PriceVps2015v1CloudOption) {
    PriceVps2015v1CloudOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2015v1CloudOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2015v1CloudOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2015v1CloudOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2015v1CloudOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2015v1CloudOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2015v1CloudOption["IP"] = "ip";
    PriceVps2015v1CloudOption["SNAPSHOT"] = "snapshot";
})(PriceVps2015v1CloudOption = exports.PriceVps2015v1CloudOption || (exports.PriceVps2015v1CloudOption = {}));
/*
 * Enum of Models
 */
var PriceVps2015v1CloudramModel;
(function (PriceVps2015v1CloudramModel) {
    PriceVps2015v1CloudramModel["MODEL1"] = "model1";
    PriceVps2015v1CloudramModel["MODEL2"] = "model2";
    PriceVps2015v1CloudramModel["MODEL3"] = "model3";
})(PriceVps2015v1CloudramModel = exports.PriceVps2015v1CloudramModel || (exports.PriceVps2015v1CloudramModel = {}));
/*
 * Enum of Options
 */
var PriceVps2015v1CloudramOption;
(function (PriceVps2015v1CloudramOption) {
    PriceVps2015v1CloudramOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2015v1CloudramOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2015v1CloudramOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2015v1CloudramOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2015v1CloudramOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2015v1CloudramOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2015v1CloudramOption["IP"] = "ip";
    PriceVps2015v1CloudramOption["SNAPSHOT"] = "snapshot";
})(PriceVps2015v1CloudramOption = exports.PriceVps2015v1CloudramOption || (exports.PriceVps2015v1CloudramOption = {}));
/*
 * Enum of Models
 */
var PriceVps2015v1SsdModel;
(function (PriceVps2015v1SsdModel) {
    PriceVps2015v1SsdModel["MODEL1"] = "model1";
    PriceVps2015v1SsdModel["MODEL2"] = "model2";
    PriceVps2015v1SsdModel["MODEL3"] = "model3";
})(PriceVps2015v1SsdModel = exports.PriceVps2015v1SsdModel || (exports.PriceVps2015v1SsdModel = {}));
/*
 * Enum of Options
 */
var PriceVps2015v1SsdOption;
(function (PriceVps2015v1SsdOption) {
    PriceVps2015v1SsdOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2015v1SsdOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2015v1SsdOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2015v1SsdOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2015v1SsdOption["IP"] = "ip";
    PriceVps2015v1SsdOption["SNAPSHOT"] = "snapshot";
})(PriceVps2015v1SsdOption = exports.PriceVps2015v1SsdOption || (exports.PriceVps2015v1SsdOption = {}));
/*
 * Enum of Models
 */
var PriceVps2017v1SsdModel;
(function (PriceVps2017v1SsdModel) {
    PriceVps2017v1SsdModel["MODEL1"] = "model1";
    PriceVps2017v1SsdModel["MODEL2"] = "model2";
    PriceVps2017v1SsdModel["MODEL3"] = "model3";
    PriceVps2017v1SsdModel["MODEL4"] = "model4";
})(PriceVps2017v1SsdModel = exports.PriceVps2017v1SsdModel || (exports.PriceVps2017v1SsdModel = {}));
/*
 * Enum of Options
 */
var PriceVps2017v1SsdOption;
(function (PriceVps2017v1SsdOption) {
    PriceVps2017v1SsdOption["IP"] = "ip";
})(PriceVps2017v1SsdOption = exports.PriceVps2017v1SsdOption || (exports.PriceVps2017v1SsdOption = {}));
/*
 * Enum of Models
 */
var PriceVps2017v2CloudModel;
(function (PriceVps2017v2CloudModel) {
    PriceVps2017v2CloudModel["MODEL1"] = "model1";
    PriceVps2017v2CloudModel["MODEL2"] = "model2";
    PriceVps2017v2CloudModel["MODEL3"] = "model3";
})(PriceVps2017v2CloudModel = exports.PriceVps2017v2CloudModel || (exports.PriceVps2017v2CloudModel = {}));
/*
 * Enum of Options
 */
var PriceVps2017v2CloudOption;
(function (PriceVps2017v2CloudOption) {
    PriceVps2017v2CloudOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2017v2CloudOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2017v2CloudOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2017v2CloudOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2017v2CloudOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2017v2CloudOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2017v2CloudOption["IP"] = "ip";
    PriceVps2017v2CloudOption["SNAPSHOT"] = "snapshot";
})(PriceVps2017v2CloudOption = exports.PriceVps2017v2CloudOption || (exports.PriceVps2017v2CloudOption = {}));
/*
 * Enum of Models
 */
var PriceVps2017v2CloudramModel;
(function (PriceVps2017v2CloudramModel) {
    PriceVps2017v2CloudramModel["MODEL1"] = "model1";
    PriceVps2017v2CloudramModel["MODEL2"] = "model2";
    PriceVps2017v2CloudramModel["MODEL3"] = "model3";
})(PriceVps2017v2CloudramModel = exports.PriceVps2017v2CloudramModel || (exports.PriceVps2017v2CloudramModel = {}));
/*
 * Enum of Options
 */
var PriceVps2017v2CloudramOption;
(function (PriceVps2017v2CloudramOption) {
    PriceVps2017v2CloudramOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2017v2CloudramOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2017v2CloudramOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2017v2CloudramOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2017v2CloudramOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2017v2CloudramOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2017v2CloudramOption["IP"] = "ip";
    PriceVps2017v2CloudramOption["SNAPSHOT"] = "snapshot";
})(PriceVps2017v2CloudramOption = exports.PriceVps2017v2CloudramOption || (exports.PriceVps2017v2CloudramOption = {}));
/*
 * Enum of Models
 */
var PriceVps2017v2SsdModel;
(function (PriceVps2017v2SsdModel) {
    PriceVps2017v2SsdModel["MODEL1"] = "model1";
    PriceVps2017v2SsdModel["MODEL2"] = "model2";
    PriceVps2017v2SsdModel["MODEL3"] = "model3";
})(PriceVps2017v2SsdModel = exports.PriceVps2017v2SsdModel || (exports.PriceVps2017v2SsdModel = {}));
/*
 * Enum of Options
 */
var PriceVps2017v2SsdOption;
(function (PriceVps2017v2SsdOption) {
    PriceVps2017v2SsdOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2017v2SsdOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2017v2SsdOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2017v2SsdOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2017v2SsdOption["IP"] = "ip";
    PriceVps2017v2SsdOption["SNAPSHOT"] = "snapshot";
})(PriceVps2017v2SsdOption = exports.PriceVps2017v2SsdOption || (exports.PriceVps2017v2SsdOption = {}));
/*
 * Enum of Models
 */
var PriceVps2017v3CloudModel;
(function (PriceVps2017v3CloudModel) {
    PriceVps2017v3CloudModel["MODEL1"] = "model1";
    PriceVps2017v3CloudModel["MODEL2"] = "model2";
    PriceVps2017v3CloudModel["MODEL3"] = "model3";
})(PriceVps2017v3CloudModel = exports.PriceVps2017v3CloudModel || (exports.PriceVps2017v3CloudModel = {}));
/*
 * Enum of Options
 */
var PriceVps2017v3CloudOption;
(function (PriceVps2017v3CloudOption) {
    PriceVps2017v3CloudOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2017v3CloudOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2017v3CloudOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2017v3CloudOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2017v3CloudOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2017v3CloudOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2017v3CloudOption["IP"] = "ip";
    PriceVps2017v3CloudOption["SNAPSHOT"] = "snapshot";
})(PriceVps2017v3CloudOption = exports.PriceVps2017v3CloudOption || (exports.PriceVps2017v3CloudOption = {}));
/*
 * Enum of Models
 */
var PriceVps2017v3CloudramModel;
(function (PriceVps2017v3CloudramModel) {
    PriceVps2017v3CloudramModel["MODEL1"] = "model1";
    PriceVps2017v3CloudramModel["MODEL2"] = "model2";
    PriceVps2017v3CloudramModel["MODEL3"] = "model3";
})(PriceVps2017v3CloudramModel = exports.PriceVps2017v3CloudramModel || (exports.PriceVps2017v3CloudramModel = {}));
/*
 * Enum of Options
 */
var PriceVps2017v3CloudramOption;
(function (PriceVps2017v3CloudramOption) {
    PriceVps2017v3CloudramOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2017v3CloudramOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2017v3CloudramOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2017v3CloudramOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2017v3CloudramOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2017v3CloudramOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2017v3CloudramOption["IP"] = "ip";
    PriceVps2017v3CloudramOption["SNAPSHOT"] = "snapshot";
})(PriceVps2017v3CloudramOption = exports.PriceVps2017v3CloudramOption || (exports.PriceVps2017v3CloudramOption = {}));
/*
 * Enum of Models
 */
var PriceVps2017v3SsdModel;
(function (PriceVps2017v3SsdModel) {
    PriceVps2017v3SsdModel["MODEL1"] = "model1";
    PriceVps2017v3SsdModel["MODEL2"] = "model2";
    PriceVps2017v3SsdModel["MODEL3"] = "model3";
})(PriceVps2017v3SsdModel = exports.PriceVps2017v3SsdModel || (exports.PriceVps2017v3SsdModel = {}));
/*
 * Enum of Options
 */
var PriceVps2017v3SsdOption;
(function (PriceVps2017v3SsdOption) {
    PriceVps2017v3SsdOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2017v3SsdOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2017v3SsdOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2017v3SsdOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2017v3SsdOption["IP"] = "ip";
    PriceVps2017v3SsdOption["SNAPSHOT"] = "snapshot";
})(PriceVps2017v3SsdOption = exports.PriceVps2017v3SsdOption || (exports.PriceVps2017v3SsdOption = {}));
/*
 * Enum of Models
 */
var PriceVps2018v1CloudModel;
(function (PriceVps2018v1CloudModel) {
    PriceVps2018v1CloudModel["MODEL1"] = "model1";
    PriceVps2018v1CloudModel["MODEL2"] = "model2";
    PriceVps2018v1CloudModel["MODEL3"] = "model3";
})(PriceVps2018v1CloudModel = exports.PriceVps2018v1CloudModel || (exports.PriceVps2018v1CloudModel = {}));
/*
 * Enum of Options
 */
var PriceVps2018v1CloudOption;
(function (PriceVps2018v1CloudOption) {
    PriceVps2018v1CloudOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2018v1CloudOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2018v1CloudOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2018v1CloudOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2018v1CloudOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2018v1CloudOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2018v1CloudOption["IP"] = "ip";
    PriceVps2018v1CloudOption["SNAPSHOT"] = "snapshot";
})(PriceVps2018v1CloudOption = exports.PriceVps2018v1CloudOption || (exports.PriceVps2018v1CloudOption = {}));
/*
 * Enum of Models
 */
var PriceVps2018v1CloudramModel;
(function (PriceVps2018v1CloudramModel) {
    PriceVps2018v1CloudramModel["MODEL1"] = "model1";
    PriceVps2018v1CloudramModel["MODEL2"] = "model2";
    PriceVps2018v1CloudramModel["MODEL3"] = "model3";
})(PriceVps2018v1CloudramModel = exports.PriceVps2018v1CloudramModel || (exports.PriceVps2018v1CloudramModel = {}));
/*
 * Enum of Options
 */
var PriceVps2018v1CloudramOption;
(function (PriceVps2018v1CloudramOption) {
    PriceVps2018v1CloudramOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2018v1CloudramOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2018v1CloudramOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2018v1CloudramOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2018v1CloudramOption["AUTOMATEDBACKUP"] = "automatedBackup";
    PriceVps2018v1CloudramOption["FTPBACKUP"] = "ftpbackup";
    PriceVps2018v1CloudramOption["IP"] = "ip";
    PriceVps2018v1CloudramOption["SNAPSHOT"] = "snapshot";
})(PriceVps2018v1CloudramOption = exports.PriceVps2018v1CloudramOption || (exports.PriceVps2018v1CloudramOption = {}));
/*
 * Enum of Models
 */
var PriceVps2018v1SsdModel;
(function (PriceVps2018v1SsdModel) {
    PriceVps2018v1SsdModel["MODEL1"] = "model1";
    PriceVps2018v1SsdModel["MODEL2"] = "model2";
    PriceVps2018v1SsdModel["MODEL3"] = "model3";
})(PriceVps2018v1SsdModel = exports.PriceVps2018v1SsdModel || (exports.PriceVps2018v1SsdModel = {}));
/*
 * Enum of Options
 */
var PriceVps2018v1SsdOption;
(function (PriceVps2018v1SsdOption) {
    PriceVps2018v1SsdOption["ADDITIONALDISK100"] = "additionalDisk100";
    PriceVps2018v1SsdOption["ADDITIONALDISK200"] = "additionalDisk200";
    PriceVps2018v1SsdOption["ADDITIONALDISK50"] = "additionalDisk50";
    PriceVps2018v1SsdOption["ADDITIONALDISK500"] = "additionalDisk500";
    PriceVps2018v1SsdOption["IP"] = "ip";
    PriceVps2018v1SsdOption["SNAPSHOT"] = "snapshot";
})(PriceVps2018v1SsdOption = exports.PriceVps2018v1SsdOption || (exports.PriceVps2018v1SsdOption = {}));
/*
 * Enum of Models
 */
var PriceVps2018v2SsdModel;
(function (PriceVps2018v2SsdModel) {
    PriceVps2018v2SsdModel["MODEL1"] = "model1";
    PriceVps2018v2SsdModel["MODEL2"] = "model2";
    PriceVps2018v2SsdModel["MODEL3"] = "model3";
    PriceVps2018v2SsdModel["MODEL4"] = "model4";
})(PriceVps2018v2SsdModel = exports.PriceVps2018v2SsdModel || (exports.PriceVps2018v2SsdModel = {}));
/*
 * Enum of Options
 */
var PriceVps2018v2SsdOption;
(function (PriceVps2018v2SsdOption) {
    PriceVps2018v2SsdOption["IP"] = "ip";
})(PriceVps2018v2SsdOption = exports.PriceVps2018v2SsdOption || (exports.PriceVps2018v2SsdOption = {}));
/*
 * Enum of Models
 */
var PriceVpsClassicModel;
(function (PriceVpsClassicModel) {
    PriceVpsClassicModel["MODEL1"] = "model1";
    PriceVpsClassicModel["MODEL2"] = "model2";
    PriceVpsClassicModel["MODEL3"] = "model3";
    PriceVpsClassicModel["MODEL4"] = "model4";
    PriceVpsClassicModel["MODEL5"] = "model5";
    PriceVpsClassicModel["MODEL6"] = "model6";
})(PriceVpsClassicModel = exports.PriceVpsClassicModel || (exports.PriceVpsClassicModel = {}));
/*
 * Enum of Models
 */
var PriceVpsCloudModel;
(function (PriceVpsCloudModel) {
    PriceVpsCloudModel["MODEL1"] = "model1";
    PriceVpsCloudModel["MODEL2"] = "model2";
    PriceVpsCloudModel["MODEL3"] = "model3";
    PriceVpsCloudModel["MODEL4"] = "model4";
    PriceVpsCloudModel["MODEL5"] = "model5";
    PriceVpsCloudModel["MODEL6"] = "model6";
})(PriceVpsCloudModel = exports.PriceVpsCloudModel || (exports.PriceVpsCloudModel = {}));
/*
 * Enum of Options
 */
var PriceVpsCloudOption;
(function (PriceVpsCloudOption) {
    PriceVpsCloudOption["FTPBACKUP"] = "ftpbackup";
    PriceVpsCloudOption["IP"] = "ip";
    PriceVpsCloudOption["SNAPSHOT"] = "snapshot";
    PriceVpsCloudOption["VEEAM"] = "veeam";
})(PriceVpsCloudOption = exports.PriceVpsCloudOption || (exports.PriceVpsCloudOption = {}));
/*
 * Enum of Models
 */
var PriceVpsLowlatModel;
(function (PriceVpsLowlatModel) {
    PriceVpsLowlatModel["MODEL1"] = "model1";
    PriceVpsLowlatModel["MODEL2"] = "model2";
    PriceVpsLowlatModel["MODEL3"] = "model3";
})(PriceVpsLowlatModel = exports.PriceVpsLowlatModel || (exports.PriceVpsLowlatModel = {}));
/*
 * Enum of Fees
 */
var PriceXdslAddressMoveFee;
(function (PriceXdslAddressMoveFee) {
    PriceXdslAddressMoveFee["KEEPPORTABILITY"] = "keepPortability";
})(PriceXdslAddressMoveFee = exports.PriceXdslAddressMoveFee || (exports.PriceXdslAddressMoveFee = {}));
/*
 * Enum of Installations
 */
var PriceXdslInstallation;
(function (PriceXdslInstallation) {
    PriceXdslInstallation["BACKUP"] = "backup";
})(PriceXdslInstallation = exports.PriceXdslInstallation || (exports.PriceXdslInstallation = {}));
/*
 * Enum of Offerss
 */
var PriceXdslOffers;
(function (PriceXdslOffers) {
    PriceXdslOffers["BACKUP"] = "backup";
})(PriceXdslOffers = exports.PriceXdslOffers || (exports.PriceXdslOffers = {}));
/*
 * Enum of Installations
 */
var PriceXdslOptionsInstallation;
(function (PriceXdslOptionsInstallation) {
    PriceXdslOptionsInstallation["IPV4"] = "ipv4";
})(PriceXdslOptionsInstallation = exports.PriceXdslOptionsInstallation || (exports.PriceXdslOptionsInstallation = {}));
/*
 * Enum of Lines
 */
var PriceXdslOptionsLine;
(function (PriceXdslOptionsLine) {
    PriceXdslOptionsLine["CREATION"] = "creation";
    PriceXdslOptionsLine["PARTIALTOTOTAL"] = "partialToTotal";
})(PriceXdslOptionsLine = exports.PriceXdslOptionsLine || (exports.PriceXdslOptionsLine = {}));
class Price {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the price of Nas HA offers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/nasha/model/%7BmodelName%7D#GET)
     */
    GetThePriceOfNasHAOffers(modelName) {
        let url = `/price/dedicated/nasha/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of anti-DDos Pro option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/antiDDoSPro/%7BcommercialRange%7D#GET)
     */
    GetPriceOfAntiDDosProOption(commercialRange) {
        let url = `/price/dedicated/server/antiDDoSPro/${commercialRange}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of backup storage offer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/backupStorage/%7Bcapacity%7D#GET)
     */
    GetPriceOfBackupStorageOffer(capacity) {
        let url = `/price/dedicated/server/backupStorage/${capacity}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of available firewall models [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/firewall/%7BfirewallModel%7D#GET)
     */
    GetPriceOfAvailableFirewallModels(firewallModel) {
        let url = `/price/dedicated/server/firewall/${firewallModel}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of IPs [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicated/server/ip/%7BroutedTo%7D#GET)
     */
    GetPriceOfIPs(routedTo) {
        let url = `/price/dedicated/server/ip/${routedTo}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/%7BfilerProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile) {
        let url = `/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/${filerProfile}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/%7BfilerProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile) {
        let url = `/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/${filerProfile}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/host/hourly/%7BhostProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile) {
        let url = `/price/dedicatedCloud/2013v1/bhs1a/host/hourly/${hostProfile}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/bhs1a/host/monthly/%7BhostProfile%7D#GET)
     */
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile) {
        let url = `/price/dedicatedCloud/2013v1/bhs1a/host/monthly/${hostProfile}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2013v1Rbx2aFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2013v1Rbx2aFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2013v1Rbx2aHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/rbx2a/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/rbx2a/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2013v1Rbx2aHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/rbx2a/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2013v1Sbg1aFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2013v1Sbg1aFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2013v1Sbg1aHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/sbg1a/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2013v1/sbg1a/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2013v1Sbg1aHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2013v1/sbg1a/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly filer ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/%7BfilerProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyFilerRessources(filerProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/${filerProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud hourly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudHourlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of dedicated Cloud monthly host ressources [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/%7BhostProfile%7D#GET)
     */
    /*
    GetPriceOfDedicatedCloudMonthlyHostRessources(hostProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthly): Promise<OrderPrice> {
      let url = `/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/${hostProfile}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of zone options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/domain/zone/option/%7BoptionName%7D#GET)
     */
    GetPriceOfZoneOptions(optionName) {
        let url = `/price/domain/zone/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price for a private database [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/privateDatabase/%7BprivateDatabaseName%7D#GET)
     */
    GetThePriceForAPrivateDatabase(privateDatabaseName) {
        let url = `/price/hosting/privateDatabase/${privateDatabaseName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price for cdn option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/web/cdn/%7BcdnName%7D#GET)
     */
    GetThePriceForCdnOption(cdnName) {
        let url = `/price/hosting/web/cdn/${cdnName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price for extra sql perso option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/web/extraSqlPerso/%7BextraSqlPersoName%7D#GET)
     */
    GetThePriceForExtraSqlPersoOption(extraSqlPersoName) {
        let url = `/price/hosting/web/extraSqlPerso/${extraSqlPersoName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price for hosted ssl option [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hosting/web/ssl/%7BsslName%7D#GET)
     */
    GetThePriceForHostedSslOption(sslName) {
        let url = `/price/hosting/web/ssl/${sslName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of a HPC Spot Account for 1 month [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/account/subscription/%7BsubscriptionName%7D#GET)
     */
    GetThePriceOfAHPCSpotAccountFor1Month(subscriptionName) {
        let url = `/price/hpcspot/account/subscription/${subscriptionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of a JOB consumption for 1 hour [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/consumption/job/%7Breference%7D#GET)
     */
    GetThePriceOfAJOBConsumptionFor1Hour(reference) {
        let url = `/price/hpcspot/consumption/job/${reference}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of a RESERVATION consumption for 1 hour [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/consumption/reservation/%7Breference%7D#GET)
     */
    GetThePriceOfARESERVATIONConsumptionFor1Hour(reference) {
        let url = `/price/hpcspot/consumption/reservation/${reference}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of a SESSION consumption for 1 hour [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/hpcspot/consumption/session/%7Breference%7D#GET)
     */
    GetThePriceOfASESSIONConsumptionFor1Hour(reference) {
        let url = `/price/hpcspot/consumption/session/${reference}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the monthly price for an office license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/license/office/%7BofficeName%7D#GET)
     */
    GetTheMonthlyPriceForAnOfficeLicense(officeName) {
        let url = `/price/license/office/${officeName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of overTheBox offers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/overTheBox/offer/%7BofferName%7D#GET)
     */
    GetThePriceOfOverTheBoxOffers(offerName) {
        let url = `/price/overTheBox/offer/${offerName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the monthly price for an Office 365 license [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/saas/csp2/license/%7BlicenseName%7D#GET)
     */
    GetTheMonthlyPriceForAnOffice365License(licenseName) {
        let url = `/price/saas/csp2/license/${licenseName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/classic/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2013(modelName) {
        let url = `/price/vps/2013v1/classic/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Classic 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSClassic2013(modelName) {
        let url = `/price/vps/2013v1/cloud/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud Options 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions2013(optionName) {
        let url = `/price/vps/2013v1/cloud/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Low Latency 2013 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2013v1/lowlat/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSLowLatency2013(modelName) {
        let url = `/price/vps/2013v1/lowlat/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Classic 2014 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2014v1/classic/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSClassic2014(modelName) {
        let url = `/price/vps/2014v1/classic/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud 2014 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2014v1/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2014(modelName) {
        let url = `/price/vps/2014v1/cloud/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud Options 2014 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2014v1/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions2014(optionName) {
        let url = `/price/vps/2014v1/cloud/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud 2015 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2015(modelName) {
        let url = `/price/vps/2015v1/cloud/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions20152016(optionName) {
        let url = `/price/vps/2015v1/cloud/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud RAM 2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloudram/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloudRAM2016(modelName) {
        let url = `/price/vps/2015v1/cloudram/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/cloudram/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudRAMOptions20152016(optionName) {
        let url = `/price/vps/2015v1/cloudram/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS SSD 2015 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSD2015(modelName) {
        let url = `/price/vps/2015v1/ssd/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2015v1/ssd/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSSSDOptions20152016(optionName) {
        let url = `/price/vps/2015v1/ssd/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS SSD Discovery 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v1/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSDDiscovery2017(modelName) {
        let url = `/price/vps/2017v1/ssd/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS SSD Discovery Options 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v1/ssd/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSSSDDiscoveryOptions2017(optionName) {
        let url = `/price/vps/2017v1/ssd/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud2017(modelName) {
        let url = `/price/vps/2017v2/cloud/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloud/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudOptions20152016(optionName: PriceVps2017v2CloudOption): Promise<OrderPrice> {
      let url = `/price/vps/2017v2/cloud/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud RAM 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloudram/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloudRAM2017(modelName) {
        let url = `/price/vps/2017v2/cloudram/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/cloudram/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudRAMOptions20152016(optionName: PriceVps2017v2CloudramOption): Promise<OrderPrice> {
      let url = `/price/vps/2017v2/cloudram/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS SSD 2017 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSD2017(modelName) {
        let url = `/price/vps/2017v2/ssd/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v2/ssd/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSSSDOptions20152016(optionName: PriceVps2017v2SsdOption): Promise<OrderPrice> {
      let url = `/price/vps/2017v2/ssd/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloud/model/%7BmodelName%7D#GET)
     */
    /*
    GetPriceOfVPSCloud2017(modelName: PriceVps2017v3CloudModel): Promise<OrderPrice> {
      let url = `/price/vps/2017v3/cloud/model/${modelName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloud/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudOptions20152016(optionName: PriceVps2017v3CloudOption): Promise<OrderPrice> {
      let url = `/price/vps/2017v3/cloud/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud RAM 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloudram/model/%7BmodelName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudRAM2017(modelName: PriceVps2017v3CloudramModel): Promise<OrderPrice> {
      let url = `/price/vps/2017v3/cloudram/model/${modelName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/cloudram/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudRAMOptions20152016(optionName: PriceVps2017v3CloudramOption): Promise<OrderPrice> {
      let url = `/price/vps/2017v3/cloudram/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS SSD 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/ssd/model/%7BmodelName%7D#GET)
     */
    /*
    GetPriceOfVPSSSD2017(modelName: PriceVps2017v3SsdModel): Promise<OrderPrice> {
      let url = `/price/vps/2017v3/ssd/model/${modelName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2017v3/ssd/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSSSDOptions20152016(optionName: PriceVps2017v3SsdOption): Promise<OrderPrice> {
      let url = `/price/vps/2017v3/ssd/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloud/model/%7BmodelName%7D#GET)
     */
    /*
    GetPriceOfVPSCloud2017(modelName: PriceVps2018v1CloudModel): Promise<OrderPrice> {
      let url = `/price/vps/2018v1/cloud/model/${modelName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloud/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudOptions20152016(optionName: PriceVps2018v1CloudOption): Promise<OrderPrice> {
      let url = `/price/vps/2018v1/cloud/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud RAM 2017 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloudram/model/%7BmodelName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudRAM2017(modelName: PriceVps2018v1CloudramModel): Promise<OrderPrice> {
      let url = `/price/vps/2018v1/cloudram/model/${modelName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS Cloud RAM Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/cloudram/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSCloudRAMOptions20152016(optionName: PriceVps2018v1CloudramOption): Promise<OrderPrice> {
      let url = `/price/vps/2018v1/cloudram/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS SSD 2018 [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSD2018(modelName) {
        let url = `/price/vps/2018v1/ssd/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS SSD Options 2015/2016 [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v1/ssd/option/%7BoptionName%7D#GET)
     */
    /*
    GetPriceOfVPSSSDOptions20152016(optionName: PriceVps2018v1SsdOption): Promise<OrderPrice> {
      let url = `/price/vps/2018v1/ssd/option/${optionName}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get price of VPS SSD APAC [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v2/ssd/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSSSDAPAC(modelName) {
        let url = `/price/vps/2018v2/ssd/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS SSD APAC Options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/2018v2/ssd/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSSSDAPACOptions(optionName) {
        let url = `/price/vps/2018v2/ssd/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Classic [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/classic/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSClassic(modelName) {
        let url = `/price/vps/classic/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/cloud/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSCloud(modelName) {
        let url = `/price/vps/cloud/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Cloud Options [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/cloud/option/%7BoptionName%7D#GET)
     */
    GetPriceOfVPSCloudOptions(optionName) {
        let url = `/price/vps/cloud/option/${optionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get price of VPS Low Latency [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/vps/lowlat/model/%7BmodelName%7D#GET)
     */
    GetPriceOfVPSLowLatency(modelName) {
        let url = `/price/vps/lowlat/model/${modelName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of address move option fee [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/addressMove/fee/%7Boption%7D#GET)
     */
    GetThePriceOfAddressMoveOptionFee(option) {
        let url = `/price/xdsl/addressMove/fee/${option}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of options installation fee [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/installation/%7Boffer%7D#GET)
     */
    GetThePriceOfOptionsInstallationFee(offer) {
        let url = `/price/xdsl/installation/${offer}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of xdsl offers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/offers/%7BoffersName%7D#GET)
     */
    GetThePriceOfXdslOffers(offersName) {
        let url = `/price/xdsl/offers/${offersName}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of options installation fee [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/options/installation/%7Boption%7D#GET)
     */
    /*
    GetThePriceOfOptionsInstallationFee(option: PriceXdslOptionsInstallation): Promise<OrderPrice> {
      let url = `/price/xdsl/options/installation/${option}`
  
      return this.client.request<OrderPrice>('GET', url)
    }
    */
    /**
     * Get the price of IPv4 options [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/options/ipv4/%7BipRange%7D#GET)
     */
    GetThePriceOfIPv4Options(ipRange) {
        let url = `/price/xdsl/options/ipv4/${ipRange}`;
        return this.client.request('GET', url);
    }
    /**
     * Get the price of line action [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/price/xdsl/options/line/%7BlineAction%7D#GET)
     */
    GetThePriceOfLineAction(lineAction) {
        let url = `/price/xdsl/options/line/${lineAction}`;
        return this.client.request('GET', url);
    }
}
exports.Price = Price;
//# sourceMappingURL=price.js.map