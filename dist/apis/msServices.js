"use strict";
// GENERATED SDK for msServices API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Exchange account licence
 */
var MsServicesExchangeLicence;
(function (MsServicesExchangeLicence) {
    MsServicesExchangeLicence["BASIC"] = "basic";
    MsServicesExchangeLicence["ENTERPRISE"] = "enterprise";
    MsServicesExchangeLicence["STANDARD"] = "standard";
})(MsServicesExchangeLicence = exports.MsServicesExchangeLicence || (exports.MsServicesExchangeLicence = {}));
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
 * Mailing filter options availlable
 */
var MsServicesMailingFilter;
(function (MsServicesMailingFilter) {
    MsServicesMailingFilter["VADERETRO"] = "vaderetro";
})(MsServicesMailingFilter = exports.MsServicesMailingFilter || (exports.MsServicesMailingFilter = {}));
/*
 * Current object state
 */
var MsServicesObjectState;
(function (MsServicesObjectState) {
    MsServicesObjectState["CREATING"] = "creating";
    MsServicesObjectState["DELETING"] = "deleting";
    MsServicesObjectState["MODIFYING"] = "modifying";
    MsServicesObjectState["OK"] = "ok";
    MsServicesObjectState["REOPENING"] = "reopening";
    MsServicesObjectState["SUSPENDED"] = "suspended";
    MsServicesObjectState["SUSPENDING"] = "suspending";
})(MsServicesObjectState = exports.MsServicesObjectState || (exports.MsServicesObjectState = {}));
/*
 * Renew period
 */
var MsServicesRenewPeriod;
(function (MsServicesRenewPeriod) {
    MsServicesRenewPeriod["MONTHLY"] = "monthly";
    MsServicesRenewPeriod["YEARLY"] = "yearly";
})(MsServicesRenewPeriod = exports.MsServicesRenewPeriod || (exports.MsServicesRenewPeriod = {}));
/*
 * Service Offer name
 */
var MsServicesServiceOffer;
(function (MsServicesServiceOffer) {
    MsServicesServiceOffer["DEDICATED"] = "dedicated";
    MsServicesServiceOffer["DEDICATEDCLUSTER"] = "dedicatedCluster";
    MsServicesServiceOffer["HOSTED"] = "hosted";
    MsServicesServiceOffer["PROVIDER"] = "provider";
})(MsServicesServiceOffer = exports.MsServicesServiceOffer || (exports.MsServicesServiceOffer = {}));
/*
 * Service State
 */
var MsServicesServiceState;
(function (MsServicesServiceState) {
    MsServicesServiceState["CREATING"] = "creating";
    MsServicesServiceState["DELETING"] = "deleting";
    MsServicesServiceState["INMAINTENANCE"] = "inMaintenance";
    MsServicesServiceState["OK"] = "ok";
    MsServicesServiceState["REOPENING"] = "reopening";
    MsServicesServiceState["SUSPENDED"] = "suspended";
    MsServicesServiceState["SUSPENDING"] = "suspending";
})(MsServicesServiceState = exports.MsServicesServiceState || (exports.MsServicesServiceState = {}));
/*
 * Account access rights to the service
 */
var MsServicesSharepointAccountAccessRights;
(function (MsServicesSharepointAccountAccessRights) {
    MsServicesSharepointAccountAccessRights["ADMINISTRATOR"] = "administrator";
    MsServicesSharepointAccountAccessRights["USER"] = "user";
})(MsServicesSharepointAccountAccessRights = exports.MsServicesSharepointAccountAccessRights || (exports.MsServicesSharepointAccountAccessRights = {}));
/*
 * Sharepoint account license
 */
var MsServicesSharepointLicense;
(function (MsServicesSharepointLicense) {
    MsServicesSharepointLicense["FOUNDATION"] = "foundation";
    MsServicesSharepointLicense["STANDARD"] = "standard";
})(MsServicesSharepointLicense = exports.MsServicesSharepointLicense || (exports.MsServicesSharepointLicense = {}));
/*
 * Sharepoint service offer name
 */
var MsServicesSharepointServiceOffer;
(function (MsServicesSharepointServiceOffer) {
    MsServicesSharepointServiceOffer["HOSTED"] = "hosted";
    MsServicesSharepointServiceOffer["PROVIDER"] = "provider";
})(MsServicesSharepointServiceOffer = exports.MsServicesSharepointServiceOffer || (exports.MsServicesSharepointServiceOffer = {}));
/*
 * Sync account license
 */
var MsServicesSyncLicense;
(function (MsServicesSyncLicense) {
    MsServicesSyncLicense["STANDARD"] = "standard";
    MsServicesSyncLicense["STANDARDFREE"] = "standardFree";
})(MsServicesSyncLicense = exports.MsServicesSyncLicense || (exports.MsServicesSyncLicense = {}));
/*
 * function enumeration for Active Directory task
 */
var MsServicesTaskFunction;
(function (MsServicesTaskFunction) {
    MsServicesTaskFunction["ACTIVATEADSYNC"] = "activateADSync";
    MsServicesTaskFunction["ACTIVATESHAREPOINT"] = "activateSharepoint";
    MsServicesTaskFunction["ADDADACCOUNT"] = "addADAccount";
    MsServicesTaskFunction["ADDADOU"] = "addADOU";
    MsServicesTaskFunction["ADDADSYNCACCOUNT"] = "addADSyncAccount";
    MsServicesTaskFunction["ADDADUPNSUFFIX"] = "addADUPNSuffix";
    MsServicesTaskFunction["ALTERMFAONALLUSERS"] = "alterMfaOnAllUsers";
    MsServicesTaskFunction["CHANGEADPASSWORD"] = "changeADPassword";
    MsServicesTaskFunction["CHANGEADSYNCPASSWORD"] = "changeADSyncPassword";
    MsServicesTaskFunction["CONFIGUREEXCHANGEOWAMFA"] = "configureExchangeOwaMfa";
    MsServicesTaskFunction["DEACTIVATEADSYNC"] = "deactivateADSync";
    MsServicesTaskFunction["DELADOU"] = "delADOU";
    MsServicesTaskFunction["DELETEADACCOUNT"] = "deleteADAccount";
    MsServicesTaskFunction["DELETEADSYNCACCOUNT"] = "deleteADSyncAccount";
    MsServicesTaskFunction["DELETEADUPNSUFFIX"] = "deleteADUPNSuffix";
    MsServicesTaskFunction["DISABLEADACCOUNTMFA"] = "disableADAccountMfa";
    MsServicesTaskFunction["DISABLEADACCOUNTMFATEMPORARY"] = "disableADAccountMfaTemporary";
    MsServicesTaskFunction["ENABLEADACCOUNTMFA"] = "enableADAccountMfa";
    MsServicesTaskFunction["ENABLEADSYNCACCOUNT"] = "enableADSyncAccount";
    MsServicesTaskFunction["GENERATEADSYNCCLIENTURL"] = "generateADSyncClientUrl";
    MsServicesTaskFunction["RESETADACCOUNTMFA"] = "resetADAccountMfa";
    MsServicesTaskFunction["SETADACCOUNT"] = "setADAccount";
    MsServicesTaskFunction["SETPASSWORDPOLICY"] = "setPasswordPolicy";
})(MsServicesTaskFunction = exports.MsServicesTaskFunction || (exports.MsServicesTaskFunction = {}));
/*
 * ActiveDirectory task status
 */
var MsServicesTaskStatus;
(function (MsServicesTaskStatus) {
    MsServicesTaskStatus["CANCELLED"] = "cancelled";
    MsServicesTaskStatus["DOING"] = "doing";
    MsServicesTaskStatus["DONE"] = "done";
    MsServicesTaskStatus["ERROR"] = "error";
    MsServicesTaskStatus["TODO"] = "todo";
})(MsServicesTaskStatus = exports.MsServicesTaskStatus || (exports.MsServicesTaskStatus = {}));
/*
 * Active Directory UPN Suffix State
 */
var MsServicesUPNState;
(function (MsServicesUPNState) {
    MsServicesUPNState["CREATING"] = "creating";
    MsServicesUPNState["DELETING"] = "deleting";
    MsServicesUPNState["OK"] = "ok";
})(MsServicesUPNState = exports.MsServicesUPNState || (exports.MsServicesUPNState = {}));
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
class MsServices {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the MSSERVICES service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices#GET)
     */
    ListAvailableServices() {
        let url = `/msServices`;
        return this.client.request('GET', url);
    }
    /**
     * Active Directory organizational unit [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/msServices/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Active Directory organizational unit [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/msServices/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the msServices.Account objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account#GET)
     */
    AccountsAssociatedToThisActiveDirectoryService(serviceName, id, userPrincipalName) {
        let url = `/msServices/${serviceName}/account?`;
        const queryParams = new query_params_1.default();
        if (id) {
            queryParams.set('id', id.toString());
        }
        if (userPrincipalName) {
            queryParams.set('userPrincipalName', userPrincipalName);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Active Directory Account [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesAccount> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}`
  
      return this.client.request<MsServicesAccount>('GET', url)
    }
    */
    /**
     * Active Directory Account [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, userPrincipalName: string, payload: MsServicesAccount): Promise<void> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * changePassword operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/changePassword#POST)
     */
    ChangeAccountPassword(password, serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * Exchange mailbox information [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/exchange#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesExchangeInformation> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}/exchange`
  
      return this.client.request<MsServicesExchangeInformation>('GET', url)
    }
    */
    /**
     * Exchange mailbox information [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/exchange#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, userPrincipalName: string, payload: MsServicesExchangeInformation): Promise<void> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}/exchange`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * configure operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/exchange/configure#POST)
     */
    ConfigureMailboxToBeOperational(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/exchange/configure`;
        return this.client.request('POST', url);
    }
    /**
     * Multi Factor Authentication informations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesMfaInformation> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa`
  
      return this.client.request<MsServicesMfaInformation>('GET', url)
    }
    */
    /**
     * Multi Factor Authentication informations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa#POST)
     */
    CreateMultiFactorAuthenticationForThisAccount(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa`;
        return this.client.request('POST', url);
    }
    /**
     * Multi Factor Authentication informations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa#DELETE)
     */
    DeleteMultiFactorAuthenticationFeatureForThisAccount(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa`;
        return this.client.request('DELETE', url);
    }
    /**
     * disable operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa/disable#POST)
     */
    DisableMultiFactorAuthenticationForAPeriodOfTime(period, serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa/disable`;
        return this.client.request('POST', url, { period });
    }
    /**
     * enable operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa/enable#POST)
     */
    EnableMfaEnabledByDefaultWhenCreated(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa/enable`;
        return this.client.request('POST', url);
    }
    /**
     * reset operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/mfa/reset#POST)
     */
    ResetMultiFactorAuthenticationStatusForThisAccount(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/mfa/reset`;
        return this.client.request('POST', url);
    }
    /**
     * Sharepoint account information [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesSharepointInformation> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint`
  
      return this.client.request<MsServicesSharepointInformation>('GET', url)
    }
    */
    /**
     * Sharepoint account information [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, userPrincipalName: string, payload: MsServicesSharepointInformation): Promise<void> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * clearSpace operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint/clearSpace#POST)
     */
    OndemandMySiteClearance(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/clearSpace`;
        return this.client.request('POST', url);
    }
    /**
     * configure operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sharepoint/configure#POST)
     */
    ConfigureSharepointAccountToBeOperational(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/sharepoint/configure`;
        return this.client.request('POST', url);
    }
    /**
     * Sync account information [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, userPrincipalName: string): Promise<MsServicesSyncInformation> {
      let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync`
  
      return this.client.request<MsServicesSyncInformation>('GET', url)
    }
    */
    /**
     * Sync account information [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync#POST)
     */
    CreateNewSyncAccount(license, serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync`;
        return this.client.request('POST', url, { license });
    }
    /**
     * Sync account information [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync#DELETE)
     */
    DeleteSyncAccount(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync`;
        return this.client.request('DELETE', url);
    }
    /**
     * configure operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/account/%7BuserPrincipalName%7D/sync/configure#POST)
     */
    ConfigureSyncAccountToBeOperational(serviceName, userPrincipalName) {
        let url = `/msServices/${serviceName}/account/${userPrincipalName}/sync/configure`;
        return this.client.request('POST', url);
    }
    /**
     * createMfaOnAllUsers operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/createMfaOnAllUsers#POST)
     */
    CreateMfaOnAllAccounts(serviceName) {
        let url = `/msServices/${serviceName}/createMfaOnAllUsers`;
        return this.client.request('POST', url);
    }
    /**
     * Exchange service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<MsServicesExchangeService> {
      let url = `/msServices/${serviceName}/exchange`
  
      return this.client.request<MsServicesExchangeService>('GET', url)
    }
    */
    /**
     * Exchange service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: MsServicesExchangeService): Promise<void> {
      let url = `/msServices/${serviceName}/exchange`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * billingMigrated operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange/billingMigrated#GET)
     */
    DetectsBillingTransitionStatusForTheService(serviceName) {
        let url = `/msServices/${serviceName}/exchange/billingMigrated`;
        return this.client.request('GET', url);
    }
    /**
     * List the msServices.exchangeTask objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange/task#GET)
     */
    PendingActions(serviceName) {
        let url = `/msServices/${serviceName}/exchange/task`;
        return this.client.request('GET', url);
    }
    /**
     * Exchange task details [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/exchange/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<MsServicesexchangeTask> {
      let url = `/msServices/${serviceName}/exchange/task/${id}`
  
      return this.client.request<MsServicesexchangeTask>('GET', url)
    }
    */
    /**
     * removeMfaOnAllUsers operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/removeMfaOnAllUsers#POST)
     */
    RemoveMfaOnAllAccounts(serviceName) {
        let url = `/msServices/${serviceName}/removeMfaOnAllUsers`;
        return this.client.request('POST', url);
    }
    /**
     * Sharepoint service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<MsServicesSharepointService> {
      let url = `/msServices/${serviceName}/sharepoint`
  
      return this.client.request<MsServicesSharepointService>('GET', url)
    }
    */
    /**
     * Sharepoint service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: MsServicesSharepointService): Promise<void> {
      let url = `/msServices/${serviceName}/sharepoint`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * billingMigrated operations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/billingMigrated#GET)
     */
    /*
    DetectsBillingTransitionStatusForTheService(serviceName: string): Promise<boolean> {
      let url = `/msServices/${serviceName}/sharepoint/billingMigrated`
  
      return this.client.request<boolean>('GET', url)
    }
    */
    /**
     * license operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/license#GET)
     */
    GetActiveLicensesForSpecificPeriodOfTime(period, serviceName, license) {
        let url = `/msServices/${serviceName}/sharepoint/license?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        if (license) {
            queryParams.set('license', license.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * restoreAdminRights operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/restoreAdminRights#POST)
     */
    RestoreAdministratorRights(serviceName) {
        let url = `/msServices/${serviceName}/sharepoint/restoreAdminRights`;
        return this.client.request('POST', url);
    }
    /**
     * List the msServices.sharepointTask objects [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/task#GET)
     */
    /*
    PendingActions(serviceName: string, _function?: string, status?: MsServicesTaskStatus): Promise<number[]> {
      let url = `/msServices/${serviceName}/sharepoint/task?`
  
      const queryParams = new QueryParams()
      if (_function) { queryParams.set('function', _function) }
      if (status) { queryParams.set('status', status.toString()) }
  
      return this.client.request<number[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Sharepoint task details [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sharepoint/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<MsServicessharepointTask> {
      let url = `/msServices/${serviceName}/sharepoint/task/${id}`
  
      return this.client.request<MsServicessharepointTask>('GET', url)
    }
    */
    /**
     * Sync service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<MsServicesSyncService> {
      let url = `/msServices/${serviceName}/sync`
  
      return this.client.request<MsServicesSyncService>('GET', url)
    }
    */
    /**
     * Sync service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync#DELETE)
     */
    DeleteSyncService(serviceName) {
        let url = `/msServices/${serviceName}/sync`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/changePassword#POST)
     */
    /*
    ChangeAccountPassword(password: string, serviceName: string): Promise<MsServicesTask> {
      let url = `/msServices/${serviceName}/sync/changePassword`
  
      return this.client.request<MsServicesTask>('POST', url, {password})
    }
    */
    /**
     * Temporary link to ADSync software executable [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/clientSoftwareURL#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<MsServicesActiveDirectorySyncClientUrl> {
      let url = `/msServices/${serviceName}/sync/clientSoftwareURL`
  
      return this.client.request<MsServicesActiveDirectorySyncClientUrl>('GET', url)
    }
    */
    /**
     * Temporary link to ADSync software executable [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/clientSoftwareURL#POST)
     */
    GenerateTemporaryLinkToADSyncSoftwareExecutable(serviceName) {
        let url = `/msServices/${serviceName}/sync/clientSoftwareURL`;
        return this.client.request('POST', url);
    }
    /**
     * license operations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/sync/license#GET)
     */
    /*
    GetActiveLicensesForSpecificPeriodOfTime(period: MsServicesLicensePeriod, serviceName: string, license?: MsServicesSyncLicense): Promise<MsServicesSyncDailyLicense[]> {
      let url = `/msServices/${serviceName}/sync/license?`
  
      const queryParams = new QueryParams()
      if (period) { queryParams.set('period', period.toString()) }
      if (license) { queryParams.set('license', license.toString()) }
  
      return this.client.request<MsServicesSyncDailyLicense[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * List the msServices.Task objects [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/task#GET)
     */
    /*
    PendingActions(serviceName: string, _function?: MsServicesTaskFunction, status?: MsServicesTaskStatus): Promise<number[]> {
      let url = `/msServices/${serviceName}/task?`
  
      const queryParams = new QueryParams()
      if (_function) { queryParams.set('function', _function.toString()) }
      if (status) { queryParams.set('status', status.toString()) }
  
      return this.client.request<number[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Active Directory task details [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<MsServicesTask> {
      let url = `/msServices/${serviceName}/task/${id}`
  
      return this.client.request<MsServicesTask>('GET', url)
    }
    */
    /**
     * List the msServices.upnSuffix objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix#GET)
     */
    ActiveDirectoryUPNSuffix(serviceName) {
        let url = `/msServices/${serviceName}/upnSuffix`;
        return this.client.request('GET', url);
    }
    /**
     * List the msServices.upnSuffix objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix#POST)
     */
    CreateNewUPNSuffix(serviceName, suffix) {
        let url = `/msServices/${serviceName}/upnSuffix`;
        return this.client.request('POST', url, { suffix });
    }
    /**
     * Active Directory UPN Suffix [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix/%7Bsuffix%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, suffix: string): Promise<MsServicesupnSuffix> {
      let url = `/msServices/${serviceName}/upnSuffix/${suffix}`
  
      return this.client.request<MsServicesupnSuffix>('GET', url)
    }
    */
    /**
     * Active Directory UPN Suffix [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/msServices/%7BserviceName%7D/upnSuffix/%7Bsuffix%7D#DELETE)
     */
    DeleteExistingUPNSuffix(serviceName, suffix) {
        let url = `/msServices/${serviceName}/upnSuffix/${suffix}`;
        return this.client.request('DELETE', url);
    }
}
exports.MsServices = MsServices;
//# sourceMappingURL=msServices.js.map