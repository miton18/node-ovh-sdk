"use strict";
// GENERATED SDK for caas/containers API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * The state of the slave
 */
var Dockerslavestatus;
(function (Dockerslavestatus) {
    Dockerslavestatus["BLOCKED"] = "blocked";
    Dockerslavestatus["CREATED"] = "created";
    Dockerslavestatus["CREATING"] = "creating";
})(Dockerslavestatus = exports.Dockerslavestatus || (exports.Dockerslavestatus = {}));
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
class CaasContainers {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the DOCKER service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers#GET)
     */
    ListAvailableServices() {
        let url = `/caas/containers`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D#GET)
     */
    InspectTheArgumentStack(serviceName) {
        let url = `/caas/containers/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/availableFrameworks#GET)
     */
    ListAllTheInstallableMesosFrameworks(serviceName) {
        let url = `/caas/containers/${serviceName}/availableFrameworks`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/caas/containers/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks#GET)
     */
    ListTheFrameworksInstalledOnTheArgumentStack(serviceName) {
        let url = `/caas/containers/${serviceName}/frameworks`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D#GET)
     */
    InspectTheStackFramework(frameworkId, serviceName) {
        let url = `/caas/containers/${serviceName}/frameworks/${frameworkId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D/apps#GET)
     */
    ListAppsInTheFramework(frameworkId, serviceName) {
        let url = `/caas/containers/${serviceName}/frameworks/${frameworkId}/apps`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D/password#PUT)
     */
    UpdateTheFrameworkAccessPassword(frameworkId, serviceName, payload) {
        let url = `/caas/containers/${serviceName}/frameworks/${frameworkId}/password`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials#POST)
     */
    AssociateTheStackWithSomeCredentialsToAnAuthenticatedRegistry(serviceName, payload) {
        let url = `/caas/containers/${serviceName}/registry/credentials`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials#GET)
     */
    ListTheRegistryCredentialsAssociatedToTheStack(serviceName) {
        let url = `/caas/containers/${serviceName}/registry/credentials`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#PUT)
     */
    UpdateTheRegistryCredentials(credentialsId, serviceName, payload) {
        let url = `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#GET)
     */
    InspectTheImageRegistryCredentialsAssociatedToTheStack(credentialsId, serviceName) {
        let url = `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#DELETE)
     */
    DeleteTheRegistryCredentials(credentialsId, serviceName) {
        let url = `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/caas/containers/${serviceName}/serviceInfos`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/caas/containers/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/slaves#GET)
     */
    ListTheIdOfTheRegisteredSlaveInstances(serviceName) {
        let url = `/caas/containers/${serviceName}/slaves`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/slaves/%7BslaveId%7D#GET)
     */
    InspectTheArgumentUserSlaveInstance(serviceName, slaveId) {
        let url = `/caas/containers/${serviceName}/slaves/${slaveId}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#PUT)
     */
    UpdateTheCustomSSLCertificateAndPrivate(serviceName, payload) {
        let url = `/caas/containers/${serviceName}/ssl`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#DELETE)
     */
    DeleteTheCustomSSLCertificateAndPrivateKeyAssociatedToTheStack(serviceName) {
        let url = `/caas/containers/${serviceName}/ssl`;
        return this.client.request('DELETE', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#GET)
     */
    InspectTheCustomSSLCertificateAndPrivate(serviceName) {
        let url = `/caas/containers/${serviceName}/ssl`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/slaves/flavors#GET)
     */
    ListTheCloudFlavorsAvailableForTheDockerPaaSSlaves() {
        let url = `/caas/containers/slaves/flavors`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/slaves/flavors/%7BflavorId%7D#GET)
     */
    InspectTheArgumentSlaveFlavor(flavorId) {
        let url = `/caas/containers/slaves/flavors/${flavorId}`;
        return this.client.request('GET', url);
    }
}
exports.CaasContainers = CaasContainers;
//# sourceMappingURL=caas.containers.js.map