"use strict";
// GENERATED SDK for saas/csp2 API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Period of time used to determine license statistics
 */
var MsServicesLicensePeriod;
(function (MsServicesLicensePeriod) {
    MsServicesLicensePeriod["LASTMONTH"] = "lastMonth";
    MsServicesLicensePeriod["LASTQUARTER"] = "lastQuarter";
    MsServicesLicensePeriod["LASTWEEK"] = "lastWeek";
    MsServicesLicensePeriod["LASTYEAR"] = "lastYear";
})(MsServicesLicensePeriod = exports.MsServicesLicensePeriod || (exports.MsServicesLicensePeriod = {}));
/*
 * Office license's type
 */
var Saascsp2LicenseType;
(function (Saascsp2LicenseType) {
    Saascsp2LicenseType["ADDON"] = "ADDON";
    Saascsp2LicenseType["NON_SPECIFIC"] = "NON-SPECIFIC";
})(Saascsp2LicenseType = exports.Saascsp2LicenseType || (exports.Saascsp2LicenseType = {}));
/*
 * Office tenant state
 */
var Saascsp2ServiceState;
(function (Saascsp2ServiceState) {
    Saascsp2ServiceState["CREATING"] = "creating";
    Saascsp2ServiceState["INMAINTENANCE"] = "inMaintenance";
    Saascsp2ServiceState["OK"] = "ok";
    Saascsp2ServiceState["SUSPENDED"] = "suspended";
})(Saascsp2ServiceState = exports.Saascsp2ServiceState || (exports.Saascsp2ServiceState = {}));
/*
 * Supported services of Office365
 */
var Saascsp2SupportedService;
(function (Saascsp2SupportedService) {
    Saascsp2SupportedService["EMAIL"] = "Email";
    Saascsp2SupportedService["INTUNE"] = "Intune";
    Saascsp2SupportedService["OFFICECOMMUNICATIONSONLINE"] = "OfficeCommunicationsOnline";
})(Saascsp2SupportedService = exports.Saascsp2SupportedService || (exports.Saascsp2SupportedService = {}));
/*
 * Office CSP2 task status
 */
var Saascsp2TaskStatus;
(function (Saascsp2TaskStatus) {
    Saascsp2TaskStatus["CANCELLED"] = "cancelled";
    Saascsp2TaskStatus["DOING"] = "doing";
    Saascsp2TaskStatus["DONE"] = "done";
    Saascsp2TaskStatus["ERROR"] = "error";
    Saascsp2TaskStatus["TODO"] = "todo";
})(Saascsp2TaskStatus = exports.Saascsp2TaskStatus || (exports.Saascsp2TaskStatus = {}));
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
class SaasCsp2 {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the CSP2 service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2#GET)
     */
    ListAvailableServices() {
        let url = `/saas/csp2`;
        return this.client.request('GET', url);
    }
    /**
     * Office tenant [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/saas/csp2/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Office tenant [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/saas/csp2/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * billingPeriodPeaks operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/billingPeriodPeaks#GET)
     */
    GetTheCurrenBillingPeriodUsagePeakForEachSubscription(serviceName) {
        let url = `/saas/csp2/${serviceName}/billingPeriodPeaks`;
        return this.client.request('GET', url);
    }
    /**
     * changeAdministratorPassword operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/changeAdministratorPassword#POST)
     */
    ChangesTheTenantAdministratorPassword(newPassword, serviceName) {
        let url = `/saas/csp2/${serviceName}/changeAdministratorPassword`;
        return this.client.request('POST', url, { newPassword });
    }
    /**
     * configureDomain operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/configureDomain#POST)
     */
    AutomaticallySetsUpAnOVHhostedDomainOfYoursForYourOffice365ServicesNoteThisRequiresTheDomainToNotHaveAnyInterferingMXSRVTXTRecords(domain, serviceName, supportedServices) {
        let url = `/saas/csp2/${serviceName}/configureDomain`;
        return this.client.request('POST', url, { domain, supportedServices });
    }
    /**
     * List the saas.csp2.OfficeLicence objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/orderableLicenses#GET)
     */
    LicensesAvailableForOrder(serviceName) {
        let url = `/saas/csp2/${serviceName}/orderableLicenses`;
        return this.client.request('GET', url);
    }
    /**
     * Office licence [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/orderableLicenses/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Saascsp2OfficeLicence> {
      let url = `/saas/csp2/${serviceName}/orderableLicenses/${id}`
  
      return this.client.request<Saascsp2OfficeLicence>('GET', url)
    }
    */
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/saas/csp2/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/saas/csp2/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the saas.csp2.OfficeSubscription objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription#GET)
     */
    SubscriptionsAssociatedToThisOfficeTenant(serviceName) {
        let url = `/saas/csp2/${serviceName}/subscription`;
        return this.client.request('GET', url);
    }
    /**
     * List the saas.csp2.OfficeSubscription objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription#POST)
     */
    AddASubscriptionToThisTenant(licenseId, quantity, serviceName) {
        let url = `/saas/csp2/${serviceName}/subscription`;
        return this.client.request('POST', url, { licenseId, quantity });
    }
    /**
     * Office subscription [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Saascsp2OfficeSubscription> {
      let url = `/saas/csp2/${serviceName}/subscription/${id}`
  
      return this.client.request<Saascsp2OfficeSubscription>('GET', url)
    }
    */
    /**
     * Office subscription [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D#DELETE)
     */
    DeleteASubscriptionFromThisTenant(id, serviceName) {
        let url = `/saas/csp2/${serviceName}/subscription/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * addonsSubscriptionIds operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/addonsSubscriptionIds#GET)
     */
    AddonSubscriptionsAssociatedToThisOfficeSubscription(id, serviceName) {
        let url = `/saas/csp2/${serviceName}/subscription/${id}/addonsSubscriptionIds`;
        return this.client.request('GET', url);
    }
    /**
     * availableAddonLicenses operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/availableAddonLicenses#GET)
     */
    GivesAListOfLicensesIdsThatCanBeOrderedAsAnAddonForThisSubscription(id, serviceName) {
        let url = `/saas/csp2/${serviceName}/subscription/${id}/availableAddonLicenses`;
        return this.client.request('GET', url);
    }
    /**
     * changeQuantity operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/changeQuantity#POST)
     */
    ChangeTheQuantityOfSeatsInTheSubscription(id, quantity, serviceName) {
        let url = `/saas/csp2/${serviceName}/subscription/${id}/changeQuantity`;
        return this.client.request('POST', url, { quantity });
    }
    /**
     * orderAddon operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/subscription/%7Bid%7D/orderAddon#POST)
     */
    CreatesANewSubscriptionAsAnAddonForThisSubscription(id, licenseId, quantity, serviceName) {
        let url = `/saas/csp2/${serviceName}/subscription/${id}/orderAddon`;
        return this.client.request('POST', url, { licenseId, quantity });
    }
    /**
     * List the saas.csp2.OfficeTask objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/task#GET)
     */
    PendingTasksOfThisTenant(serviceName) {
        let url = `/saas/csp2/${serviceName}/task`;
        return this.client.request('GET', url);
    }
    /**
     * Office task [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Saascsp2OfficeTask> {
      let url = `/saas/csp2/${serviceName}/task/${id}`
  
      return this.client.request<Saascsp2OfficeTask>('GET', url)
    }
    */
    /**
     * usageStatistics operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/saas/csp2/%7BserviceName%7D/usageStatistics#GET)
     */
    GetTheUsageStatisticsOverTheChosePeriod(serviceName, timePeriod) {
        let url = `/saas/csp2/${serviceName}/usageStatistics?`;
        const queryParams = new query_params_1.default();
        if (timePeriod) {
            queryParams.set('timePeriod', timePeriod.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.SaasCsp2 = SaasCsp2;
//# sourceMappingURL=saas.csp2.js.map