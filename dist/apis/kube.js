"use strict";
// GENERATED SDK for kube API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Enum values for Status
 */
var KubeClusterStatus;
(function (KubeClusterStatus) {
    KubeClusterStatus["INSTALLING"] = "INSTALLING";
    KubeClusterStatus["UPDATING"] = "UPDATING";
    KubeClusterStatus["RESETTING"] = "RESETTING";
    KubeClusterStatus["SUSPENDING"] = "SUSPENDING";
    KubeClusterStatus["REOPENING"] = "REOPENING";
    KubeClusterStatus["DELETING"] = "DELETING";
    KubeClusterStatus["SUSPENDED"] = "SUSPENDED";
    KubeClusterStatus["ERROR"] = "ERROR";
    KubeClusterStatus["USER_ERROR"] = "USER_ERROR";
    KubeClusterStatus["USER_QUOTA_ERROR"] = "USER_QUOTA_ERROR";
    KubeClusterStatus["READY"] = "READY";
})(KubeClusterStatus = exports.KubeClusterStatus || (exports.KubeClusterStatus = {}));
/*
 * Enum values for Status
 */
var KubeNodeStatus;
(function (KubeNodeStatus) {
    KubeNodeStatus["INSTALLING"] = "INSTALLING";
    KubeNodeStatus["UPDATING"] = "UPDATING";
    KubeNodeStatus["RESETTING"] = "RESETTING";
    KubeNodeStatus["SUSPENDING"] = "SUSPENDING";
    KubeNodeStatus["REOPENING"] = "REOPENING";
    KubeNodeStatus["DELETING"] = "DELETING";
    KubeNodeStatus["SUSPENDED"] = "SUSPENDED";
    KubeNodeStatus["ERROR"] = "ERROR";
    KubeNodeStatus["USER_ERROR"] = "USER_ERROR";
    KubeNodeStatus["USER_QUOTA_ERROR"] = "USER_QUOTA_ERROR";
    KubeNodeStatus["USER_NODE_NOT_FOUND_ERROR"] = "USER_NODE_NOT_FOUND_ERROR";
    KubeNodeStatus["USER_NODE_SUSPENDED_SERVICE"] = "USER_NODE_SUSPENDED_SERVICE";
    KubeNodeStatus["READY"] = "READY";
})(KubeNodeStatus = exports.KubeNodeStatus || (exports.KubeNodeStatus = {}));
/*
 * Enum values for worker nodes reset policy
 */
var KubeResetWorkerNodesPolicy;
(function (KubeResetWorkerNodesPolicy) {
    KubeResetWorkerNodesPolicy["REINSTALL"] = "reinstall";
    KubeResetWorkerNodesPolicy["DELETE"] = "delete";
})(KubeResetWorkerNodesPolicy = exports.KubeResetWorkerNodesPolicy || (exports.KubeResetWorkerNodesPolicy = {}));
/*
 * Enum values for UpdatePolicy
 */
var KubeUpdatePolicy;
(function (KubeUpdatePolicy) {
    KubeUpdatePolicy["ALWAYS_UPDATE"] = "ALWAYS_UPDATE";
    KubeUpdatePolicy["MINIMAL_DOWNTIME"] = "MINIMAL_DOWNTIME";
    KubeUpdatePolicy["NEVER_UPDATE"] = "NEVER_UPDATE";
})(KubeUpdatePolicy = exports.KubeUpdatePolicy || (exports.KubeUpdatePolicy = {}));
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
class Kube {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the KUBERNETES service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube#GET)
     */
    ListAvailableServices() {
        let url = `/kube`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D#GET)
     */
    GetInformationAboutYourManagedKubernetesCluster(serviceName) {
        let url = `/kube/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D#PUT)
     */
    UpdateInformationAboutYourManagedKubernetesCluster(name, serviceName) {
        let url = `/kube/${serviceName}`;
        return this.client.request('PUT', url, { name });
    }
    /**
     * Change the contacts of this service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/kube/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/kube/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * Get your cluster configuration [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/kubeconfig#GET)
     */
    GetKubeconfigFile(serviceName) {
        let url = `/kube/${serviceName}/kubeconfig`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your Public Cloud cluster nodes [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node#GET)
     */
    ListYourNodesOnPublicCloud(serviceName) {
        let url = `/kube/${serviceName}/publiccloud/node`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your Public Cloud cluster nodes [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node#POST)
     */
    DeployANodeForYourClusterOnPublicCloud(flavorName, serviceName, name) {
        let url = `/kube/${serviceName}/publiccloud/node`;
        return this.client.request('POST', url, { flavorName, name });
    }
    /**
     * Manage a single node on your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node/%7BnodeId%7D#DELETE)
     */
    DeleteANodeOnYourCluster(nodeId, serviceName) {
        let url = `/kube/${serviceName}/publiccloud/node/${nodeId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Manage a single node on your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/node/%7BnodeId%7D#GET)
     */
    GetInformationOnASpecificNodeOnYourCluster(nodeId, serviceName) {
        let url = `/kube/${serviceName}/publiccloud/node/${nodeId}`;
        return this.client.request('GET', url);
    }
    /**
     * Manage your Public Cloud projects linked to your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/publiccloud/project#GET)
     */
    GetYourPublicCloudProjectLinkedToYourCluster(serviceName) {
        let url = `/kube/${serviceName}/publiccloud/project`;
        return this.client.request('GET', url);
    }
    /**
     * Reset your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/reset#POST)
     */
    ResetCluster_AllKubernetesDataWillBeErasedPodsServicesConfigurationEtcNodesWillBeEitherDeletedOrReinstalled(serviceName, version, workerNodesPolicy) {
        let url = `/kube/${serviceName}/reset`;
        return this.client.request('POST', url, { version, workerNodesPolicy });
    }
    /**
     * Details about a Service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/kube/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/kube/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Terminate your service [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/kube/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Update cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/update#POST)
     */
    UpdateClusterToTheLatestPatchVersion(serviceName) {
        let url = `/kube/${serviceName}/update`;
        return this.client.request('POST', url);
    }
    /**
     * Manage the update policy of your cluster [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/kube/%7BserviceName%7D/updatePolicy#PUT)
     */
    ChangeTheUpdatePolicyOfYourCluster(serviceName, updatePolicy) {
        let url = `/kube/${serviceName}/updatePolicy`;
        return this.client.request('PUT', url, { updatePolicy });
    }
}
exports.Kube = Kube;
//# sourceMappingURL=kube.js.map