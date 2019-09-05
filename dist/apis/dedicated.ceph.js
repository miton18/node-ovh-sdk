"use strict";
// GENERATED SDK for dedicated/ceph API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Family of IP ACL
 */
var DedicatedcephaclGetresponsefamily;
(function (DedicatedcephaclGetresponsefamily) {
    DedicatedcephaclGetresponsefamily["IPV4"] = "IPV4";
    DedicatedcephaclGetresponsefamily["IPV6"] = "IPV6";
})(DedicatedcephaclGetresponsefamily = exports.DedicatedcephaclGetresponsefamily || (exports.DedicatedcephaclGetresponsefamily = {}));
/*
 * Family of IP ACL
 */
var DedicatedcephaclListresponsefamily;
(function (DedicatedcephaclListresponsefamily) {
    DedicatedcephaclListresponsefamily["IPV4"] = "IPV4";
    DedicatedcephaclListresponsefamily["IPV6"] = "IPV6";
})(DedicatedcephaclListresponsefamily = exports.DedicatedcephaclListresponsefamily || (exports.DedicatedcephaclListresponsefamily = {}));
/*
 * Tunables of cluster
 */
var DedicatedcephclusterGetresponsecrushTunables;
(function (DedicatedcephclusterGetresponsecrushTunables) {
    DedicatedcephclusterGetresponsecrushTunables["OPTIMAL"] = "OPTIMAL";
    DedicatedcephclusterGetresponsecrushTunables["DEFAULT"] = "DEFAULT";
    DedicatedcephclusterGetresponsecrushTunables["LEGACY"] = "LEGACY";
    DedicatedcephclusterGetresponsecrushTunables["BOBTAIL"] = "BOBTAIL";
    DedicatedcephclusterGetresponsecrushTunables["ARGONAUT"] = "ARGONAUT";
    DedicatedcephclusterGetresponsecrushTunables["FIREFLY"] = "FIREFLY";
    DedicatedcephclusterGetresponsecrushTunables["HAMMER"] = "HAMMER";
    DedicatedcephclusterGetresponsecrushTunables["JEWEL"] = "JEWEL";
})(DedicatedcephclusterGetresponsecrushTunables = exports.DedicatedcephclusterGetresponsecrushTunables || (exports.DedicatedcephclusterGetresponsecrushTunables = {}));
/*
 * State of cluster
 */
var DedicatedcephclusterGetresponsestate;
(function (DedicatedcephclusterGetresponsestate) {
    DedicatedcephclusterGetresponsestate["ACTIVE"] = "ACTIVE";
    DedicatedcephclusterGetresponsestate["SUSPENDED"] = "SUSPENDED";
})(DedicatedcephclusterGetresponsestate = exports.DedicatedcephclusterGetresponsestate || (exports.DedicatedcephclusterGetresponsestate = {}));
/*
 * Status of cluster
 */
var DedicatedcephclusterGetresponsestatus;
(function (DedicatedcephclusterGetresponsestatus) {
    DedicatedcephclusterGetresponsestatus["CREATING"] = "CREATING";
    DedicatedcephclusterGetresponsestatus["INSTALLED"] = "INSTALLED";
    DedicatedcephclusterGetresponsestatus["DELETING"] = "DELETING";
    DedicatedcephclusterGetresponsestatus["DELETED"] = "DELETED";
    DedicatedcephclusterGetresponsestatus["TASK_IN_PROGRESS"] = "TASK_IN_PROGRESS";
})(DedicatedcephclusterGetresponsestatus = exports.DedicatedcephclusterGetresponsestatus || (exports.DedicatedcephclusterGetresponsestatus = {}));
/*
 * Tunables of cluster
 */
var DedicatedcephclusterUpdatecrushTunables;
(function (DedicatedcephclusterUpdatecrushTunables) {
    DedicatedcephclusterUpdatecrushTunables["OPTIMAL"] = "OPTIMAL";
    DedicatedcephclusterUpdatecrushTunables["DEFAULT"] = "DEFAULT";
    DedicatedcephclusterUpdatecrushTunables["LEGACY"] = "LEGACY";
    DedicatedcephclusterUpdatecrushTunables["BOBTAIL"] = "BOBTAIL";
    DedicatedcephclusterUpdatecrushTunables["ARGONAUT"] = "ARGONAUT";
    DedicatedcephclusterUpdatecrushTunables["FIREFLY"] = "FIREFLY";
    DedicatedcephclusterUpdatecrushTunables["HAMMER"] = "HAMMER";
    DedicatedcephclusterUpdatecrushTunables["JEWEL"] = "JEWEL";
})(DedicatedcephclusterUpdatecrushTunables = exports.DedicatedcephclusterUpdatecrushTunables || (exports.DedicatedcephclusterUpdatecrushTunables = {}));
/*
 * Type of pool
 */
var DedicatedcephpoolGetresponsepoolType;
(function (DedicatedcephpoolGetresponsepoolType) {
    DedicatedcephpoolGetresponsepoolType["REPLICATED"] = "REPLICATED";
    DedicatedcephpoolGetresponsepoolType["ERASURE_CODED"] = "ERASURE_CODED";
})(DedicatedcephpoolGetresponsepoolType = exports.DedicatedcephpoolGetresponsepoolType || (exports.DedicatedcephpoolGetresponsepoolType = {}));
/*
 * Type of pool
 */
var DedicatedcephpoolListresponsepoolType;
(function (DedicatedcephpoolListresponsepoolType) {
    DedicatedcephpoolListresponsepoolType["REPLICATED"] = "REPLICATED";
    DedicatedcephpoolListresponsepoolType["ERASURE_CODED"] = "ERASURE_CODED";
})(DedicatedcephpoolListresponsepoolType = exports.DedicatedcephpoolListresponsepoolType || (exports.DedicatedcephpoolListresponsepoolType = {}));
/*
 * State of task
 */
var DedicatedcephtaskGetresponsestate;
(function (DedicatedcephtaskGetresponsestate) {
    DedicatedcephtaskGetresponsestate["IN_PROGRESS"] = "IN PROGRESS";
    DedicatedcephtaskGetresponsestate["DONE"] = "DONE";
    DedicatedcephtaskGetresponsestate["FAILED"] = "FAILED";
})(DedicatedcephtaskGetresponsestate = exports.DedicatedcephtaskGetresponsestate || (exports.DedicatedcephtaskGetresponsestate = {}));
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
class DedicatedCeph {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the CEPH service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph#GET)
     */
    ListAvailableServices() {
        let url = `/dedicated/ceph`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.clusterGet [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D#GET)
     */
    GetClusterDetails(serviceName) {
        let url = `/dedicated/ceph/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.clusterGet [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D#PUT)
     */
    UpdateClusterDetails(crushTunables, label, serviceName) {
        let url = `/dedicated/ceph/${serviceName}`;
        return this.client.request('PUT', url, { crushTunables, label });
    }
    /**
     * dedicated.ceph.aclCreate [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl#POST)
     */
    CreateOneOrMoreNewIPACLs(aclList, serviceName) {
        let url = `/dedicated/ceph/${serviceName}/acl`;
        return this.client.request('POST', url, { aclList });
    }
    /**
     * dedicated.ceph.aclCreate [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl#GET)
     */
    GetListOfAllIPACLsInACluster(serviceName) {
        let url = `/dedicated/ceph/${serviceName}/acl`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.aclDeleteSingle [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl/%7BaclId%7D#DELETE)
     */
    DeleteSingleIPACL(aclId, serviceName) {
        let url = `/dedicated/ceph/${serviceName}/acl/${aclId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * dedicated.ceph.aclDeleteSingle [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/acl/%7BaclId%7D#GET)
     */
    GetDetailsAboutIPACL(aclId, serviceName) {
        let url = `/dedicated/ceph/${serviceName}/acl/${aclId}`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/dedicated/ceph/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/dedicated/ceph/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * dedicated.ceph.clusterHealth [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/health#GET)
     */
    GetClusterHealth(serviceName) {
        let url = `/dedicated/ceph/${serviceName}/health`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.poolCreate [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool#POST)
     */
    CreateANewCephPool(poolName, serviceName) {
        let url = `/dedicated/ceph/${serviceName}/pool`;
        return this.client.request('POST', url, { poolName });
    }
    /**
     * dedicated.ceph.poolCreate [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool#GET)
     */
    GetListOfAllPoolsInACluster(serviceName) {
        let url = `/dedicated/ceph/${serviceName}/pool`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.poolDelete [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool/%7BpoolName%7D#DELETE)
     */
    DeleteASingleCephPool(poolName, serviceName) {
        let url = `/dedicated/ceph/${serviceName}/pool/${poolName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * dedicated.ceph.poolDelete [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/pool/%7BpoolName%7D#GET)
     */
    GetDetailsAboutAnExistingCephPool(poolName, serviceName) {
        let url = `/dedicated/ceph/${serviceName}/pool/${poolName}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/dedicated/ceph/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/dedicated/ceph/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * dedicated.ceph.taskList [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/task#GET)
     */
    ListTasksInProgress(serviceName) {
        let url = `/dedicated/ceph/${serviceName}/task`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.taskGet [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    GetTaskDetails(serviceName, taskId) {
        let url = `/dedicated/ceph/${serviceName}/task/${taskId}`;
        return this.client.request('GET', url);
    }
    /**
     * Terminate your service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/dedicated/ceph/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * dedicated.ceph.userCreate [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user#POST)
     */
    CreateANewCephUser(serviceName, userName) {
        let url = `/dedicated/ceph/${serviceName}/user`;
        return this.client.request('POST', url, { userName });
    }
    /**
     * dedicated.ceph.userCreate [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user#GET)
     */
    GetListOfAllUsersInACluster(serviceName) {
        let url = `/dedicated/ceph/${serviceName}/user`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.userDelete [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D#DELETE)
     */
    DeleteAnExistingSingleCephUser(serviceName, userName) {
        let url = `/dedicated/ceph/${serviceName}/user/${userName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * dedicated.ceph.userDelete [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D#GET)
     */
    GetDetailsAboutACephUser(serviceName, userName) {
        let url = `/dedicated/ceph/${serviceName}/user/${userName}`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.userPoolPermList [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool#GET)
     */
    ListUserpoolPermissions(serviceName, userName) {
        let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool`;
        return this.client.request('GET', url);
    }
    /**
     * dedicated.ceph.userPoolPermList [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool#PUT)
     */
    UpdateUserpoolPermissionForSinglePool(classRead, classWrite, execute, poolName, read, serviceName, userName, write) {
        let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool`;
        return this.client.request('PUT', url, { classRead, classWrite, execute, poolName, read, write });
    }
    /**
     * dedicated.ceph.userPoolPermList [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool#POST)
     */
    CreateNewUserpoolPermissionsAllOldPermissionsWillBeCleared(serviceName, userName, permissions) {
        let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool`;
        return this.client.request('POST', url, { permissions });
    }
    /**
     * dedicated.ceph.userPoolPermDelete [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/ceph/%7BserviceName%7D/user/%7BuserName%7D/pool/%7BpoolName%7D#DELETE)
     */
    ClearUserpoolPermissionForSinglePool(poolName, serviceName, userName) {
        let url = `/dedicated/ceph/${serviceName}/user/${userName}/pool/${poolName}`;
        return this.client.request('DELETE', url);
    }
}
exports.DedicatedCeph = DedicatedCeph;
//# sourceMappingURL=dedicated.ceph.js.map