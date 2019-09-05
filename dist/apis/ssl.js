"use strict";
// GENERATED SDK for ssl API
Object.defineProperty(exports, "__esModule", { value: true });
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
 * All authority a SSL certificate can be issued from
 */
var SslCertificateAuthority;
(function (SslCertificateAuthority) {
    SslCertificateAuthority["COMODO"] = "comodo";
    SslCertificateAuthority["SECTIGO"] = "sectigo";
})(SslCertificateAuthority = exports.SslCertificateAuthority || (exports.SslCertificateAuthority = {}));
/*
 * All status a SSL certificate can be in
 */
var SslCertificateStatus;
(function (SslCertificateStatus) {
    SslCertificateStatus["CREATING"] = "creating";
    SslCertificateStatus["ERROR"] = "error";
    SslCertificateStatus["OK"] = "ok";
    SslCertificateStatus["VALIDATING"] = "validating";
})(SslCertificateStatus = exports.SslCertificateStatus || (exports.SslCertificateStatus = {}));
/*
 * All type a SSL certificate can be
 */
var SslCertificateType;
(function (SslCertificateType) {
    SslCertificateType["DV"] = "DV";
    SslCertificateType["EV"] = "EV";
    SslCertificateType["OV"] = "OV";
})(SslCertificateType = exports.SslCertificateType || (exports.SslCertificateType = {}));
/*
 * All functions a SSL operation can handle
 */
var SslOperationFunction;
(function (SslOperationFunction) {
    SslOperationFunction["CREATECERTIFICATE"] = "createCertificate";
})(SslOperationFunction = exports.SslOperationFunction || (exports.SslOperationFunction = {}));
/*
 * All status a SSL operation can be in
 */
var SslOperationStatus;
(function (SslOperationStatus) {
    SslOperationStatus["CANCELLED"] = "cancelled";
    SslOperationStatus["DOING"] = "doing";
    SslOperationStatus["DONE"] = "done";
    SslOperationStatus["ERROR"] = "error";
    SslOperationStatus["TODO"] = "todo";
})(SslOperationStatus = exports.SslOperationStatus || (exports.SslOperationStatus = {}));
class Ssl {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the SSL service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl#GET)
     */
    ListAvailableServices() {
        let url = `/ssl`;
        return this.client.request('GET', url);
    }
    /**
     * Certificate of an SSL customer [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/ssl/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/ssl/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/ssl/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the ssl.Operation objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/tasks#GET)
     */
    TasksAssociatedToThisSsl(serviceName) {
        let url = `/ssl/${serviceName}/tasks`;
        return this.client.request('GET', url);
    }
}
exports.Ssl = Ssl;
//# sourceMappingURL=ssl.js.map