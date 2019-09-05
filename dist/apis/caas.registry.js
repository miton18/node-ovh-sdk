"use strict";
// GENERATED SDK for caas/registry API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * The status of the image
 */
var Registryimagestatus;
(function (Registryimagestatus) {
    Registryimagestatus["DELETING"] = "DELETING";
    Registryimagestatus["DEPLOYING"] = "DEPLOYING";
    Registryimagestatus["ERROR"] = "ERROR";
    Registryimagestatus["OK"] = "OK";
})(Registryimagestatus = exports.Registryimagestatus || (exports.Registryimagestatus = {}));
/*
 * The status of the namespace
 */
var Registrynamespacestatus;
(function (Registrynamespacestatus) {
    Registrynamespacestatus["DELETING"] = "DELETING";
    Registrynamespacestatus["DEPLOYING"] = "DEPLOYING";
    Registrynamespacestatus["ERROR"] = "ERROR";
    Registrynamespacestatus["OK"] = "OK";
})(Registrynamespacestatus = exports.Registrynamespacestatus || (exports.Registrynamespacestatus = {}));
/*
 * The status of the permission
 */
var Registrypermissionstatus;
(function (Registrypermissionstatus) {
    Registrypermissionstatus["DELETING"] = "DELETING";
    Registrypermissionstatus["DEPLOYING"] = "DEPLOYING";
    Registrypermissionstatus["ERROR"] = "ERROR";
    Registrypermissionstatus["OK"] = "OK";
})(Registrypermissionstatus = exports.Registrypermissionstatus || (exports.Registrypermissionstatus = {}));
/*
 * The status of the user
 */
var Registryuserstatus;
(function (Registryuserstatus) {
    Registryuserstatus["DELETING"] = "DELETING";
    Registryuserstatus["DEPLOYING"] = "DEPLOYING";
    Registryuserstatus["ERROR"] = "ERROR";
    Registryuserstatus["OK"] = "OK";
})(Registryuserstatus = exports.Registryuserstatus || (exports.Registryuserstatus = {}));
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
class CaasRegistry {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the DOCKER service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry#GET)
     */
    ListAvailableServices() {
        let url = `/caas/registry`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D#GET)
     */
    InspectService(serviceName) {
        let url = `/caas/registry/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/caas/registry/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces#POST)
     */
    CreateNamespace(serviceName, payload) {
        let url = `/caas/registry/${serviceName}/namespaces`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces#GET)
     */
    ListNamespace(serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D#DELETE)
     */
    DeleteNamespace(namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D#GET)
     */
    InspectNamespace(namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images#GET)
     */
    ListAllImagesInNamespace(namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#DELETE)
     */
    DeleteImage(imageId, namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#GET)
     */
    InspectImage(imageId, namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#PUT)
     */
    UpdateImage(imageId, namespaceId, serviceName, payload) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions#POST)
     */
    CreateImagePermissions(imageId, namespaceId, serviceName, payload) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions#GET)
     */
    ListImagePermissions(imageId, namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions/%7BpermissionId%7D#DELETE)
     */
    DeleteImagePermissions(imageId, namespaceId, permissionId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions/${permissionId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions/%7BpermissionId%7D#GET)
     */
    InspectImagePermissions(imageId, namespaceId, permissionId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions/${permissionId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/tags#GET)
     */
    ListImageTags(imageId, namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/tags`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/tags/%7BtagId%7D#GET)
     */
    InspectImageTag(imageId, namespaceId, serviceName, tagId) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/tags/${tagId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions#POST)
     */
    CreateNamespacePermissions(namespaceId, serviceName, payload) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions#GET)
     */
    ListNamespacePermissions(namespaceId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions/%7BpermissionId%7D#DELETE)
     */
    DeleteNamespacePermissions(namespaceId, permissionId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions/${permissionId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions/%7BpermissionId%7D#GET)
     */
    InspectPermission(namespaceId, permissionId, serviceName) {
        let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions/${permissionId}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/caas/registry/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/caas/registry/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users#POST)
     */
    CreateUser(serviceName, payload) {
        let url = `/caas/registry/${serviceName}/users`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users#GET)
     */
    ListUsers(serviceName) {
        let url = `/caas/registry/${serviceName}/users`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D#DELETE)
     */
    DeleteUser(serviceName, userId) {
        let url = `/caas/registry/${serviceName}/users/${userId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D#GET)
     */
    InspectUser(serviceName, userId) {
        let url = `/caas/registry/${serviceName}/users/${userId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D/changePassword#POST)
     */
    UpdateUserPassword(serviceName, userId) {
        let url = `/caas/registry/${serviceName}/users/${userId}/changePassword`;
        return this.client.request('POST', url);
    }
}
exports.CaasRegistry = CaasRegistry;
//# sourceMappingURL=caas.registry.js.map