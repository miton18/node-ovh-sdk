"use strict";
// GENERATED SDK for license/office API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Office domain state
 */
var LicenseofficeDomainState;
(function (LicenseofficeDomainState) {
    LicenseofficeDomainState["OK"] = "ok";
    LicenseofficeDomainState["UNVERIFIED"] = "unverified";
})(LicenseofficeDomainState = exports.LicenseofficeDomainState || (exports.LicenseofficeDomainState = {}));
/*
 * Office Licence
 */
var LicenseofficeLicence;
(function (LicenseofficeLicence) {
    LicenseofficeLicence["OFFICEBUSINESS"] = "officeBusiness";
    LicenseofficeLicence["OFFICEPROPLUS"] = "officeProPlus";
})(LicenseofficeLicence = exports.LicenseofficeLicence || (exports.LicenseofficeLicence = {}));
/*
 * Office tenant state
 */
var LicenseofficeServiceState;
(function (LicenseofficeServiceState) {
    LicenseofficeServiceState["CREATING"] = "creating";
    LicenseofficeServiceState["INMAINTENANCE"] = "inMaintenance";
    LicenseofficeServiceState["OK"] = "ok";
    LicenseofficeServiceState["SUSPENDED"] = "suspended";
})(LicenseofficeServiceState = exports.LicenseofficeServiceState || (exports.LicenseofficeServiceState = {}));
/*
 * Type of service
 */
var LicenseofficeServiceType;
(function (LicenseofficeServiceType) {
    LicenseofficeServiceType["PAYASYOUGO"] = "payAsYouGo";
    LicenseofficeServiceType["PREPAID"] = "prepaid";
})(LicenseofficeServiceType = exports.LicenseofficeServiceType || (exports.LicenseofficeServiceType = {}));
/*
 * Exchange task status
 */
var LicenseofficeTaskStatus;
(function (LicenseofficeTaskStatus) {
    LicenseofficeTaskStatus["CANCELLED"] = "cancelled";
    LicenseofficeTaskStatus["DOING"] = "doing";
    LicenseofficeTaskStatus["DONE"] = "done";
    LicenseofficeTaskStatus["ERROR"] = "error";
    LicenseofficeTaskStatus["TODO"] = "todo";
})(LicenseofficeTaskStatus = exports.LicenseofficeTaskStatus || (exports.LicenseofficeTaskStatus = {}));
/*
 * Office user  state
 */
var LicenseofficeUserState;
(function (LicenseofficeUserState) {
    LicenseofficeUserState["CREATING"] = "creating";
    LicenseofficeUserState["DELETING"] = "deleting";
    LicenseofficeUserState["OK"] = "ok";
})(LicenseofficeUserState = exports.LicenseofficeUserState || (exports.LicenseofficeUserState = {}));
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
class LicenseOffice {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the OFFICE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office#GET)
     */
    ListAvailableServices() {
        let url = `/license/office`;
        return this.client.request('GET', url);
    }
    /**
     * Office tenant [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/license/office/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Office tenant [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/license/office/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the license.office.OfficeDomain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/domain#GET)
     */
    DomainAssociatedToThisOfficeTenant(serviceName) {
        let url = `/license/office/${serviceName}/domain`;
        return this.client.request('GET', url);
    }
    /**
     * Office domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/domain/%7BdomainName%7D#GET)
     */
    /*
    GetThisObjectProperties(domainName: string, serviceName: string): Promise<LicenseofficeOfficeDomain> {
      let url = `/license/office/${serviceName}/domain/${domainName}`
  
      return this.client.request<LicenseofficeOfficeDomain>('GET', url)
    }
    */
    /**
     * List the license.office.OfficeTask objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/pendingTask#GET)
     */
    TasksAssociatedToThisOfficeTenant(serviceName) {
        let url = `/license/office/${serviceName}/pendingTask`;
        return this.client.request('GET', url);
    }
    /**
     * Office task [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/pendingTask/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<LicenseofficeOfficeTask> {
      let url = `/license/office/${serviceName}/pendingTask/${id}`
  
      return this.client.request<LicenseofficeOfficeTask>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/license/office/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/license/office/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * usageStatistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/usageStatistics#GET)
     */
    ShowsTheSubscriptionsUsageStatisticsForTheGivenTimePeriod(from, serviceName, to) {
        let url = `/license/office/${serviceName}/usageStatistics?`;
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
     * List the license.office.OfficeUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user#GET)
     */
    AccountsAssociatedToThisOfficeTenant(serviceName, activationEmail, firstName, lastName, licences) {
        let url = `/license/office/${serviceName}/user?`;
        const queryParams = new query_params_1.default();
        if (activationEmail) {
            queryParams.set('activationEmail', activationEmail);
        }
        if (firstName) {
            queryParams.set('firstName', firstName);
        }
        if (lastName) {
            queryParams.set('lastName', lastName);
        }
        if (licences) {
            queryParams.set('licences', licences.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.office.OfficeUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user#POST)
     */
    CreateNewOfficeUser(domain, licence, login, serviceName, firstName, lastName) {
        let url = `/license/office/${serviceName}/user`;
        return this.client.request('POST', url, { domain, licence, login, firstName, lastName });
    }
    /**
     * Office user [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D#GET)
     */
    /*
    GetThisObjectProperties(activationEmail: string, serviceName: string): Promise<LicenseofficeOfficeUser> {
      let url = `/license/office/${serviceName}/user/${activationEmail}`
  
      return this.client.request<LicenseofficeOfficeUser>('GET', url)
    }
    */
    /**
     * Office user [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D#PUT)
     */
    /*
    AlterThisObjectProperties(activationEmail: string, serviceName: string, payload: LicenseofficeOfficeUser): Promise<void> {
      let url = `/license/office/${serviceName}/user/${activationEmail}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Office user [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D#DELETE)
     */
    DeleteExistingOfficeUser(activationEmail, serviceName) {
        let url = `/license/office/${serviceName}/user/${activationEmail}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/office/%7BserviceName%7D/user/%7BactivationEmail%7D/changePassword#POST)
     */
    ChangeOrResetUserPassword(activationEmail, serviceName, shouldSendMail, notifyEmail, password) {
        let url = `/license/office/${serviceName}/user/${activationEmail}/changePassword`;
        return this.client.request('POST', url, { shouldSendMail, notifyEmail, password });
    }
}
exports.LicenseOffice = LicenseOffice;
//# sourceMappingURL=license.office.js.map