"use strict";
// GENERATED SDK for cloud API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Possible values for project access type
 */
var CloudAccessType;
(function (CloudAccessType) {
    CloudAccessType["FULL"] = "full";
    CloudAccessType["RESTRICTED"] = "restricted";
})(CloudAccessType = exports.CloudAccessType || (exports.CloudAccessType = {}));
/*
 * Possible values for ACL type
 */
var CloudAclType;
(function (CloudAclType) {
    CloudAclType["READONLY"] = "readOnly";
    CloudAclType["READWRITE"] = "readWrite";
})(CloudAclType = exports.CloudAclType || (exports.CloudAclType = {}));
/*
 * StorageTypeEnum
 */
var CloudbillingViewStorageType;
(function (CloudbillingViewStorageType) {
    CloudbillingViewStorageType["PCS"] = "pcs";
    CloudbillingViewStorageType["PCA"] = "pca";
})(CloudbillingViewStorageType = exports.CloudbillingViewStorageType || (exports.CloudbillingViewStorageType = {}));
/*
 * UnitQuantity
 */
var CloudbillingViewUnitQuantity;
(function (CloudbillingViewUnitQuantity) {
    CloudbillingViewUnitQuantity["GIB"] = "GiB";
    CloudbillingViewUnitQuantity["GIBH"] = "GiBh";
    CloudbillingViewUnitQuantity["HOUR"] = "Hour";
})(CloudbillingViewUnitQuantity = exports.CloudbillingViewUnitQuantity || (exports.CloudbillingViewUnitQuantity = {}));
/*
 * Region of the registry
 */
var CloudcontainerRegistryregistryRegion;
(function (CloudcontainerRegistryregistryRegion) {
    CloudcontainerRegistryregistryRegion["GRA7"] = "GRA7";
})(CloudcontainerRegistryregistryRegion = exports.CloudcontainerRegistryregistryRegion || (exports.CloudcontainerRegistryregistryRegion = {}));
/*
 * Status of the registry
 */
var CloudcontainerRegistryregistryStatus;
(function (CloudcontainerRegistryregistryStatus) {
    CloudcontainerRegistryregistryStatus["ERROR"] = "ERROR";
    CloudcontainerRegistryregistryStatus["READY"] = "READY";
    CloudcontainerRegistryregistryStatus["DELETED"] = "DELETED";
    CloudcontainerRegistryregistryStatus["SUSPENDED"] = "SUSPENDED";
    CloudcontainerRegistryregistryStatus["INSTALLING"] = "INSTALLING";
    CloudcontainerRegistryregistryStatus["UPDATING"] = "UPDATING";
    CloudcontainerRegistryregistryStatus["RESTORING"] = "RESTORING";
    CloudcontainerRegistryregistryStatus["SUSPENDING"] = "SUSPENDING";
    CloudcontainerRegistryregistryStatus["DELETING"] = "DELETING";
})(CloudcontainerRegistryregistryStatus = exports.CloudcontainerRegistryregistryStatus || (exports.CloudcontainerRegistryregistryStatus = {}));
/*
 * Enum values for State
 */
var CloudExecutionState;
(function (CloudExecutionState) {
    CloudExecutionState["IDLE"] = "IDLE";
    CloudExecutionState["RUNNING"] = "RUNNING";
    CloudExecutionState["SUCCESS"] = "SUCCESS";
    CloudExecutionState["ERROR"] = "ERROR";
    CloudExecutionState["PAUSED"] = "PAUSED";
})(CloudExecutionState = exports.CloudExecutionState || (exports.CloudExecutionState = {}));
/*
 * OSTypeEnum
 */
var CloudimageOSType;
(function (CloudimageOSType) {
    CloudimageOSType["LINUX"] = "linux";
    CloudimageOSType["BSD"] = "bsd";
    CloudimageOSType["WINDOWS"] = "windows";
})(CloudimageOSType = exports.CloudimageOSType || (exports.CloudimageOSType = {}));
/*
 * ApplicationAccessStateEnum
 */
var CloudinstanceApplicationAccessState;
(function (CloudinstanceApplicationAccessState) {
    CloudinstanceApplicationAccessState["INSTALLING"] = "installing";
    CloudinstanceApplicationAccessState["OK"] = "ok";
})(CloudinstanceApplicationAccessState = exports.CloudinstanceApplicationAccessState || (exports.CloudinstanceApplicationAccessState = {}));
/*
 * InstanceStatusEnum
 */
var CloudinstanceInstanceStatus;
(function (CloudinstanceInstanceStatus) {
    CloudinstanceInstanceStatus["ACTIVE"] = "ACTIVE";
    CloudinstanceInstanceStatus["BUILDING"] = "BUILDING";
    CloudinstanceInstanceStatus["DELETED"] = "DELETED";
    CloudinstanceInstanceStatus["ERROR"] = "ERROR";
    CloudinstanceInstanceStatus["HARD_REBOOT"] = "HARD_REBOOT";
    CloudinstanceInstanceStatus["PASSWORD"] = "PASSWORD";
    CloudinstanceInstanceStatus["PAUSED"] = "PAUSED";
    CloudinstanceInstanceStatus["REBOOT"] = "REBOOT";
    CloudinstanceInstanceStatus["REBUILD"] = "REBUILD";
    CloudinstanceInstanceStatus["RESCUED"] = "RESCUED";
    CloudinstanceInstanceStatus["RESIZED"] = "RESIZED";
    CloudinstanceInstanceStatus["REVERT_RESIZE"] = "REVERT_RESIZE";
    CloudinstanceInstanceStatus["SOFT_DELETED"] = "SOFT_DELETED";
    CloudinstanceInstanceStatus["STOPPED"] = "STOPPED";
    CloudinstanceInstanceStatus["SUSPENDED"] = "SUSPENDED";
    CloudinstanceInstanceStatus["UNKNOWN"] = "UNKNOWN";
    CloudinstanceInstanceStatus["VERIFY_RESIZE"] = "VERIFY_RESIZE";
    CloudinstanceInstanceStatus["MIGRATING"] = "MIGRATING";
    CloudinstanceInstanceStatus["RESIZE"] = "RESIZE";
    CloudinstanceInstanceStatus["BUILD"] = "BUILD";
    CloudinstanceInstanceStatus["SHUTOFF"] = "SHUTOFF";
    CloudinstanceInstanceStatus["RESCUE"] = "RESCUE";
    CloudinstanceInstanceStatus["SHELVED"] = "SHELVED";
    CloudinstanceInstanceStatus["SHELVED_OFFLOADED"] = "SHELVED_OFFLOADED";
    CloudinstanceInstanceStatus["RESCUING"] = "RESCUING";
    CloudinstanceInstanceStatus["UNRESCUING"] = "UNRESCUING";
    CloudinstanceInstanceStatus["SNAPSHOTTING"] = "SNAPSHOTTING";
    CloudinstanceInstanceStatus["RESUMING"] = "RESUMING";
})(CloudinstanceInstanceStatus = exports.CloudinstanceInstanceStatus || (exports.CloudinstanceInstanceStatus = {}));
/*
 * MetricsPeriod
 */
var CloudinstanceMetricsPeriod;
(function (CloudinstanceMetricsPeriod) {
    CloudinstanceMetricsPeriod["LASTDAY"] = "lastday";
    CloudinstanceMetricsPeriod["LASTMONTH"] = "lastmonth";
    CloudinstanceMetricsPeriod["LASTWEEK"] = "lastweek";
    CloudinstanceMetricsPeriod["LASTYEAR"] = "lastyear";
    CloudinstanceMetricsPeriod["TODAY"] = "today";
})(CloudinstanceMetricsPeriod = exports.CloudinstanceMetricsPeriod || (exports.CloudinstanceMetricsPeriod = {}));
/*
 * MetricsType
 */
var CloudinstanceMetricsType;
(function (CloudinstanceMetricsType) {
    CloudinstanceMetricsType["MEM_USED"] = "mem:used";
    CloudinstanceMetricsType["MEM_MAX"] = "mem:max";
    CloudinstanceMetricsType["CPU_USED"] = "cpu:used";
    CloudinstanceMetricsType["CPU_MAX"] = "cpu:max";
    CloudinstanceMetricsType["NET_TX"] = "net:tx";
    CloudinstanceMetricsType["NET_RX"] = "net:rx";
})(CloudinstanceMetricsType = exports.CloudinstanceMetricsType || (exports.CloudinstanceMetricsType = {}));
/*
 * MonthlyBillingStatusEnum
 */
var CloudinstanceMonthlyBillingStatus;
(function (CloudinstanceMonthlyBillingStatus) {
    CloudinstanceMonthlyBillingStatus["ACTIVATIONPENDING"] = "activationPending";
    CloudinstanceMonthlyBillingStatus["OK"] = "ok";
})(CloudinstanceMonthlyBillingStatus = exports.CloudinstanceMonthlyBillingStatus || (exports.CloudinstanceMonthlyBillingStatus = {}));
/*
 * RebootTypeEnum
 */
var CloudinstanceRebootType;
(function (CloudinstanceRebootType) {
    CloudinstanceRebootType["SOFT"] = "soft";
    CloudinstanceRebootType["HARD"] = "hard";
})(CloudinstanceRebootType = exports.CloudinstanceRebootType || (exports.CloudinstanceRebootType = {}));
/*
 * InstanceGroupTypeEnum
 */
var CloudinstancegroupInstanceGroupType;
(function (CloudinstancegroupInstanceGroupType) {
    CloudinstancegroupInstanceGroupType["AFFINITY"] = "affinity";
    CloudinstancegroupInstanceGroupType["ANTI_AFFINITY"] = "anti-affinity";
})(CloudinstancegroupInstanceGroupType = exports.CloudinstancegroupInstanceGroupType || (exports.CloudinstancegroupInstanceGroupType = {}));
/*
 * IpStatusEnum
 */
var CloudipIpStatus;
(function (CloudipIpStatus) {
    CloudipIpStatus["OK"] = "ok";
    CloudipIpStatus["OPERATIONPENDING"] = "operationPending";
})(CloudipIpStatus = exports.CloudipIpStatus || (exports.CloudipIpStatus = {}));
/*
 * IpSubTypeEnum
 */
var CloudipIpSubType;
(function (CloudipIpSubType) {
    CloudipIpSubType["CLOUD"] = "cloud";
    CloudipIpSubType["OVH"] = "ovh";
})(CloudipIpSubType = exports.CloudipIpSubType || (exports.CloudipIpSubType = {}));
/*
 * Enum values for IpCountry
 */
var CloudIpCountry;
(function (CloudIpCountry) {
    CloudIpCountry["AU"] = "au";
    CloudIpCountry["BE"] = "be";
    CloudIpCountry["CA"] = "ca";
    CloudIpCountry["CZ"] = "cz";
    CloudIpCountry["DE"] = "de";
    CloudIpCountry["ES"] = "es";
    CloudIpCountry["FI"] = "fi";
    CloudIpCountry["FR"] = "fr";
    CloudIpCountry["IE"] = "ie";
    CloudIpCountry["IT"] = "it";
    CloudIpCountry["LT"] = "lt";
    CloudIpCountry["NL"] = "nl";
    CloudIpCountry["PL"] = "pl";
    CloudIpCountry["PT"] = "pt";
    CloudIpCountry["SG"] = "sg";
    CloudIpCountry["UK"] = "uk";
    CloudIpCountry["US"] = "us";
})(CloudIpCountry = exports.CloudIpCountry || (exports.CloudIpCountry = {}));
/*
 * Enum values for Status
 */
var CloudkubeClusterStatus;
(function (CloudkubeClusterStatus) {
    CloudkubeClusterStatus["INSTALLING"] = "INSTALLING";
    CloudkubeClusterStatus["UPDATING"] = "UPDATING";
    CloudkubeClusterStatus["RESETTING"] = "RESETTING";
    CloudkubeClusterStatus["SUSPENDING"] = "SUSPENDING";
    CloudkubeClusterStatus["REOPENING"] = "REOPENING";
    CloudkubeClusterStatus["DELETING"] = "DELETING";
    CloudkubeClusterStatus["SUSPENDED"] = "SUSPENDED";
    CloudkubeClusterStatus["ERROR"] = "ERROR";
    CloudkubeClusterStatus["USER_ERROR"] = "USER_ERROR";
    CloudkubeClusterStatus["USER_QUOTA_ERROR"] = "USER_QUOTA_ERROR";
    CloudkubeClusterStatus["READY"] = "READY";
})(CloudkubeClusterStatus = exports.CloudkubeClusterStatus || (exports.CloudkubeClusterStatus = {}));
/*
 * Enum values for category
 */
var CloudkubeFlavorCategory;
(function (CloudkubeFlavorCategory) {
    CloudkubeFlavorCategory["C"] = "c";
    CloudkubeFlavorCategory["G"] = "g";
    CloudkubeFlavorCategory["T"] = "t";
    CloudkubeFlavorCategory["B"] = "b";
    CloudkubeFlavorCategory["R"] = "r";
})(CloudkubeFlavorCategory = exports.CloudkubeFlavorCategory || (exports.CloudkubeFlavorCategory = {}));
/*
 * Enum values for State
 */
var CloudkubeFlavorState;
(function (CloudkubeFlavorState) {
    CloudkubeFlavorState["AVAILABLE"] = "available";
    CloudkubeFlavorState["UNAVAILABLE"] = "unavailable";
})(CloudkubeFlavorState = exports.CloudkubeFlavorState || (exports.CloudkubeFlavorState = {}));
/*
 * Enum values for Status
 */
var CloudkubeNodeStatus;
(function (CloudkubeNodeStatus) {
    CloudkubeNodeStatus["INSTALLING"] = "INSTALLING";
    CloudkubeNodeStatus["UPDATING"] = "UPDATING";
    CloudkubeNodeStatus["RESETTING"] = "RESETTING";
    CloudkubeNodeStatus["SUSPENDING"] = "SUSPENDING";
    CloudkubeNodeStatus["REOPENING"] = "REOPENING";
    CloudkubeNodeStatus["DELETING"] = "DELETING";
    CloudkubeNodeStatus["SUSPENDED"] = "SUSPENDED";
    CloudkubeNodeStatus["ERROR"] = "ERROR";
    CloudkubeNodeStatus["USER_ERROR"] = "USER_ERROR";
    CloudkubeNodeStatus["USER_QUOTA_ERROR"] = "USER_QUOTA_ERROR";
    CloudkubeNodeStatus["USER_NODE_NOT_FOUND_ERROR"] = "USER_NODE_NOT_FOUND_ERROR";
    CloudkubeNodeStatus["USER_NODE_SUSPENDED_SERVICE"] = "USER_NODE_SUSPENDED_SERVICE";
    CloudkubeNodeStatus["READY"] = "READY";
})(CloudkubeNodeStatus = exports.CloudkubeNodeStatus || (exports.CloudkubeNodeStatus = {}));
/*
 * Enum values for available regions
 */
var CloudkubeRegion;
(function (CloudkubeRegion) {
    CloudkubeRegion["GRA5"] = "GRA5";
    CloudkubeRegion["GRA7"] = "GRA7";
    CloudkubeRegion["BHS5"] = "BHS5";
})(CloudkubeRegion = exports.CloudkubeRegion || (exports.CloudkubeRegion = {}));
/*
 * Enum values for worker nodes reset policy
 */
var CloudkubeResetWorkerNodesPolicy;
(function (CloudkubeResetWorkerNodesPolicy) {
    CloudkubeResetWorkerNodesPolicy["REINSTALL"] = "reinstall";
    CloudkubeResetWorkerNodesPolicy["DELETE"] = "delete";
})(CloudkubeResetWorkerNodesPolicy = exports.CloudkubeResetWorkerNodesPolicy || (exports.CloudkubeResetWorkerNodesPolicy = {}));
/*
 * Enum values for UpdatePolicy
 */
var CloudkubeUpdatePolicy;
(function (CloudkubeUpdatePolicy) {
    CloudkubeUpdatePolicy["ALWAYS_UPDATE"] = "ALWAYS_UPDATE";
    CloudkubeUpdatePolicy["MINIMAL_DOWNTIME"] = "MINIMAL_DOWNTIME";
    CloudkubeUpdatePolicy["NEVER_UPDATE"] = "NEVER_UPDATE";
})(CloudkubeUpdatePolicy = exports.CloudkubeUpdatePolicy || (exports.CloudkubeUpdatePolicy = {}));
/*
 * Enum values for UpdateStrategy
 */
var CloudkubeUpdateStrategy;
(function (CloudkubeUpdateStrategy) {
    CloudkubeUpdateStrategy["LATEST_PATCH"] = "LATEST_PATCH";
    CloudkubeUpdateStrategy["NEXT_MINOR"] = "NEXT_MINOR";
})(CloudkubeUpdateStrategy = exports.CloudkubeUpdateStrategy || (exports.CloudkubeUpdateStrategy = {}));
/*
 * Enum values for Status
 */
var CloudLabStatus;
(function (CloudLabStatus) {
    CloudLabStatus["OPEN"] = "open";
    CloudLabStatus["ACTIVATING"] = "activating";
    CloudLabStatus["ACTIVATED"] = "activated";
    CloudLabStatus["CLOSED"] = "closed";
})(CloudLabStatus = exports.CloudLabStatus || (exports.CloudLabStatus = {}));
/*
 * ResourceTypeEnum
 */
var CloudmigrationResourceType;
(function (CloudmigrationResourceType) {
    CloudmigrationResourceType["INSTANCE"] = "instance";
})(CloudmigrationResourceType = exports.CloudmigrationResourceType || (exports.CloudmigrationResourceType = {}));
/*
 * NetworkRegionStatusEnum
 */
var CloudnetworkNetworkRegionStatus;
(function (CloudnetworkNetworkRegionStatus) {
    CloudnetworkNetworkRegionStatus["ACTIVE"] = "ACTIVE";
    CloudnetworkNetworkRegionStatus["BUILDING"] = "BUILDING";
})(CloudnetworkNetworkRegionStatus = exports.CloudnetworkNetworkRegionStatus || (exports.CloudnetworkNetworkRegionStatus = {}));
/*
 * NetworkStatusEnum
 */
var CloudnetworkNetworkStatus;
(function (CloudnetworkNetworkStatus) {
    CloudnetworkNetworkStatus["BUILDING"] = "BUILDING";
    CloudnetworkNetworkStatus["ACTIVE"] = "ACTIVE";
    CloudnetworkNetworkStatus["DELETING"] = "DELETING";
})(CloudnetworkNetworkStatus = exports.CloudnetworkNetworkStatus || (exports.CloudnetworkNetworkStatus = {}));
/*
 * NetworkTypeEnum
 */
var CloudnetworkNetworkType;
(function (CloudnetworkNetworkType) {
    CloudnetworkNetworkType["PUBLIC"] = "public";
    CloudnetworkNetworkType["PRIVATE"] = "private";
})(CloudnetworkNetworkType = exports.CloudnetworkNetworkType || (exports.CloudnetworkNetworkType = {}));
/*
 * Enum values for Status
 */
var CloudOperationStatus;
(function (CloudOperationStatus) {
    CloudOperationStatus["CREATED"] = "created";
    CloudOperationStatus["IN_PROGRESS"] = "in-progress";
    CloudOperationStatus["COMPLETED"] = "completed";
    CloudOperationStatus["IN_ERROR"] = "in-error";
    CloudOperationStatus["UNKNOWN"] = "unknown";
})(CloudOperationStatus = exports.CloudOperationStatus || (exports.CloudOperationStatus = {}));
/*
 * StatusEnum
 */
var CloudorderStatus;
(function (CloudorderStatus) {
    CloudorderStatus["UNPAID"] = "unpaid";
    CloudorderStatus["DELIVERING"] = "delivering";
    CloudorderStatus["DELIVERED"] = "delivered";
    CloudorderStatus["UNKNOWN"] = "unknown";
})(CloudorderStatus = exports.CloudorderStatus || (exports.CloudorderStatus = {}));
/*
 * Task type available for cloud archives
 */
var CloudpcaBillingRef;
(function (CloudpcaBillingRef) {
    CloudpcaBillingRef["BACKUP"] = "backup";
    CloudpcaBillingRef["DELETE"] = "delete";
    CloudpcaBillingRef["RESTORE"] = "restore";
})(CloudpcaBillingRef = exports.CloudpcaBillingRef || (exports.CloudpcaBillingRef = {}));
/*
 * Task types for cloud archives
 */
var CloudpcaFunctionType;
(function (CloudpcaFunctionType) {
    CloudpcaFunctionType["CREATEUSER"] = "createUser";
    CloudpcaFunctionType["DELETE"] = "delete";
    CloudpcaFunctionType["RESTORE"] = "restore";
    CloudpcaFunctionType["SETPASSWORD"] = "setPassword";
    CloudpcaFunctionType["SETSESSIONNAME"] = "setSessionName";
    CloudpcaFunctionType["SETSSHKEY"] = "setSshKey";
})(CloudpcaFunctionType = exports.CloudpcaFunctionType || (exports.CloudpcaFunctionType = {}));
/*
 * Session state available for cloud archives
 */
var CloudpcaSessionState;
(function (CloudpcaSessionState) {
    CloudpcaSessionState["DOING"] = "doing";
    CloudpcaSessionState["DOINGBACKUP"] = "doingBackup";
    CloudpcaSessionState["DOINGDELETE"] = "doingDelete";
    CloudpcaSessionState["DOINGRESTORE"] = "doingRestore";
    CloudpcaSessionState["DONE"] = "done";
    CloudpcaSessionState["ERROR"] = "error";
    CloudpcaSessionState["FAILEDDELETE"] = "failedDelete";
    CloudpcaSessionState["FAILEDRESTORE"] = "failedRestore";
    CloudpcaSessionState["NEW"] = "new";
    CloudpcaSessionState["TAGGING"] = "tagging";
    CloudpcaSessionState["TOBACKUP"] = "toBackup";
    CloudpcaSessionState["TODELETE"] = "toDelete";
    CloudpcaSessionState["TORESTORE"] = "toRestore";
})(CloudpcaSessionState = exports.CloudpcaSessionState || (exports.CloudpcaSessionState = {}));
/*
 * Task status for cloud archives
 */
var CloudpcaTaskState;
(function (CloudpcaTaskState) {
    CloudpcaTaskState["CANCELLED"] = "cancelled";
    CloudpcaTaskState["DELETED"] = "deleted";
    CloudpcaTaskState["DOING"] = "doing";
    CloudpcaTaskState["DOINGBACKUP"] = "doingBackup";
    CloudpcaTaskState["DOINGDELETE"] = "doingDelete";
    CloudpcaTaskState["DOINGRESTORE"] = "doingRestore";
    CloudpcaTaskState["DONE"] = "done";
    CloudpcaTaskState["ERROR"] = "error";
    CloudpcaTaskState["FAILEDDELETE"] = "failedDelete";
    CloudpcaTaskState["FAILEDRESTORE"] = "failedRestore";
    CloudpcaTaskState["NEW"] = "new";
    CloudpcaTaskState["TAGGING"] = "tagging";
    CloudpcaTaskState["TOBACKUP"] = "toBackup";
    CloudpcaTaskState["TODELETE"] = "toDelete";
    CloudpcaTaskState["TORESTORE"] = "toRestore";
    CloudpcaTaskState["TODO"] = "todo";
})(CloudpcaTaskState = exports.CloudpcaTaskState || (exports.CloudpcaTaskState = {}));
/*
 * Task type available for cloud archives
 */
var CloudpcaTaskType;
(function (CloudpcaTaskType) {
    CloudpcaTaskType["DELETE"] = "delete";
    CloudpcaTaskType["RESTORE"] = "restore";
})(CloudpcaTaskType = exports.CloudpcaTaskType || (exports.CloudpcaTaskType = {}));
/*
 * Transfer states
 */
var CloudpcaTransferState;
(function (CloudpcaTransferState) {
    CloudpcaTransferState["DELETED"] = "deleted";
    CloudpcaTransferState["TRANSFERRED"] = "transferred";
    CloudpcaTransferState["UNTRANSFERRED"] = "untransferred";
    CloudpcaTransferState["WAITINGAGREEMENTSVALIDATION"] = "waitingAgreementsValidation";
})(CloudpcaTransferState = exports.CloudpcaTransferState || (exports.CloudpcaTransferState = {}));
/*
 * Possible values for bill type
 */
var CloudprojectBillType;
(function (CloudprojectBillType) {
    CloudprojectBillType["CREDITPURCHASED"] = "creditPurchased";
    CloudprojectBillType["MONTHLYCONSUMPTION"] = "monthlyConsumption";
    CloudprojectBillType["MONTHLYINSTANCEACTIVATION"] = "monthlyInstanceActivation";
})(CloudprojectBillType = exports.CloudprojectBillType || (exports.CloudprojectBillType = {}));
/*
 * Kind of the subscription
 */
var CloudprojectiostreamSubscriptionKind;
(function (CloudprojectiostreamSubscriptionKind) {
    CloudprojectiostreamSubscriptionKind["SHARED"] = "SHARED";
    CloudprojectiostreamSubscriptionKind["KEY_SHARED"] = "KEY_SHARED";
    CloudprojectiostreamSubscriptionKind["EXCLUSIVE"] = "EXCLUSIVE";
    CloudprojectiostreamSubscriptionKind["FAILOVER"] = "FAILOVER";
})(CloudprojectiostreamSubscriptionKind = exports.CloudprojectiostreamSubscriptionKind || (exports.CloudprojectiostreamSubscriptionKind = {}));
/*
 * Action of the token
 */
var CloudprojectiostreamTokenAction;
(function (CloudprojectiostreamTokenAction) {
    CloudprojectiostreamTokenAction["CONSUME"] = "CONSUME";
    CloudprojectiostreamTokenAction["PRODUCE"] = "PRODUCE";
    CloudprojectiostreamTokenAction["BOTH"] = "BOTH";
})(CloudprojectiostreamTokenAction = exports.CloudprojectiostreamTokenAction || (exports.CloudprojectiostreamTokenAction = {}));
/*
 * Kind of persistence for the stream
 */
var CloudprojectioStreamKind;
(function (CloudprojectioStreamKind) {
    CloudprojectioStreamKind["NON_PERSISTENT"] = "NON_PERSISTENT";
    CloudprojectioStreamKind["PERSISTENT"] = "PERSISTENT";
})(CloudprojectioStreamKind = exports.CloudprojectioStreamKind || (exports.CloudprojectioStreamKind = {}));
/*
 * Status of the stream
 */
var CloudprojectioStreamStatus;
(function (CloudprojectioStreamStatus) {
    CloudprojectioStreamStatus["INSTALLING"] = "INSTALLING";
    CloudprojectioStreamStatus["RUNNING"] = "RUNNING";
    CloudprojectioStreamStatus["ERROR"] = "ERROR";
})(CloudprojectioStreamStatus = exports.CloudprojectioStreamStatus || (exports.CloudprojectioStreamStatus = {}));
/*
 * Possible values for error code on project creation
 */
var CloudprojectNewProjectInfoErrorCode;
(function (CloudprojectNewProjectInfoErrorCode) {
    CloudprojectNewProjectInfoErrorCode["ACCOUNTNOTELIGIBLE"] = "accountNotEligible";
    CloudprojectNewProjectInfoErrorCode["CHALLENGEPAYMENTMETHODREQUESTED"] = "challengePaymentMethodRequested";
    CloudprojectNewProjectInfoErrorCode["INVALIDPAYMENTMEAN"] = "invalidPaymentMean";
    CloudprojectNewProjectInfoErrorCode["MAXPROJECTSLIMITREACHED"] = "maxProjectsLimitReached";
    CloudprojectNewProjectInfoErrorCode["PAYPALACCOUNTNOTVERIFIED"] = "paypalAccountNotVerified";
    CloudprojectNewProjectInfoErrorCode["UNPAIDDEBTS"] = "unpaidDebts";
})(CloudprojectNewProjectInfoErrorCode = exports.CloudprojectNewProjectInfoErrorCode || (exports.CloudprojectNewProjectInfoErrorCode = {}));
/*
 * Possible values for new project status
 */
var CloudprojectNewProjectStatus;
(function (CloudprojectNewProjectStatus) {
    CloudprojectNewProjectStatus["CREATING"] = "creating";
    CloudprojectNewProjectStatus["OK"] = "ok";
    CloudprojectNewProjectStatus["VALIDATIONPENDING"] = "validationPending";
    CloudprojectNewProjectStatus["WAITINGAGREEMENTSVALIDATION"] = "waitingAgreementsValidation";
})(CloudprojectNewProjectStatus = exports.CloudprojectNewProjectStatus || (exports.CloudprojectNewProjectStatus = {}));
/*
 * Possible values for cloud project product name
 */
var CloudprojectProductName;
(function (CloudprojectProductName) {
    CloudprojectProductName["REGISTRY"] = "registry";
})(CloudprojectProductName = exports.CloudprojectProductName || (exports.CloudprojectProductName = {}));
/*
 * Possible values for project status
 */
var CloudprojectProjectStatus;
(function (CloudprojectProjectStatus) {
    CloudprojectProjectStatus["CREATING"] = "creating";
    CloudprojectProjectStatus["DELETED"] = "deleted";
    CloudprojectProjectStatus["DELETING"] = "deleting";
    CloudprojectProjectStatus["OK"] = "ok";
    CloudprojectProjectStatus["SUSPENDED"] = "suspended";
})(CloudprojectProjectStatus = exports.CloudprojectProjectStatus || (exports.CloudprojectProjectStatus = {}));
/*
 * Possible values for volume type
 */
var CloudprojectVolumeType;
(function (CloudprojectVolumeType) {
    CloudprojectVolumeType["CLASSIC"] = "classic";
    CloudprojectVolumeType["HIGH_SPEED"] = "high-speed";
})(CloudprojectVolumeType = exports.CloudprojectVolumeType || (exports.CloudprojectVolumeType = {}));
/*
 * Enum values for ContinentCode
 */
var CloudRegionContinent;
(function (CloudRegionContinent) {
    CloudRegionContinent["EU"] = "EU";
    CloudRegionContinent["NA"] = "NA";
    CloudRegionContinent["US"] = "US";
    CloudRegionContinent["ASIA"] = "ASIA";
})(CloudRegionContinent = exports.CloudRegionContinent || (exports.CloudRegionContinent = {}));
/*
 * Enum values for Status
 */
var CloudRegionStatus;
(function (CloudRegionStatus) {
    CloudRegionStatus["UP"] = "UP";
    CloudRegionStatus["DOWN"] = "DOWN";
    CloudRegionStatus["MAINTENANCE"] = "MAINTENANCE";
})(CloudRegionStatus = exports.CloudRegionStatus || (exports.CloudRegionStatus = {}));
/*
 * Enum values for Status
 */
var CloudServiceStatus;
(function (CloudServiceStatus) {
    CloudServiceStatus["UP"] = "UP";
    CloudServiceStatus["DOWN"] = "DOWN";
})(CloudServiceStatus = exports.CloudServiceStatus || (exports.CloudServiceStatus = {}));
/*
 * RetrievalStateEnum
 */
var CloudstorageRetrievalState;
(function (CloudstorageRetrievalState) {
    CloudstorageRetrievalState["SEALED"] = "sealed";
    CloudstorageRetrievalState["UNSEALING"] = "unsealing";
    CloudstorageRetrievalState["UNSEALED"] = "unsealed";
})(CloudstorageRetrievalState = exports.CloudstorageRetrievalState || (exports.CloudstorageRetrievalState = {}));
/*
 * RightEnum
 */
var CloudstorageRight;
(function (CloudstorageRight) {
    CloudstorageRight["ALL"] = "all";
    CloudstorageRight["READ"] = "read";
    CloudstorageRight["WRITE"] = "write";
})(CloudstorageRight = exports.CloudstorageRight || (exports.CloudstorageRight = {}));
/*
 * TypeEnum
 */
var CloudstorageType;
(function (CloudstorageType) {
    CloudstorageType["STATIC"] = "static";
    CloudstorageType["PUBLIC"] = "public";
    CloudstorageType["PRIVATE"] = "private";
})(CloudstorageType = exports.CloudstorageType || (exports.CloudstorageType = {}));
/*
 * PaymentTypeEnum
 */
var CloudusagePaymentType;
(function (CloudusagePaymentType) {
    CloudusagePaymentType["PRE"] = "pre";
    CloudusagePaymentType["POST"] = "post";
})(CloudusagePaymentType = exports.CloudusagePaymentType || (exports.CloudusagePaymentType = {}));
/*
 * OpenrcVersionEnum
 */
var ClouduserOpenrcVersion;
(function (ClouduserOpenrcVersion) {
    ClouduserOpenrcVersion["V2_0"] = "v2.0";
    ClouduserOpenrcVersion["V3"] = "v3";
})(ClouduserOpenrcVersion = exports.ClouduserOpenrcVersion || (exports.ClouduserOpenrcVersion = {}));
/*
 * RoleEnum
 */
var ClouduserRole;
(function (ClouduserRole) {
    ClouduserRole["ADMIN"] = "admin";
    ClouduserRole["AUTHENTICATION"] = "authentication";
    ClouduserRole["ADMINISTRATOR"] = "administrator";
    ClouduserRole["COMPUTE_OPERATOR"] = "compute_operator";
    ClouduserRole["INFRASTRUCTURE_SUPERVISOR"] = "infrastructure_supervisor";
    ClouduserRole["NETWORK_SECURITY_OPERATOR"] = "network_security_operator";
    ClouduserRole["NETWORK_OPERATOR"] = "network_operator";
    ClouduserRole["BACKUP_OPERATOR"] = "backup_operator";
    ClouduserRole["IMAGE_OPERATOR"] = "image_operator";
    ClouduserRole["VOLUME_OPERATOR"] = "volume_operator";
    ClouduserRole["OBJECTSTORE_OPERATOR"] = "objectstore_operator";
})(ClouduserRole = exports.ClouduserRole || (exports.ClouduserRole = {}));
/*
 * UserStatusEnum
 */
var ClouduserUserStatus;
(function (ClouduserUserStatus) {
    ClouduserUserStatus["CREATING"] = "creating";
    ClouduserUserStatus["OK"] = "ok";
    ClouduserUserStatus["DELETING"] = "deleting";
    ClouduserUserStatus["DELETED"] = "deleted";
})(ClouduserUserStatus = exports.ClouduserUserStatus || (exports.ClouduserUserStatus = {}));
/*
 * SnapshotStatusEnum
 */
var CloudvolumeSnapshotStatus;
(function (CloudvolumeSnapshotStatus) {
    CloudvolumeSnapshotStatus["CREATING"] = "creating";
    CloudvolumeSnapshotStatus["AVAILABLE"] = "available";
    CloudvolumeSnapshotStatus["DELETING"] = "deleting";
    CloudvolumeSnapshotStatus["ERROR"] = "error";
    CloudvolumeSnapshotStatus["ERROR_DELETING"] = "error_deleting";
})(CloudvolumeSnapshotStatus = exports.CloudvolumeSnapshotStatus || (exports.CloudvolumeSnapshotStatus = {}));
/*
 * VolumeTypeEnum
 */
var CloudvolumeVolumeType;
(function (CloudvolumeVolumeType) {
    CloudvolumeVolumeType["CLASSIC"] = "classic";
    CloudvolumeVolumeType["HIGH_SPEED"] = "high-speed";
})(CloudvolumeVolumeType = exports.CloudvolumeVolumeType || (exports.CloudvolumeVolumeType = {}));
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
class Cloud {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the PUBLICCLOUD service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud#GET)
     */
    ListAvailableServices() {
        let url = `/cloud`;
        return this.client.request('GET', url);
    }
    /**
     * Operations about the PUBLICCLOUD service [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca#GET)
     */
    /*
    ListAvailableServices(serviceName: string): Promise<string[]> {
      let url = `/cloud/${serviceName}/pca`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Cloud Archives Account [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D#GET)
     */
    GetThisObjectProperties(pcaServiceName, serviceName) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Cloud Archives Account [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D#PUT)
     */
    AlterThisObjectProperties(pcaServiceName, serviceName, payload) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the pca.Billing objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/billing#GET)
     */
    CloudArchivesBillingItems(pcaServiceName, serviceName, billed, dateFrom, dateTo) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/billing?`;
        const queryParams = new query_params_1.default();
        if (billed) {
            queryParams.set('billed', billed.toString());
        }
        if (dateFrom) {
            queryParams.set('date.from', dateFrom.toString());
        }
        if (dateTo) {
            queryParams.set('date.to', dateTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * cloud archives billing [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/billing/%7BbillingId%7D#GET)
     */
    /*
    GetThisObjectProperties(billingId: number, pcaServiceName: string, serviceName: string): Promise<PcaBilling> {
      let url = `/cloud/${serviceName}/pca/${pcaServiceName}/billing/${billingId}`
  
      return this.client.request<PcaBilling>('GET', url)
    }
    */
    /**
     * Details about a Service [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(pcaServiceName: string, serviceName: string): Promise<ServicesService> {
      let url = `/cloud/${serviceName}/pca/${pcaServiceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(pcaServiceName: string, serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/cloud/${serviceName}/pca/${pcaServiceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the pca.Session objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions#GET)
     */
    CloudArchivesSessionsForAccount(pcaServiceName, serviceName, name) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * cloud archives sessions [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D#GET)
     */
    /*
    GetThisObjectProperties(pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaSession> {
      let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}`
  
      return this.client.request<PcaSession>('GET', url)
    }
    */
    /**
     * cloud archives sessions [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(pcaServiceName: string, serviceName: string, sessionId: string, payload: PcaSession): Promise<void> {
      let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * cloud archives sessions [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D#DELETE)
     */
    CreateADeleteTaskForAllFilesInSession(pcaServiceName, serviceName, sessionId) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the pca.File objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D/files#GET)
     */
    CloudArchivesFilesInSession(pcaServiceName, serviceName, sessionId, name) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}/files?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * cloud archives files [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D/files/%7BfileId%7D#GET)
     */
    /*
    GetThisObjectProperties(fileId: string, pcaServiceName: string, serviceName: string, sessionId: string): Promise<PcaFile> {
      let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}/files/${fileId}`
  
      return this.client.request<PcaFile>('GET', url)
    }
    */
    /**
     * restore operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/sessions/%7BsessionId%7D/restore#POST)
     */
    CreateARestoreTaskForSession(pcaServiceName, serviceName, sessionId) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/sessions/${sessionId}/restore`;
        return this.client.request('POST', url);
    }
    /**
     * List the pca.Task objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/tasks#GET)
     */
    CloudArchivesTasksForAccount(pcaServiceName, serviceName, _function, status, todoDateFrom, todoDateTo) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/tasks?`;
        const queryParams = new query_params_1.default();
        if (_function) {
            queryParams.set('function', _function.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        if (todoDateFrom) {
            queryParams.set('todoDate.from', todoDateFrom.toString());
        }
        if (todoDateTo) {
            queryParams.set('todoDate.to', todoDateTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the pca.Task objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/tasks#POST)
     */
    CreateACloudArchivesTask(fileIds, pcaServiceName, serviceName, sessionId, taskFunction) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/tasks`;
        return this.client.request('POST', url, { fileIds, sessionId, taskFunction });
    }
    /**
     * cloud archives tasks [DEPRECATED]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/tasks/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(pcaServiceName: string, serviceName: string, taskId: string): Promise<PcaTask> {
      let url = `/cloud/${serviceName}/pca/${pcaServiceName}/tasks/${taskId}`
  
      return this.client.request<PcaTask>('GET', url)
    }
    */
    /**
     * usage operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/%7BserviceName%7D/pca/%7BpcaServiceName%7D/usage#GET)
     */
    ViewAccountCurrentTotalSessionsUsageBytes(pcaServiceName, serviceName) {
        let url = `/cloud/${serviceName}/pca/${pcaServiceName}/usage`;
        return this.client.request('GET', url);
    }
    /**
     * Get agreements related to a product [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/agreements#GET)
     */
    GetAgreementsRelatedToAProduct(product) {
        let url = `/cloud/agreements?`;
        const queryParams = new query_params_1.default();
        if (product) {
            queryParams.set('product', product.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Start a new cloud project [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/createProject#POST)
     */
    StartANewCloudProject(credit, description, voucher) {
        let url = `/cloud/createProject`;
        return this.client.request('POST', url, { credit, description, voucher });
    }
    /**
     * Get information about a cloud project creation [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/createProjectInfo#GET)
     */
    GetInformationAboutACloudProjectCreation(voucher) {
        let url = `/cloud/createProjectInfo?`;
        const queryParams = new query_params_1.default();
        if (voucher) {
            queryParams.set('voucher', voucher.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/order#GET)
     */
    GetAllCloudPendingOrders(planCode) {
        let url = `/cloud/order?`;
        const queryParams = new query_params_1.default();
        if (planCode) {
            queryParams.set('planCode', planCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get services prices [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/price#GET)
     */
    GetServicesPrices(flavorId, region) {
        let url = `/cloud/price?`;
        const queryParams = new query_params_1.default();
        if (flavorId) {
            queryParams.set('flavorId', flavorId);
        }
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operations about the PUBLICCLOUD service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project#GET)
     */
    /*
    ListAvailableServices(): Promise<string[]> {
      let url = `/cloud/project`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Operations about the PUBLICCLOUD service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<CloudProject> {
      let url = `/cloud/project/${serviceName}`
  
      return this.client.request<CloudProject>('GET', url)
    }
    */
    /**
     * Operations about the PUBLICCLOUD service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: CloudProject): Promise<void> {
      let url = `/cloud/project/${serviceName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the cloud.Acl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl#GET)
     */
    GetACLOnYourCloudProject(serviceName, type) {
        let url = `/cloud/project/${serviceName}/acl?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the cloud.Acl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl#POST)
     */
    CreateNewACL(accountId, serviceName, type) {
        let url = `/cloud/project/${serviceName}/acl`;
        return this.client.request('POST', url, { accountId, type });
    }
    /**
     * Cloud ACL [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl/%7BaccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(accountId: string, serviceName: string): Promise<CloudAcl> {
      let url = `/cloud/project/${serviceName}/acl/${accountId}`
  
      return this.client.request<CloudAcl>('GET', url)
    }
    */
    /**
     * Cloud ACL [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/acl/%7BaccountId%7D#DELETE)
     */
    DeleteACL(accountId, serviceName) {
        let url = `/cloud/project/${serviceName}/acl/${accountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/activateMonthlyBilling#POST)
     */
    ActivateMonthlyBillingOnMultipleInstances(instances, serviceName) {
        let url = `/cloud/project/${serviceName}/activateMonthlyBilling`;
        return this.client.request('POST', url, { instances });
    }
    /**
     * List the cloud.Alerting objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting#GET)
     */
    ManageAlertsOnYourConsumption(serviceName) {
        let url = `/cloud/project/${serviceName}/alerting`;
        return this.client.request('GET', url);
    }
    /**
     * List the cloud.Alerting objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting#POST)
     */
    AddNewAlert(delay, email, monthlyThreshold, serviceName) {
        let url = `/cloud/project/${serviceName}/alerting`;
        return this.client.request('POST', url, { delay, email, monthlyThreshold });
    }
    /**
     * Cloud alerting consumption [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: string, serviceName: string): Promise<CloudAlerting> {
      let url = `/cloud/project/${serviceName}/alerting/${id}`
  
      return this.client.request<CloudAlerting>('GET', url)
    }
    */
    /**
     * Cloud alerting consumption [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: string, serviceName: string, payload: CloudAlerting): Promise<void> {
      let url = `/cloud/project/${serviceName}/alerting/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Cloud alerting consumption [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D#DELETE)
     */
    DeleteAlerting(id, serviceName) {
        let url = `/cloud/project/${serviceName}/alerting/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cloud.AlertingAlert objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D/alert#GET)
     */
    SeeAlerts(id, serviceName) {
        let url = `/cloud/project/${serviceName}/alerting/${id}/alert`;
        return this.client.request('GET', url);
    }
    /**
     * Cloud alert on your consumption [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/alerting/%7Bid%7D/alert/%7BalertId%7D#GET)
     */
    /*
    GetThisObjectProperties(alertId: number, id: string, serviceName: string): Promise<CloudAlertingAlert> {
      let url = `/cloud/project/${serviceName}/alerting/${id}/alert/${alertId}`
  
      return this.client.request<CloudAlertingAlert>('GET', url)
    }
    */
    /**
     * bill operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/bill#GET)
     */
    GetYourProjectBills(from, serviceName, to) {
        let url = `/cloud/project/${serviceName}/bill?`;
        const queryParams = new query_params_1.default();
        if (from) {
            queryParams.set('from', from.toString());
        }
        if (to) {
            queryParams.set('to', to.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * cancel operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/cancel#POST)
     */
    CancelProjectCreation(serviceName) {
        let url = `/cloud/project/${serviceName}/cancel`;
        return this.client.request('POST', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/cloud/project/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/cloud/project/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * consumption operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/consumption#GET)
     */
    GetYourProjectConsumption(from, serviceName, to) {
        let url = `/cloud/project/${serviceName}/consumption?`;
        const queryParams = new query_params_1.default();
        if (from) {
            queryParams.set('from', from.toString());
        }
        if (to) {
            queryParams.set('to', to.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Manage registries [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry#GET)
     */
    ListRegistriesOfTheProject(serviceName) {
        let url = `/cloud/project/${serviceName}/containerRegistry`;
        return this.client.request('GET', url);
    }
    /**
     * Manage registries [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry#POST)
     */
    CreateANewRegistry(name, region, serviceName) {
        let url = `/cloud/project/${serviceName}/containerRegistry`;
        return this.client.request('POST', url, { name, region });
    }
    /**
     * Manage a Docker registry [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D#DELETE)
     */
    DeleteARegistry(registryID, serviceName) {
        let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Manage a Docker registry [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D#GET)
     */
    GetTheRegistryInformation(registryID, serviceName) {
        let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage a Docker registry [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D#PUT)
     */
    UpdateTheRegistry(name, registryID, serviceName) {
        let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}`;
        return this.client.request('PUT', url, { name });
    }
    /**
     * Manage users [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D/users#GET)
     */
    ListRegistryUser(registryID, serviceName) {
        let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}/users`;
        return this.client.request('GET', url);
    }
    /**
     * Manage users [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D/users#POST)
     */
    CreateANewRegistryUser(registryID, serviceName, email, login) {
        let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}/users`;
        return this.client.request('POST', url, { email, login });
    }
    /**
     * Manage users [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/containerRegistry/%7BregistryID%7D/users/%7BuserID%7D#DELETE)
     */
    DeleteARegistryUser(registryID, serviceName, userID) {
        let url = `/cloud/project/${serviceName}/containerRegistry/${registryID}/users/${userID}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the cloud.Credit objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/credit#GET)
     */
    GetYourCredit(serviceName) {
        let url = `/cloud/project/${serviceName}/credit`;
        return this.client.request('GET', url);
    }
    /**
     * List the cloud.Credit objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/credit#POST)
     */
    AddCreditToYourProject(code, serviceName) {
        let url = `/cloud/project/${serviceName}/credit`;
        return this.client.request('POST', url, { code });
    }
    /**
     * Cloud credit [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/credit/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<CloudCredit> {
      let url = `/cloud/project/${serviceName}/credit/${id}`
  
      return this.client.request<CloudCredit>('GET', url)
    }
    */
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/flavor#GET)
     */
    GetFlavors(serviceName, region) {
        let url = `/cloud/project/${serviceName}/flavor?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/flavor/%7BflavorId%7D#GET)
     */
    GetFlavor(flavorId, serviceName) {
        let url = `/cloud/project/${serviceName}/flavor/${flavorId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/forecast#GET)
     */
    GetYourConsumptionForecast(serviceName, toDate) {
        let url = `/cloud/project/${serviceName}/forecast?`;
        const queryParams = new query_params_1.default();
        if (toDate) {
            queryParams.set('toDate', toDate.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/image#GET)
     */
    GetImages(serviceName, flavorType, osType, region) {
        let url = `/cloud/project/${serviceName}/image?`;
        const queryParams = new query_params_1.default();
        if (flavorType) {
            queryParams.set('flavorType', flavorType);
        }
        if (osType) {
            queryParams.set('osType', osType.toString());
        }
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/image/%7BimageId%7D#GET)
     */
    GetImage(imageId, serviceName) {
        let url = `/cloud/project/${serviceName}/image/${imageId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance#GET)
     */
    GetInstances(serviceName, region) {
        let url = `/cloud/project/${serviceName}/instance?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance#POST)
     */
    CreateANewInstance(flavorId, name, region, serviceName, autobackup, groupId, imageId, monthlyBilling, networks, sshKeyId, userData, volumeId) {
        let url = `/cloud/project/${serviceName}/instance`;
        return this.client.request('POST', url, { flavorId, name, region, autobackup, groupId, imageId, monthlyBilling, networks, sshKeyId, userData, volumeId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D#DELETE)
     */
    DeleteAnInstance(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D#GET)
     */
    GetInstance(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D#PUT)
     */
    AlterAnInstance(instanceId, instanceName, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}`;
        return this.client.request('PUT', url, { instanceName });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/activeMonthlyBilling#POST)
     */
    ActivateMonthlyBillingOnInstance(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/activeMonthlyBilling`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/applicationAccess#POST)
     */
    ReturnInitialCredentialsOfApplicationsInstalledFromPublicImage(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/applicationAccess`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface#GET)
     */
    GetInterfaces(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface#POST)
     */
    CreateInterfaceOnAnInstanceAndAttachedItToANetwork(instanceId, networkId, serviceName, ip) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface`;
        return this.client.request('POST', url, { networkId, ip });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface/%7BinterfaceId%7D#DELETE)
     */
    DeleteAnInterface(instanceId, interfaceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface/${interfaceId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/interface/%7BinterfaceId%7D#GET)
     */
    GetInterface(instanceId, interfaceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/interface/${interfaceId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/monitoring#GET)
     */
    ReturnManyStatisticsAboutTheVirtualMachineForAGivenPeriod(instanceId, period, serviceName, type) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/monitoring?`;
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
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/reboot#POST)
     */
    RebootAnInstance(instanceId, serviceName, type) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/reboot`;
        return this.client.request('POST', url, { type });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/reinstall#POST)
     */
    ReinstallAnInstance(imageId, instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/reinstall`;
        return this.client.request('POST', url, { imageId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/rescueMode#POST)
     */
    EnableOrDisableRescueMode(instanceId, rescue, serviceName, imageId) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/rescueMode`;
        return this.client.request('POST', url, { rescue, imageId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/resize#POST)
     */
    MigrateYourInstanceToAnotherFlavor(flavorId, instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/resize`;
        return this.client.request('POST', url, { flavorId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/resume#POST)
     */
    ResumeASuspendedInstance(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/resume`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/snapshot#POST)
     */
    SnapshotAnInstance(instanceId, serviceName, snapshotName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/snapshot`;
        return this.client.request('POST', url, { snapshotName });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/start#POST)
     */
    StartAnInstance(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/start`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/stop#POST)
     */
    StopAnInstance(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/stop`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/vnc#POST)
     */
    GetVNCAccessToYourInstance(instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/${instanceId}/vnc`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/bulk#POST)
     */
    CreateMultipleInstances(flavorId, name, number, region, serviceName, autobackup, groupId, imageId, monthlyBilling, networks, sshKeyId, userData, volumeId) {
        let url = `/cloud/project/${serviceName}/instance/bulk`;
        return this.client.request('POST', url, { flavorId, name, number, region, autobackup, groupId, imageId, monthlyBilling, networks, sshKeyId, userData, volumeId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group#GET)
     */
    GetTheDetailOfAGroup(serviceName, region) {
        let url = `/cloud/project/${serviceName}/instance/group?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group#POST)
     */
    CreateAGroup(name, region, serviceName, type) {
        let url = `/cloud/project/${serviceName}/instance/group`;
        return this.client.request('POST', url, { name, region, type });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group/%7BgroupId%7D#DELETE)
     */
    DeleteAGroup(groupId, serviceName) {
        let url = `/cloud/project/${serviceName}/instance/group/${groupId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/group/%7BgroupId%7D#GET)
     */
    GetAllGroups(groupId, serviceName, region) {
        let url = `/cloud/project/${serviceName}/instance/group/${groupId}?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip#GET)
     */
    GetIps(serviceName) {
        let url = `/cloud/project/${serviceName}/ip`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip/failover#GET)
     */
    GetFailoverIps(serviceName) {
        let url = `/cloud/project/${serviceName}/ip/failover`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip/failover/%7Bid%7D#GET)
     */
    GetFailoverIp(id, serviceName) {
        let url = `/cloud/project/${serviceName}/ip/failover/${id}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/ip/failover/%7Bid%7D/attach#POST)
     */
    AttachFailoverIpToAnInstance(id, instanceId, serviceName) {
        let url = `/cloud/project/${serviceName}/ip/failover/${id}/attach`;
        return this.client.request('POST', url, { instanceId });
    }
    /**
     * Manage your clusters [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube#GET)
     */
    ListYourManagedKubernetesClusters(serviceName) {
        let url = `/cloud/project/${serviceName}/kube`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your clusters [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube#POST)
     */
    CreateANewManagedKubernetesCluster(region, serviceName, name, version) {
        let url = `/cloud/project/${serviceName}/kube`;
        return this.client.request('POST', url, { region, name, version });
    }
    /**
     * Manage your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D#GET)
     */
    GetInformationAboutYourManagedKubernetesCluster(kubeId, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D#PUT)
     */
    UpdateInformationAboutYourManagedKubernetesCluster(kubeId, name, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}`;
        return this.client.request('PUT', url, { name });
    }
    /**
     * Manage your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D#DELETE)
     */
    DeleteYourManagedKubernetesCluster(kubeId, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List all flavors available [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/flavors#GET)
     */
    ListAllFlavorsAvailable(kubeId, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/flavors`;
        return this.client.request('GET', url);
    }
    /**
     * Get your cluster configuration [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/kubeconfig#POST)
     */
    GenerateKubeconfigFile(kubeId, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/kubeconfig`;
        return this.client.request('POST', url);
    }
    /**
     * Manage your nodes [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node#GET)
     */
    ListYourNodes(kubeId, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/node`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your nodes [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node#POST)
     */
    DeployANodeForYourCluster(flavorName, kubeId, serviceName, name) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/node`;
        return this.client.request('POST', url, { flavorName, name });
    }
    /**
     * Manage a single node on your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node/%7BnodeId%7D#DELETE)
     */
    DeleteANodeOnYourCluster(kubeId, nodeId, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/node/${nodeId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Manage a single node on your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/node/%7BnodeId%7D#GET)
     */
    GetInformationOnASpecificNodeOnYourCluster(kubeId, nodeId, serviceName) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/node/${nodeId}`;
        return this.client.request('GET', url);
    }
    /**
     * Reset your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/reset#POST)
     */
    ResetCluster_AllKubernetesDataWillBeErasedPodsServicesConfigurationEtcNodesWillBeEitherDeletedOrReinstalled(kubeId, serviceName, version, workerNodesPolicy) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/reset`;
        return this.client.request('POST', url, { version, workerNodesPolicy });
    }
    /**
     * Update cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/update#POST)
     */
    ForceClusterAndNodeUpdateToTheLatestPatchWithinMinorVersionOrNextMinorVersion(kubeId, serviceName, strategy) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/update`;
        return this.client.request('POST', url, { strategy });
    }
    /**
     * Manage the update policy of your cluster [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/%7BkubeId%7D/updatePolicy#PUT)
     */
    ChangeTheUpdatePolicyOfYourCluster(kubeId, serviceName, updatePolicy) {
        let url = `/cloud/project/${serviceName}/kube/${kubeId}/updatePolicy`;
        return this.client.request('PUT', url, { updatePolicy });
    }
    /**
     * List Kubernetes available regions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/kube/regions#GET)
     */
    ListKubernetesAvailableRegions(serviceName) {
        let url = `/cloud/project/${serviceName}/kube/regions`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/migration#GET)
     */
    GetPlannedMigrations(serviceName) {
        let url = `/cloud/project/${serviceName}/migration`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/migration/%7BmigrationId%7D#GET)
     */
    GetPlannedMigration(migrationId, serviceName) {
        let url = `/cloud/project/${serviceName}/migration/${migrationId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/migration/%7BmigrationId%7D#PUT)
     */
    UpdatePlannedMigration(date, migrationId, serviceName) {
        let url = `/cloud/project/${serviceName}/migration/${migrationId}`;
        return this.client.request('PUT', url, { date });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private#GET)
     */
    GetPrivateNetworks(serviceName) {
        let url = `/cloud/project/${serviceName}/network/private`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private#POST)
     */
    CreateANewNetwork(name, serviceName, regions, vlanId) {
        let url = `/cloud/project/${serviceName}/network/private`;
        return this.client.request('POST', url, { name, regions, vlanId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D#DELETE)
     */
    DeletePrivateNetwork(networkId, serviceName) {
        let url = `/cloud/project/${serviceName}/network/private/${networkId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D#GET)
     */
    GetPrivateNetwork(networkId, serviceName) {
        let url = `/cloud/project/${serviceName}/network/private/${networkId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D#PUT)
     */
    RenamePrivateNetwork(name, networkId, serviceName) {
        let url = `/cloud/project/${serviceName}/network/private/${networkId}`;
        return this.client.request('PUT', url, { name });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/region#POST)
     */
    ActivatePrivateNetworkInANewRegion(networkId, region, serviceName) {
        let url = `/cloud/project/${serviceName}/network/private/${networkId}/region`;
        return this.client.request('POST', url, { region });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/subnet#GET)
     */
    GetNetworkSubnets(networkId, serviceName) {
        let url = `/cloud/project/${serviceName}/network/private/${networkId}/subnet`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/subnet#POST)
     */
    CreateANewNetworkSubnet(dhcp, end, network, networkId, noGateway, region, serviceName, start) {
        let url = `/cloud/project/${serviceName}/network/private/${networkId}/subnet`;
        return this.client.request('POST', url, { dhcp, end, network, noGateway, region, start });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/private/%7BnetworkId%7D/subnet/%7BsubnetId%7D#DELETE)
     */
    DeleteANetworkSubnet(networkId, serviceName, subnetId) {
        let url = `/cloud/project/${serviceName}/network/private/${networkId}/subnet/${subnetId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/network/public#GET)
     */
    GetPublicNetworks(serviceName) {
        let url = `/cloud/project/${serviceName}/network/public`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/openstackClient#POST)
     */
    GetOVHPlaygroundSessionToUseTheOpenstackTerminal(serviceName) {
        let url = `/cloud/project/${serviceName}/openstackClient`;
        return this.client.request('POST', url);
    }
    /**
     * Manage the operations on your Cloud Project [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/operation#GET)
     */
    ListYourOperations(serviceName) {
        let url = `/cloud/project/${serviceName}/operation`;
        return this.client.request('GET', url);
    }
    /**
     * Manage one of your operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/operation/%7BoperationId%7D#GET)
     */
    GetInformationAboutOneOperation(operationId, serviceName) {
        let url = `/cloud/project/${serviceName}/operation/${operationId}`;
        return this.client.request('GET', url);
    }
    /**
     * List your quota [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/quota#GET)
     */
    ListQuotas(serviceName) {
        let url = `/cloud/project/${serviceName}/quota`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your regions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region#GET)
     */
    ListYourRegions(serviceName) {
        let url = `/cloud/project/${serviceName}/region`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your regions [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region#POST)
     */
    RequestAccessToARegion(region, serviceName) {
        let url = `/cloud/project/${serviceName}/region`;
        return this.client.request('POST', url, { region });
    }
    /**
     * Manage one of your region [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D#GET)
     */
    GetInformationAboutYourRegion(regionName, serviceName) {
        let url = `/cloud/project/${serviceName}/region/${regionName}`;
        return this.client.request('GET', url);
    }
    /**
     * Consult quotas [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/quota#GET)
     */
    /*
    ListQuotas(regionName: string, serviceName: string): Promise<CloudquotaQuotas> {
      let url = `/cloud/project/${serviceName}/region/${regionName}/quota`
  
      return this.client.request<CloudquotaQuotas>('GET', url)
    }
    */
    /**
     * Consult quotas [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/quota#POST)
     */
    ChangeProjectQuotasOnRegion(name, regionName, serviceName) {
        let url = `/cloud/project/${serviceName}/region/${regionName}/quota`;
        return this.client.request('POST', url, { name });
    }
    /**
     * Get allowed quotas [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/quota/allowed#GET)
     */
    GetAllowedQuotasOnRegion(regionName, serviceName) {
        let url = `/cloud/project/${serviceName}/region/${regionName}/quota/allowed`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your automated backups [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup#GET)
     */
    ListYourAutomatedBackups(regionName, serviceName) {
        let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your automated backups [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup#POST)
     */
    CreateANewAutomatedBackup(cron, instanceId, name, regionName, rotation, serviceName, maxExecutionCount) {
        let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup`;
        return this.client.request('POST', url, { cron, instanceId, name, rotation, maxExecutionCount });
    }
    /**
     * Manage a backup workflow process [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup/%7BbackupWorkflowId%7D#DELETE)
     */
    DeleteABackupWorkflowProcess(backupWorkflowId, regionName, serviceName) {
        let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup/${backupWorkflowId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Manage a backup workflow process [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/region/%7BregionName%7D/workflow/backup/%7BbackupWorkflowId%7D#GET)
     */
    GetDetailsAboutABackupWorkflowProcess(backupWorkflowId, regionName, serviceName) {
        let url = `/cloud/project/${serviceName}/region/${regionName}/workflow/backup/${backupWorkflowId}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage the regions you can add on your project [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/regionAvailable#GET)
     */
    ListTheRegionsOnWhichYouCanAskAnAccessTo(serviceName) {
        let url = `/cloud/project/${serviceName}/regionAvailable`;
        return this.client.request('GET', url);
    }
    /**
     * retain operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/retain#POST)
     */
    DoNotExpireTheProjectAndRetainItYouWillHaveToPayForTheResourcesYouWillUseAfterUsingThisCall(serviceName) {
        let url = `/cloud/project/${serviceName}/retain`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/role#GET)
     */
    GetAllRoles(serviceName) {
        let url = `/cloud/project/${serviceName}/role`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/cloud/project/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/cloud/project/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/snapshot#GET)
     */
    GetSnapshots(serviceName, flavorType, region) {
        let url = `/cloud/project/${serviceName}/snapshot?`;
        const queryParams = new query_params_1.default();
        if (flavorType) {
            queryParams.set('flavorType', flavorType);
        }
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/snapshot/%7BsnapshotId%7D#DELETE)
     */
    DeleteASnapshot(serviceName, snapshotId) {
        let url = `/cloud/project/${serviceName}/snapshot/${snapshotId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/snapshot/%7BsnapshotId%7D#GET)
     */
    GetSnapshotDetails(serviceName, snapshotId) {
        let url = `/cloud/project/${serviceName}/snapshot/${snapshotId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey#GET)
     */
    GetSSHKeys(serviceName, region) {
        let url = `/cloud/project/${serviceName}/sshkey?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey#POST)
     */
    CreateSSHKey(name, publicKey, serviceName, region) {
        let url = `/cloud/project/${serviceName}/sshkey`;
        return this.client.request('POST', url, { name, publicKey, region });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey/%7BkeyId%7D#DELETE)
     */
    DeleteSSHKey(keyId, serviceName) {
        let url = `/cloud/project/${serviceName}/sshkey/${keyId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/sshkey/%7BkeyId%7D#GET)
     */
    GetSSHKey(keyId, serviceName) {
        let url = `/cloud/project/${serviceName}/sshkey/${keyId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/stack#GET)
     */
    GetStacks(serviceName) {
        let url = `/cloud/project/${serviceName}/stack`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/stack/%7BstackId%7D#GET)
     */
    GetStack(serviceName, stackId) {
        let url = `/cloud/project/${serviceName}/stack/${stackId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/stack/%7BstackId%7D/client#POST)
     */
    GetOVHPlaygroundSessionWithAStackInstalledToUseTheOpenstackTerminal(serviceName, stackId) {
        let url = `/cloud/project/${serviceName}/stack/${stackId}/client`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage#GET)
     */
    GetStorageContainers(serviceName) {
        let url = `/cloud/project/${serviceName}/storage`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage#POST)
     */
    CreateContainer(archive, containerName, region, serviceName) {
        let url = `/cloud/project/${serviceName}/storage`;
        return this.client.request('POST', url, { archive, containerName, region });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D#DELETE)
     */
    DeleteContainer(containerId, serviceName) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D#GET)
     */
    GetStorageContainer(containerId, serviceName, noObjects) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}?`;
        const queryParams = new query_params_1.default();
        if (noObjects) {
            queryParams.set('noObjects', noObjects.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D#PUT)
     */
    UpdateYourStorageContainer(containerId, serviceName, containerType) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}`;
        return this.client.request('PUT', url, { containerType });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/cors#DELETE)
     */
    DeleteCORSSupportOnYourContainer(containerId, origin, serviceName) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}/cors?`;
        const queryParams = new query_params_1.default();
        if (origin) {
            queryParams.set('origin', origin);
        }
        return this.client.request('DELETE', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/cors#POST)
     */
    AddCORSSupportOnYourContainer(containerId, origin, serviceName) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}/cors`;
        return this.client.request('POST', url, { origin });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/publicUrl#POST)
     */
    GetAPublicTemporaryURLToAccessToOneOfYourObject(containerId, expirationDate, objectName, serviceName) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}/publicUrl`;
        return this.client.request('POST', url, { expirationDate, objectName });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/static#POST)
     */
    DeployYourContainerFilesAsAStaticWebSite(containerId, serviceName) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}/static`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/%7BcontainerId%7D/user#POST)
     */
    CreateOpenstackUserWithOnlyAccessToThisContainer(containerId, right, serviceName, description) {
        let url = `/cloud/project/${serviceName}/storage/${containerId}/user`;
        return this.client.request('POST', url, { right, description });
    }
    /**
     * Missing description [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/access#GET)
     */
    AccessToStorageAPI(serviceName) {
        let url = `/cloud/project/${serviceName}/storage/access`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/storage/access#POST)
     */
    /*
    AccessToStorageAPI(serviceName: string): Promise<CloudstorageContainerAccess> {
      let url = `/cloud/project/${serviceName}/storage/access`
  
      return this.client.request<CloudstorageContainerAccess>('POST', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/cloud/project/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * unleash operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/unleash#POST)
     */
    RequestMoreQuotaOnYourCloudProject(serviceName) {
        let url = `/cloud/project/${serviceName}/unleash`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/current#GET)
     */
    GetCurrentUsage(serviceName) {
        let url = `/cloud/project/${serviceName}/usage/current`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/forecast#GET)
     */
    GetUsageForecast(serviceName) {
        let url = `/cloud/project/${serviceName}/usage/forecast`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/history#GET)
     */
    UsageInformationOnYourProject(serviceName, from, to) {
        let url = `/cloud/project/${serviceName}/usage/history?`;
        const queryParams = new query_params_1.default();
        if (from) {
            queryParams.set('from', from.toString());
        }
        if (to) {
            queryParams.set('to', to.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/usage/history/%7BusageId%7D#GET)
     */
    UsageInformationDetails(serviceName, usageId) {
        let url = `/cloud/project/${serviceName}/usage/history/${usageId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user#GET)
     */
    GetAllUsers(serviceName) {
        let url = `/cloud/project/${serviceName}/user`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user#POST)
     */
    CreateUser(serviceName, description, role, roles) {
        let url = `/cloud/project/${serviceName}/user`;
        return this.client.request('POST', url, { description, role, roles });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D#DELETE)
     */
    DeleteUser(serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D#GET)
     */
    GetUserDetails(serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/openrc#GET)
     */
    GetRCFileOfOpenStack(region, serviceName, userId, version) {
        let url = `/cloud/project/${serviceName}/user/${userId}/openrc?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        if (version) {
            queryParams.set('version', version.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/rclone#GET)
     */
    GetRcloneConfigurationFile(region, serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/rclone?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/regeneratePassword#POST)
     */
    RegenerateUserPassword(serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/regeneratePassword`;
        return this.client.request('POST', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role#GET)
     */
    GetUserRoles(serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/role`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role#POST)
     */
    AddARoleToAUser(roleId, serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/role`;
        return this.client.request('POST', url, { roleId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role#PUT)
     */
    UpdateRolesOfAUser(rolesIds, serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/role`;
        return this.client.request('PUT', url, { rolesIds });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role/%7BroleId%7D#DELETE)
     */
    RemoveRoleForAUser(roleId, serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/role/${roleId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/role/%7BroleId%7D#GET)
     */
    GetRoleDetail(roleId, serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/role/${roleId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/user/%7BuserId%7D/token#POST)
     */
    GetTokenForUser(password, serviceName, userId) {
        let url = `/cloud/project/${serviceName}/user/${userId}/token`;
        return this.client.request('POST', url, { password });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume#GET)
     */
    GetVolumes(serviceName, region) {
        let url = `/cloud/project/${serviceName}/volume?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume#POST)
     */
    CreateAVolume(region, serviceName, size, type, description, imageId, name, snapshotId) {
        let url = `/cloud/project/${serviceName}/volume`;
        return this.client.request('POST', url, { region, size, type, description, imageId, name, snapshotId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D#DELETE)
     */
    DeleteAVolume(serviceName, volumeId) {
        let url = `/cloud/project/${serviceName}/volume/${volumeId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D#GET)
     */
    GetVolumeDetails(serviceName, volumeId) {
        let url = `/cloud/project/${serviceName}/volume/${volumeId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D#PUT)
     */
    UpdateAVolume(serviceName, volumeId, description, name) {
        let url = `/cloud/project/${serviceName}/volume/${volumeId}`;
        return this.client.request('PUT', url, { description, name });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/attach#POST)
     */
    AttachAVolumeOnAnInstance(instanceId, serviceName, volumeId) {
        let url = `/cloud/project/${serviceName}/volume/${volumeId}/attach`;
        return this.client.request('POST', url, { instanceId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/detach#POST)
     */
    DetachAVolumeFromAnInstance(instanceId, serviceName, volumeId) {
        let url = `/cloud/project/${serviceName}/volume/${volumeId}/detach`;
        return this.client.request('POST', url, { instanceId });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/snapshot#POST)
     */
    SnapshotAVolume(serviceName, volumeId, description, name) {
        let url = `/cloud/project/${serviceName}/volume/${volumeId}/snapshot`;
        return this.client.request('POST', url, { description, name });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/%7BvolumeId%7D/upsize#POST)
     */
    ExtendAVolume(serviceName, size, volumeId) {
        let url = `/cloud/project/${serviceName}/volume/${volumeId}/upsize`;
        return this.client.request('POST', url, { size });
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/snapshot#GET)
     */
    GetVolumeSnapshots(serviceName, region) {
        let url = `/cloud/project/${serviceName}/volume/snapshot?`;
        const queryParams = new query_params_1.default();
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/snapshot/%7BsnapshotId%7D#DELETE)
     */
    DeleteAVolumeSnapshot(serviceName, snapshotId) {
        let url = `/cloud/project/${serviceName}/volume/snapshot/${snapshotId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/volume/snapshot/%7BsnapshotId%7D#GET)
     */
    GetVolumeSnapshotDetails(serviceName, snapshotId) {
        let url = `/cloud/project/${serviceName}/volume/snapshot/${snapshotId}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage the vRack on your Cloud Project [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/vrack#GET)
     */
    GetTheLinkedVRackOnYourProject(serviceName) {
        let url = `/cloud/project/${serviceName}/vrack`;
        return this.client.request('GET', url);
    }
    /**
     * Manage the vRack on your Cloud Project [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/project/%7BserviceName%7D/vrack#POST)
     */
    OrderAndAttachANewVRackOnYourProject(serviceName) {
        let url = `/cloud/project/${serviceName}/vrack`;
        return this.client.request('POST', url);
    }
    /**
     * Get services prices for a subsidiary [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cloud/subsidiaryPrice#GET)
     */
    GetServicesPricesForASubsidiary(ovhSubsidiary, flavorId, region) {
        let url = `/cloud/subsidiaryPrice?`;
        const queryParams = new query_params_1.default();
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        if (flavorId) {
            queryParams.set('flavorId', flavorId);
        }
        if (region) {
            queryParams.set('region', region);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.Cloud = Cloud;
//# sourceMappingURL=cloud.js.map