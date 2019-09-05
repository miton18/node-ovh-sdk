"use strict";
// GENERATED SDK for cloudDB API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Dump status
 */
var CloudDBdumpStatus;
(function (CloudDBdumpStatus) {
    CloudDBdumpStatus["CREATED"] = "created";
    CloudDBdumpStatus["CREATING"] = "creating";
    CloudDBdumpStatus["DELETING"] = "deleting";
})(CloudDBdumpStatus = exports.CloudDBdumpStatus || (exports.CloudDBdumpStatus = {}));
/*
 * Backup status
 */
var CloudDBenterpriseBackupStatus;
(function (CloudDBenterpriseBackupStatus) {
    CloudDBenterpriseBackupStatus["ARCHIVED"] = "archived";
    CloudDBenterpriseBackupStatus["ARCHIVING"] = "archiving";
    CloudDBenterpriseBackupStatus["CREATED"] = "created";
    CloudDBenterpriseBackupStatus["CREATING"] = "creating";
    CloudDBenterpriseBackupStatus["DELETING"] = "deleting";
})(CloudDBenterpriseBackupStatus = exports.CloudDBenterpriseBackupStatus || (exports.CloudDBenterpriseBackupStatus = {}));
/*
 * Cluster status
 */
var CloudDBenterpriseClusterStatus;
(function (CloudDBenterpriseClusterStatus) {
    CloudDBenterpriseClusterStatus["CREATED"] = "created";
    CloudDBenterpriseClusterStatus["CREATING"] = "creating";
    CloudDBenterpriseClusterStatus["DELETING"] = "deleting";
    CloudDBenterpriseClusterStatus["REOPENING"] = "reopening";
    CloudDBenterpriseClusterStatus["RESTARTING"] = "restarting";
    CloudDBenterpriseClusterStatus["SCALING"] = "scaling";
    CloudDBenterpriseClusterStatus["SUSPENDED"] = "suspended";
    CloudDBenterpriseClusterStatus["SUSPENDING"] = "suspending";
    CloudDBenterpriseClusterStatus["UPDATING"] = "updating";
})(CloudDBenterpriseClusterStatus = exports.CloudDBenterpriseClusterStatus || (exports.CloudDBenterpriseClusterStatus = {}));
/*
 * Endpoint status
 */
var CloudDBenterpriseEndpointStatus;
(function (CloudDBenterpriseEndpointStatus) {
    CloudDBenterpriseEndpointStatus["CREATED"] = "created";
    CloudDBenterpriseEndpointStatus["CREATING"] = "creating";
    CloudDBenterpriseEndpointStatus["DELETING"] = "deleting";
    CloudDBenterpriseEndpointStatus["DISABLED"] = "disabled";
    CloudDBenterpriseEndpointStatus["DISABLING"] = "disabling";
    CloudDBenterpriseEndpointStatus["ENABLED"] = "enabled";
    CloudDBenterpriseEndpointStatus["ENABLING"] = "enabling";
})(CloudDBenterpriseEndpointStatus = exports.CloudDBenterpriseEndpointStatus || (exports.CloudDBenterpriseEndpointStatus = {}));
/*
 * Host status
 */
var CloudDBenterpriseHostStatus;
(function (CloudDBenterpriseHostStatus) {
    CloudDBenterpriseHostStatus["CONFIGURED"] = "configured";
    CloudDBenterpriseHostStatus["CREATED"] = "created";
    CloudDBenterpriseHostStatus["CREATING"] = "creating";
    CloudDBenterpriseHostStatus["DELETING"] = "deleting";
    CloudDBenterpriseHostStatus["REBOOTED"] = "rebooted";
    CloudDBenterpriseHostStatus["REBOOTING"] = "rebooting";
    CloudDBenterpriseHostStatus["REINSTALLING"] = "reinstalling";
    CloudDBenterpriseHostStatus["REOPENING"] = "reopening";
    CloudDBenterpriseHostStatus["SUSPENDED"] = "suspended";
    CloudDBenterpriseHostStatus["SUSPENDING"] = "suspending";
})(CloudDBenterpriseHostStatus = exports.CloudDBenterpriseHostStatus || (exports.CloudDBenterpriseHostStatus = {}));
/*
 * LdpMember status
 */
var CloudDBenterpriseLdpMemberStatus;
(function (CloudDBenterpriseLdpMemberStatus) {
    CloudDBenterpriseLdpMemberStatus["CREATED"] = "created";
    CloudDBenterpriseLdpMemberStatus["CREATING"] = "creating";
    CloudDBenterpriseLdpMemberStatus["DELETING"] = "deleting";
    CloudDBenterpriseLdpMemberStatus["UPDATED"] = "updated";
    CloudDBenterpriseLdpMemberStatus["UPDATING"] = "updating";
})(CloudDBenterpriseLdpMemberStatus = exports.CloudDBenterpriseLdpMemberStatus || (exports.CloudDBenterpriseLdpMemberStatus = {}));
/*
 * Maintenance status
 */
var CloudDBenterpriseMaintenanceStatus;
(function (CloudDBenterpriseMaintenanceStatus) {
    CloudDBenterpriseMaintenanceStatus["CANCELLED"] = "cancelled";
    CloudDBenterpriseMaintenanceStatus["DONE"] = "done";
    CloudDBenterpriseMaintenanceStatus["RUNNING"] = "running";
    CloudDBenterpriseMaintenanceStatus["SCHEDULED"] = "scheduled";
})(CloudDBenterpriseMaintenanceStatus = exports.CloudDBenterpriseMaintenanceStatus || (exports.CloudDBenterpriseMaintenanceStatus = {}));
/*
 * Maintenance window status
 */
var CloudDBenterpriseMaintenanceWindowStatus;
(function (CloudDBenterpriseMaintenanceWindowStatus) {
    CloudDBenterpriseMaintenanceWindowStatus["CREATED"] = "created";
    CloudDBenterpriseMaintenanceWindowStatus["CREATING"] = "creating";
    CloudDBenterpriseMaintenanceWindowStatus["DELETING"] = "deleting";
})(CloudDBenterpriseMaintenanceWindowStatus = exports.CloudDBenterpriseMaintenanceWindowStatus || (exports.CloudDBenterpriseMaintenanceWindowStatus = {}));
/*
 * Offer status
 */
var CloudDBenterpriseOfferStatus;
(function (CloudDBenterpriseOfferStatus) {
    CloudDBenterpriseOfferStatus["AVAILABLE"] = "available";
    CloudDBenterpriseOfferStatus["PLANNED"] = "planned";
    CloudDBenterpriseOfferStatus["TESTING"] = "testing";
    CloudDBenterpriseOfferStatus["UNAVAILABLE"] = "unavailable";
})(CloudDBenterpriseOfferStatus = exports.CloudDBenterpriseOfferStatus || (exports.CloudDBenterpriseOfferStatus = {}));
/*
 * Offer type
 */
var CloudDBenterpriseOfferType;
(function (CloudDBenterpriseOfferType) {
    CloudDBenterpriseOfferType["POSTGRESQL"] = "postgresql";
})(CloudDBenterpriseOfferType = exports.CloudDBenterpriseOfferType || (exports.CloudDBenterpriseOfferType = {}));
/*
 * Region status
 */
var CloudDBenterpriseRegionStatus;
(function (CloudDBenterpriseRegionStatus) {
    CloudDBenterpriseRegionStatus["CREATED"] = "created";
})(CloudDBenterpriseRegionStatus = exports.CloudDBenterpriseRegionStatus || (exports.CloudDBenterpriseRegionStatus = {}));
/*
 * Restore status
 */
var CloudDBenterpriseRestoreStatus;
(function (CloudDBenterpriseRestoreStatus) {
    CloudDBenterpriseRestoreStatus["CREATED"] = "created";
    CloudDBenterpriseRestoreStatus["CREATING"] = "creating";
    CloudDBenterpriseRestoreStatus["DELETING"] = "deleting";
})(CloudDBenterpriseRestoreStatus = exports.CloudDBenterpriseRestoreStatus || (exports.CloudDBenterpriseRestoreStatus = {}));
/*
 * User status
 */
var CloudDBenterpriseRestoreUserStatus;
(function (CloudDBenterpriseRestoreUserStatus) {
    CloudDBenterpriseRestoreUserStatus["CREATED"] = "created";
    CloudDBenterpriseRestoreUserStatus["CREATING"] = "creating";
    CloudDBenterpriseRestoreUserStatus["DELETING"] = "deleting";
    CloudDBenterpriseRestoreUserStatus["UPDATED"] = "updated";
    CloudDBenterpriseRestoreUserStatus["UPDATING"] = "updating";
})(CloudDBenterpriseRestoreUserStatus = exports.CloudDBenterpriseRestoreUserStatus || (exports.CloudDBenterpriseRestoreUserStatus = {}));
/*
 * Security group status
 */
var CloudDBenterpriseSecurityGroupStatus;
(function (CloudDBenterpriseSecurityGroupStatus) {
    CloudDBenterpriseSecurityGroupStatus["CREATED"] = "created";
    CloudDBenterpriseSecurityGroupStatus["CREATING"] = "creating";
    CloudDBenterpriseSecurityGroupStatus["DELETING"] = "deleting";
    CloudDBenterpriseSecurityGroupStatus["UPDATED"] = "updated";
    CloudDBenterpriseSecurityGroupStatus["UPDATING"] = "updating";
})(CloudDBenterpriseSecurityGroupStatus = exports.CloudDBenterpriseSecurityGroupStatus || (exports.CloudDBenterpriseSecurityGroupStatus = {}));
/*
 * Security group rule status
 */
var CloudDBenterpriseSecurityGroupRuleStatus;
(function (CloudDBenterpriseSecurityGroupRuleStatus) {
    CloudDBenterpriseSecurityGroupRuleStatus["CREATED"] = "created";
    CloudDBenterpriseSecurityGroupRuleStatus["CREATING"] = "creating";
    CloudDBenterpriseSecurityGroupRuleStatus["DELETING"] = "deleting";
    CloudDBenterpriseSecurityGroupRuleStatus["UPDATED"] = "updated";
    CloudDBenterpriseSecurityGroupRuleStatus["UPDATING"] = "updating";
})(CloudDBenterpriseSecurityGroupRuleStatus = exports.CloudDBenterpriseSecurityGroupRuleStatus || (exports.CloudDBenterpriseSecurityGroupRuleStatus = {}));
/*
 * User status
 */
var CloudDBenterpriseUserStatus;
(function (CloudDBenterpriseUserStatus) {
    CloudDBenterpriseUserStatus["CREATED"] = "created";
    CloudDBenterpriseUserStatus["CREATING"] = "creating";
    CloudDBenterpriseUserStatus["DELETING"] = "deleting";
    CloudDBenterpriseUserStatus["UPDATED"] = "updated";
    CloudDBenterpriseUserStatus["UPDATING"] = "updating";
})(CloudDBenterpriseUserStatus = exports.CloudDBenterpriseUserStatus || (exports.CloudDBenterpriseUserStatus = {}));
/*
 * Instance type accessible
 */
var CloudDBinstanceType;
(function (CloudDBinstanceType) {
    CloudDBinstanceType["STANDARD"] = "standard";
})(CloudDBinstanceType = exports.CloudDBinstanceType || (exports.CloudDBinstanceType = {}));
/*
 * CloudDB project status
 */
var CloudDBprojectStatus;
(function (CloudDBprojectStatus) {
    CloudDBprojectStatus["CREATED"] = "created";
    CloudDBprojectStatus["CREATING"] = "creating";
    CloudDBprojectStatus["DELETING"] = "deleting";
    CloudDBprojectStatus["REOPENING"] = "reopening";
    CloudDBprojectStatus["SUSPENDED"] = "suspended";
    CloudDBprojectStatus["SUSPENDING"] = "suspending";
})(CloudDBprojectStatus = exports.CloudDBprojectStatus || (exports.CloudDBprojectStatus = {}));
/*
 * Configuration detail type
 */
var CloudDBstandardconfigurationdetailType;
(function (CloudDBstandardconfigurationdetailType) {
    CloudDBstandardconfigurationdetailType["BOOLEAN"] = "boolean";
    CloudDBstandardconfigurationdetailType["NUMBER"] = "number";
    CloudDBstandardconfigurationdetailType["STRING"] = "string";
})(CloudDBstandardconfigurationdetailType = exports.CloudDBstandardconfigurationdetailType || (exports.CloudDBstandardconfigurationdetailType = {}));
/*
 * Configuration status
 */
var CloudDBstandardconfigurationStatus;
(function (CloudDBstandardconfigurationStatus) {
    CloudDBstandardconfigurationStatus["APPLIED"] = "applied";
    CloudDBstandardconfigurationStatus["UPDATING"] = "updating";
})(CloudDBstandardconfigurationStatus = exports.CloudDBstandardconfigurationStatus || (exports.CloudDBstandardconfigurationStatus = {}));
/*
 * Extension status
 */
var CloudDBstandarddatabaseextensionStatus;
(function (CloudDBstandarddatabaseextensionStatus) {
    CloudDBstandarddatabaseextensionStatus["DISABLED"] = "disabled";
    CloudDBstandarddatabaseextensionStatus["DISABLING"] = "disabling";
    CloudDBstandarddatabaseextensionStatus["ENABLED"] = "enabled";
    CloudDBstandarddatabaseextensionStatus["ENABLING"] = "enabling";
})(CloudDBstandarddatabaseextensionStatus = exports.CloudDBstandarddatabaseextensionStatus || (exports.CloudDBstandarddatabaseextensionStatus = {}));
/*
 * Database status
 */
var CloudDBstandarddatabaseStatus;
(function (CloudDBstandarddatabaseStatus) {
    CloudDBstandarddatabaseStatus["CREATED"] = "created";
    CloudDBstandarddatabaseStatus["CREATING"] = "creating";
    CloudDBstandarddatabaseStatus["DELETING"] = "deleting";
    CloudDBstandarddatabaseStatus["DUMPING"] = "dumping";
    CloudDBstandarddatabaseStatus["IMPORTING"] = "importing";
    CloudDBstandarddatabaseStatus["RESTORING"] = "restoring";
})(CloudDBstandarddatabaseStatus = exports.CloudDBstandarddatabaseStatus || (exports.CloudDBstandarddatabaseStatus = {}));
/*
 * Flavor status
 */
var CloudDBstandardflavorStatus;
(function (CloudDBstandardflavorStatus) {
    CloudDBstandardflavorStatus["AVAILABLE"] = "available";
    CloudDBstandardflavorStatus["TESTING"] = "testing";
    CloudDBstandardflavorStatus["UNAVAILABLE"] = "unavailable";
})(CloudDBstandardflavorStatus = exports.CloudDBstandardflavorStatus || (exports.CloudDBstandardflavorStatus = {}));
/*
 * Grant status
 */
var CloudDBstandardgrantStatus;
(function (CloudDBstandardgrantStatus) {
    CloudDBstandardgrantStatus["CREATED"] = "created";
    CloudDBstandardgrantStatus["CREATING"] = "creating";
    CloudDBstandardgrantStatus["DELETING"] = "deleting";
    CloudDBstandardgrantStatus["UPDATING"] = "updating";
})(CloudDBstandardgrantStatus = exports.CloudDBstandardgrantStatus || (exports.CloudDBstandardgrantStatus = {}));
/*
 * Grant type
 */
var CloudDBstandardgrantType;
(function (CloudDBstandardgrantType) {
    CloudDBstandardgrantType["ADMIN"] = "admin";
    CloudDBstandardgrantType["NONE"] = "none";
    CloudDBstandardgrantType["RO"] = "ro";
    CloudDBstandardgrantType["RW"] = "rw";
})(CloudDBstandardgrantType = exports.CloudDBstandardgrantType || (exports.CloudDBstandardgrantType = {}));
/*
 * Image status
 */
var CloudDBstandardimageStatus;
(function (CloudDBstandardimageStatus) {
    CloudDBstandardimageStatus["AVAILABLE"] = "available";
    CloudDBstandardimageStatus["TESTING"] = "testing";
    CloudDBstandardimageStatus["UNAVAILABLE"] = "unavailable";
})(CloudDBstandardimageStatus = exports.CloudDBstandardimageStatus || (exports.CloudDBstandardimageStatus = {}));
/*
 * Image type
 */
var CloudDBstandardimageType;
(function (CloudDBstandardimageType) {
    CloudDBstandardimageType["MARIADB"] = "mariadb";
    CloudDBstandardimageType["MONGODB"] = "mongodb";
    CloudDBstandardimageType["MYSQL"] = "mysql";
    CloudDBstandardimageType["POSTGRESQL"] = "postgresql";
    CloudDBstandardimageType["REDIS"] = "redis";
})(CloudDBstandardimageType = exports.CloudDBstandardimageType || (exports.CloudDBstandardimageType = {}));
/*
 * Standard instance status
 */
var CloudDBstandardinstanceStatus;
(function (CloudDBstandardinstanceStatus) {
    CloudDBstandardinstanceStatus["CREATING"] = "creating";
    CloudDBstandardinstanceStatus["DELETING"] = "deleting";
    CloudDBstandardinstanceStatus["REOPENING"] = "reopening";
    CloudDBstandardinstanceStatus["RESTARTING"] = "restarting";
    CloudDBstandardinstanceStatus["RUNNING"] = "running";
    CloudDBstandardinstanceStatus["STARTING"] = "starting";
    CloudDBstandardinstanceStatus["STOPPED"] = "stopped";
    CloudDBstandardinstanceStatus["STOPPING"] = "stopping";
    CloudDBstandardinstanceStatus["SUSPENDED"] = "suspended";
    CloudDBstandardinstanceStatus["SUSPENDING"] = "suspending";
    CloudDBstandardinstanceStatus["UPDATING"] = "updating";
})(CloudDBstandardinstanceStatus = exports.CloudDBstandardinstanceStatus || (exports.CloudDBstandardinstanceStatus = {}));
/*
 * Region status
 */
var CloudDBstandardregionStatus;
(function (CloudDBstandardregionStatus) {
    CloudDBstandardregionStatus["AVAILABLE"] = "available";
    CloudDBstandardregionStatus["TESTING"] = "testing";
    CloudDBstandardregionStatus["UNAVAILABLE"] = "unavailable";
})(CloudDBstandardregionStatus = exports.CloudDBstandardregionStatus || (exports.CloudDBstandardregionStatus = {}));
/*
 * Region type
 */
var CloudDBstandardregionType;
(function (CloudDBstandardregionType) {
    CloudDBstandardregionType["HOSTING"] = "hosting";
    CloudDBstandardregionType["INTERNAL"] = "internal";
    CloudDBstandardregionType["PUBLIC"] = "public";
})(CloudDBstandardregionType = exports.CloudDBstandardregionType || (exports.CloudDBstandardregionType = {}));
/*
 * User status
 */
var CloudDBstandarduserStatus;
(function (CloudDBstandarduserStatus) {
    CloudDBstandarduserStatus["CREATED"] = "created";
    CloudDBstandarduserStatus["CREATING"] = "creating";
    CloudDBstandarduserStatus["DELETING"] = "deleting";
    CloudDBstandarduserStatus["UPDATING"] = "updating";
})(CloudDBstandarduserStatus = exports.CloudDBstandarduserStatus || (exports.CloudDBstandarduserStatus = {}));
/*
 * Whitelist status
 */
var CloudDBstandardwhitelistStatus;
(function (CloudDBstandardwhitelistStatus) {
    CloudDBstandardwhitelistStatus["CREATED"] = "created";
    CloudDBstandardwhitelistStatus["CREATING"] = "creating";
    CloudDBstandardwhitelistStatus["DELETING"] = "deleting";
    CloudDBstandardwhitelistStatus["UPDATING"] = "updating";
})(CloudDBstandardwhitelistStatus = exports.CloudDBstandardwhitelistStatus || (exports.CloudDBstandardwhitelistStatus = {}));
/*
 * Task status
 */
var CloudDBtaskStatus;
(function (CloudDBtaskStatus) {
    CloudDBtaskStatus["CANCELLED"] = "cancelled";
    CloudDBtaskStatus["DOING"] = "doing";
    CloudDBtaskStatus["DONE"] = "done";
    CloudDBtaskStatus["ERROR"] = "error";
    CloudDBtaskStatus["TODO"] = "todo";
})(CloudDBtaskStatus = exports.CloudDBtaskStatus || (exports.CloudDBtaskStatus = {}));
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
class CloudDB {
    constructor(client) {
        this.client = client;
    }
}
exports.CloudDB = CloudDB;
//# sourceMappingURL=cloudDB.js.map